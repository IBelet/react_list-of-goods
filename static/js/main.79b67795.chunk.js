(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),s=n(2),c=n(3),l=n(5),u=n(4),m=(n(13),n(1)),g=n.n(m),h=r.a.memo((function(e){var t=e.name,n=e.onClick;return r.a.createElement("button",{type:"button",onClick:n,className:"button"},t)}));h.propTypes={name:g.a.string.isRequired,onClick:g.a.func.isRequired};var d=r.a.memo((function(e){var t=e.goods;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e},e)})))}));d.propTypes={goods:g.a.arrayOf(g.a.string.isRequired).isRequired};var p=r.a.memo((function(e){var t=e.range,n=e.onChange,a=e.value;return r.a.createElement("select",{onChange:n,value:a},t.map((function(e){return r.a.createElement("option",{value:e,key:e},e)})))}));function f(e){for(var t=e.reduce((function(e,t){return e<t.length?t.length:e}),0),n=[],a=1;a<=t+1;a+=1)n.push(a);return n}p.propTypes={range:g.a.arrayOf(g.a.number.isRequired).isRequired,onChange:g.a.func.isRequired,value:g.a.number.isRequired};var v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={goods:e.props.goods,minLength:0,sortBy:"id",isReversed:!1,range:f(e.props.goods)},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortAlphabetically=function(){e.setState({sortBy:"alphabet"})},e.sortByLength=function(){e.setState({sortBy:"length"})},e.reset=function(){e.setState({sortBy:"id",minLength:0})},e.changeMinLength=function(t){e.setState({minLength:+t.target.value})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.goods,n=e.minLength,a=e.isReversed,o=e.sortBy,i=e.range,s=t.filter((function(e){return e.length>=n}));return s.sort((function(e,t){switch(o){case"id":case"length":return e[o]-t[o];case"alphabet":return e.localeCompare(t);default:return 0}})),a&&s.reverse(),r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{goods:s}),r.a.createElement("div",null,r.a.createElement(h,{name:"Reverse",onClick:this.reverse}),r.a.createElement(h,{name:"Sort alphabetically",onClick:this.sortAlphabetically}),r.a.createElement(h,{name:"Sort by length",onClick:this.sortByLength}),r.a.createElement(h,{name:"Reset",onClick:this.reset})),r.a.createElement("p",null,"Min length of words :"),r.a.createElement(p,{range:i,onChange:this.changeMinLength,value:n}))}}]),n}(r.a.PureComponent),y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isContentHidden:!0},e.toggleList=function(){e.setState((function(e){return{isContentHidden:!e.isContentHidden}}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.isContentHidden;return r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"Goods"),e?r.a.createElement(h,{name:"Start",onClick:this.toggleList}):r.a.createElement(v,{goods:y}))}}]),n}(r.a.PureComponent);i.a.render(r.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.79b67795.chunk.js.map