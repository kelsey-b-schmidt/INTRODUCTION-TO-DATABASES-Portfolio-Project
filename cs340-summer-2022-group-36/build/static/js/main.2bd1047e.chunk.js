(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,r){},19:function(e,t,r){},21:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),l=r(6),o=r.n(l),c=(r(17),r(19),r(7)),i=r(3);function u(e){var t=e.customer;return a.a.createElement("tr",null,a.a.createElement("td",null,t.customerID),a.a.createElement("td",null,t.customerName),a.a.createElement("td",null,t.email),a.a.createElement("td",null,t.phoneNumber),a.a.createElement("td",null,a.a.createElement("input",{type:"button",value:"Update"})),a.a.createElement("td",null,a.a.createElement("input",{type:"button",value:"Delete",onClick:'confirm("This will delete the selected customer.\\nAre you sure you want to submit?")'})),a.a.createElement("td",null,a.a.createElement("input",{type:"button",value:"See Addresses"})),a.a.createElement("td",null,a.a.createElement("input",{type:"button",value:"See Orders"})))}function s(e){var t=e.customers;return a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Customer ID"),a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Email"),a.a.createElement("th",null,"Phone Number"),a.a.createElement("th",{colSpan:"4"},"Actions"))),a.a.createElement("tbody",null,t.map(function(e,t){return a.a.createElement(u,{customer:e,key:t})})))}function m(){m=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,r){return e[t]=r}}function i(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,l=Object.create(a.prototype),o=new O(n||[]);return l._invoke=function(e,t,r){var n="suspendedStart";return function(a,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw l;return A()}for(r.method=a,r.arg=l;;){var o=r.delegate;if(o){var c=b(o,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var i=u(e,t,r);if("normal"===i.type){if(n=r.done?"completed":"suspendedYield",i.arg===s)continue;return{value:i.arg,done:r.done}}"throw"===i.type&&(n="completed",r.method="throw",r.arg=i.arg)}}}(e,r,o),l}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}e.wrap=i;var s={};function d(){}function h(){}function f(){}var p={};c(p,a,function(){return this});var E=Object.getPrototypeOf,v=E&&E(E(S([])));v&&v!==t&&r.call(v,a)&&(p=v);var y=f.prototype=d.prototype=Object.create(p);function g(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var n;this._invoke=function(a,l){function o(){return new t(function(n,o){!function n(a,l,o,c){var i=u(e[a],e,l);if("throw"!==i.type){var s=i.arg,m=s.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,o,c)},function(e){n("throw",e,o,c)}):t.resolve(m).then(function(e){s.value=e,o(s)},function(e){return n("throw",e,o,c)})}c(i.arg)}(a,l,n,o)})}return n=n?n.then(o,o):o()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,l=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:A}}function A(){return{value:void 0,done:!0}}return h.prototype=f,c(y,"constructor",f),c(f,"constructor",h),h.displayName=c(f,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,o,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(w.prototype),c(w.prototype,l,function(){return this}),e.AsyncIterator=w,e.async=function(t,r,n,a,l){void 0===l&&(l=Promise);var o=new w(i(t,r,n,a),l);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},g(y),c(y,o,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a],o=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var c=r.call(l,"catchLoc"),i=r.call(l,"finallyLoc");if(c&&i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var l=a;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}function d(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),r=t[0],l=t[1];return Object(n.useEffect)(function(){(function(){var e=Object(c.a)(m().mark(function e(){var t,r;return m().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,l(r);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()().catch(console.error)},[]),a.a.createElement("div",null,a.a.createElement("h2",null,"Customers"),a.a.createElement("div",{class:"table"},a.a.createElement("form",{id:"search"},a.a.createElement("input",{type:"text",placeholder:"Search..."}),a.a.createElement("input",{type:"button",value:"Submit"}),a.a.createElement("input",{type:"reset",id:"search"})),a.a.createElement("fieldset",null,a.a.createElement("legend",null,a.a.createElement("strong",null,"Browse Customers")),a.a.createElement(s,{customers:r}))),a.a.createElement("br",null),a.a.createElement("input",{type:"button",value:"Add New Customer"}),a.a.createElement("br",null),a.a.createElement("br",null))}var h=r(4);function f(e){var t=e.link,r={Home:a.a.createElement(h.b,{to:"/"},"Home"),Customers:a.a.createElement(h.b,{to:"/Customers"},"Customers"),Addresses:a.a.createElement(h.b,{to:"/Addresses"},"Addresses"),Products:a.a.createElement(h.b,{to:"/Products"},"Products"),Orders:a.a.createElement(h.b,{to:"/Orders"},"Orders"),OrderDetails:a.a.createElement(h.b,{to:"/OrderDetails"},"OrderDetails")};return"Home"===t?r.Home:"Customers"===t?r.Customers:"Addresses"===t?r.Addresses:"Products"===t?r.Products:"Orders"===t?r.Orders:"OrderDetails"===t?r.OrderDetails:void 0}function p(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Home"),a.a.createElement("h3",null,"Welcome to the CoffeeBuzz Database"),a.a.createElement("p",null,"This site can be used to access the following databases and complete the listed actions for each:"),a.a.createElement("p",null,a.a.createElement("strong",null,a.a.createElement(f,{link:"Customers"}))),a.a.createElement("ul",null,a.a.createElement("li",null,"View all customers"),a.a.createElement("li",null,"Search customers"),a.a.createElement("li",null,"Add a new customer"),a.a.createElement("li",null,"See and maintain a customer's information"),a.a.createElement("li",null,"See and maintain a customer's addresses"),a.a.createElement("li",null,"See and maintain a customer's orders")),a.a.createElement("p",null,a.a.createElement("strong",null,"Addresses")),a.a.createElement("ul",null,a.a.createElement("li",null,"View all addresses"),a.a.createElement("li",null,"Search addresses"),a.a.createElement("li",null,"Add a new address"),a.a.createElement("li",null,"Maintain an existing address")),a.a.createElement("p",null,a.a.createElement("strong",null,"Orders")),a.a.createElement("ul",null,a.a.createElement("li",null,"View all orders"),a.a.createElement("li",null,"Search orders"),a.a.createElement("li",null,"Add a new order"),a.a.createElement("li",null,"Maintain an existing order")),a.a.createElement("p",null,a.a.createElement("strong",null,"Products")),a.a.createElement("ul",null,a.a.createElement("li",null,"View all products"),a.a.createElement("li",null,"Search products"),a.a.createElement("li",null,"Add a new product"),a.a.createElement("li",null,"Maintain an existing product")))}var E=r(0);function v(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",null,a.a.createElement("h1",null,"Kelsey and Andy's Project"),a.a.createElement("p",null,a.a.createElement("strong",null,a.a.createElement(f,{link:"Home"}))),a.a.createElement("p",null,a.a.createElement("strong",null,a.a.createElement(f,{link:"Customers"})))),a.a.createElement(h.a,null,a.a.createElement(E.c,null,a.a.createElement(E.a,{path:"/",element:a.a.createElement(p,null)}),a.a.createElement(E.a,{path:"/Customers",element:a.a.createElement(d,null)}))))}var y=function(e){e&&e instanceof Function&&r.e(1).then(r.bind(null,22)).then(function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,l=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),l(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null))),y()},8:function(e,t,r){e.exports=r(21)}},[[8,3,2]]]);
//# sourceMappingURL=main.2bd1047e.chunk.js.map