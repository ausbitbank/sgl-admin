(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["192ea513"],{"652a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-card",{staticClass:"q-pa-sm q-ma-sm comment shadow-5"},[n("q-card-section",{staticClass:"text-weight-bold"},[n("q-chip",[n("q-avatar",[n("q-img",{attrs:{src:this.avatar(t.comment.author)}})],1),t._v(t._s(t.comment.author))],1)],1),n("div",{staticClass:"text-body2 comment",domProps:{innerHTML:t._s(t.renderer.render(t.comment.body))}}),t.comment.children>0?n("div",[n("commentThread",{attrs:{root_author:t.comment.author,root_permlink:t.comment.permlink}})],1):t._e()],1)],1)},a=[],o=n("24d4"),s=n("2bdd"),i={name:"comment",data:function(){return{renderer:new o["DefaultRenderer"]({baseUrl:"https://www.sonicgroove.net/",breaks:!1,skipSanitization:!1,allowInsecureScriptTags:!1,addNofollowToLinks:!0,doNotShowImages:!1,ipfsPrefix:"",assetsWidth:640,assetsHeight:480,imageProxyFn:function(t){return t},usertagUrlFn:function(t){return"/@"+t},hashtagUrlFn:function(t){return"/trending/"+t},isLinkSafeFn:function(t){return!0}})}},props:["comment"],components:{commentThread:s["a"]},methods:{avatar:function(t){return"https://steemitimages.com/u/"+t+"/avatar"}}},c=i,m=(n("96d9"),n("2877")),d=Object(m["a"])(c,r,a,!1,null,null,null);e["default"]=d.exports},"96d9":function(t,e,n){"use strict";var r=n("b037"),a=n.n(r);a.a},b037:function(t,e,n){}}]);