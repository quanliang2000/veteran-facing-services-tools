(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{337:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(42);var a=t(43),o=t.n(a),s=t(3),r=t.n(s),i=t(2),m=t.n(i),c=t(4),l=t(354),p={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},m.a.createElement("h1",{id:"visual-regression-testing"},"Visual Regression Testing"),m.a.createElement(c.MDXTag,{name:"p",components:n},"This is the first iteration of visual regression testing. It is useful to detect side effects or scope of visual changes."),m.a.createElement(c.MDXTag,{name:"p",components:n},"It works by gathering the links for the site using the sitemap, then opening an chromium instance using Puppeteer to navigate throughout the site, capturing an image of each page. The developer must first create the baseline image set for comparisons (sometimes called the golden set), then after making their changes, run an additional task to make the comparison."),m.a.createElement("h1",{id:"how-to-use"},"How to use"),m.a.createElement(c.MDXTag,{name:"ol",components:n},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Start the local website instance")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Generate your baseline/golden image set for desktop with the following command"),m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"npm run test:visual:baseline")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Note - These images should be generated before your changes, so you may want to switch to the master branch before running this command. This will create the directory ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"site-root/logs/visual-regression/baseline/desktop")," with all of the website images."))),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Generate your baseline/golden image set for mobile with the following command"),m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"npm run test:visual:baseline -- --mobile")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Note - These images should be generated before your changes, so you may want to switch to the master branch before running this command. This will create the directory ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"site-root/logs/visual-regression/baseline/mobile")," with all of the website images."))),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Make your changes")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Run the visual regression test for desktop"),m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"npm run test:visual")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},'Screenshots of the website (updated to have your changes) will be stored in memory and compared to the baseline images created in step 3. If the images are different, a "diff" image will be generated and stored in the ',m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"site-root/logs/visual-regression/diffs/desktop")," directory"),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"All pages that have changed will be outputted as test case failures"))),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Run the visual regression test for mobile"),m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"npm run test:visual -- mobile")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},'Screenshots of the website (updated to have your changes) will be stored in memory and compared to the baseline images created in step 3. If the images are different, a "diff" image will be generated and stored in the ',m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"site-root/logs/visual-regression/diffs/mobile")," directory"),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"All pages that have changed will be outputted as test case failures")))),m.a.createElement("h1",{id:"limitationsideas-going-forward"},"Limitations/ideas going forward"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Right now this is really limited to being useful for the developer, which I think is a good foundation if we decide to expand on it. Some thoughts -\n1. All screenshots are stored in a git-ignored directory\n- All images are stored in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"logs/visual-regression"),", with two subdirectories, one being for the baseline and the other for diffs. This was the minimal implementation and what I considered to be a good stopping point for the first iteration.\n- Do we want to include them in version control? And if so, will we store images using the commit SHA?\n2. Tests fail on all pages that don't match the baseline\n- This means that intentionally-changed pages are detected as test failures the same as pages that may have been changed visually as an unintended side affect.\n- If we want to plug this into our build pipeline, this will have to be addressed, meaning that we'll need a way for developers to sign off on pages that were intentionally changed.\n3. Does not scroll or resize the browser window\n- This means that with this current implementation, we're only testing it on the desktop viewport. It wouldn't be very difficult to change the window size and take new screenshots as part of the automated tests but I wanted to avoid overkill on the first iteration.\n4. Uses the sitemap to navigate throughout the site\n- Pages not included in the sitemap will not be evaluated by this tool.\n5. Does not interact with the page at all\n- This means that style for elements that are visible only after certain user interactions will not be evaluated."))},n}(m.a.Component),u={}},353:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},354:function(e,n,t){"use strict";var a=t(2),o=t.n(a),s=t(13),r=t.n(s),i=t(357),m=(t(133),t(134),t(135),t(17),t(353)),c=t(355);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(c.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(p,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(p,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var u=t(356),g=t.n(u);function h(e){var n=e.location,t=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:t.items}))):null}function b(e){var n=e.children,t=e.location;return o.a.createElement(i.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return b}),b.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-tools-visual-regression-testing-mdx-69537c390ea13fb07c1a.js.map