## jQuery Exercise

### Part 1

Complete the following for the following HTML page. Make sure to do this ENTIRELY using jQuery!

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <style>

    img {
      max-width: 70%;
    }

    .image-center {
      display: block;
      margin: 10px auto;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 id="title" class="text-center">Welcome to my website.</h1>
    <div class="row">
      <article class="col-sm-8">
        <p>My website is very important because I have many important things to say. Here is a picture of a dog hanging out with a baby:</p>
        <img src="https://instagram.fsnc1-2.fna.fbcdn.net/t51.2885-15/e35/13126756_1625244181133623_846480700_n.jpg" alt="">
        <p>Here are some more thoughts: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum harum labore veritatis, possimus facilis quas repellat, explicabo, ad commodi ipsum quidem nostrum earum pariatur fugit! Magni sunt nulla impedit! Facilis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, natus qui nostrum libero atque hic distinctio sint facilis nihil possimus minus tenetur deserunt rerum laboriosam cum quisquam doloremque ducimus error.</p>
        <p>Rerum debitis aspernatur, ipsum animi! Quis ullam dolore blanditiis accusantium eius minus tempore, iure maxime similique vel! Possimus fugiat reprehenderit autem, recusandae quos laudantium nesciunt libero suscipit officia rerum, et.</p>
        <p>Aliquam harum at soluta id esse perspiciatis, nesciunt corporis nostrum commodi, dolorum, repellat possimus a cumque. Id sed explicabo, quaerat sit esse facere, voluptatem, odit maxime nesciunt eveniet assumenda, error!</p>
        <p>Consequuntur porro, nobis placeat, labore magni aliquam repellendus autem consequatur hic facere, molestiae dolorum suscipit quos sint, minima ipsum. Quibusdam voluptatem est hic, corporis. Officiis delectus, consectetur harum reiciendis perferendis.</p>
      </article>
      <aside class="col-sm-4">
        <h4>I love lists. Here's why.</h4>
        <ol>
          <li>Sometimes they're numbered, and numbers are great.</li>
          <li>Sometimes they're not, and that's okay too.</li>
          <li>I don't have the attention span to read paragraphs.</li>
          <li>Hey look, there's a dog and a baby!</li>
        </ol>
      </aside>
    </div>
    <div class="row">
      <div class="col-sm-4">
        Red
        <input class="form-control" type="number" min="0" max="255" step="1" value="255">
      </div>
      <div class="col-sm-4">
        Blue
        <input class="form-control" type="number" min="0" max="255" step="1" value="255">
      </div>
      <div class="col-sm-4">
        Green
        <input class="form-control" type="number" min="0" max="255" step="1" value="255">
      </div>
    </div>
  </div>
<script src="https://code.jquery.com/jquery-3.1.1.js" integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA=" crossorigin="anonymous"></script>
</body>
</html>
```

1. When the DOM is ready, `console.log` the message "Let's get ready to jQuery!"
2. Give all images inside of an `article` tag the class of `image-center` (this is defined in the stylesheet).
3. Remove the last paragraph in the article.
4. Set the font size of the title to be a random pixel size from 0 to 100.
5. Add an item to the list; it can say whatever you want.
6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.
7. When you change the numbers in the three inputs on the bottom, the background color of the body changes to match whatever the three values in the inputs are.
8. Add an event listener so that when you click on the image, it slides up and disappears.

### Part 2

Build a list page where users can add and rate examples from a category (e.g. movies, albums, or sports). This page should include the following:

1. A form, where you can add something to the list and rate it.
2. A table of all of the things you've added.
3. A delete button for each row of the table that lets you remove elements from the list.
4. BONUS: a sorting feature, so you can sort entries in the table by their title or their rating. (To implement this you may need to research JavaScript's `sort` method.)

Here's an example of a movie list page:

![movie list page built using jquery](../images/favorite_things.gif)

All DOM manipulation should be done using jQuery - don't use any vanilla JavaScript properties or methods to interact with the DOM!

### Part 3

If you're looking for even more practice, you can use your jQuery knowledge to build a game in the browser! You can refactor one of your older assignments or build something new. Here are some options:

- A racing game by moving/animating elements in the DOM
- A card game like blackjack or poker
- A fun board game like connect-four  
- If you're looking for a nice refactor, [here's](https://github.com/rithmschool/guess_the_password) a browser game written entirely in vanilla JS. Refactor it to use `jQuery`!