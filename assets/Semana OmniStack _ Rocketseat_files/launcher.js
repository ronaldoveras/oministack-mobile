document.cookie='hotid=eyJzaWQiOiI3MjllOWU2Y2FiNDU0YTE2YWVjMDZhYzY2YzNkMjNmYiJ9;expires='+new Date(1611433757295).toUTCString()+';domain='+document.domain+';path=/';
(function(){if(-1==location.pathname.indexOf("/wp-admin/")){window.hotlobj||(window.hotlobj={});var a=window.hotlobj;a.getCookie||(a.getCookie=function(a){a+="\x3d";try{for(var g=document.cookie.split(";"),b=0;b<g.length;b++){var d="undefined"==typeof g[b].trim?g[b]:g[b].trim();if(0==d.indexOf(a))return ck=d.substring(a.length,d.length)}}catch(l){console.error(l.message)}return null});a.getUUID||(a.getUUID=function(){return Math.random().toString(36).substring(2)+(new Date).getTime().toString(36)});
a.getPageViewId||(a.getPageViewId=function(){a.pageViewId||(a.pageViewId="PV"+a.getUUID());return a.pageViewId});a.getTraceId||(a.getTraceId=function(){return"LT"+a.getUUID()});a.getHotId||(a.getHotId=function(){var e=null,e=(e=a.getCookie("hotid"))?"{"===e[0]?JSON.parse(e):JSON.parse(window.atob(e)):{};e.pageview_id=a.getPageViewId();e.trace_id=a.getTraceId();return window.btoa(JSON.stringify(e))});a.sendRequest||(a.sendRequest=function(e,g,b,d,l){var c;c=window.XMLHttpRequest?new XMLHttpRequest:
new ActiveXObject("Microsoft.XMLHTTP");var f=a.getHotId();f&&(d=0<d.length?"hotid\x3d"+f+"\x26"+d:"hotid\x3d"+f);"GET"==g&&(e=e+"?"+d,d="");l&&(c.onreadystatechange=l);c.open(g,e,b);c.setRequestHeader("Content-type","application/x-www-form-urlencoded");c.send(d)});if(!a.hotproxy){a.hotproxy=window.hot;var c=window.hot.q;window.hot=function(){a.hotproxy.apply(this,Array.prototype.slice.call(arguments));var e=window.hot.q,g="";if(e)for(var b=0,d=e.length;b<d;++b){var c=e[b];"hotmart_pixel_integration"==
c["0"]&&(g=c["1"],c["0"]="",c["1"]="")}0<g.length&&a.launcher(document.getElementsByTagName("script")[0],"https://api-pixel.hotmart.com/px.js","hotmart_pixel_integration\x3d"+encodeURIComponent(g))};window.hot.q=c}a.launcher||(a.launcher=function(a,c,b){var d=document.createElement("script"),f=window.hot.q;if(f)for(var h=0,k=f.length;h<k;++h){var m=f[h];"send"!=m["0"]&&0<m["0"].length&&(0<b.length&&(b+="\x26"),b=b+m["0"]+"\x3d"+encodeURIComponent(m["1"]))}0<=c.indexOf("id.js")&&document.referrer&&(0<b.length&&
(b+="\x26"),b=b+"prev\x3d"+encodeURIComponent(document.referrer));0<b.length&&(c=c+"?"+b);d.src=c;d.async=1;a.parentNode.insertBefore(d,a)});if(!a.loadModules){a.loadModules=function(){if(4==this.readyState&&200==this.status)for(var c=JSON.parse(this.responseText),f=document.getElementsByTagName("script")[0],b=0,d=c.length;b<d;b++)0>c[b].indexOf("px.js")&&a.launcher(f,c[b],"")};var f=window.hot.q,n="";if(f)for(var c=0,k=f.length;c<k;++c){var h=f[c];"account"==h["0"]&&(n=h["0"]+"\x3d"+h["1"])}a.sendRequest("//launcher.hotmart.com/rest/v1/module/load-js",
"GET",!0,n,a.loadModules);if(window.hot.q&&window.hot.q.length)for(f=window.hot.q,c=0,k=f.length;c<k;++c)h=f[c],"hotmart_pixel_integration"==h["0"]&&window.hot.apply(this,Array.prototype.slice.call(h))}}})();