(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),l=n(6),o=n.n(l),i=(n(17),n(19),n(7)),c=n(3);function u(e){var t=e.customer;return a.a.createElement("tr",null,a.a.createElement("td",null,t.customerID),a.a.createElement("td",null,t.customerName),a.a.createElement("td",null,t.email),a.a.createElement("td",null,t.phoneNumber),a.a.createElement("td",null,a.a.createElement("input",{type:"button",value:"Update"})),a.a.createElement("td",null,a.a.createElement("input",{type:"button",value:"Delete",onClick:'confirm("This will delete the selected customer.\\nAre you sure you want to submit?")'})),a.a.createElement("td",null,a.a.createElement("input",{type:"button",value:"See Addresses"})),a.a.createElement("td",null,a.a.createElement("input",{type:"button",value:"See Orders"})))}function s(e){var t=e.customers;return a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Customer ID"),a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Email"),a.a.createElement("th",null,"Phone Number"),a.a.createElement("th",{colSpan:"4"},"Actions"))),a.a.createElement("tbody",null,t.map(function(e,t){return a.a.createElement(u,{customer:e,key:t})})))}function m(){m=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(_){i=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,l=Object.create(a.prototype),o=new S(r||[]);return l._invoke=function(e,t,n){var r="suspendedStart";return function(a,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw l;return j()}for(n.method=a,n.arg=l;;){var o=n.delegate;if(o){var i=b(o,n);if(i){if(i===s)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,o),l}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(_){return{type:"throw",arg:_}}}e.wrap=c;var s={};function h(){}function f(){}function d(){}var p={};i(p,a,function(){return this});var E=Object.getPrototypeOf,v=E&&E(E(O([])));v&&v!==t&&n.call(v,a)&&(p=v);var y=d.prototype=h.prototype=Object.create(p);function g(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var r;this._invoke=function(a,l){function o(){return new t(function(r,o){!function r(a,l,o,i){var c=u(e[a],e,l);if("throw"!==c.type){var s=c.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,o,i)},function(e){r("throw",e,o,i)}):t.resolve(m).then(function(e){s.value=e,o(s)},function(e){return r("throw",e,o,i)})}i(c.arg)}(a,l,r,o)})}return r=r?r.then(o,o):o()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=d,i(y,"constructor",d),i(d,"constructor",f),f.displayName=i(d,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,i(e,o,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(w.prototype),i(w.prototype,l,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,r,a,l){void 0===l&&(l=Promise);var o=new w(c(t,n,r,a),l);return e.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})},g(y),i(y,o,"Generator"),i(y,a,function(){return this}),i(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a],o=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var i=n.call(l,"catchLoc"),c=n.call(l,"finallyLoc");if(i&&c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(i){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var l=a;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}function h(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),n=t[0],l=t[1];return Object(r.useEffect)(function(){(function(){var e=Object(i.a)(m().mark(function e(){var t,n;return m().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()().catch(console.error)},[]),a.a.createElement("div",null,a.a.createElement("h2",null,"Customers"),a.a.createElement("div",{class:"table"},a.a.createElement("form",{id:"search"},a.a.createElement("input",{type:"text",placeholder:"Search..."}),a.a.createElement("input",{type:"button",value:"Submit"}),a.a.createElement("input",{type:"reset",id:"search"})),a.a.createElement("fieldset",null,a.a.createElement("legend",null,a.a.createElement("strong",null,"Browse Customers")),a.a.createElement(s,{customers:n}))),a.a.createElement("br",null),a.a.createElement("input",{type:"button",value:"Add New Customer"}),a.a.createElement("br",null),a.a.createElement("br",null))}var f=n(4);function d(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Home"),a.a.createElement("h3",null,"Welcome to the CoffeeBuzz Database"),a.a.createElement("p",null,"This site can be used to access the following databases and complete the listed actions for each:"),a.a.createElement("p",null,a.a.createElement("strong",null,a.a.createElement(f.b,{to:"/api"},"Customers"))),a.a.createElement("ul",null,a.a.createElement("li",null,"View all customers"),a.a.createElement("li",null,"Search customers"),a.a.createElement("li",null,"Add a new customer"),a.a.createElement("li",null,"See and maintain a customer's information"),a.a.createElement("li",null,"See and maintain a customer's addresses"),a.a.createElement("li",null,"See and maintain a customer's orders")),a.a.createElement("p",null,a.a.createElement("strong",null,"Addresses")),a.a.createElement("ul",null,a.a.createElement("li",null,"View all addresses"),a.a.createElement("li",null,"Search addresses"),a.a.createElement("li",null,"Add a new address"),a.a.createElement("li",null,"Maintain an existing address")),a.a.createElement("p",null,a.a.createElement("strong",null,"Orders")),a.a.createElement("ul",null,a.a.createElement("li",null,"View all orders"),a.a.createElement("li",null,"Search orders"),a.a.createElement("li",null,"Add a new order"),a.a.createElement("li",null,"Maintain an existing order")),a.a.createElement("p",null,a.a.createElement("strong",null,"Products")),a.a.createElement("ul",null,a.a.createElement("li",null,"View all products"),a.a.createElement("li",null,"Search products"),a.a.createElement("li",null,"Add a new product"),a.a.createElement("li",null,"Maintain an existing product")))}var p=n(0);function E(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Andy and Kelsey's Project"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(f.b,{to:"/"},"Home"))))}function v(){return a.a.createElement("div",null,a.a.createElement(E,null),a.a.createElement(f.a,null,a.a.createElement(p.c,null,a.a.createElement(p.a,{path:"/",element:a.a.createElement(d,null)}),a.a.createElement(p.a,{path:"/Customers",element:a.a.createElement(h,null)}))))}var y=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,22)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,l=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),l(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null))),y()},8:function(e,t,n){e.exports=n(21)}},[[8,3,2]]]);
//# sourceMappingURL=main.aa4cd371.chunk.js.map