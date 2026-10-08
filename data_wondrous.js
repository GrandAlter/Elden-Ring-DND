const wondrousItems = [
    {
        name: "Acid Spraymist",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        description: "<i>Forbidden art of depraved perfumers. Craftable with a perfume bottle. Uses to release an acidic mist from user's mouth, damaging armaments and temporarily lowering attack power. Perfumed powder is held in the mouth to dissolve before being expelled. It was once a restorative art, or so it is said.</i>",
        recipe: "1 Perfume Bottle, 1 Altus Bloom, 1 Miranda Powder, 4 Formic Rock\nFound in: Perfumer's Cookbook [4]",
        effect: "You may take this perfume into your mouth, spewing out an acidic spray in a 10-foot cone in front of you. Each creature in the area must make a DC 15 Dexterity saving throw. On a failed save, any metallic equipment the target is wearing immediately rusts. Metal armor or metal shields being worn or carried take a permanent and cumulative -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed and non-magical metal weapons that creature carries take a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed.\n\nOn a successful save, the creature's equipment is not affected."
    },
    {
        name: "Alberich's Robes",
        type: "Light Armor (Padded)",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Mad Tongue Alberich's robes, a sign of a heretical practitioner. Set with red glintstones said to be formed by the blood of sacrifices. Strengthens thorn sorcery. Alberich was an aloof yet disturbed heretical sorcerer said to have been driven mad by jeering tongues during his service to the Roundtable Hold long ago.</i>",
        effect: "While wearing these robes, you cast Blood sorceries as if they were one level higher than the spell slot you expended."
    },
    {
        name: "Ancestral Infant's Head",
        type: "Tool",
        rarity: "Very Rare",
        craftable: false,
        description: "<i>Skull of a very young ancestral spirit. Just think how many sproutings It might bear. Used to spray spirit vapor inflicting magic damage. The vapor becomes a temporary geyser which deals continuous damage to everything it touches until it disappears.</i>",
        effect: "You sing a lullaby to the ancestral infant, provoking it to spill spirit flame onto the ground around you. The area of the flame consists of up to five 5-foot squares which you can arrange as you wish. Each square must have at least one face adjacent to the face of another square. The flame persists on the ground until the end of your next turn.\n\nWhen the flame appears, each creature standing in its area must make a Dexterity saving throw or take 14 (4d6) fire damage. A creature that enters the area or ends its turn there must make another Dexterity saving throw.\n\nThe bell regains 1d3 expended charges daily at dawn."
    },
    {
        name: "Ancestral Spirit's Horn",
        type: "Talisman",
        rarity: "Legendary",
        craftable: false,
        description: "<i>Item cut from the horns of the Regal Ancestor Spirit. Restore FP upon defeating enemies. A number of new growths bud from the antler-like horns of the fallen king, each glowing with light. Thus does new life grow from death, and from death, one obtains power.</i>",
        effect: "While wearing this talisman, when a creature within 20 feet of you dies, you regain SP equal to your proficiency bonus."
    },
    {
        name: "Arrow's Reach Talisman",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A talisman depicting three arrows. Carried by hunters of beasts. Increases the effective range of bows.</i>",
        effect: "While wearing this talisman, attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls."
    },
    {
        name: "Arrow's Sting Talisman",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A talisman depicting three iron arrows. Carried by soldiers long ago. Raises attack power of arrows and bolts.</i>",
        effect: "While attuned to this talisman, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons."
    },
    {
        name: "Arsenal Charm",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>An iron charm that resembles a mass of weapons. Boosts maximum equipment load. This talisman was derived from an unusual greatsword, once wielded by a hero hungry for vengeance.</i>",
        effect: "While wearing this talisman, you count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
    },
    {
        name: "Assassin's Cerulean Dagger",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>An assassin's dagger, misshapen and stained in cerulean. Critical hits restore FP. This charm is modelled after the darkly gleaming blades used in the Night of Black Knives. Those which gave the demigods their first taste of death.</i>",
        effect: "While wearing this talisman, when you attack a creature and roll a 20 on the attack roll you regain SP equal to twice your Proficiency Bonus."
    },
    {
        name: "Assassin's Crimson Dagger",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>An assassin's dagger, misshapen and stained in crimson. Critical hits restore HP. This charm is modelled after the darkly gleaming blades used in the night of Black Knives. Those which gave the demigods their first taste of death.</i>",
        effect: "While wearing this talisman, when you attack a creature and roll a 20 on the attack roll, you regain hit points equal to twice your Proficiency Bonus."
    },
    {
        name: "Axe Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A talisman depicting an axe and a warrior. The Lord who led the Long March bore an axe, and his loyal warriors honored him by wielding axes of their own, making them very effective at dealing decisive blows.</i>",
        effect: "Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll if you are wearing this talisman. If the attack hits, you add +10 to the attack's damage."
    },
    {
        name: "Azur's Glintstone Crown",
        type: "Light Armor (Padded)",
        rarity: "Very Rare",
        craftable: false,
        description: "<i>Crown of Azur, primeval current sorcerer, set with a prominent blue-green glintstone. This crown replaced Azur's brain and skull altogether, and now, removed from his body, it is all but dead. What power remains within raises the potency of Azur's primeval current sorceries at the cost of additional FP consumption.</i>",
        effect: "While wearing this glintstone crown, you may cast Cosmic sorceries you have access to without preparing or knowing them (if you don't prepare spells). You must still have acquired the spell through some means. When you cast a spell of 1st-level or higher, you must expend SP as if it were one level higher."
    },
    {
        name: "Baldachin's Blessing",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Favor bestowed by a deathbed companion. Protection of a hidden temple in the guise of a bedchamber. Uses FP to temporarily boost poise. The favor allows one to forget any aches and pains. In Death, there is only peace, for in Death, there can be no sensation.</i>",
        effect: "While you bear this blessing, your maximum hit points are reduced by an amount equal to your character level. As an action, you can activate this blessing, you have advantage on saving throws against being pushed, knocked prone, or frightened for 1 minute. Doing so consumes the blessing."
    },
    {
        name: "Bewitching Branch",
        type: "Consumable",
        rarity: "Very Rare",
        craftable: true,
        description: "<i>Tree branch blessed with an incantation of unalloyed gold. Craftable item. Pierce a foe to turn them into a temporary ally. The Empyrean Miquella is loved by many people. Indeed, he has learned very well how to compel such affection.</i>",
        recipe: "1 Sacramental Bud, 1 Miquella's Lily\nFound in: Fevor's Cookbook [3]",
        effect: "As an action, you can expend this branch to pierce a creature within 5 feet of you. Make a melee weapon attack (using Strength or Dexterity). On a hit, the target takes 1 piercing damage and must succeed on a DC 15 Wisdom saving throw or become charmed by you for 1 minute. While charmed in this way, the creature views you and your allies as friendly and will actively fight your enemies to the best of its ability. The creature repeats the saving throw each time it takes damage from you or your allies, ending the effect on a success."
    },
    {
        name: "Black Knife Armor",
        type: "Medium Armor (Scale Mail)",
        rarity: "Rare",
        craftable: false,
        description: "<i>Scale armor used by the Black Knife Assassins, forged to make no sound. Traces of power yet remain in its concealing veil, which muffles the sound of footsteps. The assassins that carried out the deeds of the Night of the Black Knives were all women, and rumored to be Numen who had close ties with Marika herself.</i>",
        effect: "You gain a +1 bonus to AC while you wear this armor. You are considered proficient with this armor even if you lack proficiency with medium armor. Wearing this armor does not impose disadvantage on Stealth checks like normal scale mail."
    },
    {
        name: "Black-Key Bolt",
        type: "Ammunition",
        rarity: "Rare",
        craftable: false,
        description: "<i>Bolts used in Crepus' Black-Key Crossbow, an assassin's tool of exquisite craftsmanship. The intricate spiral tip bores deep, injecting scarlet rot far into the flesh of its target.</i>",
        effect: "When a target is hit by a ranged weapon attack using this piece of magical ammunition, the target must succeed on a DC 13 Constitution saving throw or be afflicted with scarlet rot until the end of its next turn. Once it hits a target, the ammunition is no longer magical."
    },
    {
        name: "Blasphemous Claw",
        type: "Tool",
        rarity: "Legendary",
        craftable: false,
        description: "<i>A slab of rock engraved with traces of the Rune of Death. Can deflect the power of the Black Blade. On the night of the dire plot, Ranni rewarded Praetor Rykard with these traces. Should the coming trespass one day transpire, they would serve as a last-resort foil, allowing Rykard to challenge Maliketh the Black Blade, the black beast of Destined Death.</i>",
        effect: "As a reaction to being attacked with the Black Blade, you can interpose this claw to add a +5 bonus to your AC against the triggering attack."
    },
    {
        name: "Blessed Dew Talisman",
        type: "Talisman",
        rarity: "Very Rare",
        craftable: false,
        description: "<i>Talisman depicting a drop of the Erdtree's sap, a blessed boon. It was once thought that the blessed sap of the Erdtree would drip from its boughs forever-but that age of plenty swiftly came to a close, and with time, the Erdtree became more an object of faith.</i>",
        effect: "While wearing this talisman, you regain 4 (1d6) hit points every 10 minutes, provided that you have at least 1 hit point. If you lose a body part, the talisman causes the missing part to regrow and return to full functionality after 4 (1d6) + 1 days if you have at least 1 hit point the whole time."
    },
    {
        name: "Bloodboil Aromatic",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        description: "<i>Forbidden art of depraved perfumers. Craftable with a perfume bottle. Uses to enter a temporary state of fervor, raising maximum attack power and stamina while also increasing damage received. \"Even upon the battlefield, do you fear being wounded? Take a good look. Your limbs are frozen stiff.\"</i>",
        recipe: "1 Perfume Bottle, 2 Altus Bloom, 1 Cave Moss, 1 Land Octopus Ovary, 1 Arteria Leaf\nFound in: Perfumer's Cookbook [2]",
        effect: "You may drink this aromatic, invigorating yourself with bloodlust. For a number of rounds equal to your proficiency modifier, all attack rolls you make are made at advantage and all attacks made against you are also made at advantage."
    },
    {
        name: "Blue Dancer Charm",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A cloth doll depicting a dancer garbed in blue. An ancient heirloom of some sort. Raises attack power with lower equipment load. The dancer in blue represents a fairy, who in legend bestowed a flowing sword upon a blind swordsman. Blade in hand, the swordsman sealed away an ancient god - a god that was Rot itself.</i>",
        effect: "While wearing this talisman, you gain a +2 bonus to AC if you are wearing no armor and using no shield."
    },
    {
        name: "Blue-feathered Branchsword",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A talisman adorned with blue feathers, once used in ancient death rituals. Raises defense when HP is low. The heart sings when one draws close to death, and thus does one cling so tenaciously to life - to render up a death worth offering.</i>",
        effect: "While your hit points are less than half your maximum hit points, your AC increases by 2."
    },
    {
        name: "Boiled Crab",
        type: "Consumable",
        rarity: "Rare",
        craftable: false,
        description: "<i>Boiled crab meat. A prime specimen of plump and moist meat. True connoisseurs know how to keep from over-salting. Greatly boosts physical damage negation for a certain duration, Unlike the \"prawn\" sold, this truly is crab. Not that it matters, it's delicious all the same.</i>",
        effect: "After consuming this food, your AC increases by 2 for 1 minute."
    },
    {
        name: "Boiled Prawn",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Boiled prawn meat. A prime specimen of plump and moist meat. True connoisseurs know how to keep from over-salting. Boosts physical damage negation for a certain duration, The meat actually looks to have come from a crayfish. Not that it matters, it's delicious all the same.</i>",
        effect: "After consuming this food, your AC increases by 1 for 1 minute."
    },
    {
        name: "Boltdrake Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>Talisman depicting a yellow ancient dragon. Boosts lightning damage negation. The ancient dragons, who ruled in the prehistoric era before the Erdtree, would protect their lord as a wall of living rock. And so it is that the shape of the dragon has become symbolic of all manner of protections.</i>",
        effect: "You have resistance to lightning damage while wearing this talisman."
    },
    {
        name: "Briar Half-Plate",
        type: "Medium Armor (Half Plate)",
        rarity: "Rare",
        craftable: false,
        description: "<i>Battered iron armor from a foreign land. Worn by Elemer of the Briar. The winding, rusted iron briars are the mark of the guilty, and typically indicate a sentence of death. They also cause this armor to deal damage when performing dodge rolls. Elemer murdered numerous instructors and merchants, and was known as the Bell Bearing Hunter.</i>",
        effect: "While you are wearing this spiked armor, you can use a bonus action to make one melee weapon attack with your armor spikes against a target within 5 feet of you. If the attack hits, the spikes deal 3 (1d4) piercing damage. You use your Strength modifier for the attack and damage rolls.\n\nAdditionally, when you use the Attack action to grapple a creature, the target takes 3 piercing damage if your grapple check succeeds."
    },
    {
        name: "Bull-Goat Armor",
        type: "Heavy Armor (Plate)",
        rarity: "Legendary",
        craftable: false,
        description: "<i>Great Horned Tragoth's armor. Covers its wearer with a pair of giant horns, providing staunch poise. Tragoth is a famed knight of assistance. Countless Tarnished, facing adversity in the Lands Between, have survived thanks only to the Great Horned One's aid.</i>",
        effect: "While wearing this armor, you gain a +2 bonus to AC. In addition, if an effect moves you against your will along the ground, you can use your reaction to reduce the distance you are moved by up to 10 feet."
    },
    {
        name: "Bull-goat's Talisman",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A talisman depicting the horns of a bull-goat. Raises poise. Bull-goats are associated with the stout and mighty Tragoth, said to be unflinching in combat - now a silent comrade to those who fight.</i>",
        effect: "While wearing this talisman, you have advantage on Strength and Dexterity saving throws made against being pushed or knocked prone."
    },
    {
        name: "Burred Ammunition",
        type: "Ammunition",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Bolt covered in thorns. One of the most horrific weapons used in the Shattering. Afflicts with blood loss. Difficult to remove once buried in flesh, causes appalling damage to the body.</i>",
        effect: "When a target is hit by a ranged weapon attack using this piece of magical ammunition, the target suffers from Bleed 1. Once it hits a target, the ammunition is no longer magical."
    },
    {
        name: "Carian Filigreed Crest",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A talisman adorned with the royal crest. An honor said to have once been awarded to Carian knights who served as direct retainers to the kingdom's princesses. Now there is only one princess: Ranni, daughter of Rennala.</i>",
        effect: "While you wear this talisman, the SP cost of weapon skills you use is reduced by 2 (to a minimum of 1)."
    },
    {
        name: "Carian Knight Armor",
        type: "Medium Armor (Chain Shirt)",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Armor of the enchanted knights that once served the Carian royal family. The enchanted knights, anointed by the Lunar Queen, were heroes of the highest honors, but fell into disarray with the decline of the royal family.</i>",
        effect: "If you can cast Wizard, Sorcerer, or Warlock spells, you can wear this armor as if you were proficient in it."
    },
    {
        name: "Cerulean Amber Medallion",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A medallion with cerulean amber inlaid. Boosts maximum FP. the Erdtree's old sap becomes amber, treasured as the most precious of jewels in the age of Godfrey, the first Elden Lord. A primordial life energy resides inside.</i>",
        effect: "While wearing this talisman, your maximum SP increases by an amount equal to your level."
    },
    {
        name: "Cerulean Seed Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A cerulean-colored talisman patterned after an Erdtree seed. Boosts FP restoration from the Flask of Cerulean Tears. The Erdtree was once perfect and eternal, and thus was it believed that Erdtree seeds could not exist.</i>",
        effect: "When you regain hit points by drinking from a flask of cerulean tears, you regain additional SP equal to your character level."
    },
    {
        name: "Champion Hides",
        type: "Medium Armor (Hide)",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Pauldron reserved for the badlands' bravest. Proof that the wearer has slaughtered countless foes. Following the example of their chieftain Hoarah Loux, the brave warriors of the badlands shun excess adornment.</i>",
        effect: "If you have the Unarmored Defense trait, you may choose to wear these hides as clothing instead of armor. If you do, you gain a +2 bonus to your unarmored AC."
    },
    {
        name: "Chillproof Dried Liver",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        recipe: "Recipe currently undiscovered.",
        description: "<i>Cured animal liver, dried out after pickling in a frozen solution. Craftable item. Temporarily boosts cold damage negation, improving damage mitigation against attacks imbued with frost.</i>",
        effect: "Consuming this meat invigorates the body, granting the user resistance to cold damage for 1 minute."
    },
    {
        name: "Clarifying Boluses",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        recipe: "2 Herba, 1 Cave Moss, 1 Eye of Yelough\nFound in: Frenzied's Cookbook [1]",
        description: "<i>Yellow boluses made of cave moss. Craftable item. Alleviates madness buildup.</i>",
        effect: "Feeding these boluses to a stunned creature ends the stunned condition."
    },
    {
        name: "Clarifying Cured Meat",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        recipe: "5 Rowa Fruit, 1 Beast Carcass, 1 Slumbering Egg, 1 Eye of Yelough\nFound in: Nomadic Warrior's Cookbook [23]",
        description: "<i>Cured strip of meat, dried out after pickling in a purple medicinal solution. Craftable item. Temporarily boosts focus. Higher focus helps to mitigate the buildup of sleep and madness.</i>",
        effect: "Consuming this meat invigorates the body, granting the user advantage on saving throws against being stunned or put unconscious for 1 minute."
    },
    {
        name: "Clarifying Horn Charm",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>An accoutrement worn by the ancestral followers. Raises focus. (Focus governs resistance to sleep and madness.) Said to be a budding horn. The ancestral followers believed that the horns of a long-lived beast continue to bud like antlers, over and over again, until the beast one day becomes an ancestral spirit.</i>",
        effect: "While wearing this talisman, you have advantage on saving throws against being rendered unconscious or stunned."
    },
    {
        name: "Claw Talisman",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A talisman depicting a claw and an assassin. Enhances jump attacks. The assassins of Ravenmount are killers by trade. They assail their victims while dressed as birds of prey.</i>",
        effect: "While wearing this talisman, you can cast triple your jumping distance for 1 minute with it as a bonus action."
    },
    {
        name: "Cleanrot Armor",
        type: "Heavy Armor (Splint)",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Armor of the Cleanrot Knights, celebrated for their undefeated campaign in the Shattering. The Cleanrot Knights vowed to fight alongside Malenia, despite the inevitable, if gradual, putrefaction of their flesh. Their acceptance of their fate made these battles fiercest of all.</i>",
        effect: "While wearing this armor you have advantage on saving throws against the Rotting condition."
    },
    {
        name: "Cold Ammunition",
        type: "Ammunition",
        rarity: "Uncommon",
        craftable: true,
        recipe: "1 Beast Carcass, 3 Rimed Crystal Bud (Yields 10)\nFound in: Glintstone Craftsman's Cookbook [7]",
        description: "<i>Arrow whittled from animal bones with a frozen tip. Afflicts targets with frost. Craftable item.</i>",
        effect: "When a target is hit by a ranged weapon attack using this piece of magical ammunition, the target takes an extra 4 (1d6) cold damage. Once it hits a target, the ammunition is no longer magical."
    },
    {
        name: "Companion Jar",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A talisman given by the jars to their friends. Raises potency of thrown jars. Though the jars are brought to life by human flesh and blood, they are all rather kindly folk. Perhaps they were made to be better than their innards.</i>",
        effect: "While you wear this talisman, when you use a throwing pot, the attack bonus and save DCs of the pot are increased by 2."
    },
    {
        name: "Concealing Veil",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Talisman put together from dark cloth, with a lustrous sheen. Completely conceals the wearer's presence while crouching at a distance from foes. Part of one of the concealing veils used by the assassins on the Night of Black Knives.</i>",
        effect: "While you wear this talisman, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide."
    },
    {
        name: "Crepus's Vial",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Small mysterious bottle with a dark mist sealed within. Eliminates all sound made by the wearer during movement. A ritual implement used by Roundtable Hold assassins. There was a time when Tarnished who had strayed from guidance feared nothing more than utter silence.</i>",
        effect: "While you wear this talisman, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently."
    },
    {
        name: "Crimson Amber Medallion",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A medallion with Crimson amber inlaid. Boosts maximum HP. The Erdtree's old sap becomes amber, treasured as the most precious of jewels in the age of Godfrey, the first Elden Lord. A primordial life energy resides inside.</i>",
        effect: "While wearing this talisman, your maximum hit points increase by an amount equal to your level."
    },
    {
        name: "Crimson Seed Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A crimson-colored talisman patterned after an Erdtree seed. Boosts HP restoration from the Flask of Crimson Tears. The Erdtree was once perfect and eternal, and thus was it believed that Erdtree seeds could not exist.</i>",
        effect: "When you regain hit points by drinking from a flask of crimson tears, you regain additional hit points equal to your character level."
    },
    {
        name: "Crucible Feather Talisman",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A talisman fashioned from feathers that embody the aspects of various creatures. Said to have grown on the human body long ago. Improves the effectiveness of dodge rolls, but increases damage taken at all times. A vestige of the crucible of primordial life. Born partially of devolution, it was considered a signifier of the divine in ancient times, but is now increasingly disdained as an impurity as civilization has advanced.</i>",
        effect: "While wearing this talisman, other creatures have disadvantage on attacks of opportunity against you."
    },
    {
        name: "Crucible Knight Armor",
        type: "Heavy Armor (Plate)",
        rarity: "Rare",
        craftable: false,
        description: "<i>Armor of the Crucible Knights who served Godfrey, the first Elden Lord.</i>",
        effect: "When you cast an Aspect of the Crucible spell while wearing this armor, you may add your Strength modifier to one of the spell's damage rolls."
    },
    {
        name: "Crucible Knot Talisman",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A talisman fashioned from a bony knot that embodies the aspects of various creatures. Said to have grown on the human body long ago. Reduces damage and impact of headshots taken. A vestige of the crucible of primordial life. Born partially of devolution, it was considered a signifier of the divine in ancient times, but is now increasingly disdained as an impurity as civilization has advanced.</i>",
        effect: "While you wear this talisman, critical hits by ranged attacks against you become normal hits instead."
    },
    {
        name: "Crucible Scale Talisman",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A talisman fashioned from a scale that embodies the aspects of various creatures. Said to have grown on the human body long ago. Reduces damage taken from critical hits. A vestige of the crucible of primordial life. Born partially of devolution, it was considered a signifier of the divine in ancient times, but is now increasingly disdained as an impurity as civilization has advanced.</i>",
        effect: "While wearing this talisman, critical hits by melee attacks against you become normal hits instead."
    },
    {
        name: "Cuckoo Glintstone",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        recipe: "1 Crystal Bud, 1 Cracked Crystal\nFound in: Glintstone Craftsman's Cookbook [1]",
        description: "<i>Lump of broken glintstone enwreathed with magic power. A \"faux sorcery\" used by the Knights of the Cuckoo. Craftable item. Launched straight ahead, a magic bolt springs forth from the point of impact.</i>",
        effect: "As an action, you can throw this stone on the ground to produce 3 motes of glintstone. Each mote hits a creature of your choice that you can see within 60 feet. A mote deals 3 (1d4)+1 force damage to its target. The motes all strike simultaneously and you can direct them to hit one creature or several."
    },
    {
        name: "Cuckoo Knight Armor",
        type: "Medium Armor (Breastplate)",
        rarity: "Rare",
        craftable: false,
        description: "<i>Armor worn by Raya Lucaria Academy knights. Its left breast is emblazoned with a peering cuckoo, whence came their name. Perhaps the bird's shrewd gaze is an expression of their refusal to be mere servants of the academy.</i>",
        effect: "You have advantage on saving throws against spells while you wear this armor."
    },
    {
        name: "Curved Sword Talisman",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A talisman depicting a curved sword and a swordsman. Enhances guard counters. It is said that a blind swordsman was the originator of this technique - the art of allowing one's opponent to strike so as to leave them vulnerable to a well-timed reply.</i>",
        effect: "While wearing this talisman, when a creature misses you with a melee attack, you have advantage on the next attack roll you make against that creature before the end of your next turn."
    },
    {
        name: "Daedicar's Woe",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Disturbing likeness of a woman whose skin was flayed. She smiles with a serene tenderness. Increases damage taken. It is said that this woman, named Daedicar, indulged in every form of adultery and wicked pleasure imaginable, giving birth to a myriad of grotesque children.</i>",
        effect: "While wearing this talisman, you have vulnerability to all damage types."
    },
    {
        name: "Dagger Talisman",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A talisman depicting a dagger and a surgeon. Enhances critical hits. The white-garbed field surgeons come to the aid of friend and foe alike by dealing a final deadly thrust to spare them from the prolonged agony of a mortal wound. A sense of mercy is a catalyst for bloodlust.</i>",
        effect: "When you score a critical hit with an attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
    },
    {
        name: "Dappled Cured Meat",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        recipe: "5 Rowa Fruit, 1 Beast Carcass, 1 Beast Carcass, 1 Nascent Butterfly\nFound in: Nomadic Warrior's Cookbook [18]",
        description: "<i>Cured strip of meat, dried out after pickling in a dappled medicinal solution. Craftable item. Temporarily boosts immunity, robustness, and focus.</i>",
        effect: "Consuming this meat invigorates the body, granting the user advantage on Constitution and Wisdom saving throws for 1 minute."
    },
    {
        name: "Dragoncrest Greatshield Talisman",
        type: "Talisman",
        rarity: "Legendary",
        craftable: false,
        description: "<i>A crimson-colored talisman patterned after an Erdtree seed. Boosts HP restoration from the Flask of Crimson Tears. The Erdtree was once perfect and eternal, and thus was it believed that Erdtree seeds could not exist.</i>",
        effect: "While wearing this talisman, you have resistance to bludgeoning, piercing, and slashing damage."
    },
    {
        name: "Dragoncrest Shield Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A crimson-colored talisman patterned after an Erdtree seed. Boosts HP restoration from the Flask of Crimson Tears. The Erdtree was once perfect and eternal, and thus was it believed that Erdtree seeds could not exist.</i>",
        effect: "While you are wearing this talisman, bludgeoning, piercing, and slashing damage that you take from non-magical attacks is reduced by 3."
    },
    {
        name: "Envoy Crown",
        type: "Light Armor (Padded)",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>The soft bundle worn on the head by Oracle Envoys. Densely wrapped in several layers of cloth. No one knows what the cloth hides, but some claim to have heard a faint whimpering from inside. It must have been their imagination.</i>",
        effect: "While wearing this wrapped crown, skills from Envoy hammer weapons that produce bubbles deal an additional 7 (2d6) radiant damage."
    },
    {
        name: "Erdtree's Favor",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A talisman depicting a special blessing of the Erdtree. Slightly raises maximum HP, stamina, and equip load. It is said that when the Age of the Erdtree began, such blessings were personally bestowed upon their recipients by Queen Marika herself.</i>",
        effect: "While wearing this talisman, your maximum hit points increase by an amount equal to twice your proficiency bonus. Your carrying capacity also increases by 15 pounds."
    },
    {
        name: "Exalted Flesh",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        recipe: "5 Rowa Fruit, 1 Beast Carcass, 1 Arteria Leaf\nFound in: Armorer's Cookbook [3]",
        description: "<i>A lump of animal flesh pickled in a medicinal solution mixed with fiery spices. Craftable item. Temporarily boosts physical attack. Considered a delicacy in the badlands, this invigorating repast was for the exclusive benefit of those who they deem heroes.</i>",
        effect: "After consuming this flesh, you gain a +2 bonus to attack and damage rolls with weapons."
    },
    {
        name: "Explosive Ammunition",
        type: "Ammunition",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Bolt tipped with a shard of Explosive Stone. Explodes on impact, dealing fire damage.</i>",
        effect: "When this arrow strikes a creature or object, each creature within 5 feet of that point must succeed on a DC 13 Dexterity saving throw or take 11 (3d6) fire damage."
    },
    {
        name: "Explosive Stone Clump",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A clump of small stones with smoldering cores. Explodes when thrown together at enemies, inflicting fire damage. Miners employ these stones as tools for rock blasting, but have long forgotten how to craft them.</i>",
        effect: "As an action, you can throw this clump at a point up to 60 feet away. Each creature within 5 feet of that point must succeed on a DC 13 Dexterity saving throw or take 11 (3d6) fire damage."
    },
    {
        name: "Faithful’s Canvas Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A talisman bearing an icon that depicts a group of masked figures. Raises potency of incantations. The figures represent the flock at prayer, their firm belief in the intangible inspiring even the solitary founder of their religion. What is faith if not an affirmation?</i>",
        effect: "While wearing this talisman, your spell save DC and spell attack bonus for Incantations you cast each increase by 1."
    },
    {
        name: "Fia Robes",
        type: "Light Armor (Padded)",
        rarity: "Rare",
        craftable: false,
        description: "<i>Robe of black cloth that covers the entire body. Worn by Fia, the Deathbed Companion, on her journey after being exiled from her home. The fabric itself is soft as silk and thin enough that those embraced can feel every pulse; every bit of her warmth</i>",
        effect: "When you take a long rest wearing these robes, you and up to 5 allies you can see gain temporary hit points equal to your level + Constitution modifier."
    },
    {
        name: "Fingerprint Armor",
        type: "Heavy Armor (Splint)",
        rarity: "Rare",
        craftable: false,
        description: "<i>Iron armor singed and blistered by fingers. Worn by Vyke, knight of the Roundtable Hold. No other Tarnished was closer to the throne of the Elden Lord than Vyke. But without announcement, Vyke traveled far below the capital, and was scorched by the flame of frenzy. Did he make his choice for his maiden, or did some other force lure him with suggestion?</i>",
        effect: "While wearing this magical armor, you have resistance to fire damage and advantage on saving throws against the stunned condition."
    },
    {
        name: "Fire Ammunition",
        type: "Ammunition",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Arrow with the tip set alight. Deals fire damage.</i>",
        recipe: "1 Beast Carcass, Smoldering Butterfly (Yield 10)\nFound in: Armorer's Cookbook [2]",
        effect: "When a target is hit by a ranged weapon attack using this piece of magical ammunition, the target takes an extra 4 (1d6) fire damage. Once it hits a target, the ammunition is no longer magical."
    },
    {
        name: "Fire Scorpion Charm",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A talisman carried by assassins who strike unseen. Patterned on a scorpion freshly shed of its exoskeleton, its claws seizing a heart that burns with fire. Raises fire attack power, but lowers damage negation</i>",
        effect: "When you damage a creature, you can roll one additional damage die when determining the fire damage the target takes. Fire damage resistance and immunity you have is negated."
    },
    {
        name: "Fireproof Dried Liver",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Cured animal liver, dried out after pickling in a red medicinal solution. Craftable item. Temporarily boosts fire damage negation, improving damage mitigation against attacks imbued with fire</i>",
        recipe: "1 Rowa Fruit, 1 Beast Carcass, 1 Smoldering Butterfly\nFound in: Armorer's Cookbook [1]",
        effect: "Consuming this meat invigorates the body, granting the user resistance to fire damage for 1 minute."
    },
    {
        name: "Flamedrake Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>Talisman depicting a red ancient dragon. Boosts fire damage negation. The ancient dragons, who ruled in the prehistoric era before the Erdtree, would protect their lord as a wall of living rock. And so it is that the shape of the dragon has become symbolic of all manner of protections</i>",
        effect: "You have resistance to fire damage while wearing this talisman."
    },
    {
        name: "Flask of Cerulean Tears",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A sacred flask modelled after a golden holy chalice that was once graced by a tear of life. Filled with cerulean tears, this flask restores SP with use. Rest at a site of grace to replenish. The one washed up on the gravesite was sure to die, until this flask offered its gift of rejuvenation. To seek the Elden Ring</i>",
        effect: "This flask has 1 charge. As an action, you can expend a charge and regain 2 spell points when you drink from this flask. It regains all expended charges after you finish a long rest.\nWhile you rest at a Site of Grace, you can move charges to and from the Flask of Crimson Tears and the Flask of Cerulean tears as part of a long rest. You may also reinforce the flask with golden seeds and sacred tears. When you do so, the Flask of Cerulean Tears is reinforced simultaneously. Each sacred tear you offer to the flasks increases the healing you receive when you drink it by 2 SP"
    },
    {
        name: "Flask of Crimson Tears",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A sacred flask modelled after a golden holy chalice that was once graced by a tear of life. Filled with crimson tears, this flask restores HP with use. Rest at a site of grace to replenish. The one washed up on the gravesite was sure to die, until this flask offered its gift of rejuvenation. To seek the Elden Ring</i>",
        effect: "This flask has 2 charges. As an action, you can expend a charge and regain 3 (1d4)+1 hit points when you drink from this flask. It regains all expended charges after you finish a long rest. While you rest at a Site of Grace, you can move charges to and from the Flask of Crimson Tears and the Flask of Cerulean tears as part of a long rest. You may also reinforce the flask with golden seeds and sacred tears. When you do so, the Flask of Cerulean Tears is reinforced simultaneously. Each sacred tear you offer to the flasks increases the healing you receive when you drink it by 3 (1d4)+1"
    },
    {
        name: "Flask of Wondrous Physick",
        type: "Consumable",
        rarity: "Rare",
        craftable: false,
        description: "<i>A relic of the physick chemists, priests of the Erdtree. Harnesses the powers of crystal tears, which only form after the passage of many moons. Various special effects are bestowed upon the drinker, dependent on the specific mixture of crystal tears. Rest at a site of grace to replenish. Basins are placed at the feet of Minor Erdtrees throughout the Lands Between in order to collect their crystallized tears</i>",
        effect: "This flask is initially empty, though it fills with invigorating fluids when crystal tears are placed within it. The flask can hold up to two crystal tears at a time, taking on the tears properties. The tears within the flask can be changed over the course of a long rest. Once the contents have been consumed as an action, the flask refills after you finish a long rest."
    },
    {
        name: "Flock’s Canvas Talisman",
        type: "Talisman",
        rarity: "Very Rare",
        craftable: false,
        description: "<i>A talisman bearing an icon that depicts a mass of masked figures. Greatly raises potency of incantations. The figures represent the flock at prayer, their firm belief in the intangible inspiring even the solitary founder of their religion. What is faith if not an affirmation?</i>",
        effect: "While wearing this talisman, your spell save DC and spell attack bonus for Incantations you cast each increase by 2."
    },
    {
        name: "Frenzyflame Stone",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        description: "<i>Ruin Fragment blessed with an incantation of the Three Fingers. Craftable item. Used to generate warmth, continuously restoring the HP of those who host the frenzied flame. Confers madness upon those who have not adopted the flame. Take care not to mistake this for its gentler cousin.</i>",
        recipe: "1 Eye of Yelough, 1 Sanctuary Stone\nFound in: Frenzied's Cookbook [2]",
        effect: "A warm glow emanates from this stone after you place it on the ground. For 1 minute afterwards, any creature who ends their turn within 5 feet of the stone regains 1 hit point."
    },
    {
        name: "Furled Finger’s Trick-mirror",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A small, clouded mirror that reflects an image of a golden figure. Makes the bearer take on the appearance of a Host of Fingers. One of the ritual implements created by the Tarnished to deceive invaders.</i>",
        effect: "While wearing this talisman, you can use your action to make yourself, including your clothing, armor, weapons, and other belongings on your person, look different until you take a short rest or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can’t change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this ability to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this ability to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair. To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on a DC 15 Intelligence (Investigation) check."
    },
    {
        name: "General Radahn’s Armor",
        type: "Heavy Armor (Plate)",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Armor depicting the golden lion. Worn by General Radahn. The golden lion is said to symbolize Godfrey, the Elden Lord, and his beast regent, Serosh. From his youngest years, Radahn was naturally captivated by the Lord of the Battlefield.</i>",
        effect: "While wearing this armor, if an effect would move you against your will along the ground, you can use your reaction to reduce the distance you are moved by up to 15 feet."
    },
    {
        name: "Glintstone Scrap",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Piece of glintstone tinged with unstable magic. Found in crystal tunnels. Break gem, using FP to produce a magic bolt. Poor quality and thereby easily broken, a sorcerer wouldn’t give it a second look.</i>",
        effect: "As an action, you can crush this stone in your hand to produce a mote of glintstone. It hovers in the air for a moment before striking out and hitting a creature within 30 feet of you. The dart deals 3 (1d4)+1 force damage to its target."
    },
    {
        name: "Glowstone",
        type: "Consumable",
        rarity: "Common",
        craftable: true,
        description: "<i>Polished Ruin Fragment that shines brighter than Rainbow Stone. Craftable item. Emits light from the location it is placed, illuminating surroundings. However, the effect is short-lived, and it lacks the diverse colors of rainbow stones. May serve some benefit in dark places, or at night.</i>",
        recipe: "1 Ruin Fragment, 1 Herba\nFound in: Nomadic Warrior's Cookbook [2]",
        effect: "As an action, you can drop one of these stones onto the ground. After it impacts, it begins to glow, shedding bright light in a 15-foot radius and dim light for an additional 15 feet."
    },
    {
        name: "Godfrey Icon",
        type: "Talisman",
        rarity: "Very Rare",
        craftable: false,
        description: "<i>A legendary talisman depicting the Elden Lord Godfrey. Raises charge attack power of sorceries, incantations, and skills. Godfrey was a ferocious warrior. When he vowed to become a lord, he took the Beast Regent Serosh upon on his back to suppress the ceaseless lust for battle that raged within.</i>",
        effect: "While wearing this talisman, you may use both an action or a bonus action to use a weapon skill with an activation time of either. If you do that, you have advantage on any attack rolls you make as part of the skill."
    },
    {
        name: "Godskin Apostle Leather",
        type: "Light Armor (Leather)",
        rarity: "Rare",
        craftable: false,
        description: "<i>Robe made by sewing together patches of smooth skin. Worn by the Godskin Apostles. The apostles, once said to serve Destined Death, are wielders of the god-slaying black flame. But after their defeat by Maliketh, the Black Blade, the source of their power was sealed away.</i>",
        effect: "When you cast a spell or use a skill that makes a melee attack or creates an effect that has a reach of 5 feet, that reach increases by 5 feet instead."
    },
    {
        name: "Godskin Noble Leathers",
        type: "Light Armor (Studded Leather)",
        rarity: "Rare",
        craftable: false,
        description: "<i>Robe made by sewing together patches of smooth skin. Subcutaneous fat makes it plump and soft. Worn by Godskin Nobles, known for their seven-face aprons. Nobles are the most ancient apostles who are said to have assimilated inhuman physiology. Not unlike the crucible, the Erdtree in its primordial form.</i>",
        effect: "When you cast a spell or use a skill that creates an effect in a circle centered on yourself while wearing this armor, the radius of that area increases by 5 feet."
    },
    {
        name: "Godskin Swaddling Cloth",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>Sacred cloth of the Godskin Apostles, made from supple skin sewn together. Successive attacks restore HP. The Gloam-Eyed Queen Cradles newborn apostles swaddled in this cloth. Soon they will grow to become the death of the gods.</i>",
        effect: "When you hit a creature with an attack on your turn, you gain hit points equal to your proficiency bonus when you hit with subsequent attacks on your turn."
    },
    {
        name: "Gold Scarab",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A talisman facsimile of a scarab, the carrier of treasures and precious things. This Golden scarab increases the amount of runes obtained from defeating enemies.</i>",
        effect: "While wearing this talisman, you receive 10% additional runes from enemies you or your allies defeat."
    },
    {
        name: "Gold-Pickled Fowl Foot",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        description: "<i>Four-toed foot of a fowl, pickled in a golden medicinal solution. Craftable item. Boosts the amount of runes obtained from defeating enemies for a certain duration. Since old times, the needy would scrape the meat clean even from a fowl’s claw.</i>",
        recipe: "3 Rowa Fruit, 1 Four-Toed Fowl Foot, 1 Shimmering Firefly\nFound in: Missionary's Cookbook [2]",
        effect: "After consuming this foot, you gain twice as many runes from slaying enemies for 1 minute."
    },
    {
        name: "Golden Ammunition",
        type: "Ammunition",
        rarity: "Rare",
        craftable: true,
        description: "<i>Carved arrows made in tandem with the Erdtree Bow. Deals holy damage. Highly effective against Those Who Live in Death, and able to prevent them from rising again.</i>",
        recipe: "1 Beast Carcass, 2 Tarnished Golden Sunflower (Yield 10)\nFound in: Missionary's Cookbook [4]",
        effect: "When a target is hit by a ranged weapon attack using this piece of magical ammunition, the target takes an extra 4 (1d6) radiant damage. Once it hits a target, the ammunition is no longer magical."
    },
    {
        name: "Graven-mass Talisman",
        type: "Talisman",
        rarity: "Very Rare",
        craftable: false,
        description: "<i>A talisman depicting the first school of graven mages — a nightmare that would continue to haunt the academy. Greatly raises potency of sorceries. The primeval current is a forbidden tradition of glintstone sorcery. To those who cleave to its teachings, the act of collecting sorcerers to fashion them into the seeds of stars is but another path of scientific inquiry.</i>",
        effect: "While wearing this talisman, your spell save DC and spell attack bonus for Sorceries you cast each increase by 2."
    },
    {
        name: "Graven-school Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A talisman depicting a school of graven mages, the nightmare of the academy. Raises potency of sorceries. The primeval current is a forbidden tradition of glintstone sorcery. To those who cleave to its teachings, the act of collecting sorcerers to fashion them into the seeds of stars is but another path of scientific inquiry.</i>",
        effect: "While wearing this talisman, your spell save DC and spell attack bonus for Sorceries you cast each increase by 1."
    },
    {
        name: "Gravity Stone Chunk",
        type: "Consumable",
        rarity: "Rare",
        craftable: false,
        description: "<i>Shard of rock found in the wake of a meteorite strike. It is imbued with a particularly weighty magic. Throw at enemies to cause a gravitational explosion. The desperate ones who scavenge for these shards dub themselves “starcallers.”</i>",
        effect: "As an action you can throw this stone clump at a point you can see within 30 feet of you, shattering it on impact. A gravitational disruption tears open the ground in a 5-foot radius around it, creating difficult terrain in the area. Each creature in the area must succeed on a DC 11 Strength saving throw or take 5 (2d4) force damage."
    },
    {
        name: "Gravity Stone Fan",
        type: "Consumable",
        rarity: "Rare",
        craftable: false,
        description: "<i>Shard of rock found in the wake of a meteorite strike. It is imbued with a particularly weighty magic. The desperate ones which scavenge for these shards dub themselves “starcallers.”</i>",
        effect: "As an action you can crush this stone fan in your hand, projecting a a gravitational pulse in a 10-foot cone in front of you, destroying it in the process. The area becomes difficult terrain and each creature in the area must succeed on a DC 11 Strength saving throw or take 7 (2d6) force damage."
    },
    {
        name: "Great-jar's Talisman",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A charm that resembles a great jar overflowing with weaponry. Vastly boosts maximum equipment load. The great jar grants this talisman to their warriors. Carry as much as you can - grow big and strong.</i>",
        effect: "While wearing this talisman, you count as two sizes larger when determining your carrying capacity and the weight you can push, drag, or lift."
    },
    {
        name: "Greatshield Talisman",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Talisman depicting a knight holding a greatshield. Boosts guarding ability. The knights of Leyndell once modelled themselves after the Tree Sentinels. Their purpose is to protect that which deserves protection, and thus the shield always comes before the sword.</i>",
        effect: "While wearing this talisman and a shield, your AC increases by 1."
    },
    {
        name: "Green Turtle Talisman",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A talisman in the shape of a green turtle. Raises stamina recovery speed. Turtles are known as a nutritious ingredient, symbolic of inexhaustible power. However, those who hold turtles to be wise creatures consider the practice of eating their meat to be barbarous.</i>",
        effect: "While wearing this talisman, you have advantage on Constitution checks."
    },
];
