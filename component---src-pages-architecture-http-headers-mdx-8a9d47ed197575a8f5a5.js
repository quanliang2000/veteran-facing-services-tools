(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{280:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return u}),a.d(n,"_frontmatter",function(){return g});a(42);var t=a(43),o=a.n(t),m=a(3),r=a.n(m),l=a(2),c=a.n(l),s=a(4),i=a(311),p={},u=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=i.a,a}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return c.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},c.a.createElement(s.MDXTag,{name:"h1",components:n},"HTTP Headers used on VA.gov"),c.a.createElement(s.MDXTag,{name:"hr",components:n}),c.a.createElement(s.MDXTag,{name:"h2",components:n},"Overview"),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"HTTP headers control browser behavior"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Browser behavior is a front end concern"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Shared responsibility between devops and front end",c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"configuration"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"management"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"user experience"))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Typically",c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"devops responsible for the how (e.g. Terraform)"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"front end responsible for the why (e.g. security, caching behavior)")))),c.a.createElement(s.MDXTag,{name:"hr",components:n}),c.a.createElement(s.MDXTag,{name:"h2",components:n},"HTTP Example"),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"raw request and response")),c.a.createElement(s.MDXTag,{name:"pre",components:n},c.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-mermaidjs"}},"graph TB\n    subgraph HTTP\n      F[HTTP <br/>Headers]\nsubgraph HTTP Body\n       G[HTML<br />Head]\n       A[HTML Body]\n       end\n    end\n")),c.a.createElement(s.MDXTag,{name:"hr",components:n}),c.a.createElement(s.MDXTag,{name:"h2",components:n},"HTTP Request Example"),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"GET /health-care/ HTTP/1.1"),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"action to perform, resource location, http version"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"GET"),", ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"POST"),", ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"PUT"),", ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"DELETE")))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Host: www.va.gov")," - derived from URI"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Connection: keep-alive"),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"HTTP persistent connection"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"reduces latency and traffic by reusing TCP connection"))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Upgrade-Insecure-Requests: 1"),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"supports ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Content-Security-Policy: upgrade-insecure-requests")),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"basically tells server to redirect http requests to https"))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"User-Agent: ...")," - identifying information about client software e.g. OS, version")),c.a.createElement(s.MDXTag,{name:"hr",components:n}),c.a.createElement(s.MDXTag,{name:"h2",components:n},"HTTP Request Example continued"),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Accepts: ..."),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"MIME types supported"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Server chooses one as the ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Content-Type")," on the response"))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Accept-Encoding: gzip, defat, br")," - supported compression algorithms"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Accept-Language: en-US,en;q=0.9"),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"supported language and localization preference"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"q=0.9")," expresses order of preference")))),c.a.createElement(s.MDXTag,{name:"hr",components:n}),c.a.createElement(s.MDXTag,{name:"h2",components:n},"HTTP Response Example"),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"HTTP/1.1 200 OK")," - response version and status code"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Date: ...")),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"x-amz-...: ...")," -  Amazon custom response headers"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Referrer-Policy: no-referrer-when-downgrade"),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"determines ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Referer")," header behavior i.e. previous page link"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"no-referrer-when-downgrade")," is default behavior- sends previous page link when security protocol is the same"))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Strict-Transport-Security: ..."),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"tells the browser to only connect to website via https"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"impacts all future connections to a site")))),c.a.createElement(s.MDXTag,{name:"hr",components:n}),c.a.createElement(s.MDXTag,{name:"h2",components:n},"HTTP Response Example continued"),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"X-Content-Type-Options: no-sniff"),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"follow the mime-types in the http content-type"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"only applies to scripts and styles right now"))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"X-Frame-Options: deny"),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"determines if browser can render page in a frame"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"prevents clickjacking attacks"))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"X-XSS-Protection: 1; report=/csp-report"),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"used by older browsers- tells them to stop loading the page if cross-site scripting attack is detected"))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Content-Encoding: gzip")," - encoding used on body"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Set-Cookie: ...")," - cookie from server")),c.a.createElement(s.MDXTag,{name:"hr",components:n}),c.a.createElement(s.MDXTag,{name:"h2",components:n},"HTTP Response Example continued 2"),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Transfer-Encoding: chunked"),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"form of encoding used between nodes (hop-by-hop)"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"chunked: ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Content-Length")," is unknown"))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Connection: Keep-alive")," - see request example")),c.a.createElement(s.MDXTag,{name:"hr",components:n}),c.a.createElement(s.MDXTag,{name:"h2",components:n},"Cache Control Response"),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Cache-Control: public, max-age=86400"),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"can be stored by any cache"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"private")," indicates response can be cached but contains user specific info"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"max-age=86400")," - number of minutes cache can be used before checking if updated (60 days)"))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Etag: [hash]"),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"file hash used when checking if file is updated"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"when matched, server will return status code ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"304 Not Modified"))))),c.a.createElement(s.MDXTag,{name:"hr",components:n}),c.a.createElement(s.MDXTag,{name:"h2",components:n},"Cache Control Request"),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Cache-Control: no-cache")," & ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Pragma: no-cache"),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"HTTP 1.1 and 1.0"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"check if resource has changed using ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ETag")," or ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Last-Modified")))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"If-None-Match: [hash]")," & ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"If-Modified-Since: [date]"),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"when ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"max-age")," is reached, browser includes in request"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"[date]")," header is used only if ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"[hash]")," is not supported")))),c.a.createElement(s.MDXTag,{name:"hr",components:n}),c.a.createElement(s.MDXTag,{name:"h2",components:n},"Cross-Origin Resource Sharing (CORS)"),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Applies to all XHR requests not on the same origin"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"CORS headers are returned by the server allowing it to control a range of permissions",c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Allow-Origin: https://www.va.gov")," - if allowed origin doesn't match the current origin, then the browser will not load the resource",c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"... has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.")),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"VA.gov is configured to only add this header when the request contains an origin that matches our whitelist"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Server ",c.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"li"},"can")," block the request- ours do not opting to always return the resource")))))),c.a.createElement(s.MDXTag,{name:"hr",components:n}),c.a.createElement(s.MDXTag,{name:"h2",components:n},"Cross-Origin Resource Sharing (CORS) OPTIONS"),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Preflight checks are required for methods that can cause change: POST, DELETE, UPDATE"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"OPTIONS request",c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Request-Headers")," - list of headers client intends to send"))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"OPTIONS response",c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Allow-Methods: GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS")),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Allow-Headers: x-key-inflection")),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Expose-Headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset")))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"If any of these permissions don't match the intended request, the browser will cancel it")),c.a.createElement(s.MDXTag,{name:"hr",components:n}),c.a.createElement(s.MDXTag,{name:"h2",components:n},"Cross-Origin Resource Sharing (CORS) Other directives"),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Vary: Origin, Access-Control-Request-Headers, Access-Control-Request-Method"),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"indicates that response will vary depending on the value of these headers"))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Other controls: ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Allow-Methods: GET"),", ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Countrol-Max-Age: 0"),", ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Access-Control-Allow-Credentials: true"))),c.a.createElement(s.MDXTag,{name:"hr",components:n}),c.a.createElement(s.MDXTag,{name:"h2",components:n},"Content Security Policy (CSP)"),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"can be an HTTP header or an HTML meta tag"),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"whitelist of valid sources of scripts",c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"script-src: http://search.usa.gov")))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"can set set up to report CSP violations")),c.a.createElement(s.MDXTag,{name:"hr",components:n}),c.a.createElement(s.MDXTag,{name:"h2",components:n},"Configs"),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"CSP",c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-prod.yml"}},"prod")),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-staging.yml"}},"staging")),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-dev.yml"}},"dev")))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"CORS (requires manual deployment)",c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-prod/main.tf"}},"prod")),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-staging/main.tf"}},"staging")),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-dev/main.tf"}},"dev")))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"cache-control",c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/d928cbfab6fd791c3b05464bc759a0cd9b4cd6b2/ansible/deployment/roles/deploy-static-assets/tasks/upload-public.yml"}},"prod"))))))},n}(c.a.Component),g={}},306:function(e,n,a){var t;e.exports=(t=a(308))&&t.default||t},307:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},308:function(e,n,a){"use strict";a.r(n);var t=a(18),o=a.n(t),m=a(2),r=a.n(m),l=a(13),c=a.n(l),s=a(94),i=a(9),p=function(e){var n=e.location,a=i.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(s.a,o()({location:n,pageResources:a},a.json))};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},n.default=p},309:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}}]}}}},310:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"}]},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},311:function(e,n,a){"use strict";var t=a(3),o=a.n(t),m=a(307),r=a(2),l=a.n(r),c=a(13),s=a.n(c),i=a(312),p=a.n(i),u=a(68),g=a.n(u),d=(a(306),l.a.createContext({})),T=function(e){return l.a.createElement(d.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};T.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};a(17),a(133),a(134),a(135);var E=a(309);function h(){return l.a.createElement(T,{query:"157057713",render:function(e){return l.a.createElement(M,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:E})}function M(e){var n=e.items;return n.length?l.a.createElement("ul",{className:"menu-list"},n.map(function(e){return l.a.createElement("li",{key:e.name},!!e.items&&l.a.createElement("li",{key:e.name},l.a.createElement("h4",null,e.name),l.a.createElement(M,{items:e.items})),"componentList"===e.query&&l.a.createElement("li",{key:e.name},l.a.createElement("h4",null,e.name),l.a.createElement(h,null)),!!e.href&&l.a.createElement("li",{key:e.name},l.a.createElement(g.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&l.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var f=a(310),D=a.n(f);function X(e){var n=e.location,a=D.a.sections.find(function(e){return n.pathname.includes("/"+e.href)});return l.a.createElement("aside",{className:"sidebar"},l.a.createElement("div",{className:"search"},l.a.createElement("div",{className:"input-wrap"},l.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,a.name),l.a.createElement(g.a,{className:"home-link",to:""},"Home"),l.a.createElement(M,{items:a.items})),!a&&l.a.createElement("ul",{className:"menu-list"},D.a.sections.map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(g.a,{to:e.href},e.name))})))}a(313);var N=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var a=n.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,n=e.children,a=e.location;return l.a.createElement(T,{query:"1044757290",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(X,{location:a}),l.a.createElement("div",{className:"ContentArea docSearch-content"},n))},data:m})},n}(l.a.Component);N.propTypes={children:s.a.node.isRequired};n.a=N}}]);
//# sourceMappingURL=component---src-pages-architecture-http-headers-mdx-8a9d47ed197575a8f5a5.js.map