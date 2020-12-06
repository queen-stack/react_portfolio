(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{23:function(e){e.exports=JSON.parse('[{"id":1,"name":"Budget Tracker","image":"assets/images/budget_tracker.png?raw=true","github":"https://github.com/queen-stack/budget-tracker","deploy":"https://glacial-oasis-98966.herokuapp.com/","topics":"javascript, pwa, indexedDB, mongoDB, mongoose, compression, morgan, express"},{"id":2,"name":"mvc tech blog","image":"/assets/images/techblog.png?raw=true","github":"https://github.com/queen-stack/mvc_techblog","deploy":"https://mvc-techblog.herokuapp.com/","topics":"model-view-controller, bulma, bcrypt, express-js, mysql, sequelize, node-js, dotenv, handlebars-js, jest"},{"id":3,"name":"weather dashboard","image":"assets/images/weather.png?raw=true","github":"https://github.com/queen-stack/server_side_api","deploy":"https://queen-stack.github.io/server_side_api/","topics":"javascript, jQuery, html, bootstrap, moment, API"},{"id":4,"name":"work day schedular","image":"assets/images/scheduler.png?raw=true","github":"https://github.com/queen-stack/05_third_party_api","deploy":"https://queen-stack.github.io/05_third_party_api/","topics":"HTML, Javascript, Bootstrap, CSS, jQuery, Moment"},{"id":5,"name":"Note Taker","image":"assets/images/note_taker.png?raw=true","github":"https://github.com/queen-stack/taskmaster_pro","deploy":"https://dashboard.heroku.com/apps/salty-atoll-89598","topics":"HTML, Javascript, CSS"},{"id":6,"name":"smollTalk","image":"assets/images/smollTalk.png?raw=true","github":"https://github.com/queen-stack/smollTalk","deploy":"https://limitless-shelf-64509.herokuapp.com/","topics":"MySQL2, Express, Sequelize, Handlebars, dotenv."}]')},31:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),a=s.n(n),i=s(19),r=s.n(i),o=(s(31),s(20)),l=s(21),j=s(25),d=s(24),m=s(7),h=s(2);var b=function(e){return Object(c.jsxs)("div",{className:" row navigation",id:"navigation",children:[Object(c.jsx)(m.b,{to:"/about",activeClassName:"selected",children:"about "}),Object(c.jsx)(m.b,{to:"/portfolio",activeClassName:"selected",children:"portfolio "}),Object(c.jsx)(m.b,{to:"/contact",activeClassName:"selected",children:"contact "}),Object(c.jsx)(m.b,{to:"/resume",activeClassName:"selected",children:"resume "})]})};var u=function(){return Object(c.jsxs)("section",{className:"title",children:[Object(c.jsx)("h1",{className:"name",children:"about: Jenifer Queen"}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"row justify-content-center",children:Object(c.jsxs)("div",{className:"col-10",id:"about-section",children:[Object(c.jsx)("img",{className:"mb-5",src:"/assets/images/JQueen.png",alt:"Jenifer Queen"}),Object(c.jsx)("p",{children:"Thrives in high-volume environments and can navigate evolving business needs, improve client experiences, and drive profitability."}),Object(c.jsx)("p",{children:"Easily understands technical concepts and implications, manage trade-offs and evaluate new opportunities with stakeholders."}),Object(c.jsx)("p",{children:"Loves to learn new technology! During COVID, successfully completed a remote course on full stack development."}),Object(c.jsxs)("p",{children:["View full ",Object(c.jsx)("a",{href:"/assets/Resume_Queen.pdf",target:"_blank",className:"link",children:"resume"})]})]})})]})},p=s(10),g=s(16),x=s(17);var O=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(x.a)(e,2),s=t[0],a=t[1],i=Object(n.useState)(""),r=Object(x.a)(i,2),o=r[0],l=r[1],j=s.name,d=s.email,m=s.message;function h(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);l(t?"":"requires a valid email")}else e.target.value.length?l(""):l("".concat(e.target.name," is required."));o||a(Object(g.a)(Object(g.a)({},s),{},Object(p.a)({},e.target.name,e.target.value)))}return Object(c.jsxs)("section",{className:"justify-content-center",id:"contact-section",children:[Object(c.jsx)("h1",{"data-testid":"h1tag",className:"contact",children:"contact: Jenifer Queen"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("form",{className:"justify-content-center",id:"contact-form",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"name",children:"name:"}),Object(c.jsx)("input",{className:"form-control",type:"text",name:"name",defaultValue:j,onBlur:h})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"email",children:"email:"}),Object(c.jsx)("input",{className:"form-control",type:"email",name:"email",defaultValue:d,onBlur:h})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"message",children:"message:"}),Object(c.jsx)("textarea",{className:"form-control",name:"message",defaultValue:m,onBlur:h,rows:"7"})]}),o&&Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"error-text",children:o})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{"data-testid":"button",className:"btn btn-outline-dark mt-4",type:"submit",onSubmit:function(e){e.preventDefault()},children:"Submit"})})]})]})};s(13);var f=function(e){return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"img-container",children:Object(c.jsx)("img",{alt:e.name,src:e.image})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("p",{className:"project-title",id:"card-title",children:e.name}),Object(c.jsxs)("p",{children:[Object(c.jsx)("a",{href:e.github,children:Object(c.jsx)("img",{src:"https://img.icons8.com/color/48/000000/github--v1.png",alt:"Repository",id:"project-icon"})}),Object(c.jsx)("a",{href:e.deploy,children:Object(c.jsx)("img",{src:"https://img.icons8.com/color/48/000000/monitor.png",alt:"Deployed Site",id:"project-icon"})})]}),Object(c.jsxs)("p",{id:"topics",children:["(",e.topics,")"]})]})]})},v=s(23);function N(e){return Object(c.jsx)("div",{className:"wrapper",children:e.children})}var k=function(){return Object(c.jsxs)("section",{children:[Object(c.jsxs)("div",{className:"project",children:[Object(c.jsx)("h1",{className:"title",children:"development portfolio: Jenifer Queen"}),Object(c.jsx)("hr",{})]}),Object(c.jsx)(N,{id:"card-data",children:v.map((function(e){return Object(c.jsx)(f,{image:e.image,name:e.name,github:e.github,deploy:e.deploy,topics:e.topics},e.id)}))})]})};var w=function(){return Object(c.jsxs)("section",{className:"mb-5",children:[Object(c.jsx)("h1",{className:"resume",children:"resume: Jenifer Queen"}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"row justify-content-center",id:"resume",children:Object(c.jsxs)("div",{className:"mt-5 pl-5 pr-5",children:["Dynamic leader with deep experience providing strategic expertise for application solutions, with experience driving core business strategies in corporate environments. Recognized for improving technical efficiencies, and aligning business objectives by implementing strategic plans, organizational structure, and process streamlining.",Object(c.jsx)("p",{className:"mt-5",children:Object(c.jsx)("a",{href:"https://www.linkedin.com/in/jeniferqueen/",children:Object(c.jsx)("img",{src:"https://img.icons8.com/color/48/000000/linkedin-2.png",alt:"JQueen LinkedIn"})})}),Object(c.jsxs)("p",{children:[Object(c.jsx)("a",{href:"/assets/Resume_Queen.pdf",className:"link",download:!0,children:"resume"}),Object(c.jsx)("br",{})]})]})}),Object(c.jsxs)("div",{className:"justify-content-center mt-5",children:[Object(c.jsxs)("div",{id:"front-back",children:[Object(c.jsx)("h2",{children:"front end experience"}),Object(c.jsx)("p",{children:"HTML, CSS (Bootstrap, Bulma), JavaScript, jQuery, React.js, Angular.js, IndexedDB"})]}),Object(c.jsxs)("div",{id:"front-back",className:"mt-5",children:[Object(c.jsx)("h2",{children:"back end experience"}),Object(c.jsx)("p",{children:"Node.js, Express.js, SQL (sqlite, mySQL), Sequelize, NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Template (Handlebars)"})]})]})]})},y=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsxs)(m.a,{children:[Object(c.jsx)("div",{className:"row Header",id:"header",children:Object(c.jsx)(b,{})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(c.jsx)(h.a,{to:"/portfolio"})}}),Object(c.jsx)(h.b,{path:"/portfolio",component:k}),Object(c.jsx)(h.b,{path:"/about",component:u}),Object(c.jsx)(h.b,{path:"/contact",component:O}),Object(c.jsx)(h.b,{path:"/resume",component:w})]})]})}}]),s}(n.Component);var S=function(){return Object(c.jsxs)("div",{className:"footer",id:"footer",children:[Object(c.jsx)("a",{href:"https://github.com/queen-stack",children:Object(c.jsx)("img",{src:"https://img.icons8.com/color/48/000000/github-2.png",alt:"Github",className:"icon"})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/jeniferqueen/",children:Object(c.jsx)("img",{src:"https://img.icons8.com/color/48/000000/linkedin.png",alt:"LinkedIn",className:"icon"})}),Object(c.jsx)("a",{href:"https://instagram.com/jqueen007",children:Object(c.jsx)("img",{src:"https://img.icons8.com/color/48/000000/instagram.png",alt:"Instagram",class:"icon"})}),Object(c.jsxs)("p",{children:["\xa9 jenifer queen  |  ",Object(c.jsx)("a",{href:"/assets/Resume_Queen.pdf",className:"link",download:!0,children:"resume"}),"  |  ",Object(c.jsx)("a",{href:"https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51",children:"color palette"}),"  |  made with ",Object(c.jsx)("img",{id:"react-icon",src:"https://img.icons8.com/color/48/000000/react-native.png",alt:"React"})]})]})};s(37);var q=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(y,{}),Object(c.jsx)(S,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.adb1e0d2.chunk.js.map