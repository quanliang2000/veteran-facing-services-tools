(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{310:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(42);var o=t(43),a=t.n(o),r=t(3),s=t.n(r),c=t(2),i=t.n(c),l=t(4),m=t(354),p={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=m.a,t}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=a()(e,["components"]);return i.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},i.a.createElement("h1",{id:"build-and-deploy-process-flows"},"Build and deploy process flows"),i.a.createElement(l.MDXTag,{name:"p",components:n},"Here you'll find flow diagrames for the different types of build and deploy flows we have for VA.gov. Those different flows are:"),i.a.createElement(l.MDXTag,{name:"ul",components:n},i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#standard-masterpr-build"}},"Standard master/PR build")),i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#content-only-build-and-deploy"}},"Content only build and deploy")),i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#daily-deploy"}},"Daily deploy"))),i.a.createElement("h2",{id:"standard-masterpr-build"},"Standard master/PR build"),i.a.createElement(l.MDXTag,{name:"p",components:n},"This is the typical Jenkins build for any vets-website branch. There is some logic that is different between master and other branches:"),i.a.createElement("div",{className:"mermaid"},"graph TD\n1(Build starts)\n1 --\x3e 2[Check for linter failures]\n1 --\x3e 3[Check for security issues]\n1 --\x3e 4[Run unit tests]\n2 --\x3e 5(Build site and applications)\n3 --\x3e 5\n4 --\x3e 5\n5 --\x3e 6[vagovdev build]\n5 --\x3e 7[vagovstaging build]\n5 --\x3e 8[vagovprod build]\n6 --\x3e 9(Integration testing)\n7 --\x3e 9\n8 --\x3e 9\n9 --\x3e 10[Accessibility tests]\n9 --\x3e 11[End to end tests]\n11 --\x3e 12[Create archives for each build and upload to S3]\n10 --\x3e 12\n12 --\x3e 13{On master branch?}\n13 --\x3e|Yes| 14[Cache Drupal content and files to S3]\n14 --\x3e 15[Deploy builds to dev and staging]\n13 --\x3e|No| 16(Done)\n15 --\x3e16"),i.a.createElement("h2",{id:"content-only-deploy"},"Content only deploy"),i.a.createElement(l.MDXTag,{name:"p",components:n},"When content is changed in Drupal, sometimes we need to publish it immediately on a va.gov site. There are two separate processes for this, one for staging/dev and another for production."),i.a.createElement("h3",{id:"stagingdev-content-deploy"},"Staging/dev content deploy"),i.a.createElement("div",{className:"mermaid"},"graph TD\n1(Build started for dev or staging)\n1 --\x3e 2[Fetch build for latest master commit from S3]\n2 --\x3e 3[Build static pages with new content]\n3 --\x3e 4[Skip Webpack build, use assets from most recent build for applications]\n4 --\x3e 5[Create archive for build and upload to S3]\n5 --\x3e 6[Cache Drupal content and files to S3]\n6 --\x3e 7[Deploy build to dev or staging]"),i.a.createElement("h3",{id:"production-content-deploy"},"Production content deploy"),i.a.createElement("div",{className:"mermaid"},"graph TD\n1(Build started)\n1 --\x3e 2[Fetch last released prod build from GitHub releases list]\n2 --\x3e 3[Build static pages with new content]\n3 --\x3e 4[Skip Webpack build, use assets last prod release for applications]\n4 --\x3e 5[Create archive for build and upload to S3]\n5 --\x3e 6[Deploy build to prod]\n6 --\x3e 7[Deploy content preview servers]"),i.a.createElement("h2",{id:"daily-deploy"},"Daily deploy"),i.a.createElement("div",{className:"mermaid"},"graph TD\n1(Deploy started)\n1 --\x3e 2[Fetch build for latest master commit from S3]\n2 --\x3e 3[Build static pages with new content]\n3 --\x3e 4[Skip Webpack build, use assets from most recent master build for applications]\n4 --\x3e 5[Create archive for build and upload to S3]\n5 --\x3e 6[Create GitHub release]\n6 --\x3e 7[Wait for 60 minutes]\n7 --\x3e 8[Deploy build to prod]\n8 --\x3e 9[Deploy content preview servers]"))},n}(i.a.Component),u={}},353:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},354:function(e,n,t){"use strict";var o=t(2),a=t.n(o),r=t(13),s=t.n(r),c=t(357),i=(t(133),t(134),t(135),t(17),t(353)),l=t(355);function m(){return a.a.createElement(l.b,{query:"157057713",render:function(e){return a.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(l.a,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?a.a.createElement("li",{key:e.name},o&&a.a.createElement(p,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&a.a.createElement(p,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(m,null)):a.a.createElement(p,{item:e,key:e.name})})):null}var u=t(356),h=t.n(u);function g(e){var n=e.location,t=h.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(d,{items:t.items}))):null}function v(e){var n=e.children,t=e.location;return a.a.createElement(c.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(g,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return v}),v.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-build-deploy-flows-mdx-e69eb0a4d611fe72579d.js.map