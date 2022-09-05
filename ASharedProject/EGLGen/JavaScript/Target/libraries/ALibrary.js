<!-- Generated at Fri Jan 25 15:06:10 CST 2013 by EGL 7.1.1.qualifier -->
egl.defineRUILibrary( 'libraries', 'ALibrary',
	{
		'eze$$fileName': '/ASharedProject/EGLSource/libraries/ALibrary.egl',
		'eze$$runtimePropertiesFile': 'libraries/ALibrary',
		"constructor" : function()
		{
			if(egl.libraries.ALibrary['$inst']){
				return egl.libraries.ALibrary['$inst'];
			}
			egl.libraries.ALibrary['$inst']=this;
			this.value = "";
			this.aRec = new egl.records.ARecord();
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			this.value = "ALibrary value";
		}
		
		,
		"setValue": function( value, eze$$value$func_, eze$$caller ) {
			this.value = value;
			
		}
		,
		"getValue": function() {
			var $result = "";
			$result = this.getValueFunction();
			return $result;
		}
		,
		"getValueFunction": function() {
			var $result = "";
			this.aRec.aString = this.value;
			$result = this.aRec.aString;
			return $result;
		}
		,
		"toString": function() {
			return "[ALibrary]";
		}
	}
);
