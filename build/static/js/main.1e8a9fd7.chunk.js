(this.webpackJsonpmy_todo=this.webpackJsonpmy_todo||[]).push([[0],{33:function(e,t,n){},35:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(10),r=n.n(a),s=n(24),i=n.n(s),o=(n(33),n(6)),u=n.n(o),l=n(11),d=n(13);n(35);var j=function(e){var t=e.item,n=e.onCheck;return Object(c.jsxs)("label",{className:"panel-block",children:[Object(c.jsx)("input",{type:"checkbox",checked:t.done,onChange:function(){n(t)}}),Object(c.jsx)("span",{className:t.done?"has-text-grey-light":"",children:t.text})]})};var f=function(e){var t=e.onAdd,n=r.a.useState(""),a=Object(d.a)(n,2),s=a[0],i=a[1];return Object(c.jsx)("div",{className:"panel-block",children:Object(c.jsx)("input",{class:"input",type:"text",placeholder:"Todo\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",value:s,onChange:function(e){return i(e.target.value)},onKeyDown:function(e){13===e.keyCode&&(t(s),i(""))}})})};var p=function(e){var t=e.value,n=e.onChange,a=function(e,t){t.preventDefault(),n(e)};return Object(c.jsxs)("div",{className:"panel-tabs",children:[Object(c.jsx)("a",{href:"#",onClick:a.bind(null,"ALL"),className:"ALL"===t?"is-active":"",children:"\u5168\u3066"}),Object(c.jsx)("a",{href:"#",onClick:a.bind(null,"TODO"),className:"TODO"===t?"is-active":"",children:"\u672a\u5b8c\u4e86"}),Object(c.jsx)("a",{href:"#",onClick:a.bind(null,"DONE"),className:"DONE"===t?"is-active":"",children:"\u5b8c\u4e86\u6e08\u307f"})]})},b=n(14),h=n(27),O=n(15);O.a.initializeApp({apiKey:"AIzaSyBJ25Zoj0vvH2Rgs8-2CNe5eohLhXJgxWY",authDomain:"fir-sample-5f95d.firebaseapp.com",projectId:"fir-sample-5f95d",storageBucket:"fir-sample-5f95d.appspot.com",messagingSenderId:"615341003790",appId:"1:615341003790:web:b7a9d1ceafc9a2522a185f"});var v=O.a.firestore(),x=O.a.auth(),m=(O.a,function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.collection("todos").get();case 3:return t=e.sent,n=t.docs.map((function(e){return Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id})})),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()),g=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=v.collection("todos"),e.next=4,n.add(t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=v.collection("todos").doc(n),e.next=4,c.update(t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.collection("todos").doc(t.id),e.next=3,n.delete().then((function(){})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y={signInFlow:"popup",signInSuccessUrl:"/",signInOptions:[O.a.auth.GoogleAuthProvider.PROVIDER_ID]},N=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.uid,e.next=3,v.collection("users").doc(n).get();case 3:if((c=e.sent).exists){e.next=10;break}return e.next=7,v.collection("users").doc(n).set({name:t.displayName});case 7:return e.abrupt("return",{name:t.displayName,id:n});case 10:return e.abrupt("return",Object(b.a)({id:n},c.data()));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.firestore().collection("users").doc(t.id).get();case 3:if(!(c=e.sent).exists){e.next=7;break}return e.next=7,O.a.firestore().collection("users").doc(t.id).update(Object(b.a)(Object(b.a)({},c.data()),{},{image:n}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=O.a.storage().ref().child("/images/".concat(t.name)),c="",e.prev=2,e.next=5,n.put(t);case 5:return e.next=7,n.getDownloadURL();case 7:c=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();var S=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){r()}),[n]);var r=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={text:t.text,done:t.done},e.next=3,g(a);case 3:c([].concat(Object(h.a)(n),[a]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={done:!t.done},e.next=3,k(a,t.id);case 3:r=n.map((function(e){return e.id===t.id&&(e=Object(b.a)(Object(b.a)({},e),{},{changes:a})),e})),c(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return[n,s,i,function(){n.map((function(e){w(e)})),c([])}]};var D=function(){var e=S(),t=Object(d.a)(e,4),n=t[0],a=t[1],s=t[2],i=t[3],o=r.a.useState("ALL"),u=Object(d.a)(o,2),l=u[0],b=u[1],h=n.filter((function(e){return"ALL"===l||("TODO"===l?!e.done:"DONE"===l?e.done:void 0)})),O=function(e){s(e)};return Object(c.jsxs)("article",{class:"panel is-danger",children:[Object(c.jsx)("div",{className:"panel-heading",children:Object(c.jsxs)("span",{class:"icon-text",children:[Object(c.jsx)("span",{class:"icon",children:Object(c.jsx)("i",{class:"fas fa-calendar-check"})}),Object(c.jsx)("span",{children:" ITSS Todo\u30a2\u30d7\u30ea"})]})}),Object(c.jsx)(f,{onAdd:function(e){a({text:e,done:!1})}}),Object(c.jsx)(p,{onChange:function(e){return b(e)},value:l}),h.map((function(e){return Object(c.jsx)(j,{item:e,onCheck:O},e.id)})),Object(c.jsxs)("div",{className:"panel-block",children:[h.length," items"]}),Object(c.jsx)("div",{className:"panel-block",children:Object(c.jsx)("button",{className:"button is-light is-fullwidth",onClick:i,children:"\u5168\u3066\u306eToDo\u3092\u524a\u9664"})})]})},L=n(25),A=n.n(L);var T=function(){return Object(c.jsx)("div",{className:"column panel-block",children:Object(c.jsx)(A.a,{uiConfig:y,firebaseAuth:x})})};var E=function(e){var t=e.userImage,n=e.onSletctedImage,r=Object(a.useState)(!1),s=Object(d.a)(r,2),i=s[0],o=s[1],j=i?"is-active":"",f=Object(a.useState)(t),p=Object(d.a)(f,2),b=p[0],h=p[1],O=function(){var e=Object(l.a)(u.a.mark((function e(t){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.files[0],e.next=3,I(c);case 3:a=e.sent,n(a),h(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){o(!i)},x=function(){return b?Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:b})}):Object(c.jsx)("i",{class:"fas fa-user"})};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"modal ".concat(j),children:[Object(c.jsx)("div",{class:"modal-background"}),Object(c.jsxs)("div",{class:"modal-content",children:[Object(c.jsx)("div",{class:"file is-boxed",children:Object(c.jsxs)("label",{class:"file-label",children:[Object(c.jsx)("input",{class:"file-input",type:"file",name:"resume",onChange:O}),Object(c.jsxs)("span",{class:"file-cta",children:[Object(c.jsx)("span",{class:"file-icon",children:Object(c.jsx)("i",{class:"fas fa-upload"})}),Object(c.jsx)("span",{class:"file-label",children:"\u753b\u50cf\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"})]})]})}),Object(c.jsx)("button",{class:"modal-close is-large","aria-label":"close",onClick:v})]})]}),Object(c.jsx)("button",{onClick:v,class:"button is-primary is-inverted",children:Object(c.jsx)("span",{class:"icon",children:Object(c.jsx)(x,{})})})]})};var F=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),i=Object(d.a)(s,2),o=i[0],j=i[1];Object(a.useEffect)((function(){x.onAuthStateChanged(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r(!1),n=null,!t){e.next=6;break}return e.next=5,N(t);case 5:n=e.sent;case 6:j(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var f=function(){x.signOut()},p=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(o,t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){return o?Object(c.jsxs)("div",{class:"navbar-end",children:[Object(c.jsxs)("div",{class:"navbar-item",children:[Object(c.jsx)(E,{userImage:o.image,onSletctedImage:p}),o.name]}),Object(c.jsx)("div",{class:"navbar-item",children:Object(c.jsx)("button",{class:"button is-danger is-light is-small",onClick:f,children:" Logout"})})]}):Object(c.jsx)(T,{})};return Object(c.jsxs)("div",{className:"container is-fluid",children:[Object(c.jsx)("header",{class:"navbar",children:n?Object(c.jsx)("p",{children:"LOADING....."}):Object(c.jsx)(b,{})}),Object(c.jsx)("div",{children:o&&Object(c.jsx)(D,{})})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),B()}},[[48,1,2]]]);
//# sourceMappingURL=main.1e8a9fd7.chunk.js.map