(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(18),r=n.n(i),s=(n(23),n(3)),o=n(4),u=n(6),h=n(5),d=n(9),p=(n(24),n(8)),j=n.n(p),l=(n(43),n(0)),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={hover:-1},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{id:"card",onMouseEnter:function(){e.setState({hover:e.index})},onMouseLeave:function(){e.setState({hover:-1})},children:[Object(l.jsx)("img",{src:this.props.Poster,alt:"movie poster",width:"100%"}),Object(l.jsx)("h4",{children:this.props.Year}),Object(l.jsx)("h3",{children:this.props.Title}),Object(l.jsx)("h5",{className:"rating ".concat(this.state.hover===this.index?"":"hide"),children:this.props.imdbID})]},this.props.index)}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={search:"war",movies:[],loader:!0},e.updateSearch=function(t){e.setState({search:t.target.value})},e.updateAxios=function(t){j.a.get("https://www.omdbapi.com/?apikey=45f0782a&s=".concat(t.target.value)).then((function(t){"True"===t.data.Response&&e.setState({movies:t.data.Search,loader:!1})}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;j.a.get("https://www.omdbapi.com/?apikey=45f0782a&s=war").then((function(t){e.setState({movies:t.data.Search,loader:!1})}))}},{key:"funcGroup",value:function(e){this.updateSearch(e),this.updateAxios(e)}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{id:"container",children:[Object(l.jsx)("i",{class:"fas fa-search"}),Object(l.jsx)("input",{type:"text",placeholder:"Search for Movie..",autoFocus:!0,onChange:function(t){return e.funcGroup(t)},value:this.state.search})]}),this.state.loader?Object(l.jsx)("div",{id:"overlay",children:Object(l.jsx)("i",{class:"fas fa-spinner fa-pulse"})}):Object(l.jsx)("div",{id:"crad_wrapper",children:this.state.movies.map((function(e,t){return Object(l.jsx)(v,Object(d.a)(Object(d.a)({},e),{},{index:t}))}))})]})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)(b,{})})}}]),n}(a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),O()}},[[45,1,2]]]);
//# sourceMappingURL=main.9e12ee65.chunk.js.map