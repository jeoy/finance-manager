;(function($){
 
 	$.fn.myfullpage = function(options){ 
 			options = $.extend({
 				sectionsColor: [],
				anchors: [],
				title: "",
				scrollSpeed: 900
 			},options);
 			var $body = $("body");
 			var sectionPages = $(this).find(".section");
			sectionPages.each(function( i ){
				if(options.title){
					var newTitle = $("<p class = 'pagesTitle'>"+options.title[0]+i+options.title[1]+"</p>");
					$(this).append(newTitle);
				}

				$(this).attr("id",options.anchors[i]); 
				$(this).css({"backgroundColor":options.sectionsColor[i],"top": i*100+"%"});
				
			 
			})
		

			document.body.addEventListener("mousewheel",function(e){
			
				
				
				if($body.is(":animated")){

					}
				else{ 
					if( e.wheelDelta < -80 ){
						$body.animate({scrollTop:"+="+document.body.clientHeight},options.scrollSpeed)
					 //    window.setTimeout(function(){
					 //    	wait = 1;
					 //    },900)
						// wait = 0;
					}
					
					else if(e.wheelDelta > 80){
						$body.animate({scrollTop:"-="+document.body.clientHeight},options.scrollSpeed)
					// 	window.setTimeout(function(){
					//     	wait = 1; 
					//     },900)
					// 	wait = 0;
					}
					
				}
			
			e.preventDefault();

 			});
		};
 
$.fn.scrollUnique = function() {
    return $(this).each(function() {
        var eventType = 'mousewheel';
        if (document.mozHidden !== undefined) {
            eventType = 'DOMMouseScroll';
        }
        $(this).on(eventType, function(event) {
            // 一些数据
            var scrollTop = this.scrollTop,
                scrollHeight = this.scrollHeight,
                height = this.clientHeight;

            var delta = (event.wheelDelta) ? event.wheelDelta : -(event.originalEvent.detail || 0);        

            if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
                // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
                this.scrollTop = delta > 0? 0: scrollHeight;
                // 向上滚 || 向下滚
                event.preventDefault();
            }        
        });
    });	
};
 
})(jQuery);



