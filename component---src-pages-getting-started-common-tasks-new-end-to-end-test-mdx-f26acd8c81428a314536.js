(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{389:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return c}),t.d(n,"_frontmatter",function(){return i});t(10),t(8),t(5),t(19),t(9);var a=t(1),o=t.n(a),s=t(2),r=t(397);var m={},c=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).layout=r.a,t}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,t),components:n},o.a.createElement("h1",{id:"write-an-end-to-end-test"},"Write an end-to-end test"),o.a.createElement(s.MDXTag,{name:"p",components:n},"Front end engineers use end-to-end (e2e) tests in ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website")," to validate multipage applications with client-side routing. They are primarily used to assert that:"),o.a.createElement(s.MDXTag,{name:"ul",components:n},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"client applications render their inputs"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"client-side navigation occurs when the required fields are populated")),o.a.createElement("h2",{id:"end-to-end-testing-overview"},"End-to-end testing overview"),o.a.createElement(s.MDXTag,{name:"ul",components:n},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-website")," uses ",o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://nightwatchjs.org"}},"Nightwatch")," to run the tests and provide the browser client"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"end-to-end tests are ",o.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"collocated in application folder")," with the application they test"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Two node apps run with the end-to-end tests:",o.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"mockapi.js")," - hosts mock responses (see ",o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#mocking-api-responses"}},"Mocking API responses"),")"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"test-server.js")," - builds a server that handles client side routes"))),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-website")," must be started before end-to-end tests are run"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-api")," should not be running when end-to-end tests are run")),o.a.createElement("h2",{id:"end-to-end-tests-conventions"},"End-to-end tests conventions"),o.a.createElement(s.MDXTag,{name:"p",components:n},o.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"00-main-test-file.e2e.spec.js")),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"const E2eHelpers = require('platform/testing/e2e/helpers')\nconst Timeouts = require('platform/testing/e2e/timeouts.js');\nconst MyApplicationHelpers = require('./my-application-helpers.js');\nconst testData = require('./schema/maximal-test.json');\nconst FormsTestHelpers = require('platform/testing/e2e/form-helpers');\n\n// export the test using E2eHelpers.createE2eTest\nmodule.exports = E2eHelpers.createE2eTest(client => {\n  // mock api responses\n  client.mockData({\n  // path to mock\n    path: '/v0/my-application',\n  // verb to mock\n    verb: 'post',\n  // mock response\n    value: {\n      formSubmissionId: '123fake-submission-id-567',\n      timestamp: '2016-05-16',\n    },\n  });\n\n  // use a comment to indicate what page is being tested\n  // Introduction page\n  client\n    .openUrl(`${E2eHelpers.baseUrl}/my-application`)\n    // use Timeouts constants\n    .waitForElementVisible('body', Timeouts.normal)\n    .assert.title('My Application Title | Veterans Affairs')\n    .click('.schemaform-start-button');\n\n  // disable scrolling\n  FormsTestHelpers.overrideFormsScrolling(client);\n\n  // assert navigation is successful\n  E2eHelpers.expectNavigateAwayFrom(client, '/introduction');\n\n  // Personal Information page.\n  client.expect.element('input[name=\"root_veteranFullName_first\"]').to.be\n    .visible;\n  // use functions from the helper file to perform all actions on the page\n  MyApplicationHelpers.completePersonalInformation(client, testData.data);\n  client.axeCheck('.main').click('.form-panel .usa-button-primary');\n  E2eHelpers.expectNavigateAwayFrom(\n    client,\n    '/my-application/personal-information',\n  );\n")),o.a.createElement(s.MDXTag,{name:"p",components:n},o.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"my-application-helpers.js")),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"const mock = require('platform/testing/e2e/mock-helpers');\nconst Timeouts = require('platform/testing/e2e/timeouts.js');\nconst Auth = require('platform/testing/e2e/auth.js');\nconst moment = require('moment');\n\nfunction completePersonalInformation(client, data) {\n  client\n    .waitForElementVisible(\n      'input[name=\"root_veteranFullName_first\"]',\n      Timeouts.normal,\n    )\n    .fill(\n      'input[name=\"root_veteranFullName_first\"]',\n      data.veteranFullName.first,\n    )\n    .fill('input[name=\"root_veteranFullName_last\"]', data.veteranFullName.last)\n}\n")),o.a.createElement(s.MDXTag,{name:"p",components:n},o.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"p"},"These are recommendations not requirements.")),o.a.createElement(s.MDXTag,{name:"ul",components:n},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"separate navigation from field input",o.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"use a ",o.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"main test file")," for navigation, assertions, and calls helpers"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"use a ",o.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"helper file")," for filling out forms"))),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"create separate, numbered ",o.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"main test files")," to organize tests by their focus:",o.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"00-all-fields.e2e.spec.js")," - required and optional fields"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"01-required.e2e.spec.js")," - only required fields"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"02-accessibility.e2e.spec.js")," - validates accessibility"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"03-auth.e2e.spec.js")," - validates authentication"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"04-cross-cutting-feature.e2e.spec.js")," - validates one feature used across several pages (e.g. save in progress)"))),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"export the end-to-end test using `E2eHelpers.createE2eTest()`- see [Helpers](#helpers)"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"group tests by pages and use a comment to indicate what page is being tested"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"mock all api responses before starting the test. See ",o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#mocking-api-responses"}},"Mocking API responses")),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"use ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"waitForElementVisible")," before interacting with any element on the page"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"use ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Timeouts")," constants for setting timeouts (",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"platform/testing/e2e/timeouts.js"),")"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"use helpers for filling data and performing actions on the page"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"perform ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"axeCheck")," on the main body of the application on each page - see ",o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#custom-nightwatch-commands"}},"Custom Nightwatch commands")),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"assert that each navigation is successful")),o.a.createElement("h2",{id:"mocking-api-responses"},"Mocking API responses"),o.a.createElement(s.MDXTag,{name:"p",components:n},"A mock server runs with the end-to-end tests to allow tests to make production-like calls."),o.a.createElement(s.MDXTag,{name:"ul",components:n},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/6d97a63bd60d79864661cc757814ca041648d5c9/src/platform/testing/e2e/nightwatch-commands/mockData.js#L12-L14"}},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"mockData(data, token = nul)")),o.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"custom Nighwatch command that mocks the data at the endpoint provided"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"mock server is started as part of the end-to-end testing script")))),o.a.createElement("h2",{id:"custom-nightwatch-commands"},"Custom Nightwatch commands"),o.a.createElement(s.MDXTag,{name:"p",components:n},"Nightwatch supports extending its client api with ",o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://nightwatchjs.org/guide/#writing-custom-commands"}},"custom commands"),". Custom commands are located in ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/platform/testing/e2e/nightwatch-commands")),o.a.createElement(s.MDXTag,{name:"p",components:n},o.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"p"},"Command commands are available on the Nightwatch client e.g. ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"em"},"client.axeCheck()"),". Below are some of the commonly used custom Nightwatch commands.")),o.a.createElement(s.MDXTag,{name:"ul",components:n},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/axeCheck.js#L4-L7"}},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"axeCheck(selector)"))," - uses the ",o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/dequelabs/axe-core/blob/master/doc/developer-guide.md"}},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"axe-core"))," library to run a series of tests to check for accessibility of content and functionality for DOM nodes in the selector"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/clickIf.js#L4-L7"}},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"clickIf(selector, predicate, ...predicateArguments)"))," - clicks the input at the selector when the predicate returns true"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/fill.js#L5-L6"}},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"fill(selector, value, callback)"))," - clears the current value and sets to the value provided"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/fillAddress.js#L2-L5"}},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"fillAddress(baseName, address}"),")")," - fills an address widget with the value provided"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/343d77e2d7509cdcecee4b41c723d01ca0147881/src/platform/testing/e2e/nightwatch-commands/fillCheckbox.js#L4-L7"}},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"fillCheckbox(selector, predicate, ...predicateParams"),")")," - clicks the checkbox at the selector when the predicate returns true"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/fillDate.js#L4-L6"}},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"fillDate(fieldName, dateString}"),")")," - fills a date widget at the fieldName with the dateString provided e.g. 1990-1-28"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/nightwatch-commands/openUrl.js"}},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"openUrl(url, disableForesee = true)"))," - navigates to url and disables user feedback module (this can interfere with end-to-end tests)"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/selectRadio.js#L2-L6"}},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"selectRadio(fieldName, value)"))," - selects the provided option on yesNo widget at the field name"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/selectYesNo.js#L2-L6"}},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"selectYesNo(fieldName, predicate)"))," - selects the provided options on yesNo widget at the field name when the predicate returns true")),o.a.createElement("h2",{id:"helpers"},"Helpers"),o.a.createElement(s.MDXTag,{name:"p",components:n},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/platform/testing/e2e")," contains other useful helpers"),o.a.createElement(s.MDXTag,{name:"ul",components:n},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/helpers.js#L78-L81"}},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"createE2eTest(beginApplication)"))," - disables smooth scrolling and starts and ends test"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/selectYesNo.js#L2-L6"}},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"overrideSmoothFormsScrolling(client)")," and ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"overrideFormsScrolling(client)"))," - disables smooth scrolling during end-to-end testing"),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/helpers.js#L94"}},o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"expectNavigationAwayFrom(client, urlString)"))," - asserts the current page is not at the ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"urlString"))))},a}(o.a.Component),i={}},396:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},397:function(e,n,t){"use strict";var a=t(1),o=t.n(a),s=t(400),r=(t(131),t(132),t(94),t(6),t(396)),m=t(398);function c(){return o.a.createElement(m.b,{query:"157057713",render:function(e){return o.a.createElement(l,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:r})}function i(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(m.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function l(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(c,null)):o.a.createElement(i,{item:e,key:e.name})})):null}var p=t(399),d=t.n(p);function u(e){var n=e.location,t=d.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(l,{items:t.items}))):null}function g(e){var n=e.children,t=e.location;return o.a.createElement(s.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(u,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return g})}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-end-to-end-test-mdx-f26acd8c81428a314536.js.map