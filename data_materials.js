const materials = [
    {
        name: "Aeonian Butterfly",
        type: "Material",
        rarity: "Rare",
        description: "A butterfly with withered, scarlet wings found in the swamp of Aeonia. Material used for crafting items."
    },
    {
        name: "Albinauric Bloodclot",
        type: "Material",
        rarity: "Rare",
        description: "The thick, coagulated blood of the Ablinaurics. Material used for crafting items."
    },
    {
        name: "Altus Bloom",
        type: "Material",
        rarity: "Rare",
        description: "A golden-tinged flower from a succulent plant that blooms on the Altus Plateau. Material used for crafting items."
    },
    {
        name: "Arteria Leaf",
        type: "Material",
        rarity: "Very Rare",
        description: "Dark red leaves with thick, swollen veins. Material used for crafting items. Exceedingly rare to find. A faint pulse can be felt in the veins. Stirs the blood, providing an enlivening effect."
    },
    {
        name: "Beast Carcass",
        type: "Material",
        rarity: "Common",
        description: "Carcass of a beast. Material used for crafting items. Found by hunting particularly large beasts. Commonly Used to make disposable weapons."
    },
    {
        name: "Bloodrose",
        type: "Material",
        rarity: "Uncommon",
        description: "Blood-slick roses that bloom in festering blood. Material used for crafting items."
    },
    {
        name: "Cave Moss",
        type: "Material",
        rarity: "Common",
        description: "Faintly luminescent moss that grows in dark caves. Material used in crafting items. A fundamental ingredient for medicinal boluses."
    },
    {
        name: "Crab Eggs",
        type: "Material",
        rarity: "Common",
        description: "Eggs of large crabs which dwell in the shallows. Materials used for crafting items."
    },
    {
        name: "Cracked Crystal",
        type: "Material",
        rarity: "Uncommon",
        description: "A cracked, impure, degraded, and altogether unremarkable crystal. Material used for crafting items."
    },
    {
        name: "Cracked Pot",
        type: "Material",
        rarity: "Rare",
        description: "This empty pot somehow mends itself when broken."
    },
    {
        name: "Erdleaf Flower",
        type: "Material",
        rarity: "Common",
        description: "A dusky-yellow flower that has started to fade and wilt. Material used for crafting items."
    },
    {
        name: "Fire Blossom",
        type: "Material",
        rarity: "Uncommon",
        description: "A half-ashen and smoldering flower that blooms on the mountaintops of the Giants. Material used for crafting items."
    },
    {
        name: "Formic Rock",
        type: "Material",
        rarity: "Uncommon",
        description: "Rock formed from solidified giant ant venom. Highly acidic. Material used for crafting items."
    },
    {
        name: "Four-Toed Fowl Foot",
        type: "Material",
        rarity: "Rare",
        description: "Foot of a four-toed fowl. Material used for crafting items. In the Lands Between, having three digits is seen as a bad omen. As such, the rarer four-toed fowl's is a gift of great luck indeed."
    },
    {
        name: "Fulgurbloom",
        type: "Material",
        rarity: "Uncommon",
        description: "Yellow flower that grows in lightning-struck lands. Material used for crafting items. Imbued with traces of lightning's essence."
    },
    {
        name: "Golden Centipede",
        type: "Material",
        rarity: "Rare",
        description: "The golden, desiccated remains of a centipede."
    },
    {
        name: "Golden Dung",
        type: "Material",
        rarity: "Rare",
        description: "Someone's excrement. It has a golden tinge. Material used for crafting items. Gold-tinged excrement is a highly stable substance; it doesn't dry out, nor does it lose its customary warmth or scent. For better or for worse, it remains as it is."
    },
    {
        name: "Grave Violet",
        type: "Material",
        rarity: "Common",
        description: "A purple flower than blooms in graveyards. Material used for crafting items."
    },
    {
        name: "Great Dragonfly Head",
        type: "Material",
        rarity: "Rare",
        description: "Head of a large dragonfly. Material used for crafting items. Long believed to have the ability to neutralize poisons."
    },
    {
        name: "Herba",
        type: "Material",
        rarity: "Common",
        description: "Evergreen leaves that give off a faint light. Material used for crafting items. This very common medicinal plant can be found in thickets and elsewhere."
    },
    {
        name: "Land Octopus Ovary",
        type: "Material",
        rarity: "Rare",
        description: "Puffy, milky white ovary of a land octopus. Material used for crafting items. Land octopuses eat humans in order to bear young, and theirs is the blood that runs through these ovaries."
    },
    {
        name: "Living Jar Shard",
        type: "Material",
        rarity: "Rare",
        description: "A fragment of a living jar, hardened after its death. Material used for crafting items."
    },
    {
        name: "Miquella's Lily",
        type: "Material",
        rarity: "Very Rare",
        description: "A delicate water lily of unalloyed gold that has started to fade and wilt. Material used for crafting items. Exceedingly rare to find."
    },
    {
        name: "Miranda Powder",
        type: "Material",
        rarity: "Uncommon",
        description: "Pollen from a man-eating miranda flower. Material used for crafting items."
    },
    {
        name: "Nascent Butterfly",
        type: "Material",
        rarity: "Very Rare",
        description: "An arcane butterfly with translucent wings. Material used for crafting items. Exceedingly rare to find."
    },
    {
        name: "Perfume Bottle",
        type: "Material",
        rarity: "Very Rare",
        description: "Glass bottles used by perfumers. Used to seal various scent compounds."
    },
    {
        name: "Poisonbloom",
        type: "Material",
        rarity: "Uncommon",
        description: "Flower that grows in toxic terrain. Material used for crafting items. Poisonous, but may also provide the cure."
    },
    {
        name: "Ritual Pot",
        type: "Material",
        rarity: "Very Rare",
        description: "This empty pot somehow mends itself when broken. Special item with greater durability than a cracked pot."
    },
    {
        name: "Root Resin",
        type: "Material",
        rarity: "Rare",
        description: "Resin secreted from the roots of the Great tree. Material used in crafting items. The roots of the Great tree drive far and wide through the earth of the Lands Between. They were once entwined with the roots of the Erdtree, or so they say."
    },
    {
        name: "Rowa Fruit",
        type: "Material",
        rarity: "Common",
        description: "Berry-like red fruits that grow in shrubs. Material used for crafting items. Easily found everywhere in the Lands Between, it is primarily used in preserved foods."
    },
    {
        name: "Ruin Fragment",
        type: "Material",
        rarity: "Common",
        description: "Stone fragment found near places where ruins have fallen from the sky. Can be used for crafting, or simply for throwing at enemies. These shards of stone are believed to have once been part of a temple in the sky. They glow with a faint light from within."
    },
    {
        name: "Shimmering Firefly",
        type: "Material",
        rarity: "Uncommon",
        description: "Firefly that gives off a golden light. Material used in crafting items. Found near bodies of water close to Minor Erdtrees. The light of fireflies is believed to have an alluring magic. Golden light is considered to invite runes."
    },
    {
        name: "Silver Tear Husk",
        type: "Material",
        rarity: "Very Rare",
        description: "A hardened husk shed by a formless life form known as the Silver Tear, found in and around the Eternal City. Material used for crafting items. The Silver Tear makes mockery of life, reborn again and again into imitation. Perhaps, one day, it will be reborn a lord..."
    },
    {
        name: "Slumbering Egg",
        type: "Material",
        rarity: "Rare",
        description: "Owl eggs that will never hatch. Material used for crafting items."
    },
    {
        name: "Smoldering Butterfly",
        type: "Material",
        rarity: "Uncommon",
        description: "An eternally burning butterfly found near wildfires and elsewhere. Material used for crafting items. Serves as the kindling for a number of items."
    },
    {
        name: "Stormhawk Feather",
        type: "Material",
        rarity: "Common",
        description: "A feather from a hawk that lived as one with the storms. Material used for crafting items. These feathers, enveloped in swirling winds, are often used for arrow fletching."
    },
    {
        name: "Strip of White Flesh",
        type: "Material",
        rarity: "Very Rare",
        description: "Thin strips of flesh taken from a bloodless creature. Material used for crafting items. The dried meat toughens the constitution, boosting resistance. It's known for its long-lasting effect."
    },
    {
        name: "Tarnished Golden Sunflower",
        type: "Material",
        rarity: "Rare",
        description: "A large flower that blooms facing the Erdtree. Material used for crafting items. Found near Minor Erdtrees."
    },
    {
        name: "Trina's Lily",
        type: "Material",
        rarity: "Very Rare",
        description: "A pale purple water lily that is on the verge of wilting. Material used for crafting items. Exceedingly rare to find. A symbol of faith in St. Trina. Dulls the senses, preventing agitation."
    },
    {
        name: "Turtle Neck Meat",
        type: "Material",
        rarity: "Rare",
        description: "A splendid, lengthy cut of turtle neck meat. Material used for crafting items. Turtle meat is said to boost virility, but none in the Lands Between seem to have much appetite for it these days. In Lands Between, the urge to reproduce has waned long ago."
    },
    {
        name: "Volcanic Stone",
        type: "Material",
        rarity: "Rare",
        description: "A smoldering rock containing hot gas."
    }
];