(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{370:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s}),a.d(t,"_frontmatter",function(){return l});a(8),a(7),a(4),a(9),a(10);var n=a(1),r=a.n(n),o=a(2),p=a(333);var m={},s=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).layout=p.a,a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,a),components:t},r.a.createElement("h1",{id:"vagov-content-management-system-overview"},"VA.gov content management system overview"),r.a.createElement(o.MDXTag,{name:"p",components:t},"The VA is currently in the process of moving content from several other systems into one primary content management system, powered by Drupal. VA.gov takes a decoupled approach, where content editors make change in a Drupal environment, then VA.gov build process queries that Drupal instance and transforms the resulting content into static html that is deployed on the site. Drupal does not control any Veteran-facing page rendering."),r.a.createElement(o.MDXTag,{name:"p",components:t},"In addition, there is a system that can be used to view content changes on demand, outside of the typical build process, so that content editors can preview their changes before they go live."),r.a.createElement("h2",{id:"existing-content-sources"},"Existing content sources"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Content displayed on VA.gov exists in four primary locations:"),r.a.createElement(o.MDXTag,{name:"ul",components:t},r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"The ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vagov-content"}},"vagov-content repo"),", in Markdown and YAML"),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"The ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website"}},"vets-website repo")," (footer link data in JSON, plus templating)"),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"Teamsite, the VA's legacy content management system"),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"Drupal, the VA's current content management system")),r.a.createElement(o.MDXTag,{name:"p",components:t},"Eventually, all this content will be consolidated and moved into Drupal."),r.a.createElement("h2",{id:"drupal-environments"},"Drupal environments"),r.a.createElement(o.MDXTag,{name:"p",components:t},"All Drupal environments require you to either be on the VA network or the SOCKS proxy."),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Environment"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Site url"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"VA.gov environment"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"development"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"http://dev.cms.va.gov"}},"http://dev.cms.va.gov")),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://dev.va.gov"}},"https://dev.va.gov"))),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"staging"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"http://staging.cms.va.gov"}},"http://staging.cms.va.gov")),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://staging.va.gov"}},"https://staging.va.gov"))),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"production"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"http://prod.cms.va.gov"}},"http://prod.cms.va.gov")),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://www.va.gov"}},"https://www.va.gov"))))),r.a.createElement("h2",{id:"how-content-is-transformed-into-pages"},"How content is transformed into pages"),r.a.createElement(o.MDXTag,{name:"p",components:t},"VA.gov is a static html/js/css site, built with a static site generator tool called Metalsmith. During the Metalsmith build process we query the appropriate Drupal environment with a GraphQL query. The results of that query are transformed into pages through the Metalsmith build pipeline. There are ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://shopify.github.io/liquid/"}},"liquid")," templates specific to page content that came from Drupal, generally denoted with a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},".drupal.liquid")," suffix. Each ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"entity")," from Drupal has a corresponding ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"entityType"),", which is used to choose the entry template for each ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"entity")," (i.e. page) from Drupal."),r.a.createElement(o.MDXTag,{name:"ul",components:t},r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/veteran-facing-services-tools/platform/architecture/static-site"}},"Metalsmith build process diagram")),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/drupal/graphql/GetAllPages.graphql.js"}},"Primary GraphQL query")),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/site/layouts"}},"Entry templates"))),r.a.createElement("h2",{id:"jenkins-build-process-integration"},"Jenkins build process integration"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Drupal is queried in the Jenkins build process for any vets-website branch. On Jenkins, however, there is a caching mechanism to help deal with downtime and other failures in the live Drupal environments. After any successful master build, the results of the GraphQL query and any files downloaded from Drupal during the build process are put into a tarball and uploaded to S3. For builds on any branch, if the site build (the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"npm run build")," command) fails, Jenkins will download the appropriate cache and retry the build."),r.a.createElement(o.MDXTag,{name:"ul",components:t},r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/veteran-facing-services-tools/platform/architecture/build-deploy-flows#standard-masterpr-build"}},"Jenkins build process flow")),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/script/drupal-aws-cache.js"}},"Drupal/AWS cache script"))),r.a.createElement("h2",{id:"deployment"},"Deployment"),r.a.createElement(o.MDXTag,{name:"p",components:t},"A typical cms deploys content changes to users immediately, because the content is stored in the same system that renders the pages that contain that content. In our decoupled approach, however, content needs to be run through the VA.gov build process before it can go live. There are two ways of getting content onto VA.gov:"),r.a.createElement(o.MDXTag,{name:"ul",components:t},r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/veteran-facing-services-tools/platform/architecture/build-deploy-flows#daily-deploy"}},"Scheduled daily deploy")),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/veteran-facing-services-tools/platform/architecture/build-deploy-flows#content-only-deploy"}},"Off schedule content only deploy"))),r.a.createElement(o.MDXTag,{name:"p",components:t},"The scheduled deploy begins at 2pm ET, and fetches new content from Drupal before deploying. The off schedule deploy is a Jenkins job that can be triggered from a button in the production Drupal environment which will get the currently released code and update it with the latest content from Drupal."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Off schedule deploys can be done for all environments, however there are separate Jenkins jobs for production vs staging/dev.The main difference is that dev/staging deploys update the latest builds from vets-website master with new content and the production deploy updates the latest released code on VA.gov with new content."),r.a.createElement("h2",{id:"preview-server"},"Preview server"),r.a.createElement(o.MDXTag,{name:"p",components:t},"A typical cms also provides an easy way to preview changes before making them live, because it can render unpublished content with the templates and rendering logic in the same cms. A decoupled approach can't do this by default, so we created a preview server to emulate it. The preview servers query Drupal for the latest unpublished revision of a specified page, then run an abbreviated verion of the Metalsmith build process for that single page and return the resulting html. This is done per request and the results are not written to the server."),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Environment"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Site url"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"VA.gov environment"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"development"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"http://preview-dev.vfs.va.gov"}},"http://preview-dev.vfs.va.gov")),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://dev.va.gov"}},"https://dev.va.gov"))),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"staging"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"http://preview-staging.vfs.va.gov"}},"http://preview-staging.vfs.va.gov")),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://staging.va.gov"}},"https://staging.va.gov"))),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"production"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"http://preview-prod.vfs.va.gov"}},"http://preview-prod.vfs.va.gov")),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://va.gov"}},"https://va.gov"))))),r.a.createElement(o.MDXTag,{name:"p",components:t},"The preview server is written in Node and Express, ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/script/preview.js"}},"located in vets-website"),"."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Requests that are made to the preview server that are not to the special ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/preview")," route are proxied to the associated live site. So, for example, a request for ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/health-care")," on the staging preview server will request the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/health-care")," page from staging.va.gov. If you were trying to preview an unpublished version of the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/health-care")," page you would go to ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/preview?nodeId=<id of health care entity>"),"."),r.a.createElement("h3",{id:"preview-server-request-flow"},"Preview server request flow"),r.a.createElement("div",{className:"mermaid"},"graph TD\nA(Request made to preview-prod.vfs.va.gov) --\x3eB{Request made to /preview?}\nB --\x3e|No|C\nB --\x3e|Yes|D\nC[Return content of same url from va.gov]--\x3eE(Done)\nD[Get node id from nodeId url parameter]--\x3eF[Request latest unpublished revision of node id]\nD--\x3eG[Fetch latest header/footer data]\nD --\x3eH[Fetch latest JS asset manifest]\nG--\x3eI\nH--\x3eI\nF--\x3eI\nI[Run Metalsmith build pipeline on returned Drupal content] --\x3eJ\nJ[Return HTML to requestor]--\x3eK(Done)"))},n}(r.a.Component),l={}}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-cms-mdx-f8512f92d57fda46677e.js.map