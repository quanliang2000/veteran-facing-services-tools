(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{286:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(42);var o=t(43),a=t.n(o),r=t(3),m=t.n(r),c=t(2),s=t.n(c),i=t(4),p=t(351),l={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=p.a,t}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=a()(e,["components"]);return s.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:n},s.a.createElement("h1",{id:"creating-a-form-config-file"},"Creating a form config file"),s.a.createElement(i.MDXTag,{name:"p",components:n},"Your form is generated from a JSON Schema configuration file called ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"form.js"),", along with a few other key configuration files."),s.a.createElement("h3",{id:"in-this-guide"},"In this guide"),s.a.createElement(i.MDXTag,{name:"ul",components:n},s.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#elements-of-the-form-config"}},"Elements of the form config")),s.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#how-react-components-are-rendered"}},"How React components are rendered"))),s.a.createElement("h3",{id:"elements-of-the-form-config"},"Elements of the form config"),s.a.createElement(i.MDXTag,{name:"p",components:n},"The form config itself is an object with many properties that determine how your form is rendered. It must contain these elements:"),s.a.createElement(i.MDXTag,{name:"ul",components:n},s.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Top level information about the form, such as title, URL, and whether or not certain features are enabled"),s.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Nested objects for each ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"chapter")," of the form (if you're building a multi-page form). Within each ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"chapter"),", additional nested objects for each ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"page")," within that ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"chapter"),'. For more information, see "',s.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/forms/creating-custom-fields-and-widgets.md#supporting-multi-page-forms"}},"Supporting multi-page forms"),'."'),s.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Top-level title and URL information about each ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"page")," of the form, as well as 2 essential objects:",s.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},s.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"schema"),": Describes the form fields and the type of data each field accepts"),s.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema"),": Describes all UI elements of the form fields, such as label text, error message text, or CSS classes")))),s.a.createElement(i.MDXTag,{name:"p",components:n},"The ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," and ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),' contain the essential information to build all of the form fields. For more information, see "',s.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/forms/about-the-schema-and-uischema-objects"}},"About the ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"schema")," and ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"uiSchema")," objects"),'." For a comprehensive example of a form config, with descriptions of the main properties you might include, see "',s.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/forms/config-options"}},"config options"),'".'),s.a.createElement("h3",{id:"how-react-components-are-rendered"},"How React components are rendered"),s.a.createElement(i.MDXTag,{name:"p",components:n},"The VAFS code uses the form config to determine which React components to render in order to build your form, usually automatically. React components require props to render properly. These are passed down through the top-level ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form")," component, which takes the entire form config itself as a prop. The ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form")," component is also connected to the store, so it has access to the form data as well."),s.a.createElement(i.MDXTag,{name:"p",components:n},'For more information, see "',s.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/forms/component-hierarchy"}},"About the component hierarchy"),'."'))},n}(s.a.Component),d={}},350:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},351:function(e,n,t){"use strict";var o=t(2),a=t.n(o),r=t(13),m=t.n(r),c=t(354),s=(t(133),t(134),t(135),t(17),t(350)),i=t(352);function p(){return a.a.createElement(i.b,{query:"157057713",render:function(e){return a.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function l(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(i.a,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?a.a.createElement("li",{key:e.name},o&&a.a.createElement(l,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&a.a.createElement(l,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(p,null)):a.a.createElement(l,{item:e,key:e.name})})):null}var d=t(353),h=t.n(d);function g(e){var n=e.location,t=h.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(u,{items:t.items}))):null}function f(e){var n=e.children,t=e.location;return a.a.createElement(c.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(g,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return f}),f.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-creating-a-form-config-file-md-7937db7f5491962050d4.js.map