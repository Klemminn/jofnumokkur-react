(this.webpackJsonphackathon2020=this.webpackJsonphackathon2020||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},220:function(e,t,n){},222:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(28),s=n.n(o),i=n(40),u=n(11),l=n(15),p=n(88),m=function(e){var t=e.children,n=e.className,a=e.loading,r=e.disabled,o=e.link,s=Object(l.a)(e,["children","className","loading","disabled","link"]),u=["button-component"];return n&&u.push(n),c.a.createElement(p.a,Object.assign({className:u.join(" "),disabled:r||a,tag:o?i.b:void 0,to:o||void 0},s),a&&c.a.createElement(K,{size:1}),t)},f=n(42),d=(n(103),function(e){var t=e.onClick;return c.a.createElement(h,{className:"facebook-login-button-component",onClick:t,text:"Innskr\xe1 me\xf0 Facebook",icon:f.a})}),h=function(e){var t=e.icon,n=e.text,a=Object(l.a)(e,["icon","text"]),r=t;return c.a.createElement(m,a,c.a.createElement(r,{className:"".concat(n?"mr-1":"")})," ",n)},v=n(224),b=n(225),g=(n(104),function(){return c.a.createElement(v.a,{className:"header-component"},c.a.createElement(b.a,null,c.a.createElement("div",null),c.a.createElement(D,null)))}),j=n(235),E=n(236),O=n(237),k=n(226),y=n(13),x=n(14),C=function(){function e(){Object(y.a)(this,e)}return Object(x.a)(e,null,[{key:"getFirstName",value:function(e){return e.split(" ")[0]}},{key:"thousandSeparator",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}]),e}(),w=function(e){var t=e.participant,n=e.logout;return c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,{nav:!0,inNavbar:!0},c.a.createElement(E.a,{nav:!0},c.a.createElement(m,null,"".concat(C.getFirstName((null===t||void 0===t?void 0:t.name)||"")," - ").concat(C.thousandSeparator((null===t||void 0===t?void 0:t.trees)||0)," ").concat(t&&(null===t||void 0===t?void 0:t.trees)%10===1&&t&&11!==(null===t||void 0===t?void 0:t.trees)?"tr\xe9":"trj\xe1m"," planta\xf0"))),c.a.createElement(O.a,{right:!0},c.a.createElement(k.a,null,"Sk\xf3gurinn minn"),c.a.createElement(k.a,{divider:!0}),c.a.createElement(k.a,{onClick:n},"\xdatskr\xe1"))))},S=n(8),T=n.n(S),P=n(12),N=n(18),F=n(92),B={api:"https://api.jofnumokkur.xyz/v1"},_=n.n(F).a.create({baseURL:"".concat(B.api),headers:{Accept:"application/json","Content-type":"application/json"}}),z=function(){function e(){Object(y.a)(this,e)}return Object(x.a)(e,null,[{key:"getParticipant",value:function(){var e=Object(P.a)(T.a.mark((function e(t){var n,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.post("/participant/",t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getParticipants",value:function(){var e=Object(P.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.get("/participants/");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),A=function(){function e(){Object(y.a)(this,e)}return Object(x.a)(e,null,[{key:"getCo2TonnesForTreeCount",value:function(e){return this.co2TonnesPerTree*e}},{key:"getTreeCountForCo2Tonnes",value:function(e){return this.treesPerTonCo2*e}},{key:"getCo2EmissionTypes",value:function(){var e=Object(P.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.get("/co2emissiontypes/");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getTotalCo2",value:function(){var e=Object(P.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=2;break}return e.abrupt("return",a);case 2:return e.next=4,this.getCo2EmissionTypes();case 4:return t=e.sent,a=t.reduce((function(e,t){return e+t.co2}),0),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();A.co2TonnesPerTree=.1,A.treesPerTonCo2=10;var L,M,W=A,V=function(){function e(){Object(y.a)(this,e)}return Object(x.a)(e,null,[{key:"getMunicipalities",value:function(){var e=Object(P.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.get("/municipalities/");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),U=function(){function e(){Object(y.a)(this,e)}return Object(x.a)(e,null,[{key:"getTreesPlanted",value:function(){var e=Object(P.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.get("/planted/");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),D=function(){var e=Object(r.useState)(!1),t=Object(N.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(null),s=Object(N.a)(o,2),i=s[0],u=s[1],l=function(){FB.logout((function(){u(null)}))},p=function(){FB.login((function(){m()}),{scope:"public_profile,email"})},m=function(){FB.api("/me",{fields:"name, email"},function(){var e=Object(P.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("FB /me response",t),e.prev=1,t.error){e.next=7;break}return e.next=5,z.getParticipant(t);case 5:n=e.sent,u(n);case 7:return e.prev=7,a(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})));return function(t){return e.apply(this,arguments)}}())};Object(r.useEffect)((function(){!function e(){a(!0),"undefined"!==typeof FB?FB.getLoginStatus((function(e){console.log("FB get login status response",e),"connected"===e.status?m():a(!1)})):setTimeout((function(){e()}),300)}()}),[]);var f=function(){return n?null:i?c.a.createElement(w,{participant:i,logout:l}):c.a.createElement(d,{onClick:p})};return c.a.createElement(f,null)},I=(n(227),n(228).a,n(229).a,n(234)),J=n(230),R=n(231),$=n(232),q=function(e){var t=e.header,n=e.footer,a=e.children,r=Object(l.a)(e,["header","footer","children"]);return c.a.createElement(I.a,r,t&&c.a.createElement(J.a,null,t),a&&c.a.createElement(R.a,null,a),n&&c.a.createElement($.a,null,n))},G=(n(145),function(e){var t=Object.assign({},e),n=Object(r.useState)(!1),a=Object(N.a)(n,2),o=a[0],s=a[1],i=Object(r.useState)(!0),u=Object(N.a)(i,2),l=u[0],p=u[1],f=Object(r.useState)({headers:[],rows:[]}),d=Object(N.a)(f,2),h=d[0],v=d[1];Object(r.useEffect)((function(){b()}),[]);var b=function(){l?g():j(),p(!l)},g=function(){var e=Object(P.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L){e.next=15;break}return s(!0),e.prev=2,e.next=5,V.getMunicipalities();case 5:t=e.sent,L=t.sort((function(e,t){return e.trees-t.trees})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:return e.prev=12,s(!1),e.finish(12);case 15:v({headers:[{code:"name",label:"Sveitarf\xe9lag"},{code:"population",label:"\xcdb\xfaafj\xf6ldi"},{code:"trees",label:"Tr\xe9"}],rows:L});case 16:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(P.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M){e.next=15;break}return s(!0),e.prev=2,e.next=5,z.getParticipants();case 5:t=e.sent,M=t.sort((function(e,t){return e.trees-t.trees})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:return e.prev=12,s(!1),e.finish(12);case 15:v({headers:[{code:"name",label:"\xde\xe1tttakandi"},{code:"trees",label:"Tr\xe9"}],rows:M});case 16:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(q,Object.assign({className:"leaderboard-modal-component",size:"xl"},t),c.a.createElement(m,{onClick:function(){return b()}},l?"Sj\xe1 sveitarf\xe9l\xf6g":"Sj\xe1 \xfe\xe1tttakendur"),c.a.createElement(ie,{headers:h.headers,rows:h.rows,loading:o,hover:!0}))}),H=(n(146),n(147),function(e){var t=e.size,n=void 0===t?2:t;return c.a.createElement("div",{className:"loading-component",style:{marginTop:"".concat(n/2,"em")}},c.a.createElement(K,{size:n}))}),K=(n(148),function(e){var t=e.size,n=void 0===t?2:t;return c.a.createElement("div",{className:"spinner-component"},c.a.createElement(f.b,{className:"icon-spin",size:"".concat(n,"em")}))}),Q=function(e){var t=Object.assign({},e),n=getComputedStyle(document.documentElement).getPropertyValue("--progress-bar-fill"),a=getComputedStyle(document.documentElement).getPropertyValue("--progress-bar-trail");return console.log(a,n),c.a.createElement(ce.SemiCircle,Object.assign({options:{strokeWidth:4,color:n,trailColor:a,duration:1500},initialAnimate:!0},t))},X=function(e){var t=Object.assign({},e),n=getComputedStyle(document.documentElement).getPropertyValue("--progress-bar-fill"),a=getComputedStyle(document.documentElement).getPropertyValue("--progress-bar-trail");return c.a.createElement(ce.Line,Object.assign({options:{strokeWidth:4,color:n,trailColor:a,duration:1500},initialAnimate:!0},t))},Y=n(32),Z=n(33),ee=n(93),te=n.n(ee),ne=n(44),ae=n.n(ne),re=function(e){Object(Z.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).progressBar=c.a.createRef(),e}return Object(x.a)(n,[{key:"create",value:function(e,t){if(!this.shape){var n=this.progressBar.current;this.shape=new e.ShapeClass(n,e.options),e.initialAnimate?(t&&this.setProgress(t.progress),this.animateProgress(e.progress)):this.setProgress(e.progress),this.setText(e.text)}}},{key:"destroy",value:function(){this.shape&&(this.shape.destroy(),this.shape=null)}},{key:"animateProgress",value:function(e){this.shape.animate(e)}},{key:"setProgress",value:function(e){this.shape.set(e)}},{key:"setText",value:function(e){e&&this.shape.setText(e)}},{key:"componentDidUpdate",value:function(e){te()(this.props.options,e.options)||(this.destroy(),this.create(this.props,e)),this.animateProgress(this.props.progress),this.setText(this.props.text)}},{key:"componentDidMount",value:function(){this.create(this.props,null)}},{key:"componentWillUnmount",value:function(){this.destroy()}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.containerClassName;return c.a.createElement("div",{className:n,style:t,ref:this.progressBar})}}]),n}(r.Component);re.defaultProps={ShapeClass:null,options:{},progress:0,text:null,initialAnimate:!1,containerStyle:{},containerClassName:"progressbar-container"};var ce={Line:function(e){Object(Z.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return c.a.createElement(re,Object.assign({},this.props,{ShapeClass:ae.a.Line}))}}]),n}(r.Component),Circle:function(e){Object(Z.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return c.a.createElement(re,Object.assign({},this.props,{ShapeClass:ae.a.Circle}))}}]),n}(r.Component),SemiCircle:function(e){Object(Z.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return c.a.createElement(re,Object.assign({},this.props,{ShapeClass:ae.a.SemiCircle}))}}]),n}(r.Component)},oe=function(e){var t=e.totalTreesPlanted,n=Object(l.a)(e,["totalTreesPlanted"]),a=C.thousandSeparator(t);return c.a.createElement("div",n,c.a.createElement("p",null,a),c.a.createElement("p",null," tr\xe9 gr\xf3\xf0ursett"))},se=n(233),ie=function(e){var t=e.headers,n=e.rows,a=e.loading,r=Object(l.a)(e,["headers","rows","loading"]);return c.a.createElement(se.a,r,a?c.a.createElement(H,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null),t.map((function(e){return c.a.createElement("th",{key:e.code},e.label)})))),c.a.createElement("tbody",null,n.map((function(e,n){return c.a.createElement("tr",{key:n},c.a.createElement("td",null,n+1,"."),t.map((function(t){return c.a.createElement("td",{key:t.code},e[t.code])})))})))))},ue=(n(220),function(){var e=Object(r.useState)(""),t=Object(N.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(0),s=Object(N.a)(o,2),i=s[0],u=s[1],l=Object(r.useState)(0),p=Object(N.a)(l,2),m=p[0],f=p[1],d=Object(r.useState)([]),h=Object(N.a)(d,2),v=(h[0],h[1]);Object(r.useEffect)((function(){b(),g()}),[]);var b=function(){var e=Object(P.a)(T.a.mark((function e(){var t,n,a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.getTreesPlanted();case 2:return t=e.sent,e.next=5,W.getTotalCo2();case 5:n=e.sent,a=W.getCo2TonnesForTreeCount(t),r=a/n,u(t),r>1&&(r=1),f(r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(P.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.getMunicipalities();case 3:(t=e.sent).sort((function(e,t){return e.trees-t.trees})),v(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"home-page"},c.a.createElement("section",{className:"intro_section"},c.a.createElement("div",{className:"counter_and_logo_outer_container"},c.a.createElement("div",{className:"counter_and_logo_container"},c.a.createElement(oe,{className:"treecounter",totalTreesPlanted:i}),c.a.createElement("img",{className:"logo",alt:"Our logo",src:"/assets/logo-200x200.png"})),c.a.createElement(Q,{progress:m})),c.a.createElement("div",null,c.a.createElement(X,{progress:1}))),c.a.createElement(G,{isOpen:"leaderboard"===n,toggle:function(){return a("")}}))}),le=(n(221),n(222),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,null,c.a.createElement(g,null),c.a.createElement(u.d,null,c.a.createElement(u.b,{exact:!0,path:"/",component:ue}),c.a.createElement(u.a,{to:"/"}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,n){e.exports=n(223)}},[[94,1,2]]]);
//# sourceMappingURL=main.756eb402.chunk.js.map