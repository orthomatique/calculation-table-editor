(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6152)}])},6152:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ee}});var r=t(5944),i=t(7294),l=t(7948),a=t(7357),c=t(5861),o=t(6886),u=t(5773),s=JSON.parse('{"uuid":"{f3943bed-4fae-49f2-9581-3e84966bd86c}","testName":"mon test perso","type":"LE","description":"la description","json":"","patho":"ET:-1.6449","difficultyThreshold":"ET:-1.3","options":["AUTOCONV"],"children":[{"id":"custom_e91797cd-d5c1-45e4-847a-1a3a052e9b09","input":["SCORE_ET","SCORE_CENTILE"],"label":"e1"},{"id":"custom_b17862c8-7842-465b-990a-db98d1bb4b53","input":["SCORE_CENTILE"],"label":"e2"},{"id":"custom_e91797cd-d5c1-45e4-847a-1a3a052e9b10","input":["SCORE_ET"],"label":"e3"}],"affectation":[],"testCode":"customtestsf3943bed-4fae-49f2-9581-3e84966bd86c","calcul":[{"classes":"CE1","data":{"custom_e91797cd-d5c1-45e4-847a-1a3a052e9b09":{"moyenne":67.83,"ET":28.13,"order":"ASC","pct":[{"p":95,"v":116},{"p":90,"v":103},{"p":85,"v":98},{"p":80,"v":90},{"p":75,"v":86},{"p":70,"v":79},{"p":65,"v":73},{"p":60,"v":70},{"p":55,"v":68},{"p":50,"v":64},{"p":45,"v":59},{"p":40,"v":57},{"p":35,"v":54},{"p":30,"v":52},{"p":25,"v":50},{"p":20,"v":48},{"p":15,"v":41},{"p":10,"v":37},{"p":5,"v":24}]}}}]}'),d=t(7720),f=t(1903);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}function h(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var v=function(e){var n=e.label,t=e.value,i=e.onChangeValue,l=e.InputProps,a=h(e,["label","value","onChangeValue","InputProps"]);return(0,r.tZ)(f.Z,m({label:n,type:"number",value:t,onChange:function(e){i(e.target.valueAsNumber)},InputProps:m({inputMode:"numeric",inputProps:{step:.1}},l)},a))},Z=function(e){return["SCORE_ET","TEMPS_ET","ERR_SCORE_ET","ERR_TEMPS_ET"].some((function(n){return e.includes(n)}))},b=function(e){return["SCORE_CENTILE","TEMPS_CENTILE","ERR_CENTILE","ERR_TEMPSCENTILE","SCORE_QUART","SCORE_QUINT"].some((function(n){return e.includes(n)}))};function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){y(e,n,t[n])}))}return e}var C=function(e){var n=e.id,t=e.input,i=e.label,l=e.centileColumns,a=e.calculData,u=e.setCalculData,s=function(e){return function(t){var r=a[n],i=(r.pct||[]).map((function(n){var r=n.p,i=n.v;return r!==e?{p:r,v:i}:{p:r,v:t}}));u(g({},a,y({},n,g({},r,{pct:i}))))}};return(0,r.BX)(o.ZP,{item:!0,md:12,container:!0,rowSpacing:1,spacing:2,alignItems:"center",children:[(0,r.tZ)(o.ZP,{item:!0,md:3,children:(0,r.BX)(c.Z,{variant:"h4",children:["- ",i]})}),(0,r.tZ)(o.ZP,{item:!0,md:2,container:!0,rowSpacing:1,spacing:2,children:Z(t)&&(0,r.BX)(r.HY,{children:[(0,r.tZ)(o.ZP,{item:!0,md:12,children:(0,r.tZ)(v,{label:"Moyenne",value:a[n].moyenne,onChangeValue:function(e){var t=a[n];u(g({},a,y({},n,g({},t,{moyenne:e}))))}})}),(0,r.tZ)(o.ZP,{item:!0,md:12,children:(0,r.tZ)(v,{label:"E.T.",value:a[n].ET,onChangeValue:function(e){var t=a[n];u(g({},a,y({},n,g({},t,{ET:e}))))}})})]})}),(0,r.tZ)(o.ZP,{item:!0,md:7,container:!0,rowSpacing:1,spacing:2,children:b(t)&&l.map((function(e){var t=e.centileValue;return(0,r.tZ)(o.ZP,{item:!0,xl:1,lg:2,md:3,children:(0,r.tZ)(v,{label:"P".concat(t),value:((a[n].pct||[]).find((function(e){return e.p===t}))||{}).v||0,onChangeValue:s(t)})},t)}))}),(0,r.tZ)(o.ZP,{item:!0,md:12,children:(0,r.tZ)(d.Z,{})})]},n)},P=t(5135),E=t(3946),O=t(657),S=t(7645),w=t(6514),j=t(8951),T=t(7109),_=t(1425),A=t(3321),B=function(e){var n=e.addPercentileColumn,t=(0,i.useState)(!1),l=t[0],a=t[1],c=(0,i.useState)(0),o=c[0],u=c[1],s=function(){a(!1)};return(0,r.BX)(r.HY,{children:[(0,r.tZ)(E.Z,{onClick:function(){a(!0)},children:(0,r.tZ)(P.Z,{})}),(0,r.BX)(O.Z,{open:l,onClose:s,children:[(0,r.tZ)(S.Z,{children:"Ajout d'une limite de centile"}),(0,r.BX)(w.Z,{children:[(0,r.tZ)(j.Z,{children:"Pour ajouter une limite de centile, merci de saisir ci-dessous la valeur"}),(0,r.tZ)(v,{label:"limite de centile",value:o,onChangeValue:u,margin:"dense",fullWidth:!0,variant:"standard",InputProps:{startAdornment:(0,r.tZ)(T.Z,{position:"start",children:"P"})}})]}),(0,r.BX)(_.Z,{children:[(0,r.tZ)(A.Z,{onClick:s,children:"Annuler"}),(0,r.tZ)(A.Z,{onClick:function(){a(!1),o&&(n(o),u(0))},children:"Valider"})]})]})]})};function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function X(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return I(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=function(e){var n=e.centileColumns,t=e.setCentileColumns;return(0,r.BX)(o.ZP,{item:!0,md:12,container:!0,spacing:2,children:[(0,r.tZ)(o.ZP,{item:!0,md:3,children:(0,r.tZ)(c.Z,{variant:"h4",children:"Libell\xe9 d'\xe9preuve"})}),(0,r.tZ)(o.ZP,{item:!0,md:2,children:(0,r.tZ)(c.Z,{variant:"h4",children:"Zscore"})}),(0,r.BX)(o.ZP,{item:!0,md:7,container:!0,spacing:2,children:[(0,r.tZ)(o.ZP,{item:!0,md:12,children:(0,r.tZ)(c.Z,{variant:"h4",children:"centiles"})}),(0,r.BX)(o.ZP,{item:!0,md:12,container:!0,spacing:2,children:[n.map((function(e){return(0,r.BX)(o.ZP,{item:!0,xl:1,lg:2,md:3,children:["P",e.centileValue]},e.centileValue)})),(0,r.tZ)(B,{addPercentileColumn:function(e){t((function(n){var t=X(n).concat([{centileValue:e}]);return t.sort((function(e,n){return e.centileValue-n.centileValue})),t}))}})]})]}),(0,r.tZ)(o.ZP,{item:!0,md:12,children:(0,r.tZ)(d.Z,{})})]})},R=t(4051),V=t.n(R),k=(t(7715),t(7885));t(1876).Buffer;function x(e,n,t,r,i,l,a){try{var c=e[l](a),o=c.value}catch(u){return void t(u)}c.done?n(o):Promise.resolve(o).then(r,i)}function D(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var l=e.apply(n,t);function a(e){x(l,r,i,a,c,"next",e)}function c(e){x(l,r,i,a,c,"throw",e)}a(void 0)}))}}function L(e){return M.apply(this,arguments)}function M(){return(M=D(V().mark((function e(n){var t,r,i,l,a;return V().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.indexOf("\n"),r=n.slice(0,t),i=n.slice(t+5),l=k.ZP.inflate(i),a=l.toString("utf8"),e.abrupt("return",{header:r,data:a});case 9:throw e.prev=9,e.t0=e.catch(0),console.log({e:e.t0}),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function U(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function F(e,n,t,r,i,l,a){try{var c=e[l](a),o=c.value}catch(u){return void t(u)}c.done?n(o):Promise.resolve(o).then(r,i)}function H(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,l=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);a=!0);}catch(o){c=!0,i=o}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return U(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W=function(e){var n=e.setFileName,t=e.setContent;return(0,r.tZ)(o.ZP,{item:!0,sm:12,children:(0,r.BX)(A.Z,{variant:"contained",component:"label",children:["Upload File",(0,r.tZ)("input",{type:"file",onChange:function(e){var r=H(e.target.files||[],1)[0];if(r){var i,l=new FileReader;l.readAsArrayBuffer(r),l.onload=(i=V().mark((function e(){var i,a,c;return V().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(r.name),i=l.result,a=new Uint8Array(i),e.next=5,L(a);case 5:c=e.sent.data,t(c);case 7:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(t,r){var l=i.apply(e,n);function a(e){F(l,t,r,a,c,"next",e)}function c(e){F(l,t,r,a,c,"throw",e)}a(void 0)}))}),l.onerror=function(){console.log("file error",l.error)}}},hidden:!0})]})})},Y=t(913),J=t(3841),Q=t(2059),$=t(3599),q=function(e){var n=e.addClasse,t=(0,i.useState)(!1),l=t[0],a=t[1],c=(0,i.useState)(""),o=c[0],u=c[1],s=function(){a(!1)};return(0,r.BX)(r.HY,{children:[(0,r.tZ)(E.Z,{onClick:function(){a(!0)},children:(0,r.tZ)(P.Z,{})}),(0,r.BX)(O.Z,{open:l,onClose:s,children:[(0,r.tZ)(S.Z,{children:"Ajout d'une classe"}),(0,r.BX)(w.Z,{children:[(0,r.tZ)(j.Z,{children:"Pour ajouter une classe, merci de saisir ci-dessous son libell\xe9"}),(0,r.tZ)(f.Z,{label:"Nouvelle classe",value:o,onChange:function(e){u(e.target.value)},margin:"dense",fullWidth:!0,variant:"standard"})]}),(0,r.BX)(_.Z,{children:[(0,r.tZ)(A.Z,{onClick:s,children:"Annuler"}),(0,r.tZ)(A.Z,{onClick:function(){a(!1),o&&(n(o),u(""))},children:"Valider"})]})]})]})},z=function(e){var n=e.classe,t=e.classes,i=e.setClasse,l=e.addClasse;return(0,r.BX)(r.HY,{children:[(0,r.tZ)(o.ZP,{item:!0,sm:2,children:(0,r.BX)(Y.Z,{fullWidth:!0,children:[(0,r.tZ)(J.Z,{id:"demo-simple-select-label",children:"Classe"}),(0,r.tZ)(Q.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:n,label:"Age",onChange:function(e){return i(e.target.value)},children:t.map((function(e){return(0,r.tZ)($.Z,{value:e,children:e},e)}))})]})}),(0,r.tZ)(o.ZP,{item:!0,sm:10,children:(0,r.tZ)(q,{addClasse:l})})]})};function G(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){G(e,n,t[n])}))}return e}var ee=function(){var e=(0,i.useState)("No file selected yet"),n=e[0],t=e[1],d=(0,i.useState)(),f=d[0],p=d[1],m=(0,i.useState)([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95].map((function(e){return{centileValue:e}}))),h=m[0],v=m[1],y=(0,i.useState)(""),g=y[0],P=y[1];(0,i.useEffect)((function(){p(s);var e=(s.calcul||[{classes:""}])[0].classes;P(e)}),[]);var E=function(e){var n=(f||{}).calcul,t=void 0===n?[]:n,r=t.findIndex((function(e){return e.classes===g})),i={classes:g,data:e};t.splice(r,1,i),p(K({},f,{calcul:t}))},O=((f||{}).children||[]).reduce((function(e,n){var t=n.id,r=n.input,i=Z(r)?{moyenne:0,ET:0}:{},l=b(r)?{order:"ASC",pct:h.map((function(e){return{p:e.centileValue,v:0}}))||[]}:{};return e[t]=K({},i,l),e}),{}),S=((f&&f.calcul||[]).find((function(e){return e.classes===g}))||{}).data,w=(0,u.jT)(O,S,{});return(0,r.tZ)(l.Z,{maxWidth:"lg",children:(0,r.BX)(a.Z,{sx:{my:4,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,r.tZ)(c.Z,{variant:"h4",component:"h1",gutterBottom:!0,children:"\xc9diteur de table de calcul pour orthoscribe V2."}),(0,r.BX)(o.ZP,{container:!0,spacing:1,children:[(0,r.tZ)(W,{setFileName:t,setContent:p}),(0,r.tZ)(o.ZP,{item:!0,md:12,children:n}),(0,r.tZ)(o.ZP,{item:!0,md:12,container:!0,children:(0,r.tZ)(z,{classes:(f&&f.calcul||[]).map((function(e){return e.classes})),classe:g,setClasse:P,addClasse:function(e){var n=(f||{}).calcul,t=void 0===n?[]:n;t.push({classes:e,data:O}),p(K({},f,{calcul:t}))}})}),(0,r.tZ)(N,{centileColumns:h,setCentileColumns:v}),g&&f&&(f.children||[]).map((function(e){var n=e.id,t=e.input,i=e.label;return(0,r.tZ)(C,{id:n,input:t,label:i,centileColumns:h,calculData:w,setCalculData:E},n)})),(0,r.tZ)(o.ZP,{item:!0,md:12,children:JSON.stringify(f)})]})]})})}}},function(e){e.O(0,[655,16,505,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);