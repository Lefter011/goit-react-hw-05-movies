"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[89],{243:function(e,n,t){function r(e,n,t,r,c,i,o){try{var a=e[i](o),u=a.value}catch(s){return void t(s)}a.done?n(u):Promise.resolve(u).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,i){var o=e.apply(n,t);function a(e){r(o,c,i,a,u,"next",e)}function u(e){r(o,c,i,a,u,"throw",e)}a(void 0)}))}}t.d(n,{zJ:function(){return h},XK:function(){return p},E3:function(){return s},Zn:function(){return u},Bt:function(){return f}});var i=t(757),o=t.n(i),a="a30d4841442794512b44207ca32f88ba",u=function(){var e=c(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=c(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=c(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(a,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=c(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(a,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=c(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(a,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},89:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(413),c=t(439),i="movieDetails_backBtn__Ct37b",o=t(791),a=t(87),u=t(689),s=t(243),p=t(184),f=function(){var e=(0,o.useState)("/movies"),n=(0,c.Z)(e,2),t=n[0],f=n[1],h=(0,u.UO)().movieId,v=(0,o.useState)({}),d=(0,c.Z)(v,2),l=d[0],b=d[1],m=(0,u.TH)();return(0,o.useEffect)((function(){var e,n;"/movies"===t&&f(null!==(e=null===(n=m.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies"),(0,s.XK)(h).then((function(e){b((0,r.Z)({},e))}))}),[h,m,t]),(0,p.jsx)(p.Fragment,{children:l.id&&(0,p.jsxs)("div",{children:[(0,p.jsx)(a.rU,{to:t,className:i,children:"go back"}),(0,p.jsxs)("div",{children:[l.backdrop_path?(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(l.backdrop_path),alt:""}):(0,p.jsx)("p",{children:"We can't find movie poster :("}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h1",{children:[l.title||l.name,"(",l.release_date.substr(0,4),")"]}),(0,p.jsxs)("p",{children:["User score: ",Number(10*l.vote_average).toFixed(),"%"]}),(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{children:l.overview}),(0,p.jsx)("h2",{children:"Genres:"}),(0,p.jsx)("p",{children:l.genres.map((function(e){return"".concat(e.name," ")}))})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{children:"Additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,p.jsx)(u.j3,{})]})})}},942:function(e,n,t){function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})},413:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(942);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=89.5c8cd6f4.chunk.js.map