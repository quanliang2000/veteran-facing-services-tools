(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{300:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p}),a.d(t,"_frontmatter",function(){return u});a(42);var n=a(43),o=a.n(n),r=a(3),s=a.n(r),i=a(2),m=a.n(i),c=a(4),l=a(337),d={},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},d,a),components:t},m.a.createElement(c.MDXTag,{name:"h1",components:t},"Visual Regression Testing"),m.a.createElement(c.MDXTag,{name:"p",components:t},"This is the first iteration of visual regression testing. It is useful to detect side effects or scope of visual changes."),m.a.createElement(c.MDXTag,{name:"p",components:t},"It works by gathering the links for the site using the sitemap, then opening an chromium instance using Puppeteer to navigate throughout the site, capturing an image of each page. The developer must first create the baseline image set for comparisons (sometimes called the golden set), then after making their changes, run an additional task to make the comparison."),m.a.createElement(c.MDXTag,{name:"h1",components:t},"How to use"),m.a.createElement(c.MDXTag,{name:"ol",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Start the local website instance")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Generate your baseline/golden image set for desktop with the following command"),m.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run test:visual:baseline")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Note - These images should be generated before your changes, so you may want to switch to the master branch before running this command. This will create the directory ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"site-root/logs/visual-regression/baseline/desktop")," with all of the website images."))),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Generate your baseline/golden image set for mobile with the following command"),m.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run test:visual:baseline -- --mobile")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Note - These images should be generated before your changes, so you may want to switch to the master branch before running this command. This will create the directory ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"site-root/logs/visual-regression/baseline/mobile")," with all of the website images."))),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Make your changes")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Run the visual regression test for desktop"),m.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run test:visual")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},'Screenshots of the website (updated to have your changes) will be stored in memory and compared to the baseline images created in step 3. If the images are different, a "diff" image will be generated and stored in the ',m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"site-root/logs/visual-regression/diffs/desktop")," directory"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"All pages that have changed will be outputted as test case failures"))),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Run the visual regression test for mobile"),m.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run test:visual -- mobile")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},'Screenshots of the website (updated to have your changes) will be stored in memory and compared to the baseline images created in step 3. If the images are different, a "diff" image will be generated and stored in the ',m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"site-root/logs/visual-regression/diffs/mobile")," directory"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"All pages that have changed will be outputted as test case failures")))),m.a.createElement(c.MDXTag,{name:"h1",components:t},"Limitations/ideas going forward"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Right now this is really limited to being useful for the developer, which I think is a good foundation if we decide to expand on it. Some thoughts -\n1. All screenshots are stored in a git-ignored directory\n- All images are stored in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"logs/visual-regression"),", with two subdirectories, one being for the baseline and the other for diffs. This was the minimal implementation and what I considered to be a good stopping point for the first iteration.\n- Do we want to include them in version control? And if so, will we store images using the commit SHA?\n2. Tests fail on all pages that don't match the baseline\n- This means that intentionally-changed pages are detected as test failures the same as pages that may have been changed visually as an unintended side affect.\n- If we want to plug this into our build pipeline, this will have to be addressed, meaning that we'll need a way for developers to sign off on pages that were intentionally changed.\n3. Does not scroll or resize the browser window\n- This means that with this current implementation, we're only testing it on the desktop viewport. It wouldn't be very difficult to change the window size and take new screenshots as part of the automated tests but I wanted to avoid overkill on the first iteration.\n4. Uses the sitemap to navigate throughout the site\n- Pages not included in the sitemap will not be evaluated by this tool.\n5. Does not interact with the page at all\n- This means that style for elements that are visible only after certain user interactions will not be evaluated."))},t}(m.a.Component),u={}},330:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(2),o=a.n(n),r=a(13),s=a.n(r),i=a(68),m=a.n(i);a.d(t,"a",function(){return m.a});a(332);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},331:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"},{name:"3. Leverage CI workflow",href:"/getting-started/workflow"}]},{name:"Project and environment structure",items:[{name:"VA.gov environments",href:"/getting-started/environments"},{name:"Bundles and Code organization",href:"/getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"/getting-started/common-tasks/local"},{name:"Building VA.gov",href:"/getting-started/common-tasks/build"},{name:"Running tests",href:"/getting-started/common-tasks/tests"},{name:"Linting your code",href:"/getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"/getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Releases",href:"/getting-started/common-tasks/releases"},{name:"Reviewing feature branches",href:"/getting-started/common-tasks/reviewing-feature-branches"},{name:"Documentation",items:[{name:"Adding new pages to this site",href:"/getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"/getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"/getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"/getting-started/common-tasks/creating-gatsby-plugins"}]}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/architecture/metalsmith/urls"},{name:"How templates work",href:"/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Client overview",href:"/architecture/site-structure/client-overview"},{name:"Styling",href:"/architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/architecture/front-end-standards/react"},{name:"Redux standards",href:"/architecture/front-end-standards/redux"},{name:"Styles",href:"/architecture/front-end-standards/styles"},{name:"Accessibility",href:"/architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"/architecture/visual-regression-testing"},{name:"Teamsite",href:"/architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"/platform/feature-flags"},{name:"Application generator",href:"/platform/generator"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},332:function(e,t,a){var n;e.exports=(n=a(334))&&n.default||n},333:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},334:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),r=a(2),s=a.n(r),i=a(13),m=a.n(i),c=a(94),l=a(9),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?s.a.createElement(c.a,o()({location:t,pageResources:a},a.json)):null};d.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},t.default=d},335:function(e,t,a){"use strict";var n=a(3),o=a.n(n),r=a(333),s=a(2),i=a.n(s),m=a(13),c=a.n(m),l=a(338),d=a.n(l),p=a(330),u=(a(17),a(133),a(134),a(331)),h=a.n(u),g=a(18),f=a.n(g),b=a(339),v=a.n(b),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var a;return f()(((a={})[t.id]=!1,a),e)},{}),a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,o=t.location;return i.a.createElement("div",{className:v()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return i.a.createElement("div",{key:t.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),i.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(p.a,{className:v()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(i.a.Component),w=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(p.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(p.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(E,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(i.a.Component),y=(a(340),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return i.a.createElement(p.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(w,{location:a}),t)},data:r})},t}(i.a.Component));y.propTypes={children:c.a.node.isRequired};t.a=y},336:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},337:function(e,t,a){"use strict";var n=a(2),o=a.n(n),r=a(13),s=a.n(r),i=a(335),m=(a(133),a(134),a(135),a(17),a(336)),c=a(330);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function d(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var p=a(331),u=a.n(p);function h(e){var t=e.location,a=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:a.items}))):null}function g(e){var t=e.children,a=e.location;return o.a.createElement(i.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}a.d(t,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-architecture-visual-regression-testing-mdx-5afb9566c09093aaf056.js.map