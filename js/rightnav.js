var rightbox=$(".right-box")[0];
var rightone=$(".right-one")[0];
var obj=document.documentElement.scrollTop?
	document.documentElement:document.body;               //获取滚轮到浏览器可视区域的TOp值的兼容函数
window.onscroll=function(){
    if (obj.scrollTop>=500) {
    	animate(rightone,{opacity:1},500);
    }
    else {
    	animate(rightone,{opacity:0},500);
    }
}