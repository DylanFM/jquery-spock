(function($) {
 
  $.fn.extend({
    spock: function(options) {
      var opts = $.extend({}, $.fn.spock.defaults, options),
      keywords = [];

      // This will be called on an element or collection of elements
      // Go through each element
      this.each(function() {
        // Find anything in the element's text that seems like it's a proper noun
        var content = $(this).text();
        // Get any keywords
        match = content.match(opts.identifierRegexp);
        // Trim and remove duplicates
        var seen = [];
        keywords = jQuery.map(match, function(w) { 
          var kw = jQuery.trim(w);
          if (jQuery.inArray(kw,seen) < 0) {
            seen.push(kw);
            return kw;
          }
          return null;
        });
        console.log(keywords);
      });

      // Set up handlers that when clicked it runs the item through Wolfram Alpha

      // Display the result in a tooltip
      
    }
  });

  $.fn.spock.defaults = {
    identifierRegexp: /((?:[A-Z]\w+\s?)+)/g
  };
  
})(jQuery);
