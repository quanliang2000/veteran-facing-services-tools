(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{372:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l}),a.d(t,"_frontmatter",function(){return p});a(8),a(7),a(4),a(9),a(10);var n=a(1),o=a.n(n),r=a(2),s=a(333);var i={},l=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).layout=s.a,a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,a),components:t},o.a.createElement("h1",{id:"site-build-process"},"Site build process"),o.a.createElement(r.MDXTag,{name:"p",components:t},"The main build process for VA.gov is controlled with Metalsmith, which is a simple, plugin-based static site generator. We take content from two sources, the vagov-content repo and the VA's Drupal CMS, create pages based on that data plus templates, run a series of other plugins, and then output the resulting html pages."),o.a.createElement("h2",{id:"metalsmith-build-flow"},"Metalsmith build flow"),o.a.createElement("div",{className:"mermaid"},"graph TD\n1[Metalsmith build pipeline] --\x3e|Markdown from vagov-content| A\n1 --\x3e|Drupal content| K\nA[Create page objects from each Markdown file] --\x3eB[Convert Markdown to html]\nB --\x3e C[Generate sidebars for Markdown content]\nC--\x3e D[Add local static assets to pipeline]\nD --\x3e E[Apply layout templates to page data]\nE --\x3eF[Generate header/footer data]\nF --\x3e G[Create sitemap]\nG --\x3e H[Check for broken links]\nH --\x3e|Drupal pages| N[Download assets referenced in Drupal content from Drupal]\nH --\x3e|Markdown pages| I[Webpack build]\nN --\x3e I\nI --\x3e J[Write HTML/CSS/JS and other static files to build output folder]\nK[Query Drupal via GraphQL or fetch from local cache] --\x3e L[Create page objects from query results]\nL --\x3e D"),o.a.createElement(r.MDXTag,{name:"p",components:t},"There are other plugins than the ones listed in this diagram, but these are the most important ones. The process is very similar for Markdown and Drupal content, mostly differing in how the content is initially converted into page objects for Metalsmith to process."),o.a.createElement("h2",{id:"metalsmith-code-organization"},"Metalsmith code organization"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Metalsmith related code is located in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"src/site"),". Most of the code in that folder are temlates for Drupal content. The build process code is located in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"src/site/stages")," which contains Metalsmith plugins and GraphQL queries. "),o.a.createElement("h2",{id:"drupal-templates-vs-markdown-templates"},"Drupal templates vs Markdown templates"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Due to the differences in the shape of data in vagov-content vs Drupal, we have two different sets of templates, one for each source. There are some shared templates, but these are largely restricted to the header and footer templates. Drupal related templates end with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},".drupal.liquid")," and Markdown templates typically end with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},".html")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},".liquid"),"."))},n}(o.a.Component),p={}}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-static-site-index-mdx-a1425fed27cd3eb5c6c5.js.map