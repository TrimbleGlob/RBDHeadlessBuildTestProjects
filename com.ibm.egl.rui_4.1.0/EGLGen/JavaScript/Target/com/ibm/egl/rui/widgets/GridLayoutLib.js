<!-- Generated at Fri Jan 25 15:06:29 CST 2013 by EGL 7.1.1.qualifier -->
egl.defineRUILibrary( 'com.ibm.egl.rui.widgets', 'GridLayoutLib',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/GridLayoutLib.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/GridLayoutLib',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.widgets.GridLayoutLib['$inst']){
				return egl.com.ibm.egl.rui.widgets.GridLayoutLib['$inst'];
			}
			egl.com.ibm.egl.rui.widgets.GridLayoutLib['$inst']=this;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			this.ALIGN_LEFT = 0;
			this.ALIGN_CENTER = 1;
			this.ALIGN_RIGHT = 2;
			this.VALIGN_TOP = 3;
			this.VALIGN_MIDDLE = 4;
			this.VALIGN_BOTTOM = 5;
		}
		
		,
		"toString": function() {
			return "[GridLayoutLib]";
		}
	}
);
