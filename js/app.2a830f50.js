(function(t){function e(e){for(var n,s,c=e[0],l=e[1],a=e[2],h=0,d=[];h<c.length;h++)s=c[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,a||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,c=1;c<i.length;c++){var l=i[c];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},o={app:0},r=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/testsimongame/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var u=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("7a23");function o(t,e,i,o,r,s){var c=Object(n["h"])("SimonTest");return Object(n["e"])(),Object(n["c"])(c)}var r=Object(n["l"])("data-v-3131502b");Object(n["g"])("data-v-3131502b");var s={class:"simonboxes"},c={class:"simonboxes__items"},l={class:"simonboxes__aside"},a={class:"simonboxes__aside-item"},u=Object(n["d"])("h3",null,"Turn",-1),h={class:"simonboxes__counter"},d=Object(n["d"])("option",{value:"1500"},"1.5 sec",-1),f=Object(n["d"])("option",{value:"1000"},"1 sec",-1),p=Object(n["d"])("option",{value:"400"},"0.4 sec",-1);Object(n["f"])();var b=r((function(t,e,i,o,r,b){return Object(n["e"])(),Object(n["c"])("div",s,[Object(n["d"])("div",c,[Object(n["d"])("div",{onClick:e[1]||(e[1]=function(t){return b.clickBlue()}),class:[r.buttonLight[0]?"lightblue":"blue","simonboxes__item"]},null,2),Object(n["d"])("div",{onClick:e[2]||(e[2]=function(t){return b.clickRed()}),class:[r.buttonLight[1]?"lightred":"red","simonboxes__item"]},null,2),Object(n["d"])("div",{onClick:e[3]||(e[3]=function(t){return b.clickYellow()}),class:[r.buttonLight[2]?"lightyellow":"yellow","simonboxes__item"]},null,2),Object(n["d"])("div",{onClick:e[4]||(e[4]=function(t){return b.clickGreen()}),class:[r.buttonLight[3]?"lightgreen":"green","simonboxes__item"]},null,2)]),Object(n["d"])("div",l,[Object(n["d"])("div",a,[u,Object(n["d"])("span",h,Object(n["i"])(r.counter),1)]),Object(n["k"])(Object(n["d"])("select",{disabled:r.blockSelect,"onUpdate:modelValue":e[5]||(e[5]=function(t){return r.difficulty=t}),class:"simonboxes__aside-item simonboxes__select"},[d,f,p],8,["disabled"]),[[n["j"],r.difficulty]]),Object(n["d"])("button",{class:"simonboxes__aside-item simonboxes__startbtn",onClick:e[6]||(e[6]=function(t){return b.startGame()})},"Start")])])})),m={name:"SimonTest",props:{},data:function(){return{win:!1,order:[],playerOrder:[],flash:0,turn:0,good:!1,compTurn:!1,intervalId:!1,noise:!0,on:!1,buttonLight:[!1,!1,!1,!1],counter:0,difficulty:1500,blockSelect:!1}},methods:{startGame:function(){clearInterval(this.intervalId),this.clearColor(),this.win=!1,this.order=[],this.playerOrder=[],this.flash=0,this.intervalId=0,this.turn=1,this.counter=1,this.good=!0,this.blockSelect=!0;for(var t=0;t<3;t++)this.order.push(Math.floor(4*Math.random())+1);this.compTurn=!0,this.intervalId=setInterval(this.gameTurn,this.difficulty)},gameTurn:function(){var t=this;this.on=!1,this.flash==this.turn&&(clearInterval(this.intervalId),this.compTurn=!1,this.clearColor(),this.on=!0),this.compTurn&&(this.clearColor(),setTimeout((function(){1==t.order[t.flash]&&t.one(),2==t.order[t.flash]&&t.two(),3==t.order[t.flash]&&t.three(),4==t.order[t.flash]&&t.four(),t.flash++}),200))},one:function(){if(this.noise){var t=new Audio;t.src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",t.play()}this.noise=!0,this.buttonLight[0]=!0},two:function(){if(this.noise){var t=new Audio;t.src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",t.play()}this.noise=!0,this.buttonLight[1]=!0},three:function(){if(this.noise){var t=new Audio;t.src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",t.play()}this.noise=!0,this.buttonLight[2]=!0},four:function(){if(this.noise){var t=new Audio;t.src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3",t.play()}this.noise=!0,this.buttonLight[3]=!0},clearColor:function(){this.buttonLight=[!1,!1,!1,!1]},flashColor:function(){this.buttonLight=[!0,!0,!0,!0]},clickBlue:function(){var t=this;this.on&&(this.playerOrder.push(1),this.check(),this.one(),this.win||setTimeout((function(){t.clearColor()}),100))},clickRed:function(){var t=this;this.on&&(this.playerOrder.push(2),this.check(),this.two(),this.win||setTimeout((function(){t.clearColor()}),100))},clickYellow:function(){var t=this;this.on&&(this.playerOrder.push(3),this.check(),this.three(),this.win||setTimeout((function(){t.clearColor()}),100))},clickGreen:function(){var t=this;this.on&&(this.playerOrder.push(4),this.check(),this.four(),this.win||setTimeout((function(){t.clearColor()}),100))},check:function(){var t=this;this.playerOrder[this.playerOrder.length-1]!==this.order[this.playerOrder.length-1]&&(this.good=!1),3==this.playerOrder.length&&this.good&&(this.on=!1,this.winGame()),0==this.good&&(this.on=!1,this.flashColor(),this.counter="wrong!",this.blockSelect=!1,setTimeout((function(){t.turn=0,t.counter=t.turn,t.clearColor()}),800),this.noise=!1),this.turn==this.playerOrder.length&&this.good&&!this.win&&(this.on=!1,this.turn++,this.playerOrder=[],this.compTurn=!0,this.flash=0,this.counter=this.turn,this.intervalId=setInterval(this.gameTurn,this.difficulty))},winGame:function(){this.flashColor(),this.counter="You win!",this.on=!1,this.win=!0,this.blockSelect=!1}}};i("c83c");m.render=b,m.__scopeId="data-v-3131502b";var v=m,O={name:"App",components:{SimonTest:v},data:function(){return{bufArr:[],isButtonDisabled:!0}}};i("5851");O.render=o;var g=O;Object(n["b"])(g).mount("#app"),n["Vue"].config.devtools=!0},5851:function(t,e,i){"use strict";i("ca0b")},c83c:function(t,e,i){"use strict";i("d4a4")},ca0b:function(t,e,i){},d4a4:function(t,e,i){}});
//# sourceMappingURL=app.2a830f50.js.map