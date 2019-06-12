(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{309:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return u}),a.d(n,"_frontmatter",function(){return g});a(42);var t=a(43),o=a.n(t),m=a(3),r=a.n(m),c=a(2),l=a.n(c),s=a(4),i=a(354),p={},u=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=i.a,a}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return l.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},l.a.createElement("h1",{id:"http-headers-used-on-vagov"},"HTTP Headers used on VA.gov"),l.a.createElement(s.MDXTag,{name:"hr",components:n}),l.a.createElement("h2",{id:"overview"},"Overview"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"HTTP headers control browser behavior"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Browser behavior is a front end concern"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Shared responsibility between devops and front end",l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"configuration"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"management"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"user experience"))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Typically",l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"devops responsible for the how (e.g. Terraform)"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"front end responsible for the why (e.g. security, caching behavior)")))),l.a.createElement(s.MDXTag,{name:"hr",components:n}),l.a.createElement("h2",{id:"http-example"},"HTTP Example"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"raw request and response")),l.a.createElement(s.MDXTag,{name:"pre",components:n},l.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-mermaidjs"}},"graph TB\n    subgraph HTTP\n      F[HTTP <br/>Headers]\nsubgraph HTTP Body\n       G[HTML<br />Head]\n       A[HTML Body]\n       end\n    end\n")),l.a.createElement(s.MDXTag,{name:"hr",components:n}),l.a.createElement("h2",{id:"http-request-example"},"HTTP Request Example"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"GET /health-care/ HTTP/1.1"),l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"action to perform, resource location, http version"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"GET"),", ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"POST"),", ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"PUT"),", ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"DELETE")))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Host: www.va.gov")," - derived from URI"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Connection: keep-alive"),l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"HTTP persistent connection"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"reduces latency and traffic by reusing TCP connection"))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Upgrade-Insecure-Requests: 1"),l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"supports ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Content-Security-Policy: upgrade-insecure-requests")),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"basically tells server to redirect http requests to https"))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"User-Agent: ...")," - identifying information about client software e.g. OS, version")),l.a.createElement(s.MDXTag,{name:"hr",components:n}),l.a.createElement("h2",{id:"http-request-example-continued"},"HTTP Request Example continued"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Accepts: ..."),l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"MIME types supported"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Server chooses one as the ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Content-Type")," on the response"))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Accept-Encoding: gzip, defat, br")," - supported compression algorithms"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Accept-Language: en-US,en;q=0.9"),l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"supported language and localization preference"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"q=0.9")," expresses order of preference")))),l.a.createElement(s.MDXTag,{name:"hr",components:n}),l.a.createElement("h2",{id:"http-response-example"},"HTTP Response Example"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"HTTP/1.1 200 OK")," - response version and status code"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Date: ...")),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"x-amz-...: ...")," -  Amazon custom response headers"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Referrer-Policy: no-referrer-when-downgrade"),l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"determines ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Referer")," header behavior i.e. previous page link"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"no-referrer-when-downgrade")," is default behavior- sends previous page link when security protocol is the same"))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Strict-Transport-Security: ..."),l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"tells the browser to only connect to website via https"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"impacts all future connections to a site")))),l.a.createElement(s.MDXTag,{name:"hr",components:n}),l.a.createElement("h2",{id:"http-response-example-continued"},"HTTP Response Example continued"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"X-Content-Type-Options: no-sniff"),l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"follow the mime-types in the http content-type"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"only applies to scripts and styles right now"))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"X-Frame-Options: deny"),l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"determines if browser can render page in a frame"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"prevents clickjacking attacks"))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"X-XSS-Protection: 1; report=/csp-report"),l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"used by older browsers- tells them to stop loading the page if cross-site scripting attack is detected"))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Content-Encoding: gzip")," - encoding used on body"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Set-Cookie: ...")," - cookie from server")),l.a.createElement(s.MDXTag,{name:"hr",components:n}),l.a.createElement("h2",{id:"http-response-example-continued-2"},"HTTP Response Example continued 2"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Transfer-Encoding: chunked"),l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"form of encoding used between nodes (hop-by-hop)"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"chunked: ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Content-Length")," is unknown"))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Connection: Keep-alive")," - see request example")),l.a.createElement(s.MDXTag,{name:"hr",components:n}),l.a.createElement("h2",{id:"cache-control-response"},"Cache Control Response"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Cache-Control: public, max-age=86400"),l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"can be stored by any cache"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"private")," indicates response can be cached but contains user specific info"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"max-age=86400")," - number of minutes cache can be used before checking if updated (60 days)"))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Etag: [hash]"),l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"file hash used when checking if file is updated"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"when matched, server will return status code ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"304 Not Modified"))))),l.a.createElement(s.MDXTag,{name:"hr",components:n}),l.a.createElement("h2",{id:"cache-control-request"},"Cache Control Request"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Cache-Control: no-cache")," & ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Pragma: no-cache"),l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"HTTP 1.1 and 1.0"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"check if resource has changed using ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ETag")," or ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Last-Modified")))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"If-None-Match: [hash]")," & ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"If-Modified-Since: [date]"),l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"when ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"max-age")," is reached, browser includes in request"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"[date]")," header is used only if ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"[hash]")," is not supported")))),l.a.createElement(s.MDXTag,{name:"hr",components:n}),l.a.createElement("h2",{id:"cross-origin-resource-sharing-cors"},"Cross-Origin Resource Sharing (CORS)"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Applies to all XHR requests not on the same origin"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"CORS headers are returned by the server allowing it to control a range of permissions",l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Allow-Origin: https://www.va.gov")," - if allowed origin doesn't match the current origin, then the browser will not load the resource",l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"... has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.")),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"VA.gov is configured to only add this header when the request contains an origin that matches our whitelist"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Server ",l.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"li"},"can")," block the request- ours do not opting to always return the resource")))))),l.a.createElement(s.MDXTag,{name:"hr",components:n}),l.a.createElement("h2",{id:"cross-origin-resource-sharing-cors-options"},"Cross-Origin Resource Sharing (CORS) OPTIONS"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Preflight checks are required for methods that can cause change: POST, DELETE, UPDATE"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"OPTIONS request",l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Request-Headers")," - list of headers client intends to send"))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"OPTIONS response",l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Allow-Methods: GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS")),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Allow-Headers: x-key-inflection")),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Expose-Headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset")))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"If any of these permissions don't match the intended request, the browser will cancel it")),l.a.createElement(s.MDXTag,{name:"hr",components:n}),l.a.createElement("h2",{id:"cross-origin-resource-sharing-cors-other-directives"},"Cross-Origin Resource Sharing (CORS) Other directives"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Vary: Origin, Access-Control-Request-Headers, Access-Control-Request-Method"),l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"indicates that response will vary depending on the value of these headers"))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Other controls: ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Allow-Methods: GET"),", ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Countrol-Max-Age: 0"),", ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Allow-Credentials: true"))),l.a.createElement(s.MDXTag,{name:"hr",components:n}),l.a.createElement("h2",{id:"content-security-policy-csp"},"Content Security Policy (CSP)"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"can be an HTTP header or an HTML meta tag"),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"whitelist of valid sources of scripts",l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"script-src: http://search.usa.gov")))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"can set set up to report CSP violations")),l.a.createElement(s.MDXTag,{name:"hr",components:n}),l.a.createElement("h2",{id:"configs"},"Configs"),l.a.createElement(s.MDXTag,{name:"ul",components:n},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"CSP",l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-prod.yml"}},"prod")),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-staging.yml"}},"staging")),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-dev.yml"}},"dev")))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"CORS (requires manual deployment)",l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-prod/main.tf"}},"prod")),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-staging/main.tf"}},"staging")),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-dev/main.tf"}},"dev")))),l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"cache-control",l.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/d928cbfab6fd791c3b05464bc759a0cd9b4cd6b2/ansible/deployment/roles/deploy-static-assets/tasks/upload-public.yml"}},"prod"))))))},n}(l.a.Component),g={}},353:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},354:function(e,n,a){"use strict";var t=a(2),o=a.n(t),m=a(13),r=a.n(m),c=a(357),l=(a(133),a(134),a(135),a(17),a(353)),s=a(355);function i(){return o.a.createElement(s.b,{query:"157057713",render:function(e){return o.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:l})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(s.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var g=a(356),d=a.n(g);function E(e){var n=e.location,a=d.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(u,{items:a.items}))):null}function T(e){var n=e.children,a=e.location;return o.a.createElement(c.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(E,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return T}),T.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-http-headers-mdx-7ba8d1bb2ce7c4784320.js.map