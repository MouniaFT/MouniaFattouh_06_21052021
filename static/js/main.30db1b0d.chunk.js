(this.webpackJsonpfisheye=this.webpackJsonpfisheye||[]).push([[0],{74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(14),n=a.n(i),r=a(11),l=a(3),o=a(10),j=a(2),d=a(0),u=Object(c.createContext)({}),b=function(e){var t=e.children,a=Object(c.useState)([]),s=Object(j.a)(a,2),i=s[0],n=s[1];return Object(d.jsx)(u.Provider,{value:{filterList:i,setFilterList:n},children:t})},h=function(){var e=Object(c.useContext)(u),t=e.filterList,a=e.setFilterList,s=function(e){var c=e.target.value;t.includes(c)?(a(t.filter((function(e){return e!==c}))),e.target.classList.remove("active")):(a([].concat(Object(o.a)(t),[c])),e.target.classList.add("active"))};return Object(d.jsx)("nav",{className:"header_nav",role:"navigation","aria-label":"photographer categories",children:Object(d.jsxs)("ul",{className:"list-tags",children:[Object(d.jsx)("li",{className:"tag-item",children:Object(d.jsx)("button",{className:"tag-btn "+(t.includes("portrait")?"active":" "),onClick:s,value:"portrait",children:"#Portrait"})}),Object(d.jsx)("li",{className:"tag-item",children:Object(d.jsx)("button",{className:"tag-btn "+(t.includes("art")?"active":" "),onClick:s,value:"art",children:"#Art"})}),Object(d.jsx)("li",{className:"tag-item",children:Object(d.jsx)("button",{className:"tag-btn "+(t.includes("fashion")?"active":" "),onClick:s,value:"fashion",children:"#Fashion"})}),Object(d.jsx)("li",{className:"tag-item",children:Object(d.jsx)("button",{className:"tag-btn "+(t.includes("architecture")?"active":" "),onClick:s,value:"architecture",children:"#Architecture"})}),Object(d.jsx)("li",{className:"tag-item",children:Object(d.jsx)("button",{className:"tag-btn "+(t.includes("travel")?"active":" "),onClick:s,value:"travel",children:"#Travel"})}),Object(d.jsx)("li",{className:"tag-item",children:Object(d.jsx)("button",{className:"tag-btn "+(t.includes("sport")?"active":" "),onClick:s,value:"sport",children:"#Sport"})}),Object(d.jsx)("li",{className:"tag-item",children:Object(d.jsx)("button",{className:"tag-btn "+(t.includes("animals")?"active":" "),onClick:s,value:"animals",children:"#Animals"})}),Object(d.jsx)("li",{className:"tag-item",children:Object(d.jsx)("button",{className:"tag-btn "+(t.includes("events")?"active":" "),onClick:s,value:"events",children:"#Events"})})]})})},m=function(){var e=Object(l.e)();return Object(d.jsx)("a",{href:"./",onClick:function(){e.push("/")},className:"header_logo",title:"fisheye - retour \xe0 l'accueil",children:Object(d.jsx)("img",{className:"logo",src:"../images/logo.svg",alt:"Fisheye Home page"})})},O=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("a",{class:"skip-link notfocus-visuallyhidden",href:"#maincontent",children:"Passer au contenu"}),Object(d.jsx)("header",{className:"header",role:"banner",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(m,{}),Object(d.jsx)(h,{})]})})]})},p=a(16),x=a.n(p),g=function(e){var t=e.photographe,a=Object(c.useContext)(u),s=a.filterList,i=a.setFilterList,n=function(e){var t=e.target.value;s.includes(t)?(i(s.filter((function(e){return e!==t}))),e.target.classList.remove("active")):(i([].concat(Object(o.a)(s),[t])),e.target.classList.add("active"))};return Object(d.jsxs)("li",{className:"card-photographe",children:[Object(d.jsxs)(r.b,{to:"/photographe/".concat(t.id),className:"card-photographe-header",children:[Object(d.jsx)("img",{src:"./images/Photographers/".concat(t.portrait),alt:""}),Object(d.jsx)("h2",{className:"name",children:t.name})]}),Object(d.jsxs)("div",{className:"card-photographe-body",children:[Object(d.jsxs)("p",{className:"location",children:[t.city,", ",t.country]}),Object(d.jsx)("p",{className:"tagline",children:t.tagline}),Object(d.jsxs)("p",{className:"price",children:[t.price,"\u20ac/jour"]}),Object(d.jsx)("ul",{className:"list-tags",children:t.tags.map((function(e){return Object(d.jsx)("li",{className:"tag-item",children:Object(d.jsxs)("button",{className:"tag-btn "+(s.includes(e)?"active":" "),onClick:n,value:e,children:["#",e]})})}))})]})]})},v=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],s=t[1],i=Object(c.useContext)(u).filterList;return Object(c.useEffect)((function(){x.a.get("https://raw.githubusercontent.com/MouniaFT/MouniaFattouh_06_21052021/main/fisheye/public/json/FishEyeData.json").then((function(e){return s(e.data.photographers)}))}),[]),Object(d.jsx)("main",{id:"maincontent",className:"photographers",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"photographers_title",children:"Nos photographes"}),Object(d.jsx)("ul",{className:"photographers_list",children:a.filter((function(e){return i.length<=0||!!e.tags.some((function(e){return i.includes(e)}))})).map((function(e){return Object(d.jsx)(g,{photographe:e},e.id)}))})]})})},f=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(O,{}),Object(d.jsx)(v,{})]})},N=a(22),k=a.n(N),C=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),s=a[0],i=a[1],n=Object(c.useState)(""),r=Object(j.a)(n,2),l=r[0],o=r[1],u=Object(c.useState)(""),b=Object(j.a)(u,2),h=b[0],m=b[1],O=Object(c.useState)(""),p=Object(j.a)(O,2),x=p[0],g=p[1],v=Object(c.useState)(!1),f=Object(j.a)(v,2),N=f[0],k=f[1],C=Object(c.useState)(!1),y=Object(j.a)(C,2),S=y[0],_=y[1],L=Object(c.useState)(!1),M=Object(j.a)(L,2),F=M[0],D=M[1],P=Object(c.useState)(!1),I=Object(j.a)(P,2),w=I[0],E=I[1],V=Object(c.useState)(!1),z=Object(j.a)(V,2),A=z[0],T=z[1],q=function(){return!!/\S+@\S+\.\S+/.test(h)||(D(!0),!1)};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"modal-title",children:["Contactez-moi  ",e.name]}),Object(d.jsxs)("form",{className:"modal_form",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"prenom",children:"Pr\xe9nom *"}),Object(d.jsx)("input",{type:"text",name:"prenom",id:"prenom",onChange:function(e){return i(e.target.value)},value:s,placeholder:"Pr\xe9nom",required:!0,"aria-invalid":!A||N}),N&&Object(d.jsx)("span",{className:"error-message",children:"Veuillez saisir votre pr\xe9nom"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"nom",children:"Nom *"}),Object(d.jsx)("input",{type:"text",name:"nom",id:"nom",onChange:function(e){return o(e.target.value)},value:l,placeholder:"Nom",required:!0,"aria-invalid":!A||S}),S&&Object(d.jsx)("span",{className:"error-message",children:"Veuillez saisir votre nom"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"email",children:"Email *"}),Object(d.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return m(e.target.value)},value:h,placeholder:"Email",required:!0,"aria-invalid":!A||F}),F&&Object(d.jsx)("span",{className:"error-message",children:"Veuillez saisir une adresse email valide"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"message",children:"Votre message *"}),Object(d.jsx)("textarea",{type:"text",name:"message",id:"message",onChange:function(e){return g(e.target.value)},value:x,placeholder:"Message",required:!0,"aria-invalid":!A||w}),w&&Object(d.jsx)("span",{className:"error-message",children:"Veuillez saisir votre message"})]}),Object(d.jsx)("button",{className:"btn btn-submit",type:"submit",onClick:function(e){e.preventDefault(),T(!0),console.log(s),k(!s),_(!l),h?q()&&D(!1):D(!0),E(!x),s&&l&&q()&&x?console.log("\n            Pr\xe9nom: ".concat(s,"\n            Nom: ").concat(l,"\n            Email: ").concat(h,"\n            Message: ").concat(x,"\n        ")):console.log("les champs ne sont pas valides")},title:"Send",children:"Envoyer"})]})]})},y=Object(c.createContext)({}),S=function(e){var t=e.children,a=Object(c.useState)(0),s=Object(j.a)(a,2),i=s[0],n=s[1];return Object(d.jsx)(y.Provider,{value:{maValeur:i,setMaValeur:n},children:t})};k.a.setAppElement("#root");var _=function(e){var t=Object(l.e)(),a=Object(c.useState)(!1),s=Object(j.a)(a,2),i=s[0],n=s[1],r=Object(c.useContext)(u),b=r.filterList,h=r.setFilterList,m=function(e){var t=e.target.value;b.includes(t)?(h(b.filter((function(e){return e!==t}))),e.target.classList.remove("active")):(h([].concat(Object(o.a)(b),[t])),e.target.classList.add("active"))},O=Object(c.useContext)(y),p=O.maValeur,x=(O.setMaValeur,e.medias.reduce((function(e,t){return e+t.likes}),0));return Object(d.jsxs)("div",{className:"card-photographe",children:[Object(d.jsx)("img",{src:"../images/Photographers/".concat(e.photographe.portrait),alt:""}),Object(d.jsxs)("div",{className:"card-photographe-body",children:[Object(d.jsx)("h1",{className:"name",children:e.photographe.name}),Object(d.jsxs)("p",{className:"location",children:[e.photographe.city,", ",e.photographe.country]}),Object(d.jsx)("p",{className:"tagline",children:e.photographe.tagline}),Object(d.jsx)("ul",{className:"list-tags",children:e.photographe.tags.map((function(e){return Object(d.jsx)("li",{className:"tag-item",onClick:function(){t.push("/")},children:Object(d.jsxs)("button",{className:"tag-btn "+(b.includes(e)?"active":" "),onClick:m,value:e,children:["#",e]})})}))})]}),Object(d.jsxs)("div",{className:"card-photographe-infos",children:[Object(d.jsx)("span",{className:"infos-likes",children:p+x}),Object(d.jsxs)("span",{className:"infos-price",children:[e.photographe.price,"\u20ac / jour"]})]}),Object(d.jsx)("button",{onClick:function(){return n(!0)},className:"btn btn-contact",children:"Contactez-moi"}),Object(d.jsxs)(k.a,{isOpen:i,className:"modal",children:[Object(d.jsx)("button",{onClick:function(){return n(!1)},className:"modal-btn-close",title:"Close Contact",children:Object(d.jsx)("img",{src:"../images/close.svg",alt:""})}),Object(d.jsx)(C,{name:e.photographe.name})]})]})},L=function(e){var t=e.mediaIndex,a=e.media,s=e.setMediaDisplayed,i=e.photographers,n=Object(c.useState)(a.likes),r=Object(j.a)(n,2),o=r[0],u=r[1],b=Object(l.f)().id,h=Object(c.useContext)(y),m=h.maValeur,O=h.setMaValeur;return Object(d.jsxs)("li",{className:"media",children:[i.filter((function(e){return e.id===parseInt(b)})).map((function(e){return a.image?Object(d.jsx)("button",{className:"media-image",onClick:function(){return s({id:a.id,index:t})},children:Object(d.jsx)("img",{src:"../images/".concat(e.name.replace(/\s+/g,""),"/").concat(a.image),alt:a.description+", closeup view"})}):Object(d.jsx)("button",{className:"media-image",onClick:function(){return s({id:a.id,index:t})},children:Object(d.jsx)("img",{src:"../images/".concat(e.name.replace(/\s+/g,""),"/video-miniature.jpeg"),alt:"imag-miniature-delavideo, closeup view"})})})),Object(d.jsxs)("div",{className:"media-body",children:[Object(d.jsx)("div",{className:"title",children:a.title}),Object(d.jsx)("span",{className:"number",children:o}),Object(d.jsx)("button",{className:"likes",onClick:function(){o===a.likes&&(u(o+1),O(m+1))},children:Object(d.jsx)("img",{src:"../images/likes.svg",alt:"likes"})})]})]})},M=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"slider",children:[e.photographers.filter((function(t){return t.id===parseInt(e.id)})).map((function(t){return e.media.image?Object(d.jsx)("img",{className:"slider-image",src:"../images/".concat(t.name.replace(/\s+/g,""),"/").concat(e.media.image),alt:e.media.description}):Object(d.jsx)("video",{className:"slider-video",controls:!0,alt:e.media.description,children:Object(d.jsx)("source",{src:"../images/".concat(t.name.replace(/\s+/g,""),"/").concat(e.media.video),type:"video/mp4"})})})),Object(d.jsx)("p",{className:"slider-title",children:e.media.title})]}),Object(d.jsx)("button",{onClick:function(){return e.setMediaDisplayed(void 0)},className:"btn-close","aria-label":"Close dialog",children:Object(d.jsx)("img",{src:"../images/close-lightbox.svg",alt:""})}),Object(d.jsx)("button",{className:"slider-chevron chevron-left",onClick:e.prevSlide,"aria-label":"Previous image",children:Object(d.jsx)("img",{src:"../images/chevron-left.svg",alt:""})}),Object(d.jsx)("button",{className:"slider-chevron chevron-right",onClick:e.nextSlide,"aria-label":"Next image",children:Object(d.jsx)("img",{src:"../images/chevron-right.svg",alt:""})})]})},F=a(36),D=a.n(F),P=function(e){var t=Object(c.useState)(!0),a=Object(j.a)(t,2),s=a[0],i=a[1],n=Object(c.useState)(void 0),r=Object(j.a)(n,2),l=r[0],u=r[1],b=Object(c.useState)("likes"),h=Object(j.a)(b,2),m=h[0],O=h[1],p=Object(o.a)(e.media);null!==m&&("likes"==m&&p.sort((function(e,t){return t.likes-e.likes})),"title"==m&&p.sort((function(e,t){return e[m]<t[m]?-1:e[m]>t[m]?1:0})),"date"==m&&p.sort((function(e,t){return new Date(e[m])<new Date(t[m])?-1:new Date(e[m])>new Date(t[m])?1:0})));var x=p.filter((function(t){return t.photographerId===parseInt(e.id)}));return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"media_filtre",children:[Object(d.jsx)("div",{className:"media_filtre_label",children:"Trier Par"}),Object(d.jsx)("div",{className:"media_filtre_menu",children:s?Object(d.jsxs)("button",{id:"btn-listbox",className:"media_filtre_btn","aria-haspopup":"listbox","aria-expanded":"false","aria-controls":"listbox",onClick:function(){return i(!1)},children:[{likes:"Popularit\xe9",date:"Date",title:"Titre"}[m]," "]}):Object(d.jsxs)("ul",{id:"listbox",role:"listbox","aria-labelledby":"btn-listbox","aria-expanded":"true",className:"media_filtre_list",children:[Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){O("likes"),i(!0)},value:"popularite",children:"Popularit\xe9"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){O("date"),i(!0)},value:"date",children:"Date"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){O("title"),i(!0)},value:"titre",children:"Titre"})})]})})]}),Object(d.jsx)("ul",{className:"photographers_media_list",children:p.filter((function(t){return t.photographerId===parseInt(e.id)})).map((function(t,a){return Object(d.jsx)(L,{mediaIndex:a,media:t,photographers:e.photographers,id:e.id,setMediaDisplayed:u},t.id)}))}),l&&Object(d.jsx)(D.a,{children:Object(d.jsx)("div",{className:"lightbox",children:Object(d.jsx)("div",{className:"slider-container","aria-label":"image closeup view",children:Object(d.jsx)(M,{media:x.find((function(e){return e.id===l.id})),photographers:e.photographers,id:e.id,MediaDisplayed:l.id,setMediaDisplayed:u,nextSlide:function(){return u({id:l.index<x.length-1?x[l.index+1].id:x[0].id,index:l.index<x.length-1?l.index+1:0})},prevSlide:function(){return u({id:l.index>0?x[l.index-1].id:x[x.length-1].id,index:l.index>0?l.index-1:x.length-1})}})})})})]})},I=function(){var e=Object(l.f)().id,t=Object(c.useState)(!0),a=Object(j.a)(t,2),s=a[0],i=a[1],n=Object(c.useState)([]),r=Object(j.a)(n,2),o=r[0],u=r[1];return Object(c.useEffect)((function(){x.a.get("https://raw.githubusercontent.com/MouniaFT/MouniaFattouh_06_21052021/main/fisheye/public/json/FishEyeData.json").then((function(e){u(e.data),i(!1)}))}),[]),s?Object(d.jsx)("div",{className:"App",children:"Loading..."}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(m,{})})}),Object(d.jsx)("main",{className:"photographers",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("section",{className:"photographers_infos",children:o.photographers.filter((function(t){return t.id===parseInt(e)})).map((function(t){return Object(d.jsx)(_,{photographe:t,medias:o.media.filter((function(t){return t.photographerId===parseInt(e)}))},t.id)}))}),Object(d.jsx)("section",{className:"photographers_media",children:Object(d.jsx)(P,{id:e,media:o.media,photographers:o.photographers},o.media.id)})]})})]})},w=function(){return Object(d.jsxs)(r.a,{basename:"MouniaFattouh_06_21052021",children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:f,children:Object(d.jsx)(f,{})}),Object(d.jsx)(l.a,{path:"/photographe/:id",component:I,children:Object(d.jsx)(I,{})})]})};var E=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(w,{})})};a(74);n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(b,{children:Object(d.jsx)(S,{children:Object(d.jsx)(E,{})})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.30db1b0d.chunk.js.map