(function($) {
  
  var opts, keywords;
 
  $.fn.extend({
    spock: function(options) {
      opts = $.extend({}, $.fn.spock.defaults, options);
      // This will be called on an element or collection of elements
      return this.each(processElements);
    }
  });

  $.fn.spock.defaults = {
    identifierRegexp: /((?:[A-Z]\w+\s?)+)/g,
    ignore: ['the'],
    spanClass: 'keyword',
    processKeyword: processKeyword,
    afterFilter: null
  };
  
  // Private functions
  
  function processElements () {
    // Replace any matched items with the results of the function
    var processed = $(this).text().replace(opts.identifierRegexp, function(match) {
      // Check if the match is to be ignored
      if ($.inArray($.trim(match).toLowerCase(),opts.ignore) < 0) {
        return opts.processKeyword(match);
      } else {
        return match;
      }
    });
    // Set the content as the processed content
    $(this).html(processed);
    // Run the afterFilter if it exists
    if (typeof opts.afterFilter == 'function') {
      return opts.afterFilter.apply(this);
    }
    return true;
  }
  
  // Private, but can be overridden through options
  function processKeyword (match) {
    var following_space = false,
        kw;
    // We don't want to enclose a trailing space
    if (/\w+\s/.test(match)) {
      following_space = true;
      match = $.trim(match);
    }
    // Enclose the keyword
    kw = '<span class="'+opts.spanClass+'">'+match+'</span>';
    if (following_space) kw += ' ';
    return kw;
  }
  
})(jQuery);
