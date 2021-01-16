(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{184:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__OrlO3"}},185:function(t,e,n){},186:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),r=n.n(c),i=n(69),o=n.n(i),s=(n(82),n(83),n(8)),u=n(2),l=n(3),b=n(6),j=n(7),h=n(70),m=n(16),d=n(34),O=n(188);n(184);Object(O.a)();var f=d.a({name:d.b().required("Enter contact's name"),number:d.b().length(10,"Example: 0930939393").required("Enter contact's phone")}),p=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onInputChange=function(e){t.setState(Object(h.a)({},e.target.name,e.target.value))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsx)(m.d,{initialValues:{name:this.state.name,number:this.state.number},validationSchema:f,onSubmit:function(e,n){var a=e.name,c=e.number,r=n.setSubmitting;t.props.onSubmit({name:a,number:c,id:Object(O.a)()}),r(!1)},children:Object(a.jsxs)(m.c,{children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)(m.b,{type:"text",name:"name"})]}),Object(a.jsx)(m.a,{name:"name"}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)(m.b,{type:"tel",name:"number"})]}),Object(a.jsx)(m.a,{name:"number"}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(c.Component);n(185);function x(t){var e=t.initialValue,n=t.onFilterChange;return Object(a.jsx)("div",{children:Object(a.jsxs)("label",{children:["Find contacts by name",Object(a.jsx)("input",{type:"text",name:"name",value:e,onChange:function(t){n(t.target.value)}})]})})}x.defaultProps={initialValue:""};var v=n(76),g=n.n(v);function C(t){var e=t.contacts,n=t.onDeleteButtonClick;return Object(a.jsx)("ul",{children:e.map((function(t){return Object(a.jsxs)("li",{children:[t.name,": ",t.number,Object(a.jsx)("button",{type:"button",id:t.id,className:g.a.deleteButton,onClick:function(t){return n(t.target.id)},children:"Delete"})]},t.id)}))})}var y=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleSubmit=function(e){if(Object.values(t.state.contacts).some((function(t){return t.name===e.name})))return alert("".concat(e.name," already exists in your phonebook"));t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e])}}))},t.handleFilterChange=function(e){t.setState({filter:e})},t.handleDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getFilteredContactsList=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContactsList();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(p,{onSubmit:this.handleSubmit}),Object(a.jsx)("h2",{children:"Contacts"}),e.length>=1&&Object(a.jsx)(x,{initialValue:t,onFilterChange:this.handleFilterChange}),Object(a.jsx)(C,{contacts:e,onDeleteButtonClick:this.handleDeleteContact})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))},76:function(t,e,n){t.exports={deleteButton:"ContactList_deleteButton__5-_H0"}},83:function(t,e,n){}},[[186,1,2]]]);
//# sourceMappingURL=main.f5c660ef.chunk.js.map