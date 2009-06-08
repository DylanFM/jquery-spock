$(function() {
  $("p").spock({ afterFilter: addWikipediaLinks });
});

function addWikipediaLinks () {
  $(this).find("span.keyword").each(function() {
    var term = $(this).text(),
        that = this;
    // Use the Wikipedia API to see if pages exist for this term
    $.getJSON("http://en.wikipedia.org/w/api.php?action=opensearch&search="+term+"&format=json&callback=?", function(data) {
      var replacement = term;
      // If pages exist, then replace the item with a link to its Wikipedia page
      if (data[1].length > 0) {
        replacement = "<a href=\"http://en.wikipedia.org/wiki/"+term+"\" title=\"Wikipedia entry for &ldquo;"+term+"&rdquo;\" target=\"_blank\" class=\"wikipedia-link\">"+term+"</a>";
      }
      $(that).replaceWith(replacement);
    });
  });
  
}
