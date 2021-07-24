var photos = [];
var fileNames = [];
var imageList = [];
var image = [];
var caption = [];
var description = [];
var openList = "<li id='pup'>";
var closeList = "</li>";
var openCaptionTag = "<p id='caption'>";
var closeCaptionTag = "</p>";
var openDescTag = "<p id='description' onclick='showInfo(";
var closeDescTag = "</p>";
var openInfoTag = "<div class='information'> <h3>Dog Fact</h3> <p id='txt'>";
var closeInfoTag = "</p> <p id='close' onclick='closeInfo()'>Close</p></div>";

var captionTexts = [
  "Lexy",
  "Max",
  "Berta",
  "Dorothy",
  "Belle",
  "Ivy",
  "Coco",
  "Ella",
  "Felix",
  "Jade",
  "Kiwi",
  "Milo",
];
var descTexts = [
  "Cavalier",
  "Dalmatian",
  "Golden Retriever",
  "Cavalier",
  "White Golden Retriever",
  "Pug",
  "Golden Retriever",
  "Poodle Mix",
  "Black and White",
  "Golden Retriever",
  "Golden Retriever",
  "Tea Cup",
];
var informationText = [
  "The “smell” center of a dog’s brain is 40 times larger than yours! Dogs can smell thousands of times better than humans. Their noses have millions more scent receptors—for example, a human nose averages 5 million while a Dachshund’s nose has 125 million—making them useful in sniffing out drugs, dead bodies, bed bugs, explosives, and more.",
  "Their ears are pretty impressive! Dogs’ sense of smell might be pretty amazing, but don’t forget about their hearing! Everything from the positioning of their ears to the muscles in them helps them pick up a whole host of sounds that humans can’t pick up. In fact, the most popular explanation for why dogs tilt their heads is that they’re trying to locate the source of a sound.",
  "Their sense of taste is much less developed. Dogs have approximately a sixth of the number of taste buds that humans have (1,700 taste buds to humans’ approximately 9,000). This is why dogs will scarf rotting food scraps as voraciously as they’ll eat a bowl of kibble or a hunk of steak. Their less discriminatory sense of taste also has to do with their evolutionary instincts, carried over from when they would scavenge in the wild.",
  "No two dog noses are the same. A dog’s nose is the equivalent of a human fingerprint, with each having a unique pattern of ridges and creases.",
  "Dogs dream like people! If you’ve ever noticed your pooch twitching in her sleep, this probably means she’s dreaming. Researchers found that dogs have similar sleep patterns and brain activity as humans, and that small breeds tend to dream more than large ones. Psychology Today suggests they’re probably imagining familiar activities like playing outside or chasing their tail.",
  "Dogs are as smart as a two-year-old baby. According to canine researcher and author Stanley Coren, your toddler and pup are about on par when it comes to brains. He also explained that man’s best friend can count, understand over 150 words, and even trick people or other dogs to get treats. Intelligence varies based on breed—Border collies are the smartest.",
  "Dogs only mate twice a year. Unspayed females only go into heat twice a year, so dog breeders need to plan carefully.",
  "Tail wagging has its own language. If your dog excitedly wags its tail, it means they’re happy to see you, right? Not necessarily. According to Discovery.com, dogs wag their tails to the right when they’re happy and to the left when they’re frightened. Wagging low means they’re insecure, and rapid tail wagging accompanied by tense muscles or dilated pupils can signal aggression.",
  "Puppies are born blind and deaf. Newborn dogs are still developing, according to Psychology Today, so their ear canals and eyes are still closed. Most puppies open their eyes and respond to noises after about two weeks.",
  "Dogs have a “sixth sense. In a 2010 poll, 67 percent of pet owners reported their pets acting strangely right before a storm, and 43 percent said their pets behaved oddly right before something bad happened. The top clues? Whining, erratic behavior, or trying to hide in a safe place. There are even reports that dogs can sense illnesses, like cancer.",
  "Dogs only have sweat glands in their paws. Even though they sweat out through the pads of their paws, their main form of cooling down is panting.",
  "Your dog’s feet might smell like corn. Some pet owners might notice the faint scent of corn chips or popcorn lingering around their dog. This is called “Frito feet,” and it happens when sweat and bacteria build up in the paws."
];

for (var i = 0; i < captionTexts.length; i++) {
  fileNames.push("puppy-" + (i + 1));
  photos.push("<img src='images/" + fileNames[i] + ".jpeg'>");
  caption = openCaptionTag + captionTexts[i] + closeCaptionTag;
  description = openDescTag + i + ")'>" +  descTexts[i] + closeDescTag;
  information = openInfoTag + closeInfoTag;
  image = openList + photos[i] + caption + description + information + closeList;
  imageList.push(image);
}

document.getElementById("album").innerHTML = imageList.join("");

function showInfo(id) {
  document.getElementById("txt").innerHTML = informationText[id];
  document.querySelector('.information').style.visibility = "visible";
}

function closeInfo() {
  document.querySelector('.information').style.visibility = "hidden";
}