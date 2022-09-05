<!-- Generated at Fri Jan 25 15:06:31 CST 2013 by EGL 7.1.1.qualifier -->

egl.defineClass('com.ibm.egl.rui.widgets', 'MenuItemAction', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/MenuItemAction.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/MenuItemAction',
	"constructor" : function()
	{
		this.theAction = null;
		
		this.theItem = null;
		this.theParentMenu = null;
		egl.addEmbeddedWidget(this, "theParentMenu");
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
	}
	
	,
	"addActionTo": function( widget ) {
		var newwidget = null;
		newwidget = egl.convertAnyToRefType(widget,"Tegl/ui/rui/widget;",egl.egl.ui.rui.Widget);
		newwidget.getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.MenuItemAction.prototype.runAction) );
		
	}
	,
	"runAction": function( e ) {
		this.theAction(this.theParentMenu, function(eze$$inout$parentMenu) {
			this.theParentMenu = eze$$inout$parentMenu;
		}, this.theItem, this );
		
	}
	,
	"toString": function() {
		return "[MenuItemAction]";
	}
}
);
