(this.webpackJsonpreact_start=this.webpackJsonpreact_start||[]).push([[0],{21:function(e,t,a){},23:function(e,t,a){e.exports={Button:"button_Button__2fISy"}},25:function(e,t,a){e.exports={Overlay:"Modal_Overlay__zhRTL",Modal:"Modal_Modal__2ioiX",CloseModalBtn:"Modal_CloseModalBtn__3eOS4"}},26:function(e,t,a){e.exports=a(72)},31:function(e,t,a){},50:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),s=(a(31),a(20)),l=a(21),u=a.n(l),i=a(3),m=a.n(i),p=a(9),h=a(8),d=a(4),g=a(5),f=a(7),v=a(6),b=a(22),y=a.n(b),w=function(){var e=Object(h.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("16752813-8ad3a541d9a85fd347d38c131","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return n=(n=e.sent).data.hits,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),S=(a(50),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={qwery:""},e.handleChange=function(t){var a=t.target.value;return e.setState({qwery:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.qwery),e.setState({qwery:""})},e}return Object(g.a)(a,[{key:"render",value:function(){var e=this.state.qwery;return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{onChange:this.handleChange,className:"SearchForm-input",type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})))}}]),a}(n.Component)),E=function(e){var t=e.webformatURL,a=e.tags,n=e.largeImageURL,o=e.onGetLargeImageUrl;return r.a.createElement("li",{className:"ImageGalleryItem"},r.a.createElement("img",{src:t,alt:a,onClick:function(){return o(n)},className:"ImageGalleryItem-image"}))},O=function(e){var t=e.data,a=e.onGetLargeImageUrl;return r.a.createElement("ul",{className:"ImageGallery"},t.map((function(e){return r.a.createElement(E,Object.assign({key:e.id},e,{onGetLargeImageUrl:a}))})))},k=a(23),M=a.n(k),I=function(e,t,a){var n=e.onClickLoadMore;t.btnName;return r.a.createElement("button",{className:M.a.Button,type:"button",onClick:n},"THIS GARBAGE DON`T WORKS WITH PROPS!!!!!!! ",a)},j=a(24),C=a.n(j),L=a(25),_=a.n(L),N=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).closeModal=function(t){"Escape"!==t.code&&32!==t.keyCode||e.props.onCloseModal()},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModal)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Overlay"},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:this.props.largeImg,alt:""}),r.a.createElement("button",{className:_.a.CloseModalBtn,type:"button",onClick:function(){return e.props.onCloseModal()}},"X")))}}]),a}(n.Component),q=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={items:[],qwery:"cat",search:"",page:1,isLoading:!0,largeImg:null,error:null,btnName:["Load"]},e.search={search:"loooooooooooool"},e.loadMore=Object(h.a)(m.a.mark((function t(){var a,n,r,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.page,r=a.qwery,t.next=3,w(r,n);case 3:o=t.sent,e.setState((function(e){return{items:[].concat(Object(p.a)(e.items),Object(p.a)(o))}}));case 5:case"end":return t.stop()}}),t)}))),e.fetcher=Object(h.a)(m.a.mark((function t(){var a,n,r,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.page,r=a.qwery,t.prev=1,t.next=4,w(r,n);case 4:return o=t.sent,e.setState({items:o,page:1}),t.abrupt("return",o);case 9:t.prev=9,t.t0=t.catch(1),e.setState({error:t.t0}),console.log("ERROR",t.t0);case 13:return t.prev=13,e.setState({isLoading:!1}),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,9,13,16]])}))),e.upPage=function(){return e.setState({page:e.state.page+1})},e.scroll=function(){return window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},e.addState=function(){var t=Object(h.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({qwery:a});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getLargeImageUrl=function(t){e.setState({largeImg:t})},e.closeModal=function(){e.setState({largeImg:null})},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0}),this.fetcher()}},{key:"componentDidUpdate",value:function(e,t){t.qwery!==this.state.qwery&&this.fetcher(),t.page!==this.state.page&&this.loadMore(),t.items!==this.state.items&&this.scroll()}},{key:"render",value:function(){var e=this.state,t=e.items,a=e.isLoading,n=e.largeImg;e.qwery,e.search;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{onSubmit:this.addState}),a?r.a.createElement(C.a,null):r.a.createElement(O,{data:t,onGetLargeImageUrl:this.getLargeImageUrl}),t.length>=12&&r.a.createElement(I,{onClickLoadMore:this.upPage}),n&&r.a.createElement(N,{onCloseModal:this.closeModal,largeImg:n}))}}]),a}(n.Component);Object(s.a)(u.a);var x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null))};c.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.a61068af.chunk.js.map