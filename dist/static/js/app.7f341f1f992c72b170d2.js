webpackJsonp([1],{DYNy:function(e,i){},NHnr:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=t("7+uW"),a=t("mtWM"),n={name:"Search",data:function(){return{msg:"Search For Media Recommendations Here",inputVal:"",info:null,loading:!1,errored:!1,picked:null}},methods:{getRecommendations:function(){var e=this,i=this.inputVal.replace(/ /g,"+"),t=this.picked;a.get("https://tastedive.com/api/similar?info=1&k=327710-MediaMot-GQ5SN6GL&q="+i+"&type="+t).then(function(i){e.info=i.data.Similar.Results}).catch(function(i){console.log(i),e.errored=!0}).finally(function(){return e.loading=!1})}}},r={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"Search"},[t("h1",[e._v(e._s(e.msg))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",id:"all",value:""},domProps:{checked:e._q(e.picked,"")},on:{change:function(i){e.picked=""}}}),e._v(" "),t("label",{attrs:{for:"all"}},[e._v("all")]),e._v(" "),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",id:"music",value:"music"},domProps:{checked:e._q(e.picked,"music")},on:{change:function(i){e.picked="music"}}}),e._v(" "),t("label",{attrs:{for:"music"}},[e._v("music")]),e._v(" "),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",id:"movies",value:"movies"},domProps:{checked:e._q(e.picked,"movies")},on:{change:function(i){e.picked="movies"}}}),e._v(" "),t("label",{attrs:{for:"movies"}},[e._v("movies")]),e._v(" "),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",id:"shows",value:"shows"},domProps:{checked:e._q(e.picked,"shows")},on:{change:function(i){e.picked="shows"}}}),e._v(" "),t("label",{attrs:{for:"shows"}},[e._v("shows")]),e._v(" "),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",id:"books",value:"books"},domProps:{checked:e._q(e.picked,"books")},on:{change:function(i){e.picked="books"}}}),e._v(" "),t("label",{attrs:{for:"books"}},[e._v("books")]),e._v(" "),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",id:"games",value:"games"},domProps:{checked:e._q(e.picked,"games")},on:{change:function(i){e.picked="games"}}}),e._v(" "),t("label",{attrs:{for:"games"}},[e._v("games")]),e._v(" "),t("br"),e._v(" "),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.inputVal,expression:"inputVal"}],attrs:{type:"text"},domProps:{value:e.inputVal},on:{input:function(i){i.target.composing||(e.inputVal=i.target.value)}}})]),e._v(" "),t("div",[t("button",{on:{click:function(i){e.getRecommendations()}}},[e._v("submit")])]),e._v(" "),e.errored?t("section",[t("p",[e._v("We're sorry, we're not able to retrieve this information at the moment, please try back later")])]):t("section",[e.loading?t("div",[e._v("Loading...")]):e._l(e.info,function(i){return t("div",[t("h2",[e._v(e._s(i.Name))]),t("h3",[e._v(e._s(i.Type))]),t("a",{attrs:{href:i.wUrl}},[e._v(" Wikipedia ")]),e._v(" "),i.yUrl?t("div",[t("iframe",{attrs:{src:i.yUrl,width:"560",height:"315",frameborder:"0",allowfullscreen:""}})]):e._e()])})],2)])},staticRenderFns:[]};var s={name:"App",components:{Root:t("VU/8")(n,r,!1,function(e){t("DYNy")},"data-v-c5dd165e",null).exports}},c={render:function(){var e=this.$createElement,i=this._self._c||e;return i("div",{attrs:{id:"app"}},[i("Root")],1)},staticRenderFns:[]};var d=t("VU/8")(s,c,!1,function(e){t("NHz6")},null,null).exports;o.a.config.productionTip=!1,new o.a({el:"#app",components:{App:d},template:"<App/>"})},NHz6:function(e,i){}},["NHnr"]);
//# sourceMappingURL=app.7f341f1f992c72b170d2.js.map