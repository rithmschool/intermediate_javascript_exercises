function FlashCardDeck(cards) {
  this.cards = cards.map(function(c) {
    return new Card(c[0], c[1]);
  });
}

FlashCardDeck.prototype.shuffle = function() {
  var currentIndex = this.cards.length,
      temporaryValue,
      randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = this.cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = temporaryValue;
  }
}

FlashCardDeck.prototype.randomCard = function() {
  var card = this.cards.shift();
  this.cards.push(card);
  return card;
}
