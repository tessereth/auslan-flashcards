(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{145:function(e,a,n){"use strict";n.r(a),n.d(a,"graphql",function(){return p}),n.d(a,"StaticQueryContext",function(){return m}),n.d(a,"StaticQuery",function(){return f});var t=n(0),r=n.n(t),s=n(4),i=n.n(s),l=n(151),c=n.n(l);n.d(a,"Link",function(){return c.a}),n.d(a,"withPrefix",function(){return l.withPrefix}),n.d(a,"navigate",function(){return l.navigate}),n.d(a,"push",function(){return l.push}),n.d(a,"replace",function(){return l.replace}),n.d(a,"navigateTo",function(){return l.navigateTo});var o=n(173),u=n.n(o);n.d(a,"PageRenderer",function(){return u.a});var d=n(46);n.d(a,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,a,n){"use strict";var t=n(183),r=n(0),s=n.n(r),i=n(4),l=n.n(i),c=n(184),o=n.n(c),u=n(145),d=(n(150),n(49),n(7)),m=n.n(d),f=n(192),p=function(e){function a(){for(var a,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return(a=e.call.apply(e,[this].concat(t))||this).state={menuOpen:!1},a.toggleMenu=function(){a.setState({menuOpen:!a.state.menuOpen})},a}return m()(a,e),a.prototype.render=function(){var e=this;return s.a.createElement(u.StaticQuery,{query:"2700609599",render:function(a){return s.a.createElement("nav",{className:"navbar has-shadow"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(u.Link,{to:"/",className:"navbar-item"},"Auslan flashcards"),s.a.createElement("a",{role:"button",className:"navbar-burger "+(e.state.menuOpen?"is-active":""),"aria-label":"menu","aria-expanded":e.state.menuOpen,onClick:e.toggleMenu},s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}))),s.a.createElement("div",{className:"navbar-menu "+(e.state.menuOpen?"is-active":"")},s.a.createElement("div",{className:"navbar-start"},s.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},s.a.createElement("div",{className:"navbar-link"},"Decks"),s.a.createElement("div",{className:"navbar-dropdown"},a.allDecksYaml.edges.map(function(e){return s.a.createElement(u.Link,{key:e.node.fields.slug,to:"/"+e.node.fields.slug+"/sign",className:"navbar-item"},e.node.name)})))))))},data:f})},a}(r.PureComponent),h=n(165),g=function(){return s.a.createElement("footer",{className:"footer af-footer"},s.a.createElement("div",{className:"container"},s.a.createElement("p",null,"Videos — ©"," ",s.a.createElement(h.a,{href:"http://www.auslan.org.au/"},"Auslan Signbank")," ","— licenced"," ",s.a.createElement(h.a,{href:"http://creativecommons.org/licenses/by-nc-nd/4.0/"},"Creative Commons BY-NC-ND 4.0")),s.a.createElement("p",null,"Website and source code — © 2018 Teresa Bradbury — licenced"," ",s.a.createElement(h.a,{href:"https://github.com/tessereth/auslan-flashcards/blob/master/LICENSE"},"MIT"))))},v=(n(193),function(e){var a=e.children;return s.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Auslan flashcards"},{name:"keywords",content:"auslan, flashcards"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement("div",{className:"af-everything"},s.a.createElement("div",{className:"af-above-footer"},s.a.createElement(p,null),s.a.createElement("main",null,a)),s.a.createElement(g,null)))},data:t})});v.propTypes={children:l.a.node.isRequired};a.a=v},165:function(e,a,n){"use strict";n(33);var t=n(0),r=n.n(t);a.a=function(e){return r.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer external"},e))}},173:function(e,a,n){var t;e.exports=(t=n(182))&&t.default||t},182:function(e,a,n){"use strict";n.r(a);n(33);var t=n(0),r=n.n(t),s=n(4),i=n.n(s),l=n(70),c=n(2),o=function(e){var a=e.location,n=c.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(l.a,Object.assign({location:a,pageResources:n},n.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=o},183:function(e){e.exports={data:{site:{siteMetadata:{title:"Auslan flashcards"}}}}},192:function(e){e.exports={data:{allDecksYaml:{edges:[{node:{name:"Basics 1",fields:{slug:"basics-1"}}},{node:{name:"Basics 2",fields:{slug:"basics-2"}}},{node:{name:"Basics 3",fields:{slug:"basics-3"}}},{node:{name:"Numbers",fields:{slug:"numbers"}}},{node:{name:"Family",fields:{slug:"family"}}},{node:{name:"Little words 1",fields:{slug:"little-words-1"}}},{node:{name:"Question words",fields:{slug:"question-words"}}},{node:{name:"Purpose words",fields:{slug:"purpose-words"}}},{node:{name:"Little words 2",fields:{slug:"little-words-2"}}},{node:{name:"Misc 1",fields:{slug:"misc-1"}}}]}}}},193:function(e,a,n){}}]);
//# sourceMappingURL=1-73854c9845d2bc24f9ad.js.map