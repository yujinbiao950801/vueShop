(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e7eac5c"],{1276:function(t,e,a){"use strict";var n=a("d784"),r=a("44e7"),i=a("825a"),s=a("1d80"),l=a("4840"),o=a("8aa5"),c=a("50c4"),u=a("14c3"),d=a("9263"),p=a("d039"),f=[].push,m=Math.min,h=4294967295,g=!p((function(){return!RegExp(h,"y")}));n("split",2,(function(t,e,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var n=String(s(this)),i=void 0===a?h:a>>>0;if(0===i)return[];if(void 0===t)return[n];if(!r(t))return e.call(n,t,i);var l,o,c,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,g=new RegExp(t.source,p+"g");while(l=d.call(g,n)){if(o=g.lastIndex,o>m&&(u.push(n.slice(m,l.index)),l.length>1&&l.index<n.length&&f.apply(u,l.slice(1)),c=l[0].length,m=o,u.length>=i))break;g.lastIndex===l.index&&g.lastIndex++}return m===n.length?!c&&g.test("")||u.push(""):u.push(n.slice(m)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var r=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,r,a):n.call(String(r),e,a)},function(t,r){var s=a(n,t,this,r,n!==e);if(s.done)return s.value;var d=i(t),p=String(this),f=l(d,RegExp),b=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),x=new f(g?d:"^(?:"+d.source+")",v),_=void 0===r?h:r>>>0;if(0===_)return[];if(0===p.length)return null===u(x,p)?[p]:[];var w=0,y=0,k=[];while(y<p.length){x.lastIndex=g?y:0;var R,E=u(x,g?p:p.slice(y));if(null===E||(R=m(c(x.lastIndex+(g?0:y)),p.length))===w)y=o(p,y,b);else{if(k.push(p.slice(w,y)),k.length===_)return k;for(var C=1;C<=E.length-1;C++)if(k.push(E[C]),k.length===_)return k;y=w=R}}return k.push(p.slice(w)),k}]}),!g)},"14c3":function(t,e,a){var n=a("c6b6"),r=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var i=a.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},2148:function(t,e,a){"use strict";var n=a("af0e"),r=a.n(n);r.a},"44e7":function(t,e,a){var n=a("861d"),r=a("c6b6"),i=a("b622"),s=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==r(t))}},"498a":function(t,e,a){"use strict";var n=a("23e7"),r=a("58a8").trim,i=a("c8d2");n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return r(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),r=a("5899"),i="["+r+"]",s=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),o=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(l,"")),a}};t.exports={start:o(1),end:o(2),trim:o(3)}},"76cc":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("商品管理")]),a("el-breadcrumb-item",[t._v("参数列表")])],1),a("el-card",[a("el-alert",{attrs:{type:"warning",title:"注意：只允许为第三级分类设置相关参数！","show-icon":"",closeable:!1}}),a("el-row",{staticClass:"cat_opt"},[a("el-col",[a("span",[t._v("选择商品分类：")]),a("el-cascader",{attrs:{options:t.cateList,props:t.cascaderProps,clearable:""},on:{change:t.cateChanged},model:{value:t.selectedOptions,callback:function(e){t.selectedOptions=e},expression:"selectedOptions"}})],1)],1),a("el-tabs",{on:{"tab-click":t.handleTabClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"动态参数",name:"many"}},[a("el-button",{attrs:{type:"primary",size:"mini",disabled:3!==t.selectedOptions.length},on:{click:function(e){t.dialogVisible=!0}}},[t._v("添加参数")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.manyParamsData,stripe:"",border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.attr_vals,(function(n,r){return a("el-tag",{key:r,staticClass:"paramsTag",attrs:{closable:""},on:{close:function(a){return t.handleClose(r,e.row)}}},[t._v(" "+t._s(n)+" ")])})),e.row.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(a){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(a){t.$set(e.row,"inputValue",a)},expression:"scope.row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(a){return t.showInput(e.row)}}},[t._v("+ New Tag")])]}}])}),a("el-table-column",{attrs:{type:"index",label:"#"}}),a("el-table-column",{attrs:{prop:"attr_name",label:"参数名称"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return t.showEditDialog(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(a){return t.removeParams(e.row.attr_id)}}},[t._v("删除")])]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"静态属性",name:"only"}},[a("el-button",{attrs:{type:"primary",size:"mini",disabled:3!==t.selectedOptions.length},on:{click:function(e){t.dialogVisible=!0}}},[t._v("添加属性")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.onlyParamsData,stripe:"",border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.attr_vals,(function(n,r){return a("el-tag",{key:r,staticClass:"paramsTag",attrs:{closable:""},on:{close:function(a){return t.handleClose(r,e.row)}}},[t._v(" "+t._s(n)+" ")])})),e.row.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(a){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(a){t.$set(e.row,"inputValue",a)},expression:"scope.row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(a){return t.showInput(e.row)}}},[t._v("+ New Tag")])]}}])}),a("el-table-column",{attrs:{type:"index",label:"#"}}),a("el-table-column",{attrs:{prop:"attr_name",label:"属性名称"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return t.showEditDialog(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(a){return t.removeParams(e.row.attr_id)}}},[t._v("删除")])]}}])})],1)],1)],1)],1),a("el-dialog",{attrs:{title:"添加"+t.titleText,visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e},close:t.addDialogClosed}},[a("el-form",{ref:"addFormRef",attrs:{model:t.addForm,rules:t.addFormRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:t.titleText,prop:"attr_name"}},[a("el-input",{model:{value:t.addForm.attr_name,callback:function(e){t.$set(t.addForm,"attr_name",e)},expression:"addForm.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addParams}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"修改"+t.titleText,visible:t.editDialogVisible,width:"30%"},on:{"update:visible":function(e){t.editDialogVisible=e},close:t.editDialogClosed}},[a("el-form",{ref:"editFormRef",attrs:{model:t.editForm,rules:t.editFormRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:t.titleText,prop:"attr_name"}},[a("el-input",{model:{value:t.editForm.attr_name,callback:function(e){t.$set(t.editForm,"attr_name",e)},expression:"editForm.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.editParams}},[t._v("确 定")])],1)],1)],1)},r=[],i=(a("4160"),a("a15b"),a("a434"),a("ac1f"),a("1276"),a("498a"),a("159b"),a("96cf"),a("1da1")),s={data:function(){return{cateList:[],cascaderProps:{value:"cat_id",label:"cat_name",children:"children",expandTrigger:"hover"},addForm:{attr_name:""},editForm:{attr_name:"",attr_id:""},addFormRules:{attr_name:[{required:!0,message:"请输入参数名称",trigger:"blur"}]},editFormRules:{attr_name:[{required:!0,message:"请输入参数名称",trigger:"blur"}]},dialogVisible:!1,editDialogVisible:!1,manyParamsData:[],onlyParamsData:[],selectedOptions:[],activeName:"many"}},created:function(){this.getCateList()},computed:{titleText:function(){return"many"===this.activeName?"动态参数":"静态属性"}},methods:{getCateList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("categories");case 2:if(e=t.sent,a=e.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",this.$message.error("获取商品分类失败！"));case 6:this.cateList=a.data;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),cateChanged:function(){this.getParamsData(),this.onlyParamsData=[],this.manyParamsData=[]},getParamsData:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(3===this.selectedOptions.length){t.next=4;break}this.selectedOptions=[],t.next=12;break;case 4:return t.next=6,this.$axios.get("categories/"+this.selectedOptions[2]+"/attributes",{params:{sel:this.activeName}});case 6:if(e=t.sent,a=e.data,200===a.meta.status){t.next=10;break}return t.abrupt("return",this.$message.error("获取参数列表失败"));case 10:a.data.forEach((function(t){t.attr_vals=t.attr_vals?t.attr_vals.split(","):[],t.inputVisible=!1,t.inputValue=""})),"many"===this.activeName?this.manyParamsData=a.data:this.onlyParamsData=a.data;case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleInputConfirm:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:0===e.inputValue.trim().length?(e.inputVisible=!1,e.inputValue=""):(e.attr_vals.push(e.inputValue.trim()),e.inputValue="",e.inputVisible=!1,this.saveAttributes(e));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),saveAttributes:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.put("categories/"+this.selectedOptions[2]+"/attributes/"+e.attr_id,{attr_name:e.attr_name,attr_sel:e.attr_sel,attr_vals:e.attr_vals.join(",")});case 2:if(a=t.sent,n=a.data,200===n.meta.status){t.next=6;break}return t.abrupt("return",this.$message.error("修改参数项失败"));case 6:this.$message.success("修改参数项成功");case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),showInput:function(t){var e=this;t.inputVisible=!0,this.$nextTick((function(t){e.$refs.saveTagInput.$refs.input.focus()}))},handleTabClick:function(){this.getParamsData()},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},addParams:function(){var t=this;this.$refs.addFormRef.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=10;break}return e.next=3,t.$axios.post("categories/"+t.selectedOptions[2]+"/attributes",{attr_name:t.addForm.attr_name,attr_sel:t.activeName});case 3:if(n=e.sent,r=n.data,201===r.meta.status){e.next=7;break}return e.abrupt("return",t.$message.error("添加参数失败"));case 7:t.$message.success("添加参数成功"),t.getParamsData(),t.dialogVisible=!1;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.dialogVisible=!1},editDialogClosed:function(){this.$refs.editFormRef.resetFields()},showEditDialog:function(t){console.log(t),this.editForm.attr_name=t.attr_name,this.editForm.attr_id=t.attr_id,this.editDialogVisible=!0},editParams:function(){var t=this;this.$refs.editFormRef.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=10;break}return e.next=3,t.$axios.put("categories/"+t.selectedOptions[2]+"/attributes/"+t.editForm.attr_id,{attr_name:t.editForm.attr_name,attr_sel:t.activeName});case 3:if(n=e.sent,r=n.data,200===r.meta.status){e.next=7;break}return e.abrupt("return",t.$message.error("修改参数失败"));case 7:t.$message.success("修改参数成功"),t.getParamsData(),t.editDialogVisible=!1;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},removeParams:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(t){return t}));case 2:if(a=t.sent,"confirm"===a){t.next=5;break}return t.abrupt("return",this.$message.info("已取消删除"));case 5:return t.next=7,this.$axios.delete("categories/"+this.selectedOptions[2]+"/attributes/"+e);case 7:if(n=t.sent,r=n.data,200===r.meta.status){t.next=11;break}return t.abrupt("return",this.$message.error("删除参数失败"));case 11:this.$message.success("删除参数成功"),this.getParamsData();case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleClose:function(t,e){e.attr_vals.splice(t,1),this.saveAttributes(e)}}},l=s,o=(a("2148"),a("2877")),c=Object(o["a"])(l,n,r,!1,null,"3993ac65",null);e["default"]=c.exports},"8aa5":function(t,e,a){"use strict";var n=a("6547").charAt;t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},9263:function(t,e,a){"use strict";var n=a("ad6d"),r=a("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,l=i,o=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=o||u||c;d&&(l=function(t){var e,a,r,l,d=this,p=c&&d.sticky,f=n.call(d),m=d.source,h=0,g=t;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(m="(?: "+m+")",g=" "+g,h++),a=new RegExp("^(?:"+m+")",f)),u&&(a=new RegExp("^"+m+"$(?!\\s)",f)),o&&(e=d.lastIndex),r=i.call(p?a:d,g),p?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:o&&r&&(d.lastIndex=d.global?r.index+r[0].length:e),u&&r&&r.length>1&&s.call(r[0],a,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(r[l]=void 0)})),r}),t.exports=l},"9f7f":function(t,e,a){"use strict";var n=a("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,e,a){"use strict";var n=a("23e7"),r=a("23cb"),i=a("a691"),s=a("50c4"),l=a("7b0b"),o=a("65f0"),c=a("8418"),u=a("1dde"),d=a("ae40"),p=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,h=Math.min,g=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,e){var a,n,u,d,p,f,v=l(this),x=s(v.length),_=r(t,x),w=arguments.length;if(0===w?a=n=0:1===w?(a=0,n=x-_):(a=w-2,n=h(m(i(e),0),x-_)),x+a-n>g)throw TypeError(b);for(u=o(v,n),d=0;d<n;d++)p=_+d,p in v&&c(u,d,v[p]);if(u.length=n,a<n){for(d=_;d<x-n;d++)p=d+n,f=d+a,p in v?v[f]=v[p]:delete v[f];for(d=x;d>x-n+a;d--)delete v[d-1]}else if(a>n)for(d=x-n;d>_;d--)p=d+n-1,f=d+a-1,p in v?v[f]=v[p]:delete v[f];for(d=0;d<a;d++)v[d+_]=arguments[d+2];return v.length=x-n+a,u}})},ac1f:function(t,e,a){"use strict";var n=a("23e7"),r=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},af0e:function(t,e,a){},c8d2:function(t,e,a){var n=a("d039"),r=a("5899"),i="​᠎";t.exports=function(t){return n((function(){return!!r[t]()||i[t]()!=i||r[t].name!==t}))}},d784:function(t,e,a){"use strict";a("ac1f");var n=a("6eeb"),r=a("d039"),i=a("b622"),s=a("9263"),l=a("9112"),o=i("species"),c=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,d){var m=i(t),h=!r((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),g=h&&!r((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[o]=function(){return a},a.flags="",a[m]=/./[m]),a.exec=function(){return e=!0,null},a[m](""),!e}));if(!h||!g||"replace"===t&&(!c||!u||p)||"split"===t&&!f){var b=/./[m],v=a(m,""[t],(function(t,e,a,n,r){return e.exec===s?h&&!r?{done:!0,value:b.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=v[0],_=v[1];n(String.prototype,t,x),n(RegExp.prototype,m,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}d&&l(RegExp.prototype[m],"sham",!0)}}}]);
//# sourceMappingURL=chunk-2e7eac5c.5a62dfa1.js.map