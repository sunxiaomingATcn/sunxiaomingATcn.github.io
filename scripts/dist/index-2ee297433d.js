function imageLoaded(e){var t=$("img[data-imageload]").length,a=0;$("img[data-imageload]").on("load",function(){++a===t&&e&&e()})}function myskill(){animateArc(document.getElementById("canvas1"),90,80,"yellow"),animateArc(document.getElementById("canvas2"),90,80,"#4dd0e1"),animateArc(document.getElementById("canvas3"),90,80,"#80bd01"),animateArc(document.getElementById("canvas4"),90,80,"yellow")}$.fn.extend({typing:function(e,t){var a=$(this);t=t||200;var s=e.length,i=0;if("string"==typeof e&&s>0)var o=setInterval(function(){a.append("<span>"+e[i]+"</span>"),++i==s&&clearInterval(o)},t)},scrollAppoint:function(e){e=e||500;var t=$(this).offset().top;$("html,body").animate({scrollTop:t},e)},followMouse:function(e,t){t=t||500;$(this).width(),$(this).height();$(this).bind("mouseenter mouseleave",function(a){var s,i,o=$(this).width(),n=$(this).height(),h=(a.pageX-$(this).offset().left-o/2)*(o>n?n/o:1),l=(a.pageY-$(this).offset().top-n/2)*(n>o?o/n:1);switch(Math.round((Math.atan2(l,h)*(180/Math.PI)+180)/90+3)%4){case 0:s=-n,i=0;break;case 1:s=0,i=o;break;case 2:s=n,i=0;break;case 3:s=0,i=-o}"mouseenter"==a.type?($(this).find("img").css({transform:"scale(1.1,1.1)",transition:"1s all"}),$(this).find(e).css({top:s,left:i}),$(this).find(e).animate({top:0,left:0},t)):($(this).find("img").css({transform:"scale(1,1)",transition:"1s all"}),$(this).find(e).stop().animate({top:s,left:i},t))})}}),$(function(){function e(){i=n.width=window.innerWidth,o=n.height=window.innerHeight}function t(e){c=!0,"touchmove"===e.type?(l.push(new d(e.touches[0].clientX,e.touches[0].clientY)),l.push(new d(e.touches[0].clientX,e.touches[0].clientY))):(l.push(new d(e.clientX,e.clientY)),l.push(new d(e.clientX,e.clientY)))}function a(e){requestAnimationFrame(a),l.push(new d),h.clearRect(0,0,i,o);for(var t=0;t<l.length;t++)l[t].draw(),l[t].size<=0&&(l.splice(t,1),t--)}imageLoaded(function(){$(".loading-box").fadeOut(),$("body").css({height:"auto",overflow:"auto"}),$(".website-title").addClass("move")}),$(".web-developer-describe").typing("Talk is cheap , show me the code",100),$(".myWorksTitle").click(function(){$(".my-achievements").scrollAppoint()}),$(".one-work").followMouse(".work-inside-des");var s=!0;$(window).on("scroll touchend",function(){var e=$(window).height();$(".pageContactMe").offset().top-$(window).scrollTop()<=e/3?$(".pageContactMe").addClass("animate-show").removeClass("animate-show-callback"):$(".pageContactMe").addClass("animate-show-callback").removeClass("animate-show");var t=$(".my-Skill").offset().top-$(window).scrollTop();t<=e/3&&($($(".skillsTitle").show()),$(".my-Skill").addClass("activePage")),t<=e/3&&s&&(s=!1,myskill())});var i,o,n=document.getElementById("canvasHeart"),h=n.getContext("2d");h.strokeStyle="red",h.shadowBlur=25,h.shadowColor="hsla(0, 100%, 60%,0.7)";var l=[],c=!1;e(),window.addEventListener("mousemove",t),window.addEventListener("touchmove",t),window.addEventListener("resize",e),requestAnimationFrame(a);var d=function(e,t){this.x=e||Math.random()*i,this.y=t||Math.random()*o,this.size=Math.random()+1,this.shadowBlur=10*Math.random(),this.speedX=8*(Math.random()-.5),this.speedY=8*(Math.random()-.5),this.speedSize=.05*Math.random()+.01,this.opacity=1,this.vertices=[];for(var a=0;a<100;a++){var s=(a/100-.5)*(2*Math.PI),n={x:15*Math.pow(Math.sin(s),3),y:-(13*Math.cos(s)-5*Math.cos(2*s)-2*Math.cos(3*s)-Math.cos(4*s))};this.vertices.push(n)}};d.prototype.draw=function(){this.size-=this.speedSize,this.x+=this.speedX,this.y+=this.speedY,h.save(),h.translate(-1e3,this.y),h.scale(this.size,this.size),h.beginPath();for(var e=0;e<100;e++){var t=this.vertices[e];h.lineTo(t.x,t.y)}h.globalAlpha=this.size,h.shadowBlur=Math.round(10*(3-this.size)),h.shadowColor="hsla(0, 100%, 60%,0.7)",h.shadowOffsetX=this.x+1e3,h.globalCompositeOperation="screen",h.closePath(),h.fill(),h.restore()}});