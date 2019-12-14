if (self.CavalryLogger) { CavalryLogger.start_js(["9FPSB"]); }

__d("XUIDialogButton.react",["cx","React","XUIButton.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=this.props.action,c=(a==="confirm"?"layerConfirm":"")+(a==="cancel"?" layerCancel":"")+(a==="button"?" layerButton":""),d=this.props.href;a==="cancel"?d="#":a==="button"&&((d==null||d==="")&&(d="#"));return b("React").createElement(b("XUIButton.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,c),href:d,role:"button"}))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("XUIDialogOkayButton.react",["cx","fbt","React","XUIDialogButton.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";return b("React").createElement(b("XUIDialogButton.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_2z1w"),action:this.props.action,label:h._("OK")}))};function a(){"use strict";i.apply(this,arguments)}a.propTypes={action:c.oneOf(["confirm","cancel","button"]).isRequired};e.exports=a}),null);
__d("XUIDialogBody.react",["cx","React","XUIText.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a="_4-i2"+(this.props.useCustomPadding?"":" _pig");return b("React").createElement(b("XUIText.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,a),display:"block",size:this.props.fontSize}),this.props.children)};function a(){"use strict";h.apply(this,arguments)}a.defaultProps={fontSize:"medium"};e.exports=a}),null);
__d("XUIOverlayFooter.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_5lnf uiOverlayFooter")}),this.props.children)};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("XUIDialogFooter.react",["cx","LeftRight.react","React","XUIOverlayFooter.react","XUIText.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a="_5a8u"+(this.props.fullBleedBorder?" _27qq":""),c=this.props,d=c.children,e=c.leftContent;c=babelHelpers.objectWithoutPropertiesLoose(c,["children","leftContent"]);return b("React").createElement(b("XUIOverlayFooter.react"),babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,a)}),b("React").createElement(b("XUIText.react"),{display:"block",fontSize:this.props.fontSize},b("React").createElement(b("LeftRight.react"),null,b("React").createElement("div",null,e),b("React").createElement("div",null,d))))};function a(){"use strict";h.apply(this,arguments)}a.propTypes={fontSize:c.oneOf(["medium","inherit"]),fullBleedBorder:c.bool,leftContent:c.object};a.defaultProps={fontSize:"medium"};e.exports=a}),null);
__d("XUIDialogTitle.react",["cx","fbt","LeftRight.react","React","XUICloseButton.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";var a=null,c=this.props,d=c.closeButtonText,e=c.showCloseButton;c=babelHelpers.objectWithoutPropertiesLoose(c,["closeButtonText","showCloseButton"]);e&&(a=b("React").createElement(b("XUICloseButton.react"),{"data-testid":"dialog_title_close_button",label:d,className:"layerCancel _51-t"}));d=b("React").Children.toArray(this.props.children);return b("React").createElement("div",babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,"_4-i0"+(e?" _2gb3":""))}),b("React").createElement(b("LeftRight.react"),null,b("React").createElement("h3",{className:"_52c9","data-hover":"tooltip","data-tooltip-display":"overflow"},d[0]),b("React").createElement("div",{className:"_51-u"},d.slice(1),a)))};function a(){"use strict";i.apply(this,arguments)}a.defaultProps={closeButtonText:h._("Close"),showCloseButton:!0};e.exports=a}),null);
__d("CSSFade",["cx","invariant","CSS","DataStore","Event","Style","requestAnimationFrameAcrossTransitions"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i="css-fade-animation",j="css-show-animation",k="CSSFade_hide",l="CSSFade_show";a=document.createElement("div").animate!==void 0;var m={cancel:function(){}};function n(a,c){a!=null||h(0,5875);a=b("DataStore").get(a,c);a&&a.cancel();return a}function o(a,b,c){a=((a=a)!=null?(a=a.style)!=null?a.animation:a:a)||"";b=b+"s "+c;a.length>5&&(b=a.slice(0,-1)+(", "+b));return b}function p(a,b){a=((a=a)!=null?(a=a.style)!=null?a.animation:a:a)||"";a=a.split(",");var c=a.findIndex(function(a){return a.indexOf(b)>-1});c!==-1&&a.splice(c,1);return a.join(",")}c={show:function(a,c){__p&&__p();c===void 0&&(c={});var d=c.duration!=null?c.duration/1e3:.3;n(a,i);n(a,j);b("CSS").removeClass(a,c.invisible?"invisible_elem":"hidden_elem");b("requestAnimationFrameAcrossTransitions")(function(){a.style.animation=o(a,d,l)});var e=b("Event").listen(a,"animationend",function(){c.callback&&c.callback(),a.style.animation=p(a,l)}),f={cancel:function(){a.style.animation=p(a,l),e.remove(),f.cancel=function(){}}};b("DataStore").set(a,j,f);return f},hide:function(a,c){__p&&__p();c===void 0&&(c={});var d=function(){b("CSS").addClass(a,c.invisible?"invisible_elem":"hidden_elem"),c.callback&&c.callback(),a.style.animation=p(a,k)};if(c.simple){d();return m}var e=c.duration!=null?c.duration/1e3:.3;n(a,j);n(a,i);b("requestAnimationFrameAcrossTransitions")(function(){a.style.animation=o(a,e,k)});var f=b("Event").listen(a,"animationend",d),g={cancel:function(){a.style.animation=p(a,k),f.remove(),g.cancel=function(){}}};b("DataStore").set(a,i,g);return g}};d={show:function(a,c){__p&&__p();c===void 0&&(c={});var d=c.duration!=null?c.duration:300;n(a,i);n(a,j);b("CSS").removeClass(a,c.invisible?"invisible_elem":"hidden_elem");b("Style").set(a,"opacity","1");d=a.animate([{opacity:"0"},{opacity:"1.0"}],{duration:d});c.callback&&(d.onfinish=c.callback);b("DataStore").set(a,j,d);return d},hide:function(a,c){__p&&__p();c===void 0&&(c={});var d=c.duration!=null?c.duration:300;n(a,j);if(c.simple===!0){b("CSS").addClass(a,c.invisible?"invisible_elem":"hidden_elem");return m}else{n(a,i);b("Style").set(a,"opacity","0");d=a.animate([{opacity:"1.0"},{opacity:"0"}],{duration:d});d.onfinish=function(){b("CSS").addClass(a,c.invisible?"invisible_elem":"hidden_elem"),c.callback&&c.callback()};b("DataStore").set(a,i,d);return d}}};e.exports=a?d:c}),null);
__d("LayerFadeOnHide",["invariant","CSSFade","Layer","SubscriptionsHandler","UserAgent_DEPRECATED","clearTimeout","emptyFunction","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a){"use strict";this._layer=a,this._subscriptionsHandler=new(b("SubscriptionsHandler"))()}h.prototype.enable=function(){"use strict";if(b("UserAgent_DEPRECATED").ie()<9)return;this._subscription=this._layer.subscribe("starthide",this._handleStartHide.bind(this))};h.prototype.disable=function(){"use strict";this._subscription&&(this._subscription.unsubscribe(),this._subscription=null),this._subscriptionsHandler.release()};h.prototype._getDuration=function(){"use strict";return 150};h.prototype._handleStartHide=function(){"use strict";__p&&__p();var a=!0,c=b("Layer").subscribe("show",function(){c.unsubscribe(),a=!1}),d=b("setTimeoutAcrossTransitions")(function(){c.unsubscribe();c=null;var b=function(){this._layer.finishHide()}.bind(this);a?this._animate(b):b()}.bind(this),0);this._subscriptionsHandler.addSubscriptions({remove:function(){b("clearTimeout")(d)}});return!1};h.prototype._animate=function(a){"use strict";var c=this._layer.getRoot();c!=null||g(0,70);b("CSSFade").hide(c,{callback:function(){a()},duration:this._getDuration()})};h.forDuration=function(a){var c;c=babelHelpers.inherits(d,h);c&&c.prototype;function d(){c.apply(this,arguments)}d.prototype._getDuration=b("emptyFunction").thatReturns(a);return d};Object.assign(h.prototype,{_subscription:null});e.exports=h}),null);
__d("XGraphQLBatchAPIController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/api/graphqlbatch/",{queries:{type:"String"},batch_name:{type:"String"},scheduler:{type:"Enum",enumType:1},shared_params:{type:"String"},fb_api_req_friendly_name:{type:"String"},uft_request_id:{type:"String"}})}),null);
__d("WebGraphQL",["ActorURI","AsyncRequest","Deferred","FBLogger","WebGraphQLConfig","XGraphQLBatchAPIController","getAsyncParams","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){__p&&__p();var c=a.getURIBuilder().getURI(),d={exec:function(a,b){return d.execAll([a],b)[0]},execAll:function(a,d){__p&&__p();var e={},f={};a=a.map(function(a,c){c="o"+c;e[c]={doc_id:a.__getDocID(),query_params:a.__getVariables()};a=new(b("Deferred"))();f[c]=a;return a.getPromise()});var g=babelHelpers["extends"]({},b("getAsyncParams")("POST"));d&&d.actorID!=null&&(g[b("ActorURI").PARAMETER_ACTOR]=d.actorID);var h=d&&d.batchName?{batch_name:d.batchName}:{};h=new(b("AsyncRequest"))().setURI(c).setOption("suppressEvaluation",!0).setMethod("POST").setRequestHeader("Content-Type","application/x-www-form-urlencoded").setData(babelHelpers["extends"]({},h,g,{queries:JSON.stringify(e)})).setHandler(function(a){__p&&__p();a=a.getPayload();try{var c=a.response.split("\r\n");c.pop();c=c.map(function(a){return JSON.parse(a)});c.forEach(function(a){return Object.keys(a).forEach(function(b){var c=f[b];if(c){b=a[b];b.errors?c.reject(b):b.data?c.resolve(b.data):c.reject({data:{},errors:[{message:"Unexpected response received from server.",severity:"CRITICAL",response:b}]})}})})}catch(d){c=a.response;b("FBLogger")("webgraphql").catching(d).mustfix("Bad response: ","%s%s",c.substr(0,250),c.length>250?"[truncated]":"")}Object.keys(f).forEach(function(a){f[a].isSettled()||f[a].reject({data:{},errors:[{message:"No response received from server.",severity:"CRITICAL"}]})})}).setTimeoutHandler(b("WebGraphQLConfig").timeout,function(){Object.keys(f).forEach(function(a){f[a].isSettled()||f[a].reject({data:{},errors:[{message:"Request timed out.",severity:"CRITICAL"}]})})}).setErrorHandler(function(a){var b=a.getErrorDescription();Object.keys(f).forEach(function(c){f[c].isSettled()||f[c].reject({data:{},errors:[{message:b,severity:"CRITICAL",error:a.getError()}]})})});d&&d.msgrRegion&&h.setRequestHeader("X-MSGR-Region",d.msgrRegion);b("gkx")("801901")?h.setAllowCrossPageTransition(!0):d&&d.allowCrossPageTransition!=null&&h.setAllowCrossPageTransition(d.allowCrossPageTransition);h.send();return a},__forController:g};return d}e.exports=g(b("XGraphQLBatchAPIController"))}),null);
__d("BanzaiLogger",["Banzai"],(function(a,b,c,d,e,f){__p&&__p();var g="logger";function a(a){return{log:function(c,d){b("Banzai").post(h._getRoute(c),d,a)},logImmediately:function(a,c){b("Banzai").post(h._getRoute(a),c,{signal:!0})},registerToSendWithBeacon:function(a,c,d,e){b("Banzai").registerToSendWithBeacon(h._getRoute(a),c,d,e)},_getRoute:function(a){return g+":"+a}}}var h=a();h.create=a;e.exports=h}),null);
__d("ChannelClientID",["uuid"],(function(a,b,c,d,e,f){"use strict";var g=b("uuid")();a={getID:function(){return g}};e.exports=a}),null);
__d("BaseGraphQLSubscription",["regeneratorRuntime","Banzai","BanzaiLogger","ChannelClientID","CurrentLocale","CurrentUser","GQLSHeartbeatConfig","GraphQLSubscriptionsConfig","Random","SkywalkerManager","URI","gkx"],(function(a,b,c,d,e,f){__p&&__p();var g=b("GQLSHeartbeatConfig").heartbeat_interval,h=1e4,i=1,j=100,k="gqls_default_logging";a.prototype.getTopic=function(a){"use strict";throw new Error("getTopic() unimplemented by subclass of BaseGraphQLSubscription")};a.prototype.getQueryID=function(){"use strict";throw new Error("getQueryID() unimplemented by subclass of BaseGraphQLSubscription")};a.prototype.getQueryParameters=function(a){"use strict";throw new Error("getQueryParameters() unimplemented by subclass of BaseGraphQLSubscription")};a.prototype.getSubscriptionCallName=function(){"use strict";throw new Error("getSubscriptionCallName() unimplemented by subclass of BaseGraphQLSubscription")};a.subscribe=function(a,b,c){c===void 0&&(c={});return new this().subscribe(a,b,c)};a.prototype.subscribe=function(a,c,d){__p&&__p();d===void 0&&(d={});d.forceLogContext==null&&b("gkx")("676906")&&b("Random").coinflip(j)&&(d.forceLogContext=k);var e=this.getQueryParameters(a);d.forceLogContext!=null&&(e["%options"]={client_logged_context:d.forceLogContext});d.receiveLifecycleEvents&&(e["%options"]=babelHelpers["extends"]({},e["%options"],{heartbeat:{interval:g}}));var f={};f.transformContext=JSON.stringify(this.getTransformContext(a,e));d.policy!=null&&(f.policy=d.policy);d.customOptions!=null&&(f.customOptions=JSON.stringify(d.customOptions));a=this.getTopic(a);var h=b("SkywalkerManager").getSubscriptionType(a);this.$1("client_subscribe",e,d,h);var i=b("SkywalkerManager").subscribe(a,function(a){this.$1("receivepayload",e,d,h),c(babelHelpers["extends"]({__type:"data"},JSON.parse(a.payload)))}.bind(this),{context:f,onUnsubscribeEager:function(){this.$1("client_unsubscribe",e,d,h)}.bind(this),gqlsLifecycleHandler:function(a){return b("regeneratorRuntime").async(function(b){while(1)switch(b.prev=b.next){case 0:c({__type:"lifecycle_event",state:a});case 1:case"end":return b.stop()}},null,this)}});return{getContext:function(){return i.getContext()},unsubscribe:function(){i.unsubscribe()}}};a.subscribeWithIcebreaker_EXPERIMENTAL=function(a,b,c){"use strict";return new this().subscribeWithIcebreaker_EXPERIMENTAL(a,b,c)};a.prototype.subscribeWithIcebreaker_EXPERIMENTAL=function(a,c,d){"use strict";__p&&__p();var e=new(b("URI"))("https://streaming-graph.facebook.com/gqls_bore");e.setQueryData({access_token:d});d=this.getTopic(a);var f={topic:d,locale:b("CurrentLocale").get(),queryID:this.getQueryID(),serializedQueryParameters:JSON.stringify(this.getQueryParameters(a))};e.addQueryData(f);var g=new EventSource(e.toString(),{withCredentials:!0});g.addEventListener("message",function(a){c(JSON.parse(JSON.parse(a.data).payload))},!1);return{getContext:function(){return f},unsubscribe:function(){g.close()}}};a.prototype.getTransformContext=function(a,c){"use strict";var d=0;return{viewerID:this.getViewerID(a),appID:d,locale:b("CurrentLocale").get(),queryID:this.getQueryID(),serializedQueryParameters:JSON.stringify(c)}};a.prototype.getViewerID=function(a){"use strict";return b("CurrentUser").getID()};a.prototype.$1=function(a,c,d,e){"use strict";if(b("Banzai").isEnabled("gqls_web_logging")){var f=b("GraphQLSubscriptionsConfig").shouldAlwaysLog||d.forceLogContext?i:h;b("Random").coinflip(f)&&b("BanzaiLogger").log("GraphQLSubscriptionsLoggerConfig",{clienttime:Date.now()/1e3,client_sample_weight:f,event:a,force_log_context:d.forceLogContext,handle_type:e,mechanism:"skywalker",query_id:parseInt(this.getQueryID(),10),query_params:c,session_id:b("ChannelClientID").getID(),subscription_call:this.getSubscriptionCallName()})}};function a(){"use strict"}e.exports=a}),null);
__d("QuickLogConfigHelper",["QuickLogConfig"],(function(a,b,c,d,e,f){a.prototype.getEventDetails=function(a){"use strict";return b("QuickLogConfig").qpl_events[a]};function a(){"use strict"}e.exports=new a()}),null);
__d("QuickPerformanceLoggerBase",["Arbiter","Banzai","Bootloader","Env","PerfXSharedFields","QuickLogConfig","QuickLogConfigHelper","Random","gkx","performanceAbsoluteNow","performanceNavigationStart","requireCond","cr:682175"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("performanceAbsoluteNow")();function a(a){a===void 0&&(a={}),this.$1={},this.$2={},this.$3=100,this.loomProviderId="QPL",this.$4=a,b("cr:682175")&&b("cr:682175").addProvider(this)}a.prototype.$7=function(a,c){if(b("QuickLogConfig").killswitch)return null;a=this.$1[a];if(!a)return null;a=a[c];return!a?null:a};a.prototype.markerStart=function(a,c,d){__p&&__p();c===void 0&&(c=0);d===void 0&&(d=this.currentTimestamp());if(b("QuickLogConfig").killswitch)return;var e=b("QuickLogConfigHelper").getEventDetails(a);if(!e)return;if(b("cr:682175")&&!this.$5){var f=a+"_"+c,g=new Set(["QPL","AsyncProfiler"]);b("cr:682175").startTrace(f,"QPL",g)}this.$5&&this.$5.buffer.addEvent({type:"QPL_START",action:"START",markerId:a,instanceKey:c},d);f=this.$6===a?1:this.$2[a]||e.sampleRate||this.$3;g=b("Env").enable_qplinspector||b("Random").coinflip(f);e=this.$1[a];e||(this.$1[a]={});this.$1[a][c]={passesSampling:g,timestamp:d,sampleRate:f,points:{}};if(g){e=this.$4.onMarkerStart;e&&e(a,c,d)}};a.prototype.markerStartFromNavStart=function(a,c){c===void 0&&(c=0);var d=b("performanceNavigationStart")();this.markerStart(a,c,d);if(b("performanceNavigationStart").isPolyfilled){d=this.$7(a,c);d&&(d.timestampIsApproximate=!0)}};a.prototype.annotateMarkerString=function(a,b,c,d){d===void 0&&(d=0);var e=this.$7(a,d);if(!e)return;var f=this.$5;f&&f.buffer.addEvent({type:"QPL_ANNOTATION",markerId:a,instanceKey:d,annotationKey:b,annotationValue:c},e.timestamp);f=e.annotations||{};f[b]=c;e.annotations=f};a.prototype.annotateMarkerStringArray=function(a,b,c,d){d===void 0&&(d=0);var e=this.$7(a,d);if(!e)return;var f=this.$5;f&&f.buffer.addEvent({type:"QPL_ANNOTATION",markerId:a,instanceKey:d,annotationKey:b,annotationValue:c},e.timestamp);f=e.annotationsStringArray||{};f[b]=c;e.annotationsStringArray=f};a.prototype.annotateMarkerInt=function(a,b,c,d){d===void 0&&(d=0);var e=this.$7(a,d);if(!e)return;var f=this.$5;f&&f.buffer.addEvent({type:"QPL_ANNOTATION",markerId:a,instanceKey:d,annotationKey:b,annotationValue:c},e.timestamp);f=e.annotationsInt||{};f[b]=c;e.annotationsInt=f};a.prototype.annotateMarkerIntArray=function(a,b,c,d){d===void 0&&(d=0);var e=this.$7(a,d);if(!e)return;var f=this.$5;f&&f.buffer.addEvent({type:"QPL_ANNOTATION",markerId:a,instanceKey:d,annotationKey:b,annotationValue:c},e.timestamp);f=e.annotationsIntArray||{};f[b]=c;e.annotationsIntArray=f};a.prototype.annotateMarkerDouble=function(a,b,c,d){d===void 0&&(d=0);var e=this.$7(a,d);if(!e)return;var f=this.$5;f&&f.buffer.addEvent({type:"QPL_ANNOTATION",markerId:a,instanceKey:d,annotationKey:b,annotationValue:c},e.timestamp);f=e.annotationsDouble||{};f[b]=c;e.annotationsDouble=f};a.prototype.annotateMarkerDoubleArray=function(a,b,c,d){d===void 0&&(d=0);var e=this.$7(a,d);if(!e)return;var f=this.$5;f&&f.buffer.addEvent({type:"QPL_ANNOTATION",markerId:a,instanceKey:d,annotationKey:b,annotationValue:c},e.timestamp);f=e.annotationsDoubleArray||{};f[b]=c;e.annotationsDoubleArray=f};a.prototype.markerPoint=function(a,b,c,d,e){d===void 0&&(d=0);e===void 0&&(e=this.currentTimestamp());var f=this.$7(a,d);if(!f)return;f.points[b]={data:c,timeSinceStart:e-f.timestamp};f=this.$5;f&&f.buffer.addEvent({type:"QPL_POINT",markerId:a,instanceKey:d,name:b,data:c},e)};a.prototype.markerEnd=function(a,c,d,e){__p&&__p();d===void 0&&(d=0);e===void 0&&(e=this.currentTimestamp());var f=Date.now(),h=b("QuickLogConfigHelper").getEventDetails(a);if(!h)return;var i=this.$5;if(i){i.buffer.addEvent({type:"QPL_END",action:c,markerId:a,instanceKey:d},e);var j=a+"_"+d;b("cr:682175")&&i.triggerId===j&&b("cr:682175").endTraceWithTimeout(j,3e4)}i=this.$7(a,d);if(!i)return;if(i.passesSampling){j=this.$4.onMarkerEnd;j&&j(a,d,e);j=e-i.timestamp;f=f-j;var k=i.points;this.$8({marker_id:a,event_is_intermediate_marker:"false",instance_id:d,quicklog_module:h.moduleName,quicklog_event:h.name,quicklog_action:c,sample_rate:i.sampleRate,method:"random_sampling",trace_tags:"",value:i.timestampIsApproximate?null:j,annotations:i.annotations,annotations_double:i.annotationsDouble,annotations_double_array:i.annotationsDoubleArray,annotations_int:i.annotationsInt,annotations_int_array:i.annotationsIntArray,annotations_string_array:i.annotationsStringArray,points:Object.keys(k).map(function(a){return{data:k[a].data,name:a,timeSinceStart:k[a].timeSinceStart}}),metadata:{application_analytics:{time_since_qpl_module_init:e-g}}},f);this.$6===a&&(console.timeStamp("QPLDebug MarkerEnd, "+this.currentTimestamp()+", "+f+", "+j),b("Arbiter").inform("qpl_debugger_finished"))}delete this.$1[a][d]};a.prototype.markerDrop=function(a,b){b===void 0&&(b=0);a=this.$1[a];a&&delete a[b]};a.prototype.dropAllMarkers=function(){this.$1={}};a.prototype.setAlwaysOnSampleRate=function(a,b){this.$2[a]=b};a.prototype.setSampleRateForInstance=function(a,b,c){c===void 0&&(c=0);a=this.$1[a][c];a&&(a.sampleRate=b)};a.prototype.currentTimestamp=function(){return b("performanceAbsoluteNow")()};a.prototype.$8=function(a,c){a=this.$9(a);var d=this.$10(a,c);b("Env").enable_qplinspector&&b("Bootloader").loadModules(["QPLInspector"],function(a){a.appendLog(d)},"QuickPerformanceLoggerBase");b("gkx")("708253")?b("Banzai").post("perf",d,b("Banzai").VITAL):b("Banzai").post("perf",d)};a.prototype.$9=function(a){var c=b("PerfXSharedFields").getCommonData();a.metadata=babelHelpers["extends"]({},a.metadata,{memory_stats:{total_mem:c.ram_gb?c.ram_gb*1073741824:null},network_stats:{downlink_megabits:c.downlink_megabits,network_subtype:c.effective_connection_type,rtt_ms:c.rtt_ms}});return a};a.prototype.$10=function(a,b){b=Math.floor(b/1e3);return{appversion:"0 (web)",clienttime:b,rawclienttime:b,deviceid:"0",extra:a}};a.prototype.loomTraceDidBegin=function(a){this.$5=a};a.prototype.loomTraceWillEnd=function(){this.$5=null};a.prototype.enableDebug=function(a){this.$6=parseInt(a,10)};a.prototype.disableDebug=function(){this.$6=null};e.exports=a}),null);
__d("QuickPerformanceLoggerImpl",["EventProfiler","QuickLogConfig","QuickPerformanceLoggerBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h={},i={onMarkerStart:function(a,c,d){var e=b("QuickLogConfig").qpl_to_interaction[a];if(e){a=a+" : "+c;h[a]=b("EventProfiler").markManualStart([e.name],e.eventType,d)}},onMarkerEnd:function(a,b,c){a=a+" : "+b;h[a]&&h[a].markManualEnd(c)}};c=babelHelpers.inherits(a,b("QuickPerformanceLoggerBase"));g=c&&c.prototype;function a(){g.constructor.call(this,i)}e.exports=new a()}),null);
__d("XWebGraphQLQueryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/webgraphql/query/",{query_id:{type:"FBID"},variables:{type:"String"},doc_id:{type:"FBID"}})}),null);
__d("WebGraphQLQueryBase",["invariant","WebGraphQLLegacyHelper","XWebGraphQLQueryController"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){this.$1=a}a.prototype.__getVariables=function(){return this.$1};a.prototype.__getDocID=function(){return this.constructor.__getDocID()};a.__getController=function(){return b("XWebGraphQLQueryController")};a.__getDocID=function(){g(0,1804)};a.getURI=function(a){return b("WebGraphQLLegacyHelper").getURI({controller:this.__getController(),docID:this.__getDocID(),variables:a})};a.getLegacyURI=function(a){return b("WebGraphQLLegacyHelper").getURI({controller:this.__getController(),queryID:this.getQueryID(),variables:a})};a.getQueryID=function(){g(0,5095)};e.exports=a}),null);
__d("WebGraphQLSubscriptionHelper",[],(function(a,b,c,d,e,f){"use strict";e.exports={getExports:function(a){var b=a.docID,c=a.queryID;return{getDocID:function(){return b},getLegacyQueryID:function(){return c}}}}}),null);