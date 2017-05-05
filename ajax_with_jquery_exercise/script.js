let favesToggle = false;
let authToken = localStorage.getItem("token") || null;
let favObj = JSON.parse(localStorage.getItem("favObj")) || {};


$(function() {

    // ---- VARIABLE DECLARATIONS ----

    let $slideScreen = $("#listContent");
    let $listSection = $("#theList");
    let $faves = $("#favorites");

    let $login = $("#login");
    let $logout = $("#logout");
    
    let $loginForm = $(".loginform");
    let $newUserForm = $(".newuserform");

    // ---- CODE ----

    $faves.css("display",'none');
    $logout.css("display",'none');

    toggleNav();
    loadTopStories();

    // ---- FUNCTION DEFINITIONS ----

    // 1. Toggle the navbar between Login and Favorites/Logout.

    function toggleNav(){
        if (!("token" in localStorage)){
            $login.show();
            $faves.hide();
            $logout.hide();
        }else{
            // hide #login. because you're logged in.
            $login.hide();
            $faves.show();
            $logout.show();
        }  
    }

    // 2. Login or sign up.

    function logOrSignIn(e, email, password, type, alert) {
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: `https://hn-favorites.herokuapp.com/${type}`,
            data: {email: email,password: password},
            dataType: "json"
        }).then(function(res){
            localStorage.setItem("token", res.auth_token);
            authToken = res.auth_token;
            $slideScreen.slideToggle();
            toggleNav();
            if(type === "login") {
                // retrieve favorites from heroku API
                $.ajax({
                    method: "GET",
                    url: "https://hn-favorites.herokuapp.com/stories.json",
                    dataType: "json",
                    contentType: "application/json",
                    headers: {
                        Authorization: authToken
                     }
                }).then(function(res){
                    for (var i=0; i<res.length; i++) {
                        favObj[res[i].title] = res[i].id;
                    }
                    localStorage.setItem("favObj", JSON.stringify(favObj));
                    loadTopStories();
                })
               
            } else {
                favObj = {};
                loadTopStories();
            }
        })
        .catch(function(err){
            if(type === "login") {
                alert("Error logging in. Please check your credentials and try again.");
            }
            $loginForm.trigger("reset");
            $slideScreen.slideToggle();
        });
    }

    // 3. Get the top 20 stories.

    function loadTopStories(){
        
        $("#theList").empty();

        let myList = [];

        $.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(function(res) {
            myList = myList.concat(res.slice(0,20));
            return myList
        })
        .then(function(myList){ 
            let arr = myList.map(function(val){
                return $.get(`https://hacker-news.firebaseio.com/v0/item/${val}.json`);

            })
            return Promise.all(arr);

        })
        .then(function(res){
            for (let i =0; i< res.length; i++){
                addListItem(res[i].title, res[i].url, res[i].by, res[i].id, false);
            }  
        });
    }

    // 4. Add the top 20 stories to the page.

    function addListItem(title, displayUrl, by, storyId, faveStatus){

        let $newSpan = $("<span>");

        if(title in favObj) {
            $newSpan.attr('class', "glyphicon glyphicon-star");
        } else {
            $newSpan.attr('class', "glyphicon glyphicon-star-empty");
        }
        

        let $newNumSpan = $("<span>", {class: "number"})

        if (faveStatus === false){
            $newNumSpan.text($("#theList>div").length+1 + ". ");
        };


        let $newA = $("<a>", {
            href: displayUrl, 
            target: "_blank",
            text: title 
        });

        let url = $newA.attr('href');

        if (url !== undefined) {
            url = url.split("://")[1].split("/")[0];
            if (url.split(".").length > 2){
                url = url.split(".").slice(-2).join(".");
            } 
        } else {
            url = "none"
        }
        

        let $newUrlSpan = $("<span>")
            .attr('data-storyId', storyId)
            .attr('data-by', by)
            .attr('data-domain', url)
            .text("(" + url + ")");

        if(title in favObj) {
            $newUrlSpan.attr('data-id', favObj[title])
        }
        
        let $newUrlSmall = $("<small>")
            .append($newUrlSpan);


        let $newDiv = $("<div>")
            .append($newNumSpan)
            .append($newSpan)
            .append($newA)
            .append($newUrlSmall)

        $listSection.append($newDiv);
    }


    // ---- EVENT LISTENERS ----

    // 1. Slide login screen up/down.

    $login.on('click', function(e){

        $slideScreen.slideToggle();

    })

    // 2. Log in an existing user.

    $loginForm.on('submit',function(e){

        let alert = "Error logging in. Please check your credentials and try again."
        logOrSignIn(e, $('#email').val(), $('#password').val(), "login", alert);

    });

    // 3. Let a new user sign up.

    $newUserForm.on('submit',function(e){

        logOrSignIn(e, $('#newemail').val(), $('#newpassword').val(), "signup");

    });

    // 4. Let logged in users log out.

    $logout.on('click',function(e){
        // remove auth from local storage.
        localStorage.removeItem("token");
        localStorage.removeItem("favObj");
        authToken = null;
        favObj = {};
        toggleNav();

        // return to top 20 stories page and empty all stars
        
        loadTopStories();
        let $glyphs = $(".glyphicon");
        $glyphs.removeClass("glyphicon-star glyphicon-star-empty")
                .addClass("glyphicon-star-empty");
    });

    //  5. Let users add or remove favorites.
   
    $listSection.on('click',".glyphicon",function(e){
        if ($(e.target).hasClass("glyphicon-star-empty")){
            // making a link a favorite

            let $target = $(e.target);
            let $children = $(e.target).parent().children();
            let byVar = $children.eq(3).children().eq(0).attr('data-by');
            let storyIdVar = $children.eq(3).children().eq(0).attr('data-storyId');
            let titleVar = $children.eq(2).text();
            let urlVar = $children.eq(2).attr('href');
            
            $.ajax({
                method: "POST",
                url: "https://hn-favorites.herokuapp.com/stories.json",
                data: JSON.stringify({
                    hacker_news_story: {
                        by: byVar,
                        story_id: storyIdVar,
                        title: titleVar,
                        url: urlVar
                    }
                }),
                dataType: "json",
                contentType: "application/json",
                headers: {
                    Authorization: authToken
                 }
            }).then(function(res){
                favObj[res.title] = res.id;
                localStorage.setItem("favObj", JSON.stringify(favObj));
                $target.removeClass("glyphicon-star-empty")
                        .addClass("glyphicon-star");
                $children.eq(3).children().eq(0).attr("data-id",res.id);
            })
            .catch(function(err){console.log(err)});
            
        } else {

            // deleting a favorite
            $.ajax({
                method: "DELETE",
                url: "https://hn-favorites.herokuapp.com/stories/" + $(e.target).parent().children().eq(3).children().eq(0).attr('data-id') + ".json",
                headers: {
                    Authorization: authToken
                 }
            }).
            then(function(res){
                delete favObj[$(e.target).parent().children().eq(2).text()];
                $(e.target).removeClass("glyphicon-star");
                $(e.target).addClass("glyphicon-star-empty");
                localStorage.setItem("favObj", JSON.stringify(favObj));
            })
            .catch(function(err){console.log(err)});
        }
    });

    // 6. Let users toggle between Favorites and All.

    $faves.on('click',function(e){
        if (favesToggle === false){
            // show favorites
            favesToggle = true;

            $.ajax({
                method: "GET",
                url: "https://hn-favorites.herokuapp.com/stories.json",
                headers: {
                    Authorization: authToken
                  }
            }).then(function(res){
                
                // empty the section with the divs
                $("#theList").empty();
                $faves.text("All");

                for (let i =0; i< res.length; i++){
                   addListItem(res[i].title, res[i].url, res[i].by, res[i].id, true);
                }  

            })
            .catch(function(err){console.log(err)});

            
        } else {
            // show all
            favesToggle = false;
            loadTopStories();

            let $numbers = $(".number");
            $numbers.css('display', '');
            $faves.text("Favorites");

            //unhide any hidden divs.
            $("#theList").children().css('display','');

        }

    })


});