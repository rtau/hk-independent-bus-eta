import{j as t,u as v,r as c,C as I,b as q,A as S,p as J,w as k,D as M,q as H,x as B,y as O,e as ee,z as te}from"./index-CJMgYQ0G.js";import{c as L,T as ne,a as _,B as se,D as oe,I as re,b as ae,d as b,e as j,g as A,f as N,L as U,S as F,u as ie,P as le,v as W}from"./App-CN_8WmNx.js";import{S as ce}from"./Star-DSWcH6WU.js";import{N as ue,B as de,D as xe}from"./NoticeCard-ClgIYXTI.js";import{S as pe}from"./index-BKlxdzKy.js";import{l as C,M as ge,B as he,a as fe,C as me,b as be}from"./BaseTile-Zy4_3G0U.js";import{u as je}from"./hooks-CZaAo3_h.js";import{D as Ce}from"./DialogTitle-CByMK8l8.js";import{C as ve}from"./Close-Ux6OdmKC.js";import{S as ye}from"./Slider-C_lcUBCa.js";import{T as Re,a as z}from"./ToggleButtonGroup-BOvtGnWR.js";import{t as Se}from"./index-DJ_Y8GTM.js";const Te=L([t.jsx("circle",{cx:"12",cy:"17",r:"4"},"0"),t.jsx("path",{d:"M12 10.07c1.95 0 3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3S4.56 4.59 2 7.15l5 5c1.28-1.28 3.05-2.08 5-2.08"},"1")],"CompassCalibration"),De=L(t.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),Ie=L(t.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),Me=({homeTab:e,onChangeTab:s})=>{const{t:n}=v(),{collections:r}=c.useContext(I);return t.jsxs(ne,{value:e,onChange:(l,i)=>s(i,!0),sx:_e,variant:"scrollable",scrollButtons:!0,children:[t.jsx(_,{iconPosition:"start",icon:t.jsx(Te,{}),label:n("附近"),value:"nearby",disableRipple:!0}),t.jsx(_,{iconPosition:"start",icon:t.jsx(ce,{}),label:n("常用"),value:"saved",disableRipple:!0}),t.jsx(_,{iconPosition:"start",icon:t.jsx(se,{}),label:n("Collections"),value:"collections",disableRipple:!0}),r.map((l,i)=>t.jsx(_,{label:l.name,value:l.name,disableRipple:!0},`collection-${i}`))]})},ke=(e,s)=>{if(e==="saved"||e==="nearby"||e==="collections")return!0;for(let n=0;n<s.length;++n)if(e===s[n].name)return!0;return!1},_e={background:e=>e.palette.background.default,minHeight:"36px","& .MuiTab-root":{textTransform:"none",alignItems:"center",justifyContent:"center",paddingTop:0,paddingBottom:0,minHeight:"32px"},"& .MuiTabs-flexContainer":{justifyContent:"flex-start"}};C.Icon.Default.mergeOptions({iconUrl:null,iconRetinaUrl:null,shadowUrl:null,iconSize:null,iconAnchor:null,popupAnchor:null,tooltipAnchor:null,shadowSize:null,classNamePrefix:"leaflet-default-icon-"});C.Icon.Default.include({_needsInit:!0,_getIconUrl:function(e){var s=this.options.imagePath||C.Icon.Default.imagePath||"";return this._needsInit&&this._initializeOptions(s),s+C.Icon.prototype._getIconUrl.call(this,e)},_initializeOptions:function(e){this._setOptions("icon",G,e),this._setOptions("shadow",G,e),this._setOptions("popup",V),this._setOptions("tooltip",V),this._needsInit=!1},_setOptions:function(e,s,n){var r=this.options,l=r.classNamePrefix,i=s(l+e,n);for(var a in i)r[e+a]=r[e+a]||i[a]}});function G(e,s){var n=C.DomUtil.create("div",e,document.body),r=Oe(n),l=we(r,s),i=T(n,"width"),a=T(n,"height"),u=T(n,"margin-left"),o=T(n,"margin-top");return n.parentNode.removeChild(n),{Url:l[0],RetinaUrl:l[1],Size:[i,a],Anchor:[-u,-o]}}function V(e){var s=C.DomUtil.create("div",e,document.body),n=T(s,"margin-left"),r=T(s,"margin-top");return s.parentNode.removeChild(s),{Anchor:[n,r]}}function we(e,s){for(var n=/url\(['"]?([^"']*?)['"]?\)/gi,r=[],l=n.exec(e);l;)r.push(s?He(l[1]):l[1]),l=n.exec(e);return r}function He(e){return e.substr(e.lastIndexOf("/")+1)}function T(e,s){return parseInt(E(e,s),10)}function E(e,s){return C.DomUtil.getStyle(e,s)||C.DomUtil.getStyle(e,Be(s))}function Oe(e){var s=E(e,"background-image");return s&&s!=="none"?s:E(e,"cursor")}function Be(e){return e.replace(/-(\w)/g,function(s,n){return n.toUpperCase()})}const $e=q.forwardRef(({range:e,value:s,onChange:n},r)=>{const l=c.useRef(null),i=c.useRef(null),a=c.useRef(s).current,{geolocation:u}=c.useContext(S),[o,d]=c.useState(null);c.useImperativeHandle(r,()=>o,[o]);const g=c.useCallback(()=>{var x,p;o!==null&&((x=l.current)==null||x.setLatLng(o.getCenter()),(p=i.current)==null||p.setLatLng(o.getCenter()),n(o.getCenter()))},[n,o]);return c.useEffect(()=>(o==null||o.on("move",g),()=>{o==null||o.off("move",g)}),[g,o]),c.useEffect(()=>{var p;const x=(p=i.current)==null?void 0:p.getBounds();x&&(o==null||o.fitBounds(x,{animate:!1}))},[o,e]),t.jsxs(ge,{style:{height:"100%",position:"relative"},center:a,zoom:Ee,scrollWheelZoom:!1,ref:d,children:[t.jsx(he,{}),t.jsx(fe,{position:a,ref:l}),t.jsx(me,{center:a,radius:e,ref:i}),t.jsx(Le,{map:o,onChange:n}),t.jsx(be,{onClick:()=>{o==null||o.setView(u.current,o==null?void 0:o.getZoom(),{animate:!0})}})]})}),Ee=14,Le=({map:e,onChange:s})=>(je("click",n=>{e.setView(n.latlng,e.getZoom(),{animate:!0}),s(n.latlng)}),null),Ue=({open:e,onClose:s})=>{const{geolocation:n,manualGeolocation:r,searchRange:l,setManualGeolocation:i,setSearchRange:a}=c.useContext(S),{t:u}=v(),[o,d]=c.useState({geolocation:r??n.current,searchRange:l}),g=c.useCallback(()=>{i(o.geolocation),a(o.searchRange),s()},[o,i,a,s]),x=c.useCallback(h=>{d(f=>({...f,geolocation:h}))},[]),p=c.useCallback(h=>{d(f=>({...f,searchRange:h}))},[]),m=c.useCallback(h=>{const{distance:f,unit:y}=J(h);return`${f}${u(y)}`},[u]);return t.jsxs(oe,{open:e,onClose:g,sx:Fe,children:[t.jsxs(Ce,{sx:Pe,children:[u("自訂搜尋範圍"),t.jsx(re,{onClick:g,children:t.jsx(ve,{})})]}),t.jsxs(ae,{children:[t.jsx($e,{range:o.searchRange,value:o.geolocation,onChange:x}),t.jsx(b,{sx:{px:4,py:5},children:t.jsx(ye,{sx:Ae,"aria-label":"Range",value:$(o.searchRange,w,R),valueLabelDisplay:"on",marks:R.map((h,f)=>({label:m(w[f]),value:h})),min:R[0],max:R[R.length-1],step:250,scale:h=>$(h,R,w),valueLabelFormat:h=>m(h),onChange:(h,f)=>p($(f,R,w))})})]})]})},Fe={"& .MuiPaper-root":{width:"100%",height:"calc(100dvh - 100px)"},"& .MuiDialogContent-root":{p:0,display:"flex",flexDirection:"column"}},Pe={backgroundColor:e=>e.palette.background.default,color:e=>e.palette.primary.main,display:"flex",justifyContent:"space-between"},Ae={"& .MuiSlider-mark":{backgroundColor:"#bfbfbf",height:8}},R=[0,1e3,2e3,3e3,4e3,5e3],w=[20,100,200,400,2e3,4e3],$=(e,s,n)=>{if(e<=s[0])return n[0];for(let r=1;r<s.length;++r)if(e<=s[r])return n[r-1]+(e-s[r-1])*(n[r]-n[r-1])/(s[r]-s[r-1]);return n[n.length-1]},Ne=()=>{const{t:e}=v(),{searchRange:s,setSearchRange:n}=c.useContext(S),[r,l]=c.useState(!1);return t.jsxs(b,{sx:We,children:[t.jsxs(j,{variant:"caption",children:[e("搜尋範圍（米）"),":"]}),t.jsxs(Re,{value:k.includes(s)?s:"custom",onChange:(i,a)=>{k.includes(a)?n(a):l(!0)},"aria-label":"search range",size:"small",exclusive:!0,children:[k.map(i=>{const{distance:a}=J(i);return t.jsx(z,{sx:X,disableRipple:!0,value:i,"aria-label":i.toString(),children:a},`range-${i}`)}),t.jsxs(z,{sx:X,disableRipple:!0,value:"custom","aria-label":"custom",children:[e("自訂"),!k.includes(s)&&`(${s})`]},"range-custom")]}),t.jsx(Ue,{open:r,onClose:()=>l(!1)})]})},We={position:"sticky",top:0,display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap",listStyle:"none",px:0,py:1,m:0,borderRadius:0,fontSize:14,borderBottomWidth:1,borderBottomColor:e=>e.palette.mode==="dark"?A[900]:A[200],borderBottomStyle:"solid"},X={height:30,px:2},K=({name:e,routeStrings:s,defaultExpanded:n=!0})=>{const[r,l]=c.useState(n),i=c.useMemo(()=>s.split("|").filter(a=>a)??[],[s]);return i.length===0?t.jsx(t.Fragment,{}):t.jsxs(b,{children:[t.jsxs(b,{sx:ze,onClick:()=>l(a=>!a),children:[t.jsx(j,{variant:"body1",m:1,fontWeight:700,children:e}),t.jsx(b,{children:r?t.jsx(De,{}):t.jsx(Ie,{})})]}),t.jsx(N,{}),r&&t.jsx(U,{disablePadding:!0,children:i.map((a,u)=>!!a&&t.jsx(F,{routeId:a},`route-${e}-${u}`))}),t.jsx(N,{})]})},ze={display:"flex",alignItems:"center",justifyContent:"space-between",mx:1,cursor:"pointer"},Ge=({isFocus:e})=>{const{t:s}=v(),{manualGeolocation:n,geolocation:r,isRouteFilter:l,searchRange:i}=c.useContext(S),{db:{routeList:a,stopList:u,serviceDayMap:o},isTodayHoliday:d}=c.useContext(M),[g,x]=c.useState(n??r.current),p=c.useMemo(()=>Se(f=>{x(f)},500),[]);c.useEffect(()=>{const f=setInterval(()=>{p(n??r.current)},1e3);return p(n??r.current),()=>{clearInterval(f)}},[n,r,p]);const m=c.useMemo(()=>Ve({geolocation:g,stopList:u,routeList:a,isRouteFilter:l,isTodayHoliday:d,serviceDayMap:o,searchRange:i}),[g,u,a,l,d,o,i]),h=c.useMemo(()=>Object.values(m).map(f=>f.split("|").every(y=>y==="")).every(Boolean),[m]);return e?h?t.jsx(b,{sx:Y,children:t.jsx(j,{sx:{marginTop:5},fontWeight:"700",children:s("附近未有任何路線")})}):t.jsx(b,{sx:Y,children:Object.entries(m).map(([f,y])=>t.jsx(K,{name:s(f),routeStrings:y},`nearby-${f}`))}):t.jsx(t.Fragment,{})},Ve=({geolocation:e,stopList:s,routeList:n,isRouteFilter:r,isTodayHoliday:l,serviceDayMap:i,searchRange:a})=>{const u=Object.entries(s).map(o=>[...o,H(o[1].location,e)]).filter(o=>o[2]<a).sort((o,d)=>o[2]-d[2]).slice(0,20).reduce((o,[d])=>(Object.entries(n).forEach(([g,x])=>{["kmb","lrtfeeder","lightRail","gmb","ctb","nlb"].forEach(p=>{x.stops[p]&&x.stops[p].includes(d)&&(o[B[p]]===void 0&&(o[B[p]]=[]),o[B[p]].push(g+"/"+x.stops[p].indexOf(d)))})}),o),{bus:[],mtr:[],lightRail:[],minibus:[],ferry:[]});return Object.entries(u).reduce((o,[d,g])=>(o[d]=O(g,l,r,n,s,i,e),o),{})},Y={display:"flex",flexDirection:"column",gap:2,flex:1,minHeight:"100dvh"},Xe=({isFocus:e})=>{const{t:s}=v(),{geolocation:n,isRouteFilter:r}=c.useContext(S),{savedEtas:l}=c.useContext(I),{db:{routeList:i,stopList:a,serviceDayMap:u},isTodayHoliday:o}=c.useContext(M),d=c.useMemo(()=>Ye({savedEtas:l,geolocation:n.current,stopList:a,routeList:i,isRouteFilter:r,isTodayHoliday:o,serviceDayMap:u}),[l,n,i,a,r,o,u]),g=c.useMemo(()=>d.every(x=>!x),[d]);return e?g?t.jsx(b,{sx:Ze,children:t.jsx(j,{sx:{marginTop:5},fontWeight:"700",children:s("未有收藏路線")})}):t.jsx(U,{disablePadding:!0,sx:{minHeight:"100dvh"},children:d.map((x,p)=>!!x&&t.jsx(F,{routeId:x},`route-shortcut-${p}`))}):t.jsx(t.Fragment,{})},Ye=({savedEtas:e,geolocation:s,stopList:n,routeList:r,isRouteFilter:l,isTodayHoliday:i,serviceDayMap:a})=>O(e.filter((u,o,d)=>d.indexOf(u)===o&&u.split("/")[0]in r).map((u,o,d)=>{const[g,x]=u.split("/"),p=Object.values(r[g].stops).sort((m,h)=>h.length-m.length)[0];if(x!==void 0&&parseInt(x,10)<p.length)return[u,H(s,n[p[Number(x)]].location),d.length-o];{const m=p.map(h=>[h,H(s,n[h].location)]).sort(([,h],[,f])=>h<f?-1:1)[0][0];return[u,H(s,n[m].location),d.length-o]}}).sort((u,o)=>u[2]-o[2]).map(u=>u[0]).slice(0,40).reverse(),i,l,r,n,a,s).split("|"),Ze={display:"flex",flexDirection:"column",gap:2,flex:1,minHeight:"100dvh"},qe=({isFocus:e})=>{const{t:s}=v(),{geolocation:n,isRouteFilter:r}=c.useContext(S),{collections:l}=c.useContext(I),{db:{routeList:i,stopList:a,serviceDayMap:u},isTodayHoliday:o}=c.useContext(M),d=c.useMemo(()=>Je({collections:l,geolocation:n.current,stopList:a,routeList:i,isRouteFilter:r,isTodayHoliday:o,serviceDayMap:u}),[l,n,a,i,r,o,u]);return e?d.length===0?t.jsx(b,{sx:Z,children:t.jsx(j,{sx:{marginTop:5},fontWeight:700,children:s("未有收藏路線")})}):t.jsxs(b,{sx:Z,children:[d.map(({name:g,routes:x,defaultExpanded:p},m)=>t.jsx(K,{name:g,routeStrings:x,defaultExpanded:p},`collection-${m}`)),!d.reduce((g,{routes:x})=>g||x.split("|").filter(p=>!!p).length>0,!1)&&t.jsx(j,{sx:{marginTop:5},fontWeight:700,children:s("未有收藏路線")})]}):t.jsx(t.Fragment,{})},Je=({collections:e,geolocation:s,stopList:n,routeList:r,isRouteFilter:l,isTodayHoliday:i,serviceDayMap:a})=>e.map(({name:u,list:o,schedules:d})=>({name:u,routes:o,defaultExpanded:d.reduce((g,{day:x,start:p,end:m})=>{if(g)return g;const h=new Date;h.setUTCHours(h.getUTCHours()+8);const f=h.getUTCDay();if(i&&x===0||x===f){let y=p.hour*60+p.minute,Q=m.hour*60+m.minute,P=(h.getUTCHours()*60+h.getUTCMinutes())%1440;return y<=P&&P<=Q}return!1},!1)})).map(u=>({...u,routes:O(u.routes,i,l,r,n,a,s)})),Z={display:"flex",flexDirection:"column",gap:2,minHeight:"100dvh"},Ke=({collection:e,isFocus:s})=>{const{t:n}=v(),{geolocation:r,isRouteFilter:l}=c.useContext(S),{db:{routeList:i,stopList:a,serviceDayMap:u},isTodayHoliday:o}=c.useContext(M),d=c.useMemo(()=>Qe({savedEtas:e.list,geolocation:r.current,stopList:a,routeList:i,isRouteFilter:l,isTodayHoliday:o,serviceDayMap:u}),[e,r,a,i,l,o,u]),g=c.useMemo(()=>d.every(x=>!x),[d]);return s?g?t.jsx(b,{sx:et,children:t.jsx(j,{sx:{marginTop:5},fontWeight:700,children:t.jsx("b",{children:n("收藏中未有路線")})})}):t.jsx(U,{disablePadding:!0,sx:{minHeight:"100dvh"},children:d.map((x,p)=>!!x&&t.jsx(F,{routeId:x},`route-shortcut-${p}`))}):t.jsx(t.Fragment,{})},Qe=({savedEtas:e,geolocation:s,stopList:n,routeList:r,isRouteFilter:l,isTodayHoliday:i,serviceDayMap:a})=>O(e,i,l,r,n,a,s).split("|"),et={display:"flex",flexDirection:"column",gap:2,flex:1,minHeight:"100dvh"},tt=q.forwardRef(({homeTab:e,onChangeTab:s},n)=>{const{collections:r}=c.useContext(I),l=c.useRef(e);c.useImperativeHandle(n,()=>({changeTab:a=>{l.current=a}}));const i=c.useCallback(()=>{let a=D.indexOf(l.current);if(a!==-1)return a;for(let u=0;u<r.length;++u)if(r[u].name===l.current)return u+D.length;return-1},[r]);return t.jsxs(t.Fragment,{children:[e==="nearby"?t.jsx(Ne,{}):null,t.jsxs(pe,{index:i(),onChangeIndex:a=>{s(a<D.length?D[a]:r[a-D.length].name)},children:[t.jsx(Ge,{isFocus:e==="nearby"}),t.jsx(Xe,{isFocus:e==="saved"}),t.jsx(qe,{isFocus:e==="collections"}),r.map(a=>t.jsx(Ke,{collection:a,isFocus:e===a.name},`list-${a.name}`))]})]})}),D=["nearby","saved","collections"],ht=()=>{const{AppTitle:e}=c.useContext(M),{collections:s}=c.useContext(I),{t:n}=v(),r=ee(),{collectionName:l}=ie(),i=c.useRef(null),a=l??localStorage.getItem("homeTab"),[u,o]=c.useState(ke(a,s)?a:"nearby");c.useEffect(()=>{te({title:`${n("Dashboard")} - ${n(e)}`,description:n("home-page-description"),lang:r})},[r,e,n]);const d=(g,x=!1)=>{o(g),localStorage.setItem("homeTab",g),i.current&&x&&i.current.changeTab(g)};return t.jsxs(le,{sx:nt,square:!0,elevation:0,children:[t.jsx(j,{component:"h1",style:W,children:`${n("Dashboard")} - ${n(e)}`}),t.jsx(j,{component:"h2",style:W,children:n("home-page-description")}),t.jsx(Me,{homeTab:u,onChangeTab:d}),t.jsx(ue,{}),t.jsx(de,{}),t.jsx(xe,{}),t.jsx(tt,{ref:i,homeTab:u,onChangeTab:d})]})},nt={background:e=>e.palette.mode==="dark"?e.palette.background.default:"white",textAlign:"center",display:"flex",flexDirection:"column",overflow:"auto",width:"100%",height:"100%"};export{ht as default};
