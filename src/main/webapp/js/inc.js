
$("document").ready(function(){
	
	$(".nav > li").hover(function(){
		$(this).addClass("on");
	    $(this).children("div").stop(true,true).slideDown("fast");
	},function(){
	    $(this).removeClass("on");
		$(this).children("div").stop(true,true).slideUp("fast");
	})
    $("#navChild a:last-child ").css("border-bottom","none") 
    
    dingwei();
    scrolling("noBd","n1p","n2p");
	var pgname = document.location.href;
		  pgname=pgname.replace(/\?.*$/,'')
		  pgname=pgname.replace(/^.*\//,'')
	if(pgname=="index.html"||pgname==null||pgname==""){
		
		scrolling("topPicList","topPicList1","topPicList2");
		
		$(".banner").css("height","418px");
		$(".bann").css("height","418px");
		
	}
	

	$(".ProClaList li:nth-child(2n)").css("margin-right","0px");

	$(".proListPic ul li").hover(function(){
			$(this).find(".picHover").stop(true,true).fadeIn("slow");
		},function(){
			$(this).find(".picHover").stop(true,true).fadeOut("slow");
	});
	$(".proListPic .first").hover(function(){
			$(this).find(".firstHover").stop(true,true).fadeIn("slow");
		},function(){
			$(this).find(".firstHover").stop(true,true).fadeOut("slow");
	});
   
   
   $(".proListPic li:nth-child(3n)").css("margin-right","0px"); 
	
   $(".casePic li:last-child").css("margin-right","0px"); 

  
  $(".leftProClaList > li ").click(function(){
	  $(this).next("ul").slideToggle();
	  $(this).toggleClass("open");
  }); 
  $(".leftProClaList > li ").hover(function(){
	  $(this).toggleClass("on");
  });
  $(".leftProClaList > ul > li ").hover(function(){
	  $(this).toggleClass("on");
  });  



  //$('.codepic').hover(function(){$('.code').fadeIn()},function(){$('.code').fadeOut()});
	$('.backup').click(function(){
		$('body,html').animate({scrollTop:0},500)
	});
	$(".backup").hide();
	$(function() {
		$(window).scroll(function(){
			if ($(window).scrollTop()>500){
				$(".backup").fadeIn(1000);
			}else{
				$(".backup").fadeOut(1000);
			}
		});
	});
/* end index  jq  */

    
   $(".pic1:nth-child(3n)").css("margin-right","0");
   $(".mainConList .pic1  .dt").hover(function(){
			$(this).find(".pic1Hover").stop(true,true).fadeIn("slow");
		},function(){
			$(this).find(".pic1Hover").stop(true,true).fadeOut("slow");
	});
	
   $(".pic2:last-child a").css("border-bottom","none");
   $(".mainConList ul li:last-child").css("border-bottom","none");


   	$(".pglist ul li").not(".on").not(".last").not(".next").hover(function(){ $(this).addClass("on");},function(){$(this).removeClass("on");})
	$(".pglist ul li.last").hover(function(){
		  $(this).css({background:"url(images/lastBg2.jpg) 6px center no-repeat #4d95c5",border:"1px solid #98c9ea"}).find("a").css({color:"#fff"});
	 },function(){
		   $(this).css({background:"url(images/lastBg.jpg) 6px center no-repeat #ffffff",border:"1px solid #98c9ea"}).find("a").css({color:"#4d95c5"});
	 })
	$(".pglist ul li.next").hover(function(){
		  $(this).css({background:"url(images/nextBg2.jpg) 56px center no-repeat #4d95c5",border:"1px solid #98c9ea"}).find("a").css({color:"#fff"});
	 },function(){
		   $(this).css({background:"url(images/nextBg.jpg) 56px center no-repeat #ffffff",border:"1px solid #98c9ea"}).find("a").css({color:"#4d95c5"});
	 })
	$(".pglist ul li.font").hover(function(){ $(this).css({background:"#ffffff",color:"#4d95c5",border:"none"});})
  
});


//导航定位
function dingwei(){
	var nav = document.getElementById("nav"); 
	var links = nav.getElementsByTagName("li"); 
	var lilen =$("#nav").find("li");
	
	var st2=new Array();
	var str1=new Array();
	var urrenturl = document.location.href; 	
	st2= urrenturl.split("_")
	var last = 0; 
	for (var i=0;i<links.length;i++) 
	{ 
	    linkurl =  lilen[i].getAttribute("rel"); 
		str1 = linkurl.split("/");
		var length2 = str1.length-1;
		str11 = str1[length2].split(".");
		 if(st2[0].indexOf(str11[0])!=-1) 
			{ 
			 last = i; 
			}
	} 
	links[last].className = "menu";
}
function scrolling(a,b,c){
	var speedp=30;
	var tabp=document.getElementById(a);
	var tab1p=document.getElementById(b);
	var tab2p=document.getElementById(c);
	tab2p.innerHTML=tab1p.innerHTML;
	function Marqueep(){
	if(tab2p.offsetWidth-tabp.scrollLeft<=0)
	tabp.scrollLeft-=tab1p.offsetWidth
	else{
	tabp.scrollLeft++;
	}
	}
	var MyMarp=setInterval(Marqueep,speedp);
	tabp.onmouseover=function() {clearInterval(MyMarp)};
	tabp.onmouseout=function() {MyMarp=setInterval(Marqueep,speedp)};
}

function upscrolling(){
	var speed=40;
	sdemo2.innerHTML = sdemo1.innerHTML;
	function Marquee(){
		if(sdemo2.offsetHeight - sdemo.scrollTop <= 0) {
			sdemo.scrollTop -= sdemo1.offsetHeight;
		} else{
			sdemo.scrollTop++;
		}
	}
	var MyMar = setInterval(Marquee,speed);
	sdemo.onmouseover = function(){ clearInterval(MyMar); }
	sdemo.onmouseout = function(){ MyMar=setInterval(Marquee,speed) }
}
//---------- 日期 ----------
function Year_Month() {
	var now = new Date();
	var yy = now.getFullYear();
	var mm = now.getMonth();
	var mmm = new Array();
	mmm[0] = "1/";
	mmm[1] = "2/";
	mmm[2] = "3/";
	mmm[3] = "4/";
	mmm[4] = "5/";
	mmm[5] = "6/";
	mmm[6] = "7";
	mmm[7] = "8/";
	mmm[8] = "9/";
	mmm[9] = "10/";
	mmm[10] = "11/";
	mmm[11] = "12/";
	mm = mmm[mm];
	return(mm );
}
function thisYear() { 
	var now = new Date();
	var yy = now.getFullYear();
	yy += "/";
	return(yy);
}
function Date_of_Today() { 
	var now = new Date();
	now = now.getDate();
	//now += "日";
	return(now);
}
function CurentTime() { 
	var now = new Date();
	var hh = now.getHours();
	var mm = now.getMinutes();
	var ss = now.getTime() % 60000;
	ss = (ss - (ss % 1000)) / 1000;
	var clock = hh + ":";
	if ( mm < 10 ) clock += "0";
	clock += mm ;
	//if ( ss < 10 ) clock += "0";
	//clock += ":"+ss;
	return(clock);
}

