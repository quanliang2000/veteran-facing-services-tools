(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{344:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return p}),a.d(n,"_frontmatter",function(){return c});a(8),a(7),a(4),a(9),a(10);var t=a(1),o=a.n(t),m=a(2),r=a(333);var i={},p=function(e){var n,a;function t(n){var a;return(a=e.call(this,n)||this).layout=r.a,a}return a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,t.prototype.render=function(){var e=this.props,n=e.components,a=function(e,n){if(null==e)return{};var a,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,a),components:n},o.a.createElement("h1",{id:"about-the-react-component-hierarchy"},"About the React component hierarchy"),o.a.createElement(m.MDXTag,{name:"p",components:n},"The VAFS builds a React application of a form, and determines which React components to render based on the description of the form in the form configuration file."),o.a.createElement("h2",{id:"in-this-guide"},"In this guide"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#about-the-form-component-fields-and-widgets"}},"About the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"Form")," component, fields, and widgets"),o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#example-schema-string-object"}},"Example schema: ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"string")," object")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#example-schema-string-with-enum-property"}},"Example schema: ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"string")," with ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"enum")," property")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#example-schema-object"}},"Example schema: ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"object"))),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#example-schema-arrayfield"}},"Example schema: ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"ArrayField"))))),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#field-component-props"}},"Field component props"),o.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#about-the-onchange-field-component"}},"About the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"onChange")," field component")),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#about-the-uischema-field-component"}},"About the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"uiSchema")," field component"))))),o.a.createElement("h2",{id:"about-the-form-component-fields-and-widgets"},"About the Form component, fields, and widgets"),o.a.createElement(m.MDXTag,{name:"p",components:n},"At the top level, RJSF uses a ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form")," component to take the schema inputs and render a hierarchy of components for each field of the form:"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"li"},"Fields")," generally match the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"type")," attribute in a ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"schema")," object. There are object fields, array fields, number fields, boolean fields, and string fields. Except for arrays and objects, the fields render a label (via ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"FieldTemplate"),") and a widget. To specify a particular field, set the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ui:field")," property to a specific field."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"A ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"li"},"widget")," is the html input element that accepts data from the user. To specify a particular widget, set the  ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ui:widget")," property to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"text"),", ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"email"),", ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"checkbox"),", ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"radio"),", ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"select"),", and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"textarea"),". While there are many widgets provided by RJSF, the defaults are overwritten with these versions.")),o.a.createElement("h3",{id:"example-schema-string-object"},"Example schema: string object"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'string'\n}\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"The two ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Field")," components determine which fields and widgets to render. ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SchemaField")," uses the two schemas the library accepts, ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),", to determine what other ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Field")," component to render. The example chose ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"StringField")," because the schema type was ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"string"),". The ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"StringField")," component then rendered ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"TextWidget"),", based on ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),", because the only information provided was that the field is a string (the default widget type)."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"<SchemaField>\n  <StringField>\n    <FieldTemplate>\n      <TextWidget/>\n    </FieldTemplate>\n  </StringField>\n</SchemaField>\n")),o.a.createElement("h3",{id:"example-schema-string-with-enum-property"},"Example schema: string with enum property"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'string',\n  enum: ['first', 'second', 'third']\n}\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"The hierarchy for this field uses ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SelectWidget")," instead of ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"TextWidget"),", because ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"StringField")," detected the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"enum")," property in the schema."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"<SchemaField>\n  <StringField>\n    <FieldTemplate>\n      <SelectWidget/>\n    </FieldTemplate>\n  </StringField>\n</SchemaField>\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"While in most cases a field component is responsible for rendering a label and a widget, for ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"object")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"array")," schema types, the field component renders additional field components for each of the elements they contain."),o.a.createElement("h3",{id:"example-schema-object"},"Example schema: object"),o.a.createElement(m.MDXTag,{name:"p",components:n},"This is an ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"object")," schema with two string fields."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'object',\n  properties: {\n    field1: {\n      type: 'string'\n    },\n    field2: {\n      type: 'string'\n    }\n  }\n}\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"The ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ObjectField")," component renders a ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SchemaField")," component for each of its properties. Those properties are both ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"string")," types, so it looks like the first hierarchy, but nested."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"<SchemaField>\n  <ObjectField>\n    <SchemaField>\n      <StringField>\n        <FieldTemplate>\n          <TextWidget/>\n        </FieldTemplate>\n      </StringField>\n    </SchemaField>\n    <SchemaField>\n      <StringField>\n        <FieldTemplate>\n          <TextWidget/>\n        </FieldTemplate>\n      </StringField>\n    </SchemaField>\n  </ObjectField>\n</SchemaField>\n")),o.a.createElement("h3",{id:"example-schema-arrayfield"},"Example schema: ArrayField"),o.a.createElement(m.MDXTag,{name:"p",components:n},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ArrayField")," renders a ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SchemaField")," component for each item in the array. The library only uses the array field where each item is an object type schema."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      field1: {\n        type: 'string'\n      },\n      field2: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),o.a.createElement("h2",{id:"field-component-props"},"Field component props"),o.a.createElement(m.MDXTag,{name:"p",components:n},"In order for each component to know what to render, field components pass a collection of props down through the component hierarchy. Most are passed to widget components."),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"name"),": The property name of the current field. For example, the object schema above would be named ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"field1"),"."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"required"),": If the field is required or not (i.e. the property name is in the schema's ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"required")," array)."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"schema"),": The schema for the specific field."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema"),': The ui schema for this field. See "',o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#about-the-uischema-field-component"}},"About the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"uiSchema")," field component"),'."'),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"errorSchema"),": An object that contains the list of errors for the current field and any child properties, if the field is an array or object."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"idSchema"),": An object that contains the field IDs for the current field and any child properties. The library generates IDs for each field by joining each property name with an underscore."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"formData"),": The actual data entered for the field so far."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onChange"),": The function that's called when data changes. See \"",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#about-the-onchange-field-component"}},"About the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"onChange")," field component"),'."'),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onBlur"),": The function that's called when focus is lost on a widget.")),o.a.createElement("h3",{id:"about-the-onchange-field-component"},"About the onChange field component"),o.a.createElement(m.MDXTag,{name:"p",components:n},"When a user enters data, each widget calls ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onChange"),". Each component in the hierarchy passes an ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onChange")," handler to child fields. When child data changes, the component combines it with the rest of the data and calls the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onChange")," prop passed to it from its parent."),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'object',\n  properties: {\n    field1: {\n      type: 'string'\n    }\n  }\n}\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"In this example:"),o.a.createElement(m.MDXTag,{name:"ol",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"The user types 'a'."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"The ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"TextWidget")," for field1 calls ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onChange")," with 'a'."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"The ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onChange")," property came from the parent ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ObjectField")," component, which puts 'a' in an object as ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"field1")," (",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"{ field1: 'a' }"),"), then calls the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onChange")," prop it was passed."),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"When it reaches the top-level ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Form")," component, RJSF runs the JSON Schema validation and passes the results through the component hierarchy.")),o.a.createElement(m.MDXTag,{name:"p",components:n},"Similar to Redux, all state is kept in the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form")," component, or the root of the form. All data processing and validation happens in ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form"),", or is triggered by hooks provided by ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form"),". The VAFS code built on top of this processes the schemas and form data in Redux, triggered by events provided by ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form"),"."),o.a.createElement("h3",{id:"about-the-uischema-field-component"},"About the uiSchema field component"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Along with the regular JSON Schema, a UI schema for UI-specific options that don't fit within the JSON Schema standard is also optionally defined for each field. The UI schema is passed to the form config file as an object, ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),', for each field. For more information, see "',o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/forms/about-the-schema-and-uischema-objects#understanding-the-uischema-object"}},"Understanding the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"uiSchema")," object"),'."'))},t}(o.a.Component),c={}}}]);
//# sourceMappingURL=component---src-pages-forms-component-hierarchy-md-d5eb5ab30b96ff9f53ac.js.map