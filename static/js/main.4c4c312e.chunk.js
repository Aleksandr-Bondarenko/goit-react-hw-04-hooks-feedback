(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={box:"Statistics_box__2wFDO",title:"Statistics_title__1KM1A",feedbackBox:"Statistics_feedbackBox__2J_8n",totalBox:"Statistics_totalBox__3E3df"}},,,function(e,t,n){e.exports={section:"Section_section__3ImBd",title:"Section_title__1FMP0"}},function(e,t,n){e.exports={btnBox:"FeedbackOptions_btnBox__38b7m",btn:"FeedbackOptions_btn__39duJ"}},,function(e,t,n){e.exports={message:"Notification_message__1U-PX"}},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),i=n.n(s),o=(n(13),n(3)),r=(n(14),n(5)),b=n.n(r),d=n(0);var l=function(e){var t=e.title,n=e.children;return Object(d.jsxs)("section",{className:b.a.section,children:[Object(d.jsx)("h1",{className:b.a.title,children:t}),n]})},j=(n(16),n(2)),u=n.n(j);var x=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.positivePercentage,i=["".concat(u.a.box),"animate__animated","animate__zoomIn"];return Object(d.jsxs)("div",{className:i.join(" "),children:[Object(d.jsx)("p",{className:u.a.title,children:"Statistics"}),Object(d.jsxs)("div",{className:u.a.feedbackBox,children:[Object(d.jsxs)("p",{children:["Good: ",t]}),Object(d.jsxs)("p",{children:["Neutral: ",n]}),Object(d.jsxs)("p",{children:["Bad: ",a]})]}),Object(d.jsxs)("div",{className:u.a.totalBox,children:[Object(d.jsxs)("p",{children:["Total: ",c]}),Object(d.jsxs)("p",{children:["Positive feedback: ",s,"%"]})]})]})},_=n(8),f=n.n(_);var O=function(e){var t=e.message;return Object(d.jsx)("p",{className:f.a.message,children:t})},h=n(6),p=n.n(h);var m=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(d.jsx)("div",{className:p.a.btnBox,children:t.map((function(e,t){return Object(d.jsx)("button",{className:p.a.btn,onClick:function(){return n(e)},type:"button",children:e},t)}))})};var v=function(){var e=Object(a.useState)((function(){return 0})),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),i=Object(o.a)(s,2),r=i[0],b=i[1],j=Object(a.useState)(0),u=Object(o.a)(j,2),_=u[0],f=u[1],h=n+r+_,p=Math.round(n/h*100);return Object(d.jsx)("div",{className:"AppContainer",children:Object(d.jsxs)(l,{title:"Please leave feedback",children:[Object(d.jsx)(m,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":c((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":f((function(e){return e+1}));break;default:return}}}),h>0?Object(d.jsx)(x,{good:n,neutral:r,bad:_,total:h,positivePercentage:p}):Object(d.jsx)(O,{message:"No feedback given"})]})})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.4c4c312e.chunk.js.map