// Generated at Fri Jan 25 15:06:36 CST 2013 by EGL 8.0.0.qualifier
// No generator APARs installed.
package com.ibm.egl.rui.loader.services;

public class RuiDeploy_Helper extends com.ibm.javart.util.JavartRecordHelper
{
	private static final long serialVersionUID = 70L;
	
	protected com.ibm.javart.resources.Program ezeProgram;
	private java.util.Properties xmlProps = null;
	public RuiDeploy_Helper( com.ibm.javart.resources.Program ezeProgram )
	{
		this.ezeProgram = ezeProgram;
	}
	public com.ibm.javart.json.ValueNode toJSON(com.ibm.javart.Container container ) throws com.ibm.javart.JavartException
	{
		return null;
	}
	public void fromJSON(com.ibm.javart.json.ValueNode node, com.ibm.javart.Container container ) throws com.ibm.javart.JavartException
	{
	}
	public String getJsonFieldName( String fieldName )
	{
		if( jsonNames == null )
		{
			jsonNames = new java.util.HashMap<java.lang.String, java.lang.String>();
			jsonNames.put( "includes", "includes" );
			jsonNames.put( "imports", "imports" );
			jsonNames.put( "runtimePropertyFiles", "runtimePropertyFiles" );
			jsonNames.put( "referencedHandlers", "referencedHandlers" );
			jsonNames.put( "propertyFiles", "propertyFiles" );
		}
		return super.getJsonFieldName( fieldName );
	}
	public String getFormDataFieldName( String fieldName )
	{
		if( formDataNames == null )
		{
			formDataNames = new java.util.HashMap<String, String>();
			formDataNames.put( "includes", "includes" );
			formDataNames.put( "imports", "imports" );
			formDataNames.put( "runtimePropertyFiles", "runtimePropertyFiles" );
			formDataNames.put( "referencedHandlers", "referencedHandlers" );
			formDataNames.put( "propertyFiles", "propertyFiles" );
		}
		return super.getFormDataFieldName( fieldName );
	}
	public java.util.Properties XMLProperties()
	{
		if(xmlProps == null)
		{
			xmlProps = new java.util.Properties();
			xmlFields = new java.util.HashMap<String, String>();
			xmlProps.put( "XMLRootElement", "" );
			xmlProps.put( "XMLRootElement.name", "RuiDeploy" );
		}
		return xmlProps;
	}
	
}
