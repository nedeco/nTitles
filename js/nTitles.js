/*!
 * nTitles jQuery plugin v 1.0
 * http://development.nedeco.de/
 *
 * Copyright 2011, nedeco GmbH
 * Licensed under the GPL Version 2 license.
 * Author e-Mail s.dohmen@nedeco.de
 */
(function( $ ){	
	$.fn.nTitles = function( options ) {
	    	var settings = {
	    			'opacity' : 0.8,
	    			'offsetX' : 15,
	    	    	'offsetY' : 15,
	    	    	'prefix'  : 'nedeco'
	    	    };
	    	return this.each(function() {  
		        if ( options ) { 
		            $.extend( settings, options );
		          }
				var nTitle="";
				var docWidth="";			
				$(this).bind({
					'mouseenter':function(){
						if($(this).attr('title') != "" && typeof $(this).attr('title') != "undefined"){
							nTitle = $(this).attr('title');
							$(this).attr('title','');
							$('body').append("<div class='"+settings.prefix+"_isnTitle' style='position:absolute;display:none;'>"+nTitle+"</div>");
						
							$("."+settings.prefix+"_isnTitle").css('opacity',settings.opacity);
							
								$(this).bind('mousemove',function(e){ 
									if( ((e.pageX+settings.offsetX) + $("."+settings.prefix+"_isnTitle").width() + parseFloat($("."+settings.prefix+"_isnTitle").css('paddingRight')) + parseFloat($("."+settings.prefix+"_isnTitle").css('paddingLeft')) + parseFloat($("."+settings.prefix+"_isnTitle").css('borderRightWidth')) + parseFloat($("."+settings.prefix+"_isnTitle").css('borderLeftWidth'))) >= $(document).width()){
										$("."+settings.prefix+"_isnTitle").css({"top":(e.pageY+settings.offsetY)+"px","left":(e.pageX+settings.offsetX - (((e.pageX+settings.offsetX) + $("."+settings.prefix+"_isnTitle").width() + parseFloat($("."+settings.prefix+"_isnTitle").css('paddingRight')) + parseFloat($("."+settings.prefix+"_isnTitle").css('paddingLeft')) + parseFloat($("."+settings.prefix+"_isnTitle").css('borderRightWidth')) + parseFloat($("."+settings.prefix+"_isnTitle").css('borderLeftWidth'))) - $(document).width()))+"px"}); 
									}else{
										$("."+settings.prefix+"_isnTitle").css({"top":(e.pageY+settings.offsetY)+"px","left":(e.pageX+settings.offsetX)+"px"}); 
									}
								   
								});
							
							$("."+settings.prefix+"_isnTitle").show();
							return true;
						}	
					}
				});
				
				$(this).bind({
					'mouseleave':function(){
					if(nTitle != ""){
						$(this).attr('title',nTitle);
						nTitle = "";
						$("."+settings.prefix+"_isnTitle").remove();	
						return true;
					}}
				});
	    	});
	};
})( jQuery );