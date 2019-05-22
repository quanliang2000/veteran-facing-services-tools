(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{286:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(42);var a=t(43),o=t.n(a),r=t(3),s=t.n(r),c=t(2),i=t.n(c),m=t(4),p=t(348),l={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=p.a,t}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return i.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:n},i.a.createElement("h2",{id:"adding-external-pages-from-github-api"},"Adding External Pages from Github API"),i.a.createElement(m.MDXTag,{name:"p",components:n},"We are going to be using Github's GraphQL API to consume markdown pages from GitHub.\nThis document will detail the process of adding pages and how it all works."),i.a.createElement("h3",{id:"why"},"Why?"),i.a.createElement(m.MDXTag,{name:"p",components:n},"We wanted a way to get pre-existing documents from GitHub without having to\nduplicate it."),i.a.createElement("h3",{id:"how-to-add-external-pages"},"How to Add External pages"),i.a.createElement(m.MDXTag,{name:"p",components:n},"I have created a Gatsby plugin called ",i.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"github-api-pages")," located at ",i.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"/plugins/github-api-pages"),".\nYou can learn more about creating your own plugin at ",i.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/getting-started/common-tasks/creating-gatsby-plugins"}},"creating-gatsby-plugins"),"\nAll code that is interfacing with the GitHubAPI is located at ",i.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"/plugins/github-api-pages/-github-api"),". We should try to\nkeep any code that is interfacing with the GitHubAPI in this file so we have one source of truth."),i.a.createElement("h5",{id:"limitations"},"Limitations"),i.a.createElement(m.MDXTag,{name:"p",components:n},"Due to GitHub's rate limit we can only grab whole directories or single files at a time.\nIf we try to get the whole repo it will give us a rate limit error. This is also due to the size of our documentation repo."),i.a.createElement("h5",{id:"data-you-will-need-to-make-the-api-request"},"Data you will need to make the API request"),i.a.createElement(m.MDXTag,{name:"ul",components:n},i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Owner of the repo"),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Repo name"),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"File directory you want to add or file fileName")),i.a.createElement(m.MDXTag,{name:"p",components:n},"Example:"),i.a.createElement(m.MDXTag,{name:"pre",components:n},i.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"department-of-veterans-affairs/vets.gov-team/Administrative/Accessing-Staging.md\n|            owner           |     repo    |           file directory           |\n")),i.a.createElement(m.MDXTag,{name:"p",components:n},i.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},i.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"strong"},"Note")),": The file directory is not the url but the actual directory.\nHere is an example of what the file directory should look like:"),i.a.createElement("h2",{id:"github-file-directory"},"github file directory"),i.a.createElement(m.MDXTag,{name:"p",components:n},i.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"How to add files:"),"\nAfter you have gathered the information (owner, repo, file directory) from github, now you can add the files\ninto Gatsby."),i.a.createElement(m.MDXTag,{name:"ul",components:n},i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},"Located in the ",i.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"/plugins/github-api-pages/")," you should see a ",i.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"pages")," directory. To add github file locations\nyou need to either add it to a list or create your own list. Here are the steps of how to add your own list."),i.a.createElement(m.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},"Add a JSON file named the main directory of your github directory. In this example we will be using ",i.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"work-practices"),".\nYou can see how we are using the data we gathered earlier (owner, repo, file directory). All you need to do is add your\nfile directory to the ",i.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"directoryPaths")," array. It can be a directory or just a file location."),i.a.createElement(m.MDXTag,{name:"pre",components:n,parentName:"li"},i.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-JSON"}},'// /plugins/github-api-pages/pages/work-practices.json\n\n{\n  "owner": "department-of-veterans-affairs",\n  "repo": "vets.gov-team",\n  "directoryPaths": [\n    "Work Practices/Accessibility and 508",\n    "Work Practices/Accessibility and 508/meeting-notes/2017-06-05-meeting-508-office.md"\n  ]\n}\n'))),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"p",components:n,parentName:"li"},"After you have set up the JSON file, now you have to add it to the list of pages. This is\ndone in the ",i.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"/plugins/github-api-pages/pages/index.js")," file."),i.a.createElement(m.MDXTag,{name:"pre",components:n,parentName:"li"},i.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"// /plugins/github-api-pages/pages/index.js\n\nexports.workPractices = require('./work-practices.json');\n")))))),i.a.createElement("h3",{id:"how-it-works"},"How it Works"),i.a.createElement(m.MDXTag,{name:"p",components:n},"Initially we were trying to use pre-existing Gatsby plugins to do this but\ncouldn't find one that did what we exactly wanted it to do. The ones that came\ncloses to doing what we wanted ended up timing out due to the massive document repo\nwe have. So we ended up writing our own local plugin. Here is a list of steps we\ntook to make this work."),i.a.createElement(m.MDXTag,{name:"ul",components:n},i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Use Gatsby's ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"sourceNodes")," lifecycle hook to get data."),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Use GitHub's GraphQL API to query page information from GitHub"),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Create a Gatsby Node for the pages"),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Use ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"gatsby-transformer-remark")," to convert the markdown data into an html document"),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Create pages using the createPages lifecycle hook.")),i.a.createElement("h4",{id:"use-gatsbys-sourcenodes-lifecycle-hook-to-get-data"},"Use Gatsby's sourceNodes lifecycle hook to get data."),i.a.createElement(m.MDXTag,{name:"p",components:n},"First thing we have to do to get data from an API request into Gatsby is hook into the\n",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sourceNodes")," lifecycle hook. This is were Gatsby allows you to do this."),i.a.createElement(m.MDXTag,{name:"pre",components:n},i.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// /plugins/github-api-pages/gatsby-node.js\n\nconst path  = require('path');\nconst githubApi = require('./github-api');\nconst githubPages = require('./pages');\n\nexports.sourceNodes = async ({\n  actions,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = actions\n\n  await githubApi.getPagesAndCreateNodes(githubPages, createNode);\n}\n")),i.a.createElement("h4",{id:"use-githubs-graphql-api-to-query-page-information-from-github"},"Use GitHub's GraphQL API to query page information from GitHub"),i.a.createElement(m.MDXTag,{name:"p",components:n},"Now we have to do a API request using the Github GraphQL API. You can use the ",i.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://developer.github.com/v4/explorer/"}},"GitHub's GraphQL Explorer")," to generate your query. You'll have to explore GitHub's GraphQL API to understand more but here is a reference of how to get content data from GitHub."),i.a.createElement(m.MDXTag,{name:"p",components:n},i.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://platform.github.community/t/query-repo-contents-with-graphql-api/1896"}},"https://platform.github.community/t/query-repo-contents-with-graphql-api/1896")),i.a.createElement(m.MDXTag,{name:"p",components:n},"Here is an example of what it looks like."),i.a.createElement(m.MDXTag,{name:"pre",components:n},i.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst crypto = require('crypto');\nconst GithubGraphQLApi = require('node-github-graphql');\nconst path = require('path');\n\nconst github = new GithubGraphQLApi({\n  token: process.env.GITHUB_API_KEY,\n});\n\nexports.sourceNodes = async ({\n  boundActionCreators,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = boundActionCreators\n\n  const result = await github.query(`\n    {\n      repository(owner: \"department-of-veterans-affairs\" , name: \"vets.gov-team\"){\n        id\n        name\n        object (expression: \"master:Work Practices\"){\n          ... on Tree {\n            entries {\n              oid\n              name\n              object {\n                ... on Tree {\n                  entries {\n                    oid\n                    name\n                    object {\n                      ... on Blob {\n                        text\n                      }\n                    }\n                  }\n                }\n                ... on Blob {\n                  text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  `);\n}\n")),i.a.createElement("h4",{id:"create-a-gatsby-node-for-the-pages"},"Create a Gatsby Node for the pages"),i.a.createElement(m.MDXTag,{name:"p",components:n},"After that we have to create a Node so that Gatsby can add it to the GraphQL data system.\nThere are notes in the below code which shows what is required and what is optional.\nYou may add custom properties that will be available in GraphQL."),i.a.createElement(m.MDXTag,{name:"pre",components:n},i.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nconst crypto = require('crypto');\nconst GithubGraphQLApi = require('node-github-graphql');\nconst path = require('path');\n\nconst github = new GithubGraphQLApi({\n  token: process.env.GITHUB_API_KEY,\n});\n\nexports.sourceNodes = async ({\n  boundActionCreators,\n  getNode,\n  hasNodeChanged,\n}) => {\n  const { createNode } = boundActionCreators\n\n  const result = await github.query(`\n    {\n      repository(owner: \"department-of-veterans-affairs\" , name: \"vets.gov-team\"){\n        id\n        name\n        object (expression: \"master:Work Practices\"){\n          ... on Tree {\n            entries {\n              oid\n              name\n              object {\n                ... on Tree {\n                  entries {\n                    oid\n                    name\n                    object {\n                      ... on Blob {\n                        text\n                      }\n                    }\n                  }\n                }\n                ... on Blob {\n                  text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  `);\n\n  result\n    .data\n    .repository\n    .object\n    .entries.filter(item => item.name.endsWith('.md')).forEach(({ name, oid, object }) => {\n      createNode({\n        id: oid, <---- required\n        parent: null, <---- required\n        children: [], <---- required\n        internal: { <---- required\n          type: 'GithubAPI', <---- define type for look up in GraphQL\n          contentDigest: crypto  <---- required\n            .createHash('md5')\n            .update(object.text)\n            .digest('hex'),\n          mediaType: 'text/markdown', <---- required\n          content: object.text, <---- required\n          directory: dir, <---- custom properties\n          name: name.replace('.md', ''), <---- custom properties\n        }\n      });\n    });\n}\n")),i.a.createElement("h4",{id:"use-gatsby-transformer-remark-to-convert-the-markdown-data-into-an-html-document"},"Use gatsby-transformer-remark to convert the markdown data into an html document"),i.a.createElement(m.MDXTag,{name:"p",components:n},"When we did a ",i.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"createNode")," we set the ",i.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"mediaType: 'text/markdown'"),". This will automatically convert the markdown using ",i.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"gatsby-transformer-remark"),"."),i.a.createElement("h3",{id:"create-pages-using-the-createpages-lifecycle-hook"},"Create pages using the createPages lifecycle hook"),i.a.createElement(m.MDXTag,{name:"p",components:n},"After everything is set and we have all our pages in GraphQL. We can now create pages using our new data. Here is an example."),i.a.createElement(m.MDXTag,{name:"pre",components:n},i.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nresult.data.allMarkDown.edges.forEach(async ({ node }) => {\n  createPage({\n    path: `/${node.fields.slug.toLowerCase().replace(/ /g, '-')}/`,\n    component: path.resolve('./src/layouts/external-layout.js'),\n    context: {\n      id: node.id,\n      name: node.fields.slug,\n    },\n  })\n})\n")))},n}(i.a.Component),u={}},347:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},348:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(13),s=t.n(r),c=t(351),i=(t(133),t(134),t(135),t(17),t(347)),m=t(349);function p(){return o.a.createElement(m.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function l(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(m.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var u=t(350),g=t.n(u);function h(e){var n=e.location,t=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:t.items}))):null}function b(e){var n=e.children,t=e.location;return o.a.createElement(c.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return b}),b.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-documentation-guide-external-doc-page-mdx-38b38e0f0fd898ace157.js.map