webpackJsonp([57],{"+WfA":function(t,e){},s24c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("mvHQ"),i=n.n(s),r=n("BO1k"),a=n.n(r),c=n("Gu7T"),u=n.n(c),l=n("Xxa5"),o=n.n(l),v=n("fZjL"),f=n.n(v),d=n("exGp"),p=n.n(d),_=n("1h8J"),h=(n("NYxO"),n("2sLL")),g=(n("mzja"),n("7t+N")),m=n.n(g),x=(h.a,{data:function(){return{result:"",fileList:[],upLoadImgList:[]}},components:{XButton:h.a},mounted:function(){},methods:{addPic:function(){return m()("input[type=file]").trigger("click"),!1},imgChange:function(t){var e=this;return p()(o.a.mark(function n(){var s,i,r,c,l,v,d,_,h;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(s=[],t.target.files.length){n.next=3;break}return n.abrupt("return");case 3:(i=f()(t.target.files).map(function(e){return t.target.files[e]})).length>5&&(i=i.filter(function(t,e){if(e<5)return t})),r=i.map(function(){var t=p()(o.a.mark(function t(n,s){var i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.uploadImgToBase64(n);case 2:return i=t.sent,t.abrupt("return",i.result);case 4:case"end":return t.stop()}},t,e)}));return function(e,n){return t.apply(this,arguments)}}()),c=!0,l=!1,v=void 0,n.prev=9,d=a()(r);case 11:if(c=(_=d.next()).done){n.next=21;break}return h=_.value,n.t0=s,n.next=16,h;case 16:n.t1=n.sent,n.t0.push.call(n.t0,n.t1);case 18:c=!0,n.next=11;break;case 21:n.next=27;break;case 23:n.prev=23,n.t2=n.catch(9),l=!0,v=n.t2;case 27:n.prev=27,n.prev=28,!c&&d.return&&d.return();case 30:if(n.prev=30,!l){n.next=33;break}throw v;case 33:return n.finish(30);case 34:return n.finish(27);case 35:if(!(e.fileList.length+s.length>5)){n.next=38;break}return e.$vux.alert.show({title:"注意",content:"最多可上传五张图片",onShow:function(){console.log("Plugin: I'm showing")},onHide:function(){console.log("Plugin: I'm hiding now")}}),n.abrupt("return");case 38:e.fileList=[].concat(u()(e.fileList),s);case 39:case"end":return n.stop()}},n,e,[[9,23,27,35],[28,,30,34]])}))()},upLoadImg:function(){var t=this;return p()(o.a.mark(function e(){var n,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n={FCheckInterID:t.result.FCheckInterID,EmpCode:t.userInfo1[0].Fnumber,Pictures:[]}).Pictures=t.fileList.map(function(t){return{photo:t.replace(/.*;base64,/,"")}}),n.Pictures=i()(n.Pictures),console.log(n),e.next=6,Object(_._9)(n);case 6:s=e.sent,console.log(s),t.$vux.toast.text(s);case 9:case"end":return e.stop()}},e,t)}))()}}}),C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap",attrs:{id:"wrap"}},[n("div",{staticClass:"list"},[n("ul",[n("li",[n("div",{staticClass:"title"},[t._v("宿舍楼号")]),t._v(" "),n("div",{staticClass:"content"})]),t._v(" "),n("li",[n("div",{staticClass:"title"},[t._v("房间编号")]),t._v(" "),n("div",{staticClass:"content"})]),t._v(" "),n("li",[n("div",{staticClass:"title"},[t._v("房间联系人")]),t._v(" "),n("div",{staticClass:"content"})]),t._v(" "),n("li",[n("div",{staticClass:"title"},[t._v("联系人电话")]),t._v(" "),n("div",{staticClass:"content"})]),t._v(" "),n("li",[n("div",{staticClass:"title"},[t._v("需求时间")]),t._v(" "),n("div",{staticClass:"content"})]),t._v(" "),n("li",[n("div",{staticClass:"title"},[t._v("问题简述")]),t._v(" "),n("div",{staticClass:"content"})]),t._v(" "),n("li",[n("div",{staticStyle:{margin:"auto"}},[t._v("上传图片")])]),t._v(" "),n("li",[n("div",{staticClass:"title"},[t._v("需求完成时间")]),t._v(" "),n("div",{staticClass:"content"})])])])])}]};var b=n("VU/8")(x,C,!1,function(t){n("+WfA")},"data-v-2440da56",null);e.default=b.exports}});
//# sourceMappingURL=57.59aab4c601d0ca60e48c.js.map