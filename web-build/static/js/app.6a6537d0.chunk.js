(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{157:function(e,t,n){e.exports=n.p+"static/media/Facebook.329072c7.png"},197:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return se}));var o=n(1),r=n(2),a=n(18),i=n.n(a),l=n(0),c=n(36),s=n(125),d=n(84),u=n(15),f=(o.default.create,o.default.create({container:{maxHeight:200,maxWidth:200,alignItems:"center",justifyContent:"center",borderRadius:180,borderWidth:1}})),p=function(e){var t,o;return Object(u.jsx)(r.default,{style:f.container,children:e.image?Object(u.jsx)(d.Avatar.Image,{size:200,source:{uri:"data:"+(null==(t=e.image)?void 0:t.mime)+";base64,"+(null==(o=e.image)?void 0:o.data)}}):Object(u.jsx)(d.Avatar.Image,{size:200,source:n(245)})})},b="#D14545",j="#4D626C",h=25,g=14,m=32,x=20,y=n(112),O=(o.default.create,function(e){var t=o.default.create({container:{marginHorizontal:"auto",minWidth:e.minWidth?e.minWidth:"100%",height:e.height?e.height:200,backgroundColor:e.color?e.color:b,alignItems:"center",justifyContent:"center",borderRadius:30,borderColor:"red",margin:e.margin?e.margin:h,padding:e.padding?e.padding:20}});return Object(u.jsx)(y.default,{style:t.container,children:e.children})}),v=(o.default.create,o.default.create({title:{color:"#FFF",fontSize:m,textAlign:"center"},description:{paddingTop:20,color:"#FFF",fontSize:g,alignItems:"center",alignContent:"flex-start",textAlign:"left"}})),C=function(e){return Object(u.jsxs)(O,{color:j,children:[Object(u.jsx)(c.default,{style:v.title,children:"Description"}),Object(u.jsx)(c.default,{style:v.description,children:e.description})]})},w=n(45),F=n(200),S=function(e){return e.search("twitter")>-1?n(246):e.search("instagram")>-1?n(247):(e.search("facebook"),n(157))},T=(o.default.create,o.default.create({wrapper:{backgroundColor:"#2c2c2c",borderRadius:60},container:{flexDirection:"row",alignItems:"center",justifyContent:"space-around",width:"100%",borderRadius:60},handle:{color:"#FFF"},linkButtonText:{color:"#FFF",fontWeight:"bold"},linkButton:{backgroundColor:b,borderRadius:10,alignContent:"center",paddingHorizontal:x,paddingVertical:x}})),k=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(r.default,{style:T.wrapper,children:Object(u.jsxs)(r.default,{style:T.container,children:[Object(u.jsx)(w.default,{icon:S(e.profileURL),size:25,iconColor:"#FFF",containerColor:"#FFF",disabled:!0}),Object(u.jsx)(c.default,{style:T.handle,children:e.profileName}),Object(u.jsx)(s.default,{style:T.linkButton,onPress:function(){return F.openBrowserAsync(e.profileURL)},children:Object(u.jsx)(c.default,{style:T.linkButtonText,children:"Visit"})})]})})})},I=n(198),B=(o.default.create,o.default.create({container:{overflow:"scroll"}})),D=function(e){return Object(u.jsx)(O,{minWidth:"312px",color:"white",padding:-1,children:Object(u.jsx)(r.default,{style:B.container,children:Object(u.jsx)(I.FlatGrid,{contentContainerStyle:{width:312,marginVertical:"auto"},maxItemsPerRow:1,data:e.socialMedia,renderItem:function(e){var t=e.item;return Object(u.jsx)(k,{profileName:t.profileName,profileURL:t.profileURL})}})})})},A=n(53),P=o.default.create({image:{width:200,height:200},titlebody:{fontSize:40,fontWeight:"bold",color:"#fff",textAlign:"center"},titlefourofour:{fontSize:120,fontWeight:"bold",color:"#fff",textAlign:"center"},textBody:{fontSize:20,fontWeight:"bold",color:"#fff",textAlign:"center"},wrapper:{width:"100%",flex:1,backgroundColor:"#2c2c2c",alignItems:"center",justifyContent:"center"},container:{flexDirection:"column",width:"90%",height:"88%",alignItems:"center",justifyContent:"space-around"},handle:{color:"#FFF"},linkButtonText:{color:"#FFF",fontWeight:"bold",margin:"auto"},linkButton:{height:"60%",backgroundColor:b,borderRadius:50,alignContent:"center",paddingHorizontal:x}}),R=function(){return Object(u.jsx)(r.default,{style:P.wrapper,children:Object(u.jsxs)(r.default,{style:P.container,children:[Object(u.jsxs)(r.default,{children:[Object(u.jsx)(c.default,{style:P.titlefourofour,children:"404"}),Object(u.jsx)(c.default,{style:P.titlebody,children:"Card Not Found"})]}),Object(u.jsx)(A.default,{style:P.image,source:n(263)}),Object(u.jsx)(c.default,{style:P.textBody,children:"An error has occurred and the business card cannot be loaded at this time, sorry for the inconvenience"})]})})},z=n(19),E=n.n(z),N=n(285),W={getBusiness:function(){var e=E()((function*(){return N.default.get("https://ebusinesscardservices.com/business/63d1f602022d42b7cc4aa558").then((function(e){return e.data})).catch((function(e){return console.log(e),null}))}));return function(){return e.apply(this,arguments)}}()},L=n(83),U=n(32),V=n(199),_=n(161),H=n(76),M=n(4),q=n.n(M),J=n(66),G=function(){var e=E()((function*(e){if("granted"===(yield J.requestPermissionsAsync()).status){var t,n=(t={},q()(t,J.Fields.FirstName,null==e?void 0:e.firstname),q()(t,J.Fields.LastName,null==e?void 0:e.lastname),q()(t,J.Fields.Company,null==e?void 0:e.company),q()(t,J.Fields.ContactType,null==e?void 0:e.contactType),q()(t,J.Fields.PhoneNumbers,[{countryCode:"us",digits:"5555648583",label:"mobile",number:"(555) 564-8583"},{countryCode:"us",digits:"4155553695",label:"main",number:"(415) 555-3695"}]),q()(t,J.Fields.Addresses,[{city:"Hillsborough",country:"USA",isoCountryCode:"us",label:"work",postalCode:"94010",region:"CA",street:"165 Davis Street"}]),q()(t,J.Fields.Emails,[{email:"kate-bell@mac.com",label:"work"}]),t),o=yield J.addContactAsync(n);return console.log(o),o}}));return function(t){return e.apply(this,arguments)}}(),K=U.default.get("window").height,Q=(U.default.get("window").width,o.default.create({formControl:{flexDirection:"row",justifyContent:"center"},formButton:{paddingTop:40},headerCloseIcon:{flex:2,margin:"auto",marginHorizontal:"85%",marginVertical:2},header:{fontSize:24,height:40,flexDirection:"row",justifyContent:"flex-end",alignItems:"flex-end",margin:"auto"},textInput:{paddingTop:10,paddingBottom:10,backgroundColor:"transparent"},body:{paddingTop:20,margin:"auto",flexDirection:"column"},modalText:{color:"#2c2c2c"},centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},container:{height:.8*K,borderRadius:25,backgroundColor:"ghostwhite",padding:35},wrapper:{marginVertical:"50%",padding:35,backgroundColor:"transparent"}})),X=function(e){var t=Object(l.useState)(""),n=i()(t,2),o=n[0],a=n[1],c=Object(l.useState)(""),s=i()(c,2),d=s[0],f=s[1],p=Object(l.useState)([{}]),b=i()(p,2),j=b[0],h=b[1],g=Object(l.useState)(""),m=i()(g,2),x=m[0],y=m[1],O=Object(l.useState)([{}]),v=i()(O,2),C=v[0],F=v[1],S=Object(l.useState)([{}]),T=i()(S,2),k=T[0],I=T[1],B=Object(l.useState)(""),D=i()(B,2),A=D[0],P=D[1];return Object(l.useEffect)((function(){var t,n,o,r,i;a(e.contact.firstname),f(e.contact.lastname),y(null==(t=e.contact)?void 0:t.company),h(null==(n=e.contact)?void 0:n.emails),F(null==(o=e.contact)?void 0:o.addresses),I(null==(r=e.contact)?void 0:r.phoneNumbers),P(null==(i=e.contact)?void 0:i.contactType)}),[]),Object(u.jsx)(r.default,{style:Q.centeredView,children:Object(u.jsx)(V.default,{visible:e.open,animationType:"slide",transparent:!0,onRequestClose:e.handleClose,children:Object(u.jsx)(r.default,{style:Q.wrapper,children:Object(u.jsxs)(r.default,{style:Q.container,children:[Object(u.jsx)(r.default,{style:Q.header,children:Object(u.jsx)(w.default,{style:Q.headerCloseIcon,icon:"close",size:24,onPress:e.handleClose})}),Object(u.jsxs)(r.default,{style:Q.body,children:[Object(u.jsx)(_.default,{style:Q.textInput,label:"Firstname",placeholder:o,value:o,onChangeText:function(){return a(o)}}),Object(u.jsx)(_.default,{style:Q.textInput,label:"Lastname",placeholder:d,value:d,onChangeText:function(){return f(d)}}),Object(u.jsx)(_.default,{style:Q.textInput,label:"Company",placeholder:x,value:x,onChangeText:function(){return y(x)}}),k?k.map((function(e,t){var n,o;return Object(u.jsx)(_.default,{style:Q.textInput,label:"Phone Number "+(t+1),placeholder:""+(null==(n=e[t])?void 0:n.number),value:""+(null==(o=e[t])?void 0:o.number),onChangeText:function(){var n;return I(null==(n=e[t])?void 0:n.number)}})})):null,j?j.map((function(e,t){return Object(u.jsx)(_.default,{style:Q.textInput,label:"Email "+(t+1),placeholder:""+e,value:""+e,onChangeText:function(){return h(e[t])}})})):null,C?C.map((function(e,t){return Object(u.jsx)(_.default,{style:Q.textInput,label:"Address "+(t+1),placeholder:""+e,value:""+e,onChangeText:function(){return F(e[t])}})})):null,Object(u.jsxs)(r.default,{style:Q.formControl,children:[Object(u.jsx)(H.default,{style:Q.formButton,icon:"close",onPress:e.handleClose,children:"Cancel"}),Object(u.jsx)(H.default,{style:Q.formButton,icon:"check-bold",onPress:function(){return G({addresses:C,company:x,contactType:A,emails:j,lastname:d,phoneNumbers:k,firstname:o}).then((function(e){return console.log(e)})).finally(e.handleClose)},children:"Confirm"})]})]})]})})})})},Y=function(){var e=Object(l.useState)(!1),t=i()(e,2),n=t[0],a=t[1],d=Object(l.useState)(!1),f=i()(d,2),j=f[0],h=f[1],m=Object(l.useState)(!1),y=i()(m,2),O=y[0],v=y[1],w=Object(L.useDispatch)(),F=U.default.get("window").width,S=U.default.get("window").height,T=Object(L.useSelector)((function(e){var t;return null==(t=e.application.application.BusinessData)?void 0:t.description})),k=Object(L.useSelector)((function(e){var t;return null==(t=e.application.application.BusinessData)?void 0:t.logo})),I=Object(L.useSelector)((function(e){var t;return null==(t=e.application.application.BusinessData)?void 0:t.socialMedia})),B=Object(L.useSelector)((function(e){var t;return null==(t=e.application.application.BusinessData)?void 0:t.contact})),A=o.default.create({lottie:{width:400,height:400},loadingText:{width:300,color:"white",fontWeight:"bold",fontSize:g,textAlign:"center"},wrapper:{width:F,height:S,flex:1,backgroundColor:"transparent",alignItems:"center",justifyContent:"center"},container:{position:"absolute",height:S-.2*S,width:F-.2*F,alignItems:"center",justifyContent:"center"},linkButtonText:{color:"#FFF",fontWeight:"bold",margin:"auto"},linkButton:{height:"auto",backgroundColor:b,borderRadius:50,alignContent:"center",paddingHorizontal:x}});return Object(l.useEffect)((function(){console.log("Retrieving business data"),W.getBusiness().then((function(e){e?(w({type:"SET_BUSINESS_DETAILS",payload:{BusinessData:e}}),a(!0),console.log("Business Data retrieved successfully")):e||(a(!1),h(!0),console.log("No network data retrieved"))})).catch((function(e){console.log(e)})),console.log("Retrieving user data")}),[]),Object(u.jsx)(r.default,{style:A.wrapper,children:n?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(X,{open:O,contact:B,handleClose:function(){v(!1)}}),Object(u.jsxs)(r.default,{style:A.container,children:[Object(u.jsx)(p,{image:{data:null==k?void 0:k.data,mime:null==k?void 0:k.mime}}),Object(u.jsx)(C,{description:T||"No Description"}),Object(u.jsx)(D,{socialMedia:I}),Object(u.jsx)(s.default,{style:A.linkButton,onPress:function(){v(!0)},children:Object(u.jsx)(c.default,{style:A.linkButtonText,children:"SAVE CONTACT"})})]})]}):j?Object(u.jsx)(R,{}):Object(u.jsx)(r.default,{style:A.container})})},Z=n(163),$=n(98);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){q()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne={application:{UserData:{_id:"",firstname:"",lastname:"",email:"",businessId:[""],password:"",profilePicture:{data:"",mime:""}},BusinessData:{_id:"",name:"",description:"",contact:"",address:"",pointOfContact:"",email:"",socialMedia:[{profileName:"",profileURL:""}]}}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BUSINESS_DETAILS":var n=t.payload;return te(te({},e),{},{application:n});case"SET_USER_DETAILS":var o=t.payload;return te(te({},e),{},{application:o});default:return e}},re=Object($.combineReducers)({application:oe}),ae=n(195),ie=n(196),le=Object(ae.composeWithDevTools)(Object($.applyMiddleware)(ie.default)),ce=Object($.createStore)(re,le);o.default.create;function se(){return Object(u.jsx)(Z.default,{children:Object(u.jsx)(L.Provider,{store:ce,children:Object(u.jsx)(r.default,{style:de.container,children:Object(u.jsx)(Y,{})})})})}var de=o.default.create({container:{flex:1,backgroundColor:b,alignItems:"center",justifyContent:"center"}})},203:function(e,t,n){e.exports=n(275)},245:function(e,t,n){e.exports=n.p+"static/media/avatar.20700481.png"},246:function(e,t,n){e.exports=n.p+"static/media/Twitter.bccdd347.png"},247:function(e,t,n){e.exports=n.p+"static/media/Instagram.80affaca.png"},263:function(e,t,n){e.exports=n.p+"static/media/cards.05701ed9.png"}},[[203,1,2]]]);
//# sourceMappingURL=app.6a6537d0.chunk.js.map