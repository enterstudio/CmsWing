(function(window){var svgSprite='<svg><symbol id="icon-cmswing-o" viewBox="0 0 1024 1024"><path d="M897.5 311.1c0-16.2-8.7-31.1-22.7-39.2L531.7 74.8c-14-8.1-31.3-8-45.3 0.1L144.1 273.4c-14 8.1-22.6 23.1-22.6 39.3l0.8 395.7c0 16.2 8.7 31.1 22.7 39.2l343.1 197.2c14 8.1 31.3 8 45.3-0.1l342.3-198.5c14-8.1 22.6-23.1 22.6-39.3l-0.8-395.8zM732 801H373.7L207 696.5V521.6l250-157.4V708h275v93z m0-489H429.5L207 451.9V323.5L373.9 219H732v93z" fill="#0071BC" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)