(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0abbb7c"],{"0d31":function(t,e,i){"use strict";var n=i("62cf"),s=i.n(n);s.a},"0fd9":function(t,e,i){"use strict";i("99af"),i("4160"),i("caad"),i("13d5"),i("4ec9"),i("b64b"),i("d3b7"),i("ac1f"),i("2532"),i("3ca3"),i("5319"),i("159b"),i("ddb0");var n=i("ade3"),s=i("5530"),a=(i("4b85"),i("2b0e")),o=i("d9f7"),r=i("80d2"),u=["sm","md","lg","xl"],l=["start","end","center"];function c(t,e){return u.reduce((function(i,n){return i[t+Object(r["t"])(n)]=e(),i}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},h=c("align",(function(){return{type:String,default:null,validator:d}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},p=c("justify",(function(){return{type:String,default:null,validator:f}})),v=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},g=c("alignContent",(function(){return{type:String,default:null,validator:v}})),b={align:Object.keys(h),justify:Object.keys(p),alignContent:Object.keys(g)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,i){var n=m[t];if(null!=i){if(e){var s=e.replace(t,"");n+="-".concat(s)}return n+="-".concat(i),n.toLowerCase()}}var C=new Map;e["a"]=a["default"].extend({name:"v-row",functional:!0,props:Object(s["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},h,{justify:{type:String,default:null,validator:f}},p,{alignContent:{type:String,default:null,validator:v}},g),render:function(t,e){var i=e.props,s=e.data,a=e.children,r="";for(var u in i)r+=String(i[u]);var l=C.get(r);return l||function(){var t,e;for(e in l=[],b)b[e].forEach((function(t){var n=i[t],s=y(e,t,n);s&&l.push(s)}));l.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},Object(n["a"])(t,"align-".concat(i.align),i.align),Object(n["a"])(t,"justify-".concat(i.justify),i.justify),Object(n["a"])(t,"align-content-".concat(i.alignContent),i.alignContent),t)),C.set(r,l)}(),t(i.tag,Object(o["a"])(s,{staticClass:"row",class:l}),a)}})},"1b2c":function(t,e,i){},"1d1c":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"formquestions"}},[i("v-form",{ref:"form",attrs:{id:"form","lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("div",{attrs:{id:"functions"}},[i("v-btn",{staticClass:"mx-2",attrs:{fixed:"",fab:"",dark:"",color:"primary"},on:{click:function(e){t.help=!t.help}}},[i("v-icon",{attrs:{dark:""}},[t._v("mdi-help")])],1),i("h2",{staticClass:"text-center font-weight-thin"},[t._v("Needed functions:")]),i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-switch",{staticClass:"pa-2",attrs:{label:"App store presence",value:"App store presence"},model:{value:t.functionsNeeded[0],callback:function(e){t.$set(t.functionsNeeded,0,e)},expression:"functionsNeeded[0]"}}),i("v-switch",{staticClass:"pa-2",attrs:{label:"Integrated camera function",value:"Integrated camera function"},model:{value:t.functionsNeeded[1],callback:function(e){t.$set(t.functionsNeeded,1,e)},expression:"functionsNeeded[1]"}}),i("v-switch",{staticClass:"pa-2",attrs:{label:"Bluetooth",value:"Bluetooth"},model:{value:t.functionsNeeded[2],callback:function(e){t.$set(t.functionsNeeded,2,e)},expression:"functionsNeeded[2]"}}),i("v-switch",{staticClass:"pa-2",attrs:{label:"NFC",value:"NFC"},model:{value:t.functionsNeeded[3],callback:function(e){t.$set(t.functionsNeeded,3,e)},expression:"functionsNeeded[3]"}}),i("v-switch",{staticClass:"pa-2",attrs:{label:"Notifications",value:"Notifications"},model:{value:t.functionsNeeded[4],callback:function(e){t.$set(t.functionsNeeded,4,e)},expression:"functionsNeeded[4]"}}),i("v-switch",{staticClass:"pa-2",attrs:{label:"Surrounding sensors",value:"Surrounding sensors"},model:{value:t.functionsNeeded[5],callback:function(e){t.$set(t.functionsNeeded,5,e)},expression:"functionsNeeded[5]"}}),i("v-switch",{staticClass:"pa-2",attrs:{label:"Vibration",value:"Vibration"},model:{value:t.functionsNeeded[6],callback:function(e){t.$set(t.functionsNeeded,6,e)},expression:"functionsNeeded[6]"}}),i("v-switch",{staticClass:"pa-2",attrs:{label:"Contacts",value:"Contacts"},model:{value:t.functionsNeeded[7],callback:function(e){t.$set(t.functionsNeeded,7,e)},expression:"functionsNeeded[7]"}}),i("v-switch",{staticClass:"pa-2",attrs:{label:"Scheduling",value:"Scheduling"},model:{value:t.functionsNeeded[8],callback:function(e){t.$set(t.functionsNeeded,8,e)},expression:"functionsNeeded[8]"}}),i("v-switch",{staticClass:"pa-2",attrs:{label:"Background sync",value:"Background sync"},model:{value:t.functionsNeeded[9],callback:function(e){t.$set(t.functionsNeeded,9,e)},expression:"functionsNeeded[9]"}}),i("v-switch",{staticClass:"pa-2",attrs:{label:"High accuracy GPS",value:"High accuracy GPS"},model:{value:t.functionsNeeded[10],callback:function(e){t.$set(t.functionsNeeded,10,e)},expression:"functionsNeeded[10]"}}),i("v-switch",{staticClass:"pa-2",attrs:{label:"Geofencing",value:"Geofencing"},model:{value:t.functionsNeeded[11],callback:function(e){t.$set(t.functionsNeeded,11,e)},expression:"functionsNeeded[11]"}}),i("v-switch",{staticClass:"pa-2",attrs:{label:"VR/AR",value:"VR/AR"},model:{value:t.functionsNeeded[12],callback:function(e){t.$set(t.functionsNeeded,12,e)},expression:"functionsNeeded[12]"}}),i("v-switch",{staticClass:"pa-2",attrs:{label:"Advanced screen manipulation",value:"Advanced screen manipulation"},model:{value:t.functionsNeeded[13],callback:function(e){t.$set(t.functionsNeeded,13,e)},expression:"functionsNeeded[13]"}})],1)],1),i("v-row",{attrs:{align:"center",justify:"center"}},[i("div",{staticClass:"radio-question"},[i("v-label",[t._v("Which competences are available in the customers business?:")]),i("v-radio-group",{attrs:{required:"",rules:[function(t){return!!t||"You must add the competence!"}]},model:{value:t.questions.competence,callback:function(e){t.$set(t.questions,"competence",e)},expression:"questions.competence"}},[i("v-radio",{attrs:{label:"Web",value:"web"}}),i("v-radio",{attrs:{label:"Android and/or iOS",value:"native"}}),i("v-radio",{attrs:{label:"All of the above",value:"all"}}),i("v-radio",{attrs:{label:"None",value:"none"}})],1)],1)]),i("v-row",{attrs:{align:"center",justify:"center"}},[i("div",{staticClass:"radio-question"},[i("v-label",[t._v("Does a website with the same functions already exist? :")]),i("v-radio-group",{attrs:{required:"",rules:[function(t){return!!t||"You must anwer the question"}]},model:{value:t.questions.website,callback:function(e){t.$set(t.questions,"website",e)},expression:"questions.website"}},[i("v-radio",{attrs:{label:"Yes",value:"yes-exists"}}),i("v-radio",{attrs:{label:"No",value:"no-exists"}})],1)],1)]),i("v-row",{attrs:{align:"center",justify:"center"}},[i("div",{staticClass:"radio-question"},[i("v-label",[t._v("Is the app short-lived?:")]),i("v-radio-group",{attrs:{required:"",rules:[function(t){return!!t||"You must anwer the question"}]},model:{value:t.questions.shortLived,callback:function(e){t.$set(t.questions,"shortLived",e)},expression:"questions.shortLived"}},[i("v-radio",{attrs:{label:"Yes",value:"yes-short"}}),i("v-radio",{attrs:{label:"No",value:"no-short"}})],1)],1)]),i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-btn",{attrs:{elevation:"5","x-large":"",color:"primary",id:"next"},on:{click:function(e){return t.validateQuestions()}}},[t._v("Next")])],1)],1),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.help,callback:function(e){t.help=e},expression:"help"}},[i("v-card",[i("v-card-text",[i("br"),i("p",[i("b",[t._v("App store presence")]),t._v(" - Does the app have to be available on Google Play and/or App store?")]),i("p",[i("b",[t._v("Integrated camera function")]),t._v(" - Are more advaced camara functions necassary for the application? Such as zoom and/or ISO etc.")]),i("p",[i("b",[t._v("Bluetooth")]),t._v(" - Does the application need to access Bluetooth?")]),i("p",[i("b",[t._v("NFC")]),t._v(" - Does the application need to access NFC?")]),i("p",[i("b",[t._v("Notifications")]),t._v(" - Does the application need to have Push Notifications or Local Notifications? ")]),i("p",[i("b",[t._v("Surrounding sensors")]),t._v(" - Are sensors like ambient light or proximity sensor needed?")]),i("p",[i("b",[t._v("Vibration")]),t._v(" - Does the application need to make the phone vibrate?")]),i("p",[i("b",[t._v("Contacts")]),t._v(" - Does the application need to access the phones contact list?")]),i("p",[i("b",[t._v("Scheduling")]),t._v(" - Does the application need acces to the phones local task Scheduling? Like making timers and reminders?")]),i("p",[i("b",[t._v("Background sync")]),t._v(" - Does the application need to synchronize data while not actively used?")]),i("p",[i("b",[t._v("High accuracy GPS")]),t._v(' - Will the application need more accuracy for GPS than just "tagging"?')]),i("p",[i("b",[t._v("Geofencing")]),t._v(" - Does the app need to define geographic areas and receive notifications when the device enters or leaves these areas")]),i("p",[i("b",[t._v("VR/AR")]),t._v(" - Virtual and/or Augumented Reality")]),i("p",[i("b",[t._v("Advanced screen manipulation")]),t._v(" - Does the applacation need to access the screen orientation, screen lock and fullscreen mode?")])]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.help=!1}}},[t._v("Ok")])],1)],1)],1)],1)},s=[],a={data:function(){return{help:!1,functionsNeeded:this.$store.state.formQuestions.functionsNeeded,questions:this.$store.state.formQuestions.questions,valid:!0}},methods:{validateQuestions:function(){this.$refs.form.validate()?(this.$store.state.formQuestions={functionsNeeded:this.functionsNeeded,questions:this.questions},console.log(this.$store.state.formQuestions),this.$router.push("/ranking")):this.valid=!1}}},o=a,r=(i("0d31"),i("2877")),u=i("6544"),l=i.n(u),c=i("8336"),d=i("b0af"),h=i("99d9"),f=i("169a"),p=(i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b"),i("5530")),v=i("58df"),g=i("7e2b"),b=i("3206"),m=Object(v["a"])(g["a"],Object(b["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(p["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),y=i("132d"),C=(i("a9e3"),i("1b2c"),i("a9ad")),w=i("7560"),S=i("80d2"),k=Object(v["a"])(w["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(t,e){var i=e.children,n=e.listeners,s=e.props,a={staticClass:"v-label",class:Object(p["a"])({"v-label--active":s.value,"v-label--is-disabled":s.disabled},Object(w["b"])(e)),attrs:{for:s.for,"aria-hidden":!s.for},on:n,style:{left:Object(S["f"])(s.left),right:Object(S["f"])(s.right),position:s.absolute?"absolute":"relative"},ref:"label"};return t("label",C["a"].options.methods.setTextColor(s.focused&&s.color,a),i)}}),_=(i("b0c0"),i("2c64"),k),x=i("9d26"),$=(i("99af"),i("d81d"),i("ac1f"),i("1276"),i("d191"),i("8ff2"),Object(v["a"])(C["a"],w["a"]).extend({name:"v-messages",props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},Object(S["k"])(this,"default",{message:t,key:e})||[t])}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}})),V=$,j=(i("fb6a"),i("53ca")),N=i("d9bd"),O=Object(v["a"])(C["a"],Object(b["a"])("form"),w["a"]).extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor:function(){if(!this.disabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return!this.disabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",t)}},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){if(!this.disabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages.length>0?this.internalSuccessMessages:this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(t,e){Object(S["h"])(t,e)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(t){t||this.disabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting:function(){var t=this;setTimeout((function(){t.hasInput=!1,t.hasFocused=!1,t.isResetting=!1,t.validate()}),0)},hasError:function(t){this.shouldValidate&&this.$emit("update:error",t)},value:function(t){this.lazyValue=t}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(t){return t?Array.isArray(t)?t:[t]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation:function(){this.isResetting=!0},validate:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,i=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(var n=0;n<this.rules.length;n++){var s=this.rules[n],a="function"===typeof s?s(e):s;!1===a||"string"===typeof a?i.push(a||""):"boolean"!==typeof a&&Object(N["b"])("Rules should return a string or boolean, received '".concat(Object(j["a"])(a),"' instead"),this)}return this.errorBucket=i,this.valid=0===i.length,this.valid}}}),B=i("d9f7"),D=Object(v["a"])(g["a"],O),E=D.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data:function(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes:function(){return Object(p["a"])({"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.disabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&void 0!==this.loading,"v-input--is-readonly":this.readonly,"v-input--dense":this.dense},this.themeClasses)},computedId:function(){return this.id||"input-".concat(this._uid)},hasHint:function(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return!(!this.$slots.label&&!this.label)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty:function(){return!!this.lazyValue},isDisabled:function(){return this.disabled||this.readonly},isLabelActive:function(){return this.isDirty},messagesToDisplay:function(){var t=this;return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((function(e){if("string"===typeof e)return e;var i=e(t.internalValue);return"string"===typeof i?i:""})).filter((function(t){return""!==t})):[]},showDetails:function(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.messagesToDisplay.length>0}},watch:{value:function(t){this.lazyValue=t}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(t,e){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=this["".concat(t,"Icon")],a="click:".concat(Object(S["n"])(t)),o=!(!this.listeners$[a]&&!e),r=Object(B["a"])({attrs:{"aria-label":o?Object(S["n"])(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.disabled,light:this.light},on:o?{click:function(t){t.preventDefault(),t.stopPropagation(),i.$emit(a,t),e&&e(t)},mouseup:function(t){t.preventDefault(),t.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:t?"v-input__icon--".concat(Object(S["n"])(t)):void 0},[this.$createElement(x["a"],r,s)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(S["f"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement(_,{props:{color:this.validationState,dark:this.dark,disabled:this.disabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){var t=this;return this.showDetails?this.$createElement(V,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:function(e){return Object(S["k"])(t,"message",e)}}}):null},genSlot:function(t,e,i){if(!i.length)return null;var n="".concat(t,"-").concat(e);return this.$createElement("div",{staticClass:"v-input__".concat(n),ref:n},i)},genPrependSlot:function(){var t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick:function(t){this.$emit("click",t)},onMouseDown:function(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp:function(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render:function(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),I=E,A=i("4e82"),M=i("5607"),F=i("2b0e"),z=F["default"].extend({name:"rippleable",directives:{ripple:M["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),R=(i("45fc"),i("d3b7"),i("25f0"),F["default"].extend({name:"comparable",props:{valueComparator:{type:Function,default:S["h"]}}})),L=Object(v["a"])(I,z,R).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.disabled||this.validationState?this.validationState:"primary"}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=I.options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),q=Object(v["a"])(g["a"],C["a"],z,Object(A["a"])("radioGroup"),w["a"]),G=q.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(p["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses,{},this.groupClasses)},computedColor:function(){return L.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return I.options.computed.computedId.call(this)},hasLabel:I.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!(this.radioGroup||{}).disabled},isReadonly:function(){return this.readonly||!!(this.radioGroup||{}).readonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return L.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return L.options.methods.genInput.call(this,"radio",t)},genLabel:function(){var t=this;return this.hasLabel?this.$createElement(_,{on:{click:function(e){e.preventDefault(),t.onChange()}},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(S["k"])(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(x["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(p["a"])({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes};return t("div",e,[this.genRadio(),this.genLabel()])}}),T=(i("ec29"),i("3d86"),i("604c")),Y=Object(v["a"])(R,T["a"],I),X=Y.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(p["a"])({},I.options.computed.classes.call(this),{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},I.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=I.options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=I.options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:T["a"].options.methods.onClick}}),H=i("0fd9"),P=i("2fa4"),Q=(i("0481"),i("4069"),i("9d01"),function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,a=.5,o=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<a*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<a*Math.abs(t.offsetY)&&(t.up&&s<n-o&&t.up(t),t.down&&s>n+o&&t.down(t))});function K(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function W(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),Q(e)}function U(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function J(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return K(t,e)},touchend:function(t){return W(t,e)},touchmove:function(t){return U(t,e)}}}function Z(t,e,i){var n=e.value,s=n.parent?t.parentElement:t,a=n.options||{passive:!0};if(s){var o=J(e.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[i.context._uid]=o,Object(S["p"])(o).forEach((function(t){s.addEventListener(t,o[t],a)}))}}function tt(t,e,i){var n=e.value.parent?t.parentElement:t;if(n&&n._touchHandlers){var s=n._touchHandlers[i.context._uid];Object(S["p"])(s).forEach((function(t){n.removeEventListener(t,s[t])})),delete n._touchHandlers[i.context._uid]}}var et={inserted:Z,unbind:tt},it=et,nt=i("0789"),st=i("490a"),at=L.extend({name:"v-switch",directives:{Touch:it},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(p["a"])({},I.options.computed.classes.call(this),{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.disabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(p["a"])({},this.attrs,{},this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(p["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(p["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(nt["a"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(st["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===S["o"].left&&this.isActive||t.keyCode===S["o"].right&&!this.isActive)&&this.onChange()}}}),ot=Object(r["a"])(o,n,s,!1,null,null,null);e["default"]=ot.exports;l()(ot,{VBtn:c["a"],VCard:d["a"],VCardActions:h["a"],VCardText:h["b"],VDialog:f["a"],VForm:m,VIcon:y["a"],VLabel:k,VRadio:G,VRadioGroup:X,VRow:H["a"],VSpacer:P["a"],VSwitch:at})},"2c64":function(t,e,i){},"3d86":function(t,e,i){},"4b85":function(t,e,i){},"4ec9":function(t,e,i){"use strict";var n=i("6d61"),s=i("6566");t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),s)},"62cf":function(t,e,i){},6566:function(t,e,i){"use strict";var n=i("9bf2").f,s=i("7c73"),a=i("e2cc"),o=i("0366"),r=i("19aa"),u=i("2266"),l=i("7dd0"),c=i("2626"),d=i("83ab"),h=i("f183").fastKey,f=i("69f3"),p=f.set,v=f.getterFor;t.exports={getConstructor:function(t,e,i,l){var c=t((function(t,n){r(t,c,e),p(t,{type:e,index:s(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=n&&u(n,t[l],t,i)})),f=v(e),g=function(t,e,i){var n,s,a=f(t),o=b(t,e);return o?o.value=i:(a.last=o={index:s=h(e,!0),key:e,value:i,previous:n=a.last,next:void 0,removed:!1},a.first||(a.first=o),n&&(n.next=o),d?a.size++:t.size++,"F"!==s&&(a.index[s]=o)),t},b=function(t,e){var i,n=f(t),s=h(e);if("F"!==s)return n.index[s];for(i=n.first;i;i=i.next)if(i.key==e)return i};return a(c.prototype,{clear:function(){var t=this,e=f(t),i=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete i[n.index],n=n.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,i=f(e),n=b(e,t);if(n){var s=n.next,a=n.previous;delete i.index[n.index],n.removed=!0,a&&(a.next=s),s&&(s.previous=a),i.first==n&&(i.first=s),i.last==n&&(i.last=a),d?i.size--:e.size--}return!!n},forEach:function(t){var e,i=f(this),n=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:i.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),a(c.prototype,i?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&n(c.prototype,"size",{get:function(){return f(this).size}}),c},setStrong:function(t,e,i){var n=e+" Iterator",s=v(e),a=v(n);l(t,e,(function(t,e){p(this,{type:n,target:t,state:s(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,i=t.last;while(i&&i.removed)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),c(e)}}},"6d61":function(t,e,i){"use strict";var n=i("23e7"),s=i("da84"),a=i("94ca"),o=i("6eeb"),r=i("f183"),u=i("2266"),l=i("19aa"),c=i("861d"),d=i("d039"),h=i("1c7e"),f=i("d44e"),p=i("7156");t.exports=function(t,e,i){var v=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),b=v?"set":"add",m=s[t],y=m&&m.prototype,C=m,w={},S=function(t){var e=y[t];o(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!c(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!c(t))&&e.call(this,0===t?0:t)}:function(t,i){return e.call(this,0===t?0:t,i),this})};if(a(t,"function"!=typeof m||!(g||y.forEach&&!d((function(){(new m).entries().next()})))))C=i.getConstructor(e,t,v,b),r.REQUIRED=!0;else if(a(t,!0)){var k=new C,_=k[b](g?{}:-0,1)!=k,x=d((function(){k.has(1)})),$=h((function(t){new m(t)})),V=!g&&d((function(){var t=new m,e=5;while(e--)t[b](e,e);return!t.has(-0)}));$||(C=e((function(e,i){l(e,C,t);var n=p(new m,e,C);return void 0!=i&&u(i,n[b],n,v),n})),C.prototype=y,y.constructor=C),(x||V)&&(S("delete"),S("has"),v&&S("get")),(V||_)&&S(b),g&&y.clear&&delete y.clear}return w[t]=C,n({global:!0,forced:C!=m},w),f(C,t),g||i.setStrong(C,t,v),C}},"8ff2":function(t,e,i){},"9d01":function(t,e,i){},"9d26":function(t,e,i){"use strict";var n=i("132d");e["a"]=n["a"]},d191:function(t,e,i){},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-c0abbb7c.4dcf41c4.js.map