(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{340:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d}),a.d(n,"_frontmatter",function(){return u});a(42);var t=a(43),o=a.n(t),i=a(3),r=a.n(i),m=a(2),s=a.n(m),c=a(4),l=a(351),p={},d=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=l.a,a}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return s.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},s.a.createElement("h1",{id:"intermediate-tutorial"},"Intermediate tutorial"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Previous: ",s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./form-tutorial-basic"}},"Basic tutorial")),s.a.createElement(c.MDXTag,{name:"p",components:n},"Now that you've gone through and created a really simple form using the tutorial, let's take a look at how to handle some common use cases on forms."),s.a.createElement("h2",{id:"form-validation"},"Form validation"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Because our forms are based on JSON Schema, you can rely on the built in types and pattern property to do a lot of your validation. However, sometimes you need validation rules that go beyond what JSON Schema offers. To write custom validation, we have a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validation")," helper:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label',\n      'ui:validation': [\n        (errors, field) => {\n          if (field && field.startsWith('bad')) {\n            errors.addError(\"Sorry, you can't start this field with 'bad'\");\n          }\n        }\n      ]\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validation")," takes an array of functions, each of which is passed an errors object and the field data (plus some other parameters). So in the above example, if a user puts 'badString' in ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField"),", then the form will display a validation error with the message passed in ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"addError()"),"."),s.a.createElement(c.MDXTag,{name:"p",components:n},"One thing to note is that you can add ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validation")," on any field or object in ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),", which allows you to validate groups of fields together:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    email: {\n      'ui:title': 'Email',\n    },\n    confirmEmail: {\n      'ui:title': 'Confirm email'\n    },\n    'ui:validation': [\n      (errors, field) => {\n        if (field.email !== field.confirmEmail) {\n          errors.confirmEmail.addError('Sorry, your emails must match');\n        }\n      }\n    ]\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      email: {\n        type: 'string'\n      },\n      confirmEmail: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"Since we moved the validation array up to the root of ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),", the field data it is passed is an object containing both ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," and ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"confirmEmail"),", and we can set validation errors on either field."),s.a.createElement("h3",{id:"custom-validation-error-messages"},"Custom validation error messages"),s.a.createElement(c.MDXTag,{name:"p",components:n},"In addition to the above custom validation, you can also customize the messages for the built in JSON Schema validation. For example, if I have some pattern validation, I can set an understandable message:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:errorMessages': {\n        pattern: 'Sorry, you must enter all digits'\n      }\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n        pattern: '^d+$'\n      }\n    }\n  }\n}\n")),s.a.createElement("h2",{id:"conditional-required-fields"},"Conditional required fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},"In some cases you may want to have fields be required only under certain conditions. To handle that, you can use the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:required")," helper:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n    },\n    myOtherField: {\n      'ui:title': 'My field',\n      'ui:required': (formData) => formData.myField === 'test'\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n      }\n      myOtherField: {\n        type: 'string',\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"In the above config, ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myOtherField")," will be required if ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField"),' equals "test". The ',s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formData")," parameter contains all of the form data, across all pages, so your conditional logic can be based on any other data in the form."),s.a.createElement("h2",{id:"conditionally-displayed-fields"},"Conditionally displayed fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Often when building forms you'll need to hide and show fields based on form data or other information. Our form system has three ways of doing so."),s.a.createElement("h4",{id:"expand-under-fields"},"Expand under fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},'A common pattern is to expand some fields "underneath" others, when a user enters information in a field that requires more information to be collected:'),s.a.createElement(c.MDXTag,{name:"p",components:n},s.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/acb74d8d8ce49a5745002e38ca6fb0a4/ef8bc/expand_under.png",style:{display:"block"},target:"_blank",rel:"noopener"},s.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"534px"}},s.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.1498127340824%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),s.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"expand under",title:"",src:"/static/acb74d8d8ce49a5745002e38ca6fb0a4/ef8bc/expand_under.png",srcSet:"/static/acb74d8d8ce49a5745002e38ca6fb0a4/f4a45/expand_under.png 259w,\n/static/acb74d8d8ce49a5745002e38ca6fb0a4/ef0f6/expand_under.png 518w,\n/static/acb74d8d8ce49a5745002e38ca6fb0a4/ef8bc/expand_under.png 534w",sizes:"(max-width: 534px) 100vw, 534px"})))),s.a.createElement(c.MDXTag,{name:"p",components:n},"To do that, you can use the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"expandUnder")," option:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:widget': 'yesNo'\n    },\n    myConditionalField: {\n      'ui:title': 'My conditional field',\n      'ui:options': {\n        expandUnder: 'myField'\n      }\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'boolean',\n      }\n      myOtherField: {\n        type: 'string',\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"In the above example, ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myConditionalField")," will display whenever ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField")," has a truthy value. You can add this to mutiple fields and all of them will be grouped under the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"expandUnder")," field. Note, however, that if any of these hidden fields are required when visible, you'll have to use ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:required")," to make sure they're not required when they're not displayed."),s.a.createElement("h3",{id:"conditionally-hidden-fields"},"Conditionally hidden fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},"If you just need to hide or show a field, without the expand under treatment, you can use ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"hideIf"),":"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:widget': 'yesNo'\n    },\n    myConditionalField: {\n      'ui:title': 'My conditional field',\n      'ui:options': {\n        hideIf: (formData) => formData.myField !== true\n      }\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'boolean'\n      }\n      myOtherField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"In the above example, ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myConditionalField")," is hidden when ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField")," is not true (meaning it's false or undefined)."),s.a.createElement("h2",{id:"conditional-pages"},"Conditional pages"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Another situation you may encounter is needing to make an entire page of the form conditional. You can do that with the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"depends")," property:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  depends: (form) => form.fieldOnAnotherPage !== 'test',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:widget': 'yesNo'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'boolean'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"The depends function is passed the current form data, so you can check different conditions and return false if want to skip a page. Note that you want to make sure you're checking data a user would enter before potentially reaching this page, otherwise they won't ever see it."),s.a.createElement("h2",{id:"view-only-data"},"View-only data"),s.a.createElement(c.MDXTag,{name:"p",components:n},"In some cases, you may have fields that you don't need to submit along with the form data. A confirmation email field, for example. In other cases you may also want to group fields into objects but not have that grouping reflected in the submitted data. This can be useful if you need to conditionally hide a group of fields and don't want to write hideIf functions every individual field."),s.a.createElement(c.MDXTag,{name:"p",components:n},"To keep a field from being submitted, you can prefix it with ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:"),":"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    email: {\n      'ui:title': 'Email',\n    },\n    'view:confirmEmail': {\n      'ui:title': 'Confirm email'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      email: {\n        type: 'string'\n      },\n      'view:confirmEmail': {\n        type: 'string'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"Since we've prefixed ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"confirmEmail")," with ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:"),", that field will be removed before submitting the completed form."),s.a.createElement(c.MDXTag,{name:"p",components:n},"If you prefix an object with ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:"),", something slightly different will happen:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    email: {\n      'ui:title': 'Email',\n    },\n    'view:confirmEmail': {\n      'ui:title': 'Confirm email'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      'view:emails': {\n        email: {\n          type: 'string'\n        },\n        'confirmEmail': {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"In this case, the form data that's submitted when a user completes a form would be:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  email: 'test@test.com',\n  confirmEmail: 'test@test.com'\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"If we had left off the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:")," prefix it would be:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  emails: {\n    email: 'test@test.com',\n    confirmEmail: 'test@test.com'\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"That should get you started with some of the common validation and conditional field scenarios. Many of the options above have extra parameters or options that may help with some less common scenarios, so make sure to check the ",s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/forms/docs/spec"}},"form config specification")," for a full picture of all the options offered."),s.a.createElement(c.MDXTag,{name:"p",components:n},"Next: ",s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./form-tutorial-advanced"}},"Advanced tutorial")))},n}(s.a.Component),u={}},350:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},351:function(e,n,a){"use strict";var t=a(2),o=a.n(t),i=a(13),r=a.n(i),m=a(354),s=(a(133),a(134),a(135),a(17),a(350)),c=a(352);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(c.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var u=a(353),g=a.n(u);function h(e){var n=e.location,a=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:a.items}))):null}function f(e){var n=e.children,a=e.location;return o.a.createElement(m.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return f}),f.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-form-tutorial-intermediate-mdx-95ed2efdff809a1555ee.js.map