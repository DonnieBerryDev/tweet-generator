(this["webpackJsonptweet-generator"]=this["webpackJsonptweet-generator"]||[]).push([[0],{130:function(e,t,s){},131:function(e,t,s){},428:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(2),i=s.n(n),a=s(16),l=s.n(a),r=(s(130),s(31)),d=s(32),h=s(34),j=s(33),u=(s(131),s(22)),o=function(e){return Object(c.jsx)("div",{class:"tweet_tweet",children:Object(c.jsx)("p",{style:{color:"light"===e.selectedTheme?"#000":"dim"===e.selectedTheme||"dark"===e.selectedTheme?"#fff":""},children:e.TweetValue})})},b=function(e){return Object(c.jsx)("div",{class:"tweet_username",children:Object(c.jsxs)("h4",{children:["@",e.UsernameValue]})})},m=function(e){return Object(c.jsxs)("div",{class:"tweet_title",children:[Object(c.jsx)("h3",{style:{color:"light"===e.selectedTheme?"#000":"dim"===e.selectedTheme||"dark"===e.selectedTheme?"#fff":""},children:e.TitleValue}),Object(c.jsx)("div",{class:"tweet_title__img",children:Object(c.jsx)("img",{src:e.isVerified?"images/verified-light.png":""})})]})},O=function(){var e=new Date,t=e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()+" \xb7 "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds();return Object(c.jsx)("div",{class:"tweet_time",children:Object(c.jsxs)("p",{children:[t," \xb7 Twitter for iPhone"]})})},x=function(e){return Object(c.jsx)("div",{className:"tweet_data__info",children:Object(c.jsxs)("h5",{style:{color:"light"===e.selectedTheme?"#000":"dim"===e.selectedTheme||"dark"===e.selectedTheme?"#fff":""},children:[Object(c.jsx)("span",{className:"bold",children:e.RetweetValue})," Retweets"]})})},f=function(e){return Object(c.jsx)("div",{className:"tweet_data__info",children:Object(c.jsxs)("h5",{style:{color:"light"===e.selectedTheme?"#000":"dim"===e.selectedTheme||"dark"===e.selectedTheme?"#fff":""},children:[Object(c.jsx)("span",{className:"bold",children:e.QuoteValue})," Quote Tweets"]})})},g=function(e){return Object(c.jsx)("div",{className:"tweet_data__info",children:Object(c.jsxs)("h5",{style:{color:"light"===e.selectedTheme?"#000":"dim"===e.selectedTheme||"dark"===e.selectedTheme?"#fff":""},children:[Object(c.jsx)("span",{className:"bold",children:e.LikesValue})," Likes"]})})},v=function(e){return Object(c.jsxs)("div",{className:"tweet_data",children:[Object(c.jsx)(x,{RetweetValue:e.RetweetValue,selectedTheme:e.selectedTheme}),Object(c.jsx)(f,{QuoteValue:e.QuoteValue,selectedTheme:e.selectedTheme}),Object(c.jsx)(g,{LikesValue:e.LikesValue,selectedTheme:e.selectedTheme})]})},p=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={},c}return Object(d.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:this.props.isVerified})})}}]),s}(i.a.Component),T=function(e){var t=Object(n.useState)(""),s=Object(u.a)(t,2),i=s[0],a=s[1],l=Object(n.useState)(""),r=Object(u.a)(l,2),d=r[0],h=r[1],j=Object(n.useState)(""),x=Object(u.a)(j,2),f=x[0],g=x[1],T=Object(n.useState)(""),w=Object(u.a)(T,2),k=w[0],_=w[1],V=Object(n.useState)(""),y=Object(u.a)(V,2),C=y[0],N=y[1],S=Object(n.useState)(""),I=Object(u.a)(S,2),L=I[0],A=I[1],F=Object(n.useState)(!1),P=Object(u.a)(F,2),Q=P[0],R=P[1];return Object(c.jsx)("div",{class:"tweetArea",style:{background:e.selectedTheme},children:Object(c.jsxs)("div",{class:"innerContainer",children:[Object(c.jsxs)("div",{className:"inputArea",children:[Object(c.jsxs)("div",{class:"tweetInput_tweet",children:[Object(c.jsx)("h5",{children:"Enter your Tweet"}),Object(c.jsx)("input",{type:"text",class:"onTweet",onChange:function(e){a(e.target.value)}})]}),Object(c.jsxs)("div",{class:"tweetInput_username",children:[Object(c.jsx)("h5",{children:"What is the username"}),Object(c.jsx)("input",{type:"text",onChange:function(e){h(e.target.value)}})]}),Object(c.jsxs)("div",{class:"tweetInput_title",children:[Object(c.jsx)("h5",{children:"What is the title"}),Object(c.jsx)("input",{type:"text",onChange:function(e){g(e.target.value)}})]}),Object(c.jsxs)("div",{class:"tweetInput_data",children:[Object(c.jsxs)("div",{class:"tweetInput_retweet",children:[Object(c.jsx)("h5",{children:"What is the retweet count"}),Object(c.jsx)("input",{type:"text",onChange:function(e){_(e.target.value)}})]}),Object(c.jsxs)("div",{class:"tweetInput_quotes",children:[Object(c.jsx)("h5",{children:"What is the quote count"}),Object(c.jsx)("input",{type:"text",onChange:function(e){N(e.target.value)}})]}),Object(c.jsxs)("div",{class:"tweetInput_likes",children:[Object(c.jsx)("h5",{children:"What is the like count"}),Object(c.jsx)("input",{type:"text",onChange:function(e){A(e.target.value)}})]})]})]}),Object(c.jsx)("div",{class:"tweetProps",children:Object(c.jsxs)("div",{class:"tweetProps_verified",onClick:function(){R((function(e){return!e}))},children:[Object(c.jsx)("input",{type:"checkbox",name:"isVerified",onChange:function(){R(!Q),console.log(Q)},checked:Q}),Object(c.jsx)("h5",{children:"Verified?"})]})}),Object(c.jsx)(p,{isVerified:Q}),Object(c.jsxs)("div",{class:"tweet",id:"tweetHere",style:{background:"light"===e.selectedTheme?"#fff":"dim"===e.selectedTheme?"#15202b":"dark"===e.selectedTheme?"#000":""},children:[Object(c.jsxs)("div",{class:"tweet_header",children:[Object(c.jsx)("div",{class:"tweet_avatar",children:Object(c.jsx)("img",{src:"https://via.placeholder.com/50",alt:"avatar",class:"avatar"})}),Object(c.jsxs)("div",{class:"tweet_person",children:[Object(c.jsx)(m,{TitleValue:f,selectedTheme:e.selectedTheme,isVerified:Q}),Object(c.jsx)(b,{UsernameValue:d})]})]}),Object(c.jsx)(o,{TweetValue:i,selectedTheme:e.selectedTheme}),Object(c.jsx)(O,{}),Object(c.jsx)(v,{RetweetValue:k,LikesValue:L,QuoteValue:C,selectedTheme:e.selectedTheme})]})]})})},w=(i.a.Component,function(){return Object(c.jsx)("div",{id:"header",children:Object(c.jsx)("div",{class:"container",children:Object(c.jsx)("div",{class:"header_header",children:Object(c.jsxs)("h1",{children:["Generate a fake ",Object(c.jsx)("span",{class:"blue bold",children:"Tweet"})]})})})})});s(123),s(132);var k=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).toggleTheme=function(e){c.setState({theme:"light"===c.state.theme?"middle":"light"}),console.log(c.state.theme)},c.themeSwitcher=function(){"dark"===("dark"===c.state.theme?"dark":"")&&(document.getElementByClass("tweetArea").style.background="blue"),console.log("It ran")},c.setTheme=function(e){c.setState({theme:e.themeName}),console.log(e)},c.setActive=function(e){e.className="Test"},c.state={theme:"dark",themeThumbnails:[{link:"images/light-theme.png",themeName:"light"},{link:"images/dark-theme.png",themeName:"dark"},{link:"images/dim-theme.png",themeName:"dim"}]},c}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(w,{}),Object(c.jsx)("div",{id:"theme_switcher",children:Object(c.jsx)("div",{class:"container",children:Object(c.jsx)("div",{id:"theme_images",children:this.state.themeThumbnails.map((function(t){var s=t.themeName===e.state.theme?"active":"";return Object(c.jsx)("div",{className:"theme__image",onClick:function(){return e.setTheme(t)},id:s,children:Object(c.jsx)("img",{src:t.link})})}))})})}),Object(c.jsx)(T,{selectedTheme:this.state.theme})]})}}]),s}(i.a.Component),_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,429)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),i(e),a(e)}))};l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),_()}},[[428,1,2]]]);
//# sourceMappingURL=main.8d876409.chunk.js.map