## AJAX With jQuery Exercise

Now that we have done something with a HTTP GET, let's work on modifying data on the server.  The next application will be a hacker news story site.  Use the hacker news api to get the first 10 top stories and dispaly them on the screen.  Next, use the stories api here to save your favorite story.  The stories api has authentication, so you must login first in order to make requests to it.  You will have to make a POST request to post a new favorite to the api.

__Requirements__

* Uses the [Hacker News API](https://github.com/HackerNews/API) to display top 10 stories
* The top 10 stories page should have a button to favorite each story.
* In order to do anything with the favorites api, you must login first
* On a separate page, use the stories api to display a list of favorites.
* Allow the user to delete a favorite from the list of favorites
* Have navigation between the favorites page and the top 10 page.
* A favorite should save the story id, story title, who the story is by, and the url of the story
* The list of stories on the favorite page or on the top 10 page, should link to the actual story.

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

__Stories API - GET /stories.json__

The stories api allows creating, editing, updating, and deleting of a favorite story.  To see all of the stories that have been favorited, make a GET request to:

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

__Stories API - DELETE /stories/:story_id.json__

To delete a favorite story, you will need the id created by the api.  For example, a delete request might to the following url:

```
https://hn-favorites.herokuapp.com/stories/2.json
```

Here is the curl command to delete:

```
curl -H "Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE0Nzg1NTg5NzZ9.p-t2FDi3EndJWI892lijvaJoV3O7I9CMTHC6pKAcScw" \
     -X DELETE \
     https://hn-favorites.herokuapp.com/stories/2.json
```