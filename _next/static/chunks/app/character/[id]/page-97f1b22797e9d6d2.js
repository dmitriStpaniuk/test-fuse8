(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[420],{6389:(e,r,t)=>{Promise.resolve().then(t.bind(t,6863))},9728:(e,r,t)=>{"use strict";t.d(r,{A:()=>i,P:()=>c});var s=t(5155);let a=(e,r)=>{if(e.length<=r)return e;let t=e.substring(0,r),s=t.lastIndexOf(" ");return -1===s?t+"...":t.substring(0,s)+"..."};var l=t(8173),n=t.n(l);let c={Alive:"text-[#267504]",Dead:"text-[#820A0A]",unknown:"text-gray-500"},i=e=>{let{character:r}=e;return(0,s.jsx)(n(),{href:"/character/".concat(r.id),className:"block hover:scale-100",children:(0,s.jsxs)("div",{className:"flex cursor-pointer flex-col items-center gap-8 border-2 border-gray-50 p-4 font-fira text-[30px] shadow-xl transition-all duration-100 hover:shadow-2xl",children:[(0,s.jsx)("h3",{className:"truncate  font-fira text-[25px] text-[#282626]",children:a(r.name,20)}),(0,s.jsxs)("div",{className:"flex w-full justify-between font-montserrat text-[14px] text-[#767676]",children:[(0,s.jsxs)("div",{children:["Status:"," ",(0,s.jsx)("span",{className:"font-bold ".concat(c[r.status]),children:r.status})]}),(0,s.jsxs)("div",{children:["Created: ",new Date(r.created).toLocaleDateString("ru-RU")]})]})]})})}},6863:(e,r,t)=>{"use strict";t.d(r,{default:()=>d});var s=t(5155),a=t(1819),l=t(6046),n=t(2115),c=t(5565),i=t(9728);let d=()=>{let e=(0,l.useParams)(),{searchCharacterById:r}=(0,a.j)(),[t,d]=(0,n.useState)(void 0);return((0,n.useEffect)(()=>{d(r(e.id))},[e.id,r]),t)?(0,s.jsx)("div",{className:"container mx-auto p-4 md:p-8",children:(0,s.jsx)("div",{className:"mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg",children:(0,s.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,s.jsx)("div",{className:"w-full md:w-11/12",children:(0,s.jsx)(c.default,{src:t.image,alt:t.name,width:300,height:300,className:"h-auto w-full object-cover"})}),(0,s.jsxs)("div",{className:"w-full p-4 md:w-2/3 md:p-8",children:[(0,s.jsx)("h1",{className:"mb-4 text-2xl font-bold md:text-3xl",children:t.name}),(0,s.jsxs)("div",{className:"mb-6 grid grid-cols-1 gap-4 md:grid-cols-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-gray-600",children:"Status"}),(0,s.jsx)("p",{className:"font-bold ".concat(i.P[t.status]),children:t.status})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-gray-600",children:"Species"}),(0,s.jsx)("p",{className:"font-semibold",children:t.species})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-gray-600",children:"Gender"}),(0,s.jsx)("p",{className:"font-semibold",children:t.gender})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-gray-600",children:"Origin"}),(0,s.jsx)("p",{className:"font-semibold",children:t.origin.name})]})]}),(0,s.jsxs)("div",{className:"mb-4 md:mb-6",children:[(0,s.jsx)("p",{className:"text-gray-600",children:"Last known location"}),(0,s.jsx)("p",{className:"font-semibold",children:t.location.name})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-gray-600",children:"Created"}),(0,s.jsx)("p",{className:"font-semibold",children:new Date(t.created).toLocaleDateString("ru-RU")})]})]})]})})}):(0,s.jsx)("div",{children:"Character not found"})}},1819:(e,r,t)=>{"use strict";async function s(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;try{let t=await fetch("https://rickandmortyapi.com/api/character/?name=".concat(encodeURIComponent(e),"&page=").concat(r)),s=await t.json();if(!t.ok||!s.results)return{data:null,error:"No characters found",status:404};return{data:s,error:null,status:200}}catch(e){return console.error("Search error:",e),{data:null,error:e instanceof Error?e.message:"Network error",status:500}}}t.d(r,{j:()=>n});var a=t(9827);let l={info:{count:0,pages:0,next:null,prev:null},results:[]},n=(0,a.v)((e,r)=>({searchTerm:"",result:{info:{count:0,pages:0,next:null,prev:null},results:[]},error:null,status:"idle",timerId:void 0,currentPage:1,setPage:t=>{e({currentPage:t}),r().searchCharactersByName(t)},nextPage:()=>{let{currentPage:t,result:s}=r();if(s.info.next){let s=t+1;e({currentPage:s}),r().searchCharactersByName(s)}},prevPage:()=>{let{currentPage:t,result:s}=r();if(s.info.prev){let s=t-1;e({currentPage:s}),r().searchCharactersByName(s)}},setSearchTerm:t=>{if(e({searchTerm:t}),t.length<3){e({result:l,status:"idle"});return}clearTimeout(r().timerId),e({timerId:setTimeout(async()=>{t.length>=3&&await r().searchCharactersByName(r().currentPage)},500)})},searchCharacterById:t=>{let s=r().result.results.find(e=>e.id===Number(t));if(!s){e({status:"error",error:"Character not found"});return}return s},searchCharactersByName:async t=>{let a=r().searchTerm;if(!(a.length<3)){e({status:"loading",error:null});try{let{data:r,error:n}=await s(a,t);if(n||!r){e({status:"error",error:n||"Ошибка поиска",result:l});return}e({status:"success",result:r,error:null})}catch(r){e({status:"error",error:r instanceof Error?r.message:"Ошибка сети",result:l})}}}}))}},e=>{var r=r=>e(e.s=r);e.O(0,[879,738,441,517,358],()=>r(6389)),_N_E=e.O()}]);