<!-- Generated at Fri Jan 25 15:06:35 CST 2013 by EGL 7.1.1.qualifier -->
egl.defineRUILibrary( 'com.ibm.egl.rui.mvc', 'InternalMessageLib',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/mvc/InternalMessageLib.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/InternalMessageLib',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst']){
				return egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'];
			}
			egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst']=this;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.egl.core.SysLib();
		}
		
		,
		"getRuntimeErrorMessage": function( msgKey, defaultMsgId, inserts ) {
			var $result = "";
			var messageValue = "";
			if ( (msgKey == "") ) {
				messageValue = (function(x){ return x !== null ? ((x).toString()) : ""; })(egl.getRuntimeMessage( defaultMsgId, inserts ));
			}
			else {
				messageValue = msgKey;
			}
			$result = messageValue;
			return $result;
		}
		,
		"toString": function() {
			return "[InternalMessageLib]";
		}
	}
);
