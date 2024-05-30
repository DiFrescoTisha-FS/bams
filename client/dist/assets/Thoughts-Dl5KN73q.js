import{p as T,j as v,m as P,P as i,c as w,r as S,g as Ge,u as Ke,B as Qe,a as Ye,b as Xe}from"./index-BYymD1Vh.js";import{r as Ve}from"./index-CWXHrlhI.js";const Ze=T.div.withConfig({shouldForwardProp:e=>!["top","left","show"].includes(e)})`
  position: absolute;
  top: ${e=>e.top||0}px;
  left: ${e=>e.left||0}px;
  transform: translate(-50%, 50px);
  display: ${e=>e.show?"block":"none"};
  padding: 8px;
  font-size: 12px;
  color: #000;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  text-align: center;
  z-index: 1000;
  pointer-events: none;
`,We=({show:e,top:n,left:c,children:l,specialPosition:o,...h})=>v.jsx(Ze,{show:e,top:n,left:c,...h,children:l}),Je=T.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-height: 860px;
  z-index: 1;

  ${P.tablet`
    padding: 50px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: auto;
  `}
`,et=T.div`
  position: absolute;
  height: 860px;
  max-height: 860px;
  width: 100%;
  background-size: cover;
  z-index: 2;
`,tt=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  height: auto;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 800;

  ${P.tablet`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-bottom: 20px;
  `}
`,nt=T.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  gap: 20px;

  ${P.tablet`
    flex-direction: column;
  `}

${P.phone`
    flex-direction: column;
    gap: 10;
  `}
`,rt=T.div`
  width: 100%;
  margin-right: 18px;
  order: 1;

  ${P.tablet`
    order: 2;
    margin-bottom: 20px;
  `}

  ${P.phone`
    order: 2;
  `}
`,ot=T.div`
  max-width: 455px;
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
  order: 2;
  margin-bottom: 16px;

  ${P.tablet`
    width: 115%;
    order: 2;
    margin-bottom: 20px;
    margin-left: 12%;
  `}

  ${P.phone`
    order: 2;
    text-align: left;
  `}
`,se=T.img.withConfig({shouldForwardProp:e=>!["position","zIndex","transform","top","right","left","bottom","borderRadius","border","width","height","tabletHeight","mobileHeight"].includes(e)})`
    position: ${e=>e.position||"absolute"};
    width: ${e=>e.width||"auto"};
    height: ${e=>e.height||"auto"};
    top: ${e=>e.top||"auto"};
    right: ${e=>e.right||"auto"};
    left: ${e=>e.left||"auto"};
    bottom: ${e=>e.bottom||"auto"};
    z-index: ${e=>e.zIndex||"auto"};
    transform: ${e=>e.transform||"none"};
    border-radius: ${e=>e.borderRadius||"0"};
    border: ${e=>e.border||"none"};
  
    ${P.tablet`
      width: 80%;
      height: auto;
    `}
  
    ${P.phone`
      width: 90%;
      height: auto;
      margin-top: -40px;
    `}
  `;se.propTypes={position:i.string,zIndex:i.oneOfType([i.string,i.number]),transform:i.string,top:i.oneOfType([i.string,i.number]),right:i.oneOfType([i.string,i.number]),left:i.oneOfType([i.string,i.number]),bottom:i.oneOfType([i.string,i.number]),borderRadius:i.string,border:i.string,width:i.oneOfType([i.string,i.number]),height:i.oneOfType([i.string,i.number]),tabletHeight:i.oneOfType([i.string,i.number]),mobileHeight:i.oneOfType([i.string,i.number])};se.defaultProps={position:"absolute",width:"auto",height:"auto",top:"auto",right:"auto",left:"auto",bottom:"auto",zIndex:"auto",transform:"none",borderRadius:"0",border:"none"};const Q=T.p.withConfig({shouldForwardProp:e=>!["fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textTransform","marginTop","marginBottom","textAlign","position","maxWidth","tabletFontSize","phoneFontSize","hideOnSmallScreens"].includes(e)}).attrs(e=>({as:e.as||"p"}))`
    color: ${e=>e.color||"#fff"};
    font-size: ${e=>e.fontSize||"20px"};
    font-weight: ${e=>e.fontWeight||"400"};
    font-family: ${e=>e.fontFamily||"inherit"};
    line-height: ${e=>e.lineHeight||"normal"};
    letter-spacing: ${e=>e.letterSpacing||"normal"};
    text-transform: ${e=>e.textTransform||"none"};
    margin-top: ${e=>e.marginTop||"0"};
    margin-bottom: ${e=>e.marginBottom||"0"};
    text-align: ${e=>e.textAlign||"left"};
    position: ${e=>e.position||"relative"};
    max-width: ${e=>e.maxWidth||"none"};
    
    ${P.tablet`
      font-size: ${e=>e.tabletFontSize||e.fontSize};
      text-align: ${e=>e.textAlign||"center"};
    `}
  
    ${P.phone`
      font-size: ${e=>e.phoneFontSize||e.fontSize};
      text-align: ${e=>e.textAlign||"center"};
      display: ${e=>e.hideOnSmallScreens?"none":"block"};
    `}
  `;Q.propTypes={as:i.string,color:i.string,fontSize:i.string,fontWeight:i.string,fontFamily:i.string,lineHeight:i.string,letterSpacing:i.string,textTransform:i.string,marginTop:i.string,marginBottom:i.string,textAlign:i.string,position:i.string,maxWidth:i.string,tabletFontSize:i.string,phoneFontSize:i.string,hideOnSmallScreens:i.bool};var Ie={},ue={},A=w&&w.__assign||function(){return A=Object.assign||function(e){for(var n,c=1,l=arguments.length;c<l;c++){n=arguments[c];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},A.apply(this,arguments)};Object.defineProperty(ue,"__esModule",{value:!0});var Oe={position:"absolute",top:0,left:0},ke=A(A({},Oe),{zIndex:1,userSelect:"none"}),it=A(A({},ke),{width:"100%",height:"auto"}),at=function(e){return{container:{position:"relative"},canvas:A(A({},Oe),{pointerEvents:"none",zIndex:2}),img:e!=null&&e.responsive?it:ke,map:(e==null?void 0:e.onClick)&&{cursor:"pointer"}||void 0}};ue.default=at;var U={};Object.defineProperty(U,"__esModule",{value:!0});U.ImageMapperDefaultProps=U.rerenderPropsList=void 0;U.rerenderPropsList=["src","active","disabled","width","height","imgWidth","fillColor","strokeColor","lineWidth","natural","areaKeyName","stayHighlighted","stayMultiHighlighted","toggleHighlighted","parentWidth","responsive"];U.ImageMapperDefaultProps={map:{areas:[],name:"image-map-".concat(Math.random())},areaKeyName:"id",containerRef:null,active:!0,disabled:!1,fillColor:"rgba(255, 255, 255, 0.5)",strokeColor:"rgba(0, 0, 0, 0.5)",lineWidth:1,imgWidth:0,width:0,height:0,natural:!1,stayHighlighted:!1,stayMultiHighlighted:!1,toggleHighlighted:!1,rerenderProps:[],responsive:!1,parentWidth:0,onImageClick:null,onImageMouseMove:null,onClick:null,onMouseDown:null,onMouseUp:null,onTouchStart:null,onTouchEnd:null,onMouseMove:null,onMouseEnter:null,onMouseLeave:null,onLoad:null};var ce={},Ee=w&&w.__spreadArray||function(e,n,c){if(c||arguments.length===2)for(var l=0,o=n.length,h;l<o;l++)(h||!(l in n))&&(h||(h=Array.prototype.slice.call(n,0,l)),h[l]=n[l]);return e.concat(h||Array.prototype.slice.call(n))};Object.defineProperty(ce,"__esModule",{value:!0});var lt=function(e,n,c,l,o){var h=e[0],d=e[1],C=e[2],u=e[3];o.current.fillStyle=n,o.current.lineWidth=c,o.current.strokeStyle=l,o.current.strokeRect(h,d,C-h,u-d),o.current.fillRect(h,d,C-h,u-d)},st=function(e,n,c,l,o){o.current.fillStyle=n,o.current.beginPath(),o.current.lineWidth=c,o.current.strokeStyle=l,o.current.arc(e[0],e[1],e[2],0,2*Math.PI),o.current.closePath(),o.current.stroke(),o.current.fill()},ut=function(e,n,c,l,o){var h=e.reduce(function(d,C,u,I){return u%2?d:Ee(Ee([],d,!0),[I.slice(u,u+2)],!1)},[]);o.current.fillStyle=n,o.current.beginPath(),o.current.lineWidth=c,o.current.strokeStyle=l,h.forEach(function(d){return o.current.lineTo(d[0],d[1])}),o.current.closePath(),o.current.stroke(),o.current.fill()},ct=function(e,n,c,l,o,h,d){return e==="rect"&&h?lt(n,c,l,o,d):e==="circle"&&h?st(n,c,l,o,d):e==="poly"&&h?ut(n,c,l,o,d):!1};ce.default=ct;var M={};Object.defineProperty(M,"__esModule",{value:!0});M.touchEnd=M.touchStart=M.mouseUp=M.mouseDown=M.mouseMove=M.imageClick=M.imageMouseMove=void 0;var ft=function(e,n){n.onImageMouseMove&&n.onImageMouseMove(e)};M.imageMouseMove=ft;var dt=function(e,n){n.onImageClick&&(e.preventDefault(),n.onImageClick(e))};M.imageClick=dt;var ht=function(e,n,c,l){l.onMouseMove&&l.onMouseMove(e,n,c)};M.mouseMove=ht;var gt=function(e,n,c,l){l.onMouseDown&&l.onMouseDown(e,n,c)};M.mouseDown=gt;var pt=function(e,n,c,l){l.onMouseUp&&l.onMouseUp(e,n,c)};M.mouseUp=pt;var mt=function(e,n,c,l){l.onTouchStart&&l.onTouchStart(e,n,c)};M.touchStart=mt;var vt=function(e,n,c,l){l.onTouchEnd&&l.onTouchEnd(e,n,c)};M.touchEnd=vt;var He={};Object.defineProperty(He,"__esModule",{value:!0});(function(e){var n=w&&w.__assign||function(){return n=Object.assign||function(t){for(var a,f=1,m=arguments.length;f<m;f++){a=arguments[f];for(var y in a)Object.prototype.hasOwnProperty.call(a,y)&&(t[y]=a[y])}return t},n.apply(this,arguments)},c=w&&w.__createBinding||(Object.create?function(t,a,f,m){m===void 0&&(m=f);var y=Object.getOwnPropertyDescriptor(a,f);(!y||("get"in y?!a.__esModule:y.writable||y.configurable))&&(y={enumerable:!0,get:function(){return a[f]}}),Object.defineProperty(t,m,y)}:function(t,a,f,m){m===void 0&&(m=f),t[m]=a[f]}),l=w&&w.__setModuleDefault||(Object.create?function(t,a){Object.defineProperty(t,"default",{enumerable:!0,value:a})}:function(t,a){t.default=a}),o=w&&w.__importStar||function(t){if(t&&t.__esModule)return t;var a={};if(t!=null)for(var f in t)f!=="default"&&Object.prototype.hasOwnProperty.call(t,f)&&c(a,t,f);return l(a,t),a},h=w&&w.__exportStar||function(t,a){for(var f in t)f!=="default"&&!Object.prototype.hasOwnProperty.call(a,f)&&c(a,t,f)},d=w&&w.__spreadArray||function(t,a,f){if(f||arguments.length===2)for(var m=0,y=a.length,$;m<y;m++)($||!(m in a))&&($||($=Array.prototype.slice.call(a,0,m)),$[m]=a[m]);return t.concat($||Array.prototype.slice.call(a))},C=w&&w.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=o(S),I=C(Ve),O=C(ue),j=U,_=C(ce),z=M;h(He,e);var Y=function(t){var a=t.containerRef,f=t.active,m=t.disabled,y=t.fillColor,$=t.lineWidth,N=t.map,Re=t.src,fe=t.strokeColor,de=t.natural,he=t.height,X=t.width,te=t.imgWidth,q=t.areaKeyName,ge=t.stayHighlighted,V=t.stayMultiHighlighted,pe=t.toggleHighlighted,Z=t.parentWidth,D=t.responsive,me=t.onLoad,ve=t.onMouseEnter,ye=t.onMouseLeave,be=t.onClick,xe=(0,u.useState)(N),F=xe[0],ne=xe[1],we=(0,u.useState)(F),re=we[0],Ae=we[1],Me=(0,u.useState)(!1),G=Me[0],De=Me[1],_e=(0,u.useState)(null),E=_e[0],Fe=_e[1],K=(0,u.useRef)(null),k=(0,u.useRef)(null),H=(0,u.useRef)(null),B=(0,u.useRef)(null),oe=(0,u.useRef)(!0),Se=(0,u.useRef)(0);(0,u.useEffect)(function(){G?clearInterval(Se.current):Se.current=window.setInterval(function(){var r;!((r=k.current)===null||r===void 0)&&r.complete&&De(!0)},500)},[G]),(0,u.useEffect)(function(){G&&H.current&&(ee(!0),B.current=H.current.getContext("2d"),Ce())},[G]),(0,u.useEffect)(function(){oe.current?oe.current=!1:(Ce(),ee(),E&&ze())},[t,oe,E]),(0,u.useEffect)(function(){K.current.clearHighlightedArea=function(){ne(re),ee()},a&&(a.current=K.current)},[E]),(0,u.useEffect)(function(){D&&ee()},[Z]);var Ce=function(){ne(N),Ae(N)},Pe=function(r){var s=t,g=r,b=s[g];return typeof b=="function"?b(k.current):b},J=function(r,s,g){g===void 0&&(g="area");var b=k.current,x=b.naturalWidth,p=b.naturalHeight,L=b.clientWidth,R=b.clientHeight;return r==="width"?D?Z:de?x:X||g==="image"?s:L:r==="height"?D?R:de?p:he||g==="image"?s:R:0},ee=function(r){if(r===void 0&&(r=!1),!(!r&&!E)){var s=Pe("width"),g=Pe("height"),b=J("width",s),x=J("height",g);(X||D)&&(k.current.width=J("width",s,"image")),(he||D)&&(k.current.height=J("height",g,"image")),H.current.width=b,H.current.height=x,K.current.style.width="".concat(b,"px"),K.current.style.height="".concat(x,"px"),B.current=H.current.getContext("2d"),B.current.fillStyle=y,me&&E&&me(k.current,{width:b,height:x}),Fe(k.current),E&&ae()}},Te=function(r){var s;return(0,_.default)(r.shape,r.scaledCoords,r.fillColor||y,r.lineWidth||$,r.strokeColor||fe,(s=r.active)!==null&&s!==void 0?s:!0,B)},je=function(){return B.current.clearRect(0,0,H.current.width,H.current.height)},Be=function(r,s,g){f&&Te(r),ve&&ve(r,s,g)},Le=function(r,s,g){f&&(je(),ae()),ye&&ye(r,s,g)},Ue=function(r,s,g){var b,x=(b=r.active)!==null&&b!==void 0?b:!0;if(x&&(ge||V||pe)){var p=n({},r),L=V?F:re;if(pe&&p.preFillColor){var R=re.areas.find(function(W){return W[q]===r[q]});R&&!R.preFillColor&&delete p.preFillColor}else(ge||V)&&(p.preFillColor=r.fillColor||y);var le=L.areas.map(function(W){return W[q]===r[q]?p:W});ne(function(W){return n(n({},W),{areas:le})}),V||(ze(),Te(r))}be&&(g.preventDefault(),be(r,s,g))},ie=function(r){var s=X&&te&&te>0?X/te:1;return D&&Z?r.map(function(g){return g/(E.naturalWidth/Z)}):r.map(function(g){return g*s})},ae=function(r){r===void 0&&(r=F),r.areas.forEach(function(s){return s.preFillColor?((0,_.default)(s.shape,ie(s.coords),s.preFillColor,s.lineWidth||$,s.strokeColor||fe,!0,B),!0):!1})},Ne=function(r){if(!r)return[0,0];var s=ie(r.coords);switch(r.shape){case"circle":return[s[0],s[1]];case"poly":case"rect":default:{var g=s.length/2,b=s.reduce(function(L,R,le){var W=L.y,$e=L.x;return le%2?{y:W+R/g,x:$e}:{y:W,x:$e+R/g}},{y:0,x:0}),x=b.y,p=b.x;return[p,x]}}},ze=function(){je(),ae(N)},qe=function(){return F.areas.map(function(r,s){var g=ie(r.coords),b=Ne(r),x=n(n({},r),{scaledCoords:g,center:b});return r.disabled?null:u.default.createElement("area",n({},r.preFillColor?{className:"img-mapper-area-highlighted"}:{},{key:r[q]||s.toString(),shape:r.shape,coords:g.join(","),onMouseEnter:function(p){return Be(x,s,p)},onMouseLeave:function(p){return Le(x,s,p)},onMouseMove:function(p){return(0,z.mouseMove)(x,s,p,t)},onMouseDown:function(p){return(0,z.mouseDown)(x,s,p,t)},onMouseUp:function(p){return(0,z.mouseUp)(x,s,p,t)},onTouchStart:function(p){return(0,z.touchStart)(x,s,p,t)},onTouchEnd:function(p){return(0,z.touchEnd)(x,s,p,t)},onClick:function(p){return Ue(x,s,p)},href:r.href,alt:"map"}))})};return u.default.createElement("div",{ref:K,id:"img-mapper",style:(0,O.default)(t).container},u.default.createElement("img",{ref:k,role:"presentation",className:"img-mapper-img",style:n(n({},(0,O.default)(t).img),E?{}:{display:"none"}),src:Re,useMap:"#".concat(F.name),alt:"map",onClick:function(r){return(0,z.imageClick)(r,t)},onMouseMove:function(r){return(0,z.imageMouseMove)(r,t)}}),u.default.createElement("canvas",{ref:H,className:"img-mapper-canvas",style:(0,O.default)().canvas}),u.default.createElement("map",{className:"img-mapper-map",name:F.name,style:(0,O.default)().map},G&&!m&&E&&qe()))};Y.defaultProps=j.ImageMapperDefaultProps,e.default=u.default.memo(Y,function(t,a){var f=d(d([],j.rerenderPropsList,!0),a.rerenderProps,!0),m=f.some(function(y){return t[y]!==a[y]});return(0,I.default)(t.map,a.map)&&!m})})(Ie);const yt=Ge(Ie),bt=T.div`
  position: relative;
  z-index: 4;
  max-width: 100%;
  height: auto;
  margin: 0 auto;

  ${P.tablet`
    display: none;
  `}
`,xt=({image:e,mapAreas:n,onSongEnd:c})=>{const l=S.useRef(),[o,h]=S.useState(""),[d,C]=S.useState(""),[u,I]=S.useState({top:0,left:0}),O=S.useRef(null),[j,_]=S.useState(!1),z=a=>{o===a.href?_(!j):(o&&j&&l.current.pause(),l.current.src=a.href,h(a.href),_(!0))},Y=a=>{const[f,m,y]=a.coords;C(a.title),I({left:f+-50,top:m-y+-20})},t=()=>{C(""),I({top:0,left:0})};return S.useEffect(()=>{const a=l.current;j?a.play():a.pause();const f=()=>{h(""),_(!1)};return a.addEventListener("ended",f),()=>{a.removeEventListener("ended",f)}},[j,o]),!n||!n.areas?(console.error("mapAreas is undefined or not structured correctly:",n),null):v.jsxs("div",{children:[v.jsxs(bt,{ref:O,children:[v.jsx(yt,{src:e,map:{name:"thoughts-map",areas:n.areas},onClick:z,onMouseEnter:Y,onMouseLeave:t,width:1779,height:860,fillColor:"transparent"}),d&&v.jsx(We,{top:u.top,left:u.left,show:d!=="",children:d})]}),v.jsx("audio",{ref:l,preload:"metadata"})]})},wt="/assets/goku-1RZqWYjh.mp3",Mt="/assets/ten_below-_smGq3xm.mp3",_t="/assets/up_in_clouds-BN1_QqkR.mp3",St="/assets/jp_legacy-C7fubQTd.mp3",Ct="/assets/Up%20All%20Night-sHINDiAF.mp3",Pt="/assets/Blitz-BwA3Iq41.mp3",Tt="/assets/call%20me%20back-D_xEP1Ja.mp3",jt="/assets/Changed_Things-C3g0O-lS.mp3",zt={name:"thoughts-map",areas:[{shape:"circle",coords:[1010,165,45],directive:"click-planets",alt:"Directive to click planets",title:"Click planets to play a song."},{shape:"circle",coords:[1150,140,72],href:wt,alt:"Goku",title:"Goku"},{shape:"circle",coords:[1320,98,72],href:Mt,alt:"Ten Below",title:"Ten Below"},{shape:"circle",coords:[1550,100,105],href:_t,alt:"Up In Clouds",title:"Up In Clouds"},{shape:"circle",coords:[1620,305,114],href:St,alt:"My Legacy",title:"My Legacy"},{shape:"circle",coords:[1530,400,48],href:Ct,alt:"Up All Night",title:"Up All Night"},{shape:"circle",coords:[1518,555,85],href:Pt,alt:"Blitz",title:"Blitz"},{shape:"circle",coords:[1380,640,44],href:Tt,specialPosition:"right",alt:"Call Me Back",title:"Call Me Back"},{shape:"circle",coords:[1250,750,120],href:jt,alt:"Changed Things",title:"Changed Things"}]},Wt=()=>{const[e,n]=S.useState(!1),[c,l]=S.useState(""),[o,h]=S.useState({show:!1,content:"",top:0,left:0,specialPosition:"default"}),d=Ke(),C=S.useMemo(()=>d.url("THOUGHTSDDD_2_htcj9g",{transformation:[{width:1920,crop:"scale"},{quality:"auto:good"},{fetch_format:"auto"}]}),[d]),u=S.useMemo(()=>d.url("mobile103_rxzgre",{transformation:[{width:386,crop:"scale"},{quality:"auto:good"},{fetch_format:"auto"}]}),[d]),I=S.useMemo(()=>d.url("tattoofingers_hdvyyn_emezhw",{width:455,height:455,crop:"fill",quality:"auto",fetch_format:"auto",secure:!0}),[d]),O=_=>{h({show:!0,content:_.title,top:_.coords[1],left:_.coords[0],specialPosition:_.specialPosition||"default"})},j=()=>{h({...o,show:!1})};return S.useEffect(()=>{const _=()=>{window.innerWidth<=480?l(u):l(C)};return _(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[C,u]),v.jsxs(Je,{id:"thoughts",children:[v.jsxs(et,{children:[v.jsx(xt,{mapAreas:zt,image:c,onAreaEnter:O,onAreaLeave:j,loading:"lazy"}),v.jsx(We,{top:o.top,left:o.left,show:o.show,specialPosition:o.specialPosition,children:o.content})]}),v.jsx(tt,{children:v.jsxs(nt,{children:[v.jsx(ot,{children:v.jsx(se,{src:I,alt:"singer with tattooed fingers on top of his head",position:"relative",width:"455px",height:"auto",borderRadius:"10px",border:"2px solid #ac94f4",zIndex:"10"})}),v.jsxs(rt,{children:[v.jsx(Q,{as:"p",color:"#fff",fontSize:"20px",fontWeight:"700",textTransform:"uppercase",marginBottom:"16px",letterSpacing:"1.4px",children:"Bam Quotes"}),v.jsx(Q,{as:"h1",color:"#ac94f4",fontSize:"44px",fontWeight:"600",marginBottom:"24px",tabletFontSize:"40px",phoneFontSize:"32px",children:"Thoughts on Music"}),v.jsx(Q,{fontSize:"20px",lineHeight:"26px",color:"#fff",marginTop:"30px",marginBottom:"25px",maxWidth:"440px",phoneFontSize:"18px",children:"'Music is a way for me to escape reality. It exposes my flaws, and pushes me to be a better person. Always believe in yourself, even when no one else does. Do not let life get in the way of following your dreams.'"}),v.jsx(Q,{fontSize:"16px",fontWeight:"500",marginTop:"12px",color:"#fff",children:"~Bamvsthewrld"}),v.jsx(Qe,{children:v.jsxs(Ye,{to:"comments",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,textDecoration:"none",style:{marginTop:"20px"},onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),className:"mb-8",children:["See More",v.jsx(Xe,{hover:e})]})})]})]})})]})};export{Wt as default};
