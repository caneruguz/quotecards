/*
  html2canvas @VERSION@ <http://html2canvas.hertzen.com>
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/

var h2cSelector, h2cOptions;
(function(document, window) {
    var scrStart = '<script type="text/javascript" src="', scrEnd = '"></script>';
    //document.write(scrStart + 'html2canvas/external/jquery-1.6.2.js' + scrEnd);
    var html2canvas = ['Core', 'Generate', 'Parse', 'Preload', 'Queue', 'Renderer', 'Util', 'renderers/Canvas',  'plugins/jquery.plugin.html2canvas'], i;
    for (i = 0; i < html2canvas.length; ++i) {
        document.write(scrStart + 'html2canvas/src/' + html2canvas[i] + '.js' + scrEnd);
    }
    window.onload = function() {
        h2cSelector = '#thebox';
        
        if (window.setUp) {
            window.setUp();
        }
        
        
        $('#button').click(function() {
			
			//This section makes a pseudo ajax
			 $('#ajax-loader').show(); 
			 $('#darken').show();
			 
            $(h2cSelector).html2canvas($.extend({
                flashcanvas: "html2canvas/external/flashcanvas.min.js",
                logging: true,
                profile: true,
                useCORS: true
            }, h2cOptions));
            

		});
        
    };
}(document, window));
