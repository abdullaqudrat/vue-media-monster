webpackJsonp([1],{GdZj:function(e,i){},NHnr:function(e,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=a("7+uW"),s=a("mtWM"),o={name:"Search",data:function(){return{msg:"Search For Media Recommendations Here",inputVal:"",info:null,loading:!1,errored:!1,picked:"",music:"music",movie:"movie",show:"show",book:"book",game:"game"}},methods:{getRecommendations:function(){var e=this,i=this.inputVal.replace(/ /g,"+"),a=this.picked;s.get("https://tastedive.com/api/similar?info=1&k=327710-MediaMot-GQ5SN6GL&q="+i+"&type="+a).then(function(i){e.info=i.data.Similar.Results}).catch(function(i){console.log(i),e.errored=!0}).finally(function(){return e.loading=!1})}}},n={render:function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("div",{staticClass:"Search"},[a("h1",[e._v("Media Motion")]),e._v(" "),a("h2",[e._v(e._s(e.msg))]),e._v(" "),a("div",{staticClass:"selection"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",id:"all",value:""},domProps:{checked:e._q(e.picked,"")},on:{change:function(i){e.picked=""}}}),e._v(" "),a("label",{attrs:{for:"all"}},[e._v("all")]),e._v(" "),a("br")]),e._v(" "),a("div",{staticClass:"selection"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],staticClass:"radio",attrs:{type:"radio",id:"music",value:"music"},domProps:{checked:e._q(e.picked,"music")},on:{change:function(i){e.picked="music"}}}),e._v(" "),a("label",{attrs:{for:"music"}},[e._v("music")]),e._v(" "),a("br")]),e._v(" "),a("div",{staticClass:"selection"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],staticClass:"radio",attrs:{type:"radio",id:"movies",value:"movies"},domProps:{checked:e._q(e.picked,"movies")},on:{change:function(i){e.picked="movies"}}}),e._v(" "),a("label",{attrs:{for:"movies"}},[e._v("movies")]),e._v(" "),a("br")]),e._v(" "),a("div",{staticClass:"selection"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],staticClass:"radio",attrs:{type:"radio",id:"shows",value:"shows"},domProps:{checked:e._q(e.picked,"shows")},on:{change:function(i){e.picked="shows"}}}),e._v(" "),a("label",{attrs:{for:"shows"}},[e._v("shows")]),e._v(" "),a("br")]),e._v(" "),a("div",{staticClass:"selection"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],staticClass:"radio",attrs:{type:"radio",id:"books",value:"books"},domProps:{checked:e._q(e.picked,"books")},on:{change:function(i){e.picked="books"}}}),e._v(" "),a("label",{attrs:{for:"books"}},[e._v("books")]),e._v(" "),a("br")]),e._v(" "),a("div",{staticClass:"selection"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],staticClass:"radio",attrs:{type:"radio",id:"games",value:"games"},domProps:{checked:e._q(e.picked,"games")},on:{change:function(i){e.picked="games"}}}),e._v(" "),a("label",{attrs:{for:"games"}},[e._v("games")]),e._v(" "),a("br")]),e._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputVal,expression:"inputVal"}],staticClass:"search-bar",attrs:{type:"text"},domProps:{value:e.inputVal},on:{input:function(i){i.target.composing||(e.inputVal=i.target.value)}}})]),e._v(" "),a("div",[a("button",{staticClass:"search",on:{click:function(i){e.getRecommendations()}}},[e._v("Find Recommendations")])]),e._v(" "),e.errored?a("section",[a("p",[e._v("We're sorry, we're not able to retrieve this information at the moment, please try back later")])]):a("section",[e.loading?a("div",[e._v("Loading...")]):e._l(e.info,function(i){return a("div",[i.Type==e.music?a("div",[a("i",{staticClass:"fas fa-music"})]):e._e(),e._v(" "),i.Type==e.movie?a("div",[a("i",{staticClass:"fas fa-film"})]):e._e(),e._v(" "),i.Type==e.show?a("div",[a("i",{staticClass:"fas fa-tv"})]):e._e(),e._v(" "),i.Type==e.book?a("div",[a("i",{staticClass:"fas fa-book"})]):e._e(),e._v(" "),i.Type==e.game?a("div",[a("i",{staticClass:"fas fa-gamepad"})]):e._e(),e._v(" "),a("h2",[e._v(e._s(i.Name))]),a("a",{attrs:{href:i.wUrl}},[e._v(" Wikipedia ")]),e._v(" "),i.yUrl?a("div",[a("iframe",{attrs:{src:i.yUrl,width:"560",height:"315",frameborder:"0",allowfullscreen:""}})]):e._e()])})],2)])},staticRenderFns:[]};var c={name:"App",components:{Root:a("VU/8")(o,n,!1,function(e){a("GdZj")},"data-v-4e97e106",null).exports}},r={render:function(){var e=this.$createElement,i=this._self._c||e;return i("div",{attrs:{id:"app"}},[i("Root")],1)},staticRenderFns:[]};var d=a("VU/8")(c,r,!1,function(e){a("cTfD")},null,null).exports;t.a.config.productionTip=!1,new t.a({el:"#app",components:{App:d},template:"<App/>"})},cTfD:function(e,i){}},["NHnr"]);
//# sourceMappingURL=app.730af9d885f3ba1cd5eb.js.map