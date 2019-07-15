(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{349:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m}),t.d(n,"_frontmatter",function(){return i});t(10),t(8),t(5),t(19),t(9);var a=t(1),o=t.n(a),r=t(2),c=t(397);var s={},m=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).layout=c.a,t}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,t),components:n},o.a.createElement("h1",{id:"vagov-workflow"},"VA.gov workflow"),o.a.createElement(r.MDXTag,{name:"p",components:n},"VA.gov uses a ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.thoughtworks.com/continuous-integration"}},"Continuous Integration")," process, which consists of the following steps:"),o.a.createElement(r.MDXTag,{name:"ol",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/veteran-facing-services-tools/getting-started/workflow/write"}},"Write"),o.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Determine which issue to work on"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Create feature branch",o.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"branch naming convention {issue-id}-{subject you are working on}"))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Code new functionality"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Write tests for new functionality"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Test new functionality on supported ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/veteran-facing-services-tools/platform/front-end-standards/documented-decisions/browser-support/"}},"browsers")," (Chrome, IE, Safari, Edge)"))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/veteran-facing-services-tools/getting-started/workflow/review"}},"Review"),o.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Submit pull request"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Run unit tests and compliance scans (kicked off when a pull request is created)"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Test feature on review instance (page link is available on the PR page)"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Test and peer review code (read: code review)"))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/veteran-facing-services-tools/getting-started/workflow/deploy"}},"Deploy"),o.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Merge code to stable code base"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Jenkins automatically deploys changes merged into ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"master")," to staging and dev"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Jenkins automatically deploys master to production every day")))),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"Each project's code base has a branch called ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"master")," by default. Anything in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"master")," is deemed to be stable and deployable. This means that ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"em"},"anything you merge will need to be ready to immediately be live or hidden in some way behind a feature flag"),".")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Merge changes when support can be provided; Avoid merging significant changes at the end of the day or before the weekend."),o.a.createElement("h2",{id:"references"},"References"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://guides.github.com/introduction/flow/"}},"GitHub Flow")))},a}(o.a.Component),i={}},396:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},397:function(e,n,t){"use strict";var a=t(1),o=t.n(a),r=t(400),c=(t(131),t(132),t(94),t(6),t(396)),s=t(398);function m(){return o.a.createElement(s.b,{query:"157057713",render:function(e){return o.a.createElement(l,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function i(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(s.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function l(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(m,null)):o.a.createElement(i,{item:e,key:e.name})})):null}var p=t(399),u=t.n(p);function d(e){var n=e.location,t=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(l,{items:t.items}))):null}function g(e){var n=e.children,t=e.location;return o.a.createElement(r.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(d,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return g})}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-overview-mdx-9d20e758572bf62c3a07.js.map