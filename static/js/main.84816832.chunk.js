(this["webpackJsonpcrypto-hunter"]=this["webpackJsonpcrypto-hunter"]||[]).push([[0],{101:function(e,t,n){},112:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),i=n.n(c),o=(n(101),n(38)),s=n(16),l=n(193),d=n(86),u=n(196),j=n(197),b=n(199),p=n(200),h=n(201),g=n(212),f=n(217),m=n(13),O=n(3),x=Object(a.createContext)(),v=function(e){var t=e.children,n=Object(a.useState)("INR"),r=Object(m.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)("\u20b9"),s=Object(m.a)(o,2),l=s[0],d=s[1];return Object(a.useEffect)((function(){"INR"===c?d("\u20b9"):"USD"===c&&d("$")}),[c]),Object(O.jsx)(x.Provider,{value:{currency:c,symbol:l,setCurrency:i},children:t})},y=function(){return Object(a.useContext)(x)},k=Object(l.a)((function(){return{title:{flex:1,color:"gold",fontFamily:"Montserrat",fontWeight:"bold",cursor:"pointer"}}})),C=function(){var e=k(),t=Object(s.e)(),n=y(),a=n.currency,r=n.setCurrency;console.log(a);var c=Object(d.a)({palette:{primary:{main:"#fff"},type:"dark"}});return Object(O.jsx)(u.a,{theme:c,children:Object(O.jsx)(j.a,{color:"transparent",position:"static",children:Object(O.jsx)(b.a,{children:Object(O.jsxs)(p.a,{children:[Object(O.jsx)(h.a,{onClick:function(){return t.push("/")},varient:"h6",className:e.title,children:"Crypto Hunter"}),Object(O.jsxs)(g.a,{variant:"outlined",style:{width:100,height:40,marginLeft:15},value:a,onChange:function(e){return r(e.target.value)},children:[Object(O.jsx)(f.a,{value:"USD",children:"USD"}),Object(O.jsx)(f.a,{value:"INR",children:"INR"})]})]})})})})},w=(n(112),n(25)),_=n(32),M=n(33),S=n.n(M),N=n(85),D=n.n(N),F=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=market_cap_desc&per_page=100&page=1&sparkline=false")},I=function(e){return"https://api.coingecko.com/api/v3/coins/".concat(e)},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=arguments.length>2?arguments[2]:void 0;return"https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=").concat(n,"&days=").concat(t)},B=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")},E=n(213),P=n(215),H=n(204),L=n(164),R=n(205),W=n(206),A=n(207),z=n(208),U=n(209),J=n(210);function G(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function Y(){var e,t=Object(a.useState)([]),n=Object(m.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),o=Object(m.a)(i,2),j=o[0],p=o[1],g=Object(a.useState)(""),f=Object(m.a)(g,2),x=f[0],v=f[1],k=Object(a.useState)(1),C=Object(m.a)(k,2),M=C[0],N=C[1],D=y(),I=D.currency,T=D.symbol,B=Object(l.a)({row:{backgroundColor:"#16171a",cursor:"pointer","&:hover":{backgroundColor:"#131111"},fontFamily:"Montserrat"},pagination:{"& .MuiPaginationItem-root":{color:"gold"}}})(),Y=Object(s.e)(),$=Object(d.a)({palette:{primary:{main:"#fff"},type:"dark"}}),q=function(){var e=Object(_.a)(Object(w.a)().mark((function e(){var t,n;return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,S.a.get(F(I));case 3:t=e.sent,n=t.data,console.log(n),c(n),p(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){q()}),[I]);var K=function(){return r.filter((function(e){return e.name.toLowerCase().includes(x)||e.symbol.toLowerCase().includes(x)}))};return Object(O.jsx)(u.a,{theme:$,children:Object(O.jsxs)(b.a,{style:{textAlign:"center"},children:[Object(O.jsx)(h.a,{variant:"h4",style:{margin:18,fontFamily:"Montserrat"},children:"Cryptocurrency Prices by Market Cap"}),Object(O.jsx)(P.a,{label:"Search For a Crypto Currency..",variant:"outlined",style:{marginBottom:20,width:"100%"},onChange:function(e){return v(e.target.value)}}),Object(O.jsx)(H.a,{component:L.a,children:j?Object(O.jsx)(R.a,{style:{backgroundColor:"gold"}}):Object(O.jsxs)(W.a,{"aria-label":"simple table",children:[Object(O.jsx)(A.a,{style:{backgroundColor:"#EEBC1D"},children:Object(O.jsx)(z.a,{children:["Coin","Price","24h Change","Market Cap"].map((function(e){return Object(O.jsx)(U.a,{style:{color:"black",fontWeight:"700",fontFamily:"Montserrat"},align:"Coin"===e?"":"right",children:e},e)}))})}),Object(O.jsx)(J.a,{children:K().slice(10*(M-1),10*(M-1)+10).map((function(e){var t=e.price_change_percentage_24h>0;return Object(O.jsxs)(z.a,{onClick:function(){return Y.push("/coins/".concat(e.id))},className:B.row,children:[Object(O.jsxs)(U.a,{component:"th",scope:"row",style:{display:"flex",gap:15},children:[Object(O.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"50",style:{marginBottom:10}}),Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(O.jsx)("span",{style:{textTransform:"uppercase",fontSize:22},children:e.symbol}),Object(O.jsx)("span",{style:{color:"darkgrey"},children:e.name})]})]}),Object(O.jsxs)(U.a,{align:"right",children:[T," ",G(e.current_price.toFixed(2))]}),Object(O.jsxs)(U.a,{align:"right",style:{color:t>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[t&&"+",e.price_change_percentage_24h.toFixed(2),"%"]}),Object(O.jsxs)(U.a,{align:"right",children:[T," ",G(e.market_cap.toString().slice(0,-6)),"M"]})]},e.name)}))})]})}),Object(O.jsx)(E.a,{count:((null===(e=K())||void 0===e?void 0:e.length)/10).toFixed(0),style:{padding:20,width:"100%",display:"flex",justifyContent:"center"},classes:{ul:B.pagination},onChange:function(e,t){N(t),window.scroll(0,450)}})]})})}var $=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],c=y(),i=c.currency,s=c.symbol,d=function(){var e=Object(_.a)(Object(w.a)().mark((function e(){var t,n;return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get(B(i));case 2:t=e.sent,n=t.data,console.log(n),r(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){d()}),[i]);var u=Object(l.a)((function(e){return{carousel:{height:"50%",display:"flex",alignItems:"center"},carouselItem:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",textTransform:"uppercase",color:"white"}}}))(),j=n.map((function(e){var t,n=(null===e||void 0===e?void 0:e.price_change_percentage_24h)>=0;return Object(O.jsxs)(o.b,{className:u.carouselItem,to:"/coins/".concat(e.id),children:[Object(O.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"80",style:{marginBottom:10}}),Object(O.jsxs)("span",{children:[null===e||void 0===e?void 0:e.symbol,"\xa0",Object(O.jsxs)("span",{style:{color:n>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[n&&"+",null===e||void 0===e||null===(t=e.price_change_percentage_24h)||void 0===t?void 0:t.toFixed(2),"%"]})]}),Object(O.jsxs)("span",{style:{fontSize:22,fontWeight:500},children:[s," ",G(null===e||void 0===e?void 0:e.current_price.toFixed(2))]})]})}));return Object(O.jsx)("div",{className:u.carousel,children:Object(O.jsx)(D.a,{mouseTracking:!0,infinite:!0,autoPlayInterval:1e3,animationDuration:1500,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:2},512:{items:4}},items:j,autoPlay:!0})})},q=Object(l.a)((function(e){return{banner:{backgroundImage:"url(./banner2.jpg)"},bannerContent:{height:400,display:"flex",flexDirection:"column",paddingTop:25,justifyContent:"space-around"},tagline:{display:"flex",height:"40%",flexDirection:"column",justifyContent:"center",textAlign:"center"},carousel:{height:"50%",display:"flex",alignItems:"center"}}}));var K=function(){var e=q();return Object(O.jsx)("div",{className:e.banner,children:Object(O.jsxs)(b.a,{className:e.bannerContent,children:[Object(O.jsxs)("div",{className:e.tagline,children:[Object(O.jsx)(h.a,{variant:"h2",style:{fontWeight:"bold",marginBottom:15,fontFamily:"Montserrat"},children:"Crypto Hunter"}),Object(O.jsx)(h.a,{variant:"subtitle2",style:{color:"darkgrey",textTransform:"capitalize",fontFamily:"Montserrat"},children:"Get all the Info regarding your favorite Crypto Currency"})]}),Object(O.jsx)($,{})]})})},Q=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(K,{}),Object(O.jsx)(Y,{})]})},V=n(7),X=n(87),Z=n(211),ee=function(e){var t=e.children,n=e.selected,a=e.onClick,r=Object(l.a)({selectbutton:{border:"1px solid gold",borderRadius:5,padding:10,paddingLeft:20,paddingRight:20,fontFamily:"Montserrat",cursor:"pointer",backgroundColor:n?"gold":"",color:n?"black":"",fontWeight:n?700:500,"&:hover":{backgroundColor:"gold",color:"black"},width:"22%"}})();return Object(O.jsx)("span",{onClick:a,className:r.selectbutton,children:t})},te=[{label:"24 Hours",value:1},{label:"30 Days",value:30},{label:"3 Months",value:90},{label:"1 Year",value:365}],ne=function(e){var t=e.coin,n=Object(a.useState)(),r=Object(m.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(1),s=Object(m.a)(o,2),j=s[0],b=s[1],p=y().currency,h=Object(a.useState)(!1),g=Object(m.a)(h,2),f=g[0],x=g[1],v=Object(l.a)((function(e){return{container:Object(V.a)({width:"75%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:25,padding:40},e.breakpoints.down("md"),{width:"100%",marginTop:0,padding:20,paddingTop:0})}}))(),k=function(){var e=Object(_.a)(Object(w.a)().mark((function e(){var n,a;return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get(T(t.id,j,p));case 2:n=e.sent,a=n.data,x(!0),i(a.prices);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(t),Object(a.useEffect)((function(){k()}),[j]);var C=Object(d.a)({palette:{primary:{main:"#fff"},type:"dark"}});return Object(O.jsx)(u.a,{theme:C,children:Object(O.jsx)("div",{className:v.container,children:!c|!1===f?Object(O.jsx)(Z.a,{style:{color:"gold"},size:250,thickness:1}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(X.a,{data:{labels:c.map((function(e){var t=new Date(e[0]),n=t.getHours()>12?"".concat(t.getHours()-12,":").concat(t.getMinutes()," PM"):"".concat(t.getHours(),":").concat(t.getMinutes()," AM");return 1===j?n:t.toLocaleDateString()})),datasets:[{data:c.map((function(e){return e[1]})),label:"Price ( Past ".concat(j," Days ) in ").concat(p),borderColor:"#EEBC1D"}]},options:{elements:{point:{radius:1}}}}),Object(O.jsx)("div",{style:{display:"flex",marginTop:20,justifyContent:"space-around",width:"100%"},children:te.map((function(e){return Object(O.jsx)(ee,{onClick:function(){b(e.value),x(!1)},selected:e.value===j,children:e.label},e.value)}))})]})})})},ae=function(){var e=Object(s.f)().id,t=Object(a.useState)(),n=Object(m.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),o=Object(m.a)(i,2),d=o[0],u=o[1],j=y(),b=j.currency,p=j.symbol,g=function(){var t=Object(_.a)(Object(w.a)().mark((function t(){var n,a;return Object(w.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.get(I(e));case 2:n=t.sent,a=n.data,c(a),u(null===a||void 0===a?void 0:a.description.en.split(". ")[0]);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){g()}),[]);var f=Object(l.a)((function(e){var t,n;return{container:Object(V.a)({display:"flex"},e.breakpoints.down("md"),{flexDirection:"column",alignItems:"center"}),sidebar:(t={width:"30%"},Object(V.a)(t,e.breakpoints.down("md"),{width:"100%"}),Object(V.a)(t,"display","flex"),Object(V.a)(t,"flexDirection","column"),Object(V.a)(t,"alignItems","center"),Object(V.a)(t,"marginTop",25),Object(V.a)(t,"borderRight","2px solid grey"),t),heading:{fontWeight:"bold",marginBottom:20,fontFamily:"Montserrat"},description:{width:"100%",fontFamily:"Montserrat",padding:25,paddingBottom:15,paddingTop:0,textAlign:"justify"},marketData:(n={alignSelf:"start",padding:25,paddingTop:10,width:"100%"},Object(V.a)(n,e.breakpoints.down("md"),{display:"flex",justifyContent:"space-around"}),Object(V.a)(n,e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center"}),Object(V.a)(n,e.breakpoints.down("xs"),{alignItems:"start"}),n)}}))();return r?Object(O.jsxs)("div",{className:f.container,children:[Object(O.jsxs)("div",{className:f.sidebar,children:[Object(O.jsx)("img",{src:null===r||void 0===r?void 0:r.image.large,alt:null===r||void 0===r?void 0:r.name,height:"200",style:{marginBottom:20}}),Object(O.jsx)(h.a,{variant:"h3",className:f.heading,children:null===r||void 0===r?void 0:r.name}),Object(O.jsx)(h.a,{variant:"subtitle1",className:f.description,children:Object(O.jsx)("div",{dangerouslySetInnerHTML:{__html:d}})}),Object(O.jsxs)("div",{className:f.marketData,children:[Object(O.jsxs)("span",{style:{display:"flex"},children:[Object(O.jsx)(h.a,{variant:"h5",className:f.heading,children:"Rank:"}),"\xa0 \xa0",Object(O.jsx)(h.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:G(null===r||void 0===r?void 0:r.market_cap_rank)})]}),Object(O.jsxs)("span",{style:{display:"flex"},children:[Object(O.jsx)(h.a,{variant:"h5",className:f.heading,children:"Current Price:"}),"\xa0 \xa0",Object(O.jsxs)(h.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:[p," ",G(null===r||void 0===r?void 0:r.market_data.current_price[b.toLowerCase()])]})]}),Object(O.jsxs)("span",{style:{display:"flex"},children:[Object(O.jsx)(h.a,{variant:"h5",className:f.heading,children:"Market Cap:"}),"\xa0 \xa0",Object(O.jsxs)(h.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:[p," ",G(null===r||void 0===r?void 0:r.market_data.market_cap[b.toLowerCase()].toString().slice(0,-6)),"M"]})]})]})]}),Object(O.jsx)(ne,{coin:r})]}):Object(O.jsx)(R.a,{style:{backgroundColor:"gold"}})};var re=function(){var e=Object(l.a)((function(){return{App:{backgroundColor:"#14161a",color:"white",minHeight:"100vh"}}}))();return Object(O.jsx)(o.a,{children:Object(O.jsxs)("div",{className:e.App,children:[Object(O.jsx)(C,{}),Object(O.jsx)(s.a,{path:"/",component:Q,exact:!0}),Object(O.jsx)(s.a,{path:"/coins/:id",component:ae})]})})};n(162);i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(v,{children:Object(O.jsx)(re,{})})}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.84816832.chunk.js.map