(this["webpackJsonprewards-store"]=this["webpackJsonprewards-store"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,c){},,,,,,,function(e,t,c){},,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),r=c.n(s),n=c(18),a=c.n(n),o=(c(17),c(9)),i=c(2),l=(c(24),c(4)),j=c(8),u=c.n(j),d=c(11),b="https://coding-challenge-api.aerolab.co",h={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZmNjE3NDY3Mjk2ZTAwMTk5NjQxNDgiLCJpYXQiOjE2MjczNDkzNjR9.RXl7IBspfCgl_O49ryUTUo57QYHpKi6ZQjTXRJSzEJg"},m={method:"GET",headers:h,redirect:"follow"},p=function(){var e=Object(d.a)(u.a.mark((function e(t,c){var s,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(b,"/user/me"),m);case 3:return s=e.sent,e.next=6,s.json();case 6:r=e.sent,t(r),c(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),c(!1),console.log("error",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,c){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(u.a.mark((function e(t,c){var s,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(b,"/products"),m);case 3:return s=e.sent,e.next=6,s.json();case 6:r=e.sent,t(r),c(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,c){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(u.a.mark((function e(t){var c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(b,"/user/history"),m);case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,t(s.reverse()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(u.a.mark((function e(t,c,s,r){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.stringify({amount:t}),a={method:"POST",headers:h,body:n,redirect:"follow"},e.prev=2,e.next=5,fetch("".concat(b,"/user/points"),a);case 5:c(!0),s(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("error",e.t0),r(!0);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,c,s,r){return e.apply(this,arguments)}}(),_=function(){var e=Object(d.a)(u.a.mark((function e(t,c,s,r,n){var a,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.stringify({productId:t}),o={method:"POST",headers:h,body:a,redirect:"follow"},e.prev=2,e.next=5,fetch("".concat(b,"/redeem"),o);case 5:c(!0),s([]),r(!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("error",e.t0),n(!0);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,c,s,r,n){return e.apply(this,arguments)}}(),g=c(0),v=Object(s.createContext)();function N(e){var t=Object(s.useState)([]),c=Object(l.a)(t,2),r=c[0],n=c[1],a=Object(s.useState)(!1),o=Object(l.a)(a,2),i=o[0],j=o[1];return Object(s.useEffect)((function(){(0===r.length||i)&&p(n,j)}),[r,i]),Object(g.jsx)(v.Provider,{value:{userData:r,setUserData:n,refresh:i,setRefresh:j},children:e.children})}var y=function(){var e=Object(s.useContext)(v).userData;return Object(g.jsxs)("header",{className:"header",children:[Object(g.jsxs)("nav",{className:"header__nav",children:[Object(g.jsx)(o.b,{to:"/rewards-store",children:Object(g.jsx)("img",{className:"header__logo",src:"https://i.imgur.com/98mRTol.png",alt:"logo-aerolab"})}),Object(g.jsxs)("ul",{className:"header__navbar",children:[Object(g.jsx)("li",{children:Object(g.jsx)(o.b,{className:"header__navbar--options",to:"/rewards-store",children:"Shop"})}),Object(g.jsx)("li",{children:Object(g.jsx)(o.b,{className:"header__navbar--options",to:"/rewards-store/orders",children:"Orders"})}),Object(g.jsx)("li",{children:Object(g.jsx)(o.b,{className:"header__navbar--options",to:"/rewards-store/getcoins",children:"Get Coins"})})]})]}),Object(g.jsxs)("div",{className:"header__userbox",children:[Object(g.jsx)("p",{className:"header__username",children:e.name}),Object(g.jsxs)("div",{className:"header__balancebox",children:[Object(g.jsx)("p",{className:"header__balancebox--balance",children:e.points}),Object(g.jsx)("img",{className:"header__balancebox--icon",src:"https://i.imgur.com/Kfvvqtj.png",alt:"icon of balance"})]})]})]})},C=(c(35),c(36),Object(s.createContext)());function w(e){var t=Object(s.useState)([]),c=Object(l.a)(t,2),r=c[0],n=c[1],a=Object(s.useState)("All Categories"),o=Object(l.a)(a,2),i=o[0],j=o[1],u=Object(s.useState)("All Prices"),d=Object(l.a)(u,2),b=d[0],h=d[1],m=Object(s.useState)([]),p=Object(l.a)(m,2),x=p[0],f=p[1];Object(s.useEffect)((function(){0===r.length&&O(n,f)}),[r]);var _={productsData:r,setProductsData:n,byCategories:i,setByCategories:j,byPrices:b,setByPrices:h,filterList:x,setFilterList:f};return Object(g.jsx)(C.Provider,{value:_,children:e.children})}var S=function(){var e=Object(s.useContext)(C),t=e.productsData,c=e.byCategories,r=e.setByCategories,n=e.byPrices,a=e.setByPrices,o=e.setFilterList;function i(e,t){return"Prices: Low to High"===n?e.cost-t.cost:"Prices: High to Low"===n?t.cost-e.cost:0}function l(){return t.filter((function(e){return"All Categories"!==c?e.category===c:e})).sort(i)}Object(s.useEffect)((function(){o(l)}),[c,n]);var j=function(e){return e.map((function(e){return Object(g.jsx)("option",{className:"filters__select--options",value:e,children:e})}))};return Object(g.jsxs)("section",{className:"filters",children:[Object(g.jsx)("p",{className:"filters__text",children:"Short by:"}),Object(g.jsx)("select",{className:"filters__select",value:c,onChange:function(e){r(e.target.value)},children:j(["All Categories","Phones","Gaming","Laptops","Cameras","Monitors & TV","Drones","Phone Accessories","Smart Home","Audio","Tablets & E-readers"])}),Object(g.jsx)("select",{className:"filters__select",value:n,onChange:function(e){a(e.target.value)},children:j(["All Prices","Prices: Low to High","Prices: High to Low"])})]})},P=(c(37),Object(s.createContext)());function k(e){var t=Object(s.useState)([]),c=Object(l.a)(t,2),r=c[0],n=c[1];return Object(s.useEffect)((function(){0===r.length&&x(n)}),[r]),Object(g.jsx)(P.Provider,{value:{ordersData:r,setOrdersData:n},children:e.children})}var E=Object(s.createContext)();function D(e){var t=Object(s.useState)(!1),c=Object(l.a)(t,2),r=c[0],n=c[1],a=Object(s.useState)(!1),o=Object(l.a)(a,2),i={showError:r,setShowError:n,showSuccess:o[0],setShowSuccess:o[1]};return Object(g.jsx)(E.Provider,{value:i,children:e.children})}var R=function(e){var t=e.idProduct,c=e.image,r=e.name,n=e.category,a=e.cost,i=Object(s.useContext)(v),l=i.userData,j=i.setRefresh,u=Object(s.useContext)(P).setOrdersData,d=Object(s.useContext)(E),b=d.setShowSuccess,h=d.setShowError;function m(e,t){return l.points>a?e:t}var p=Object(g.jsx)("img",{className:"product__icon",src:"https://i.imgur.com/Hxq4bDl.png",alt:"icon blue buy"}),O=Object(g.jsx)("img",{className:"product__icon--hover",src:"https://i.imgur.com/7uHsCoj.png",alt:"icon blue buy"}),x=Object(g.jsxs)("p",{className:"product__pointsremaining",children:["You need ",a-l.points,Object(g.jsx)("img",{className:"product__pointsremaining--icon",src:"https://i.imgur.com/Kfvvqtj.png",alt:"icon coin"})]}),f=m(!1,!0),N=Object(g.jsx)("button",{className:"product__btn",disabled:f,onClick:function(){_(t,j,u,b,h)},children:"Enjoy and Reedem Now"}),y=Object(g.jsx)(o.b,{to:"/getcoins",children:Object(g.jsx)("button",{className:"product__btn disable",children:"GET MORE COINS"})});return Object(g.jsxs)("div",{className:"product",children:[m(p,x),m(O,null),Object(g.jsx)("img",{className:"product__image",src:c,alt:r}),Object(g.jsx)("hr",{className:"product__line"}),Object(g.jsx)("p",{className:"product__category",children:n}),Object(g.jsx)("p",{className:"product__name",children:r}),Object(g.jsxs)("div",{className:"product__hover",children:[Object(g.jsxs)("div",{className:"product__price",children:[Object(g.jsx)("p",{className:"product__price--value",children:a}),Object(g.jsx)("img",{className:"product__price--icon",src:"https://i.imgur.com/Kfvvqtj.png",alt:"icon coin"})]}),m(N,y)]})]})};c(38);var T=function(e){var t=e.prevPage,c=e.nextPage,s=e.jump,r=e.numberJump,n=function(){for(var e=[],t=1;t<=r;t++)e.push(t);return e}().map((function(e){return Object(g.jsx)("button",{className:"pagination__btn",onClick:function(){return s(e)},children:e},e)}));return Object(g.jsxs)("div",{className:"pagination",children:[Object(g.jsx)("button",{className:"pagination__btn right",onClick:t,children:"v"}),n,Object(g.jsx)("button",{className:"pagination__btn left",onClick:c,children:"v"})]})};var I=function(e,t){var c=Object(s.useState)(1),r=Object(l.a)(c,2),n=r[0],a=r[1],o=Math.ceil(e.length/t);return{currentData:function(){var c=(n-1)*t,s=c+t;return e.slice(c,s)},next:function(){a((function(e){return Math.min(e+1,o)}))},prev:function(){a((function(e){return Math.max(e-1,1)}))},jump:function(e){var t=Math.max(1,e);a((function(e){return Math.min(t,o)}))}}};var J=function(){var e=Object(s.useContext)(C).filterList,t=Object(s.useState)(1),c=Object(l.a)(t,2),r=c[0],n=c[1],a=I(e,16,r,n),o=e.length,i=a.currentData().length,j=Math.ceil(o/16),u=a.currentData().map((function(e){var t=e._id,c=e.img.hdUrl,s=e.name,r=e.category,n=e.cost;return Object(g.jsx)(R,{idProduct:t,image:c,name:s,category:r,cost:n},t)}));return Object(g.jsxs)("section",{className:"shop",children:[Object(g.jsx)("img",{className:"shop__hero",src:"https://i.imgur.com/8h9OLfy.png",alt:""}),Object(g.jsx)("h1",{className:"shop__title",children:"Electronics"}),Object(g.jsxs)("div",{className:"shop__pagination",children:[Object(g.jsx)("p",{className:"shop__pagination--text",children:"".concat(i," of ").concat(o," Products")}),Object(g.jsx)(S,{}),Object(g.jsx)("div",{className:"shop__pagination--topbox",children:Object(g.jsx)(T,{prevPage:a.prev,nextPage:a.next,jump:a.jump,numberJump:j})})]}),Object(g.jsx)("section",{className:"shop__products",children:u}),Object(g.jsx)("div",{className:"shop__pagination--botbox",children:Object(g.jsx)(T,{prevPage:a.prev,nextPage:a.next,jump:a.jump,numberJump:j})})]})};c(39),c(40);var M=function(e){var t=e.id,c=e.name,s=e.category,r=e.cost,n=e.date,a=e.img;return Object(g.jsxs)("div",{className:"order",children:[Object(g.jsx)("img",{className:"order__img",src:a,alt:""}),Object(g.jsxs)("article",{className:"order__data",children:[Object(g.jsx)("p",{className:"order__data--text",children:c}),Object(g.jsx)("p",{className:"order__data--text",children:s}),Object(g.jsxs)("p",{className:"order__data--text",children:["Cost: ",r]}),Object(g.jsxs)("p",{className:"order__data--text",children:["Date: ",n]}),Object(g.jsxs)("p",{className:"order__data--text",children:["Id: ",t]})]})]})};var A=function(){var e=Object(s.useContext)(P).ordersData,t=I(e,10),c=e.length,r=Math.ceil(c/10),n=t.currentData().map((function(e){var t=e.productId,c=e.name,s=e.category,r=e.cost,n=e.createDate,a=e.img.hdUrl;return Object(g.jsx)(M,{id:t,name:c,category:s,cost:r,date:n,img:a},t)}));return Object(g.jsxs)("section",{className:"redeems",children:[Object(g.jsx)("h2",{className:"redeems__title",children:"ORDERS HISTORY"}),Object(g.jsx)("h3",{className:"redeems__subtitle",children:"History of your orders"}),Object(g.jsx)("div",{className:"redeems__pagination",children:Object(g.jsx)(T,{prevPage:t.prev,nextPage:t.next,jump:t.jump,numberJump:r})}),Object(g.jsx)("div",{className:"redeems__orders",children:n}),Object(g.jsx)("div",{className:"redeems__pagination",children:Object(g.jsx)(T,{prevPage:t.prev,nextPage:t.next,jump:t.jump,numberJump:r})})]})};c(41);var H=function(){var e=Object(s.useContext)(v).setRefresh,t=Object(s.useContext)(E),c=t.setShowSuccess,r=t.setShowError,n=function(t){f(t,e,c,r)};return Object(g.jsxs)("section",{className:"coins",children:[Object(g.jsx)("h2",{className:"coins__title",children:"GET MORE COINS"}),Object(g.jsx)("h3",{className:"coins__subtitle",children:"choose your favorite package now."}),Object(g.jsxs)("div",{className:"coins__container",children:[Object(g.jsxs)("button",{className:"coins__container--btn",onClick:function(){return n(1e3)},children:["1000"," ",Object(g.jsx)("img",{className:"coins__container--img",src:"https://i.imgur.com/Kfvvqtj.png",alt:"coin icon"})]}),Object(g.jsxs)("button",{className:"coins__container--btn",onClick:function(){return n(5e3)},children:["5000",Object(g.jsx)("img",{className:"coins__container--img",src:"https://i.imgur.com/Kfvvqtj.png",alt:"coin icon"})]}),Object(g.jsxs)("button",{className:"coins__container--btn",onClick:function(){return n(7500)},children:["7500",Object(g.jsx)("img",{className:"coins__container--img",src:"https://i.imgur.com/Kfvvqtj.png",alt:"coin icon"})]})]})]})};c(42);var L=function(){var e=Object(s.useContext)(E),t=e.showError,c=e.setShowError,r=t?"background__modalerror":"background__modalerror disable";return Object(g.jsx)("div",{className:r,children:Object(g.jsxs)("div",{className:"modalerror",children:[Object(g.jsx)("img",{className:"modalerror__gif",src:"https://media4.giphy.com/media/Q9YsfdL4IHP9PtTVYo/giphy.gif?cid=790b7611b654ca587e4ebf4c0170764d1c5dfc266b354c1e&rid=giphy.gif&ct=g",alt:"gif face confused"}),Object(g.jsx)("h3",{className:"modalerror__title",children:"ERROR...so sorry!"}),Object(g.jsx)("p",{className:"modalerror__text",children:"OH NO! Something went wrong..."}),Object(g.jsx)("button",{className:"modalerror__btn",onClick:function(){return c(!1)},children:"TRY AGAYN"})]})})};c(43);var U=function(){var e=Object(s.useContext)(E),t=e.showSuccess,c=e.setShowSuccess,r=t?"background__modalsuccess":"background__modalsuccess disable";return Object(g.jsx)("div",{className:r,children:Object(g.jsxs)("div",{className:"modalsuccess",children:[Object(g.jsx)("img",{className:"modalsuccess__gif",src:"https://media0.giphy.com/media/18lTyvKRQTnSaQ1otq/giphy.gif?cid=790b7611789b256538f08208a50419c4d1b30cf61f7fe9a9&rid=giphy.gif&ct=g",alt:"gif face happy"}),Object(g.jsx)("h3",{className:"modalsuccess__title",children:"SUCCESS!"}),Object(g.jsx)("p",{className:"modalsuccess__text",children:"WUJU! Everything is working."}),Object(g.jsx)("button",{className:"modalsuccess__btn",onClick:function(){return c(!1)},children:"CONTINUE"})]})})};var Y=function(){return Object(g.jsx)(o.a,{children:Object(g.jsx)(D,{children:Object(g.jsx)(k,{children:Object(g.jsx)(w,{children:Object(g.jsx)(N,{children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(y,{}),Object(g.jsx)(L,{}),Object(g.jsx)(U,{}),Object(g.jsx)("main",{className:"main",children:Object(g.jsxs)(i.c,{children:[Object(g.jsx)(i.a,{exact:!0,path:"/rewards-store",component:J}),Object(g.jsx)(i.a,{path:"/rewards-store/orders",component:A}),Object(g.jsx)(i.a,{path:"/rewards-store/getcoins",component:H})]})})]})})})})})})};a.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(Y,{})}),document.getElementById("root"))}],[[44,1,2]]]);
//# sourceMappingURL=main.4f89728f.chunk.js.map