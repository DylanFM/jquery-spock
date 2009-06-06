$(function() {
  $("p").spock({ afterFilter: addWikipediaCheck });
});

function addWikipediaCheck () {
  $(this).find("span.keyword").click(function() {
    var term = $(this).text(),
        wp_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json";
    $.getJSON(wp_url+"&search="+term, function(data) {
      if (data[1].length > 0) {
        console.log(data[1]);
      } else {
        console.log("No entries.");
      }
    });
  });
}
