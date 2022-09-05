<!-- Generated at Fri Jan 25 15:06:31 CST 2013 by EGL 7.1.1.qualifier -->

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'HyperLink', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/HyperLink.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/HyperLink',
	"constructor" : function()
	{
		this.text = "";
		this.target = "";
		this.href = "";
		this.hyperChild = new egl.egl.ui.rui.Widget();
		egl.addEmbeddedWidget(this, "hyperChild");
		
		this.hyperParent = new egl.egl.ui.rui.Widget();
		egl.addEmbeddedWidget(this, "hyperParent");
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		this.targetWidget = this.hyperParent;
		this.hyperChild.setTagName( "a" );
		this.hyperParent.setTagName( "div" );
		this.hyperParent.setChildren( [ this.hyperChild ] );
	}
	
	,
	"getText": function() {
		var $result = "";
		$result = this.text;
		return $result;
	}
	,
	"setText": function( textIn ) {
		this.text = textIn;
		this.hyperChild.setInnerHTML( this.text );
		
	}
	,
	"getTarget": function() {
		var $result = "";
		$result = this.target;
		return $result;
	}
	,
	"setTarget": function( targetIn ) {
		this.target = targetIn;
		this.hyperChild.setAttribute("target", this.target );
		
	}
	,
	"getHref": function() {
		var $result = "";
		$result = this.href;
		return $result;
	}
	,
	"setHref": function( hrefIn ) {
		this.href = hrefIn;
		this.hyperChild.setAttribute("href", this.href );
		
	}
	,
	"toString": function() {
		return "[HyperLink]";
	}
}
);
