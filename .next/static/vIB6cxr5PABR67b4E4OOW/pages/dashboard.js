(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"98BF":function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return d}));var o=n("u0k+"),a=n("vDqi"),i=n.n(a),r=function(t,e){return function(n){i.a.post("/todos",{userID:t},s(e)).then((function(t){n({type:o.k,payload:t.data})})).catch((function(t){console.log(t)}))}},c=function(t,e){return function(n){i.a.post("/todos/add",t,s(e)).then((function(t){n({type:o.l,payload:t.data})})).catch((function(t){console.log(t)}))}},l=function(t){return function(e){i.a.delete("/todos/".concat(t)).then((function(n){e({type:o.m,payload:t})})).catch((function(t){console.log(t)}))}},u=function(t,e){return function(n){i.a.patch("/todos/".concat(t),e).then((function(a){n({type:o.n,payload:e,id:t})})).catch((function(t){}))}},d=function(t,e){return function(n){i.a.patch("/todos/check/".concat(t),e).then((function(a){n({type:o.n,payload:e,id:t})})).catch((function(t){}))}},s=function(t){var e={headers:{"Content-type":"application/json"}};return t&&(e.headers["x-auth-token"]=t),e}},NR05:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n("u9iw")}])},u9iw:function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),a=n.n(o),i=n("CafY"),r=n("vOnD"),c=n("/MKj"),l=a.a.createElement,u=r.a.li.withConfig({displayName:"NavItem__Container",componentId:"sc-1sfcdox-0"})(["width:100%;background:linear-gradient(101.38deg,#b85454 0%,#c55645 100.5%);display:flex;flex-direction:row;align-items:center;color:white;text-align:center;border-top:black solid 2px;*{padding:10px;}svg{width:35px;height:35px;fill:white;margin-right:15px;}&:hover{box-shadow:inset 0px 0px 30px rgba(0,0,0,0.2);}&:active{box-shadow:inset 0px 0px 30px rgba(0,0,0,0.5);}"]),d=function(t){var e=t.children,n=t.svg;return l(u,null,n,l("p",null,e))},s=n("V2VJ"),p=n("0ZHj"),h=a.a.createElement,f=function(t){return h("svg",t,h("path",{d:"M30.898 2.734h-1.64V0h-2.735v2.734H8.477V0H5.742v2.734h-1.64A4.106 4.106 0 0 0 0 6.836v24.062A4.106 4.106 0 0 0 4.102 35h26.796A4.106 4.106 0 0 0 35 30.898V6.836a4.106 4.106 0 0 0-4.102-4.102zm1.368 28.164c0 .754-.614 1.368-1.368 1.368H4.102a1.369 1.369 0 0 1-1.368-1.368V12.852h29.532v18.046zm0-20.78H2.734V6.835c0-.754.614-1.367 1.368-1.367h1.64v2.734h2.735V5.47h18.046v2.734h2.735V5.47h1.64c.754 0 1.368.613 1.368 1.367v3.281z",fill:"#fff"}),h("path",{d:"M7.93 15.723H5.195v2.734H7.93v-2.734zM13.398 15.723h-2.734v2.734h2.734v-2.734zM18.867 15.723h-2.734v2.734h2.734v-2.734zM24.336 15.723h-2.734v2.734h2.734v-2.734zM29.805 15.723H27.07v2.734h2.735v-2.734zM7.93 21.191H5.195v2.735H7.93V21.19zM13.398 21.191h-2.734v2.735h2.734V21.19zM18.867 21.191h-2.734v2.735h2.734V21.19zM24.336 21.191h-2.734v2.735h2.734V21.19zM7.93 26.66H5.195v2.735H7.93V26.66zM13.398 26.66h-2.734v2.735h2.734V26.66zM18.867 26.66h-2.734v2.735h2.734V26.66zM24.336 26.66h-2.734v2.735h2.734V26.66zM29.805 21.191H27.07v2.735h2.735V21.19z",fill:"#fff"}))};f.defaultProps={width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var v=function(t){return h("svg",t,h("path",{d:"M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"}))};v.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"};var m=function(t){return h("svg",t,h("path",{d:"M272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871a206.698 206.698 0 0 1-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698A206.714 206.714 0 0 1 58.003 319.2h-10.87C21.145 319.2 0 298.056 0 272.067v-32.134C0 213.944 21.145 192.8 47.134 192.8h10.87a206.755 206.755 0 0 1 13.323-32.097L63.623 153c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697A206.893 206.893 0 0 1 192.8 58.003v-10.87C192.8 21.144 213.944 0 239.934 0h32.133C298.056 0 319.2 21.144 319.2 47.133v10.871a206.698 206.698 0 0 1 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698a206.714 206.714 0 0 1 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87a206.755 206.755 0 0 1-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697a206.893 206.893 0 0 1-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zM165.717 409.17a176.812 176.812 0 0 0 45.831 19.025 14.999 14.999 0 0 1 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148a14.999 14.999 0 0 1 11.252-14.524 176.812 176.812 0 0 0 45.831-19.025 15 15 0 0 1 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695a15 15 0 0 1-2.305-18.242 176.78 176.78 0 0 0 19.024-45.831 15 15 0 0 1 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133H442.72a15 15 0 0 1-14.524-11.251 176.815 176.815 0 0 0-19.024-45.831 15 15 0 0 1 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695a15 15 0 0 1-18.243 2.305 176.812 176.812 0 0 0-45.831-19.025 14.999 14.999 0 0 1-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148a14.999 14.999 0 0 1-11.252 14.524 176.812 176.812 0 0 0-45.831 19.025 15.002 15.002 0 0 1-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695a15 15 0 0 1 2.305 18.242 176.78 176.78 0 0 0-19.024 45.831 15 15 0 0 1-14.524 11.251H47.134C37.687 222.8 30 230.486 30 239.933v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147a15 15 0 0 1 14.524 11.251 176.815 176.815 0 0 0 19.024 45.831 15 15 0 0 1-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"}),h("path",{d:"M256 367.4c-61.427 0-111.4-49.974-111.4-111.4S194.573 144.6 256 144.6 367.4 194.574 367.4 256 317.427 367.4 256 367.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"}))};m.defaultProps={height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg"};var g=r.a.nav.withConfig({displayName:"Navbar__Container",componentId:"egy66p-0"})(["background-color:white;box-shadow:0px 0px 30px rgba(0,0,0,0.3);display:flex;flex-direction:column;width:250px;height:100vh;"]),w=r.a.div.withConfig({displayName:"Navbar__Circle",componentId:"egy66p-1"})(["width:50px;height:50px;border-radius:50%;background-color:grey;"]),b=r.a.div.withConfig({displayName:"Navbar__NameItem",componentId:"egy66p-2"})(["display:flex;flex-direction:row;align-items:center;margin:20px 0px;*{margin:10px;}"]),y=function(){var t=Object(c.c)((function(t){return t.Auth.user})),e=t.name,n=t.lastName,o=Object(c.b)();return h(g,null,h("div",null,h(b,null,h(w,null),h("p",null,e," ",n))),h("ul",null,h(d,{svg:h(f,null)}," Kalendarz"),h(d,{svg:h(v,null)}," Profil U\u017cytkownika"),h(d,{svg:h(m,null)}," Ustawienia")),h(s.a,{onClick:function(){console.log("button works"),o(Object(p.c)())}},"Logout"))},x=(n("na1t"),n("rePB"));function C(t,e,n){var o=String;return t<10&&e+1<10?o="0".concat(t).concat(n,"0").concat(e):t<10&&e+1>=10?o="0".concat(t).concat(n).concat(e):t>=10&&e+1>=10?o="".concat(t).concat(n).concat(e):t>=10&&e+1<10&&(o="".concat(t).concat(n,"0").concat(e)),o}var O=n("98BF"),z=n("Ff2n"),j=a.a.createElement,N=r.a.label.withConfig({displayName:"Select__Container",componentId:"sc-85o4oh-0"})(["width:120px;"]),_=r.a.select.withConfig({displayName:"Select__StyledSelect",componentId:"sc-85o4oh-1"})(["width:100%;text-align-last:center;height:25px;border-radius:5px;font-size:16px;overflow:scroll;&::-webkit-scrollbar{width:1px;}"]),M=function(t){var e=t.type,n=t.title,o=t.options,a=void 0===o?[]:o,i=t.divider,r=void 0===i?1:i,c=t.startNumber,l=void 0===c?0:c,u=t.lastNumber,d=void 0===u?0:u,s=Object(z.a)(t,["type","title","options","divider","startNumber","lastNumber"]),p=[];switch(e){case"number":for(var h=l;h<=d/r;h++)p.push(j("option",{key:h,value:h*r},h*r));break;case"word":p=a.map((function(t,e){return j("option",{key:e,value:e},t)}))}return j(N,null,j("p",null,n),j(_,s,p))},k=n("TBJr"),P=n("uN3T"),D=a.a.createElement;function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}var L=function(t){return D("svg",t,D("path",{d:"M416.875 114.441L405.57 80.555a31.527 31.527 0 0 0-29.941-21.578h-95.012V28.043C280.617 12.582 268.047 0 252.59 0h-87.008c-15.453 0-28.027 12.582-28.027 28.043v30.934H42.547a31.528 31.528 0 0 0-29.945 21.578L1.297 114.44a25.426 25.426 0 0 0 3.484 22.856 25.427 25.427 0 0 0 20.578 10.539h11.817L63.184 469.44C65.117 493.305 85.367 512 109.293 512h204.863c23.922 0 44.176-18.695 46.106-42.563l26.008-321.601h6.543A25.434 25.434 0 0 0 413.39 137.3a25.434 25.434 0 0 0 3.484-22.86zM167.555 30h83.062v28.977h-83.062zm162.804 437.02c-.68 8.402-7.796 14.98-16.203 14.98H109.293c-8.406 0-15.523-6.578-16.203-14.98L67.273 147.836h288.899zM31.793 117.836l9.27-27.79c.21-.64.808-1.07 1.484-1.07h333.082c.676 0 1.27.43 1.484 1.07l9.27 27.79zm0 0"}),D("path",{d:"M282.516 465.957c.265.016.527.02.793.02 7.925 0 14.55-6.211 14.964-14.22L312.36 181.36c.43-8.273-5.93-15.332-14.199-15.761-8.293-.442-15.328 5.925-15.762 14.199l-14.082 270.398c-.43 8.274 5.926 15.332 14.2 15.762zm0 0M120.566 451.793c.438 7.996 7.055 14.184 14.965 14.184.274 0 .555-.008.832-.024 8.27-.45 14.61-7.52 14.16-15.793L135.77 179.762c-.45-8.274-7.52-14.614-15.793-14.16-8.27.449-14.61 7.52-14.16 15.793zm0 0M209.254 465.977c8.285 0 15-6.715 15-15V180.578c0-8.285-6.715-15-15-15s-15 6.715-15 15v270.399c0 8.285 6.715 15 15 15zm0 0"}))};L.defaultProps={height:"512pt",viewBox:"-47 0 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg"};var H=function(t){return D("svg",t,D("path",{d:"M456.836 76.168l-64-64.054c-16.125-16.139-44.177-16.17-60.365.031L45.763 301.682a10.733 10.733 0 0 0-2.688 4.587L.409 455.73a10.682 10.682 0 0 0 10.261 13.606c.979 0 1.969-.136 2.927-.407l149.333-42.703a10.714 10.714 0 0 0 4.583-2.69l289.323-286.983c8.063-8.069 12.5-18.787 12.5-30.192s-4.437-22.124-12.5-30.193zM285.989 89.737l39.264 39.264-204.996 204.997-14.712-29.434a10.671 10.671 0 0 0-9.542-5.896H78.921L285.989 89.737zm-259.788 353.4L40.095 394.5l34.742 34.742-48.636 13.895zm123.135-35.177l-51.035 14.579-51.503-51.503 14.579-51.035h28.031l18.385 36.771a10.671 10.671 0 0 0 4.771 4.771l36.771 18.385v28.032zm21.334-17.543v-17.082c0-4.042-2.281-7.729-5.896-9.542l-29.434-14.712 204.996-204.996 39.264 39.264-208.93 207.068zM441.784 121.72l-47.033 46.613-93.747-93.747 46.582-47.001c8.063-8.063 22.104-8.063 30.167 0l64 64c4.031 4.031 6.25 9.385 6.25 15.083s-2.219 11.052-6.219 15.052z"}))};H.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 469.336 469.336"};var V=function(t){return D("svg",t,D("circle",{cx:"12.5",cy:"12.5",r:"11.25",stroke:"#000",strokeWidth:"2.5"}))};V.defaultProps={width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var E=function(t){return D("svg",t,D("path",{d:"M243.188 182.86L356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"}))};E.defaultProps={height:"487.595",viewBox:"0 0 365.696 365.696",width:"487.595",xmlns:"http://www.w3.org/2000/svg"};var S=function(t){return D("svg",t,D("path",{d:"M0 274.226l176.549 176.886L515.556 112.44l-48.67-47.997-290.337 290L47.996 225.891z"}))};S.defaultProps={height:"512",viewBox:"0 0 515.556 515.556",width:"512",xmlns:"http://www.w3.org/2000/svg"};var T=r.a.div.withConfig({displayName:"Todo__Container",componentId:"sc-3ciroh-0"})(['display:grid;grid-template-columns:50px 100px auto 75px;justify-items:center;align-items:center;padding:10px;border-top:10px;border-top:2px solid black;width:90%;margin:0 auto;min-height:2.5vh;font-size:1.1rem;font-family:"Jost";svg{height:25px;width:25px;margin:0 5px;&:hover{filter:drop-shadow(0px 0px 2px rgba(0,0,0,0.3));transform:scale(1.1);}}.edit:hover{fill:#03c04a;}.delete:hover{fill:#c2261f;}.circle{circle{fill:',";}}.circle:hover{transform:scale(1);circle{fill:#03c04a;}}"],(function(t){return t.done?"#03c04a":"none"})),A=Object(r.a)(k.a).withConfig({displayName:"Todo__ModalItem",componentId:"sc-3ciroh-1"})(["color:black;&::placeholder{color:#888888 !important;}transform:scale(0.8);"]),B=function(t){var e=t.todo,n=void 0===e?{}:e;return D(T,null," ",D("div",null,n.hour),D("div",null,n.title))},q=function(t){var e=t.todo,n=void 0===e?{}:e,a=n.title,i=n.hour,r=n.minute,l=n._id,u=n.done,d=C(i,r,":"),s=Object(P.a)(),p=s.setInputs,h=s.inputs,f=s.handleInputChange,v=Object(o.useRef)(null),m=Object(c.b)(),g=h;console.log(u);var w=function(){z((function(t){return!t}))},b=Object(o.useState)(!1),y=b[0],z=b[1];Object(o.useEffect)((function(){p((function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){Object(x.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{title:a,hour:i,minute:r})}))}),[y]);var j=function(t){v.current&&!v.current.contains(event.target)&&w()};return y?(y&&document.addEventListener("mousedown",j),D(T,{ref:v},D("p",null,"Hour:"),D("div",{style:{display:"flex",flexDirection:"row",width:"100%"}},D(M,{name:"hour",value:h.hour,onChange:f,type:"number",startNumber:"0",lastNumber:"24"}),":",D(M,{name:"minute",value:h.minute,onChange:f,type:"number",startNumber:"0",lastNumber:"59",divider:"5"})),D(A,{value:h.title,onChange:f,name:"title",placeholder:"Tytu\u0142"}),D("div",null,D(S,{className:"edit",onClick:function(t){t.preventDefault(),m(Object(O.d)(l,g)),w()}}),D(E,{className:"delete",onClick:w})))):(document.removeEventListener("mousedown",j),D(T,{done:u},D(V,{onClick:function(t){t.preventDefault(),m(Object(O.b)(l,{done:!u}))},className:"circle"}),D("div",null,d),D("div",null,a),D("div",null,D(H,{className:"edit",onClick:w}),D(L,{className:"delete",onClick:function(t){t.preventDefault(),m(Object(O.c)(l))}}))))},J=n("u0k+"),F=a.a.createElement,K=function(t){return F("svg",t,F("path",{d:"M12.398 8.355h7.422v4.336h-7.422v8.457H7.79v-8.457H.33V8.355h7.46V.445h4.61v7.91z",fill:"#000"}))};K.defaultProps={width:"20",height:"22",viewBox:"0 0 20 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var R=r.a.div.withConfig({displayName:"DayPage__Container",componentId:"sc-1lnswyp-0"})(["border-radius:20px;box-shadow:0px 0px 20px rgba(0,0,0,0.3);margin:20px 100px;width:40vw;"]),G=r.a.p.withConfig({displayName:"DayPage__Day",componentId:"sc-1lnswyp-1"})(["font-weight:700;"]),W=r.a.p.withConfig({displayName:"DayPage__Date",componentId:"sc-1lnswyp-2"})(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"]),Y=r.a.div.withConfig({displayName:"DayPage__Header",componentId:"sc-1lnswyp-3"})(["display:grid;grid-template-columns:150px auto 50px;justify-items:center;padding:10px;width:90%;margin:0 auto;position:relative;font-size:20px;svg{width:25px;height:25px;&:hover{filter:drop-shadow(0px 0px 3px rgba(0,0,0,0.5));transform:scale(1.1);}&:active{transform:scale(0.9);}}"]),U=function(t){var e=t.weekDay,n=t.day,o=t.month,a=t.children,i=C(n,o,"."),r=Object(c.b)();return F(R,null,F(Y,null,F(G,null,e),F(W,null,i),F("div",null),F(K,{onClick:function(){return r({type:J.h,payload:{day:n,month:o}})}})),a,F(B,null))},X=a.a.createElement,Z=[31,28,31,30,31,30,31,31,30,31,30,31],Q=["Poniedzia\u0142ek","wtorek","\u015aroda","Czwartek","Pi\u0105tek","Sobota","Niedziela"],$=r.a.ul.withConfig({displayName:"TodosList__Styles",componentId:"sc-6u26hq-0"})(["display:flex;flex-direction:column;justify-items:center;align-items:center;height:100vh;overflow-y:scroll;width:100%;"]),tt=function(){var t=Object(c.c)((function(t){return t.todos})),e=new Date,n=e.getMonth(),o=e.getDate(),a=e.getFullYear(),i=e.getDay();"".concat(o,".").concat(n,".").concat(a);a%4==0&&(Z[1]=29);for(var r=[],l=n+1,u=100,d=function(e){var c=o+e,d=Z[l],s=Q[(i+e-1)%7];d<c&&(u++,c=u),d<u&&d<c&&(l++,u=1);var p=t?t.filter((function(t){return t.day===c&&t.month==l})):[];r.push(X(U,{currentDate:{currentDay:o,currentMonth:n,currentYear:a},key:e,weekDay:s,day:c,month:l},p.map((function(t){return X(q,{todo:t})}))))},s=0;s<10;s++)d(s);return X($,null,r)},et=a.a.createElement,nt=r.a.nav.withConfig({displayName:"InstancesWindow__Container",componentId:"sc-120agf7-0"})(["background-color:white;box-shadow:0px 0px 30px rgba(0,0,0,0.3);display:flex;flex-direction:column;width:250px;height:100vh;"]),ot=function(){return et(nt,null)},at=a.a.createElement;function it(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function rt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?it(Object(n),!0).forEach((function(e){Object(x.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):it(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ct=r.a.div.withConfig({displayName:"AddTodoModal__BG",componentId:"sc-1wbi0hq-0"})(["background-color:rgba(0,0,0,0.5);position:absolute;top:0;left:0;width:100vw;height:100vh;"]),lt=r.a.div.withConfig({displayName:"AddTodoModal__Container",componentId:"sc-1wbi0hq-1"})(["position:absolute;top:0;left:0;width:100vw;height:100vh;"]),ut=r.a.form.withConfig({displayName:"AddTodoModal__Form",componentId:"sc-1wbi0hq-2"})(["width:50%;margin:auto;& > *{margin-top:20px;}display:flex;flex-direction:column;align-items:center;"]),dt=r.a.div.withConfig({displayName:"AddTodoModal__Box",componentId:"sc-1wbi0hq-3"})(["height:600px;width:50vw;background-color:white;box-shadow:0px 0px 30px rgba(0,0,0,0.3);position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:10;border-radius:10px;"]),st=r.a.h6.withConfig({displayName:"AddTodoModal__Title",componentId:"sc-1wbi0hq-4"})(['font-size:26px;text-align:center;width:100%;font-family:"Jost";']),pt=Object(r.a)(k.a).withConfig({displayName:"AddTodoModal__ModalItem",componentId:"sc-1wbi0hq-5"})(["color:black;&::placeholder{color:#888888 !important;}"]),ht=r.a.div.withConfig({displayName:"AddTodoModal__Horizntally",componentId:"sc-1wbi0hq-6"})(["display:flex;flex-direction:center;& > *{margin:0 5px;}"]),ft=["","Stycze\u0144","Luty","Marzec","Kwiecie\u0144","Maj","Czerwiec","Lipiec","Sierpie\u0144","Wrzesie\u0144","Pa\u017adziernik","Listopad","Grudzie\u0144"],vt=function(){var t=Object(c.b)(),e=Object(c.c)((function(t){return t.Auth.user._id})),n=Object(c.c)((function(t){return t.modal.open})),a=Object(P.a)(),i=a.setInputs,r=a.inputs,l=a.handleInputChange,u=Object(c.c)((function(t){return t.modal}));Object(o.useEffect)((function(){i((function(t){return rt({},t,{},u)}))}),[n]);return n?at(lt,null,at(ct,{onClick:function(){t({type:J.c})}}),at(dt,null,at(ut,{onSubmit:function(n){n.preventDefault();var o=rt({},r,{userID:e});t(Object(O.a)(o))}},at(st,null,"Dodaj Czynno\u015b\u0107"),at(pt,{onChange:l,value:r.title,name:"title",placeholder:"Tytu\u0142"}),at(pt,{placeholder:"Kr\xf3tki opis"}),at(ht,null,at(M,{name:"day",value:r.day,onChange:l,type:"number",title:"Dzie\u0144",startNumber:"1",lastNumber:"30"}),at(M,{name:"month",value:r.month,onChange:l,type:"word",title:"Miesi\u0105c",options:ft}),at(M,{value:r.year,onChange:l,type:"number",title:"Rok",startNumber:"2020",lastNumber:"2023"})),at(ht,null,at(M,{name:"hour",value:r.hour,onChange:l,type:"number",title:"Godzina",startNumber:"0",lastNumber:"24"}),at(M,{name:"minute",value:r.minute,onChange:l,type:"number",title:"Minuta",startNumber:"0",lastNumber:"59"})),at("p",null,"Podgl\u0105d"),at(q,{todos:r}),at(s.a,null," Dodaj")))):null},mt=(n("vDqi"),a.a.createElement),gt=r.a.div.withConfig({displayName:"dashboard__Container",componentId:"sc-1g5xg5j-0"})(["display:grid;grid-template-columns:250px auto 250px;"]);e.default=function(){return mt(i.a,{title:"Dashboard"},mt(gt,null,mt(y,null),mt(tt,null,mt(U,null)),mt(ot,null),mt(vt,null)))}}},[["NR05",0,1,2,4]]]);