(this.webpackJsonpreact_2hr=this.webpackJsonpreact_2hr||[]).push([[0],{41:function(e,a,t){},46:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var n=t(0),r=(t(41),t(32)),c=t.n(r),l=t(20),s=t(30),i=(t(45),t(66)),d=t(67),o=t(68),j=t(70),g=t(69),b=(t(46),t(2)),u=function(){var e=Object(n.useState)([{name:"Rubi",age:31,gender:"F"},{name:"Randy",age:32,gender:"M"},{name:"Apple",age:18,gender:"F"},{name:"Mango",age:14,gender:"F"},{name:"Ferry",age:37,gender:"M"},{name:"Johnson",age:55,gender:"M"},{name:"Larry",age:45,gender:"M"},{name:"Ryne",age:12,gender:"F"},{name:"Christopher",age:24,gender:"M"}]),a=Object(l.a)(e,2),t=a[0],r=a[1];console.log(t);var c=0,u=0,m=0,h=0,x=0;null===t||void 0===t||t.map((function(e,a){return e.age<=35?c++:e.age>=36&&e.age<=50?u++:m++,"M"===e.gender?h++:x++}));var p={chartData:{labels:["young adult","adult","seniors"],datasets:[{label:"number of people according to AGE",data:[c,u,m],backgroundColor:["rgba(75, 192, 192, 0.4)","rgba(153, 102, 255, 0.4)","rgba(255, 159, 64, 0.4)"]}]}},O={chartData:{labels:["Male","Female"],datasets:[{label:"Ratio of M and F",data:[h,x],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)"]}]}},f=Object(n.useState)(""),v=Object(l.a)(f,2),y=v[0],F=v[1],M=Object(n.useState)(""),D=Object(l.a)(M,2),N=D[0],C=D[1],I=Object(n.useState)(""),w=Object(l.a)(I,2),A=w[0],E=w[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"chartPage-container",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(b.jsxs)(i.a,{"aria-label":"simple table",style:{marginTop:"1em",marginBottom:"2em",width:"500px",height:"500px"},children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(o.a,{children:["ID","Name","Age","Gender"].map((function(e,a){return Object(b.jsx)(j.a,{children:e},a)}))})}),Object(b.jsx)(g.a,{children:null===t||void 0===t?void 0:t.map((function(e,a){return Object(b.jsxs)(o.a,{children:[Object(b.jsx)(j.a,{children:a}),Object(b.jsx)(j.a,{children:e.name}),Object(b.jsx)(j.a,{children:e.age}),Object(b.jsx)(j.a,{children:e.gender})]},a)}))})]}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y&&N&&A&&(console.log("hi"),t[t.length]={name:y,age:N,gender:A},console.log(t)),r(t),console.log(t),F(""),C(""),E("")},className:"form-container",children:[Object(b.jsx)("label",{id:"name",children:"Enter Name"}),Object(b.jsx)("input",{className:"nameInput",onChange:function(e){F(e.target.value.trim())},type:"text",value:y}),Object(b.jsx)("label",{id:"age",children:"Enter Age"}),Object(b.jsx)("input",{className:"ageInput",onChange:function(e){C(e.target.value.trim())},type:"number",value:N}),Object(b.jsx)("label",{id:"gender",children:"Enter Gender"}),Object(b.jsx)("input",{className:"genderInput",onChange:function(e){E(e.target.value.trim())},placeholder:"M/F",type:"text",value:A}),Object(b.jsx)("button",{type:"submit",children:"Add New Data"})]}),Object(b.jsxs)("div",{className:"chart",style:{height:"500px",width:"60vw",display:"flex",flexDirection:"column",alignItems:"center",padding:"0px 50px"},children:[Object(b.jsx)(s.a,{data:p.chartData}),Object(b.jsx)(s.b,{data:O.chartData})]})]})})},m=t(37),h=t(4),x=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(m.a,{basename:"/React_chartjs",children:Object(b.jsx)(h.c,{children:Object(b.jsx)(h.a,{path:"/",exact:!0,component:u})})})})};c.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.4eaaf5d5.chunk.js.map