(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{51:function(e,t,i){},52:function(e,t,i){},60:function(e,t,i){"use strict";i.r(t);var s=i(1),c=i.n(s),n=i(25),r=i.n(n),a=(i(51),i(3)),l=(i(52),i(19)),o=i(27),d=i(5),j=i(15),b=i(2);function m(e){var t=e.inView,i=e.quick,c=e.delay,n=e.className,r=e.children,a=s.Children.toArray(r),l=Object(j.useTrail)(a.length,{config:i?Object(d.a)(Object(d.a)({},j.config.gentle),{},{clamp:!0}):j.config.molasses,delay:c,opacity:t?1:0,x:t?0:20,height:t?"100%":"0%",maxWidth:"fit-content",from:{opacity:0,x:20,height:"0%"}});return Object(b.jsx)("div",{className:n,children:l.map((function(e,t){var i=e.height,s=Object(o.a)(e,["height"]);return Object(b.jsx)(j.a.div,{style:s,children:Object(b.jsx)(j.a.div,{style:{height:i},children:a[t]})},t)}))})}function h(e){var t=e.mobile,i=Object(l.a)({threshold:0}),s=i.ref,c=i.inView;return Object(b.jsx)("div",{className:"HelloPage ScrollChild",ref:s,children:Object(b.jsxs)(m,{inView:c,delay:150,children:[Object(b.jsx)("div",{style:{fontSize:t?"25vw":"20vw"},children:"Hello"}),Object(b.jsx)("div",{style:{fontSize:t?"25vw":"20vw",paddingLeft:t?"0vw":"11.5vw"},children:"There!"})]})})}var v=i(17),p=i(30),u=i(62);function f(e){var t=e.children,i=e.className,c=e.inView,n=Object(j.useTransition)(c,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});return Object(b.jsx)(s.Fragment,{children:n((function(e,s){return s&&Object(b.jsx)(j.a.div,{style:e,className:i,children:t})}))})}function g(e){var t=e.mobile,i=Object(s.useState)(!1),c=Object(a.a)(i,2),n=c[0],r=c[1];return Object(b.jsxs)("div",{className:"Topbar",style:{padding:t?"1rem":"1rem 2rem"},children:[!t&&Object(b.jsxs)("div",{className:"TopbarButtons",style:{gridAutoFlow:"column"},children:[Object(b.jsx)(p.a,{smooth:!0,to:"/#about",className:"TopbarButton",children:"About Me"}),Object(b.jsx)(v.b,{className:"TopbarButton",to:"/projects",children:"Projects"}),Object(b.jsx)(v.b,{className:"TopbarButton",to:"/skills",children:"Skills"}),Object(b.jsx)(p.a,{smooth:!0,to:"/#contact",className:"TopbarButton",children:"Contact"})]}),t&&Object(b.jsxs)(s.Fragment,{children:[Object(b.jsxs)("div",{style:{zIndex:10},children:[" ",Object(b.jsx)(u.a,{toggled:n,toggle:r})," "]}),Object(b.jsx)(f,{inView:n,className:"MenuContainer",children:Object(b.jsx)("div",{onClick:function(){return r(!n)},style:{marginTop:"10vh"},children:Object(b.jsxs)(m,{inView:n,quick:!0,className:"TopbarButtons",children:[Object(b.jsx)(p.a,{smooth:!0,to:"/#about",className:"TopbarButton",children:"About Me"}),Object(b.jsx)(v.b,{to:"/projects",className:"TopbarButton",children:"Projects"}),Object(b.jsx)(v.b,{to:"/skills",className:"TopbarButton",children:"Skills"}),Object(b.jsx)(p.a,{smooth:!0,to:"/#contact",className:"TopbarButton",children:"Contact"})]})})})]})]})}var O=i(9);function w(e){var t=e.mobile,i=Object(l.a)({threshold:0}),s=i.ref,c=i.inView;return Object(b.jsx)("div",{id:"about",className:"ScrollChild",ref:s,children:Object(b.jsxs)(m,{inView:c,delay:100,className:"AboutPage",children:[Object(b.jsxs)("div",{style:{fontSize:t?"13vw":"10vw"},children:[" ","I'm Karamvir,"," "]}),Object(b.jsxs)("div",{style:{fontSize:t?"10vw":"5vw",paddingLeft:t?"0vw":"2vw",fontWeight:300},children:["A junior full stack developer, ",Object(b.jsx)("br",{})," and UI / UX designer."]}),Object(b.jsxs)("div",{style:{fontSize:t?"7vw":"2.5vw",fontWeight:200,padding:t?"0vw":"1vw 4vw"},children:["My work includes all forms of projects; from static websites,",t?"":Object(b.jsx)("br",{})," to full featured Progressive Web Apps."]}),Object(b.jsxs)("div",{style:{fontSize:t?"7vw":"2vw",fontWeight:200,padding:t?"0vw 0vw 5vh 0vw":"1vw 4vw"},children:["When I'm not coding, I spend my time snowboarding,",t?"":Object(b.jsx)("br",{})," slacklining, and making music!"]})]})})}function x(e){var t=e.inView,i=e.delay,s=e.children,c=Object(j.useSpring)({from:{opacity:t?0:1},to:{opacity:t?1:0},config:j.config.molasses,delay:i||0});return Object(b.jsx)(j.a.div,{style:c,children:s})}function y(e){var t=e.mobile;return Object(b.jsxs)("div",{className:"ScrollContainer",children:[Object(b.jsx)(x,{inView:!0,delay:100,children:Object(b.jsx)("div",{className:"ScrollChild",style:{fontSize:t?"15vw":"7.5vw",paddingLeft:"5vw"},children:"Scroll down to view projects I've worked on."})}),Object(b.jsx)(k,{mobile:t,title:"Monitor",description:"A full featured Progressive Web App that enables a cryptocurrency trading startup to create, deploy, and monitor their trading nodes on various ethereum-powered blockchains.",images:N}),Object(b.jsx)(k,{mobile:t,title:"Ethics Olympiad App",description:"A full-stack Web App that was designed to facilitate Ethics Olympaid events, which are a co-curricular programme to promote philosophical enquiries by high school students. ",images:T})]})}function k(e){var t=e.mobile,i=e.title,s=e.description,c=e.images,n=Object(l.a)({threshold:0}),r=n.ref,a=n.inView;return Object(b.jsxs)("div",{className:"Project ScrollChild",style:{gridTemplateColumns:t?"":"2fr 1fr",gridTemplateRows:t?"1fr 1fr":"",gap:t?"5vh":"5vw"},ref:r,children:[Object(b.jsxs)(x,{inView:a,children:[" ",Object(b.jsx)(S,{images:c})," "]}),Object(b.jsx)("div",{children:Object(b.jsxs)(m,{inView:a,quick:!0,children:[Object(b.jsxs)("div",{style:{fontSize:t?"10vw":"5vw",fontWeight:300},children:[" ",i," "]}),Object(b.jsxs)("div",{style:{fontSize:t?"5vw":"2.5vw",fontWeight:200},children:[" ",s," "]})]})})]})}function S(e){var t=e.images,i=Object(s.useState)(0),c=Object(a.a)(i,2),n=c[0],r=c[1];return Object(s.useEffect)((function(){var e=setInterval((function(){return r(n===t.length-1?0:n+1)}),6e3);return function(){return clearTimeout(e)}})),Object(b.jsx)("img",{src:t[n].src,alt:t[n].alt,style:{width:"100%",height:"100%"}})}var N=[{src:"./images/projects/monitor/1.png",alt:"monitor"},{src:"./images/projects/monitor/2.png",alt:"monitor"},{src:"./images/projects/monitor/3.png",alt:"monitor"}],T=[{src:"./images/projects/olympiad/1.png",alt:"ethics olympiad"},{src:"./images/projects/olympiad/2.png",alt:"ethics olympiad"},{src:"./images/projects/olympiad/3.png",alt:"ethics olympiad"},{src:"./images/projects/olympiad/4.png",alt:"ethics olympiad"},{src:"./images/projects/olympiad/5.png",alt:"ethics olympiad"},{src:"./images/projects/olympiad/6.png",alt:"ethics olympiad"}],z=[{name:"html",alt:"html"},{name:"css",alt:"css"},{name:"javascript",alt:"javascript"},{name:"typescript",alt:"typescript"},{name:"react",alt:"reactjs"},{name:"mongodb",alt:"mongodb"},{name:"feathers",alt:"feathersjs"},{name:"express",alt:"expressjs"}],C=[{name:"ethereum",alt:"web3"},{name:"rust",alt:"rust"},{name:"aws",alt:"amazon web services"},{name:"d3",alt:"d3"},{name:"firebase",alt:"firebase"}];function V(e){var t=e.mobile;return Object(b.jsx)("div",{className:"ScrollContainer",children:Object(b.jsxs)("div",{className:"ScrollChild SkillsPage",style:{gridTemplateRows:t?"":"1fr 1fr",gap:t?"5vh":"5vw"},children:[Object(b.jsx)(W,{title:"What I've learned",skills:z,mobile:t}),Object(b.jsx)(W,{title:"What I'm learning",skills:C,mobile:t})]})})}function W(e){var t=e.title,i=e.mobile,s=e.skills,c=Object(l.a)({threshold:0}),n=c.ref,r=c.inView;return Object(b.jsxs)("div",{style:{display:"grid",gap:"3vw",gridTemplateRows:"auto 1fr"},ref:n,children:[Object(b.jsxs)("div",{style:{fontSize:i?"10vw":"4vw",placeSelf:"center"},children:[" ",t," "]}),Object(b.jsx)(m,{inView:r,quick:!0,className:i?"SkillsGridMobile":"SkillsGrid",children:s.map((function(e,t){return Object(b.jsx)(A,{name:e.name,alt:e.alt,mobile:i},t)}))})]})}function A(e){var t=e.name,i=e.alt,c=e.link,n=e.mobile;return Object(b.jsx)(s.Fragment,{children:Object(b.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:Object(b.jsx)("img",{src:"./images/icons/".concat(t,".svg"),alt:i,style:{width:n?"15vw":"7.5vw",height:n?"15vw":"7.5vw"}})})})}var B=function(e){var t=e.mobile,i=Object(l.a)({threshold:0}),s=i.ref,c=i.inView;return Object(b.jsx)("div",{id:"contact",className:"ScrollChild",ref:s,children:Object(b.jsxs)(m,{inView:c,delay:100,className:"ContactPage",children:[Object(b.jsxs)("div",{style:{fontSize:t?"10vw":"5vw",paddingLeft:t?"0vw":"2vw",fontWeight:300},children:["You can contact me through"," ",Object(b.jsx)(I,{text:"Gmail",link:"mailto: karamvir.singh98@gmail.com"}),","]}),Object(b.jsxs)("div",{style:{fontSize:t?"10vw":"5vw",paddingLeft:t?"0vw":"6vw",fontWeight:300},children:["Read my blog on"," ",Object(b.jsx)(I,{text:"Medium",link:"https://medium.com"}),","]}),Object(b.jsxs)("div",{style:{fontSize:t?"10vw":"5vw",paddingLeft:t?"0vw":"10vw",fontWeight:300},children:["And view my work on"," ",Object(b.jsx)(I,{text:"GitHub",link:"https://github.com/karamvirsingh98"}),"."]})]})})};function I(e){var t=e.text,i=e.link;return Object(b.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},className:"ContactButton",children:t})}var P=function(){var e=Object(s.useState)(window.innerWidth<700),t=Object(a.a)(e,2),i=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.innerWidth<700?c(!0):c(!1)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(g,{mobile:i}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{path:"/",exact:!0,children:Object(b.jsxs)("div",{className:"ScrollContainer",children:[Object(b.jsx)(h,{mobile:i}),Object(b.jsx)(w,{mobile:i}),Object(b.jsx)(B,{mobile:i})]})}),Object(b.jsx)(O.a,{path:"/projects",children:Object(b.jsx)(y,{mobile:i})}),Object(b.jsx)(O.a,{path:"/skills",children:Object(b.jsx)(V,{mobile:i})})]})]})},L=i(46);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v.a,{basename:"/portfolio",children:Object(b.jsx)(L.a,{children:Object(b.jsx)(P,{})})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.a9e6a3a9.chunk.js.map