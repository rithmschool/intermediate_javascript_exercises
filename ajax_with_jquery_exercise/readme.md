## AJAX With jQuery Exercise

It's time to build something fun with your knowledge of jQuery and AJAX! Now that we have the ability to fetch data from remote servers, we can build so many different things! 

#### PART 1

For this challenge you will be making use of one of the public APIs from the list [here](https://github.com/toddmotto/public-apis). Make sure the API **does not** require OAuth. 

Here are some ideas (you can build more than one!):

- A music app with the iTunes or Spotify API
- A movie search + info app using the OMDB API
- Endless GIFs with the Giphy API 
- A card game using the Deck of Cards API
- A random Ron Swanson quote generator
- A fun word game with the Wordnik API
- A video search application using the YouTube API
- A Netflix suggestion with the Netflix Roulette API
- All the Pokemon or Starwars data you could ever want with the Pokeapi or SWAPI

If you want to see an example, open up the `index.html` page in the [Giphy Example](./giphy_example).

#### PART 2

Now that we have done something with a HTTP GET, let's work on modifying data on the server.  The next application will be a hacker news story site.  Use the hacker news api to get the first 10 top stories and dispaly them on the screen.  Next, use the stories api here to save your favorite story.  You will have to make a POST request to post a new favorite to the api.

__Requirements__

* Uses the hacker news api to display top 10 stories
* The top 10 stories page should have a button to favorite each story.
* On a separate page, use the stories api to display a list of favorites.
* Allow the user to delete a favorite from the list of favorites
* Have navigation between the favorites page and the top 10 page.
* A favorite should save the story id, story title, who the story is by, and the url of the story
* The list of stories on the favorite page or on the top 10 page, should link to the actual story.

__Stories API__

The stories api allows creating, editing, updating, and deleting of a favorite story.  To see all of the stories that have been favorited, make a GET request to:

```
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

To create a favorite story, make a POST request to:

```
https://hn-favorites.herokuapp.com/stories.json
```

Here is a potential curl request:

```
curl -H "Content-Type: application/json" \
     -X POST \
     -d '{"hacker_news_story":{"by":"Ray","story_id":48382,"title":"How to be an Animator","url":"https://www.rithmschool.com"}}' \
     https://hn-favorites.herokuapp.com/stories.json
```

To delete a favorite story, you will need the id created by the api.  For example, a delete request might to the following url:

```
https://hn-favorites.herokuapp.com/stories/2.json
```

Here is the curl command to delete:

```
curl -H "Content-Type: application/json" -X DELETE https://hn-favorites.herokuapp.com/stories/2.json
```