
          window.__NEXT_REGISTER_PAGE('/post', function() {
            var comp = module.exports=webpackJsonp([5],{320:function(e,t,n){e.exports=n(321)},321:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(28),o=r(s),u=n(34),a=r(u),c=n(1),i=r(c),l=n(38),f=r(l),d=n(79),p=r(d),h=function(e){return i.default.createElement(f.default,null,i.default.createElement("h1",null,e.show.name),i.default.createElement("p",null,e.show.summary.replace(/<[\/]?p>/g,"")),i.default.createElement("img",{src:e.show.image.medium}))};h.getInitialProps=function(){var e=(0,a.default)(o.default.mark(function e(t){var n,r,s;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query.id,e.next=3,(0,p.default)("https://api.tvmaze.com/shows/"+n);case 3:return r=e.sent,e.next=6,r.json();case 6:return s=e.sent,console.log("Fetched show: "+s.name),e.abrupt("return",{show:s});case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.default=h},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){function s(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(s,o,u){t.push(o=o.toLowerCase()),n.push([o,u]),e=r[o],r[o]=e?e+","+u:u}),{ok:1==(o.status/200|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:s,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}var o=new XMLHttpRequest;o.open(t.method||"get",e);for(var u in t.headers)o.setRequestHeader(u,t.headers[u]);o.withCredentials="include"==t.credentials,o.onload=function(){n(s())},o.onerror=r,o.send(t.body)})};t.default=r},79:function(e,t,n){e.exports=window.fetch||(window.fetch=n(39).default||n(39))}},[320]);
            return { page: comp.default }
          })
        