if (self.CavalryLogger) { CavalryLogger.start_js(["m6YOM"]); }

__d("UFINewCommentsPill.react",["ix","cx","fbt","Arbiter","FluxContainer","Image.react","React","SubscriptionsHandler","UFIAddCommentActionType","UFISharedDispatcher","UFIThreadedFacecastCommentsStore","UFIUnseenCommentsStore","XUIText.react","asset","gkx"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;j=babelHelpers.inherits(a,b("React").PureComponent);j&&j.prototype;a.getStores=function(){return[b("UFIThreadedFacecastCommentsStore"),b("UFIUnseenCommentsStore")]};a.calculateState=function(a,c){c=c.instanceID;var d=b("UFIThreadedFacecastCommentsStore").getCommentID(c);d=d!=null?b("UFIUnseenCommentsStore").getUnseenCommentsInThread(c,d):b("UFIUnseenCommentsStore").getUnseenComments(c);return babelHelpers["extends"]({},a,{unseenComments:d})};a.prototype.componentDidMount=function(){__p&&__p();this.$1=new(b("SubscriptionsHandler"))();this.$1.addSubscriptions(b("Arbiter").subscribe("quick-comments-visible-changed",function(a,b){this.setState({quickCommentsVisible:b})}.bind(this)),b("Arbiter").subscribe("quick-comments-expanded-changed",function(a,b){this.setState({quickCommentsExpanded:b})}.bind(this)));if(b("gkx")("808375")){var a=b("UFISharedDispatcher").register(function(a){if(a.instanceID!==this.props.instanceID)return;switch(a.type){case b("UFIAddCommentActionType").CHANGE_CONTENT:a.text===""?this.setState({isCurrentlyComposing:!1}):this.setState({isCurrentlyComposing:!0});return;case b("UFIAddCommentActionType").SUBMIT_NEW:case b("UFIAddCommentActionType").SUBMIT_EDIT:case b("UFIAddCommentActionType").RETRY_SUBMIT:case b("UFIAddCommentActionType").PIVOT_SEND_MESSAGE:case b("UFIAddCommentActionType").CANCEL:this.setState({isCurrentlyComposing:!1});return}}.bind(this));this.$1.addSubscriptions({unsubscribe:function(){return b("UFISharedDispatcher").unregister(a)}})}};a.prototype.componentWillUnmount=function(){this.$1.release()};a.prototype.render=function(){var a=this.state,c=a.unseenComments,d=a.quickCommentsExpanded,e=a.quickCommentsVisible;a=a.isCurrentlyComposing;if(a||c<=0||e&&d)return null;a=this.props;d=a.isLiveVideo;a=a.onClick;d=(d?"_6b7w":"")+(d?"":" _6b7x")+(e?" _6ei8":"");return b("React").createElement("div",{className:d},b("React").createElement("button",{className:"_3-yi",onClick:a},b("React").createElement(b("Image.react"),{src:g("374678"),className:"_3-yj"}),b("React").createElement(b("XUIText.react"),{size:"body3",color:"highlight"},c===1?i._("New Comment"):i._({"*":"New Comments ({comment count})"},[i._param("comment count",c,[0])]))))};function a(){j.apply(this,arguments)}e.exports=b("FluxContainer").create(a,{withProps:!0})}),null);
__d("Layer.react",["invariant","Layer","React","ReactLayerCommon","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=!1;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.layer=null,this.$1=null,this.$3=null,b}a.prototype.UNSAFE_componentWillMount=function(){this.$1=document.createElement("div")};a.prototype.componentDidMount=function(){this.layer=this.$4(),this.layer||g(0,3314),this.$2=b("ReactLayerCommon").makeInitialSubscriptions(this.layer,this.props,this.$3),this.$5({},this.props.behaviors||{}),this.props.shown&&b("nullthrows")(this.layer).show()};a.prototype.componentDidUpdate=function(a){this.$5(a.behaviors||{},this.props.behaviors||{}),this.$6(a)};a.prototype.componentWillUnmount=function(){this.$1=null,this.$2&&(this.$2.release(),this.$2=null),this.layer&&(this.layer.destroy(),this.layer=null)};a.prototype.$5=function(a,c){b("ReactLayerCommon").diffBehaviors(a,c,this.layer)};a.prototype.$6=function(a){a.shown&&this.props.shown===!1?b("nullthrows")(this.layer).hide():this.props.shown&&!a.shown&&b("nullthrows")(this.layer).show()};a.prototype.$4=function(){var a=b("nullthrows")(this.$1);return this.props.createLayer!==void 0?this.props.createLayer(a):new(b("Layer"))({},a)};a.prototype.render=function(){return b("ReactLayerCommon").render(this.props.children,this.$1)};a.defaultProps={shown:!0};e.exports=a}),null);
__d("CreateLivingRoomActionLinkImpressionFalcoEvent",["FalcoLogger"],(function(a,b,c,d,e,f){"use strict";a.log=function(a){b("FalcoLogger").log("create_living_room_action_link_impression",a())};function a(){}e.exports=a}),null);
__d("CreateLivingRoomActionLinkStore",["undux"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("undux").connect;c=b("undux").createStore;d={ctas:{}};var g=c(d);f=function(a,b){var c,d=g.get("ctas");if(((c=d[a])==null?void 0:c.isActivated)===!0)return;d=babelHelpers["extends"]({},d,(c={},c[a]={isActivated:!0,creationSource:b},c));g.set("ctas")(d)};e.exports={withStore:a(g),activateLivingRoomCTAForVideo:f}}),null);
__d("CreateLivingRoomActionLinkTrigger",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ALWAYS_SHOW:"always_show"})}),null);
__d("LivingRoomCreationSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({GROUP_COMPOSER:"group_composer",USER_TIMELINE_COMPOSER:"user_timeline_composer",NEWSFEED_COMPOSER:"newsfeed_composer",PAGE_COMPOSER:"page_composer",PAGE_COMPOSER_PREMIERE:"page_composer_premiere",PAGE_COMPOSER_DIALOG:"page_composer_dialog",VIDEO_PLAYER_PLUGIN:"video_player_plugin",VIDEO_PLAYER_PLUGIN_DIALOG:"video_player_plugin_dialog",LIVING_ROOM_ENDSCREEN_CTA:"living_room_endscreen_cta",MESSENGER:"messenger",MESSENGER_COMPOSER:"messenger_composer",MESSENGER_VIDEO_ATTACHMENT:"messenger_video_attachment",MESSENGER_SOLO_PLAYER:"messenger_solo_player",MESSENGER_CTA:"messenger_cta",ENDED_LIVING_ROOM_STORY_CTA:"ended_living_room_story_cta",UFI_SHARE:"ufi_share",LIVE_VIDEO_SHARE_SHEET:"live_video_share_sheet",LIVE_VIDEO_PROMPT:"live_video_prompt",CHANNEL_FEED_CTA:"channel_feed_cta",FEED_CTA_ON_ALWAYS_SHOW:"feed_cta_on_always_show",FEED_CTA_ON_REACT:"feed_cta_on_react",FEED_CTA_ON_COMMENT:"feed_cta_on_comment",FEED_CTA_ON_VIDEO_PRESS:"feed_cta_on_video_press",FEED_CTA_ON_SHARE:"feed_cta_on_share",FEED_CTA_ON_UNKNOWN:"feed_cta_on_unknown",USER_TIMELINE_VIDEO_CTA:"user_timeline_video_cta",PAGE_TIMELINE_VIDEO_CTA:"page_timeline_video_cta",UNKNOWN_TIMELINE_VIDEO_CTA:"unknown_timeline_video_cta",GROUP_MALL_VIDEO_CTA:"group_mall_video_cta",FEED_CTA_ON_NEWSFEED:"feed_cta_on_newsfeed",VIDEO_INSIGHTS_DIALOG:"video_insights_dialog",PAGE_FEED_OPTION:"page_feed_option",PAGE_VIDEO_LIBRARY_MEGAPHONE:"page_video_library_megaphone",PAGE_VIDEO_LIBRARY_BUTTON:"page_video_library_button",PAGE_ADMIN_QP:"page_admin_qp",END_SCREEN_CTA:"end_screen_cta",UNKNOWN_COMPOSER:"unknown_composer",UNKNOWN:"unknown",TEST:"test"})}),null);
__d("XLivingRoomVideoShareDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/living_room/share_dialog/",{creation_source:{type:"Enum",required:!0,enumType:1},entry_source:{type:"Enum",required:!0,enumType:1},video_id:{type:"FBID"},default_to_page:{type:"Bool",defaultValue:!1},group_id:{type:"FBID"},living_room_id:{type:"FBID"}})}),null);
__d("CreateLivingRoomActionLink.react",["ix","cx","fbt","CreateLivingRoomActionLinkImpressionFalcoEvent","CreateLivingRoomActionLinkStore","CreateLivingRoomActionLinkTrigger","Image.react","LivingRoomCreationSource","LivingRoomEntrySource","React","XLivingRoomVideoShareDialogController","XUIButton.react","XUIGrayText.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("CreateLivingRoomActionLinkStore").activateLivingRoomCTAForVideo;a=b("CreateLivingRoomActionLinkStore").withStore;var k=a(function(){__p&&__p();var a,c;a=babelHelpers.inherits(d,b("React").Component);c=a&&a.prototype;function d(){var a,b;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return b=(a=c.constructor).call.apply(a,[this].concat(e)),this.$1=!1,b}d.prototype.componentDidMount=function(){"use strict";var a=this.props.triggers;if(a==null)return;j(this.props.videoID,this.props.creationSource||b("LivingRoomCreationSource").UNKNOWN_TIMELINE_VIDEO_CTA)};d.prototype.componentDidUpdate=function(a){var c=this.props,d=c.videoID,e=c.creationSource;!this.$1&&!((c=a.store.get("ctas")[d])==null?void 0:c.isActivated)&&((a=this.props.store.get("ctas")[d])==null?void 0:a.isActivated)&&(b("CreateLivingRoomActionLinkImpressionFalcoEvent").log(function(){return{video_id:d,creation_source:e!=null?e:b("LivingRoomCreationSource").FEED_CTA_ON_UNKNOWN}}),this.$1=!0)};d.prototype.render=function(){"use strict";var a=this.props,c=a.videoID,d=a.title,e=a.linkTitle,f=a.groupID;a=a.creationSource;var h=this.props.store.get("ctas")[c];if(h==null)return null;h=h.isActivated;return!h?null:b("React").createElement("div",{className:"_1kyo"},b("React").createElement("div",{className:"_6z3v"},b("React").createElement(b("Image.react"),{className:"_6z2v",src:g("657321")})),b("React").createElement("div",{className:"_1kyp _6z2w"},b("React").createElement(b("XUIGrayText.react"),{shade:"light"},d!=null?d:i._("Watch this video with your friends"))),b("React").createElement("div",{className:"_1kyq"},b("React").createElement(b("XUIButton.react"),{display:"inline-block",label:e!=null?e:i._("Start Watch Party"),href:"#",ajaxify:b("XLivingRoomVideoShareDialogController").getURIBuilder().setFBID("video_id",c).setEnum("creation_source",a).setEnum("entry_source",b("LivingRoomEntrySource").CTA_CREATION_DIALOG).setFBID("group_id",f).getURI(),rel:"dialog-post"})))};return d}());c=function(a){return b("React").createElement(k,a)};e.exports=c}),null);
__d("LiveVideoIndicatorContainerServerCallable.react",["DateConsts","FBJSON","LiveVideoIndicatorContainer.react","React","SubscriptionsHandler","clearInterval","setInterval"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=3*b("DateConsts").MS_PER_SEC;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.state={showElapsedTime:!1,viewerCount:this.props.viewerCount},b}a.prototype.componentDidMount=function(){this.subscriptions=new(b("SubscriptionsHandler"))(),this.subscriptions.addSubscriptions(this.props.videoPlayerController.addListener("VideoWithLiveBroadcast/viewCountChange",function(a){a=a.getAttribute("data-store");a=a?b("FBJSON").parse(a).viewerCount:null;this.setState({viewerCount:a})}.bind(this))),this.props.showTimePop&&this.props.broadcastCreationTime&&this.subscriptions.addSubscriptions(this.props.videoPlayerController.addListener("beginPlayback",function(){this.setState({showElapsedTime:!0});var a=b("setInterval")(function(){this.setState({showElapsedTime:!1}),b("clearInterval")(a)}.bind(this),h)}.bind(this)))};a.prototype.componentWillUnmount=function(){this.subscriptions.release()};a.prototype.render=function(){return b("React").createElement(b("LiveVideoIndicatorContainer.react"),{compact:this.props.compact,inline:this.props.inline,inBeeper:this.props.inBeeper,isAudio:this.props.isAudio,isBreakingNews:this.props.isBreakingNews,isLive:this.props.isLive,isPremiere:this.props.isPremiere,isPreview:this.props.isPreview,isRehearsal:this.props.isRehearsal,pageCount:this.props.pageCount,playerID:this.props.videoPlayerController.getVideoPlayerID(),showElapsedTime:this.state.showElapsedTime,startTime:this.props.broadcastCreationTime,textOverride:this.props.textOverride,viewerCount:this.state.viewerCount})};e.exports=a}),null);