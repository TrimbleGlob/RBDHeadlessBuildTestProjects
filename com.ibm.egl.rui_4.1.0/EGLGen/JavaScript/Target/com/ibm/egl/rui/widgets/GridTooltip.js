<!-- Generated at Fri Jan 25 15:06:32 CST 2013 by EGL 7.1.1.qualifier -->

egl.defineClass('com.ibm.egl.rui.widgets', 'GridTooltip', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/GridTooltip.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/GridTooltip',
	"constructor" : function()
	{
		this.provider = null;
		
		this.grid = null;
		egl.addEmbeddedWidget(this, "grid");
		
		this.tooltip = new egl.com.ibm.egl.rui.widgets.Tooltip();
		egl.addEmbeddedWidget(this, "tooltip");
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.com.ibm.egl.rui.widgets.GridBehaviors();
		egl.checkNull(this.tooltip).provider = new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.GridTooltip.prototype.getTooltipContents);
	}
	
	,
	"setTooltips": function( grid, td, row, rowNumber, column ) {
		egl.checkNull(this.tooltip).enable(td );
		td.setAttribute("rowNumber", rowNumber );
		this.grid = grid;
		
	}
	,
	"getTooltipContents": function( widget ) {
		var $result = null;
		var td = null;
		td = egl.convertAnyToRefType(widget,"Tegl/ui/rui/widget;",egl.egl.ui.rui.Widget);
		var row = null;
		row = egl.boxAny(egl.checkNull(this.grid).getData()[egl.checkNull(this.grid).getData().checkIndex((egl.convertAnyToInt(td.getAttribute("rowNumber" ),false))-1)]);
		var column = new egl.com.ibm.egl.rui.widgets.GridColumn();
		column = egl.com.ibm.egl.rui.widgets.GridBehaviors['$inst'].getColumn(td );
		var tip = null;
		tip = this.provider(row, column.name, td );
		$result = tip;
		return $result;
	}
	,
	"toString": function() {
		return "[GridTooltip]";
	}
}
);
