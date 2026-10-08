// Core State
let currentTab = 'weapons';
let currentOpenItem = null;

// Character Stats State Management
const charStats = JSON.parse(localStorage.getItem('erCharStats')) || {
    level: 1, str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10, spellStat: 'int'
};

function getModifier(score) {
    return Math.floor((score - 10) / 2);
}

function getProficiency(level) {
    return Math.ceil(level / 4) + 1;
}

function saveStats() {
    localStorage.setItem('erCharStats', JSON.stringify(charStats));
}

// Data Dictionaries for Sorting and Styling
const rarityWeights = {
    "common": 1, "uncommon": 2, "rare": 3, "very rare": 4, "legendary": 5, "unique": 6
};

const rarityColors = {
    "Uncommon": "text-rarity-uncommon border-rarity-uncommon",
    "Rare": "text-rarity-rare border-rarity-rare",
    "Very Rare": "text-rarity-very-rare border-rarity-very-rare",
    "Legendary": "text-rarity-legendary border-rarity-legendary",
    "Common": "text-rarity-common border-rarity-common"
};

const weaponTypeProperties = {
    "dagger": ["melee", "piercing", "finesse", "light", "non-colossal"],
    "handaxe": ["melee", "slashing", "light", "non-colossal"],
    "spear": ["melee", "piercing", "non-colossal"],
    "caestus": ["melee", "bludgeoning", "light", "non-colossal"],
    "claws": ["melee", "slashing", "light", "non-colossal"],
    "longsword": ["melee", "slashing", "non-colossal"],
    "shortsword": ["melee", "piercing", "finesse", "light", "non-colossal"],
    "scimitar": ["melee", "slashing", "finesse", "light", "non-colossal"],
    "katana": ["melee", "slashing", "finesse", "non-colossal"],
    "cleaver": ["melee", "slashing", "non-colossal"],
    "greatsword": ["melee", "slashing", "heavy", "non-colossal"],
    "ultra greatsword": ["melee", "slashing", "heavy", "colossal"],
    "rapier": ["melee", "piercing", "finesse", "non-colossal"],
    "twinblade": ["melee", "slashing", "non-colossal"],
    "battleaxe": ["melee", "slashing", "non-colossal"],
    "greataxe": ["melee", "slashing", "heavy", "non-colossal"],
    "flail": ["melee", "slashing", "non-colossal"],
    "maul": ["melee", "bludgeoning", "heavy", "non-colossal"],
    "warhammer": ["melee", "bludgeoning", "non-colossal"],
    "mace": ["melee", "bludgeoning", "non-colossal"],
    "colossal weapon": ["melee", "bludgeoning", "heavy", "colossal"],
    "lance": ["melee", "piercing", "reach", "non-colossal"],
    "halberd": ["melee", "slashing", "heavy", "reach", "non-colossal"],
    "pike": ["melee", "piercing", "heavy", "reach", "non-colossal"],
    "reaper": ["melee", "piercing", "finesse", "reach", "non-colossal"],
    "whip": ["melee", "slashing", "finesse", "reach", "non-colossal"],
    "shortbow": ["ranged", "piercing", "non-colossal"],
    "light crossbow": ["ranged", "piercing", "non-colossal"],
    "longbow": ["ranged", "piercing", "heavy", "non-colossal"],
    "greatbow": ["ranged", "piercing", "heavy", "colossal"],
    "heavy crossbow": ["ranged", "piercing", "heavy", "non-colossal"],
    "shield": ["shield", "non-heavy", "non-colossal"],
    "greatshield": ["shield", "heavy", "non-colossal"],
    "torch": ["melee", "fire", "non-colossal"],
    "glintstone staff": ["catalyst"],
    "sacred seal": ["catalyst"]
};

// Dice Engine & Parser
function logDiceRoll(title, resultStr, total, isCrit = false) {
    const logContent = document.getElementById('dice-log-content');
    if (!logContent) return;

    if (logContent.innerHTML.includes('Awaiting your command')) {
        logContent.innerHTML = '';
    }

    const entry = document.createElement('div');
    entry.className = 'log-entry';
    const highlightColor = isCrit ? '#7da36e' : '#d4af37';
    
    entry.innerHTML = `
        <div class="flex justify-between items-center mb-1">
            <span class="font-bold text-stone-300">${title}</span>
            <span style="color: ${highlightColor}; font-size: 1.1em; font-weight: bold;">${total}</span>
        </div>
        <div class="text-stone-500 text-xs">${resultStr}</div>
    `;
    
    logContent.appendChild(entry);
    logContent.scrollTop = logContent.scrollHeight;
}

window.executeRoll = function(diceStr, bonusStr, label) {
    const diceRegex = /(\d+)d(\d+)/g;
    let match;
    let total = 0;
    let rolls = [];
    
    while ((match = diceRegex.exec(diceStr)) !== null) {
        const count = parseInt(match[1]);
        const sides = parseInt(match[2]);
        for (let i = 0; i < count; i++) {
            const roll = Math.floor(Math.random() * sides) + 1;
            rolls.push(roll);
            total += roll;
        }
    }
    
    const bonus = bonusStr ? parseInt(bonusStr.replace('+', '')) : 0;
    total += bonus;
    
    const resultStr = `[${rolls.join(', ')}] ${bonus ? (bonus > 0 ? '+ ' + bonus : '- ' + Math.abs(bonus)) : ''}`;
    const isCrit = diceStr === '1d20' && rolls[0] === 20;
    
    logDiceRoll(label, resultStr, total, isCrit);
};

function parseDiceNotation(text) {
    if (!text) return "";
    let parsedText = text;
    let tokens = []; 
    
    const svgIcon = `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`;

    const avgDamageRegex = /\b\d+\s*\((\d+d\d+)([\+\-]\d+)?\)\s*([a-zA-Z]+)\s*damage\b/gi;
    parsedText = parsedText.replace(avgDamageRegex, (match, dice, bonus, type, offset, string) => {
        const before = string.substring(0, offset);
        if (before.lastIndexOf('<') > before.lastIndexOf('>')) return match; 

        const cleanBonus = bonus ? bonus : '';
        const safeLabel = `${type} damage`.replace(/'/g, "\\'");
        const btnHtml = `<button class="roll-btn" onclick="executeRoll('${dice}', '${cleanBonus}', '${safeLabel}')" title="Roll ${dice}${cleanBonus}">${svgIcon} ${match}</button>`;
        
        const tokenId = `__DICE_TOKEN_${tokens.length}__`;
        tokens.push(btnHtml);
        return tokenId;
    });

    const simpleDiceRegex = /(?<!\()\b(\d+d\d+)([\+\-]\d+)?\b(?!\))/gi;
    parsedText = parsedText.replace(simpleDiceRegex, (match, dice, bonus, offset, string) => {
        const before = string.substring(0, offset);
        if (before.lastIndexOf('<') > before.lastIndexOf('>')) return match; 
        
        const cleanBonus = bonus ? bonus : '';
        const btnHtml = `<button class="roll-btn" onclick="executeRoll('${dice}', '${cleanBonus}', 'Roll')" title="Roll ${match}">${svgIcon} ${match}</button>`;
        
        const tokenId = `__DICE_TOKEN_${tokens.length}__`;
        tokens.push(btnHtml);
        return tokenId;
    });

    tokens.forEach((html, index) => {
        parsedText = parsedText.replace(`__DICE_TOKEN_${index}__`, html);
    });

    return parsedText;
}

function isWeaponCompatibleWithAsh(weaponType, compatibilityStr) {
    const compLower = compatibilityStr.toLowerCase();
    if (compLower.includes("none") || compLower.includes("unique")) return false;
    if (compLower.includes(weaponType.toLowerCase())) return true;

    const props = weaponTypeProperties[weaponType.toLowerCase()];
    if (!props) return false;

    const conditions = compLower.replace(/ or /g, ',').split(',').map(s => s.trim());
    const isPropertyBased = conditions.some(c => ["melee", "ranged", "shield", "shields only"].includes(c));
    
    if (isPropertyBased) {
        return conditions.every(cond => {
            if (cond === "shields only" || cond === "shield") return props.includes("shield");
            if (cond === "melee") return props.includes("melee");
            if (cond === "ranged") return props.includes("ranged");
            if (cond.startsWith("non-")) return !props.includes(cond.replace("non-", ""));
            return props.includes(cond);
        });
    }
    return false;
}

function linkifyText(text) {
    if (!text) return "";
    let linkedText = text;
    
    const safeWeapons = typeof weapons !== 'undefined' ? weapons : [];
    const safeAshes = typeof ashesOfWar !== 'undefined' ? ashesOfWar : [];
    const safeSpells = typeof spells !== 'undefined' ? spells : [];
    const safeWondrous = typeof wondrousItems !== 'undefined' ? wondrousItems : [];
    const safeBooks = typeof books !== 'undefined' ? books : [];
    
    const linkItems = [];
    
    // Helper function to safely escape regex special characters (like ! or [ ])
    const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    safeSpells.forEach(spell => {
        const escapedName = escapeRegExp(spell.name);
        const regex = new RegExp(`(?<=\\W|^)${escapedName}(?=\\W|$)`, "gi");
        if (regex.test(linkedText)) {
            const safeName = spell.name.replace(/'/g, "\\'");
            linkItems.push({ name: spell.name, replacement: `<span onclick="jumpToSpell('${safeName}')" class="linkified-text" title="View Spell Details">$&</span>`});
        }
    });

    safeAshes.forEach(ash => {
        const escapedName = escapeRegExp(ash.name);
        const regex = new RegExp(`(?<=\\W|^)${escapedName}(?=\\W|$)`, "gi");
        if (regex.test(linkedText)) {
            const safeName = ash.name.replace(/'/g, "\\'");
            linkItems.push({ name: ash.name, replacement: `<span onclick="jumpToAsh('${safeName}')" class="linkified-text" title="View Ash of War Details">$&</span>`});
        }
    });

    safeWeapons.forEach(weapon => {
        const escapedName = escapeRegExp(weapon.name);
        const regex = new RegExp(`(?<=\\W|^)${escapedName}(?=\\W|$)`, "gi");
        if (regex.test(linkedText)) {
            const safeName = weapon.name.replace(/'/g, "\\'");
            linkItems.push({ name: weapon.name, replacement: `<span onclick="jumpToWeapon('${safeName}')" class="linkified-text" title="View Weapon Details">$&</span>`});
        }
    });

    safeWondrous.forEach(item => {
        const escapedName = escapeRegExp(item.name);
        const regex = new RegExp(`(?<=\\W|^)${escapedName}(?=\\W|$)`, "gi");
        if (regex.test(linkedText)) {
            const safeName = item.name.replace(/'/g, "\\'");
            linkItems.push({ name: item.name, replacement: `<span onclick="jumpToWondrous('${safeName}')" class="linkified-text" title="View Item Details">$&</span>`});
        }
    });

    safeBooks.forEach(book => {
        const escapedName = escapeRegExp(book.name);
        const regex = new RegExp(`(?<=\\W|^)${escapedName}(?=\\W|$)`, "gi");
        if (regex.test(linkedText)) {
            const safeName = book.name.replace(/'/g, "\\'");
            linkItems.push({ name: book.name, replacement: `<span onclick="jumpToBook('${safeName}')" class="linkified-text" title="View Book Details">$&</span>`});
        }
    });

    linkItems.sort((a, b) => b.name.length - a.name.length);
    linkItems.forEach(item => {
        const escapedName = escapeRegExp(item.name);
        const regex = new RegExp(`(?<=\\W|^)${escapedName}(?=\\W|$)`, "gi");
        linkedText = linkedText.replace(regex, (match, offset, string) => {
            const before = string.substring(0, offset);
            if (before.includes('<span') && !before.substring(before.lastIndexOf('<span')).includes('</span>')) return match; 
            return item.replacement.replace('$&', match);
        });
    });

    return linkedText;
}

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const gridContainer = document.getElementById('gridContainer');
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    
    const filterLetter = document.getElementById('filterLetter');
    const filterType = document.getElementById('filterType');
    const filterRarityUnique = document.getElementById('filterRarityUnique');
    const filterAffinity = document.getElementById('filterAffinity');
    const filterSchool = document.getElementById('filterSchool');
    const filterLevel = document.getElementById('filterLevel');
    const resetFiltersBtn = document.getElementById('resetFilters');
    const itemCount = document.getElementById('itemCount');
    
    const tabWeaponsBtn = document.getElementById('tabWeapons');
    const tabAshesBtn = document.getElementById('tabAshes');
    const tabSpellsBtn = document.getElementById('tabSpells');
    const tabWondrousBtn = document.getElementById('tabWondrous');
    const tabBooksBtn = document.getElementById('tabBooks');

    const statsSidebar = document.getElementById('stats-sidebar');
    const toggleStatsBtn = document.getElementById('toggleStatsBtn');
    const closeStatsBtn = document.getElementById('closeStatsBtn');
    const diceLogHeader = document.getElementById('dice-log-header');
    const diceLogContainer = document.getElementById('dice-log');
    const toggleLogIcon = document.getElementById('toggle-log-icon');

    const statInputs = ['level', 'str', 'dex', 'con', 'int', 'wis', 'cha'];
    statInputs.forEach(stat => {
        const el = document.getElementById(stat === 'level' ? 'char-level' : `stat-${stat}`);
        if (el) {
            el.value = charStats[stat];
            el.addEventListener('change', (e) => {
                charStats[stat] = parseInt(e.target.value) || 10;
                saveStats();
                if (currentOpenItem) openModal(currentOpenItem);
            });
        }
    });

    const spellStatDropdown = document.getElementById('spellcasting-stat');
    if (spellStatDropdown) {
        spellStatDropdown.value = charStats.spellStat;
        spellStatDropdown.addEventListener('change', (e) => {
            charStats.spellStat = e.target.value;
            saveStats();
            if (currentOpenItem) openModal(currentOpenItem); 
        });
    }

    const modal = document.getElementById('itemModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const noResults = document.getElementById('noResults');

    if (toggleStatsBtn) toggleStatsBtn.addEventListener('click', () => statsSidebar.classList.add('open'));
    if (closeStatsBtn) closeStatsBtn.addEventListener('click', () => statsSidebar.classList.remove('open'));
    
    if (diceLogHeader) {
        diceLogHeader.addEventListener('click', () => {
            diceLogContainer.classList.toggle('minimized');
            toggleLogIcon.innerText = diceLogContainer.classList.contains('minimized') ? '[+]' : '[-]';
            if (!diceLogContainer.classList.contains('minimized')) {
                const content = document.getElementById('dice-log-content');
                content.scrollTop = content.scrollHeight;
            }
        });
    }

    if (filterLetter && filterLetter.options.length <= 1) {
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letter => {
            filterLetter.innerHTML += `<option value="${letter.toLowerCase()}">${letter}</option>`;
        });
    }

    if (tabWeaponsBtn) tabWeaponsBtn.addEventListener('click', () => switchTab('weapons'));
    if (tabAshesBtn) tabAshesBtn.addEventListener('click', () => switchTab('ashes'));
    if (tabSpellsBtn) tabSpellsBtn.addEventListener('click', () => switchTab('spells'));
    if (tabWondrousBtn) tabWondrousBtn.addEventListener('click', () => switchTab('wondrous'));
    if (tabBooksBtn) tabBooksBtn.addEventListener('click', () => switchTab('books'));

    [searchInput, sortSelect, filterLetter, filterType, filterRarityUnique, filterAffinity, filterSchool, filterLevel]
        .forEach(el => {
            if (el) {
                el.addEventListener('input', filterAndSort);
                el.addEventListener('change', filterAndSort);
            }
        });

    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            searchInput.value = '';
            sortSelect.value = 'alpha_asc';
            filterLetter.value = 'all';
            filterType.value = 'all';
            filterRarityUnique.value = 'all';
            filterAffinity.value = 'all';
            if (filterSchool) filterSchool.value = 'all';
            if (filterLevel) filterLevel.value = 'all';
            filterAndSort();
        });
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) closeModal();
    });

    window.jumpToWeapon = function(weaponName) {
        closeModal();
        switchTab('weapons');
        searchInput.value = weaponName;
        filterAndSort();
        const weapon = typeof weapons !== 'undefined' ? weapons.find(w => w.name === weaponName) : null;
        if (weapon) setTimeout(() => openModal(weapon), 150); 
    };

    window.jumpToAsh = function(ashName) {
        closeModal();
        switchTab('ashes');
        searchInput.value = ashName;
        filterAndSort();
        const ash = typeof ashesOfWar !== 'undefined' ? ashesOfWar.find(a => a.name === ashName) : null;
        if (ash) setTimeout(() => openModal(ash), 150);
    };

    window.jumpToSpell = function(spellName) {
        closeModal();
        switchTab('spells');
        searchInput.value = spellName;
        filterAndSort();
        const spell = typeof spells !== 'undefined' ? spells.find(s => s.name === spellName) : null;
        if (spell) setTimeout(() => openModal(spell), 150);
    };

    window.jumpToWondrous = function(itemName) {
        closeModal();
        switchTab('wondrous');
        searchInput.value = itemName;
        filterAndSort();
        const item = typeof wondrousItems !== 'undefined' ? wondrousItems.find(w => w.name === itemName) : null;
        if (item) setTimeout(() => openModal(item), 150);
    };

    window.jumpToBook = function(bookName) {
        closeModal();
        switchTab('books');
        searchInput.value = bookName;
        filterAndSort();
        const book = typeof books !== 'undefined' ? books.find(b => b.name === bookName) : null;
        if (book) setTimeout(() => openModal(book), 150);
    };

    function switchTab(tab) {
        currentTab = tab;
        
        if (tabWeaponsBtn) tabWeaponsBtn.className = tab === 'weapons' ? 'pb-1 transition-colors tab-active' : 'pb-1 transition-colors tab-inactive';
        if (tabAshesBtn) tabAshesBtn.className = tab === 'ashes' ? 'pb-1 transition-colors tab-active' : 'pb-1 transition-colors tab-inactive';
        if (tabSpellsBtn) tabSpellsBtn.className = tab === 'spells' ? 'pb-1 transition-colors tab-active' : 'pb-1 transition-colors tab-inactive';
        if (tabWondrousBtn) tabWondrousBtn.className = tab === 'wondrous' ? 'pb-1 transition-colors tab-active' : 'pb-1 transition-colors tab-inactive';
        if (tabBooksBtn) tabBooksBtn.className = tab === 'books' ? 'pb-1 transition-colors tab-active' : 'pb-1 transition-colors tab-inactive';
        
        buildControls();
        filterAndSort();
    }

    function buildControls() {
        if (!sortSelect || !filterType || !filterRarityUnique || !filterAffinity) return;

        sortSelect.innerHTML = `
            <option value="alpha_asc">Alphabetical (A-Z)</option>
            <option value="alpha_desc">Alphabetical (Z-A)</option>
        `;

        if (currentTab === 'weapons') {
            sortSelect.innerHTML += `
                <option value="rarity_desc">Rarity (High to Low)</option>
                <option value="rarity_asc">Rarity (Low to High)</option>
                <option value="type_asc">Weapon Category (A-Z)</option>
                <option value="affinity_asc">Affinity (A-Z)</option>
            `;
            
            filterType.classList.remove('hidden');
            filterRarityUnique.classList.remove('hidden');
            filterAffinity.classList.remove('hidden');
            if (filterSchool) filterSchool.classList.add('hidden');
            if (filterLevel) filterLevel.classList.add('hidden');
            
            filterType.innerHTML = '<option value="all">Any Category</option>';
            if (typeof weapons !== 'undefined') {
                [...new Set(weapons.map(w => w.type))].sort().forEach(t => {
                    filterType.innerHTML += `<option value="${t.toLowerCase()}">${t}</option>`;
                });
            }
            
            filterRarityUnique.innerHTML = `
                <option value="all">Any Rarity / Uniqueness</option>
                <optgroup label="By Uniqueness">
                    <option value="ashable">Ashable (Standard Skill)</option>
                    <option value="unique">Unique Skill</option>
                </optgroup>
                <optgroup label="By Rarity">
                    <option value="common">Common</option>
                    <option value="uncommon">Uncommon</option>
                    <option value="rare">Rare</option>
                    <option value="very rare">Very Rare</option>
                    <option value="legendary">Legendary</option>
                </optgroup>
            `;

        } else if (currentTab === 'ashes') {
            sortSelect.innerHTML += `
                <option value="cost_desc">SP Cost (High to Low)</option>
                <option value="cost_asc">SP Cost (Low to High)</option>
                <option value="affinity_asc">Affinity (A-Z)</option>
                <option value="compat_asc">Compatibility (A-Z)</option>
            `;
            
            filterType.classList.remove('hidden');
            filterRarityUnique.classList.remove('hidden');
            filterAffinity.classList.remove('hidden');
            if (filterSchool) filterSchool.classList.add('hidden');
            if (filterLevel) filterLevel.classList.add('hidden');
            
            filterType.innerHTML = '<option value="all">Any Compatibility</option>';
            if (typeof ashesOfWar !== 'undefined') {
                const allTypes = new Set();
                ashesOfWar.forEach(ash => {
                    if (!ash.compatibility.toLowerCase().includes('unique') && ash.compatibility !== 'None') {
                        const conditions = ash.compatibility.replace(/ or /g, ',').split(',').map(s => s.trim());
                        conditions.forEach(cond => {
                            if (!["melee", "ranged", "shield", "shields only"].includes(cond.toLowerCase()) && !cond.toLowerCase().startsWith("non-")) {
                                allTypes.add(cond);
                            }
                        });
                    }
                });
                [...allTypes].sort().forEach(t => {
                    filterType.innerHTML += `<option value="${t.toLowerCase()}">${t}</option>`;
                });
            }
            
            filterRarityUnique.innerHTML = `
                <option value="all">Any Uniqueness</option>
                <option value="unique">Unique Skill</option>
                <option value="non-unique">Ashable (Non-Unique)</option>
            `;

        } else if (currentTab === 'spells') {
            sortSelect.innerHTML += `
                <option value="level_asc">Spell Level (Low to High)</option>
                <option value="level_desc">Spell Level (High to Low)</option>
                <option value="type_asc">Spell Type (A-Z)</option>
                <option value="school_asc">School of Magic (A-Z)</option>
            `;
            
            filterType.classList.remove('hidden');
            filterRarityUnique.classList.add('hidden');
            filterAffinity.classList.add('hidden');
            if (filterSchool) filterSchool.classList.remove('hidden');
            if (filterLevel) filterLevel.classList.remove('hidden');
            
            filterType.innerHTML = `
                <option value="all">Any Spell Type</option>
                <option value="sorcery">Sorcery</option>
                <option value="incantation">Incantation</option>
            `;
            
            if (filterSchool) filterSchool.innerHTML = '<option value="all">Any School of Magic</option>';
            if (filterLevel) filterLevel.innerHTML = '<option value="all">Any Spell Level</option>';
            
            if (typeof spells !== 'undefined') {
                if (filterSchool) {
                    [...new Set(spells.map(s => s.school))].sort().forEach(s => {
                        filterSchool.innerHTML += `<option value="${s.toLowerCase()}">${s}</option>`;
                    });
                }
                if (filterLevel) {
                    let levels = [...new Set(spells.map(s => s.level))].sort((a,b) => {
                        if (a === 'Cantrip') return -1;
                        if (b === 'Cantrip') return 1;
                        return parseInt(a) - parseInt(b);
                    });
                    levels.forEach(l => {
                        const disp = l === 'Cantrip' ? 'Cantrip' : `Level ${l}`;
                        filterLevel.innerHTML += `<option value="${l.toString().toLowerCase()}">${disp}</option>`;
                    });
                }
            }
        } else if (currentTab === 'wondrous') {
            sortSelect.innerHTML += `
                <option value="rarity_desc">Rarity (High to Low)</option>
                <option value="rarity_asc">Rarity (Low to High)</option>
                <option value="type_asc">Item Type (A-Z)</option>
            `;
            
            filterType.classList.remove('hidden');
            filterRarityUnique.classList.remove('hidden');
            filterAffinity.classList.add('hidden');
            if (filterSchool) filterSchool.classList.add('hidden');
            if (filterLevel) filterLevel.classList.add('hidden');
            
            filterType.innerHTML = '<option value="all">Any Item Type</option>';
            if (typeof wondrousItems !== 'undefined') {
                [...new Set(wondrousItems.map(w => w.type))].sort().forEach(t => {
                    filterType.innerHTML += `<option value="${t.toLowerCase()}">${t}</option>`;
                });
            }
            
            filterRarityUnique.innerHTML = `
                <option value="all">Any Rarity</option>
                <option value="common">Common</option>
                <option value="uncommon">Uncommon</option>
                <option value="rare">Rare</option>
                <option value="very rare">Very Rare</option>
                <option value="legendary">Legendary</option>
            `;
            
        } else if (currentTab === 'books') {
            sortSelect.innerHTML += `
                <option value="type_asc">Type (Cookbooks vs Spellbooks)</option>
                <option value="type_desc">Type (Spellbooks vs Cookbooks)</option>
            `;
            
            filterType.classList.remove('hidden');
            filterRarityUnique.classList.add('hidden');
            filterAffinity.classList.add('hidden');
            if (filterSchool) filterSchool.classList.add('hidden');
            if (filterLevel) filterLevel.classList.add('hidden');
            
            filterType.innerHTML = `
                <option value="all">All Books & Recipes</option>
                <option value="cookbook">Cookbooks</option>
                <option value="spellbook">Spellbooks</option>
            `;
        }
    }

    function filterAndSort() {
        if (!gridContainer || !searchInput) return;

        const query = searchInput.value.toLowerCase();
        const sortVal = sortSelect.value;
        const letterVal = filterLetter.value;
        
        let filtered = [];

        if (currentTab === 'weapons' && typeof weapons !== 'undefined') {
            const typeVal = filterType.value;
            const rarityVal = filterRarityUnique.value;
            const affinVal = filterAffinity.value;

            filtered = weapons.filter(w => {
                let match = w.name.toLowerCase().includes(query) || w.type.toLowerCase().includes(query) || (w.skill && w.skill.name.toLowerCase().includes(query));
                if (!match) return false;
                if (letterVal !== 'all' && !w.name.toLowerCase().startsWith(letterVal)) return false;
                if (typeVal !== 'all' && w.type.toLowerCase() !== typeVal) return false;
                
                if (rarityVal !== 'all') {
                    const isUnique = !['common', 'uncommon'].includes(w.rarity.toLowerCase());
                    if (rarityVal === 'ashable' && isUnique) return false;
                    if (rarityVal === 'unique' && !isUnique) return false;
                    if (rarityVal !== 'ashable' && rarityVal !== 'unique' && w.rarity.toLowerCase() !== rarityVal) return false;
                }
                
                if (affinVal !== 'all' && w.affinity.toLowerCase() !== affinVal) return false;
                return true;
            });

            filtered.sort((a, b) => {
                if (sortVal === 'alpha_asc') return a.name.localeCompare(b.name);
                if (sortVal === 'alpha_desc') return b.name.localeCompare(a.name);
                if (sortVal === 'rarity_desc') return (rarityWeights[b.rarity.toLowerCase()] || 0) - (rarityWeights[a.rarity.toLowerCase()] || 0);
                if (sortVal === 'rarity_asc') return (rarityWeights[a.rarity.toLowerCase()] || 0) - (rarityWeights[b.rarity.toLowerCase()] || 0);
                if (sortVal === 'type_asc') return a.type.localeCompare(b.type);
                if (sortVal === 'affinity_asc') return a.affinity.localeCompare(b.affinity);
                return 0;
            });

        } else if (currentTab === 'ashes' && typeof ashesOfWar !== 'undefined') {
            const typeVal = filterType.value;
            const uniqueVal = filterRarityUnique.value;
            const affinVal = filterAffinity.value;

            filtered = ashesOfWar.filter(a => {
                let match = a.name.toLowerCase().includes(query) || a.compatibility.toLowerCase().includes(query) || a.description.toLowerCase().includes(query);
                if (!match) return false;
                if (letterVal !== 'all' && !a.name.toLowerCase().startsWith(letterVal)) return false;
                if (typeVal !== 'all' && !isWeaponCompatibleWithAsh(typeVal, a.compatibility)) return false;
                
                if (uniqueVal !== 'all') {
                    const isUnique = a.compatibility.toLowerCase().includes('unique');
                    if (uniqueVal === 'unique' && !isUnique) return false;
                    if (uniqueVal === 'non-unique' && isUnique) return false;
                }
                if (affinVal !== 'all' && a.affinity.toLowerCase() !== affinVal) return false;
                return true;
            });

            filtered.sort((a, b) => {
                if (sortVal === 'alpha_asc') return a.name.localeCompare(b.name);
                if (sortVal === 'alpha_desc') return b.name.localeCompare(a.name);
                if (sortVal === 'cost_desc') return b.sp - a.sp;
                if (sortVal === 'cost_asc') return a.sp - b.sp;
                if (sortVal === 'compat_asc') return a.compatibility.localeCompare(b.compatibility);
                if (sortVal === 'affinity_asc') return a.affinity.localeCompare(b.affinity);
                return 0;
            });

        } else if (currentTab === 'spells' && typeof spells !== 'undefined') {
            const typeVal = filterType.value;
            const schoolVal = filterSchool ? filterSchool.value : 'all';
            const levelVal = filterLevel ? filterLevel.value : 'all';

            filtered = spells.filter(s => {
                let match = s.name.toLowerCase().includes(query) || s.school.toLowerCase().includes(query) || s.description.toLowerCase().includes(query);
                if (!match) return false;
                if (letterVal !== 'all' && !s.name.toLowerCase().startsWith(letterVal)) return false;
                if (typeVal !== 'all' && s.type.toLowerCase() !== typeVal) return false;
                if (schoolVal !== 'all' && s.school.toLowerCase() !== schoolVal) return false;
                if (levelVal !== 'all' && s.level.toString().toLowerCase() !== levelVal) return false;
                return true;
            });

            filtered.sort((a, b) => {
                if (sortVal === 'alpha_asc') return a.name.localeCompare(b.name);
                if (sortVal === 'alpha_desc') return b.name.localeCompare(a.name);
                if (sortVal === 'type_asc') return a.type.localeCompare(b.type);
                if (sortVal === 'school_asc') return a.school.localeCompare(b.school);
                if (sortVal === 'level_asc' || sortVal === 'level_desc') {
                    const lvlA = a.level === 'Cantrip' ? -1 : parseInt(a.level);
                    const lvlB = b.level === 'Cantrip' ? -1 : parseInt(b.level);
                    return sortVal === 'level_asc' ? lvlA - lvlB : lvlB - lvlA;
                }
                return 0;
            });
            
        } else if (currentTab === 'wondrous' && typeof wondrousItems !== 'undefined') {
            const typeVal = filterType.value;
            const rarityVal = filterRarityUnique.value;

            filtered = wondrousItems.filter(w => {
                let match = w.name.toLowerCase().includes(query) || w.type.toLowerCase().includes(query) || w.description.toLowerCase().includes(query);
                if (!match) return false;
                if (letterVal !== 'all' && !w.name.toLowerCase().startsWith(letterVal)) return false;
                if (typeVal !== 'all' && w.type.toLowerCase() !== typeVal) return false;
                if (rarityVal !== 'all' && w.rarity.toLowerCase() !== rarityVal) return false;
                return true;
            });

            filtered.sort((a, b) => {
                if (sortVal === 'alpha_asc') return a.name.localeCompare(b.name);
                if (sortVal === 'alpha_desc') return b.name.localeCompare(a.name);
                if (sortVal === 'rarity_desc') return (rarityWeights[b.rarity.toLowerCase()] || 0) - (rarityWeights[a.rarity.toLowerCase()] || 0);
                if (sortVal === 'rarity_asc') return (rarityWeights[a.rarity.toLowerCase()] || 0) - (rarityWeights[b.rarity.toLowerCase()] || 0);
                if (sortVal === 'type_asc') return a.type.localeCompare(b.type);
                return 0;
            });
            
        } else if (currentTab === 'books' && typeof books !== 'undefined') {
            const typeVal = filterType.value;

            filtered = books.filter(b => {
                let match = b.name.toLowerCase().includes(query) || b.description.toLowerCase().includes(query);
                if (!match) return false;
                if (letterVal !== 'all' && !b.name.toLowerCase().startsWith(letterVal)) return false;
                if (typeVal !== 'all' && b.type.toLowerCase() !== typeVal) return false;
                return true;
            });

            filtered.sort((a, b) => {
                if (sortVal === 'alpha_asc') return a.name.localeCompare(b.name);
                if (sortVal === 'alpha_desc') return b.name.localeCompare(a.name);
                if (sortVal === 'type_asc') return a.type.localeCompare(b.type) || a.name.localeCompare(b.name);
                if (sortVal === 'type_desc') return b.type.localeCompare(a.type) || a.name.localeCompare(b.name);
                return 0;
            });
        }

        if (itemCount) {
            const typeName = currentTab === 'weapons' ? 'Armaments' : currentTab === 'ashes' ? 'Ashes of War' : currentTab === 'wondrous' ? 'Relics & Items' : currentTab === 'books' ? 'Tomes & Recipes' : 'Spells';
            itemCount.innerHTML = `Showing <span class="text-er-gold font-bold text-sm">${filtered.length}</span> ${typeName}`;
        }

        renderItems(filtered);
    }

    function renderItems(items) {
        gridContainer.innerHTML = '';
        
        if (items.length === 0) {
            if (noResults) noResults.classList.remove('hidden');
            return;
        } else {
            if (noResults) noResults.classList.add('hidden');
        }

        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'item-card bg-er-panel border border-er-border rounded-lg p-5 cursor-pointer flex flex-col h-full relative overflow-hidden';
            card.style.animation = `fadeIn 0.3s ease-out ${index * 0.02}s forwards`;
            card.style.opacity = '0';
            card.onclick = () => openModal(item);

            let topTags = '';
            let titleColor = 'text-er-gold';
            let bottomInfo = '';
            
            if (currentTab === 'weapons') {
                topTags = `
                    <span class="text-xs font-semibold uppercase tracking-wider ${rarityColors[item.rarity]}">${item.rarity}</span>
                    <span class="text-xs text-stone-500 font-semibold uppercase tracking-wider">${item.type}</span>
                `;
                
                let matchedSkill = item.skill;
                if (matchedSkill && typeof ashesOfWar !== 'undefined') {
                    const foundAsh = ashesOfWar.find(a => a.name === matchedSkill.name);
                    if (foundAsh) {
                        matchedSkill = { ...matchedSkill, desc: foundAsh.description, sp: foundAsh.sp };
                    }
                }

                const isUnique = !['common', 'uncommon'].includes(item.rarity.toLowerCase());
                const skillColorClass = isUnique ? 'text-er-gold' : 'text-stone-300';

                bottomInfo = `
                    <div class="mt-auto pt-4 border-t border-stone-800 flex flex-col gap-2 text-xs">
                        <div class="flex justify-between items-center">
                            <span class="text-stone-500 uppercase tracking-widest font-semibold">Affinity</span>
                            <span class="text-stone-300 font-bold">${item.affinity}</span>
                        </div>
                        ${matchedSkill ? `
                        <div class="flex justify-between items-center">
                            <span class="text-stone-500 uppercase tracking-widest font-semibold">Skill</span>
                            <span class="${skillColorClass} font-bold text-right ml-4 truncate" title="${isUnique ? 'Unique Skill' : 'Ashable Skill'}">${matchedSkill.name}</span>
                        </div>
                        ` : `
                        <div class="flex justify-between items-center">
                             <span class="text-stone-500 uppercase tracking-widest font-semibold">Skill</span>
                             <span class="text-stone-500 font-bold text-right ml-4">No Skill</span>
                        </div>
                        `}
                    </div>
                `;
            } else if (currentTab === 'ashes') {
                const isUnique = item.compatibility.toLowerCase().includes('unique');
                topTags = `
                    <span class="text-xs font-semibold uppercase tracking-wider ${isUnique ? 'text-rarity-very-rare' : 'text-stone-400'}">${isUnique ? 'Unique Skill' : 'Ash of War'}</span>
                    <span class="text-xs bg-er-dark border border-er-border px-2 py-0.5 rounded text-stone-300 font-bold">${item.sp} SP</span>
                `;
                bottomInfo = `
                    <div class="mt-auto pt-4 border-t border-stone-800 flex flex-col gap-2 text-xs">
                        <div class="flex justify-between items-center">
                            <span class="text-stone-500 uppercase tracking-widest font-semibold">Affinity</span>
                            <span class="text-stone-300 font-bold">${item.affinity}</span>
                        </div>
                    </div>
                `;
            } else if (currentTab === 'spells') {
                const isSorcery = item.type.toLowerCase() === 'sorcery';
                titleColor = isSorcery ? 'text-magic-sorcery' : 'text-magic-incantation';
                const lvlText = item.level === 'Cantrip' ? 'Cantrip' : `Level ${item.level}`;
                topTags = `
                    <span class="text-xs font-semibold uppercase tracking-wider ${titleColor}">${item.type}</span>
                    <span class="text-xs text-stone-400 font-bold bg-er-dark px-2 py-0.5 rounded border border-er-border">${lvlText}</span>
                `;
                bottomInfo = `
                    <div class="mt-auto pt-4 border-t border-stone-800 flex justify-between items-center text-xs">
                        <span class="text-stone-500 uppercase tracking-widest font-semibold">School</span>
                        <span class="text-stone-300 font-bold">${item.school}</span>
                    </div>
                `;
            } else if (currentTab === 'wondrous') {
                topTags = `
                    <span class="text-xs font-semibold uppercase tracking-wider ${rarityColors[item.rarity]}">${item.rarity}</span>
                    <span class="text-xs text-stone-500 font-semibold uppercase tracking-wider">${item.type}</span>
                `;
            } else if (currentTab === 'books') {
                const isCook = item.type.toLowerCase() === 'cookbook';
                titleColor = isCook ? 'text-orange-400' : 'text-purple-400';
                topTags = `
                    <span class="text-xs font-semibold uppercase tracking-wider ${titleColor}">${item.type}</span>
                    <span class="text-xs font-semibold uppercase tracking-wider ${rarityColors[item.rarity]}">${item.rarity}</span>
                `;
            }

            card.innerHTML = `
                <div class="flex justify-between items-start mb-3">
                    ${topTags}
                </div>
                <h3 class="text-xl font-serif font-bold ${titleColor} mb-2 leading-tight">${item.name}</h3>
                <div class="flex-grow"></div>
                ${bottomInfo}
            `;
            gridContainer.appendChild(card);
        });
    }

    function openModal(item) {
        if (!modal) return;
        currentOpenItem = item;
        
        const titleEl = document.getElementById('modalTitle');
        const dynamicStatsEl = document.getElementById('modalDynamicStats');
        titleEl.textContent = item.name;
        titleEl.className = 'text-3xl font-serif font-bold mb-2'; 
        dynamicStatsEl.innerHTML = ''; 

        const tags = ['modalLevel', 'modalType', 'modalRarity', 'modalAffinity', 'modalSchool'];
        tags.forEach(t => { if(document.getElementById(t)) document.getElementById(t).classList.add('hidden'); });
        
        ['modalSpellStats', 'modalDescription', 'modalSpellDescription', 'modalPassiveContainer', 'modalSkillContainer'].forEach(id => {
            if(document.getElementById(id)) document.getElementById(id).classList.add('hidden');
        });

        const spellStatScore = charStats[charStats.spellStat] || 10;
        const spellMod = getModifier(spellStatScore);
        const profBonus = getProficiency(charStats.level);
        const spellSaveDC = 8 + profBonus + spellMod;
        const spellAttack = (profBonus + spellMod >= 0) ? `+${profBonus + spellMod}` : `${profBonus + spellMod}`;
        
        const getMeleeAtkBonus = (affinity) => {
            let score = 10;
            switch(affinity.toLowerCase()) {
                case 'strength': score = charStats.str; break;
                case 'dexterity': score = charStats.dex; break;
                case 'intelligence': score = charStats.int; break;
                case 'wisdom': score = charStats.wis; break;
                case 'charisma': score = charStats.cha; break;
                default: score = Math.max(charStats.str, charStats.dex);
            }
            const mod = getModifier(score);
            const total = profBonus + mod;
            return total >= 0 ? `+${total}` : `${total}`;
        };

        if (currentTab === 'weapons') {
            titleEl.classList.add('text-er-gold');
            
            const atkBonus = getMeleeAtkBonus(item.affinity);
            dynamicStatsEl.innerHTML = `
                <div class="flex gap-4 text-sm bg-er-panel border border-stone-700 rounded p-2 text-stone-300">
                    <button class="roll-btn" onclick="executeRoll('1d20', '${atkBonus}', 'Weapon Attack (${item.affinity})')" title="Roll Attack">
                        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                        Attack: ${atkBonus}
                    </button>
                </div>
            `;

            const typeEl = document.getElementById('modalType');
            typeEl.textContent = item.type;
            typeEl.className = 'bg-er-panel px-3 py-1 rounded text-stone-300 border border-stone-700';
            
            const rarEl = document.getElementById('modalRarity');
            rarEl.textContent = item.rarity;
            rarEl.className = `px-3 py-1 rounded border bg-er-panel font-semibold ${rarityColors[item.rarity] || 'text-stone-300 border-stone-700'}`;
            
            const affEl = document.getElementById('modalAffinity');
            affEl.textContent = item.affinity;
            
            typeEl.classList.remove('hidden');
            rarEl.classList.remove('hidden');
            affEl.classList.remove('hidden');
            
            const descEl = document.getElementById('modalDescription');
            descEl.innerHTML = parseDiceNotation(linkifyText(item.description));
            descEl.classList.remove('hidden');
            
            if (item.passive) {
                document.getElementById('modalPassiveTitle').textContent = "Passive Effect";
                document.getElementById('modalPassive').innerHTML = parseDiceNotation(linkifyText(item.passive));
                document.getElementById('modalPassiveContainer').classList.remove('hidden');
            }
            
            let matchedSkill = item.skill;
            if (matchedSkill && typeof ashesOfWar !== 'undefined') {
                const foundAsh = ashesOfWar.find(a => a.name === matchedSkill.name);
                if (foundAsh) {
                    matchedSkill = { ...matchedSkill, desc: foundAsh.description, sp: foundAsh.sp };
                }
            }

            if (matchedSkill) {
                const safeAshName = matchedSkill.name.replace(/'/g, "\\'");
                document.getElementById('modalSkillName').innerHTML = `<span onclick="jumpToAsh('${safeAshName}')" class="hover:text-white underline decoration-er-gold/50 hover:decoration-white underline-offset-4 transition-colors cursor-pointer" title="View Ash of War Details">${matchedSkill.name}</span>`;
                document.getElementById('modalSkillSp').textContent = `${matchedSkill.sp} SP`;
                document.getElementById('modalSkillDesc').innerHTML = parseDiceNotation(linkifyText(matchedSkill.desc));
                document.getElementById('modalSkillContainer').classList.remove('hidden');
            }
            
        } else if (currentTab === 'ashes') {
            titleEl.classList.add('text-er-gold');
            
            const typeEl = document.getElementById('modalType');
            typeEl.textContent = "Ash of War";
            typeEl.className = 'bg-er-panel px-3 py-1 rounded text-stone-300 border border-stone-700';
            
            const affEl = document.getElementById('modalAffinity');
            affEl.textContent = item.affinity;
            
            typeEl.classList.remove('hidden');
            affEl.classList.remove('hidden');
            
            document.getElementById('modalPassiveTitle').textContent = "Compatibility";
            const passiveEl = document.getElementById('modalPassive');
            
            if (item.compatibility.toLowerCase().includes('unique') && typeof weapons !== 'undefined') {
                const matchedWeapon = weapons.find(w => w.skill && w.skill.name === item.name);
                if (matchedWeapon) {
                    const safeWeaponName = matchedWeapon.name.replace(/'/g, "\\'");
                    passiveEl.innerHTML = `Unique Skill (<span onclick="jumpToWeapon('${safeWeaponName}')" class="text-er-gold hover:text-white underline decoration-er-gold/50 hover:decoration-white underline-offset-4 transition-colors cursor-pointer" title="View Weapon Details">${matchedWeapon.name}</span>)`;
                } else {
                    passiveEl.textContent = item.compatibility;
                }
            } else {
                passiveEl.textContent = item.compatibility;
            }
            document.getElementById('modalPassiveContainer').classList.remove('hidden');

            document.getElementById('modalSkillName').textContent = item.name;
            document.getElementById('modalSkillSp').textContent = `${item.sp} SP`;
            document.getElementById('modalSkillDesc').innerHTML = parseDiceNotation(linkifyText(item.description));
            document.getElementById('modalSkillContainer').classList.remove('hidden');
            
        } else if (currentTab === 'spells') {
            const isSorcery = item.type.toLowerCase() === 'sorcery';
            titleEl.classList.add(isSorcery ? 'text-magic-sorcery' : 'text-magic-incantation');
            
            dynamicStatsEl.innerHTML = `
                <div class="flex gap-4 text-sm bg-er-panel border border-stone-700 rounded p-2 text-stone-300">
                    <span><strong class="text-stone-500 uppercase tracking-widest text-xs">Save DC:</strong> ${spellSaveDC}</span>
                    <button class="roll-btn" onclick="executeRoll('1d20', '${spellAttack}', 'Spell Attack')" title="Roll Attack">
                        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                        Attack: ${spellAttack}
                    </button>
                    <span class="text-stone-500 text-xs italic mt-0.5">(${charStats.spellStat.toUpperCase()})</span>
                </div>
            `;

            const typeEl = document.getElementById('modalType');
            typeEl.textContent = item.type;
            typeEl.className = `px-2 py-0.5 rounded border font-semibold ${isSorcery ? 'text-magic-sorcery border-magic-sorcery/30 bg-er-panel' : 'text-magic-incantation border-magic-incantation/30 bg-er-panel'}`;
            
            const lvlEl = document.getElementById('modalLevel');
            lvlEl.textContent = item.level === 'Cantrip' ? 'Cantrip' : `Level ${item.level}`;
            
            const schEl = document.getElementById('modalSchool');
            schEl.textContent = item.school;
            
            typeEl.classList.remove('hidden');
            lvlEl.classList.remove('hidden');
            schEl.classList.remove('hidden');

            document.getElementById('modalTime').textContent = item.castingTime;
            document.getElementById('modalRange').textContent = item.range;
            document.getElementById('modalComponents').textContent = item.components;
            document.getElementById('modalDuration').textContent = item.duration;
            document.getElementById('modalSpellStats').classList.remove('hidden');

            document.getElementById('modalSpellDescription').innerHTML = parseDiceNotation(linkifyText(item.description));
            document.getElementById('modalSpellDescription').classList.remove('hidden');
            
        } else if (currentTab === 'wondrous' || currentTab === 'books') {
            titleEl.classList.add(currentTab === 'wondrous' ? 'text-er-gold' : item.type === 'Cookbook' ? 'text-orange-400' : 'text-purple-400');
            
            const typeEl = document.getElementById('modalType');
            typeEl.textContent = item.type;
            typeEl.className = 'bg-er-panel px-3 py-1 rounded text-stone-300 border border-stone-700';
            
            const rarEl = document.getElementById('modalRarity');
            rarEl.textContent = item.rarity;
            rarEl.className = `px-3 py-1 rounded border bg-er-panel font-semibold ${rarityColors[item.rarity] || 'text-stone-300 border-stone-700'}`;
            
            typeEl.classList.remove('hidden');
            rarEl.classList.remove('hidden');
            
            const descEl = document.getElementById('modalDescription');
            let descHtml = parseDiceNotation(linkifyText(item.description));
            
            if (item.recipe) {
                descHtml += `
                    <div class="mt-4 pt-4 border-t border-stone-800">
                        <h4 class="text-er-gold font-serif font-semibold mb-2 tracking-wide uppercase text-xs">Crafting Recipe</h4>
                        <p class="text-stone-300 text-sm leading-relaxed whitespace-pre-wrap not-italic">${parseDiceNotation(linkifyText(item.recipe))}</p>
                    </div>
                `;
            }
            
            descEl.innerHTML = descHtml;
            descEl.classList.remove('hidden');
            
            if (item.effect) {
                document.getElementById('modalPassiveTitle').textContent = "Effect / Contents";
                document.getElementById('modalPassive').innerHTML = parseDiceNotation(linkifyText(item.effect));
                document.getElementById('modalPassiveContainer').classList.remove('hidden');
            }
        }

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (modal) modal.classList.add('hidden');
        document.body.style.overflow = '';
        currentOpenItem = null;
    }

    switchTab('weapons');
});