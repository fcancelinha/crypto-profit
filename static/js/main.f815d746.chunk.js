(this["webpackJsonpcrypto-profit"]=this["webpackJsonpcrypto-profit"]||[]).push([[0],{143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(44),o=n.n(r),c=n(8),i=n(213),l=n(40),s=n.n(l),d=n(50),A="5270fde8dfa2f7839dba6b3aae254210c3b9eed5",u={mode:"cors",credentials:"same-origin"},b=function(){var e=Object(d.a)(s.a.mark((function e(){var t,n,a,r=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"USD",n=r.length>1&&void 0!==r[1]?r[1]:100,e.next=4,fetch("https://api.nomics.com/v1/currencies/ticker?key=".concat(A,"&interval=1h,1dd&convert=").concat(t,"&per-page=").concat(n,"&status=active"),u);case 4:if(!(a=e.sent).ok){e.next=9;break}return e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=b,m=n(215),x=n(192),h=n(209),p=n(216),O=n(14),f=n(214),y=n(1),g={title:{color:"#ffb300"},text:{fontFamily:"Cairo",color:"#eeeeee"}},v=function(){return Object(y.jsxs)(f.a,{variant:"h3",sx:Object(O.a)(Object(O.a)({},g.text),{},{pt:1}),children:["CRYPTO PROFIT"," ",Object(y.jsx)("span",{style:g.title,children:"\u20bf"})]})},F=n(191),C=n(100),B=n.n(C),T=function(e){var t=e.symbol,n=e.cryptoPrice,a=e.priceChange,r=e.currency,o=a.startsWith("-")?"red":"green",c=n.substring(0,n.length-4);return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(f.a,{variant:"subtitle2",sx:{color:o,ml:1,fontSize:10},children:["[",t,"] - ",r," ",c]})})},M=function(e){var t=e.cryptoList,n=e.currency;return console.log("cryptoList",t),Object(y.jsx)(F.a,{sx:{pt:.2},children:Object(y.jsx)(B.a,{pauseOnHover:!0,gradientColor:[0,0,0],gradientWidth:80,children:t.map((function(e){return Object(y.jsx)(T,{currency:n,symbol:e.symbol,cryptoPrice:e.price,priceChange:e["1h"].price_change},e.id)}))})})},k=function(e){var t=Object(a.useState)(""),n=Object(c.a)(t,2),r=n[0],o=n[1],i=/^[0-9]+([\\,\\.]?)([0-9]{1,20})?$/g;return{type:e,value:r,onChange:function(e){var t=e.target.value.toString();!t.match(i)&&t||o(t)}}},U=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=Object(a.useState)(e),n=Object(c.a)(t,2),r=n[0],o=n[1],i=function(){o(!r)};return[r,i]},J=n(202),w=n(193),E=n(217),V=function(e){var t=parseFloat(e);return isNaN(t)?0:t},S=function(e){var t=e.value,n=e.inProfit,a=e.options,r=e.display,o={color:n?"green":"red"};return Object(y.jsx)(f.a,{sx:{color:r?o.color:"",fontSize:21},children:Intl.NumberFormat("en-US",Object(O.a)({},a)).format(t)})},R=function(e){var t=e.totalFees;return Object(y.jsxs)(F.a,{sx:{fontSize:11,color:"primary.main",ml:"auto",mr:"auto"},children:["\xa0\xa0\xa0\xa0( - ",t.toFixed(2)," $ Total fees )"]})},I=function(e){var t=e.values,n={style:"currency",currency:e.selectedCurrency.currency};return Object(y.jsxs)(x.a,{sx:{textAlign:"center",mt:3},children:[Object(y.jsx)(f.a,{variant:"subtitle2",color:"primary.main",children:"NET GAIN"}),Object(y.jsx)(x.a,{sx:{display:"flex",justifyContent:"center"},children:Object(y.jsx)(S,{value:t.profit,inProfit:t.inProfit,options:Object(O.a)(Object(O.a)({},n),{},{signDisplay:"exceptZero"}),display:!0})}),Object(y.jsx)(f.a,{variant:"caption",children:t.totalFee>0&&Object(y.jsx)(R,{totalFees:t.totalFee})}),Object(y.jsx)(f.a,{variant:"subtitle2",sx:{mt:1},color:"primary.main",children:"TOTAL"}),Object(y.jsx)(S,{value:t.total,inProfit:t.inProfit,options:n,display:!1})]})},W=n(210),N=n(211),D=n(218),Y=n(103),q=n.n(Y),L=n(102),H=n.n(L),z=n(101),G=n.n(z),Q=n(195),P={width:300},K={width:230},Z=function(e){var t=e.fields,n=e.selectedCurrency,a=e.btc,r=e.mode,o=e.setMode,i=U(!1),l=Object(c.a)(i,2),s=l[0],d=l[1],A=function(e,t,n){var a={amount:V(e.coinAmount.value),buy:V(e.buyValue.value),sell:V(e.sellValue.value),buyFee:V(e.buyFee.value),sellFee:V(e.sellFee.value)},r=0,o=0;a.sell&&a.buy&&a.amount&&(r=n?a.amount:a.amount*a.buy,o=n?a.amount*a.sell/a.buy:a.amount*a.sell);var c=n?a.amount/t.price:a.amount*a.buy/t.price,i=isFinite(c)?c.toFixed(10):0,l=a.buyFee?r*(.01*a.buyFee):0,s=a.sellFee?o*(.01*a.sellFee):0,d=l+s,A=o-r-d;return{profit:A,total:r+A,totalFee:d,investmentFee:l,exitFee:s,inProfit:o>r,investToBtc:i}}(t,a,r),u="Investment Fee: ".concat(A.investmentFee.toFixed(2)," $"),b="Selling Fee: ".concat(A.exitFee.toFixed(2)," $");return Object(y.jsxs)(w.a,{direction:"column",justifyContent:"center",alignItems:"center",sx:{mt:2},"aria-labelledby":"stack-stack","aria-describedby":"stack-stack-description",children:[Object(y.jsx)(J.a,Object(O.a)(Object(O.a)({id:"investement-amount",fullWidth:!0},t.coinAmount),{},{variant:"outlined",sx:Object(O.a)(Object(O.a)({},P),{},{mt:1}),helperText:"\u2248 ".concat(A.investToBtc," BTC"),placeholder:"0",InputProps:{startAdornment:Object(y.jsx)(E.a,{position:"start",children:r?n.symbol:"\u20bf"}),endAdornment:Object(y.jsx)(W.a,{variant:"contained",size:"medium",onClick:o,sx:{width:3,minWidth:3,height:31,borderRadius:5},children:Object(y.jsx)(N.a,{title:"Change between fiat investment and token amount",placement:"top",TransitionComponent:Q.a,TransitionProps:{timeout:500},children:Object(y.jsx)(G.a,{position:"end"})})})},label:r?"Investment Amount":"Coin Amount"})),Object(y.jsx)(J.a,Object(O.a)(Object(O.a)({id:"buy-value"},t.buyValue),{},{variant:"outlined",placeholder:"0",sx:Object(O.a)(Object(O.a)({},P),{},{mt:2,mb:2}),InputProps:{startAdornment:Object(y.jsx)(E.a,{position:"start",children:n.symbol})},label:"Buy Value"})),Object(y.jsx)(J.a,Object(O.a)(Object(O.a)({id:"sell-value"},t.sellValue),{},{variant:"outlined",placeholder:"0",sx:Object(O.a)(Object(O.a)({},P),{},{mt:2,mb:2}),InputProps:{startAdornment:Object(y.jsx)(E.a,{position:"start",children:n.symbol})},label:"Sell Value"})),Object(y.jsx)(N.a,{title:"Fees",placement:"top",TransitionComponent:Q.a,TransitionProps:{timeout:500},children:Object(y.jsx)(W.a,{variant:"contained",color:"primary",size:"small",style:{minWidth:2,width:40,height:40,borderRadius:20},onClick:function(){d()},children:s?Object(y.jsx)(H.a,{size:"large"}):Object(y.jsx)(q.a,{size:"large"})})}),Object(y.jsx)(D.a,{in:s,children:Object(y.jsxs)(w.a,{children:[Object(y.jsx)(J.a,Object(O.a)(Object(O.a)({id:"buy-fee"},t.buyFee),{},{variant:"outlined",sx:Object(O.a)(Object(O.a)({},K),{},{mt:2,mb:1}),helperText:u,InputProps:{startAdornment:Object(y.jsx)(E.a,{position:"start",children:"%"})},label:"Buy Fee",placeholder:"0"})),Object(y.jsx)(J.a,Object(O.a)(Object(O.a)({id:"sell-fee"},t.sellFee),{},{variant:"outlined",sx:Object(O.a)(Object(O.a)({},K),{},{mt:2}),helperText:b,InputProps:{startAdornment:Object(y.jsx)(E.a,{position:"start",children:"%"})},label:"Sell Fee",placeholder:"0"}))]})}),Object(y.jsx)(I,{values:A,selectedCurrency:n})]})},X=n(3),$=n(65),_=n(205),ee=n(219),te=n(212),ne={tabs:Object(X.a)({maxWidth:480},"& .".concat($.a.scrollButtons),{"&.Mui-disabled":{opacity:.3}}),tab:{minWidth:20,height:80,width:80},tabAvatar:{width:37,height:37}},ae=function(e){var t=e.cryptoList,n=e.selectedCoin,a=e.handleCoinSelection;return Object(y.jsx)(x.a,{sx:{display:"flex",justifyContent:"center",mt:3},children:Object(y.jsx)(_.a,{variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,textColor:"primary",indicatorColor:"primary",sx:ne.tabs,value:n,onChange:function(e,t){a(t)},"aria-label":"crypto-horizontal-tab-list","aria-describedby":"crypto-horizontal-tab-description",children:t.map((function(e){return Object(y.jsx)(ee.a,{id:"x.id",value:e,sx:ne.tab,label:e.currency,icon:Object(y.jsx)(te.a,{alt:e.currency,src:e.logo_url,sx:ne.tabAvatar})},e.id)}))})})},re=n(206),oe=n(203),ce=n(46),ie={display:"flex",flexDirection:"column",justifyContent:"center",position:"absolute",top:"42%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.default",color:"text.primary",borderRadius:5,p:4},le=function(e){var t=e.open,n=e.handleClose,a=e.cryptoList,r=e.handleCoinSelection,o="dark"===Object(ce.a)().palette.mode?"0px 0px 10px 1px #ffb300":23;return Object(y.jsx)(oe.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(y.jsxs)(x.a,{sx:ie,boxShadow:o,children:[Object(y.jsx)(f.a,{sx:{alignSelf:"center"},id:"modal-modal-title",variant:"h6",component:"h2",children:"[ SEARCH ]"}),Object(y.jsx)(re.a,{id:"crypto-search",options:a,onChange:function(e,t){r(t)},getOptionLabel:function(e){return"".concat(e.id," ").concat(e.name)},sx:{width:250,mt:3,ml:2,alignSelf:"center"},renderOption:function(e,t){return Object(y.jsxs)(x.a,Object(O.a)(Object(O.a)({component:"li",sx:{"& > img":{mr:5,flexShrink:1}}},e),{},{children:[Object(y.jsx)(te.a,{alt:t.currency,src:t.logo_url}),Object(y.jsxs)(f.a,{variant:"caption",sx:{ml:4,fontWeight:"bold"},children:[t.id," - ",t.name," "]})]}))},renderInput:function(e){return Object(y.jsx)(J.a,Object(O.a)(Object(O.a)({},e),{},{label:"Search by tag or name",variant:"standard"}))}})]})})},se=n(220),de=function(e){var t=e.curOpen,n=e.handleFiatSelection;return Object(y.jsx)(x.a,{sx:{position:"fixed",right:0,bottom:0,mb:3},children:Object(y.jsx)(Q.a,Object(O.a)(Object(O.a)({in:t},{timeout:500}),{},{children:Object(y.jsxs)(w.a,{direction:"column",alignItems:"flex-end",children:[Object(y.jsxs)(x.a,{sx:{mr:5.4},children:[Object(y.jsx)(se.a,{size:"small",color:"secondary",onClick:function(){return n({currency:"USD",symbol:"$"})},children:"$"}),Object(y.jsx)(f.a,{sx:{ml:1},variant:"caption",color:"secondary",children:"USD"})]}),Object(y.jsxs)(x.a,{sx:{mr:11.5,mb:1},children:[Object(y.jsx)(se.a,{size:"small",color:"secondary",onClick:function(){return n({currency:"EUR",symbol:"\u20ac"})},children:"\u20ac"}),Object(y.jsx)(f.a,{sx:{ml:1},variant:"caption",color:"secondary",children:"EUR"})]}),Object(y.jsxs)(x.a,{sx:{mr:15.5,mb:2},children:[Object(y.jsx)(se.a,{size:"small",color:"secondary",onClick:function(){return n({currency:"GBP",symbol:"\xa3"})},children:"\xa3"}),Object(y.jsx)(f.a,{sx:{ml:1},variant:"caption",color:"secondary",children:"GBP"})]}),Object(y.jsxs)(x.a,{sx:{mr:17.5},children:[Object(y.jsx)(se.a,{size:"small",color:"secondary",onClick:function(){return n({currency:"KRW",symbol:"\u20a9"})},children:"\u20a9"}),Object(y.jsx)(f.a,{sx:{ml:1},variant:"caption",color:"secondary",children:"KRW"})]})]})}))})},Ae=function(){var e=Object(d.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.exchangerate.host/convert?from=".concat(t,"&to=").concat(n));case 2:if(!(a=e.sent).ok){e.next=7;break}return e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ue=Ae,be=function(){var e=Object(d.a)(s.a.mark((function e(t,n,a,r){var o,c,i,l,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue(n,a);case 2:o=e.sent,c=o.info.rate,i=(t.coinAmount.value/c).toFixed(2),l=(t.buyValue.value/c).toFixed(2),d=(t.sellValue.value/c).toFixed(2),r&&t.coinAmount.onChange({target:{value:i}}),t.buyValue.onChange({target:{value:l}}),t.sellValue.onChange({target:{value:d}});case 10:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),je=n(108),me=n.n(je),xe=n(106),he=n.n(xe),pe=n(105),Oe=n.n(pe),fe=n(104),ye=n.n(fe),ge=n(109),ve=n.n(ge),Fe=n(107),Ce=n.n(Fe),Be={fabBox:{display:"flex",backgroundColor:"transparent",justifyContent:"flex-end",flexDirection:"column",position:"fixed",right:0,bottom:0,mb:5,mr:5},fabMenu:{position:"fixed",right:0,bottom:0,height:369,width:369,borderTopLeftRadius:500,display:"flex",flexDirection:"column",justifyContent:"flex-end",boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"},fabMenuButtonBox:{display:"flex",flexDirection:"column",justifyContent:"center",alignSelf:"flex-end"},fabMenuButtonLabel:{position:"absolute"}},Te=function(e){var t=e.handleThemeChange,n=e.selectedCoin,r=e.cryptoList,o=e.handleCoinSelection,i=e.setSelectedCurrency,l=e.fields,s=e.selectedCurrency,d=e.mode,A=U(!1),u=Object(c.a)(A,2),b=u[0],j=u[1],m=U(!1),h=Object(c.a)(m,2),g=h[0],v=h[1],F=Object(a.useState)(!1),C=Object(c.a)(F,2),B=C[0],T=C[1];return Object(y.jsxs)(x.a,{sx:Object(O.a)({},Be.fabBox),bgcolor:"background.default","aria-label":"menu",children:[Object(y.jsx)(Q.a,Object(O.a)(Object(O.a)({in:b},b?{timeout:800}:{timeout:600}),{},{children:Object(y.jsxs)(x.a,{sx:Object(O.a)({},Be.fabMenu),bgcolor:"primary.main",children:[Object(y.jsxs)(w.a,{direction:"column",alignItems:"flex-end",sx:{mb:4.2},children:[Object(y.jsxs)(x.a,{sx:Be.fabMenuButtonBox,children:[Object(y.jsx)(se.a,{color:"secondary",sx:{mr:9},"aria-label":"search-crypto-currency",onClick:function(){return T(!0)},children:Object(y.jsx)(ye.a,{})}),Object(y.jsx)(f.a,{variant:"caption",color:"secondary",sx:Object(O.a)(Object(O.a)({},Be.fabMenuButtonLabel),{},{bottom:218,left:248,mb:2}),children:"Search"})]}),Object(y.jsx)(x.a,{sx:Be.fabMenuButtonBox,children:Object(y.jsxs)(p.a,{underline:"none",href:"https://forms.gle/YYc541x2QiF1CfaKA",target:"_blank",rel:"noreferrer",children:[Object(y.jsx)(se.a,{color:"secondary",sx:{mr:20,mb:2.3},"aria-label":"feedback",children:Object(y.jsx)(Oe.a,{})}),Object(y.jsx)(f.a,{variant:"caption",color:"secondary",sx:Object(O.a)(Object(O.a)({},Be.fabMenuButtonLabel),{},{bottom:162,left:154,mb:2}),children:"Feedback"})]})}),Object(y.jsxs)(x.a,{sx:Be.fabMenuButtonBox,children:[Object(y.jsx)(se.a,{color:"secondary",sx:{mr:28,mb:5},onClick:function(){return v()},"aria-label":"change-fiat-currency",children:Object(y.jsx)(he.a,{})}),Object(y.jsx)(f.a,{variant:"caption",color:"secondary",sx:Object(O.a)(Object(O.a)({},Be.fabMenuButtonLabel),{},{bottom:90,left:90,mb:2}),children:"Currency"})]}),Object(y.jsxs)(x.a,{sx:Be.fabMenuButtonBox,children:[Object(y.jsx)(se.a,{color:"secondary",sx:{mr:32},"aria-label":"darkmode",onClick:t,children:Object(y.jsx)(Ce.a,{})}),Object(y.jsx)(f.a,{variant:"caption",color:"secondary",sx:Object(O.a)(Object(O.a)({},Be.fabMenuButtonLabel),{},{bottom:6,left:54}),children:"Darkmode"})]})]}),Object(y.jsx)(de,{curOpen:g,handleFiatSelection:function(e){if(e.currency!==s.currency){var t=e.currency,n=e.symbol;be(l,t,s.currency,d),i(Object(O.a)(Object(O.a)({},s),{},{currency:t,symbol:n}))}}})]})})),Object(y.jsx)(se.a,{color:b?"secondary":"primary",onClick:function(){return j()},"aria-label":"menu-button",children:b?Object(y.jsx)(me.a,{}):Object(y.jsx)(ve.a,{})}),Object(y.jsx)(le,{open:B,handleClose:function(){return T(!1)},selectedCoin:n,cryptoList:r,handleCoinSelection:o})]})},Me=["title","titleId"];function ke(){return ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ke.apply(this,arguments)}function Ue(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Je(e,t){var n=e.title,r=e.titleId,o=Ue(e,Me);return a.createElement("svg",ke({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block",shapeRendering:"auto",animationPlayState:"running",animationDelay:"0s"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":r},o),n?a.createElement("title",{id:r},n):null,a.createElement("circle",{cx:50,cy:50,r:32,strokeWidth:8,stroke:"#0a0a0a",strokeDasharray:"50.26548245743669 50.26548245743669",fill:"none",strokeLinecap:"round",style:{animationPlayState:"running",animationDelay:"0s"}},a.createElement("animateTransform",{attributeName:"transform",type:"rotate",dur:"2.4390243902439024s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 50;360 50 50",style:{animationPlayState:"running",animationDelay:"0s"}})),a.createElement("circle",{cx:50,cy:50,r:23,strokeWidth:8,stroke:"#f5b041",strokeDasharray:"36.12831551628262 36.12831551628262",strokeDashoffset:36.12831551628262,fill:"none",strokeLinecap:"round",style:{animationPlayState:"running",animationDelay:"0s"}},a.createElement("animateTransform",{attributeName:"transform",type:"rotate",dur:"2.4390243902439024s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 50;-360 50 50",style:{animationPlayState:"running",animationDelay:"0s"}})))}var we=a.forwardRef(Je),Ee=(n.p,"number"),Ve=function(e){var t=e.handleThemeChange,n=e.crypto,r=e.setSelectedCurrency,o=e.selectedCurrency;console.log("crypto load",n);var i=Object(a.useState)(!1),l=Object(c.a)(i,2),s=l[0],d=l[1],A=U(!0),u=Object(c.a)(A,2),b=u[0],j=u[1],m=Boolean(!n.length),x=n.find((function(e){return"BTC"===e.currency})),h={coinAmount:k(Ee),buyValue:k(Ee),sellValue:k(Ee),buyFee:k(Ee),sellFee:k(Ee)},p=function(e){e&&(null===e||void 0===e?void 0:e.price)&&(d(e),h.buyValue.onChange({target:{value:e.price}}))};return Object(y.jsx)(F.a,{children:m?Object(y.jsx)(we,{}):Object(y.jsxs)(F.a,{children:[Object(y.jsx)(Z,{fields:h,btc:x,selectedCurrency:o,mode:b,setMode:j}),Object(y.jsx)(ae,{selectedCoin:s,cryptoList:n,handleCoinSelection:p}),Object(y.jsx)(Te,{handleThemeChange:t,selectedCoin:s,cryptoList:n,handleCoinSelection:p,setSelectedCurrency:r,fields:h,selectedCurrency:o,mode:b})]})})},Se=n(110),Re=n.n(Se),Ie=n(200),We=n(208),Ne=n(207),De="15V5uReVCQ3z4ooexd3wRvmQM5PBCAR5CL",Ye="TF9oCBuM5cAgdH5f757LBSSKZmbpGHNc5E",qe="0x3f41097f233d22ee56bcbfd4f7f184755e0ff185",Le={address:{color:"#F39C12",fontWeight:"bold",fontFamily:"Consolas"},adressContainer:{display:"flex",alignItems:"center"},coinName:{fontWeight:600,fontFamily:"monospace"},coinImage:{marginRight:5,width:15,height:"auto"},donationText:{my:1,fontFamily:"monospace",fontSize:13,fontWeight:"bold"}},He=function(e){var t=e.address,n=e.handleClick;return Object(y.jsx)(p.a,{underline:"none",href:"#",variant:"caption",sx:Le.address,onClick:n(t),children:t})},ze=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],r=t[1],o=function(e){return function(){navigator.clipboard.writeText(e),r(!0),setTimeout((function(){r(!1)}),2e3)}};return Object(y.jsxs)(w.a,{sx:{alignItems:"center",my:3},spacing:0,children:[Object(y.jsx)(f.a,{version:"overline",sx:Le.donationText,children:"< Buy me a coffee ?/> "}),Object(y.jsxs)(x.a,{sx:Le.adressContainer,children:[Object(y.jsx)("img",{src:"data:image/png;base64,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",alt:"bitcoin-address",style:Le.coinImage}),Object(y.jsxs)(f.a,{variant:"caption",sx:Le.coinName,children:["BTC\xa0-\xa0",Object(y.jsx)(He,{address:De,handleClick:o})]})]}),Object(y.jsxs)(x.a,{sx:Le.adressContainer,children:[Object(y.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAqNQTFRFAAAAJKF9J6F6JqB6JqN9JqF7JqB7JaF8JaB5JKJ5J595JqF7JqF7JqF7JqF7JqF7JqF7JqF7JqF7JqF7JqF7JqF7JqF7JqF7JqF7JqF7JqB7JqF7JqF7JqF7JqF7JqF7JqN8JqF7JqF7JaJ7JqF7JqF7JqF7J6F7JqF7JqF7JqF7JqF7JqF7JqF7JqF7JqF7JqF7JqJ7JqF7JqF7JqF7JqF7JqF7JqF7JqF7JqF7JqF7JqF7JaF7JqJ7JqF7JaF6JqF7J6J6JqF7JqF7JqJ7JqF7JqF7J6B8JqF7JqF7JaF7I6B5MKWBWLaZXLicVbWYLKR/JKB6TLGS5/Xx+fz79/z63/HrP6yKTbKT7vj1////5fTvQKyLS7GS5PPu9fv59Pr4/v7+/f7+2/DpPqyKL6WAUrSWVraYar+l6/bz5vTvZ72iV7aZULOVLKN+IZ94PauJ3vHrOamGIp94JaB6PquKOamHIp95KaJ9MqaCR6+PULOUYbqf6vby5PPvXrmdRa6OMaaBKKJ8TrKUab6kdsSrdcOrbcCmXbmdTrOUT7OUWrib6PXx4vPtWLeaYLqeb8GndMOrZr2iS7GRLaR/LqWAhcq1Z72jNKeEJaF6KqN9NqiFa7+licy3gciy2O7nQ62NIJ53O6qII595H553VbaY4/PuZLyh3/Hssd3QNKeDPKuI+Pz79/v60uvjOKmGJKB5J6F7N6mGvuPXk9C9wOTYv+PYqtrLl9LAesWuYrufU7SWQ62MYrugar+kaL6jYbufRK6ORK6NfsewmtPBrNvMweTZvOLWjM25UbSVdsOrmdPBst7QwuXay+nfzOngzurh0evj1+7nzenhzengyujfr9zOlNG+cMGoWLeZVLWXN6iFLaSAOqqHgMiyf8ixcsKpWnrdtAAAAEl0Uk5TAAAAAAAAAAAAAAALNXGp1PDVcjYDK3q46f0DjuT+FX8BP70BBFfjBHPxcPNAPRa5AQEsAo+3tuj8qO/TAgLiAX4BvPIEPLoBjSTujXEAAAABYktHRFoDu6WiAAAACXBIWXMAAOw4AADsOAFxK8o4AAADEUlEQVRIx2NgQAGMTNw8vHz8Ap5AICDIJyTMzczCgBuwioiKiUtIesKBpIS4mKgIKw7lbFKi0jKe6EBWRhqHFlY5eUzlYCAjL4epg1VBUUnSEweQVFJURtPCqqKq5okHqKmqs6Kq19D0xAs0tVRYUdRrexIA2kIIHazsqgKE1AOjRZUDpoNVR42weqA/dKEaWPWUoEJe3lgBTIe+HlgHq4G8LFS9j68fFuAfAItDeUOQDlYjmIMCg4JDQjFASFh4IMxRRkANrMYmMCsDIyKjsIDoGJgGT2ljViQLiNCgJgrUIOZJvAZPLVYGblOEhti4+AQQiE8EKUyCcpJTEBrMuBmEzeE8r9S0dBDwz8gEacjK9gfxcnLzEHFhzsPAK4ngQuMhvyAapKGwqBg1HoDAgpeBDzU6vUoCA4tLIRrKygMDS9Ci25KBH0lxYGBFZUpMVXVNLUhDXX1uQ0xBY1NgIJIGfgYBhHKf5pbWtvaOzq7uHpCG3r7qrv4JbRMnTZ6CcJUAA1z91LZp0yfPqJiJ6iSvWbO75sydMwuuA67Be978BQu9vcDBGwPRsAjsgZmLlyxdlu2NoSFw+YqVfqs8vcuBwbJ6/pq1a9esWw9klm/YuGn55vlpgRgaPD1zt2zdtn3Hzl279zTs3bd//74DBw+lLz985Oix4yeqZiKchMhrgYGVJ0+dPnP23PkL89dduHDx0uUrV49du34jKNUbEU5WyMHq6bWh3LtpalnMTXAoLbsVc/vORu/yQC8kJdYMlp7ooMQ7BeLpu94zMSQtUZIGzG0ooYQCgEkDKfERoQGY+JCSNxEagMkbKQMRoUELJYsS1gAqBVhtpInXIG0LKjaM7IjVYGcELpfsYQUZIQ2yDo6Qok/OiTgN4rCKiFUR1d9ejW337t+/9yDVC0UYXhgzsHKiF/fe5UDgjSomoMqFqCBUtJw9CQBnLReUKkiIQJUigFJlkV4pgmoJVzdJXMol9V3dsdTUOCt2NQc57E0BEVEPUpoOEC1aZhIWSG6RMNPCrRzW/NGyhDd/eHkwmj8A875XyaEGDdoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDMtMjRUMTY6NDE6MzIrMDE6MDCjPHSeAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTAzLTI0VDE2OjQxOjMyKzAxOjAw0mHMIgAAAEZ0RVh0c29mdHdhcmUASW1hZ2VNYWdpY2sgNi43LjgtOSAyMDE2LTA2LTE2IFExNiBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZ+a/NLYAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6aGVpZ2h0ADUxMsDQUFEAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANTEyHHwD3AAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNTIxOTA2MDky4nibHgAAABN0RVh0VGh1bWI6OlNpemUAMTkuNUtCQoK8a0MAAAB5dEVYdFRodW1iOjpVUkkAZmlsZTovLy4vdXBsb2Fkcy81Ni9hbWZidnNnLzEzODUvdXNkdC1jcnlwdG8tY3J5cHRvY3VycmVuY3ktY3J5cHRvY3VycmVuY2llcy1jYXNoLW1vbmV5LWJhbmstcGF5bWVudF85NTQ2Ny5wbmf9jTG6AAAAAElFTkSuQmCC",alt:"usdt-address",style:Le.coinImage}),Object(y.jsxs)(f.a,{variant:"caption",sx:Le.coinName,children:["USDT\xa0-\xa0",Object(y.jsx)(He,{address:Ye,handleClick:o})]})]}),Object(y.jsxs)(x.a,{sx:Le.adressContainer,children:[Object(y.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAdhwAAHYcAafCeOoAAAAHdElNRQfkCxwNMg23B5GdAAAFyElEQVRo3sXZW4xdVR3H8c/a55y5T2eGTufWC7QdenF6w7YEUaACwQRD0RgUm/pgoi/EB2NNSJTExAcjIYYXg8RAgwmJoA8kPtSIhkRLWyit0dpga2oxLWKvTNvpTDOdmbN96HQ6l7PP2WefVtfb2Wfv//ru3/qt//qvtamhBTaEzwahhhhRLQBxs7s9YUEtMWoCsEa3AU+oQYNaAHpsQLDVmv+HAnkbtSLWY7uGrBpkB1iuXwwm3GdL1mHICtBik8IkAE22ZbViVoC1eqa6Z8KALwtZNMgG0Gv9HMW3Wvu/UqBgo9Zp7w+xrmxWzAKwXL/inKtFn/Fg9VasHqDVJvkS12MNtum69Qqs0T1L/hsarK7eitUC9NlQVuWt1t9KBQo2akl4f4gtsF1jNRpUB9BveQn7TW9F93qoGitWA5Bkv5kaNPiq7luhQLBOVxn5b2iwylfi1FZMD9BrXWplHwsbbrYCdTaVtd/0Fuv0NU3paNMC3FnRftPbhE95+GYqMM9GudTdQ70n9abRIA1AOfvFiVlxZTorpgHosy6h86BNY+Jznw+frBy8srB1HphRfFzvPK8zrAoDlqgXmyjxZIs2u8NYrQCrbZox/WLU6QkDYbVOddo1alSHiTk1Qp9TjpQfhkoAbR7UMqPzxrA4rA0rtIsQaRUJCprUC7Mg8nrtNZQdINhsxWTIWNAaloa1lmqZ0iQybzJGkNekQaQ4NWFj88XeDWXyR3mAxe5XQCzSHvrDWotnme4GwPV4jRrlFSddESz2vo+yAdR7QJeivM6wMgzoVTfnntkA167Va1IQm1DUot3ucDULwCfcNc1uhZIzvhTAtet1mtRhXI/T/p5kxWSADo+GVWHNlN1KtySAa/Jfs2ZBt30ulb4pn/SsOz2iT5yY69K1oFGzu9zjZFUKBM47pcsCUVmAcgpc+z920I/tkpCQErNEgNs87nF9iokQeQsVEkNEPvSqV5yRGKDsNAxXwl8dULBQQ0KEZAVyhrzhe94wXE7C5DzZKm+QQME9tlkvV6IiKK1AZMJ+L/iDq8TCImPhdOlyIlmBvM06XDAeik5426BeHSkUCHI+8FM/dChMoC18wf3ec6XaIRgzaoslRgyJw2h8OLwrZ6GmGYMxNxMOes33411hBAV322GLlx3P4oEh4zboN88lVwgXveOoDj3yUxDTASLj/ugHXnI2CMEy3/CUO7zU/LvxbCb0sTZ9ui0TuWBMHP7tbad1mz/pnusAQeSon/iRI4q4zZfscK8Gb3pxbDzZhuUBis5bpFm92/UZdUkxuhofCfsULdIsFpknL+esX3gmfis3GlPn03b4ojYc86yz5WZBpXrgihFL5dFmuQ5D8TDhsvcc1qJXvXbjfu8ZrxoM4mClp3zTHWIMe97B8h1UroguqNc3KXeXZQouuCoOp+xxUq9hz3nOcTE6Pek7NskrIviV18TlM3mayrnZo26fdFEQO+2gY8YCdMrHpwI0uM92A8LknTkHPe18pYUkTbU/5qKl6qd+t1pmvssuY8TlQGSNb/m6hdNmxznP+meouJKl224MKVoyTa3IAss0uBhGCT22+bb1cjMO7nbmdqVZSNPud87rmHEUGauzyBLCZt/1OU0z0nTOW16Ix9Ks4+lPEjo9Zv6cV2oID2uftSuIfOBpx9KVEem35+fsM7uyi0WiWUtUMOJlx27++QD/cCiVYr/xptRb6WoAig74UKWNzt+8Yjx9FVfdIdVlewyXQQjO+Zkz1YSs9pzwpANl1C163X5VVbHVn5QecixBg5zdXq+UemsHGPWOwRIIkRN+bqjaGj7LafkZ++YU2cEVO+Mj1QfL9sHiqMNzNNjlt5Uz/80CmLDfR9MQct6309UsW6is34yG7DEyiRB87EX/yRYo+2e7E/48qXjRr+O91U2+mwEQ+4vjgpy9fhmqnHw3WnXHjzPbuEErQpvnncy+ga4FQBgWwr/8qZYY/wUUcYL9tsnN6AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMS0yOFQxMzo1MDoxMiswMDowMBOR4ikAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTEtMjhUMTM6NTA6MTIrMDA6MDBizFqVAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADUxMo+NU4EAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANTEyHHwD3AAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNjA2NTcxNDEyy5KYLgAAABN0RVh0VGh1bWI6OlNpemUAMTQ1NTRCQna/8WMAAABJdEVYdFRodW1iOjpVUkkAZmlsZTovLy4vdXBsb2Fkcy81Ni9CT0RDSjlxLzI2OTkvZXRoZXJldW1fbG9nb19pY29uXzE3MTE3My5wbmf0bGlyAAAAAElFTkSuQmCC",alt:"ethereum-address",style:Le.coinImage}),Object(y.jsxs)(f.a,{variant:"caption",sx:Le.coinName,children:["ETH\xa0-\xa0",Object(y.jsx)(He,{address:qe,handleClick:o})]})]}),Object(y.jsx)(We.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:n,TransitionComponent:Ie.a,children:Object(y.jsx)(Ne.a,{icon:Object(y.jsx)(Re.a,{sx:{color:"primary.contrastText"}}),sx:{backgroundColor:"primary.main",color:"primary.contrastText",fontWeight:"bold",alignSelf:"flex-start",verticalAlign:"middle"},children:"Thanks ! Address copied"})})]})},Ge=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),r=Object(c.a)(n,2),o=r[0],i=r[1];return[o,function(t){try{var n=t instanceof Function?t(o):t;i(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]},Qe=function(e,t,n){var r=e.map((function(e){return window.matchMedia(e)})),o=function(){var e=r.findIndex((function(e){return e.matches}));return"undefined"!==typeof t[e]?t[e]:n},i=Object(a.useState)(o),l=Object(c.a)(i,2),s=l[0],d=l[1];return Object(a.useEffect)((function(){var e=function(){return d(o)};return r.forEach((function(t){return t.addListener(e)})),function(){return r.forEach((function(t){return t.removeListener(e)}))}}),[]),s},Pe=n(91),Ke=Object(Pe.a)({palette:{mode:"light",primary:{main:"#0A0A0A",light:"#1A1A1A",contrastText:"#f5f5f5",dark:"#313131"},secondary:{main:"#d5d5d5",contrastText:"#0A0A0A",dark:"#adadad",light:"#ffab40"},background:{default:"#EAEDED",paper:"#EAEDED"},text:{primary:"#0A0A0A"},divider:"#252525"},components:{MuiLink:{styleOverrides:{root:{"&:hover":{color:"#900C3F"}}}}}}),Ze=Object(Pe.a)({palette:{mode:"dark",primary:{main:"#F5B041",light:"#f5f5f5",contrastText:"#0A0A0A",dark:"#CF9200"},secondary:{main:"#0a0a0a",contrastText:"#f5f5f5",dark:"#212121",light:"#ffab40"},background:{default:"#1A1A1A",paper:"#000000"},text:{primary:"#eeeeee"},divider:"#252525"},components:{MuiTextField:{styleOverrides:{root:{"& .MuiTypography-root":{color:"#eeeeee"},"& .MuiInputLabel-formControl":{color:"#eeeeee"},"& .MuiFormHelperText-root":{color:"#eeeeee"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#eeeeee"},"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#ffb300"}}}},MuiLink:{styleOverrides:{root:{"&:hover":{color:"#900C3F"}}}}}}),Xe=function(){var e=Ge("theme","dark-mode"),t=Object(c.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(Ke),i=Object(c.a)(o,2),l=i[0],s=i[1],d=Qe(["(prefers-color-scheme: dark)"],[!0],!1),A="undefined"!==typeof n?n:d;Object(a.useEffect)((function(){s(A&&"dark-mode"===n?Ze:Ke)}),[A,n]);return[l,function(){"dark"===l.palette.mode?(s(Ke),r("light-mode")):(s(Ze),r("dark-mode"))}]},$e={github:{borderRadius:5}},_e=function(){return Object(y.jsx)("a",{href:"https://www.github.com/fcancelinha/crypto-profit",target:"_blank",rel:"noreferrer",children:Object(y.jsx)("img",{src:"https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",width:"100",alt:"github",style:$e.github})})},et={container:{p:0,m:0},paper:{pt:2,borderRadius:4,width:"100%",pb:2,mb:2,mt:-14},notice:{alignSelf:"center",fontSize:10,fontFamily:"Monospace",fontWeight:"bold",ml:"auto",mr:"auto"}},tt=["USDT","USDC","HEX","BUSD","DAI","TUSD","UST","USDP"],nt=function(){var e,t=Xe(),n=Object(c.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)([]),s=Object(c.a)(l,2),d=s[0],A=s[1],u=Object(a.useState)({currency:"USD",symbol:"$"}),b=Object(c.a)(u,2),O=b[0],g=b[1];return e=r.palette.background.default,document.body.style.backgroundColor=e,Object(a.useEffect)((function(){j(O.currency).then((function(e){var t=e.filter((function(e){return tt.indexOf(e.currency)<0}));A(t),console.log("testing re-rendering")})).catch((function(e){console.log(e)}))}),[O.currency]),Object(y.jsx)(i.a,{theme:r,children:Object(y.jsxs)(h.a,{justifyContent:"center",alignItems:"stretch",id:"main-body",bgcolor:"background.default",sx:et.container,columns:24,children:[Object(y.jsxs)(x.a,{sx:{pb:15,textAlign:"center",backgroundColor:"#000000"},children:[Object(y.jsx)(M,{cryptoList:d,currency:O.symbol}),Object(y.jsx)(v,{}),Object(y.jsx)(_e,{})]}),Object(y.jsx)(x.a,{children:Object(y.jsx)(h.a,{item:!0,xs:24,sm:24,md:12,lg:9,xl:7,sx:{alignSelf:"center",ml:"auto",mr:"auto"},children:Object(y.jsxs)(m.a,{sx:et.paper,elevation:6,children:[Object(y.jsx)(Ve,{crypto:d,selectedCurrency:O,setSelectedCurrency:g,handleThemeChange:function(){return o()}}),Object(y.jsx)(ze,{})]})})}),Object(y.jsxs)(x.a,{sx:{textAlign:"center",mb:2,ml:"auto",mr:"auto"},children:[Object(y.jsx)(f.a,{variant:"caption",sx:et.notice,color:"primary.main",children:"exchange rates might not reflect current ones"}),Object(y.jsx)("br",{}),Object(y.jsx)(p.a,{href:"https://nomics.com/",target:"_blank",rel:"noreferrer",variant:"caption",color:"primary.main",sx:et.notice,children:"Crypto Market Cap & Pricing Data Provided By Nomics"})]})]})})};o.a.render(Object(y.jsx)(nt,{}),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.f815d746.chunk.js.map