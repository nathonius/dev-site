(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,n){e.exports=n(217)},142:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c,l=n(71),m=n(29),s={root:"/",home:{base:"/"},contact:{base:"/contact"}},u={root:"/dnd"};!function(e){e.Home="/",e.Contact="/contact"}(c||(c={}));var h=n(225),p=(n(142),function(e){return a.createElement(h.a,{className:"project",title:e.title,extra:a.createElement("a",{className:"project-more-link",href:e.link,target:"_blank",rel:"noopener noreferrer"},"More")},a.createElement("p",{className:"project-description",style:{margin:0}},e.description))}),d=[{title:"Homebrewery Markdown Preview",description:"An extension for Visual Studio Code that formats the markdown preview in the same manner as the Homebrewery",link:"https://marketplace.visualstudio.com/items?itemName=officerhalf.homebrewery-vscode"},{title:"Alloy Theme",description:"A more monochromatic, desaturated Monokai theme for Visual Studio Code, PrismJS, and Conemu.",link:"https://marketplace.visualstudio.com/items?itemName=officerhalf.alloy-theme"},{title:"The Captain's Hooks",description:"A collection of useful React utility hooks.",link:"https://www.npmjs.com/package/the-captains-hooks"}],E=n(128),f=n(2),w=n.n(f),g=(n(201),n(222)),b=n(129),y=n(119),k=n(227),v={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},N=function(e){var t=e.ease,n=void 0===t?"ease":t,r=e.timeout,o=void 0===r?300:r,i=e.in,c=e.children,l=Object(y.a)(e,["ease","timeout","in","children"]),m={opacity:0,transition:"opacity ".concat(o,"ms"),transitionTimingFunction:n};return a.createElement(k.a,Object.assign({timeout:o,in:i},l),function(e){return a.createElement("div",{style:Object(b.a)({},m,v[e]),children:c})})},S=function(e){var t=a.useState(!0),n=Object(E.a)(t,2),r=n[0],o=n[1];return a.createElement(a.Fragment,null,r&&a.createElement("div",{className:"contact-spinner-wrapper"},a.createElement(g.a,{className:"contact-spinner"})),a.createElement(N,{in:!r},a.createElement("iframe",{className:w()("contact-iframe"),src:"https://docs.google.com/forms/d/e/1FAIpQLScLKJVojwvtY0TpBPYfaUQEhKjQfa2iAZsitp3iRxkEoAYvmw/viewform?embedded=true",title:"Contact Me",onLoad:function(){return o(!1)}})))},j=function(e){return a.createElement("div",{className:"home-wrapper"},a.createElement("div",{className:"home-section"},a.createElement("div",{className:"home-section-inner"},a.createElement("h2",null,"About"),a.createElement("p",null,"Nathan Smith is an Associate Software Developer at Bentley Systems where he writes full-stack enterprise ASP.NET Core and TypeScript + React web applications and maintains a CSS + React UI library. In his spare time he plays tabletop and video games and takes pictures of his cats.")),a.createElement("div",{className:"home-section-inner home-section-inner-projects"},a.createElement("h2",null,"Projects"),d.map(function(e){return a.createElement(p,Object.assign({},e,{key:e.title}))}))),a.createElement("div",{className:"home-section"},a.createElement(S,null)))},C=n(230),x=n(229),H=(n(202),Object(m.f)(function(e){return a.createElement("div",{id:"not-found"},a.createElement(C.a,{icon:"zoom-out",title:"Not Found",description:"Something went wrong or there was nothing here to begin with.",action:a.createElement(x.a,{icon:"home",intent:"primary",onClick:function(){return e.history.push(s.home.base)}},"Return Home")}))})),A=n(223),F=n(97),O=Object(m.f)(function(e){return a.createElement(a.Fragment,null,a.createElement("span",{className:"logo",style:{color:"white",paddingRight:20}},"Nathan Smith"),a.createElement(A.a,{type:"vertical"}),a.createElement(F.a,{mode:"horizontal",theme:"dark",style:{lineHeight:"64px",display:"inline-block"}},a.createElement(F.a.Item,null,"Home")))}),T=n(228),I=function(e){return a.createElement("div",null,"Find me here:",a.createElement(T.a,{icon:"github",style:{backgroundColor:"transparent",borderColor:"transparent",boxShadow:"none",marginLeft:4},href:"https://github.com/OfficerHalf",target:"_blank",rel:"noreferrer"}),a.createElement(T.a,{icon:"linkedin",style:{backgroundColor:"transparent",borderColor:"transparent",boxShadow:"none"},href:"https://www.linkedin.com/in/nathan-r-smith/",target:"_blank",rel:"noreferrer"}),a.createElement("span",{style:{float:"right"}},"\xa9 Nathan Smith 2019"))},R=n(224),P=n(226),B=R.a.Header,J=R.a.Content,L=R.a.Footer,M=function(e){return a.createElement(R.a,{className:"layout"},a.createElement(B,null,a.createElement(O,null)),a.createElement(J,{style:{padding:"0 50px"}},a.createElement(P.a,{style:{margin:"16px 0"}},a.createElement(P.a.Item,null,"Home")),a.createElement("div",{style:{backgroundColor:"white",padding:24,minHeight:280}},a.createElement(m.c,null,a.createElement(m.a,{exact:!0,path:s.contact.base,component:S}),a.createElement(m.a,{exact:!0,path:s.home.base,component:j}),a.createElement(m.a,{component:H})))),a.createElement(L,null,a.createElement(I,null)))},Q=function(e){return a.createElement(a.Fragment,null,a.createElement(M,null))},V=function(e){return a.createElement("div",null,"DndTools")};n(216);i.a.render(r.a.createElement(function(e){return a.createElement(l.a,null,a.createElement(m.c,null,a.createElement(m.a,{path:u.root,component:V}),a.createElement(m.a,{path:s.root,component:Q})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[137,1,2]]]);
//# sourceMappingURL=main.b70c424e.chunk.js.map