(this["webpackJsonpmemory-trainer"]=this["webpackJsonpmemory-trainer"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(30)},,,,,,,,,function(e,t,n){},function(e,t,n){var a={"./Screenshot 2024-08-17 at 11.31.31.png":14,"./Screenshot 2024-08-17 at 11.31.39.png":15,"./Screenshot 2024-08-17 at 11.31.47.png":16,"./Screenshot 2024-08-17 at 11.31.54.png":17,"./Screenshot 2024-08-18 at 11.54.24.png":18,"./Screenshot 2024-08-18 at 11.54.46.png":19,"./Screenshot 2024-08-18 at 11.54.58.png":20,"./Screenshot 2024-08-18 at 11.55.11.png":21,"./Screenshot 2024-08-18 at 11.55.28.png":22,"./Screenshot 2024-08-18 at 11.55.40.png":23,"./Screenshot 2024-08-18 at 11.55.55.png":24,"./Screenshot 2024-08-18 at 11.56.06.png":25};function r(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=l,e.exports=r,r.id=13},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-17 at 11.31.31.9c982553.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-17 at 11.31.39.96fa0165.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-17 at 11.31.47.0c83b3a5.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-17 at 11.31.54.60d60dfd.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-18 at 11.54.24.8c2f9c65.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-18 at 11.54.46.22b96af0.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-18 at 11.54.58.0997ef8b.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-18 at 11.55.11.16e40b79.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-18 at 11.55.28.85f79131.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-18 at 11.55.40.49935dcf.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-18 at 11.55.55.76ee5624.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-18 at 11.56.06.eb9757e4.png"},function(e,t,n){e.exports=n.p+"static/media/result_fail.1506875c.mp3"},function(e,t,n){e.exports=n.p+"static/media/result_success.cf61fc8e.mp4"},function(e,t,n){e.exports=n.p+"static/media/success.691275a9.gif"},function(e,t,n){e.exports=n.p+"static/media/try_again.75c28eca.gif"},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2),c=n.n(l);n(12);const o=(i=n(13)).keys().map(e=>i(e));var i;const s={width:"30vw",maxWidth:"150px",minWidth:"100px",height:"auto",marginBottom:"10px"},u={...s,border:"3px solid blue"},m={...s,border:"6px solid lime"},p={...s,border:"6px solid red"};var d=()=>{const[e,t]=Object(a.useState)(""),[l,c]=Object(a.useState)(0),[i,d]=Object(a.useState)([]),[h,g]=Object(a.useState)([]),[f,x]=Object(a.useState)([]),[b,E]=Object(a.useState)(!1),[y,S]=Object(a.useState)(2),[v,w]=Object(a.useState)(100),[O,j]=Object(a.useState)(!0),[k,C]=Object(a.useState)(0),[M,I]=Object(a.useState)(0),[W,T]=Object(a.useState)(0),[F,R]=Object(a.useState)(!1),[z,D]=Object(a.useState)([]),A=Object(a.useRef)(null),P=Object(a.useRef)(null),_=Object(a.useRef)(null),B=Object(a.useCallback)(()=>{const e=((e,t)=>{const n=[];for(;n.length<t;){const t=Math.floor(Math.random()*e.length);n.includes(e[t])||n.push(e[t])}return n})(o,y);d(e),x([]),c(1),w(100),j(!0),R(!0)},[y]),L=Object(a.useCallback)(()=>{const e=((e,t,n)=>{const a=Math.floor(n/2),r=[...e];for(;r.length<n+a;){const e=Math.floor(Math.random()*t.length);r.includes(t[e])||r.push(t[e])}return r.sort(()=>.5-Math.random()),r})(i,o,y);g(e)},[i,y]),q=Object(a.useCallback)(()=>{const e=i.every(e=>f.includes(e))&&f.length===i.length;E(e);let t=0;e?(t=y,T(e=>e+1),I(e=>e+y),W+1>=2&&y<6&&(S(y+1),T(0))):T(0);const n=Math.round(t/40*100);D(e=>[...e,n]),C(e=>{const t=e+1;return t>=10?(c(3),setTimeout(()=>{c(4)},2e3)):t<10&&(c(3),setTimeout(()=>{c(0)},2e3)),t})},[i,f,y,W]);Object(a.useEffect)(()=>{if(1===l&&O){const e=100/(3e3/10);return A.current=setInterval(()=>{w(t=>{const n=t-e;return n<=0?(clearInterval(A.current),j(!1),L(),w(100),0):n})},10),()=>clearInterval(A.current)}},[l,O,L]),Object(a.useEffect)(()=>{if(1===l&&!O){const e=100/(1e4/10);return A.current=setInterval(()=>{w(t=>{const n=t-e;return n<=0?(clearInterval(A.current),q(),0):n})},10),()=>clearInterval(A.current)}},[l,O,q]),Object(a.useEffect)(()=>{3===l&&(b&&P.current?(P.current.currentTime=0,P.current.play().catch(e=>console.error("Error playing success sound:",e))):!b&&_.current&&(_.current.currentTime=0,_.current.play().catch(e=>console.error("Error playing fail sound:",e))))},[l,b]);Object(a.useEffect)(()=>{0===l&&F&&B()},[l,b,B,F]);const J=()=>({height:"100%",width:v+"%",backgroundColor:O?"#4caf50":"#f44336",position:"absolute",top:0,left:0,transition:"width 0.01s linear",borderRadius:"5px"}),N={fontSize:"1vw",padding:"1vw 3vw",marginTop:"10px",backgroundColor:"#6200ea",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",width:"80%",maxWidth:"150px"};return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",backgroundColor:"#f0f0f0",fontFamily:"'Roboto', sans-serif",padding:"10px",boxSizing:"border-box",overflow:"hidden"}},r.a.createElement("style",null,"\n    @media (max-width: 600px) {\n      img {\n        width: 25vw; // Slightly smaller images on small screens\n        maxWidth: 80px;\n        minWidth: 60px;\n      }\n    }\n\n    @media (min-width: 900px) {\n      img {\n        width: 20vw; // Increase image size on larger screens\n        maxWidth: 250px;\n        minWidth: 150px;\n      }\n    }\n\n    @media (min-width: 1200px) {\n      img {\n        width: 15vw; // Further increase for very large screens\n        maxWidth: 300px;\n        minWidth: 200px;\n      }\n    }\n  "),e&&r.a.createElement("div",{style:{position:"absolute",top:"10px",left:"10px",fontSize:"20px",fontWeight:"bold"}},"Player: ",e),r.a.createElement("audio",{ref:_,src:n(26)}),r.a.createElement("audio",{ref:P,src:n(27)}),F&&4!==l&&r.a.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",fontSize:"20px",fontWeight:"bold"}},k,"/",10),!F&&r.a.createElement("div",null,r.a.createElement("h2",null,"Game Instructions"),r.a.createElement("p",null,r.a.createElement("strong",null,"Image Display:")," 3 seconds to view images."),r.a.createElement("p",null,r.a.createElement("strong",null,"Image Selection:")," 10 seconds to identify them."),r.a.createElement("p",null,r.a.createElement("strong",null,"Scoring:"),r.a.createElement("ul",{style:{listStylePosition:"inside",paddingLeft:"0"}},r.a.createElement("li",null,r.a.createElement("strong",null,"Correct Answers:")," Progress to higher levels with more challenging questions."),r.a.createElement("li",null,r.a.createElement("strong",null,"Incorrect Answers:")," Stay at the current level until you answer correctly."),r.a.createElement("li",null,r.a.createElement("strong",null,"Maximum Score:")," The highest achievable score is ",r.a.createElement("strong",null,"100"),"."),r.a.createElement("li",null,r.a.createElement("strong",null,"Difficulty:")," More complicated questions carry more points."))),r.a.createElement("center",null,r.a.createElement("input",{type:"text",placeholder:"Enter your name",value:e,onChange:e=>{t(e.target.value)},style:{fontSize:"20px",padding:"10px",borderRadius:"5px",border:"1px solid #ccc",marginBottom:"20px",width:"80%",maxWidth:"300px",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)"}}),r.a.createElement("br",null),r.a.createElement("button",{onClick:()=>{""!==e.trim()&&B()},style:N},"Start"))),F&&r.a.createElement("div",null,1===l&&O&&r.a.createElement(r.a.Fragment,null,i.map((e,t)=>r.a.createElement("img",{key:t,src:e,alt:"Memory",style:s})),r.a.createElement("div",{style:{height:"10px",width:"80%",maxWidth:"300px",backgroundColor:"#ddd",margin:"20px auto",position:"relative",overflow:"hidden",borderRadius:"5px",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)"}},r.a.createElement("div",{style:J()}))),1===l&&!O&&r.a.createElement(r.a.Fragment,null,h.map((e,t)=>r.a.createElement("img",{key:t,src:e,alt:"Memory",style:f.includes(e)?u:s,onClick:()=>(e=>{const t=((e,t)=>t.includes(e)?t.filter(t=>t!==e):[...t,e])(e,f);x(t)})(e)})),r.a.createElement("div",{style:{height:"10px",width:"80%",maxWidth:"300px",backgroundColor:"#ddd",margin:"20px auto",position:"relative",overflow:"hidden",borderRadius:"5px",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)"}},r.a.createElement("div",{style:J()})),r.a.createElement("center",null,r.a.createElement("button",{onClick:()=>{q()},style:N},"Check"))),3===l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,h.map((e,t)=>{let n=s;return i.includes(e)&&f.includes(e)||i.includes(e)?n=m:f.includes(e)&&!i.includes(e)&&(n=p),r.a.createElement("img",{key:t,src:e,alt:"Memory",style:n})})),r.a.createElement("center",null,r.a.createElement("img",{src:n(b?28:29),alt:b?"Success":"Try Again",style:{width:"300px",height:"200px"}}))),4===l&&r.a.createElement("center",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Your total score is ",Math.round(M/40*100)),r.a.createElement("div",{style:{textAlign:"center",margin:"0 auto"}},z.map((e,t)=>r.a.createElement("p",{key:t},"Question ",t+1,": ",(e=>e>0?r.a.createElement("span",{style:{color:"green"}},"+",e,"M"):r.a.createElement("span",{style:{color:"red"}},e))(e)))),r.a.createElement("button",{onClick:()=>{R(!1),c(0),S(2),C(0),I(0),T(0),D([])},style:N},"Start Again")),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"Memory Tip:")," Try to create a story out of the picture to memorise."),r.a.createElement("p",null,"For example, ",r.a.createElement("u",null,'"there is a house, with an elephant who has a dog and a lion..."'))))))};var h=function(){return r.a.createElement("div",null,r.a.createElement(d,null))};var g=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then(t=>{let{getCLS:n,getFID:a,getFCP:r,getLCP:l,getTTFB:c}=t;n(e),a(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null))),g()}],[[3,1,2]]]);
//# sourceMappingURL=main.54817214.chunk.js.map