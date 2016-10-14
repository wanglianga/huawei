function updown(topbtn,bottombtn,neirong,bigbox){
    for(var i=1;i<neirong.length;i++){
      neirong[i].style.top="-58px";
    }
    var now=0;
    var next=0;
    function shangyi(){
      next++;
      if (next>=neirong.length) {
         next=0;
      };
      animate(neirong[now],{top:58},700);
      neirong[next].style.top="-58px";
      animate(neirong[next],{top:21},700);
      now=next;
    }
    function xiayi(){
      next--;
      if (next<=-1) {
         next=neirong.length-1;
      };
      animate(neirong[now],{top:-58},700);
      neirong[next].style.top="58px";
      animate(neirong[next],{top:21},700);
      now=next;
    }

var t=setInterval(shangyi,2000);
bigbox.onmouseover=function(){
   clearInterval(t);
}
bigbox.onmouseout=function(){
   t=setInterval(shangyi,2000);
}
topbtn.onclick=function(){
   shangyi();
}
bottombtn.onclick=function(){
   xiayi();
}
}
var newsbox=$(".newsbox")[0];
var news1=$(".news1")[0];
var news1a=news1.getElementsByTagName('a');
var topbtn=$(".img1")[0];
var bottombtn=$(".img2")[0];
updown(topbtn,bottombtn,news1a,newsbox);