(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{290:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p}),a.d(t,"_frontmatter",function(){return u});a(42);var n=a(43),o=a.n(n),r=a(3),s=a.n(r),i=a(2),c=a.n(i),m=a(4),l=a(338),d={},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return c.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},d,a),components:t},c.a.createElement(m.MDXTag,{name:"h1",components:t},"Redux Action Guidelines"),c.a.createElement(m.MDXTag,{name:"p",components:t},"Actions are an important part of Redux and in order to making usage of Redux consistent and maintainable across applications, here are some guidelines to follow."),c.a.createElement(m.MDXTag,{name:"p",components:t},"Important note: actions are the objects that are returned by action creator functions and used by reducers to generate a new state object. Guidelines for reducers and action creators will be in other documentation."),c.a.createElement(m.MDXTag,{name:"ol",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Follow the documentation on the ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://redux.js.org"}},"Redux site"),". The basics of actions are ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://redux.js.org/basics/actions"}},"here")," and some frequently asked questions can be found ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://redux.js.org/faq/actions"}},"here"),"."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Define constants for your action types. We typically do this in the same file as the actions, and import them in the reducer."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Actions should reflect something a user did or an external event. It's easy to get in the habit of choosing action types based on what's happening in a component or in the Redux state itself, but choosing them based on implementation details couples the action to that implementation and makes it confusing to change later. Actions are also meant to show the history of what has happened in your application, and a bunch of types like ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"SET_FETCH_FORM_STATUS")," are not easy to understand just from the type itself."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Action types should be uppercase, separated by underscores."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Action types should be in past tense. The user or external event already happened, you're updating the application state to reflect that fact. Most of our code uses present tense currently, but the consensus is that this is the better convention.")),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Examples"),c.a.createElement(m.MDXTag,{name:"p",components:t},"Say you have a modal that a user can open or close, which is controlled by a status property in the Redux state. One approach might be to create an action with a type of ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"SET_MODAL_STATUS")," to handle this. This gets the job done, but that type doesn't reflect what a user is actually trying to do (open a particular modal), it reflects what is changing in the Redux state (the open/closed status flag is being set)."),c.a.createElement(m.MDXTag,{name:"p",components:t},"Instead, a better approach is to think about what a user is trying to do by triggering that action. ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"MODAL_OPENED")," is a better action type, but you could still improve that by thinking about the context that modal is in. If the user is clicking on a link to show a modal window with some additional information about a subject, you could consider ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ADDITIONAL_INFORMATION_DISPLAYED")," or ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ADDITIONAL_INFORMATION_TOGGLED"),". You should use your best judgment about what makes sense in your code, but the more your action type reflects what the user is trying to accomplish, the buetter."),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Async action objects"),c.a.createElement(m.MDXTag,{name:"p",components:t},"A common pattern in Redux is to have several actions related to one asynchronous action, like a server request. You might be updating an address and have actions with types like like ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS"),", ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS_SUCCESS"),", and ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS_FAILURE"),". To that end, we recommend that you use the suffixes:"),c.a.createElement(m.MDXTag,{name:"ul",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"_STARTED")),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"_SUCCEEDED")),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"_FAILED"))),c.a.createElement(m.MDXTag,{name:"p",components:t},"For example, if the user trigger an action to update an address, you would have ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS_STARTED"),", ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS_SUCCEEDED"),", and ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS_FAILED"),"."),c.a.createElement(m.MDXTag,{name:"p",components:t},"We also suggest using the following properties for data in those action types:"),c.a.createElement(m.MDXTag,{name:"ul",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"response"),": the response data in a successful action"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"error"),": the error data in a failed action")))},t}(c.a.Component),u={}},331:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(2),o=a.n(n),r=a(13),s=a.n(r),i=a(68),c=a.n(i);a.d(t,"a",function(){return c.a});a(333);var m=o.a.createContext({}),l=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},332:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"getting-started"},{name:"2. Access internal tools",href:"getting-started/internal-tools"},{name:"3. Leverage CI workflow",href:"getting-started/workflow"}]},{name:"Project and environment structure",items:[{name:"VA.gov environments",href:"getting-started/environments"},{name:"Bundles and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"},{name:"Releases",href:"getting-started/common-tasks/releases"},{name:"Reviewing feature branches",href:"getting-started/common-tasks/reviewing-feature-branches"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"architecture/metalsmith/urls"},{name:"How templates work",href:"architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Redux standards",href:"architecture/front-end-standards/redux"},{name:"Styles",href:"architecture/front-end-standards/styles"},{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Accessibility",href:"architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"platform/feature-flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},333:function(e,t,a){var n;e.exports=(n=a(335))&&n.default||n},334:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},335:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),r=a(2),s=a.n(r),i=a(13),c=a.n(i),m=a(94),l=a(9),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?s.a.createElement(m.a,o()({location:t,pageResources:a},a.json)):null};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=d},336:function(e,t,a){"use strict";var n=a(3),o=a.n(n),r=a(334),s=a(2),i=a.n(s),c=a(13),m=a.n(c),l=a(339),d=a.n(l),p=a(331),u=(a(17),a(133),a(134),a(332)),h=a.n(u),f=a(18),g=a.n(f),E=a(340),b=a.n(E),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var a;return g()(((a={})[t.id]=!1,a),e)},{}),a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,o=t.location;return i.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return i.a.createElement("div",{key:t.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),i.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(p.a,{className:b()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(i.a.Component),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(p.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(p.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(v,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(i.a.Component),D=(a(341),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return i.a.createElement(p.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(y,{location:a}),t)},data:r})},t}(i.a.Component));D.propTypes={children:m.a.node.isRequired};t.a=D},337:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},338:function(e,t,a){"use strict";var n=a(2),o=a.n(n),r=a(13),s=a.n(r),i=a(336),c=(a(17),a(133),a(134),a(135),a(331)),m=a(337);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function d(e){var t=e.items;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return o.a.createElement("li",{key:e.name},!!e.items&&o.a.createElement("li",{key:e.name},o.a.createElement("h4",null,e.name),o.a.createElement(d,{items:e.items})),"componentList"===e.query&&o.a.createElement("li",{key:e.name},o.a.createElement("h4",null,e.name),o.a.createElement(l,null)),!!e.href&&o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&o.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var p=a(332),u=a.n(p);function h(e){var t=e.location,a=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},!!a&&o.a.createElement(d,{items:a.items}),!a&&o.a.createElement("ul",{className:"site-c-sidenav-list"},u.a.sections.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(c.a,{to:e.href},e.name))})))}function f(e){var t=e.children,a=e.location;return o.a.createElement(i.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}a.d(t,"a",function(){return f}),f.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-architecture-front-end-standards-redux-mdx-4f1bf989b3110895ea8d.js.map