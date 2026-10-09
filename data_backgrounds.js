const backgrounds = [
    {
        name: "Badlands Warrior",
        description: "When Godfrey was driven from the Lands Between, his Tarnished followers were shunned from grace as well. You are one of the warrior descendants of Godfrey, Tarnished who craved battle in all its forms. You’ve spent your life in the Badlands, wastes far from the Lands Between. Every day of your life was a battle hard fought, until you fell. Grace has called you back to the Lands Between, and your eyes inevitably draw toward the Erdtree, and the throne your liege once sat upon.",
        skillProficiencies: "Athletics, Intimidation",
        toolProficiencies: "Smith’s Tools",
        languages: "One of your choice",
        equipment: "A trophy from a fallen foe, a melee or ranged weapon of your choice, a set of smith’s tools, and commoner’s clothes.",
        sanityMechanics: {
            description: "The lure of battle calls to you every moment. The Erdtree’s grace has given you the opportunity to conquer new foes, but know that the mind was not meant to withstand death eternally.",
            restore: "When you find a Legendary Armament, your Sanity score increases by 1.",
            table: [
                { score: "8-9", effect: "Your weapon attacks deal an additional 1 point of damage." },
                { score: "6-7", effect: "You have advantage on saving throws against the frightened condition." },
                { score: "4-5", effect: "Your weapon attacks deal an additional 1 point of damage." },
                { score: "2-3", effect: "Your armor class increases by 2." },
                { score: "1", effect: "You have resistance to bludgeoning, piercing, and slashing damage." },
                { score: "0", effect: "Your mind gives way into pure battlelust. You wander the Lands Between in search of constant conflict, and become an NPC under the DM’s control." }
            ]
        }
    },
    {
        name: "Bloodsoaked Vagabond",
        description: "Once driven from the Lands Between, many tarnished settled in far-away lands. Their skills in war made them able candidates to war in the Land of Reeds. The Land of Reeds is mired in constant civil conflict, succumbing to blood-soaked madness. You are descended from one of these mercenaries, having fought in the Land of Reeds before being called back by Grace. The blood of your homeland spills from your blades as much as it does from your veins.",
        skillProficiencies: "Stealth, Medicine",
        toolProficiencies: "Weaver’s Tools",
        languages: "One of your choice",
        equipment: "A melee or ranged weapon, a set of weavers tools, and commoners clothes.",
        sanityMechanics: {
            description: "The Erdtree concerns itself with grace, curses, and runes. The power of blood is one of the few that has not been subsumed into the Golden Order. Your journey will assuredly be one stained with blood, so much that you may drown in viscera before reaching your throne.",
            restore: "When you slay another Tarnished, your Sanity score increases by 1.",
            table: [
                { score: "8-9", effect: "You have advantage on Stealth checks." },
                { score: "6-7", effect: "You have advantage on saving throws against Bleed." },
                { score: "4-5", effect: "Weapons you use without Bleed have Bleed 1." },
                { score: "2-3", effect: "Creatures you hit with an attack have disadvantage on saving throws against Bleed until the end of their next turn." },
                { score: "1", effect: "You automatically succeed on saving throws against Bleed." },
                { score: "0", effect: "The allure of blood subsumes your quest for lordship. You bow before the upstart Lord of Blood, becoming an NPC under the DM’s control." }
            ]
        }
    },
    {
        name: "Deathbed Companion",
        description: "Queen Marika the Eternal plucked Destined Death from the Elden Ring. You and your cohorts reject this decision, choosing to live within death instead. You may have been a Deathbed Companion, one who lays with dead nobles so they may be given another chance at life, or you could simply be of the view that sealing death has stagnated the land. In either case, you are shunned by the Erdtree faithful particularly members of the Golden Order who hunt you relentlessly.",
        skillProficiencies: "Persuasion, History",
        toolProficiencies: "Disguise Kit",
        languages: "One of your choice",
        equipment: "A bone of an ancient human that died a true death, a black robe and/or veil, a set of common clothes, and a disguise kit.",
        sanityMechanics: {
            description: "To Live Within Death is to court the Death Prince’s embrace. At your peak, you may use his guidance to stave off death until your appointed time. But as your journey falters, you grow closer to true death in spite of the Erdtree’s grace.",
            restore: "Your Sanity increases by 1 whenever you claim Deathroot.",
            table: [
                { score: "8-9", effect: "You have advantage on death saving throws." },
                { score: "6-7", effect: "You have advantage on saving throws against the Exhausted condition." },
                { score: "4-5", effect: "You have resistance to necrotic damage." },
                { score: "2-3", effect: "Undead creatures are no longer hostile to you, though they may be hostile to others you travel with." },
                { score: "1", effect: "When you roll a death saving throw, you can choose to automatically succeed on the roll instead." },
                { score: "0", effect: "Death blight permeates throughout your body, destroying both your body and spirit permanently." }
            ]
        }
    },
    {
        name: "Dragon Communer",
        description: "The dragons once ruled the skies. Now the few that remain serve the Golden Order. You eschew their teachings, preferring instead to hunt them down. To commune with the dragons is to consume their hearts, eventually taking on their very physiology. But beware; those on the path to dragon communion can be overtaken by their powerful blood.",
        skillProficiencies: "Survival, Nature",
        toolProficiencies: "Leatherworker’s Tools",
        languages: "One of your choice",
        equipment: "A dragon heart, a set of butchering tools such as cleavers and small knives, a sturdy sack made of dragonskin, a set of leatherworkers tools, and commoners clothes.",
        sanityMechanics: {
            description: "To consume a dragon’s heart is a heretical act. The powers it grants are tremendous, but the path of dragon communion curses many to crawl on their bellies in misshapen form for eternity.",
            restore: "Whenever you slay a dragon, your Sanity score increases by 1.",
            table: [
                { score: "8-9", effect: "You have advantage on Survival rolls made to track dragons, and Intelligence checks made to recall information about them." },
                { score: "6-7", effect: "You have advantage on saving throws against dragon attacks and abilities." },
                { score: "4-5", effect: "You have resistance to fire damage." },
                { score: "2-3", effect: "Your spell save DC increases by 1 when casting Dragon Communion incantations." },
                { score: "1", effect: "Your attacks against dragons deal an additional 3d6 damage on a hit." },
                { score: "0", effect: "Your form crumples, giving way to the dragon blood’s transformation. You transform into a Magma Wyrm, losing all mental faculties and becoming an NPC under the DM’s control." }
            ]
        }
    },
    {
        name: "Erdtree Faithful",
        description: "The Golden Order is the central religion of the Lands Between. Its objects of worship include the Elden Ring, the Erdtree, and Queen Marika the Eternal. Marika is seen as the one true god, the vessel for the Elden Ring itself. Your faith still remains despite being driven from the Lands Between so long ago. Your faith devotes your life towards aiding the Two Fingers, driving out Those Who Live in Death, and restoring order by claiming the mantle of Elden Lord.",
        skillProficiencies: "Religion, Arcana",
        toolProficiencies: null,
        languages: "Two of your choice",
        equipment: "Golden order vestments, a set of tomes filled with the Golden Order’s foundations, a sacred seal, and commoners clothes.",
        sanityMechanics: {
            description: "Order has been broken with the Elden Ring. All is not lost, the Ring can be mended and a new lord can take the throne. Your path is to do just that, but beware falling into the same traps as the scores before you.",
            restore: "When you reach a Minor Erdtree, your Sanity score increases by 1.",
            table: [
                { score: "8-9", effect: "You have advantage on Religion and Arcana checks." },
                { score: "6-7", effect: "When you restore hit points to a creature, it regains additional hit points equal to your proficiency modifier." },
                { score: "4-5", effect: "You have advantage on saving throws against the charmed condition." },
                { score: "2-3", effect: "You have resistance to radiant damage." },
                { score: "1", effect: "Once per long rest, when you are reduced to 0 hit points, you can instead drop to 1 hit point." },
                { score: "0", effect: "You understand the perfection of the Golden Order, and that no Tarnished could ever become Elden Lord. You give up on your quest and become an NPC under the DMs control." }
            ]
        }
    },
    {
        name: "Frenzy Apostle",
        description: "The Erdtree stands as the embodiment of supreme order governing the Lands Between. The light you see in your eyes guides you to a different path. You hear whispers of order’s demise, of a world ungoverned by the gods and their vassals. These whispers only grow louder as you near the homeland of your forebears, pointing you towards the Capital. Your questions will be answered there.",
        skillProficiencies: "Perception, Insight",
        toolProficiencies: "Brewer’s Tools, a musical instrument of your choice",
        languages: "One of your choice",
        equipment: "A shabriri grape, a musical instrument of your choice, a set of brewer’s tools, and commoners clothes.",
        sanityMechanics: {
            description: "Each step in the path of Grace leads you closer to the far flame. The Erdtree cannot see into your mind, but the closer you come to the flame, the greater the toll it takes on your psyche.",
            restore: "When you find a Frenzied Flame incantation or a shabriri grape, your Sanity score increases by 1.",
            table: [
                { score: "8-9", effect: "Your passive perception increases by 5." },
                { score: "6-7", effect: "You have advantage on saving throws against the stunned condition." },
                { score: "4-5", effect: "You have resistance to psychic damage." },
                { score: "2-3", effect: "You are immune to the stunned condition." },
                { score: "1", effect: "As a melee action, you can touch a creature and force it to make a DC 15 Wisdom saving throw. The DC of the save is equal to 8 + your proficiency bonus + your Charisma bonus. On a failed save, the creature is stunned until the beginning of your next turn." },
                { score: "0", effect: "Frenzy consumes your mind, rendering you a hollow shell for the vision to puppet. You become an NPC under the DM’s control." }
            ]
        }
    },
    {
        name: "Star Bound",
        description: "The first glintstone sorceries are the scholarly descendant of the astrologers who lived among the giants. The academy of Raya Lucaria was bound to the Erdtree after the Queen Rennala of the Full Moon and Radagon of the Golden Order were wed. In the same way, you are the descendant of those first sorcerers. Your fate is wrought upon the stars, linked to the Carian Royal Family and the visions of the Astral Current.",
        skillProficiencies: "Arcana, History",
        toolProficiencies: "Navigator’s Tools",
        languages: "One of your choice",
        equipment: "A glintstone staff, a set of Navigator’s Tools, a map to the location of a glintstone key, and commoners clothes.",
        sanityMechanics: {
            description: "The movement of the stars has been long halted, and the fate of the glintstone sorcerers has stagnated with it. Your fate is tied to the stars, and your path to lordship may deviate from the one the Two Fingers has laid out for the tarnished. If you tire of obeisance, perhaps freeing the stars will reveal a new age.",
            restore: "When you find a sorcery from a new school, your Sanity score increases by 1.",
            table: [
                { score: "8-9", effect: "Your SP pool increases in size by 2." },
                { score: "6-7", effect: "Your spell attack bonus increases by 1." },
                { score: "4-5", effect: "Your SP pool increases in size by an additional 4." },
                { score: "2-3", effect: "Your spell save DC increases by 1." },
                { score: "1", effect: "When you cast your first spell after a long rest, you may do so without expending a spell slot." },
                { score: "0", effect: "Your mind is swept away by the primeval current, turning you into a graven mass. You become an NPC under the DM's control." }
            ]
        }
    }
];