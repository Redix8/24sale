(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(e,t,a){e.exports=a(319)},178:function(e,t,a){},180:function(e,t,a){},319:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),c=a.n(o),l=(a(178),a(19)),s=a(20),i=a(22),u=a(21),d=a(23),m=(a(180),a(36)),p=a.n(m),h=a(5),g=a(37),v=a.n(g),b="http://Redix8.pythonanywhere.com/api",O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},a.handleChange=function(e,t){console.log(e.currentTarget);var n=e.currentTarget.dataset,r=n.store,o=n.sale;a.setState({value:t}),a.props.onChange({store:r,sale:o})},a.getProducts=function(e){var t=e.currentTarget.dataset,n=t.store,r=t.sale,o="".concat(b,"/").concat(n,"/").concat(r);v.a.get(o).then(function(e){a.props.onChange(e.data)}).catch(function(e){console.log(e)})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement(p.a,{position:"static",style:{marginBottom:20}},r.a.createElement(h.f,{value:e,onChange:this.handleChange,centered:!0},r.a.createElement(h.e,{label:"CU 1+1","data-store":"CU","data-sale":"OPO"}),r.a.createElement(h.e,{label:"CU 2+1","data-store":"CU","data-sale":"TPO"}),r.a.createElement(h.e,{label:"CU \uae30\ud0c0","data-store":"CU","data-sale":"OTR"}),r.a.createElement(h.e,{label:"GS 1+1","data-store":"GS","data-sale":"OPO"}),r.a.createElement(h.e,{label:"GS 2+1","data-store":"GS","data-sale":"TPO"}),r.a.createElement(h.e,{label:"GS \uae30\ud0c0","data-store":"GS","data-sale":"OTR"}),r.a.createElement(h.e,{label:"Seven 1+1","data-store":"SV","data-sale":"OPO"}),r.a.createElement(h.e,{label:"Seven 2+1","data-store":"SV","data-sale":"TPO"}),r.a.createElement(h.e,{label:"Seven \uae30\ud0c0","data-store":"SV","data-sale":"OTR"})))}}]),t}(n.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.d,{item:!0},r.a.createElement(h.a,{className:"card",style:{width:160}},r.a.createElement(h.c,{component:"img",className:"media",height:"140",image:this.props.url}),r.a.createElement(h.b,null,r.a.createElement(h.g,{variant:"subtitle2"},this.props.name),r.a.createElement(h.g,{variant:"body1"},"\uac00\uaca9 : ",this.props.price,"\uc6d0"))))}}]),t}(n.Component);f.defaultProps={url:"http://gs25appimg.gsretail.com/imgsvr/item/GD_8993083938594_001.jpg",price:0};var E="http://Redix8.pythonanywhere.com/api",y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={store:"CU",sale:"OPO",products:[]},a.componentDidMount=function(){var e=a.state,t=e.store,n=e.sale;a.getProducts(t,n)},a.getProducts=function(e,t){var n="".concat(E,"/").concat(e,"/").concat(t);v.a.get(n).then(function(e){a.setState({products:e.data})}).catch(function(e){console.log(e)})},a.handleChange=function(e){var t=e.store,n=e.sale;a.setState({store:t,sale:n}),a.getProducts(t,n)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,{onChange:this.handleChange}),r.a.createElement(h.d,{container:!0,spacing:8,style:{padding:20}},this.state.products.map(function(e,t){return r.a.createElement(f,{key:t,name:e.product_name,price:e.price,url:e.img_url})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[173,2,1]]]);
//# sourceMappingURL=main.681a65cc.chunk.js.map