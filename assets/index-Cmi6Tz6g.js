import{d,r as i,c as v,a as p,b as m,o as _}from"./index-GUy3qjYq.js";const u={class:""},k=d({__name:"index",setup(C){const l=i([{title:"吃饭",start:"2024-05-31 08:00",end:"2024-05-31 12:00",editable:!0},{title:"运动",start:"2024-06-01 10:00",end:"2024-06-01 18:00"}]),o=e=>{console.log(e),l.value.push({title:"睡觉",start:"2024-05-30 08:00",end:"2024-05-30 12:00",editable:!0})},a=e=>{console.log(e)},s=e=>{let n=document.createElement("div"),t=e.timeText.split("-"),c=t[0].replace("上午","").replace("下午","").replace("时",""),r=t[1].replace("上午","").replace("下午","").replace("时","");return n.innerHTML=`
                    <div class="eventContent">开始时间:${c}</div>
                    <div>结束时间:${r}</div>
                    <div>标题:${e.event._def.title}</div>
                `,console.log(e),{domNodes:[n]}};return(e,n)=>{const t=m("m-calendar");return _(),v("div",u,[p(t,{onDateClick:o,onEventClick:a,events:l.value,displayEventEnd:"",eventContent:s},null,8,["events"])])}}});export{k as default};
