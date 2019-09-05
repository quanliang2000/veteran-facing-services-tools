(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{388:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m}),t.d(n,"_frontmatter",function(){return l});t(8),t(7),t(4),t(9),t(10);var a=t(1),o=t.n(a),r=t(2),s=t(333);var c={},m=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).layout=s.a,t}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,t),components:n},o.a.createElement("h1",{id:"guidelines-for-good-scss--css"},"Guidelines for good SCSS / CSS"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Some guidelines for writing good CSS that scales well and doesn't make your colleagues ragey."),o.a.createElement("h2",{id:"use-low-specificity-selectors"},"Use low-specificity selectors"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The more specific the selector is, the less reusable the accompanying CSS is and/or the longer a selector you need to override it. (Or you add ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"!important")," in places you shouldn't.)"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The following should be used sparingly in CSS"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"id")," selectors."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Complex element/type selectors with attributes such as ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"button[type=button]")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"input[type=text]"),"."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Descendant combinators such as ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"#main ol li ul")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".process p a"),"."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Chaining class names. ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"button")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"button.lg"),")")),o.a.createElement(r.MDXTag,{name:"p",components:n},"High specificity selectors are more likely to create side effects, that have to be undone with more CSS rules or longer selectors."),o.a.createElement("h2",{id:"avoid-nesting-scss-selectors-prematurely"},"Avoid nesting SCSS selectors prematurely"),o.a.createElement(r.MDXTag,{name:"p",components:n},"SCSS compiles nested selectors into descendant combinators. For example:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"#content {\n  ol {\n    p {}\n  }\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Compiles to:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"#content ol p {}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"There's a high likelihood, however that your selectors don't need to be that long; ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ol p")," would provide the same styling. If the worry is being overly broad, you can get the same results using a class name. This is related to the previous point. Specific selectors are often caused by SCSS nesting."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Nesting selectors can be useful, however, when creating variants. For example:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},".button {\n  &-link {\n  }\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Compiles to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"button-link"),"."),o.a.createElement("h2",{id:"restrict-class-names-to-a-single-pattern-or-component-type"},"Restrict class names to a single pattern or component type."),o.a.createElement(r.MDXTag,{name:"p",components:n},"For example, don't use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".process")," for lists ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"and")," as a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"div")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"section")," type. Rules you introduce for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"div.process")," probably aren't related to those for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ol.process"),". Instead use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".list-process")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".section-process"),"."),o.a.createElement("h2",{id:"favor-descriptive-class-names-that-describe-what-the-class-does-or-the-kind-of-content-it-affects"},"Favor descriptive class names that describe what the class does or the kind of content it affects"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Class names such as ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".primary"),", or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".section")," are confusing and more likely to be misused by a colleague than ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".intro-text")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".sidebar"),"."),o.a.createElement("h2",{id:"use-a-product-specific-prefix-to-avoid-class-name-collisions"},"Use a product-specific prefix to avoid class name collisions"),o.a.createElement(r.MDXTag,{name:"p",components:n},"This keeps selector specificity low, while also restricting the side-effects of any one selector."),o.a.createElement("h2",{id:"dont-use-extend"},"Don't use @extend"),o.a.createElement(r.MDXTag,{name:"p",components:n},"SCSS ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@extend")," repeats every instance of the extended selector for the extendee selector. (This will be flagged by our Sass-lint configuration.)"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"h4 {\n  color: #c09;\n  font-size: 1.2rem;\n  font-weight: 100;\n}\n\nlabel {\n  @extend h4;\n  cursor: pointer;\n}\n\n.footer h4 {\n  display: inline;\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Compiles to:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"h4, label {\n  color: #c09;\n  font-size: 1.2rem;\n  font-weight: 100; }\n\nlabel {\n  cursor: pointer; }\n\n.header h4, .header label {\n  font-weight: bold; }\n\n.footer h4, .footer label {\n  display: inline; }\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Every instance of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"h4")," will also be applied to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"label"),". This is usually not the behavior we want, particularly across an entire code base."),o.a.createElement("h1",{id:"check-your-output"},"CHECK. YOUR. OUTPUT."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Periodially check your generated CSS files (JavaScript too!) to ensure that you didn't introduce bloat with your selectors or asset imports."),o.a.createElement(r.MDXTag,{name:"p",components:n},"True story: we reduced the size of our home page CSS by ~400K by removing SVG fonts. Our Webpack configuration included base64-encoded versions of SVG fonts which dramatically inflated our file size. This fact was discovered only after viewing the generated CSS files."))},a}(o.a.Component),l={}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-styles-mdx-ab7aed8172e626c55a77.js.map