(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{134:function(e,t,r){"use strict";r.d(t,"a",(function(){return P}));var c=r(2),n=r.n(c),s=r(3),a=r.n(s),o=r(0),i=r(226),j=r(22),b=r(165),l=r(224),d=r(53),u=r(49),O=r(64),h=r(109),x=r(119),p=r(225),f=r(227),g=r(135),m=r.n(g),y=r(14);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(){var e=o.useState({}),t=a()(e,2),r=t[0],c=t[1];return Object(y.jsx)(i.a,{children:Object(y.jsx)(j.a,{flex:1,bg:"#313131",alignItems:"center",justifyContent:"center",children:Object(y.jsxs)(j.a,{bg:"light.50",w:"85%",maxW:300,h:"60%",maxH:400,rounded:"lg",children:[Object(y.jsxs)(b.a,{children:[Object(y.jsx)(l.a,{children:"SecretMail"}),Object(y.jsx)(d.a,{children:"Obrigado por usar nossa ferramenta."})]}),Object(y.jsx)(u.a,{children:Object(y.jsxs)(O.a,{mx:"4",children:[Object(y.jsx)(u.a.Label,{children:"Destinat\xe1rio"}),Object(y.jsx)(h.a,{type:"email",placeholder:"",onChangeText:function(e){return c(v(v({},r),{},{destinatario:e}))}}),Object(y.jsx)(u.a.ErrorMessage,{leftIcon:Object(y.jsx)(x.a,{size:"xs"}),children:"Voc\xea esqueceu de preencher o campo do destinat\xe1rio"})]})}),Object(y.jsx)(u.a,{children:Object(y.jsxs)(O.a,{mx:"4",children:[Object(y.jsx)(u.a.Label,{children:"Assunto"}),Object(y.jsx)(h.a,{type:"text",placeholder:"",onChangeText:function(e){return c(v(v({},r),{},{assunto:e}))}}),Object(y.jsx)(u.a.ErrorMessage,{leftIcon:Object(y.jsx)(x.a,{size:"xs"}),children:"Voc\xea esqueceu de preencher o campo do destinat\xe1rio"})]})}),Object(y.jsx)(u.a,{children:Object(y.jsxs)(O.a,{mx:"4",children:[Object(y.jsx)(u.a.Label,{children:"Mensagem"}),Object(y.jsx)(p.a,{type:"text",placeholder:"",onChangeText:function(e){return c(v(v({},r),{},{msg:e}))}}),Object(y.jsx)(u.a.ErrorMessage,{leftIcon:Object(y.jsx)(x.a,{size:"xs"}),children:"Voc\xea esqueceu de preencher o campo do destinat\xe1rio"})]})}),Object(y.jsx)(b.a,{children:Object(y.jsx)(f.a,{onPress:function(){m.a.get("https://birdra1n.x10.bz/SecretMail/api/send/",{params:{to:r.destinatario,subject:r.assunto,message:r.msg}}).then((function(e){void 0!=e.data.message_success&&alert("Seu email foi enviado com sucesso!")}))},mt:"7",w:"70%",colorScheme:"light",children:"Enviar"})})]})})})}},173:function(e,t,r){e.exports=r(222)}},[[173,1,2]]]);
//# sourceMappingURL=app.b69da3ab.chunk.js.map