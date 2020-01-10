(this["webpackJsonpcontacts-app"]=this["webpackJsonpcontacts-app"]||[]).push([[0],{236:function(e,t,n){e.exports=n(438)},241:function(e,t,n){},438:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(41),l=n.n(c),i=(n(241),n(242),n(68)),o=n(46),u=n(44),s=n(56),m=n(20),d=n.n(m),f=n(456),p=n(453),E=n(449),b=n(223),h=function(e){return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(p.a,{active:!0,inverted:!0},r.a.createElement(E.a,{inverted:!0,content:"Loading ..."})),r.a.createElement(b.a,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"})))},v=n(29),g=n(30);function j(){var e=Object(v.a)(["\n  background: ",";\n  border-bottom: 1px solid #9e9f9f;\n  cursor: ",";\n  &:hover {\n    background: ",";\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(v.a)(["\n  height: 200px;\n  overflow: auto;\n"]);return O=function(){return e},e}function w(){var e=Object(v.a)(["\n  background: #9e9f9f;\n"]);return w=function(){return e},e}function C(){var e=Object(v.a)(["\n  width: 33%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n"]);return C=function(){return e},e}function y(){var e=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n"]);return y=function(){return e},e}var x=g.a.div(y()),k=g.a.div(C()),S=Object(g.a)(x)(w()),B=g.a.div(O()),L=Object(g.a)(x)(j(),(function(e){return e.item?"#fff":"#9e9f9f"}),(function(e){return e.item?"pointer":"default"}),(function(e){return e.item?"#3aa9f4":"none"}));var _=function(e){return r.a.createElement("div",null,r.a.createElement(S,null,r.a.createElement(k,null,"First Name"),r.a.createElement(k,null,"Last Name"),r.a.createElement(k,null,"Birthday"),r.a.createElement(k,null,"Cell#")),e.contactList.length?r.a.createElement(B,null,e.contactList.map((function(t){return r.a.createElement(L,{item:!0,key:t._id,onClick:function(){return e.setSelected(Object(u.a)({},t,{first_old:t.first,last_old:t.last}))}},r.a.createElement(k,{item:!0},t.first),r.a.createElement(k,{item:!0},t.last),r.a.createElement(k,{item:!0},t.birthday.slice(0,10)),r.a.createElement(k,{item:!0},t.cell))}))):r.a.createElement(h,null))},N=n(450),F=n(455);function I(){var e=Object(v.a)(["\n  font-weight: bold;\n  font-size: 0.92857143em;\n  margin-bottom: 5px;\n"]);return I=function(){return e},e}function W(){var e=Object(v.a)(["\n  .react-datepicker-wrapper {\n    width: 300px;\n  }\n"]);return W=function(){return e},e}function D(){var e=Object(v.a)(["\n  padding: 50px;\n  margin-top: 50px;\n  border: 1px solid #9e9f9f;\n  .formWrapper {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n  }\n  .saveBtn {\n    width: 100px;\n  }\n"]);return D=function(){return e},e}var G=g.a.div(D()),H=g.a.div(W()),V=g.a.div(I()),q=n(219),z=n.n(q),A=(n(341),r.a.memo((function(e){var t=e.selected,n=e.setSelected,a=e.updateContact;return r.a.createElement(G,null,r.a.createElement(N.a,{size:"big",className:"formWrapper"},r.a.createElement(N.a.Group,{widths:"equal"},r.a.createElement(N.a.Input,{id:"form-subcomponent-shorthand-input-first-name",label:"First name",placeholder:"First name",defaultValue:t.first,onChange:function(e){n(Object(u.a)({},t,{first:e.target.value}))}}),r.a.createElement(H,null,r.a.createElement(V,null,"Birthday"),r.a.createElement(z.a,{onChange:function(e){n(Object(u.a)({},t,{birthday:new Date(e)}))},selected:t.birthday?new Date(t.birthday):""}))),r.a.createElement(N.a.Group,{widths:"equal"},r.a.createElement(N.a.Input,{id:"form-subcomponent-shorthand-input-last-name",label:"Last name",placeholder:"Last name",onChange:function(e){n(Object(u.a)({},t,{last:e.target.value}))},defaultValue:t.last}),r.a.createElement(N.a.Input,{id:"form-subcomponent-shorthand-input-id",label:"Cell",onChange:function(e){n(Object(u.a)({},t,{cell:e.target.value}))},defaultValue:t.cell})),r.a.createElement(F.a,{className:"saveBtn",primary:!0,onClick:a},"Save")))}))),J=n(454),T=function(e){var t=Object(a.useState)(!0),n=Object(s.a)(t,2),c=n[0],l=n[1];return r.a.createElement("div",null,r.a.createElement("br",null),c&&r.a.createElement(J.a,{warning:e.error,positive:e.success,onDismiss:function(){return l(!1)},header:e.success?"Great! :)":"Bad news :/",content:e.success?"The contact was updated":"have some reject"}))};function $(){var e=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: ",";\n  margin: ",";\n"]);return $=function(){return e},e}var K=g.a.div($(),(function(e){var t=e.direction;return t||"row"}),(function(e){var t=e.margin;return t||0})),M=n(145),P=n.n(M);var Q={getContacts:function(){return P.a.post("/api/getContacts")},updateContact:function(e){return P.a.put("/api/updateContact",e)}};var R=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),i=Object(s.a)(l,2),o=i[0],m=i[1],f=Object(a.useState)(!1),p=Object(s.a)(f,2),E=p[0],b=p[1],h=Object(a.useState)({first:"",last:"",first_old:"",last_old:"",birthday:"",_id:1,cell:""}),v=Object(s.a)(h,2),g=v[0],j=v[1],O=Object(a.useCallback)((function(e){j(Object(u.a)({},e))}),[g]);return Object(a.useEffect)((function(){Q.getContacts().then((function(e){c(d()(e,"data.contact",[]))})).catch((function(e){console.error("Error fetch data",e)}))}),[]),r.a.createElement(K,{direction:"column",margin:"0 5%"},r.a.createElement(_,{contactList:n,setSelected:j}),o&&r.a.createElement(T,{error:E,success:o}),r.a.createElement(A,{selected:g,setSelected:O,updateContact:function(){m(!0),Q.updateContact(g).then((function(e){m(!0)})).catch((function(e){b(!0)}))}}))};var U=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Help"))},X=n(69),Y=n(452),Z=r.a.createElement("a",null,r.a.createElement(X.a,{name:"user"}),"16 Friends");var ee=function(){return r.a.createElement(K,null,r.a.createElement(Y.a,{image:"https://react.semantic-ui.com/images/avatar/small/jenny.jpg",header:"Elliot Baker",meta:"0527456966",description:"Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.",extra:Z}))};var te=function(){return r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/about"},r.a.createElement(ee,null)),r.a.createElement(o.b,{path:"/help"},r.a.createElement(U,null)),r.a.createElement(o.b,{path:"/contacts"},r.a.createElement(R,null)),r.a.createElement(o.b,{exact:!0,path:"/"},r.a.createElement(o.a,{to:"/contacts"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement((function(){return r.a.createElement(i.a,null,r.a.createElement(K,null,r.a.createElement(i.b,{to:"/about"},r.a.createElement(F.a,{animated:"vertical",basic:!0,color:"purple"},r.a.createElement(F.a.Content,{visible:!0},"About"),r.a.createElement(F.a.Content,{hidden:!0},"About"))),r.a.createElement(i.b,{to:"/help"},r.a.createElement(F.a,{animated:"vertical",basic:!0,color:"blue"},r.a.createElement(F.a.Content,{visible:!0},"Help"),r.a.createElement(F.a.Content,{hidden:!0},"Help"))),r.a.createElement(i.b,{to:"/contacts"},r.a.createElement(F.a,{animated:"vertical",basic:!0,color:"yellow"},r.a.createElement(F.a.Content,{visible:!0},"Contacts"),r.a.createElement(F.a.Content,{hidden:!0},"Contacts")))),r.a.createElement("br",null),r.a.createElement(te,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[236,1,2]]]);
//# sourceMappingURL=main.86df8dfd.chunk.js.map