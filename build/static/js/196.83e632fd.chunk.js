(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[196],{1722:function(e,s,t){},2206:function(e,s,t){"use strict";t.r(s);var a=t(30),c=t(1),i=t(48),r=t.n(i),l=t(668),n=t(502),j=t(503),d=t(491),m=t(555),b=t(497),o=t(1025),x=t(692),h=t(1196),O=t(504),u=t(498),f=t(505),p=t(6),N=function(e){var s=e.data;return Object(p.jsx)(O.a,{children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)("h5",{className:"mb-1",children:"Polls"}),Object(p.jsx)(f.a,{className:"mb-0",children:"Who is the best actor in Marvel Cinematic Universe?"}),s.map((function(e){return Object(p.jsxs)("div",{className:"profile-polls-info mt-2",children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)(o.a,{type:"radio",id:"radio-".concat(e.name.toLowerCase()),name:"customRadio",label:e.name}),Object(p.jsx)("div",{className:"text-right",children:e.result})]}),Object(p.jsx)(x.a,{className:"my-50",value:e.result.replace("%"," ").trim()}),Object(p.jsx)("div",{className:"avatar-group my-1",children:e.votedUser.map((function(e){return Object(p.jsxs)(c.Fragment,{children:[Object(p.jsx)(b.a,{className:"pull-up",img:e.img,id:e.username.toLowerCase().split(" ").join("-"),imgHeight:"26",imgWidth:"26"}),Object(p.jsx)(h.a,{target:e.username.toLowerCase().split(" ").join("-"),placement:"top",children:e.username})]},e.username)}))})]},e.name)}))]})})},g=function(e){var s=e.data;return Object(p.jsx)(O.a,{children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)("h5",{className:"mb-75",children:"About"}),Object(p.jsx)(f.a,{children:s.about}),Object(p.jsxs)("div",{className:"mt-2",children:[Object(p.jsx)("h5",{className:"mb-75",children:"Joined:"}),Object(p.jsx)(f.a,{children:s.joined})]}),Object(p.jsxs)("div",{className:"mt-2",children:[Object(p.jsx)("h5",{className:"mb-75",children:"Lives:"}),Object(p.jsx)(f.a,{children:s.lives})]}),Object(p.jsxs)("div",{className:"mt-2",children:[Object(p.jsx)("h5",{className:"mb-75",children:"Email:"}),Object(p.jsx)(f.a,{children:s.email})]}),Object(p.jsxs)("div",{className:"mt-2",children:[Object(p.jsx)("h5",{className:"mb-75",children:"Website:"}),Object(p.jsx)(f.a,{children:s.website})]})]})})},v=t(29),w=t.n(v),y=t(1033),k=t(1142),C=t(1164),z=t(1046),P=t(518),L=function(e){return e.data.map((function(e){return Object(p.jsx)(O.a,{className:"post",children:Object(p.jsxs)(u.a,{children:[Object(p.jsxs)("div",{className:"d-flex justify-content-start align-items-center mb-1",children:[Object(p.jsx)(b.a,{className:"mr-1",img:e.avatar,imgHeight:"50",imgWidth:"50"}),Object(p.jsxs)("div",{className:"profile-user-info",children:[Object(p.jsx)("h6",{className:"mb-0",children:e.username}),Object(p.jsx)("small",{className:"text-muted",children:e.postTime})]})]}),Object(p.jsx)(f.a,{children:e.postText}),e.postImg?Object(p.jsx)("img",{src:e.postImg,alt:e.username,className:"img-fluid rounded mb-75"}):e.postVid?Object(p.jsx)("iframe",{src:"https://www.youtube.com/embed/6stlCkUDG_s",className:"w-100 rounded height-250 mb-50 border-0"}):null,Object(p.jsxs)(n.a,{className:"d-flex justify-content-start align-items-center flex-wrap pb-50 post-actions",children:[Object(p.jsxs)(j.a,{className:"d-flex justify-content-between justify-content-sm-start mb-2",sm:"6",children:[Object(p.jsxs)("div",{className:"d-flex align-items-center text-muted text-nowrap cursor-pointer",children:[Object(p.jsx)(y.a,{size:18,className:w()("mr-50",{"profile-likes":!0===e.youLiked})}),Object(p.jsx)("span",{children:e.likes})]}),Object(p.jsxs)("div",{className:"d-flex align-items-center",children:[Object(p.jsx)("div",{className:"avatar-group ml-1",children:e.likedUsers.map((function(e){return Object(p.jsxs)(c.Fragment,{children:[Object(p.jsx)(b.a,{className:"pull-up",img:e.avatar,id:e.username.toLowerCase().split(" ").join("-"),imgHeight:"26",imgWidth:"26"}),Object(p.jsx)(h.a,{target:e.username.toLowerCase().split(" ").join("-"),placement:"top",children:e.username})]},e.username)}))}),Object(p.jsx)("a",{href:"/",className:"text-muted text-nowrap ml-50",onClick:function(e){return e.preventDefault()},children:"+140 more"})]})]}),Object(p.jsxs)(j.a,{className:"d-flex justify-content-between justify-content-sm-end align-items-center mb-2",sm:"6",children:[Object(p.jsxs)("a",{href:"/",className:"text-nowrap",onClick:function(e){return e.preventDefault()},children:[Object(p.jsx)(k.a,{size:18,className:"text-body mr-50"}),Object(p.jsx)("span",{className:"text-muted mr-1",children:e.comments})]}),Object(p.jsxs)("a",{href:"/",className:"text-nowrap share-post",onClick:function(e){return e.preventDefault()},children:[Object(p.jsx)(C.a,{size:18,className:"text-body mx-50"}),Object(p.jsx)("span",{className:"text-muted mr-1",children:e.share})]})]})]}),e.detailedComments.map((function(e){return Object(p.jsxs)("div",{className:"d-flex align-items-start mb-1",children:[Object(p.jsx)(b.a,{img:e.avatar,className:"mt-25 mr-75",imgHeight:"34",imgWidth:"34"}),Object(p.jsxs)("div",{className:"profile-user-info w-100",children:[Object(p.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(p.jsx)("h6",{className:"mb-0",children:e.username}),Object(p.jsxs)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(p.jsx)(y.a,{size:18,className:w()("text-body",{"profile-likes":!0===e.youLiked})}),Object(p.jsx)("span",{className:"align-middle ml-25 text-muted",children:e.commentsLikes})]})]}),Object(p.jsx)("small",{children:e.comment})]})]},e.username)})),Object(p.jsxs)("fieldset",{className:"form-label-group mb-50",children:[Object(p.jsx)(z.a,{id:"add-comment-".concat(e.username),type:"textarea",rows:"3",placeholder:"Add Comment"}),Object(p.jsx)(P.a,{for:"add-comment-".concat(e.username),children:"Add Comment"})]}),Object(p.jsx)(d.a.Ripple,{color:"primary",size:"sm",children:"Post Comment"})]})},e.username)}))},W=t(1059),D=t(1159),F=t(1126),H=t(1124),A=t(1187),T=t(1108),U=t(641),S=t(1200),I=t(779),E=t(605),J=t(1053),R=t(1054),M=function(e){var s=e.data,t=Object(c.useState)(!1),i=Object(a.a)(t,2),r=i[0],l=i[1];return Object(p.jsxs)(O.a,{className:"profile-header mb-2",children:[Object(p.jsx)(U.a,{src:s.coverImg,alt:"User Profile Image",top:!0}),Object(p.jsx)("div",{className:"position-relative",children:Object(p.jsxs)("div",{className:"profile-img-container d-flex align-items-center",children:[Object(p.jsx)("div",{className:"profile-img",children:Object(p.jsx)("img",{className:"rounded img-fluid",src:s.avatar,alt:"Card image"})}),Object(p.jsxs)("div",{className:"profile-title ml-3",children:[Object(p.jsx)("h2",{className:"text-white",children:s.username}),Object(p.jsx)("p",{className:"text-white",children:s.designation})]})]})}),Object(p.jsx)("div",{className:"profile-header-nav",children:Object(p.jsxs)(S.a,{className:"justify-content-end justify-content-md-between w-100",expand:"md",light:!0,children:[Object(p.jsx)(d.a,{color:"",className:"btn-icon navbar-toggler",onClick:function(){return l(!r)},children:Object(p.jsx)(W.a,{size:21})}),Object(p.jsx)(I.a,{isOpen:r,navbar:!0,children:Object(p.jsxs)("div",{className:"profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0",children:[Object(p.jsxs)(E.a,{className:"mb-0",pills:!0,children:[Object(p.jsx)(J.a,{children:Object(p.jsxs)(R.a,{className:"font-weight-bold",active:!0,children:[Object(p.jsx)("span",{className:"d-none d-md-block",children:"Feed"}),Object(p.jsx)(D.a,{className:"d-block d-md-none",size:14})]})}),Object(p.jsx)(J.a,{children:Object(p.jsxs)(R.a,{className:"font-weight-bold",children:[Object(p.jsx)("span",{className:"d-none d-md-block",children:"About"}),Object(p.jsx)(F.a,{className:"d-block d-md-none",size:14})]})}),Object(p.jsx)(J.a,{children:Object(p.jsxs)(R.a,{className:"font-weight-bold",children:[Object(p.jsx)("span",{className:"d-none d-md-block",children:"Photos"}),Object(p.jsx)(H.a,{className:"d-block d-md-none",size:14})]})}),Object(p.jsx)(J.a,{children:Object(p.jsxs)(R.a,{className:"font-weight-bold",children:[Object(p.jsx)("span",{className:"d-none d-md-block",children:"Friends"}),Object(p.jsx)(A.a,{className:"d-block d-md-none",size:14})]})})]}),Object(p.jsxs)(d.a,{color:"primary",children:[Object(p.jsx)(T.a,{className:"d-block d-md-none",size:14}),Object(p.jsx)("span",{className:"font-weight-bold d-none d-md-block",children:"Edit"})]})]})})]})})]})},G=t(1077),V=t(1171),_=function(e){var s=e.data;return Object(p.jsx)(O.a,{children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)("h5",{children:"Twitter Feeds"}),s.map((function(e,s){return Object(p.jsxs)("div",{className:w()("profile-twitter-feed",{"mt-1":0===s,"mt-2":0!==s}),children:[Object(p.jsxs)("div",{className:"d-flex justify-content-start align-items-center mb-1",children:[Object(p.jsx)(b.a,{className:"mr-1",img:e.imgUrl,imgHeight:"40",imgWidth:"40"}),Object(p.jsxs)("div",{className:"profile-user-info",children:[Object(p.jsx)("h6",{className:"mb-0",children:e.title}),Object(p.jsxs)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(p.jsx)("small",{className:"text-muted",children:e.id}),Object(p.jsx)(G.a,{size:14})]})]}),Object(p.jsx)("div",{className:"profile-star ml-auto",children:Object(p.jsx)(V.a,{size:18,className:w()("cursor-pointer",{"profile-favorite":!0===e.favorite})})})]}),Object(p.jsx)(f.a,{className:"mb-50",children:e.desc}),Object(p.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(p.jsx)("small",{children:e.tags})})]},s)}))]})})},q=function(e){var s=e.data;return Object(p.jsx)(O.a,{children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)("h5",{className:"mb-0",children:"Latest Photos"}),Object(p.jsx)(n.a,{children:s.map((function(e,s){return Object(p.jsx)(j.a,{md:"4",xs:"6",className:"profile-latest-img",children:Object(p.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(p.jsx)("img",{className:"img-fluid rounded",src:e.img,alt:"latest-photo"})})},s)}))})]})})},B=function(e){var s=e.data;return Object(p.jsx)(O.a,{children:Object(p.jsxs)(u.a,{className:"profile-suggestion",children:[Object(p.jsx)("h5",{className:"mb-2",children:"Suggested Pages"}),s.map((function(e,t){return Object(p.jsxs)("div",{className:w()("d-flex justify-content-start align-items-center",{"mb-1":t!==s.length-1}),children:[Object(p.jsx)(b.a,{className:"mr-1",img:e.avatar,imgHeight:40,imgWidth:40}),Object(p.jsxs)("div",{className:"profile-user-info",children:[Object(p.jsx)("h6",{className:"mb-0",children:e.username}),Object(p.jsx)("small",{className:"text-muted",children:e.subtitle})]}),Object(p.jsx)("div",{className:"profile-star ml-auto",children:Object(p.jsx)(V.a,{size:18,className:w()("cursor-pointer",{"profile-favorite":!0===e.favorite})})})]},t)}))]})})},K=t(1185),Q=function(e){var s=e.data;return Object(p.jsx)(O.a,{children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)("h5",{children:"Suggestions"}),s.map((function(e,s){return Object(p.jsxs)("div",{className:w()("d-flex justify-content-start align-items-center",{"mt-2":0===s,"mt-1":0!==s}),children:[Object(p.jsx)(b.a,{className:"mr-75",img:e.avatar,imgHeight:"40",imgWidth:"40"}),Object(p.jsxs)("div",{className:"profile-user-info",children:[Object(p.jsx)("h6",{className:"mb-0",children:e.name}),Object(p.jsx)("small",{className:"text-muted",children:e.mutualFriend})]}),Object(p.jsx)("div",{className:"ml-auto",children:Object(p.jsx)(d.a.Ripple,{className:"btn-icon",color:"primary",size:"sm",children:Object(p.jsx)(K.a,{size:14})})})]},s)}))]})})},X=t(496);t(937),t(1722),s.default=function(){var e=Object(c.useState)(null),s=Object(a.a)(e,2),t=s[0],i=s[1],b=Object(c.useState)(!1),o=Object(a.a)(b,2),x=o[0],h=o[1];return Object(c.useEffect)((function(){r.a.get("/profile/data").then((function(e){return i(e.data)}))}),[]),Object(p.jsxs)(c.Fragment,{children:[Object(p.jsx)(X.a,{breadCrumbTitle:"Profile",breadCrumbParent:"Pages",breadCrumbActive:"Profile"}),null!==t?Object(p.jsxs)("div",{id:"user-profile",children:[Object(p.jsx)(n.a,{children:Object(p.jsx)(j.a,{sm:"12",children:Object(p.jsx)(M,{data:t.header})})}),Object(p.jsxs)("section",{id:"profile-info",children:[Object(p.jsxs)(n.a,{children:[Object(p.jsxs)(j.a,{lg:{size:3,order:1},sm:{size:12},xs:{order:2},children:[Object(p.jsx)(g,{data:t.userAbout}),Object(p.jsx)(B,{data:t.suggestedPages}),Object(p.jsx)(_,{data:t.twitterFeeds})]}),Object(p.jsx)(j.a,{lg:{size:6,order:2},sm:{size:12},xs:{order:1},children:Object(p.jsx)(L,{data:t.post})}),Object(p.jsxs)(j.a,{lg:{size:3,order:3},sm:{size:12},xs:{order:3},children:[Object(p.jsx)(q,{data:t.latestPhotos}),Object(p.jsx)(Q,{data:t.suggestions}),Object(p.jsx)(N,{data:t.polls})]})]}),Object(p.jsx)(n.a,{children:Object(p.jsx)(j.a,{className:"text-center",sm:"12",children:Object(p.jsx)(d.a,{color:"primary",className:"border-0 mb-1 profile-load-more",size:"sm",onClick:function(){h(!0),setTimeout((function(){h(!1)}),2e3)},children:Object(p.jsx)(l.a,{tag:"div",blocking:x,loader:Object(p.jsx)(m.a,{color:"primary"}),children:"Load More"})})})})]})]}):null]})}},496:function(e,s,t){"use strict";var a=t(495),c=t(507),i=t(508),r=t(6);s.a=function(e){var s=e.breadCrumbTitle,t=e.breadCrumbParent,l=e.breadCrumbParent2,n=e.breadCrumbParent3,j=e.breadCrumbActive;return Object(r.jsxs)("div",{className:"content-header row",children:[Object(r.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(r.jsx)("div",{className:"row breadcrumbs-top",children:Object(r.jsxs)("div",{className:"col-12",children:[s?Object(r.jsx)("h2",{className:"content-header-title float-left mb-0",children:s}):"",Object(r.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(r.jsxs)(c.a,{children:[Object(r.jsx)(i.a,{tag:"li",children:Object(r.jsx)(a.b,{to:"/",children:"Home"})}),Object(r.jsx)(i.a,{tag:"li",className:"text-primary",children:t}),l?Object(r.jsx)(i.a,{tag:"li",className:"text-primary",children:l}):"",n?Object(r.jsx)(i.a,{tag:"li",className:"text-primary",children:n}):"",Object(r.jsx)(i.a,{tag:"li",active:!0,children:j})]})})]})})}),Object(r.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(r.jsx)("div",{className:"form-group breadcrum-right dropdown"})})]})}}}]);
//# sourceMappingURL=196.83e632fd.chunk.js.map