(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{340:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return c}),n.d(a,"_frontmatter",function(){return s});n(8),n(7),n(4),n(9),n(10);var t=n(1),o=n.n(t),m=n(2),r=n(333);var p={},c=function(e){var a,n;function t(a){var n;return(n=e.call(this,a)||this).layout=r.a,n}return n=e,(a=t).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n,t.prototype.render=function(){var e=this.props,a=e.components,n=function(e,a){if(null==e)return{};var n,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)n=m[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:a},o.a.createElement("h2",{id:"how-to-add-documents"},"How to Add Documents"),o.a.createElement(m.MDXTag,{name:"p",components:a},"This is the process of how you should add new pages and documents to this website."),o.a.createElement("h3",{id:"mdx-format"},"MDX Format"),o.a.createElement(m.MDXTag,{name:"p",components:a},"We will be using the .mdx format to create our documents.\nMDX is a format that lets you seamlessly use JSX in your Markdown documents.\nYou can import components, like interactive charts or notifs, and export metadata.\nThis makes writing long-form content with components a blast 🚀"),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://mdxjs.com/"}},"https://mdxjs.com/")),o.a.createElement("h3",{id:"adding-react-component-documentation"},"Adding React Component documentation"),o.a.createElement(m.MDXTag,{name:"p",components:a},"Adding React Components documentation in Formation."),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Take a look at the example MDX file at formation-react/src/components/AcceptTermsPrompt/AcceptTermsPrompt.mdx.\nYou can use this as a starter"))),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Create a .mdx file the same name as your component in the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"strong"},"formation-react/src/components")," folder, adjacent to your component.")),o.a.createElement(m.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"- components\n  - YourComponent.js\n  - YourComponent.mdx\n"))),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Add the required frontmatter at the top of the page")),o.a.createElement(m.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"  ---\n  title: AcceptTermsPrompt\n  name: AcceptTermsPrompt\n  ---\n"))),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},"**Restart the development server")),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"If you run into any errors or your page doesn't render correctly,\ntry to delete the .cache file and restart the server again"))),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"After you have your page setup you can add markdown and your component code."))),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Add descriptions to your PropTypes in your Component files")),o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},"We need to convert the propType comments to jsDoc format.\nThis will not show up in the propTypes definitions on your page if you\ndon't have it in a jsDoc format."),o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},"Here is an examples of how it should look:"),o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},"Changed code:"),o.a.createElement(m.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-javascript"}},"  YourComponent.propTypes = {\n    /**\n     * content shown as the actual terms and conditions\n     */\n    user: PropTypes.object,\n    /**\n     * cancel button click handler\n     */\n    onCancel: PropTypes.func\n  };\n")),o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},"It will look like this on the page."),o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"../../../images/proptypes.png",alt:"proptypes",title:"PropType Image"}}))),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Once this is all setup you can start adding your React Component and markdown to your file."))),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Start gatsby")),o.a.createElement(m.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"yarn develop\n"))),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"You should be able to see your component in the sidebar or go to the url.")),o.a.createElement(m.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"http://localhost:8000/yourcomponentnamelowercase\n")))),o.a.createElement("h3",{id:"adding-document-pages"},"Adding Document Pages"),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Create a .mdx file in ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"strong"},"src/pages")))),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Add the required frontmatter at the top of the page. You will need this if you\nwant it to display in the sidebar.")),o.a.createElement(m.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-markdown"}},"  // Your .mdx page\n  ---\n  title: How to Add Documents\n  ---\n"))),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"You have the option to create React Components and add them to the MDX file.\nReact components for pages should be located in src/components")))),o.a.createElement("h3",{id:"updating-the-sidebar"},"Updating the sidebar"),o.a.createElement(m.MDXTag,{name:"p",components:a},"After you've added a page, you may want to add it to the sidebar. At ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"src/sidebar.js"),", you'll find the layout for\nthe main site navigation and sidebar. You can add your page where it makes sense in the site's information architecture."),o.a.createElement(m.MDXTag,{name:"p",components:a},"There are examples in the sidebar file to follow. You'll need to add an object with ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"name")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"href")," properties\nfor regular links and you can also create nested sections by leaving out ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"href")," and adding an ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"items")," array to objects."),o.a.createElement("h3",{id:"graphql-sample-reference"},"GraphQl Sample Reference"),o.a.createElement(m.MDXTag,{name:"p",components:a},"  ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://www.gatsbyjs.org/docs/graphql-reference/"}},"https://www.gatsbyjs.org/docs/graphql-reference/")),o.a.createElement("h3",{id:"github-api-graphql-explorer"},"Github API GraphQL Explorer"),o.a.createElement(m.MDXTag,{name:"p",components:a},"  ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://developer.github.com/v4/explorer/"}},"https://developer.github.com/v4/explorer/")))},t}(o.a.Component),s={}}}]);
//# sourceMappingURL=component---src-pages-documentation-guide-doc-page-mdx-c43ead4fb8653a2a9474.js.map