(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),s=a(0),o=a.n(s),i=a(143),l=a(149),c=a(4),d=a.n(c),u=a(152),v=a.n(u),p=a(206),m=function(e){return("_1"===e.slice(-2)?"http://media.auslan.org.au/mp4video":"http://media.auslan.org.au/auslan")+"/"+e.slice(0,2)+"/"+e},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).vjsDefaultOptions={playbackRates:[.25,.5,1,1.5],preload:"auto",loop:!0,controls:!0,muted:!0},a.videoRef=o.a.createRef(),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.player=Object(p.a)(this.videoRef.current,this.vjsDefaultOptions)},a.componentWillUnmount=function(){this.player&&this.player.dispose()},a.componentDidUpdate=function(e,t){e.revealed!==this.props.revealed&&(this.props.revealed?this.player.play():this.player.pause())},a.render=function(){var e=this.props,t=e.word,a=e.revealed;return o.a.createElement("div",{className:v()("flashcard",{"flashcard--hidden":!a})},o.a.createElement("div",{className:"flashcard__content flashcard__content--video"},o.a.createElement("video",{id:"flashcard-video-"+t.id,className:"video-js vjs-fill",poster:m(t.video)+".jpg",ref:this.videoRef,autoPlay:a},o.a.createElement("source",{src:m(t.video)+".mp4",type:"video/mp4"}),o.a.createElement("p",{className:"vjs-no-js"},"To view this video please enable JavaScript, and consider upgrading to a web browser that",o.a.createElement("a",{href:"https://videojs.com/html5-video-support/",target:"_blank",rel:"noopener noreferrer"},"supports HTML5 video")))))},t}(o.a.PureComponent),h=function(e){var t=e.word,a=e.revealed;return o.a.createElement("div",{className:v()("flashcard",{"flashcard--hidden":!a})},o.a.createElement("div",{className:"flashcard__content flashcard__content--word"},o.a.createElement("h1",{className:"title"},t.title||t.id)))},w=function(e){var t=e.reveal;return o.a.createElement("button",{className:"flashcard flashcard--reveal",onClick:t},o.a.createElement("div",{className:"flashcard__content flashcard__content--reveal"},o.a.createElement("p",{className:"subtitle"},"Reveal")))},E=function(e){var t=e.word,a=e.wordFirst,n=e.revealed,r=e.reveal;return o.a.createElement("div",{className:"columns"},o.a.createElement("div",{className:"column is-centered"},a?o.a.createElement(h,{word:t,revealed:!0}):o.a.createElement(f,{word:t,revealed:!0})),o.a.createElement("div",{className:"column is-centered"},a?o.a.createElement(f,{word:t,revealed:n}):o.a.createElement(h,{word:t,revealed:n}),!n&&o.a.createElement(w,{reveal:r})))};E.propTypes={word:d.a.shape({id:d.a.string.isRequired,title:d.a.string,video:d.a.string.isRequired}).isRequired,wordFirst:d.a.bool,revealed:d.a.bool,reveal:d.a.func.isRequired};var g=E;a.d(t,"query",function(){return N});var b=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={revealed:!1},t.reveal=function(e){e&&e.preventDefault(),t.setState({revealed:!0})},t.unreveal=function(e){e&&e.preventDefault(),t.setState({revealed:!1})},t.previous=function(){var e=t.props.pageContext,a=e.slug,n=e.guess,r=e.number;Object(i.navigate)("/"+a+"/"+n+"/"+(r-1))},t.next=function(){var e=t.props.pageContext,a=e.slug,n=e.guess,r=e.number;Object(i.navigate)("/"+a+"/"+n+"/"+(r+1))},t.right=function(e){t.state.revealed?t.next(e):t.reveal(e)},t.left=function(e){t.state.revealed?t.unreveal(e):t.previous(e)},t.isFirst=function(){return 0===t.props.pageContext.idx},t.isLast=function(){return t.props.pageContext.idx===t.props.data.decksYaml.words.length-1},t.onKeyDownNative=function(e){"ArrowLeft"!==e.key||t.isFirst()&&!t.state.revealed?"ArrowRight"!==e.key||t.isLast()&&t.state.revealed||t.right():t.left()},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){document.addEventListener("keydown",this.onKeyDownNative)},a.componentWillUnmount=function(){document.removeEventListener("keydown",this.onKeyDownNative)},a.render=function(){var e=this.props,t=e.data,a=e.pageContext,n=t.decksYaml.words[a.idx];return o.a.createElement(l.a,null,o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"container"},o.a.createElement(g,{key:n.id,word:n,wordFirst:"sign"===a.guess,reveal:this.reveal,revealed:this.state.revealed}),o.a.createElement("div",{className:"level is-mobile"},o.a.createElement("div",{className:"level-left"},o.a.createElement("button",{className:"button",onClick:this.previous,disabled:this.isFirst()},"Previous")),o.a.createElement("div",{className:"level-right"},this.isLast()?o.a.createElement("button",{className:"button is-success",onClick:function(){return Object(i.navigate)("/")}},"Done!"):o.a.createElement("button",{className:"button is-info",onClick:this.next},"Next"))))))},t}(o.a.PureComponent),N=(t.default=b,"2814911620")},174:function(e,t){}}]);
//# sourceMappingURL=component---src-templates-flashcards-js-be56b2a8563a0e91d110.js.map