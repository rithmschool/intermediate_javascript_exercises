$(document).ready(function(){
  var $submitLink = $(".submit");
  var $submitForm = $(".submit-form");
  var $submitBtn = $(".submit-button");
  var $linkItemsOl = $(".link-items");
  var star = "<span class=\"glyphicon glyphicon-star-empty\" aria-hidden=\"true\"></span>";
  var $title = $("#title");
  var $url = $("#url");
  var $favSpan = $(".favorites");

  $submitLink.on("click", function(){
    $submitForm.toggle();
  });

  $("body").on("click", ".glyphicon", function(e){
    $(e.target).toggleClass("glyphicon-star-empty glyphicon-star");
  });

  $submitBtn.on("click", function(e){
    e.preventDefault();
    var title = $("#title").val();
    var url = $("#url").val();
    var $newItem = $("<li>");
    var aTag = ` <a href="${url}">${title}</a>`;
    $newItem.html(star + " " + aTag);
    $linkItemsOl.append($newItem);
    console.log(aTag);
    $title.val("");
    $url.val("https://");
  });

  $favSpan.on("click", function(e){
    var stars = $(".glyphicon");
    if ($favSpan.hasClass("favorites")) {
      for (let i = 0; i < stars.length; i++) {
        console.log(stars[i]);
        if ($(stars[i]).hasClass("glyphicon-star-empty")) {
          $(stars[i]).parent().hide();
        }
      }
      $favSpan.text("all");
    }
    else if ($favSpan.hasClass("all")) {
      for (let i = 0; i < stars.length; i++) {
        console.log(stars[i]);
        if ($(stars[i]).hasClass("glyphicon-star-empty")) {
          $(stars[i]).parent().show();
        }
      }
      $favSpan.text("favorites");
    }
    $favSpan.toggleClass("favorites all");
  });

});