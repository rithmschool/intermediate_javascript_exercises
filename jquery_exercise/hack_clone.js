$(function() {
  var $sites = $("#sites");
  $("#news").hide();

  $("form").on("submit", function(e) {
    e.preventDefault();

    var $title = $("#title");
    var titleText = $title.val();
    var $url = $("#url");
    var urlText = $url.val();
    // var $newStar = $("<span>", {
    //   class: "glyphicon glyphicon-star-empty",
    //   ariaHidden: true
    // });
    var $newLi = $("<li>", {

    });
    $newLi.html(`
      <span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span> ${titleText}
      `);

    // $sites.prepend($newStar);
    $sites.append($newLi);
    $title.val("");
    $url.val("");
    $("#news").hide();
  });
  $("#nav-submit").on("click", function() {
      $("#news").show();
  });
  //<span class="glyphicon glyphicon-star" aria-hidden="true"></span>
  $(".glyphicon").on("click", function(e) {
    if ($(".glyphicon").hasClass("glyphicon-star-empty")) {
      $(".glyphicon").removeClass("glyphicon-star-empty").addClass("glyphicon-star");
    }
    else {
      $(".glyphicon").removeClass("glyphicon-star").addClass("glyphicon-star-empty");
    }
  });
  //make it look nice
  //
  //favorites on click hide empty stars
  //

});
