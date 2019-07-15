(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{388:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return c}),a.d(n,"_frontmatter",function(){return p});a(10),a(8),a(5),a(19),a(9);var t=a(1),o=a.n(t),r=a(2),s=a(397);var m={},c=function(e){var n,a;function t(n){var a;return(a=e.call(this,n)||this).layout=s.a,a}return a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,t.prototype.render=function(){var e=this.props,n=e.components,a=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,a),components:n},o.a.createElement("h2",{id:"gatsby-configurations"},"Gatsby Configurations"),o.a.createElement("h3",{id:"why-we-chose-gatsby"},"Why we chose Gatsby"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Gatsby was effectively chosen because it gave us the flexibility to create\ndocumentation for React Components and also regular documentation for developers.\nWe wanted to be able to generate documentation that lived inside of the code and\nalso generate information on propTypes. We also wanted the flexibility of creating\nmarkdown files for our normal documentation. Gatsby's plugin eco-system gave us a\nlot of flexibilities to customize it how we want it."),o.a.createElement("h3",{id:"what-is-gatsby"},"What is Gatsby"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'"Gatsby is a blazing fast modern site generator for React."')),o.a.createElement(r.MDXTag,{name:"p",components:n},"Gatsby utilizes React, Node, and GraphQL to generate a blazing fast static websites.\nYou can find more information at ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org"}},"https://www.gatsbyjs.org"),"."),o.a.createElement("h3",{id:"our-custom-configurations"},"Our Custom Configurations"),o.a.createElement(r.MDXTag,{name:"p",components:n},"There are a few things that we wanted that Gatsby did not have out of the box.\nWe wanted to be able to document all our React components and generate PropType\ndocumentation. We also wanted to be able to transfer over all our markdown documentatation\nfrom ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets.gov-team")," repo. Using Gatsby plugin eco-system. Below are the plugins\nand directions on how we inplemented them."),o.a.createElement("h3",{id:"plugins"},"Plugins"),o.a.createElement(r.MDXTag,{name:"p",components:n},"All the plugins we use can be found in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gatsby-configs.js"),"."),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/@benjie/gatsby-mdx/?=gatsby-mdx"}},"gatsby-mdx")),o.a.createElement(r.MDXTag,{name:"blockquote",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"MDX is a new templating format which uses both JSX(React templating) and markdown.\nThis gaves us the best of both worlds. Being able to write markdown to generate\nquick documentation and use React components within that page."))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-plugin-sass/?=gatsby-plugin-sass"}},"gatsby-plugin-sass")),o.a.createElement(r.MDXTag,{name:"blockquote",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Be able to use Sass/Scss in our project."))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-transformer-react-docgen/?=gatsby-transformer-react-docgen"}},"gatsby-transformer-react-docgen")),o.a.createElement(r.MDXTag,{name:"blockquote",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Helps extracting information from React components, and generate documentation\nfrom it. This is created by Facebook. This is what is used for\n",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/styleguidist/react-styleguidist"}},"react-styleguidist"),"."))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-source-filesystem/"}},"gatsby-source-filesystem")),o.a.createElement(r.MDXTag,{name:"blockquote",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem."))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-remark-images/"}},"https://www.gatsbyjs.org/packages/gatsby-remark-images/")),o.a.createElement(r.MDXTag,{name:"blockquote",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"We are using this to add images to our .mdx pages. This allows us to add\nimages to the folder and use it directly into our .mdx pages.")))),o.a.createElement(r.MDXTag,{name:"hr",components:n}),o.a.createElement("h3",{id:"how-we-setup-gatsby-mdx"},"How we setup gatsby-mdx"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Plugin: ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/@benjie/gatsby-mdx"}},"https://www.gatsbyjs.org/packages/@benjie/gatsby-mdx"),"\nGuide: ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://gatsby-mdx.netlify.com/guides"}},"https://gatsby-mdx.netlify.com/guides")),o.a.createElement("h4",{id:"installation"},"Installation"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell"}},"yarn add gatsby-mdx\n")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-configs.js\n\nmodule.exports = {\n  plugins: [`gatsby-mdx`]\n};\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Once this is setup, you will be able to use both markdown and jsx on the page.\nMore information can be found on ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://mdxjs.com/"}},"https://mdxjs.com/")),o.a.createElement("h4",{id:"adding-a-specific-layout-for-your-pages"},"Adding a Specific layout for your pages"),o.a.createElement(r.MDXTag,{name:"p",components:n},"To add a specific layout to be used for the default pages. You need to change\nthe plugin to an Object with options like so."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Change this code:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"// gatsby-configs.js\n\nmodule.exports = {\n  plugins: [`gatsby-mdx`]\n};\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"To this code:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'// gatsby-configs.js\n\nmodule.exports = {\n  plugins: [\n    {\n      resolve: `gatsby-mdx`,\n      options: {\n        defaultLayouts: {\n          default: require.resolve("./src/layouts/SidebarLayout.jsx"),\n        }\n      }\n    },\n  ]\n};\n')),o.a.createElement("h4",{id:"adding-your-own-folders"},"Adding Your Own Folders"),o.a.createElement(r.MDXTag,{name:"p",components:n},"By default gatsby-mdx will only look in the src/pages folder.\nIn this project we needed a special folder for all our components.\nThis folder lives in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react/src/components"),".\nWe need to add some configurations to be able to do this."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Add the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"gatsby-source-filesystem")," plugin:")),o.a.createElement(r.MDXTag,{name:"p",components:n},"This plugin can be added multiple times in the plugins object.\nThis plugin is used for sourcing data into your Gatsby application\nfrom your local filesystem. Here we add a name and path to the\nformation-react/src/components folder. This will now be added to our GraphQL\ndatabase so we can use it in our project."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-configs.js\n\nplugins: [\n  {\n    resolve: `gatsby-source-filesystem`,\n    options: {\n      path: `../formation-react/src/components`,\n      name: 'components'\n    }\n  },\n]\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Creating Pages from GraphQL data:")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Now that we have this data in GraphQL, we need to tell Gatsby to make some\npages out of them. To do this we need to add some code to the gatsby-node.js\nfile. This is were you create pages or customize things before it get built."),o.a.createElement(r.MDXTag,{name:"p",components:n},"first we export createPages and then do a query to GraphQL. You can test it\nout at ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://localhost:8000/___graphql"}},"http://localhost:8000/___graphql"),". This is an interactive interface\nfor GraphQL. Here we are getting all the mdx pages and then we are checking if the\ndocument has a name property in the frontmatter. If it doesn't we won't create\na page for it."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-node.js\n\nexports.createPages = ({ graphql, actions }) => {\n  const { createPage } = actions;\n  return new Promise((resolve, reject) => {\n    resolve(\n      graphql(\n        `\n          {\n            allMdx {\n              edges {\n                node {\n                  id\n                  frontmatter {\n                    title\n                    name\n                  }\n                  parent {\n                    ... on File {\n                      name\n                      sourceInstanceName\n                    }\n                  }\n                  code {\n                    scope\n                  }\n                }\n              }\n            }\n          }\n        `\n      ).then(result => {\n        if (result.errors) {\n          console.log(result.errors)\n          reject(result.errors)\n        }\n\n        result.data.allMdx.edges.forEach(async ({ node }) => {\n          if (node.frontmatter.name) { <--- checking for frontmatter name property\n            createPage({\n              path: `/${node.parent.name.toLowerCase()}/`,\n              component: path.resolve('./src/layouts/module-components.js'),\n              context: {\n                id: node.id,\n                name: node.frontmatter.name,\n              },\n            })\n          }\n        })\n      })\n    )\n  })\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Sample of Query Results from Above Query:")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Here is a sample of what the output would be for the Query above. You'll notice\nthat we get more then just the MDX files in the project. Not sure why this is\nbut that is what we get back when doing the Query."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'{\n  "data": {\n    "allMdx": {\n      "edges": [\n        {\n          "node": {\n            "id": "db665b4f-22a1-5485-8ef9-4f66f0da7e1b",\n            "frontmatter": {\n              "title": "AcceptTermsPrompt",\n              "name": "AcceptTermsPrompt"\n            },\n            "parent": {\n              "name": "AcceptTermsPrompt",\n              "sourceInstanceName": "components"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "fdaeaef8-da4f-53d8-a981-0ef2e4a9acf0",\n            "frontmatter": {\n              "title": "AdditionalInfo",\n              "name": "AdditionalInfo"\n            },\n            "parent": {\n              "name": "AdditionalInfo",\n              "sourceInstanceName": "components"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "17c10940-f231-560f-a391-e3a3173f1ed2",\n            "frontmatter": {\n              "title": "",\n              "name": null\n            },\n            "parent": {},\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "3121c909-74b5-5ccc-9884-bd72709d7885",\n            "frontmatter": {\n              "title": "",\n              "name": null\n            },\n            "parent": {},\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "6d019eeb-8db4-56ce-8bd7-bf14e618d096",\n            "frontmatter": {\n              "title": "How to Add Documents and Components",\n              "name": null\n            },\n            "parent": {\n              "name": "how-to",\n              "sourceInstanceName": "pages"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "2503f180-5b43-5470-9665-cff9f512d7cd",\n            "frontmatter": {\n              "title": "This is the index",\n              "name": null\n            },\n            "parent": {\n              "name": "index",\n              "sourceInstanceName": "pages"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "51b7ecd7-76e7-5ceb-ac57-d2a9c92494de",\n            "frontmatter": {\n              "title": "Internal Tools",\n              "name": null\n            },\n            "parent": {\n              "name": "internal-tools",\n              "sourceInstanceName": "pages"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        },\n        {\n          "node": {\n            "id": "b683ccc8-0ddd-5b23-8b5c-0cc8e2889aa9",\n            "frontmatter": {\n              "title": "Notes on Writing MDX with Gatsby",\n              "name": null\n            },\n            "parent": {\n              "name": "new-component",\n              "sourceInstanceName": "pages"\n            },\n            "code": {\n              "scope": ""\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"You will need to create a path for the pages. This is done with the path property"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"createPage({\n  path: `/${node.parent.name.toLowerCase()}/`, <------- Create path here\n  component: path.resolve('./src/layouts/module-components.js'),\n  context: {\n    id: node.id,\n    name: node.frontmatter.name,\n  },\n})\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Set your component page layout"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"createPage({\n  path: `/${node.parent.name.toLowerCase()}/`,\n  component: path.resolve('./src/layouts/module-components.js'), <------- default layout\n  context: {\n    id: node.id,\n    name: node.frontmatter.name,\n  },\n})\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"In our createPage you will see a context property. This will be available on\nyour page for quering with GraphQL."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"createPage({\n  path: `/${node.parent.name.toLowerCase()}/`,\n  context: {\n    id: node.id, <--- available on your page for GraphQL queries\n    name: node.frontmatter.name, <--- available on your page for GraphQL queries\n  },\n})\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Now that we have that setup we need to add the layout for our components pages.\nIf you go to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/layouts/module-components.js")," you can seee how we setu our pages\nto be able to render MDX. Here is a sample of the JSX."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"  <MDXProvider components={{ code: MyCodeComponent }}>\n    <Layout>\n      <div className=\"content\">\n        {children}\n        <h2>{data.componentMetadata.displayName}</h2>\n        <p>{data.componentMetadata.docblock}</p>\n        <MDXRenderer tableOfContents={tableOfContents}>\n          {data.mdx.code.body}\n        </MDXRenderer>\n        <h2 style={{ marginTop: '2rem' }}>Props:</h2>\n        <PropsTable\n          propMetaData={data.componentMetadata.childrenComponentProp}/>\n      </div>\n    </Layout>\n  </MDXProvider>\n")),o.a.createElement("h3",{id:"how-do-we-automatically-generate-our-proptypes"},"How do we automatically generate our propTypes"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Since one of the big requirements for our component documents is PropType\ndefinitions, we had to make sure we can populate the propTypes dynamically.\nTo do this we are going to a module called\n",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/reactjs/react-docgen"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"react-docgen")),". This was created by\nFacebook to handle documentation. What it does is parse component files and\ngenerates data from your components into a json file. We will be using the\n",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-transformer-react-docgen/?=gatsby-transformer-react-docgen"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"gatsby-transformer-react-docgen")),"\nplugin to do this for us in gatsby. This will add the data into GraphQL so we\ncan query it in our pages."),o.a.createElement(r.MDXTag,{name:"p",components:n},"This is what the query looks like in our layout page. The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"childrenComponentProp"),"\nis were we get our propType definitions."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"export const pageQuery = graphql`\n  query($id: String!, $name: String!) {\n    mdx(id: { eq: $id }) {\n      id\n      code {\n        body\n      }\n      tableOfContents\n    }\n    componentMetadata(displayName: { eq: $name }) {\n      id\n      displayName\n      docblock\n      doclets\n      childrenComponentProp {\n        name\n        docblock\n        required\n        parentType {\n          name\n        }\n        type {\n          value\n        }\n        defaultValue {\n          value\n          computed\n        }\n      }\n      composes\n    }\n  }\n`;\n")),o.a.createElement("h3",{id:"adding-live-code"},"Adding Live Code"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Here is an example of how you add live editable code onto your page.\nNote: This has not been fully implemented on our pages yet. This is something\nwe need to explore further if we really wants to have this feature."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'import React, {Component} from "react";\nimport { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";\nimport { MDXProvider } from \'@mdx-js/tag\'\n\nconst MyCodeComponent = ({ children, ...props }) => (\n  <LiveProvider code={children}>\n    <LiveEditor />\n    <LiveError />\n    <LivePreview />\n  </LiveProvider>\n);\n\nexport default class MyPageLayout extends Component {\n  render() {\n    return <MDXProvider components={{code: MyCodeComponent}}>\n      <div>{this.props.children}</div>\n    </MDXProvider>\n  }\n}\n')),o.a.createElement("h3",{id:"image-plugin-for-mdx-files"},"Image plugin for MDX files"),o.a.createElement(r.MDXTag,{name:"p",components:n},"We are using a plugin to be able to use images in .mdx pages. This allows us\nto access the images with relative paths."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://gatsby-mdx.netlify.com/guides/using-gatsby-remark-images"}},"https://gatsby-mdx.netlify.com/guides/using-gatsby-remark-images")))},t}(o.a.Component),p={}},396:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},397:function(e,n,a){"use strict";var t=a(1),o=a.n(t),r=a(400),s=(a(131),a(132),a(94),a(6),a(396)),m=a(398);function c(){return o.a.createElement(m.b,{query:"157057713",render:function(e){return o.a.createElement(i,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(m.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function i(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(c,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var l=a(399),d=a.n(l);function g(e){var n=e.location,a=d.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(i,{items:a.items}))):null}function u(e){var n=e.children,a=e.location;return o.a.createElement(r.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return u})}}]);
//# sourceMappingURL=component---src-pages-gatsby-configurations-mdx-7d89074fea762300d2c1.js.map