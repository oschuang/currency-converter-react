(this.webpackJsonpcurrency=this.webpackJsonpcurrency||[]).push([[0],{13:function(t,e,n){t.exports=n(25)},18:function(t,e,n){},19:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(8),c=n.n(s),i=(n(18),n(9)),o=n(10),l=n(2),u=n(11),h=n(12);n(19);function f(t){var e=t.toString().split(".");return e[0].replace(/\B(?=(\d{3})+(?=$))/g,",")+(e[1]?"."+e[1]:"")}var m=function(t){t.fromCurrency,t.toCurrency,t.amount,t.result;return r.a.createElement("div",{id:"result-div"},r.a.createElement("p",{id:"result-from-p"},"".concat(f(t.amount)," ").concat(t.fromCurrency," =")),r.a.createElement("h3",{id:"result-to-p"},"".concat(f(t.result)," ").concat(t.toCurrency)))},g=function(t){var e=[1,5,10,25,50,100,500,1e3,5e3,1e4];return r.a.createElement("div",{className:"chart"},r.a.createElement("div",{className:"column-chart"},r.a.createElement("h3",{className:"chart-header"},"Convert ".concat(t.fromCurrency," to ").concat(t.toCurrency)),r.a.createElement("h4",{className:"currency-header"},t.fromCurrency),e.map((function(e,n){var a=(n+1)%2===0?"line-even":"line-odd";return r.a.createElement("p",{className:a},"".concat(e," ").concat(t.fromCurrency))}))),r.a.createElement("div",{className:"column-chart"},r.a.createElement("h3",{className:"chart-header"}," \xa0 "),r.a.createElement("h4",{className:"currency-header"},t.toCurrency),e.map((function(e,n){var a=(n+1)%2===0?"line-even":"line-odd";return r.a.createElement("p",{className:a},"".concat(f((t.rate*e).toFixed(3))," ").concat(t.toCurrency))}))))},p=function(t){return r.a.createElement("div",{className:"form-div"},r.a.createElement("p",{className:"form-label"},"Amount"),r.a.createElement("input",{onKeyPress:function(e){return t.validateInput(e)},className:"form-element",onKeyUp:function(e){return t.handleInputAmount(e)}}))},d={AUD:"https://lipis.github.io/flag-icon-css/flags/4x3/au.svg",BGN:"https://lipis.github.io/flag-icon-css/flags/4x3/bg.svg",BRL:"https://lipis.github.io/flag-icon-css/flags/4x3/br.svg",CAD:"https://lipis.github.io/flag-icon-css/flags/4x3/ca.svg",CHF:"https://lipis.github.io/flag-icon-css/flags/4x3/ch.svg",CNY:"https://lipis.github.io/flag-icon-css/flags/4x3/cn.svg",CZK:"https://lipis.github.io/flag-icon-css/flags/4x3/cz.svg",DKK:"https://lipis.github.io/flag-icon-css/flags/4x3/dk.svg",EUR:"https://lipis.github.io/flag-icon-css/flags/4x3/eu.svg",GBP:"https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg",HKD:"https://lipis.github.io/flag-icon-css/flags/4x3/hk.svg",HRK:"https://lipis.github.io/flag-icon-css/flags/4x3/hr.svg",HUF:"https://lipis.github.io/flag-icon-css/flags/4x3/hu.svg",IDR:"https://lipis.github.io/flag-icon-css/flags/4x3/id.svg",ILS:"https://lipis.github.io/flag-icon-css/flags/4x3/il.svg",INR:"https://lipis.github.io/flag-icon-css/flags/4x3/in.svg",ISK:"https://lipis.github.io/flag-icon-css/flags/4x3/is.svg",JPY:"https://lipis.github.io/flag-icon-css/flags/4x3/jp.svg",KRW:"https://lipis.github.io/flag-icon-css/flags/4x3/kr.svg",MXN:"https://lipis.github.io/flag-icon-css/flags/4x3/mx.svg",MYR:"https://lipis.github.io/flag-icon-css/flags/4x3/my.svg",NOK:"https://lipis.github.io/flag-icon-css/flags/4x3/no.svg",NZD:"https://lipis.github.io/flag-icon-css/flags/4x3/nz.svg",PHP:"https://lipis.github.io/flag-icon-css/flags/4x3/ph.svg",PLN:"https://lipis.github.io/flag-icon-css/flags/4x3/pl.svg",RON:"https://lipis.github.io/flag-icon-css/flags/4x3/ro.svg",RUB:"https://lipis.github.io/flag-icon-css/flags/4x3/ru.svg",SEK:"https://lipis.github.io/flag-icon-css/flags/4x3/se.svg",SGD:"https://lipis.github.io/flag-icon-css/flags/4x3/sg.svg",THB:"https://lipis.github.io/flag-icon-css/flags/4x3/th.svg",TRY:"https://lipis.github.io/flag-icon-css/flags/4x3/tr.svg",USD:"https://lipis.github.io/flag-icon-css/flags/4x3/um.svg",ZAR:"https://lipis.github.io/flag-icon-css/flags/4x3/za.svg"},v=function(t){return r.a.createElement("div",{className:"form-div"},r.a.createElement("p",{className:"form-label from-to"},t.listType,r.a.createElement("img",{id:"img-".concat(t.listType.toLowerCase()),src:d[t.currentSelection]})),r.a.createElement("select",{className:"form-element",currencies:t.currencies,onChange:function(e){return t.handleSelectCurrency(e,t.listType)}},r.a.createElement("option",{selected:!0,disabled:!0},t.listType),t.currencies.map((function(e){var n=e[0]+e[1]+e[2],a=n===t.otherSelection?"hidden":"";return n===t.currentSelection?r.a.createElement("option",{selected:!0,className:a},e):r.a.createElement("option",{className:a},e)}))))},y=n(4),C=n(6),b=function(t){return r.a.createElement("div",{id:"button-div"},r.a.createElement("p",{className:"form-label"}," \xa0 "),r.a.createElement("button",{onClick:t.switchCurrencies,id:"btn-switch",className:"form-element"},r.a.createElement(y.a,{icon:C.b,id:"arrow-vertical"}),r.a.createElement(y.a,{icon:C.a,id:"arrow-horizontal"})))},E=function(t){return r.a.createElement("div",{id:"forms-wrapper"},r.a.createElement(p,{validateInput:t.validateInput,handleInputAmount:t.handleInputAmount}),r.a.createElement(v,{listType:"From",currencies:t.currencies,currentSelection:t.fromCurrency,otherSelection:t.toCurrency,handleSelectCurrency:t.handleSelectCurrency}),r.a.createElement(b,{switchCurrencies:t.switchCurrencies}),r.a.createElement(v,{listType:"To",currencies:t.currencies,currentSelection:t.toCurrency,otherSelection:t.fromCurrency,handleSelectCurrency:t.handleSelectCurrency}))},R=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={loaded:!1,currencies:[],rootUrl:"https://api.frankfurter.app",fromCurrency:"USD",toCurrency:"JPY",fromRate:null,toRate:null,amount:1,result:1},a.handleSelectCurrency=a.handleSelectCurrency.bind(Object(l.a)(a)),a.setCurrency=a.setCurrency.bind(Object(l.a)(a)),a.setFromRate=a.setFromRate.bind(Object(l.a)(a)),a.setToRate=a.setToRate.bind(Object(l.a)(a)),a.fetchRate=a.fetchRate.bind(Object(l.a)(a)),a.handleInputAmount=a.handleInputAmount.bind(Object(l.a)(a)),a.setAmount=a.setAmount.bind(Object(l.a)(a)),a.getResult=a.getResult.bind(Object(l.a)(a)),a.switchCurrencies=a.switchCurrencies.bind(Object(l.a)(a)),a.validateInput=a.validateInput.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("".concat(this.state.rootUrl,"/currencies")).then((function(t){return t.json()})).then((function(e){var n=[];for(var a in e)n.push("".concat(a,": ").concat(e[a]));t.setState({currencies:[].concat(n),loaded:!0})})).then((function(){t.setFromRate(),t.setToRate(),t.getResult()}))}},{key:"handleSelectCurrency",value:function(t,e){var n=this,a=t.target.value;new Promise((function(t,r){n.setCurrency(a,e),t()})).then((function(){n.setFromRate(),n.setToRate(),n.getResult()}))}},{key:"setCurrency",value:function(t,e){var n=t[0]+t[1]+t[2];"FROM"===e.toUpperCase()?this.setState({fromCurrency:n}):this.setState({toCurrency:n})}},{key:"setFromRate",value:function(){var t=this;this.fetchRate(this.state.fromCurrency,this.state.toCurrency).then((function(e){return t.setState({fromRate:e})}))}},{key:"setToRate",value:function(){var t=this;this.fetchRate(this.state.toCurrency,this.state.fromCurrency).then((function(e){return t.setState({toRate:e})}))}},{key:"fetchRate",value:function(t,e){return fetch("".concat(this.state.rootUrl,"/latest?from=").concat(t)).then((function(t){return t.json()})).then((function(t){return t.rates[e]}))}},{key:"handleInputAmount",value:function(t){var e=this,n=t.target.value;0!=n&&new Promise((function(t,a){e.setAmount(n),t()})).then((function(){e.getResult()}))}},{key:"setAmount",value:function(t){this.setState({amount:t})}},{key:"getResult",value:function(){var t=this;fetch("".concat(this.state.rootUrl,"/latest?amount=").concat(this.state.amount,"&from=").concat(this.state.fromCurrency,"&to=").concat(this.state.toCurrency)).then((function(t){return t.json()})).then((function(e){var n=e.rates[t.state.toCurrency].toFixed(3);t.setState({result:n})}))}},{key:"switchCurrencies",value:function(){var t=this,e=this.state.fromCurrency,n=this.state.toCurrency;new Promise((function(a,r){t.setState({fromCurrency:n,toCurrency:e}),a()})).then((function(){t.setFromRate(),t.setToRate(),t.getResult()}))}},{key:"validateInput",value:function(t){var e=t.charCode;46!=e&&(e<48||e>57)&&(console.log("not valid"),t.preventDefault()),46==e&&this.state.amount.toString().split("").indexOf(".")>-1&&t.preventDefault(),48===e&&(t.target.value||t.preventDefault())}},{key:"render",value:function(){return this.state.loaded?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"header"},"Currency Converter"),r.a.createElement("div",{id:"top-wrapper"},r.a.createElement(E,{validateInput:this.validateInput,handleInputAmount:this.handleInputAmount,currencies:this.state.currencies,fromCurrency:this.state.fromCurrency,toCurrency:this.state.toCurrency,handleSelectCurrency:this.handleSelectCurrency,switchCurrencies:this.switchCurrencies}),r.a.createElement(m,{fromCurrency:this.state.fromCurrency,toCurrency:this.state.toCurrency,amount:this.state.amount,result:this.state.result})),this.state.fromCurrency&&this.state.toCurrency?r.a.createElement("div",{id:"charts-wrapper"},r.a.createElement(g,{rate:this.state.fromRate,fromCurrency:this.state.fromCurrency,toCurrency:this.state.toCurrency}),r.a.createElement(g,{rate:this.state.toRate,fromCurrency:this.state.toCurrency,toCurrency:this.state.fromCurrency}),r.a.createElement("p",{id:"anchor"},"Currency rates provided by"," ",r.a.createElement("a",{href:"https://www.frankfurter.app/"},"Frankfurter API"))):null):r.a.createElement("div",{id:"loading-div"},r.a.createElement("p",null,"Now loading currency data from the"," ",r.a.createElement("a",{href:"https://api.frankfurter.app/"},"Frankfurter API"),"."),r.a.createElement("p",null,"If this app does not load, then the API is currently unavailable. Please try again later."))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.b20f0dc2.chunk.js.map