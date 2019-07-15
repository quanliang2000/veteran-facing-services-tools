(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{351:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m}),t.d(n,"_frontmatter",function(){return i});t(10),t(8),t(5),t(19),t(9);var o=t(1),a=t.n(o),r=t(2),s=t(397);var c={},m=function(e){var n,t;function o(n){var t;return(t=e.call(this,n)||this).layout=s.a,t}return t=e,(n=o).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,o.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,t),components:n},a.a.createElement("h1",{id:"write"},"Write"),a.a.createElement("h2",{id:"choose-an-issue-to-work-on"},"Choose an issue to work on"),a.a.createElement(r.MDXTag,{name:"ul",components:n},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Work with your team to determine the right issue to work on")),a.a.createElement(r.MDXTag,{name:"p",components:n},a.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"The VA handbook has more information about the broader process for delivering services to Veterans on VA.gov. Developers work in an agile framework, where issues are assigned to sprints and developers work on this items over the two-week sprint period.")),a.a.createElement("h2",{id:"create-feature-branch"},"Create feature branch"),a.a.createElement(r.MDXTag,{name:"ul",components:n},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Checkout ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"master")," branch and pull the latest")),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"git checkout master && git pull origin master\n")),a.a.createElement(r.MDXTag,{name:"ul",components:n},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Create a new feature branch from master")),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"git checkout -b 12345-issue-title\n")),a.a.createElement(r.MDXTag,{name:"p",components:n},a.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"Since most new work derives from a GitHub Issue, it's recommended to prefix your branch name with the issue. For example, if you're working on a feature to collect a veteran's address as detailed in Issue #25, you might call your issue ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"25-address"),".")),a.a.createElement("h2",{id:"code-new-functionality"},"Code new functionality"),a.a.createElement(r.MDXTag,{name:"ul",components:n},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Write the code for the new feature! This is often the fun part. :-)")),a.a.createElement(r.MDXTag,{name:"p",components:n},"It's very helpful if you restrict the scope of changes to only the issue/feature that you're working on. For example, you might see some code you can cleanup along the way and decide to change it. However, this increases the scope of your changes and increases risk if your commits/feature need to be rolled back (and the rollback pulls other things with it). It also helps your code reviewer, because they aren't left wondering how a tangential change impacts the feature promised by the pull request."),a.a.createElement(r.MDXTag,{name:"p",components:n},"As you code your changes, commit changes to your feature branch. ",a.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Commit early. Commit often"),"."),a.a.createElement("h2",{id:"write-tests-for-new-functionality"},"Write tests for new functionality"),a.a.createElement(r.MDXTag,{name:"ul",components:n},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Unit: Tests a specific method or very granular piece of the code base."),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"End to end: Tests how your code works when clicked through in a real browser."),a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Accessibility: Tests that run automated checks to catch some basic accessibility mistakes. Typically these are incorporated into end-to-end tests.")),a.a.createElement(r.MDXTag,{name:"p",components:n},"These tests are automatically executed during ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/getting-started/common-tasks/workflow/review"}},"review"),", but you should ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/getting-started/common-tasks/test"}},"run them locally")," before moving on."),a.a.createElement(r.MDXTag,{name:"p",components:n},a.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"The only way to quickly know if your new change breaks the existing functionality of the application is to have a suite of automated tests that execute whenever new stuff is added. When you add new functionality, new tests are required so that future developers know if they have broken your contributions.")),a.a.createElement("h2",{id:"manual-testing"},"Manual Testing"),a.a.createElement(r.MDXTag,{name:"ul",components:n},a.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Test new functionality on supported ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/platform/front-end-standards/documented-decisions/browser-support/"}},"browsers"))))},o}(a.a.Component),i={}},396:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},397:function(e,n,t){"use strict";var o=t(1),a=t.n(o),r=t(400),s=(t(131),t(132),t(94),t(6),t(396)),c=t(398);function m(){return a.a.createElement(c.b,{query:"157057713",render:function(e){return a.a.createElement(l,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function i(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(c.a,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function l(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?a.a.createElement("li",{key:e.name},o&&a.a.createElement(i,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&a.a.createElement(i,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(m,null)):a.a.createElement(i,{item:e,key:e.name})})):null}var p=t(399),u=t.n(p);function d(e){var n=e.location,t=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(l,{items:t.items}))):null}function h(e){var n=e.children,t=e.location;return a.a.createElement(r.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(d,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return h})}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-write-mdx-2077630c55986e797e82.js.map