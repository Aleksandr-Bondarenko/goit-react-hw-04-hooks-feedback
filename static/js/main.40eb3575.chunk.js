(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={box:"Statistics_box__2wFDO",title:"Statistics_title__1KM1A",feedbackBox:"Statistics_feedbackBox__2J_8n",totalBox:"Statistics_totalBox__3E3df"}},,function(e,t,a){e.exports={section:"Section_section__3ImBd",title:"Section_title__1FMP0"}},function(e,t,a){e.exports={btnBox:"FeedbackOptions_btnBox__38b7m",btn:"FeedbackOptions_btn__39duJ"}},,,,,function(e,t,a){e.exports={message:"Notification_message__1U-PX"}},,,,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(6),i=a.n(o),s=(a(17),a(7)),r=a(8),l=a(9),d=a(12),b=a(11),u=(a(18),a(4)),j=a.n(u),p=a(0);var x=function(e){var t=e.title,a=e.children;return Object(p.jsxs)("section",{className:j.a.section,children:[Object(p.jsx)("h1",{className:j.a.title,children:t}),a]})},h=(a(20),a(2)),f=a.n(h);var v=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,o=e.positivePercentage,i=["".concat(f.a.box),"animate__animated","animate__zoomIn"];return Object(p.jsxs)("div",{className:i.join(" "),children:[Object(p.jsx)("p",{className:f.a.title,children:"Statistics"}),Object(p.jsxs)("div",{className:f.a.feedbackBox,children:[Object(p.jsxs)("p",{children:["Good: ",t]}),Object(p.jsxs)("p",{children:["Neutral: ",a]}),Object(p.jsxs)("p",{children:["Bad: ",n]})]}),Object(p.jsxs)("div",{className:f.a.totalBox,children:[Object(p.jsxs)("p",{children:["Total: ",c]}),Object(p.jsxs)("p",{children:["Positive feedback: ",o,"%"]})]})]})},_=a(10),O=a.n(_);var m=function(e){var t=e.message;return Object(p.jsx)("p",{className:O.a.message,children:t})},k=a(5),g=a.n(k);var F=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(p.jsx)("div",{className:g.a.btnBox,children:t.map((function(e,t){return Object(p.jsx)("button",{className:g.a.btn,onClick:function(){return a(e)},type:"button",children:e},t)}))})},N=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:e.props.initialValue,neutral:e.props.initialValue,bad:e.props.initialValue},e.message="No feedback given",e.options=["good","neutral","bad"],e.onLeaveFeedback=function(t){return e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return 0===e.countTotalFeedback()?0:Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return Object(p.jsx)("div",{className:"AppContainer",children:Object(p.jsxs)(x,{title:"Please leave feedback",children:[Object(p.jsx)(F,{options:this.options,onLeaveFeedback:this.onLeaveFeedback}),this.countTotalFeedback()>0?Object(p.jsx)(v,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(p.jsx)(m,{message:this.message})]})})}}]),a}(n.Component);N.defaultProps={initialValue:0};var B=N;i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.40eb3575.chunk.js.map