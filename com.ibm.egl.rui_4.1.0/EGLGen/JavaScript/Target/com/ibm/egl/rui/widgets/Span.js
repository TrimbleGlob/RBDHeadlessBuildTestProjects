<!-- Generated at Fri Jan 25 15:06:29 CST 2013 by EGL 7.1.1.qualifier -->

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'Span', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/Span.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/Span',
	"constructor" : function()
	{
		this.text = "";
		this.jsrt$SysVar= new egl.egl.core.SysVar();
	}
	
	,
	"setText": function( textIn ) {
		this.setInnerHTML(textIn);
		
	}
	,
	"getText": function() {
		var $result = "";
		$result = this.getInnerHTML();
		return $result;
	}
	,
	"toString": function() {
		return "[Span]";
	}
}
, 'span'
);
