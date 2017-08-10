function CardView(containerDivId, card=null) {
  this.containerDivId = containerDivId;
  this.containerDiv = document.getElementById(containerDivId);
  this.card = card;

  this.cardDiv = document.createElement('div');
  this.cardDiv.className = "card";

  var front = document.createElement('div');
  front.className = 'inner-card front-card';
  if (this.card) {
    front.innerHTML = this.card.front;
  }
  var back = document.createElement('div');
  back.className = 'inner-card back-card hidden';

  if (this.card) {
    back.innerHTML = this.card.back;
  }

  this.cardDiv.append(front);
  this.cardDiv.append(back);
  this.containerDiv.append(this.cardDiv);

  this.cardDiv.addEventListener('click', this.flip.bind(this));
}

CardView.prototype.flip = function() {
  var divs = this.cardDiv.getElementsByTagName('div');
  if (divs.length === 2 && divs[0].className.indexOf("hidden") >= 0) {
    var index = divs[0].className.indexOf("hidden")
    divs[0].className = divs[0].className.slice(0, index - 1);
    divs[1].className = divs[1].className + " hidden";
  } else if (divs.length === 2) {
    var index = divs[0].className.indexOf("hidden")
    divs[1].className = divs[1].className.slice(0, index - 1);
    divs[0].className = divs[0].className + " hidden";
  }
}

CardView.prototype.updateCard = function(card) {
  this.card = card;
  var divs = this.cardDiv.getElementsByTagName('div');
  if (divs.length === 2) {
    divs[0].innerHTML = this.card.front;
    divs[1].innerHTML = this.card.back;
  }
}











