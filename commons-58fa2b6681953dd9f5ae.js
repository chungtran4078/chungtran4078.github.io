(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var o=n("q1tI"),a=r(o),i=r(n("Gytx"));function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function T(){s=t(l.map((function(t){return t.props}))),f.canUseDOM?e(s):n&&(s=n(s))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,l=[],t};var u=o.prototype;return u.shouldComponentUpdate=function(t){return!i(t,this.props)},u.componentWillMount=function(){l.push(this),T()},u.componentDidUpdate=function(){T()},u.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),T()},u.render=function(){return a.createElement(r,this.props)},o}(o.Component);return u(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),u(f,"canUseDOM",c),f}}},"8ypT":function(t,e,n){},Bl7J:function(t,e,n){"use strict";var r=n("PlB2"),o=n("q1tI"),a=n.n(o),i=n("Wbzz"),u=function(t){var e=t.siteTitle;return a.a.createElement("div",null,a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},a.a.createElement("div",{className:"site-title"},a.a.createElement(i.Link,{to:"/"},e)),a.a.createElement("p",{className:"site-sub-title"},"Lôm côm, ba lăng nhăng.")))};u.defaultProps={siteTitle:""};var c=u;n("8ypT");n("TpNv");e.a=function(t){var e=t.children;return a.a.createElement(i.StaticQuery,{query:"755544856",render:function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c,{siteTitle:t.site.siteMetadata.title}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e,a.a.createElement("footer",null,"© me 2018, Built with ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:r})}},C9fy:function(t,e,n){var r=Date.prototype,o=r.toString,a=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("IYdN")(r,"toString",(function(){var t=a.call(this);return t==t?o.call(this):"Invalid Date"}))},Gytx:function(t,e,n){n("n7j8"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(e),c=0;c<a.length;c++){var s=a[c];if(!u(s))return!1;var l=t[s],T=e[s];if(!1===(o=n?n.call(r,l,T,s):void 0)||void 0===o&&l!==T)return!1}return!0}},I9Sg:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Chung Tran","description":"Blog của Chung Tran","author":"@chungtran4078","image":"https://avatars1.githubusercontent.com/u/28822504?s=400&v=4"}}}}')},PlB2:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Chung Tran"}}}}')},R48M:function(t,e,n){var r=n("P8UN");r(r.S+r.F*!n("QPJK"),"Object",{defineProperty:n("rjfK").f})},TJpk:function(t,e,n){n("MIFh"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("JHok"),n("LagC"),n("pS08"),n("sc67"),n("R48M"),n("E5k/"),e.__esModule=!0,e.Helmet=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=T(n("q1tI")),i=T(n("17x9")),u=T(n("8+s/")),c=T(n("bmMU")),s=n("v1p5"),l=n("hFT/");function T(t){return t&&t.__esModule?t:{default:t}}function f(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var d,A,m,h=(0,u.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),y=(d=h,m=A=function(t){function e(){return p(this,e),E(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,c.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case l.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,o=t.arrayTypeChildren,a=t.newChildProps,i=t.nestedChildren;return r({},o,((e={})[n.type]=[].concat(o[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,o=t.child,a=t.newProps,i=t.newChildProps,u=t.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},a,((e={})[o.type]=u,e.titleAttributes=r({},i),e));case l.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},i)});case l.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},i)})}return r({},a,((n={})[o.type]=r({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=r({},e);return Object.keys(t).forEach((function(e){var o;n=r({},n,((o={})[e]=t[e],o))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return a.default.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,a=o.children,i=f(o,["children"]),u=(0,s.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(t,a),t.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:u,nestedChildren:a});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:u,nestedChildren:a})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=f(t,["children"]),o=r({},n);return e&&(o=this.mapChildrenToProps(e,o)),a.default.createElement(d,o)},o(e,null,[{key:"canUseDOM",set:function(t){d.canUseDOM=t}}]),e}(a.default.Component),A.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},A.defaultProps={defer:!0,encodeSpecialCharacters:!0},A.peek=d.peek,A.rewind=function(){var t=d.rewind();return t||(t=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},m);y.renderStatic=y.rewind,e.Helmet=y,e.default=y},TpNv:function(t,e,n){},bmMU:function(t,e,n){"use strict";n("pJf4"),n("Ll4R"),n("q8oJ"),n("C9fy"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("MIFh");var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var u,c,s,l=r(e),T=r(n);if(l&&T){if((c=e.length)!=n.length)return!1;for(u=c;0!=u--;)if(!t(e[u],n[u]))return!1;return!0}if(l!=T)return!1;var f=e instanceof Date,p=n instanceof Date;if(f!=p)return!1;if(f&&p)return e.getTime()==n.getTime();var E=e instanceof RegExp,d=n instanceof RegExp;if(E!=d)return!1;if(E&&d)return e.toString()==n.toString();var A=o(e);if((c=A.length)!==o(n).length)return!1;for(u=c;0!=u--;)if(!a.call(n,A[u]))return!1;if(i&&e instanceof Element&&n instanceof Element)return e===n;for(u=c;0!=u--;)if(!("_owner"===(s=A[u])&&e.$$typeof||t(e[s],n[s])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(t,e,n){n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK"),e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(e.VALID_TAG_NAMES=Object.keys(r).map((function(t){return r[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(o).reduce((function(t,e){return t[o[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},klQ5:function(t,e,n){var r=n("emib"),o=n("TUPI"),a=n("rjfK").f,i=n("chL8").f,u=n("mhTz"),c=n("lb9j"),s=r.RegExp,l=s,T=s.prototype,f=/a/g,p=/a/g,E=new s(f)!==f;if(n("QPJK")&&(!E||n("96qb")((function(){return p[n("sOol")("match")]=!1,s(f)!=f||s(p)==p||"/a/i"!=s(f,"i")})))){s=function(t,e){var n=this instanceof s,r=u(t),a=void 0===e;return!n&&r&&t.constructor===s&&a?t:o(E?new l(r&&!a?t.source:t,e):l((r=t instanceof s)?t.source:t,r&&a?c.call(t):e),n?this:T,s)};for(var d=function(t){t in s||a(s,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},A=i(l),m=0;A.length>m;)d(A[m++]);T.constructor=s,s.prototype=T,n("IYdN")(r,"RegExp",s)}n("to/b")("RegExp")},v1p5:function(t,e,n){(function(t){n("wZFJ"),n("HQhv"),n("1dPr"),n("JHok"),n("MIFh"),n("sc67"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("OeI1"),n("AqHK"),n("U6Bt"),n("sC2a"),n("E5k/"),n("m210"),n("4DPX"),e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=c(n("q1tI")),i=c(n("MgzW")),u=n("hFT/");function c(t){return t&&t.__esModule?t:{default:t}}var s,l=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(t){var e=A(t,u.TAG_NAMES.TITLE),n=A(t,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,(function(){return e}));var r=A(t,u.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},f=function(t){return A(t,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return o({},t,e)}),{})},E=function(t,e){return e.filter((function(t){return void 0!==t[u.TAG_NAMES.BASE]})).map((function(t){return t[u.TAG_NAMES.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==t.indexOf(a)&&n[a])return e.concat(n)}return e}),[])},d=function(t,e,n){var o={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&v("Helmet: "+t+' should be of type "Array". Instead found type "'+r(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var r={};n.filter((function(t){for(var n=void 0,a=Object.keys(t),i=0;i<a.length;i++){var c=a[i],s=c.toLowerCase();-1===e.indexOf(s)||n===u.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||s===u.TAG_PROPERTIES.REL&&"stylesheet"===t[s].toLowerCase()||(n=s),-1===e.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var a=Object.keys(r),c=0;c<a.length;c++){var s=a[c],l=(0,i.default)({},o[s],r[s]);o[s]=l}return t}),[]).reverse()},A=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},m=(s=Date.now(),function(t){var e=Date.now();e-s>16?(s=e,t(e)):setTimeout((function(){m(t)}),0)}),h=function(t){return clearTimeout(t)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:t.requestAnimationFrame||m,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:t.cancelAnimationFrame||h,v=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},b=null,g=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,c=t.noscriptTags,s=t.onChangeClientState,l=t.scriptTags,T=t.styleTags,f=t.title,p=t.titleAttributes;R(u.TAG_NAMES.BODY,r),R(u.TAG_NAMES.HTML,o),P(f,p);var E={baseTag:M(u.TAG_NAMES.BASE,n),linkTags:M(u.TAG_NAMES.LINK,a),metaTags:M(u.TAG_NAMES.META,i),noscriptTags:M(u.TAG_NAMES.NOSCRIPT,c),scriptTags:M(u.TAG_NAMES.SCRIPT,l),styleTags:M(u.TAG_NAMES.STYLE,T)},d={},A={};Object.keys(E).forEach((function(t){var e=E[t],n=e.newTags,r=e.oldTags;n.length&&(d[t]=n),r.length&&(A[t]=E[t].oldTags)})),e&&e(),s(t,d,A)},_=function(t){return Array.isArray(t)?t.join(""):t},P=function(t,e){void 0!==t&&document.title!==t&&(document.title=_(t)),R(u.TAG_NAMES.TITLE,e)},R=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(e),c=0;c<i.length;c++){var s=i[c],l=e[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var T=a.indexOf(s);-1!==T&&a.splice(T,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,i.join(","))}},M=function(t,e){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some((function(t,e){return i=e,n.isEqualNode(t)}))?o.splice(i,1):a.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),a.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:a}},O=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},I=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[u.REACT_TAG_MAP[n]||n]=t[n],e}),e)},C=function(t,e,n){switch(t){case u.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[u.HELMET_ATTRIBUTE]=!0,o=I(n,r),[a.default.createElement(u.TAG_NAMES.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=O(n),a=_(e);return o?"<"+t+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+l(a,r)+"</"+t+">":"<"+t+" "+u.HELMET_ATTRIBUTE+'="true">'+l(a,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(e)},toString:function(){return O(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach((function(t){var n=u.REACT_TAG_MAP[t]||t;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),a.default.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===u.TAG_PROPERTIES.INNER_HTML||t===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+l(r[e],n)+'"';return t?t+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===u.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+t+">")}),"")}(t,e,n)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[u.HTML_TAG_MAP[n]||n]=t[n],e}),e)},e.handleClientStateChange=function(t){b&&S(b),t.defer?b=y((function(){g(t,(function(){b=null}))})):(g(t),b=null)},e.mapStateOnServer=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,c=t.noscriptTags,s=t.scriptTags,l=t.styleTags,T=t.title,f=void 0===T?"":T,p=t.titleAttributes;return{base:C(u.TAG_NAMES.BASE,e,r),bodyAttributes:C(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(u.ATTRIBUTE_NAMES.HTML,o,r),link:C(u.TAG_NAMES.LINK,a,r),meta:C(u.TAG_NAMES.META,i,r),noscript:C(u.TAG_NAMES.NOSCRIPT,c,r),script:C(u.TAG_NAMES.SCRIPT,s,r),style:C(u.TAG_NAMES.STYLE,l,r),title:C(u.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}},e.reducePropsToState=function(t){return{baseTag:E([u.TAG_PROPERTIES.HREF],t),bodyAttributes:p(u.ATTRIBUTE_NAMES.BODY,t),defer:A(t,u.HELMET_PROPS.DEFER),encode:A(t,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(u.ATTRIBUTE_NAMES.HTML,t),linkTags:d(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],t),metaTags:d(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:d(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:f(t),scriptTags:d(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],t),styleTags:d(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],t),title:T(t),titleAttributes:p(u.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=y,e.warn=v}).call(this,n("yLpj"))},vrFN:function(t,e,n){"use strict";var r=n("I9Sg"),o=n("q1tI"),a=n.n(o),i=n("TJpk"),u=n.n(i),c=n("Wbzz");function s(t){var e=t.description,n=t.lang,o=t.meta,i=t.keywords,s=t.title,T=t.image;return a.a.createElement(c.StaticQuery,{query:l,render:function(t){var r=e||t.site.siteMetadata.description,c=T||t.site.siteMetadata.image;return a.a.createElement(u.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:s},{property:"og:description",content:r},{property:"og:type",content:"website"},{property:"og:image",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:r},{name:"google-site-verification",content:"OXO63UNlYgp3J5znjIDm1AWeHj7MCcoSLxJV3ucTSUo"}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(o)})},data:r})}s.defaultProps={lang:"en",meta:[],keywords:[]},e.a=s;var l="55833009"}}]);
//# sourceMappingURL=commons-58fa2b6681953dd9f5ae.js.map