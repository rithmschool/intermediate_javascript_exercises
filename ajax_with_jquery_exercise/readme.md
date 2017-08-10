## AJAX With jQuery Exercise

In this exercise, we'll rework our Hacker News clone to use AJAX. We'll use a couple of APIs: one is the Hacker News API itself, and the other is a custom stories API used to log in users and track their favorites. The stories api has authentication, so you must login first in order to make requests to it.  You will have to make a POST request to post a new favorite to the api.

__Requirements__

* Uses the [Hacker News API](https://github.com/HackerNews/API) to display top stories (up to some limit, say 10 or 20).
* The top stories page should have a button to log in or sign up for an account.
* When the user logs in or signs up succesfully, a token sent back from the server should get stored in `localStorage`. This token will be used to authenticate the user on subsequent requests to the stories API. (Examples of requests to this API are below.)
* When a user is logged in, each top story should have a button to favorite it. This sends a POST request to the stories API creating a new favorite for the logged-in user.
* On a separate page, use the stories api to display a list of favorites.
* Allow the user to delete a favorite from the list of favorites.
* Have navigation between the favorites page and the top stories page.
* A favorite should save the story id, story title, who the story is by, and the url of the story.
* The list of stories on the favorite page or on the top stories page, should link to the actual story.

__BONUS__

* Implement infinite scroll! When you scroll to the bottom of the page, make an AJAX request to get more top stories from Hacker News.
* Add links for new stories and best stories, not just top stories. These should also pull from the Hacker News API.
* Come up with some other features you can build using what the Hacker News API makes available to you!

Here are examples of requests to send to the stories API:

__Stories API - POST /login__

In order to use the stories api, you must first be authenticated.  Here is a sample request for authenticating with the server:

```
curl -H "Content-Type: application/json" \
     -X POST \
     -d '{"email":"ravingrabbit75@gmail.com","password":"password1234"}' \
     https://hn-favorites.herokuapp.com/login
```

Sample http response body:

```
{"auth_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE0Nzg1NTg5NzZ9.p-t2FDi3EndJWI892lijvaJoV3O7I9CMTHC6pKAcScw"}
```

The syntax for `/signup` is similar. As with `/login`, upon successful signup the server will respond with an auth token.

__Stories API - GET /stories.json__

The stories api allows creating and deleting of a favorite story.  To see all of the stories that have been favorited, make a GET request to:

```
https://hn-favorites.herokuapp.com/stories.json
```

Sample curl request:

```
curl -H "Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE0Nzg1NTg5NzZ9.p-t2FDi3EndJWI892lijvaJoV3O7I9CMTHC6pKAcScw" \
     https://hn-favorites.herokuapp.com/stories.json
```

Expected results:

```
[
 {
  "id":1,
  "by":"DiabloD3",
  "story_id":12804483,
  "title":"Samsung Sets Its Reputation on Fire with Bogus DMCA Takedown Notices",
  "url":"https://hn-favorites.herokuapp.com/stories/1.json",
  "created_at":"2016-10-27T14:42:10.834Z",
  "updated_at":"2016-10-27T14:42:10.834Z"
  }
]
```

__Stories API - POST /stories.json__

To create a favorite story, make a POST request to:

```
https://hn-favorites.herokuapp.com/stories.json
```

Here is a potential curl request:

```
curl -H "Content-Type: application/json" \
     -H "Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE0Nzg1NTg5NzZ9.p-t2FDi3EndJWI892lijvaJoV3O7I9CMTHC6pKAcScw" \
     -X POST \
     -d '{"hacker_news_story":{"by":"Ray","story_id":48382,"title":"How to be an Animator","url":"https://www.rithmschool.com"}}' \
     https://hn-favorites.herokuapp.com/stories.json
```

__Stories API - DELETE /stories/:id.json__

To delete a favorite story, you will need the id created by the api.  For example, a delete request might be to the following url:

```
https://hn-favorites.herokuapp.com/stories/2.json
```

Here is the curl command to delete:

```
curl -H "Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE0Nzg1NTg5NzZ9.p-t2FDi3EndJWI892lijvaJoV3O7I9CMTHC6pKAcScw" \
     -X DELETE \
     https://hn-favorites.herokuapp.com/stories/2.json
```
