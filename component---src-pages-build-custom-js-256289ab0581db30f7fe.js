(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{140:function(e,t,a){"use strict";a.r(t);a(48),a(150),a(28),a(77);var n=a(7),r=a.n(n),l=(a(49),a(0)),o=a.n(l),s=a(239),c=a(244),i=a(145),d=a(153),m=a(146),u=Object(s.SortableHandle)(function(){return o.a.createElement("span",{className:"button"},"☰")}),f=Object(s.SortableElement)(function(e){var t=e.word,a=e.onWordChange,n=e.onDelete;return o.a.createElement("li",{className:"field is-horizontal"},o.a.createElement("div",{className:"field-body"},o.a.createElement("div",{className:"field has-addons"},o.a.createElement("div",{className:"control"},o.a.createElement(u,null)),o.a.createElement("div",{className:"control"},o.a.createElement("input",{className:"input",type:"text",placeholder:"Same",value:t.get("title"),onChange:function(e){return a("title",e.target.value)},ref:t.get("focusRef")})),o.a.createElement("div",{className:"control"},o.a.createElement("input",{className:"input",type:"text",placeholder:"16020_1",value:t.get("video"),onChange:function(e){return a("video",e.target.value)}})),o.a.createElement("div",{className:"control is-expanded"},o.a.createElement("input",{className:"input",type:"text",placeholder:"http://www.auslan.org.au/dictionary/words/same-2.html",value:t.get("web"),onChange:function(e){return a("web",e.target.value)}})),o.a.createElement("div",{className:"control"},o.a.createElement("button",{type:"button",className:"button","aria-label":"delete",onClick:n},o.a.createElement("span",{className:"delete"}))))))}),w=Object(s.SortableContainer)(function(e){var t=e.words,a=e.onWordChange,n=e.onDelete;return o.a.createElement("ul",null,t.map(function(e,t){return o.a.createElement(f,{key:"item-"+t,index:t,word:e,onWordChange:function(e,n){return a(t,e,n)},onDelete:function(){return n(t)}})}))}),h=Object(c.Map)({title:"",web:"",video:"",focusRef:o.a.createRef()}),p=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={name:"my custom deck",words:Object(c.List)([h])},t.onSortEnd=function(e){var a=e.oldIndex,n=e.newIndex,r=t.state.words.get(a);t.setState({words:t.state.words.delete(a).insert(n,r)})},t.onWordChange=function(e,a,n){t.setState({words:t.state.words.setIn([e,a],n)})},t.onNameChange=function(e){t.setState({words:e.target.value})},t.onAdd=function(){t.setState({words:t.state.words.push(h)},function(){t.state.words.get(-1).get("focusRef").current.focus()})},t.onDelete=function(e){t.setState({words:t.state.words.delete(e)})},t.serializedDeck=function(){var e=t.state.words.filter(function(e){return e.get("title").length>0&&e.get("web").length>0&&e.get("video").length>0}).map(function(e){return Object(c.Map)({web:e.get("web").replace("http://www.auslan.org.au/dictionary/words/",""),title:e.get("title"),video:e.get("video")})});return"undefined"==typeof btoa?JSON.stringify({name:t.state.name,words:e}):btoa(JSON.stringify({name:t.state.name,words:e}))},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){if("undefined"!=typeof URLSearchParams){var e=new URLSearchParams(this.props.search);if(e.has("deck")){var t=JSON.parse(atob(e.get("deck")));this.setState({name:t.name||"",words:Object(c.List)(t.words.map(function(e){return Object(c.Map)({title:e.title||"",web:"http://www.auslan.org.au/dictionary/words/"+e.web,video:e.video||"",focusRef:o.a.createRef()})}))})}}},a.render=function(){return o.a.createElement("form",null,o.a.createElement("div",{className:"field"},o.a.createElement("label",{className:"label"},"Name"),o.a.createElement("div",{className:"control is-expanded"},o.a.createElement("input",{className:"input",type:"text",onChange:this.onNameChange,value:this.state.name}))),o.a.createElement("div",{className:"field"},o.a.createElement("label",{className:"label"},"Words"),o.a.createElement("div",{className:"control"},o.a.createElement(w,{words:this.state.words.toArray(),onSortEnd:this.onSortEnd,onWordChange:this.onWordChange,onDelete:this.onDelete,useDragHandle:!0}))),o.a.createElement("div",{className:"field"},o.a.createElement("div",{className:"control"},o.a.createElement("div",{className:"level is-mobile"},o.a.createElement("div",{className:"level-left"},o.a.createElement("button",{type:"button",className:"button",onClick:this.onAdd},"Add word")),o.a.createElement("div",{className:"level-right"},o.a.createElement(i.Link,{to:"/custom/word?deck="+this.serializedDeck(),className:"button is-primary"},"View"))))))},t}(o.a.PureComponent);t.default=function(e){var t=e.location;return o.a.createElement(d.a,null,o.a.createElement(m.a,null,o.a.createElement("h1",{className:"title"},"Build custom flashcard deck")),o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"container"},o.a.createElement(p,{search:t.search}))))}},146:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("section",{className:"hero is-primary is-small"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},t)))}}}]);
//# sourceMappingURL=component---src-pages-build-custom-js-256289ab0581db30f7fe.js.map