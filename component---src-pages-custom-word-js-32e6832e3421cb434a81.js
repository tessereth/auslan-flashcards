(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{143:function(e,t,a){"use strict";a.r(t);a(48);var r=a(0),n=a.n(r),s=a(158),i=a(173);t.default=function(e){return n.a.createElement(s.a,{slug:"custom",guess:"word",deck:Object(i.a)(e.location.search),search:e.location.search,custom:!0})}},148:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.children;return n.a.createElement("section",{className:"hero is-primary is-small"},n.a.createElement("div",{className:"hero-body"},n.a.createElement("div",{className:"container"},t)))}},153:function(e,t,a){"use strict";a(33);var r=a(149),n=a.n(r),s=a(7),i=a.n(s),l=(a(159),a(0)),o=a.n(l),c=a(164),d=function(e){return e.startsWith("http")?e:("_1"===e.slice(-2)?"http://media.auslan.org.au/mp4video":"http://media.auslan.org.au/auslan")+"/"+e.slice(0,2)+"/"+e},u=function(e){function t(t){var a;return(a=e.call(this,t)||this).vjsDefaultOptions={playbackRates:[.25,.5,1,1.5],preload:"auto",loop:!0,controls:!0,muted:!0},a.videoRef=o.a.createRef(),a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.player=Object(c.a)(this.videoRef.current,this.vjsDefaultOptions)},a.componentWillUnmount=function(){this.player&&this.player.dispose()},a.componentDidUpdate=function(e,t){e.revealed!==this.props.revealed&&(this.props.revealed?this.player.play():this.player.pause())},a.render=function(){var e=this.props,t=e.word,a=e.revealed,r=n()(e,["word","revealed"]);return o.a.createElement("video",Object.assign({id:"flashcard-video-"+t.id,className:"video-js image is-4by3 vjs-big-play-centered",poster:d(t.video)+".jpg",ref:this.videoRef,autoPlay:a},r),o.a.createElement("source",{src:d(t.video)+".mp4",type:"video/mp4"}),o.a.createElement("p",{className:"vjs-no-js"},"To view this video please enable JavaScript, and consider upgrading to a web browser that",o.a.createElement("a",{href:"https://videojs.com/html5-video-support/",target:"_blank",rel:"noopener noreferrer"},"supports HTML5 video")))},t}(o.a.PureComponent);u.defaultProps={revealed:!0},t.a=u},158:function(e,t,a){"use strict";a(168),a(169),a(33);var r=a(149),n=a.n(r),s=(a(48),a(7)),i=a.n(s),l=a(0),o=a.n(l),c=a(4),d=a.n(c),u=a(146),m=a(170),v=a(154),p=a(172),f=a.n(p),h=a(153),E=function(e){var t=e.word,a=e.revealed;return o.a.createElement("div",{className:f()("flashcard",{"flashcard--hidden":!a})},o.a.createElement("div",{className:"flashcard__content flashcard__content--word"},o.a.createElement("h1",{className:"title"},t.title||t.id)))},g=function(e){var t=e.word,a=e.revealed;return o.a.createElement("div",{className:f()("flashcard",{"flashcard--hidden":!a})},o.a.createElement("div",{className:"flashcard__content"},o.a.createElement(h.a,{word:t,revealed:a})))},w=function(e){var t=e.reveal;return o.a.createElement("button",{className:"flashcard flashcard--reveal",onClick:t},o.a.createElement("div",{className:"flashcard__content"},o.a.createElement("div",{className:"af-reveal--word"},o.a.createElement("p",{className:"subtitle"},"reveal"))))},N=function(e){var t=e.reveal;return o.a.createElement("button",{className:"flashcard flashcard--reveal",onClick:t},o.a.createElement("div",{className:"flashcard__content"},o.a.createElement("div",{className:"image is-4by3"},o.a.createElement("div",{className:"af-reveal--video"},o.a.createElement("p",{className:"subtitle"},"reveal")))))},b=function(e){var t=e.word,a=e.wordFirst,r=e.revealed,n=e.reveal;return o.a.createElement("div",{className:"columns"},o.a.createElement("div",{className:"column is-centered"},a?o.a.createElement(E,{word:t,revealed:!0}):o.a.createElement(g,{word:t,revealed:!0})),o.a.createElement("div",{className:"column is-centered"},a?o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{word:t,revealed:r}),!r&&o.a.createElement(N,{reveal:n})):o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{word:t,revealed:r}),!r&&o.a.createElement(w,{reveal:n}))))};b.propTypes={word:d.a.shape({id:d.a.string.isRequired,title:d.a.string,video:d.a.string.isRequired}).isRequired,wordFirst:d.a.bool,revealed:d.a.bool,reveal:d.a.func.isRequired};var y=b,k=(a(151),a(148)),x=function(e){var t=e.deck,a=e.slug,r=e.guess,n=e.custom,s=e.search,i="word"===r?"sign":"word";return o.a.createElement(k.a,null,o.a.createElement("div",{className:"level"},o.a.createElement("div",{className:"level-left"},o.a.createElement("h1",{className:"title"},t.name)),o.a.createElement("div",{className:"level-right"},o.a.createElement("div",{className:"buttons"},o.a.createElement(u.Link,{to:"/"+a+"/"+i+"?"+s,className:"button is-primary is-outlined is-inverted"},"Guess "+i),n?o.a.createElement(u.Link,{to:"/build-custom?"+s,className:"button is-primary is-outlined is-inverted"},"Edit"):o.a.createElement(u.Link,{to:"/"+a,className:"button is-primary is-outlined is-inverted"},"View all")))))},R=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).state={revealed:!1},t.reveal=function(e){e&&e.preventDefault(),t.setState({revealed:!0})},t.unreveal=function(e){e&&e.preventDefault(),t.setState({revealed:!1})},t.idxUrl=function(e){var a=t.props;return"/"+a.slug+"/"+a.guess+"?"+t.search(e)},t.gotoIdx=function(e){t.unreveal(),Object(u.navigate)(t.idxUrl(e))},t.linkToIdx=function(e){var a=e.idx,r=e.text,s=n()(e,["idx","text"]);return a<0||a>=t.props.deck.words.length?o.a.createElement("button",Object.assign({disabled:!0},s),r):o.a.createElement(u.Link,Object.assign({to:t.idxUrl(a),onClick:function(){return t.gotoIdx(a)}},s),r)},t.right=function(e){t.isLast()&&t.state.revealed||(t.state.revealed?t.gotoIdx(t.idx()+1):t.reveal(e))},t.left=function(e){t.isFirst()&&!t.state.revealed||(t.state.revealed?t.unreveal(e):t.gotoIdx(t.idx()-1))},t.isFirst=function(){return 0===t.idx()},t.isLast=function(){return t.idx()===t.props.deck.words.length-1},t.onKeyDownNative=function(e){"ArrowLeft"===e.key?t.left():"ArrowRight"===e.key&&t.right()},t.idx=function(){if("undefined"==typeof URLSearchParams)return 0;var e=new URLSearchParams(t.props.search),a=parseInt(e.get("idx")||"0");return a<0?0:a>=t.props.deck.words.length?t.props.deck.words.length-1:a},t.seed=function(){if(void 0===t._seed){if("undefined"==typeof URLSearchParams)return t._seed=0,t._seed;var e=new URLSearchParams(t.props.search);e.has("seed")?t._seed=e.get("seed"):t._seed=Math.floor(1e4*Math.random())}return t._seed},t.words=function(){return Object(m.shuffle)(t.props.deck.words,t.seed())},t.search=function(e){if("undefined"==typeof URLSearchParams)return"";var a=new URLSearchParams(t.props.search);return a.set("idx",e),a.set("seed",t.seed()),a.toString()},t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){document.addEventListener("keydown",this.onKeyDownNative)},a.componentWillUnmount=function(){document.removeEventListener("keydown",this.onKeyDownNative)},a.render=function(){var e=this.props,t=e.slug,a=e.guess,r=this.idx(),n=this.words()[r];return o.a.createElement(v.a,null,o.a.createElement(x,Object.assign({},this.props,{search:this.search(0)})),o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"container"},o.a.createElement(y,{key:n.id,word:n,wordFirst:"sign"===a,reveal:this.reveal,revealed:this.state.revealed}),o.a.createElement("div",{className:"level is-mobile"},o.a.createElement("div",{className:"level-left"},this.linkToIdx({idx:r-1,text:"Previous",className:"button"})),o.a.createElement("div",{className:"level-right"},this.isLast()?o.a.createElement(u.Link,{className:"button is-success",to:"/"+t},"Done!"):this.linkToIdx({idx:r+1,text:"Next",className:"button is-primary"}))))))},t}(o.a.PureComponent);R.propTypes={slug:d.a.string.isRequired,guess:d.a.string.isRequired,deck:d.a.object.isRequired,search:d.a.string.isRequired};t.a=R},161:function(e,t){},171:function(e,t){},173:function(e,t,a){"use strict";a(75),a(76);t.a=function(e){var t;if("undefined"==typeof URLSearchParams)t={name:"test",words:[{title:"test",video:"1234",web:"http://example.com"}]};else{var a=new URLSearchParams(e);t=JSON.parse(atob(a.get("deck")))}return t.words.forEach(function(e,t){e.id=String(t)}),t}}}]);
//# sourceMappingURL=component---src-pages-custom-word-js-32e6832e3421cb434a81.js.map