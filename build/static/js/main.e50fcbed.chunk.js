(this.webpackJsonptemplate_ts=this.webpackJsonptemplate_ts||[]).push([[0],{178:function(e,t,n){},189:function(e,t,n){"use strict";n.r(t);var a,i=n(0),c=n.n(i),r=n(14),o=n.n(r),s=(n(178),n(80)),l=n(18),d=n(58),j=n(28),u=n.n(j),h=n(42),b=n(39),m=n(8),p=n(40),O=n(3),x=n(110),g=n(17),f=n(242),y=n(246),C=n(238),v=n(239),S=n(195),k=n(59),w=n(243),I=n(77),P=n(133),A=n.n(P),E=n(134),T=n.n(E),B=n(135),N=n.n(B),D=n(136),z=n.n(D),H=n(196),R=n(197),F=n(244),M=n(232),L=n(233),W=n(234),J=n(235),G=n(236),_=n(65),U=n(141),K=n(48),q=n(245),Y=n(247),V=n(73),Q=n(237),X=n(240),Z=n(241),$={drawerOpened:{set:function(e){localStorage.setItem("drawerOpened",JSON.stringify(e))},unset:function(){localStorage.removeItem("drawerOpened")},get:function(){return!(!1===JSON.parse(localStorage.getItem("drawerOpened")))}}},ee=n(2),te=240,ne=Object(x.a)((function(e){return{root:{display:"flex",background:"#EAEAEA",height:"100vh"},linearProgress:{position:"fixed",width:"100%",height:"0.2em",top:0,left:0,zIndex:2e3},appBar:{background:"#23395d",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(te,"px)"),marginLeft:te,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},backButton:{marginRight:e.spacing(1)},hide:{display:"none"},drawer:{width:te,flexShrink:0},drawerPaper:{width:te},drawerHeader:Object(p.a)(Object(p.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}})),ae=function(e){var t=Object(l.g)(),n=ne(),a=Object(g.a)(),r=Object(i.useState)(!1),o=Object(m.a)(r,2),s=o[0],j=o[1],u=Object(i.useState)($.drawerOpened.get()),h=Object(m.a)(u,2),p=h[0],x=h[1],P=Object(i.useState)(null),E=Object(m.a)(P,2),B=E[0],D=E[1],te=function(e){x(e),$.drawerOpened.set(e)},ae=c.a.useState(!1),ie=Object(m.a)(ae,2),ce=ie[0],re=ie[1],oe=c.a.useState({}),se=Object(m.a)(oe,2),le=se[0],de=se[1];if(Object(i.useEffect)((function(){var t=function(e){j(!(!1===e))};e.init?"AsyncFunction"===e.init.constructor.name?e.init().then(t):t(e.init()):j(!0)}),[]),e.createAlertRef){e.createAlertRef((function(e){e&&(de(e),re(!0))}))}var je=Object(ee.jsxs)(M.a,{open:ce,onClose:function(){re(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(ee.jsx)(L.a,{id:"alert-dialog-title",children:le.title}),Object(ee.jsx)(W.a,{children:Object(ee.jsx)(J.a,{id:"alert-dialog-description",children:le.message})}),Object(ee.jsx)(G.a,{children:Object(ee.jsx)(_.a,{onClick:function(){return re(!1)},color:"primary",children:"Okay"})})]}),ue=Object(V.b)(),he=ue.enqueueSnackbar,be=ue.closeSnackbar;if(e.createSnackbarRef){e.createSnackbarRef((function(e){var t;console.log("Creating snackbar"),!1!==e.dismissable&&(t=function(e){return Object(ee.jsx)(I.a,{size:"small",style:{color:"white"},"aria-label":"dismiss",onClick:function(){be(e)},children:Object(ee.jsx)(Q.a,{fontSize:"small"})})}),he(e.message,{variant:e.variant,anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:e.autoHideDuration||5e3,action:t})}))}var me=Object(ee.jsx)(C.a,{position:"fixed",className:Object(O.a)(n.appBar,Object(b.a)({},n.appBarShift,p)),children:Object(ee.jsxs)(v.a,{children:[Object(ee.jsx)(I.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){return te(!0)},edge:"start",className:Object(O.a)(n.menuButton,p&&n.hide),children:Object(ee.jsx)(A.a,{})}),e.appBarBack&&Object(ee.jsx)(I.a,{color:"inherit","aria-label":"Back",onClick:function(){return t.push(e.appBarBack)},edge:"start",className:n.backButton,children:Object(ee.jsx)(T.a,{})}),Object(ee.jsx)(k.a,{variant:"h6",noWrap:!0,children:e.appBarTitle}),Object(ee.jsxs)(_.a,{color:"inherit",style:{marginLeft:"auto",textTransform:"none"},size:"large",onClick:function(e){D(e.currentTarget)},children:[Object(ee.jsx)(X.a,{style:{marginRight:"0.5em"}}),Object(ee.jsx)(Z.a,{style:{marginLeft:"0.1em"}})]}),Object(ee.jsxs)(U.a,{anchorEl:B,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,open:Boolean(B),onClose:function(){D(null)},children:[Object(ee.jsx)(K.a,{component:d.b,to:"/settings",children:"Settings"}),Object(ee.jsx)(K.a,{component:d.b,to:"/user/logout",children:"Logout"})]})]})}),pe=Object(ee.jsxs)(f.a,{className:n.drawer,variant:"persistent",anchor:"left",open:p,classes:{paper:n.drawerPaper},children:[Object(ee.jsxs)("div",{className:n.drawerHeader,children:["Menu",Object(ee.jsx)(I.a,{onClick:function(){return te(!1)},children:"ltr"===a.direction?Object(ee.jsx)(N.a,{}):Object(ee.jsx)(z.a,{})})]}),Object(ee.jsx)(w.a,{}),Object(ee.jsx)(S.a,{children:Ie.map((function(t,n){var a=t.drawerItem;return a?Object(ee.jsxs)(H.a,{button:!0,selected:t.id===e.selectedId,component:d.b,to:t.path,children:[Object(ee.jsx)(R.a,{children:Object(ee.jsx)(a.icon,{})}),Object(ee.jsx)(F.a,{primary:a.title})]},n):null}))})]}),Oe={};if(null!=e.errorCode)switch(Oe={code:e.errorCode,message:""},e.errorCode){case 403:Oe.message="Forbidden";break;case 404:Oe.message="Page Not Found";break;case 500:Oe.message="Server Error"}var xe=Oe?Object(ee.jsxs)(q.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{marginTop:"5em"},children:[Object(ee.jsx)(q.a,{item:!0,style:{fontSize:"5em",fontWeight:"bold",textAlign:"center"},children:Oe.code}),Object(ee.jsx)(q.a,{item:!0,style:{fontSize:"1.5em",textAlign:"center"},children:Oe.message})]}):null;return Object(ee.jsxs)("div",{className:n.root,children:[Object(ee.jsx)(y.a,{}),e.isLoading&&Object(ee.jsx)(Y.a,{color:"secondary",className:n.linearProgress}),je,me,pe,Object(ee.jsxs)("main",{className:Object(O.a)(n.content,Object(b.a)({},n.contentShift,p)),style:{background:"#EAEAEA",overflowY:"auto"},children:[Object(ee.jsx)("div",{className:n.drawerHeader}),s&&null==e.errorCode?e.children:null,xe]})]})},ie=n(248),ce=n(249),re=n(250),oe=n(98),se=n.n(oe),le=function(e){console.log("hi"),Object(i.useEffect)((function(){Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))().then()}),[]);var t=Object(ee.jsx)(q.a,{item:!0,xs:6,children:Object(ee.jsxs)(ie.a,{children:[Object(ee.jsxs)(ce.a,{children:[Object(ee.jsx)(k.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"\u30db\u30ed\u8aad\u307f\uff08holoyomi)"}),Object(ee.jsx)(k.a,{variant:"body2",color:"textSecondary",component:"p",children:"A Hololive Fan Game Project. The project was created with the Hololive fan community. I took part in building one of the minigames with Unity."})]}),Object(ee.jsx)(re.a,{children:Object(ee.jsx)(_.a,{size:"small",color:"primary",href:"https://itzeusmti.itch.io/holoyomi",children:"Play"})})]})}),n=Object(ee.jsx)(q.a,{item:!0,xs:6,children:Object(ee.jsxs)(ie.a,{style:{height:"100%"},children:[Object(ee.jsxs)(ce.a,{children:[Object(ee.jsx)(k.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Member-Get-Member(MGM) project"}),Object(ee.jsx)(k.a,{variant:"body2",color:"textSecondary",component:"p",children:"Created a MGM API with other intern in Tandem HK."})]}),Object(ee.jsx)(re.a,{children:Object(ee.jsx)(_.a,{size:"small",color:"primary",href:"https://eugeniecheng.medium.com/hackathon-in-tandem-hk-d650da98535b",children:"Blog"})})]})}),a=Object(ee.jsx)(q.a,{item:!0,xs:6,children:Object(ee.jsxs)(ie.a,{children:[Object(ee.jsxs)(ce.a,{children:[Object(ee.jsx)(k.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Exchange Currency Tool"}),Object(ee.jsx)(k.a,{variant:"body2",color:"textSecondary",component:"p",children:"The tool converts the currency by the current exchange rates. This tool is created in React."})]}),Object(ee.jsx)(re.a,{children:Object(ee.jsx)(_.a,{size:"small",color:"primary",href:"https://github.com/eugenieeeech/ExchangeCurrencyTool",startIcon:Object(ee.jsx)(se.a,{}),children:"Github"})})]})}),c=Object(ee.jsx)(q.a,{item:!0,xs:6,children:Object(ee.jsxs)(ie.a,{children:[Object(ee.jsxs)(ce.a,{children:[Object(ee.jsx)(k.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"[Unreal Engine] Bus Terminus"}),Object(ee.jsx)(k.a,{variant:"body2",color:"textSecondary",component:"p",children:"Created a similar bus terminus scene in Unreal Engine with level editing and scripting skills."})]}),Object(ee.jsx)(re.a,{children:Object(ee.jsx)(_.a,{size:"small",color:"primary",href:"https://github.com/eugenieeeech/-UnrealEngine-Bus-Terminus",startIcon:Object(ee.jsx)(se.a,{}),children:"Github"})})]})}),r=Object(ee.jsx)(q.a,{item:!0,xs:6,children:Object(ee.jsxs)(ie.a,{children:[Object(ee.jsxs)(ce.a,{children:[Object(ee.jsx)(k.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Rhythm Game with Sound control"}),Object(ee.jsx)(k.a,{variant:"body2",color:"textSecondary",component:"p",children:"The game is created with Pygame. The feature of the game is sound input contol and the beat generation."})]}),Object(ee.jsx)(re.a,{children:Object(ee.jsx)(_.a,{size:"small",color:"primary",href:"https://github.com/eugenieeeech/AIST2010-Introduction-to-Computer-Music",children:"Github"})})]})});q.a,ie.a,ce.a,k.a,k.a,re.a,_.a,se.a;return Object(ee.jsx)(ae,{appBarTitle:e.routeDetail.title,selectedId:e.routeDetail.id,children:Object(ee.jsxs)(q.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[n,a,c,t,r]})})},de=n(137),je=[{field:"subject",headerName:"Subject",flex:1},{field:"code",headerName:"Couse number",flex:1},{field:"name",headerName:"Couse name",flex:1}],ue=[{id:1,subject:"AIST",code:"2010",name:"Intro to Computer Music"},{id:2,subject:"CSCI",code:"1130",name:"Intro to Computing Using Java"},{id:3,subject:"CSCI",code:"2100",name:"Intro to Data Structures"},{id:4,subject:"CSCI",code:"3100",name:"Software Engineering"},{id:5,subject:"CSCI",code:"3150",name:"Intro to Operating Systems"},{id:6,subject:"CSCI",code:"3160",name:"Design & Analysis of Algo"},{id:7,subject:"CSCI",code:"3230",name:"Fundamentals of AI"},{id:8,subject:"CSCI",code:"3250",name:"Computers and Society"},{id:9,subject:"CSCI",code:"3251",name:"Engineering Practicum"},{id:10,subject:"CSCI",code:"3260",name:"Principles of Comp Graphics"},{id:11,subject:"CSCI",code:"4120",name:"Principles of Comp Game SW"},{id:12,subject:"JASP",code:"1450",name:"New Practical Japanese I"},{id:13,subject:"JASP",code:"1460",name:"New Practical Japanese II"},{id:14,subject:"JASP",code:"2450",name:"New Practical Japanese III"},{id:15,subject:"JASP",code:"2460",name:"New Practical Japanese IV"}],he=function(e){console.log("hello world"),Object(i.useEffect)((function(){Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))().then()}),[]);var t=Object(ee.jsxs)(k.a,{align:"center",component:"h5",variant:"h5",style:{margin:50},children:["I am Eugenie Cheng. ",Object(ee.jsx)("br",{}),"A final year university student who is pursuing a Bachelor of Computer Science at The Chinese University of Hong Kong (CUHK)."]});return Object(ee.jsx)(ae,{appBarTitle:e.routeDetail.title,selectedId:e.routeDetail.id,children:Object(ee.jsxs)(q.a,{container:!0,justifyContent:"center",alignItems:"center",direction:"column",spacing:2,children:[Object(ee.jsx)(q.a,{item:!0,children:t}),Object(ee.jsx)(k.a,{style:{paddingBottom:30},component:"h5",variant:"h5",children:"Course taken in CUHK:"}),Object(ee.jsx)("div",{style:{height:400,width:"100%"},children:Object(ee.jsx)(de.a,{rows:ue,columns:je,pageSize:5})})]})})},be=n(258),me=n(254),pe=n(121),Oe=n(253),xe=function(e){return console.log("find me?"),Object(i.useEffect)((function(){Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))().then()}),[]),Object(ee.jsx)(ae,{appBarTitle:e.routeDetail.title,selectedId:e.routeDetail.id,children:Object(ee.jsx)(q.a,{container:!0,justifyContent:"center",alignItems:"center",item:!0,spacing:2,direction:"row",children:Object(ee.jsxs)(q.a,{item:!0,container:!0,children:[Object(ee.jsx)(be.a,{width:1,display:"flex",justifyContent:"center",m:2,children:Object(ee.jsxs)(ie.a,{style:{display:"block",width:"100vw",height:"auto"},children:[Object(ee.jsx)(be.a,{p:1,children:Object(ee.jsxs)(k.a,{variant:"h5",component:"h5",children:[Object(ee.jsx)(Oe.a,{}),"Contact"]})}),Object(ee.jsx)(be.a,{p:1,children:"Email:"}),Object(ee.jsx)(be.a,{p:1,children:Object(ee.jsx)("a",{href:"mailto: eugenie.630.cheng@gmail.com",children:" Click here"})}),Object(ee.jsx)(be.a,{p:1,children:"Linkedin:"}),Object(ee.jsx)(be.a,{p:1,children:Object(ee.jsx)(me.a,{href:"https://www.linkedin.com/in/eugenie-cheng-eugenieeeech/",children:"Eugenie Cheng"})})]})}),Object(ee.jsx)(q.a,{children:Object(ee.jsx)(k.a,{variant:"h5",component:"h5",children:"Leave Your Message"})}),Object(ee.jsxs)(q.a,{container:!0,spacing:2,children:[Object(ee.jsx)(q.a,{item:!0,xs:12,sm:6,children:Object(ee.jsx)(pe.a,{autoComplete:"fname",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),Object(ee.jsx)(q.a,{item:!0,xs:12,sm:6,children:Object(ee.jsx)(pe.a,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})}),Object(ee.jsx)(q.a,{item:!0,xs:12,children:Object(ee.jsx)(pe.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(ee.jsx)(q.a,{item:!0,xs:12,children:Object(ee.jsx)(pe.a,{id:"outlined-textarea",label:"Message",placeholder:"Enter Your Message",multiline:!0,rows:4,variant:"outlined",fullWidth:!0})}),Object(ee.jsx)(q.a,{item:!0,xs:12})]}),Object(ee.jsx)(_.a,{type:"submit",fullWidth:!0,variant:"contained",children:"Submit"}),Object(ee.jsx)(q.a,{container:!0,justifyContent:"flex-end"})]})})})},ge=n(192),fe=n(139),ye=n.n(fe),Ce=Object(x.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontFamily:"Nunito"},colorText:{color:"#5AFF3D"},container:{textAlign:"center"},title:{fontSize:"4.5rem"},goDown:{fontSize:"4rem"}}})),ve=function(e){console.log("welcome");var t=Ce(),n=Object(i.useState)(!1),a=Object(m.a)(n,2),c=a[0],r=a[1];return Object(i.useEffect)((function(){r(!0),Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))().then()}),[]),Object(ee.jsx)(ae,{appBarTitle:e.routeDetail.title,selectedId:e.routeDetail.id,children:Object(ee.jsx)(ge.a,Object(p.a)(Object(p.a)({in:c},c?{timeout:1e3}:{}),{},{collapsedHeight:50,children:Object(ee.jsxs)("div",{className:t.container,children:[Object(ee.jsxs)("h1",{className:t.title,children:["Welcome to ",Object(ee.jsx)("br",{}),"My",Object(ee.jsx)("span",{children:"Page."})]}),Object(ee.jsxs)(d.b,{to:"/about",children:[Object(ee.jsx)(I.a,{children:Object(ee.jsx)(ye.a,{className:t.goDown})})," "]})]})}))})},Se=n(255),ke=n(256),we=n(257);!function(e){e[e.Index=0]="Index",e[e.About=1]="About",e[e.Dashboard=2]="Dashboard",e[e.Contact=3]="Contact",e[e.Home=4]="Home",e[e.Projects=5]="Projects"}(a||(a={}));var Ie=[{id:a.Index,path:"/Personal-page",redirectTo:"/Personal-page/home",component:ve},{id:a.Home,path:"/Personal-page/home",title:"Home",component:ve,drawerItem:{title:"Home",icon:Se.a}},{id:a.About,path:"/Personal-page/about",title:"About",component:he,drawerItem:{title:"About",icon:ke.a}},{id:a.Projects,path:"/Personal-page/project",title:"Projects",component:le,drawerItem:{title:"Projects",icon:we.a}},{id:a.Contact,path:"/contact",title:"Contact",component:xe,drawerItem:{title:"Contact",icon:Oe.a}}],Pe=function(e){return Object(ee.jsx)(ae,{appBarTitle:"Error",errorCode:404})},Ae=n(140);function Ee(){var e,t=[],n=Object(s.a)(Ie);try{for(n.s();!(e=n.n()).done;){var a,i=e.value,c=!0;!1===i.exact&&(c=!1),a=i.redirectTo?Object(ee.jsx)(l.a,{to:i.redirectTo}):Object(ee.jsx)(i.component,{routeDetail:i}),t.push(Object(ee.jsx)(l.b,{exact:c,path:i.path,children:a},i.id))}}catch(r){n.e(r)}finally{n.f()}return t}var Te,Be=function(){return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),Object(ee.jsx)(d.a,{children:Object(ee.jsx)(Ae.a,{ReactRouterRoute:l.b,children:Object(ee.jsxs)(l.d,{children:[Ee(),Object(ee.jsx)(l.b,{children:Object(ee.jsx)(Pe,{})})]})})})},Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,261)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))},De=c.a.createContext(null),ze=function(e){var t=Object(V.b)(),n=t.enqueueSnackbar,a=t.closeSnackbar;return Object(ee.jsx)(De.Provider,{value:{createSnackbar:function(e){var t;console.log("Creating snackbar"),!1!==e.dismissable&&(t=function(e){return Object(ee.jsx)(I.a,{size:"small",style:{color:"white"},"aria-label":"dismiss",onClick:function(){a(e)},children:Object(ee.jsx)(Q.a,{fontSize:"small"})})}),n(e.message,{variant:e.variant,anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:e.autoHideDuration||5e3,action:t})}},children:e.children})},He=n(21);!function(e){e[e.Alert=0]="Alert",e[e.Confirm=1]="Confirm",e[e.Customized=2]="Customized"}(Te||(Te={}));var Re=c.a.createContext(null),Fe=function(e,t){var n=Object(He.a)(e);switch(t.type){case"add":n.push({key:t.key,open:!0,loading:!1,options:t.options});break;case"close":case"loading":var a,i=Object(s.a)(n);try{for(i.s();!(a=i.n()).done;){var c=a.value;if(c.key===t.key)switch(t.type){case"close":c.open=!1;break;case"loading":c.loading=t.loading}}}catch(r){i.e(r)}finally{i.f()}}return n},Me=function(e){var t=Object(i.useReducer)(Fe,[]),n=Object(m.a)(t,2),a=n[0],c=n[1],r=function(e){var t=e.key||Math.floor(1e7*Math.random());return e.key=t,c({type:"add",key:t,options:e}),t};return Object(ee.jsxs)(Re.Provider,{value:{closeDialog:function(e){var t,n=Object(s.a)(a);try{for(n.s();!(t=n.n()).done;){var i=t.value;i.key===e&&(i.open=!1)}}catch(c){n.e(c)}finally{n.f()}},createDialog:r,createAlertDialog:function(e){return r(Object(p.a)({type:Te.Alert},e))},createConfirmDialog:function(e){return r(Object(p.a)({type:Te.Confirm},e))}},children:[a&&a.map((function(e,t){return Object(ee.jsxs)(M.a,Object(p.a)(Object(p.a)({fullWidth:!0,PaperProps:{style:{minWidth:"320px"}},open:e.open,onClose:function(){e.options.onClose&&e.options.onClose()},onExited:function(){}},e.options.DialogProps),{},{children:[Object(ee.jsx)(L.a,{children:e.options.title}),Object(ee.jsxs)(W.a,{children:["string"===typeof e.options.message&&Object(ee.jsx)(J.a,{children:e.options.message}),"string"!=typeof e.options.message&&e.options.message]}),Object(ee.jsxs)(G.a,{children:[e.options.type===Te.Customized&&e.options.actions,e.options.type===Te.Alert&&Object(ee.jsx)(_.a,{onClick:function(){c({type:"close",key:e.key})},color:"primary",children:e.options.alertActionText||"Okay"}),e.options.type===Te.Confirm&&Object(ee.jsx)(_.a,{disabled:e.loading,onClick:function(){c({type:"close",key:e.key}),e.options.onConfirmCancel&&e.options.onConfirmCancel()},color:"primary",children:"Cancel"}),e.options.type===Te.Confirm&&Object(ee.jsx)(_.a,{disabled:e.loading,onClick:Object(h.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!0,!e.options.onConfirm){t.next=8;break}return c({type:"loading",key:e.key,loading:!0}),t.next=5,e.options.onConfirm();case 5:a=t.sent,c({type:"loading",key:e.key,loading:!1}),n=!(!1===a);case 8:n&&c({type:"close",key:e.key});case 9:case"end":return t.stop()}}),t)}))),color:"secondary",children:"Confirm"})]})]}),e.key)})),e.children]})};o.a.render(Object(ee.jsx)(V.a,{maxSnack:5,children:Object(ee.jsx)(ze,{children:Object(ee.jsx)(Me,{children:Object(ee.jsx)(Be,{})})})}),document.getElementById("root")),Ne()}},[[189,1,2]]]);
//# sourceMappingURL=main.e50fcbed.chunk.js.map