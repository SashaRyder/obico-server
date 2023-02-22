(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba8543c0"],{"2a12":function(e,s,t){"use strict";t("e695")},3922:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e._self._c;return s("section",{staticClass:"personalization"},[s("h2",{staticClass:"section-title"},[e._v("Appearance")]),s("div",{staticClass:"form-group row mt-3"},[s("label",{staticClass:"col-md-2 col-sm-3 col-form-label"},[e._v("Theme")]),s("div",{staticClass:"col-sm-9 col-md-10"},[s("div",{staticClass:"theme-controls"},[s("div",{staticClass:"theme-toggle",class:[e.themeValue],on:{click:e.toggleTheme}},[s("svg",{staticClass:"icon",class:{active:e.themeValue===e.Themes.Dark}},[s("use",{attrs:{href:"#svg-moon-icon"}})]),s("div",{staticClass:"label"},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.themeValue===e.Themes.Dark,expression:"themeValue === Themes.Dark"}],staticClass:"dark"},[e._v("DARK")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.themeValue===e.Themes.Light,expression:"themeValue === Themes.Light"}],staticClass:"light"},[e._v("LIGHT")])]),s("svg",{staticClass:"icon",class:{active:e.themeValue===e.Themes.Light}},[s("use",{attrs:{href:"#svg-sun-icon"}})]),s("div",{staticClass:"active-indicator",class:{right:e.themeValue===e.Themes.Light}},[s("div",{staticClass:"circle"})])])])]),e.showSystemTheme?s("div",{staticClass:"col-md-10 offset-md-2 col-sm-9 offset-sm-3 col-form-label"},[s("div",{staticClass:"custom-control custom-checkbox form-check-inline system-theme-control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.systemTheme,expression:"systemTheme"}],staticClass:"custom-control-input",attrs:{id:"id_theme_system",type:"checkbox"},domProps:{checked:Array.isArray(e.systemTheme)?e._i(e.systemTheme,null)>-1:e.systemTheme},on:{change:function(s){var t=e.systemTheme,a=s.target,c=!!a.checked;if(Array.isArray(t)){var i=null,m=e._i(t,i);a.checked?m<0&&(e.systemTheme=t.concat([i])):m>-1&&(e.systemTheme=t.slice(0,m).concat(t.slice(m+1)))}else e.systemTheme=c}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"id_theme_system"}},[e._v(" Sync theme with system settings ")])])]):e._e()])])},c=[],i=t("59cf"),m=t("0fb5"),l=t("1c9d"),h={name:"ThemePreferences",data(){return{Themes:i["a"]}},computed:{themeValue(){return Object(m["a"])()},showSystemTheme(){return"android"!==Object(l["b"])()},systemTheme:{get(){return m["d"].value===i["a"].System},set(e){m["d"].value=i["a"].System,this.selectTheme(e?this.Themes.System:this.themeValue)}}},methods:{toggleTheme(){const e=this.themeValue===i["a"].Light?i["a"].Dark:i["a"].Light;this.systemTheme=!1,this.selectTheme(e)},selectTheme(e){Object(m["c"])(e),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({theme:e}))}}},o=h,r=(t("2a12"),t("2877")),n=Object(r["a"])(o,a,c,!1,null,"982b65fc",null);s["default"]=n.exports},e695:function(e,s,t){}}]);
//# sourceMappingURL=chunk-ba8543c0.js.map