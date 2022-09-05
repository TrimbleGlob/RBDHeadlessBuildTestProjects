<!-- Generated at Fri Jan 25 15:06:33 CST 2013 by EGL 7.1.1.qualifier -->
egl.defineRUILibrary( 'com.ibm.egl.rui.widgets', 'DataGridLib',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/DataGridLib.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/DataGridLib',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.widgets.DataGridLib['$inst']){
				return egl.com.ibm.egl.rui.widgets.DataGridLib['$inst'];
			}
			egl.com.ibm.egl.rui.widgets.DataGridLib['$inst']=this;
			this.util = new egl.com.ibm.egl.rui.widgets.DataGridUtil();
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			this.ALIGN_RIGHT = 2;
			this.ALIGN_LEFT = 0;
			this.ALIGN_CENTER = 1;
			this.DISABLE_SELECTION = 0;
			this.SINGLE_SELECTION = 1;
			this.MULTIPLE_SELECTION = 2;
			this.SORT_NONE = 0;
			this.SORT_DOWN = 1;
			this.SORT_UP = 2;
		}
		
		,
		"toString": function() {
			return "[DataGridLib]";
		}
	}
);
