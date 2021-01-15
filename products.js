var article = document.getElementById("about_game");
var title = document.getElementById("game_head");


function change(x){
    article.innerHTML = gameInfo[x];
    title.innerHTML = gameHead[x];
}

var gameInfo = [
    "Our story takes place in a city-state called Terrend built into the side of a large moutain " +
    "where the higher up the face of the mountain you live, the higher standard of living you have. " +
    "Your family has lived in the lower sectors, the Rubble Yard, for generations and now struggle " +
    "with the coming plague striking the less fortunate citizens of the lower sectors. With the money " +
    "you can spare, you leave home to purchase medicine for your younger sibling once they become ill. " +
    "After sneaking your way into the middle sector to purchase medicine for the apothecary, you get " +
    "caught up in a series of unfortunate events, framed for stealing the medication, face trial, and " +
    "imprisoned to the Mines. Down below Terrend, you meet other prisoners who have given themselves " +
    "the collective name, \"Gravediggers\" since no one has seen the light of day since imprisonment " +
    "and have to continue digging below the city until their deaths. They have built their own self-" +
    "sufficient community on the first floor above what they call \"The Crypt,\" where monsters and " +
    "ancient traps remain below. However, there is something buried deep in The Crypt that the " +
    "government desparately wants, and if someone were to find it, their life sentence would be lifted. " +
    "With the hope of finding whatever is buried below, you choose to dig and return back to your family " +
    "on the surface.",
    "True to the genre, expect hours of 2D side-scrolling action and exploration. Brave dangerous monsters, " +
    "solve complex dungeons, and discover the mystery behind Terrend and its original civilization. Inspired " +
    "by some of the dev's favorite games, such as: Hollow Knight, Legend of Zelda, and Metroid Fusion " +
    "Metroidvania titles are 2D side-scrolling action adventure games inspired by the original Metroid and " +
    "Castelvania games. Whether you are a veteran or newcomer, Project: Cryptovania will include a multitude " +
    "of game mechanics. Through exploration, you will find new materials to upgrade your gear to make cutting " +
    "through enemies quicker, or perhaps add fire to your weapons and deal damage over time. Your upgrades " +
    "matter as your gear progresses down a large tree of skills and perks, rewarding you for finding the " +
    "secrets The Crypt has to offer.",
    "When you return from the Crypt, you will be able to rest on the first floor of the Mines, named \"The " +
    "Chapel.\" While their, you will be able to spend your collected materials on upgrades for your gear, buy " +
    "consumables to bring with you in The Crypt, and enjoy cutscenes with fellow Gravediggers who may reward " +
    "you for completing quests to trigger their events. ",
    "<h2>TBA</h2> <br> We thank all of those who have chosen to support us and ask for patience so we may " +
    "release a finished and worthwhile experience for all players. Consider aiding development on Kickstarter " +
    "where those who donate enough can receive in-game rewards, as well as a download before the official " +
    "release date!"
];

var gameHead = [
    "Story", "Metroidvania", "Characters", "Official Release Date!" 
]