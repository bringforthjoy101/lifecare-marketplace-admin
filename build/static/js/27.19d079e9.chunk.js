(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[27],{2280:function(e,t,n){"use strict";n.r(t);var r=n(30),a=n(1),c=n(697),s=n(496),o=n(22),i=n.n(o),u=n(47),l=n(0),d=n(839),j=n(495),p=n(88),m=n(29),b=n.n(m),f=n(1171),h=n(1027),O=n(522),v=n(504),x=n(498),g=n(505),w=n(1034),N=n(491),y=n(1028),k=n(518),S=n(535),T=n(131),C=n(579),I=n(586),E=n(687),L=n(6),A=function(e){var t=e.products,n=(e.stepper,e.deleteCartItem),c=e.dispatch,s=(e.addToWishlist,e.deleteWishlistItem,e.getCartItems,Object(d.g)()),o=t.reduce((function(e,t){return e+t.amount}),0),m=Object(a.useState)(""),A=Object(r.a)(m,2),D=A[0],P=A[1],G=Object(a.useState)({amount:o,products:t,studentId:D}),_=Object(r.a)(G,2),q=_[0],R=_[1];Object(a.useEffect)((function(){c(Object(I.c)()),R(Object(l.a)(Object(l.a)({},q),{},{studentId:D.value}))}),[c,D]);var F,J=Object(p.c)((function(e){return e.students})),U=function(){var e=Object(u.a)(i.a.mark((function e(n,r){var a,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),console.log({errors:r}),!r||r.length){e.next=16;break}return console.log({orderData:q}),a=JSON.stringify(q),e.prev=5,e.next=8,Object(T.a)({url:"/orders/create",method:"POST",body:a},c);case 8:u=e.sent,console.log({response:u}),u.data.status?(Object(T.l)("Great job!",u.data.message,"success"),c(Object(I.c)()),c(Object(E.c)()),R({amount:o,products:t,studentId:null===D||void 0===D?void 0:D.value}),s.push("/apps/ecommerce/shop")):(Object(T.l)("Oops!",u.data.message,"error"),c(Object(E.c)()),R({amount:o,products:t,studentId:null===D||void 0===D?void 0:D.value}),s.push("/apps/ecommerce/shop")),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.error({error:e.t0});case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(L.jsxs)("div",{className:"list-view product-checkout",children:[Object(L.jsx)("div",{className:"checkout-items",children:t.length?t.map((function(e){return Object(L.jsxs)(v.a,{className:"ecommerce-card",children:[Object(L.jsx)("div",{className:"item-img",children:Object(L.jsx)(j.b,{to:"/apps/ecommerce/product/".concat(e.id),children:Object(L.jsx)("img",{className:"img-fluid",src:e.image,alt:e.name})})}),Object(L.jsxs)(x.a,{children:[Object(L.jsxs)("div",{className:"item-name",children:[Object(L.jsx)("h6",{className:"mb-0",children:Object(L.jsx)(j.b,{to:"/apps/ecommerce/product/".concat(e.id),children:e.name})}),Object(L.jsx)("div",{className:"item-rating",children:Object(L.jsx)("ul",{className:"unstyled-list list-inline",children:new Array(5).fill().map((function(t,n){return Object(L.jsx)("li",{className:"ratings-list-item mr-25",children:Object(L.jsx)(f.a,{className:b()({"filled-star":n+1<=e.rating,"unfilled-star":n+1>e.rating})})},n)}))})})]}),Object(L.jsxs)("div",{className:"item-quantity",children:[Object(L.jsx)("span",{className:"quantity-title mr-50",children:"Qty"}),Object(L.jsx)(C.a,{value:e.qty,min:1,max:10,dispatch:c,productId:e.id,size:"sm",style:{width:"7rem",height:"2.15rem"}})]})]}),Object(L.jsxs)("div",{className:"item-options text-center",children:[Object(L.jsx)("div",{className:"item-wrapper",children:Object(L.jsxs)("div",{className:"item-cost",children:[Object(L.jsxs)("h4",{className:"item-price",children:["\u20a6",(e.price*e.qty).toLocaleString()]}),e.hasFreeShipping?Object(L.jsx)(g.a,{className:"shipping",children:Object(L.jsx)(w.a,{color:"light-success",pill:!0,children:"Free Shipping"})}):null]})}),Object(L.jsxs)(N.a,{className:"mt-1 remove-wishlist",color:"light",onClick:function(){return c(n(e.id))},children:[Object(L.jsx)(h.a,{size:14,className:"mr-25"}),Object(L.jsx)("span",{children:"Remove"})]})]})]},e.name)})):Object(L.jsx)("h4",{children:"Your cart is empty"})}),Object(L.jsx)("div",{className:"checkout-options",children:Object(L.jsx)(v.a,{children:Object(L.jsx)(x.a,{children:Object(L.jsxs)(S.AvForm,{onSubmit:U,children:[Object(L.jsxs)(y.a,{children:[Object(L.jsx)(k.a,{for:"studentId",children:"Student"}),Object(L.jsx)(O.a,{theme:T.j,className:"react-select",classNamePrefix:"select",defaultValue:D,options:(F=J.allData,console.log(F),F.map((function(e){return{value:e.id,label:"".concat(e.firstName," ").concat(e.lastName," ").concat(e.otherName," (\u20a6").concat(e.wallet.toLocaleString(),")")}}))),isClearable:!1,onChange:P})]}),Object(L.jsx)("hr",{}),Object(L.jsxs)("div",{className:"price-details",children:[Object(L.jsx)("ul",{className:"list-unstyled",children:Object(L.jsxs)("li",{className:"price-detail",children:[Object(L.jsx)("div",{className:"detail-title detail-total",children:"Total"}),Object(L.jsxs)("div",{className:"detail-amt font-weight-bolder",children:["\u20a6",o.toLocaleString()]})]})}),Object(L.jsx)(N.a.Ripple,{color:"primary",classnames:"btn-next place-order",block:!0,type:"submit",children:"Place Order"})]})]})})})})]})},D=(n(500),n(499),n(502),n(503),n(1155),n(530),n(1025),n(1046),n(1050));n(595),t.default=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(null),n=Object(r.a)(t,2),o=n[0],i=n[1],u=Object(p.b)(),l=Object(p.c)((function(e){return e.ecommerce}));Object(a.useEffect)((function(){u(Object(E.f)())}),[]);var d=[{id:"cart",title:"Cart",subtitle:"Your Cart Items",icon:Object(L.jsx)(D.a,{size:18}),content:Object(L.jsx)(A,{stepper:o,dispatch:u,products:l.cart,getCartItems:E.f,addToWishlist:E.b,deleteCartItem:E.d,deleteWishlistItem:E.e})}];return Object(L.jsxs)(a.Fragment,{children:[Object(L.jsx)(s.a,{breadCrumbTitle:"Checkout",breadCrumbParent:"eCommerce",breadCrumbActive:"Checkout"}),Object(L.jsx)(c.a,{ref:e,steps:d,className:"checkout-tab-steps",instance:function(e){return i(e)},options:{linear:!1}})]})}},586:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return p})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return b})),n.d(t,"h",(function(){return f}));n(0);var r=n(22),a=n.n(r),c=n(47),s=n(131),o=n(509),i=n.n(o),u=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)({url:"/students",method:"GET"},t);case 2:if(!((n=e.sent)&&n.data.data&&n.data.status)){e.next=8;break}return e.next=6,t({type:"GET_ALL_DATA",data:n.data.data});case 6:e.next=10;break;case 8:console.log(n),Object(s.l)("Oops!","Something went wrong.","error");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c,o,i,u,l,d,j,p,m,b,f,h,O,v,x,g,w;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c=t.q,o=void 0===c?"":c,i=t.perPage,u=void 0===i?10:i,l=t.number,void 0===l?"":l,d=t.page,j=void 0===d?1:d,p=t.status,m=void 0===p?null:p,b=t.className,f=void 0===b?null:b,h=t.level,O=void 0===h?null:h,v=t.group,x=void 0===v?null:v,g=o.toLowerCase(),w=e.filter((function(e){var t;return(e.studentId.toLowerCase().includes(g)||e.firstName.toLowerCase().includes(g)||(null===(t=e.lastName)||void 0===t?void 0:t.toString().toLowerCase().includes(g))||e.type.toLowerCase().includes(g))&&e.class===(f||e.class)&&e.level===(O||e.level)&&e.group===(x||e.group)&&e.status===(m||e.status)})),r({type:"GET_FILTERED_STUDENT_DATA",data:Object(s.i)(w,u,j),totalPages:w.length,params:t});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)({url:"/students/get-detail/".concat(e),method:"GET"},n);case 2:if(r=t.sent,console.log(r),!(r&&r.data&&r.data.status)){t.next=9;break}return t.next=7,n({type:"GET_STUDENT_DETAILS",studentDetails:r.data.data});case 7:t.next=11;break;case 9:console.log(r),Object(s.l)("Oops!","Something went wrong.","error");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){var t=e.studentId,n=e.narration,r=e.amount,o=e.type;return function(){var e=Object(c.a)(a.a.mark((function e(c){var i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=JSON.stringify({studentId:t,narration:n,amount:r,type:o}),e.next=3,Object(s.a)({url:"/students/wallet",method:"POST",body:i},c);case 3:u=e.sent,console.log({response:u}),u&&u.data.status?Object(s.l)("Good!","Funds of ".concat(r," was successfully ").concat("credit"===o?"added":"deducted","!."),"success"):(console.log(u),Object(s.l)("Oops!","Somthing went wrong with your network.","error"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)({url:"/students/delete/".concat(e),method:"GET"},n);case 2:if(!(r=t.sent)||!r.data.status){t.next=7;break}return t.abrupt("return",r.data);case 7:console.log(r),Object(s.l)("Oops!","Something went wrong.","error");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c,o,u,l,d,j,p,m;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=t.q,o=void 0===c?"":c,u=t.perPage,l=void 0===u?10:u,d=t.page,j=void 0===d?1:d,p=null===o||void 0===o?void 0:o.toLowerCase(),m=null===e||void 0===e?void 0:e.filter((function(e){var t,n,r,a;return(null===e||void 0===e||null===(t=e.transactionId)||void 0===t||null===(n=t.toLowerCase())||void 0===n?void 0:n.includes(p))||(null===(r=i()(e.createdAt).format("lll"))||void 0===r||null===(a=r.toLowerCase())||void 0===a?void 0:a.includes(p))})),n.next=5,r({type:"GET_STUDENT_TRANSACTIONS",data:Object(s.i)(m,l,j),totalPages:m.length,params:t});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},b=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c,o,u,l,d,j,p,m;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=t.q,o=void 0===c?"":c,u=t.perPage,l=void 0===u?10:u,d=t.page,j=void 0===d?1:d,p=o.toLowerCase(),m=e.filter((function(e){return e.orderNumber.toLowerCase().includes(p)||i()(e.createdAt).format("lll").toLowerCase().includes(p)})),n.next=5,r({type:"GET_STUDENT_ORDERS",data:Object(s.i)(m,l,j),totalPages:m.length,params:t});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},f=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=JSON.stringify({status:t}),n.next=3,Object(s.a)({url:"/students/update/".concat(e),method:"POST",body:c},r);case 3:if(!(o=n.sent)){n.next=17;break}if(console.log(o),!o.data.status){n.next=14;break}return n.next=9,r(u());case 9:return n.next=11,r(d(e));case 11:Object(s.l)("Good!","".concat(o.data.message,"."),"success"),n.next=15;break;case 14:Object(s.l)("Oops!","".concat(o.data.message,"."),"error");case 15:n.next=18;break;case 17:Object(s.l)("Oops!","Something went wrong with your network.","error");case 18:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},595:function(e,t,n){}}]);
//# sourceMappingURL=27.19d079e9.chunk.js.map