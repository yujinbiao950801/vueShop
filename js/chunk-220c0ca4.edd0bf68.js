(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-220c0ca4"],{"109d":function(t,e,r){"use strict";var n=r("e584"),a=r.n(n);a.a},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7"),r("e6cf");function n(t,e,r,n,a,o,i){try{var s=t[o](i),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function s(t){n(i,a,o,s,c,"next",t)}function c(t){n(i,a,o,s,c,"throw",t)}s(void 0)}))}}},"410e":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("商品管理")]),r("el-breadcrumb-item",[t._v("商品分类")])],1),r("el-card",[r("el-row",[r("el-col",[r("el-button",{attrs:{type:"primary"},on:{click:t.showAddCategoryDialog}},[t._v("添加分类")])],1)],1),r("tree-table",{staticClass:"treeTable",attrs:{data:t.categoryList,columns:t.columns,border:"","selection-type":!1,"expand-type":!1,"show-index":"","index-text":"#"},scopedSlots:t._u([{key:"isOk",fn:function(t){return[!0===t.row.cat_deleted?r("i",{staticClass:"el-icon-success",staticStyle:{color:"darkgreen"}}):r("i",{staticClass:"el-icon-error",staticStyle:{color:"red"}})]}},{key:"order",fn:function(e){return[0===e.row.cat_level?r("el-tag",{attrs:{size:"mini",type:"primary"}},[t._v("一级")]):1===e.row.cat_level?r("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("二级")]):r("el-tag",{attrs:{size:"mini",type:"warning"}},[t._v("三级")])]}}])},[r("template",{slot:"option"},[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"}},[t._v("编辑")]),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"}},[t._v("删除")])],1)],2),r("el-pagination",{attrs:{"current-page":t.queryInfo.pagenum,"page-sizes":[3,5,10,15],"page-size":t.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"添加分类",visible:t.addCategoryDialogVisible,width:"40%"},on:{"update:visible":function(e){t.addCategoryDialogVisible=e},close:t.addCateDialogClosed}},[r("el-form",{ref:"addCateRef",attrs:{model:t.addCateForm,"label-width":"100px",rules:t.addCateFormRules}},[r("el-form-item",{attrs:{label:"分类名称：",prop:"cat_name"}},[r("el-input",{model:{value:t.addCateForm.cat_name,callback:function(e){t.$set(t.addCateForm,"cat_name",e)},expression:"addCateForm.cat_name"}})],1),r("el-form-item",{attrs:{label:"父级分类："}},[r("el-cascader",{attrs:{options:t.parentCateList,props:t.cascaderProps,clearable:"","change-on-select":""},on:{change:t.parentCateChanged},model:{value:t.selectedOptions,callback:function(e){t.selectedOptions=e},expression:"selectedOptions"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.addCategoryDialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.addCategory}},[t._v("确 定")])],1)],1)],1)},a=[],o=(r("96cf"),r("1da1")),i={data:function(){return{addCategoryDialogVisible:!1,categoryList:[],parentCateList:[],cascaderProps:{value:"cat_id",label:"cat_name",children:"children",expandTrigger:"hover"},selectedOptions:[],queryInfo:{type:3,pagenum:1,pagesize:5},total:0,addCateForm:{cat_name:"",cat_pid:0,cat_level:0},addCateFormRules:{cat_name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]},columns:[{label:"分类名称",prop:"cat_name"},{label:"是否有效",type:"template",template:"isOk"},{label:"排序",type:"template",template:"order"},{label:"操作",type:"template",template:"option"}]}},methods:{getCategoryList:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("categories",{params:this.queryInfo});case 2:if(e=t.sent,r=e.data,200===r.meta.status){t.next=6;break}return t.abrupt("return",this.$message.error("获取商品分类失败"));case 6:this.categoryList=r.data.result,this.total=r.data.total;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleSizeChange:function(t){this.queryInfo.pagesize=t,this.getCategoryList()},handleCurrentChange:function(t){this.queryInfo.pagenum=t,this.getCategoryList()},showAddCategoryDialog:function(){this.getParentCateList(),this.addCategoryDialogVisible=!0},getParentCateList:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("categories",{params:{type:2}});case 2:if(e=t.sent,r=e.data,200===r.meta.status){t.next=6;break}return t.abrupt("return",this.$message.error("获取父级分类数据失败"));case 6:this.parentCateList=r.data;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addCateDialogClosed:function(){this.$refs.addCateRef.resetFields(),this.selectedOptions=[],this.addCateForm.cat_level=0,this.addCateForm.cat_pid=0},addCategory:function(){var t=this;this.$refs.addCateRef.validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$axios.post("categories",t.addCateForm);case 4:if(n=e.sent,a=n.data,201===a.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error("添加分类失败"));case 8:t.$message.success("添加分类成功"),t.getCategoryList(),t.addCategoryDialogVisible=!1;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},parentCateChanged:function(){this.selectedOptions.length>0?(this.addCateForm.cat_pid=this.selectedOptions[this.selectedOptions.length-1],this.addCateForm.cat_level=this.selectedOptions.length):(this.addCateForm.cat_pid=0,this.addCateForm.cat_level=0)}},created:function(){this.getCategoryList()}},s=i,c=(r("109d"),r("2877")),l=Object(c["a"])(s,n,a,!1,null,"74b8ede4",null);e["default"]=l.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,o=Object.create(a.prototype),i=new F(n||[]);return o._invoke=L(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var u="suspendedStart",h="suspendedYield",d="executing",p="completed",f={};function g(){}function m(){}function y(){}var v={};v[o]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(j([])));b&&b!==r&&n.call(b,o)&&(v=b);var C=y.prototype=g.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function _(t){function e(r,a,o,i){var s=l(t[r],t,a);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,o,i)}),(function(t){e("throw",t,o,i)})):Promise.resolve(u).then((function(t){c.value=t,o(c)}),(function(t){return e("throw",t,o,i)}))}i(s.arg)}var r;function a(t,n){function a(){return new Promise((function(r,a){e(t,n,r,a)}))}return r=r?r.then(a,a):a()}this._invoke=a}function L(t,e,r){var n=u;return function(a,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return z()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?p:h,c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,f;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:z}}function z(){return{value:e,done:!0}}return m.prototype=C.constructor=y,y.constructor=m,y[s]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},x(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,a){var o=new _(c(e,r,n,a));return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(C),C[s]="Generator",C[o]=function(){return this},C.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},e584:function(t,e,r){}}]);
//# sourceMappingURL=chunk-220c0ca4.edd0bf68.js.map