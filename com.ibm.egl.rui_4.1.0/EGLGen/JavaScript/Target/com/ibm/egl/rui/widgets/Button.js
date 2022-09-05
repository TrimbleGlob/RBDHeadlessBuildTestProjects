<!-- Generated at Fri Jan 25 15:06:33 CST 2013 by EGL 7.1.1.qualifier -->

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'Button', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/Button.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/Button',
	"constructor" : function()
	{
		this.text = "";
		this.jsrt$SysVar= new egl.egl.core.SysVar();
	}
	
	,
	"setText": function( textIn ) {
		this.text = textIn;
		this.setAttribute("value", {eze$$value : textIn, eze$$signature : "S;"} );
		var isVisual = false;
		isVisual = (this.getTextLayout() == "Visual");
		var isReverseDirection = false;
		isReverseDirection = (this.getReverseTextDirection() == "Yes");
		if ( (isVisual || isReverseDirection) ) {
			this.setBiDiMarkers(isVisual, isReverseDirection );
		}
		
	}
	,
	"getText": function() {
		var $result = "";
		if ( ((this.getTextLayout() == "Visual") || (this.getReverseTextDirection() == "Yes")) ) {
			this.cleanBiDiMarkers();
		}
		$result = egl.convertAnyToString(this.getAttribute("value" ),false);
		return $result;
	}
	,
	"toString": function() {
		return "[Button]";
	}
}
, 'input type=button'
);
