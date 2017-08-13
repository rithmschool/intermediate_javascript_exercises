function Board(containerId) {
  this.containerId = containerId;
  this.container = document.getElementById(containerId);
  this.squares = this.container.querySelectorAll('.square');
  this.rowIds = [["square_0_0","square_0_1","square_0_2"],
                 ["square_1_0","square_1_1","square_1_2"],
                 ["square_2_0","square_2_1","square_2_2"]];

  this.colIds = [["square_0_0","square_1_0","square_2_0"],
                 ["square_0_1","square_1_1","square_2_1"],
                 ["square_0_2","square_1_2","square_2_2"]];

  this.diagIds = [["square_0_0","square_1_1","square_2_2"],
                  ["square_0_2","square_1_1","square_2_0"]];
}

Board.prototype.clear = function() {
  this.squares.forEach(function(e) {
    e.innerHTML = '';
  });
} 