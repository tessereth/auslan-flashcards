(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return o});t(48),t(146);var s=t(0),r=t.n(s),n=t(144),l=t(149),i=t(152),c=t(153);a.default=function(e){var a=e.data;return r.a.createElement(l.a,null,r.a.createElement("section",{className:"hero is-primary is-small"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"level"},r.a.createElement("div",{className:"level-left"},r.a.createElement("h1",{className:"title"},a.decksYaml.name)),r.a.createElement("div",{className:"level-right"},r.a.createElement("div",{className:"buttons"},r.a.createElement(n.Link,{to:a.decksYaml.fields.slug+"/sign/1",className:"button is-primary is-outlined is-inverted"},"Guess sign"),r.a.createElement(n.Link,{to:a.decksYaml.fields.slug+"/word/1",className:"button is-primary is-outlined is-inverted"},"Guess word"))))))),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-multiline"},a.decksYaml.words.map(function(e){return r.a.createElement("div",{key:e.id,className:"column is-half is-one-third-fullhd"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-header-title has-text-centered is-block"},r.a.createElement("strong",{className:"is-size-4"},e.title||e.id))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"flashcard__content flashcard__content--video"},r.a.createElement(c.a,{word:e,autoPlay:!1}))),r.a.createElement("div",{className:"card-footer"},r.a.createElement(i.a,{href:e.web,className:"card-footer-item"},"Signbank"))))})))))};var o="3605826919"},153:function(e,a,t){"use strict";t(33);var s=t(150),r=t.n(s),n=t(7),l=t.n(n),i=t(0),c=t.n(i),o=t(163),d=function(e){return("_1"===e.slice(-2)?"http://media.auslan.org.au/mp4video":"http://media.auslan.org.au/auslan")+"/"+e.slice(0,2)+"/"+e},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).vjsDefaultOptions={playbackRates:[.25,.5,1,1.5],preload:"auto",loop:!0,controls:!0,muted:!0},t.videoRef=c.a.createRef(),t}l()(a,e);var t=a.prototype;return t.componentDidMount=function(){this.player=Object(o.a)(this.videoRef.current,this.vjsDefaultOptions)},t.componentWillUnmount=function(){this.player&&this.player.dispose()},t.componentDidUpdate=function(e,a){e.revealed!==this.props.revealed&&(this.props.revealed?this.player.play():this.player.pause())},t.render=function(){var e=this.props,a=e.word,t=e.revealed,s=r()(e,["word","revealed"]);return c.a.createElement("video",Object.assign({id:"flashcard-video-"+a.id,className:"video-js vjs-fill",poster:d(a.video)+".jpg",ref:this.videoRef,autoPlay:t},s),c.a.createElement("source",{src:d(a.video)+".mp4",type:"video/mp4"}),c.a.createElement("p",{className:"vjs-no-js"},"To view this video please enable JavaScript, and consider upgrading to a web browser that",c.a.createElement("a",{href:"https://videojs.com/html5-video-support/",target:"_blank",rel:"noopener noreferrer"},"supports HTML5 video")))},a}(c.a.PureComponent);m.defaultProps={revealed:!0},a.a=m},157:function(e,a){}}]);
//# sourceMappingURL=component---src-templates-deck-js-8edddd21eeeb340e2908.js.map