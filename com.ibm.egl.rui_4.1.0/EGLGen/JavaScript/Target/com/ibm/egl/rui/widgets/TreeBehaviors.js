<!-- Generated at Fri Jan 25 15:06:30 CST 2013 by EGL 7.1.1.qualifier -->
egl.defineRUILibrary( 'com.ibm.egl.rui.widgets', 'TreeBehaviors',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/TreeBehaviors.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/TreeBehaviors',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.widgets.TreeBehaviors['$inst']){
				return egl.com.ibm.egl.rui.widgets.TreeBehaviors['$inst'];
			}
			egl.com.ibm.egl.rui.widgets.TreeBehaviors['$inst']=this;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
		}
		
		,
		"pointer": function( node ) {
			egl.checkNull(node).setCursor("pointer");
			
		}
		,
		"toString": function() {
			return "[TreeBehaviors]";
		}
	}
);
