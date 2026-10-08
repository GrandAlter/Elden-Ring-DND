const ashesOfWar = [
    {
        name: "Alabaster Lords' Pull",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 6,
        description: "As an action, you can thrust this weapon into the ground, creating a gravitational disturbance in a 20-foot radius around you. Each creature of your choice in the area must make a Strength saving throw. On a failure, the creature takes 22 (4d10) force damage, and is pulled in a straight line toward you, ending in an unoccupied space as close to you as possible. On a success, the creature takes half as much damage and is not pushed."
    },
    {
        name: "Ancient Lightning Spear",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 9,
        description: "As an action, you call a bolt of red lightning to this weapon, imbuing it with the power of ancient Gransax. Lifting you off the ground briefly, you release the lighting as a ranged spell attack using your Affinity modifier at a creature you can see within 300 feet of you. On a hit, the target takes 54 (12d8) lightning damage."
    },
    {
        name: "Angel's Wings",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 3,
        description: "As an action, you focus energy in this weapon's blade. It glows white as you are pulled into the air. You fly up to 15 feet to an unoccupied space without provoking attacks of opportunity. When you land, you can make an attack at a creature within range. On a hit, the target takes an additional 5 (1d8) radiant damage and it can't regain hit points until the start of your next turn."
    },
    {
        name: "Assassin's Gambit",
        compatibility: "Dagger, Shortsword, Longsword, Scimitar, or Katana",
        affinity: "Charisma",
        sp: 1,
        description: "As an action, you run this weapon's blade across your palm, inflicting 3 (1d4) necrotic damage to yourself that cannot be reduced in any way. For the next minute, you gain advantage on Stealth checks."
    },
    {
        name: "Barbaric Roar",
        compatibility: "Melee, Non-Finesse",
        affinity: "Strength",
        sp: 2,
        description: "When you make your first attack on your turn, you can activate this ability, uttering a guttural roar. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
    },
    {
        name: "Barrage",
        compatibility: "Shortbow",
        affinity: "Dexterity",
        sp: 3,
        description: "When you make a ranged weapon attack on your turn, you can use your bonus action to make an additional attack with this weapon."
    },
    {
        name: "Barricade Shield",
        compatibility: "Shield",
        affinity: "Strength",
        sp: 2,
        description: "As a bonus action, you reinforce this shield, increasing your AC by 1 until the beginning of your next turn."
    },
    {
        name: "Bear Witness!",
        compatibility: "None (Unique Skill)",
        affinity: "Charisma",
        sp: 7,
        description: "As an action, you grant life to the Grafted Dragon for just a moment. As it opens its mouth, it exhales fire in your choice of a 30-foot line out from you, a 20-foot cone out from you, or a 10-foot radius, 30-foot high cylinder within 30 feet of you. Each creature in the area must make a Dexterity saving throw. A target takes 28 (8d6) fire damage on a failed save, or half as much damage on a successful one."
    },
    {
        name: "Beast's Roar",
        compatibility: "Melee",
        affinity: "Dexterity",
        sp: 1,
        description: "When you make an attack with this weapon, you may instead activate this skill to unleash a bestial roar from deep within. Make a ranged weapon attack with your Affinity modifier. On a hit, the target takes bludgeoning damage equal to 5 (1d8) + your Affinity modifier."
    },
    {
        name: "Black Flame Tornado",
        compatibility: "Melee, Reach",
        affinity: "Charisma",
        sp: 10,
        description: "As an action, you whip up a whirlwind of black flame in a 10-foot radius, 50-foot high cylinder around you. The area of the whirlwind is difficult terrain. A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or ends their turn in the area, including when the whirlwind first appears. On a failed save, a creature takes 14d6 fire damage on a failed save, or half as much damage on a successful one. Damage from this skill ignores damage resistances and damage immunities of celestial creatures."
    },
    {
        name: "Blade of Death",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 5,
        description: "As an action, you invoke the vestiges of Destined Death still held in this blade. A red-black flame coats the blade, shooting out as a ranged spell attack at a creature within 60 feet of you. This attack uses your Affinity modifier. On a hit, the target takes 14 (4d6) radiant damage immediately and an additional 7 (2d6) radiant damage at the end of its next turn. This attack is considered a ranged weapon attack for the purposes of the Sneak Attack ability. The target's hit point maximum is reduced by an amount equal to the radiant damage taken."
    },
    {
        name: "Blade of Gold",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 4,
        description: "As an action, you charge this blade with golden flame that shoots out as a ranged spell attack at a creature within 60 feet of you. This attack uses your Affinity modifier. On a hit, the target takes 21 (6d6) radiant damage. This attack is considered a ranged weapon attack for the purposes of the Sneak Attack ability."
    },
    {
        name: "Blood Blade",
        compatibility: "Melee, Slashing",
        affinity: "Constitution",
        sp: 2,
        description: "As an action, you inflict 3 (1d4) necrotic damage on yourself. This damage can't be reduced in any way. Drawing your own blood onto your weapon, you unleash it as a projectile at a creature within 30 feet of you. Make a ranged weapon attack using your Affinity modifier. On a hit, the target takes 7 (2d6) necrotic damage and is afflicted by Bleed 2."
    },
    {
        name: "Blood Tax",
        compatibility: "Melee, Piercing",
        affinity: "Constitution",
        sp: 3,
        description: "As a reaction to a creature within 30 feet of you failing a saving throw against Bleed, you may draw some of their lost blood into yourself. You regain hit points equal to half of the hit points lost from the Bleed effect."
    },
    {
        name: "Bloodblade Dance",
        compatibility: "None (Unique Skill)",
        affinity: "Constitution",
        sp: 2,
        description: "As a reaction to a creature within 5 feet of you failing a saving throw against Bleed, you may make an attack against them. If the target is afflicted by Bleed by being hit, it must make the Bleed save immediately."
    },
    {
        name: "Bloodboon Ritual",
        compatibility: "None (Unique Skill)",
        affinity: "Charisma",
        sp: 11,
        description: "As an action, you thrust this weapon into the invisible body of the Formless Mother. Bloodflame pours from the wound, raining down in a 30-foot radius, 30-foot tall cylinder centered on you. Each creature other than you in the area must make a Dexterity saving throw. On a failure, the creature takes 42 (12d6) fire damage and is afflicted by Bleed 3. On a successful save, the creature takes half as much damage and isn't afflicted by Bleed."
    },
    {
        name: "Bloodhound's Finesse",
        compatibility: "None (Unique Skill)",
        affinity: "Dexterity",
        sp: 2,
        description: "As a bonus action, you take the Dash and Disengage action simultaneously."
    },
    {
        name: "Bloodhound's Step",
        compatibility: "Melee",
        affinity: "Dexterity",
        sp: 2,
        description: "As a bonus action, you take the Disengage action. Until the end of your turn, you become invisible unless you attack or cast a spell."
    },
    {
        name: "Bloody Retaliation",
        compatibility: "None (Unique Skill)",
        affinity: "Constitution",
        sp: 2,
        description: "As a reaction to a creature hitting you with a melee attack, you thrust your shield towards your attacker, inflicting Bleed 1."
    },
    {
        name: "Bloody Slash",
        compatibility: "Melee, Slashing",
        affinity: "Constitution",
        sp: 3,
        description: "As a bonus action, you coat this blade in blood, extending its reach by 5 feet until the end of your turn. If this weapon does not inflict Bleed, it also inflicts Bleed 2 for the same duration. If it does inflict Bleed, when you hit a creature with a weapon attack from this blade, it has Disadvantage on the next saving throw against Bleed it makes before the beginning of your next turn."
    },
    {
        name: "Braggart's Roar",
        compatibility: "Melee, Non-Finesse",
        affinity: "Strength",
        sp: 3,
        description: "As a bonus action, you bellow a boastful roar, declaring your dominance to the world. Until the beginning of your next turn, attack rolls against you have advantage, and you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks."
    },
    {
        name: "Bubble Shower",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 2,
        description: "You cast oracle bubbles. The spell does radiant damage instead of force damage"
    },
    {
        name: "Carian Grandeur",
        compatibility: "Melee, Slashing, Non-Colossal",
        affinity: "Intelligence",
        sp: 6,
        description: "You cast carian greatsword. The range of the spell increases by 10 feet."
    },
    {
        name: "Carian Greatsword",
        compatibility: "Melee, Slashing, Non-Colossal",
        affinity: "Intelligence",
        sp: 5,
        description: "You cast carian greatsword."
    },
    {
        name: "Carian Retaliation",
        compatibility: "Shield, Non-Heavy",
        affinity: "Intelligence",
        sp: 3,
        description: "You cast carian retaliation."
    },
    {
        name: "Charge Forth",
        compatibility: "Spear or Pike",
        affinity: "Constitution",
        sp: 2,
        description: "If you move at least 20 feet towards a target and hit it with a weapon attack on the same turn, you may activate this skill as a free action. If you do, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a Strength saving throw or be knocked prone."
    },
    {
        name: "Chilling Mist",
        compatibility: "Melee",
        affinity: "Intelligence",
        sp: 6,
        description: "You cast freezing mist."
    },
    {
        name: "Claw Flick",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 6,
        description: "As an action, you command this weapon to engorge, doubling in size as it digs into the ground in front of you. The finger explodes outward in a flicking motion, upturning earth and flinging nearby creatures in a 15-foot cube in front of you. On a failed save, a creature takes 18 (4d8) bludgeoning damage and is pushed a number of feet away from you equal to 5 times your Affinity modifier. On a successful save, the creature takes half as much damage and isn't pushed."
    },
    {
        name: "Contagious Fury",
        compatibility: "None (Unique Skill)",
        affinity: "Constitution",
        sp: 3,
        description: "As a bonus action, you can invoke the latent anger of your gelatinous shield. It glows bright red until the end of your next turn. For the duration, the first time a creature makes an attack against you, you gain a bonus to damage rolls against it for the duration. The damage bonus equal to your Affinity modifier."
    },
    {
        name: "Corpse Piler",
        compatibility: "None (Unique Skill)",
        affinity: "Constitution",
        sp: 5,
        description: "When you take the Attack action on your turn, you use this skill as a free action to make an additional attack. When you hit a Bleeding creature with this weapon this turn, the Bleed DC increases by 2 instead of 1."
    },
    {
        name: "Corpse Wax Cutter",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 6,
        description: "As an action, you draw the power of corpse wax out of this blade, unleashing a pale imitation of Destined Death in a 60-foot long, 5-foot wide line out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 28 (8d6) radiant damage on a failed save, or half as much damage on a successful one."
    },
    {
        name: "Cragblade",
        compatibility: "Melee",
        affinity: "Strength",
        sp: 3,
        description: "As a bonus action, you bury your weapon into the ground, carrying rocks and earth stuck to the blade when you pull it out. For a number of rounds equal to your proficiency bonus, creatures you hit with attack rolls with this weapon must succeed on a Strength saving throw or be knocked prone."
    },
    {
        name: "Cursed-Blood Slice",
        compatibility: "None (Unique Skill)",
        affinity: "Charisma",
        sp: 3,
        description: "As a bonus action, you invoke the cursed blood of this weapon's former wielder. As bloodflame coats the weapon, it enters the bloodstreams of those it injures. Until the beginning of your turn, when a creature you've hit with a weapon attack fails a saving throw against Bleed, it takes an additional 7 (2d6) fire damage for each Hit Die it rolls for bleed damage."
    },
    {
        name: "Death Flare",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 7,
        description: "As a bonus action, you coat this blade in blackflame, imbued with Godwyn's death blight. For the next minute, when you hit a humanoid creature with this weapon for the first time each turn, it must succeed on a Constitution saving throw or gain a level of exhaustion."
    },
    {
        name: "Destined Death",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 10,
        description: "As an action, you invoke the unbound Rune of Death. A red-black flame surrounds your weapon, gathering around it in an inferno until it releases as a flurry of innumerable blades made of pure Death. Each creature within 15 feet of you must make a Dexterity saving throw. On a failed save, the target takes 78 (12d12) radiant damage immediately and 39 (6d12) radiant damage at the end of its next turn. On a successful save, the target takes half of the initial damage and no damage at the end of its next turn. The target's hit point maximum is reduced by an amount equal to the radiant damage taken in either case. Damage from this skill cannot be reduced by any means."
    },
    {
        name: "Determination",
        compatibility: "Melee",
        affinity: "Constitution",
        sp: 1,
        description: "As a bonus action, you focus your resolve. Until your next turn, you gain advantage on your first attack roll."
    },
    {
        name: "Devourer of Worlds",
        compatibility: "None (Unique Skill)",
        affinity: "Charisma",
        sp: 8,
        description: "As an action, you slam the hilt of your weapon into the ground, drawing the vitality of others into yourself. Each creature within 20 feet of you must make a Charisma saving throw. On a failed save, the creature takes 18 (5d6) necrotic damage and you regain hit points equal to half the total damage dealt. On a successful save, the creature takes half as much damage and you don't regain hit points."
    },
    {
        name: "Double Slash",
        compatibility: "Melee, Slashing, Non-Colossal",
        affinity: "Dexterity",
        sp: 4,
        description: "When you take the Attack action on your turn, you use this skill as a free action to make an additional attack."
    },
    {
        name: "Dynast's Finesse",
        compatibility: "None (Unique Skill)",
        affinity: "Dexterity",
        sp: 4,
        description: "As a reaction to another creature hitting you with a melee attack, you can add your Affinity modifier to your AC, potentially causing the attack to miss you. If it does, you may make an attack with this weapon at your attacker as part of the same reaction if they are within your reach."
    },
    {
        name: "Earthshaker",
        compatibility: "Heavy",
        affinity: "Strength",
        sp: 2,
        description: "You thrust your weapon into the ground, mustering strength to cause an earthquake nearby. Each creature within 10 feet of you must make a Strength saving throw. On a failed save, a target takes 7 (2d6) bludgeoning damage and is knocked prone. On a successful save, the creature takes half damage, but suffers no other effect."
    },
    {
        name: "Enchanted Shot",
        compatibility: "Shortbow or Longbow",
        affinity: "Dexterity",
        sp: 1,
        description: "When you make a ranged attack with this weapon, you may activate this skill to ignore the penalty imposed by half or three-quarters cover. If the target has full cover, but the area above you and the target is open, attack can also ignore the target's full cover as well. The attack is still made at disadvantage if you cannot see the target."
    },
    {
        name: "Endure",
        compatibility: "Melee",
        affinity: "Strength",
        sp: 0,
        description: "As an action, you steel yourself to harm for a brief time. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks."
    },
    {
        name: "Envenom",
        compatibility: "Unique",
        affinity: "Dexterity",
        sp: 4,
        description: "You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 11 (2d10) poison damage and become poisoned for 1 minute. The weapon can't be used this way again until the next dawn."
    },
    {
        name: "Eochaid's Dancing Blade",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 0,
        description: "When you take the Attack action while this sword is hovering, you can use skill to make any number of those attacks with the hovering sword instead."
    },
    {
        name: "Erdtree Slam",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 6,
        description: "As an action you leap into the air, moving up to 15 feet to an unoccupied space without provoking attacks of opportunity. You collect golden energy along the way before slamming down. Each creature within 15-feet of the point you land must make a Constitution saving throw. A target takes 28 (8d6) radiant damage on a failed save, or half as much damage on a successful one."
    },
    {
        name: "Eruption",
        compatibility: "Melee, Heavy",
        affinity: "Charisma",
        sp: 4,
        description: "When you hit a creature with a melee attack with this weapon, you may activate this skill to slam your weapon in the ground. Pulling it from the earth, you leave a puddle of magma in a five-foot square in the target's space adjacent to you. The target takes an additional 14 (4d6) fire damage. The magma is difficult terrain and remains in the space for 1 minute before hardening. Any creature that enters the area for the first time on a turn or ends its turn in there takes 14 (4d6) fire damage."
    },
    {
        name: "Establishing Order",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 10,
        description: "As an action, you may hold this blade out to your side, invoking the Golden Order as a golden wave explodes out from you in a 10-foot radius. Each creature in the area must make a Charisma saving throw. On a failed save, a creature suffers an effect based on its current hit points: 50 hit points or fewer - deafened for 1 minute; 40 hit points or fewer - deafened and blinded for 10 minutes; 30 hit points or fewer - blinded, deafened, and stunned for 1 hour; 20 hit points or fewer - killed instantly. For the next minute, as an action, you can produce a wide arc of divine energy in a 15-foot wide, 30-foot long line from you in a direction of your choice. Each creature in the line must make a Dexterity saving throw. A creature takes 23 (5d8) radiant damage on a failed save, or half as much damage on a successful one."
    },
    {
        name: "Familial Rancor",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 5,
        description: "You cast rancorcall."
    },
    {
        name: "Fire Parry",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 2,
        description: "As a reaction to taking damage, you imbue your shield with hardened obsidian. Raising it in your defense, you gain resistance to fire damage until the start of your next turn."
    },
    {
        name: "Firebreather",
        compatibility: "None (Unique Skill)",
        affinity: "Charisma",
        sp: 2,
        description: "You cast burning hands."
    },
    {
        name: "Fires of Slumber",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 2,
        description: "As an action, you blow ghostly white flame from this torch, drawing creatures into a magical slumber. Roll 23 (5d8), the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within 30 feet are affected in ascending order of their current hit points (ignoring unconscious creatures). You may spend an additional spell point, up to a maximum number of additional points equal to your Affinity modifier, to roll an additional 5 (1d8) and add it to the total. Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed aren't affected by this skill."
    },
    {
        name: "Flame Dance",
        compatibility: "None (Unique Skill)",
        affinity: "Charisma",
        sp: 5,
        description: "As an action, you imbue your weapon with giants flame as it extends to add an additional 5 feet to your reach. You may make an attack at any number of creatures that are in separate range increments from you. For instance, if your reach is 15 feet, you can make an attack against three targets: one 5 feet away, one 10 feet away, and one 15 feet away. If a creature is Large or larger, and thus can span multiple range increments, they may be attacked more than once as long as they are within available range increments."
    },
    {
        name: "Flame of the Redmanes",
        compatibility: "Melee",
        affinity: "Charisma",
        sp: 4,
        description: "As an action, a thin sheet of flames shoots forth from both of your hands. Each creature in a 30-foot cone must make a Dexterity saving throw. A creature takes 21 (6d6) fire damage on a failed save, or half as much damage on a successful one."
    },
    {
        name: "Flame Spit",
        compatibility: "None (Unique Skill)",
        affinity: "Constitution",
        sp: 5,
        description: "You cast cannon of Haima, except that it deals fire damage instead of force."
    },
    {
        name: "Flaming Strike",
        compatibility: "Melee",
        affinity: "Charisma",
        sp: 5,
        description: "As an action, you run your hand along this weapon, igniting it for 1 minute. While the sword is ablaze, it deals an extra 7 (2d6) fire damage to any target it hits."
    },
    {
        name: "Flowing Form",
        compatibility: "None (Unique Skill)",
        affinity: "Dexterity",
        sp: 2,
        description: "As a bonus action, you transform your blade into liquid metal, extending its reach by 15 feet until the end of your turn."
    },
    {
        name: "Frenzyflame Thrust",
        compatibility: "None (Unique Skill)",
        affinity: "Charisma",
        sp: 6,
        description: "You leap into the air, slamming this weapon down into the earth while frenzyflame bursts from you. Each creature in a 15-foot cube originating from you must make a Wisdom saving throw. On a failed save, a creature takes 9 (2d8) psychic damage and is stunned until the end of your next turn. On a successful save, the creature takes half as much damage and isn't stunned. When you activate this skill, you must succeed on a DC 10 Wisdom saving throw or be stunned until the end of your next turn."
    },
    {
        name: "Frost Parry",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 2,
        description: "As a reaction to taking damage, you imbue your shield with chilling frost. Raising it in your defense, you gain resistance to cold damage until the start of your next turn."
    },
    {
        name: "Ghostflame Ignition",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 6,
        description: "As an action, you create a wall of ghostflame on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration. When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 23 (5d8) cold damage, or half as much damage on a successful save. One side of the wall, selected by you when you use this skill, deals 23 (5d8) cold damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage."
    },
    {
        name: "Giant Hunt",
        compatibility: "Melee, Piercing, Heavy",
        affinity: "Constitution",
        sp: 1,
        description: "When you make an attack roll against a Huge or larger creature, you may activate this skill as a free action to gain advantage on the roll."
    },
    {
        name: "Glintblade Phalanx",
        compatibility: "Melee, Piercing, Non-Colossal",
        affinity: "Intelligence",
        sp: 3,
        description: "You cast glintstone phalanx."
    },
    {
        name: "Glintstone Dart",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 3,
        description: "You cast glintstone pebble, followed by a melee attack with this weapon at a creature within your reach."
    },
    {
        name: "Glintstone Pebble",
        compatibility: "Melee, Piercing, Non-Colossal",
        affinity: "Intelligence",
        sp: 0,
        description: "You cast glintstone pebble."
    },
    {
        name: "Gold Breaker",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 13,
        description: "As a free action, you raise this hammer to the sky as it lifts you into the air in turn. Until the end of your turn, you have a flying speed of 60 feet. When you make an attack with this weapon for the duration, you slam the hammer into the ground, creating a golden explosion around you. Each creature of your choice in a 20-foot radius, 10-foot tall sphere centered on your target must make a Dexterity saving throw. A target takes 55 (10d10) radiant damage on a failed save, or half as much damage on a successful one."
    },
    {
        name: "Golden Land",
        compatibility: "Melee, Heavy, Non-Slashing",
        affinity: "Wisdom",
        sp: 5,
        description: "You create a number of golden darts equal to your Affinity modifier and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack with your Affinity modifier for each dart. On a hit, the target takes 7 (2d6) radiant damage."
    },
    {
        name: "Golden Parry",
        compatibility: "Shield, Non-Heavy",
        affinity: "Wisdom",
        sp: 2,
        description: "As a reaction to taking damage, you imbue your shield with brilliant gold. Raising it in your defense, you gain resistance to radiant damage until the start of your next turn."
    },
    {
        name: "Golden Retaliation",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 2,
        description: "As a reaction to being targeted by a ranged spell attack, you can raise your shield and produce an Erdtree sigil, imposing disadvantage on the attack roll. If the attack misses, the sigil turns into a golden dart that hits the attacker, dealing radiant damage equal to 3 (1d4) + your Affinity modifier."
    },
    {
        name: "Golden Slam",
        compatibility: "Melee",
        affinity: "Wisdom",
        sp: 3,
        description: "You leap into the air, moving up to 10 feet horizontally and vertically before crashing down to earth and creating a 10-foot radius shockwave around you. You take no falling damage for the duration of the leap. Each creature in the area make a Dexterity saving throw. On a failed save, the target takes radiant damage equal to the amount of falling damage you would have taken after the fall. On a successful save, the target takes half as much damage."
    },
    {
        name: "Golden Tempering",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 7,
        description: "As an action, you run your hand along this weapon, blessing it with gold for 1 minute. While the sword is blessed, it deals an extra 7 (2d6) radiant damage to any target it hits."
    },
    {
        name: "Golden Vow",
        compatibility: "Melee",
        affinity: "Wisdom",
        sp: 6,
        description: "You cast golden vow."
    },
    {
        name: "Gravitas",
        compatibility: "Melee, Non-Light",
        affinity: "Intelligence",
        sp: 5,
        description: "As an action, you can thrust this weapon into the ground, creating a gravitational disturbance in a 15-foot radius around you. Each creature of your choice in the area must make a Strength saving throw. On a failure, the creature takes 11 (2d10) force damage, and is pulled in a straight line toward you, ending in an unoccupied space as close to you as possible. On a success, the creature takes half as much damage and is not pulled."
    },
    {
        name: "Gravity Bolt",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 1,
        description: "As an action, you collect gravitational magic around a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 20 (3d12) bludgeoning damage. The target gains no benefit from cover for this saving throw."
    },
    {
        name: "Great Oracular Bubble",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 5,
        description: "You cast great oracular bubble. The spell deals radiant damage instead of its normal damage type."
    },
    {
        name: "Great Serpent Hunt",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 16,
        description: "As an action while fighting a Great Serpent, you focus the light beam of this weapon into one great strike. Make an attack at the Serpent. On a hit, the attack is automatically considered a critical hit and the target must succeed on a Constitution saving throw or become stunned until the beginning of your next turn."
    },
    {
        name: "Ground Slam",
        compatibility: "Melee",
        affinity: "Strength",
        sp: 3,
        description: "You leap into the air, moving up to 10 feet horizontally and vertically before crashing down to earth and creating a 10-foot radius shockwave around you. You take no falling damage for the duration of the leap. Each creature in the area must make a Dexterity saving throw. On a failed save, the target takes bludgeoning damage equal to the amount of falling damage you would have taken after the fall. On a successful save, the target takes half as much damage."
    },
    {
        name: "Hoarah Loux's Earthshaker",
        compatibility: "Melee",
        affinity: "Strength",
        sp: 11,
        description: "You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point and shakes creatures and structures in contact with the ground in that area. The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature's concentration is broken. When you use this skill, you must concentrate on it as if you cast it a spell. At the end of each turn you spend concentrating on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked prone. Fissures open throughout the spell's area at the start of your next turn after you cast the spell for up to a minute. A total of 4 (1d6) such fissures open in locations chosen by the DM. Each is 6(1d10)x10 feet deep, 10 feet wide, and extends from one edge of the spell's area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure's edge as it opens. A fissure that opens beneath a structure causes it to automatically collapse. The tremor deals 50 bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the start of each of your turns until the effect ends. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure's height must make a Dexterity saving throw. On a failed save, the creature takes 18 (5d6) bludgeoning damage, is knocked prone, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. On a successful save, the creature takes half as much damage and doesn't fall prone or become buried."
    },
    {
        name: "Hoarfrost Stomp",
        compatibility: "Melee",
        affinity: "Intelligence",
        sp: 4,
        description: "As an action, you stomp on the ground, sending a chilling frost out from you in a 20-foot cone along the ground. Each creature in the area must make a Constitution saving throw. On a failed save, the target takes 8 (3d4) cold damage and becomes frostbitten for 1 minute. At the end of each of its turns, the target can make another Constitution saving throw, ending the frostbite on a success. On a successful save, the target takes half as much cold damage and is not frostbitten."
    },
    {
        name: "Holy Ground",
        compatibility: "Shields only",
        affinity: "Wisdom",
        sp: 9,
        description: "Raising your shield aloft, you create an Erdtree emblem in a 10-foot radius on the ground beneath you. The emblem persists for 1 minute or until you lose your concentration (as if you were concentrating on a spell). Any creature of your choice that ends its turn in the area regains hit points equal to 4 (1d6) + your Affinity modifier."
    },
    {
        name: "Horn Retaliation",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 2,
        description: "As a reaction to a creature within 5 feet of you making a melee attack against you, you thrust your shield towards them. Make a melee weapon attack with your Affinity modifier at the creature. On a hit, the target takes piercing damage equal to 5 (1d8) + your Affinity modifier. If this reduces the target to 0 hit points, the triggering attack is nullified."
    },
    {
        name: "I Command Thee, Kneel!",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 6,
        description: "As an action, you slam this weapon into the ground repeatedly, ripping the earth up around you in a 15-foot radius around you. Each creature in the area must make a Strength saving throw. On a failure, the creature takes 18 (5d6) bludgeoning damage and is knocked prone. On a success, the target takes half as much damage and is not knocked prone. For the next minute, the area is difficult terrain."
    },
    {
        name: "Ice Lightning Sword",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 0,
        description: "You cast honed bolt."
    },
    {
        name: "Ice Spear",
        compatibility: "Melee, Piercing",
        affinity: "Intelligence",
        sp: 2,
        description: "When you make an attack with this weapon, you may instead activate this skill to conjure a spear made of ice. Make a ranged weapon attack with your Affinity modifier. On a hit, the target take cold damage equal to 4 (1d6) + your Affinity modifier. The target must succeed on a Constitution saving throw or be frostbitten until the end of its next turn."
    },
    {
        name: "Immunity Parry",
        compatibility: "None (Unique Skill)",
        affinity: "Constitution",
        sp: 2,
        description: "As a reaction, you imbue your shield with a cloud of preservative spores. Raising it in your defense, you gain advantage on saving throws against the Rotting condition until the start of your next turn."
    },
    {
        name: "Impaling Thrust",
        compatibility: "Melee, Piercing",
        affinity: "Dexterity",
        sp: 1,
        description: "When you attack with this weapon, you may activate this skill as a free action to increase the reach of the attack by 5 feet."
    },
    {
        name: "Kick",
        compatibility: "Melee",
        affinity: "Strength",
        sp: 1,
        description: "As a bonus action, you may shove a creature within 5 feet of you. You may use your Affinity modifier in place of Strength for the shove."
    },
    {
        name: "Knowledge Above All",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 10,
        description: "Raising this scepter aloft, you draw every creature within 100 feet of you, including yourself, into the realm of the All-Knowing. This effect persists for 1 minute or until you lose your concentration (as if you were concentrating on a spell). For the duration, damage resistances, immunities, and vulnerabilities of creatures in the area are nullified."
    },
    {
        name: "Last Rites",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 4,
        description: "As a bonus action, you raise your blade aloft, invoking the Golden Order and blessing up to 6 creatures within 30 feet of you. Blessed creatures' weapon attacks deal an extra 3 (1d4) radiant damage on a hit. The effect persists for 1 minute or until you lose your concentration (as if you were concentrating on a spell)."
    },
    {
        name: "Lifesteal Fist",
        compatibility: "Caestus or Claw",
        affinity: "Charisma",
        sp: 3,
        description: "As an action, your fist wreathes itself in shadow and flame. Make a melee spell attack against a creature within your reach. On a hit, the target takes 11 (3d6) necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt."
    },
    {
        name: "Lightning Parry",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 2,
        description: "As a reaction to taking damage, you imbue your shield with lightning. Raising it in your defense, you gain resistance to lightning damage until the start of your next turn."
    },
    {
        name: "Lightning Ram",
        compatibility: "Melee",
        affinity: "Wisdom",
        sp: 5,
        description: "As a bonus action, you duck into a tight roll, charging yourself with lightning. For the duration, your speed increases by 15 feet and moving does not provoke opportunity attacks. When you move within 5 feet of a creature or an object that isn't being worn or carried, it takes 4 (1d6) lightning. A creature or object can take this damage only once during a turn."
    },
    {
        name: "Lightning Slash",
        compatibility: "Melee, Slashing",
        affinity: "Wisdom",
        sp: 2,
        description: "As an action, you raise your blade to the heavens, imbuing it with lightning for 1 minute. While the sword is blessed, it deals an extra 7 (2d6) lightning damage to any target it hits."
    },
    {
        name: "Lion's Claw",
        compatibility: "Melee, Non-Piercing, Non-Light",
        affinity: "Strength",
        sp: 1,
        description: "Before you make a melee attack with this weapon, you can activate the skill as a free action to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage."
    },
    {
        name: "Loretta's Slash",
        compatibility: "Halberd, Twinblade, Reaper, or Lance",
        affinity: "Intelligence",
        sp: 3,
        description: "As an action, you focus energy in this weapon's blade. It glows blue with glintstone magic as you are pulled into the air. You fly up to 15 feet to an unoccupied space without provoking attacks of opportunity. When you land, you can make an attack at a creature within range. On a hit, the target takes an additional 7 (1d12) force damage."
    },
    {
        name: "Magic Parry",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 2,
        description: "As a reaction to taking damage, you imbue your shield with glintstones. Raising it in your defense, you gain resistance to force damage until the start of your next turn."
    },
    {
        name: "Magma Guillotine",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 5,
        description: "As an action, you leap into the air, gripping this weapon with both hands and slamming it down into the ground. Magma bursts from the ground in a 10-foot radius around you, coating the ground before it hardens after a minute. The area is difficult terrain until the magma dissipates. Any creature that enters the area for the first time on a turn or ends its turn there takes 11 (3d6) fire damage. Until the end of your next turn, you are immune to damage from magma."
    },
    {
        name: "Magma Shower",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 4,
        description: "When you hit a creature within attack, you can activate this skill to scatter magma in a five foot square in the target's space, coating the ground before it hardens after a minute. The area is difficult terrain until the magma dissipates. Any creature that enters the area for the first time on a turn or ends its turn there takes 11 (3d6) fire damage. Until the end of your next turn, you are immune to damage from walking on magma."
    },
    {
        name: "Mighty Shot",
        compatibility: "Shortbows and Longbows",
        affinity: "Dexterity",
        sp: 1,
        description: "Until the end of your turn, before you make an attack with this weapon, you can choose to take a -5 penalty to the attack roll. If that attack hits, you add +10 to the attack's damage."
    },
    {
        name: "Miquella's Ring of Light",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 2,
        description: "When you make an attack with this weapon, you may instead swing this weapon into the air, conjuring a ring of light that hovers for a moment before shooting forward. Make a ranged spell attack at a creature within 30 feet of you. On a hit, the target takes 11 (2d10) radiant damage."
    },
    {
        name: "Mists of Slumber",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 8,
        description: "As an action, you create a cloud of silver mist in a 10-foot radius sphere centered on a point within 45 feet of you. Each creature in the area must succeed on a Wisdom saving throw or falls unconscious. It wakes up if it takes any damage or if another creature uses its action to shake the sleeper awake."
    },
    {
        name: "Moonlight Greatsword",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 3,
        description: "When you make an attack with this weapon, you can raise it to the sky and invoke the dark moon as free action. Instead of making a melee attack, you may instead create an arc of frozen moonlight that shoots out towards a creature you can see within 60 feet of you. Make a ranged spell attack at the target. On a hit, the target takes 22 (4d10) cold damage and must succeed on a Constitution saving throw or become frostbitten until the end of their next turn."
    },
    {
        name: "Nebula",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 5,
        description: "You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point within 150-feet. The effect persists for 1 minute or until you lose your concentration (as if you were concentrating on a spell). This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded. The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 7 (2d6) cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 7 (2d6) acid damage as milky, otherworldly tentacles rub against it."
    },
    {
        name: "Night-and-Flame Stance",
        compatibility: "None (Unique Skill)",
        affinity: "Special",
        sp: 13,
        description: "This weapon's Affinity modifier is equal to the lower of your Intelligence and Wisdom modifiers. As an action, you hold this weapon level and prepare to unleash the power of the moon and heretical flame in tandem. You must concentrate until your next turn as if you were concentrating on a spell. If your concentration was not broken, you can choose either Night or Flame from the options below. Night: You cast comet azur. At the beginning of each subsequent turn, if you are still concentrating on the spell you must spend an additional 13 SP to maintain concentration. Flame: You swing your sword, producing a wave of flame that explodes outwards from you. Each creature in a 60-foot cone originating from you must make a Dexterity saving throw. A target takes 78 (12d12) fire damage on a failed save, or half as much damage on a successful one."
    },
    {
        name: "Nimble Parry",
        compatibility: "None (Unique Skill)",
        affinity: "Dexterity",
        sp: 1,
        description: "As a reaction to another creature hitting you with a melee attack, you can add +2 to your AC, potentially causing the attack to miss you."
    },
    {
        name: "No Skill",
        compatibility: "Shield or Torch",
        affinity: "None",
        sp: 0,
        description: "No effect."
    },
    {
        name: "Oath of Vengeance",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 5,
        description: "As an action, you may renew the oath of vengeance that was made during the weapon's creation. For the next minute, all of your Ability Scores increase by 1, up to a maximum of 22."
    },
    {
        name: "Onyx Lord's Repulsion",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 6,
        description: "As an action, you can thrust this weapon into the ground, creating a gravitational disturbance in a 15-foot radius around you. Each creature of your choice in the area must make a Strength saving throw. On a failure, the creature takes 22 (4d10) force damage, and is pushed 20 feet away from you. On a success, the creature takes half as much damage and is not pushed."
    },
    {
        name: "Oracular Bubble",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 6,
        description: "You conjure a 5-foot diameter bubble of magic. The bubble drifts 15 feet towards a point you choose within range. The bubble moves an additional 15 feet at the beginning of each of your turns. When the spell ends, or when the bubble collides with a creature or object, the bubble pops in a 5-foot radius burst. Each creature in the area must succeed on a Dexterity saving throw or take 14 (4d6) force damage."
    },
    {
        name: "Ordovis's Vortex",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 5,
        description: "As an action, you gather the red-gold magic of the Crucible into this weapon, spinning it rapidly in your hand before slamming it in the ground. Each creature other creature within 15 feet of you must make a Dexterity saving throw. A creature takes 28 (8d6) radiant damage on a failed save, or half as much damage on a successful one."
    },
    {
        name: "Parry",
        compatibility: "Shield or Finesse",
        affinity: "Dexterity",
        sp: 1,
        description: "As a reaction to another creature hitting you with a melee attack, you can add +1 to your AC, potentially causing the attack to miss you."
    },
    {
        name: "Phantom Slash",
        compatibility: "Melee, Slashing, Reach",
        affinity: "Constitution",
        sp: 4,
        description: "As a bonus action, you summon a ghostly double of yourself in an unoccupied space you can see within 60 feet of you. When you take the Attack action on your turn, any attack you make with that action can originate from your space or the echo's space. You make this choice for each attack. The spirit vanishes at the end of your turn."
    },
    {
        name: "Piercing Fang",
        compatibility: "Melee, Piercing",
        affinity: "Dexterity",
        sp: 1,
        description: "When you make an attack with this weapon, you may activate this skill to gain advantage on the attack if the target is wearing medium or heavy armor, or a shield."
    },
    {
        name: "Poison Moth Flight",
        compatibility: "Dagger, Shortsword, Longsword, Scimitar, Katana, or Twinblade",
        affinity: "Charisma",
        sp: 3,
        description: "As an action, you cause thick, black poison to coat the blade of this weapon. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 11 (2d10) poison damage and become poisoned for 1 minute."
    },
    {
        name: "Poisonous Mist",
        compatibility: "Melee, Non-Caestus, Non-Claw, Non-Whip",
        affinity: "Charisma",
        sp: 2,
        description: "You cast poisonous mist."
    },
    {
        name: "Prayerful Strike",
        compatibility: "Battleaxe, Warhammer, Greataxe, Maul, or Colossal Weapon",
        affinity: "Wisdom",
        sp: 3,
        description: "When you hit a creature with this weapon, you may activate this skill as a free action to regain hit points equal to half of the damage inflicted. You can only activate this skill once per turn."
    },
    {
        name: "Prelate's Charge",
        compatibility: "Melee, Heavy",
        affinity: "Charisma",
        sp: 2,
        description: "As a bonus action, you slam your weapon into the ground, rushing forward in a burst of speed until the end of your turn. Your speed increases by 20 feet and moving does not provoke opportunity attacks. When you move within 5 feet of a creature or an object that isn't being worn or carried, it takes 4 (1d6) fire damage from your trail of heat. A creature or object can take this damage only once during a turn."
    },
    {
        name: "Quickstep",
        compatibility: "Melee",
        affinity: "Dexterity",
        sp: 1,
        description: "As a bonus action, you move up to 5 feet in any direction without provoking attacks of opportunity. Your movement speed is reduced to 0 until the end of your turn."
    },
    {
        name: "Radahn's Rain",
        compatibility: "None (Unique Skill)",
        affinity: "Dexterity",
        sp: 7,
        description: "You fire an arrow into the air, magically duplicating it as dozens of gravity-infused arrows rain down in a 20-foot radius, 60-foot high cylinder centered on a point you can see within range. Each creature in the area must make a Dexterity saving throw. A creature takes 21 (6d6) damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component."
    },
    {
        name: "Rain of Arrows",
        compatibility: "Ranged",
        affinity: "Dexterity",
        sp: 5,
        description: "You fire an arrow into the air, magically duplicating it as dozens of arrows rain down in a 10-foot radius, 60-foot high cylinder centered on a point you can see within range. Each creature in the area must make a Dexterity saving throw. A creature takes 14 (3d8) damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component."
    },
    {
        name: "Rallying Standard",
        compatibility: "None (Unique Skill)",
        affinity: "Charisma",
        sp: 6,
        description: "As an action, you hold the war banner aloft and let the banner fly. You and up to six creatures you can see within 30 feet of you are emboldened for 1 minute. Each emboldened creature is immune to being frightened and gains temporary hit points equal to your Affinity modifier at the start of each of its turns. A creature must be within 30 feet of you to gain these benefits. This effect ends if you aren't wielding this weapon or if you are incapacitated."
    },
    {
        name: "Raptor of the Mists",
        compatibility: "Melee",
        affinity: "Dexterity",
        sp: 4,
        description: "When an attacker that you can see hits you with an attack, you can use your reaction to vanish into a mist, halving the attack's damage against you."
    },
    {
        name: "Regal Beastclaw",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 2,
        description: "You cast beast claw."
    },
    {
        name: "Regal Roar",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 8,
        description: "As an action, you unleash a roar fit for a true king. Each creature of your that is within 120 feet of you and can hear you must succeed on a Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
    },
    {
        name: "Repeating Thrust",
        compatibility: "Melee, Piercing, Non-Colossal",
        affinity: "Dexterity",
        sp: 3,
        description: "As a bonus action, you make an attack with this weapon at a creature within range."
    },
    {
        name: "Rosus's Summons",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 7,
        description: "You cast tibia's summons."
    },
    {
        name: "Royal Knight's Resolve",
        compatibility: "Melee",
        affinity: "Constitution",
        sp: 3,
        description: "As a bonus action, you focus your resolve. Until your next turn, you gain advantage on all the attack rolls you make during this turn."
    },
    {
        name: "Ruinous Ghostflame",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 4,
        description: "As a bonus action, you invoke the Helphen, coating this blade in ghostflame for a number of rounds equal to your Affinity modifier (minimum 1 round). For the duration, attacks with this weapon deal an additional 7 (2d6) cold damage on a hit. Also, a creature damaged by this weapon must succeed on a Constitution saving throw or become frostbitten until the beginning of your next turn."
    },
    {
        name: "Sacred Blade",
        compatibility: "Melee",
        affinity: "Wisdom",
        sp: 2,
        description: "As an action, you charge this blade with golden light that shoots out as a ranged spell attack at a creature within 30 feet of you. Make a ranged spell attack against the target. On a hit, the target takes 14 (4d6) radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then."
    },
    {
        name: "Sacred Order",
        compatibility: "Melee",
        affinity: "Wisdom",
        sp: 2,
        description: "As a bonus action, you raise your blade aloft, invoking the Golden Order. Your weapon attacks deal an extra 3 (1d4) radiant damage on a hit. The effect persists for 1 minute or until you lose your concentration (as if you were concentrating on a spell)."
    },
    {
        name: "Sacred Phalanx",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 5,
        description: "As an action, you summon dozens of spears made from holy light that burst from the ground in a 20-foot cone in front of you. The area is difficult terrain until the spears disappear at the end of your next turn. Each creature in the area must make a Dexterity saving throw. On a failed save, the target takes 11 (3d6) piercing damage and is restrained until the end of your next turn. On a successful save, the target takes half damage and is not restrained."
    },
    {
        name: "Sacred Ring of Light",
        compatibility: "Halberd, Reaper, Spear, or Pike",
        affinity: "Wisdom",
        sp: 2,
        description: "As an action, you swing this weapon into the air, conjuring a ring of light that hovers for a moment before shooting forward. Make a ranged spell attack at a creature within 30 feet of you. On a hit, the target takes 22 (4d10) radiant damage."
    },
    {
        name: "Sea of Magma",
        compatibility: "None (Unique Skill)",
        affinity: "Charisma",
        sp: 4,
        description: "When you make an attack with this weapon, you may activate this skill as a free action to create a pool of magma in a five-foot square within this weapon's reach. The magma coats the ground before it hardens after a minute. The area is difficult terrain until the magma dissipates. Any creature that enters the area for the first time on a turn or ends its turn there takes 11 (3d6) fire damage. Until the end of your next turn, you are immune to damage from magma."
    },
    {
        name: "Seppuku",
        compatibility: "Melee, Piercing",
        affinity: "Constitution",
        sp: 5,
        description: "You turn your blade on yourself, impaling yourself through the gut and inflicting 6 (1d10) piercing damage on yourself. This damage cannot be reduced in any way. When you draw the blade out, it inflicts Bleed 2 on any creature it hits in the next minute. If this weapon already inflicts Bleed, it increases its Bleed modifier up to a maximum of Bleed 4."
    },
    {
        name: "Shared Order",
        compatibility: "Melee",
        affinity: "Wisdom",
        sp: 5,
        description: "Your raise your blade aloft, invoking the Golden Order, blessing this weapon and six others you can see within 30 feet. Weapons blessed this way deal 7 (2d6) radiant damage to undead for the duration. The effect persists for 1 minute or until you lose your concentration (as if you were concentrating on a spell)."
    },
    {
        name: "Shield Bash",
        compatibility: "Shield",
        affinity: "Strength",
        sp: 1,
        description: "If you take the Attack action on your turn, you can use a bonus action to use this skill try to shove a creature within 5 feet of you with your shield."
    },
    {
        name: "Shield Crash",
        compatibility: "Shield",
        affinity: "Strength",
        sp: 1,
        description: "As a bonus action, you ready your shield into a defensive stance. Until the end of your turn, any creature that makes an opportunity attack against you has disadvantage on the attack roll. If you move at least 20 feet straight toward a target and then hit it with an attack on the same turn, the target must succeed on a Strength saving throw or be pushed up to 10 feet away from you."
    },
    {
        name: "Shriek of Milos",
        compatibility: "None (Unique Skill)",
        affinity: "Charisma",
        sp: 4,
        description: "As an action, you let loose a cursed scream from deep within. Each creature within 30 feet who can hear this scream must make a Charisma saving throw. On a failure, the target's damage resistances are nullified for 1 minute. On a successful save, the target suffers no effect."
    },
    {
        name: "Siluria's Woe",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 5,
        description: "As an action, you gather the red-gold magic of the Crucible around the tip of this weapon. Thrusting it forward, a 5-foot wide projectile shoots out from you in a 100-foot line in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 28 (8d6) radiant damage on a failed save, or half as much damage on a successful one."
    },
    {
        name: "Sky Shot",
        compatibility: "Shortbow or Longbow",
        affinity: "Dexterity",
        sp: 2,
        description: "When you make a ranged attack with this weapon, you may activate this skill to ignore the penalty imposed by half or three-quarters cover. If the target has full cover, but the area above you and the target is open, attack can also ignore the target's full cover as well. The attack is still made at disadvantage if you cannot see the target."
    },
    {
        name: "Sorcery of the Crozier",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 3,
        description: "As an action, you channel magic into the glintstone within this staff, creating a number of magical darts equal to your Affinity modifier. Each dart hits a creature of your choice that you can see within 120 feet of you. A dart deals 3 (1d4)+1 force damage to its target. The darts all strike simultaneously and you can direct them to hit one creature or several."
    },
    {
        name: "Soul Stifler",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 8,
        description: "As an action, you raise this weapon into the air, invoking the ancestral spirits. The ancestor spirit's cry echoes, forming a hazy miasma in a 20-foot radius around you. Each creature of your choice in the area must make a Wisdom saving throw. On a failure, the target's AC is reduced by an amount equal to your Affinity bonus. On a successful save, the target's AC is not reduced. You may concentrate on this effect as if it were a spell for up to 1 minute. While concentrating, the miasma moves with you."
    },
    {
        name: "Spearcall Ritual",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 5,
        description: "As an action, you conjure dozens of spears that descend in a 20-foot radius, 60-foot high cylinder centered on a point you can see within range. Each creature in the area must make a Dexterity saving throw. A creature takes 20 (3d12) necrotic damage on a failed save, or half as much damage on a successful one."
    },
    {
        name: "Spectral Lance",
        compatibility: "Spear, Lance, Halberd, or Pike",
        affinity: "Charisma",
        sp: 5,
        description: "When you make an attack with this weapon, you may instead conjure a spectral lance that springs forth from your weapon. Make a ranged weapon attack with your Affinity modifier at a creature within 120 feet of you. On a hit, the target takes piercing damage equal to 7 (1d12) + your Affinity modifier."
    },
    {
        name: "Spinning Chain",
        compatibility: "Flail",
        affinity: "Strength",
        sp: 2,
        description: "As a bonus action, you begin spinning the chain on your flail until the end of your next turn, preparing to strike at a moment's notice. When a creature moves within 5 feet of you or makes a melee attack against you, you may use your reaction to make an attack against the target with this weapon."
    },
    {
        name: "Spinning Slash",
        compatibility: "Melee, Slashing",
        affinity: "Dexterity",
        sp: 4,
        description: "You spin your blade in a circle around you, attacking a number of separate targets equal to at most your proficiency modifier. These attacks are made at disadvantage."
    },
    {
        name: "Spinning Strikes",
        compatibility: "Spear, Halberd, Reaper",
        affinity: "Constitution",
        sp: 3,
        description: "As an action, you begin spinning your weapon in a wide arc around you. Until the beginning of your next turn, you can make a number of opportunity attacks equal to your Affinity modifier without using a reaction. A particular creature can only be attacked this way once per turn."
    },
    {
        name: "Spinning Weapon",
        compatibility: "Melee or Glintstone Staff",
        affinity: "Intelligence",
        sp: 2,
        description: "As an action, you hold your hands in front of you, levitating your weapon and spinning it around you until the beginning of your next turn. When a creature moves within 5 feet of you or starts their turn within 5 feet of you, it must succeed on a Dexterity saving throw. A target takes 11 (3d6) slashing damage on a failed save, and half damage on a successful one."
    },
    {
        name: "Spinning Wheel",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 3,
        description: "As a reaction to a creature making a saving throw against Bleed, you can spin the jagged teeth of this weapon into their flesh, imposing disadvantage on the save."
    },
    {
        name: "Square Off",
        compatibility: "Shortsword or Longsword",
        affinity: "Constitution",
        sp: 1,
        description: "You enter a prepared stance until the beginning of your next turn. While prepared, you may make an attack of opportunity against any creature who enters your reach."
    },
    {
        name: "Stamp (Sweep)",
        compatibility: "Melee",
        affinity: "Strength",
        sp: 1,
        description: "As a bonus action, you stomp on the ground, kicking up dust and bracing yourself. Until the end of your next turn, you have advantage on ability checks and saving throws made to avoid being knocked prone or shoved. As an action while you are braced, you can make an attack up to 2 creatures within 5 feet of you at disadvantage."
    },
    {
        name: "Stamp (Upward Cut)",
        compatibility: "Melee",
        affinity: "Strength",
        sp: 1,
        description: "As a bonus action, you stomp on the ground, kicking up dust and bracing yourself. Until the end of your next turn, you have advantage on ability checks and saving throws made to avoid being knocked prone or shoved. As an action while you are braced, you can make an attack with this weapon at a creature within 5 feet of you at advantage."
    },
    {
        name: "Starcaller Cry",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 6,
        description: "As an action, you invoke the power of the Starscourge, gathering gravitational magic to draw others into your reach. Each creature of your choice in a 30-foot radius must succeed on a Strength saving throw or be pulled toward you in a straight line, ending in the nearest unoccupied space to you. If you activate this skill before the end of your next turn, you slam your sword into the ground, creating a gravitational explosion. Each other creature within 10 feet of you must succeed on a Strength saving throw or take 27 (6d8) force damage and be pushed 15 feet away from you."
    },
    {
        name: "Storm Assault",
        compatibility: "Melee, Piercing, Heavy",
        affinity: "Constitution",
        sp: 4,
        description: "As an action, you kick up a storm around you that carries you into the air. You may fly up to 15 feet without provoking attacks of opportunity before landing in an unoccupied space. Afterwards, you may make an attack at advantage at a creature within your reach. On a hit, the target takes an additional 5 (1d8) slashing damage and the target must succeed on a Strength saving throw or be knocked prone."
    },
    {
        name: "Storm Blade",
        compatibility: "Melee, Slashing",
        affinity: "Constitution",
        sp: 1,
        description: "When you make an attack with this weapon, you may instead activate this skill to create a storm gale and hurl it at a creature within 30 feet of you. Make a ranged weapon attack with your Affinity modifier. On a hit, the target take bludgeoning damage equal to 5 (1d8) + your Affinity modifier."
    },
    {
        name: "Storm Kick",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 4,
        description: "As an action, you kick up a storm around you that carries you into the air. You may fly up to 15 feet without provoking attacks of opportunity before landing in an unoccupied space. Afterwards, each other creature within 10 feet of you must make a Dexterity saving throw. On a failed save, the creature takes 26 (4d12) lightning damage and is pushed 10 feet away from you. On a successful save, the target takes half damage and is not pushed."
    },
    {
        name: "Storm Stomp",
        compatibility: "Melee",
        affinity: "Strength",
        sp: 1,
        description: "As a bonus action, you stomp the ground hard, kicking up a fierce storm. Each creature within 5 feet of you must make a Strength saving throw. On a failed save, a creature takes 5 (1d10) bludgeoning damage and is pushed 5 feet away from you."
    },
    {
        name: "Storm Wall",
        compatibility: "Shields only",
        affinity: "Strength",
        sp: 1,
        description: "As a reaction to being targeted by a ranged weapon attack, you can swing this shield in front of you to produce a sudden gale, imposing disadvantage on the attack roll."
    },
    {
        name: "Stormcaller",
        compatibility: "Melee, Slashing",
        affinity: "Constitution",
        sp: 3,
        description: "As an action, you spin your weapon to create a localized storm around you. Each creature within 10 feet of you must make a Dexterity saving throw. A creature takes 14 (3d8) slashing damage on a failed save, or half as much damage on a successful one."
    },
    {
        name: "Surge of Faith",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 5,
        description: "As an action, you place this weapon on the ground before raising it abruptly into the air. Fire erupts from the vessel, ejecting fireballs that rain down from the sky. Choose a number of creatures up to your Affinity modifier that you can see within 30 feet of you. Each target must make a Dexterity saving throw. On a failed save, the creature takes 14 (4d6) fire damage. On a successful save, the target takes half as much damage."
    },
    {
        name: "Sword Dance",
        compatibility: "Melee, Slashing",
        affinity: "Dexterity",
        sp: 2,
        description: "As an action, you close the distance to a target with a rapid series of spinning forward slashes. You can move up to 15 feet without provoking opportunity attacks and make two melee weapon attacks against a creature."
    },
    {
        name: "Taker's Flames",
        compatibility: "None (Unique Skill)",
        affinity: "Charisma",
        sp: 9,
        description: "As an action, you raise this blade above your head and bring it down, creating a fiery blast in a 5-foot-wide, 60-foot long line. Each creature in the line must make a Dexterity saving throw. A target takes 27 (6d8) fire damage on a failed save and you regain hit points equal to half the total damage inflicted. A target takes half as much damage on a successful save and you do not regain hit points from the damage taken."
    },
    {
        name: "The Queen's Black Flame",
        compatibility: "None (Unique Skill)",
        affinity: "Charisma",
        sp: 4,
        description: "As a bonus action, you set this weapon ablaze with god-slaying black flame. Until the end of your turn, this weapon inflicts an additional 5 (1d8) fire damage. If the target is a Celestial, the weapon inflicts an additional 14 (3d8) fire damage instead."
    },
    {
        name: "Thops's Barrier",
        compatibility: "Shield",
        affinity: "Intelligence",
        sp: 1,
        description: "As a reaction when you are targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, you conjure a magical forcefield to deflect the magic, gaining a +5 bonus to AC against the triggering attack and advantage on the saving throw."
    },
    {
        name: "Thorn Retaliation",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 3,
        description: "As a reaction to a creature within 5 feet of you making a melee attack against you, you thrust your shield towards them. Make a melee weapon attack with your Affinity modifier at the creature. On a hit, the target takes piercing damage equal to 3 (1d4) + your Affinity modifier and is afflicted by Bleed 1. If this reduces the target to 0 hit points, the triggering attack is nullified."
    },
    {
        name: "Through and Through",
        compatibility: "Greatbow",
        affinity: "Dexterity",
        sp: 4,
        description: "You draw the string of this weapon as far as it will go, firing an arrow in a straight line of length equal to the bow's first range increment. Make an attack roll against the creature in that line nearest to you. On a hit, the target takes damage as normal and the arrow punctures through them and continues in the line, striking each target in the line. Each target hit reduces the attack roll of the arrow by 1."
    },
    {
        name: "Thunderbolt",
        compatibility: "Melee",
        affinity: "Dexterity",
        sp: 3,
        description: "As an action, you raise your weapon to call down a bolt of lightning on a creature you can see within 60 feet. The target must make a Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much on a successful one."
    },
    {
        name: "Thundercloud Form",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 10,
        description: "You transform into a thundercloud for the duration, along with everything it’s wearing and carrying. You return to your normal form after a minute, if you drop to 0 hit points, or if you use a bonus action to untransform. While in this form, the your only movement is a flying speed of 60 feet. You can enter and occupy the space of another creature. You have resistance to non-magical damage, and you have advantage on Strength, Dexterity, and Constitution saving throws. You can pass through small holes, narrow openings, and even mere cracks, though you treat liquids as though they were solid surfaces. You can’t fall and remains hovering in the air even when stunned or otherwise incapacitated. While in the form of a thundercloud, you can’t talk or manipulate objects, and any objects you were carrying or holding can’t be dropped, used, or otherwise interacted with. You can’t attack or cast spells. When you move into a creature’s space for the first time each turn, the target takes 7 (2d6) lightning damage."
    },
    {
        name: "Thunderstorm",
        compatibility: "None (Unique Skill)",
        affinity: "Constitution",
        sp: 4,
        description: "As a bonus action, you slam your foot into ground, conjuring a lightning storm in a 5-foot radius around you. Each creature in the area must succeed on a Dexterity saving throw against your Affinity DC. On a failed save, the creature takes 7 (2d6) lightning damage and is pushed 5 feet away from you. Until the end of your turn, this weapon inflicts an additional 5 (1d8) lightning damage on a hit. A creature can take this damage only once during a turn."
    },
    {
        name: "Tongues of Fire",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 2,
        description: "As an action, you hold this shield in front of you as it ejects fire in a 15-foot cone. Each creature in that area must make a Dexterity saving throw, taking 11 (3d6) fire damage on a failed save, or half as much damage on a successful one."
    },
    {
        name: "Transient Moonlight",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 2,
        description: "When you make an attack with this weapon, you may briefly sheathe it before striking out with terrifying speed. Instead of making a melee attack, you may instead create an arc of moonlight that shoots out towards a creature you can see within 60 feet of you. Make a ranged spell attack at the target. On a hit, the target takes 11 (3d6) force damage."
    },
    {
        name: "Troll's Roar",
        compatibility: "Melee, Heavy",
        affinity: "Strength",
        sp: 3,
        description: "A blast of thunderous energy explodes from you, forcing creatures away. Each creature within 15 feet of you must succeed on a Constitution saving throw or be pushed 15 feet away from you. On a success, the creature is not pushed."
    },
    {
        name: "Unblockable Blade",
        compatibility: "None (Unique Skill)",
        affinity: "Dexterity",
        sp: 2,
        description: "When you make an attack with this weapon, you can activate this skill as a free action to increase its reach by 15 feet. You have advantage on the attack if the target is wearing medium or heavy armor, or a shield."
    },
    {
        name: "Unsheathe",
        compatibility: "Katana",
        affinity: "Dexterity",
        sp: 0,
        description: "You have advantage on attacks you make using your reaction."
    },
    {
        name: "Vacuum Slice",
        compatibility: "Melee, Slashing",
        affinity: "Constitution",
        sp: 4,
        description: "You collect wind with your blade and unleash it in a 30-foot line from yourself. Each creature caught in the line must make a Dexterity saving throw. A target takes 14 (4d6) slashing damage on a failed save, or half as much damage on a successful one."
    },
    {
        name: "Viper Bite",
        compatibility: "None (Unique Skill)",
        affinity: "Constitution",
        sp: 1,
        description: "When you make an attack, you may activate this skill as a free action to animate the viper coiled around this shield instead. Make a melee weapon attack at a creature within 10 feet. On a hit, the target takes 4 (1d6) piercing damage and must succeed on a Constitution saving throw or take 11 (3d6) poison damage."
    },
    {
        name: "Vow of the Indomitable",
        compatibility: "Shield",
        affinity: "Wisdom",
        sp: 4,
        description: "As an action, you raise your shield to the sky, invoking the warriors of the ancient Erdtree. The next time you would take damage before the beginning of your next turn, the damage is negated entirely."
    },
    {
        name: "War Cry",
        compatibility: "Melee",
        affinity: "Strength",
        sp: 1,
        description: "As a bonus action, you give a fierce battle cry. Until the end of your turn, you have a +1 bonus to attack and damage rolls with melee weapons."
    },
    {
        name: "Waterfowl Dance",
        compatibility: "None (Unique Skill)",
        affinity: "Dexterity",
        sp: 9,
        description: "You leap into the air, hovering for a moment and then launching yourself in a flurry of strikes. Choose up to five creatures you can see within 20 feet of you. Make a melee weapon attack against each target. On a hit, a target takes 33 (6d10) slashing damage. You can then move to an unoccupied space you can see within 5 feet of one of the targets you hit or missed without provoking attacks of opportunity."
    },
    {
        name: "Wave of Destruction",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 8,
        description: "You collect gravitational energy into this slab of a weapon, bringing it down and unleashing a gravitational wave in a 60 feet long, 20 feet high, and 1 foot thick line. Each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 27 (6d8) force damage, or half as much damage on a successful save. A wall of stone is erected as gravity warps through the area, pulling up stone and rocks into the same area. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice). The wall is poorly constructed and fragile, with AC 15 and 50 hit points. If the wall is reduced to 0 hit points, it collapses. It also collapses when this skill is next used."
    },
    {
        name: "Waves of Darkness",
        compatibility: "Greataxe, Warhammer, or Colossal Weapon",
        affinity: "Intelligence",
        sp: 8,
        description: "As an action, you call upon the void between the stars, the domain of the malformed star. Choose a point you can see within 60 feet of you. A wave of gravity expands in a sudden pulse in a 5-foot radius around that point. Each creature in the area must make a Strength saving throw. On a failed save, the creature takes 14 (4d6) bludgeoning damage and is pushed to the nearest unoccupied space at the edge of the area. At the beginning of your next turn, a 10-foot radius pulse creates a similar effect, followed by a final 15-foot radius pulse at the beginning of your next turn after."
    },
    {
        name: "Waves of Gold",
        compatibility: "None (Unique Skill)",
        affinity: "Wisdom",
        sp: 6,
        description: "As an action, you may call upon this weapon's bygone golden glory, firing a golden wave that fans out forwards in a 120-foot cone. Each creature of your choice in the area must make a Constitution saving throw. On a failed save, a creature takes 39 (6d12) radiant damage, or half as much damage on a successful save."
    },
    {
        name: "White Shadow's Lure",
        compatibility: "Melee",
        affinity: "Charisma",
        sp: 0,
        description: "As an action, you create an illusory, ghostly humanoid form in an unoccupied space you can see within range. The figure vanishes after 1 minute. The humanoid form can move and gesture within its space at your direction. The illusion has AC 10 and 1 hit point."
    },
    {
        name: "Wild Strikes",
        compatibility: "Melee, Axes, Hammers, Curved Swords, Greatswords",
        affinity: "Strength",
        sp: 1,
        description: "When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls during this turn, but attack rolls against you have advantage until your next turn."
    },
    {
        name: "Wolf's Assault",
        compatibility: "None (Unique Skill)",
        affinity: "Strength",
        sp: 7,
        description: "As an action, you somersault through the air, moving up to 10 feet without provoking attacks of opportunity. When you land, you drive this weapon into the ground and create a 10-foot radius blast of cold magic. Each creature in the area other than you must make a Constitution saving throw. On a failed save, a creature takes 3d6 cold damage and is frostbitten for a minute. On a successful save, the creature takes half as much damage and is not frostbitten. While frostbitten in this way, the target can make a Constitution saving throw at the end of each of its turns. On a success, the target is no longer frostbitten."
    },
    {
        name: "Zamor Ice Storm",
        compatibility: "None (Unique Skill)",
        affinity: "Intelligence",
        sp: 10,
        description: "You cast Zamor ice storm."
    },
];
        