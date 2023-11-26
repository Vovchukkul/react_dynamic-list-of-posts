(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(7),n=c.n(s),a=c(2),i=c(1),l=(c(13),c(14),c(15),c(3)),r=c.n(l),o=c(0),d=function(e){var t=e.posts,c=e.selectedPost,s=e.handlePostSelected;return Object(o.jsxs)("div",{"data-cy":"PostsList",children:[Object(o.jsx)("p",{className:"title",children:"Posts:"}),Object(o.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"has-background-link-light",children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){var t=(null===c||void 0===c?void 0:c.id)===e.id;return Object(o.jsxs)("tr",{"data-cy":"Post",children:[Object(o.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(o.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{type:"button","data-cy":"PostButton",className:r()("button is-link",{"is-light":!t}),onClick:function(){s(t?null:e)},children:t?"Close":"Open"})})]})}))})]})]})},j=c(8),u=(c(17),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),m="https://mate.academy/students-api";function b(e){return new Promise((function(t){setTimeout(t,e)}))}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),b(300).then((function(){return fetch(m+e,s)})).then((function(e){return e.json()}))}var O=function(e){return h(e)},f=function(e,t){return h(e,"POST",t)},x=function(e){return h(e,"DELETE")},N=function(e){var t=e.selectedPost,c=e.addNewComment,s=e.handleSetError,n=Object(i.useState)(""),l=Object(a.a)(n,2),d=l[0],j=l[1],u=Object(i.useState)(""),m=Object(a.a)(u,2),b=m[0],h=m[1],O=Object(i.useState)(""),x=Object(a.a)(O,2),N=x[0],p=x[1],v=Object(i.useState)(!1),y=Object(a.a)(v,2),g=y[0],S=y[1],C=Object(i.useState)(!1),E=Object(a.a)(C,2),w=E[0],P=E[1],k=Object(i.useState)(!1),T=Object(a.a)(k,2),F=T[0],L=T[1],I=Object(i.useState)(!1),U=Object(a.a)(I,2),B=U[0],D=U[1],M=function(){j(""),h(""),p("")};return Object(o.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){var n;if((e.preventDefault(),P(!d),L(!b),D(!N),d&&b&&N)&&(S(!0),t)){var a={postId:t.id,name:d,email:b,body:N};(n=a,f("/comments",n)).then((function(e){c(e),p("")})).catch((function(){return s()})).finally((function(){return S(!1)}))}},onReset:M,children:[Object(o.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(o.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:r()("input",{"is-danger":w}),onChange:function(e){P(!1),j(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-small is-left",children:Object(o.jsx)("i",{className:"fas fa-user"})}),w&&Object(o.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(o.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),w&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(o.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(o.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:r()("input",{"is-danger":F}),onChange:function(e){L(!1),h(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-small is-left",children:Object(o.jsx)("i",{className:"fas fa-envelope"})}),F&&Object(o.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(o.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),F&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(o.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:r()("textarea",{"is-danger":B}),onChange:function(e){D(!1),p(e.target.value)}})}),B&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit",className:r()("button is-link",{"is-loading":g}),children:"Add"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){return M},children:"Clear"})})]})]})},p=function(e){var t=e.selectedPost,c=Object(i.useState)([]),s=Object(a.a)(c,2),n=s[0],l=s[1],r=Object(i.useState)(!1),d=Object(a.a)(r,2),m=d[0],b=d[1],h=Object(i.useState)(!1),f=Object(a.a)(h,2),p=f[0],v=f[1],y=Object(i.useState)(!1),g=Object(a.a)(y,2),S=g[0],C=g[1],E=function(e){var t;b(!0),(t=e.id,O("/comments?postId=".concat(t))).then((function(){return l})).catch((function(){return v(!0)})).finally((function(){return b(!1)}))};Object(i.useEffect)((function(){t&&(v(!1),l([]),E(t))}),[t]);var w=function(e){(function(e){return x("/comments/".concat(e))})(e).then((function(){return l((function(t){return t.filter((function(t){return t.id!==e}))}))})).catch((function(){return v((function(e){return e}))}))};return t?Object(o.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(o.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(o.jsxs)("div",{className:"block",children:[Object(o.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(o.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(o.jsxs)("div",{className:"block",children:[m&&Object(o.jsx)(u,{}),p&&Object(o.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),0===n.length&&!m&&Object(o.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),0!==n.length&&!m&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"title is-4",children:"Comments:"}),n.map((function(e){return Object(o.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(o.jsxs)("div",{className:"message-header",children:[Object(o.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(o.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return w(e.id)},children:"delete button"})]}),Object(o.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]})}))]}),Object(o.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return C(!0)},children:"Write a comment"})]}),S&&Object(o.jsx)(N,{selectedPost:t,addNewComment:function(e){l((function(t){return[].concat(Object(j.a)(t),[e])}))},handleSetError:function(){v(!0)}})]})}):null},v=function(e){var t=e.users,c=e.handleUserSelect,s=e.selectedUser,n=Object(i.useState)(!1),l=Object(a.a)(n,2),d=l[0],j=l[1];return Object(i.useEffect)((function(){var e=function(e){e.target.closest(".dropdown")||j(!1)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),Object(o.jsxs)("div",{"data-cy":"UserSelector",className:r()("dropdown",{"is-active":d}),children:[Object(o.jsx)("div",{className:"dropdown-trigger",children:Object(o.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){j((function(e){return!e}))},children:[Object(o.jsx)("span",{children:s?s.name:"Choose a user"}),Object(o.jsx)("span",{className:"icon is-small",children:Object(o.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(o.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(o.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(o.jsx)("a",{href:"#user-".concat(e.id),className:"dropdown-item",onClick:function(){return function(e){c(e),j(!1)}(e)},children:e.name},e.id)}))})})]})},y=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(null),l=Object(a.a)(n,2),j=l[0],m=l[1],b=Object(i.useState)(null),h=Object(a.a)(b,2),f=h[0],x=h[1],N=Object(i.useState)(null),y=Object(a.a)(N,2),g=y[0],S=y[1],C=Object(i.useState)(!1),E=Object(a.a)(C,2),w=E[0],P=E[1],k=Object(i.useState)(!1),T=Object(a.a)(k,2),F=T[0],L=T[1];Object(i.useEffect)((function(){O("/users").then(s).catch((function(){L(!0)}))}),[]),Object(i.useEffect)((function(){j&&(P(!0),x([]),P(!1))}),[j]);var I=function(e){var t;e&&(S(null),P(!0),(t=e.id,O("/posts?userId=".concat(t))).then(x).catch((function(){return L(!0)})).finally((function(){return P(!1)})))};return Object(i.useEffect)((function(){j&&(L(!1),I(j))}),[j]),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"tile is-ancestor",children:[Object(o.jsx)("div",{className:"tile is-parent",children:Object(o.jsxs)("div",{className:"tile is-child box is-success",children:[Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(v,{users:c,handleUserSelect:function(e){m(e),S(null)},selectedUser:j})}),Object(o.jsxs)("div",{className:"block","data-cy":"MainContent",children:[F&&Object(o.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),j?Object(o.jsxs)(o.Fragment,{children:[w&&Object(o.jsx)(u,{}),!w&&f&&0===f.length&&Object(o.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),!w&&f&&f.length>0&&Object(o.jsx)(d,{posts:f,selectedPost:g,handlePostSelected:function(e){S(e)}})]}):Object(o.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"})]})]})}),g&&Object(o.jsx)("div",{"data-cy":"Sidebar",className:r()("tile","is-parent","is-8-desktop","Sidebar","Sidebar--open"),children:Object(o.jsx)("div",{className:"tile is-child box is-success ",children:g&&Object(o.jsx)(p,{selectedPost:g})})})]})})})};n.a.render(Object(o.jsx)(y,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4725ded6.chunk.js.map