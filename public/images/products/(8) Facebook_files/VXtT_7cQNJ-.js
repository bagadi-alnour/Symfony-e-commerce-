if (self.CavalryLogger) { CavalryLogger.start_js(["VP47j"]); }

__d("MessengerComposerFlyoutButton.react",["AutoFocusableLink.react","Bootloader","BootloadOnRender.react","ChatFlyoutPlaceholder.react","LazyComponent.react","MessengerContextualDialog.react","React","TooltipData","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=300;c=babelHelpers.inherits(a,b("React").PureComponent);g=c&&c.prototype;function a(){__p&&__p();var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.$1=!1,this.state={open:!!this.props.clicked},this.$2=function(a){a.preventDefault();if(this.$1||this.state.open)return;this.$5();this.$6();this.setState({open:!0})}.bind(this),this.$10=function(a){this.setState({open:a})}.bind(this),this.$3=function(a){this.$1=this.state.open}.bind(this),this.$9=function(){this.$7(),this.props.onHideDialog&&this.props.onHideDialog(),this.setState({open:!1})}.bind(this),this.$8=function(){return this.refs.root}.bind(this),b}a.prototype.render=function(){var a=this.props.renderSVGIcon,c=this.props.title,d=c;this.props.showCustomizedToolTip?c="":d="";return[b("React").createElement(b("AutoFocusableLink.react"),babelHelpers["extends"]({key:"button",autoFocus:this.props.autoFocus,className:this.props.className,label:"chat tab buttons",onClick:this.$2,onMouseDown:this.$3,ref:"root"},b("TooltipData").propsFor(d),{title:c}),a&&a(this.state.open)),this.$4()]};a.prototype.$6=function(){var a="click_"+this.props.buttonName;b("Bootloader").loadModules(["M4ComposerTypedLogger","M4ComposerLoggerEvents"],function(b,c){new b().setEvent(a).log()},"MessengerComposerFlyoutButton.react")};a.prototype.$5=function(){var a=b("performanceAbsoluteNow")();b("Bootloader").loadModules(["QuickPerformanceLogger","MessengerWebQuickLogModule"],function(b,c){b.markerStart(c.COMPOSER_INTERACTION,0,a)},"MessengerComposerFlyoutButton.react")};a.prototype.$7=function(){var a=b("performanceAbsoluteNow")();b("Bootloader").loadModules(["QuickPerformanceLogger","MessengerWebQuickLogModule"],function(b,c){b.markerEnd(c.COMPOSER_INTERACTION,"SUCCESS",0,a)},"MessengerComposerFlyoutButton.react")};a.prototype.$4=function(){if(!this.state.open)return null;var a=this.props.flyoutProps.customWidth?this.props.flyoutProps.customWidth:h;return b("React").createElement(b("MessengerContextualDialog.react"),babelHelpers["extends"]({key:"flyout"},this.props.dialogProps,{alignment:this.props.flyoutAlignment,contextRef:this.$8,onBlur:this.$9,onToggle:this.$10,shown:!0,width:a}),b("React").createElement(b("BootloadOnRender.react"),{component:b("React").createElement(b("LazyComponent.react"),babelHelpers["extends"]({placeholder:b("React").createElement(b("ChatFlyoutPlaceholder.react"),null)},this.props.flyoutProps,{shown:this.state.open,onHideDialog:this.$9})),loader:this.props.flyoutLoader,placeholder:b("React").createElement(b("ChatFlyoutPlaceholder.react"),null)}))};e.exports=a}),null);
__d("MediaManagerInsightsEarningsUtils",["VideoInsightsMetric"],(function(a,b,c,d,e,f){"use strict";a={EARNING_WITH_SUBSIDY:b("VideoInsightsMetric").EARNING_WITH_SUBSIDY,AD_CPM:b("VideoInsightsMetric").AD_CPM,RPM:b("VideoInsightsMetric").RPM,VIEWS_60S:b("VideoInsightsMetric").VIEWS_60S};c={Metrics:a};e.exports=c}),null);