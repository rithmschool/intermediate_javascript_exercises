// $(function(){
  var $urlForm = $("#newSite"),
      $toggleForm = $("#toggleForm"),
      $dataStored = $("ol"),
      $favBtn = $("#favBtn"),
      $toggleShow = false,
      $rowCounter = 1;
      isFavShow =false;

  $urlForm.hide()

  //Hide Show URL form
  $toggleForm.click(function(e){
    if($toggleShow){
      $urlForm.show()
    } else {
      $urlForm.hide()
    }
    $toggleShow = !$toggleShow;
  })

  //Form
  $urlForm.on("submit", function(e){
    var $url=  $("#url"),
        $titleVal =  $("#title");

    e.preventDefault();

    newData($titleVal, $url)

    $url.val('')
    $titleVal.val('')
    $urlForm.hide()
    $toggleShow = false;

  })

  //Select Favorite *STAR*
  $dataStored.on("click", ".glyphicon", function(e){
    $(e.target).toggleClass("glyphicon-star glyphicon-star-empty")
  })

  // Show only favorite
  $favBtn.on("click",function(e){
    var $starEmpty = $(".glyphicon-star-empty").parent();

        if(isFavShow){
          $starEmpty.hide()
        } else {
          $starEmpty.show()
        }

        isFavShow = !isFavShow;
  })

  //Add new data to DOM
  function newData($titleVal, $url){
    var $urlVal = $("#url").val(),
        rmHttp= $urlVal.indexOf('//')+2,
        urlShort = $urlVal.slice(rmHttp,$urlVal.indexOf('/', rmHttp) === -1 ? $urlVal.length: $urlVal.indexOf('/', rmHttp));

    $dataStored.append(
    `<li>
      <a href="#" class="glyphicon glyphicon-star-empty"></a>
      ${$titleVal.val().trim()} <a href=" ${$urlVal.trim()}" target="_blank"> (${urlShort}) </a>
     </li>
    `)


    $rowCounter++
  }

  // })


