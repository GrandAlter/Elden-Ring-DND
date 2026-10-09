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
    {
        name: "Haima Glintstone Crown",
        type: "Light Armor (Padded)",
        rarity: "Rare",
        craftable: false,
        description: "<i>One of the glintstone crowns bestowed upon Raya Lucaria scholars whose pursuits were deemed worthy. Increases intelligence and strength to the detriment of FP. Scholars of the Haima Conspectus sought the power to quell conflict, and to this end studied the sorceries of cannon fire and the gavel.</i>",
        effect: "While wearing this glintstone crown, your Strength and Intelligence scores both increase by 1 up to a maximum of 20. Your maximum SP is reduced by an amount equal to your level."
    },
    {
        name: "Haligdrake Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>Talisman depicting a golden ancient dragon. Boosts holy damage negation. The ancient dragons, who ruled in the prehistoric era before the Erdtree, would protect their lord as a wall of living rock. And so it is that the shape of the dragon has become symbolic of all manner of protections.</i>",
        effect: "You have resistance to radiant damage while wearing this talisman."
    },
    {
        name: "Hammer Talisman",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A talisman depicting a hammer and a knight. Enhances stamina-reducing attacks against a blocking opponent. Hammers are highly effective against shield-bearing foes, so much so that they are known as “knight-killers. “</i>",
        effect: "While wearing this talisman, once per turn, when you hit a creature with an attack that deals bludgeoning damage, you can move it 5 feet to an unoccupied space, provided the target is no more than one size larger than you."
    },
    {
        name: "Holyproof Dried Liver",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Cured animal liver, dried out after pickling in a golden medicinal solution. Craftable item. Temporarily boosts holy damage negation, improving damage mitigation against attacks imbued with holiness.</i>",
        recipe: "5 Rowa Fruit, 1 Beast Carcass, 3 Tarnished Golden Sunflower\nFound in: Missionary's Cookbook [6]",
        effect: "Consuming this meat invigorates the body, granting the user resistance to radiant damage for 1 minute."
    },
    {
        name: "Host’s Trick-mirror",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A Talisman depicting a golden ancient dragon. Boosts holy damage negation. The ancient dragons, who ruled in the prehistoric era before the Erdtree, would protect their lord as a wall of living rock. And so it is that the shape of the dragon has become symbolic of all manner of protections.</i>",
        effect: "While wearing this talisman, you can use your action to make yourself, including your clothing, armor, weapons, and other belongings on your person, look different until you take a short rest or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can’t change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this ability to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this ability to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair. To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on a DC 15 Intelligence (Investigation) check."
    },
    {
        name: "Immunizing Cured Meat",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        description: "<i>Cured strip of meat, dried out after pickling in a green medicinal solution. Craftable item. Temporarily boosts immunity. Higher immunity helps to mitigate the buildup of various poisons and scarlet rot.</i>",
        recipe: "3 Rowa Fruit, 1 Beast Carcass, 1 Great Dragonfly Head, 1 Smoldering Butterfly\nFound in: Armorer's Cookbook [5]",
        effect: "Consuming this meat invigorates the body, granting the user advantage on saving throws against poison and scarlet rot for 1 minute."
    },
    {
        name: "Immunizing Horn Charm",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>An accoutrement worn by the ancestral followers. Raises immunity. (Immunity governs resistance to poison and rot.) Said to be a budding horn. The ancestral followers believed that the horns of a long-lived beast continue to bud like antlers , over and over again, until the beast one day becomes an ancestral spirit.</i>",
        effect: "While wearing this talisman, you have advantage on saving throws against the poisoned condition and scarlet rot."
    },
    {
        name: "Imp Head",
        type: "Medium Armor (Scale)",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Head covering made from the largely unaltered head of an impish golem.</i>",
        effect: "These carved imp masks take several forms, confering different bestial aspects depending on their form. Each increases one of your ability scores by 1 (up to a maximum of 20).\n\nFanged - Strength\n\nLong-Tongued - Dexterity\n\nWolf - Constitution\n\nCat - Intelligence\n\nCorpse - Wisdom\n\nElder - Charisma"
    },
    {
        name: "Invigorating Cured Meat",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        description: "<i>Cured strip of meat, dried out after pickling in a red medicinal solution. Craftable item. Temporarily boosts robustness. Higher robustness helps to mitigate the buildup of frost and blood loss.</i>",
        recipe: "3 Rowa Fruit, 1 Beast Carcass, 1 Crab Eggs, 1 Land Octopus Ovary\nFound in: Nomadic Warrior's Cookbook [2]",
        effect: "Consuming this meat invigorates the body, granting the user advantage on saving throws against Bleed and frostbite for 1 minute."
    },
    {
        name: "Ironjar Aromatic",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        description: "<i>Forbidden art of depraved perfumers. An art that requires fragments of hunted noble jars. Depraved perfumers are plainly in league with jar poachers.</i>",
        recipe: "1 Perfume Bottle, 2 Altus Bloom, 1 Cave Moss, 3 Living Jar Shard\nFound in: Perfumer's Cookbook [3]",
        effect: "You may drink this aromatic, turning your body into iron. For a number of rounds equal to your proficiency bonus, you have resistance to non-magical bludgeoning, piercing, and slashing damage. Your movement speed is reduced by half and you also have vulnerability to lightning damage."
    },
    {
        name: "Jar Helm",
        type: "Medium Armor (Scale)",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Jar that fits cleanly over the head when upturned. Made with pride by Iron Fist Alexander. In a uniquely jarlike gesture of friendship, it boosts the power of throwing pot items.</i>",
        effect: "While wearing this helm, if you throw a jar that inflicts damage, it deals additional damage equal to your proficiency bonus."
    },
    {
        name: "Karolos Glintstone Crown",
        type: "Light Armor (Padded)",
        rarity: "Rare",
        craftable: false,
        description: "<i>One of the glintstone crowns bestowed upon Raya Lucaria scholars whose pursuits were deemed worthy. The Karolos Conspectus is the oldest of the academy’s lineages of study, begat by the sorcerer Azur. Scholars who follow in his footsteps pursue the mysteries of comets.</i>",
        effect: "While wearing this glintstone crown, your Intelligence score increases by 1 (maximum of 20) and your Constitution decreases by 1 (minimum of 1)."
    },
    {
        name: "Kindred Of Rot’s Exultation",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A talisman depicting the exultation of pests. Raises attack power when poisoning or rot occurs in the vicinity. “Rot for the scarlet goddess. O scarlet blossoms, flourish in distant lands, and return to us, the unwanted children.</i>",
        effect: "When a creature within 20 feet of you fails a saving throw against the poisoned condition or scarlet rot, you have advantage on attack rolls until the end of your next turn."
    },
    {
        name: "Lance Talisman",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A talisman depicting a lance and a knight. Enhances attacks while on horseback. Knights on horseback are deadly foes. They see all below from their lofty position, meeting little meaningful resistance as they charge ahead.</i>",
        effect: "While you are mounted and not incapacitated, you have advantage on melee attack rolls against any unmounted creature that is smaller than your mount."
    },
    {
        name: "Lantern",
        type: "Tools",
        rarity: "Common",
        craftable: false,
        description: "<i>A small waist-worn lantern that illuminates surroundings. While its light is dimmer than that of a torch, it has the advantage of freeing up the user’s hands.</i>",
        effect: "A lantern casts bright light in a 10-foot radius and dim light for an additional 20 feet. Once lit, it burns indefinitely. It can be clipped to a belt loop to use without your hands. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius."
    },
    {
        name: "Lazuli Glintstone Crown",
        type: "Light Armor (Padded)",
        rarity: "Rare",
        craftable: false,
        description: "<i>One of the glintstone crowns bestowed upon Raya Lucaria scholars whose pursuits were deemed worthy. Scholars of the Lazuli Conspectus study Carian sorceries - a heterodox pursuit that views the moon as equal to the stars.</i>",
        effect: "While wearing this glintstone crown, your Intelligence and Dexterity scores increase by 1 up to a maximum of 20. Also, your maximum hit points decrease by an amount equal to your level."
    },
    {
        name: "Lightning Ammunition",
        type: "Ammunition",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Bolt tipped with a shard of Gravel Stone. Deals powerful lightning damage. Used by worshippers of the ancient dragons.</i>",
        recipe: "1 Beast Carcass, 1 Fulgurbloom (Yield 10)\nFound in: Ancient Dragon Apostle's Cookbook [1]",
        effect: "When a target is hit by a ranged weapon attack using this piece of magical ammunition, the target takes an extra 4 (1d6) lightning damage. Once it hits a target, the ammunition is no longer magical."
    },
    {
        name: "Lightning Scorpion Charm",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A talisman carried by assassins who strike unseen. Patterned on a scorpion freshly shed of its exoskeleton, its claws seizing a heart that sparks with lightning. Raises lightning attack power, but lowers damage negation.</i>",
        effect: "When you damage a creature, you can roll one additional damage die when determining the lightning damage the target takes. Lightning damage resistance and immunity you have is negated."
    },
    {
        name: "Lightningproof Dried Liver",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Cured animal liver, dried out after pickling in a yellow medicinal solution. Craftable item. Temporarily boosts lightning damage negation, improving damage mitigation against attacks imbued with lightning.</i>",
        recipe: "3 Rowa Fruit, 1 Beast Carcass, 1 Fulgurbloom\nFound in: Ancient Dragon Apostle's Cookbook [4]",
        effect: "Consuming this meat invigorates the body, granting the user resistance to lightning damage for 1 minute."
    },
    {
        name: "Longtail Cat Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A brooch depicting Lacrima, the long-tailed cat. Renders the wearer immune to fall damage. However, it cannot prevent falling to one’s death. Lacrima features in the fables of Raya Lucaria, in which she is described as a faerie cat who was fond of playing in the great bell tower.</i>",
        effect: "When you fall while wearing this talisman, you descend 60 feet per round and take no damage from falling."
    },
    {
        name: "Lord Of Blood’s Exultation",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A talisman depicting the exultation of the Lord of Blood. Raises attack power when blood loss occurs in the vicinity. “Render up your offerings of blood to your Lord. Drench my consort’s chamber. Slake his cocoon’s thirst. His awakening shall herald the dawn of our dynasty”.</i>",
        effect: "When a creature within 20 feet of you fails a saving throw against Bleed, you gain advantage on attack rolls until the end of your next turn."
    },
    {
        name: "Lusat’s Glintstone Crown",
        type: "Light Armor (Padded)",
        rarity: "Very Rare",
        craftable: false,
        description: "<i>The giant blue glintstone crown worn by Lusat, primeval current sorcerer. This crown replaced Lusat’s brain and skull altogether, and now, removed from his body, it is all but dead. What power remains within raises the potency of Lusat’s primeval current sorceries.</i>",
        effect: "While wearing this glintstone crown, you may cast Cosmic sorceries you have access to without preparing or knowing them (if you don’t prepare spells). You must still have acquired the spell through some means. When you cast a spell of 1st-level or higher, you must expend SP as if it were one level higher."
    },
    {
        name: "Magic Ammunition",
        type: "Ammunition",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Arrow whittled from animal bones. The tip is daubed with a glintstone tincture. Deals magic damage. Craftable item.</i>",
        recipe: "1 Beast Carcass, 2 Shimmering Firefly (Yields 10)\nFound in: Glintstone Craftsman's Cookbook [5]",
        effect: "When a target is hit by a ranged weapon attack using this piece of magical ammunition, the target takes an extra 4 (1d6) force damage. Once it hits a target, the ammunition is no longer magical."
    },
    {
        name: "Magic Scorpion Charm",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A talisman carried by assassins who strike unseen. Patterned on a scorpion freshly shed of its exoskeleton, its claws seizing a heart that shimmers with magic. Raises magic attack power, but lowers damage negation.</i>",
        effect: "When you damage a creature, you can roll one additional damage die when determining the force damage the target takes. Force damage resistance and immunity you have is negated."
    },
    {
        name: "Malformed Dragon Armor",
        type: "Heavy Armor (Plate)",
        rarity: "Very Rare",
        craftable: false,
        description: "<i>Malformed golden armor. Adorned with various dragon imagery and worn by the misshapen Tree Sentinels. After the great ancient dragon Gransax attacked, the sentinels had an epiphany. The only way to truly protect the Erdtree was to become dragons themselves.</i>",
        effect: "While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to fire and lightning damage.\n\nAdditionally, you can focus your senses as an action to magically discern the distance direction to the closest dragon within 30 miles of you that is of the same type as the armor. This special action can't be used again until the next dawn."
    },
    {
        name: "Margit's Shackle",
        type: "Tool",
        rarity: "Unique",
        craftable: false,
        description: "<i>A fetish bathed in golden magic. Shackles were used to bind the accursed people called the Omen, and these ones were made to keep a particular Omen under strictest confinement. Though faint, the shackles still retain vestiges of power — enough to trap the once-bound Margit on earth, if only for a short time.</i>",
        effect: "As an action, you can grip this shackle tightly, invoking the ancient binds that once held Margit in place. If Margit, the Fell Omen is within 120 feet of you, he must succeed on a DC 20 Constitution saving throw or be paralyzed until the end of your next turn. The shackle can't be used this way again until the next dawn."
    },
    {
        name: "Marika's Scarseal",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>An eye engraved with an Elden Rune. Said to be the seal of Queen Marika. Raises mind, intelligence, faith, arcane, but also increases damage taken. These seals represent the lifelong duty of those chosen by the gods.</i>",
        effect: "While you wear this talisman, your Intelligence, Wisdom, and Charisma scores increase by 1, up to a maximum of 21. You have vulnerability to non-bludgeoning, non-piercing, and non-slashing damage as well."
    },
    {
        name: "Marika's Soreseal",
        type: "Talisman",
        rarity: "Legendary",
        craftable: false,
        description: "<i>This legendary talisman is an eye engraved with an Elden Rune, said to be the seal of Queen Marika. Greatly raises mind, intelligence, faith, and arcane, but also increases damage taken by a similar measure. Solemn duty weighs upon the one beholden; not unlike a gnawing curse from which there is no deliverance.</i>",
        effect: "While you wear this talisman, your Intelligence, Wisdom, and Charisma scores increase by 2, up to a maximum of 22. You have vulnerability to non-bludgeoning, non-piercing, and non-slashing damage as well."
    },
    {
        name: "Memory Stone",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A black, lightly beguiling stone. Prized by the sorcerers who produce them. Said to be a fragment of the black moon that once hung above the Eternal City.</i>",
        effect: "While wearing this amulet, you may prepare an additional spell as long as you have the Spellcasting or Pact Magic feature.\n\nIf you do not prepare spells, you learn an additional spell that meets the requirements for a spell you would learn at your current level. This spell is tied to the memory stone when you where it, you cannot replace it until you level up."
    },
    {
        name: "Millicent's Prosthesis",
        type: "Talisman",
        rarity: "Very Rare",
        craftable: false,
        description: "<i>Part of the golden prosthesis used by Millicent. The hand is locked into a fist that once raised a sword aloft. Boosts dexterity and raises attack power with successive attacks. The despair of sweet betrayal transformed Millicent from a mere bud into a magnificent flower. And one day, she will be reborn - as a beautiful scarlet valkyrie.</i>",
        effect: "When you hit a creature with an attack with a finesse weapon on your turn, your Dexterity increases by 1 until the end of your turn."
    },
    {
        name: "Mimic's Veil",
        type: "Tool",
        rarity: "Rare",
        craftable: false,
        description: "<i>Golden veil of intricate design. When Godrick was hounded from Leyndell, the Royal Capital, this was one of a multitude of treasures he took with him. Also known as \"Marika's Mischief\".</i>",
        effect: "As an action, you can drape this veil over your face and take the form of a Medium or Small object you can see until you take any damage or use an action to dismiss the illusion. The changes wrought by this spell fail to hold up to physical inspection. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair. To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on a DC 15 Intelligence (Investigation) check."
    },
    {
        name: "Miquella's Needle",
        type: "Tool",
        rarity: "Legendary",
        craftable: false,
        description: "<i>One of the unalloyed gold needles that Miquella crafted to ward away the meddling of outer gods. Capable of subduing the flame of frenzy if inherited, allowing one to cheat fate and avoid becoming Lord of Frenzied Flame. However, the needle is as yet unfinished and can only be used in the heart of the storm beyond time said to be found in Faram Azula.</i>",
        effect: "As an action, you can place this needle within the flesh of a willing creature. The target takes 1 point of piercing damage. While the needle remains intact within their flesh, the creature is immune to the influence of Outer Gods."
    },
    {
        name: "Mohg's Shackle",
        type: "Tool",
        rarity: "Unique",
        craftable: false,
        description: "<i>A fetish bathed in golden magic. Shackles were used to bind the accursed people called the Omen, and these ones were made to keep a particular Omen under strictest confinement. Though faint, the shackles still retain vestiges of power — enough to trap the once-bound Mohg on earth, if only for a short time.</i>",
        effect: "As an action, you can grip this shackle tightly, invoking the ancient binds that once held Mohg the Omen in place. If Mohg is within 120 feet of you, he must succeed on a DC 20 Constitution saving throw or be paralyzed until the end of your next turn. The shackle can't be used this way again until the next dawn."
    },
    {
        name: "Moon Of Nokstella",
        type: "Talisman",
        rarity: "Very Rare",
        craftable: false,
        description: "<i>This legendary talisman is a treasure of Nokstella, the Eternal City. Increases memory slots. This talisman represents the lost black moon. The moon of Nokstella was the guide of countless stars.</i>",
        effect: "While wearing this amulet, you may prepare two additional spell as long as you have the Spellcasting or Pact Magic feature.\n\nIf you do not prepare spells, you learn two spells that meets the requirements for a spell you would learn at your current level. This spell is tied to the memory stone when you where it, you cannot replace it until you level up."
    },
    {
        name: "Mottled Necklace",
        type: "Talisman",
        rarity: "Very Rare",
        craftable: false,
        description: "<i>A vividly-colored accoutrement precious to the ancestral followers. Raises immunity, robustness, and focus. Said to be a budding horn. The ancestral followers believed that the horns of a long-lived beast continue to bud like antlers, over and over again, until the beast one day becomes an ancestral spirit.</i>",
        effect: "While wearing this talisman, you have advantage on saving throws against Bleed, poison, scarlet rot, death blight, stunned, and frostbite."
    },
    {
        name: "Mushroom Armor",
        type: "Medium Armor (Hide)",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Mushrooms found growing all over the body. These overgrown mushroom have colonized the head. To those enraptured by the scarlet rot, they are holy vestments that root one to the earth.</i>",
        effect: "While wearing this armor, you have advantage on attack rolls against creatures with the Poisoned or Rotting conditions."
    },
    {
        name: "Neutralizing Boluses",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Green boluses made from cave moss. Craftable item. Alleviates poison buildup and cures poison ailment. Poison accumulates gradually, coming into effect once the threshold is reached. Poison ailment lowers HP in steady increments for a period.</i>",
        recipe: "1 Herba, 1 Cave Moss, 1 Great Dragonfly Head\nFound in: Armorer's Cookbook [2]",
        effect: "A creature that consumes these boluses neutralizes poisons if they are poisoned."
    },
    {
        name: "Nox Mirrorhelm",
        type: "Medium Armor (Breastplate)",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Helm fashioned from a crystal looking-glass. One among the Eternal City's ritual implements. Worn by those committed to high treason, it wards off the intervention of the Greater Will and its vassal Fingers.</i>",
        effect: "While wearing this amulet, you are hidden from magic that would detect or locate you. You can't be targeted by such magic or perceived through magical scrying sensors."
    },
    {
        name: "Old Lord's Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A legendary talisman depicting the ancient king whose seat lies at the heart of the storm beyond time. Extends the duration of sorceries and incantations. It is said that the ancient royal city of Farum Azula has been slowly crumbling since time immemorial.</i>",
        effect: "When you cast a spell that has a duration of 1 minute or longer, the spell's duration is doubled, to a maximum duration of 24 hours."
    },
    {
        name: "Olivinus Glintstone Crown",
        type: "Light Armor (Padded)",
        rarity: "Rare",
        craftable: false,
        description: "<i>One of the glintstone crowns bestowed upon Raya Lucaria scholars whose pursuits were deemed worthy. The lineage of the Olivinus Conspectus began with the sorcerer Lusat, and its adherents continue his study of meteors.</i>",
        effect: "While wearing this glintstone crown, your Intelligence score increases by 1 (maximum of 20) and your maximum hit points decrease by an amount equal to your level."
    },
    {
        name: "Omen Armor",
        type: "Heavy Armor (Plate)",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Malformed armor resembling an Omen with its horns cut off. Worn by the Dung Eater. The heavy, sun-shaped medallion represents both the guidance he once saw, and the ring to which it will one day lead.</i>",
        effect: "While wearing this armor, you create additional wraiths equal to your Charisma bonus when you use an omen bairn or regal omen bairn."
    },
    {
        name: "Omen Bairn",
        type: "Tool",
        rarity: "Rare",
        craftable: false,
        description: "<i>Doll of a curseborn bairn. Use unleash wraiths that chase down foes. Omen babies have all their horns excised, causing most to perish. These fetishes are made to memorialize them. \"Please, don't hate me, or curse me. Please.\"</i>",
        effect: "This bairn has 3 charges. As an action, you can expend one charge to draw on the bairn's memories and create four wraiths that hunt down targets within 60 feet of you. You can have them target one or several.\n\nMake a ranged spell attack for each wraith with a +7 bonus to hit. On a hit, the target takes 7 (2d6) necrotic damage.\n\nThe bairn regains 1d3 expended charges daily at dawn."
    },
    {
        name: "Omenkiller Armor",
        type: "Medium Armor (Hide)",
        rarity: "Rare",
        craftable: false,
        description: "<i>Robe worn by the Omenkillers, butchers of twisted conscience. Its thick apron is worn in remembrance Rollo, the progenitor of the Omenkillers and a perfumer of antiquity.</i>",
        effect: "While wearing this armor, fiends within 30 feet of you that can see you must succeed on a DC 13 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to this effect for the next 24 hours."
    },
    {
        name: "Pearldrake Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A legendary talisman depicting the ancient king whose seat lies at the heart of the storm beyond time. Extends the duration of sorceries and incantations. It is said that the ancient royal city of Farum Azula has been slowly crumbling since time immemorial.</i>",
        effect: "While you are wearing this talisman, bludgeoning, piercing, and slashing damage that you take from non-magical attacks is reduced by 3."
    },
    {
        name: "Perfumer's Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A talisman depicting a set of perfume bottles. Raises potency of perfume items. There are gardens known only to the perfumers. Whether hidden on the fringes of the highlands, or obscured by shadows inside caves, the flowers blossom in secret, waiting to impart their scent.</i>",
        effect: "While you wear this talisman, when you use a perfume jar, the attack bonus and save DCs of the perfume are increased by 2."
    },
    {
        name: "Pickled Turtle Neck",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Turtle neck meat, pickled in a bitter medicinal solution. Craftable item. Temporarily boosts stamina recovery. The nutrients churn through the body, practically boiling out endless power.</i>",
        recipe: "3 Rowa Fruit, 1 Turtle Neck Meat, 1 Herba\nFound in: Nomadic Warrior's Cookbook [3]",
        effect: "When you consume this meat as an action, you gain advantage on Strength checks and saving throws for 1 minute."
    },
    {
        name: "Poison Ammunition",
        type: "Ammunition",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Arrow whittled from animal bones. The tip is daubed with venom. Afflicts targets with poison. Craftable item.</i>",
        recipe: "1 Beast Carcass, 1 Poisonbloom (Yields 10)\nFound in: Nomadic Warrior's Cookbook [3]",
        effect: "When a target is hit by a ranged weapon attack using this piece of magical ammunition, the target takes an extra 4 (1d6) poison damage. Once it hits a target, the ammunition is no longer magical."
    },
    {
        name: "Poison Spraymist",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        description: "<i>Forbidden art of depraved perfumers. Perfumed powder is held in the mouth to dissolve before being expelled. It was once a restorative art, or so it is said.</i>",
        recipe: "1 Perfume Bottle, 1 Altus Bloom, 1 Miranda Powder, 1 Poisonbloom\nFound in: Perfumer's Cookbook [2]",
        effect: "You may take this aromatic into your mouth, spewing out a spray of flammable sparks in a 15-foot cone in front of you. Each creature in the area must make a DC 15 Constitution saving throw. A creature takes 14 (4d6) poison damage on a failed save, or half as much damage on a successful one."
    },
    {
        name: "Poisoned Stone Clump",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A clump of small stones with poison cores. Throw together at enemies to cause buildup of poison. Miners employ these stones as tools for pest extermination, but have long forgotten how to craft them.</i>",
        effect: "As an action, you can throw this stone clump at a point up to 60 feet away. Each creature within 5 feet of that point must succeed on a DC 12 Dexterity saving throw or take 11 (3d6) poison damage."
    },
    {
        name: "Preserving Boluses",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Scarlet boluses made of cave moss. Craftable item. Alleviates scarlet rot buildup and cures rot aliment. Scarlet rot accumulates gradually, coming into effect once the threshold is reached. Scarlet rot ailment greatly lowers HP in steady increments for a period.</i>",
        recipe: "2 Herba, 1 Cave Moss, 1 Sacramental Bud\nFound in: Armorer's Cookbook [6]",
        effect: "A creature that consumes these boluses cures scarlet rot if they are afflicted with it. It confers no benefit for people in advanced stages of rot."
    },
    {
        name: "Primal Glintstone Blade",
        type: "Talisman",
        rarity: "Very Rare",
        craftable: false,
        description: "<i>An old glintstone blade that has been stained with blood. Reduces FP consumption of sorceries and incantations at the cost of maximum HP. The old sorcerers would slice open their hearts with these blades to imbue a primal glintstone with their soul, and thus did they die.</i>",
        effect: "While wearing this talisman, your hit point maximum is halved and the casting cost of spells you cast is reduced as if it were two levels lower (minimum 1st-level)."
    },
    {
        name: "Prince Of Death's Cyst",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A fetid, overgrown cyst taken from facial flesh. Greatly raises vitality. (Vitality governs resistance to the effects of Death.) It is said that this cyst came from the corrupted visage of one unable to die a true Death. Indeed, it comes from the Prince of Death, scion of the golden bough and First of the Dead among the demigods.</i>",
        effect: "While wearing this talisman, you are immune to the Exhausted condition."
    },
    {
        name: "Prince Of Death's Pustule",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A fetid pustule taken from facial flesh. Raises vitality. (Vitality governs resistance to the effects of Death.) It is said that this pustule came from the visage of the Prince of Death, he who used to be called Godwyn. As First Dead of the demigods, it's said he's buried deep under the capital, at the Erdtree's roots.</i>",
        effect: "While wearing this talisman, you have advantage on saving throws against the exhausted condition."
    },
    {
        name: "Prosthesis-Wearer Heirloom",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A talisman engraved with a scene from a heroic tale. Raises dexterity. Though born into the accursed rot, when the young girl encountered her mentor and his flowing blade, she gained wings of unparalleled strength.</i>",
        effect: "Your Dexterity score is 19 while you wear this talisman. It has no effect on you if your Dexterity is already 19 or higher without it."
    },
    {
        name: "Pureblood Knight's Medal",
        type: "Tool",
        rarity: "Very Rare",
        craftable: false,
        description: "<i>Proof that one is a glorious knight of the new Dynasty of Mohgwyn that the Lord of Blood will inaugurate. Use to be granted audience with Mohg. Only, it is not yet time. For Mohg yet slumbers beside the Divinity. Be Patient. The new dynasty is nigh.</i>",
        effect: "As an action, you can speak this medal's command word to teleport you and each creature of your choice within 10 feet of you to Moghwyn Palace."
    },
    {
        name: "Queen of the Full Moon Robes",
        type: "Light Armor (Padded)",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Robe indicating the highest order of sorcerer. Worn by Rennala, Queen of the Full Moon. When Rennala, head of both the Academy of Raya Lucaria and the Carian royal family, lost her husband Radagon, her heart went along with him. And then, those at the academy realized. That Rennala was no champion, after all.</i>",
        effect: "This black or dark blue robe is embroidered with small white and silver stars. You gain a +1 bonus to saving throws while you wear it.\n\nSix stars, located on the robe's upper front portion, are particularly large. While wearing this robe, you can use an action to pull off one of the stars and use it to cast magic missile as a 3rd-level spell. Daily at dusk, 4 (1d6) removed stars reappear on the robe."
    },
    {
        name: "Radagon Icon",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A legendary talisman depicting the Elden Lord Radagon. Shortens the casting time of sorceries and incantations. As the husband of Rennala, the red-haired Radagon studied sorcery, and as the husband of Queen Marika, he studied incantations. Thus did the hero aspire to be complete.</i>",
        effect: "When you cast a spell that has a casting time of 1 action, you can spend double the SP of its normal casting cost to change the casting time to 1 bonus action for this casting."
    },
    {
        name: "Radagon's Scarseal",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>An eye engraved with an Elden Rune. Said to be the seal of King Consort Radagon. Raises vigor, endurance, strength, and dexterity, but also increases damage taken. These seals represent the lifelong duty of those chosen by the gods.</i>",
        effect: "While you wear this talisman, your Strength, Dexterity, and Constitution scores increase by 1, up to a maximum of 21. You have vulnerability to bludgeoning, piercing, and slashing damage as well."
    },
    {
        name: "Radagon's Soreseal",
        type: "Talisman",
        rarity: "Legendary",
        craftable: false,
        description: "<i>This legendary talisman is an eye engraved with an Elden Rune, said to be the seal of King Consort Radagon. Greatly raises vigor, endurance, strength, dexterity, but also increases damage taken by a similar measure. Solemn duty weighs upon the one beholden; not unlike a gnawing curse from which there is no deliverance.</i>",
        effect: "While you wear this talisman, your Strength, Dexterity, and Constitution scores increase by 2, up to a maximum of 22. You have vulnerability to bludgeoning, piercing, and slashing damage as well."
    },
    {
        name: "Radahn's Spear",
        type: "Ammunition",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Greatarrows used by the General Radahn during the festival of combat. These are in fact the many spears with which he was stabbed by the Cleanrot Knights. Imbued with Radahn's gravitational power.</i>",
        effect: "If an aberration takes damage from this arrow, the creature must make a DC 15 Constitution saving throw, taking an extra 16 (3d10) piercing damage on a failed save, or half as much extra damage on a successful one.\n\nOnce a Radahn's Spear deals its extra damage to a creature, it becomes a non-magical arrow."
    },
    {
        name: "Radiant Baldachin's Blessing",
        type: "Consumable",
        rarity: "Very Rare",
        craftable: false,
        description: "<i>Protection of a hidden temple in the guise of a bedchamber. This blessing is of the utmost rarity. It's said a deathbed companion will only produce a blessing of this kind for a champion but once in her entire life. The sole blessing which she imbues of her own volition.</i>",
        effect: "As an action, you can activate this blessing, you have advantage on saving throws against being pushed, knocked prone, or frightened for 24 hours."
    },
    {
        name: "Radiant Gold Mask",
        type: "Light Armor (Padded)",
        rarity: "Very Rare",
        craftable: false,
        description: "<i>A mask designed to resemble a blazing golden halo. Created and left behind by Lord Goldmask, a staunch pursuer of Golden Order fundamentalism. Its striking design represents both the brilliant inspiration that once shone upon him, and the vision of a ring that he will surely find at the end of his pursuit. \"To you who seek to shine as I do, wear it well!\"</i>",
        effect: "While wearing this mask, Celestials have disadvantage on saving throws against Golden Order incantations you cast."
    },
    {
        name: "Rainbow Stone",
        type: "Consumable",
        rarity: "Common",
        craftable: true,
        description: "<i>Ruin Fragment that has undergone some simple processing. Craftable item. Stones such as these shine with the colors of the rainbow, making them useful markers when placed on the ground. Can also be dropped to gauge the distance of a fall. The higher the pitch of the sound, the higher the likelihood of the fall being fatal. Once used to entertain children on the fringes of the Lands Between.</i>",
        recipe: "Recipe currently undiscovered.",
        effect: "As an action you may place one of these glowing, colored stones on the ground to serve as a marker for others. The stones give off dim light in a five foot radius."
    },
    {
        name: "Rainbow Stone Ammunition",
        type: "Ammunition",
        rarity: "Common",
        craftable: true,
        description: "<i>Arrow whittled from animal bones tipped with chips of Rainbow Stone. Colored light shines at the point of impact. Craftable item.</i>",
        recipe: "1 Beast Carcass, 3 Ruin Fragment\nFound in: Nomadic Warrior's Cookbook [7]",
        effect: "When a target is hit by a ranged weapon attack using this piece of magical ammunition, a small glowing stone is embedded at the point of impact. The stone glows a random color and sheds dim light in a 5-foot radius. If the target is a creature, it embeds itself into the target's body. The target or another creature within five feet of it can use an action to remove it."
    },
    {
        name: "Raptor's Armor",
        type: "Light Armor (Leather)",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>Robe crafted with the black feathers of a bird of prey. Worn by the assassins of Ravenmount. A ritual implement for transforming into a Deathbird, if only by imitation. \"We are birds of prey, bringers of death.\"</i>",
        effect: "While you wear this armor with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action."
    },
    {
        name: "Raw Meat Dumpling",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: false,
        description: "<i>A pungent raw meatball, made succulent by virtue of being on the verge of turning. Restores HP but also poisons the user. Not recommended for those who prefer to know the origin of their meats.</i>",
        effect: "After consuming this food, you regain 14 (4d4)+4 hit points. You must also succeed on a DC 14 Constitution saving or be poisoned for 10 minutes."
    },
    {
        name: "Red-feathered Branchsword",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A talisman adorned with red feathers, once used in ancient death rituals. Raises attack power when HP is low. The heart sings when one draws close to death, and a glorious end awaits those who cling so tenaciously to life.</i>",
        effect: "While you wear this talisman and your hit points are below half of your maximum hit points, your attack and damage rolls with weapon attacks are increased by 2."
    },
    {
        name: "Regal Omen Bairn",
        type: "Tool",
        rarity: "Legendary",
        craftable: false,
        description: "<i>Doll of a curseborn bairn from the Erdtree's royal line. Use to unleash many wraiths that chase down foes. Omen babies born of royalty do not have their horns excised, but instead are kept underground, unbeknownst to anyone, imprisoned for eternity. These memorial fetishes are fashioned in secret.</i>",
        effect: "This bairn has 3 charges. As an action, you can expend one charge to draw on the memories of Morgott's imprisonment in the sewers to create six wraiths that hunt down targets within 120 feet of you. You can have them target one or several.\n\nMake a ranged spell attack for each wraith with a +10 bonus to hit. On a hit, the target takes 11 (3d6) necrotic damage.\n\nThe bairn regains 1d3 expended charges daily at dawn."
    },
    {
        name: "Rejuvenating Boluses",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Black boluses made of cave moss. Blight accumulates slowly, causing instant death once the threshold is reached. Take one of these in a timely fashion to avoid such an event.</i>",
        recipe: "2 Herba, 1 Cave Moss, 1 Golden Centipede\nFound in: Missionary's Cookbook [7]",
        effect: "Consuming these boluses reduces your levels of exhaustion by 1."
    },
    {
        name: "Ritual Shield Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A talisman patterned after shields used in ritual combat held to honor the Erdtree. Raises defense when HP is at maximum. The practice had died out by the age of King Consort Radagon, but remains of the arenas where ritual combat took place can still be found in every land.</i>",
        effect: "While your hit points are equal to your maximum hit points, your AC increases by 2."
    },
    {
        name: "Ritual Sword Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>A talisman patterned after swords used in ritual combat held to honor the Erdtree. Raises attack power when HP is at maximum. The practice had died out by the age of King Consort Radagon, but remains of the arenas where ritual combat took place can still be found in every land.</i>",
        effect: "While your hit points are equal to your maximum hit points, your attack bonus with melee weapon attacks increases by 2."
    },
    {
        name: "Rot Ammunition",
        type: "Ammunition",
        rarity: "Rare",
        craftable: true,
        description: "<i>Arrow whittled from animal bones. The tip is daubed with rot. Afflicts targets with scarlet rot. Craftable item.</i>",
        recipe: "1 Beast Carcass, 1 Aeonian Butterfly (Yields 10)\nFound in: Nomadic Warrior's Cookbook [15]",
        effect: "When a target is hit by a ranged weapon attack using this piece of magical ammunition, the target must succeed on a DC 13 Constitution saving throw or be afflicted with scarlet rot until the end of its next turn. Once it hits a target, the ammunition is no longer magical."
    },
    {
        name: "Royal Remains Set",
        type: "Medium Armor (Scale Mail)",
        rarity: "Rare",
        craftable: false,
        description: "<i>Armory graces with gold human bones. Worn by the unspeaking adherent of Sir Gideon the All-Knowing. It is said that the bones belong to an ancient lord - the soulless king. The lord of the lost and desperate, who was known as Ensha.</i>",
        effect: "While wearing this armor, if you go for a minute without taking damage and your hit points are below 20% of your maximum HP, your hit points increase to that amount."
    },
    {
        name: "Rune Arc",
        type: "Consumable",
        rarity: "Very Rare",
        craftable: false,
        description: "<i>A shard of the shattered Elden Ring. Grants the blessing of an equipped Great Rune upon use. The lower arc of the Elden Ring is held to be the basin in which its blessings pool. Perhaps this shard originates from that very arc.</i>",
        effect: "As an action, you may crush this rune and activate the latent potential of a Great Rune that you possess. The effects of the Great Rune lasts until you finish a long rest. Your Sanity score also increases by one when you activate the arc."
    },
    {
        name: "Sacred Scorpion Charm",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "A talisman carried by assassins who strike unseen. Patterned on a scorpion freshly shed of its exoskeleton, its claws seizing a heart with a blessed glow. Raises holy attack power, but lowers damage negation.",
        effect: "When you damage a creature, you can roll one additional damage die when determining the radiant damage the target takes. Radiant damage resistance and immunity you have is negated."
    },
    {
        name: "Sacrificial Twig",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "A talisman fashioned from a dried twig, so slender that it might snap at the slightest touch. Prevent rune loss upon death, but will be lost itself in exchange. Believed to be a twig pruned from the Erdtreelong, long ago.",
        effect: "When you die while wearing this talisman, it destroys itself. You do not lose any Sanity, or suffer any other penalties you otherwise would on death."
    },
    {
        name: "Scarab Helm",
        type: "Medium Armor (Hide)",
        rarity: "Rare",
        craftable: false,
        description: "<i>Scarab worn directly on the head. These scarabs roll clumps of magical essence during their labors. As a scarab approaches death, it abandons its rolled treasure and stretches its wings wide for long journey to its home nest. Each scarab collects different kinds of magical detritus, conferring special properties on the wearer.</i>",
        effect: "Depending on the type of scarab worn, you gain one of the following benefits:\n\n• Ash-of-War: Your weapon skills cost 1 less SP to activate.\n• Cerulean Tear: You regain an additional 3 SP when you drink from a flask of cerulean tears.\n• Crimson Tear: You regain an additional 5 hit points when you drink from a flask of crimson tears.\n• Glintstone: Sorceries cost 1 less SP for you to cast.\n• Incantation: Incantations cost 1 less SP for you to cast."
    },
    {
        name: "Scriptstone",
        type: "Consumable",
        rarity: "Common",
        craftable: true,
        recipe: "1 Ruin Fragment\nFound in: Missionary's Cookbook [2]",
        description: "Ruin Fragment with a cipher inscription. Craftable item. Uses FP to reveal more messages from other worlds. Words are gregarious things, drawn to one another much as people are.",
        effect: "You can crush this stone in your hand, revealing messages from other worlds to help you along your journey. The messages may tell of traps nearby, hidden rooms, or ambushes as the DM determines. In the absence of nearby points of interest, the messages may just be words of encouragement or remarks about the area in general."
    },
    {
        name: "Shabriri's Woe",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "Disturbing likeness of a man whose eyes have been gouged out. The corners of his mouth are upturned in an almost flirtatious manner. Constantly attracts enemies' aggression. It is said that the man, named Shabriri, had his eyes gouged out as punishment for the crime of slander, and, with time, the blight of the flame of frenzy came to dwell in the empty sockets.",
        effect: "While wearing this talisman, you have advantage on saving throws to avoid the stunned condition caused by spells you cast.\n\nCurse: This talisman is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the talisman, keeping it within reach at all times. You also have disadvantage on Stealth checks."
    },
    {
        name: "Shard Of Alexander",
        type: "Talisman",
        rarity: "Legendary",
        craftable: false,
        description: "Shard of the late Alexander, a shattered warrior jar. Greatly boosts the attack power of skills. Scraps of stewed flesh cling to the shard, and tatters of ornaments can be seen mingled within the slime. Relics of a red-haired champion, it would seem.",
        effect: "When you activate a weapon skill, you have advantage on the attack rolls you make until the end of the current turn."
    },
    {
        name: "Shattershard Ammunition",
        type: "Ammunition",
        rarity: "Uncommon",
        craftable: true,
        recipe: "3 Beast Carcass, 2 Cracked Crystal\nFound in: Nomadic Warrior's Cookbook [11]",
        description: "Arrow whittled from animal bones tipped with a shard of crystal. Creates a resonating noise at the point of impact. Craftable item.",
        effect: "When a target is hit by a ranged weapon attack using this piece of magical ammunition, the target must succeed on a DC 13 Constitution saving throw or be afflicted with scarlet rot until the end of its next turn. Once it hits a target, the ammunition is no longer magical."
    },
    {
        name: "Shield Grease",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        recipe: "1 Root Resin, 1 Silver Tear Husk, 1 Crystal Bud\nFound in: Glintstone Craftsman's Cookbook [4]",
        description: "Solidified grease made from a mixture of magically resonant materials. Craftable item. Coats left-hand armament, boosting guarding ability and all forms of damage negations. Primarily used on shields.",
        effect: "As an action, you spread this grease across a shield you are wielding. For one minute, the shield's AC bonus increases by 1.\n\nShield greases can only be applied to common, uncommon, or rare shields. Only one shield grease can be applied to a shield at a time."
    },
    {
        name: "Silver Tear Mask",
        type: "Medium Armor (Hide)",
        rarity: "Rare",
        craftable: false,
        description: "Mask fashioned from the corpse of a formless Silver Tear, supported by its hardened, shed husk. To imitate the imitator is a cunning play indeed.",
        effect: "While wearing this helm, your Charisma score increases by 1 and you take a -1 penalty to weapon attack rolls."
    },
    {
        name: "Snow Witch Set",
        type: "Light Armor (Padded)",
        rarity: "Rare",
        craftable: false,
        description: "Witch's robe in the color of snow. Once worn by the snowy crone who the young Ranni encountered deep in the woods. She was a witch, and well versed in cold sorceries. It is said that the doll that houses Ranni's soul was modeled after her. That old witch was Ranni's secret mentor.",
        effect: "While wearing these robes, creatures have disadvantage on saving throws against being frostbitten by sorceries you cast."
    },
    {
        name: "Spark Aromatic",
        type: "Consumable",
        rarity: "Very Rare",
        craftable: true,
        recipe: "1 Perfume Bottle, 1 Altus Bloom, 1 Miranda Powder\nFound in: Perfumer's Cookbook [1]",
        description: "Art of the perfumers who fought In the Shattering. Though fire was prohibited to those who served the Erdtree, this rule was forgotten as the war drew ever on.",
        effect: "You may take this aromatic into your mouth, spewing out a spray of flammable sparks in a 15-foot cone in front of you. Each creature in the area must make a DC 15 Dexterity saving throw. A creature takes 14 (4d6) fire damage on a failed save, or half as much damage on a successful one."
    },
    {
        name: "Spear Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "A talisman depicting a spear and a soldier. Enhances the counter attacks that are unique to thrusting weapons. Spears are standard weapons for soldiers in the Lands Between. They made it possible to respond to a ferocious foe with an equally ferocious counterattack.",
        effect: "While wearing this talisman and a creature misses you with an attack, you can use your reaction to make a melee weapon attack against the creature."
    },
    {
        name: "Spectral Steed Whistle",
        type: "Tool",
        rarity: "Unique",
        craftable: false,
        description: "A delicate goldwork ring. Can be used as a finger whistle. Sound the whistle to summon and ride Torrent, the spectral steed.",
        effect: "This whistle is used to summon a spectral steed named Torrent. As a bonus action, you may blow the whistle, causing Torrent to appear in the nearest unoccupied space. You may choose to summon Torrent underneath you already mounted. By using a bonus action to use the whistle again, you cause Torrent to return to the ether. Torrent regains all of his lost hit points after the whistle's owner finishes a long rest.\n\nIf Torrent is reduced to 0 hit points, he vanishes immediately. The whistle can be used to summon Torrent afterwards by expending a charge of the Flask of Crimson Tears."
    },
    {
        name: "Spellblade Set",
        type: "Light Armor (Leather)",
        rarity: "Uncommon",
        craftable: false,
        description: "Glintstone sorcerer Rogier's traveling attire, graced with an intricate, aristocratic decoration. Strengthens glintstone sorcery skills. Rogier spent his entire life behaving with utter detachment. No one noticed the anger, grief, regret, or fear that existed along with it.",
        effect: "While wearing this armor, when you use a weapon skill that deals force damage, you may roll an additional damage die and add it to one of the damage rolls."
    },
    {
        name: "Spelldrake Talisman",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "Talisman depicting a blue ancient dragon. Boosts magic damage negation. The ancient dragons, who ruled in the prehistoric era before the Erdtree, would protect their lord as a wall of living rock. And so it is that the shape of the dragon has become symbolic of all manner of protections.",
        effect: "You have resistance to force damage while wearing this talisman."
    },
    {
        name: "Spellproof Dried Liver",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        recipe: "3 Rowa Fruit, 1 Beast Carcass, 2 Shimmering Firefly\nFound in: Nomadic Warrior's Cookbook [11]",
        description: "Cured animal liver, dried out after pickling in a blue medicinal solution. Craftable item. Temporarily boosts magic damage negation, improving damage mitigation against attacks imbued with magic.",
        effect: "Consuming this meat invigorates the body, granting the user resistance to force damage for 1 minute."
    },
    {
        name: "St. Trina's Ammunition",
        type: "Ammunition",
        rarity: "Rare",
        craftable: true,
        recipe: "1 Beast Carcass, 1 Trina's Lily (Yields 10)\nFound in: Fevor's Cookbook [2]",
        description: "Arrow carved to resemble a withered water lily. Afflicts targets with a powerful sleep effect. Priests of St. Trina use these arrows to spread their teachings. The sweet oblivion of sleep can become quite the habit.",
        effect: "When this ammunition deals damage to a creature, it must succeed on a DC 13 Wisdom saving throw or fall unconscious until the end of its next turn, until the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake.\n\nUndead and creatures immune to being charmed aren't affected by this spell."
    },
    {
        name: "Stalwart Horn Charm",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "An accoutrement worn by the ancestral followers. Raises robustness. (Robustness governs resistance to blood loss and frost.) Said to be a budding horn. The ancestral followers believe that the horns of a long-lived beast continue to bud like antlers, over and over again, until the beast one day becomes an ancestral spirit.",
        effect: "While wearing this talisman, you have advantage on saving throws against Bleed and frostbite."
    },
    {
        name: "Stanching Boluses",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        recipe: "1 Herba, 1 Cave Moss, 1 Land Octopus Ovary\nFound in: Nomadic Warrior's Cookbook [7]",
        description: "Red boluses made from cave moss. Blood loss escalates gradually. Take one of these in timely fashion to avoid such an event.",
        effect: "As a reaction, a creature afflicted with bleed can consume these boluses to negate the Bleed effect before they make their saving throw."
    },
    {
        name: "Stargazer Heirloom",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "Talisman depicting a blue ancient dragon. Boosts magic damage negation. The ancient dragons, who ruled in the prehistoric era before the Erdtree, would protect their lord as a wall of living rock. And so it is that the shape of the dragon has become symbolic of all manner of protections.",
        effect: "Your Intelligence score is 19 while you wear this talisman. It has no effect on you if your Intelligence is already 19 or higher without it."
    },
    {
        name: "Starlight Shards",
        type: "Consumable",
        rarity: "Rare",
        craftable: false,
        description: "An ephemeral sliver that gives off a pale blue glow. What remains of a passing flash of starlight. A prized item that was once used in the Eternal City as an ingredient in intoxicating draughts.",
        effect: "As an action, you can crush this cerulean shard, destroying it in the process. For the next minute, you regain 1 SP at the beginning of your turn. This can refill either your normal pool of spell points or your martial spell point pool if you have one."
    },
    {
        name: "Starscourge Heirloom",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "A talisman engraved with a scene from a heroic tale. Raises strength. The mightiest hero of the demigods confronted the falling stars alone—and thus did he crush them, his conquest sealing the very fate of the stars.",
        effect: "Your Strength score is 19 while you wear this talisman. It has no effect on you if your Strength is already 19 or higher without it."
    },
    {
        name: "Stormwing Ammunition",
        type: "Ammunition",
        rarity: "Uncommon",
        craftable: true,
        recipe: "1 Beast Carcass, 1 Stormhawk Feather\nFound in: Nomadic Warrior's Cookbook [10]",
        description: "Arrow whittled from animal bones fletched with stormhawk feathers. Craftable item. Flies enshrouded in storm winds, breaking enemy stances and guards with ease.",
        effect: "A creature hit by this ammunition must succeed on a DC 12 Strength saving throw or be knocked prone."
    },
    {
        name: "Taker's Cameo",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "A talisman engraved with a stern likeness of Praetor Rykard, master of Volcano Manor. Restores HP upon defeating enemies. When Rykard turned to heresy, taking by force became the rule. The gods themselves were no different, after all.",
        effect: "While you are wearing this talisman and you reduce a creature to 0 hit points, you regain hit points equal to the number of their hit dice."
    },
    {
        name: "Talisman Pouch",
        type: "Tool",
        rarity: "Very Rare",
        craftable: false,
        description: "Small, withered bag, knitted by hand. Bestowed upon the ruling lord, or those attempting to become lord, by the elderly Finger Reader. As the voices of the Two Fingers, Finger Readers are said to live lives eternal, and one is even supposed to have served as a wetnurse to royalty.",
        effect: "While this pouch is on your person, you may attune to an additional magic item."
    },
    {
        name: "Telescope",
        type: "Tool",
        rarity: "Common",
        craftable: false,
        description: "Astrology tool used by members of the Carian royal family. A stolen part of a larger instrument. During the age of the Erdtree, Carian astrology withered on the vine. The fate once writ in the night skies had been fettered by the Golden Order.",
        effect: "Objects viewed through a telescope are magnified to twice their size."
    },
    {
        name: "Thawfrost Boluses",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        recipe: "1 Herba, 1 Cave Moss, 1 Crab Eggs\nFound in: Nomadic Warrior's Cookbook [16]",
        description: "Ice-hued boluses made from cave moss. Craftable item. Alleviates buildup of frost and cures frostbite ailments.",
        effect: "A creature that consumes these boluses cures frostbite if they are afflicted with it."
    },
    {
        name: "Twinblade Talisman",
        type: "Talisman",
        rarity: "Uncommon",
        craftable: false,
        description: "A talisman depicting a twinblade and a confessor. Enhances the final hit ending a chain of attacks. The twinblade technique is a tradition of the confessors, who closely guard the secret of how they preserve the momentum of their attacks. Thus is the final strike of their onslaught all the more deadly.",
        effect: "When you miss with an attack on your turn while wearing this talisman, you have advantage on the next attack roll you make during the same turn."
    },
    {
        name: "Twinned Set",
        type: "Heavy Armor (Plate)",
        rarity: "Rare",
        craftable: false,
        description: "Armor depicting entwined twins of gold and silver. The two known as D are inseparable twins. They are of two bodies and two minds, but one single soul. Not once do they stand together; not one word do they speak to one another. Perhaps this armor longs to find its way to the other D.",
        effect: "While you wear this armor, you have advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious."
    },
    {
        name: "Twinsage Glintstone Crown",
        type: "Light Armor (Padded)",
        rarity: "Rare",
        craftable: false,
        description: "One of the glintstone crowns bestowed upon Raya Lucaria scholars whose pursuits were deemed worthy. Greatly increases intelligence to the detriment of HP and stamina. Scholars of the Twinsage Conspectus were the elites of the academy, permitted to study and excel in sorceries of all kinds.",
        effect: "While wearing this glintstone crown, your Intelligence score increases by 2 (maximum of 20) and your Constitution decreases by 2 (minimum of 1)."
    },
    {
        name: "Two Fingers Heirloom",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "A talisman engraved with the legend of the Two Fingers. Raises faith. Fingers cannot speak, yet these are eloquent. Persistently they wriggle, spelling out mysteries in the air. Thus did we gain the words. The words of our faith.",
        effect: "Your Wisdom score is 19 while you wear this talisman. It has no effect on you if your Wisdom is already 19 or higher without it."
    },
    {
        name: "Unalloyed Gold Needle",
        type: "Tool",
        rarity: "Legendary",
        craftable: false,
        description: "An intricately crafted needle of unalloyed gold. Once snapped in half, it has been repaired by Sage Gowry. A ritual implement crafted to ward away the meddling of outer gods, it is thought capable of forestalling the incurable rotting sickness. \"Now, all you need to do is deliver the needle to Millicent, convalescing in the church atop the cliff just beyond Sellia.\"",
        effect: ""
    },
    {
        name: "Uplifting Aromatic",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        recipe: "1 Perfume Bottle, 1 Altus Bloom, 1 Cave Moss, 1 Silver Tear Husk, 1 Arteria Leaf\nFound in: Perfumer's Cookbook [1]",
        description: "Art of the perfumers who fought in the Shattering. Craftable with a perfume bottle. Uses to raise the attack power of the user and nearby allies while also reducing the damage from one incoming attack by half. This aromatic has an extremely potent morale-raising effect that makes those accustomed to it fearless in the face of death. It was this influence that made the perfumers exceptional commanders.",
        effect: "You open this perfume bottle, scattering its contents into the air around you. Glittering dust surrounds each creature within five feet of you, becoming an opalescent sheen. The next time a shrouded target would take damage within the next minute, that damage is reduce to 1 and this effect ends."
    },
    {
        name: "Viridian Amber Medallion",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "A medallion with viridian amber inlaid. Boosts maximum stamina. the Erdtree's old sap becomes amber, treasured as the most precious of jewels in the age of Godfrey, the first Elden Lord. A primordial life energy resides inside.",
        effect: "Your Constitution score is 19 while you wear this talisman. It has no effect on you if your Constitution is already 19 or higher without it."
    },
    {
        name: "War Surgeon Set",
        type: "Light Armor (Padded)",
        rarity: "Uncommon",
        craftable: false,
        description: "Bloodstained white gown of the war surgeons who were effectively mercy killers. Of the surgeons that were abducted by the Lord of Blood none were able to tame the accursed blood. None but Varré, that is; though he was an exception.",
        effect: "When a creature within 5 feet of you fails a saving throw against Bleed while you wear this armor, you may use your reaction to increase the damage dealt by 1 of the target's Hit Die."
    },
    {
        name: "Warming Stone",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        recipe: "1 Erdleaf Flower, 1 Smoldering Butterfly, 1 Sanctuary Stone\nFound in: Nomadic Warrior's Cookbook [19]",
        description: "Ruin Fragment blessed with an incantation of the Two Fingers. Craftable item. Used to generate warmth, continuously restoring the HP of those nearby. It's said that the Erdtree was once as warm as the gentle sun, and would gradually heal all who bathed in its rays.",
        effect: "A warm glow emanates from this stone after you place it on the ground. For 1 minute afterwards, any creature who ends their turn within 5 feet of the stone regains 1 hit point."
    },
    {
        name: "Warrior Jar Shard",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "Shard of a shattered warrior jar. Boosts the attack power of skills. Scraps of stewed flesh cling to the shard, and tatters of ornaments can be seen mingled within the slime. Relics of ancient royal warriors, perhaps.",
        effect: "When you make an attack while activating a weapon skill, you have advantage on the attack roll."
    },
    {
        name: "Winged Sword Insignia",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "A talisman depicting a raised prosthetic blade. An honor bestowed upon the knights who fought alongside Malenia the Severed. Raises attack power with successive attacks. The wings symbolize Malenia and her undefeated prowess. Though she never knew relief from the accursed rot she was born into, her blade was forever beautiful - and relentless.",
        effect: "When you hit a creature with a weapon attack on your turn, your next attack this turn deals +1 damage if it hits. This effect stacks to a maximum of a +3 damage bonus."
    },
    {
        name: "Witch's Glintstone Crown",
        type: "Light Armor (Padded)",
        rarity: "Rare",
        craftable: false,
        description: "One of the glintstone crowns bestowed upon Raya Lucaria scholars whose pursuits were deemed worthy. This gentle-looking crown was granted to a scholar who excelled in her studies, which also merited the title of \"witch.\"",
        effect: "While wearing this glintstone crown, your Intelligence score increases by 1 (maximum of 20) and your Constitution decreases by 1 (minimum of 1)."
    },
    {
        name: "Wraith Calling Bell",
        type: "Tool",
        rarity: "Rare",
        craftable: false,
        description: "Bell used by worshippers of revenants. Ring bell to summon prowling wraiths. Wraiths are said to be the vengeful spirits of those who died when cursed.",
        effect: "This bell has 3 charges. As a bonus action, you can expend one charge to call a wraith from beyond the veil that hunts down a target within 30 feet of you. Make a ranged spell attack for each wraith with a +5 bonus to hit. On a hit, the target takes 5 (2d4) necrotic damage."
    },
    {
        name: "Outer God Heirloom",
        type: "Talisman",
        rarity: "Rare",
        craftable: false,
        description: "<i>AA talisman engraved with the lore of an outer god. The clan, who lost everything in the great fires, peered upon the corpse of their ancestor, normally an act of sanctity, and saw in its shadow a twisted deity. The clan had suffered such torment that the horrible thing was taken as an object of worship</i>",
        effect: "Your Charisma score is 19 while you wear this talisman. It has no effect on you if your Charisma is already 19 or higher without it."
    },
    {
        name: "Academy Magic Pot",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Ritual Pot, 2 Shimmering Firefly, 1 Old Fang\nFound in: Glintstone Craftsman's Cookbook [8]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, the target takes 21 (6d6) force damage."
    },
    {
        name: "Albinauric Pot",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Ritual Pot, 2 Mushroom, 1 Albinauric Bloodclot\nFound in: Glintstone Craftsman's Cookbook [3]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, the target cannot restore hit points using a flask of crimson tears, nor restore spell points using a flask of cerulean tears."
    },
    {
        name: "Alluring Pot",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Ritual Pot, 1 Albinauric Bloodclot\nFound in: Nomadic Warrior's Cookbook [21]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nEach Humanoid within 30 feet of the pot must succeed on a DC 14 Wisdom saving throw or be compelled to move to the point that the pot landed. Creatures in combat automatically succeed on the save, except for demi-humans."
    },
    {
        name: "Ancient Dragonbolt Pot",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Ritual Pot, 2 Mushroom, 1 Fulgurbloom, 1 Gravel Stone\nFound in: Ancient Dragon Apostle's Cookbook [4]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, the target takes lightning damage equal to 21 (6d6) + your Charisma modifier. Whether the attack hits or misses, the target and each other creature within five feet of it must succeed on a DC 17 Dexterity saving throw or take lightning damage equal to 10 (3d6) + your Charisma Modifier."
    },
    {
        name: "Beastlure Pot",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Ritual Pot, 1 Beast Carcass, 2 Beast Carcass\nFound in: Nomadic Warrior's Cookbook [5]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nEach Beast within 30 feet of the pot must succeed on a DC 14 Wisdom saving throw or be compelled to move to the point that the pot landed."
    },
    {
        name: "Blood Grease",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Solidified grease made from a mixture of materials. Craftable item. Coats armament, adding damage to attacks. The effect lasts only for a short time.</i>",
        recipe: "1 Root Resin, 1 Bloodrose\nFound in: Nomadic Warrior's Cookbook [6]",
        effect: "As an action, you spread this grease across a weapon you are wielding. Weapon greases can only be applied to weapons that deal only bludgeoning, piercing, or slashing damage. Only one weapon grease can be applied to a weapon at a time. The grease remains on the weapon for a number of rounds equal to your proficiency modifier. The weapon inflicts Bleed 1 on a hit."
    },
    {
        name: "Cursed-Blood Pot",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Ritual Pot, 2 Mushroom, 1 Beast Carcass, 1 Bloodrose\nFound in: Nomadic Warrior's Cookbook [12]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nSix wraiths burst out of the shattered pot, each pursuing a randomly determined enemy creature within 20 feet of the pot. Each wraith makes an attack roll against its target with +8 to hit, dealing 7 (2d6) necrotic damage on a hit."
    },
    {
        name: "Dragonwound Grease",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        description: "<i>Solidified grease made from a mixture of materials. Craftable item. Coats armament, adding damage to attacks. The effect lasts only for a short time.</i>",
        recipe: "1 Root Resin, 1 Beast Carcass, 1 Gravel Stone\nFound in: Ancient Dragon Apostle's Cookbook [3]",
        effect: "As an action, you spread this grease across a weapon you are wielding. Weapon greases can only be applied to weapons that deal only bludgeoning, piercing, or slashing damage. Only one weapon grease can be applied to a weapon at a time. The grease remains on the weapon for a number of rounds equal to your proficiency modifier. When you hit a Dragon with an attack with the weapon, it takes an additional 16 (3d10) of the weapon's damage type."
    },
    {
        name: "Fetid Pot",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Cracked Pot, 1 Mushroom, 1 Golden Dung\nFound in: Nomadic Warrior's Cookbook [4]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The poisoned creature takes 4 (1d6) poison damage at the start of their turns and can make an additional saving throw at the end of their turns, ending the condition on a success. When you throw the pot, you must succeed on a DC 14 Constitution saving throw or be poisoned until the end of your next turn."
    },
    {
        name: "Fire Grease",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Solidified grease made from a mixture of materials. Craftable item. Coats armament, adding damage to attacks. The effect lasts only for a short time.</i>",
        recipe: "1 Root Resin, 1 Smoldering Butterfly\nFound in: Armorer's Cookbook [1]",
        effect: "As an action, you spread this grease across a weapon you are wielding. Weapon greases can only be applied to weapons that deal only bludgeoning, piercing, or slashing damage. Only one weapon grease can be applied to a weapon at a time. The grease remains on the weapon for a number of rounds equal to your proficiency modifier. The weapon deals an additional 4 (1d6) fire damage on a hit."
    },
    {
        name: "Fire Pot",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "Requires 1 Cracked Pot.\nFound in: Multiple Cookbooks",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, the target takes 11 (3d6) fire damage. Whether the attack hits or miss, the target and each other creature within five feet of it must succeed on a DC 13 Dexterity saving throw or take 4 (1d6) fire damage."
    },
    {
        name: "Freezing Grease",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Solidified grease made from a mixture of materials. Craftable item. Coats armament, adding damage to attacks. The effect lasts only for a short time.</i>",
        recipe: "1 Root Resin, 1 Rimed Crystal Bud\nFound in: Glintstone Craftsman's Cookbook [2]",
        effect: "As an action, you spread this grease across a weapon you are wielding. Weapon greases can only be applied to weapons that deal only bludgeoning, piercing, or slashing damage. Only one weapon grease can be applied to a weapon at a time. The grease remains on the weapon for a number of rounds equal to your proficiency modifier. When you hit a creature with an attack with the weapon, it must succeed on a DC 13 Constitution saving throw or be frostbitten until the end of its next turn."
    },
    {
        name: "Freezing Pot",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Ritual Pot, 2 Rimed Crystal Bud\nFound in: Glintstone Craftsman's Cookbook [6]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, the target and each creature within 5 feet of it must succeed on a DC 15 Constitution saving throw or be frostbitten until the end of their next turn."
    },
    {
        name: "Giantsflame Fire Pot",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Ritual Pot, 2 Fire Blossom\nFound in: Armorer's Cookbook [7]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, the target takes fire damage equal to 21 (6d6) + your Wisdom Modifier. Whether the attack hits or misses, the target and each other creature within five feet of it must succeed on a DC 13 Dexterity saving throw or take fire damage equal to 7 (2d6) + your Wisdom Modifier."
    },
    {
        name: "Holy Grease",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Solidified grease made from a mixture of materials. Craftable item. Coats armament, adding damage to attacks. The effect lasts only for a short time.</i>",
        recipe: "1 Root Resin, 1 Tarnished Golden Sunflower\nFound in: Missionary's Cookbook [4]",
        effect: "As an action, you spread this grease across a weapon you are wielding. Weapon greases can only be applied to weapons that deal only bludgeoning, piercing, or slashing damage. Only one weapon grease can be applied to a weapon at a time. The grease remains on the weapon for a number of rounds equal to your proficiency modifier. The weapon deals an additional 4 (1d6) radiant damage on a hit."
    },
    {
        name: "Holy Water Pot",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Cracked Pot, 1 Mushroom, 1 Tarnished Blossom\nFound in: Missionary's Cookbook [1]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, an undead target takes 11 (3d6) radiant damage and cannot reanimate if killed within the next minute."
    },
    {
        name: "Lightning Grease",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Solidified grease made from a mixture of materials. Craftable item. Coats armament, adding damage to attacks. The effect lasts only for a short time.</i>",
        recipe: "1 Root Resin, 1 Fulgurbloom\nFound in: Ancient Dragon Apostle's Cookbook [1]",
        effect: "As an action, you spread this grease across a weapon you are wielding. Weapon greases can only be applied to weapons that deal only bludgeoning, piercing, or slashing damage. Only one weapon grease can be applied to a weapon at a time. The grease remains on the weapon for a number of rounds equal to your proficiency modifier. The weapon deals an additional 4 (1d6) lightning damage on a hit."
    },
    {
        name: "Lightning Pot",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Cracked Pot, 1 Mushroom, 1 Fulgurbloom\nFound in: Ancient Dragon Apostle's Cookbook [2]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, the target takes 11 (3d6) lightning damage. Whether the attack hits or miss, the target and each other creature within five feet of it must succeed on a DC 13 Dexterity saving throw or take 4 (1d6) lightning damage."
    },
    {
        name: "Magic Grease",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Solidified grease made from a mixture of materials. Craftable item. Coats armament, adding damage to attacks. The effect lasts only for a short time.</i>",
        recipe: "1 Root Resin, 1 Crystal Bud\nFound in: Glintstone Craftsman's Cookbook [5]",
        effect: "As an action, you spread this grease across a weapon you are wielding. Weapon greases can only be applied to weapons that deal only bludgeoning, piercing, or slashing damage. Only one weapon grease can be applied to a weapon at a time. The grease remains on the weapon for a number of rounds equal to your proficiency modifier. The weapon deals an additional 4 (1d6) force damage on a hit."
    },
    {
        name: "Magic Pot",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Cracked Pot, 2 Shimmering Firefly\nFound in: Glintstone Craftsman's Cookbook [4]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, the target takes 14 (4d6) force damage."
    },
    {
        name: "Oil Pot",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Cracked Pot, 1 Mushroom\nFound in: Nomadic Warrior's Cookbook [17]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, the target is covered in oil and takes an additional 14 (4d6) fire damage the next time it takes fire damage in the next minute."
    },
    {
        name: "Poison Grease",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Solidified grease made from a mixture of materials. Craftable item. Coats armament, adding damage to attacks. The effect lasts only for a short time.</i>",
        recipe: "1 Root Resin, 1 Poisonbloom\nFound in: Nomadic Warrior's Cookbook [8]",
        effect: "As an action, you spread this grease across a weapon you are wielding. Weapon greases can only be applied to weapons that deal only bludgeoning, piercing, or slashing damage. Only one weapon grease can be applied to a weapon at a time. The grease remains on the weapon for a number of rounds equal to your proficiency modifier. The weapon deals an additional 4 (1d6) poison damage on a hit."
    },
    {
        name: "Poison Pot",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Cracked Pot, 1 Mushroom, 1 Poisonbloom\nFound in: Nomadic Warrior's Cookbook [14]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, the target takes 11 (3d6) poison damage. When you throw the pot, you must succeed on a DC 12 Constitution saving throw or be poisoned until the end of your next turn."
    },
    {
        name: "Rancor Pot",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Cracked Pot, 2 Grave Violet\nFound in: Nomadic Warrior's Cookbook [9]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nFour wraiths burst out of the broken pot, each pursuing a randomly determined enemy creature within 20 feet of the shattered pot. Each wraith makes an attack against its target with +6 to hit, dealing 7 (2d6) necrotic damage on a hit."
    },
    {
        name: "Redmane Fire Pot",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Ritual Pot, 2 Mushroom, 1 Smoldering Butterfly, 1 Old Fang\nFound in: Armorer's Cookbook [4]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, the target takes 18 (5d6) fire damage. Whether the attack hits or miss, the target and each other creature within five feet of it must succeed on a DC 13 Dexterity saving throw or take 7 (2d6) fire damage."
    },
    {
        name: "Rot Grease",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        description: "<i>Solidified grease made from a mixture of materials. Craftable item. Coats armament, adding damage to attacks. The effect lasts only for a short time.</i>",
        recipe: "1 Root Resin, 1 Aeonian Butterfly\nFound in: Nomadic Warrior's Cookbook [22]",
        effect: "As an action, you spread this grease across a weapon you are wielding. Weapon greases can only be applied to weapons that deal only bludgeoning, piercing, or slashing damage. Only one weapon grease can be applied to a weapon at a time. The grease remains on the weapon for a number of rounds equal to your proficiency modifier. When you hit a creature with an attack with the weapon, it must succeed on a DC 13 Constitution saving throw or be afflicted with scarlet rot until the end of its next turn."
    },
    {
        name: "Rot Pot",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Ritual Pot, 2 Mushroom, 2 Faded Erdleaf Flower, 1 Aeonian Butterfly\nFound in: Nomadic Warrior's Cookbook [22]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, the target and each creature within 5 feet of it must succeed on a DC 15 Constitution saving throw or be afflicted with the Rotting condition until the end of their next turn."
    },
    {
        name: "Sacred Order Pot",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Ritual Pot, 2 Mushroom, 1 Tarnished Golden Sunflower, 1 Golden Centipede\nFound in: Missionary's Cookbook [5]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, an undead target takes 21 (6d6) radiant damage and cannot reanimate if killed within a minute."
    },
    {
        name: "Sleep Pot",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Cracked Pot, 1 Mushroom, 1 Trina's Lily\nFound in: Fevor's Cookbook [1]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, the target is affected as if it was targeted by the sleep spell."
    },
    {
        name: "Soporific Grease",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Solidified grease made from a mixture of materials. Craftable item. Coats armament, adding damage to attacks. The effect lasts only for a short time.</i>",
        recipe: "1 Root Resin, 1 Trina's Lily\nFound in: Fevor's Cookbook [2]",
        effect: "As an action, you spread this grease across a weapon you are wielding. Weapon greases can only be applied to weapons that deal only bludgeoning, piercing, or slashing damage. Only one weapon grease can be applied to a weapon at a time. The grease remains on the weapon for a number of rounds equal to your proficiency modifier. For one minute, when you hit a creature with an attack with the weapon, it must succeed on a DC 10 Wisdom saving throw or be fall unconscious until the end of its next turn, or until the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake."
    },
    {
        name: "Swarm Pot",
        type: "Consumable",
        rarity: "Rare",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Cracked Pot, 1 Mushroom, 1 Golden Dung\nFound in: Nomadic Warrior's Cookbook [24]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, the target suffers from Bleed 2 (DC 15)."
    },
    {
        name: "Volcano Pot",
        type: "Consumable",
        rarity: "Uncommon",
        craftable: true,
        description: "<i>Craftable item prepared using a pot. Pack ingredients inside that produce unique effects when broken afterwards.</i>",
        recipe: "1 Cracked Pot, 2 Volcanic Stone\nFound in: Nomadic Warrior's Cookbook [20]",
        effect: "As an action, you can throw this pot up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the throwing pot as a simple ranged weapon. The pot shatters after being thrown and the empty pot used reforms in the thrower's inventory at the end of their next long rest.\n\nOn a hit, the target takes 14 (4d6) fire damage and a cloud of superheated gas appears in a 5-foot radius sphere around the target until the end of your next turn. Each creature that moves into the area or ends their turn there takes 7 (2d6) fire damage."
    },
    {
        name: "Padded Armor",
        type: "Light Armor (Padded)",
        rarity: "Common",
        craftable: false,
        description: "<i>Standard light armor. Consists of quilted layers of cloth and batting.</i>",
        effect: "Base Armor Class (AC): 11 + Dexterity modifier. Disadvantage on Stealth checks."
    },
    {
        name: "Leather Armor",
        type: "Light Armor (Leather)",
        rarity: "Common",
        craftable: false,
        description: "<i>Standard light armor. The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil.</i>",
        effect: "Base Armor Class (AC): 11 + Dexterity modifier."
    },
    {
        name: "Studded Leather Armor",
        type: "Light Armor (Studded Leather)",
        rarity: "Common",
        craftable: false,
        description: "<i>Standard light armor. Made from tough but flexible leather, studded with metal rivets or spikes.</i>",
        effect: "Base Armor Class (AC): 12 + Dexterity modifier."
    },
    {
        name: "Hide Armor",
        type: "Medium Armor (Hide)",
        rarity: "Common",
        craftable: false,
        description: "<i>Standard medium armor. A crude armor consisting of thick furs and pelts.</i>",
        effect: "Base Armor Class (AC): 12 + Dexterity modifier (max 2)."
    },
    {
        name: "Chain Shirt",
        type: "Medium Armor (Chain Shirt)",
        rarity: "Common",
        craftable: false,
        description: "<i>Standard medium armor. Made of interlocking metal rings, worn between layers of clothing or leather.</i>",
        effect: "Base Armor Class (AC): 13 + Dexterity modifier (max 2)."
    },
    {
        name: "Scale Mail",
        type: "Medium Armor (Scale Mail)",
        rarity: "Common",
        craftable: false,
        description: "<i>Standard medium armor. Consists of a leather coat and leggings covered with overlapping pieces of metal.</i>",
        effect: "Base Armor Class (AC): 14 + Dexterity modifier (max 2). Disadvantage on Stealth checks."
    },
    {
        name: "Breastplate",
        type: "Medium Armor (Breastplate)",
        rarity: "Common",
        craftable: false,
        description: "<i>Standard medium armor. Consists of a fitted metal chest piece worn with supple leather.</i>",
        effect: "Base Armor Class (AC): 14 + Dexterity modifier (max 2)."
    },
    {
        name: "Half Plate",
        type: "Medium Armor (Half Plate)",
        rarity: "Common",
        craftable: false,
        description: "<i>Standard medium armor. Consists of shaped metal plates that cover most of the wearer's body.</i>",
        effect: "Base Armor Class (AC): 15 + Dexterity modifier (max 2). Disadvantage on Stealth checks."
    },
    {
        name: "Ring Mail",
        type: "Heavy Armor (Ring Mail)",
        rarity: "Common",
        craftable: false,
        description: "<i>Standard heavy armor. Leather armor with heavy rings sewn into it.</i>",
        effect: "Base Armor Class (AC): 14. Disadvantage on Stealth checks."
    },
    {
        name: "Chain Mail",
        type: "Heavy Armor (Chain Mail)",
        rarity: "Common",
        craftable: false,
        description: "<i>Standard heavy armor. Made of interlocking metal rings.</i>",
        effect: "Base Armor Class (AC): 16. Strength 13 required. Disadvantage on Stealth checks."
    },
    {
        name: "Splint Armor",
        type: "Heavy Armor (Splint)",
        rarity: "Common",
        craftable: false,
        description: "<i>Standard heavy armor. Made of narrow vertical strips of metal riveted to a backing of leather.</i>",
        effect: "Base Armor Class (AC): 17. Strength 15 required. Disadvantage on Stealth checks."
    },
    {
        name: "Plate Armor",
        type: "Heavy Armor (Plate)",
        rarity: "Common",
        craftable: false,
        description: "<i>Standard heavy armor. Consists of shaped, interlocking metal plates to cover the entire body.</i>",
        effect: "Base Armor Class (AC): 18. Strength 15 required. Disadvantage on Stealth checks."
    }
        
];
