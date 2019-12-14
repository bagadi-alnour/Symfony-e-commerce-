if (self.CavalryLogger) { CavalryLogger.start_js(["7P521"]); }

__d("UFI2CommentMenuBlue_comment.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Fragment",name:"UFI2CommentMenuBlue_comment",type:"Comment",metadata:null,argumentDefinitions:[{kind:"LocalArgument",name:"translationType",type:"TextTranslationType",defaultValue:null}],selections:[{kind:"FragmentSpread",name:"UFI2RemoveTextDelightsNUX_comment",args:null},a,{kind:"LinkedField",alias:null,name:"author",storageKey:null,args:null,concreteType:null,plural:!1,selections:[a,{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"group_comment_info",storageKey:null,args:null,concreteType:"GroupCommentInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"is_author_muted",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"group_id",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"legacy_fbid",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"legacy_token",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"comment_menu_tooltip",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"comment_menu_items",storageKey:null,args:null,concreteType:null,plural:!0,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},{kind:"InlineFragment",type:"CommentMenuItemDeleteAndRemoveMember",selections:[{kind:"ScalarField",alias:null,name:"show_remove_content_options",args:null,storageKey:null}]}]}]}}();e.exports=a}),null);
__d("UFI2CommentMenuBlue_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Fragment",name:"UFI2CommentMenuBlue_feedback",type:"Feedback",metadata:null,argumentDefinitions:[{kind:"RootArgument",name:"useDefaultActor",type:"Boolean"}],selections:[a,{kind:"LinkedField",alias:null,name:"viewer_current_actor",storageKey:null,args:[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor",type:"Boolean"}],concreteType:null,plural:!1,selections:[a]}]}}();e.exports=a}),null);
__d("UFI2CommentMenuBlue.react",["cx","Bootloader","FBLogger","JSResource","React","RelayModern","UFI2NUXConfig","XUIDotsButton.react","XUISpinner.react","ifRequired","injectSubscriptionsHandler.react","lazyLoadComponent","UFI2CommentMenuBlue_comment.graphql","UFI2CommentMenuBlue_feedback.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("RelayModern").createFragmentContainer;b("RelayModern").graphql;var i=b("lazyLoadComponent")(b("JSResource")("UFI2RemoveTextDelightsNUX.react").__setRef("UFI2CommentMenuBlue.react")),j={CommentMenuItemDelete:b("JSResource")("getCommentMenuDeleteItem").__setRef("UFI2CommentMenuBlue.react"),CommentMenuItemDeleteAndRemoveMember:b("JSResource")("getCommentMenuDeleteAndRemoveItem").__setRef("UFI2CommentMenuBlue.react"),CommentMenuItemDivider:b("JSResource")("getCommentMenuItemDivider").__setRef("UFI2CommentMenuBlue.react"),CommentMenuItemEdit:b("JSResource")("getCommentMenuEditItem").__setRef("UFI2CommentMenuBlue.react"),CommentMenuItemGiveFeedbackOrReport:b("JSResource")("getCommentMenuItemGiveFeedbackOrReport").__setRef("UFI2CommentMenuBlue.react"),CommentMenuItemHide:b("JSResource")("getCommentMenuHideItem").__setRef("UFI2CommentMenuBlue.react"),CommentMenuItemMoreOptions:b("JSResource")("getCommentMenuMoreOptionsItem").__setRef("UFI2CommentMenuBlue.react"),CommentMenuItemMuteMember:b("JSResource")("getCommentMenuMuteCommenterItem").__setRef("UFI2CommentMenuBlue.react"),CommentMenuItemRemoveTextDelights:b("JSResource")("getCommentMenuItemRemoveTextDelightsItem").__setRef("UFI2CommentMenuBlue.react"),CommentMenuItemRemoveWithFeedback:b("JSResource")("getCommentMenuDeleteWithFeedbackItem").__setRef("UFI2CommentMenuBlue.react")};function k(a){return a&&j[a.__typename]}function l(){var a=b("ifRequired")("ContextualDialogArrow",function(a){return a}),c=b("ifRequired")("PopoverMenu.react",function(a){return a}),d=b("ifRequired")("ReactXUIMenu",function(a){return a});return a&&c&&d?{ContextualDialogArrow:a,PopoverMenu:c,XUIMenu:d}:null}function m(a){a=(a=a.comment.comment_menu_items)!=null?a:[];return a.map(k).filter(Boolean)}function n(a){return a.every(function(a){return b("ifRequired").call(null,a.getModuleId(),function(){return!0},function(){return!1})})}d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={itemsAreLoaded:n(m(this.props)),menuResources:l(),showNUX:!1},this.$4=!1,this.$5=function(a){__p&&__p();var c,d,e=k(a);if(!e)return null;e=b("ifRequired").call(null,e.getModuleId(),function(a){return a});if(!e){b("FBLogger")("ufi2").addMetadata("UFI","COMMENT_ID",this.props.comment.id||"UNKNOWN").warn("Tried to render comment item before getter was loaded for item with type `%s`.",a.__typename);return null}var f=this.props;c=(c=f.feedback.viewer_current_actor)==null?void 0:c.id;d=(d=f.comment.author)==null?void 0:d.id;return e({actorId:c,authorName:(e=f.comment.author)==null?void 0:e.name,commentId:f.comment.id,confirmDeleteWithDialog:c===d,feedbackId:f.feedback.id,feedbackSource:f.feedbackSource,groupId:(e=f.comment.group_comment_info)==null?void 0:e.group_id,isMuted:(c=f.comment.group_comment_info)==null?void 0:c.is_author_muted,itemType:a.__typename,legacyId:f.comment.legacy_fbid,legacyToken:f.comment.legacy_token,onEdit:f.onEdit,relay:f.relay,showRemoveContentOptions:a.__typename==="CommentMenuItemDeleteAndRemoveMember"&&a.show_remove_content_options,topLevelFeedbackId:f.topLevelFeedbackId})}.bind(this),this.$8=function(a){this.$3=a,a&&b("UFI2NUXConfig").shouldShowRemoveTextDelightsNUX&&this.setState({showNUX:!0})}.bind(this),this.$10=function(){this.$9()}.bind(this),this.$11=function(){this.$9(),this.$3||(this.$4=!this.$4)}.bind(this),c}a.getDerivedStateFromProps=function(a){return{itemsAreLoaded:n(m(a))}};a.prototype.$6=function(){if(this.$1)return;this.$1=!0;this.props.subscriptionsHandler.addSubscriptions(b("Bootloader").loadModules(["ContextualDialogArrow","PopoverMenu.react","ReactXUIMenu"],function(){return this.setState({menuResources:l()})}.bind(this),"UFI2CommentMenuBlue.react"))};a.prototype.$7=function(){if(this.$2)return;this.$2=!0;this.props.subscriptionsHandler.addSubscriptions(b("Bootloader").loadModules.call(b("Bootloader"),m(this.props).map(function(a){return a.getModuleId()}),function(){this.setState({itemsAreLoaded:!0})}.bind(this)))};a.prototype.$9=function(){this.state.menuResources||this.$6(),this.state.itemsAreLoaded||this.$7()};a.prototype.componentDidUpdate=function(){this.$4&&this.$3&&(this.$3.showPopover(),this.$4=!1)};a.prototype.render=function(){__p&&__p();var a=this.props.comment,c=this.state.showNUX,d=a.comment_menu_items;if(!d||!d.length)return null;var e=Boolean(d.find(function(a){return a.__typename==="CommentMenuItemRemoveTextDelights"})),f=a.comment_menu_tooltip;f=f?{label:f,tooltip:f}:null;f=b("React").createElement(b("XUIDotsButton.react"),babelHelpers["extends"]({},f,{className:"_2f3a"+(this.props.visible?" _1n6k":""),"data-testid":"UFI2CommentMenu/toggle",onClick:this.$11,onMouseEnter:this.$10,onTouchStart:this.$11,type:"button"}));if(!this.state.menuResources)return f;var g=this.state.menuResources,h=g.ContextualDialogArrow,j=g.PopoverMenu;g=g.XUIMenu;d=this.state.itemsAreLoaded?d.map(this.$5).filter(Boolean):b("React").createElement(g.Item,{disabled:!0},b("React").createElement(b("XUISpinner.react"),{size:"small"}));g=b("React").createElement(g,{className:"_67lz"},d);return b("React").createElement(b("React").Fragment,null,e&&c?b("React").createElement(b("React").Suspense,{fallback:null},b("React").createElement(i,{comment:a,contextRef:function(){return this.$3}.bind(this)})):null,b("React").createElement(j,{align:"right",layerBehaviors:[h],menu:g,ref:this.$8},f))};e.exports=c(b("injectSubscriptionsHandler.react")(a),{comment:function(){return b("UFI2CommentMenuBlue_comment.graphql")},feedback:function(){return b("UFI2CommentMenuBlue_feedback.graphql")}})}),null);