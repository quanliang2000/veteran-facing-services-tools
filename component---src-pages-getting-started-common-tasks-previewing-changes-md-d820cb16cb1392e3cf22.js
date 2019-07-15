(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{342:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return s}),a.d(n,"_frontmatter",function(){return i});a(10),a(8),a(5),a(19),a(9);var t=a(1),o=a.n(t),r=a(2),m=a(397);var c={},s=function(e){var n,a;function t(n){var a;return(a=e.call(this,n)||this).layout=m.a,a}return a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,t.prototype.render=function(){var e=this.props,n=e.components,a=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,a),components:n},o.a.createElement("h1",{id:"making-changes-to-design-systemformation-and-previewing-them"},"Making changes to design-system/formation and previewing them"),o.a.createElement(r.MDXTag,{name:"p",components:n},"As you work in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"design-system")," repo, you'll want to preview how your changes look in an app that uses ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react"),". To do this, we use ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/whitecolor/yalc"}},"Yalc")," to publish the modules locally, rather than to NPM, and tell the consuming app to install that local version. In these examples, for the sake of simplicity, we'll assume you are using ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website")," as the consuming app and are trying to preview changes in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react"),". But instructions should be similar for any app using ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation"),"."),o.a.createElement("h2",{id:"getting-set-up"},"Getting set up"),o.a.createElement(r.MDXTag,{name:"p",components:n},"First, install Yalc globally if you haven't already: ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yarn global add yalc"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"While in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"design-system")," app:\n1. Run ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm run build")," to build the module into the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"packages/formation-react")," dir.\n2. ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"cd")," to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"packages/formation-react"),"\n2. Run ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yalc publish")," to publish the module to your local ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"~/.yalc")," dir."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Then in the consuming app (",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website"),"):\n1. Run ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yalc link @department-of-veterans-affairs/formation-react")," to tell the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website")," project to use the local version of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react")," instead of the one installed via NPM (i.e. the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react")," dir in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"node_modules")," will now be a symlink to a dir in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"~/.yalc"),").\n2. Fire up the website locally with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yarn watch"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"The locally running project, at ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"localhost:3001"),", will now be using the locally published version of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation"),"."),o.a.createElement("h2",{id:"the-change-publish-preview-loop"},"The change-publish-preview loop"),o.a.createElement(r.MDXTag,{name:"p",components:n},"With each change you make to the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"design-system"),", you'll need to rebuild the module, republish the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react")," module to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"~/.yalc"),", and also tell the consuming app to use the new version."),o.a.createElement(r.MDXTag,{name:"p",components:n},"While in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"design-system")," app:\n1. Make some changes to the code.\n2. Build the module and publish it locally to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"~/.yalc")," by running ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm run build"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"cd"),"ing to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"packages/formation-react"),", and running ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yalc publish"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Then in the consuming app:\n1. Run ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yalc update")," to bring in the latest version of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react"),".\n2. If you are using ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website")," as your consuming app and it is already running, it should notice the changes and rebuild. If not, restart the app locally.\n3. After rebuilding completes, your changes will now be visible locally at ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"localhost:3001"),"."),o.a.createElement("h2",{id:"tearing-down-the-local-testing-setup"},"Tearing down the local testing setup"),o.a.createElement(r.MDXTag,{name:"p",components:n},"When you are done testing your module locally, you'll want to get your consuming app back to normal; that is, tell it to stop using the version of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react")," published to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"~/.yalc")," and go back to using the version from NPM."),o.a.createElement(r.MDXTag,{name:"p",components:n},"In the consuming app:\n1. run ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yalc remove @department-of-veterans-affairs/formation-react")," to remove the link from the consuming app's ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"node_modules")," dir to the local version of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react"),".\n2. ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"NOTE:")," There seems to be ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/whitecolor/yalc/issues/37"}},"an issue")," with Yalc not cleaning up after itself properly, so you'll have to also run ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"unlink node_modules/@department-of-veterans-affairs/formation-react"),"\n3. Run ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yarn install --check-files")," to reinstall ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react")," from NPM. (If you're curious about why you need the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"--check-files")," flag, ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/yarnpkg/yarn/issues/2240"}},"check out this issue"),".)"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Your consuming app should be back to normal!"))},t}(o.a.Component),i={}},396:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},397:function(e,n,a){"use strict";var t=a(1),o=a.n(t),r=a(400),m=(a(131),a(132),a(94),a(6),a(396)),c=a(398);function s(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function i(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(c.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function p(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(i,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(i,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(s,null)):o.a.createElement(i,{item:e,key:e.name})})):null}var l=a(399),u=a.n(l);function d(e){var n=e.location,a=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function g(e){var n=e.children,a=e.location;return o.a.createElement(r.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(d,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return g})}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-previewing-changes-md-d820cb16cb1392e3cf22.js.map