(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{11:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),m=t(3),o=t.n(m),s=t(4),r=(t(9),t(0)),d=[{name:"Heater-1",key:"Q",audio:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{name:"Heater-2",key:"W",audio:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{name:"Heater-3",key:"E",audio:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{name:"Heater-4",key:"A",audio:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{name:"Clap",key:"S",audio:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{name:"open hihat",key:"D",audio:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{name:"closed hihat",key:"Z",audio:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},{name:"Kick-n'-Hat",key:"X",audio:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{name:"Kick",key:"C",audio:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}],i=function(){var e=c.a.useState("LET'S PLAY SOMETHING!"),a=Object(s.a)(e,2),t=a[0],n=a[1];return c.a.useEffect((function(){var e=function(e){var a=document.getElementById(e.key.toUpperCase());a&&(n(e.key.toUpperCase()),a.currentTime=0,a.play())};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),Object(r.jsxs)("div",{id:"title",children:[Object(r.jsx)("h1",{children:"DRUM MACHINE"}),Object(r.jsxs)("div",{id:"drum-machine",children:[d.map((function(e){return Object(r.jsxs)("button",{onClick:function(a){a.preventDefault(),function(e){var a=document.getElementById(e.key);n(e.key),a.currentTime=0,a.play()}(e)},className:"drum-pad",id:e.name,children:[Object(r.jsx)("audio",{className:"clip",id:e.key,src:e.audio}),e.key]})})),Object(r.jsx)("div",{id:"display",children:t})]})]})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,m=a.getLCP,o=a.getTTFB;t(e),n(e),c(e),m(e),o(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(i,{})}),document.getElementById("root")),u()},9:function(e,a,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.7fc57747.chunk.js.map