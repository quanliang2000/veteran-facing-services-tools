(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{347:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return s}),t.d(n,"_frontmatter",function(){return l});t(8),t(7),t(4),t(9),t(10);var a=t(1),o=t.n(a),i=t(2),m=t(333);var r={},s=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).layout=m.a,t}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},r,t),components:n},o.a.createElement("h1",{id:"advanced-tutorial"},"Advanced tutorial"),o.a.createElement(i.MDXTag,{name:"p",components:n},"Previous: ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./form-tutorial-intermediate"}},"Intermediate tutorial")),o.a.createElement("h2",{id:"using-common-definitions"},"Using Common Definitions"),o.a.createElement(i.MDXTag,{name:"p",components:n},"All of our forms share schemas with the back-end through ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-json-schema"),", the repository where we store JSON Schemas for validating data submitted to a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-api")," API endpoint. Assuming you've created one of those schemas, the next step is to incorporate that into your form, along with other common definitions we've built."),o.a.createElement("h2",{id:"adding-your-schema"},"Adding your schema"),o.a.createElement(i.MDXTag,{name:"p",components:n},"Assuming you've created your form using our form scaffolding generator, you should have some commented out lines in your ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"config/form.js")," file:"),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// import fullSchema from 'vets-json-schema/dist/VIC-schema.json';\n\n// ...code omitted...\n\n// const { } = fullSchema.properties;\n\n// const { } = fullSchema.definitions;\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"If you uncomment those lines and update the import path to match your schema's file name, you can start pulling in individual definitions and properties to use in your form. We try to use the properties from the shared schema as much as possible, since it helps keep the front-end and back-end in sync and avoid validation errors in production. For example, if you want to import an ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," field from your schema, you can do something like this:"),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import fullSchema from 'vets-json-schema/dist/VIC-schema.json';\n\n// ...code omitted...\n\nconst {\n  email\n} = fullSchema.properties;\n\n// const { } = fullSchema.definitions;\n\nconst formConfig = {\n   // ...code omitted...\n   page1: {\n     path: 'first-page',\n     title: 'First Page',\n     uiSchema: {\n       email: {\n         'ui:title': 'My field label'\n       }\n     },\n     schema: {\n       type: 'object',\n       properties: {\n         email\n       }\n     }\n   }\n   // ...code omitted...\n};\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"Here we're using Javascript's object shorthand syntax to set the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," property to the object from the shared schema properties. That way we know we're using the same field name and using the same definition type as what will be used by the back-end. Note that we still need to be careful that we include all the fields we need from ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullSchema"),"."),o.a.createElement("h2",{id:"using-a-common-front-end-definition"},"Using a common front-end definition"),o.a.createElement(i.MDXTag,{name:"p",components:n},"We have a collection of common definitions and fields on the front-end for you to use in your form. Let's try using our common full name field:"),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import fullSchema from 'vets-json-schema/dist/VIC-schema.json';\nimport fullNameUI from '../../common/schemaform/definitions/fullName';\n// ...code omitted...\n\nconst {\n  veteranFullName\n} = fullSchema.properties;\n\nconst {\n  fullName\n} = fullSchema.definitions;\n\nconst formConfig = {\n  // ...code omitted...\n  definitions: {\n    fullName\n  },\n  // ...code omitted...\n    page1: {\n      path: 'first-page',\n      title: 'First Page',\n      uiSchema: {\n        veteranFullName: fullNameUI\n      },\n      schema: {\n        type: 'object',\n        properties: {\n          veteranFullName\n        }\n      }\n    }\n   // ...code omitted...\n};\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"There are a few things going on here. One, we've pulled the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullName")," definition from ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullSchema"),". JSON Schema's method of code reuse has you put definitions in a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"definitions")," object in the schema, then reference them with a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"$ref")," property, so we have to account for that on the front-end. We can do that by importing it from ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullSchema.definitions")," and adding it to the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"definitions")," object in our form config object."),o.a.createElement(i.MDXTag,{name:"p",components:n},"Second, we've imported ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullNameUI")," from our common front-end definitions. For this field, we just have some ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," configuration that sets labels and widget types. Other fields are more complex, and may require you to call a function to generate the right configuration, and possibly import something for the regular ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," object as well."),o.a.createElement(i.MDXTag,{name:"p",components:n},"Finally, in the code you can see that we're using ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullNameUI")," in the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," object, and we're using ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"veteranFullName")," like we used ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"email")," previously."),o.a.createElement("h2",{id:"modifying-common-definitions"},"Modifying common definitions"),o.a.createElement(i.MDXTag,{name:"p",components:n},"Often you'll need to slightly modify common definitions on the front-end to change a label or some conditional logic. The way we typically do that is to use our data utilities to set values on the schema. For example, say we needed to make our ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"veteranFullName")," field expand underneath another field:"),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { set } from 'platform/utilities/data';\nimport fullSchema from 'vets-json-schema/dist/VIC-schema.json';\nimport fullNameUI from '../../common/schemaform/definitions/fullName';\n// ...code omitted...\n\nconst {\n  veteranFullName\n} = fullSchema.properties;\n\nconst {\n  fullName\n} = fullSchema.definitions;\n\nconst formConfig = {\n   // ...code omitted...\n  definitions: {\n    fullName\n  },\n  // ...code omitted...\n    page1: {\n      path: 'first-page',\n      title: 'First Page',\n      uiSchema: {\n        myField: {\n          'ui:title': 'My field',\n          'ui:widget': 'yesNo'\n        },\n        veteranFullName: set('ui:options.expandUnder', 'myField', fullNameUI)\n      },\n      schema: {\n        type: 'object',\n        properties: {\n          myField: { type: 'boolean' },\n          veteranFullName\n        }\n      }\n    }\n   // ...code omitted...\n};\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"We're using one of the available data utilities to set the expandUnder value for fullNameUI in a way that doesn't modify the existing fullNameUI object. All of the data functions in ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"platform/utilities/data")," treat objects as immutable, not modifying anything you pass in to them, so you can reuse ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fullNameUI")," in another spot in your form without worrying about having to remove the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:options")," configuration we added."),o.a.createElement("h2",{id:"things-to-watch-out-for"},"Things to watch out for"),o.a.createElement(i.MDXTag,{name:"p",components:n},"The point of having these common definitions and sharing a schema between the front-end and back-end is to encourage consistency in our forms and to reduce errors when submitting a form to a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-api")," endpoint. But following the guide above won't completely prevent those issues. Here are some things to keep in mind:"),o.a.createElement(i.MDXTag,{name:"ul",components:n},o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Since we're importing individual fields from ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"fullSchema"),", it can be easy to miss required field rules, since we often import those directly. Make sure you're marking all the necessary fields as required in your form config."),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Importing individual fields makes it easy to group them in ways specific to the front-end, so make sure if you are grouping things, you're using property names prefixed with ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"view:")," to remove that grouping before submitting.")),o.a.createElement(i.MDXTag,{name:"p",components:n},"Next: ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/forms/save-in-progress"}},"Setting up Save in Progress")))},a}(o.a.Component),l={}}}]);
//# sourceMappingURL=component---src-pages-forms-form-tutorial-advanced-mdx-22a237e3e8394663c5f0.js.map