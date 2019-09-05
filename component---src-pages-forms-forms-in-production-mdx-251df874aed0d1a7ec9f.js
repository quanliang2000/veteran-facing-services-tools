(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{351:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return s}),n.d(a,"_frontmatter",function(){return c});n(8),n(7),n(4),n(9),n(10);var t=n(1),o=n.n(t),r=n(2),i=n(333);var m={},s=function(e){var a,n;function t(a){var n;return(n=e.call(this,a)||this).layout=i.a,n}return n=e,(a=t).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n,t.prototype.render=function(){var e=this.props,a=e.components,n=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,n),components:a},o.a.createElement("h1",{id:"forms-in-production"},"Forms in production"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Previous: ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"./forms/save-in-progress"}},"Setting up Save in Progress")),o.a.createElement(r.MDXTag,{name:"p",components:a},"Now that you have a form in production, making future changes requires some extra care."),o.a.createElement("h2",{id:"changing-your-form-schema"},"Changing your form schema"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Once you're in production and you're also using the save in progress functionality, you have a dilemma when you want to change some fields or some validation on your form. Since there are forms that are saved, if you change the structure of the form, the saved data may no longer match and result in confusing validation errors for a user. Similarly, if validation changes, a user might have already gone past that field and won't know how to fix the new error."),o.a.createElement(r.MDXTag,{name:"p",components:a},'To address this issue, we have the ability to write "migrations" for form data. This way, you can update a user\'s data to match the new structure, as well as move their position in the form back, if they need to adjust something. Migrations are functions, run in a sequence, based on the "version" of the form, which is saved along with the form data.'),o.a.createElement(r.MDXTag,{name:"p",components:a},"Migrations go in the form config object:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"const formConfig = {\n   ...\n   version: 1,\n   migrations: [\n     ({ formData, metadata, formId }) => {\n       // do something\n       return {\n         formData,\n         metadata\n       };\n     }\n   ]\n   ...\n};\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"We typically start at version 0 and increment each time we need to add a migration. Migrations are functions that get ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"formData"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"metadata"),", and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"formId")," as arguments. And they must return the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"formData")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"metadata"),", with any changes that they have made. For example, here is a migration that the health care application uses to convert an old url:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"({ formData, metadata }) => {\n  const url = metadata.returnUrl || metadata.return_url;\n  let newMetadata = metadata;\n\n  if (url === '/household-information/child-information') {\n    newMetadata = _.set('returnUrl', '/household-information/dependent-information', metadata);\n  }\n\n  return { formData, metadata: newMetadata };\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"If the current return URL (which is the URL a user will return to when the load a saved form) matches the outdated one, we update it. The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"formData")," is not changed in this case."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Another example from the health care application was to fix a bug in our form structure:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"(savedData) => {\n  const newData = savedData;\n  newData.formData = _.unset('isSpanishHispanicLatino', savedData.formData);\n\n  if (typeof _.get('view:demographicCategories.isSpanishHispanicLatino', newData.formData) === 'undefined') {\n    newData.formData = _.set('view:demographicCategories.isSpanishHispanicLatino', false, newData.formData);\n    return newData;\n  }\n\n  return newData;\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"In this example, we're moving an incorrectly located ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"isSpanishHispanicLatino")," flag and setting it in the right spot."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Writing migrations is not very common, but you may need to do it if you end up modifying a form that's already in production."))},t}(o.a.Component),c={}}}]);
//# sourceMappingURL=component---src-pages-forms-forms-in-production-mdx-251df874aed0d1a7ec9f.js.map