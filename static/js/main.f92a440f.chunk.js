(this["webpackJsonpmemory-trainer"]=this["webpackJsonpmemory-trainer"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(30)},,,,,,,,,function(e,t,n){},function(e,t,n){var r={"./Screenshot 2024-08-17 at 11.31.31.png":14,"./Screenshot 2024-08-17 at 11.31.39.png":15,"./Screenshot 2024-08-17 at 11.31.47.png":16,"./Screenshot 2024-08-17 at 11.31.54.png":17,"./Screenshot 2024-08-18 at 11.54.24.png":18,"./Screenshot 2024-08-18 at 11.54.46.png":19,"./Screenshot 2024-08-18 at 11.54.58.png":20,"./Screenshot 2024-08-18 at 11.55.11.png":21,"./Screenshot 2024-08-18 at 11.55.28.png":22,"./Screenshot 2024-08-18 at 11.55.40.png":23,"./Screenshot 2024-08-18 at 11.55.55.png":24,"./Screenshot 2024-08-18 at 11.56.06.png":25};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id=13},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-17 at 11.31.31.9c982553.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-17 at 11.31.39.96fa0165.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-17 at 11.31.47.0c83b3a5.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-17 at 11.31.54.60d60dfd.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-18 at 11.54.24.8c2f9c65.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-18 at 11.54.46.22b96af0.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-18 at 11.54.58.0997ef8b.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-18 at 11.55.11.16e40b79.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-18 at 11.55.28.85f79131.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-18 at 11.55.40.49935dcf.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-18 at 11.55.55.76ee5624.png"},function(e,t,n){e.exports=n.p+"static/media/Screenshot 2024-08-18 at 11.56.06.eb9757e4.png"},function(e,t,n){e.exports=n.p+"static/media/result_fail.1506875c.mp3"},function(e,t,n){e.exports=n.p+"static/media/result_success.cf61fc8e.mp4"},function(e,t,n){e.exports=n.p+"static/media/success.691275a9.gif"},function(e,t,n){e.exports=n.p+"static/media/try_again.75c28eca.gif"},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(2),o=n.n(c);n(12);const l=(i=n(13)).keys().map(e=>i(e));var i;const s={width:"30vw",maxWidth:"150px",minWidth:"100px",height:"auto",marginBottom:"10px"},u={...s,border:"3px solid blue"},p={...s,border:"6px solid lime"},m={...s,border:"6px solid red"};var d=()=>{const[e,t]=Object(r.useState)(""),[c,o]=Object(r.useState)(0),[i,d]=Object(r.useState)([]),[h,g]=Object(r.useState)([]),[f,x]=Object(r.useState)([]),[b,E]=Object(r.useState)(!1),[S,y]=Object(r.useState)(2),[v,w]=Object(r.useState)(100),[O,j]=Object(r.useState)(!0),[k,C]=Object(r.useState)(0),[M,I]=Object(r.useState)(0),[W,F]=Object(r.useState)(0),[R,T]=Object(r.useState)(!1),[z,D]=Object(r.useState)([]),A=Object(r.useRef)(null),P=Object(r.useRef)(null),_=Object(r.useRef)(null),B=Object(r.useCallback)(()=>{const e=((e,t)=>{const n=[];for(;n.length<t;){const t=Math.floor(Math.random()*e.length);n.includes(e[t])||n.push(e[t])}return n})(l,S);d(e),x([]),o(1),w(100),j(!0),T(!0)},[S]),L=Object(r.useCallback)(()=>{const e=((e,t,n)=>{const r=Math.floor(n/2),a=[...e];for(;a.length<n+r;){const e=Math.floor(Math.random()*t.length);a.includes(t[e])||a.push(t[e])}return a.sort(()=>.5-Math.random()),a})(i,l,S);g(e)},[i,S]),q=Object(r.useCallback)(()=>{const e=i.every(e=>f.includes(e))&&f.length===i.length;E(e);let t=0;e?(t=S,F(e=>e+1),I(e=>e+S),W+1>=2&&S<6&&(y(S+1),F(0))):F(0);const n=Math.round(t/40*100);D(e=>[...e,n]),C(e=>{const t=e+1;return t>=10?(o(3),setTimeout(()=>{o(4)},2e3)):t<10&&(o(3),setTimeout(()=>{o(0)},2e3)),t})},[i,f,S,W]);Object(r.useEffect)(()=>{if(1===c&&O){const e=100/(3e3/10);return A.current=setInterval(()=>{w(t=>{const n=t-e;return n<=0?(clearInterval(A.current),j(!1),L(),w(100),0):n})},10),()=>clearInterval(A.current)}},[c,O,L]),Object(r.useEffect)(()=>{if(1===c&&!O){const e=100/(1e4/10);return A.current=setInterval(()=>{w(t=>{const n=t-e;return n<=0?(clearInterval(A.current),q(),0):n})},10),()=>clearInterval(A.current)}},[c,O,q]),Object(r.useEffect)(()=>{3===c&&(b&&P.current?(P.current.currentTime=0,P.current.play().catch(e=>console.error("Error playing success sound:",e))):!b&&_.current&&(_.current.currentTime=0,_.current.play().catch(e=>console.error("Error playing fail sound:",e))))},[c,b]);Object(r.useEffect)(()=>{0===c&&R&&B()},[c,b,B,R]);const J=()=>({height:"100%",width:v+"%",backgroundColor:O?"#4caf50":"#f44336",position:"absolute",top:0,left:0,transition:"width 0.01s linear",borderRadius:"5px"}),N={fontSize:"2vw",padding:"1vw 3vw",marginTop:"10px",backgroundColor:"#6200ea",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",width:"80%",maxWidth:"150px"};return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",backgroundColor:"#f0f0f0",fontFamily:"'Roboto', sans-serif",padding:"10px",boxSizing:"border-box",overflow:"hidden"}},a.a.createElement("style",null,"\n    @media (max-width: 600px) {\n      img {\n        width: 25vw; // Slightly smaller images on small screens\n        maxWidth: 80px;\n        minWidth: 60px;\n      }\n    }\n\n    @media (min-width: 900px) {\n      img {\n        width: 20vw; // Increase image size on larger screens\n        maxWidth: 250px;\n        minWidth: 150px;\n      }\n    }\n\n    @media (min-width: 1200px) {\n      img {\n        width: 15vw; // Further increase for very large screens\n        maxWidth: 300px;\n        minWidth: 200px;\n      }\n    }\n  "),e&&a.a.createElement("div",{style:{position:"absolute",top:"10px",left:"10px",fontSize:"20px",fontWeight:"bold"}},"Player: ",e),a.a.createElement("audio",{ref:_,src:n(26)}),a.a.createElement("audio",{ref:P,src:n(27)}),R&&4!==c&&a.a.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",fontSize:"20px",fontWeight:"bold"}},k,"/",10),!R&&a.a.createElement("div",null,a.a.createElement("h2",null,"Game Instructions"),a.a.createElement("p",null,a.a.createElement("strong",null,"Image Display:")," 3 seconds to view images."),a.a.createElement("p",null,a.a.createElement("strong",null,"Image Selection:")," 10 seconds to identify them."),a.a.createElement("p",null,a.a.createElement("strong",null,"Scoring:"),a.a.createElement("ul",{style:{listStylePosition:"inside",paddingLeft:"0"}},a.a.createElement("li",null,a.a.createElement("strong",null,"Correct Answers:")," Progress to higher levels with more challenging questions."),a.a.createElement("li",null,a.a.createElement("strong",null,"Incorrect Answers:")," Stay at the current level until you answer correctly."),a.a.createElement("li",null,a.a.createElement("strong",null,"Maximum Score:")," The highest achievable score is ",a.a.createElement("strong",null,"100"),"."),a.a.createElement("li",null,a.a.createElement("strong",null,"Difficulty:")," More complicated questions carry more points."))),a.a.createElement("center",null,a.a.createElement("input",{type:"text",placeholder:"Enter your name",value:e,onChange:e=>{t(e.target.value)},style:{fontSize:"20px",padding:"10px",borderRadius:"5px",border:"1px solid #ccc",marginBottom:"20px",width:"80%",maxWidth:"300px",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)"}}),a.a.createElement("br",null),a.a.createElement("button",{onClick:()=>{""!==e.trim()&&B()},style:N},"Start"))),R&&a.a.createElement("div",null,1===c&&O&&a.a.createElement(a.a.Fragment,null,i.map((e,t)=>a.a.createElement("img",{key:t,src:e,alt:"Memory",style:s})),a.a.createElement("div",{style:{height:"10px",width:"80%",maxWidth:"300px",backgroundColor:"#ddd",margin:"20px auto",position:"relative",overflow:"hidden",borderRadius:"5px",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)"}},a.a.createElement("div",{style:J()}))),1===c&&!O&&a.a.createElement(a.a.Fragment,null,h.map((e,t)=>a.a.createElement("img",{key:t,src:e,alt:"Memory",style:f.includes(e)?u:s,onClick:()=>(e=>{const t=((e,t)=>t.includes(e)?t.filter(t=>t!==e):[...t,e])(e,f);x(t)})(e)})),a.a.createElement("div",{style:{height:"10px",width:"80%",maxWidth:"300px",backgroundColor:"#ddd",margin:"20px auto",position:"relative",overflow:"hidden",borderRadius:"5px",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)"}},a.a.createElement("div",{style:J()})),a.a.createElement("center",null,a.a.createElement("button",{onClick:()=>{q()},style:N},"Check"))),3===c&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,h.map((e,t)=>{let n=s;return i.includes(e)&&f.includes(e)||i.includes(e)?n=p:f.includes(e)&&!i.includes(e)&&(n=m),a.a.createElement("img",{key:t,src:e,alt:"Memory",style:n})})),a.a.createElement("center",null,a.a.createElement("img",{src:n(b?28:29),alt:b?"Success":"Try Again",style:{width:"300px",height:"200px"}}))),4===c&&a.a.createElement("center",null,a.a.createElement("div",null,a.a.createElement("h2",null,"Your total score is ",Math.round(M/40*100)),a.a.createElement("div",{style:{textAlign:"left",marginTop:"20px",fontSize:"18px",fontFamily:"'Roboto', sans-serif"}},z.map((e,t)=>a.a.createElement("p",{key:t},"Question ",t+1,": ",(e=>e>0?a.a.createElement("span",{style:{color:"green"}},"+",e,"M"):a.a.createElement("span",{style:{color:"red"}},e))(e)))),a.a.createElement("button",{onClick:()=>{T(!1),o(0),y(2),C(0),I(0),F(0),D([])},style:N},"Start Again")))))};var h=function(){return a.a.createElement("div",null,a.a.createElement(d,null))};var g=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then(t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:c,getTTFB:o}=t;n(e),r(e),a(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null))),g()}],[[3,1,2]]]);
//# sourceMappingURL=main.f92a440f.chunk.js.map