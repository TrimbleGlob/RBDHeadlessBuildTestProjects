<!-- Generated at Fri Jan 25 15:06:37 CST 2013 by EGL 7.1.1.qualifier -->
egl.defineRUILibrary( 'com.ibm.egl.rui.loader.internal', 'ModuleTypeLib',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/loader/internal/ModuleTypeLib.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/loader/internal/ModuleTypeLib',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.loader.internal.ModuleTypeLib['$inst']){
				return egl.com.ibm.egl.rui.loader.internal.ModuleTypeLib['$inst'];
			}
			egl.com.ibm.egl.rui.loader.internal.ModuleTypeLib['$inst']=this;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			this.css = "cssFile";
			this.property = "propertyFile";
			this.imports = "importFile";
			this.runtimeProperty = "runtimePropertyFile";
			this.include = "includeFile";
		}
		
		,
		"toString": function() {
			return "[ModuleTypeLib]";
		}
	}
);
