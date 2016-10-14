var imgbox=getClass("banner")[0];
var img=getClass('bannerbody');
var list=getClass("banneranniu")[0];
var li=getClass('bnranniu');
var bannerbtn=getClass("bannerbtn");
var leftbtn=getClass("btn-left")[0];
var leftbtnimg=leftbtn.getElementsByTagName('img')[0];
var rightbtn=getClass("btn-right")[0];
var rightbtnimg=rightbtn.getElementsByTagName('img')[0];
var bannerbox=getClass("bannerbox")[0];
for (var i = 1; i < img.length; i++) {
	img[i].style.left="1920px";
}
var now=0;
var next=0;
function zuoyi(){
	next++;
	if(next>=img.length){
		next=0;
	}

	animate(img[now],{left:-1920},1000);
	img[next].style.left="1920px";
	animate(img[next],{left:-374.5},1000);
	img[now].style.zIndex=0;
    img[next].style.zIndex=5;
	li[now].style.background="#868686";
	li[next].style.background="#fff";
	now=next;
}
var t=setInterval(zuoyi,4000);      //时间函数进程开始
function youyi(){
	next--;
	if(next<=-1){
		next=img.length-1;
	}

	animate(img[now],{left:1920},1000);
	img[next].style.left="-1920px";
	animate(img[next],{left:-374.5},1000);
	img[now].style.zIndex=0;
    img[next].style.zIndex=5;
	li[now].style.background="#868686";
	li[next].style.background="#fff";
	now=next;
}
bannerbox.onmouseover=function(){
	clearInterval(t);
	leftbtn.style.opacity=1;
	rightbtn.style.opacity=1;
}
bannerbox.onmouseout=function(){
	t=setInterval(zuoyi,4000);
	leftbtn.style.opacity=0;
	rightbtn.style.opacity=0;
}
leftbtn.onclick=function(){
	zuoyi();
}
leftbtn.onmouseover=function(){
    leftbtnimg.style.opacity=1;
}
leftbtn.onmouseout=function(){
    leftbtnimg.style.opacity=0.5;
}
rightbtn.onmouseover=function(){
    rightbtnimg.style.opacity=1;
}
rightbtn.onmouseout=function(){
    rightbtnimg.style.opacity=0.5;
}
rightbtn.onclick=function(){
	youyi();
}
for (var i = 0; i < li.length; i++) {
	li[i].bb=i;
    li[i].onclick=function(){
    	next=this.bb;
    	img[next].style.left="1920px";
    	animate(img[next],{left:-374.5});
    	img[now].style.zIndex=0;
    	img[next].style.zIndex=5;
    	li[now].style.background="#868686";
	    li[next].style.background="#fff";
	    now=next;
    }
}