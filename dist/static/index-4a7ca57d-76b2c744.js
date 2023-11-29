import{r as u,i as o,aR as re,B as U,bi as oe,aS as ie,cU as ae,ai as H,ak as ce,ao as le,b0 as ue,j as v,aa as de,cV as me,av as pe,cW as fe,cX as he,cY as ye,b4 as ge,bx as Te,ap as V,k as w,K as A,v as Le,c3 as Ie,m as C,l as D,aP as be,F as Se,S as Re,cZ as Pe,C as k,ab as ve,ag as _e,ah as Ce,bF as O,c_ as Ee,c$ as xe,d0 as De,d1 as Fe,bo as M,a2 as je,d2 as we,cD as Oe,cE as $e,br as Ae,d3 as ke,d4 as Me,c6 as N,c8 as Ne,d5 as Be,b_ as We,bs as qe,bG as Ue,d6 as He,d7 as Ve,d8 as Ye,b$ as Ge}from"./desk-2d9c1d72-b05c438a.js";import{useDeskTool as Ke,useDeskToolSetting as B,Delay as Xe}from"./index-def00177-cfe5b9a0.js";import{P as ze}from"./PaneItem-61ee1040-bf4946e5.js";import"./index-72e54f72.js";const W=100,$=2e3,Y={by:[{field:"_updatedAt",direction:"desc"}]},Qe={};function Ze(e,s){return e._id?V(e._id):"item-".concat(s)}function Je(e){return De(e).map(s=>({...s.draft||s.published,hasPublished:!!s.published,hasDraft:!!s.draft}))}const et=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function tt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=e.match(et);if(!n)return null;const t=(n[1]||n[2]).trim().replace(/^["']|["']$/g,"");if(t[0]==="$"){const a=t.slice(1),c=s[a];return typeof c=="string"?c:null}return t}function nt(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function st(e){return e.map(s=>[rt(s),(s.direction||"").toLowerCase()].map(n=>n.trim()).filter(Boolean).join(" ")).join(",")}function rt(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function ot(e,s){const n=e.by.map(t=>{if(t.mapWith)return t;const a=it(s,t.field);return a?ct(a,"datetime")?{...t,mapWith:"dateTime"}:a.jsonType==="string"?{...t,mapWith:"lower"}:t:t});return n.every((t,a)=>t===e.by[a])?e:{...e,by:n}}function it(e,s){const n=pe(s);let t=e;for(const a of n){if(!t)return;if(typeof a=="string"){t=at(t,a);continue}if(!(fe(a)||he(a))||t.jsonType!=="array")return;const[r,i]=t.of||[];if(i||!r)return;if(!ye(r)){t=r;continue}const[f,h]=r.to||[];if(h||!f)return;t=f}return t}function at(e,s){if(!("fields"in e))return;const n=e.fields.find(t=>t.name===s);return n?n.type:void 0}function ct(e,s){let n=e.type;for(;n;){if(n.name===s||!n.type&&n.jsonType===s)return!0;n=n.type}return!1}function lt(e){const{childItemId:s,error:n,filterIsSimpleTypeContraint:t,fullList:a,isActive:c,isLoading:r,items:i,layout:f,onListChange:h,onRetry:l,showIcons:y}=e,S=H(),{collapsed:b}=ge(),{collapsed:I,index:g}=Te(),[R,P]=u.useState(!1);u.useEffect(()=>{if(I)return;const d=setTimeout(()=>{P(!0)},0);return()=>{clearTimeout(d)}},[I]);const T=u.useCallback(d=>{const L=V(d._id),m=s===L;return o(ze,{icon:y===!1?!1:void 0,id:L,pressed:!c&&m,selected:c&&m,layout:f,schemaType:S.get(d._type),value:d})},[s,c,f,S,y]),p=u.useMemo(()=>{if(!R)return null;if(n)return o(w,{align:"center",direction:"column",height:"fill",justify:"center",children:o(A,{width:1,children:v(Le,{paddingX:4,paddingY:5,space:4,children:[o(Ie,{as:"h3",children:"Could not fetch list items"}),v(C,{as:"p",children:["Error: ",o("code",{children:n.message})]}),l&&o(D,{children:o(U,{icon:be,onClick:l,text:"Retry",tone:"primary"})})]})})});if(i===null)return o(w,{align:"center",direction:"column",height:"fill",justify:"center",children:o(Xe,{ms:300,children:v(Se,{children:[o(Re,{muted:!0}),o(D,{marginTop:3,children:o(C,{align:"center",muted:!0,size:1,children:"Loading documents…"})})]})})});if(!r&&i.length===0)return o(w,{align:"center",direction:"column",height:"fill",justify:"center",children:o(A,{width:1,children:o(D,{paddingX:4,paddingY:5,children:o(C,{align:"center",muted:!0,size:2,children:t?"No documents of this type":"No matching documents"})})})});const d=a&&i.length===$;return v(D,{padding:2,children:[i.length>0&&o(Pe,{gap:1,getItemKey:Ze,items:i,renderItem:T,onChange:h},"".concat(g,"-").concat(I)),r&&o(k,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:o(C,{align:"center",muted:!0,size:1,children:"Loading…"})}),d&&o(k,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:v(C,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",$," documents"]})})]})},[n,t,a,h,r,i,l,T,R,I,g]);return o(ve,{overflow:b?void 0:"auto",children:p})}const G=u.memo(e=>{let{index:s,initialValueTemplates:n=[],menuItems:t=[],menuItemGroups:a=[],setLayout:c,setSortOrder:r,title:i}=e;const{features:f}=Ke(),h=u.useMemo(()=>({setLayout:l=>{let{layout:y}=l;c(y)},setSortOrder:l=>{r(l)}}),[c,r]);return o(re,{backButton:f.backButton&&s>0&&o(U,{as:oe,"data-as":"a",icon:ie,mode:"bleed"}),title:i,actions:o(ae,{initialValueTemplateItems:n,actionHandlers:h,menuItemGroups:a,menuItems:t})})});G.displayName="DocumentListPaneHeader";const ut={result:null,error:!1},dt=e=>({result:{documents:e},loading:!1,error:!1}),mt=e=>({result:null,loading:!1,error:e}),pt=function(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=new Fe,t=n.next.bind(n);return e.pipe(M(r=>({client:r.client,query:r.query,params:r.params})),je(we),Oe(1),$e()).pipe(Ae(r=>{const i=ke(r.client,r.query,r.params,s).pipe(M(dt),Me());return N(O({loading:!0}).pipe(Ne(400),Be(i)),i)})).pipe(We(ut),qe((r,i)=>Ue(O(mt(r)),N(He(window,"online"),n).pipe(Ve(1),Ye(i)))),Ge((r,i)=>({...r,...i,onRetry:t})))};function ft(e){var s;const{apiVersion:n,filter:t,params:a,sortOrder:c}=e,r=_e(Ce),[i,f]=u.useState(!1),h=u.useRef(i),[l,y]=u.useState(null),S=(l==null?void 0:l.error)||null,b=(l==null?void 0:l.loading)||l===null,I=l==null?void 0:l.onRetry,g=(s=l==null?void 0:l.result)==null?void 0:s.documents,R=u.useMemo(()=>g?Je(g):null,[g]),P=u.useMemo(()=>{const p=c==null?void 0:c.extendedProjection,d=["_id","_type"],L=d.join(","),m=(c==null?void 0:c.by)||[],_=i?$:W,E=m.length>0?m:Y.by,x=st(E);if(p){const F=d.concat(p).join(",");return["*[".concat(t,"] {").concat(F,"}"),"order(".concat(x,") [0...").concat(_,"]"),"{".concat(L,"}")].join("|")}return"*[".concat(t,"]|order(").concat(x,")[0...").concat(_,"]{").concat(L,"}")},[t,i,c]),T=u.useCallback(p=>{let{toIndex:d}=p;b||h.current||d>=W/2&&(f(!0),h.current=!0)},[b]);return u.useEffect(()=>{const p=i?m=>Boolean(m.result):()=>!0;y(m=>m?{...m,loading:!0}:null);const L=pt(O({client:r,query:P,params:a}),{apiVersion:n,tag:"desk.document-list"}).pipe(Ee(p)).subscribe(y);return()=>L.unsubscribe()},[n,r,i,P,a]),u.useEffect(()=>{y(null),f(!1),h.current=!1},[t,a,c,n]),{error:S,fullList:i,handleListChange:T,isLoading:b,items:R,onRetry:I}}const q=[];function ht(e){const s=u.useRef(e);return xe(s.current,e)||(s.current=e),s.current}const It=u.memo(function(s){const{childItemId:n,index:t,isActive:a,isSelected:c,pane:r,paneKey:i}=s,f=H(),{name:h}=ce(),{defaultLayout:l="default",displayOptions:y,initialValueTemplates:S=q,menuItems:b,menuItemGroups:I,options:g,title:R}=r,{apiVersion:P,defaultOrdering:T=q,filter:p}=g,d=ht(g.params||Qe),L=r.source,m=u.useMemo(()=>tt(p,d),[p,d]),_=(y==null?void 0:y.showIcons)!==!1,[E,x]=B(m,"layout",l),F=u.useMemo(()=>(T==null?void 0:T.length)>0?{by:T}:Y,[T]),[j,K]=B(m,"sortOrder",F),X=m&&j?ot(j,f.get(m)):j,z=le(X),Q=nt(p),{error:Z,fullList:J,handleListChange:ee,isLoading:te,items:ne,onRetry:se}=ft({filter:p,params:d,sortOrder:z,apiVersion:P});return o(ue,{name:L||h,children:v(de,{currentMaxWidth:350,id:i,maxWidth:640,minWidth:320,selected:c,children:[me,o(G,{index:t,initialValueTemplates:S,menuItems:b,menuItemGroups:I,setLayout:x,setSortOrder:K,title:R}),o(lt,{childItemId:n,error:Z,filterIsSimpleTypeContraint:Q,fullList:J,isActive:a,isLoading:te,items:ne,layout:E,onListChange:ee,onRetry:se,showIcons:_})]})})});export{It as default};