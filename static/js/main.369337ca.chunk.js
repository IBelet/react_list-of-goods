(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),s=n.n(i),o=n(6),l=n(4),c=n(5),u=n(8),m=n(7),h=(n(14),n(1)),g=n.n(h),d=r.a.memo((function(e){var t=e.name,n=e.onClick;return r.a.createElement("button",{type:"button",onClick:n,className:"button"},t)}));d.propTypes={name:g.a.string.isRequired,onClick:g.a.func.isRequired};var p=r.a.memo((function(e){var t=e.goods;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},e.name)})))}));p.propTypes={goods:g.a.arrayOf(g.a.shape({name:g.a.string.isRequired,id:g.a.number.isRequired}).isRequired).isRequired};var f=r.a.memo((function(e){var t=e.range,n=e.onChange,a=e.value;return r.a.createElement("select",{onChange:n,value:a},t.map((function(e){return r.a.createElement("option",{value:e,key:e},e)})))}));f.propTypes={range:g.a.arrayOf(g.a.number.isRequired).isRequired,onChange:g.a.func.isRequired,value:g.a.number.isRequired};for(var v=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(e,t){return{name:e,id:t}})),y=[],E=1;E<=10;E+=1)y.push(E);var b=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isListShown:!1,goods:v,minLength:0,sortBy:"id",isReversed:!1},e.toggleList=function(){e.setState((function(e){return{isListShown:!e.isListShown}}))},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortAlphabetically=function(){e.setState({sortBy:"alphabet"})},e.sortByLength=function(){e.setState({sortBy:"length"})},e.reset=function(){e.setState({sortBy:"id",minLength:0})},e.changeMinLength=function(t){e.setState({minLength:+t.target.value})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isListShown,n=e.goods,a=e.minLength,i=e.isReversed,s=e.sortBy,l=Object(o.a)(n).filter((function(e){return e.name.length>=a}));return l.sort((function(e,t){switch(s){case"id":return e[s]-t[s];case"length":return e.name.length-t.name.length;case"alphabet":return e.name.localeCompare(t.name);default:return 0}})),i&&l.reverse(),r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"Goods"),!t&&r.a.createElement(d,{name:"Start",onClick:this.toggleList}),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{goods:l}),r.a.createElement("div",null,r.a.createElement(d,{name:"Reverse",onClick:this.reverse}),r.a.createElement(d,{name:"Sort alphabetically",onClick:this.sortAlphabetically}),r.a.createElement(d,{name:"Sort by length",onClick:this.sortByLength}),r.a.createElement(d,{name:"Reset",onClick:this.reset})),r.a.createElement("p",null,"Min length of words :"),r.a.createElement(f,{range:y,onChange:this.changeMinLength,value:a})))}}]),n}(r.a.PureComponent);s.a.render(r.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.369337ca.chunk.js.map