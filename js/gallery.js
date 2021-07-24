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
var openDescTag = "<p id='description' onclick='showInfo()'>";
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
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel eros feugiat, viverra elit non, scelerisque est. Sed a eros at tellus maximus pharetra et nec nisl. Praesent pulvinar odio ut purus convallis, elementum venenatis sapien rhoncus.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel eros feugiat, viverra elit non, scelerisque est. Sed a eros at tellus maximus pharetra et nec nisl. Praesent pulvinar odio ut purus convallis, elementum venenatis sapien rhoncus.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel eros feugiat, viverra elit non, scelerisque est. Sed a eros at tellus maximus pharetra et nec nisl. Praesent pulvinar odio ut purus convallis, elementum venenatis sapien rhoncus.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel eros feugiat, viverra elit non, scelerisque est. Sed a eros at tellus maximus pharetra et nec nisl. Praesent pulvinar odio ut purus convallis, elementum venenatis sapien rhoncus.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel eros feugiat, viverra elit non, scelerisque est. Sed a eros at tellus maximus pharetra et nec nisl. Praesent pulvinar odio ut purus convallis, elementum venenatis sapien rhoncus.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel eros feugiat, viverra elit non, scelerisque est. Sed a eros at tellus maximus pharetra et nec nisl. Praesent pulvinar odio ut purus convallis, elementum venenatis sapien rhoncus.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel eros feugiat, viverra elit non, scelerisque est. Sed a eros at tellus maximus pharetra et nec nisl. Praesent pulvinar odio ut purus convallis, elementum venenatis sapien rhoncus.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel eros feugiat, viverra elit non, scelerisque est. Sed a eros at tellus maximus pharetra et nec nisl. Praesent pulvinar odio ut purus convallis, elementum venenatis sapien rhoncus.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel eros feugiat, viverra elit non, scelerisque est. Sed a eros at tellus maximus pharetra et nec nisl. Praesent pulvinar odio ut purus convallis, elementum venenatis sapien rhoncus.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel eros feugiat, viverra elit non, scelerisque est. Sed a eros at tellus maximus pharetra et nec nisl. Praesent pulvinar odio ut purus convallis, elementum venenatis sapien rhoncus.",
];

for (var i = 0; i < 12; i++) {
  fileNames.push("puppy-" + (i + 1));
  photos.push("<img src='images/" + fileNames[i] + ".jpeg'>");
  caption = openCaptionTag + captionTexts[i] + closeCaptionTag;
  description = openDescTag + descTexts[i] + closeDescTag;
  information = openInfoTag + informationText[i] + closeInfoTag;
  image = openList + photos[i] + caption + description + information + closeList;
  imageList.push(image);
}

document.getElementById("album").innerHTML = imageList.join("");

function showInfo() {
  document.querySelector('.information').style.visibility = "visible";
}

function closeInfo() {
  document.querySelector('.information').style.visibility = "hidden";
}