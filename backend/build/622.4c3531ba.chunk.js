"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[622],{60622:(W,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>m});var a=_(92132),o=_(48817),n=_(3803),A=_(21272),C=_(2291),R=_(5409),i=_(6759),U=_(15126),B=_(63299),v=_(67014),t=_(59080),l=_(79275),L=_(14718),I=_(82437),d=_(61535),O=_(5790),T=_(12083),M=_(35223),E=_(74930),D=_(2600),K=_(48940),P=_(41286),h=_(51187),r=_(56336),f=_(39404),g=_(58692),S=_(54257),N=_(501),y=_(57646),j=_(23120),c=_(44414),F=_(25962),V=_(14664),X=_(42588),x=_(90325),$=_(62785),G=_(87443),H=_(41032),z=_(22957),Q=_(93179),Y=_(73055),Z=_(15747),J=_(85306),e=_(77965),u=_(26509),p=_(84624),k=_(71210),w=_(32058),b=_(81185),q=_(82261),__=_(62482),E_=_(37629),t_=_(42293),s_=_(38992),O_=_(55151),M_=_(79077),D_=_(67031);const m=()=>((0,n.u)(),(0,a.jsx)(o.e,{}))},3803:(W,s,_)=>{_.d(s,{u:()=>v});var a=_(21272),o=_(2291),n=_(67031),A=_(54894),C=_(17703),R=_(6759);const i="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",B="https://strapi.io/billing/request-seats",v=()=>{const{formatMessage:t}=(0,A.A)(),{license:l,isError:L,isLoading:I}=(0,R.m)(),d=(0,o.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:D}=l??{};a.useEffect(()=>{if(L||I)return;const K=!n(M)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let P;E==="OVER_LIMIT"?P="warning":E==="AT_LIMIT"&&(P="softWarning"),K&&d({type:P,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:M}),link:{url:D?U:B,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:D})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[d,l,O,t,I,M,E,T,D,L])}}}]);