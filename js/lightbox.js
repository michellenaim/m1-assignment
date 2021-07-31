$(document).ready(function () {
  /* Open lightbox on button click */
  $("#album img").click(function () {
    $(".backdrop")
      .animate({ opacity: ".50" }, 300, "linear")
      .css("display", "block");
    $(".box").fadeIn();

    //Check if lightbox has an image
    if ($(".box").contents("img")) {
      $(".box").contents().remove("p");
      $(".box").contents().remove("img");
    }

    //   //Get text content in attribute
    var altvalue = $(this).attr("alt");

    if (altvalue == "Lexy") {
      var img = $("#album:nth-child(3) li:nth-child(1) img").clone();
      $(".box").append(`<p id='photo-title'>${altvalue}</p>`)
      $(".box").append(img);
    } else if (altvalue == "Max") {
      var img = $("#album:nth-child(3) li:nth-child(2) img").clone();
      $(".box").append(img);
    } else if (altvalue == "Berta") {
      var img = $("#album:nth-child(3) li:nth-child(3) img").clone();
      $(".box").append(img);
    } else if (altvalue == "Dorothy") {
      var img = $("#album:nth-child(3) li:nth-child(4) img").clone();
      $(".box").append(img);
    } else if (altvalue == "Belle") {
      var img = $("#album:nth-child(3) li:nth-child(5) img").clone();
      $(".box").append(img);
    } else if (altvalue == "Ivy") {
      var img = $("#album:nth-child(3) li:nth-child(6) img").clone();
      $(".box").append(img);
    } else if (altvalue == "Coco") {
      var img = $("#album:nth-child(3) li:nth-child(7) img").clone();
      $(".box").append(img);
    } else if (altvalue == "Ella") {
      var img = $("#album:nth-child(3) li:nth-child(8) img").clone();
      $(".box").append(img);
    } else if (altvalue == "Felix") {
      var img = $("#album:nth-child(3) li:nth-child(9) img").clone();
      $(".box").append(img);
    } else if (altvalue == "Jade") {
      var img = $("#album:nth-child(3) li:nth-child(10) img").clone();
      $(".box").append(img);
    } else if (altvalue == "Kiwi") {
      var img = $("#album:nth-child(3) li:nth-child(11) img").clone();
      $(".box").append(img);
    } else if (altvalue == "Milo") {
      var img = $("#album:nth-child(3) li:nth-child(12) img").clone();
      $(".box").append(img);
    }
  });

  /* Click to close light box */
  $(".close, .backdrop").click(function () {
    $(".backdrop").animate({ opacity: "0" }, 300, "linear", function () {
      $(".backdrop").css("display", "none");
    });
    $(".box").fadeOut();
  });
});
