(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{304:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(42);var a=t(43),o=t.n(a),r=t(3),i=t.n(r),m=t(2),s=t.n(m),c=t(4),l=t(336),p={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return i()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return s.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},s.a.createElement(c.MDXTag,{name:"h1",components:n},"Form Tutorial - Intermediate"),s.a.createElement(c.MDXTag,{name:"h2",components:n},"Form Validation & Conditional Fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Now that you've gone through and created a really simple form using the tutorial, let's take a look at how to handle some common use cases on forms."),s.a.createElement(c.MDXTag,{name:"h3",components:n},"Custom validation"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Because our forms are based on JSON Schema, you can rely on the built in types and pattern property to do a lot of your validation. However, sometimes you need validation rules that go beyond what JSON Schema offers. To write custom validation, we have a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validation")," helper:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label',\n      'ui:validation': [\n        (errors, field) => {\n          if (field && field.startsWith('bad')) {\n            errors.addError(\"Sorry, you can't start this field with 'bad'\");\n          }\n        }\n      ]\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validation")," takes an array of functions, each of which is passed an errors object and the field data (plus some other parameters). So in the above example, if a user puts 'badString' in ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField"),", then the form will display a validation error with the message passed in ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"addError()"),"."),s.a.createElement(c.MDXTag,{name:"p",components:n},"One thing to note is that you can add ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validation")," on any field or object in ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),", which allows you to validate groups of fields together:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    email: {\n      'ui:title': 'Email',\n    },\n    confirmEmail: {\n      'ui:title': 'Confirm email'\n    },\n    'ui:validation': [\n      (errors, field) => {\n        if (field.email !== field.confirmEmail) {\n          errors.confirmEmail.addError('Sorry, your emails must match');\n        }\n      }\n    ]\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      email: {\n        type: 'string'\n      },\n      confirmEmail: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"Since we moved the validation array up to the root of ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),", the field data it is passed is an object containing both ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," and ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"confirmEmail"),", and we can set validation errors on either field."),s.a.createElement(c.MDXTag,{name:"h3",components:n},"Custom validation error messages"),s.a.createElement(c.MDXTag,{name:"p",components:n},"In addition to the above custom validation, you can also customize the messages for the built in JSON Schema validation. For example, if I have some pattern validation, I can set an understandable message:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:errorMessages': {\n        pattern: 'Sorry, you must enter all digits'\n      }\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n        pattern: '^d+$'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"h3",components:n},"Conditional required fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},"In some cases you may want to have fields be required only under certain conditions. To handle that, you can use the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:required")," helper:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n    },\n    myOtherField: {\n      'ui:title': 'My field',\n      'ui:required': (formData) => formData.myField === 'test'\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n      }\n      myOtherField: {\n        type: 'string',\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"In the above config, ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myOtherField")," will be required if ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField"),' equals "test". The ',s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formData")," parameter contains all of the form data, across all pages, so your conditional logic can be based on any other data in the form."),s.a.createElement(c.MDXTag,{name:"h3",components:n},"Conditionally displayed fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Often when building forms you'll need to hide and show fields based on form data or other information. Our form system has three ways of doing so."),s.a.createElement(c.MDXTag,{name:"h4",components:n},"Expand under fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},'A common pattern is to expand some fields "underneath" others, when a user enters information in a field that requires more information to be collected:'),s.a.createElement(c.MDXTag,{name:"p",components:n},"TODO: expandUnder image"),s.a.createElement(c.MDXTag,{name:"p",components:n},"To do that, you can use the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"expandUnder")," option:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:widget': 'yesNo'\n    },\n    myConditionalField: {\n      'ui:title': 'My conditional field',\n      'ui:options': {\n        expandUnder: 'myField'\n      }\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'boolean',\n      }\n      myOtherField: {\n        type: 'string',\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"In the above example, ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myConditionalField")," will display whenever ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField")," has a truthy value. You can add this to mutiple fields and all of them will be grouped under the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"expandUnder")," field. Note, however, that if any of these hidden fields are required when visible, you'll have to use ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:required")," to make sure they're not required when they're not displayed."),s.a.createElement(c.MDXTag,{name:"h3",components:n},"Conditionally hidden fields"),s.a.createElement(c.MDXTag,{name:"p",components:n},"If you just need to hide or show a field, without the expand under treatment, you can use ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"hideIf"),":"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:widget': 'yesNo'\n    },\n    myConditionalField: {\n      'ui:title': 'My conditional field',\n      'ui:options': {\n        hideIf: (formData) => formData.myField !== true\n      }\n    },\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'boolean'\n      }\n      myOtherField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"In the above example, ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myConditionalField")," is hidden when ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField")," is not true (meaning it's false or undefined)."),s.a.createElement(c.MDXTag,{name:"h3",components:n},"Conditional pages"),s.a.createElement(c.MDXTag,{name:"p",components:n},"Another situation you may encounter is needing to make an entire page of the form conditional. You can do that with the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"depends")," property:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  depends: (form) => form.fieldOnAnotherPage !== 'test',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field',\n      'ui:widget': 'yesNo'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'boolean'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"The depends function is passed the current form data, so you can check different conditions and return false if want to skip a page. Note that you want to make sure you're checking data a user would enter before potentially reaching this page, otherwise they won't ever see it."),s.a.createElement(c.MDXTag,{name:"h3",components:n},"View only data"),s.a.createElement(c.MDXTag,{name:"p",components:n},"In some cases, you may have fields that you don't need to submit along with the form data. A confirmation email field, for example. In other cases you may also want to group fields into objects but not have that grouping reflected in the submitted data. This can be useful if you need to conditionally hide a group of fields and don't want to write hideIf functions every individual field."),s.a.createElement(c.MDXTag,{name:"p",components:n},"To keep a field from being submitted, you can prefix it with ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:"),":"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    email: {\n      'ui:title': 'Email',\n    },\n    'view:confirmEmail': {\n      'ui:title': 'Confirm email'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      email: {\n        type: 'string'\n      },\n      'view:confirmEmail': {\n        type: 'string'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"Since we've prefixed ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"confirmEmail")," with ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:"),", that field will be removed before submitting the completed form."),s.a.createElement(c.MDXTag,{name:"p",components:n},"If you prefix an object with ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:"),", some slightly different will happen:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    email: {\n      'ui:title': 'Email',\n    },\n    'view:confirmEmail': {\n      'ui:title': 'Confirm email'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      'view:emails': {\n        email: {\n          type: 'string'\n        },\n        'confirmEmail': {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"In this case, the form data that's submitted when a user completes a form would be:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  email: 'test@test.com',\n  confirmEmail: 'test@test.com'\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"If we had left off the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:")," prefix it would be:"),s.a.createElement(c.MDXTag,{name:"pre",components:n},s.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  emails: {\n    email: 'test@test.com',\n    confirmEmail: 'test@test.com'\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:n},"That should get you started with some of the common validation and conditional field scenarios. Many of the options above have extra parameters or options that may help with some less common scenarios, so make sure to check the form config spec for a full picture of all the options offered."),s.a.createElement("hr",null),s.a.createElement(c.MDXTag,{name:"p",components:n},"Back: ",s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/forms/form-tutorial-basic"}},"Vets Website Form Tutorial - Basic")),s.a.createElement(c.MDXTag,{name:"p",components:n},"Next: ",s.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/forms/form-tutorial-advanced"}},"Vets Website Form Tutorial - Advanced")))},n}(s.a.Component),u={}},329:function(e,n,t){"use strict";t.d(n,"b",function(){return l});var a=t(2),o=t.n(a),r=t(13),i=t.n(r),m=t(68),s=t.n(m);t.d(n,"a",function(){return s.a});t(331);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},330:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"},{name:"3. Leverage CI workflow",href:"/getting-started/workflow"}]},{name:"Project and environment structure",items:[{name:"VA.gov environments",href:"/getting-started/environments"},{name:"Bundles and Code organization",href:"/getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"/getting-started/common-tasks/local"},{name:"Building VA.gov",href:"/getting-started/common-tasks/build"},{name:"Running tests",href:"/getting-started/common-tasks/tests"},{name:"Linting your code",href:"/getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"/getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Releases",href:"/getting-started/common-tasks/releases"},{name:"Reviewing feature branches",href:"/getting-started/common-tasks/reviewing-feature-branches"},{name:"Documentation",items:[{name:"Adding new pages to this site",href:"/getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"/getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"/getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"/getting-started/common-tasks/creating-gatsby-plugins"}]}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/architecture/metalsmith/urls"},{name:"How templates work",href:"/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Client overview",href:"/architecture/site-structure/client-overview"},{name:"Styling",href:"/architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/architecture/front-end-standards/react"},{name:"Redux standards",href:"/architecture/front-end-standards/redux"},{name:"Styles",href:"/architecture/front-end-standards/styles"},{name:"Accessibility",href:"/architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"/architecture/visual-regression-testing"},{name:"Teamsite",href:"/architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"/forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"/forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"Forms in Production",href:"/forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"/platform/feature-flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},331:function(e,n,t){var a;e.exports=(a=t(333))&&a.default||a},332:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},333:function(e,n,t){"use strict";t.r(n);var a=t(18),o=t.n(a),r=t(2),i=t.n(r),m=t(13),s=t.n(m),c=t(94),l=t(9),p=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return t?i.a.createElement(c.a,o()({location:n,pageResources:t},t.json)):null};p.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},n.default=p},334:function(e,n,t){"use strict";var a=t(3),o=t.n(a),r=t(332),i=t(2),m=t.n(i),s=t(13),c=t.n(s),l=t(337),p=t.n(l),d=t(329),u=(t(17),t(133),t(134),t(330)),h=t.n(u),f=t(18),g=t.n(f),y=t(338),E=t.n(y),v=function(e){function n(n){var t;return(t=e.call(this,n)||this).state=h.a.sections.reduce(function(e,n){var t;return g()(((t={})[n.id]=!1,t),e)},{}),t}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props,t=n.open,a=n.onClose,o=n.location;return m.a.createElement("div",{className:E()("site-c-mobile-nav",{"is-visible":t}),id:"mobile-nav"},m.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:a,"aria-label":"Close this menu"},m.a.createElement("i",{className:"fas fa-times"})),m.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(n){return m.a.createElement("div",{key:n.id},m.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},m.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var t;return e.setState(((t={})[n.id]=!e.state[n.id],t))},"aria-expanded":e.state[n.id]?"true":"false","aria-controls":"nav-"+n.id},n.name)),m.a.createElement("div",{id:"nav-"+n.id,"aria-hidden":e.state[n.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},m.a.createElement("ul",{className:"site-c-mobile-nav-list"},m.a.createElement("li",{className:"site-c-mobile-nav-list__item"},m.a.createElement(d.a,{className:E()("site-c-mobile-nav-list__link",{current:o.pathname===n.href}),to:n.href},"Overview")))))})))},n}(m.a.Component),b=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={navOpen:!1},t}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props.location;return m.a.createElement("div",null,m.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),m.a.createElement("header",{className:"site-c-header",role:"banner"},m.a.createElement("div",{className:"site-l-wrapper"},m.a.createElement("div",{className:"site-c-header__masthead"},m.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},m.a.createElement("em",{className:"site-c-header__logo-text"},m.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},m.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",m.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),m.a.createElement("div",{className:"site-c-header__utility-links"},m.a.createElement("div",{id:"search-container",className:"site-search-container"},m.a.createElement("i",{className:"fas fa-search search-icon"}),m.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),m.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),m.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},m.a.createElement("i",{className:"fas fa-search"})),m.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),m.a.createElement("nav",{className:"site-c-header__nav"},m.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return m.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},m.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(n.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),m.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},m.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),m.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),m.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&m.a.createElement("div",{className:"site-c-overlay is-visible"}),m.a.createElement(v,{location:n,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},n}(m.a.Component),T=(t(339),function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,n=e.children,t=e.location;return m.a.createElement(d.b,{query:"1044757290",render:function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},m.a.createElement("html",{lang:"en"})),m.a.createElement(b,{location:t}),n)},data:r})},n}(m.a.Component));T.propTypes={children:c.a.node.isRequired};n.a=T},335:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},336:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(13),i=t.n(r),m=t(334),s=(t(133),t(134),t(135),t(17),t(335)),c=t(329);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function p(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=t(330),u=t.n(d);function h(e){var n=e.location,t=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:t.items}))):null}function f(e){var n=e.children,t=e.location;return o.a.createElement(m.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return f}),f.propTypes={children:i.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-form-tutorial-intermediate-mdx-9d6f68f473c2367cb402.js.map