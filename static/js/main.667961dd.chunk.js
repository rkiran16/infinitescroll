(this.webpackJsonpinfinitescroll=this.webpackJsonpinfinitescroll||[]).push([[0],{57:function(e,t,c){},58:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(5),a=c(0),r=c.n(a),s=c(10),i=c.n(s),o=c(8),j=c(15),l=c(14),b=c.n(l);var u=c(19),d=c.n(u),h=c(67),O=c(69),m=c(70),f=c(68),x=c(33),p=c(71);c(57),c(58);function g(e){var t=e.id,c=e.title,a=e.authorName,r=e.elementRef;return Object(n.jsxs)("figure",{style:{minHeight:"300px"},ref:r&&r,className:"bookTile",children:[Object(n.jsx)("img",{src:t?"http://covers.openlibrary.org/b/olid/".concat(t,"-L.jpg"):"https://placeimg.com/300/300/book"}),Object(n.jsxs)("figcaption",{children:[Object(n.jsx)("h5",{children:a}),Object(n.jsx)("h4",{children:c})]})]})}function k(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(""),i=Object(o.a)(s,2),l=i[0],u=i[1],k=function(e,t){var c,n=Object(a.useState)([]),r=Object(o.a)(n,2),s=r[0],i=r[1],l=Object(a.useState)(!1),u=Object(o.a)(l,2),d=u[0],h=u[1],O=Object(a.useState)(!1),m=Object(o.a)(O,2),f=m[0],x=m[1],p=Object(a.useState)(!0),g=Object(o.a)(p,2),k=g[0],y=g[1];return Object(a.useEffect)((function(){i([])}),[e]),Object(a.useEffect)((function(){return h(!0),x(!1),b()({method:"GET",url:"https://openlibrary.org/search.json",params:{q:e,page:t},cancelToken:new b.a.CancelToken((function(e){return c=e}))}).then((function(e){h(!1),i((function(t){return Object(j.a)(new Set([].concat(Object(j.a)(t),Object(j.a)(e.data.docs))))})),y(e.data.docs.length>0)})).catch((function(e){b.a.isCancel(e)||(x(!0),h(!1))})),function(){return c()}}),[e,t]),{books:s,loading:d,error:f,hasMore:k}}(c,l),y=k.books,N=k.loading,v=k.error,S=k.hasMore,_=Object(a.useRef)(),w=Object(a.useCallback)((function(e){N||(_.current&&_.current.disconnect(),_.current=new IntersectionObserver((function(e){e[0].isIntersecting&&S&&u((function(e){return e+1}))})),e&&_.current.observe(e))}),[N,S]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h.a,{fluid:!0,className:"bg-warning p-0",children:Object(n.jsx)(O.a,{sticky:"top",expand:"lg",variant:"dark",bg:"dark",children:Object(n.jsx)(O.a.Brand,{href:"/",children:"BOOK SHOP"})})}),Object(n.jsx)(h.a,{fluid:!0,className:"bg-warning",style:{height:"250px"},children:Object(n.jsx)(h.a,{className:"p-5",children:Object(n.jsx)(m.a,{children:Object(n.jsxs)(m.a.Group,{children:[Object(n.jsx)(m.a.Control,{className:"rounded",size:"lg",type:"text",placeholder:"Search Books",value:c,onChange:function(e){r(e.target.value),u(1)}}),Object(n.jsx)(m.a.Text,{className:"text-muted",children:"Start typing to see your favorite books."})]})})})}),Object(n.jsx)(h.a,{fluid:!0,className:"bg-info",style:{minHeight:"100vh"},children:Object(n.jsxs)(h.a,{className:"p-5",children:[Object(n.jsx)(f.a,{children:y&&y.map((function(e,t){return t===y.length-1?Object(n.jsx)(x.a,{className:"p-2",xs:12,sm:6,md:4,ref:w,children:Object(n.jsx)(g,{id:e.edition_key&&e.edition_key[0],title:e.title,authorName:e.author_name&&e.author_name[0],elementRef:w()})},"book-".concat(Math.random())):Object(n.jsx)(x.a,{className:"p-2",xs:12,sm:6,md:4,children:Object(n.jsx)(g,{id:e.edition_key&&e.edition_key[0],authorName:e.author_name&&e.author_name[0],title:e.title})},"book-".concat(Math.random()))}))}),N&&Object(n.jsx)(f.a,{children:Array(3).fill("").map((function(e){return Object(n.jsx)(x.a,{className:"p-2",sm:12,md:4,ref:w,children:Object(n.jsxs)(p.a,{children:[Object(n.jsx)(d.a,{height:150}),Object(n.jsx)(p.a.Body,{children:Object(n.jsx)(d.a,{})})]})},"skeleton-".concat(Math.random()))}))}),v&&Object(n.jsx)("p",{children:"Error"})]})})]})}i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.667961dd.chunk.js.map