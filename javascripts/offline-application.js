jQuery(function($) {
  $("p").spock({ 
    identifierRegexp: /(\w+)/g,
    processKeyword: function(word) {
      var pieces = word.split(""),
          first = pieces.shift(),
          last = pieces.pop(),
          shuffled = shuffle(pieces);
      return first + shuffled.join("") + last;
    }
  });
});

// From http://snippets.dzone.com/posts/show/849
function shuffle (array) {
  for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
	return array;
}
