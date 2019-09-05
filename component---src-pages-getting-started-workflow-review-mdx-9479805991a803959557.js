(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{367:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return l}),t.d(a,"_frontmatter",function(){return c});t(8),t(7),t(4),t(9),t(10);var n=t(1),o=t.n(n),m=t(2),r=t(333);var s={},l=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).layout=r.a,t}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e=this.props,a=e.components,t=function(e,a){if(null==e)return{};var t,n,o={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,t),components:a},o.a.createElement("h1",{id:"review"},"Review"),o.a.createElement("h2",{id:"submit-pull-request"},"Submit pull request"),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Pull master")," and ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"push feature branch")," to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"vets-website")," repository")),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"git pull origin master\ngit push origin 12345-issue-title\n")),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"Always ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"em"},"pull master")," into your feature branch before creating a pull request.")),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Create a pull request")," indicating that your code is ready for review."),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Request peer review")," on Github by tagging a fellow team member who you feel is qualified to review the code (this prevents the pull request from just sitting). You may also want to tag developers on other teams if the changes cover more than one application.")),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"Depending on the type of work done, you may need a product person to review and / or a developer to review. See ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Code%20Review%20Norms.md"}},"Code Review Norms")," for more information on how we do code reviews.")),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Use Zenhub to ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"connect")," pull request with a ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"linked issue"))),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"If you use the Zenhub Chrome ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd"}},"extension"),', there will be a "Connect this pull request with an existing issue" section at the bottom of Github\'s create pull request UI. You can click the "Connect with an issue" button to link the PR to the original issue in Zenhub.')),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"765px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/d16a8f63d7f7ad20701141bbe9190083/8cae0/connect-issue.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"9.934640522875817%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"PR deployment list",title:"PR deployment list",src:"/static/d16a8f63d7f7ad20701141bbe9190083/8cae0/connect-issue.png",srcSet:"/static/d16a8f63d7f7ad20701141bbe9190083/f4a45/connect-issue.png 259w,\n/static/d16a8f63d7f7ad20701141bbe9190083/ef0f6/connect-issue.png 518w,\n/static/d16a8f63d7f7ad20701141bbe9190083/8cae0/connect-issue.png 765w",sizes:"(max-width: 765px) 100vw, 765px",loading:"lazy"})))),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Change status")," of the ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"linked issue")," to ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"validate"))),o.a.createElement("h2",{id:"run-tests-and-compliance-scans"},"Run tests and compliance scans"),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Jenkins")," automatically ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"builds")," and ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"runs all tests")," your feature branch:",o.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"when the pull request is created"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"after a pull request is created when the feature branch is updated"))),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Test results are displayed on the pull request page")),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"699px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/4faf58036ea7db547dd9a3340a594242/8d69c/test-results.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.024320457796854%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"PR deployment list",title:"PR deployment list",src:"/static/4faf58036ea7db547dd9a3340a594242/8d69c/test-results.png",srcSet:"/static/4faf58036ea7db547dd9a3340a594242/f4a45/test-results.png 259w,\n/static/4faf58036ea7db547dd9a3340a594242/ef0f6/test-results.png 518w,\n/static/4faf58036ea7db547dd9a3340a594242/8d69c/test-results.png 699w",sizes:"(max-width: 699px) 100vw, 699px",loading:"lazy"})))),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"See ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"/getting-started/common-tasks/test"}},"Run Tests")," to run these tests locally")),o.a.createElement("h2",{id:"manually-test-change"},"Manually test change"),o.a.createElement(m.MDXTag,{name:"p",components:a},"Manual testing can involve some separate things:"),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Making sure the functionality works in the web browsers users are most likely to use"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Run the code on production-like environment. This could be done by spinning up a cloud instance that resembles production, or launching a container that is production like (such as a Docker image, etc.)"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"See if there are there any bugs or unexpected nuisances that users might encounter"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Does it meet the requirements?")),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"em"},"The person making the change is responsible")," for ensuring the change is adequately tested. Testing can include automated tests or manual testing by stakeholders on the review instance or staging build.")),o.a.createElement("h3",{id:"review-instance-automatic-creation"},"Review instance automatic creation"),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Jenkins")," automatically ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"deploys")," two remote ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"review instances")," of a ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"feature branch")," when a pull request is created:"),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},"an instance that just includes static pages content deployed by ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"va-bot"))),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},"an instance that includes static pages and the VA.gov client application deployed by ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"va-vfs-bot")),o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"Example of deployment links:")),o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"709px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/82df6872c5a0578f1ad667636438ad90/08b0d/PR-deployment-list.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.375176304654442%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"PR deployment list",title:"PR deployment list",src:"/static/82df6872c5a0578f1ad667636438ad90/08b0d/PR-deployment-list.png",srcSet:"/static/82df6872c5a0578f1ad667636438ad90/f4a45/PR-deployment-list.png 259w,\n/static/82df6872c5a0578f1ad667636438ad90/ef0f6/PR-deployment-list.png 518w,\n/static/82df6872c5a0578f1ad667636438ad90/08b0d/PR-deployment-list.png 709w",sizes:"(max-width: 709px) 100vw, 709px",loading:"lazy"})))))),o.a.createElement(m.MDXTag,{name:"p",components:a},"After a pull request is created, ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Jenkins")," will automatically ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"rebuild")," these instances when feature branch ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"changes are pushed")),o.a.createElement(m.MDXTag,{name:"p",components:a},"  ",o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"You will need your browser configured to access the vetsgov-internal domain via the SOCKS proxy. Please see the ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"/getting-started/internal-tools"}},"2. Access internal tools")," for detailed instructions.")),o.a.createElement("h3",{id:"review-instance-manual-creation"},"Review instance manual creation"),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Jenkins")," can be ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"manually triggered")," to build a ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"review instance"),"."),o.a.createElement(m.MDXTag,{name:"ol",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"Visit ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/vets-review-instance-deploy/"}},"http://jenkins.vetsgov-internal/job/vets-review-instance-deploy/")," and log in."),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},'Select "Build with Parameters"'),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"Specify the branch names for ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"api_branch")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"web_branch"),". These branches will be deployed together with the review instance."),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"When the process is completed, the URL for the review instance will be provided at the end of the output logs.")),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"A Jenkins job will run periodically and remove review instances for which the source branches no longer exist. To ensure that your instance is cleaned up appropriately, just delete the branch from the origin repository.")),o.a.createElement("h2",{id:"peer-review-and-merge"},"Peer review and merge"),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Get at least one ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"pull request approval")," from a peer"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"It is recommended not to merge at the end of the day or right before the weekend unless necessary."),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.blog/2016-04-01-squash-your-commits/"}},"Squash your commits")," and ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"merge")," into ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"master")),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Delete")," pull request branch")),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"See our team's ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Code%20Review%20Norms.md"}},"code review norms")," for details on how code review work and what needs to be checked.")))},n}(o.a.Component),c={}}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-review-mdx-9479805991a803959557.js.map