import{k as E,r as I,e as H,l as N,m as O,C as d,t as a,n as R,f as V,o as i,c as l,a as s,u as o,b as y,j as u,p as K,h as P,q as h,F as _,i as T,d as q,v as Y,s as j,U as v,M as S,x as w,y as z,z as W}from"./index-BCYkUbMV.js";const J=s("br",null,null,-1),Q=["src"],X={style:{display:"inline-block","vertical-align":"middle"}},Z={style:{margin:"0px"}},ee={key:0,style:{display:"inline-block"}},te=s("button",null,"Edit Group",-1),se=s("br",null,null,-1),ae={style:{"text-align":"center"}},ne={key:0},ie={key:0},le={key:1},oe={key:0},re={key:2},ue=["src"],ce={key:3},de=["src"],he={key:0},ve=s("br",null,null,-1),pe=s("br",null,null,-1),ge=s("br",null,null,-1),Ce={__name:"Chat",setup(ye){const U=E(),p=I(""),D=I(""),c=I(),{userId:F,groupId:A}=U.query,b=H(()=>B(a.messages));let C=!1,f=0;N([b,()=>a.activeChat?.isTyping],m),O(async()=>{await d.SetActiveChat(F,A),await d.LoadActiveChatMessages(),await d.ReadActiveChat(),d.GetUserLastOnline(),a.readyActiveChat=!0}),R(()=>{a.activeChat=null,a.messages=[]});async function M(){var r=await v.getAttachment(D);p.value==""&&r.type==null||(S.SendMessage({userId:a.activeChat.userId,groupId:a.activeChat.groupId,type:r.type??v.MessageType.Text,text:p.value,attachmentUrl:r.url}),p.value="")}async function m(){await w(),c.value.scrollTo({top:c.value.scrollHeight})}function G(r){!C&&r.key!="Backspace"&&a.activeChat.userId&&(C=!0,S.SendTyping(),setTimeout(()=>C=!1,4e3))}async function L(){if(c.value.scrollTop==0){if(f==a.messages.length)return;f=a.messages.length;var r=c.value.scrollHeight;await d.LoadActiveChatMessagesFromApi(f),await w(),c.value.scrollTo({top:c.value.scrollHeight-r})}}function B(r){return r.sort((n,t)=>n.id-t.id).reduce((n,t)=>{var e=n[n.length-1],g=`${t.sentDate.getHours()}.${t.sentDate.getMinutes()}`;return e&&e.userId===t.senderUser.id?(e.id=v.randomNumber(),e.messages.push(t),e.status=t.status,e.sentDate=t.sentDate,e.sentTime=g):n.push({id:t.id,userId:t.senderUser.id,messages:[{...t,isFirstInGroup:!0}],status:t.status,sentDate:t.sentDate,sentTime:g}),n},[]).reduce((n,t)=>{var e=n[n.length-1],g=`${t.sentDate.getDate()}.${t.sentDate.getMonth()+1}.${t.sentDate.getFullYear()}`;return e&&e.day===g?e.userGroups.push(t):n.push({day:g,userGroups:[t]}),n},[])}async function $(){confirm("Are you sure?")&&(await d.DeleteContact(a.activeChat.userId,a.activeChat.groupId),z.push("/chatlist"))}return(r,k)=>{const x=V("RouterLink");return i(),l(_,null,[J,s("div",null,[s("img",{src:o(v).getFilePath(o(a).activeChat?.imageUrl),width:"50",height:"50",style:{"vertical-align":"middle","border-radius":"50%"}},null,8,Q),y("  "),s("div",X,[s("h3",Z,u(o(a).activeChat?.name),1),y(" "+u(o(a).activeChat?.isOnline?"Online":o(a).activeChat?.lastOnline),1)]),y("  "),o(a).activeChat?.id?(i(),l("div",ee,[s("button",{onClick:$},"Delete "+u(o(a).activeChat.groupId?" And Leave":""),1),o(a).activeChat?.groupId?(i(),K(x,{key:0,to:"/editgroup?id="+o(a).activeChat.groupId},{default:P(()=>[te]),_:1},8,["to"])):h("",!0)])):h("",!0)]),se,s("div",{id:"messagesDiv",ref_key:"contentEl",ref:c,onScroll:L},[(i(!0),l(_,null,T(b.value,n=>(i(),l("div",{key:n.day},[s("div",ae,u(n.day),1),(i(!0),l(_,null,T(n.userGroups,t=>(i(),l("div",{key:t.id},[(i(!0),l(_,null,T(t.messages,e=>(i(),l("div",null,[t.userId==o(W).loggedUser.id?(i(),l("div",ne,[e.isFirstInGroup?(i(),l("b",ie,"You:")):h("",!0),s("div",null,u(e.text)+" "+u(e.status==0?"Waiting":e.status==1?"Sent":e.status==2?"✓":e.status==3?"✓✓":""),1)])):(i(),l("div",le,[e.isFirstInGroup?(i(),l("b",oe,u(e.senderUser.name)+":",1)):h("",!0),s("div",null,u(e.text),1)])),e.type==1?(i(),l("div",re,[s("img",{src:o(v).getFilePath(e.attachmentUrl),onload:m,height:"120"},null,8,ue)])):e.type==2&&e.attachmentUrl?(i(),l("div",ce,[s("audio",{controls:"",onloadeddata:m},[s("source",{src:o(v).getFilePath(e.attachmentUrl)},null,8,de)])])):h("",!0)]))),256)),s("div",null,u(t.sentDate.toLocaleString()),1)]))),128))]))),128)),o(a).activeChat?.isTyping?(i(),l("div",he,[s("b",null,u(o(a).activeChat?.name),1),y(": Typing...")])):h("",!0)],544),ve,s("div",null,[q(s("input",{type:"text",placeholder:"type...",onKeydown:j(M,["enter"]),onKeyup:G,"onUpdate:modelValue":k[0]||(k[0]=n=>p.value=n)},null,544),[[Y,p.value]]),s("input",{type:"button",value:"Send",onClick:M}),y(),pe,ge,s("input",{type:"file",ref_key:"attachment",ref:D},null,512)])],64)}}};export{Ce as default};
