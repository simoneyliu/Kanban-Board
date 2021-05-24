(this["webpackJsonpkanban-board-react"]=this["webpackJsonpkanban-board-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./h8k-logo_2.entry.js":[26,2]};function o(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return a.e(t[1]).then((function(){return a(o)}))}o.keys=function(){return Object.keys(n)},o.id=21,e.exports=o},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),s=a.n(r),c=(a(18),a(2)),i=a(3),l=a(6),u=a(5),m=(a(19),a(23),a(11)),d=a(12),f=(a(20),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).updateNewTaskValue=function(t){e.setState({newTaskValue:t.target.value})},e.handleCreateTask=function(){if(e.state.newTaskValue){var t={name:e.state.newTaskValue,stage:0};e.setState((function(e){return{tasks:[].concat(Object(d.a)(e.tasks),[t])}})),e.setState({newTaskValue:""})}},e.handleDelete=function(t){var a=e.state.tasks.indexOf(t);e.setState({tasks:e.state.tasks.filter((function(e,t){return t!==a}))})},e.handleGoingBack=function(t){var a=e.state.tasks;a=a.map((function(e){return e.name===t?{name:e.name,stage:0===e.stage?0:e.stage-1}:e})),e.setState({tasks:a})},e.handleGoingForward=function(t){var a=e.state.tasks;a=a.map((function(e){return e.name===t?{name:e.name,stage:3===e.stage?3:e.stage+1}:e})),e.setState({tasks:a})},e.state={tasks:[{name:"1",stage:0},{name:"2",stage:0}],newTaskValue:""},e.stagesNames=["Backlog","To Do","Ongoing","Done"],e}return Object(i.a)(a,[{key:"render",value:function(){for(var e=this,t=this.state.tasks,a=[],n=0;n<this.stagesNames.length;++n)a.push([]);var r,s=Object(m.a)(t);try{for(s.s();!(r=s.n()).done;){var c=r.value;a[c.stage].push(c)}}catch(i){s.e(i)}finally{s.f()}return o.a.createElement("div",{className:"mt-20 layout-column justify-content-center align-items-center"},o.a.createElement("section",{className:"mt-50 layout-row align-items-center justify-content-center"},o.a.createElement("input",{value:this.state.newTaskValue,onChange:function(t){return e.updateNewTaskValue(t)},id:"create-task-input",type:"text",className:"large",placeholder:"New task name","data-testid":"create-task-input"}),o.a.createElement("button",{onClick:this.handleCreateTask,type:"submit",className:"ml-30","data-testid":"create-task-button"},"Create task")),o.a.createElement("div",{className:"mt-50 layout-row"},a.map((function(t,a){return o.a.createElement("div",{className:"card outlined ml-20 mt-0",key:"".concat(a)},o.a.createElement("div",{className:"card-text"},o.a.createElement("h4",null,e.stagesNames[a]),o.a.createElement("ul",{className:"styled mt-50","data-testid":"stage-".concat(a)},t.map((function(t,n){return o.a.createElement("li",{className:"slide-up-fade-in",key:"".concat(a).concat(n)},o.a.createElement("div",{className:"li-content layout-row justify-content-between align-items-center"},o.a.createElement("span",{"data-testid":"".concat(t.name.split(" ").join("-"),"-name")},t.name),o.a.createElement("div",{className:"icons"},o.a.createElement("button",{onClick:function(){return e.handleGoingBack(t.name)},disabled:0===t.stage,className:"icon-only x-small mx-2","data-testid":"".concat(t.name.split(" ").join("-"),"-back")},o.a.createElement("i",{className:"material-icons"},"arrow_back")),o.a.createElement("button",{onClick:function(){return e.handleGoingForward(t.name)},disabled:3===t.stage,className:"icon-only x-small mx-2","data-testid":"".concat(t.name.split(" ").join("-"),"-forward")},o.a.createElement("i",{className:"material-icons"},"arrow_forward")),o.a.createElement("button",{onClick:function(){return e.handleDelete(t)},className:"icon-only danger x-small mx-2","data-testid":"".concat(t.name.split(" ").join("-"),"-delete")},o.a.createElement("i",{className:"material-icons"},"delete")))))})))))}))))}}]),a}(n.Component)),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h8k-navbar",{header:"Kanban Board"}),o.a.createElement(f,null))}}]),a}(n.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var v=a(8);s.a.render(o.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Kanban-Board",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Kanban-Board","/service-worker.js");k?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):h(e)}))}}(),Object(v.a)().then((function(){Object(v.b)(window)}))}],[[13,1,4]]]);
//# sourceMappingURL=main.7c1da14a.chunk.js.map