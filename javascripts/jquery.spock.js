(function($) {
  
  var opts, keywords;
 
  $.fn.extend({
    spock: function(options) {
      opts = $.extend({}, $.fn.spock.defaults, options);
      // This will be called on an element or collection of elements
      this.each(processElements);
    }
  });

  $.fn.spock.defaults = {
    identifierRegexp: /((?:[A-Z]\w+\s?)+)/g,
    processKeyword: processKeyword
  };
  
  function processElements () {
    // Replace any matched items with the results of the function
    $(this).html($(this).text().replace(opts.identifierRegexp, opts.processKeyword));
  }
  
  function processKeyword (match) {
    var following_space = false,
        kw;
    // We don't want to enclose a trailing space
    if (/\w+\s/.test(match)) {
      following_space = true;
      match = jQuery.trim(match);
    }
    kw = '<span class="keyword">'+match+'</span>';
    if (following_space) kw += ' ';
    return kw;
  }
  
})(jQuery);
