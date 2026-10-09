// Core State
let currentTab = 'weapons';
let currentOpenItem = null;

// Character Stats State Management
const charStats = JSON.parse(localStorage.getItem('erCharStats')) || {
    level: 1, str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10, spellStat: 'int'
};

// Inventory State Management
let userInventory = JSON.parse(localStorage.getItem('erInventory')) || {
    weapons: [], ashes: [], spells: [], wondrous: [], books: [], materials: [], subclasses: [], backgrounds: []
};

// Safe Data Loading
const safeWeapons = typeof weapons !== 'undefined' ? weapons : [];
const safeAshes = typeof ashesOfWar !== 'undefined' ? ashesOfWar : [];
const safeSpells = typeof spells !== 'undefined' ? spells : [];
const safeWondrous = typeof wondrousItems !== 'undefined' ? wondrousItems : [];
const safeBooks = typeof books !== 'undefined' ? books : [];
const safeMaterials = typeof materials !== 'undefined' ? materials : [];
const safeSubclasses = typeof subclasses !== 'undefined' ? subclasses : [];
const safeBackgrounds = typeof backgrounds !== 'undefined' ? backgrounds : [];

function getModifier(score) {
    return Math.floor((score - 10) / 2);
}

function getProficiency(level) {
    return Math.ceil(level / 4) + 1;
}

function saveStats() {
    try {
        localStorage.setItem('erCharStats', JSON.stringify(charStats));
    } catch (e) { console.error("Could not save stats", e); }
}

function saveInventory() {
    try {
        localStorage.setItem('erInventory', JSON.stringify(userInventory));
    } catch (e) { console.error("Could not save inventory", e); }
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
    entry.className = 'log-entry mb-2 border-b border-stone-800 pb-2';
    const highlightColor = isCrit ? '#7da36e' : '#d4af37';
    
    entry.innerHTML = `
        <div class="flex justify-between items-center mb-1">
            <span class="font-bold text-stone-300">${title}</span>
            <span style="color: ${highlightColor}; font-size: 1.1em; font-weight: bold;">${total}</span>
        </div>
        <div class="text-stone-500 text-xs break-words">${resultStr}</div>
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

// Global Custom Tooltip State
let activeTooltip = null;

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildTooltip(text, description) {
    return `<span class="group relative inline-block cursor-help decoration-stone-500 decoration-dotted underline underline-offset-4 hover:text-er-gold transition-colors" tabindex="0" onmouseenter="showTooltip(event, '${escapeRegExp(description)}')" onmouseleave="hideTooltip()" onfocus="showTooltip(event, '${escapeRegExp(description)}')" onblur="hideTooltip()">${text}</span>`;
}

window.showTooltip = function(event, text) {
    if (activeTooltip) hideTooltip();

    activeTooltip = document.createElement('div');
    activeTooltip.className = 'fixed z-[100] bg-er-dark border border-er-gold/50 text-stone-200 text-xs rounded shadow-2xl p-3 max-w-[250px] leading-relaxed';
    activeTooltip.innerHTML = text;
    document.body.appendChild(activeTooltip);

    const rect = event.target.getBoundingClientRect();
    let top = rect.bottom + 10;
    let left = rect.left + (rect.width / 2) - (activeTooltip.offsetWidth / 2);

    if (left < 10) left = 10;
    if (left + activeTooltip.offsetWidth > window.innerWidth - 10) {
        left = window.innerWidth - activeTooltip.offsetWidth - 10;
    }
    
    if (top + activeTooltip.offsetHeight > window.innerHeight - 10) {
        top = rect.top - activeTooltip.offsetHeight - 10;
    }

    activeTooltip.style.top = `${top}px`;
    activeTooltip.style.left = `${left}px`;
    
    activeTooltip.animate([
        { opacity: 0, transform: 'translateY(-5px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ], { duration: 150, fill: 'forwards', easing: 'ease-out' });
}

window.hideTooltip = function() {
    if (activeTooltip) {
        activeTooltip.remove();
        activeTooltip = null;
    }
}

function processWeaponProperties(text) {
    if (!text) return text;
    
    const propDefinitions = {
        "Finesse": "When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls.",
        "Light": "A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons.",
        "Thrown": "If a weapon has the thrown property, you can throw the weapon to make a ranged attack.",
        "Versatile": "This weapon can be used with one or two hands. A damage value in parentheses appears with the property—the damage when the weapon is used with two hands.",
        "Special": "A weapon with the special property has unusual rules governing its use, explained in the weapon's description.",
        "Ammunition": "You can use a weapon that has the ammunition property to make a ranged attack only if you have ammunition to fire from the weapon.",
        "Two-handed": "This weapon requires two hands when you attack with it.",
        "Heavy": "A Heavy weapon is unwieldy compared to other weapons. You have Disadvantage on your attack rolls with a Heavy weapon if your Strength score isn’t at least 13.",
        "Loading": "Because of the time required to load this weapon, you can fire only one piece of ammunition from it when you use an action, bonus action, or reaction to fire it, regardless of the number of attacks you can normally make.",
        "Colossal": "Colossal Weapons are difficult to swing effectively, even for the strongest warriors. The first attack you make each turn with a Colossal weapon is made at disadvantage.",
        "Reach": "This weapon adds 5 feet to your reach when you attack with it, as well as when determining your reach for opportunity attacks with it."
    };

    return text.replace(/Properties:\s*(.+?)(?=\.|$)/, (match, propsString) => {
        let enhancedProps = propsString;
        
        for (const [propName, propDesc] of Object.entries(propDefinitions)) {
            const propRegex = new RegExp(`(?<!<[^>]*)\\b${propName}\\b`, 'gi');
            enhancedProps = enhancedProps.replace(propRegex, (match) => {
                return buildTooltip(match, propDesc);
            });
        }
        return `Properties: ${enhancedProps}`;
    });
}

function linkifyText(text) {
    if (!text) return "";
    let linkedText = text;
    
    linkedText = processWeaponProperties(linkedText);

    const linkItems = [];
    
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
    
    safeMaterials.forEach(mat => {
        const escapedName = escapeRegExp(mat.name);
        const regex = new RegExp(`(?<=\\W|^)${escapedName}(?=\\W|$)`, "gi");
        if (regex.test(linkedText)) {
            const safeName = mat.name.replace(/'/g, "\\'");
            linkItems.push({ name: mat.name, replacement: `<span onclick="jumpToMaterial('${safeName}')" class="linkified-text" title="View Material Details">$&</span>`});
        }
    });

    safeSubclasses.forEach(sub => {
        const escapedName = escapeRegExp(sub.name);
        const regex = new RegExp(`(?<=\\W|^)${escapedName}(?=\\W|$)`, "gi");
        if (regex.test(linkedText)) {
            const safeName = sub.name.replace(/'/g, "\\'");
            linkItems.push({ name: sub.name, replacement: `<span onclick="jumpToSubclass('${safeName}')" class="linkified-text" title="View Subclass Details">$&</span>`});
        }
    });

    safeBackgrounds.forEach(bg => {
        const escapedName = escapeRegExp(bg.name);
        const regex = new RegExp(`(?<=\\W|^)${escapedName}(?=\\W|$)`, "gi");
        if (regex.test(linkedText)) {
            const safeName = bg.name.replace(/'/g, "\\'");
            linkItems.push({ name: bg.name, replacement: `<span onclick="jumpToBackground('${safeName}')" class="linkified-text" title="View Background Details">$&</span>`});
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

// Global Routing
window.jumpToWeapon = function(weaponName) {
    const weapon = safeWeapons.find(w => w.name === weaponName);
    if (weapon) { closeModal(); switchTab('weapons'); document.getElementById('searchInput').value = weaponName; filterAndSort(); setTimeout(() => openModal(weapon, 'weapons'), 150); }
};
window.jumpToAsh = function(ashName) {
    const ash = safeAshes.find(a => a.name === ashName);
    if (ash) { closeModal(); switchTab('ashes'); document.getElementById('searchInput').value = ashName; filterAndSort(); setTimeout(() => openModal(ash, 'ashes'), 150); }
};
window.jumpToSpell = function(spellName) {
    const spell = safeSpells.find(s => s.name === spellName);
    if (spell) { closeModal(); switchTab('spells'); document.getElementById('searchInput').value = spellName; filterAndSort(); setTimeout(() => openModal(spell, 'spells'), 150); }
};
window.jumpToWondrous = function(itemName) {
    const item = safeWondrous.find(w => w.name === itemName);
    if (item) { closeModal(); switchTab('wondrous'); document.getElementById('searchInput').value = itemName; filterAndSort(); setTimeout(() => openModal(item, 'wondrous'), 150); }
};
window.jumpToBook = function(bookName) {
    const book = safeBooks.find(b => b.name === bookName);
    if (book) { closeModal(); switchTab('books'); document.getElementById('searchInput').value = bookName; filterAndSort(); setTimeout(() => openModal(book, 'books'), 150); }
};
window.jumpToMaterial = function(matName) {
    const mat = safeMaterials.find(m => m.name === matName);
    if (mat) { closeModal(); switchTab('materials'); document.getElementById('searchInput').value = matName; filterAndSort(); setTimeout(() => openModal(mat, 'materials'), 150); }
};
window.jumpToSubclass = function(subName) {
    const sub = safeSubclasses.find(s => s.name === subName);
    if (sub) { closeModal(); switchTab('subclasses'); document.getElementById('searchInput').value = subName; filterAndSort(); setTimeout(() => openModal(sub, 'subclasses'), 150); }
};
window.jumpToBackground = function(bgName) {
    const bg = safeBackgrounds.find(b => b.name === bgName);
    if (bg) { closeModal(); switchTab('backgrounds'); document.getElementById('searchInput').value = bgName; filterAndSort(); setTimeout(() => openModal(bg, 'backgrounds'), 150); }
};

document.addEventListener('DOMContentLoaded', () => {
    // Stat Inputs Sync
    const statInputs = ['level', 'str', 'dex', 'con', 'int', 'wis', 'cha'];
    statInputs.forEach(stat => {
        const el = document.getElementById(stat === 'level' ? 'char-level' : `stat-${stat}`);
        if (el) {
            el.value = charStats[stat];
            el.addEventListener('change', (e) => {
                charStats[stat] = parseInt(e.target.value) || 10;
                saveStats();
                if (currentOpenItem) openModal(currentOpenItem, currentOpenItem._category || currentTab); 
            });
        }
    });

    const spellStatDropdown = document.getElementById('spellcasting-stat');
    if (spellStatDropdown) {
        spellStatDropdown.value = charStats.spellStat;
        spellStatDropdown.addEventListener('change', (e) => {
            charStats.spellStat = e.target.value;
            saveStats();
            if (currentOpenItem) openModal(currentOpenItem, currentOpenItem._category || currentTab); 
        });
    }

    const toggleStatsBtn = document.getElementById('toggleStatsBtn');
    const closeStatsBtn = document.getElementById('closeStatsBtn');
    const statsSidebar = document.getElementById('stats-sidebar');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mainContent = document.getElementById('mainContent');

    function openSidebar() {
        statsSidebar.classList.remove('translate-x-full');
        if (window.innerWidth >= 1024) {
            mainContent.style.marginRight = '20rem'; 
        } else {
            mobileOverlay.classList.remove('hidden');
            setTimeout(() => mobileOverlay.classList.remove('opacity-0'), 10);
            document.body.style.overflow = 'hidden'; 
        }
    }

    function closeSidebar() {
        statsSidebar.classList.add('translate-x-full');
        if (window.innerWidth >= 1024) {
            mainContent.style.marginRight = '0';
        } else {
            mobileOverlay.classList.add('opacity-0');
            setTimeout(() => mobileOverlay.classList.add('hidden'), 300); 
            if (!document.getElementById('itemModal').classList.contains('hidden') === false) {
                document.body.style.overflow = ''; 
            }
        }
    }

    if (toggleStatsBtn) toggleStatsBtn.addEventListener('click', () => {
        if (statsSidebar.classList.contains('translate-x-full')) openSidebar();
        else closeSidebar();
    });
    if (closeStatsBtn) closeStatsBtn.addEventListener('click', closeSidebar);
    if (mobileOverlay) mobileOverlay.addEventListener('click', closeSidebar);

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            if (!statsSidebar.classList.contains('translate-x-full')) mainContent.style.marginRight = '20rem';
            mobileOverlay.classList.add('hidden', 'opacity-0');
            document.body.style.overflow = '';
        } else {
            mainContent.style.marginRight = '0';
            if (!statsSidebar.classList.contains('translate-x-full')) {
                mobileOverlay.classList.remove('hidden', 'opacity-0');
                document.body.style.overflow = 'hidden';
            }
        }
    });

    const diceLogHeader = document.getElementById('dice-log-header');
    const diceLogContainer = document.getElementById('dice-log');
    const toggleLogIcon = document.getElementById('toggle-log-icon');
    if (diceLogHeader) {
        diceLogHeader.addEventListener('click', () => {
            diceLogContainer.classList.toggle('h-10'); 
            diceLogContainer.classList.toggle('h-64'); 
            toggleLogIcon.innerText = diceLogContainer.classList.contains('h-10') ? '[+]' : '[-]';
            if (!diceLogContainer.classList.contains('h-10')) {
                const content = document.getElementById('dice-log-content');
                content.scrollTop = content.scrollHeight;
            }
        });
    }

    // Tabs Event Listeners
    const tabElements = ['Inventory', 'Weapons', 'Ashes', 'Spells', 'Wondrous', 'Books', 'Materials', 'Subclasses', 'Backgrounds'];
    tabElements.forEach(tabName => {
        const btn = document.getElementById(`tab${tabName}`);
        if (btn) btn.addEventListener('click', () => switchTab(tabName.toLowerCase()));
    });

    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const filterLetter = document.getElementById('filterLetter');
    const filterType = document.getElementById('filterType');
    const filterRarityUnique = document.getElementById('filterRarityUnique');
    const filterAffinity = document.getElementById('filterAffinity');
    const filterSchool = document.getElementById('filterSchool');
    const filterLevel = document.getElementById('filterLevel');
    const resetFiltersBtn = document.getElementById('resetFilters');

    [searchInput, sortSelect, filterLetter, filterType, filterRarityUnique, filterAffinity, filterSchool, filterLevel]
        .forEach(el => {
            if (el) {
                el.addEventListener('input', filterAndSort);
                el.addEventListener('change', filterAndSort);
            }
        });

    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            if(searchInput) searchInput.value = '';
            if(sortSelect) sortSelect.value = 'alpha_asc';
            if(filterLetter) filterLetter.value = 'all';
            if(filterType) filterType.value = 'all';
            if(filterRarityUnique) filterRarityUnique.value = 'all';
            if(filterAffinity) filterAffinity.value = 'all';
            if(filterSchool) filterSchool.value = 'all';
            if(filterLevel) filterLevel.value = 'all';
            filterAndSort();
        });
    }

    if (filterLetter && filterLetter.options.length <= 1) {
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letter => {
            filterLetter.innerHTML += `<option value="${letter.toLowerCase()}">${letter}</option>`;
        });
    }

    const modal = document.getElementById('itemModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    window.closeModal = function() {
        if (modal) modal.classList.add('hidden');
        document.body.style.overflow = '';
        currentOpenItem = null;
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) closeModal();
    });

    // Start App
    switchTab('weapons');
});

// Tab & Filter Logic
function switchTab(tab) {
    currentTab = tab;
    
    const tabs = ['inventory', 'weapons', 'ashes', 'spells', 'wondrous', 'books', 'materials', 'subclasses', 'backgrounds'];
    tabs.forEach(t => {
        const btn = document.getElementById(`tab${t.charAt(0).toUpperCase() + t.slice(1)}`);
        if (btn) {
            let baseColor = '';
            if (t === 'subclasses' || t === 'backgrounds') baseColor = 'text-[#a478b8]';
            
            if (t === tab) {
                btn.className = `pb-1 tab-active shrink-0 font-bold ${baseColor || 'text-er-gold'}`;
            } else {
                btn.className = `pb-1 tab-inactive shrink-0 ${baseColor}`;
            }
        }
    });
    
    buildControls();
    filterAndSort();
}

function buildControls() {
    const sortSelect = document.getElementById('sortSelect');
    const filterType = document.getElementById('filterType');
    const filterRarityUnique = document.getElementById('filterRarityUnique');
    const filterAffinity = document.getElementById('filterAffinity');
    const filterSchool = document.getElementById('filterSchool');
    const filterLevel = document.getElementById('filterLevel');

    if (!sortSelect || !filterType || !filterRarityUnique || !filterAffinity) return;

    let sortHTML = `
        <option value="alpha_asc">Alphabetical (A-Z)</option>
        <option value="alpha_desc">Alphabetical (Z-A)</option>
    `;

    if (currentTab === 'inventory') {
        filterType.classList.add('hidden');
        filterRarityUnique.classList.add('hidden');
        filterAffinity.classList.add('hidden');
        if (filterSchool) filterSchool.classList.add('hidden');
        if (filterLevel) filterLevel.classList.add('hidden');

    } else if (currentTab === 'weapons') {
        sortHTML += `
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
        sortHTML += `
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
        sortHTML += `
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
        
        if (filterSchool) {
            filterSchool.innerHTML = '<option value="all">Any School of Magic</option>';
            if (typeof spells !== 'undefined') {
                [...new Set(spells.map(s => s.school))].sort().forEach(s => {
                    filterSchool.innerHTML += `<option value="${s.toLowerCase()}">${s}</option>`;
                });
            }
        }
        if (filterLevel) {
            filterLevel.innerHTML = '<option value="all">Any Spell Level</option>';
            if (typeof spells !== 'undefined') {
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
        sortHTML += `
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
        sortHTML += `
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
    } else if (currentTab === 'materials') {
        sortHTML += `
            <option value="rarity_desc">Rarity (High to Low)</option>
            <option value="rarity_asc">Rarity (Low to High)</option>
        `;
        
        filterType.classList.add('hidden');
        filterRarityUnique.classList.remove('hidden');
        filterAffinity.classList.add('hidden');
        if (filterSchool) filterSchool.classList.add('hidden');
        if (filterLevel) filterLevel.classList.add('hidden');
        
        filterRarityUnique.innerHTML = `
            <option value="all">Any Rarity</option>
            <option value="common">Common</option>
            <option value="uncommon">Uncommon</option>
            <option value="rare">Rare</option>
            <option value="very rare">Very Rare</option>
        `;
    } else if (currentTab === 'subclasses') {
        sortHTML += `
            <option value="type_asc">Class (A-Z)</option>
            <option value="type_desc">Class (Z-A)</option>
        `;
        
        filterType.classList.remove('hidden');
        filterRarityUnique.classList.add('hidden');
        filterAffinity.classList.add('hidden');
        if (filterSchool) filterSchool.classList.add('hidden');
        if (filterLevel) filterLevel.classList.add('hidden');
        
        filterType.innerHTML = '<option value="all">Any Class</option>';
        if (typeof subclasses !== 'undefined') {
            [...new Set(subclasses.map(s => s.className))].sort().forEach(c => {
                filterType.innerHTML += `<option value="${c.toLowerCase()}">${c}</option>`;
            });
        }
    } else if (currentTab === 'backgrounds') {
        sortHTML += `
            <option value="alpha_asc">Alphabetical (A-Z)</option>
        `;
        filterType.classList.add('hidden');
        filterRarityUnique.classList.add('hidden');
        filterAffinity.classList.add('hidden');
        if (filterSchool) filterSchool.classList.add('hidden');
        if (filterLevel) filterLevel.classList.add('hidden');
    }
    
    const oldVal = sortSelect.value;
    sortSelect.innerHTML = sortHTML;
    
    const options = Array.from(sortSelect.options).map(opt => opt.value);
    if (options.includes(oldVal)) {
        sortSelect.value = oldVal;
    } else {
        sortSelect.value = 'alpha_asc';
    }
}

function filterAndSort() {
    const gridContainer = document.getElementById('gridContainer');
    const searchInput = document.getElementById('searchInput');
    if (!gridContainer || !searchInput) return;

    const query = searchInput.value.toLowerCase();
    const sortVal = document.getElementById('sortSelect').value;
    const letterVal = document.getElementById('filterLetter').value;
    const typeVal = document.getElementById('filterType') ? document.getElementById('filterType').value : 'all';
    const rarityVal = document.getElementById('filterRarityUnique') ? document.getElementById('filterRarityUnique').value : 'all';
    const affinVal = document.getElementById('filterAffinity') ? document.getElementById('filterAffinity').value : 'all';
    
    let filtered = [];

    if (currentTab === 'inventory') {
        const allGroups = [
            { cat: 'weapons', data: safeWeapons },
            { cat: 'ashes', data: safeAshes },
            { cat: 'spells', data: safeSpells },
            { cat: 'wondrous', data: safeWondrous },
            { cat: 'books', data: safeBooks },
            { cat: 'materials', data: safeMaterials },
            { cat: 'subclasses', data: safeSubclasses },
            { cat: 'backgrounds', data: safeBackgrounds }
        ];

        allGroups.forEach(group => {
            const savedNames = userInventory[group.cat] || [];
            savedNames.forEach(name => {
                const itemData = group.data.find(x => x.name === name);
                if (itemData) {
                    filtered.push({ ...itemData, _category: group.cat });
                }
            });
        });

        filtered = filtered.filter(item => {
            let match = item.name.toLowerCase().includes(query) || (item.description && item.description.toLowerCase().includes(query));
            if (!match) return false;
            if (letterVal !== 'all' && !item.name.toLowerCase().startsWith(letterVal)) return false;
            return true;
        });

        filtered.sort((a, b) => {
            if (sortVal === 'alpha_asc') return a.name.localeCompare(b.name);
            if (sortVal === 'alpha_desc') return b.name.localeCompare(a.name);
            return a.name.localeCompare(b.name);
        });

    } else if (currentTab === 'weapons' && typeof weapons !== 'undefined') {
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
        filtered = ashesOfWar.filter(a => {
            let match = a.name.toLowerCase().includes(query) || a.compatibility.toLowerCase().includes(query) || a.description.toLowerCase().includes(query);
            if (!match) return false;
            if (letterVal !== 'all' && !a.name.toLowerCase().startsWith(letterVal)) return false;
            if (typeVal !== 'all' && !isWeaponCompatibleWithAsh(typeVal, a.compatibility)) return false;
            
            if (rarityVal !== 'all') {
                const isUnique = a.compatibility.toLowerCase().includes('unique');
                if (rarityVal === 'unique' && !isUnique) return false;
                if (rarityVal === 'non-unique' && isUnique) return false;
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
        const schoolVal = document.getElementById('filterSchool') ? document.getElementById('filterSchool').value : 'all';
        const levelVal = document.getElementById('filterLevel') ? document.getElementById('filterLevel').value : 'all';

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
        
    } else if (currentTab === 'materials' && typeof materials !== 'undefined') {
        filtered = materials.filter(m => {
            let match = m.name.toLowerCase().includes(query) || m.description.toLowerCase().includes(query);
            if (!match) return false;
            if (letterVal !== 'all' && !m.name.toLowerCase().startsWith(letterVal)) return false;
            if (rarityVal !== 'all' && m.rarity.toLowerCase() !== rarityVal) return false;
            return true;
        });

        filtered.sort((a, b) => {
            if (sortVal === 'alpha_asc') return a.name.localeCompare(b.name);
            if (sortVal === 'alpha_desc') return b.name.localeCompare(a.name);
            if (sortVal === 'rarity_desc') return (rarityWeights[b.rarity.toLowerCase()] || 0) - (rarityWeights[a.rarity.toLowerCase()] || 0);
            if (sortVal === 'rarity_asc') return (rarityWeights[a.rarity.toLowerCase()] || 0) - (rarityWeights[b.rarity.toLowerCase()] || 0);
            return 0;
        });
    } else if (currentTab === 'subclasses' && typeof subclasses !== 'undefined') {
        filtered = subclasses.filter(s => {
            let match = s.name.toLowerCase().includes(query) || (s.description && s.description.toLowerCase().includes(query));
            if (!match) return false;
            if (letterVal !== 'all' && !s.name.toLowerCase().startsWith(letterVal)) return false;
            if (typeVal !== 'all' && (s.className || "").toLowerCase() !== typeVal) return false;
            return true;
        });

        filtered.sort((a, b) => {
            if (sortVal === 'alpha_asc') return a.name.localeCompare(b.name);
            if (sortVal === 'alpha_desc') return b.name.localeCompare(a.name);
            if (sortVal === 'type_asc') return (a.className||"").localeCompare(b.className||"") || a.name.localeCompare(b.name);
            if (sortVal === 'type_desc') return (b.className||"").localeCompare(a.className||"") || a.name.localeCompare(b.name);
            return 0;
        });
    } else if (currentTab === 'backgrounds' && typeof backgrounds !== 'undefined') {
        filtered = backgrounds.filter(bg => {
            let match = bg.name.toLowerCase().includes(query) || (bg.description && bg.description.toLowerCase().includes(query));
            if (!match) return false;
            if (letterVal !== 'all' && !bg.name.toLowerCase().startsWith(letterVal)) return false;
            return true;
        });

        filtered.sort((a, b) => {
            if (sortVal === 'alpha_asc') return a.name.localeCompare(b.name);
            if (sortVal === 'alpha_desc') return b.name.localeCompare(a.name);
            return 0;
        });
    }

    const itemCount = document.getElementById('itemCount');
    if (itemCount) {
        const typeName = currentTab === 'weapons' ? 'Armaments' : currentTab === 'ashes' ? 'Ashes of War' : currentTab === 'wondrous' ? 'Relics & Items' : currentTab === 'books' ? 'Tomes & Recipes' : currentTab === 'materials' ? 'Materials' : currentTab === 'inventory' ? 'Inventory Items' : currentTab === 'subclasses' ? 'Subclasses' : currentTab === 'backgrounds' ? 'Backgrounds' : 'Spells';
        itemCount.innerHTML = `Showing <span class="text-er-gold font-bold text-sm">${filtered.length}</span> ${typeName}`;
    }

    renderItems(filtered);
}

function renderItems(items) {
    const gridContainer = document.getElementById('gridContainer');
    const noResults = document.getElementById('noResults');
    gridContainer.innerHTML = '';
    
    if (items.length === 0) {
        if (noResults) noResults.classList.remove('hidden');
        const noResultsSubtext = document.getElementById('noResultsSubtext');
        if (noResultsSubtext) noResultsSubtext.textContent = currentTab === 'inventory' ? "You have not added anything to your inventory yet." : "Try adjusting your filters or search term.";
        return;
    } else {
        if (noResults) noResults.classList.add('hidden');
    }

    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'item-card bg-er-panel border border-er-border rounded-lg p-5 cursor-pointer flex flex-col h-full relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-er-gold hover:shadow-xl hover:shadow-er-gold/10';
        card.style.animation = `fadeIn 0.3s ease-out ${index * 0.02}s forwards`;
        card.style.opacity = '0';
        
        const itemCat = currentTab === 'inventory' ? item._category : currentTab;
        card.onclick = () => openModal(item, itemCat);

        let topTags = '';
        let titleColor = 'text-er-gold';
        let bottomInfo = '';
        
        if (itemCat === 'weapons') {
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
        } else if (itemCat === 'ashes') {
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
        } else if (itemCat === 'spells') {
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
        } else if (itemCat === 'wondrous') {
            topTags = `
                <span class="text-xs font-semibold uppercase tracking-wider ${rarityColors[item.rarity] || 'text-stone-400'}">${item.rarity}</span>
                <span class="text-xs text-stone-500 font-semibold uppercase tracking-wider">${item.type}</span>
            `;
        } else if (itemCat === 'books') {
            const isCook = item.type.toLowerCase() === 'cookbook';
            titleColor = isCook ? 'text-orange-400' : 'text-purple-400';
            topTags = `
                <span class="text-xs font-semibold uppercase tracking-wider ${titleColor}">${item.type}</span>
                <span class="text-xs font-semibold uppercase tracking-wider ${rarityColors[item.rarity] || 'text-stone-400'}">${item.rarity}</span>
            `;
        } else if (itemCat === 'materials') {
            titleColor = 'text-green-400';
            topTags = `
                <span class="text-xs font-semibold uppercase tracking-wider ${rarityColors[item.rarity] || 'text-stone-400'}">${item.rarity}</span>
                <span class="text-xs text-stone-500 font-semibold uppercase tracking-wider">${item.type || 'Material'}</span>
            `;
            bottomInfo = `
                <div class="mt-auto pt-4 border-t border-stone-800 text-xs text-stone-400 italic line-clamp-2">
                    ${item.description}
                </div>
            `;
        } else if (itemCat === 'subclasses') {
            titleColor = 'text-[#a478b8]';
            topTags = `
                <span class="text-xs font-semibold uppercase tracking-wider text-stone-400">${item.className || 'Class'}</span>
                <span class="text-xs text-stone-500 font-semibold uppercase tracking-wider">Subclass</span>
            `;
            bottomInfo = `
                <div class="mt-auto pt-4 border-t border-stone-800 text-xs text-stone-400 italic line-clamp-2">
                    ${item.description}
                </div>
            `;
        } else if (itemCat === 'backgrounds') {
            titleColor = 'text-[#a478b8]';
            topTags = `
                <span class="text-xs font-semibold uppercase tracking-wider text-stone-400">Background</span>
                <span class="text-xs text-stone-500 font-semibold uppercase tracking-wider">Origin</span>
            `;
            bottomInfo = `
                <div class="mt-auto pt-4 border-t border-stone-800 text-xs text-stone-400 italic line-clamp-2">
                    ${item.description}
                </div>
            `;
        }

        const inventoryIndicator = currentTab === 'inventory' ? `<div class="absolute -top-1 -right-1 bg-er-gold text-er-dark text-[9px] font-bold px-2 py-1 uppercase rounded-bl-lg tracking-wider">${itemCat.replace('wondrous', 'relic')}</div>` : '';

        card.innerHTML = `
            ${inventoryIndicator}
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

function openModal(item, category = currentTab) {
    const modal = document.getElementById('itemModal');
    if (!modal) return;
    
    currentOpenItem = item;
    const titleEl = document.getElementById('modalTitle');
    const dynamicStatsEl = document.getElementById('modalDynamicStats');
    const invBtn = document.getElementById('modalInventoryBtn');
    
    titleEl.textContent = item.name;
    titleEl.className = 'text-2xl sm:text-3xl font-serif font-bold leading-tight pr-6'; 
    dynamicStatsEl.innerHTML = ''; 
    
    const safeCategory = category === 'inventory' ? (item._category || 'weapons') : category;
    const isItemInInv = userInventory[safeCategory] && userInventory[safeCategory].includes(item.name);
    
    if (invBtn) {
        invBtn.innerHTML = isItemInInv ? '<span>- Remove from Inv</span>' : '<span>+ Add to Inv</span>';
        invBtn.className = isItemInInv 
            ? 'shrink-0 px-3 py-1.5 rounded border border-red-500/50 text-red-400 hover:bg-red-500/20 transition-colors text-[10px] sm:text-xs font-bold uppercase tracking-wider self-start flex items-center gap-1.5 focus:outline-none'
            : 'shrink-0 px-3 py-1.5 rounded border border-er-gold text-er-gold hover:bg-er-gold hover:text-black transition-colors text-[10px] sm:text-xs font-bold uppercase tracking-wider self-start flex items-center gap-1.5 focus:outline-none';
            
        invBtn.onclick = () => {
            if (!userInventory[safeCategory]) userInventory[safeCategory] = [];
            
            if (isItemInInv) {
                userInventory[safeCategory] = userInventory[safeCategory].filter(n => n !== item.name);
            } else {
                userInventory[safeCategory].push(item.name);
            }
            saveInventory();
            
            openModal(item, safeCategory);
            if (currentTab === 'inventory') filterAndSort();
        };
    }

    const tags = ['modalLevel', 'modalType', 'modalRarity', 'modalAffinity', 'modalSchool', 'modalLevelDot', 'modalSchoolDot'];
    tags.forEach(t => { if(document.getElementById(t)) document.getElementById(t).classList.add('hidden'); });
    
    ['modalSpellStats', 'modalDescription', 'modalSpellDescription', 'modalPassiveContainer', 'modalSkillContainer'].forEach(id => {
        if(document.getElementById(id)) document.getElementById(id).classList.add('hidden');
    });

    const featuresContainer = document.getElementById('modalFeaturesContainer');
    const sanityContainer = document.getElementById('modalSanityContainer');
    const sanityContent = document.getElementById('modalSanityContent');
    if (featuresContainer) featuresContainer.innerHTML = '';
    if (sanityContent) sanityContent.innerHTML = '';
    if (featuresContainer) featuresContainer.classList.add('hidden');
    if (sanityContainer) sanityContainer.classList.add('hidden');

    const spellStatScore = charStats[charStats.spellStat] || 10;
    const spellMod = getModifier(spellStatScore);
    const profBonus = getProficiency(charStats.level);
    const spellSaveDC = 8 + profBonus + spellMod;
    const spellAttack = (profBonus + spellMod >= 0) ? `+${profBonus + spellMod}` : `${profBonus + spellMod}`;
    
    const getMeleeAtkBonus = (affinity) => {
        let score = 10;
        switch((affinity || '').toLowerCase()) {
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

    if (safeCategory === 'weapons') {
        titleEl.classList.add('text-er-gold');
        titleEl.classList.remove('text-[#a478b8]', 'text-magic-sorcery', 'text-magic-incantation', 'text-orange-400', 'text-purple-400', 'text-green-400');
        
        const atkBonus = getMeleeAtkBonus(item.affinity);
        dynamicStatsEl.innerHTML = `
            <div class="flex flex-wrap items-center gap-4 text-sm bg-er-panel border border-stone-700 rounded p-2 text-stone-300">
                <button class="roll-btn" onclick="executeRoll('1d20', '${atkBonus}', 'Weapon Attack (${item.affinity})')" title="Roll Attack">
                    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                    Attack: ${atkBonus}
                </button>
            </div>
        `;

        const typeEl = document.getElementById('modalType');
        typeEl.textContent = item.type;
        typeEl.className = 'bg-er-panel px-2 py-0.5 sm:px-3 sm:py-1 rounded text-stone-300 border border-stone-700';
        
        const rarEl = document.getElementById('modalRarity');
        rarEl.textContent = item.rarity;
        rarEl.className = `px-2 py-0.5 sm:px-3 sm:py-1 rounded border bg-er-panel font-semibold ${rarityColors[item.rarity] || 'text-stone-300 border-stone-700'}`;
        
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
        
    } else if (safeCategory === 'ashes') {
        titleEl.classList.add('text-er-gold');
        titleEl.classList.remove('text-[#a478b8]', 'text-magic-sorcery', 'text-magic-incantation', 'text-orange-400', 'text-purple-400', 'text-green-400');
        
        const typeEl = document.getElementById('modalType');
        typeEl.textContent = "Ash of War";
        typeEl.className = 'bg-er-panel px-2 py-0.5 sm:px-3 sm:py-1 rounded text-stone-300 border border-stone-700';
        
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
        
    } else if (safeCategory === 'spells') {
        const isSorcery = item.type.toLowerCase() === 'sorcery';
        titleEl.classList.remove('text-[#a478b8]', 'text-er-gold', 'text-orange-400', 'text-purple-400', 'text-green-400');
        titleEl.classList.add(isSorcery ? 'text-magic-sorcery' : 'text-magic-incantation');
        
        dynamicStatsEl.innerHTML = `
            <div class="flex flex-wrap items-center gap-4 text-sm bg-er-panel border border-stone-700 rounded p-2 text-stone-300">
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
        typeEl.className = `px-2 py-0.5 sm:px-3 sm:py-1 rounded border font-semibold ${isSorcery ? 'text-magic-sorcery border-magic-sorcery/30 bg-er-panel' : 'text-magic-incantation border-magic-incantation/30 bg-er-panel'}`;
        
        const lvlEl = document.getElementById('modalLevel');
        lvlEl.textContent = item.level === 'Cantrip' ? 'Cantrip' : `Level ${item.level}`;
        
        const schEl = document.getElementById('modalSchool');
        schEl.textContent = item.school;
        
        typeEl.classList.remove('hidden');
        lvlEl.classList.remove('hidden');
        schEl.classList.remove('hidden');
        document.getElementById('modalLevelDot').classList.remove('hidden');
        document.getElementById('modalSchoolDot').classList.remove('hidden');

        document.getElementById('modalTime').textContent = item.castingTime;
        document.getElementById('modalRange').textContent = item.range;
        document.getElementById('modalComponents').textContent = item.components;
        document.getElementById('modalDuration').textContent = item.duration;
        document.getElementById('modalSpellStats').classList.remove('hidden');

        document.getElementById('modalSpellDescription').innerHTML = parseDiceNotation(linkifyText(item.description));
        document.getElementById('modalSpellDescription').classList.remove('hidden');
        
    } else if (safeCategory === 'wondrous' || safeCategory === 'books' || safeCategory === 'materials') {
        titleEl.classList.remove('text-[#a478b8]', 'text-er-gold', 'text-magic-sorcery', 'text-magic-incantation', 'text-orange-400', 'text-purple-400', 'text-green-400');
        titleEl.classList.add(safeCategory === 'wondrous' ? 'text-er-gold' : item.type === 'Cookbook' ? 'text-orange-400' : safeCategory === 'materials' ? 'text-green-400' : 'text-purple-400');
        
        const typeEl = document.getElementById('modalType');
        typeEl.textContent = item.type || 'Material';
        typeEl.className = 'bg-er-panel px-2 py-0.5 sm:px-3 sm:py-1 rounded text-stone-300 border border-stone-700';
        
        const rarEl = document.getElementById('modalRarity');
        rarEl.textContent = item.rarity;
        rarEl.className = `px-2 py-0.5 sm:px-3 sm:py-1 rounded border bg-er-panel font-semibold ${rarityColors[item.rarity] || 'text-stone-300 border-stone-700'}`;
        
        typeEl.classList.remove('hidden');
        rarEl.classList.remove('hidden');
        
        const descEl = document.getElementById('modalDescription');
        let descHtml = parseDiceNotation(linkifyText(item.description));
        
        if (item.recipe) {
            descHtml += `
                <div class="mt-4 pt-4 border-t border-er-border">
                    <h4 class="text-er-gold font-serif font-semibold mb-2">Crafting Recipe</h4>
                    <p class="text-stone-300 text-sm leading-relaxed whitespace-pre-wrap">${parseDiceNotation(linkifyText(item.recipe))}</p>
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
    } else if (safeCategory === 'subclasses') {
        titleEl.classList.remove('text-er-gold', 'text-magic-sorcery', 'text-magic-incantation', 'text-orange-400', 'text-purple-400', 'text-green-400');
        titleEl.classList.add('text-[#a478b8]');
        
        const typeEl = document.getElementById('modalType');
        typeEl.textContent = item.className || 'Class';
        typeEl.className = 'bg-er-panel px-2 py-0.5 sm:px-3 sm:py-1 rounded text-stone-300 border border-stone-700';
        typeEl.classList.remove('hidden');

        const rarEl = document.getElementById('modalRarity');
        rarEl.textContent = 'Subclass';
        rarEl.className = 'bg-er-panel px-2 py-0.5 sm:px-3 sm:py-1 rounded text-stone-300 border border-stone-700';
        rarEl.classList.remove('hidden');
        
        const descEl = document.getElementById('modalDescription');
        descEl.innerHTML = parseDiceNotation(linkifyText(item.description));
        descEl.classList.remove('hidden');

        if (item.features && Array.isArray(item.features)) {
            let featuresHtml = '';
            item.features.forEach(feat => {
                featuresHtml += `
                    <div class="bg-[#14120e] border border-er-border rounded p-4 mb-3">
                        <h4 class="text-er-gold font-serif font-bold mb-2 flex items-center justify-between">
                            ${feat.name}
                            ${feat.level ? `<span class="text-xs text-stone-500 font-sans tracking-widest">Level ${feat.level}</span>` : ''}
                        </h4>
                        <div class="text-stone-300 text-sm leading-relaxed whitespace-pre-wrap">${parseDiceNotation(linkifyText(feat.description))}</div>
                    </div>
                `;
            });
            featuresContainer.innerHTML = featuresHtml;
            featuresContainer.classList.remove('hidden');
        }
    } else if (safeCategory === 'backgrounds') {
        titleEl.classList.remove('text-er-gold', 'text-magic-sorcery', 'text-magic-incantation', 'text-orange-400', 'text-purple-400', 'text-green-400');
        titleEl.classList.add('text-[#a478b8]');
        
        const typeEl = document.getElementById('modalType');
        typeEl.textContent = 'Background';
        typeEl.className = 'bg-er-panel px-2 py-0.5 sm:px-3 sm:py-1 rounded text-stone-300 border border-stone-700';
        typeEl.classList.remove('hidden');
        
        const descEl = document.getElementById('modalDescription');
        descEl.innerHTML = parseDiceNotation(linkifyText(item.description));
        descEl.classList.remove('hidden');

        let profHtml = '';
        if(item.skillProficiencies) profHtml += `<div><strong class="text-stone-500">Skill Proficiencies:</strong> ${item.skillProficiencies}</div>`;
        if(item.toolProficiencies) profHtml += `<div><strong class="text-stone-500">Tool Proficiencies:</strong> ${item.toolProficiencies}</div>`;
        if(item.languages) profHtml += `<div><strong class="text-stone-500">Languages:</strong> ${item.languages}</div>`;
        if(item.equipment) profHtml += `<div><strong class="text-stone-500">Equipment:</strong> ${item.equipment}</div>`;

        if (profHtml) {
            featuresContainer.innerHTML = `
                <div class="bg-[#14120e] border border-er-border rounded p-4 text-sm text-stone-300 space-y-2">
                    ${profHtml}
                </div>
            `;
            featuresContainer.classList.remove('hidden');
        }

        if (item.sanityMechanics) {
            sanityContainer.classList.remove('hidden');
            let sanityHtml = `<p class="italic text-stone-400 mb-3">${item.sanityMechanics.description || "The path of Grace takes a heavy toll."}</p>`;
            
            if (item.sanityMechanics.restore) {
                sanityHtml += `<p class="mb-3"><strong class="text-[#a478b8]">Restoring Sanity:</strong> ${parseDiceNotation(linkifyText(item.sanityMechanics.restore))}</p>`;
            }

            if (item.sanityMechanics.table && item.sanityMechanics.table.length > 0) {
                sanityHtml += `<div class="grid grid-cols-1 gap-2 mt-4">`;
                item.sanityMechanics.table.forEach(row => {
                    sanityHtml += `
                        <div class="flex gap-4 border-b border-[#3d362a] pb-2 last:border-0">
                            <div class="font-bold text-stone-300 w-12 shrink-0">${row.score}</div>
                            <div class="text-stone-400">${parseDiceNotation(linkifyText(row.effect))}</div>
                        </div>
                    `;
                });
                sanityHtml += `</div>`;
            }
            sanityContent.innerHTML = sanityHtml;
        }
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}