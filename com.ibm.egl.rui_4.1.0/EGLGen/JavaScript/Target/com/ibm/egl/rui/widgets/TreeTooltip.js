<!-- Generated at Fri Jan 25 15:06:30 CST 2013 by EGL 7.1.1.qualifier -->

egl.defineClass('com.ibm.egl.rui.widgets', 'TreeTooltip', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/TreeTooltip.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/TreeTooltip',
	"constructor" : function()
	{
		this.provider = null;
		
		this.tooltip = new egl.com.ibm.egl.rui.widgets.Tooltip();
		egl.addEmbeddedWidget(this, "tooltip");
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		egl.checkNull(this.tooltip).provider = new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.TreeTooltip.prototype.getTooltipContents);
	}
	
	,
	"setTooltips": function( node ) {
		egl.checkNull(this.tooltip).enable(node );
		
	}
	,
	"getTooltipContents": function( widget ) {
		var $result = null;
		var node = null;
		node = egl.convertAnyToRefType(widget,"Tcom/ibm/egl/rui/widgets/treenode;",egl.com.ibm.egl.rui.widgets.TreeNode);
		var tip = null;
		tip = this.provider(node, function(eze$$inout$node) {
			node = eze$$inout$node;
		}, this );
		$result = tip;
		return $result;
	}
	,
	"toString": function() {
		return "[TreeTooltip]";
	}
}
);
