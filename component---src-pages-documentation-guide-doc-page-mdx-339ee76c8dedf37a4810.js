(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{305:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return u});a(42);var n=a(43),o=a.n(n),r=a(3),m=a.n(r),c=a(2),s=a.n(c),i=a(4),l=a(337),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return s.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},s.a.createElement(i.MDXTag,{name:"h2",components:t},"How to Add Documents"),s.a.createElement(i.MDXTag,{name:"p",components:t},"This is the process of how you should add new pages and documents to this website."),s.a.createElement(i.MDXTag,{name:"h3",components:t},"MDX Format"),s.a.createElement(i.MDXTag,{name:"p",components:t},"We will be using the .mdx format to create our documents.\nMDX is a format that lets you seamlessly use JSX in your Markdown documents.\nYou can import components, like interactive charts or notifs, and export metadata.\nThis makes writing long-form content with components a blast 🚀"),s.a.createElement(i.MDXTag,{name:"p",components:t},s.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://mdxjs.com/"}},"https://mdxjs.com/")),s.a.createElement(i.MDXTag,{name:"h3",components:t},"Adding React Component documentation"),s.a.createElement(i.MDXTag,{name:"p",components:t},"Adding React Components documentation in Formation."),s.a.createElement(i.MDXTag,{name:"ul",components:t},s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"Take a look at the example MDX file at formation-react/src/components/AcceptTermsPrompt/AcceptTermsPrompt.mdx.\nYou can use this as a starter"))),s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"Create a .mdx file the same name as your component in the ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"strong"},"formation-react/src/components")," folder, adjacent to your component.")),s.a.createElement(i.MDXTag,{name:"pre",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"- components\n  - YourComponent.js\n  - YourComponent.mdx\n"))),s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"Add the required frontmatter at the top of the page")),s.a.createElement(i.MDXTag,{name:"pre",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"  ---\n  title: AcceptTermsPrompt\n  name: AcceptTermsPrompt\n  ---\n"))),s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},"**Restart the development server")),s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"If you run into any errors or your page doesn't render correctly,\ntry to delete the .cache file and restart the server again"))),s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"After you have your page setup you can add markdown and your component code."))),s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"Add descriptions to your PropTypes in your Component files")),s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},"We need to convert the propType comments to jsDoc format.\nThis will not show up in the propTypes definitions on your page if you\ndon't have it in a jsDoc format."),s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},"Here is an examples of how it should look:"),s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},"Changed code:"),s.a.createElement(i.MDXTag,{name:"pre",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"  YourComponent.propTypes = {\n    /**\n     * content shown as the actual terms and conditions\n     */\n    user: PropTypes.object,\n    /**\n     * cancel button click handler\n     */\n    onCancel: PropTypes.func\n  };\n")),s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},"It will look like this on the page."),s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"img",components:t,parentName:"p",props:{src:"../../../images/proptypes.png",alt:"proptypes",title:"PropType Image"}}))),s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"Once this is all setup you can start adding your React Component and markdown to your file."))),s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"Start gatsby")),s.a.createElement(i.MDXTag,{name:"pre",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"yarn develop\n"))),s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"You should be able to see your component in the sidebar or go to the url.")),s.a.createElement(i.MDXTag,{name:"pre",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"http://localhost:8000/yourcomponentnamelowercase\n")))),s.a.createElement(i.MDXTag,{name:"h3",components:t},"Adding Document Pages"),s.a.createElement(i.MDXTag,{name:"ul",components:t},s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"Create a .mdx file in ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"strong"},"src/pages")))),s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"Add the required frontmatter at the top of the page. You will need this if you\nwant it to display in the sidebar.")),s.a.createElement(i.MDXTag,{name:"pre",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-markdown"}},"  // Your .mdx page\n  ---\n  title: How to Add Documents\n  ---\n"))),s.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},s.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"You have the option to create React Components and add them to the MDX file.\nReact components for pages should be located in src/components")))),s.a.createElement(i.MDXTag,{name:"h3",components:t},"Updating the sidebar"),s.a.createElement(i.MDXTag,{name:"p",components:t},"After you've added a page, you may want to add it to the sidebar. At ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"src/sidebar.js"),", you'll find the layout for\nthe main site navigation and sidebar. You can add your page where it makes sense in the site's information architecture."),s.a.createElement(i.MDXTag,{name:"p",components:t},"There are examples in the sidebar file to follow. You'll need to add an object with ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"name")," and ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"href")," properties\nfor regular links and you can also create nested sections by leaving out ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"href")," and adding an ",s.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"items")," array to objects."),s.a.createElement(i.MDXTag,{name:"h3",components:t},"GraphQl Sample Reference"),s.a.createElement(i.MDXTag,{name:"p",components:t},"  ",s.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.gatsbyjs.org/docs/graphql-reference/"}},"https://www.gatsbyjs.org/docs/graphql-reference/")),s.a.createElement(i.MDXTag,{name:"h3",components:t},"Github API GraphQL Explorer"),s.a.createElement(i.MDXTag,{name:"p",components:t},"  ",s.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://developer.github.com/v4/explorer/"}},"https://developer.github.com/v4/explorer/")))},t}(s.a.Component),u={}},330:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(2),o=a.n(n),r=a(13),m=a.n(r),c=a(68),s=a.n(c);a.d(t,"a",function(){return s.a});a(332);var i=o.a.createContext({}),l=function(e){return o.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func}},331:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/architecture/metalsmith/urls"},{name:"How templates work",href:"/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Client overview",href:"/architecture/site-structure/client-overview"},{name:"VA.gov environments",href:"architecture/site-structure/environments"},{name:"Bundles and code organization",href:"architecture/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/architecture/front-end-standards/react"},{name:"Redux standards",href:"/architecture/front-end-standards/redux"},{name:"Styles",href:"/architecture/front-end-standards/styles"},{name:"Accessibility",href:"/architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"/architecture/visual-regression-testing"},{name:"Teamsite",href:"/architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"/platform/feature-flags"},{name:"Application generator",href:"/platform/generator"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},332:function(e,t,a){var n;e.exports=(n=a(334))&&n.default||n},333:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},334:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),r=a(2),m=a.n(r),c=a(13),s=a.n(c),i=a(94),l=a(9),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?m.a.createElement(i.a,o()({location:t,pageResources:a},a.json)):null};p.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=p},335:function(e,t,a){"use strict";var n=a(3),o=a.n(n),r=a(333),m=a(2),c=a.n(m),s=a(13),i=a.n(s),l=a(338),p=a.n(l),d=a(330),u=(a(17),a(133),a(134),a(331)),h=a.n(u),g=a(18),f=a.n(g),E=a(339),v=a.n(E),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var a;return f()(((a={})[t.id]=!1,a),e)},{}),a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,o=t.location;return c.a.createElement("div",{className:v()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},c.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},c.a.createElement("i",{className:"fas fa-times"})),c.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return c.a.createElement("div",{key:t.id},c.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},c.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),c.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},c.a.createElement("ul",{className:"site-c-mobile-nav-list"},c.a.createElement("li",{className:"site-c-mobile-nav-list__item"},c.a.createElement(d.a,{className:v()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(c.a.Component),N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return c.a.createElement("div",null,c.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),c.a.createElement("header",{className:"site-c-header",role:"banner"},c.a.createElement("div",{className:"site-l-wrapper"},c.a.createElement("div",{className:"site-c-header__masthead"},c.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},c.a.createElement("em",{className:"site-c-header__logo-text"},c.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},c.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",c.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),c.a.createElement("div",{className:"site-c-header__utility-links"},c.a.createElement("div",{id:"search-container",className:"site-search-container"},c.a.createElement("i",{className:"fas fa-search search-icon"}),c.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),c.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),c.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},c.a.createElement("i",{className:"fas fa-search"})),c.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),c.a.createElement("nav",{className:"site-c-header__nav"},c.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return c.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},c.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),c.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},c.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),c.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),c.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&c.a.createElement("div",{className:"site-c-overlay is-visible"}),c.a.createElement(b,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(c.a.Component),y=(a(340),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return c.a.createElement(d.b,{query:"1044757290",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(N,{location:a}),t)},data:r})},t}(c.a.Component));y.propTypes={children:i.a.node.isRequired};t.a=y},336:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},337:function(e,t,a){"use strict";var n=a(2),o=a.n(n),r=a(13),m=a.n(r),c=a(335),s=(a(133),a(134),a(135),a(17),a(336)),i=a(330);function l(){return o.a.createElement(i.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function p(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(i.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(331),u=a.n(d);function h(e){var t=e.location,a=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function g(e){var t=e.children,a=e.location;return o.a.createElement(c.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}a.d(t,"a",function(){return g}),g.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-documentation-guide-doc-page-mdx-339ee76c8dedf37a4810.js.map