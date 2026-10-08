const weapons = [
    {
        name: "Alabaster Lord's Sword",
        type: "Greatsword",
        rarity: "Uncommon",
        affinity: "Intelligence",
        description: "Greatsword forged from a blue-white meteoric ore. The blade conceals gravity-manipulating magic. A weapon unique to the Alabaster Lords, a race of ancients with skin of stone who were said to have risen to life when a meteor struck long ago.",
        passive: "When you hit an aberration with this weapon, the aberration takes an extra 7 (2d6) slashing damage.",
        skill: { name: "Alabaster Lords' Pull", sp: 6, desc: "As an action, you can thrust this weapon into the ground, creating a gravitational disturbance in a 20-foot radius around you. Each creature of your choice in the area must make a Strength saving throw. On a failure, the creature takes 22 (4d10) force damage, and is pulled in a straight line toward you, ending in an unoccupied space as close to you as possible. On a success, the creature takes half as much damage and is not pushed." }
    },
    {
        name: "Albinauric Shield",
        type: "Shield",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Tall oval shield made of metal carried by young Albinaurics. The ornamentation represents the primordial drop of dew from which they are said to have been created. Boasts exceptional magic damage negation. The Albinaurics' most formidable foes were sorcerers, after all.",
        passive: null,
        skill: { name: "Magic Parry", sp: 2, desc: "As a reaction to taking damage, you imbue your shield with glintstones. Raising it in your defense, you gain resistance to force damage until the start of your next turn." }
    },
    {
        name: "Ant's Skull Plate",
        type: "Greatshield",
        rarity: "Rare",
        affinity: "Constitution",
        description: "Huge head of one of the giant ants which inhabit the two underground rivers, used without modification as a shield. Excels at repelling enemy attacks. Giant ants are venomous creatures, granting a boost to immunity when wielding the shield.",
        passive: null,
        skill: { name: "Immunity Parry", sp: 2, desc: "As a reaction, you imbue your shield with a cloud of preservative spores. Raising it in your defense, you gain advantage on saving throws against the Rotting condition until the start of your next turn." }
    },
    {
        name: "Antspur Rapier",
        type: "Rapier",
        rarity: "Very Rare",
        affinity: "Dexterity",
        description: "Spur of a giant ant which has been fashioned into a rapier. The blade drips with scarlet rot. Scarlet rot is an old legend, of which Maleigh Marais of the Shaded Castle was a private believer. And indeed, he eventually found his own personal goddess.",
        passive: "When you hit with an attack using this magic sword, the target takes an extra 4 (1d6) poison damage. The target must succeed on a DC 16 Constitution saving throw or have the Rotting condition for 1 minute. At the end of each of its turns, the target can make another Constitution saving throw. On a success, the target ends the condition.",
        skill: { name: "Impaling Thrust", sp: 1, desc: "When you attack with this weapon, you may activate this skill as a free action to increase the reach of the attack by 5 feet." }
    },
    {
        name: "Axe of Godfrey",
        type: "Colossal Weapon",
        rarity: "Legendary",
        affinity: "Strength",
        description: "Weapon of Godfrey, Elden Lord. It was broken in a battle fought as leader of the Tarnished during the Long March. This weapon is symbolic of Godfrey's vow to conduct himself as a lord, later becoming an emblem of the golden lineage. In the days of the past, a crown was warranted with strength.",
        passive: "This weapon deals additional slashing damage equal to twice your Strength modifier on a hit. You have advantage on attack rolls with this weapon made against creatures frightened of you.",
        skill: { name: "Regal Roar", sp: 8, desc: "As an action, you unleash a roar fit for a true king. Each creature of your that is within 120 feet of you and can hear you must succeed on a Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." } 
    },
    {
        name: "Axe of Godrick",
        type: "Greataxe",
        rarity: "Very Rare",
        affinity: "Strength",
        description: "Greataxe wielded by Godrick the Grafted. This golden battleaxe is emblazoned with the figure of a beast, representing the strength of Godfrey, First Elden Lord and patriarch of the golden lineage. 'I command thee kneel! For I am the lord of all that is golden!'",
        passive: "This weapon deals additional slashing damage equal to your Strength modifier on a hit.",
        skill: { name: "I Command Thee, Kneel!", sp: 6, desc: "As an action, you slam this weapon into the ground repeatedly, ripping the earth up around you in a 15-foot radius around you. Each creature in the area must make a Strength saving throw. On a failure, the creature takes 18 (5d6) bludgeoning damage and is knocked prone. On a success, the target takes half as much damage and is not knocked prone. For the next minute, the area is difficult terrain." }
    },
    {
        name: "Azur's Glintstone Staff",
        type: "Glintstone Staff",
        rarity: "Legendary",
        affinity: "None",
        description: "Staff of the primeval glintstone sorcerer Azur. Only those who have glimpsed what lies beyond the wisdom of stone may wield it.",
        passive: "While holding this staff, you can use a bonus action to cast any spell you have prepared, without spending spell points or using any verbal or somatic components. Once used, this property of the staff can't be used again until the next dawn.",
        skill: null
    },
    {
        name: "Bastard's Stars",
        type: "Flail",
        rarity: "Very Rare",
        affinity: "Intelligence",
        description: "Flail which deals magic damage, having been imbued with power by the remembrance of Astel. Formed of the same many-colored star debris that comprised the form of the Naturalborn of the Void.",
        passive: "When you hit an aberration with this weapon, the aberration takes an extra 14 (4d6) bludgeoning damage.",
        skill: { name: "Nebula", sp: 5, desc: "You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point within 150-feet. The effect persists for 1 minute or until you lose your concentration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded. The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 7 (2d6) cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 7 (2d6) acid damage as milky, otherworldly tentacles rub against it." }
    },
    {
        name: "Battle Hammer",
        type: "Warhammer",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Large iron warhammer designed for gladiatorial combat. Used by duelists who were exiled from the colosseum. Weighty enough to crush armor and its wearer alike.",
        passive: null,
        skill: { name: "Braggart's Roar", sp: 3, desc: "As a bonus action, you bellow a boastful roar, declaring your dominance to the world. Until the beginning of your next turn, attack rolls against you have advantage, and you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks." }
    },
    {
        name: "Beast-Repellent Torch",
        type: "Torch",
        rarity: "Uncommon",
        affinity: "None",
        description: "A torch which burns oil infused with a special incense. The aroma pacifies wild beasts. Torches such as these were used to keep unwelcome beasts away from treasure troves hidden in caves.",
        passive: "While holding this torch, beasts have disadvantage on attack rolls while within 20 feet of you.",
        skill: null
    },
    {
        name: "Beastclaw Greathammer",
        type: "Maul",
        rarity: "Rare",
        affinity: "Strength",
        description: "Greathammer with a striking end modelled to resemble five beastly claws. The black nails protruding from golden fur are said to represent Serosh, Lord of Beasts, who went to become King Godfrey's Regent.",
        passive: null,
        skill: { name: "Regal Beastclaw", sp: 2, desc: "You cast beast claw." }
    },
    {
        name: "Black Bow",
        type: "Longbow",
        rarity: "Rare",
        affinity: "Dexterity",
        description: "Longbow carved from black wood to resemble a blade. One of the most difficult bows to master. The blade-like body of the bow is light and cuts through the air. Though a longbow, it can be wielded similarly to a shortbow.",
        passive: "This weapon lacks the heavy property. Firing it at long range does not impose disadvantage.",
        skill: { name: "Barrage", sp: 3, desc: "When you make a ranged weapon attack on your turn, you can use your bonus action to make an additional attack with this weapon." }
    },
    {
        name: "Black Knife",
        type: "Dagger",
        rarity: "Rare",
        affinity: "Wisdom",
        description: "Dagger once belonging to one of the assassins who murdered Godwyn the Golden on the Night of the Black Knives. A ritual performed on the oddly misshapen blade imbued it with the power of the stolen Rune of Death.",
        passive: "Damage inflicted by this weapon cannot be reduced in any way. When you hit a celestial with this weapon, the celestial takes an extra 11 (3d6) piercing damage.",
        skill: { name: "Blade of Death", sp: 5, desc: "As an action, you invoke the vestiges of Destined Death still held in this blade. A red-black flame coats the blade, shooting out as a ranged spell attack at a creature within 60 feet of you. This attack uses your Affinity modifier. On a hit, the target takes 14 (4d6) radiant damage immediately and an additional 7 (2d6) radiant damage at the end of its next turn. This attack is considered a ranged weapon attack for the purposes of the Sneak Attack ability. The target's hit point maximum is reduced by an amount equal to the radiant damage taken." }
    },
    {
        name: "Black Leather Shield",
        type: "Shield",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Roundshield covered in black leather. On the larger side for a medium-sized shield. From the north, this shield depicts the polar star in rivets of gold. The inside is lined with fur, protecting the carrier from frost.",
        passive: null,
        skill: { name: "Frost Parry", sp: 2, desc: "As a reaction to taking damage, you imbue your shield with chilling frost. Raising it in your defense, you gain resistance to cold damage until the start of your next turn." }
    },
    {
        name: "Blade of Calling",
        type: "Dagger",
        rarity: "Rare",
        affinity: "Wisdom",
        description: "Dagger given to one who set out on a journey to fulfill her duty long ago. The power of its former owner, the kindling maiden, still resides within.",
        passive: null,
        skill: { name: "Blade of Gold", sp: 4, desc: "As an action, you charge this blade with golden flame that shoots out as a ranged spell attack at a creature within 60 feet of you. This attack uses your Affinity modifier. On a hit, the target takes 21 (6d6) radiant damage. This attack is considered a ranged weapon attack for the purposes of the Sneak Attack ability." }
    },
    {
        name: "Blasphemous Blade",
        type: "Greatsword",
        rarity: "Legendary",
        affinity: "Charisma",
        description: "Sacred sword of Rykard, Lord of Blasphemy. Remains of the countless heroes he has devoured writhe upon the surface of this blade. Now they share the same blood, bound together as family. Some HP is restored upon defeating an enemy.",
        passive: "When a creature within 5 feet of you dies while you wield this magic weapon, you regain hit points equal to your character level modifier.",
        skill: { name: "Taker's Flames", sp: 9, desc: "As an action, you raise this blade above your head and bring it down, creating a fiery blast in a 5-foot-wide, 60-foot long line. Each creature in the line must make a Dexterity saving throw. A target takes 27 (6d8) fire damage on a failed save and you regain hit points equal to half the total damage inflicted. A target takes half as much damage on a successful save and you do not regain hit points from the damage taken." }
    },
    {
        name: "Bloodhound Claws",
        type: "Claws",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Large curved claws used by Bloodhound Knights. The curve allows the weapon to slip through an enemy's guard.",
        passive: "This weapon inflicts Bleed 1 on a hit.",
        skill: { name: "Bloodhound's Step", sp: 2, desc: "As a bonus action, you take the Disengage action. Until the end of your turn, you become invisible unless you attack or cast a spell." }
    },
    {
        name: "Bloodhound's Fang",
        type: "Cleaver",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Curved greatsword with a gently undulating blade wielded by Bloodhound Knights. A fearsome blade capable of brutal airborne attacks.",
        passive: "This weapon inflicts Bleed 1 on a hit.",
        skill: { name: "Bloodhound's Finesse", sp: 2, desc: "As a bonus action, you take the Dash and Disengage action simultaneously." }
    },
    {
        name: "Bloodstained Dagger",
        type: "Dagger",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Dagger with a bloodstained blade. Afflicts targets with blood loss. As blood darkened the dagger through repeated slashing and stabbing, its blade only grew sharper and harder.",
        passive: "This weapon inflicts Bleed 1 on a hit.",
        skill: { name: "Quickstep", sp: 1, desc: "As a bonus action, you move up to 5 feet in any direction without provoking attacks of opportunity. Your movement speed is reduced to 0 until the end of your turn." }
    },
    {
        name: "Bloody Helice",
        type: "Rapier",
        rarity: "Rare",
        affinity: "Dexterity",
        description: "Ominous piercing sword with a winding blade. Carried by the noble servants of the Lord of Blood. Designed to bore into flesh, causing severe blood loss at the wound. The extracted blood trickles gracefully down the length of the blade.",
        passive: "This weapon inflicts Bleed 1 on a hit.",
        skill: { name: "Dynast's Finesse", sp: 4, desc: "As a reaction to another creature hitting you with a melee attack, you can add your Affinity modifier to your AC, potentially causing the attack to miss you. If it does, you may make an attack with this weapon at your attacker as part of the same reaction if they are within your reach." }
    },
    {
        name: "Bolt of Gransax",
        type: "Spear",
        rarity: "Legendary",
        affinity: "Dexterity",
        description: "A spear whittled from the weapon wielded by Gransax. One of the legendary armaments.",
        passive: null,
        skill: { name: "Ancient Lightning Spear", sp: 9, desc: "As an action, you call a bolt of red lightning to this weapon, imbuing it with the power of ancient Gransax. Lifting you off the ground briefly, you release the lighting as a ranged spell attack using your Affinity modifier at a creature you can see within 300 feet of you. On a hit, the target takes 54 (12d8) lightning damage." }
    },
    {
        name: "Briar Greatshield",
        type: "Greatshield",
        rarity: "Rare",
        affinity: "Strength",
        description: "Greatshield from a foreign land, used by Elemer of the Briar. Attacks with this armament utilize the iron thorns that have been wound around its frame. Originates from Eochaid, a land of proudly solitary ascetics.",
        passive: null,
        skill: { name: "Thorn Retaliation", sp: 3, desc: "As a reaction to a creature within 5 feet of you making a melee attack against you, you thrust your shield towards them. Make a melee weapon attack with your Affinity modifier at the creature. On a hit, the target takes piercing damage equal to 3 (1d4) + your Affinity modifier and is afflicted by Bleed 1. If this reduces the target to 0 hit points, the triggering attack is nullified." }
    },
    {
        name: "Brick Hammer",
        type: "Maul",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Large iron warhammer designed for gladiatorial combat. Used by duelists who were exiled from the colosseum. Weighty enough to crush armor and its wearer alike.",
        passive: "This weapon deals double damage to objects and structures.",
        skill: { name: "Barbaric Roar", sp: 2, desc: "When you make your first attack on your turn, you can activate this ability, uttering a guttural roar. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn." }
    },
    {
        name: "Buckler",
        type: "Shield",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "A small metal roundshield. The bump in the center enables parrying techniques. A well-timed parry can break an enemy's stance, allowing a critical hit. Best suited for those prepared to take the risk to reap their reward.",
        passive: null,
        skill: { name: "Nimble Parry", sp: 1, desc: "As a reaction to another creature hitting you with a melee attack, you can add +2 to your AC, potentially causing the attack to miss you." }
    },
    {
        name: "Butchering Knife",
        type: "Cleaver",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Huge carving knife made to cleanly butcher the human body. Signature weapon of the Ogress Anastasia, known to have eaten countless Tarnished while disguised as a Finger Maiden. Restores a very small amount of HP when it squarely strikes an enemy.",
        passive: "When you hit a creature with this weapon, you regain 1 hit point.",
        skill: { name: "Barbaric Roar", sp: 2, desc: "When you make your first attack on your turn, you can activate this ability, uttering a guttural roar. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn." }
    },
    {
        name: "Carian Glintblade Staff",
        type: "Glintstone Staff",
        rarity: "Rare",
        affinity: "None",
        description: "Staff embedded with a blue glintstone. One of two types of Carian staff. Gifted to enchanted knights, it enhances Glintblade sorceries.",
        passive: "While holding this staff, Carian spells you cast that produce glintblades (eg. magic glintblade) gain a +2 bonus to spell attack rolls and saving throw DC.",
        skill: null
    },
    {
        name: "Carian Glintstone Staff",
        type: "Glintstone Staff",
        rarity: "Rare",
        affinity: "None",
        description: "Staff embedded with a blue glintstone. One of two types of Carian staff. Given to sorcerers that they might enact the role of knight. Enhances Carian sword sorceries.",
        passive: "While holding this staff, Carian spells you cast that conjure melee weapons (eg. carian slicer) gain a +2 bonus to spell attack rolls and saving throw DC.",
        skill: null
    },
    {
        name: "Carian Knight's Shield",
        type: "Shield",
        rarity: "Rare",
        affinity: "Strength",
        description: "A teardrop-shaped shield embedded with blue glintstones. Carried by knights who served the Carian royal family. Excels when facing magic or holy attacks. Just who were these knights preparing to fight?",
        passive: null,
        skill: { name: "Magic Parry", sp: 2, desc: "As a reaction to taking damage, you imbue your shield with glintstones. Raising it in your defense, you gain resistance to force damage until the start of your next turn." }
    },
    {
        name: "Carian Knight's Sword",
        type: "Longsword",
        rarity: "Uncommon",
        affinity: "Intelligence",
        description: "Straight sword embedded with a blue glintstone. Weapon of knights sworn to Carian royalty. These knights' swords could serve as catalysts, letting them wield sorcerous battle skills. Despite numbering fewer than twenty, this power made them a match for even the champions of gold in battle.",
        passive: "This sword can be used as a spellcasting focus for sorcery spells.",
        skill: { name: "Carian Grandeur", sp: 6, desc: "You cast carian greatsword. The range of the spell increases by 10 feet." }
    },
    {
        name: "Carian Regal Scepter",
        type: "Glintstone Staff",
        rarity: "Legendary",
        affinity: "Intelligence",
        description: "Magic scepter of Rennala, Queen of the Full Moon. The glintstone is known as a Carian Blue, enhancing full moon sorceries. Only those of the highest intelligence may wield this, the finest of all glintstone staves.",
        passive: "While holding this staff, Cosmic spells you cast gain a +2 bonus to spell attack rolls and saving throw DC. Creatures cannot have advantage on saving throws against spells you cast while wielding this staff. You may cast counterspell and dispel magic once per day each while wielding this staff.",
        skill: { name: "Spinning Weapon", sp: 2, desc: "As an action, you hold your hands in front of you, levitating your weapon and spinning it around you until the beginning of your next turn. When a creature moves within 5 feet of you or starts their turn within 5 feet of you, it must succeed on a Dexterity saving throw. A target takes 11 (3d6) slashing damage on a failed save, and half damage on a successful one." }
    },
    {
        name: "Celebrant's Weapon",
        type: "Cleaver",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Cleaver decorated with many-colored fabrics. Ceremonial tool used by dancers during the festivities of Dominula, Windmill Village. Crafted from human bone. Grants trace amounts of runes upon landing attacks.",
        passive: "When you hit a creature with this weapon you receive 5 runes.",
        skill: { name: "Wild Strikes", sp: 1, desc: "When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls during this turn, but attack rolls against you have advantage until your next turn." }
    },
    {
        name: "Chainlink Flail",
        type: "Flail",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "A spiked iron tube attached by a chain wielded by Mad Pumpkin Heads. Especially large for a flail, wielding it requires more strength than it does dexterity.",
        passive: "This weapon inflicts Bleed 1 on a hit.",
        skill: { name: "Spinning Chain", sp: 2, desc: "As a bonus action, you begin spinning the chain on your flail until the end of your next turn, preparing to strike at a moment's notice. When a creature moves within 5 feet of you or makes a melee attack against you, you may use your reaction to make an attack against the target with this weapon." }
    },
    {
        name: "Cinquedea",
        type: "Dagger",
        rarity: "Rare",
        affinity: "Dexterity",
        description: "Short sword given to high ranking clergymen of Farum Azula. Raises potency of bestial incantations. The design celebrates a beast's five fingers, symbolic of the intelligence once granted upon their kind.",
        passive: "While holding this dagger, you may add your Affinity modifier to one of the damage rolls you make when you cast a Bestial spell.",
        skill: { name: "Quickstep", sp: 1, desc: "As a bonus action, you move up to 5 feet in any direction without provoking attacks of opportunity. Your movement speed is reduced to 0 until the end of your turn." }
    },
    {
        name: "Cipher Pata",
        type: "Caestus",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "One of the weapons originating from the Two Fingers. A formless sequence of ciphers comprise its blade, and as such no shield can repel it. Deals holy damage. The furtive inscription appears to hang in the air; the language of light spoken by the Two Fingers.",
        passive: "This magic weapon is completely weightless, wrapping around your hand and springing from it in a straight line. It deals radiant damage instead of bludgeoning. The cipher emits bright light in a 15-foot radius and dim light for an additional 15 feet.",
        skill: { name: "Unblockable Blade", sp: 2, desc: "When you make an attack with this weapon, you can activate this skill as a free action to increase its reach by 15 feet. You have advantage on the attack if the target is wearing medium or heavy armor, or a shield." }
    },
    {
        name: "Clawmark Seal",
        type: "Sacred Seal",
        rarity: "Rare",
        affinity: "None",
        description: "A sacred seal given by Gurranq, the Beast Clergyman. The claw mark represents Gurranq's wrath. Enhances bestial incantations learned from Gurranq.",
        passive: "While holding this seal, Bestial spells you cast gain a +2 bonus to spell attack rolls and saving throw DC. When you cast a spell while holding this seal, you may use Strength as your spellcasting ability modifier.",
        skill: null
    },
    {
        name: "Clayman's Harpoon",
        type: "Spear",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Harpoon with a tip made from a sharpened meteorite shard. Wielded by the claymen who infest dynastic remains. The blade emits a faint light and deals magic damage.",
        passive: "This jagged harpoon deals an additional 3 (1d4) force damage on a hit. It emits dim light in a 5-foot radius. It also has the Thrown (30/120) property.",
        skill: { name: "Impaling Thrust", sp: 1, desc: "When you attack with this weapon, you may activate this skill as a free action to increase the reach of the attack by 5 feet." }
    },
    {
        name: "Cleanrot Spear",
        type: "Pike",
        rarity: "Rare",
        affinity: "Wisdom",
        description: "Spear of the Cleanrot Knights who fought alongside Melania, Blade of Miquella. The winged golden blade deals holy damage. The diminutive shield is blessed with an incantation that wards off rot.",
        passive: "This spear deals an additional 4 (1d6) radiant damage on a hit. You have advantage on saving throws against the Rotting condition while wielding this spear.",
        skill: { name: "Sacred Phalanx", sp: 5, desc: "As an action, you summon dozens of spears from holy light that burst from the ground in a 20-foot cone in front of you. The area is difficult terrain until the spears disappear at the end of your next turn. Each creature in the area must make a Dexterity saving throw. On a failed save, the target takes 11 (3d6) piercing damage and is restrained until the end of your next turn. On a successful save, the target takes half damage and is not restrained." }
    },
    {
        name: "Clinging Bone",
        type: "Caestus",
        rarity: "Rare",
        affinity: "Charisma",
        description: "Horrific weapon made of a hardened skeletal arm. Wielded by Ensha of the Royal Remains. Fitted by placing one's hands into the fists' grips until they dig in. 'O clinging creature. A king relinquishes not the hand.'",
        passive: null,
        skill: { name: "Lifesteal Fist", sp: 3, desc: "As an action, your fist wreathes itself in shadow and flame. Make a melee spell attack against a creature within your reach. On a hit, the target takes 11 (3d6) necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt." }
    },
    {
        name: "Coded Sword",
        type: "Longsword",
        rarity: "Very Rare",
        affinity: "Dexterity",
        description: "Hidden sword once granted to the Tarnished of the Roundtable by the Two Fingers. A formless cipher comprises its blade, which deals holy damage no shield can repel. Champions would gather at the Roundtable Hold in days long past, when the Two Fingers were masters of oration, their flesh yet full of vigor.",
        passive: "This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade made of radiant ciphers to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, proficient with the Coded Sword.",
        skill: { name: "Unblockable Blade", sp: 2, desc: "When you make an attack with this weapon, you can activate this skill as a free action to increase its reach by 15 feet. You have advantage on the attack if the target is wearing medium or heavy armor, or a shield." }
    },
    {
        name: "Commander's Standard",
        type: "Halberd",
        rarity: "Very Rare",
        affinity: "Charisma",
        description: "A beaten red battle standard is furled around this time-worn halberd. Even after his lord was fled, Commander O'Neil continued to brandish this flag in the devastation of the rot-eaten field of battle, the sole veteran who remembers this battle with pride.",
        passive: null,
        skill: { name: "Rallying Standard", sp: 6, desc: "As an action, you hold the war banner aloft and let the banner fly. You and up to six creatures you can see within 30 feet of you are emboldened for 1 minute. Each emboldened creature is immune to being frightened and gains temporary hit points equal to your Affinity modifier at the start of each of its turns. A creature must be within 30 feet of you to gain these benefits. This effect ends if you aren't wielding this weapon or if you are incapacitated." }
    },
    {
        name: "Coil Shield",
        type: "Shield",
        rarity: "Uncommon",
        affinity: "Constitution",
        description: "An extremely odd shield adorned with a coiled bronze snake. An excellent choice for attention-seekers. This Shield provides an effective defense against poison - after all, how does one poison a poisonous snake?",
        passive: null,
        skill: { name: "Viper Bite", sp: 1, desc: "When you make an attack, you may activate this skill as a free action to animate the viper coiled around this shield instead. Make a melee weapon attack at a creature within 10 feet. On a hit, the target takes 4 (1d6) piercing damage and must succeed on a Constitution saving throw or take 11 (3d6) poison damage." }
    },
    {
        name: "Composite Bow",
        type: "Shortbow",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Bow composited from a mix of Materials. Demands high attributes, and is tricky to wield, but is a fearsome tool when mastered.",
        passive: "Firing this bow at long range does not impose disadvantage.",
        skill: { name: "Mighty Shot", sp: 1, desc: "Until the end of your turn, before you make an attack with this weapon, you can choose to take a -5 penalty to the attack roll. If that attack hits, you add +10 to the attack's damage." }
    },
    {
        name: "Cranial Vessel Candlestand",
        type: "Maul",
        rarity: "Very Rare",
        affinity: "Wisdom",
        description: "A heavy, gruesome weapon constructed from the remains of a monk. Candlestand used in worship of Birac, the most hallowed Monk Prelate of the Giants' Flame.",
        passive: "This massive candlestand burns at the tip constantly, shedding bright light in a 10-foot radius and dim light for an additional 20 feet. On a hit, it deals an additional 5 (1d8) fire damage.",
        skill: { name: "Surge of Faith", sp: 5, desc: "As an action, you place this weapon on the ground before raising it abruptly into the air. Fire erupts from the vessel, ejecting fireballs that rain down from the sky. Choose a number of creatures up to your Affinity modifier that you can see within 30 feet of you. Each target must make a Dexterity saving throw. On a failed save, the creature takes 14 (4d6) fire damage. On a successful save, the target takes half as much damage." }
    },
    {
        name: "Crepus's Black-Key Crossbow",
        type: "Light Crossbow",
        rarity: "Rare",
        affinity: "Strength",
        description: "Black crossbow featuring a long stock. Used for sniping, it has a very long range. Weapon of Crepus, who served the Two Fingers from the shadows of the Roundtable as the head confessor.",
        passive: "Firing this bow at long range does not impose disadvantage. If you hit a creature with this crossbow with advantage on the roll, the attack deals an additional 5 (1d8) piercing damage.",
        skill: { name: "Kick", sp: 1, desc: "As a bonus action, you may shove a creature within 5 feet of you. You may use your Affinity modifier in place of Strength for the shove." }
    },
    {
        name: "Cross-Naginata",
        type: "Pike",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Weapon consisting of a three-pronged blade affixed to a long pole. The long central blade closely resembles a katana. A weapon of the Land of Reeds, known for its ability to be wielded as a spear while still being capable of performing slashing attacks.",
        passive: "This weapon inflicts Bleed 1 on a hit.",
        skill: { name: "Impaling Thrust", sp: 1, desc: "When you attack with this weapon, you may activate this skill as a free action to increase the reach of the attack by 5 feet." }
    },
    {
        name: "Crucible Hornshield",
        type: "Greatshield",
        rarity: "Rare",
        affinity: "Strength",
        description: "Greatshield of red-tinged gold carried by Crucible Knights. Features a great horn. An ancient holiness dwells within. The crucible horn skewers foes when performing shield bashes.",
        passive: null,
        skill: { name: "Horn Retaliation", sp: 2, desc: "As a reaction to a creature within 5 feet of you making a melee attack against you, you thrust your shield towards them. Make a melee weapon attack with your Affinity modifier at the creature. On a hit, the target takes piercing damage equal to 5 (1d8) + your Affinity modifier. If this reduces the target to 0 hit points, the triggering attack is nullified." }
    },
    {
        name: "Crystal Staff",
        type: "Glintstone Staff",
        rarity: "Rare",
        affinity: "None",
        description: "Staff fashioned from pure crystal; a deed impossible for a human. Enhances Crystalian sorceries. The Crystalian’s faint cognition is known as the “wisdom of stone.",
        passive: "While holding this staff, Crystallian spells you cast gain a +2 bonus to spell attack rolls and saving throw DC.",
        skill: null
    },
    {
        name: "Crystal Sword",
        type: "Longsword",
        rarity: "Rare",
        affinity: "Intelligence",
        description: "A sword forged from pure crystal. Its sharp edges possess innate magical properties.",
        passive: "When you attack with this magic weapon, you can use your Intelligence modifier for the attack and damage rolls.",
        skill: { name: "Quickstep", sp: 1, desc: "As a bonus action, you move up to 5 feet in any direction without provoking attacks of opportunity. Your movement speed is reduced to 0 until the end of your turn." }
    },
    {
        name: "Cuckoo Greatshield",
        type: "Greatshield",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Metal Greatshield painted with a peering cuckoo. Carried by the enchanted knights sworn to the academy. Boasting high magic damage negation, this shield is used to hunt down mages. Our enemy is none other than Caria itself.",
        passive: null,
        skill: { name: "Magic Parry", sp: 2, desc: "As a reaction to taking damage, you imbue your shield with glintstones. Raising it in your defense, you gain resistance to force damage until the start of your next turn." }
    },
    {
        name: "Dark Moon Greatsword",
        type: "Greatsword",
        rarity: "Legendary",
        affinity: "Intelligence",
        description: "A Moon Greatsword, bestowed by a Carian queen upon her spouse to honor long-standing tradition. One of the legendary armaments. Ranni's sigil is a full moon, cold and leaden, and this sword is but a beam of its light.",
        passive: "When you attack with this magic weapon, you can use your Intelligence modifier, instead of Strength or Dexterity modifier, for the attack and damage rolls. If you are Ranni's consort, you are proficient with this weapon. While wielding this sword, you have advantage on saving throws against spells and other magical effects.",
        skill: { name: "Moonlight Greatsword", sp: 3, desc: "When you make an attack with this weapon, you can raise it to the sky and invoke the dark moon as a free action. Instead of making a melee attack, you may instead create an arc of frozen moonlight that shoots out towards a creature you can see within 60 feet of you. Make a ranged spell attack at the target. On a hit, the target takes 22 (4d10) cold damage and must succeed on a Constitution saving throw or become frostbitten until the end of their next turn." }
    },
    {
        name: "Death Ritual Spear",
        type: "Spear",
        rarity: "Very Rare",
        affinity: "Intelligence",
        description: "Ritual spear used by priests of old who were permitted to come among the Deathbirds. The priests became guardians of the birds through the rite of Death, which also serves as an oath sworn to their distant resurrection.",
        passive: "This spear deals an additional 3 (1d4) force damage on a hit.",
        skill: { name: "Spearcall Ritual", sp: 5, desc: "As an action, you conjure dozens of spears that descend in a 20-foot radius, 60-foot high cylinder centered on a point you can see within range. Each creature in the area must make a Dexterity saving throw. A creature takes 20 (3d12) necrotic damage on a failed save, or half as much damage on a successful one." }
    },
    {
        name: "Death's Poker",
        type: "Greatsword",
        rarity: "Rare",
        affinity: "Intelligence",
        description: "Barbed rod carried by Deathbirds. The birds are graveyard fire keepers; it is said they rake out the ashen remains of the dead from their kilns.",
        passive: "When you hit a creature with this magic weapon, it must succeed on a Constitution saving throw or be frostbitten for 1 minute. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success.",
        skill: { name: "Ghostflame Ignition", sp: 6, desc: "As an action, you create a wall of ghostflame on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration. When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 23 (5d8) cold damage, or half as much damage on a successful save. One side of the wall, selected by you when you use this skill, deals 23 (5d8) cold damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage." }
    },
    {
        name: "Demi-Human Queen's Staff",
        type: "Glintstone Staff",
        rarity: "Uncommon",
        affinity: "None",
        description: "Glintstone staff styled as a scepter. A gift once given to the demi-humans to foster peace, it can be wielded even by those of low intelligence. Sneered at by fools in the academy.",
        passive: "Spells you cast while wielding this staff have a minimum spell attack modifier of +5 and a minimum spell save DC of 13.",
        skill: null
    },
    {
        name: "Devourer's Scepter",
        type: "Maul",
        rarity: "Legendary",
        affinity: "Charisma",
        description: "Scepter in the shape of a serpent devouring the world. This weapon will one day become the very symbol of the Lord of Blasphemy. One of the legendary armaments. A vision of the future briefly seen by Rykard in his final moments before being devoured by the great serpent.",
        passive: "This weapon has a reach of 10 feet and deals an additional 7 (2d6) fire damage on a hit. If your Strength score is 20 or higher, you can wield this weapon with one hand.",
        skill: { name: "Devourer of Worlds", sp: 8, desc: "As an action, you slam the hilt of your weapon into the ground, drawing the vitality of others into yourself. Each creature within 20 feet of you must make a Charisma saving throw. On a failed save, the creature takes 18 (5d6) necrotic damage and you regain hit points equal to half the total damage dealt. On a successful save, the creature takes half as much damage and you don't regain hit points." }
    },
    {
        name: "Digger's Staff",
        type: "Glintstone Staff",
        rarity: "Uncommon",
        affinity: "None",
        description: "Staff of a sorcerer-miner who extracts glintstone from crystal tunnels. The staff itself is a tool used to mine, and the ferrule is also embedded with a glintstone. Boosts the power of Stonedigger sorceries.",
        passive: "Spells you cast while wielding this staff deal double damage to objects and structures. Creatures made of inorganic material such as stone, crystal, or metal have disadvantage on saving throws against spells you cast with this staff.",
        skill: null
    },
    {
        name: "Dismounter",
        type: "Cleaver",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "This curved greatsword wielded by the brawny sellswords of Kaiden combines the blades of a scimitar with the heft of a hatchet. A difficult to handle weapon that demands much of the wielder's strength and dexterity, but with practice and ability, it can serve as a versatile weapon even on horseback.",
        passive: "While you wield this weapon while mounted, you have advantage on attack rolls with this weapon against other mounted creatures.",
        skill: { name: "Spinning Slash", sp: 4, desc: "You spin your blade in a circle around you, attacking a number of separate targets equal to at most your proficiency modifier. These attacks are made at disadvantage." }
    },
    {
        name: "Dragon Communion Seal",
        type: "Sacred Seal",
        rarity: "Rare",
        affinity: "None",
        description: "Formless drakeblood seal with a dragon communion crest. Enhances Dragon Communion incantations. The sacrificial devouring of the heart gives power. Indeed, Dragon Communion is too primal in nature for the term \"incantation\" to be appropriate.",
        passive: "While holding this seal, Dragon Communion spells you cast gain a +2 bonus to spell attack rolls and saving throw DC.",
        skill: null
    },
    {
        name: "Dragon Greatclaw",
        type: "Colossal Weapon",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Weapon said to have been whittled from the claw of a great, ancient dragon, wielded by grotesque Tree Sentinels who yet serve the Erdtree. The claw is enwreathed with lightning, and tears through the dragons' feeble descendants with ease.",
        passive: "This weapon deals an additional 5 (1d8) lightning damage on a hit. When you hit a dragon with this weapon, the dragon takes an extra 7 (2d6) points of bludgeoning damage.",
        skill: { name: "Endure", sp: 0, desc: "As an action, you steel yourself to harm for a brief time. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks." }
    },
    {
        name: "Dragon Halberd",
        type: "Halberd",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Halberd shaped like a dragon, enwreathed with both ice and lightning. Alas, the Dragonkin Soldiers never attained immortality, and perished as decrepit, pale imitations of their skyborn kin.",
        passive: "When you activate this weapon's skill, it becomes wreathed in frost and lightning. Until the beginning of your next turn, it deals an additional 3 (1d4) cold and 3 (1d4) lightning damage on a hit, and the target must succeed on a Constitution saving throw or be frostbitten until the end of its next turn.",
        skill: { name: "Spinning Slash", sp: 4, desc: "You spin your blade in a circle around you, attacking a number of separate targets equal to at most your proficiency modifier. These attacks are made at disadvantage." }
    },
    {
        name: "Dragon King's Cragblade",
        type: "Rapier",
        rarity: "Legendary",
        affinity: "Strength",
        description: "Piercing Gravel Stone sword containing primeval lightning. A portion of the Dragonlord's power, gained from a remembrance. This weapon commands great power over the paltry, mortal dragons of today.",
        passive: "This weapon deals an additional 5 (1d8) lightning damage on a hit. When you hit a dragon with this weapon, the dragon takes an extra 14 (4d6) points of piercing damage.",
        skill: { name: "Thundercloud Form", sp: 10, desc: "You transform into a thundercloud for the duration, along with everything it's wearing and carrying. You return to your normal form after a minute, if you drop to 0 hit points, or if you use a bonus action to untransform." }
    },
    {
        name: "Dragonclaw Shield",
        type: "Greatshield",
        rarity: "Rare",
        affinity: "Strength",
        description: "Greatshield said to have been whittled from the claw of a great, ancient dragon, wielded by grotesque Tree Sentinels who yet serve the Edrtree. Imbued with lightning.",
        passive: null,
        skill: { name: "Lightning Parry", sp: 2, desc: "As a reaction to taking damage, you imbue your shield with lightning. Raising it in your defense, you gain resistance to lightning damage until the start of your next turn." }
    },
    {
        name: "Dragonscale Blade",
        type: "Katana",
        rarity: "Uncommon",
        affinity: "Wisdom",
        description: "A heretical staff fashioned from a smoldering, withered sapling that turns the blood of sacrifices pierced by it into glintstone. Similar to hex magic. This staff which enhances Thorn sorceries in particular.",
        passive: "When you activate this weapon's skill, it becomes wreathed in frost and lightning. Until the beginning of your next turn, it deals an additional 3 (1d4) cold and 3 (1d4) lightning damage on a hit, and the target must succeed on a Constitution saving throw or be frostbitten until the end of its next turn.",
        skill: { name: "Ice Lightning Sword", sp: 0, desc: "You cast honed bolt." }
    },
    {
        name: "Eclipse Shotel",
        type: "Scimitar",
        rarity: "Legendary",
        affinity: "Wisdom",
        description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color. One of the legendary armaments. In Sol, the sight of an eclipse inspires a dreadful awe, preventing an onlooker from averting his gaze.",
        passive: "When you attack a creature with this weapon and miss, the target still takes 5 (1d8) necrotic damage.",
        skill: { name: "Death Flare", sp: 7, desc: "As a bonus action, you coat this blade in blackflame, imbued with Godwyn's death blight. For the next minute, when you hit a humanoid creature with this weapon for the first time each turn, it must succeed on a Constitution saving throw or gain a level of exhaustion." }
    },
    {
        name: "Eleonora's Poleblade",
        type: "Twinblade",
        rarity: "Rare",
        affinity: "Constitution",
        description: "Twinned naginata forged in the Land of Reeds. Chosen weapon of Eleonora, Violet Bloody Finger. Her mastery of the sword was such that her onslaught was likened to a whirlwind, but now her legacy is stained by accursed blood.",
        passive: "This weapon inflicts Bleed 1 on a hit.",
        skill: { name: "Bloodblade Dance", sp: 2, desc: "As a reaction to a creature within 5 feet of you failing a saving throw against Bleed, you may make an attack against them. If the target is afflicted by Bleed by being hit, it must make the Bleed save immediately." }
    },
    {
        name: "Envoy's Greathorn",
        type: "Colossal Weapon",
        rarity: "Rare",
        affinity: "Intelligence",
        description: "Fanned golden horn of the Oracle Envoys. Profoundly weighty, its blows are sure to be felt. Originally an instrument, but one that cannot be sounded by a mere human. Or perhaps it is too early to sound the call.",
        passive: "This weapon deals an additional 4 (1d6) radiant damage on a hit.",
        skill: { name: "Great Oracular Bubble", sp: 5, desc: "You cast great oracular bubble. The spell deals radiant damage instead of its normal damage type." }
    },
    {
        name: "Envoy's Horn",
        type: "Warhammer",
        rarity: "Uncommon",
        affinity: "Intelligence",
        description: "Golden horn of the Oracle Envoys. Profoundly weighty, its blows are sure to be felt. Originally an instrument, but one that cannot be sounded by a mere human. Or perhaps it is too early to sound the call.",
        passive: "This weapon deals an additional 3 (1d4) radiant damage on a hit.",
        skill: { name: "Oracular Bubble", sp: 6, desc: "You conjure a 5-foot diameter bubble of magic. The bubble drifts 15 feet towards a point you choose within range. The bubble moves an additional 15 feet at the beginning of each of your turns. When the spell ends, or when the bubble collides with a creature or object, the bubble pops in a 5-foot radius burst. Each creature in the area must succeed on a Dexterity saving throw or take 14 (4d6) force damage." }
    },
    {
        name: "Envoy's Long Horn",
        type: "Maul",
        rarity: "Uncommon",
        affinity: "Wisdom",
        description: "Long golden horn of the Oracle Envoys. Profoundly weighty, its blows are sure to be felt. Originally an instrument, but one that cannot be sounded by a mere human. Or perhaps it is too early to sound the call.",
        passive: "This weapon deals an additional 4 (1d6) radiant damage on a hit.",
        skill: { name: "Bubble Shower", sp: 2, desc: "You cast oracle bubbles. The spell does radiant damage instead of force damage." }
    },
    {
        name: "Erdsteel Dagger",
        type: "Dagger",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "An erdsteel dagger with a grass crest engraved upon its blade. Carried by the Erdtree royalty for self-defense in times of peace.",
        passive: "When you attack with this magic weapon, you can use your Wisdom modifier, instead of Strength or Dexterity modifier, for the attack and damage rolls.",
        skill: { name: "Quickstep", sp: 1, desc: "As a bonus action, you move up to 5 feet in any direction without provoking attacks of opportunity. Your movement speed is reduced to 0 until the end of your turn." }
    },
    {
        name: "Erdtree Bow",
        type: "Longbow",
        rarity: "Rare",
        affinity: "Dexterity",
        description: "Longbow featuring Erdtree styling. In times of old, when faith and battle went hand in hand, this weapon was created in tandem with the Golden Arrow. Scales all arrow damage with faith, revealing its true worth when used with holy-infused arrows.",
        passive: "When you attack with this magic weapon, you can use your Wisdom modifier, instead of Strength or Dexterity modifier, for the damage rolls. When you hit a creature with an arrow that deals radiant damage fired from this weapon, the target takes an additional 5 (1d8) radiant damage.",
        skill: { name: "Mighty Shot", sp: 1, desc: "Until the end of your turn, before you make an attack with this weapon, you can choose to take a -5 penalty to the attack roll. If that attack hits, you add +10 to the attack's damage." }
    },
    {
        name: "Erdtree Greatbow",
        type: "Greatbow",
        rarity: "Very Rare",
        affinity: "Dexterity",
        description: "Greatbow featuring Erdtree styling. In times of old, when faith and battle went hand in hand, this weapon was created in tandem with the Golden Great Arrow. Scales all arrow damage with faith, revealing its true worth when used with holy-infused arrows.",
        passive: "When you attack with this magic weapon, you can use your Wisdom modifier, instead of Strength or Dexterity modifier, for the damage rolls. When you hit a creature with an arrow that deals radiant damage fired from this weapon, the target takes an additional 5 (1d8) radiant damage.",
        skill: { name: "Through and Through", sp: 4, desc: "You draw the string of this weapon as far as it will go, firing an arrow in a straight line of length equal to the bow's first range increment. Make an attack roll against the creature in that line nearest to you. On a hit, the target takes damage as normal and the arrow punctures through them and continues in the line, striking each target in the line. Each target hit reduces the attack roll of the arrow by 1." }
    },
    {
        name: "Erdtree Greatshield",
        type: "Greatshield",
        rarity: "Rare",
        affinity: "Wisdom",
        description: "Weighty greatshield forged of gold carried by the order of Tree Sentinels, heavily equipped knights. Blessed by an old incantation of protection. The living rampart of the Erdtree, the Tree Sentinels are the standard to which all defenders of the Erdtree aspire.",
        passive: null,
        skill: { name: "Golden Retaliation", sp: 2, desc: "As a reaction to being targeted by a ranged spell attack, you can raise your shield and produce an Erdtree sigil, imposing disadvantage on the attack roll. If the attack misses, the sigil turns into a golden dart that hits the attacker, dealing radiant damage equal to 3 (1d4) + your Affinity modifier." }
    },
    {
        name: "Erdtree Seal",
        type: "Sacred Seal",
        rarity: "Rare",
        affinity: "None",
        description: "A formless sacred seal decorated with an Erdtree crest, once the focus of religion in the Lands Between. Even though the Elden Ring is shattered, and the Erdtree has dulled from its former radiance, earnest faith continues to hold the answers.",
        passive: "While holding this seal, Erdtree spells that restore hit points to a creature restore additional hit points equal to your Wisdom modifier.",
        skill: null
    },
    {
        name: "Executioner's Greataxe",
        type: "Greataxe",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Bulky cleaver welded to a long haft. Said to have been used to dispatch the remnants of defeated armies, felling them like timber. Perhaps that is the reason it excels at critical hits.",
        passive: "When you roll a 20 on your attack roll with this magic weapon, the target takes an extra 7 slashing damage.",
        skill: { name: "War Cry", sp: 1, desc: "As a bonus action, you give a fierce battle cry. Until the end of your turn, you have a +1 bonus to attack and damage rolls with melee weapons." }
    },
    {
        name: "Fallingstar Beast Jaw",
        type: "Colossal Weapon",
        rarity: "Very Rare",
        affinity: "Intelligence",
        description: "Part of a Fallingstar Beast's jaw, hard and shining black, fashioned into a weapon. With its sharp point, this colossal weapon can skewer foes.",
        passive: "When you hit an aberration with this weapon, the aberration takes an extra 7 (2d6) slashing damage.",
        skill: { name: "Gravity Bolt", sp: 1, desc: "As an action, you collect gravitational magic around a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 20 (3d12) bludgeoning damage. The target gains no benefit from cover for this saving throw." }
    },
    {
        name: "Family Heads",
        type: "Flail",
        rarity: "Rare",
        affinity: "Intelligence",
        description: "Three bludgeoning copper heads attached to a handle by chains. Signature weapon of Necromancer Garris, the heretical sage. The heads were made to resemble those of his wife and two children.",
        passive: null,
        skill: { name: "Familial Rancor", sp: 5, desc: "You cast rancorcall." }
    },
    {
        name: "Fingerprint Stone Shield",
        type: "Greatshield",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "A great stone shield with an intricately carved fingerprint design. One of the heaviest of all greatshields. Part of the tomb of an ancient god, the Readerless Fingers relayed their message through these imprints, said to be the very seeds from which frenzy first sprouted.",
        passive: null,
        skill: { name: "Fire Parry", sp: 2, desc: "As a reaction to taking damage, you imbue your shield with hardened obsidian. Raising it in your defense, you gain resistance to fire damage until the start of your next turn." }
    },
    {
        name: "Flowing Curved Sword",
        type: "Scimitar",
        rarity: "Rare",
        affinity: "Dexterity",
        description: "Legends speak of a master of the sword garbed in blue, and his curved blade that was patterned after flowing water. Attacks unleashe a series of strikes akin to a dance, offering a glimpse into the legend.",
        passive: "You can make one attack with this magic weapon as a bonus action on each of your turns.",
        skill: { name: "Spinning Slash", sp: 4, desc: "You spin your blade in a circle around you, attacking a number of separate targets equal to at most your proficiency modifier. These attacks are made at disadvantage." }
    },
    {
        name: "Forked Hatchet",
        type: "Handaxe",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Peculiar hatchet wielded by imps. The gently undulating forked blade is known as an \"imp's tongue\" and causes blood loss.",
        passive: "This weapon inflicts Bleed 1 on a hit.",
        skill: { name: "Quickstep", sp: 1, desc: "As a bonus action, you move up to 5 feet in any direction without provoking attacks of opportunity. Your movement speed is reduced to 0 until the end of your turn." }
    },
    {
        name: "Frenzied Flame Seal",
        type: "Sacred Seal",
        rarity: "Rare",
        affinity: "None",
        description: "Formless sacred seal bestowed by the maiden of the Three Fingers. Enhances incantations of the frenzied flame. This seal is the mark of the Lord of Frenzied Flame.",
        passive: "While holding this seal, Frenzied Flame spells you cast gain a +2 bonus to spell attack rolls and saving throw DC.",
        skill: null
    },
    {
        name: "Frozen Needle",
        type: "Rapier",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "A razor-thin piercing blade of ice. Forged by Iji, the Carian Royal Blacksmith. Can inflict frost upon enemies, and launch its blade with a strong attack. The blade immediately regenerates.",
        passive: "When you hit a creature with this magic weapon, it must succeed on a Constitution saving throw or be frostbitten for 1 minute. The target can make another Constitution saving throw, ending the condition on a success. When you make an attack with this weapon, you can instead make a ranged spell attack (range 60 feet). On a hit, the target is affected as if it were hit with the blade, except that the damage is cold instead of piercing.",
        skill: { name: "Impaling Thrust", sp: 1, desc: "When you attack with this weapon, you may activate this skill as a free action to increase the reach of the attack by 5 feet." }
    },
    {
        name: "Full Moon Crossbow",
        type: "Light Crossbow",
        rarity: "Rare",
        affinity: "Strength",
        description: "One-of-a-kind enchanted crossbow of exquisitely detailed craftsmanship. Made to celebrate the matrimonial union, and reconciliation, between the houses of the Erdtree and the Full Moon, Leyndell and Raya Lucaria. The two rings dance when reloading the weapon. Reveals true worth when used with holy-infused bolts.",
        passive: "When you attack with this magic weapon, you can use your Intelligence modifier, instead of Strength or Dexterity modifier, for damage rolls. When you fire a bolt that deals radiant damage that hits a creature, the target takes an additional 5 (1d8) radiant damage.",
        skill: { name: "Kick", sp: 1, desc: "As a bonus action, you may shove a creature within 5 feet of you. You may use your Affinity modifier in place of Strength for the shove." }
    },
    {
        name: "Gargoyle's Black Axe",
        type: "Greataxe",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Bronze greataxe wielded by Valiant Gargoyle, mended with blackened corpse wax. Deals holy damage. Such is the mark of those who serve Maliketh, the Black Blade.",
        passive: "This weapon deals an additional 5 (1d8) radiant damage on a hit.",
        skill: { name: "War Cry", sp: 1, desc: "As a bonus action, you give a fierce battle cry. Until the end of your turn, you have a +1 bonus to attack and damage rolls with melee weapons." }
    },
    {
        name: "Gargoyle's Black Blades",
        type: "Twinblade",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Bronze twinblade wielded by Valiant Gargoyle, mended with blackened corpse wax. Deals holy damage. Such is the mark of those who serve Maliketh, the Black Blade.",
        passive: "This weapon deals an additional 5 (1d8) radiant damage on a hit.",
        skill: { name: "Spinning Slash", sp: 4, desc: "You spin your blade in a circle around you, attacking a number of separate targets equal to at most your proficiency modifier. These attacks are made at disadvantage." }
    },
    {
        name: "Gargoyle's Blackblade",
        type: "Greatsword",
        rarity: "Uncommon",
        affinity: "Wisdom",
        description: "Bronze greatsword wielded by Valiant Gargoyle mended with blackened corpse wax. Deals holy damage. Such is the mark of those who serve Maliketh, the Black Blade.",
        passive: "This weapon deals an additional 5 (1d8) radiant damage on a hit.",
        skill: { name: "Corpse Wax Cutter", sp: 6, desc: "As an action, you draw the power of corpse wax out of this blade, unleashing a pale imitation of Destined Death in a 60-foot long, 5-foot wide line out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 28 (8d6) radiant damage on a failed save, or half as much damage on a successful one." }
    },
    {
        name: "Gargoyle's Great Axe",
        type: "Greataxe",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Bronze greataxe wielded by Valiant Gargoyle. Just like the wielder, the missing part have been mended with corpse wax; a patchwork of champions.",
        passive: "This weapon deals an additional 5 (1d8) radiant damage on a hit.",
        skill: { name: "War Cry", sp: 1, desc: "As a bonus action, you give a fierce battle cry. Until the end of your turn, you have a +1 bonus to attack and damage rolls with melee weapons." }
    },
    {
        name: "Gargoyle's Greatsword",
        type: "Greatsword",
        rarity: "Uncommon",
        affinity: "Constitution",
        description: "Bronze greatsword wielded by Valiant Gargoyle. Just like the wielder, the missing parts have been mended with corpse wax; a patchwork of champions.",
        passive: "This weapon deals an additional 5 (1d8) radiant damage on a hit.",
        skill: { name: "Vacuum Slice", sp: 4, desc: "You collect wind with your blade and unleash it in a 30-foot line from yourself. Each creature caught in the line must make a Dexterity saving throw. A target takes 14 (4d6) slashing damage on a failed save, or half as much damage on a successful one." }
    },
    {
        name: "Gargoyle's Halberd",
        type: "Halberd",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Bronze halberd wielded by Valiant Gargoyle. Just like the wielder, the missing parts have been mended with corpse wax; a patchwork of champions.",
        passive: "This weapon deals an additional 5 (1d8) radiant damage on a hit.",
        skill: { name: "Spinning Slash", sp: 4, desc: "You spin your blade in a circle around you, attacking a number of separate targets equal to at most your proficiency modifier. These attacks are made at disadvantage." }
    },
    {
        name: "Gargoyle's Twinblade",
        type: "Twinblade",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Bronze twinblade wielded by Valiant Gargoyle. Just like the wielder, the missing parts have been mended with corpse wax; a patchwork of champions.",
        passive: "This weapon deals an additional 5 (1d8) radiant damage on a hit.",
        skill: { name: "Spinning Slash", sp: 4, desc: "You spin your blade in a circle around you, attacking a number of separate targets equal to at most your proficiency modifier. These attacks are made at disadvantage." }
    },
    {
        name: "Gelmir Glintstone Staff",
        type: "Glintstone Staff",
        rarity: "Rare",
        affinity: "None",
        description: "Staff with a forked tip, embedded with red glintstones. Enhances lava sorceries. The Man-Serpents of Mt. Gelmir draw from faith in addition to intelligence to enhance the potency of their sorcery.",
        passive: "While holding this staff, Magma spells you cast gain a +2 bonus to spell attack rolls and saving throw DC. Spells you cast while wielding this staff may use your Wisdom modifier in place of Intelligence.",
        skill: null
    },
    {
        name: "Ghiza's Wheel",
        type: "Colossal Weapon",
        rarity: "Rare",
        affinity: "Strength",
        description: "Great iron wheel lined with flesh-flaying blades. Device of torture used by Inquisitor Ghiza. As the wheel spins it causes severe pain and blood loss. The design was adopted for use as the iconic weapon wielded by Iron Virgins.",
        passive: "This weapon inflicts Bleed 1 on a hit.",
        skill: { name: "Spinning Wheel", sp: 3, desc: "As a reaction to a creature making a saving throw against Bleed, you can spin the jagged teeth of this weapon into their flesh, imposing disadvantage on the save." }
    },
    {
        name: "Ghostflame Torch",
        type: "Torch",
        rarity: "Uncommon",
        affinity: "None",
        description: "Metal torch that burns with cold ghostflame. Tool of the Fallen Hawks who prowl the underground rivers. When the band's last embers were used up in their long search, they began to burn the bones of their fellows, acquiring the cold ghostflame, but sealing their fate as dwellers of the underground for all eternity.",
        passive: "This torch inflicts cold damage on a hit instead of fire. When you hit a creature with this torch, it must succeed on a Constitution saving throw or be frostbitten for 1 minute. The target can make another Constitution saving throw, ending the condition on a success.",
        skill: null
    },
    {
        name: "Giant-Crusher",
        type: "Colossal Weapon",
        rarity: "Rare",
        affinity: "Strength",
        description: "A hammer made from a boulder, used in the War against the Giants. One of the heftiest weapons in the entire Lands Between. After the giants were quelled, and man turned against man in violence, this weapon was all but forgotten. Man has grown feeble in comparison to his forebears.",
        passive: "If your Strength score is less than 20, attacks you make with this weapon are made at disadvantage. When you hit a creature with an attack with this weapon, it must succeed on a Strength saving throw or be knocked prone. When you hit a prone creature with an attack with this weapon, it is automatically a critical hit.",
        skill: { name: "Endure", sp: 0, desc: "As an action, you steel yourself to harm for a brief time. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks." }
    },
    {
        name: "Giant's Red Braid",
        type: "Whip",
        rarity: "Very Rare",
        affinity: "Charisma",
        description: "Hefty whip woven from the flame-red hair of a Fire Giant. Every giant is red of hair, and Radagon was said to have despised his own red locks. Perhaps that was a curse of their kind.",
        passive: "This weapon deals an additional 5 (1d8) fire damage on a hit.",
        skill: { name: "Flame Dance", sp: 4, desc: "When you make an attack with this weapon, you may activate this skill to engulf the whip in flames. It deals an additional 7 (2d6) fire damage on a hit until the end of your turn." }
    },
    {
        name: "Giant's Seal",
        type: "Sacred Seal",
        rarity: "Rare",
        affinity: "None",
        description: "Sacred seal depicting the one eyed god of the Fire Giants, adorned with braids of red hair. Sacred seal wielded by Fire Monks and Prelates, this catalyst enhances Giants' Flame incantations.",
        passive: "While holding this seal, Ruinous Flame spells you cast gain a +2 bonus to spell attack rolls and saving throw DC.",
        skill: null
    },
    {
        name: "Gilded Iron Shield",
        type: "Shield",
        rarity: "Uncommon",
        affinity: "Wisdom",
        description: "Small metal roundshield. Heavier than a wooden shield, but boasts higher damage negation. Though the gold leaf is peeling and the effect is slight, it still boosts holy damage negation.",
        passive: null,
        skill: { name: "Golden Parry", sp: 2, desc: "As a reaction to taking damage, you imbue your shield with brilliant gold. Raising it in your defense, you gain resistance to radiant damage until the start of your next turn." }
    },
    {
        name: "Glintstone Kris",
        type: "Dagger",
        rarity: "Rare",
        affinity: "Intelligence",
        description: "Ritual blade once presented to Leyndell by the Academy of Raya Lucaria to celebrate their newfound peace. Though the weapon is embedded with precious glintstones and features Erdtree ornamentation, the undulating blade is symbolic of an ancient ritual.",
        passive: "This weapon deals an additional 3 (1d4) force damage on a hit. When you attack with this magic weapon, you can use your Intelligence modifier, instead of Strength or Dexterity modifier, for the attack and damage rolls.",
        skill: { name: "Glintstone Dart", sp: 3, desc: "You cast glintstone pebble, followed by a melee attack with this weapon at a creature within your reach." }
    },
    {
        name: "Godskin Peeler",
        type: "Twinblade",
        rarity: "Very Rare",
        affinity: "Charisma",
        description: "Unique twinblade wielded by Godskin Apostles characterized by its disturbing design. One end features a sickle for slicing attacks while the other boasts a winding spike for boring into flesh. Much skill is required to wield this weapon due to its asymmetric nature.",
        passive: "Damage inflicted by this weapon ignores damage resistances and immunities of celestials.",
        skill: { name: "Black Flame Tornado", sp: 10, desc: "As an action, you whip up a whirlwind of black flame in a 10-foot radius, 50-foot high cylinder around you. The area is difficult terrain. A creature must make a Dexterity saving throw the first time it enters the whirlwind or ends its turn there. It takes 14d6 fire damage on a failed save, or half on a success. Ignores celestial resistances." }
    },
    {
        name: "Godskin Stitcher",
        type: "Rapier",
        rarity: "Rare",
        affinity: "Dexterity",
        description: "Elegant piercing sword with a celadon colored blade wielded by Godskin Nobles. The nobles possess skill with the sword unmatched by any lowborn. Despite its size, successive attacks from this weapon are swifter than the eye can follow.",
        passive: "Damage inflicted by this weapon ignores damage resistances and immunities of celestials.",
        skill: { name: "Impaling Thrust", sp: 1, desc: "When you attack with this weapon, you may activate this skill as a free action to increase the reach of the attack by 5 feet." }
    },
    {
        name: "Godslayer's Greatsword",
        type: "Ultra Greatsword",
        rarity: "Very Rare",
        affinity: "Charisma",
        description: "Sacred sword of the Dusk-Eyed Queen who controlled the Godskin Apostles before her defeat at the hands of Maliketh. The black flames wielded by the apostles are channeled from this sword.",
        passive: "This weapon inflicts an additional 6 (1d10) fire damage on a hit. Damage inflicted by this weapon ignores damage resistances and immunities of celestials.",
        skill: { name: "The Queen's Black Flame", sp: 2, desc: "As a bonus action, you set this weapon ablaze with god-slaying black flame. Until the end of your turn, this weapon inflicts an additional 5 (1d8) fire damage. If the target is a Celestial, the weapon inflicts an additional 14 (3d8) fire damage instead." }
    },
    {
        name: "Godslayer's Seal",
        type: "Sacred Seal",
        rarity: "Rare",
        affinity: "None",
        description: "Sacred seal of the Godskin Apostles, inlaid with obsidian. Said to represent the manipulation of black flame, this catalyst enhances godslayer incantations.",
        passive: "While holding this seal, Godskin Apostle spells you cast gain a +2 bonus to spell attack rolls and saving throw DC. Damage inflicted by spells you cast with this seal ignores damage resistances and immunities of celestials.",
        skill: null
    },
    {
        name: "Golden Epitaph",
        type: "Longsword",
        rarity: "Very Rare",
        affinity: "Wisdom",
        description: "A sword made to commemorate the death of Godwyn the Golden, first of the demigods to die. Infused with the humble prayer of a young boy; 'O brother, lord brother, please die a true death.'",
        passive: "When you attack with this magic weapon, you can use your Wisdom modifier, instead of Strength or Dexterity modifier, for the attack and damage rolls. When you hit an undead with this weapon, the undead takes an extra 7 (2d6) radiant damage.",
        skill: { name: "Last Rites", sp: 4, desc: "As a bonus action, you raise your blade aloft, invoking the Golden Order and blessing up to 6 creatures within 30 feet of you. Blessed creatures' weapon attacks deal an extra 3 (1d4) radiant damage on a hit. The effect persists for 1 minute or until you lose your concentration." }
    },
    {
        name: "Golden Halberd",
        type: "Halberd",
        rarity: "Rare",
        affinity: "Wisdom",
        description: "Weighty halberd forged of gold. Wielded by the Order of Tree Sentinels, heavily equipped knights. A masterfully crafted weapon that lives up to its heft, but is difficult for one mere human strength to wield.",
        passive: "When you attack with this magic weapon, you can use your Wisdom modifier, instead of Strength or Dexterity modifier, for the attack and damage rolls. When you hit an undead with this weapon, the undead takes an extra 4 (1d6) radiant damage.",
        skill: { name: "Golden Vow", sp: 6, desc: "You cast golden vow." }
    },
    {
        name: "Golden Order Greatsword",
        type: "Greatsword",
        rarity: "Legendary",
        affinity: "Wisdom",
        description: "Greatsword made of light, modeled after the Elden Ring itself. Forged by King Consort Radagon to proudly symbolize the tenets of the Golden Order. One of the legendary armaments. Telltale signs betray that this was once the greatsword bequeathed to him by his first wife, Rennala.",
        passive: "When you attack with this magic weapon, you can use your Wisdom modifier, instead of Strength or Dexterity modifier, for the attack and damage rolls. When you hit an undead with this weapon, the undead takes an extra 11 (3d6) radiant damage.",
        skill: { name: "Establishing Order", sp: 10, desc: "As an action, you invoke a 10-foot radius golden wave. Each creature in the area must make a Charisma save. On a fail, it suffers an effect based on HP: 50 or fewer (deafened 1 min), 40 or fewer (deafened/blinded 10 mins). Then, for 1 min, you can use an action to fire a 15x30ft line of divine energy dealing 23 (5d8) radiant damage." }
    },
    {
        name: "Golden Order Seal",
        type: "Sacred Seal",
        rarity: "Rare",
        affinity: "None",
        description: "Sacred seal modeled after the Elden Ring, used by Golden Order fundamentalists. Enhances Golden Order incantations.",
        passive: "While holding this seal, Golden Order spells you cast gain a +2 bonus to spell attack rolls and saving throw DC.",
        skill: null
    },
    {
        name: "Grafted Blade Greatsword",
        type: "Ultra Greatsword",
        rarity: "Legendary",
        affinity: "Strength",
        description: "The storied sword of Castle Morne. A revenger's weapon, it is burdened with oceans of anger and regret. One of the legendary armaments. A lone surviving champion from a country now vanished was so determined to continue fighting that he claimed the swords of an entire clan of warriors.",
        passive: "This magic weapon deals an additional 7 (2d6) slashing damage on a hit.",
        skill: { name: "Oath of Vengeance", sp: 5, desc: "As an action, you may renew the oath of vengeance that was made during the weapon's creation. For the next minute, all of your Ability Scores increase by 1, up to a maximum of 22." }
    },
    {
        name: "Grafted Dragon",
        type: "Caestus",
        rarity: "Very Rare",
        affinity: "Charisma",
        description: "The embodiment of the power that still remained in the dragon's head that was granted to Godrick's left arm. The wielder's arm will take the form of a small dragon, sprouting sharp dragon fangs at the fist. This weapon cannot be two-handed.",
        passive: "This magic weapon deals an additional 3 (1d4) fire damage on a hit. Your reach is increased by 10 feet while you wield it.",
        skill: { name: "Bear Witness!", sp: 7, desc: "As an action, you grant life to the Grafted Dragon for just a moment. As it opens its mouth, it exhales fire in your choice of a 30-foot line, a 20-foot cone, or a 10-foot radius, 30-foot high cylinder. Each creature in the area must make a Dexterity save. A target takes 28 (8d6) fire damage on a failed save, or half as much on a success." }
    },
    {
        name: "Grave Scythe",
        type: "Reaper",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Greatscythe comprised of a large blade affixed to a crooked stick. Weapon wielded by the aged grave keepers who tend the forgotten graveyards throughout the Lands Between. This weapon is said to have served as a charm against evil spirits in times of old.",
        passive: "While wielding this weapon, you have advantage on saving throws against the Exhausted condition. It also inflicted Bleed 1 on a hit.",
        skill: { name: "Spinning Slash", sp: 4, desc: "You spin your blade in a circle around you, attacking a number of separate targets equal to at most your proficiency modifier. These attacks are made at disadvantage." }
    },
    {
        name: "Great Epée",
        type: "Rapier",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Large rapier featuring a thin, sharp blade. Commonly used in life or death duels. Like its smaller counterparts, it's made for thrusting attacks, and can be used while guarding with a shield.",
        passive: "This weapon has the two-handed property and deals 6 (1d10) piercing damage on a hit instead of its normal weapon damage.",
        skill: { name: "Impaling Thrust", sp: 1, desc: "When you attack with this weapon, you may activate this skill as a free action to increase the reach of the attack by 5 feet." }
    },
    {
        name: "Great Omenkiller Cleaver",
        type: "Greataxe",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "The blade of this huge, loathsome cleaver comprises a row of amputated Omen horns. Weapon of slaughter wielded by Omen killers. The hideous horns cause blood loss, adding vibrant colors to the ongoing mayhem.",
        passive: "This weapon inflicts Bleed 1 on a hit. When you hit a fiend with this weapon, the fiend takes an extra 7 (2d6) slashing damage.",
        skill: { name: "Wild Strikes", sp: 1, desc: "When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls during this turn, but attack rolls against you have advantage until your next turn." }
    },
    {
        name: "Great Stars",
        type: "Maul",
        rarity: "Rare",
        affinity: "Strength",
        description: "Huge bludgeon with three stars at the striking end. Though primarily a striking weapon, the stars' spikes cause blood loss. A blood-stained star is an ill omen, a fact not lost upon those against whom this weapon is brought to bear. Landing attacks slightly restores HP.",
        passive: "On a hit, this weapon inflicts Bleed 1 and you regain 1 hit point.",
        skill: { name: "Endure", sp: 0, desc: "As an action, you steel yourself to harm for a brief time. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks." }
    },
    {
        name: "Great Turtle Shell",
        type: "Shield",
        rarity: "Rare",
        affinity: "Strength",
        description: "Shield fashioned from a great turtle shell. The natural curve helps it contend with foes' attacks. The turtle is a symbol of tirelessness, and this shield boosts stamina recovery speed.",
        passive: "You have advantage on Constitution saving throws to maintain concentration and avoid exhaustion while wielding this shield.",
        skill: { name: "Barricade Shield", sp: 2, desc: "As a bonus action, you reinforce this shield, increasing your AC by 1 until the beginning of your next turn." }
    },
    {
        name: "Greathorn Hammer",
        type: "Maul",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Huge thick horn carved with tree ring-like markings adapted into a bludgeoning weapon. Wielded by ancestral follower warriors. The ancient horn is imbued with the power of ancestral spirits. A small amount of HP is restored upon defeating an enemy.",
        passive: "When you reduce a creature to 0 hit points with this weapon, you regain hit points equal to your proficiency bonus.",
        skill: { name: "Barbaric Roar", sp: 2, desc: "When you make your first attack on your turn, you can activate this ability, uttering a guttural roar. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn." }
    },
    {
        name: "Haligtree Crest Greatshield",
        type: "Greatshield",
        rarity: "Rare",
        affinity: "Wisdom",
        description: "Metal greatshield depicting the Haligtree with unalloyed gold. Carried by knights who have vowed to serve Miquella's Haligtree. Possesses high holy damage negation. Yet now, with the Haligtree misshapen, this wondrous rendition is a fleeting fantasy.",
        passive: null,
        skill: { name: "Golden Parry", sp: 2, desc: "As a reaction to taking damage, you imbue your shield with brilliant gold. Raising it in your defense, you gain resistance to radiant damage until the start of your next turn." }
    },
    {
        name: "Halo Scythe",
        type: "Reaper",
        rarity: "Rare",
        affinity: "Wisdom",
        description: "War scythe of the Cleanrot Knights who fought alongside Malenia, Blade of Miquella. This was the weapon of commanders in Malenia's army, and the half-halo blade deals holy damage.",
        passive: "On a hit, this weapon deals an additional 3 (1d4) radiant damage and inflicts Bleed 1.",
        skill: { name: "Miquella's Ring of Light", sp: 2, desc: "When you make an attack with this weapon, you may instead swing this weapon into the air, conjuring a ring of light that hovers for a moment before shooting forward. Make a ranged spell attack at a creature within 30 feet of you. On a hit, the target takes 11 (2d10) radiant damage." }
    },
    {
        name: "Hand Ballista",
        type: "Heavy Crossbow",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "An unconventional ballistic device modeled on a weapon used to besiege castles. Only capable of firing greatbolts. Perfect for reckless acts such as storming a castle on facing an entire army alone.",
        passive: "This weapon deals 7 (1d12) piercing damage on a hit instead of its normal damage.",
        skill: { name: "Kick", sp: 1, desc: "As a bonus action, you may shove a creature within 5 feet of you. You may use your Affinity modifier in place of Strength for the shove." }
    },
    {
        name: "Hand of Malenia",
        type: "Katana",
        rarity: "Legendary",
        affinity: "Dexterity",
        description: "Blade built into Malenia's prosthetic arm. Through consecration it is resistant to rot. Malenia's war prosthesis symbolized her victories. Some claim to have seen wings when the weapon was raised aloft; wings of fierce determination that have never known defeat.",
        passive: "This weapon inflicts Bleed 2 on a hit. While wielding this weapon, you have advantage against the Rotting condition.",
        skill: { name: "Waterfowl Dance", sp: 9, desc: "You leap into the air, hovering for a moment and then launching yourself in a flurry of strikes. Choose up to five creatures you can see within 20 feet of you. Make a melee weapon attack against each target. On a hit, a target takes 33 (6d10) slashing damage. You can then move to an unoccupied space you can see within 5 feet of one of the targets you hit or missed without provoking attacks of opportunity." }
    },
    {
        name: "Hardwood Club",
        type: "Colossal Weapon",
        rarity: "Rare",
        affinity: "Wisdom",
        description: "An enormous club of hardwood. Wildly hammering foes with this striking weapon requires no dexterity; only brute force. While it may seem sacrilegious, this weapon is said to be a withered branch of the Erdtree. Imbued with holy power, this weapon will never snap.",
        passive: null,
        skill: { name: "Golden Land", sp: 5, desc: "You create a number of golden darts equal to your Affinity modifier and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack with your Affinity modifier for each dart. On a hit, the target takes 7 (2d6) radiant damage." }
    },
    {
        name: "Harp Bow",
        type: "Shortbow",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Bow fashioned from a minstrel's harp. Sonorous tones still resound when firing arrows. Troubadours sing tales of champions, both in the honorable service of the Erdtree, and the one who spurns honor for blasphemy.",
        passive: "When you attack with this weapon, you may expend a use of Bardic Inspiration to gain a bonus on the attack and damage roll. The bonus equals the number you roll on the Bardic Inspiration die. You may use this ability after you make the attack roll, but before the outcome is determined.",
        skill: { name: "Barrage", sp: 3, desc: "When you make a ranged weapon attack on your turn, you can use your bonus action to make an additional attack with this weapon." }
    },
    {
        name: "Helphen's Steeple",
        type: "Greatsword",
        rarity: "Very Rare",
        affinity: "Intelligence",
        description: "Greatsword patterned after the black steeple of the Helphen, the lampwood which guides the dead of the spirit world. The lamplight is similar to grace in appearance, only it is said that it can only be seen by those who met their death in battle.",
        passive: "This weapon deals 4 (1d6) additional force damage on a hit.",
        skill: { name: "Ruinous Ghostflame", sp: 4, desc: "As a bonus action, you invoke the Helphen, coating this blade in ghostflame for a number of rounds equal to your Affinity modifier (minimum 1 round). For the duration, attacks with this weapon deal an additional 7 (2d6) cold damage on a hit. Also, a creature damaged by this weapon must succeed on a Constitution saving throw or become frostbitten until the beginning of your next turn." }
    },
    {
        name: "Highland Axe",
        type: "Handaxe",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Single-sided axe used by the warriors of the highlands. Brave combatants begin battle by crying out their names.",
        passive: null,
        skill: { name: "War Cry", sp: 1, desc: "As a bonus action, you give a fierce battle cry. Until the end of your turn, you have a +1 bonus to attack and damage rolls with melee weapons." }
    },
    {
        name: "Hookclaws",
        type: "Claws",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Weapon worn on the fist comprised of sharp parallel blades favored by those who lurk in the dark. Lacerations cause blood loss with great effect.",
        passive: "This weapon inflicts Bleed 1 on a hit and deals slashing damage or bludgeoning damage.",
        skill: { name: "Quickstep", sp: 1, desc: "As a bonus action, you move up to 5 feet in any direction without provoking attacks of opportunity. Your movement speed is reduced to 0 until the end of your turn." }
    },
    {
        name: "Horn Bow",
        type: "Longbow",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Longbow made from animal horn. Wielded by the master hunters of the ancestral followers. Imbues arrows fired with magic damage. Reveals its true worth when used magic-infused arrows.",
        passive: "Arrows fired with this bow deal an additional 3 (1d4) force damage on a hit.",
        skill: { name: "Mighty Shot", sp: 1, desc: "Until the end of your turn, before you make an attack with this weapon, you can choose to take a -5 penalty to the attack roll. If that attack hits, you add +10 to the attack's damage." }
    },
    {
        name: "Hoslow's Petal Whip",
        type: "Whip",
        rarity: "Rare",
        affinity: "Strength",
        description: "Metal whip formed of razor-sharp chain-link blades that have the appearance of flower petals. This work of art is handed down through the generations of the illustrious House Hoslow.",
        passive: "This weapon inflicts Bleed 2 on a hit.",
        skill: { name: "Kick", sp: 1, desc: "As a bonus action, you may shove a creature within 5 feet of you. You may use your Affinity modifier in place of Strength for the shove." }
    },
    {
        name: "Ice Crest Shield",
        type: "Shield",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Small metal roundshield. Heavier than a wooden shield, but boasts higher damage negation. The ice crest originates from a Carian princess.",
        passive: null,
        skill: { name: "Frost Parry", sp: 2, desc: "As a reaction to taking damage, you imbue your shield with chilling frost. Raising it in your defense, you gain resistance to cold damage until the start of your next turn." }
    },
    {
        name: "Icerind Hatchet",
        type: "Handaxe",
        rarity: "Rare",
        affinity: "Intelligence",
        description: "A hatchet with a frost-coated blade. One of several gifts given by Castle Sol in the distant north. Known as \"freezing fog,\" the blade is thought to be a dragon's scale.",
        passive: "When you hit a creature with this weapon, it must succeed on a Constitution saving throw or be frostbitten until the end of their next turn. If the target is a dragon, it has disadvantage on the saving throw.",
        skill: { name: "Hoarfrost Stomp", sp: 4, desc: "As an action, you stomp on the ground, sending a chilling frost out from you in a 20-foot cone along the ground. Each creature in the area must make a Constitution saving throw. On a failed save, the target takes 8 (3d4) cold damage and becomes frostbitten for 1 minute. At the end of each of its turns, the target can make another Constitution saving throw, ending the frostbite on a success. On a successful save, the target takes half as much cold damage and is not frostbitten." }
    },
    {
        name: "Icon Shield",
        type: "Greatshield",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Greatshield painted with a divine scene; the recipients of a blessed tear from the Erdtree. An item that looks back fondly on the age of plenty. The divine scene acts in and of itself as a sacred invocation; gradually restoring the carrier's HP.",
        passive: "Gradually restores the carrier's HP.",
        skill: { name: "Parry", sp: 1, desc: "As a reaction to another creature hitting you with a melee attack, you can add +1 to your AC, potentially causing the attack to miss you." }
    },
    {
        name: "Inquisitor's Girandole",
        type: "Pike",
        rarity: "Uncommon",
        affinity: "Constitution",
        description: "Instrument of torture used on nobles behind the curtain at the Volcano Manor of Mt. Gelmir. Its numerous spikes pierce the flesh, then singe the wounds with flame. The smell of burnt blood induces despair in the victim. A candlestick conceived by a thorough mind.",
        passive: "On a hit, this weapon deals an additional 3 (1d4) fire damage and inflicts Bleed 1 on the target.",
        skill: { name: "Charge Forth", sp: 2, desc: "If you move at least 20 feet towards a target and hit it with a weapon attack on the same turn, you may activate this skill as a free action. If you do, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a Strength saving throw or be knocked prone." }
    },
    {
        name: "Inseparable Sword",
        type: "Greatsword",
        rarity: "Rare",
        affinity: "Wisdom",
        description: "Sword forged by compounding silver and gold. A sacred weapon to hunt Those Who Live in Death. The inseparable twins found solace in the Golden Order, the only institution not to revile them as accursed beings.",
        passive: "When you hit an undead creature with this weapon, the target takes an extra 5 (1d8) radiant damage.",
        skill: { name: "Sacred Blade", sp: 2, desc: "As an action, you charge this blade with golden light that shoots out as a ranged spell attack at a creature within 30 feet of you. Make a ranged spell attack against the target. On a hit, the target takes 14 (4d6) radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then." }
    },
    {
        name: "Iron Ball",
        type: "Caestus",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Iron manifer of spherical shape. Big Boggart the blackguard's weapon of choice. Not a weapon to be taken lightly, as its weighty blows shatter bones with ease.",
        passive: null,
        skill: { name: "Braggart's Roar", sp: 3, desc: "As a bonus action, you bellow a boastful roar, declaring your dominance to the world. Until the beginning of your next turn, attack rolls against you have advantage, and you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks." }
    },
    {
        name: "Ivory Sickle",
        type: "Dagger",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Sickle fashioned from ivory. Weapon carried by aged Albunaurics. These weapons are evidence of their dedication to the Haligtree, despite never having entered its presence.",
        passive: "You do not have disadvantage on attack rolls with this weapon while prone.",
        skill: { name: "Quickstep", sp: 1, desc: "As a bonus action, you move up to 5 feet in any direction without provoking attacks of opportunity. Your movement speed is reduced to 0 until the end of your turn." }
    },
    {
        name: "Jar Cannon",
        type: "Heavy Crossbow",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Jar cannon which uses explosives to fire greatbolts. Experimental firearm brought to the assault on Volcano Manor, where it was discovered that no one knew how to use it.",
        passive: null,
        skill: { name: "Kick", sp: 1, desc: "As a bonus action, you may shove a creature within 5 feet of you. You may use your Affinity modifier in place of Strength for the shove." }
    },
    {
        name: "Jawbone Axe",
        type: "Battleaxe",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Axe made from a herbivore's skull. Weapon of the ancestral followers who disdain metal. This axe is more of a bludgeon; it forgoes a bladed edge, instead using the beast's molar teeth to buffet foes.",
        passive: "This weapon deals bludgeoning damage instead of slashing.",
        skill: { name: "Wild Strikes", sp: 1, desc: "When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls during this turn, but attack rolls against you have advantage until your next turn." }
    },
    {
        name: "Jellyfish Shield",
        type: "Greatshield",
        rarity: "Rare",
        affinity: "Constitution",
        description: "The head of a spirit jellyfish, commonly found floating above sacred ground throughout the Lands Between, wielded without modification as a shield. The see-through head is extremely light, but its flesh is supple, providing absolutely no protection from piercing attacks.",
        passive: "Provides absolutely no protection from piercing attacks.",
        skill: { name: "Contagious Fury", sp: 3, desc: "As a bonus action, you can invoke the latent anger of your gelatinous shield. It glows bright red until the end of your next turn. For the duration, the first time a creature makes an attack against you, you gain a bonus to damage rolls against it for the duration. The damage bonus equal to your Affinity modifier." }
    },
    {
        name: "Katar",
        type: "Caestus",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Imported dagger design with a rather unique handle. The blade can be swung about as the extension of one's fist.",
        passive: "This weapon deals piercing damage instead of bludgeoning.",
        skill: { name: "Impaling Thrust", sp: 1, desc: "When you attack with this weapon, you may activate this skill as a free action to increase the reach of the attack by 5 feet." }
    },
    {
        name: "Lazuli Glintstone Sword",
        type: "Longsword",
        rarity: "Uncommon",
        affinity: "Intelligence",
        description: "A sword with a glintstone in its handguards. Wielded by scholars of the Lazuli Conspectus who seek to master Carian sorcery. Apparently once used as a staff of sorcery, this sword is made of wood.",
        passive: "When you attack with this magic weapon, you can use your Intelligence modifier, instead of Strength or Dexterity modifier, for the attack and damage rolls.",
        skill: { name: "Glintstone Pebble", sp: 0, desc: "You cast glintstone pebble." }
    },
    {
        name: "Lion Greatbow",
        type: "Greatbow",
        rarity: "Very Rare",
        affinity: "Dexterity",
        description: "Greatbow of black iron wielded by General Radahn. Decorated with a lion mane motif. Imbued with gravitational power of the Starscourge, when used along with Radahn’s Spear, it becomes a true weapon of a champion.",
        passive: "If a Radahn’s Spear is fired from this weapon, it inflicts an additional 4 (1d6) damage.",
        skill: { name: "Radahn's Rain", sp: 7, desc: "You fire an arrow into the air, magically duplicating it as dozens of gravity-infused arrows rain down in a 20-foot radius, 60-foot high cylinder centered on a point you can see within range. Each creature in the area must make a Dexterity saving throw. A creature takes 21 (6d6) damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component." }
    },
    {
        name: "Loretta's War Sickle",
        type: "Halberd",
        rarity: "Rare",
        affinity: "Intelligence",
        description: "Intricately crafted silver war sickle wielded by Loretta, Knight of the Haligtree. Originally given for service as a personal guard to Carian royalty, the weapon's blue glintstone has been replaced with unalloyed gold.",
        passive: "This weapon deals an additional 6 (1d10) force damage on a hit. It can also be used as a spellcasting focus for sorceries you cast.",
        skill: { name: "Loretta's Slash", sp: 3, desc: "As an action, you focus energy in this weapon's blade. It glows blue with glintstone magic as you are pulled into the air. You fly up to 15 feet to an unoccupied space without provoking attacks of opportunity. When you land, you can make an attack at a creature within range. On a hit, the target takes an additional 7 (1d12) force damage." }
    },
    {
        name: "Lusat's Glintstone Staff",
        type: "Glintstone Staff",
        rarity: "Very Rare",
        affinity: "None",
        description: "Staff of the primeval glintstone sorcerer Lusat. Only those who have glimpsed what lies beyond the wisdom of stone may wield it.",
        passive: "When you roll damage for a spell you cast with this staff, you may expend any number of SP and reroll a number of the damage dice equal to the amount of expended SP. You must use the new rolls.",
        skill: null
    },
    {
        name: "Magma Blade",
        type: "Shortsword",
        rarity: "Rare",
        affinity: "Strength",
        description: "Curved sword with a blade fashioned from the lava of Mt. Gelmir. An armament of the man-serpents, impossible for a human to have made.",
        passive: "This weapon deals fire damage instead of slashing damage on a hit.",
        skill: { name: "Magma Shower", sp: 4, desc: "When you hit a creature within attack, you can activate this skill to scatter magma in a five foot square in the target's space, coating the ground before it hardens after a minute. The area is difficult terrain until the magma dissipates. Any creature that enters the area for the first time on a turn or ends its turn there takes 11 (3d6) fire damage. Until the end of your next turn, you are immune to damage from walking on magma." }
    },
    {
        name: "Magma Whip Candlestick",
        type: "Whip",
        rarity: "Rare",
        affinity: "Charisma",
        description: "This ritual implement is a three pronged candlestick with solid flames formed of the magma of Mt. Gelmir. When wielded as a weapon, the flames become supple whips of lava.",
        passive: "This weapon deals fire damage instead of slashing damage on a hit.",
        skill: { name: "Sea of Magma", sp: 4, desc: "When you make an attack with this weapon, you may activate this skill as a free action to create a pool of magma in a five-foot square within this weapon's reach. The magma coats the ground before it hardens after a minute. The area is difficult terrain until the magma dissipates. Any creature that enters the area for the first time on a turn or ends its turn there takes 11 (3d6) fire damage. Until the end of your next turn, you are immune to damage from magma." }
    },
    {
        name: "Magma Wyrm's Scalesword",
        type: "Cleaver",
        rarity: "Rare",
        affinity: "Strength",
        description: "Curved greatsword wielded by Magma Wyrms. The shape resembles a dragon's jaw and is covered in hard scales. It's said these land-bound dragons were once humans heroes who partook in dragon communion, a grave transgression for which they were cursed to crawl the earth upon their bellies, shadows of their former selves.",
        passive: "This weapon deals an additional 4 (1d6) fire damage on a hit.",
        skill: { name: "Magma Guillotine", sp: 5, desc: "As an action, you leap into the air, gripping this weapon with both hands and slamming it down into the ground. Magma bursts from the ground in a 10-foot radius around you, coating the ground before it hardens after a minute. The area is difficult terrain until the magma dissipates. Any creature that enters the area for the first time on a turn or ends its turn there takes 11 (3d6) fire damage. Until the end of your next turn, you are immune to damage from magma." }
    },
    {
        name: "Maliketh's Black Blade",
        type: "Ultra Greatsword",
        rarity: "Legendary",
        affinity: "Wisdom",
        description: "Maliketh's black blade which once harbored the power of the Rune of Death. A sad shadow of its former glory. After a fragment of Death was stolen on that fateful night, Maliketh bound the blade within his own flesh, such that none might ever rob Death again.",
        passive: "Damage inflicted by this weapon cannot be reduced in any way. This weapon deals an additional 7 (2d6) radiant damage on a hit. When you hit a celestial with this weapon, the target takes an additional 7 (2d6) radiant damage.",
        skill: { name: "Destined Death", sp: 10, desc: "As an action, you invoke the unbound Rune of Death. A red-black flame surrounds your weapon, gathering around it in an inferno until it releases as a flurry of innumerable blades made of pure Death. Each creature within 15 feet of you must make a Dexterity saving throw. On a failed save, the target takes 78 (12d12) radiant damage immediately and 39 (6d12) radiant damage at the end of its next turn. On a successful save, the target takes half of the initial damage and no damage at the end of its next turn. The target's hit point maximum is reduced by an amount equal to the radiant damage taken in either case. Damage from this skill cannot be reduced by any means." }
    },
    {
        name: "Man-Serpent's Shield",
        type: "Shield",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Small copper dome-shaped roundshield carried by the man-serpents of Mt. Gelmir. Said to have been tempered in lava, it boasts great resistance to fire.",
        passive: null,
        skill: { name: "Fire Parry", sp: 2, desc: "As a reaction to taking damage, you imbue your shield with hardened obsidian. Raising it in your defense, you gain resistance to fire damage until the start of your next turn." }
    },
    {
        name: "Mantis Blade",
        type: "Scimitar",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "A curved sword with a blade at both ends wielded by the Cemetery Shades, the insect-ridden grave keepers. The blade is thin and sharp unleashes a far-reaching slash.",
        passive: "This weapon has the reach property.",
        skill: { name: "Spinning Slash", sp: 4, desc: "You spin your blade in a circle around you, attacking a number of separate targets equal to at most your proficiency modifier. These attacks are made at disadvantage." }
    },
    {
        name: "Marais Executioner's Sword",
        type: "Greatsword",
        rarity: "Very Rare",
        affinity: "Strength",
        description: "Storied sword of House Marais, the family of executioners who presided over the Shaded Castle. One of the legendary armaments. Elemer of the Briar, the Bell Bearing Hunter, snatched the sword from the site of his looming execution, and furnished it with battle skills from his home of Eochaid.",
        passive: "You can use a bonus action to toss this magic sword into the air and speak the command word. When you do so, the sword begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of it. \n While hovering, the sword deals additional damage equal to your affinity modifier on a hit. While the sword hovers, you can use a bonus action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same bonus action, you can cause the sword to attack one creature within 5 feet of it.",
        skill: { name: "Eochaid's Dancing Blade", sp: 0, desc: "When you take the Attack action while this sword is hovering, you can use skill to many any number of those attacks with the hovering sword instead." }
    },
    {
        name: "Marika's Hammer",
        type: "Warhammer",
        rarity: "Legendary",
        affinity: "Wisdom",
        description: "Stone hammer made in the lands of the Numen, outside the Lands Between. The tool with which Queen Marika shattered the Elden Ring and Radagon attempted to repair it. The hammer partially broke upon shattering the Ring, becoming splintered with rune fragments.",
        passive: null,
        skill: { name: "Gold Breaker", sp: 13, desc: "As a free action, you raise this hammer to the sky as it lifts you into the air in turn. Until the end of your turn, you have a flying speed of 60 feet. When you make an attack with this weapon for the duration, you slam the hammer into the ground, creating a golden explosion around you. Each creature of your choice in a 20-foot radius, 10-foot tall sphere centered on your target must make a Dexterity saving throw. A target takes 55 (10d10) radiant damage on a failed save, or half as much damage on a successful one."}
    },
    {
        name: "Meteoric Ore Blade",
        type: "Katana",
        rarity: "Rare",
        affinity: "Intelligence",
        description: "Katana forged from meteoric ore to dispatch lifeforms born of falling stars. Deals magic damage. The blade is weighty, known to deliver slashes of such ferocity that the impact is said to resemble the crash of a falling meteor.",
        passive: "This weapon deals an additional 5 (1d8) force damage on a hit.",
        skill: { name: "Gravitas", sp: 5, desc: "As an action, you can thrust this weapon into the ground, creating a gravitational disturbance in a 15-foot radius around you. Each creature of your choice in the area must make a Strength saving throw. On a failure, the creature takes 11 (2d10) force damage, and is pulled in a straight line toward you, ending in an unoccupied space as close to you as possible. On a success, the creature takes half as much damage and is not pulled." }
    },
    {
        name: "Meteorite Staff",
        type: "Glintstone Staff",
        rarity: "Rare",
        affinity: "None",
        description: "Staff embedded with a dark purple glintstone, said to be the fragment of a meteorite.",
        passive: "While holding this staff, Gravity spells you cast gain a +2 bonus to spell attack rolls and saving throw DC.",
        skill: null
    },
    {
        name: "Miquellan Knight's Sword",
        type: "Longsword",
        rarity: "Uncommon",
        affinity: "Wisdom",
        description: "Sword forged by servants of Miquella of the Haligtree, with a design modeled after those carried by Carian knights. Instead of glintstone however, amber from the Haligtree is embedded in the blade. A sumptuous piece, yet it has never been offered to any knight - an ill-starred sword with no master.",
        passive: "This weapon inflicts an additional 5 (1d8) radiant damage on a hit.",
        skill: { name: "Sacred Blade", sp: 2, desc: "As an action, you charge this blade with golden light that shoots out as a ranged spell attack at a creature within 30 feet of you. Make a ranged spell attack against the target. On a hit, the target takes 14 (4d6) radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then." }
    },
    {
        name: "Miséricorde",
        type: "Dagger",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Dagger favored by military physicians in white. The pointed blade is hard and sharp, making critical hits especially potent. Medicine is mercy, and mercy upon the battlefield is ruthless. Beware the killers clothed as men of compassion.",
        passive: "Attacks with this weapon score a critical hit on a roll of 19 or 20. When you score a critical hit with it, the target takes an extra 7 damage of the weapon’s type.",
        skill: { name: "Quickstep", sp: 1, desc: "As a bonus action, you move up to 5 feet in any direction without provoking attacks of opportunity. Your movement speed is reduced to 0 until the end of your turn." }
    },
    {
        name: "Mohgwyn's Sacred Spear",
        type: "Lance",
        rarity: "Legendary",
        affinity: "Charisma",
        description: "Trident of Mohg, Lord of Blood. A sacred spear that will come to symbolize his dynasty. As well as serving as a weapon, it is an instrument of communion with an Outer God who bestows power upon accursed blood. The Mother of Truth desires a wound.",
        passive: "This weapon inflicts Bleed 3 on a hit.",
        skill: { name: "Bloodboon Ritual", sp: 11, desc: "As an action, you thrust this weapon into the invisible body of the Formless Mother. Bloodflame pours from the wound, raining down in a 30-foot radius, 30-foot tall cylinder centered on you. Each creature other than you in the area must make a Dexterity saving throw. On a failure, the creature takes 42 (12d6) fire damage and is afflicted by Bleed 3. On a successful save, the creature takes half as much damage and isn't afflicted by Bleed." }
    },
    {
        name: "Monk's Flameblade",
        type: "Cleaver",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Curved sword with a flickering flame motif. Wielded by the Fire Monks who came from the Mountaintops of the Giants. The monks came to the land of Liurnia in pursuit of a fugitive who stole their fire.",
        passive: null,
        skill: { name: "Spinning Slash", sp: 4, desc: "You spin your blade in a circle around you, attacking a number of separate targets equal to at most your proficiency modifier. These attacks are made at disadvantage." }
    },
    {
        name: "Moonveil",
        type: "Katana",
        rarity: "Rare",
        affinity: "Intelligence",
        description: "Katana forged of glintstone. Masterpiece of a Sellian wordsmith. Light enwreathes the blade when sheathed, explaining its Moonveil moniker.",
        passive: "When you attack with this magic weapon, you can use your Intelligence modifier for the attack and damage rolls instead of using Strength or Dexterity. It also inflicts Bleed 1 on a hit.",
        skill: { name: "Transient Moonlight", sp: 2, desc: "When you make an attack with this weapon, you may briefly sheathe it before striking out with terrifying speed. Instead of making a melee attack, you may instead create an arc of moonlight that shoots out towards a creature you can see within 60 feet of you. Make a ranged spell attack at the target. On a hit, the target takes 11 (3d6) force damage." }
    },
    {
        name: "Morgott's Cursed Sword",
        type: "Cleaver",
        rarity: "Legendary",
        affinity: "Charisma",
        description: "Warped blade of shifting hue used by Morgott, the Omen King. The accused blood that Morgott recanted and sealed away reformed into this blade.",
        passive: "This weapon inflicts Bleed 1 on a hit. When wielded by an Omen, it inflicts Bleed 2 instead.",
        skill: { name: "Cursed-Blood Slice", sp: 3, desc: "As a bonus action, you invoke the cursed blood of this weapon's former wielder. As bloodflame coats the weapon, it enters the bloodstreams of those it injures. Until the beginning of your turn, when a creature you've hit with a weapon attack fails a saving throw against Bleed, it takes an additional 7 (2d6) fire damage for each Hit Die it rolls for bleed damage." }
    },
    {
        name: "Morning Star",
        type: "Warhammer",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Warhammer comprised of a globe attached to a handle. Though a bludgeon dealing strike damage, the appellative star is covered in spikes which cause blood loss. Ironic given its grace name, this weapon often reeks of blood.",
        passive: "This weapon deals piercing damage instead of bludgeoning.",
        skill: { name: "Kick", sp: 1, desc: "As a bonus action, you may shove a creature within 5 feet of you. You may use your Affinity modifier in place of Strength for the shove." }
    },
    {
        name: "Nagakiba",
        type: "Katana",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Katana with a ferociously long blade. Signature weapon of Yura, hunter of Bloody Fingers. Reminiscent of a reinforced spear, its imposing length can be put to good use with powerful thrusting attacks.",
        passive: "This weapon’s reach is increased to 10 feet and inflicts Bleed 1 on a hit.",
        skill: { name: "Piercing Fang", sp: 1, desc: "When you make an attack with this weapon, you may activate this skill to gain advantage on the attack if the target is wearing medium or heavy armor, or a shield." }
    },
    {
        name: "Nightrider Flail",
        type: "Flail",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "A flail with two additional bludgeoning heads. Weapon of the Night's Cavalry who ride funeral steeds. The large spikes make it highly effective at inducing blood loss.",
        passive: "This weapon inflicts Bleed 1 on a hit.",
        skill: { name: "Spinning Chain", sp: 2, desc: "As a bonus action, you begin spinning the chain on your flail until the end of your next turn, preparing to strike at a moment's notice. When a creature moves within 5 feet of you or makes a melee attack against you, you may use your reaction to make an attack against the target with this weapon." }
    },
    {
        name: "Nightrider Glaive",
        type: "Halberd",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "A jet-black glaive with a blade as weighty as a bludgeon. Weapon of the Night's Cavalry who ride funeral seeds. This glaive excels at weighty slash attacks that crash into foes, making it a powerful weapon even on horseback.",
        passive: "While you are mounted, you have advantage on attack rolls with this weapon against any unmounted creature that is smaller than your mount.",
        skill: { name: "Spinning Slash", sp: 4, desc: "You spin your blade in a circle around you, attacking a number of separate targets equal to at most your proficiency modifier. These attacks are made at disadvantage." }
    },
    {
        name: "Nox Flowing Hammer",
        type: "Mace",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Mace shaped like a suspended metal droplet wielded by monks of the Eternal City. Forged from liquid metal from a Silver Tear, it is thoroughly tempered until hardened.",
        passive: null,
        skill: { name: "Flowing Form", sp: 2, desc: "As a bonus action, you transform your blade into liquid metal, extending its reach by 15 feet until the end of your turn." }
    },
    {
        name: "Nox Flowing Sword",
        type: "Shortsword",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "A grim weapon wielded by swordsmen of the Eternal City, this shotel has a blade as fine as a needle. Forged from the liquid metal of a Silver Tear, it is thoroughly tempered until hardened.",
        passive: null,
        skill: { name: "Flowing Form", sp: 2, desc: "As a bonus action, you transform your blade into liquid metal, extending its reach by 15 feet until the end of your turn." }
    },
    {
        name: "One-Eyed Shield",
        type: "Greatshield",
        rarity: "Rare",
        affinity: "Constitution",
        description: "Tricksome shield made from white stone depicting a malformed one-eyed god. The barrel of a firearm pokes through the open mouth. Once worshipped by the giants, this evil deity is believed to have been slain by Queen Marika.",
        passive: null,
        skill: { name: "Flame Spit", sp: 5, desc: "You cast cannon of Haima, except that it deals fire damage instead of force." }
    },
    {
        name: "Onyx Lord's Greatsword",
        type: "Cleaver",
        rarity: "Rare",
        affinity: "Intelligence",
        description: "Greatsword forged from golden-hued meteoric ore. The blade conceals gravity-manipulating magic. A weapon unique to the Onyx Lords, a race of ancients with skin of stone who were said to have risen to life when a meteor struck long ago.",
        passive: "When you hit an aberration with this weapon, the aberration takes an extra 7 (2d6) slashing damage.",
        skill: { name: "Onyx Lord's Repulsion", sp: 6, desc: "As an action, you can thrust this weapon into the ground, creating a gravitational disturbance in a 15-foot radius around you. Each creature of your choice in the area must make a Strength saving throw. On a failure, the creature takes 22 (4d10) force damage, and is pushed 20 feet away from you. On a success, the creature takes half as much damage and is not pushed." }
    },
    {
        name: "Ordovis's Greatsword",
        type: "Greatsword",
        rarity: "Very Rare",
        affinity: "Strength",
        description: "Greatsword of Ordovis, one of the two honored as foremost among the Crucible Knights. This sword is imbued with an ancient holy essence. Its red tint exemplifies the nature of primordial gold, said to be close in nature to life itself.",
        passive: null,
        skill: { name: "Ordovis's Vortex", sp: 5, desc: "As an action, you gather the red-gold magic of the Crucible into this weapon, spinning it rapidly in your hand before slamming it in the ground. Each creature other creature within 15 feet of you must make a Dexterity saving throw. A creature takes 28 (8d6) radiant damage on a failed save, or half as much damage on a successful one." }
    },
    {
        name: "Ornamental Straight Sword",
        type: "Shortsword",
        rarity: "Rare",
        affinity: "Wisdom",
        description: "Slender straight sword patterned after an antique ornament. Superior swordsmen prefer to wield one in each hand. After falling from grace, the dregs of the golden lineage sought power and purpose in the past.",
        passive: "This weapon is always paired with additional one wielded in your other hand. Unless you wield both simultaneously, you cannot activate this weapon's skill.",
        skill: { name: "Golden Tempering", sp: 7, desc: "As an action, you run your hand along this weapon, blessing it with gold for 1 minute. While the sword is blessed, it deals an extra 7 (2d6) radiant damage to any target it hits." }
    },
    {
        name: "Parrying Dagger",
        type: "Dagger",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "A knife with curved handguards. Designed to parry, turning foes' attacks against them. For masters of combat who anticipate every enemy strike and counter accordingly, this weapon is all they need.",
        passive: null,
        skill: { name: "Nimble Parry", sp: 1, desc: "As a reaction to another creature hitting you with a melee attack, you can add +2 to your AC, potentially causing the attack to miss you." }
    },
    {
        name: "Pillory Shield",
        type: "Shield",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Pillory made to punish serious felons, used as a shield. Though made of good, sturdy wood, it is only a makeshift tool and performs as such. Perhaps due to its use as a device with which the guilty were made to endure prolonged suffering, it raises vitality.",
        passive: "This shield only grants a +1 bonus to AC. You have advantage on saving throws against the Exhausted condition while wielding it.",
        skill: { name: "Parry", sp: 1, desc: "As a reaction to another creature hitting you with a melee attack, you can add +1 to your AC, potentially causing the attack to miss you." }
    },
    {
        name: "Prelate's Inferno Crozier",
        type: "Colossal Weapon",
        rarity: "Rare",
        affinity: "Charisma",
        description: "Colossal hammer with the appearance of roiling flames. Weapon of the Prelates who lead the Fire Monks. Its heft represents the weight of their guardianship. The hammer's head is unusually substantial.",
        passive: null,
        skill: { name: "Prelate's Charge", sp: 2, desc: "As a bonus action, you slam your weapon into the ground, rushing forward in a burst of speed until the end of your turn. Your speed increases by 20 feet and moving does not provoke opportunity attacks. When you move within 5 feet of a creature or an object that isn't being worn or carried, it takes 4 (1d6) fire damage from your trail of heat. A creature or object can take this damage only once during a turn." }
    },
    {
        name: "Prince of Death's Staff",
        type: "Glintstone Staff",
        rarity: "Rare",
        affinity: "None",
        description: "Staff embedded with sullied amber, said to be a very part of the Prince of Death. Enhances death sorceries. One of the staves deemed heretical by the academy for its ability to allow sorceries to be augmented through faith in addition to intelligence.",
        passive: "While holding this staff, Death spells you cast gain a +2 bonus to spell attack rolls and saving throw DC.",
        skill: null
    },
    {
        name: "Pulley Bow",
        type: "Longbow",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Longbow which utilizes a series of pulleys and strings. The complex mechanism, which required advanced mathematical and mechanical understanding to craft, was likely made by a certain genius who learned Golden Order Fundamentalism. Enhances precision while shooting, enabling arrows to fly much further distances.",
        passive: "The short and long range increments of this bow are doubled.",
        skill: { name: "Mighty Shot", sp: 1, desc: "Until the end of your turn, before you make an attack with this weapon, you can choose to take a -5 penalty to the attack roll. If that attack hits, you add +10 to the attack’s damage." }
    },
    {
        name: "Pulley Bow",
        type: "Light Crossbow",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Crossbow made with pulleys and power springs. The complex mechanism, which required advanced mathematical and mechanical understanding to craft, was likely made by a certain genius who learned Golden Order Fundamentalism. One touch fires a volley of bolts. Be warned; large stores of bolts can be quickly spent.",
        passive: "This crossbow lacks the loading property.",
        skill: { name: "Kick", sp: 1, desc: "As a bonus action, you may shove a creature within 5 feet of you. You may use your Affinity modifier in place of Strength for the shove." }
    },
    {
        name: "Raptor Talons",
        type: "Claws",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Claw comprised of two sharp, thin blades, wielded by the assassins of Ravenmount, this weapon allows them to imitate the attacks of Deathbirds. Besides excelling at airborne attacks, its charge attack mimics the vicious swoop of a bird of prey.",
        passive: "This weapon deals slashing damage instead of bludgeoning damage, and inflicts Bleed 1 on a hit.",
        skill: { name: "Quickstep", sp: 1, desc: "As a bonus action, you move up to 5 feet in any direction without provoking attacks of opportunity. Your movement speed is reduced to 0 until the end of your turn." }
    },
    {
        name: "Red Thorn Roundshield",
        type: "Shield",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "A small, wooden roundshield. It is light and easy to use, but cannot offer the damage negation of a metal shield. Its emblem is an ancient red thorn design.",
        passive: null,
        skill: { name: "Fire Parry", sp: 2, desc: "As a reaction to taking damage, you imbue your shield with hardened obsidian. Raising it in your defense, you gain resistance to fire damage until the start of your next turn." }
    },
    {
        name: "Reduvia",
        type: "Dagger",
        rarity: "Rare",
        affinity: "Constitution",
        description: "Jagged dagger with a distinctive curled blade. Carried by the noble servants of the Lord of Blood. This dagger rips the flesh as it enters, inflicting blood loss with sickening efficacy. A proud testament to the success of its vicious design, this weapon is perpetually coated in blood.",
        passive: "This weapon inflicts Bleed 2 on a hit.",
        skill: { name: "Blood Blade", sp: 2, desc: "As an action, you inflict 3 (1d4) necrotic damage on yourself. This damage can't be reduced in any way. Drawing your own blood onto your weapon, you unleash it as a projectile at a creature within 30 feet of you. Make a ranged weapon attack using your Affinity modifier. On a hit, the target takes 7 (2d6) necrotic damage and is afflicted by Bleed 2." }
    },
    {
        name: "Regalia of Eochaid",
        type: "Longsword",
        rarity: "Legendary",
        affinity: "Strength",
        description: "Treasured sword of Eochaid, a lesser, long-vanished domain. The copper coloration is not to be confused for rust, but is a conduit for its wielder to move it by their will alone. Swords of Eochaid dance through the skies.",
        passive: "You can use a bonus action to toss this magic sword into the air and speak the command word. When you do so, the sword begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of it. The sword uses your attack roll and ability score modifier to damage rolls. While the sword hovers, you can use a bonus action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same bonus action, you can cause the sword to attack one creature within 5 feet of it.",
        skill: { name: "Eochaid's Dancing Blade", sp: 0, desc: "When you take the Attack action while this sword is hovering, you can use skill to many any number of those attacks with the hovering sword instead." }
    },
    {
        name: "Rift Shield",
        type: "Shield",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Small metal roundshield depicting a sinister rift. An antiquated charm that glares back at an enemy.",
        passive: "While wielding this shield, you have advantage on saving throws against being made unconscious or stunned.",
        skill: { name: "Parry", sp: 1, desc: "As a reaction to another creature hitting you with a melee attack, you can add +1 to your AC, potentially causing the attack to miss you." }
    },
    {
        name: "Ringed Finger",
        type: "Maul",
        rarity: "Rare",
        affinity: "Strength",
        description: "Bludgeon made of an enormous finger sheathed in several heavy rings. Thought to have been cut from an ancestor of the Fingercreeper. Some life yet remains in this legacy of an ancient act of blasphemy, as evidenced by the barely perceptible warmth it still exudes.",
        passive: null,
        skill: { name: "Claw Flick", sp: 6, desc: "As an action, you command this weapon to engorge, doubling in size as it digs into the ground in front of you. The finger explodes outward in a flicking motion, upturning earth and flinging nearby creatures in a 15-foot cube in front of you. On a failed save, a creature takes 18 (4d8) bludgeoning damage and is pushed a number of feet away from you equal to 5 times your Affinity modifier. On a successful save, the creature takes half as much damage and isn't pushed." }
    },
    {
        name: "Ripple Blade",
        type: "Longsword",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Unique weapon wielded by young Albinaurics, this sword is modelled after the ripples that are thought to be the origin of their species.",
        passive: "When weapon grease and consumables such as Fire Grease is applied to this weapon, the effects duration is doubled.",
        skill: { name: "Wild Strikes", sp: 1, desc: "When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls during this turn, but attack rolls against you have advantage until your next turn." }
    },
    {
        name: "Rivers of Blood",
        type: "Katana",
        rarity: "Very Rare",
        affinity: "Constitution",
        description: "Weapon of Okina, swordsman from the Land of Reeds. A cursed weapon that has felled countless men. When Mohg, the Lord of Blood, first felt Okina's sword and madness upon his flesh, he had a proposal to offer Okina the life of a demon, whose thirst would never go unsated.",
        passive: "This weapon inflicts Bleed 3 on a hit.",
        skill: { name: "Corpse Piler", sp: 5, desc: "When you take the Attack action on your turn, you use this skill as a free action to make an additional attack. When you hit a Bleeding creature with this weapon this turn, the Bleed DC increases by 2 instead of 1." }
    },
    {
        name: "Rogier's Rapier",
        type: "Rapier",
        rarity: "Uncommon",
        affinity: "Intelligence",
        description: "Piercing sword of superior quality, featuring intricate ornamentation. Signature weapon of the sorcerer Rogier. High dexterity is required to wield the blade to its full potential, but mastery is a sight to behold, characterized by a flowing style which excels in successive attacks.",
        passive: null,
        skill: { name: "Glintblade Phalanx", sp: 3, desc: "You cast glintstone phalanx." }
    },
    {
        name: "Rosus' Axe",
        type: "Battleaxe",
        rarity: "Rare",
        affinity: "Intelligence",
        description: "Usher of Death, Rosus, who shows the path to the catacombs throughout the Lands Between, is depicted on this ritual axe. The dead easily lose their way, and have always been in sore need of a guiding hand.",
        passive: "This weapon inflicts an additional 5 (1d8) necrotic damage on a hit. Undead creatures reduced to 0 hit points by this weapon or its weapon skill cannot regain hit points or regenerate for the next minute.",
        skill: { name: "Rosus's Summons", sp: 7, desc: "You cast tibia's summons." }
    },
    {
        name: "Rotten Crystal Staff",
        type: "Glintstone Staff",
        rarity: "Rare",
        affinity: "None",
        description: "Staff fashioned from pure crystal; a deed impossible for a human. It festers with scarlet rot.",
        passive: "When you hit a creature with a spell attack, or a creature fails a saving throw against a spell you cast, with this staff, the target also gains the Rotting condition until the end of your next turn.",
        skill: null
    },
    {
        name: "Rotten Greataxe",
        type: "Greataxe",
        rarity: "Rare",
        affinity: "Strength",
        description: "Greataxe designed for gladiatorial combat, now festering with scarlet rot. Used by duelists who were exiled from the colosseum.",
        passive: "When you hit a creature with this weapon, the target must succeed on a DC 16 Constitution saving throw or have the Rotting condition for 1 minute. At the end of each of its turns, the target can make another Constitution saving throw. On a success, the target ends the condition.",
        skill: { name: "Endure", sp: 0, desc: "As an action, you steel yourself to harm for a brief time. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks." }
    },
    {
        name: "Royal Greatsword",
        type: "Ultra Greatsword",
        rarity: "Very Rare",
        affinity: "Strength",
        description: "Greatsword decorated in royal Carian Style. Favored weapon of Blaidd the Half-Wolf. In defiance of the fate he was born to, Blaidd swore to serve no master but Ranni. As proof, the sword was imbued with a cold magic at the moment the oath was sworn.",
        passive: "This weapon inflicts an additional 9 (2d8) cold damage on a hit.",
        skill: { name: "Wolf's Assault", sp: 7, desc: "As an action, you somersault through the air, moving up to 10 feet without provoking attacks of opportunity. When you land, you drive this weapon into the ground and create a 10-foot radius blast of cold magic. Each creature in the area other than you must make a Constitution saving throw. On a failed save, a creature takes 3d6 cold damage and is frostbitten for a minute. On a successful save, the creature takes half as much damage and is not frostbitten. While frostbitten in this way, the target can make a Constitution saving throw at the end of each of its turns. On a success, the target is no longer frostbitten." }
    },
    {
        name: "Ruins Greatsword",
        type: "Ultra Greatsword",
        rarity: "Legendary",
        affinity: "Strength",
        description: "Originally rubble from a ruin which fell from the sky, this surviving fragment was honed into a weapon. One of the legendary armaments. The ruin it came from crumbled when struck by a meteorite, as such this weapon harbors its destructive power.",
        passive: "When you hit a creature with this magic weapon, each creature other than you and the target within 10 feet of it must make a Strength saving throw. On a failed save, they are moved in a straight line towards the nearest unoccupied space to the target.",
        skill: { name: "Wave of Destruction", sp: 8, desc: "You collect gravitational energy into this slab of a weapon, bringing it down and unleashing a gravitational wave in a 60 feet long, 20 feet high, and 1 foot thick line. Each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 27 (6d8) force damage, or half as much damage on a successful save. A wall of stone is erected as gravity warps through the area, pulling up stone and rocks into the same area. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice). The wall is poorly constructed and fragile, with AC 15 and 50 hit points. If the wall is reduced to 0 hit points, it collapses. It also collapses when this skill is next used." }
    },
    {
        name: "Rusted Anchor",
        type: "Greataxe",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "A rusty anchor wielded as a weapon. Each of its four flukes is thick and sharp, enabling piercing attacks. While the Tarnished left the Lands Between with their lord, one boat alone was said to have been left behind.",
        passive: "This weapon inflicts piercing damage on a hit instead of slashing damage.",
        skill: { name: "Barbaric Roar", sp: 2, desc: "When you make your first attack on your turn, you can activate this ability, uttering a guttural roar. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn." }
    },
    {
        name: "Sacred Relic Sword",
        type: "Greatsword",
        rarity: "Legendary",
        affinity: "Wisdom",
        description: "Sword wrought from the remains of a god who should have lived a life eternal. Thoughts on what the weapon portends are many and varied. Some consider it the mark of a great sin, or a sign of great devastation. Some think of it as the end of an age, while others; the beginning.",
        passive: "This weapon inflicts an additional 11 (3d6) radiant damage on a hit.",
        skill: { name: "Waves of Gold", sp: 6, desc: "As an action, you may call upon this weapon's bygone golden glory, firing a golden wave that fans out forwards in a 120-foot cone. Each creature of your choice in the area must make a Constitution saving throw. On a failed save, a creature takes 39 (6d12) radiant damage, or half as much damage on a successful save." }
    },
    {
        name: "Sacrificial Axe",
        type: "Battleaxe",
        rarity: "Rare",
        affinity: "Strength",
        description: "Hatchet used in ancient sacrificial rites. A Deathbird is depicted as a malevolent deity. The power of the rite yet lingers.",
        passive: "When you reduce a creature to 0 hit points with this weapon, you regain up to 1 spell point. This can be put into a martial spell point pool if available.",
        skill: { name: "Wild Strikes", sp: 1, desc: "When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls during this turn, but attack rolls against you have advantage until your next turn." }
    },
    {
        name: "Scavenger's Curved Sword",
        type: "Scimitar",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Unique curved sword, notched like shark's teeth. Weapon carried by corpse pillagers who prowl the sites of old battles. The blade is tacky with blood and covered in hefty nicks, making it totally uneven. Life can be sinister indeed.",
        passive: "This weapon inflicts Bleed 1 on a hit.",
        skill: { name: "Spinning Slash", sp: 4, desc: "You spin your blade in a circle around you, attacking a number of separate targets equal to at most your proficiency modifier. These attacks are made at disadvantage." }
    },
    {
        name: "Scepter of the All-Knowing",
        type: "Warhammer",
        rarity: "Very Rare",
        affinity: "Intelligence",
        description: "Scepter in the form of a hand grasping a pearl. Signature weapon of Sir Gideon Ofnir, the All-Knowing. The pearl stands for the world, the heavens, and an eye, representing the many forms of knowledge, never fully attainable. Even knowing that, the All- Knowing's hand grasps for it.",
        passive: "This magic warhammer can be used to cast spells as either a glintstone staff or sacred seal.",
        skill: { name: "Knowledge Above All", sp: 10, desc: "Raising this scepter aloft, you draw every creature within 100 feet of you, including yourself, into the realm of the All-Knowing. This effect persists for 1 minute or until you lose your concentration (as if you were concentrating on a spell). For the duration, damage resistances, immunities, and vulnerabilities of creatures in the area are nullified." }
    },
    {
        name: "Scorpion's Stinger",
        type: "Dagger",
        rarity: "Very Rare",
        affinity: "Dexterity",
        description: "Dagger fashioned from a great scorpion's tail, glistening with scarlet rot. A ceremonial tool used by heretics, crafted from the relic of a sealed Outer God.",
        passive: "When you hit a creature with this weapon, the target must succeed on a DC 16 Constitution saving throw or have the Rotting condition for 1 minute. At the end of each of its turns, the target can make another Constitution saving throw. On a success, the target ends the condition.",
        skill: { name: "Repeating Thrust", sp: 3, desc: "As a bonus action, you make an attack with this weapon at a creature within range." }
    },
    {
        name: "Sentry's Torch",
        type: "Torch",
        rarity: "Uncommon",
        affinity: "None",
        description: "Torch given to protectors of the Erdtree. Its flames are bestowed with a special incantation which allows the bearer to see assassins cloaked in veils. Furnished on behalf of the Erdtree and the Grace-Given Lord such that a Night of Black Knives will never come again.",
        passive: "While carrying this torch, creatures within 30 feet of you cannot benefit from the invisible condition.",
        skill: null
    },
    {
        name: "Serpent Bow",
        type: "Shortbow",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "A bow with a serpent motif.",
        passive: "The first time you hit a creature with this magic bow, it must succeed on a Constitution saving throw or become poisoned until the end of your next turn. If the arrow you fire deals poison damage or inflicts the poison damage, the target has disadvantage on the saving throw.",
        skill: { name: "Mighty Shot", sp: 1, desc: "Until the end of your turn, before you make an attack with this weapon, you can choose to take a -5 penalty to the attack roll. If that attack hits, you add +10 to the attack's damage." }
    },
    {
        name: "Serpent-God's Curved Sword",
        type: "Scimitar",
        rarity: "Rare",
        affinity: "Dexterity",
        description: "Curved sword fashioned in the image of an ancient serpent deity and tool of a forgotten religion practiced on Mt. Gelmir. Formerly used to offer up sacrifices.",
        passive: "When you hit a creature with this sword and reduce it to 0 hit points, you regain hit points equal to your proficiency bonus.",
        skill: { name: "Spinning Slash", sp: 4, desc: "You spin your blade in a circle around you, attacking a number of separate targets equal to at most your proficiency modifier. These attacks are made at disadvantage." }
    },
    {
        name: "Serpent-Hunter",
        type: "Lance",
        rarity: "Legendary",
        affinity: "Strength",
        description: "Weapon that serves as both greatsword and spear. Thought to have been used to hunt an immortal great serpent in the distant past, it manifests a long blade of light when facing such a creature. When their master's heroic aspirations degenerated into mere greed, his men searched for a weapon with which they might halt their lord.",
        passive: "While you wield this spear within 300 feet of a Great Serpent, it manifests its true power. The spear’s reach increases by 50 feet as powerful gales burst from it. The spear also deals an additional 11 (3d6) damage to Great Serpents and man-serpents.",
        skill: { name: "Great Serpent Hunt", sp: 16, desc: "As an action while fighting a Great Serpent, you focus the light beam of this weapon into one great strike. Make an attack at the Serpent. On a hit, the attack is automatically considered a critical hit and the target must succeed on a Constitution saving throw or become stunned until the beginning of your next turn."}
    },
    {
        name: "Serpentbone Blade",
        type: "Katana",
        rarity: "Rare",
        affinity: "Dexterity",
        description: "Sinister katana modeled after a serpent bone. The densely packed row of spines that jut away from the cutting edge are coated in a lethal poison.",
        passive: "You can use an action to cause thick, black poison to coat the blade of this magic weapon. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a Constitution saving throw or take 11 (2d10) poison damage and become poisoned for 1 minute. The dagger can't be used this way again until the next dawn.",
        skill: { name: "Double Slash", sp: 4, desc: "When you take the Attack action on your turn, you use this skill as a free action to make an additional attack." }
    },
    {
        name: "Shield of the Guilty",
        type: "Shield",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Shield made to venerate a maiden whose eyes were crushed by Briars of Sin before being reborn in these lands. Venerating the repose of the soul, this shield boosts focus. The briars can be used to attack foes.",
        passive: "While wielding this shield, you have advantage on saving throws against being made unconscious or stunned.",
        skill: { name: "Parry", sp: 1, desc: "As a reaction to another creature hitting you with a melee attack, you can add +1 to your AC, potentially causing the attack to miss you." }
    },
    {
        name: "Shotel",
        type: "Scimitar",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Curved sword with a severely hooked blade. Its attacks can slip through an enemy's guard. Made to hunt down humans.",
        passive: "This hooked sword has a +2 bonus to attack rolls against creatures wielding shields.",
        skill: { name: "Spinning Slash", sp: 4, desc: "You spin your blade in a circle around you, attacking a number of separate targets equal to at most your proficiency modifier. These attacks are made at disadvantage." }
    },
    {
        name: "Siluria's Tree",
        type: "Lance",
        rarity: "Very Rare",
        affinity: "Strength",
        description: "Siluria's Tree, weapon of one of the two honored as foremost among the Crucible Knights. The primordial form of the Erdtree is close in nature to life itself, and this spear, modeled on its crucible, is imbued with ancient holy essence.",
        passive: "This weapon has a number of charges equal to your Affinity modifier. When a Crucible Knight wields this weapon, they may expend a charge and use its skill without expending SP. This weapon regains all charges after a long rest.",
        skill: { name: "Siluria's Woe", sp: 5, desc: "As an action, you gather the red-gold magic of the Crucible around the tip of this weapon. Thrusting it forward, a 5-foot wide projectile shoots out from you in a 100-foot line in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 28 (8d6) radiant damage on a failed save, or half as much damage on a successful one." }
    },
    {
        name: "Silver Mirrorshield",
        type: "Shield",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Shield of radiant silver, festooned with amber and carried by Loretta, Knight of the Haligtree. The shape is said to imitate that of a sacred drop of dew, which inspired the absurd rumor that Loretta herself was an Albinauric.",
        passive: null,
        skill: { name: "Parry", sp: 1, desc: "As a reaction to another creature hitting you with a melee attack, you can add +1 to your AC, potentially causing the attack to miss you." }
    },
    {
        name: "Smoldering Shield",
        type: "Shield",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Shield made upon Mt. Gelmir forged from uncooling lava. Resists frost with its heat.",
        passive: null,
        skill: { name: "Fire Parry", sp: 2, desc: "As a reaction to taking damage, you imbue your shield with hardened obsidian. Raising it in your defense, you gain resistance to fire damage until the start of your next turn." }
    },
    {
        name: "Spiked Palisade Shield",
        type: "Greatshield",
        rarity: "Uncommon",
        affinity: "Constitution",
        description: "Designed to perform shield bashes, these attacks riddle the enemy with holes, earning it the nickname of \"pard shield\"",
        passive: null,
        skill: { name: "Bloody Retaliation", sp: 2, desc: "As a reaction to a creature hitting you with a melee attack, you thrust your shield towards your attacker, inflicting Bleed 1." }
    },
    {
        name: "Spiked Spear",
        type: "Spear",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Weapon comprised of a spiked cylinder attached to a long pole. Capable of dealing strike damage when swung. The spikes induce blood loss. Weapon of the Marionette Soldiers employed by sorcerers.",
        passive: "This weapon inflicts Bleed 1 on a hit.",
        skill: { name: "Impaling Thrust", sp: 1, desc: "When you attack with this weapon, you may activate this skill as a free action to increase the reach of the attack by 5 feet." }
    },
    {
        name: "Spiralhorn Shield",
        type: "Shield",
        rarity: "Uncommon",
        affinity: "Constitution",
        description: "Shield of antlers arranged in an eddy-like pattern. If used to attack a foe, the shield's antlers inflict blood loss. Once given to a Tarnished warrior who cultivated close ties to the ancestral followers.",
        passive: null,
        skill: { name: "Bloody Retaliation", sp: 2, desc: "As a reaction to a creature hitting you with a melee attack, you thrust your shield towards your attacker, inflicting Bleed 1." }
    },
    {
        name: "St. Trina's Torch",
        type: "Torch",
        rarity: "Rare",
        affinity: "Wisdom",
        description: "Candlestand torch that burns with a light-purple flame. The carvings depict St. Trina, but in adult form, somewhat unnervingly.",
        passive: null,
        skill: { name: "Fires of Slumber", sp: 2, desc: "As an action, you blow ghostly white flame from this torch, drawing creatures into a magical slumber. Roll 23 (5d8), the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within 30 feet are affected in ascending order of their current hit points (ignoring unconscious creatures). You may spend an additional spell point, up to a maximum number of additional points equal to your Affinity modifier, to roll an additional 5 (1d8) and add it to the total. Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature’s hit points from the total before moving on to the creature with the next lowest hit points. A creature’s hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed aren’t affected by this skill." }
    },
    {
        name: "Staff of Loss",
        type: "Glintstone Staff",
        rarity: "Rare",
        affinity: "None",
        description: "Staff missing its glintstone. Wielded by sorcerers who believe that discovery comes through acts of asceticism. This staff is only capable of casting invisibility sorceries, but that is reason enough for some to wield it.",
        passive: "While holding this staff, Night spells you cast gain a +2 bonus to spell attack rolls and saving throw DC.",
        skill: null
    },
    {
        name: "Staff of the Avatar",
        type: "Colossal Weapon",
        rarity: "Rare",
        affinity: "Wisdom",
        description: "Ceremonial staff depicting the Erdtree in its historic radiance. Wielded by the avatars who protect the Minor Erdtrees. The avatars, emerging in the wake of the Elden Ring's shattering, were determined to protect the withering Erdtree's offspring.",
        passive: "This weapon deals an additional 7 (1d12) radiant damage on a hit.",
        skill: { name: "Erdtree Slam", sp: 6, desc: "As an action you leap into the air, moving up to 15 feet to an unoccupied space without provoking attacks of opportunity. You collect golden energy along the way before slamming down. Each creature within 15-feet of the point you land must make a Constitution saving throw. A target takes 28 (8d6) radiant damage on a failed save, or half as much damage on a successful one." }
    },
    {
        name: "Staff of the Guilty",
        type: "Glintstone Staff",
        rarity: "Rare",
        affinity: "None",
        description: "A heretical staff fashioned from a smoldering, withered sapling that turns the blood of sacrifices pierced by it into glintstone. Similar to hex magic.",
        passive: "Spells you cast using this staff use your Wisdom modifier as your spellcasting ability modifier. While holding this staff, Blood spells you cast gain a +2 bonus to spell attack rolls and saving throw DC.",
        skill: null
    },
    {
        name: "Star Fist",
        type: "Caestus",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Spherical iron manifer covered in spikes which induce blood loss. Used in brutal games of pugilism.",
        passive: "This weapon inflicts Bleed 1 on a hit.",
        skill: { name: "Endure", sp: 0, desc: "As an action, you steel yourself to harm for a brief time. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks." }
    },
    {
        name: "Starscourge Greatsword",
        type: "Greatsword",
        rarity: "Legendary",
        affinity: "Intelligence",
        description: "Curved greatswords of black steel wielded by General Radahn. A pair of weapons decorated with a lion mane motif. Radahn earned considerable renown as the Starscourge in his youth, and it is said that it was during this time he engraved the gravity crest up these blades.",
        passive: "While wielding two Starscourge Greatswords, you may wield them as if they were light weapons. When you hit an aberration with this weapon, the aberration takes an extra 7 (2d6) slashing damage.",
        skill: { name: "Starcaller Cry", sp: 6, desc: "As an action, you invoke the power of the Starscourge, gathering gravitational magic to draw others into your reach. Each creature of your choice in a 30-foot radius must succeed on a Strength saving throw or be pulled toward you in a straight line, ending in the nearest unoccupied space to you. If you activate this skill before the end of your next turn, you slam your sword into the ground, creating a gravitational explosion. Each other creature within 10 feet of you must succeed on a Strength saving throw or take 27 (6d8) force damage and be pushed 15 feet away from you." }
    },
    {
        name: "Steel-Wire Torch",
        type: "Torch",
        rarity: "Uncommon",
        affinity: "Charisma",
        description: "Torch wound with metal wire. The flame can illuminate dark locales, or be used to attack enemies. Heavier than a normal torch, but the heated filament boosts fire damage dealt.",
        passive: null,
        skill: { name: "Firebreather", sp: 2, desc: "You cast burning hands." }
    },
    {
        name: "Stormhawk Axe",
        type: "Battleaxe",
        rarity: "Rare",
        affinity: "Constitution",
        description: "Battle axe designed to resemble a hawk, with its wings comprising the blade. Signature weapon of warriors who strive to remain one with the storm, despite being so far from their place of birth. Their hearts are proud, and thereby easily undone.",
        passive: null,
        skill: { name: "Thunderstorm", sp: 4, desc: "As a bonus action, you slam your foot into ground, conjuring a lightning storm in a 5-foot radius around you. Each creature in the area must succeed on a Dexterity saving throw against your Affinity DC. On a failed save, the creature takes 7 (2d6) lightning damage and is pushed 5 feet away from you. Until the end of your turn, this weapon inflicts an additional 5 (1d8) lightning damage on a hit. A creature can take this damage only once during a turn." }
    },
    {
        name: "Sword of Milos",
        type: "Greatsword",
        rarity: "Very Rare",
        affinity: "Charisma",
        description: "Sinister greatsword fashioned from a giant's backbone. The spines along each side of the blade have been tapered to a fine point and mete out wounds like a lopsided saw-blade. Milos was undersized for a giant, and was viewed as sullied and terribly grotesque.",
        passive: "This weapon inflicts Bleed 1 on a hit. When you hit a creature with this magic weapon and reduce it to 0 hit points, you regain up to 4 spell points. These can be put into a martial spell point pool if available.",
        skill: { name: "Shriek of Milos", sp: 4, desc: "As an action, you let loose a cursed scream from deep within. Each creature within 30 feet who can hear this scream must make a Charisma saving throw. On a failure, the target's damage resistances are nullified for 1 minute. On a successful save, the target suffers no effect." }
    },
    {
        name: "Sword of Night and Flame",
        type: "Longsword",
        rarity: "Legendary",
        affinity: "Special",
        description: "Storied sword and treasure of Caria Manor. One of the legendary armaments. Astrologers, who preceded the sorcerers, established themselves in mountaintops that nearly touched the sky, and considered the Fire Giants their neighbors.",
        passive: "This weapon deals an additional 4 (1d6) cold damage plus 4 (1d6) fire on a hit.",
        skill: { name: "Night-and-Flame Stance", sp: 13, desc: "This weapon's Affinity modifier is equal to the lower of your Intelligence and Wisdom modifiers. As an action, you hold this weapon level and prepare to unleash the power of the moon and heretical flame in tandem. You must concentrate until your next turn as if you were concentrating on a spell. If your concentration was not broken, you can choose either Night or Flame from the options below. Night: You cast comet azur. At the beginning of each subsequent turn, if you are still concentrating on the spell you must spend an additional 13 SP to maintain concentration. Flame: You swing your sword, producing a wave of flame that explodes outwards from you. Each creature in a 60-foot cone originating from you must make a Dexterity saving throw. A target takes 78 (12d12) fire damage on a failed save, or half as much damage on a successful one." }
    },
    {
        name: "Sword of St. Trina",
        type: "Longsword",
        rarity: "Rare",
        affinity: "Wisdom",
        description: "Silver sword carried by clerics of St. Trina. Inflicts sleep ailment upon foes. St. Trina is an enigmatic figure. Some say she is a comely young girl, others are sure he is a boy. The only certainty is that their appearance was as sudden as their disappearance.",
        passive: null,
        skill: { name: "Mists of Slumber", sp: 8, desc: "As an action, you create a cloud of silver mist in a 10-foot radius sphere centered on a point within 45 feet of you. Each creature in the area must succeed on a Wisdom saving throw or falls unconscious. It wakes up if it takes any damage or if another creature uses its action to shake the sleeper awake."}
    },
    {
        name: "Thorned Whip",
        type: "Whip",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Hefty whip covered in crimson thorns. Weapon of the Prelates who lead the Fire Monks. A device of fearsome religious encouragement, it is fashioned in the image of the briars of fin.",
        passive: "This weapon inflicts Bleed 2 on a hit.",
        skill: { name: "Kick", sp: 1, desc: "As a bonus action, you may shove a creature within 5 feet of you. You may use your Affinity modifier in place of Strength for the shove." }
    },
    {
        name: "Torchpole",
        type: "Spear",
        rarity: "Uncommon",
        affinity: "Constitution",
        description: "Torch fastened to a long pole. Lights up dark areas, but cannot be raised overhead. Used by soldiers on watch, its attacks set flames aflame.",
        passive: "This spear deals fire damage instead of piercing damage. While you are wielding it, its tip burns bright, providing bright light in a 20-foot radius and dim light for an additional 20 feet.",
        skill: { name: "Charge Forth", sp: 2, desc: "If you move at least 20 feet towards a target and hit it with a weapon attack on the same turn, you may activate this skill as a free action. If you do, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a Strength saving throw or be knocked prone."}
    },
    {
        name: "Treespear",
        type: "Lance",
        rarity: "Rare",
        affinity: "Wisdom",
        description: "Golden spear with tree-like design. Wielded by knights employed as palace guards in the Royal Capital of Leyndell. Deals only holy damage. Requiring superior dexterity to wield, this greatspear can perform consecutive thrust attacks despite its larger size.",
        passive: "This spear inflicts an additional 6 (1d10) radiant damage on a hit.",
        skill: { name: "Sacred Order", sp: 2, desc: "As a bonus action, you raise your blade aloft, invoking the Golden Order. Your weapon attacks deal an extra 3 (1d4) radiant damage on a hit. The effect persists for 1 minute or until you lose your concentration (as if you were concentrating on a spell)." }
    },
    {
        name: "Troll's Hammer",
        type: "Colossal Weapon",
        rarity: "Uncommon",
        affinity: "Strength",
        description: "Mining tool of stonedigger trolls used to crack bedrock. Trolls are descended from the giants, and these were supposedly once used as ceremonial smithing tools. In the distant past, smithing was considered divine.",
        passive: "This weapon inflicts an additional 4 (1d6) fire damage on a hit.",
        skill: { name: "Troll's Roar", sp: 3, desc: "A blast of thunderous energy explodes from you, forcing creatures away. Each creature within 15 feet of you must succeed on a Constitution saving throw or be pushed 15 feet away from you. On a success, the creature is not pushed." }
    },
    {
        name: "Twinbird Kite Shield",
        type: "Shield",
        rarity: "Uncommon",
        affinity: "Dexterity",
        description: "Shield featuring a vividly painted twinbird. The twinbird is said to be the envoy of an Outer God, and mother of the Deathbirds.",
        passive: "When your hit points are below half your hit point maximum while wielding this shield, your AC and Strength score increases by 1.",
        skill: { name: "Parry", sp: 1, desc: "As a reaction to another creature hitting you with a melee attack, you can add +1 to your AC, potentially causing the attack to miss you." }
    },
    {
        name: "Varré's Bouquet",
        type: "Warhammer",
        rarity: "Rare",
        affinity: "Constitution",
        description: "A steel mace resembling a charming bouquet of roses. Each petal has a sharpened edge, leaving the roses perpetually colored with blood. This weapon reflects White Mask Varré's manner of speech rather well, enticing in its splendor, but full of deadly consequence.",
        passive: "This weapon inflicts Bleed 2 on a hit.",
        skill: { name: "Blood Tax", sp: 3, desc: "As a reaction to a creature within 30 feet of you failing a saving throw against Bleed, you may draw some of their lost blood into yourself. You regain hit points equal to half of the hit points lost from the Bleed effect." }
    },
    {
        name: "Venomous Fang",
        type: "Claws",
        rarity: "Rare",
        affinity: "Dexterity",
        description: "One of the weapons designed for gladiatorial combat. Used by duelists who were exiled from the colosseum. The black fang protruding from the bronze snake head is coated in deadly poison.",
        passive: "This weapon inflicts an additional 4 (1d6) poison damage on a hit.",
        skill: { name: "Envenom", sp: 4, desc: "You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 11 (2d10) poison damage and become poisoned for 1 minute. The dagger can't be used this way again until the next dawn." }
    },
    {
        name: "Veteran's Prosthesis",
        type: "Claws",
        rarity: "Rare",
        affinity: "Strength",
        description: "Bladed prosthetic leg enwreathed with the power of lightning, instead attached to the fist. Commander Niall, veteran of Castle Sol, offered this prosthesis in exchange for the lives of defeated knights held prisoner. He went on to lead these men as an army of no nation.",
        passive: "This claws inflicts an additional 5 (2d4) lightning damage on a hit.",
        skill: { name: "Storm Kick", sp: 4, desc: "As an action, you kick up a storm around you that carries you into the air. You may fly up to 15 feet without provoking attacks of opportunity before landing in an unoccupied space. Afterwards, each other creature within 10 feet of you must make a Dexterity saving throw. On a failed save, the creature takes 26 (4d12) lightning damage and is pushed 10 feet away from you. On a successful save, the target takes half damage and is not pushed." }
    },
    {
        name: "Visage Shield",
        type: "Greatshield",
        rarity: "Rare",
        affinity: "Strength",
        description: "Tricksome bronze shield depicting the face of a Fire Giant. Several tongues leap from its open mouth. The dreadful visage and burning flames are designed to remind one of the horror of facing a Fire Giant. In other words, this shield has an instructional function.",
        passive: null,
        skill: { name: "Tongues of Fire", sp: 2, desc: "As an action, you hold this shield in front of you as it ejects fire in a 15-foot cone. Each creature in that area must make a Dexterity saving throw, taking 11 (3d6) fire damage on a failed save, or half as much damage on a successful one." }
    },
    {
        name: "Vyke's War Spear",
        type: "Lance",
        rarity: "Rare",
        affinity: "Charisma",
        description: "War spear singed and blistered by fingers, used by Vyke, Knight of the Roundtable Hold. Like Vyke himself, it has been tormented by the yellow flame of frenzy from within.",
        passive: null,
        skill: { name: "Frenzyflame Thrust", sp: 6, desc: "You leap into the air, slamming this weapon down into the earth while frenzyflame bursts from you. Each creature in a 15-foot cube originating from you must make a Wisdom saving throw. On a failed save, a creature takes 9 (2d8) psychic damage and is stunned until the end of your next turn. On a successful save, the creature takes half as much damage and isn't stunned. When you activate this skill, you must succeed on a DC 10 Wisdom saving throw or be stunned until the end of your next turn." }
    },
    {
        name: "Watchdog's Greatsword",
        type: "Ultra Greatsword",
        rarity: "Rare",
        affinity: "Intelligence",
        description: "Stone greatsword wielded by Erdtree Burial Watchdogs. Though decorated with the watchman's eye, the pupil was taken by graverobbers and is now hollow, leaving this sword a mere lump of stone.",
        passive: null,
        skill: { name: "Sorcery of the Crozier", sp: 3, desc: "As an action, you channel magic into the glintstone within this weapon, creating a number of magical darts equal to your Affinity modifier. Each dart hits a creature of your choice that you can see within 120 feet of you. A dart deals 3 (1d4)+1 force damage to its target. The darts all strike simultaneously and you can direct them to hit one creature or several." }
    },
    {
        name: "Watchdog's Staff",
        type: "Colossal Weapon",
        rarity: "Rare",
        affinity: "Intelligence",
        description: "Large stone staff embedded with glintstone. Wielded by Erdtree Burial Watchdogs who protect catacombs. The Watchdogs, battered and broken over their lengthy tenure, rule the catacombs and are even said to command the imps.",
        passive: null,
        skill: { name: "Sorcery of the Crozier", sp: 3, desc: "As an action, you channel magic into the glintstone within this staff, creating a number of magical darts equal to your Affinity modifier. Each dart hits a creature of your choice that you can see within 120 feet of you. A dart deals 3 (1d4)+1 force damage to its target. The darts all strike simultaneously and you can direct them to hit one creature or several." }
    },
    {
        name: "Wing of Astel",
        type: "Shortsword",
        rarity: "Legendary",
        affinity: "Intelligence",
        description: "Sword fashioned from a delicate wing, suffused with the magic of the stars. Strong attack unleashes a wave of enchanted light. Crafted from a relic of the Naturalborn of the Void who is said to have assailed the Eternal City.",
        passive: "This weapon deals an additional 5 (2d4) force damage on a hit. When you make an attack with this weapon, you may instead make a ranged spell attack roll at a creature within 30 feet. On a hit, the target takes damage as if it were hit in melee, except all of the damage is force. When you hit an aberration with this weapon, the aberration takes an additional 7 (2d6) force damage.",
        skill: { name: "Nebula", sp: 5, desc: "You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point within 150-feet. The effect persists for 1 minute or until you lose your concentration (as if you were concentrating on a spell). This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded. The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 7 (2d6) cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 7 (2d6) acid damage as milky, otherworldly tentacles rub against it." }
    },
    {
        name: "Winged Greathorn",
        type: "Greataxe",
        rarity: "Legendary",
        affinity: "Wisdom",
        description: "A unique horn in which the power of ancestral spirit fiercely dwells, this large, wing-shaped specimen is wielded as weapon of spirit worship. In the ancestral spirit-worshipping faith, these are considered envoys' wings, made to reap the lives of beings which experience no sprouting.",
        passive: null,
        skill: { name: "Soul Stifler", sp: 8, desc: "As an action, you raise this weapon into the air, invoking the ancestral spirits. The ancestor spirit's cry echoes, forming a hazy miasma in a 20-foot radius around you. Each creature of your choice in the area must make a Wisdom saving throw. On a failure, the target's AC is reduced by an amount equal to your Affinity bonus. On a successful save, the target's AC is not reduced. You may concentrate on this effect as if it were a spell for up to 1 minute. While concentrating, the miasma moves with you. A creature makes this save when it enters the miasma for the first time on its turn or starts its turn there. Creatures already affected by the miasma have disadvantage on this saving throw." }
    },
    {
        name: "Winged Scythe",
        type: "Reaper",
        rarity: "Rare",
        affinity: "Wisdom",
        description: "Sacred scythe resembling a pair of white wings. Deals holy damage. According to pagan belief, white-winged maidens are said to be Death's gentle envoys.",
        passive: "This weapon inflicts an additional 4 (1d6) radiant damage on a hit.",
        skill: { name: "Angel's Wings", sp: 3, desc: "As an action, you focus energy in this weapon's blade. It glows white as you are pulled into the air. You fly up to 15 feet to an unoccupied space without provoking attacks of opportunity. When you land, you can make an attack at a creature within range. On a hit, the target takes an additional 5 (1d8) radiant damage and it can't regain hit points until the start of your next turn." }
    },
    {
        name: "Zamor Curved Sword",
        type: "Cleaver",
        rarity: "Very Rare",
        affinity: "Intelligence",
        description: "Weapon wielded by the knights of Zamor who earned great renown during the War against the Giants. In apparent devotion to winter, the curved blade is styled after an icy wind and imbued with a powerful frost effect.",
        passive: "When you hit a creature with this weapon, it must succeed on a Constitution saving throw or be frostbitten until the end of their next turn. If the target is a dragon, it has disadvantage on the saving throw.",
        skill: { name: "Zamor Ice Storm", sp: 10, desc: "You cast Zamor ice storm." }
    }
];
        