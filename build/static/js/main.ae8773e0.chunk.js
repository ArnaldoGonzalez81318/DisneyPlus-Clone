(this["webpackJsonpdisney-plus-clone"]=this["webpackJsonpdisney-plus-clone"]||[]).push([[0],{70:function(n,e,i){},79:function(n,e,i){},97:function(n,e,i){"use strict";i.r(e);var t,r,a,c,o,s,p,d,l,x,b,j,g,h,m,u,O,f,v,w,y,k,z,S,I,E,A,T,D,L,P,C,M,R,H,G,N,X,U,W,B,V,J,K=i(8),Y=i.n(K),F=i(47),Q=i.n(F),Z=(i(70),i(33)),_=i(24),q=i(16),$=i(17),nn=i(6),en=$.a.section(t||(t=Object(q.a)(["\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  height: 100vh;\n"]))),tn=$.a.div(r||(r=Object(q.a)(["\n  margin-bottom: 10vw;\n  width: 100%;\n  position: relative;\n  min-height: 100vh;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 80px 40px;\n  height: 100%;\n"]))),rn=$.a.div(a||(a=Object(q.a)(['\n  height: 100%;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url("/images/login-background.jpeg");\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: -1;\n']))),an=$.a.div(c||(c=Object(q.a)(["\n  max-width: 650px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),cn=$.a.img(o||(o=Object(q.a)(["\n  margin-bottom: 12px;\n  max-width: 600px;\n  min-height: 1px;\n  display: block;\n  width: 100%;\n"]))),on=$.a.a(s||(s=Object(q.a)(["\n  font-weight: bold;\n  color: #f9f9f9;\n  background-color: #0063e5;\n  margin-bottom: 12px;\n  width: 100%;\n  letter-spacing: 1.5px;\n  font-size: 18px;\n  padding: 16.5px 0;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #0483ee;\n  }\n"]))),sn=$.a.p(p||(p=Object(q.a)(["\n  color: hsla(0, 0%, 95.3%, 1);\n  font-size: 11px;\n  margin: 0 0 24px;\n  line-height: 1.5;\n  letter-spacing: 1.5px;\n"]))),pn=$.a.img(d||(d=Object(q.a)(["\n  max-width: 600px;\n  margin-bottom: 20px;\n  display: inline-block;\n  vertical-align: bottom;\n  width: 100%;\n"]))),dn=function(n){return Object(nn.jsx)(en,{children:Object(nn.jsxs)(tn,{children:[Object(nn.jsxs)(an,{children:[Object(nn.jsx)(cn,{src:"/images/cta-logo-one.svg",alt:""}),Object(nn.jsx)(on,{children:"GET ALL THERE"}),Object(nn.jsx)(sn,{children:"Stream now. Terms Apply."}),Object(nn.jsx)(pn,{src:"/images/cta-logo-two.png",alt:""})]}),Object(nn.jsx)(rn,{})]})})},ln=i(4),xn=i(0),bn=i.n(xn),jn=i(26),gn=i(45),hn=(i(75),gn.a.initializeApp({apiKey:"AIzaSyDPXfY11_1SClUXMBzAlZPV-Kd4oLzsxt0",authDomain:"disneyplusclone-2fe7c.firebaseapp.com",projectId:"disneyplusclone-2fe7c",storageBucket:"disneyplusclone-2fe7c.appspot.com",messagingSenderId:"893487311192",appId:"1:893487311192:web:40325ee45fb9c6ef50dd2d",measurementId:"G-M92077Q1PW"}).firestore()),mn=gn.a.auth(),un=new gn.a.auth.GoogleAuthProvider,On=(gn.a.storage(),hn),fn=i(38),vn=Object(fn.b)({name:"user",initialState:{name:"",email:"",photo:""},reducers:{setUserLoginDetails:function(n,e){n.name=e.payload.name,n.email=e.payload.email,n.photo=e.payload.photo},setSignOutState:function(n){n.name=null,n.email=null,n.photo=null}}}),wn=vn.actions,yn=wn.setUserLoginDetails,kn=wn.setSignOutState,zn=function(n){return n.user.name},Sn=function(n){return n.user.photo},In=vn.reducer,En=$.a.nav(l||(l=Object(q.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 70px;\n  background-color: #090b13;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 36px;\n  letter-spacing: 16px;\n  z-index: 3;\n"]))),An=$.a.a(x||(x=Object(q.a)(["\n  padding: 0;\n  width: 80px;\n  margin-top: 4px;\n  max-height: 70px;\n  font-size: 0;\n  display: inline-block;\n  cursor: pointer;\n\n  img {\n    display: block;\n    width: 100%;\n  }\n"]))),Tn=$.a.div(b||(b=Object(q.a)(['\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  height: 100%;\n  justify-content: flex-end;\n  margin: 0px;\n  padding: 0px;\n  position: relative;\n  margin-right: auto;\n  margin-left: 25px;\n\n  a {\n    display: flex;\n    align-items: center;\n    padding: 0 12px;\n    cursor: pointer;\n\n    img {\n      height: 20px;\n      min-width: 20px;\n      width: 20px;\n      z-index: auto;\n    }\n\n    span {\n      color: rgb(249, 249, 249);\n      font-size: 13px;\n      letter-spacing: 1.42px;\n      line-height: 1.08;\n      padding: 2px 0px;\n      white-space: nowrap;\n      position: relative;\n\n      &:before {\n        background-color: rgb(249, 249, 249);\n        border-radius: 0px 0px 4px 4px;\n        bottom: -6px;\n        content: "";\n        height: 2px;\n        left: 0px;\n        opacity: 0;\n        position: absolute;\n        right: 0px;\n        transform-origin: left center;\n        transform: scaleX(0);\n        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n        visibility: hidden;\n        width: auto;\n      }\n    }\n\n    &:hover {\n      span:before {\n        transform: scaleX(1);\n        visibility: visible;\n        opacity: 1 !important;\n      }\n    }\n  }\n\n  /* @media (max-width: 768px) {\n    display: none;\n  } */\n']))),Dn=$.a.a(j||(j=Object(q.a)(["\n  background-color: rgba(0, 0, 0, 0.6);\n  padding: 8px 16px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  border: 1px solid #f9f9f9;\n  border-radius: 4px;\n  transition: all 0.2s ease 0s;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #f9f9f9;\n    color: #000;\n    border-color: transparent;\n  }\n"]))),Ln=$.a.img(g||(g=Object(q.a)(["\n  height: 100%;\n"]))),Pn=$.a.div(h||(h=Object(q.a)(["\n  position: absolute;\n  top: 48px;\n  right: 0px;\n  background: rgb(19, 19, 19);\n  border: 1px solid rgba(151, 151, 151, 0.34);\n  border-radius: 4px;\n  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;\n  padding: 10px;\n  font-size: 14px;\n  letter-spacing: 3px;\n  width: 100px;\n  opacity: 0;\n"]))),Cn=$.a.div(m||(m=Object(q.a)(["\n  position: relative;\n  height: 48px;\n  width: 48px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n\n  "," {\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n  }\n\n  &:hover {\n    "," {\n      opacity: 1;\n      transition-duration: 1s;\n    }\n  }\n"])),Ln,Pn),Mn=function(n){var e=Object(jn.b)(),i=Object(_.f)(),t=Object(jn.c)(zn),r=Object(jn.c)(Sn);Object(K.useEffect)((function(){mn.onAuthStateChanged(function(){var n=Object(ln.a)(bn.a.mark((function n(e){return bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e&&(c(e),i.push("/home"));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[t]);var a=function(){t?t&&mn.signOut().then((function(){e(kn()),i.push("/")})).catch((function(n){return alert(n.message)})):mn.signInWithPopup(un).then((function(n){c(n.user)})).catch((function(n){alert(n.message)}))},c=function(n){e(yn({name:n.displayName,email:n.email,photo:n.photoURL}))};return Object(nn.jsxs)(En,{children:[Object(nn.jsx)(An,{children:Object(nn.jsx)("a",{href:"/",children:Object(nn.jsx)("img",{src:"/images/logo.svg",alt:"Disney+"})})}),t?Object(nn.jsxs)(nn.Fragment,{children:[Object(nn.jsxs)(Tn,{children:[Object(nn.jsxs)("a",{href:"/home",children:[Object(nn.jsx)("img",{src:"/images/home-icon.svg",alt:"HOME"}),Object(nn.jsx)("span",{children:"HOME"})]}),Object(nn.jsxs)("a",{href:"/",children:[Object(nn.jsx)("img",{src:"/images/search-icon.svg",alt:"SEARCH"}),Object(nn.jsx)("span",{children:"SEARCH"})]}),Object(nn.jsxs)("a",{href:"/",children:[Object(nn.jsx)("img",{src:"/images/watchlist-icon.svg",alt:"WATCHLIST"}),Object(nn.jsx)("span",{children:"WATCHLIST"})]}),Object(nn.jsxs)("a",{href:"/",children:[Object(nn.jsx)("img",{src:"/images/original-icon.svg",alt:"ORIGINALS"}),Object(nn.jsx)("span",{children:"ORIGINALS"})]}),Object(nn.jsxs)("a",{href:"/",children:[Object(nn.jsx)("img",{src:"/images/movie-icon.svg",alt:"MOVIES"}),Object(nn.jsx)("span",{children:"MOVIES"})]}),Object(nn.jsxs)("a",{href:"/",children:[Object(nn.jsx)("img",{src:"/images/series-icon.svg",alt:"SERIES"}),Object(nn.jsx)("span",{children:"SERIES"})]})]}),Object(nn.jsxs)(Cn,{children:[Object(nn.jsx)(Ln,{src:r,alt:t}),Object(nn.jsx)(Pn,{children:Object(nn.jsx)("span",{onClick:a,children:"Sign out"})})]})]}):Object(nn.jsx)(Dn,{onClick:a,children:"Login"})]})},Rn=(i(79),i(34)),Hn=i(18),Gn=(i(80),i(81),i(64)),Nn=i.n(Gn),Xn=Object($.a)(Nn.a)(u||(u=Object(q.a)(["\n  margin-top: 20px;\n\n  & > button {\n    opacity: 0;\n    height: 100%;\n    width: 5vw;\n    z-index: 1;\n\n    &:hover {\n      opacity: 1;\n      transition: opacity 0.2s ease 0s;\n    }\n  }\n\n  ul li button {\n    &:before {\n      font-size: 10px;\n      color: rgb(150, 158, 171);\n    }\n  }\n\n  li.slick-active button:before {\n    color: white;\n  }\n\n  .slick-list {\n    overflow: initial;\n  }\n\n  .slick-prev {\n    left: -75px;\n  }\n\n  .slick-next {\n    right: -75px;\n  }\n"]))),Un=$.a.div(O||(O=Object(q.a)(["\n  border-radius: 4px;\n  cursor: pointer;\n  position: relative;\n\n  a {\n    border-radius: 4px;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n      rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor: pointer;\n    display: block;\n    position: relative;\n    padding: 4px;\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n\n    &:hover {\n      padding: 0;\n      border: 4px solid rgba(249, 249, 249, 0.8);\n      transition-duration: 300ms;\n    }\n  }\n"]))),Wn=function(n){return Object(nn.jsxs)(Xn,Object(Rn.a)(Object(Rn.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{children:[Object(nn.jsx)(Un,{children:Object(nn.jsx)("a",{href:"/",children:Object(nn.jsx)("img",{src:"/images/slider-badging.jpg",alt:""})})}),Object(nn.jsx)(Un,{children:Object(nn.jsx)("a",{href:"/",children:Object(nn.jsx)("img",{src:"/images/slider-scale.jpg",alt:""})})}),Object(nn.jsx)(Un,{children:Object(nn.jsx)("a",{href:"/",children:Object(nn.jsx)("img",{src:"/images/slider-badag.jpg",alt:""})})}),Object(nn.jsx)(Un,{children:Object(nn.jsx)("a",{href:"/",children:Object(nn.jsx)("img",{src:"/images/slider-scales.jpg",alt:""})})})]}))},Bn=Object(fn.b)({name:"movie",initialState:{recommend:null,newDisney:null,original:null,trending:null},reducers:{setMovies:function(n,e){n.recommend=e.payload.recommend,n.newDisney=e.payload.newDisney,n.original=e.payload.original,n.trending=e.payload.trending}}}),Vn=Bn.actions.setMovies,Jn=function(n){return n.movie.recommend},Kn=function(n){return n.movie.newDisney},Yn=function(n){return n.movie.original},Fn=function(n){return n.movie.trending},Qn=Bn.reducer,Zn=$.a.div(f||(f=Object(q.a)(["\n  padding: 0 0 26px;\n"]))),_n=$.a.div(v||(v=Object(q.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),qn=$.a.div(w||(w=Object(q.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),$n=function(n){var e=Object(jn.c)(Kn);return Object(nn.jsxs)(Zn,{children:[Object(nn.jsx)("h4",{children:"New to Disney+"}),Object(nn.jsx)(_n,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(qn,{children:[n.id,Object(nn.jsx)(Z.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},ne=$.a.div(y||(y=Object(q.a)(["\n  padding: 0 0 26px;\n"]))),ee=$.a.div(k||(k=Object(q.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),ie=$.a.div(z||(z=Object(q.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),te=function(n){var e=Object(jn.c)(Yn);return Object(nn.jsxs)(ne,{children:[Object(nn.jsx)("h4",{children:"Originals"}),Object(nn.jsx)(ee,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(ie,{children:[n.id,Object(nn.jsx)(Z.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},re=$.a.div(S||(S=Object(q.a)(["\n  padding: 0 0 26px;\n"]))),ae=$.a.div(I||(I=Object(q.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),ce=$.a.div(E||(E=Object(q.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),oe=function(n){var e=Object(jn.c)(Jn);return console.log(e,":\ud83d\udee2\ufe0f"),Object(nn.jsxs)(re,{children:[Object(nn.jsx)("h4",{children:"Recommended for You"}),Object(nn.jsx)(ae,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(ce,{children:[n.id,Object(nn.jsx)(Z.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},se=$.a.div(A||(A=Object(q.a)(["\n  padding: 0 0 26px;\n"]))),pe=$.a.div(T||(T=Object(q.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),de=$.a.div(D||(D=Object(q.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),le=function(n){var e=Object(jn.c)(Fn);return Object(nn.jsxs)(se,{children:[Object(nn.jsx)("h4",{children:"Trending"}),Object(nn.jsx)(pe,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(de,{children:[n.id,Object(nn.jsx)(Z.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},xe=$.a.div(L||(L=Object(q.a)(["\n  margin-top: 30px;\n  padding: 30px 0px 26px;\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n"]))),be=$.a.div(P||(P=Object(q.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n\n  video {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0px;\n    opacity: 0;\n    z-index: 0;\n  }\n\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n\n    video {\n      opacity: 1;\n    }\n  }\n"]))),je=function(n){return Object(nn.jsxs)(xe,{children:[Object(nn.jsxs)(be,{children:[Object(nn.jsx)("img",{src:"/images/viewers-disney.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(nn.jsx)("source",{src:"/videos/1564674844-disney.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(be,{children:[Object(nn.jsx)("img",{src:"/images/viewers-pixar.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(nn.jsx)("source",{src:"/videos/1564676714-pixar.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(be,{children:[Object(nn.jsx)("img",{src:"/images/viewers-marvel.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(nn.jsx)("source",{src:"/videos/1564676115-marvel.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(be,{children:[Object(nn.jsx)("img",{src:"/images/viewers-starwars.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(nn.jsx)("source",{src:"/videos/1608229455-star-wars.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(be,{children:[Object(nn.jsx)("img",{src:"/images/viewers-national.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(nn.jsx)("source",{src:"/videos/1564676296-national-geographic.mp4",type:"video/mp4"})})]})]})},ge=$.a.main(C||(C=Object(q.a)(['\n  position: relative;\n  min-height: calc(100vh - 250px);\n  overflow-x: hidden;\n  display: block;\n  top: 72px;\n  padding: 0 calc(3.5vw + 5px);\n\n  &:after {\n    background: url("/images/home-background.png") center center / cover\n      no-repeat fixed;\n    content: "";\n    position: absolute;\n    inset: 0px;\n    opacity: 1;\n    z-index: -1;\n  }\n']))),he=function(n){var e=Object(jn.b)(),i=Object(jn.c)(zn),t=[],r=[],a=[],c=[];return Object(K.useEffect)((function(){console.log("hello"),On.collection("movies").onSnapshot((function(n){n.docs.map((function(n){switch(console.log(t),n.data().type){case"recommend":t=[].concat(Object(Hn.a)(t),[Object(Rn.a)({id:n.id},n.data())]);break;case"new":r=[].concat(Object(Hn.a)(r),[Object(Rn.a)({id:n.id},n.data())]);break;case"original":a=[].concat(Object(Hn.a)(a),[Object(Rn.a)({id:n.id},n.data())]);break;case"trending":c=[].concat(Object(Hn.a)(c),[Object(Rn.a)({id:n.id},n.data())])}})),e(Vn({recommend:t,newDisney:r,original:a,trending:c}))}))}),[i]),Object(nn.jsxs)(ge,{children:[Object(nn.jsx)(Wn,{}),Object(nn.jsx)(je,{}),Object(nn.jsx)(oe,{}),Object(nn.jsx)($n,{}),Object(nn.jsx)(te,{}),Object(nn.jsx)(le,{})]})},me=i(19),ue=$.a.div(M||(M=Object(q.a)(["\n  position: relative;\n  min-height: calc(100vh-250px);\n  overflow-x: hidden;\n  display: block;\n  top: 72px;\n  padding: 0 calc(3.5vw + 5px);\n"]))),Oe=$.a.div(R||(R=Object(q.a)(["\n  left: 0px;\n  opacity: 0.8;\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  z-index: -1;\n\n  img {\n    width: 100vw;\n    height: 100vh;\n\n    @media (max-width: 768px) {\n      width: initial;\n    }\n  }\n"]))),fe=$.a.div(H||(H=Object(q.a)(["\n  align-items: flex-end;\n  display: flex;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  margin: 0px auto;\n  height: 30vw;\n  min-height: 170px;\n  padding-bottom: 24px;\n  width: 100%;\n\n  img {\n    max-width: 600px;\n    min-width: 200px;\n    width: 35vw;\n  }\n"]))),ve=$.a.div(G||(G=Object(q.a)(["\n  max-width: 874px;\n"]))),we=$.a.div(N||(N=Object(q.a)(["\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  margin: 24px 0px;\n  min-height: 56px;\n"]))),ye=$.a.button(X||(X=Object(q.a)(["\n  font-size: 15px;\n  margin: 0px 22px 0px 0px;\n  padding: 0px 24px;\n  height: 56px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 1.8px;\n  text-align: center;\n  text-transform: uppercase;\n  background: rgb (249, 249, 249);\n  border: none;\n  color: rgb(0, 0, 0);\n\n  img {\n    width: 32px;\n  }\n\n  &:hover {\n    background: rgb(198, 198, 198);\n  }\n\n  @media (max-width: 768px) {\n    height: 45px;\n    padding: 0px 12px;\n    font-size: 12px;\n    margin: 0px 10px 0px 0px;\n\n    img {\n      width: 25px;\n    }\n  }\n"]))),ke=Object($.a)(ye)(U||(U=Object(q.a)(["\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgb(249, 249, 249);\n  color: rgb(249, 249, 249);\n"]))),ze=$.a.div(W||(W=Object(q.a)(["\n  margin-right: 16px;\n  height: 44px;\n  width: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  border: 2px solid white;\n  cursor: pointer;\n\n  span {\n    background-color: rgb(249, 249, 249);\n    display: inline-block;\n\n    &:first-child {\n      height: 2px;\n      transform: translate(1px, 0px) rotate(0deg);\n      width: 16px;\n    }\n\n    &:nth-child(2) {\n      height: 16px;\n      transform: translateX(-8px) rotate(0deg);\n      width: 2px;\n    }\n  }\n"]))),Se=$.a.div(B||(B=Object(q.a)(["\n  height: 44px;\n  width: 44px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: white;\n\n  div {\n    height: 40px;\n    width: 40px;\n    background: rgb(0, 0, 0);\n    border-radius: 50%;\n\n    img {\n      width: 100%;\n    }\n  }\n"]))),Ie=$.a.div(V||(V=Object(q.a)(["\n  color: rgb(249, 249, 249);\n  font-size: 15px;\n  min-height: 20px;\n\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"]))),Ee=$.a.div(J||(J=Object(q.a)(["\n  line-height: 1.4;\n  font-size: 20px;\n  padding: 16px 0px;\n  color: rgb(249, 249, 249);\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n  }\n"]))),Ae=function(n){var e=Object(_.g)().id,i=Object(K.useState)({}),t=Object(me.a)(i,2),r=t[0],a=t[1];return Object(K.useEffect)((function(){On.collection("movies").doc(e).get().then((function(n){n.exists?a(n.data()):console.log("no such document in firebase \ud83d\udd25")})).catch((function(n){console.log("Error getting document:",n)}))}),[e]),Object(nn.jsxs)(ue,{children:[Object(nn.jsx)(Oe,{children:Object(nn.jsx)("img",{alt:r.title,src:r.backgroundImg})}),Object(nn.jsx)(fe,{children:Object(nn.jsx)("img",{alt:r.title,src:r.titleImg})}),Object(nn.jsxs)(ve,{children:[Object(nn.jsxs)(we,{children:[Object(nn.jsxs)(ye,{children:[Object(nn.jsx)("img",{src:"/images/play-icon-black.png",alt:""}),Object(nn.jsx)("span",{children:"Play"})]}),Object(nn.jsxs)(ke,{children:[Object(nn.jsx)("img",{src:"/images/play-icon-white.png",alt:""}),Object(nn.jsx)("span",{children:"Trailer"})]}),Object(nn.jsxs)(ze,{children:[Object(nn.jsx)("span",{}),Object(nn.jsx)("span",{})]}),Object(nn.jsx)(Se,{children:Object(nn.jsx)("div",{children:Object(nn.jsx)("img",{src:"/images/group-icon.png",alt:""})})})]}),Object(nn.jsx)(Ie,{children:r.subTitle}),Object(nn.jsx)(Ee,{children:r.description})]})]})};var Te=function(){return Object(nn.jsx)("div",{className:"App",children:Object(nn.jsxs)(Z.a,{children:[Object(nn.jsx)(Mn,{}),Object(nn.jsxs)(_.c,{children:[Object(nn.jsx)(_.a,{exact:!0,path:"/",children:Object(nn.jsx)(dn,{})}),Object(nn.jsx)(_.a,{path:"/home",children:Object(nn.jsx)(he,{})}),Object(nn.jsx)(_.a,{path:"/detail/:id",children:Object(nn.jsx)(Ae,{})})]})]})})},De=Object(fn.a)({reducer:{user:In,movie:Qn},middleware:Object(fn.c)({serializableCheck:!1})});Q.a.render(Object(nn.jsx)(Y.a.StrictMode,{children:Object(nn.jsx)(jn.a,{store:De,children:Object(nn.jsx)(Te,{})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.ae8773e0.chunk.js.map