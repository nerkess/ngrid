(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{WPM6:function(e,t,i){"use strict";i.d(t,"a",function(){return a});var r=i("XiUz"),s=i("znSr"),n=i("YT2F"),c=i("fXoL");let a=(()=>{class e{}return e.\u0275mod=c.Pb({type:e}),e.\u0275inj=c.Ob({factory:function(t){return new(t||e)},imports:[[r.i,s.e,n.l],r.i,s.e,n.l]}),e})()},Y9SF:function(e,t,i){"use strict";i.r(t),i.d(t,"ColumnResizeExampleModule",function(){return w});var r=i("mrSG"),s=i("ofXK"),n=i("XEBs"),c=i("LnE1"),a=i("YT2F"),o=i("WPM6"),l=i("fluT"),p=i("fXoL"),d=i("XkVd");let u=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(n.r)().table({prop:"id",width:"40px"},{prop:"name",resize:!0},{prop:"gender",resize:!0,width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(n.s)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}};return e.\u0275fac=function(t){return new(t||e)(p.Rb(l.a))},e.\u0275cmp=p.Lb({type:e,selectors:[["pbl-column-resize-example"]],decls:1,vars:2,consts:[[1,"pbl-ngrid-cell-ellipsis","pbl-ngrid-header-cell-ellipsis",3,"dataSource","columns"]],template:function(e,t){1&e&&p.Sb(0,"pbl-ngrid",0),2&e&&p.qc("dataSource",t.ds)("columns",t.columns)},directives:[d.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(r.a)([Object(a.e)("pbl-column-resize-example",{title:"Simple Resizing"}),Object(r.b)("design:paramtypes",[l.a])],e),e})(),b=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(n.r)().table({prop:"id",width:"40px"},{prop:"name",width:"15%"},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date",maxWidth:120}).build(),this.ds=Object(n.s)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}resize(){const e=this.ds.hostGrid.columnApi.findColumn("id");this.ds.hostGrid.columnApi.resizeColumn(e,"200px")}};return e.\u0275fac=function(t){return new(t||e)(p.Rb(l.a))},e.\u0275cmp=p.Lb({type:e,selectors:[["pbl-resizing-with-the-api-example"]],decls:6,vars:2,consts:[[3,"click"],[1,"pbl-ngrid-cell-ellipsis","pbl-ngrid-header-cell-ellipsis",3,"dataSource","columns"],["pblTable1",""]],template:function(e,t){if(1&e){const e=p.Yb();p.Xb(0,"button",0),p.fc("click",function(){return t.resize()}),p.Lc(1,"Resize id to 200px"),p.Wb(),p.Xb(2,"button",0),p.fc("click",function(){return p.yc(e),p.vc(5).autoSizeColumnToFit()}),p.Lc(3,"Fit Content"),p.Wb(),p.Sb(4,"pbl-ngrid",1,2)}2&e&&(p.Fb(4),p.qc("dataSource",t.ds)("columns",t.columns))},directives:[d.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(r.a)([Object(a.e)("pbl-resizing-with-the-api-example",{title:"Resizing With The Api"}),Object(r.b)("design:paramtypes",[l.a])],e),e})(),m=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(n.r)().table({prop:"id",width:"40px"},{prop:"name",resize:!0,minWidth:100,maxWidth:300},{prop:"gender",resize:!0,minWidth:50},{prop:"birthdate",type:"date"}).build(),this.ds=Object(n.s)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}};return e.\u0275fac=function(t){return new(t||e)(p.Rb(l.a))},e.\u0275cmp=p.Lb({type:e,selectors:[["pbl-resize-boundaries-example"]],decls:1,vars:2,consts:[[3,"dataSource","columns"]],template:function(e,t){1&e&&p.Sb(0,"pbl-ngrid",0),2&e&&p.qc("dataSource",t.ds)("columns",t.columns)},directives:[d.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(r.a)([Object(a.e)("pbl-resize-boundaries-example",{title:"Resize Boundaries"}),Object(r.b)("design:paramtypes",[l.a])],e),e})();var h=i("Dw4w"),g=i("m6/o");function f(e,t){1&e&&(p.Xb(0,"pbl-ngrid-drag-resize",2),p.Sb(1,"span",3),p.Wb()),2&e&&p.qc("context",t.$implicit)("grabAreaWidth",8)}let z=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(n.r)().default({resize:!0}).table({prop:"id",wontBudge:!0,width:"40px"},{prop:"name"},{prop:"gender",width:"50px"},{prop:"email",width:"150px"},{prop:"country"},{prop:"language"},{prop:"birthdate",type:"date"},{prop:"balance"}).headerGroup({prop:"name",span:1,label:"Group A"},{prop:"country",span:1,label:"Group B"}).build(),this.ds=Object(n.s)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}};return e.\u0275fac=function(t){return new(t||e)(p.Rb(l.a))},e.\u0275cmp=p.Lb({type:e,selectors:[["pbl-custom-resizing-example"]],decls:2,vars:2,consts:[[3,"dataSource","columns"],[3,"context","grabAreaWidth",4,"pblNgridCellResizerRef"],[3,"context","grabAreaWidth"],[1,"pbl-ngrid-column-resizer-handle"]],template:function(e,t){1&e&&(p.Xb(0,"pbl-ngrid",0),p.Jc(1,f,2,2,"pbl-ngrid-drag-resize",1),p.Wb()),2&e&&p.qc("dataSource",t.ds)("columns",t.columns)},directives:[d.a,h.a,g.b],styles:[""],encapsulation:2,changeDetection:0}),e=Object(r.a)([Object(a.e)("pbl-custom-resizing-example",{title:"Custom Resizing"}),Object(r.b)("design:paramtypes",[l.a])],e),e})(),w=(()=>{let e=class{};return e.\u0275mod=p.Pb({type:e}),e.\u0275inj=p.Ob({factory:function(t){return new(t||e)},imports:[[s.c,o.a,n.j,c.a.withDefaultTemplates()]]}),e=Object(r.a)([Object(a.a)(u,b,m,z)],e),e})()}}]);