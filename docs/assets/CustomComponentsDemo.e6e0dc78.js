import{d as t,_ as r,u as a,r as c,o as i,c as p,a as u}from"./app.216eec89.js";import{T as _}from"./vue3-date-time-picker.esm.f6c600f4.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const l=t(()=>r(()=>import("./MonthYearCmp.230f9dab.js"),["assets/MonthYearCmp.230f9dab.js","assets/ChevronLeftIcon.d263a012.js","assets/app.216eec89.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ChevronRightIcon.89bc751b.js"])),k=t(()=>r(()=>import("./TimePickerCmp.dd3f23ba.js"),["assets/TimePickerCmp.dd3f23ba.js","assets/app.216eec89.js","assets/plugin-vue_export-helper.21dcd24c.js"])),C=t(()=>r(()=>import("./ActionRowCmp.07ec064d.js"),["assets/ActionRowCmp.07ec064d.js","assets/app.216eec89.js","assets/plugin-vue_export-helper.21dcd24c.js"])),h={components:{Datepicker:_},props:["useCustomMonthYear","useCustomTimePicker","useCustomActionRow"],data(){return{date:new Date,dark:!0}},mounted(){this.dark=a()},computed:{monthYearCmp(){return this.useCustomMonthYear?l:null},timePickerCmp(){return this.useCustomTimePicker?k:null},actionRowCmp(){return this.useCustomActionRow?C:null}}},f={class:"demo-wrap"};function w(D,n,P,R,e,o){const m=c("Datepicker");return i(),p("div",f,[u(m,{modelValue:e.date,"onUpdate:modelValue":n[0]||(n[0]=s=>e.date=s),dark:e.dark,"month-year-component":o.monthYearCmp,"time-picker-component":o.timePickerCmp,"action-row-component":o.actionRowCmp},null,8,["modelValue","dark","month-year-component","time-picker-component","action-row-component"])])}var E=d(h,[["render",w]]);export{E as default};