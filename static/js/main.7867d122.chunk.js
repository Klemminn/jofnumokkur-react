(this.webpackJsonphackathon2020=this.webpackJsonphackathon2020||[]).push([[0],{133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(81),i=n.n(o),l=n(37),s=n(9),c=n(16),u=n(82),m=function(e){var t=e.children,n=e.className,a=e.loading,o=e.disabled,i=e.link,s=Object(c.a)(e,["children","className","loading","disabled","link"]),m=["button-component"];return n&&m.push(n),r.a.createElement(u.a,Object.assign({className:m.join(" "),disabled:o||a,tag:i?l.b:void 0,to:i||void 0},s),a&&r.a.createElement(M,{size:1}),t)},p=(n(98),function(e){var t=e.onClick;return r.a.createElement(m,{className:"facebook-login-component",onClick:t},"Innskr\xe1 me\xf0 Facebook")}),f=n(212),v=n(213),g=n(214),h=(n(99),function(){return r.a.createElement(f.a,{className:"header-component"},r.a.createElement(v.a,null,r.a.createElement(g.a,null,r.a.createElement(m,{link:"/leaderboard"},"Sj\xe1 stigat\xf6flu")),r.a.createElement(g.a,null,r.a.createElement(D,null))))}),d=n(220),b=n(221),E=n(222),j=n(215),y=function(e){var t=e.participant,n=e.logout;return r.a.createElement(d.a,{nav:!0,inNavbar:!0},r.a.createElement(b.a,{nav:!0,caret:!0},"".concat(null===t||void 0===t?void 0:t.name," - ").concat(null===t||void 0===t?void 0:t.trees," trj\xe1m planta\xf0")),r.a.createElement(E.a,{right:!0},r.a.createElement(j.a,null,"Stillingar"),r.a.createElement(j.a,{divider:!0}),r.a.createElement(j.a,{onClick:n},"\xdatskr\xe1")))},k=n(18),O=n.n(k),C=n(26),T=n(52),P=n(14),x=n(15),N=n(86),S={api:"https://api.jofnumokkur.xyz/v1"},w=n.n(N).a.create({baseURL:"".concat(S.api),headers:{Accept:"application/json","Content-type":"application/json"}}),F=function(){function e(){Object(P.a)(this,e)}return Object(x.a)(e,null,[{key:"getParticipant",value:function(){var e=Object(C.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.post("/participant/",t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),B=function(){function e(){Object(P.a)(this,e)}return Object(x.a)(e,null,[{key:"getCo2TonnesForTreeCount",value:function(e){return this.co2TonnesPerTree*e}},{key:"getTreeCountForCo2Tonnes",value:function(e){return this.treesPerTonCo2*e}},{key:"getCo2EmissionData",value:function(){return[{label:"Flugsamg\xf6ngur",value:1542.68},{label:"Landb\xfana\xf0ur og matv\xe6laframlei\xf0sla",value:36.81},{label:"Heimili",value:606.13},{label:"Flutningar \xe1 sj\xf3 og vatni",value:493.68},{label:"Fiskvei\xf0ar og fiskeldi",value:338.43},{label:"Veitustarfsemi og sorphir\xf0a",value:15.92},{label:"Byggingastarfsemi og n\xe1mugr\xf6ftur",value:203.02},{label:"Landflutningar og geymsla",value:103.32},{label:"Verslun og \xfej\xf3nusta",value:69.3},{label:"Framlei\xf0sla \xe1 v\xf6rum og \xf6\xf0ru",value:30.1},{label:"Efnaframlei\xf0sla",value:153.04},{label:"Listir, \xed\xfer\xf3ttir og af\xfereying",value:4.4},{label:"Opinber \xfej\xf3nusta og heilbrig\xf0ism\xe1l",value:12.6}]}}]),e}();B.co2TonnesPerTree=.1,B.treesPerTonCo2=10;var _=B,L=function(){function e(){Object(P.a)(this,e)}return Object(x.a)(e,null,[{key:"getMunicipalities",value:function(){var e=Object(C.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/municipalities/");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),D=function(){var e=Object(a.useState)(!1),t=Object(T.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(null),l=Object(T.a)(i,2),s=l[0],c=l[1],u=function(){FB.logout((function(){c(null),o(!1)}))},m=function(){FB.login((function(){f()}),{scope:"public_profile,email"})},f=function(){FB.api("/me",{fields:"name, email"},function(){var e=Object(C.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),e.prev=1,t.error){e.next=7;break}return e.next=5,F.getParticipant(t);case 5:n=e.sent,c(n);case 7:return e.prev=7,o(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})));return function(t){return e.apply(this,arguments)}}())};Object(a.useEffect)((function(){!function e(){o(!0),"undefined"!==typeof FB?FB.getLoginStatus((function(e){"connected"===e.status?f():o(!1)})):setTimeout((function(){e()}),300)}(),L.getMunicipalities()}),[]);var v=function(){return n?r.a.createElement(z,null):s?r.a.createElement(y,{participant:s,logout:u}):r.a.createElement(p,{onClick:m})};return r.a.createElement(v,null)},z=(n(216),n(217).a,n(218).a,n(133),n(134),function(e){var t=e.size,n=void 0===t?2:t;return r.a.createElement("div",{className:"loading-component",style:{marginTop:"".concat(n/2,"em")}},r.a.createElement(M,{size:n}))}),A=n(88),M=(n(135),function(e){var t=e.size,n=void 0===t?2:t;return r.a.createElement("div",{className:"spinner-component"},r.a.createElement(A.a,{className:"icon-spin",size:"".concat(n,"em")}))}),V=function(e){var t=e.emissionData,n=e.totalTreesPlanted,a=Object(c.a)(e,["emissionData","totalTreesPlanted"]),o=t.reduce((function(e,t){return{value:e.value+t.value,label:""}})).value,i=_.getCo2TonnesForTreeCount(n)/o;i>1&&(i=1);var l=getComputedStyle(document.documentElement).getPropertyValue("--progress-bar-fill"),s=getComputedStyle(document.documentElement).getPropertyValue("--progress-bar-trail");return console.log(s,l),r.a.createElement(q.SemiCircle,Object.assign({progress:i,options:{strokeWidth:4,color:l,trailColor:s,duration:1500},initialAnimate:!0},a))},W=n(29),I=n(30),U=n(87),J=n.n(U),R=n(40),H=n.n(R),$=function(e){Object(I.a)(n,e);var t=Object(W.a)(n);function n(){var e;Object(P.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).progressBar=r.a.createRef(),e}return Object(x.a)(n,[{key:"create",value:function(e,t){if(!this.shape){var n=this.progressBar.current;this.shape=new e.ShapeClass(n,e.options),e.initialAnimate?(t&&this.setProgress(t.progress),this.animateProgress(e.progress)):this.setProgress(e.progress),this.setText(e.text)}}},{key:"destroy",value:function(){this.shape&&(this.shape.destroy(),this.shape=null)}},{key:"animateProgress",value:function(e){this.shape.animate(e)}},{key:"setProgress",value:function(e){this.shape.set(e)}},{key:"setText",value:function(e){e&&this.shape.setText(e)}},{key:"componentDidUpdate",value:function(e){J()(this.props.options,e.options)||(this.destroy(),this.create(this.props,e)),this.animateProgress(this.props.progress),this.setText(this.props.text)}},{key:"componentDidMount",value:function(){this.create(this.props,null)}},{key:"componentWillUnmount",value:function(){this.destroy()}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.containerClassName;return r.a.createElement("div",{className:n,style:t,ref:this.progressBar})}}]),n}(a.Component);$.defaultProps={ShapeClass:null,options:{},progress:0,text:null,initialAnimate:!1,containerStyle:{},containerClassName:"progressbar-container"};var q={Line:function(e){Object(I.a)(n,e);var t=Object(W.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return r.a.createElement($,Object.assign({},this.props,{ShapeClass:H.a.Line}))}}]),n}(a.Component),Circle:function(e){Object(I.a)(n,e);var t=Object(W.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return r.a.createElement($,Object.assign({},this.props,{ShapeClass:H.a.Circle}))}}]),n}(a.Component),SemiCircle:function(e){Object(I.a)(n,e);var t=Object(W.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return r.a.createElement($,Object.assign({},this.props,{ShapeClass:H.a.SemiCircle}))}}]),n}(a.Component)},G=function(e){var t=e.totalTreesPlanted,n=Object(c.a)(e,["totalTreesPlanted"]),a=t.toLocaleString("IS-is");return r.a.createElement("div",n,r.a.createElement("p",null,a),r.a.createElement("p",null," tr\xe9 gr\xf3\xf0ursett"))},K=(n(219),n(207),function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement("section",{className:"intro_section"},r.a.createElement("div",{className:"counter_and_logo_outer_container"},r.a.createElement("div",{className:"counter_and_logo_container"},r.a.createElement(G,{className:"treecounter",totalTreesPlanted:5555}),r.a.createElement("img",{className:"logo",alt:"Our logo",src:"/assets/logo-200x200.png"})),r.a.createElement(V,{emissionData:_.getCo2EmissionData(),totalTreesPlanted:5555}))))}),Q=(n(208),function(){return r.a.createElement(f.a,{className:"leaderboard-page"},r.a.createElement("div",null,"lala"))}),X=(n(209),n(210),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(h,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:K}),r.a.createElement(s.b,{exact:!0,path:"/leaderboard",component:Q}),r.a.createElement(s.a,{to:"/"}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,n){e.exports=n(211)},98:function(e,t,n){},99:function(e,t,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.7867d122.chunk.js.map