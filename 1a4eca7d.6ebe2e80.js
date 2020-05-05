(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(1),o=n(9),a=(n(0),n(212)),i=n(215),c={id:"about",title:"About SAP Cloud SDK",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"About",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},s={id:"overview/about",title:"About SAP Cloud SDK",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",source:"@site/docs/overview/about.md",permalink:"/cloud-sdk/docs/overview/about",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1587327922,sidebar_label:"About",sidebar:"someSidebar",previous:{title:"Documentation Guide Lines",permalink:"/cloud-sdk/docs/dzen/how-to-write-documentation"},next:{title:"Getting started",permalink:"/cloud-sdk/docs/overview/getting-started"}},l=[{value:"Introduction",id:"introduction",children:[{value:"Cloud SDK components",id:"cloud-sdk-components",children:[]},{value:"Organic part of SAP Cloud Ecosystem",id:"organic-part-of-sap-cloud-ecosystem",children:[]},{value:"Open Source",id:"open-source",children:[]},{value:"Feedback",id:"feedback",children:[]}]}],u={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"The Cloud SDK is a set of tools and libraries for consuming, building or extending SAP services and applications in the\ncloud native way and deploying them to SAP Cloud Platform."),Object(a.b)("p",null,"SAP Cloud SDK was conceived as a collection of best practices for developing cloud native applications withing SAP. Eventually\nit grew into a fully-fledged and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"key-features"}),"feature rich")," development library consisting of three main components."),Object(a.b)("h3",{id:"cloud-sdk-components"},"Cloud SDK components"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../java/introduction"}),"Cloud SDK for Java")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../js/introduction"}),"Cloud SDK for JavaScript (Node.js)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../devops/getting-started"}),"Cloud SDK for CI/CD"))),Object(a.b)("h3",{id:"organic-part-of-sap-cloud-ecosystem"},"Organic part of SAP Cloud Ecosystem"),Object(a.b)("img",{alt:"SAP Cloud SDK as a part of SAP Cloud Applications ecosystem",src:Object(i.a)("img/cloud-sdk-under-the-hood.png")}),";",Object(a.b)("h3",{id:"open-source"},"Open Source"),Object(a.b)("p",null,"The SAP Cloud SDK actively works in the direction of open sourcing most of its code. We endorse best open standards and\ntechnologies to simplify developer's life and stay ahead of the curve. It's almost impossible to develop such a product\nas a closed source only. As of today we already open sourced SDK for ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk"}),"JavaScript")," and\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://sap.github.io/jenkins-library/"}),"CI/CD"),"  to raise transparency, allow developers easily access our source code,\nintegrate it in their Apps and contribute back into SDK to make it better."),Object(a.b)("p",null,"On the other hand we're remaining main contributors to every SDK component and continue actively developing them to\nensure highest quality and seamless integration with other SAP solutions."),Object(a.b)("h3",{id:"feedback"},"Feedback"),Object(a.b)("p",null,"We are happy to hear your feedback about SAP Cloud SDK. Please, fill this ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"URL"}),"feedback survey")," or rich out directly\nvia ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"URL"}),"email")))}d.isMDXComponent=!0},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(f,c({ref:t},l,{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},213:function(e,t,n){"use strict";var r=n(0),o=n(52);t.a=function(){return Object(r.useContext)(o.a)}},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(217);var r=n(213);function o(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},217:function(e,t,n){"use strict";var r=n(12),o=n(24),a=n(218),i="".startsWith;r(r.P+r.F*n(219)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})},218:function(e,t,n){var r=n(77),o=n(26);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},219:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);