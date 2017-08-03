document.addEventListener("DOMContentLoaded", function() {
  const data = [['Hello', 'Hola'], ['Food', 'Comida'], ['Cat', 'Gato'],
              ['Moxie', 'La Gata Mejor'], ['Sun', 'Sol'], ['Blue', 'Azul']];
  const deck = new FlashCardDeck(data);
  deck.shuffle();
  let card = deck.randomCard();
  const cardView = new CardView("container", deck.randomCard());

  const button = document.getElementById('next-button')
  button.addEventListener('click', function() {
    cardView.updateCard(deck.randomCard());
  });
});
