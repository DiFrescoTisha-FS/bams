import{r as s,p as n,m as i,P as e,u,j as o,I as h,M as c,S as f,B as x,a as b,b as w}from"./index-rfoqq5J0.js";const y=(t=768)=>{const[a,d]=s.useState(window.innerWidth<=t);return s.useEffect(()=>{const r=()=>{d(window.innerWidth<=t)};return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[t]),a},$=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-height: 860px;
  z-index: 1;

  ${i.tablet`
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: auto;
  `}
`,z=n.div`
  position: absolute;
  height: 860px;
  max-height: 860px;
  width: 100%;
  background-size: cover;
  z-index: 2;
`,S=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  height: auto;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 800;

  ${i.tablet`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  `}

${i.phone`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-top: 40px;
    margin-bottom: -50px;
  `}
`,T=n.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  gap: 20px;

  ${i.tablet`
    flex-direction: column;
  `}

${i.phone`
    flex-direction: column;
    gap: 0;
  `}
`,j=n.div`
  width: 100%;
  margin-right: 18px;
  order: 1;

  ${i.tablet`
    order: 2;
    margin-bottom: 20px;
  `}

  ${i.phone`
    order: 2;
    margin-top: -60px;
    margin-bottom: 60px;
  `}
`;n.div`
  max-width: 455px;
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
  order: 2;
  margin-bottom: 16px;

  ${i.tablet`
    width: 125%;
    order: 1;
    margin-bottom: 20px;
    margin-left: 12%;
  `}

  ${i.phone`
    order: 1;
    text-align: left;
    margin-bottom: -50px;
  `}
`;const p=n.img.withConfig({shouldForwardProp:t=>!["position","zIndex","transform","top","right","left","bottom","borderRadius","border","width","height","tabletHeight","mobileHeight"].includes(t)})`
    position: ${t=>t.position||"absolute"};
    width: ${t=>t.width||"auto"};
    height: ${t=>t.height||"auto"};
    top: ${t=>t.top||"auto"};
    right: ${t=>t.right||"auto"};
    left: ${t=>t.left||"auto"};
    bottom: ${t=>t.bottom||"auto"};
    z-index: ${t=>t.zIndex||"auto"};
    transform: ${t=>t.transform||"none"};
    border-radius: ${t=>t.borderRadius||"0"};
    border: ${t=>t.border||"none"};
  
    ${i.tablet`
      width: 80%;
      height: auto;
    `}
  
    ${i.phone`
      width: 90%;
      height: auto;
      margin-bottom: -10%;
    `}
  `;p.propTypes={position:e.string,zIndex:e.oneOfType([e.string,e.number]),transform:e.string,top:e.oneOfType([e.string,e.number]),right:e.oneOfType([e.string,e.number]),left:e.oneOfType([e.string,e.number]),bottom:e.oneOfType([e.string,e.number]),borderRadius:e.string,border:e.string,width:e.oneOfType([e.string,e.number]),height:e.oneOfType([e.string,e.number]),tabletHeight:e.oneOfType([e.string,e.number]),mobileHeight:e.oneOfType([e.string,e.number])};p.defaultProps={position:"absolute",width:"auto",height:"auto",top:"auto",right:"auto",left:"auto",bottom:"auto",zIndex:"auto",transform:"none",borderRadius:"0",border:"none"};const l=n.p.withConfig({shouldForwardProp:t=>!["fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textTransform","marginTop","marginBottom","textAlign","position","maxWidth","tabletFontSize","phoneFontSize"].includes(t)}).attrs(t=>({as:t.as||"p"}))`
    color: ${t=>t.color||"#fff"};
    font-size: ${t=>t.fontSize||"20px"};
    font-weight: ${t=>t.fontWeight||"400"};
    font-family: ${t=>t.fontFamily||"inherit"};
    line-height: ${t=>t.lineHeight||"normal"};
    letter-spacing: ${t=>t.letterSpacing||"normal"};
    text-transform: ${t=>t.textTransform||"none"};
    margin-top: ${t=>t.marginTop||"0"};
    margin-bottom: ${t=>t.marginBottom||"0"};
    text-align: ${t=>t.textAlign||"left"};
    position: ${t=>t.position||"relative"};
    max-width: ${t=>t.maxWidth||"none"};
  
    ${i.tablet`
      font-size: ${t=>t.tabletFontSize||t.fontSize};
      text-align: ${t=>t.textAlign||"center"};
    `}
  
    ${i.phone`
      font-size: ${t=>t.phoneFontSize||t.fontSize};
      text-align: ${t=>t.textAlign||"center"};
    `}
  `;l.propTypes={as:e.string,color:e.string,fontSize:e.string,fontWeight:e.string,fontFamily:e.string,lineHeight:e.string,letterSpacing:e.string,textTransform:e.string,marginTop:e.string,marginBottom:e.string,textAlign:e.string,position:e.string,maxWidth:e.string,tabletFontSize:e.string,phoneFontSize:e.string};const v=s.memo(()=>{const[t,a]=s.useState(!1),d=y(),r=u(),m=s.useMemo(()=>r.url("MUSICBG_2_zy5clw",{transformation:[{width:1920,crop:"scale"},{quality:"auto:good"},{fetch_format:"auto"}]}),[r]),g=s.useMemo(()=>r.url("musicTablet_vlliat",{transformation:[{width:480,crop:"scale"},{quality:"auto"},{fetch_format:"auto"}]}),[r]);return o.jsxs($,{id:"music",children:[o.jsx(z,{children:o.jsx(p,{src:d?g:m,alt:"Planets",position:"absolute",width:"100%",height:"auto",objectFit:"contain",top:0,left:0,loading:"lazy"})}),o.jsx(S,{children:o.jsxs(T,{children:[o.jsx(h,{children:o.jsx(c,{children:o.jsx(f,{title:"iframe",width:"100%",height:"450px",allow:"autoplay",loading:"lazy",sandbox:"allow-scripts allow-same-origin allow-presentation",className:"embed-responsive-item",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1761927219&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"})})}),o.jsxs(j,{children:[o.jsx(l,{as:"p",color:"#fff",fontSize:"20px",fontWeight:"700",textTransform:"uppercase",marginBottom:"16px",letterSpacing:"1.4px",children:"Bam Beats"}),o.jsx(l,{as:"h1",color:"#ac94f4",fontSize:"44px",fontWeight:"600",marginBottom:"24px",tabletFontSize:"40px",phoneFontSize:"32px",children:"SoundCloud Playlist"}),o.jsx(l,{fontSize:"20px",lineHeight:"26px",color:"#fff",marginTop:"30px",marginBottom:"25px",maxWidth:"440px",phoneFontSize:"18px",children:"SoundCloud is the number one platform used by Bam fans. You can stay up to date with the latest events and music media produced by Trapstar."}),o.jsx(x,{children:o.jsxs(b,{to:"new",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:["Continue  ",o.jsx(w,{hover:t})]})})]})]})})]})});v.displayName="MusicSection";export{v as default};
