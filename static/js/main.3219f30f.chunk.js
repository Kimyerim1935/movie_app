(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{30:function(e,t,a){e.exports=a(63)},35:function(e,t,a){},36:function(e,t,a){},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),s=a.n(o),i=(a(35),a(5)),c=a(1);a(36);var l=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'),r.a.createElement("span",null," -George Orwell. 1984"))},m=a(12),u=a.n(m),p=a(27),v=a(7),d=a(8),f=a(9),E=a(10),h=a(28),y=a.n(h);a(55);var g=function(e){var t=e.title,a=e.year,n=e.summary,o=e.poster,s=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(i.b,{to:{pathname:"./movie-detail",state:{year:a,title:t,summary:n,poster:o,genres:s}}},r.a.createElement("img",{src:o,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__gen.res"},s.map((function(e,t){return r.a.createElement("li",{key:t,className:"movie__genre"},e," ")}))),r.a.createElement("p",{className:"mpvie__summary"},n.slice(0,200),"..."))))},_=(a(61),function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(p.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(62);var b=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(i.b,{to:"/main"},"Main"),r.a.createElement(i.b,{to:"/about"},"About"))},N=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title," "):null}}]),a}(r.a.Component);var j=function(){return r.a.createElement(i.a,null,r.a.createElement(b,null),r.a.createElement(c.a,{path:"/Main",exact:!0,component:_}),r.a.createElement(c.a,{path:"/about",component:l}),r.a.createElement(c.a,{path:"/movie-detail",component:N}))};s.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.3219f30f.chunk.js.map