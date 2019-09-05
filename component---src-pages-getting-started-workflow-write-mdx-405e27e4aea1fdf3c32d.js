(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{368:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c}),a.d(t,"_frontmatter",function(){return i});a(8),a(7),a(4),a(9),a(10);var n=a(1),o=a.n(n),r=a(2),s=a(333);var m={},c=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).layout=s.a,a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,a),components:t},o.a.createElement("h1",{id:"write"},"Write"),o.a.createElement("h2",{id:"choose-an-issue-to-work-on"},"Choose an issue to work on"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Work with your team to determine the right issue to work on")),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"em",components:t,parentName:"p"},"The VA handbook has more information about the broader process for delivering services to Veterans on VA.gov. Developers work in an agile framework, where issues are assigned to sprints and developers work on this items over the two-week sprint period.")),o.a.createElement("h2",{id:"create-feature-branch"},"Create feature branch"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Checkout ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"master")," branch and pull the latest")),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"git checkout master && git pull origin master\n")),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Create a new feature branch from master")),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"git checkout -b 12345-issue-title\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"em",components:t,parentName:"p"},"Since most new work derives from a GitHub Issue, it's recommended to prefix your branch name with the issue. For example, if you're working on a feature to collect a veteran's address as detailed in Issue #25, you might call your issue ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"em"},"25-address"),".")),o.a.createElement("h2",{id:"code-new-functionality"},"Code new functionality"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Write the code for the new feature! This is often the fun part. :-)")),o.a.createElement(r.MDXTag,{name:"p",components:t},"It's very helpful if you restrict the scope of changes to only the issue/feature that you're working on. For example, you might see some code you can cleanup along the way and decide to change it. However, this increases the scope of your changes and increases risk if your commits/feature need to be rolled back (and the rollback pulls other things with it). It also helps your code reviewer, because they aren't left wondering how a tangential change impacts the feature promised by the pull request."),o.a.createElement(r.MDXTag,{name:"p",components:t},"As you code your changes, commit changes to your feature branch. ",o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"Commit early. Commit often"),"."),o.a.createElement("h2",{id:"write-tests-for-new-functionality"},"Write tests for new functionality"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Unit: Tests a specific method or very granular piece of the code base."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"End to end: Tests how your code works when clicked through in a real browser."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Accessibility: Tests that run automated checks to catch some basic accessibility mistakes. Typically these are incorporated into end-to-end tests.")),o.a.createElement(r.MDXTag,{name:"p",components:t},"These tests are automatically executed during ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/getting-started/common-tasks/workflow/review"}},"review"),", but you should ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/getting-started/common-tasks/test"}},"run them locally")," before moving on."),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"em",components:t,parentName:"p"},"The only way to quickly know if your new change breaks the existing functionality of the application is to have a suite of automated tests that execute whenever new stuff is added. When you add new functionality, new tests are required so that future developers know if they have broken your contributions.")),o.a.createElement("h2",{id:"manual-testing"},"Manual Testing"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Test new functionality on supported ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/platform/front-end-standards/documented-decisions/browser-support/"}},"browsers"))))},n}(o.a.Component),i={}}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-write-mdx-405e27e4aea1fdf3c32d.js.map