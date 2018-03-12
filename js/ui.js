// ui-search定义
$.fn.UiSearch=function(){
	var ui=$(this);
	$(".ui-search-selected",ui).click(function(){
		$(".ui-search-list").show();
		return false;
	})
	$(".ui-search-list a",ui).click(function(){
		$(".ui-search-selected").text($(this).text());
		$(".ui-search-list").hide();
		return false;

	})
	$("body").click(function(){
		$(".ui-search-list").hide();
	})
}
// ui-tab定义
$.fn.UiTab=function(header,content){
	var ui=$(this);
	var headers=$(header,ui);
	var cons=$(content,ui);
	headers.click(function(){
		var index=$(this).index();
		headers.removeClass("item_focus").eq(index).addClass("item_focus");
		cons.hide().eq(index).show();
	})

}
//ui-slider定义
$.fn.UiSlider=function(){
	var ui=$(this);
	var wrap=$(".ui-slider-wrap",ui);
	var prevBtn=$(".ui-slider-arrow .left-arrow",ui);
	var nextBtn=$(".ui-slider-arrow .right-arrow",ui);
	var arrowWidth=$(".ui-slider-arrow .left-arrow").width();

	

	// 添加表格，把日期插入表格第一行的每一列
	var rows=$(".row",ui);
	var weeks=["日","一","二","三","四","五","六"];
	      for(var i=0;i<49;i++){
	      	        for(var j=0;j<4;j++){
	      	        	rows.eq(j).append("<div class='col-item'></div>");
	      	        }
		        var today=new Date();
		        today.setDate(today.getDate()+i);
		        var items=$(".row1 .col-item");
		         items.eq(i).text( "星期"+weeks[today.getDay()]+today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate());
		         items.eq(i).css({
		         	"text-align":"center",
		         	"line-height":"20px",
		         	"font-size":"13px"
		         });
      
                     }
                     

                     // 左右两个箭头状的按钮，单击时，可以变换日期，
                      // 点击左侧箭头按钮切换为上一个星期的预约情况，点击右侧箭头按钮切换为下一个星期的预约情况
             var index=0;
             var width=$(".ui-slider").width()-arrowWidth*2;
             var size=Math.floor(wrap.width()/width);

             wrap
             .on("move_prev",function(){
             	if(index<=0){
             		index=size;
             	}
             	index=index-1;
             	wrap.css("left",width*index*(-1));

             })
             .on("move_next",function(){
             	if(index>=size-1){
             		index=-1
             	}
             	index=index+1;
             	wrap.css("left",width*index*(-1));

             })

             

             prevBtn.on("click",function(){
             	wrap.triggerHandler("move_prev");
             })
             nextBtn.on("click",function(){
             	wrap.triggerHandler("move_next");
             })

	

}


// 页面脚本逻辑
$(function(){
	$(".ui-search").UiSearch();
	$(".content").UiTab(".caption>.item",".content-tab>.item");
	$(".ui-slider").UiSlider();

})