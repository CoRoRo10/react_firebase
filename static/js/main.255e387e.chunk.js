(this.webpackJsonpfirebase_chat_app=this.webpackJsonpfirebase_chat_app||[]).push([[0],{102:function(e,t,c){},115:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(16),s=c.n(i),o=(c(102),c(75)),r=c(76),l=c(84),d=c(82),u=c(41),j=c(18),h=c(12),b=(c(73),c(66)),f=b.a.initializeApp({apiKey:"AIzaSyDqm-CKdHXQK0Tn1JQg20tZwmYZFfwr0BI",authDomain:"react-chat-6a180.firebaseapp.com",projectId:"react-chat-6a180",storageBucket:"react-chat-6a180.appspot.com",messagingSenderId:"583517699635",appId:"1:583517699635:web:fa4480536d27e0a226ed46"}),O=f.firestore(),m=c(4),p=function(e){var t=e.show;return Object(m.jsx)("div",{className:"posFx vw100 vh100 aic jcc ".concat(t?"flex":"dNone"),children:Object(m.jsx)("div",{className:"spinner loader"})})},x=c(142),v=function(){var e=Object(j.f)(),t=Object(a.useState)(""),c=Object(h.a)(t,2),n=c[0],i=c[1],s=Object(a.useState)(""),o=Object(h.a)(s,2),r=o[0],l=o[1],d=Object(a.useState)(""),u=Object(h.a)(d,2),v=u[0],g=u[1],w=Object(a.useState)(!1),N=Object(h.a)(w,2),C=N[0],y=N[1],S=Object(a.useState)(""),k=Object(h.a)(S,2),_=(k[0],k[1]),E=Object(a.useState)(!1),I=Object(h.a)(E,2),F=(I[0],I[1]);return Object(a.useEffect)((function(){f.auth().onAuthStateChanged((function(t){var c=(f.auth().currentUser||{}).uid;c&&(F(!0),_(c),e.push("/app"))}))}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{show:C}),Object(m.jsx)("div",{className:"flex aic jcc vh100",children:Object(m.jsxs)("div",{className:"w400",children:[Object(m.jsxs)("div",{className:"fdr aic pt16",children:[Object(m.jsx)("div",{className:"w100",children:Object(m.jsx)("span",{children:"NickName"})}),Object(m.jsx)("input",{onChange:function(e){g(e.target.value)},className:"default_input f1",placeholder:"nickname",value:v})]}),Object(m.jsxs)("div",{className:"fdr aic pt16",children:[Object(m.jsx)("div",{className:"w100",children:Object(m.jsx)("span",{children:"email"})}),Object(m.jsx)("input",{onChange:function(e){i(e.target.value)},className:"default_input f1",placeholder:"email",value:n})]}),Object(m.jsxs)("div",{className:"fdr aic pt16",children:[Object(m.jsx)("div",{className:"w100",children:Object(m.jsx)("span",{children:"password"})}),Object(m.jsx)("input",{onChange:function(e){l(e.target.value)},className:"default_input f1",placeholder:"password",type:"password",value:r})]}),Object(m.jsx)("div",{className:"jcc flex pt16 pb16"}),Object(m.jsx)(x.a,{type:"button",variant:"outlined",color:"primary",onClick:function(){n.length<3?alert("\uc62c\ubc14\ub978 \uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."):(y(!0),f.auth().createUserWithEmailAndPassword(n,r).then((function(t){var c=(f.auth().currentUser||{}).uid;c?O.collection("user").add({uid:c,nickName:v,email:n,created:b.a.firestore.Timestamp.now().seconds}).then((function(t){F(!0),_(c),i(""),l(""),alert(v+"\ub2d8 \ud658\uc601\ud569\ub2c8\ub2e4."),e.push("/createChat"),y(!1)})):alert("error")})).catch((function(t){y(!1),"auth/email-already-in-use"===t.code?(alert("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uc0ac\uc6a9\uc790\uc785\ub2c8\ub2e4. \ub85c\uadf8\uc778 \ud574\uc8fc\uc138\uc694."),e.push("/login")):console.log(t)})))},children:" Sign Up "})]})})]})},g=c(146),w=c(147),N=c(155),C=c(150),y=c(157),S=c(151),k=c(152),_=c(156),E=c(145),I=Object(E.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},btn:{margin:e.spacing(0,0,2),color:"#ffffff"}}})),F=function(){var e=I(),t=Object(j.f)(),c=Object(a.useState)(""),n=Object(h.a)(c,2),i=n[0],s=n[1],o=Object(a.useState)(""),r=Object(h.a)(o,2),l=r[0],d=r[1],u=Object(a.useState)(!1),b=Object(h.a)(u,2),O=b[0],v=b[1],E=Object(a.useState)(!1),F=Object(h.a)(E,2),A=F[0],T=F[1],U=Object(a.useState)(!1),B=Object(h.a)(U,2),D=B[0],L=B[1];Object(a.useEffect)((function(){f.auth().onAuthStateChanged((function(e){v(!0),(f.auth().currentUser||{}).uid&&(L(!0),t.push("/createChat"))}))}),[]);return O?Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{show:A}),D?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"btn btn-danger",onClick:function(e){f.auth().signOut(),L(!1)},children:" logout "})}):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(w.a,{}),Object(m.jsx)("div",{className:e.paper,children:Object(m.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(m.jsx)(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:i,onChange:function(e){s(e.target.value)}}),Object(m.jsx)(N.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:l,onChange:function(e){d(e.target.value)}}),Object(m.jsx)(C.a,{control:Object(m.jsx)(y.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(m.jsx)(x.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:e.btn,onClick:function(e){i.length<3?alert("Please check your email"):(T(!0),f.auth().signInWithEmailAndPassword(i,l).then((function(e){(f.auth().currentUser||{}).uid?(L(!0),s(""),d(""),t.push("/createChat"),T(!1)):(alert("error"),T(!1))})).catch((function(e){T(!1);var t=e.code;"auth/user-not-found"===t?alert("\uac00\uc785\ud558\uc138\uc694."):"auth/invalid-email"===t?alert("\uc774\uba54\uc77c \ud615\uc2dd\uc774 \uc544\ub2d9\ub2c8\ub2e4."):"auth/wrong-password"===t?alert("\ube44\ubc00\ubc88\ud638\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."):"auth/too-many-requests"===t?(alert("\ub2e4\uc2dc \ub85c\uadf8\uc778 \ud574\uc8fc\uc138\uc694."),window.location.reload()):console.log(e)})))},children:"Login"}),Object(m.jsx)(x.a,{type:"button",fullWidth:!0,variant:"outlined",color:"primary",className:e.btn,onClick:function(){t.push("/signup")},children:"Sign Up"}),Object(m.jsxs)(S.a,{container:!0,children:[Object(m.jsx)(S.a,{item:!0,xs:!0,children:Object(m.jsx)(k.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(m.jsx)(S.a,{item:!0,children:Object(m.jsx)(k.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})}),Object(m.jsx)(_.a,{mt:8})]})})]}):Object(m.jsx)(m.Fragment,{})},A=c(83),T=c(63),U=c(34),B=c(81),D=c.n(B),L=n.a.memo((function(e){var t=e.chat,c=e.users,a=e.index;e.uid,e.onEmojiClick;return Object(m.jsxs)("div",{className:"flex fdr pb16 chat_card",children:[Object(m.jsx)("div",{className:"w40 h40 flex aic jcc",children:Object(m.jsx)(D.a,{color:"primary",fontSize:"large"})}),Object(m.jsxs)("div",{className:"pl16 f1",style:{backgroundColor:"#dee5f4",borderRadius:20,marginLeft:10},children:[Object(m.jsx)("div",{children:Object(m.jsx)("span",{className:"bold",children:function(){var e=c[t.uid];return e?e.nickName:"anonymous"}()})}),Object(m.jsx)("div",{className:"pt8",children:t.content})]})]},a)}),(function(e,t){return e.chat===t.chat&&e.users===t.users})),W=n.a.memo((function(e){var t=e.chats,c=e.users,a=e.uid,n=e.onEmojiClick;return Object(m.jsx)(m.Fragment,{children:t.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)(L,{chat:e,users:c,uid:a,index:e.id,onEmojiClick:n})},e.id)}))})}),(function(e,t){return e.chats===t.chats&&e.users===t.users})),P=function(e){var t=Object(j.f)(),c=Object(a.useState)([]),n=Object(h.a)(c,2),i=n[0],s=n[1],o=Object(a.useState)(""),r=Object(h.a)(o,2),l=r[0],d=r[1],u=Object(a.useState)(""),p=Object(h.a)(u,2),x=p[0],v=p[1],g=Object(a.useState)({}),w=Object(h.a)(g,2),N=w[0],C=w[1],y=Object(j.g)().channelId,S=Object(a.useRef)(null),k=Object(a.useState)(null),_=Object(h.a)(k,2),E=_[0],I=_[1],F=Object(a.useState)(""),B=Object(h.a)(F,2),D=B[0],L=(B[1],Object(a.useState)("")),P=Object(h.a)(L,2),R=P[0];P[1],Object(a.useMemo)((function(){return Object(m.jsxs)("div",{children:[D," - ",R]})}),[R]);Object(a.useEffect)((function(){f.auth().onAuthStateChanged((function(e){var t=(f.auth().currentUser||{}).uid;t?d(t):window.location="/login"}))}),[]);Object(a.useEffect)((function(){!function(){var e;null===(e=S.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}()}),[i]);Object(a.useEffect)((function(){O.collection("chat").doc("room_"+y).collection("messages").orderBy("created").get().then((function(e){var t=e.docs.map((function(e){return Object(T.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(a.useEffect)((function(){O.collection("chat").doc("room_"+y).collection("messages").orderBy("created").onSnapshot((function(e){e.docChanges().forEach((function(e){if("added"===e.type){var t=e.doc.data();t.id=e.doc.id,I(t)}else if("modified"===e.type){var c=e.doc.data();c.id=e.doc.id,I(c)}else"removed"===e.type&&console.log("remove message: ",e.doc.data())}))}))}),[]);var q=Object(a.useMemo)((function(){if(!E)return i;var e=Object(A.a)(i),t=e.findIndex((function(e){return e.id===E.id}));return-1===t?e.push(E):(E.id=e[t].id,e[t]=E),s(e),e}),[E]);Object(a.useEffect)((function(){if(0!==i.length){var e=i.map((function(e){return e.uid})).filter((function(e,t,c){return c.indexOf(e)===t})),t=O.collection("user"),c={};t.where("uid","in",e).get().then((function(e){e.forEach((function(e){var t=e.data();c[t.uid]=t})),C(c)}))}}),[i]);return Object(m.jsxs)("div",{style:{position:"relative"},className:"vh100",children:["//TODO: study memo",Object(m.jsxs)("div",{className:"flex fdr vh100",children:[Object(m.jsxs)("div",{className:"w200 bg_primary p16",children:[Object(m.jsxs)("div",{className:"color_white flex fdr aic cursor_pointer h3",onClick:function(e){f.auth().signOut().then((function(){t.push("/login")}))},children:[Object(m.jsx)(U.b,{}),Object(m.jsx)("span",{className:"color_white pl8 h3",children:"Logout"})]}),Object(m.jsxs)("div",{className:"color_white flex fdr aic cursor_pointer pt16 h3",onClick:function(e){t.push("/createChat")},children:[Object(m.jsx)(U.a,{}),Object(m.jsx)("span",{className:"color_white pl8 h3",children:"Exit"})]})]}),Object(m.jsxs)("div",{className:"f1 pl16 pt16 pr",children:[Object(m.jsxs)("div",{style:{height:"calc(100% - 50px)",overflowY:"scroll",paddingBottom:50},children:[Object(m.jsx)(W,{chats:q,users:N,uid:l}),Object(m.jsx)("div",{style:{float:"left",clear:"both"},ref:S})]}),Object(m.jsx)("div",{className:"posAb",style:{bottom:16,width:"calc(100% - 32px)",backgroundColor:"#dcdcdc"},children:Object(m.jsxs)("div",{className:"flex fdr",children:[Object(m.jsx)("textarea",{className:"default_textarea f1 p8",placeholder:"send a message to this channel",value:x,onChange:function(e){!function(e){v(e.target.value)}(e)}}),Object(m.jsx)("div",{className:"btn btn-send w100 h3",onClick:function(e){O.collection("chat").doc("room_"+y).collection("messages").add({uid:l,content:x,created:b.a.firestore.Timestamp.now().seconds}).then((function(e){v("")}))},children:"send"})]})})]})]})]})},R=c(27),q=c(148),J=c(52),z=c(149),K=c(153),M=c(154),V=Object(E.a)((function(e){return{listDiv:{width:"100%",backgroundColor:e.palette.background.paper,display:"block",maxHeight:500,overflow:"auto"},input:{width:"450px",height:"55px",marginRight:e.spacing(2)},btn:{height:"55px"},paper:{width:700,padding:e.spacing(2)},paperTop:{width:700,padding:e.spacing(2)}}})),Y=function(e){var t,c,n=V(),i=Object(j.f)(),s=Object(a.useState)(""),o=Object(h.a)(s,2),r=o[0],l=o[1],d=Object(a.useState)([]),u=Object(h.a)(d,2),b=u[0],p=u[1];return Object(a.useEffect)((function(){var e=[];O.collection("chat").get().then((function(t){t.forEach((function(t){e=e.concat({id:t.id,name:t.data().name})})),p(e)}))}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)(S.a,{container:!0,direction:"column",alignItems:"flex-end",spacing:10,children:Object(m.jsx)(S.a,{item:!0,xs:12,sm:12,md:12,children:Object(m.jsxs)("div",{className:"flex fdr aic cursor_pointer",onClick:function(e){f.auth().signOut(),i.push("/login")},children:[Object(m.jsx)(U.b,{}),Object(m.jsx)("span",{children:"Logout"})]})})}),Object(m.jsxs)(S.a,{container:!0,direction:"column",alignItems:"center",children:[Object(m.jsx)(S.a,(t={item:!0},Object(R.a)(t,"item",!0),Object(R.a)(t,"xs",12),Object(R.a)(t,"sm",12),Object(R.a)(t,"md",12),Object(R.a)(t,"children",Object(m.jsxs)(q.a,{className:n.paperTop,elevation:3,children:[Object(m.jsx)(J.a,{variant:"h6",children:" Create Channel "}),Object(m.jsx)(N.a,{className:n.input,variant:"outlined",placeholder:"\uac1c\uc124\ud560 \ucc44\ub110 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694.",value:r,onChange:function(e){!function(e){l(e.target.value)}(e)}}),Object(m.jsx)(x.a,{className:n.btn,type:"button",variant:"contained",onClick:function(e){return function(){if(Object.values(b).indexOf(r)>-1)return alert("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \ucc44\ub110\uba85\uc785\ub2c8\ub2e4."),void l("");O.collection("chat").doc("room_"+r).set({name:r}).then((function(){alert(r+" \ucc44\ub110\uc774 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),i.push("/chat/".concat(r))})).catch((function(){alert("\ucc44\ub110 \uc0dd\uc131\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.")}))}()},children:"Create Channel"})]})),t)),Object(m.jsx)(J.a,{variant:"h6",children:" or "}),Object(m.jsx)(S.a,(c={item:!0},Object(R.a)(c,"item",!0),Object(R.a)(c,"xs",12),Object(R.a)(c,"sm",12),Object(R.a)(c,"md",12),Object(R.a)(c,"children",Object(m.jsxs)(q.a,{className:n.paper,elevation:3,children:[Object(m.jsx)(J.a,{variant:"h6",children:" Join Channel "}),Object(m.jsx)("div",{className:n.listDiv,children:Object(m.jsxs)(z.a,{children:[b&&b.map((function(e){return Object(m.jsxs)(K.a,{button:!0,onClick:function(t){return c=e.name,void i.push("/chat/".concat(c));var c},children:[" ",Object(m.jsx)(M.a,{primary:e.name})]},e.id)})),null==b||0==b.length&&Object(m.jsx)(J.a,{children:"\ud604\uc7ac \uac1c\uc124\ub41c \ucc44\ud305\ubc29\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})]})})]})),c))]})]})},H=function(){var e=Object(a.useState)(0),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){console.log("use effect!!!!")}),0),Object(m.jsxs)(m.Fragment,{children:["gogo",Object(m.jsx)("br",{}),c,Object(m.jsx)("div",{onClick:function(){n((function(e){return e+1}))},children:"++"})]})},Q=c(85),Z=n.a.memo((function(e){var t=e.chats,c=e.users,a=e.uid,n=e.onEmojiClick;return Object(m.jsx)(m.Fragment,{children:t.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)(L,{chat:e,users:c,uid:a,index:e.id,onEmojiClick:n})},e.id)}))})}),(function(e,t){return e.chats===t.chats&&e.users===t.users})),X=function(e){var t=Object(j.f)(),c=Object(Q.a)([]),n=Object(h.a)(c,2),i=n[0],s=n[1],o=Object(a.useState)(""),r=Object(h.a)(o,2),l=r[0],d=r[1],u=Object(a.useState)(""),p=Object(h.a)(u,2),x=p[0],v=p[1],g=Object(a.useState)({}),w=Object(h.a)(g,2),N=w[0],C=w[1],y=Object(j.g)().channelId,S=Object(a.useRef)(null);Object(a.useEffect)((function(){f.auth().onAuthStateChanged((function(e){var t=(f.auth().currentUser||{}).uid;t?d(t):window.location="/login"}))}),[]);Object(a.useEffect)((function(){!function(){var e;null===(e=S.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}()}),[i]);Object(a.useEffect)((function(){O.collection("chat").doc("room_"+y).collection("messages").orderBy("created").onSnapshot((function(e){e.docChanges().forEach((function(e){if("added"===e.type){var t=e.doc.data();t.id=e.doc.id,s((function(e){e.push(t)}))}if("modified"===e.type){var c=e.doc.data();c.id=e.doc.id,s((function(t){var a=t.findIndex((function(t){return t.id===e.doc.id}));t[a]=c}))}"removed"===e.type&&console.log("remove message: ",e.doc.data())}))}))}),[]),Object(a.useEffect)((function(){if(0!==i.length){var e=i.map((function(e){return e.uid})).filter((function(e,t,c){return c.indexOf(e)===t})),t=O.collection("user"),c={};t.where("uid","in",e).get().then((function(e){e.forEach((function(e){var t=e.data();c[t.uid]=t})),C(c)}))}}),[i]);return Object(m.jsx)("div",{style:{position:"relative"},className:"vh100",children:Object(m.jsxs)("div",{className:"flex fdr vh100",children:[Object(m.jsxs)("div",{className:"w200 bg_black p16",children:[Object(m.jsxs)("div",{className:"color_white flex fdr aic cursor_pointer",onClick:function(e){f.auth().signOut().then((function(){t.push("/login")}))},children:[Object(m.jsx)(U.b,{}),Object(m.jsx)("span",{className:"color_white pl8",children:"Logout"})]}),Object(m.jsxs)("div",{className:"color_white flex fdr aic cursor_pointer pt16",onClick:function(e){t.push("/createChat")},children:[Object(m.jsx)(U.a,{}),Object(m.jsx)("span",{className:"color_white pl8",children:"Create New Channel"})]})]}),Object(m.jsxs)("div",{className:"f1 pl16 pt16 pr",children:[Object(m.jsxs)("div",{style:{height:"calc(100% - 50px)",overflowY:"scroll",paddingBottom:50},children:[Object(m.jsx)(Z,{chats:i,users:N,uid:l,onEmojiClick:function(e,t){var c=O.collection("chat").doc("room_"+y).collection("messages").doc(t);c.get().then((function(t){var a=t.data(),n=Object(T.a)({},a.emoji),i=n[e];i?i.includes(l)||i.push(l):i=[l],n[e]=i,c.update({emoji:n})}))}}),Object(m.jsx)("div",{style:{float:"left",clear:"both"},ref:S})]}),Object(m.jsxs)("div",{className:"posAb",style:{bottom:16,width:"calc(100% - 32px)",backgroundColor:"#dcdcdc"},children:[Object(m.jsx)("div",{className:"flex fdr",children:Object(m.jsx)("textarea",{className:"default_textarea f1 p8",placeholder:"send a message to this channel",value:x,onChange:function(e){!function(e){v(e.target.value)}(e)}})}),Object(m.jsx)("div",{className:"flex jce fdr",children:Object(m.jsx)("div",{className:"btn btn-success h40 w40",onClick:function(e){O.collection("chat").doc("room_"+y).collection("messages").add({uid:l,content:x,created:b.a.firestore.Timestamp.now().seconds}).then((function(e){v("")}))},children:Object(m.jsx)(U.c,{})})})]})]})]})})},G=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(m.jsx)(u.a,{children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{exact:!0,path:"/",component:F}),Object(m.jsx)(j.a,{exact:!0,path:"/signup",component:v}),Object(m.jsx)(j.a,{exact:!0,path:"/createChat",component:Y}),Object(m.jsx)(j.a,{exact:!0,path:"/login",component:F}),Object(m.jsx)(j.a,{exact:!0,path:"/chat/:channelId",component:P}),Object(m.jsx)(j.a,{exact:!0,path:"/chat_immer/:channelId",component:X}),Object(m.jsx)(j.a,{exact:!0,path:"/test",component:H})]})})}}]),c}(n.a.Component),$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,160)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(G,{})}),document.getElementById("root")),$()},73:function(e,t,c){}},[[115,1,2]]]);
//# sourceMappingURL=main.255e387e.chunk.js.map