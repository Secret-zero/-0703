webpackJsonp([59],{fE5V:function(t,e){},yDRr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Xxa5"),a=n.n(i),s=n("exGp"),r=n.n(s),o=n("Dd8w"),c=n.n(o),u=n("pDNl"),l=n("2sLL"),v=n("UIMx"),d=n("dgEa"),p=n("1h8J"),g=n("NYxO"),m=(c()({},Object(g.b)({userInfo:function(t){return t.mutations.userInfo}})),u.a,l.a,v.a,d.a,{data:function(){return{dialogImageUrl:"",dialogVisible:!1,FExceptionHandling:"",IncomingMessage:{},Items:[],Picturelist:[]}},computed:c()({},Object(g.b)({userInfo:function(t){return t.mutations.userInfo}})),directives:{},components:{XInput:u.a,XButton:l.a,Tabbar:v.a,TabbarItem:d.a},mounted:function(){this.getIncomingMessage()},methods:{getIncomingMessage:function(){var t=this;return r()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.o)({FInterID:t.$route.query.FInterID});case 2:n=e.sent,t.Items=n.Items,t.Picturelist=n.Picturelist,t.IncomingMessage=n,t.FExceptionHandling=n.FExceptionHandling,console.log(n.Picturelist);case 8:case"end":return e.stop()}},e,t)}))()},auditExceptionHandling:function(){var t=this;return r()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.FExceptionHandling){e.next=4;break}t.$vux.toast.text("请填写处理结果"),e.next=9;break;case 4:return e.next=6,Object(p.c)({FInterID:t.$route.query.FInterID,FExceptionHandling:t.FExceptionHandling,UserID:t.userInfo[0].FUserID});case 6:e.sent,n=t,t.$vux.alert.show({content:"提交处理成功",onShow:function(){},onHide:function(){n.$router.push({path:"/auditForm/inspectionException",query:{FInterID:n.$route.query.FInterID}})}});case 9:case"end":return e.stop()}},e,t)}))()}}}),I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"block"},[n("span",{staticClass:"demonstration"},[t._v("默认 Hover 指示器触发")]),t._v(" "),n("viewer",{staticStyle:{height:"270px"},attrs:{images:t.Picturelist}},[n("el-carousel",{attrs:{height:"270px"}},t._l(t.Picturelist,function(t,e){return n("el-carousel-item",{key:e},[n("img",{attrs:{src:t.Photo}})])}),1)],1)],1),t._v(" "),n("div",[n("ul",{staticClass:"mt20"},[t._m(0),t._v(" "),n("li",[n("div",{staticClass:"title"},[t._v("稽查结果：")]),t._v(" "),n("div",{staticClass:"content"},[t._v(t._s(t.IncomingMessage.FInspectionResult))])]),t._v(" "),n("li",[n("div",{staticClass:"title"},[t._v("稽查人员：")]),t._v(" "),n("div",{staticClass:"content"},[t._v(t._s(t.IncomingMessage.FInspector))])]),t._v(" "),n("li",[n("div",{staticClass:"title"},[t._v("异常因素：")]),t._v(" "),n("div",{staticClass:"content"},[t._v(t._s(t.IncomingMessage.FExceptionInformation))])]),t._v(" "),n("li",[n("div",{staticClass:"title"},[t._v("处理结果")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.FExceptionHandling,expression:"FExceptionHandling"}],attrs:{type:"text",placeholder:"请填写",required:""},domProps:{value:t.FExceptionHandling},on:{input:function(e){e.target.composing||(t.FExceptionHandling=e.target.value)}}})])])]),t._v(" "),n("tabbar",{staticStyle:{position:"fixed"}},[n("tabbar-item",[n("span",{attrs:{slot:"label"},on:{click:t.auditExceptionHandling},slot:"label"},[t._v("提交处理")])])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("div",{staticStyle:{margin:"auto"}},[this._v("点击图片查看大图")])])}]};var f=n("VU/8")(m,I,!1,function(t){n("fE5V")},"data-v-16825edc",null);e.default=f.exports}});
//# sourceMappingURL=59.70d93893297845c5e6a1.js.map