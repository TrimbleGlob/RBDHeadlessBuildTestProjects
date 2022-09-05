<!-- Generated at Fri Jan 25 15:06:38 CST 2013 by EGL 7.1.1.qualifier -->
egl.defineRUILibrary( 'com.ibm.egl.rui.mvc', 'MVCLib',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/mvc/MVCLib.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/MVCLib',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.mvc.MVCLib['$inst']){
				return egl.com.ibm.egl.rui.mvc.MVCLib['$inst'];
			}
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst']=this;
			this.currentController = null;
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			this.currentController = null;
		}
		
		,
		"getCurrentContext": function() {
			var $result = null;
			$result = this.currentController;
			return $result;
		}
		,
		"setCurrentContext": function( acontroller ) {
			this.currentController = acontroller;
			
		}
		,
		"toString": function() {
			return "[MVCLib]";
		}
	}
);
