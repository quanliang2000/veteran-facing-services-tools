(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{370:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l}),n.d(t,"_frontmatter",function(){return d});n(8),n(7),n(4),n(9),n(10);var a=n(1),o=n.n(a),r=n(2),i=n(333);var s={},l=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).layout=i.a,n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,n),components:t},o.a.createElement("h1",{id:"build-and-deploy-process-flows"},"Build and deploy process flows"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Here you'll find flow diagrames for the different types of build and deploy flows we have for VA.gov. Those different flows are:"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#standard-masterpr-build"}},"Standard master/PR build")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#content-only-build-and-deploy"}},"Content only build and deploy")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#daily-deploy"}},"Daily deploy"))),o.a.createElement("h2",{id:"standard-masterpr-build"},"Standard master/PR build"),o.a.createElement(r.MDXTag,{name:"p",components:t},"This is the typical Jenkins build for any vets-website branch. There is some logic that is different between master and other branches:"),o.a.createElement("div",{className:"mermaid"},"graph TD\n1(Build starts)\n1 --\x3e 2[Check for linter failures]\n1 --\x3e 3[Check for security issues]\n1 --\x3e 4[Run unit tests]\n2 --\x3e 5(Build site and applications)\n3 --\x3e 5\n4 --\x3e 5\n5 --\x3e 6[vagovdev build]\n5 --\x3e 7[vagovstaging build]\n5 --\x3e 8[vagovprod build]\n6 --\x3e 9(Integration testing)\n7 --\x3e 9\n8 --\x3e 9\n9 --\x3e 10[Accessibility tests]\n9 --\x3e 11[End to end tests]\n11 --\x3e 12[Create archives for each build and upload to S3]\n10 --\x3e 12\n12 --\x3e 13{On master branch?}\n13 --\x3e|Yes| 14[Cache Drupal content and files to S3]\n14 --\x3e 15[Deploy builds to dev and staging]\n13 --\x3e|No| 16(Done)\n15 --\x3e16"),o.a.createElement("h2",{id:"content-only-deploy"},"Content only deploy"),o.a.createElement(r.MDXTag,{name:"p",components:t},"When content is changed in Drupal, sometimes we need to publish it immediately on a va.gov site. There are two separate processes for this, one for staging/dev and another for production."),o.a.createElement("h3",{id:"stagingdev-content-deploy"},"Staging/dev content deploy"),o.a.createElement("div",{className:"mermaid"},"graph TD\n1(Build started for dev or staging)\n1 --\x3e 2[Fetch build for latest master commit from S3]\n2 --\x3e 3[Build static pages with new content]\n3 --\x3e 4[Skip Webpack build, use assets from most recent build for applications]\n4 --\x3e 5[Create archive for build and upload to S3]\n5 --\x3e 6[Cache Drupal content and files to S3]\n6 --\x3e 7[Deploy build to dev or staging]"),o.a.createElement("h3",{id:"production-content-deploy"},"Production content deploy"),o.a.createElement("div",{className:"mermaid"},"graph TD\n1(Build started)\n1 --\x3e 2[Fetch last released prod build from GitHub releases list]\n2 --\x3e 3[Build static pages with new content]\n3 --\x3e 4[Skip Webpack build, use assets last prod release for applications]\n4 --\x3e 5[Create archive for build and upload to S3]\n5 --\x3e 6[Deploy build to prod]\n6 --\x3e 7[Deploy content preview servers]"),o.a.createElement("h2",{id:"daily-deploy"},"Daily deploy"),o.a.createElement("div",{className:"mermaid"},"graph TD\n1(Deploy started)\n1 --\x3e 2[Fetch build for latest master commit from S3]\n2 --\x3e 3[Build static pages with new content]\n3 --\x3e 4[Skip Webpack build, use assets from most recent master build for applications]\n4 --\x3e 5[Create archive for build and upload to S3]\n5 --\x3e 6[Create GitHub release]\n6 --\x3e 7[Wait for 60 minutes]\n7 --\x3e 8[Deploy build to prod]\n8 --\x3e 9[Deploy content preview servers]"))},a}(o.a.Component),d={}}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-build-deploy-flows-mdx-b573d4b05768f713c97a.js.map