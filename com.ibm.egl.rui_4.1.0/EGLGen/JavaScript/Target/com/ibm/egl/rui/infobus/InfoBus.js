<!-- Generated at Fri Jan 25 15:06:37 CST 2013 by EGL 7.1.1.qualifier -->
egl.defineRUILibrary( 'com.ibm.egl.rui.infobus', 'InfoBus',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/infobus/InfoBus.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/infobus/InfoBus',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.infobus.InfoBus['$inst']){
				return egl.com.ibm.egl.rui.infobus.InfoBus['$inst'];
			}
			egl.com.ibm.egl.rui.infobus.InfoBus['$inst']=this;
			this.bridge = new egl.com.ibm.egl.rui.infobus.OpenAjaxHubBridge();
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
		}
		
		,
		"subscribe": function( name, callback, eze$$callback$func_, eze$$caller ) {
			var $result = null;
			$result = this.bridge.subscribe(name, callback, function(eze$$inout$callback) {
				callback = eze$$inout$callback;
				eze$$callback$func_.call(eze$$caller,callback);
			}, this );
			return $result;
		}
		,
		"unsubscribe": function( subscription ) {
			this.bridge.unsubscribe(egl.unboxAny(subscription) );
			
		}
		,
		"publish": function( name, data ) {
			this.bridge.publish(name, egl.unboxAny(data) );
			
		}
		,
		"toString": function() {
			return "[InfoBus]";
		}
	}
);
