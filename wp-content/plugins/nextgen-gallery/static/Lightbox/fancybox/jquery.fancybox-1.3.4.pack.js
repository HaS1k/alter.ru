!function(s){function h(){p.hide(),O.onerror=O.onload=null,k&&k.abort(),f.empty()}function l(){!1===m.onError(x,w,m)?(p.hide(),D=!1):(m.titleShow=!1,m.width="auto",m.height="auto",f.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'),P())}function a(){var n,t,e,i,a,o,d,c=x[w];if(h(),m=s.extend({},s.fn.fancybox.defaults,void 0===s(c).data("fancybox")?m:s(c).data("fancybox")),!1===(o=m.onStart(x,w,m)))D=!1;else{e=(m="object"==typeof o?s.extend(m,o):m).title||(c.nodeName?s(c).attr("title"):c.title)||"",c.nodeName&&!m.orig&&(m.orig=s(c).children("img:first").length?s(c).children("img:first"):s(c)),""===e&&m.orig&&m.titleFromAlt&&(e=m.orig.attr("alt"));const r={A:["href","class","title"],BR:[],EM:[],I:[],STRONG:[],B:[],U:[],P:["class"],DIV:["class","id"],SPAN:["class","id"]};if(d=e,(d=(new DOMParser).parseFromString(d,"text/html")).body.querySelectorAll("*").forEach(e=>{r[e.tagName]?[...e.attributes].forEach(t=>{r[e.tagName].includes(t.name)||e.removeAttribute(t.name)}):e.remove()}),e=d.body.innerHTML,n=m.href||(c.nodeName?s(c).attr("href"):c.href)||null,!/^(?:javascript)/i.test(n)&&"#"!=n||(n=null),m.type?(t=m.type,n=n||m.content):m.content?t="html":n&&(t=n.match(j)?"image":n.match(L)?"swf":s(c).hasClass("iframe")?"iframe":0===n.indexOf("#")?"inline":"ajax"),t)switch("inline"==t&&(c=n.substr(n.indexOf("#")),t=0<s(c).length?"inline":"ajax"),m.type=t,m.href=n,m.title=e,m.autoDimensions&&("html"==m.type||"inline"==m.type||"ajax"==m.type?(m.width="auto",m.height="auto"):m.autoDimensions=!1),m.modal&&(m.overlayShow=!0,m.hideOnOverlayClick=!1,m.hideOnContentClick=!1,m.enableEscapeButton=!1,m.showCloseButton=!1),m.padding=parseInt(m.padding,10),m.margin=parseInt(m.margin,10),f.css("padding",m.padding+m.margin),s(".fancybox-inline-tmp").off("fancybox-cancel").on("fancybox-change",function(){s(this).replaceWith(g.children())}),t){case"html":f.html(m.content),P();break;case"inline":!0===s(c).parent().is("#fancybox-content")?D=!1:(s('<div class="fancybox-inline-tmp" />').hide().insertBefore(s(c)).on("fancybox-cleanup",function(){s(this).replaceWith(g.children())}).on("fancybox-cancel",function(){s(this).replaceWith(f.children())}),s(c).appendTo(f),P());break;case"image":D=!1,s.fancybox.showActivity(),(O=new Image).onerror=function(){l()},O.onload=function(){D=!0,O.onerror=O.onload=null,m.width=O.width,m.height=O.height,s("<img />").attr({id:"fancybox-img",src:O.src,alt:m.title}).appendTo(f),F()},O.src=n;break;case"swf":m.scrolling="no",i='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+m.width+'" height="'+m.height+'"><param name="movie" value="'+n+'"></param>',a="",s.each(m.swf,function(t,e){i+='<param name="'+t+'" value="'+e+'"></param>',a+=" "+t+'="'+e+'"'}),i+='<embed src="'+n+'" type="application/x-shockwave-flash" width="'+m.width+'" height="'+m.height+'"'+a+"></embed></object>",f.html(i),P();break;case"ajax":D=!1,s.fancybox.showActivity(),m.ajax.win=m.ajax.success,k=s.ajax(s.extend({},m.ajax,{url:n,data:m.ajax.data||{},error:function(t,e,i){0<t.status&&l()},success:function(t,e,i){if(200==("object"==typeof i?i:k).status){if("function"==typeof m.ajax.win){if(!1===(o=m.ajax.win(n,t,e,i)))return void p.hide();"string"!=typeof o&&"object"!=typeof o||(t=o)}f.html(t),P()}}}));break;case"iframe":F()}else l()}}function o(){return[s(window).width()-2*I.margin,s(window).height()-2*I.margin,s(document).scrollLeft()+I.margin,s(document).scrollTop()+I.margin]}function M(){p.is(":visible")?(s("div",p).css("top",-40*S+"px"),S=(S+1)%12):clearInterval(t)}var f,p,i,n,e,g,d,c,r,b,t,y,u,w=0,m={},x=[],v=0,I={},C=[],k=null,O=new Image,j=/\.(jpg|gif|png|bmp|jpeg|webp)(.*)?$/i,L=/[^\.]\.(swf)\s*$/i,S=1,T=0,A="",D=!1,N=s.extend(s("<div/>")[0],{prop:0}),E=!1,P=function(){var t=m.width,e=m.height,t=-1<t.toString().indexOf("%")?parseInt((s(window).width()-2*m.margin)*parseFloat(t)/100,10)+"px":"auto"==t?"auto":t+"px",e=-1<e.toString().indexOf("%")?parseInt((s(window).height()-2*m.margin)*parseFloat(e)/100,10)+"px":"auto"==e?"auto":e+"px";f.wrapInner('<div style="width:'+t+";height:"+e+";overflow: "+("auto"==m.scrolling?"auto":"yes"==m.scrolling?"scroll":"hidden")+';position:relative;"></div>'),m.width=f.width(),m.height=f.height(),F()},F=function(){var t,e;p.hide(),n.is(":visible")&&!1===I.onCleanup(C,v,I)?(s.event.trigger("fancybox-cancel"),D=!1):(D=!0,s(g.add(i)).off(),s(window).off("resize.fb scroll.fb"),s(document).off("keydown.fb"),n.is(":visible")&&"outside"!==I.titlePosition&&n.css("height",n.height()),C=x,v=w,(I=m).overlayShow?(i.css({"background-color":I.overlayColor,opacity:I.overlayOpacity,cursor:I.hideOnOverlayClick?"pointer":"auto",height:s(document).height()}),i.is(":visible")||(E&&s("select:not(#fancybox-tmp select)").filter(function(){return"hidden"!==this.style.visibility}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"}),i.show())):i.hide(),u=R(),z(),n.is(":visible")?(s(d.add(r).add(b)).hide(),t=n.position(),y={top:t.top,left:t.left,width:n.width(),height:n.height()},e=y.width==u.width&&y.height==u.height,g.fadeTo(I.changeFade,.3,function(){function t(){g.html(f.contents()).fadeTo(I.changeFade,1,B)}s.event.trigger("fancybox-change"),g.empty().removeAttr("filter").css({"border-width":I.padding,width:u.width-2*I.padding,height:m.autoDimensions?"auto":u.height-T-2*I.padding}),e?t():(N.prop=0,s(N).animate({prop:1},{duration:I.changeSpeed,easing:I.easingChange,step:H,complete:t}))})):(n.removeAttr("style"),g.css("border-width",I.padding),"elastic"==I.transitionIn?(y=K(),g.html(f.contents()),n.show(),I.opacity&&(u.opacity=0),N.prop=0,s(N).animate({prop:1},{duration:I.speedIn,easing:I.easingIn,step:H,complete:B})):("inside"==I.titlePosition&&0<T&&c.show(),g.css({width:u.width-2*I.padding,height:m.autoDimensions?"auto":u.height-T-2*I.padding}).html(f.contents()),n.css(u).fadeIn("none"==I.transitionIn?0:I.speedIn,B))))},z=function(){if(A=I.title||"",T=0,c.empty().removeAttr("style").removeClass(),!1!==I.titleShow){var t;if((A="function"==typeof I.titleFormat?I.titleFormat(A,C,v,I):!(!(t=A)||!t.length)&&("float"==I.titlePosition?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+t+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+I.titlePosition+'">'+t+"</div>"))&&""!==A)switch(c.addClass("fancybox-title-"+I.titlePosition).html(A).appendTo("body").show(),I.titlePosition){case"inside":c.css({width:u.width-2*I.padding,marginLeft:I.padding,marginRight:I.padding}),T=c.outerHeight(!0),c.appendTo(e),u.height+=T;break;case"over":c.css({marginLeft:I.padding,width:u.width-2*I.padding,bottom:I.padding}).appendTo(e);break;case"float":c.css("left",-1*parseInt((c.width()-u.width-40)/2,10)).appendTo(n);break;default:c.css({width:u.width-2*I.padding,paddingLeft:I.padding,paddingRight:I.padding}).appendTo(n)}}c.hide()},B=function(){var t,e;s.support.opacity||(g.get(0).style.removeProperty("filter"),n.get(0).style.removeProperty("filter")),m.autoDimensions&&g.css("height","auto"),n.css("height","auto"),A&&A.length&&c.show(),I.showCloseButton&&d.show(),(I.enableEscapeButton||I.enableKeyboardNav)&&s(document).on("keydown.fb",function(t){27==t.keyCode&&I.enableEscapeButton?(t.preventDefault(),s.fancybox.close()):37!=t.keyCode&&39!=t.keyCode||!I.enableKeyboardNav||"INPUT"===t.target.tagName||"TEXTAREA"===t.target.tagName||"SELECT"===t.target.tagName||(t.preventDefault(),s.fancybox[37==t.keyCode?"prev":"next"]())}),I.showNavArrows?((I.cyclic&&1<C.length||0!==v)&&r.show(),(I.cyclic&&1<C.length||v!=C.length-1)&&b.show()):(r.hide(),b.hide()),I.hideOnContentClick&&g.on("click",s.fancybox.close),I.hideOnOverlayClick&&i.on("click",s.fancybox.close),s(window).on("resize.fb",s.fancybox.resize),I.centerOnScroll&&s(window).on("scroll.fb",s.fancybox.center),"iframe"==I.type&&s('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0"  scrolling="'+m.scrolling+'" src="'+I.href+'"></iframe>').appendTo(g),n.show(),D=!1,s.fancybox.center(),I.onComplete(C,v,I),C.length-1>v&&(void 0!==(t=C[v+1].href)&&t.match(j)&&((e=new Image).src=t));0<v&&void 0!==(t=C[v-1].href)&&t.match(j)&&((e=new Image).src=t)},H=function(t){var e={width:parseInt(y.width+(u.width-y.width)*t,10),height:parseInt(y.height+(u.height-y.height)*t,10),top:parseInt(y.top+(u.top-y.top)*t,10),left:parseInt(y.left+(u.left-y.left)*t,10)};void 0!==u.opacity&&(e.opacity=t<.5?.5:t),n.css(e),g.css({width:e.width-2*I.padding,height:e.height-T*t-2*I.padding})},R=function(){var t=o(),e={},i=I.autoScale,n=2*I.padding;return-1<I.width.toString().indexOf("%")?e.width=parseInt(t[0]*parseFloat(I.width)/100,10):e.width=I.width+n,-1<I.height.toString().indexOf("%")?e.height=parseInt(t[1]*parseFloat(I.height)/100,10):e.height=I.height+n,i&&(e.width>t[0]||e.height>t[1])&&("image"==m.type||"swf"==m.type?(i=I.width/I.height,e.width>t[0]&&(e.width=t[0],e.height=parseInt((e.width-n)/i+n,10)),e.height>t[1]&&(e.height=t[1],e.width=parseInt((e.height-n)*i+n,10))):(e.width=Math.min(e.width,t[0]),e.height=Math.min(e.height,t[1]))),e.top=parseInt(Math.max(t[3]-20,t[3]+.5*(t[1]-e.height-40)),10),e.left=parseInt(Math.max(t[2]-20,t[2]+.5*(t[0]-e.width-40)),10),e},K=function(){var t,e=!!m.orig&&s(m.orig);return e&&e.length?((t=(e=e).offset()).top+=parseInt(e.css("paddingTop"),10)||0,t.left+=parseInt(e.css("paddingLeft"),10)||0,t.top+=parseInt(e.css("border-top-width"),10)||0,t.left+=parseInt(e.css("border-left-width"),10)||0,t.width=e.width(),t.height=e.height(),{width:(e=t).width+2*I.padding,height:e.height+2*I.padding,top:e.top-I.padding-20,left:e.left-I.padding-20}):(t=o(),{width:2*I.padding,height:2*I.padding,top:parseInt(t[3]+.5*t[1],10),left:parseInt(t[2]+.5*t[0],10)})};s.fn.fancybox=function(t){return s(this).length&&s(this).data("fancybox",s.extend({},t,s.metadata?s(this).metadata():{})).off("click.fb").on("click.fb",function(t){t.preventDefault(),D||(D=!0,s(this).trigger("blur"),x=[],w=0,(t=s(this).attr("rel")||"")&&""!=t&&"nofollow"!==t?(x=s("a[rel="+t+"], area[rel="+t+"]"),w=x.index(this)):x.push(this),a())}),this},s.fancybox=function(t){var e;if(!D){if(D=!0,e=void 0!==arguments[1]?arguments[1]:{},x=[],w=parseInt(e.index,10)||0,Array.isArray(t)){for(var i=0,n=t.length;i<n;i++)"object"==typeof t[i]?s(t[i]).data("fancybox",s.extend({},e,t[i])):t[i]=s({}).data("fancybox",s.extend({content:t[i]},e));x=jQuery.merge(x,t)}else"object"==typeof t?s(t).data("fancybox",s.extend({},e,t)):t=s({}).data("fancybox",s.extend({content:t},e)),x.push(t);(w>x.length||w<0)&&(w=0),a()}},s.fancybox.showActivity=function(){clearInterval(t),p.show(),t=setInterval(M,66)},s.fancybox.hideActivity=function(){p.hide()},s.fancybox.next=function(){return s.fancybox.pos(v+1)},s.fancybox.prev=function(){return s.fancybox.pos(v-1)},s.fancybox.pos=function(t){D||(t=parseInt(t),x=C,-1<t&&t<C.length?(w=t,a()):I.cyclic&&1<C.length&&(w=t>=C.length?0:C.length-1,a()))},s.fancybox.cancel=function(){D||(D=!0,s.event.trigger("fancybox-cancel"),h(),m.onCancel(x,w,m),D=!1)},s.fancybox.close=function(){var t;function e(){i.fadeOut("fast"),c.empty().hide(),n.hide(),s.event.trigger("fancybox-cleanup"),g.empty(),I.onClosed(C,v,I),C=m=[],v=w=0,I=m={},D=!1}D||n.is(":hidden")||(D=!0,I&&!1===I.onCleanup(C,v,I)?D=!1:(h(),s(d.add(r).add(b)).hide(),s(g.add(i)).off(),s(window).off("resize.fb scroll.fb"),s(document).off("keydown.fb"),g.find("iframe").attr("src",E&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank"),"inside"!==I.titlePosition&&c.empty(),n.stop(),"elastic"==I.transitionOut?(y=K(),t=n.position(),u={top:t.top,left:t.left,width:n.width(),height:n.height()},I.opacity&&(u.opacity=1),c.empty().hide(),N.prop=1,s(N).animate({prop:0},{duration:I.speedOut,easing:I.easingOut,step:H,complete:e})):n.fadeOut("none"==I.transitionOut?0:I.speedOut,e)))},s.fancybox.resize=function(){i.is(":visible")&&i.css("height",s(document).height()),s.fancybox.center(!0)},s.fancybox.center=function(){var t,e;D||(e=!0===arguments[0]?1:0,t=o(),!e&&(n.width()>t[0]||n.height()>t[1]))||n.stop().animate({top:parseInt(Math.max(t[3]-20,t[3]+.5*(t[1]-g.height()-40)-I.padding)),left:parseInt(Math.max(t[2]-20,t[2]+.5*(t[0]-g.width()-40)-I.padding))},"number"==typeof arguments[0]?arguments[0]:200)},s.fancybox.init=function(){s("#fancybox-wrap").length||(s("body").append(f=s('<div id="fancybox-tmp"></div>'),p=s('<div id="fancybox-loading"><div></div></div>'),i=s('<div id="fancybox-overlay"></div>'),n=s('<div id="fancybox-wrap"></div>')),(e=s('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(n)).append(g=s('<div id="fancybox-content"></div>'),d=s('<a id="fancybox-close"></a>'),c=s('<div id="fancybox-title"></div>'),r=s('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),b=s('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')),d.on("click",s.fancybox.close),p.on("click",s.fancybox.cancel),r.on("click",function(t){t.preventDefault(),s.fancybox.prev()}),b.on("click",function(t){t.preventDefault(),s.fancybox.next()}),s.fn.mousewheel&&n.on("mousewheel.fb",function(t,e){D?t.preventDefault():0!=s(t.target).get(0).clientHeight&&s(t.target).get(0).scrollHeight!==s(t.target).get(0).clientHeight||(t.preventDefault(),s.fancybox[0<e?"prev":"next"]())}),s.support.opacity||n.addClass("fancybox-ie"),E&&(p.addClass("fancybox-ie6"),n.addClass("fancybox-ie6"),s('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(e)))},s.fn.fancybox.defaults={padding:10,margin:40,opacity:!1,modal:!1,cyclic:!1,scrolling:"auto",width:560,height:340,autoScale:!0,autoDimensions:!0,centerOnScroll:!1,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:!0,hideOnContentClick:!1,overlayShow:!0,overlayOpacity:.7,overlayColor:"#777",titleShow:!0,titlePosition:"float",titleFormat:null,titleFromAlt:!1,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:!0,showNavArrows:!0,enableEscapeButton:!0,enableKeyboardNav:!0,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}},jQuery(function(t){t.fancybox.init()})}(jQuery);