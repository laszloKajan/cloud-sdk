(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(1),r=n(9),a=(n(0),n(213)),i=n(216),c={id:"about",title:"About SAP Cloud SDK",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"About",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",custom_edit_url:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/overview/about.md",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},s={id:"overview/about",title:"About SAP Cloud SDK",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",source:"@site/docs/overview/about.md",permalink:"/cloud-sdk/docs/overview/about",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/overview/about.md",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1589390794,sidebar_label:"About",sidebar:"someSidebar",next:{title:"Getting started",permalink:"/cloud-sdk/docs/overview/getting-started"}},u=[{value:"Introduction",id:"introduction",children:[{value:"Cloud SDK components",id:"cloud-sdk-components",children:[]},{value:"Organic part of SAP Cloud Ecosystem",id:"organic-part-of-sap-cloud-ecosystem",children:[]},{value:"Open Source",id:"open-source",children:[]},{value:"Feedback",id:"feedback",children:[]}]}],l={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"The Cloud SDK is a set of tools and libraries for consuming, building or extending SAP services and applications in the\ncloud-native way and deploying them to SAP Cloud Platform."),Object(a.b)("p",null,"SAP Cloud SDK was conceived as a collection of best practices for developing cloud-native applications withing SAP. Eventually\nit grew into a fully-fledged and ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"key-features"}),"feature rich")," development library consisting of three main components."),Object(a.b)("h3",{id:"cloud-sdk-components"},"Cloud SDK components"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"../java/introduction"}),"Cloud SDK for Java")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"../js/introduction"}),"Cloud SDK for JavaScript (Node.js)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"../devops/getting-started"}),"Cloud SDK for CI/CD"))),Object(a.b)("h3",{id:"organic-part-of-sap-cloud-ecosystem"},"Organic part of SAP Cloud Ecosystem"),Object(a.b)("img",{alt:"SAP Cloud SDK as a part of SAP Cloud Applications ecosystem",src:Object(i.a)("img/cloud-sdk-under-the-hood.png")}),";",Object(a.b)("h3",{id:"open-source"},"Open Source"),Object(a.b)("p",null,"The SAP Cloud SDK actively works in the direction of open-sourcing most of its code. We endorse best open standards and\ntechnologies to simplify the developer's life and stay ahead of the curve. It's almost impossible to develop such a product\nas a closed source only. As of today we already open sourced SDK for ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk"}),"JavaScript")," and\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-s4-sdk-pipeline"}),"Continuous delivery toolkit"),"  to raise transparency, allow developers easily access our source code,\nintegrate it in their Apps, and contribute back into SDK to make it better."),Object(a.b)("p",null,"On the other hand, we're remaining main contributors to every SDK component and continue actively developing them to\nensure the highest quality and seamless integration with other SAP solutions."),Object(a.b)("h3",{id:"feedback"},"Feedback"),Object(a.b)("p",null,"We are happy to hear your feedback about SAP Cloud SDK. You can write us an ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"s4sdk@sap.com"}),"email")," or submit an issue\nin this ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk/issues"}),"repository")))}d.isMDXComponent=!0},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=o,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?r.a.createElement(f,c({ref:t},u,{components:n})):r.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},214:function(e,t,n){"use strict";var o=n(0),r=n(51);t.a=function(){return Object(o.useContext)(r.a)}},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(218);var o=n(214);function r(e){var t=(Object(o.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},218:function(e,t,n){"use strict";var o=n(12),r=n(24),a=n(219),i="".startsWith;o(o.P+o.F*n(220)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),o=String(e);return i?i.call(t,o,n):t.slice(n,n+o.length)===o}})},219:function(e,t,n){var o=n(76),r=n(26);e.exports=function(e,t,n){if(o(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},220:function(e,t,n){var o=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);