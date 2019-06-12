(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{342:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d}),a.d(n,"_frontmatter",function(){return h});a(42);var t=a(43),o=a.n(t),r=a(3),i=a.n(r),m=a(2),s=a.n(m),c=a(4),p=a(354),l={},d=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=p.a,a}return i()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return s.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,a),components:n},s.a.createElement("h1",{id:"common-patterns-for-building-forms"},"Common patterns for building forms"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Some forms require custom validation, styles, or conditional information based on user input. Use these patterns to address those needs."),s.a.createElement("h2",{id:"in-this-guide"},"In this guide"),s.a.createElement(c.MDXTag,{name:"ul",components:n},s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#writing-custom-field-validation"}},"Writing custom field validation")),s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#validating-a-field-based-on-other-fields-in-the-same-object"}},"Validating a field based on other fields in the same object")),s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#changing-drop-down-options-based-on-data-in-another-field"}},"Changing drop-down options based on data in another field")),s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#creating-a-block-of-text-with-no-associated-fields"}},"Creating a block of text with no associated fields")),s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#conditionally-hiding-a-group-of-fields"}},"Conditionally hiding a group of fields")),s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#styling-expanded-or-collapsed-fields"}},"Styling expanded or collapsed fields")),s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#conditionally-including-a-page"}},"Conditionally including a page"))),s.a.createElement("h2",{id:"writing-custom-field-validation"},"Writing custom field validation"),s.a.createElement(c.MDXTag,{name:"p",components:n},"To add field validations to your forms that JSON Schema doesn't provide, use the array ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validations")," in the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," object. ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validations")," can be a function or an object."),s.a.createElement(c.MDXTag,{name:"p",components:n},"If you pass a function, ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validations")," is called with these arguments:"),s.a.createElement(c.MDXTag,{name:"ul",components:n},s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"errors"),": The errors object for the field."),s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"fieldData"),": The data for the field."),s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"formData"),": The current form data."),s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"schema"),": The current JSON Schema for the field."),s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"errorMessages"),": The error messsage object for the field, if available.")),s.a.createElement(c.MDXTag,{name:"p",components:n},"Every validation function should update the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"errors")," object with any errors found by calling the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"addErrors()")," method. For example:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"function validateSSN(errors, ssn) {\n  if (!isValidSSN(ssn)) {\n    errors.addError('Please enter a valid 9 digit SSN (dashes allowed)');\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"When items in the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validations")," array are objects, they have two properties:"),s.a.createElement(c.MDXTag,{name:"ul",components:n},s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"options"),": The object that's passed to the validation function. This allows you to configure your validation function for different fields in the form."),s.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"validator"),": A function with the same signature as above, plus the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"options")," object.")),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  validator: (errors, ssn, formData, schema, errorMessages, options) => {\n    if (!isValidWidget(ssn, options.someOption)) {\n      errors.addError('Please enter a valid 9 digit SSN (dashes allowed)');\n    }\n  },\n  options: {\n    someOption: true\n  }\n}\n")),s.a.createElement("h2",{id:"validating-a-field-based-on-other-fields-in-the-same-object"},"Validating a field based on other fields in the same object"),s.a.createElement(c.MDXTag,{name:"p",components:n},"You can use ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validations")," to validate objects in order to compare subfields. For example, given this schema:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  type: 'object',\n  properties: {\n    email: {\n      type: 'string'\n    },\n    confirmEmail: {\n      type: 'string'\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"If you use ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validations")," on this object field instead of on the email or confirmEmail fields, you can compare the two fields:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"export function validateEmailsMatch(errors, pageData) {\n  const { email, confirmEmail } = pageData;\n  if (email !== confirmEmail) {\n    errors.confirmEmail.addError('Please ensure your entries match');\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"The function must be referenced in the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),":"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  'ui:validations': [ validateEmailsMatch ],\n  email: {\n    'ui:title': 'Email address'\n  },\n  confirmEmail: {\n    'ui:title': 'Re-enter email address'\n  }\n}\n")),s.a.createElement("h2",{id:"changing-drop-down-options-based-on-data-in-another-field"},"Changing drop-down options based on data in another field"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Use the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"updateSchema")," option in ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," to change a list of enums:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  'ui:options': {\n    updateSchema: (form, pageSchema) {\n      if (form.myField === 'otherOption') {\n        return {\n          enum: ['option1', 'option2'],\n          enumNames: ['Option 1', 'Option 2']\n        }\n      } else {\n        return {\n          enum: ['option1', 'option2'],\n          enumNames: ['Option 1', 'Option 2']\n        }\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"Only the properties in the returned object are changed in the current schema. The object returned isn't used as an exact replacement for the schema, and if the current schema contains other properties, they aren't removed."),s.a.createElement(c.MDXTag,{name:"p",components:n},"For a long list of options, create all variations of the schema outside of the update function and use the update function to switch between them. You won't need to create a new schema object each time data changes in the form, requiring your field to re-render."),s.a.createElement("h2",{id:"creating-a-block-of-text-with-no-associated-fields"},"Creating a block of text with no associated fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Use 'ui:description' to show text or a custom component before the fields in a particular object in the schema."),s.a.createElement(c.MDXTag,{name:"p",components:n},"To create a block of text with no fields that follow, create an empty view object:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// schema\n{\n  type: 'object',\n  properties: {\n    'view:textObject': {\n      type: 'object',\n      properties: {}\n    }\n  }\n}\n\n// uiSchema\n{\n  'view:textObject': {\n    'ui:description': 'My text'\n  }\n}\n")),s.a.createElement("h2",{id:"conditionally-hiding-a-group-of-fields"},"Conditionally hiding a group of fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Sometimes fields in a form are siblings to others, but should be hidden conditionally. For example, this schema defines a field named ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"employed")," that is rendered as a checkbox the user can check. If this field is false (the checkbox is not checked) there is no need to display the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"jobStartDate")," or ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"monthlyWages")," fields:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"schema: {\n  type: 'object',\n  properties: {\n    employed: { type: 'boolean' },\n    jobStartDate: { type: 'string' },\n    monthlyWages: { type: 'string' },\n    otherMonthlyIncome: { type: 'string' }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"To accomplish this, the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," and ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," are written as:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"schema: {\n  type: 'object',\n  properties: {\n    employed: { type: 'boolean' },\n    'view:jobInformation': {\n      type: 'object',\n      properties: {\n        jobStartDate: { type: 'string' },\n        monthlyWages: { type: 'string' }\n      }\n    },\n    otherMonthlyIncome: { type: 'string' }\n  }\n},\nuiSchema: {\n  employed: { 'ui:title': 'I am employed' },\n  'view:jobInformation': {\n    'ui:options': {\n      hideIf: (formData) => !formData.employed\n    },\n    jobStartDate: { 'ui:title': 'Job start date' },\n    monthlyWages: { 'ui:title': 'Monthly wages' },\n  },\n  otherMonthlyIncome: { 'ui:title': 'Other monthly income' }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"The ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"hideIf")," function is passed a copy of the current ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formData")," in order to determine the condition upon which the fields are shown. In this example, it will hide the fields unless ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"employed")," is ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"true"),"."),s.a.createElement(c.MDXTag,{name:"p",components:n},"Objects from the form config with names that start with ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:")," are not passed to the back-end, but fields within those ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:")," objects are passed to the back-end by including them in the parent object. In this example, the fields ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"jobStartDate")," and ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"monthlyWages")," would be included in the same object as ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"employed")," and ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"otherMonthlyIncome"),", while the field for ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:JobInformation")," would be filtered out."),s.a.createElement("h2",{id:"styling-expanded-or-collapsed-fields"},"Styling expanded or collapsed fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},"To indent or otherwise style fields that are expanded or collapsed with the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"expandUnder")," option, set a class on the controlling field. For example:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// uiSchema\n{\n  field1: {\n    'ui:title': 'This field expands/collapses other items',\n    'ui:options': {\n      expandUnderClassNames: 'schemaform-expandUnder-indent'\n    }\n  },\n  field2: {\n    'ui:title': 'This field is controlled by field1'\n    'ui:options': {\n      expandUnder: 'field1'\n    }\n  },\n  field3: {\n    'ui:title': 'This field is controlled by field1'\n    'ui:options': {\n      expandUnder: 'field1'\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"In this example, ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schemaform-expandUnder-indent")," is applied to the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"div")," that surrounds ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"field2")," and ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"field3"),", which indents the fields. For additional styling, create a new class and add your own styles."),s.a.createElement("h2",{id:"conditionally-including-a-page"},"Conditionally including a page"),s.a.createElement(c.MDXTag,{name:"p",components:n},"The ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"depends")," property determines whether a page is active or not. ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"depends")," can work in a few ways:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// With an object\ndepends: {\n  passPhrase: 'open sesame'\n}\n\n// With an array\n// This will activate the page if any of the items in the array are true. Think || not &&.\ndepends: [\n  { passPhrase: 'open sesame' },\n  { passPhrase: 'open up!' }\n]\n\n// With a function\ndepends: (formData) => {\n  // return bool, true if page is active, false if page should be skipped\n  return formData.passPhrase === 'open sesame' && formData.codeWord === 'chicken';\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"For example, given this chapter configuration:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"chapterName: {\n  title: 'Chapter Title',\n  pages: {\n    pageName: {\n      ...\n      schema: {\n        type: 'object',\n        properties: {\n          passPhrase: { type: 'string' }\n        }\n      }\n    }\n    otherPageName: {\n      title: 'Page title',\n      path: 'path/to/page',\n      initialData: {},\n      depends: {\n        passPhrase: 'open sesame'\n      },\n      uiSchema: {},\n      schema: {}\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"If a user types 'open sesame' for the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"passPhrase")," on the first page, ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"otherPageName")," is active. For any other value, including no value, ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"otherPageName")," is inactive and the page is skipped."),s.a.createElement(c.MDXTag,{name:"p",components:n},s.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"p"},"Don't use the pass phrase as a secure login or other authentication mechanism.")," Within the source, the text of a pass phrase is clear text, even when it's in a function."))},n}(s.a.Component),h={}},353:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},354:function(e,n,a){"use strict";var t=a(2),o=a.n(t),r=a(13),i=a.n(r),m=a(357),s=(a(133),a(134),a(135),a(17),a(353)),c=a(355);function p(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function l(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(c.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(l,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(l,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var h=a(356),u=a.n(h);function g(e){var n=e.location,a=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:a.items}))):null}function f(e){var n=e.children,a=e.location;return o.a.createElement(m.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return f}),f.propTypes={children:i.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-common-patterns-for-building-forms-mdx-d39172920a0cf905ef37.js.map