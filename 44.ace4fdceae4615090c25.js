(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"619k":function(t,e,n){"use strict";n.r(e),n.d(e,"ColumnFilterExampleModule",function(){return f});var r=n("mrSG"),c=n("ofXK"),i=n("XEBs"),a=n("YT2F"),l=n("WPM6"),o=n("fluT"),s=n("fXoL"),u=n("XiUz"),b=n("XkVd");const d=Object(i.r)().default({minWidth:100}).table({prop:"id",width:"40px"},{prop:"name"},{prop:"gender",width:"50px"},{prop:"balance",width:"200px",filter:(t,e)=>e>t.min&&e<t.max}).build();let p=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=d,this.ds=Object(i.s)().onTrigger(()=>this.datasource.getPeople(500)).create()}clearFilter(){this.ds.setFilter()}filterBalance(t){this.ds.hostGrid.setFilter(t?{min:Number.MIN_SAFE_INTEGER,max:0}:{min:0,max:Number.MAX_SAFE_INTEGER},["balance"])}};return t.\u0275fac=function(e){return new(e||t)(s.Rb(o.a))},t.\u0275cmp=s.Lb({type:t,selectors:[["pbl-column-filter-example"]],decls:11,vars:3,consts:[["fxLayout","row","fxLayoutGap","16px",2,"padding","8px"],["fxFlex","noshrink","mat-stroked-button","","color","primary",3,"click"],["fxFlex","*"],["blockUi","",3,"dataSource","columns"]],template:function(t,e){1&t&&(s.Xb(0,"div",0),s.Xb(1,"button",1),s.fc("click",function(){return e.filterBalance(!0)}),s.Lc(2,"Balance: Negative"),s.Wb(),s.Xb(3,"button",1),s.fc("click",function(){return e.filterBalance(!1)}),s.Lc(4,"Balance: Positive"),s.Wb(),s.Sb(5,"div",2),s.Xb(6,"button",1),s.fc("click",function(){return e.clearFilter()}),s.Lc(7,"Clear Filter"),s.Wb(),s.Wb(),s.Sb(8,"pbl-ngrid",3),s.Xb(9,"div"),s.Lc(10),s.Wb()),2&t&&(s.Fb(8),s.qc("dataSource",e.ds)("columns",e.columns),s.Fb(2),s.Nc("Filtered Rows: ",e.ds.filteredData.length,""))},directives:[u.f,u.g,u.b,b.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(r.a)([Object(a.e)("pbl-column-filter-example",{title:"Column Filter"}),Object(r.b)("design:paramtypes",[o.a])],t),t})(),f=(()=>{let t=class{};return t.\u0275mod=s.Pb({type:t}),t.\u0275inj=s.Ob({factory:function(e){return new(e||t)},imports:[[c.c,l.a,i.j]]}),t=Object(r.a)([Object(a.a)(p)],t),t})()},WPM6:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n("XiUz"),c=n("znSr"),i=n("YT2F"),a=n("fXoL");let l=(()=>{class t{}return t.\u0275mod=a.Pb({type:t}),t.\u0275inj=a.Ob({factory:function(e){return new(e||t)},imports:[[r.i,c.e,i.l],r.i,c.e,i.l]}),t})()}}]);