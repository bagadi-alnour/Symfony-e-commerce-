if (self.CavalryLogger) { CavalryLogger.start_js(["yHwMd"]); }

__d("MessengerTextWithEntities.react",["BaseTextWithEntities.react","Link.react","MessengerTextWithEmoticons.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function h(a){return a.replace(/<3\b|&hearts;/g,"\u2665")}c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(a){if(this.props.renderEmoticons||this.props.renderEmoji)return b("React").createElement(b("MessengerTextWithEmoticons.react"),{text:a,customSize:this.props.customSize,renderEmoticons:this.props.renderEmoticons,renderEmoji:this.props.renderEmoji});else return h(a)}.bind(this),this.$2=function(a,c){if(this.props.interpolator)return this.props.interpolator(a,c);else return b("React").createElement(b("Link.react"),{href:c.entity},a)}.bind(this),c}a.prototype.render=function(){return b("React").createElement(b("BaseTextWithEntities.react"),babelHelpers["extends"]({},this.props,{aggregatedRanges:this.props.aggregatedRanges,imageRanges:this.props.imageRanges,metaRanges:this.props.metaRanges,rangeRenderer:this.$2,ranges:this.props.ranges,text:this.props.text,textRenderer:this.$1}))};e.exports=a}),null);
__d("MessengerColors",["ChatConfig"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b){b===void 0&&(b=!1);var c=100/(a.length-1);b=b?a.slice():a.slice().reverse();a=b.map(function(a,b){return a+" "+b*c+"%"}).join(",");return"radial-gradient(circle at center 75%, "+a+")"}function b(a,b,c){__p&&__p();var d={};if(a){b!=null&&b!==""?d.backgroundColor=b:d.backgroundColor=c;if(a.length&&a.length>0)if(a.length===1)d.backgroundColor=a[0];else if(a.length===2)d.backgroundImage="linear-gradient("+a[0]+", "+a[1]+")";else{var e=a.length,f=100/(e-1);e=a.map(function(a,b){return a+" "+b*f+"%"}).join(", ");d.backgroundImage="linear-gradient("+e+")"}}else b!=null&&b!==""?d.backgroundColor=b:d.backgroundColor=c;return d}e.exports={makeRadialGradient:a,makeLinearGradient:b}}),null);
__d("MercurySendMessageFields",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AUTO_RETRY_CNT:"auto_retry_cnt",MANUAL_RETRY_CNT:"manual_retry_cnt"})}),null);
__d("MercuryMessageObject",["BanzaiODS","MercuryActionStatus","MercuryActionType","MercuryIDs","MercuryLocalIDs","MercuryMessageClientState","MercuryMessageSourceTags","MercurySendMessageFields","MercurySingletonProvider","MercurySourceType","MessengerObjectAssociationType","MessengerState.bs","RepliedToMessageStatusForGraphQL","SiteData"],(function(a,b,c,d,e,f){__p&&__p();a.getForFBID=function(a){"use strict";return i.getForFBID(a)};a.get=function(){"use strict";return i.get()};function a(a){"use strict";this.$1=a}a.prototype.constructHotLikeObject=function(a,c,d,e,f){"use strict";c=g(this.$1,b("MercuryActionType").USER_GENERATED_MESSAGE,c,d);d={body:a,has_attachment:!1,html_body:!1,attachments:[],specific_to_list:[],creator_info:void 0,tags:e||[],signatureID:f,ui_push_phase:b("SiteData").push_phase};return babelHelpers["extends"]({},c,d)};a.prototype.constructPhotoMessageObject=function(a,c,d,e,f){"use strict";c=g(this.$1,b("MercuryActionType").USER_GENERATED_MESSAGE,c,d);d={replied_to_message:a?{message:a,status:b("RepliedToMessageStatusForGraphQL").VALID}:void 0,has_attachment:!1,html_body:!1,attachments:[],specific_to_list:[],creator_info:void 0,tags:e||[],signatureID:f,ui_push_phase:b("SiteData").push_phase};return babelHelpers["extends"]({},c,d)};a.prototype.constructTextMessageObject=function(a,c,d,e,f,h,i,j,k){"use strict";h=g(this.$1,b("MercuryActionType").USER_GENERATED_MESSAGE,h,i);i=f.params&&f.type;var l=c.length>0;a={body:typeof a==="string"?a.replace(/^\s+/,"").replace(/\s+$/,""):"",replied_to_message:d?{message:d,status:b("RepliedToMessageStatusForGraphQL").VALID}:void 0,has_attachment:i||l,raw_attachments:l?c:void 0,shareable_attachment:i?{share_params:f.params.get("data"),share_type:f.type}:void 0,profile_ranges:e,profile_xmd:e,html_body:!1,attachments:[],specific_to_list:[],creator_info:void 0,tags:j||[],signatureID:k,ui_push_phase:b("SiteData").push_phase};return babelHelpers["extends"]({},h,a)};a.prototype.constructUserGeneratedMessageObject=function(a,c,d,e,f,h){"use strict";c=g(this.$1,b("MercuryActionType").USER_GENERATED_MESSAGE,c,d);d={body:typeof a==="string"?a.replace(/^\s+/,"").replace(/\s+$/,""):"",has_attachment:!1,html_body:!1,attachments:[],specific_to_list:e||[],creator_info:f,tags:h||[]};return babelHelpers["extends"]({},c,d)};a.prototype.constructStickerMessageObject=function(a,c,d,e,f){"use strict";c=g(this.$1,b("MercuryActionType").USER_GENERATED_MESSAGE,c,d);d={has_attachment:!0,html_body:!1,attachments:[],sticker_id:a,specific_to_list:[],tags:e||[],signatureID:f,ui_push_phase:b("SiteData").push_phase};return babelHelpers["extends"]({},c,d)};a.prototype.constructAttachmentMessageObject=function(a,c){"use strict";a=g(this.$1,b("MercuryActionType").USER_GENERATED_MESSAGE,a,c);c={attachments:[],specific_to_list:[]};return babelHelpers["extends"]({},a,c)};a.prototype.constructLogMessageObject=function(a,c,d,e){"use strict";a=g(this.$1,b("MercuryActionType").LOG_MESSAGE,a,c);c={log_message_type:d,log_message_data:e,ephemeral_ttl_mode:e&&e.untypedData&&e.untypedData.ttl};return babelHelpers["extends"]({},a,c)};a.prototype.constructCTAConfirmationMessageObject=function(a,b,c,d,e){"use strict";a=this.constructUserGeneratedMessageObject(a,b,c,null,null,e);b=d?{quick_replies:d,ignore_for_webhook:!1}:{ignore_for_webhook:!0};return babelHelpers["extends"]({},a,{platform_xmd:JSON.stringify(b)})};a.prototype.normalizeNewMessage=function(a){"use strict";__p&&__p();a.status===void 0&&(a.status=b("MercuryActionStatus").UNSENT);a.offline_threading_id=a.offline_threading_id||b("MercuryLocalIDs").generateOfflineThreadingID(a.timestamp);a.offline_threading_id||b("BanzaiODS").bumpEntityKey("chat.web","invalid_otid_generated");a.message_id=a.message_id||a.offline_threading_id;var c=b("MercuryIDs").getParticipantIDFromUserID(this.$1);a.specific_to_list=a.specific_to_list||[];a.specific_to_list.length&&a.specific_to_list.indexOf(c)===-1&&a.specific_to_list.push(c);var d=!1;if(!a.thread_id)a.thread_id="root:"+a.offline_threading_id;else{var e,f=b("MessengerState.bs").getThreadMetaNow(this.$1,a.thread_id);f&&f.ephemeral_ttl_mode!==null&&a.ephemeral_ttl_mode===void 0&&(a.ephemeral_ttl_mode=f.ephemeral_ttl_mode);((e=f)!=null?(e=e.associated_object)!=null?e.name:e:e)&&((e=f)!=null?e.object_association_type:e)===b("MessengerObjectAssociationType").GENERAL_CHAT&&(d=!0)}if(!d)if(a.specific_to_list.length==1)a.thread_id="user:"+this.$1;else if(a.specific_to_list.length==2){f=a.specific_to_list[0]==c?a.specific_to_list[1]:a.specific_to_list[0];a.thread_id=b("MercuryIDs").getThreadIDFromParticipantID(f)}if(!a.specific_to_list.length){e=b("MercuryIDs").tokenize(a.thread_id);d=e.type;f=e.value;d=="user"&&(a.specific_to_list=["fbid:"+f,c])}a[b("MercurySendMessageFields").MANUAL_RETRY_CNT]||(a[b("MercurySendMessageFields").MANUAL_RETRY_CNT]=0)};a.prototype.normalizeResendMessage=function(a){"use strict";a.status=b("MercuryActionStatus").RESENDING,a.timestamp=Date.now(),a[b("MercurySendMessageFields").MANUAL_RETRY_CNT]+=1};a.prototype.normalizeAddAttachmentPlaceholder=function(a,c,d){"use strict";d.preview_attachments.length>0&&(a.has_attachment=!0,a.preview_attachments=d.preview_attachments),a.client_state=b("MercuryMessageClientState").DO_NOT_SEND_TO_SERVER,a.status=b("MercuryActionStatus").RESENDING,a.upload_id=c};function g(a,c,d,e){var f=h(d)?[b("MercuryMessageSourceTags").CHAT]:[],g=Date.now();c={action_type:c,thread_id:e,author:b("MercuryIDs").getParticipantIDFromUserID(a),author_email:null,timestamp:g,is_unread:!1,is_filtered_content:!1,is_filtered_content_bh:!1,is_filtered_content_account:!1,is_filtered_content_quasar:!1,is_filtered_content_invalid_app:!1,is_spoof_warning:!1,source:d,source_tags:f};return c}function h(a){switch(a){case b("MercurySourceType").CHAT_WEB:case b("MercurySourceType").CHAT_JABBER:case b("MercurySourceType").CHAT_IPHONE:case b("MercurySourceType").CHAT_MEEBO:case b("MercurySourceType").CHAT_ORCA:case b("MercurySourceType").CHAT_TEST:case b("MercurySourceType").CHAT:return!0;default:return!1}}var i=new(b("MercurySingletonProvider"))(a);e.exports=a}),null);
__d("MercuryTriodeSourceUtil",["MercurySourceType","MessengerEnvironment"],(function(a,b,c,d,e,f){"use strict";a={getMercuryTriodeSource:function(){return b("MessengerEnvironment").messengerdotcom?b("MercurySourceType").MESSENGER_WEB:b("MercurySourceType").TITAN_WEB}};e.exports=a}),null);
__d("MessengerDotComAndInboxM4Check.bs",["gkx","CurrentUser","MessengerEnvironment"],(function(a,b,c,d,e,f){"use strict";a=b("gkx")("686397")&&!b("CurrentUser").isWorkUser()&&b("MessengerEnvironment").messengerui;f.yes=a}),null);
__d("MessengerCustomColorUtils.bs",["cssVar","CurrentUser","MessengerDotComAndInboxM4Check.bs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(){if(b("CurrentUser").isWorkUser())return"#373e4c";else if(b("MessengerDotComAndInboxM4Check.bs").yes)return"#0099ff";else return"#0084ff"}function a(a){a=a.solid_color;if(a==null)return h(0);else return a}f.defaultColor=h;f.customColorOrBlue=a}),null);
__d("ReactDOMRe.bs",["React","ReactDOM","bs_caml_builtin_exceptions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){var d=document.getElementsByClassName(c);if(d.length!==0){b("ReactDOM").render(a,d[0]);return 0}else throw[b("bs_caml_builtin_exceptions").invalid_argument,"ReactDOMRe.renderToElementWithClassName: no element of class "+(c+" found in the HTML.")]}function c(a,c){var d=document.getElementById(c);if(d==null)throw[b("bs_caml_builtin_exceptions").invalid_argument,"ReactDOMRe.renderToElementWithId : no element of id "+(c+" found in the HTML.")];else{b("ReactDOM").render(a,d);return 0}}function d(a,c){var d=document.getElementsByClassName(c);if(d.length!==0){b("ReactDOM").hydrate(a,d[0]);return 0}else throw[b("bs_caml_builtin_exceptions").invalid_argument,"ReactDOMRe.hydrateToElementWithClassName: no element of class "+(c+" found in the HTML.")]}function e(a,c){var d=document.getElementById(c);if(d==null)throw[b("bs_caml_builtin_exceptions").invalid_argument,"ReactDOMRe.hydrateToElementWithId : no element of id "+(c+" found in the HTML.")];else{b("ReactDOM").hydrate(a,d);return 0}}function g(a,c,d){a=[a,c].concat(d);return b("React").createElement.apply(null,a)}function h(a,b){return Object.assign(Object.assign({},a),b)}function i(a,b,c){var d={};d[b]=c;return h(a,d)}i=[h,i];f.renderToElementWithClassName=a;f.renderToElementWithId=c;f.hydrateToElementWithClassName=d;f.hydrateToElementWithId=e;f.createElementVariadic=g;f.Style=i}),null);
__d("MessengerHotLikeIconSVGM4React.bs",["React","uniqueID","ReactDOMRe.bs","MessengerColors","MessengerCustomColorUtils.bs"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){return b("React").createElement("svg",{height:"32px",width:"32px",viewBox:"0 0 36 36"},b("React").createElement("path",{id:"Fill-17",d:"M10,30 L7.75,30 C6.625,30 6,27.7515306 6,23.3673469 C6,18.9831633 6.625,16.7346939 7.75,16.7346939 L10,16.7346939 C10.552,16.7346939 11,17.1918367 11,17.755102 L11,28.9795918 C11,29.5428571 10.552,30 10,30 M17,6.02040816 C17,5.44540816 17.4195,5.00255102 18,5 C19.2035,5 22,5.79081633 22,10.6122449 C22,12.2443878 21.8015,13.130102 21.7195,13.7163265 C21.719,13.7183673 21.719,13.7204082 21.7185,13.722449 C21.6865,13.9566327 21.872,14.1647959 22.113,14.1647959 C26.908,14.1647959 29.469,15.4336735 29.469,16.7290816 C29.469,17.3612245 29.211,17.9321429 28.7975,18.3535714 C29.513,18.7591837 30,19.5091837 30,20.3780612 C30,21.3642857 29.4255,22.2045918 28.5475,22.5515306 C28.821,22.9326531 28.9845,23.3954082 28.9845,23.8969388 C28.9845,24.9704082 28.3395,25.8653061 27.3365,26.1438776 C27.4285,26.377551 27.4845,26.6290816 27.4845,26.8943878 C27.4845,28.0459184 25.5485,28.9795918 21,28.9795918 C17.675,28.9795918 15.3815,28.3857143 14.5,27.9591837 C13.851,27.6454082 13,27.0770408 13,25.4081633 L13,18.7755102 C13,15.0403061 17.25,13.7760204 17.25,10.1020408 C17.25,7.78826531 17,6.81326531 17,6.02040816",fill:a}))}var g=b("uniqueID")();function c(a){a=b("ReactDOMRe.bs").Style[1](b("ReactDOMRe.bs").Style[1](b("ReactDOMRe.bs").Style[1](b("MessengerColors").makeLinearGradient(a.gradient_colors,a.solid_color,b("MessengerCustomColorUtils.bs").defaultColor(0)),"backgroundAttachment","fixed"),"height","95%"),"width","95%");return b("React").createElement(b("React").Fragment,void 0,b("React").createElement("svg",{style:{height:"100%",position:"absolute",width:"100%"},viewBox:"0 0 36 36"},b("React").createElement("mask",{id:g},b("React").createElement("rect",{height:"100%",width:"100%",fill:"white",x:"0",y:"0"}),b("React").createElement("path",{d:"M10,30 L7.75,30 C6.625,30 6,27.7515306 6,23.3673469 C6,18.9831633 6.625,16.7346939 7.75,16.7346939 L10,16.7346939 C10.552,16.7346939 11,17.1918367 11,17.755102 L11,28.9795918 C11,29.5428571 10.552,30 10,30 M17,6.02040816 C17,5.44540816 17.4195,5.00255102 18,5 C19.2035,5 22,5.79081633 22,10.6122449 C22,12.2443878 21.8015,13.130102 21.7195,13.7163265 C21.719,13.7183673 21.719,13.7204082 21.7185,13.722449 C21.6865,13.9566327 21.872,14.1647959 22.113,14.1647959 C26.908,14.1647959 29.469,15.4336735 29.469,16.7290816 C29.469,17.3612245 29.211,17.9321429 28.7975,18.3535714 C29.513,18.7591837 30,19.5091837 30,20.3780612 C30,21.3642857 29.4255,22.2045918 28.5475,22.5515306 C28.821,22.9326531 28.9845,23.3954082 28.9845,23.8969388 C28.9845,24.9704082 28.3395,25.8653061 27.3365,26.1438776 C27.4285,26.377551 27.4845,26.6290816 27.4845,26.8943878 C27.4845,28.0459184 25.5485,28.9795918 21,28.9795918 C17.675,28.9795918 15.3815,28.3857143 14.5,27.9591837 C13.851,27.6454082 13,27.0770408 13,25.4081633 L13,18.7755102 C13,15.0403061 17.25,13.7760204 17.25,10.1020408 C17.25,7.78826531 17,6.81326531 17,6.02040816",fill:"black"})),b("React").createElement("rect",{height:"100%",width:"100%",fill:"white",mask:"url(#"+(String(g)+")")})),b("React").createElement("div",{style:a}))}f.make=a;f.uniqueId=g;f.makeWithGradient=c}),null);
__d("EmojiFormat.bs",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return a.split("_").map(function(a){return parseInt(a,16)})}function a(a){return a.map(function(a){return a.toString(16)}).join("_")}function h(a){return a.map(function(a){return String.fromCodePoint(a)}).join("")}function b(a){return h(g(a))}f.codeStringToCodeArray=g;f.codeArrayToCodeString=a;f.codeArrayToUnicode=h;f.codeStringToUnicode=b}),null);
__d("MessengerHotLikeButton.react",["cssVar","cx","fbt","Bootloader","EmojiLikeConstants","Image.react","ImmutableObject","Keys","KeyStatus","Link.react","MercuryMessageObject","MercuryTriodeSourceUtil","MessengerDotComAndInboxM4Check.bs","MessengerEnvironment","MessengerHotLikePreviewEvents","MessengerHotLikeOutlineSVG.react","MessengerHotLikeIconSVGM4React.bs","MessengerHotLikeUtils","MessengerSupportedEmojiUtils","MessengerCustomColorUtils.bs","React","StickerConstants","clearInterval","clearTimeout","ifRequired","joinClasses","setIntervalAcrossTransitions","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=b("MercuryMessageObject").get();c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);j=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.$1=null,this.$2=null,this.$3=null,this.$4=null,this.$6=function(a){(this.props.disabled||this.$3)&&(a.preventDefault(),a.stopPropagation());if(this.props.disabled||a.button!==0)return;this.props.onMouseDown&&this.props.onMouseDown();this.$3=Date.now();this.$9();this.$10()}.bind(this),this.$8=function(){if(!(this.props.threadID&&this.$3))return;this.$3=0;this.$11();this.$12()}.bind(this),this.$14=function(){if(!this.props.threadID)return;b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").POP,this.props.threadID)}.bind(this),this.$7=function(){this.$3&&(this.$3=0,this.$11(),this.$14())}.bind(this),this.$5=function(a){a.stopPropagation();if(this.props.disabled)return;if(b("KeyStatus").getKeyDownCode()===b("Keys").RETURN||!this.props.threadID){a=this.props.sendCustomLike;this.props.customLike&&a?a(this.props.customLike,b("MessengerHotLikeUtils").getEmojiSizeForTime(1)):this.props.sendSticker(b("MessengerHotLikeUtils").getStickerIDForTime(1))}}.bind(this),c}a.prototype.componentDidMount=function(){this.$4=b("MessengerHotLikePreviewEvents").addListener(b("MessengerHotLikePreviewEvents").FINISH_ANIMATION,function(a,c,d){a===this.props.threadID&&(this.props.forGameChat&&b("Bootloader").loadModules(["GamesQuicksilverFunnelLogger"],function(a){a.logGameChatSendHotLike(a.getDefaultFunnelName())},"MessengerHotLikeButton.react"),d&&this.props.customLike&&this.props.sendCustomLike?this.props.sendCustomLike(this.props.customLike,d,b("EmojiLikeConstants").source.HOT_LIKE):this.props.forGameChat||this.props.sendSticker(c))}.bind(this))};a.prototype.componentWillUnmount=function(){this.$4&&this.$4.remove()};a.prototype.render=function(){__p&&__p();var a=null,c={};if(this.props.customLike&&this.props.customLike.emoji){var d=this.props.customLike.emoji;d=b("MessengerSupportedEmojiUtils").getNewEmojiData(d,b("EmojiLikeConstants").size.SMALL);var e=this.props.renderSize?this.props.renderSize:16;c.background="none";a=b("React").createElement(b("Image.react"),{src:d&&d.url,style:{padding:e==16?0:3,display:"block",height:e,width:e}})}else if(this.props.CustomRenderer){d=this.props.CustomRenderer;a=b("React").createElement(d,{color:this.props.customColor,location:this.props.location,renderSize:this.props.renderSize})}else if(this.props.customColor)if(b("MessengerDotComAndInboxM4Check.bs").yes){e=this.props.thread&&this.props.thread.gradient_colors&&this.props.thread.gradient_colors.length?this.props.thread.gradient_colors[this.props.thread.gradient_colors.length-1]:this.props.customColor;a=b("MessengerHotLikeIconSVGM4React.bs").make(e)}else a=b("React").createElement(b("MessengerHotLikeOutlineSVG.react"),{color:this.props.customColor,location:this.props.location});else b("MessengerDotComAndInboxM4Check.bs").yes&&(a=b("MessengerHotLikeIconSVGM4React.bs").make(this.props.disabled?"rgba(0, 0, 0, 0.12)":b("MessengerCustomColorUtils.bs").defaultColor()));d=i._("Send a Like");return b("React").createElement(b("Link.react"),{"aria-label":d,className:b("joinClasses")(this.props.customColor||this.props.CustomRenderer?"_5j_u":"",this.props.className),disabled:this.props.disabled,href:"#",onClick:this.$5,onDragStart:function(a){return a.preventDefault()},onMouseDown:this.$6,onMouseLeave:this.$7,onMouseUp:this.$8,role:"button",style:c,title:d},a)};a.prototype.$9=function(){if(!this.props.threadID)return;b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").START,this.$13(),this.props.threadID)};a.prototype.$12=function(){if(!this.props.threadID)return;!b("MessengerEnvironment").messengerui?b("ifRequired")("MessengerHotLikePreview.react",function(){b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").STOP,this.props.threadID)}.bind(this),function(){if(this.$1!==null)return;this.$1=b("setIntervalAcrossTransitions")(function(){b("ifRequired")("MessengerHotLikePreview.react",function(){this.$1!==null&&(b("clearInterval")(this.$1),this.$1=null),b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").STOP,this.props.threadID)}.bind(this))}.bind(this),100)}.bind(this)):b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").STOP,this.props.threadID)};a.prototype.$13=function(){__p&&__p();var a=this.props.threadID;if(!a)return null;a=k.constructStickerMessageObject(b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID,b("MercuryTriodeSourceUtil").getMercuryTriodeSource(),a);k.normalizeNewMessage(a);a.is_like_preview=!0;a.like_preview_since=this.$3;a.customLike=this.props.customLike&&this.props.customLike.emoji?this.props.customLike:null;a.body="";return new(b("ImmutableObject"))(a)};a.prototype.$10=function(){this.$11(),this.$2=b("setTimeoutAcrossTransitions")(this.$14,b("MessengerHotLikeUtils").SizeTimes.large)};a.prototype.$11=function(){b("clearTimeout")(this.$2)};a.propTypes={CustomRenderer:c.func,onMouseDown:c.func,customLike:c.object,customColor:c.string,forGameChat:c.bool,location:c.string,sendSticker:c.func.isRequired,sendCustomLike:c.func,threadID:c.string,disabled:c.bool,renderSize:c.number,thread:c.object};e.exports=a}),null);
__d("LinkReact.bs",["Link.react","ReasonReact.bs","bs_js_primitive","bs_js_null_undefined"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){d={"aria-label":b("bs_js_null_undefined").fromOption(d),"data-ft":b("bs_js_null_undefined").fromOption(f),"data-hover":b("bs_js_null_undefined").fromOption(g),"data-tooltip-content":b("bs_js_null_undefined").fromOption(h),"data-tooltip-alignh":b("bs_js_null_undefined").fromOption(i),"data-tooltip-position":b("bs_js_null_undefined").fromOption(j),className:b("bs_js_null_undefined").fromOption(e),href:b("bs_js_null_undefined").fromOption(k),linkRef:b("bs_js_null_undefined").fromOption(l),onClick:b("bs_js_null_undefined").fromOption(m),onMouseDown:b("bs_js_null_undefined").fromOption(n),onMouseEnter:b("bs_js_null_undefined").fromOption(o),role:b("bs_js_null_undefined").fromOption(p),rel:b("bs_js_null_undefined").fromOption(q),style:b("bs_js_null_undefined").fromOption(r),tabIndex:b("bs_js_null_undefined").fromOption(s),target:b("bs_js_null_undefined").fromOption(t),title:b("bs_js_null_undefined").fromOption(u)};a!==void 0&&(d["aria-expanded"]=b("bs_js_primitive").valFromOption(a));c!==void 0&&(d["aria-hidden"]=b("bs_js_primitive").valFromOption(c));return b("ReasonReact.bs").wrapJsForReason(b("Link.react"),d,v)}f.make=a}),null);
__d("MessengerContactActions.bs",[],(function(a,b,c,d,e,f){"use strict";a={ADD_OWNER:"ADD_OWNER",FREE_CALL:"FREE_CALL",MESSAGE:"MESSAGE",PROFILE:"PROFILE",REMOVE:"REMOVE",REMOVE_OWNER:"REMOVE_OWNER",SELECT:"SELECT"};f.actions=a}),null);
__d("LazyWorkMultiCompanyChatTooltip.react",["JSResource","lazyLoadComponent","react"],(function(a,b,c,d,e,f){"use strict";var g=b("lazyLoadComponent")(b("JSResource")("WorkMultiCompanyChatTooltip.react").__setRef("LazyWorkMultiCompanyChatTooltip.react"));function a(a){return b("react").createElement(b("react").Suspense,{fallback:a.children},b("react").createElement(g,null,a.children))}e.exports=a}),null);
__d("LazyWorkMultiCompanyChatTooltipReact.bs",["ReasonReact.bs","LazyWorkMultiCompanyChatTooltip.react"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("ReasonReact.bs").wrapJsForReason(b("LazyWorkMultiCompanyChatTooltip.react"),{},a)}f.make=a}),null);
__d("ReasonBootloadOnRender.react",["LoadOnRender.react","React","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(a){b("promiseDone")(this.props.loader.load(),a)}.bind(this),c}a.prototype.render=function(){"use strict";return b("React").createElement(b("LoadOnRender.react"),{placeholder:this.props.placeholder,loader:this.$1,component:this.props.component})};e.exports=a}),null);
__d("ReasonResource",["Promise","JSResourceReference","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(h,b("JSResourceReference"));g&&g.prototype;h.prototype.load=function(){return new(b("Promise"))(function(a){b("promiseDone")(this.getFullComponent(),function(b){a(b.jsComponent)})}.bind(this))};h.prototype.getFullComponent=function(){return this.__reference.load()};h.prototype.setResourceReference=function(a){this.__reference=a;return this};function h(){g.apply(this,arguments)}function a(a){return new h(a.getModuleId()).setResourceReference(a)}e.exports=a}),null);
__d("MercuryMessageActions",["MercuryActionType","MercuryDispatcher","MercuryMessageObject","MercuryPayloadSource","MercuryServerRequests","MercurySingletonMixin"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){this.$1=a,this.$2=b("MercuryMessageObject").getForFBID(this.$1),this.__serverRequests=b("MercuryServerRequests").getForFBID(this.$1),this.__dispatcher=b("MercuryDispatcher").getForFBID(this.$1)}a.prototype.send=function(a,c,d){c=c||Function.prototype,this.$2.normalizeNewMessage(a),this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload(babelHelpers["extends"]({},a),b("MercuryPayloadSource").CLIENT_SEND_MESSAGE)),this.__serverRequests.sendNewMessage(a,d),c(a.thread_id)};a.prototype.resend=function(a,b){a=babelHelpers["extends"]({},a);this.$2.normalizeResendMessage(a);this.send(a,void 0,b)};a.prototype.addAttachmentPlaceholder=function(a,c,d){this.$2.normalizeAddAttachmentPlaceholder(a,c,d),this.$2.normalizeNewMessage(a),this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload(babelHelpers["extends"]({},a),b("MercuryPayloadSource").CLIENT_SEND_MESSAGE))};a.prototype.cancelAttachmentPlaceholder=function(a,c){this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload({upload_id:a,upload_data:c,action_type:b("MercuryActionType").CANCEL_ATTACHMENT_PLACEHOLDER},b("MercuryPayloadSource").CLIENT_SEND_MESSAGE))};a.prototype.confirmAttachmentPlaceholder=function(a,c){this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload({upload_id:a,upload_data:c,action_type:b("MercuryActionType").CONFIRM_ATTACHMENT_PLACEHOLDER},b("MercuryPayloadSource").CLIENT_SEND_MESSAGE))};a.prototype["delete"]=function(a,c,d){this.__dispatcher.handleUpdate(this.$3(a,c,b("MercuryActionType").DELETE_MESSAGES,d||b("MercuryPayloadSource").CLIENT_DELETE_MESSAGES))};a.prototype.__constructClientSingleMessagePayload=function(a,b){return{actions:[a],from_client:!0,payload_source:b}};a.prototype.$4=function(a,b){return{actions:[a],from_client:!1,payload_source:b}};a.prototype.$3=function(a,b,c,d){return{actions:[{action_type:c,thread_id:a,message_ids:b}],from_client:!0,payload_source:d}};Object.assign(a,b("MercurySingletonMixin"));e.exports=a}),null);
__d("Image.bs",["Image.react","ReasonReact.bs","bs_js_primitive","bs_js_null_undefined"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e,f,g,h,i,j,k){a={className:b("bs_js_null_undefined").fromOption(a),alt:b("bs_js_null_undefined").fromOption(c),src:b("bs_js_null_undefined").fromOption(f),height:b("bs_js_null_undefined").fromOption(g),title:b("bs_js_null_undefined").fromOption(h),width:b("bs_js_null_undefined").fromOption(i),style:b("bs_js_null_undefined").fromOption(j)};d!==void 0&&(a["aria-label"]=b("bs_js_primitive").valFromOption(d));e!==void 0&&(a["aria-busy"]=b("bs_js_primitive").valFromOption(e));return b("ReasonReact.bs").wrapJsForReason(b("Image.react"),a,k)}f.make=a}),null);
__d("ContextualLayerAutoFlipHorizontal",["ContextualLayerAutoFlip"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("ContextualLayerAutoFlip"));g&&g.prototype;a.prototype.getValidPositions=function(a){"use strict";return[a.getPosition()]};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("VideoCallWebDriverIDs",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ACCEPT_ESCALATION_CALL_BUTTON:"acceptEscalationButton",ADD_GROUP_MEMBERS_BUTTON:"addGroupMembersButton",ANSWER_CALL_BUTTON:"answerCallButton",DOMINANT_SPEAKER_SWITCH_BUTTON:"dominantSpeakerSwitchButton",END_CALL_BUTTON:"endCallButton",ESCALATE_CALL_BUTTON:"escalateCallButton",FULL_SCREEN_BUTTON:"fullScreenButton",GRID_SWITCH_BUTTON:"gridSwitchButton",IGNORE_CALL_BUTTON:"ignoreCallButton",INCALL_VIDEO_CONTAINER:"incallVideoContainer",REDIAL_BUTTON:"rediallButton",REJECT_CALL_BUTTON:"rejectCallButton",REMOTE_VIEW_THUMBNAIL:"remoteViewThumbnail",RTC_APP_VIEW_START_CALL_BUTTON:"RTCAppViewStartCallButton",RTC_INCALL_VIDEO:"RTCIncallVideo",RTC_PICKER_DIALOG_CALL_BUTTON:"RTCPickerDialogCallButton",RTC_PICKER_DIALOG_CANCEL_BUTTON:"RTCPickerDialogCancelButton",RTC_PICKER_DIALOG_CONTACT_LIST_ITEM:"RTCPickerDialogContactListItem",RTC_PICKER_DIALOG_RING_BUTTON:"RTCPickerDialogRingButton",RTC_SELF_VIEW:"RTCSelfView",STAR_RATING_VIEW:"starRatingView",STAR_RATING_NOT_NOW_BUTTON:"starRatingNotNowButton",START_VIDEO_CALL:"startVideoCall",START_VOICE_CALL:"startVoiceCall",TOGGLE_AUDIO_BUTTON:"toggleAudioButton",TOGGLE_VIDEO_BUTTON:"toggleVideoButton",TOGGLE_CHAT_BUTTON:"toggleChatButton",CLOSE_CHAT_BUTTON:"closeChatButton",SETTINGS_BUTTON:"settingsButton",SAVE_SETTINGS_BUTTON:"saveSettingsButton",CLOSE_CALL_WINDOW_BUTTON:"closeCallWindowButton",CHAT_TAB_VIDEO_BUTTON:"chatTabVideoButton",CHAT_TAB_VOICE_BUTTON:"chatTabVoiceButton",PROFILE_DROPDOWN_MENU:"profileDropdownMenu",RTC_CALL_ACTION_LINK:"RTCCallActionLink",STAR_RATING_SUBMIT_BUTTON:"submitStarRatingButton"})}),null);