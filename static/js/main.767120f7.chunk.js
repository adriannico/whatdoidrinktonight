(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},59:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(28),i=c.n(a),r=(c(36),c.p,c(37),c(38),c(1)),j=["btn--primary","btn-outline"],b=["btn--medium","btn--large","btn--mobile"],d=["primary","secondary"],l=function(e){var t=e.children,c=e.type,n=e.onClick,s=e.buttonStyle,a=e.buttonSize,i=e.buttonColor,l=j.includes(s)?s:j[0],O=j.includes(a)?a:b[0],o=j.includes(i)?i:d[0];return Object(r.jsx)("button",{className:"btn ".concat(l," ").concat(O," \n        ").concat(o),onClick:n,type:c,children:t})},O=c(3),o=c(10),u=c(15),h=(c(40),c(0));var m=function(){return Object(r.jsx)("div",{className:"page",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{class:"text-center",children:"About"}),Object(r.jsxs)("p",{children:["This website was made using a free API from ",Object(r.jsx)("a",{href:"https://www.thecocktaildb.com/",children:"The Cocktail DB"}),"."]}),Object(r.jsx)("p",{children:"Contact me at adriannicolaisen@gmail.com."})]})})})},x=c(29),k=c.n(x);c(59);var v=function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(O.a)(a,2),j=i[0],b=i[1],d=Object(n.useState)(""),l=Object(O.a)(d,2),o=l[0],u=l[1],h=Object(n.useState)(""),m=Object(O.a)(h,2),x=m[0],v=m[1],S=Object(n.useState)(""),g=Object(O.a)(S,2),p=g[0],N=g[1],f=Object(n.useState)(""),C=Object(O.a)(f,2),I=C[0],w=C[1],y=Object(n.useState)(""),M=Object(O.a)(y,2),T=M[0],D=M[1],A=Object(n.useState)(""),F=Object(O.a)(A,2),H=F[0],B=F[1],P=Object(n.useState)(""),R=Object(O.a)(P,2),z=R[0],L=R[1],E=Object(n.useState)(""),J=Object(O.a)(E,2),W=J[0],q=J[1],G=Object(n.useState)(""),K=Object(O.a)(G,2),Q=K[0],U=K[1],V=Object(n.useState)(""),X=Object(O.a)(V,2),Y=X[0],Z=X[1],$=Object(n.useState)(""),_=Object(O.a)($,2),ee=_[0],te=_[1],ce=Object(n.useState)(""),ne=Object(O.a)(ce,2),se=ne[0],ae=ne[1],ie=Object(n.useState)(""),re=Object(O.a)(ie,2),je=re[0],be=re[1],de=Object(n.useState)(""),le=Object(O.a)(de,2),Oe=le[0],oe=le[1],ue=Object(n.useState)(""),he=Object(O.a)(ue,2),me=he[0],xe=he[1],ke=Object(n.useState)(""),ve=Object(O.a)(ke,2),Se=ve[0],ge=ve[1],pe=Object(n.useState)(""),Ne=Object(O.a)(pe,2),fe=Ne[0],Ce=Ne[1],Ie=Object(n.useState)(""),we=Object(O.a)(Ie,2),ye=we[0],Me=we[1],Te=Object(n.useState)(""),De=Object(O.a)(Te,2),Ae=De[0],Fe=De[1],He=Object(n.useState)(""),Be=Object(O.a)(He,2),Pe=Be[0],Re=Be[1],ze=Object(n.useState)(""),Le=Object(O.a)(ze,2),Ee=Le[0],Je=Le[1],We=Object(n.useState)(""),qe=Object(O.a)(We,2),Ge=qe[0],Ke=qe[1],Qe=Object(n.useState)(""),Ue=Object(O.a)(Qe,2),Ve=Ue[0],Xe=Ue[1],Ye=Object(n.useState)(""),Ze=Object(O.a)(Ye,2),$e=Ze[0],_e=Ze[1],et=Object(n.useState)(""),tt=Object(O.a)(et,2),ct=tt[0],nt=tt[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"grid-container",children:[Object(r.jsxs)("div",{className:"grid-item",children:[Object(r.jsx)("h1",{children:Object(r.jsx)("b",{children:c})}),Object(r.jsxs)("h2",{children:[Oe," ",x]}),Object(r.jsxs)("h2",{children:[me," ",p]}),Object(r.jsxs)("h2",{children:[Se," ",I]}),Object(r.jsxs)("h2",{children:[fe," ",T]}),Object(r.jsxs)("h2",{children:[ye," ",H]}),Object(r.jsxs)("h2",{children:[Ae," ",z]}),Object(r.jsxs)("h2",{children:[Pe," ",W]}),Object(r.jsxs)("h2",{children:[Ee," ",Q]}),Object(r.jsxs)("h2",{children:[Ge," ",Y]}),Object(r.jsxs)("h2",{children:[Ve," ",ee]}),Object(r.jsxs)("h2",{children:[$e," ",se]}),Object(r.jsxs)("h2",{children:[ct," ",je]}),Object(r.jsx)("h3",{className:"instructions",children:j})]}),Object(r.jsx)("div",{className:"grid-item",children:Object(r.jsx)("img",{className:"thumbnail",src:o})}),Object(r.jsx)("div",{className:"grid-item buttondiv",children:Object(r.jsx)("button",{className:"randomButton",buttonStyle:"btn--large",onClick:function(){k.a.get("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((function(e){console.log(e),s(e.data.drinks[0].strDrink),b(e.data.drinks[0].strInstructions),u(e.data.drinks[0].strDrinkThumb),v(e.data.drinks[0].strIngredient1),N(e.data.drinks[0].strIngredient2),w(e.data.drinks[0].strIngredient3),D(e.data.drinks[0].strIngredient4),B(e.data.drinks[0].strIngredient5),L(e.data.drinks[0].strIngredient6),q(e.data.drinks[0].strIngredient7),U(e.data.drinks[0].strIngredient8),Z(e.data.drinks[0].strIngredient9),te(e.data.drinks[0].strIngredient10),ae(e.data.drinks[0].strIngredient11),be(e.data.drinks[0].strIngredient12),oe(e.data.drinks[0].strMeasure1),xe(e.data.drinks[0].strMeasure2),ge(e.data.drinks[0].strMeasure3),Ce(e.data.drinks[0].strMeasure4),Me(e.data.drinks[0].strMeasure5),Fe(e.data.drinks[0].strMeasure6),Re(e.data.drinks[0].strMeasure7),Je(e.data.drinks[0].strMeasure8),Ke(e.data.drinks[0].strMeasure9),Xe(e.data.drinks[0].strMeasure10),_e(e.data.drinks[0].strMeasure11),nt(e.data.drinks[0].strMeasure12)}))},children:"Trykk for drink!"})})]})}),Object(r.jsx)("div",{className:"drink-name"})]})};var S=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"page",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"WhatDoIDrinkTonight.com"}),Object(r.jsx)("p",{}),Object(r.jsx)("p",{})]})})})};function g(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!0),i=Object(O.a)(a,2),j=i[0],b=i[1],d=function(){return s(!c)},m=function(){return s(!1)};return window.addEventListener("resize",(function(){window.innerWidth<=960?b(!1):b(!0)})),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(h.b.Provider,{value:{color:"#fff"},children:Object(r.jsx)("div",{className:"navbar",children:Object(r.jsxs)("div",{className:"navbar-container container",children:[Object(r.jsxs)(o.b,{to:"/Home",className:"navbar-logo",onClick:m,children:[Object(r.jsx)(u.c,{className:"navbar-icon"}),"wdidt"]}),Object(r.jsx)("div",{className:"menu-icon",onClick:d,children:c?Object(r.jsx)(u.b,{}):Object(r.jsx)(u.a,{})}),Object(r.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",onClick:d,children:Object(r.jsx)(o.b,{to:"/Home",className:"nav-links",onClick:m,children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",onClick:d,children:Object(r.jsx)(o.b,{to:"/About",className:"nav-links",onClick:m,children:"About"})}),Object(r.jsx)("li",{className:"nav-item",onClick:d,children:Object(r.jsx)(o.b,{to:"/Search",className:"nav-links",onClick:m,children:"Search"})}),Object(r.jsx)("li",{className:"nav-btn",children:j?Object(r.jsx)(o.b,{to:"/random",className:"btn-link",children:Object(r.jsx)(l,{buttonStyle:"btn-outline",children:"Random!"})}):Object(r.jsx)(o.b,{to:"/Random",className:"btn-link",children:Object(r.jsx)(l,{onClick:v,buttonStyle:"btn--outline",buttonSize:"btn--mobile",children:"Random!"})})})]})]})})})})}var p=c(4);var N=function(){return Object(r.jsx)("div",{className:"page",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"Search for a drink:"}),Object(r.jsx)("input",{})]})})};var f=function(){return Object(r.jsxs)(o.a,{children:[Object(r.jsx)(g,{}),Object(r.jsxs)(p.d,{children:[Object(r.jsx)(p.b,{exact:!0,path:"/Random",component:v}),Object(r.jsx)(p.b,{exact:!0,path:"/About",component:m}),Object(r.jsx)(p.b,{exact:!0,path:"/Home",component:S}),Object(r.jsx)(p.b,{exact:!0,path:"/Search",component:N}),Object(r.jsx)(p.a,{to:"/Home"})]})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(o.a,{children:Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(f,{})})}),document.getElementById("root")),C()}},[[65,1,2]]]);
//# sourceMappingURL=main.767120f7.chunk.js.map