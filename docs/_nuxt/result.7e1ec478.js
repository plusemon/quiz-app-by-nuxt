import{f,q as w,o,b as c,e,t,m as _,F as g,r as m,j as h,s as k,x as S}from"./entry.50d15a62.js";import{_ as C}from"./_plugin-vue_export-helper.a1a6add7.js";const p=l=>(k("data-v-4b4fcfd4"),l=l(),S(),l),z={class:"card mb-3 text-center"},I={class:"card-body"},A={class:"text-center fw-bold"},B=p(()=>e("hr",null,null,-1)),D={class:"text-primary fw-bold"},R=p(()=>e("hr",null,null,-1)),j={class:"d-flex justify-content-around"},F={key:0,class:"card"},N={class:"card-body"},V=p(()=>e("h3",{class:"bg-primary border-bottom card-title mb-4 py-3 rounded text-center text-white"},"Detailed Quiz Result",-1)),E={class:"card-body"},L={class:"fw-bold"},O={class:"d-flex flex-column gap-3 options"},Q={class:"text-center"},T={__name:"result",setup(l){const r=f(w[0]),d=f(!1),b=()=>r.value.questions.filter(n=>v(n)).length;function v(n){return n.correct_ans.every(u=>n.choosen_ans.includes(u))}const i=()=>b()/r.value.questions.length*100;return(n,u)=>(o(),c("section",null,[e("div",z,[e("div",I,[e("h6",A,"Topic: "+t(r.value.title),1),B,e("h1",{class:_([i()?"text-success":"text-danger"])},t(i()?"Congratulations":"Opps"),3),e("h3",D,"Your Score: "+t(i()),1),R,e("div",j,[e("h6",null,"Correct Answar: "+t(b())+" /"+t(r.value.questions.length),1)])])]),d.value?(o(),c("div",F,[e("div",N,[V,d.value?(o(!0),c(g,{key:0},m(r.value.questions,(s,y)=>(o(),c("div",{class:_(["card mb-2",[v(s)?"bg-success bg-opacity-25":"bg-danger bg-opacity-10"]])},[e("div",E,[e("p",L,t(y+1)+". "+t(s.title),1),e("div",O,[(o(!0),c(g,null,m(s.options,(x,a)=>(o(),c("span",{class:_(["border p-2 option rounded",{"green-border":s.correct_ans.includes(a),"bg-success text-white":s.correct_ans.includes(a)&&s.choosen_ans.includes(a),"bg-danger text-white":!s.correct_ans.includes(a)&&s.choosen_ans.includes(a)}])},t(x),3))),256))])])],2))),256)):h("",!0)])])):h("",!0),e("div",Q,[d.value?h("",!0):(o(),c("button",{key:0,class:"btn btn-outline-dark",onClick:u[0]||(u[0]=s=>d.value=!0)},"Show Detailed Result"))])]))}},G=C(T,[["__scopeId","data-v-4b4fcfd4"]]);export{G as default};