if (self.CavalryLogger) { CavalryLogger.start_js(["qHzD5"]); }

__d("ChatEventPlanButton.react",["cx","fbt","Bootloader","BootloadOnRender.react","ChatConfig","ChatFlyoutPlaceholder.react","EventsActionsLogger","JSResource","LazyComponent.react","Link.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={showFlyout:!1,eventID:null},this.$2=!1,this.$3=function(){__p&&__p();b("Bootloader").loadModules(["EventReminderStateStore","EventReminderRequestHelper","EventReminderActionsLogger","M4ComposerTypedLogger","M4ComposerLoggerEvents"],function(a,b,c,d,e){__p&&__p();c.logClickOnEntryPoint();new d().setEvent(e.CLICK_EVENT_PLAN).log();var f=a.getSingleEventByThreadID(this.props.threadID);if(!this.$2)return;c=this.state.showFlyout;!this.props.showReminder&&f&&f.exists?(this.$1=!0,!this.state.showFlyout?b.fetchEventReminder(this.props.threadID,f.eventID,function(){if(!this.$2)return;this.setState({showFlyout:!0,eventID:f.eventID})}.bind(this)):this.setState({showFlyout:!1})):(this.$1=!1,this.setState({showFlyout:!c,eventID:null}))}.bind(this),"ChatEventPlanButton.react")}.bind(this),this.onToggle=function(a){a!==this.state.showFlyout&&this.setState({showFlyout:a})}.bind(this),c}a.prototype.componentDidMount=function(){this.$2=!0};a.prototype.componentWillUnmount=function(){this.$2=!1};a.prototype.render=function(){var a=this.props.showReminder?h._("Start a reminder"):h._("Start a plan");return b("React").createElement("div",null,b("React").createElement(b("Link.react"),{className:this.props.className,onClick:this.$3,ref:"event_plan",role:"button",title:a},this.$4()))};a.prototype.$4=function(){if(!this.state.showFlyout)return null;var a={alignment:"right",position:"above",contextRef:function(){return this.refs.event_plan}.bind(this),shown:this.state.showFlyout,onToggle:this.onToggle},c={action_history:[{surface:b("EventsActionsLogger").Surface.MESSENGER_CHAT_TAB,mechanism:b("EventsActionsLogger").Mechanism.MESSENGER_COMPOSER}]};return b("React").createElement(b("BootloadOnRender.react"),{component:b("React").createElement(b("LazyComponent.react"),{actionContext:c,dialogProps:a,flyoutNoSheet:!0,isEditing:this.$1,threadID:this.props.threadID,eventID:this.state.eventID,onSuccess:this.props.onSuccess,showReminder:!!this.props.showReminder}),loader:b("JSResource")("ChatEventReminderContainer.react").__setRef("ChatEventPlanButton.react"),placeholder:b("React").createElement(b("ChatFlyoutPlaceholder.react"),null)})};a.defaultProps={className:"_6gb _3k_u _6jtw"};e.exports=a}),null);
__d("CRMSalesOrg",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNKNOWN:"unknown",GPA:"GPA",GSO:"GSO",SMB:"SMB"})}),null);