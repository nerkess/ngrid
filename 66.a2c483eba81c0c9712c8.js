(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{DHO5:function(e,t,i){"use strict";i.r(t),i.d(t,"StrategiesExampleModule",function(){return S});var a=i("mrSG"),c=i("ofXK"),r=i("FKr1"),o=i("XEBs"),n=i("M1+n"),l=i("YT2F"),p=i("WPM6"),s=i("fluT"),d=i("fXoL"),b=i("XkVd"),u=i("yNqP");let m=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.r)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(o.s)().onTrigger(()=>this.datasource.getPeople(100,500)).create()}};return e.\u0275fac=function(t){return new(t||e)(d.Rb(s.a))},e.\u0275cmp=d.Lb({type:e,selectors:[["pbl-fixed-size-example"]],decls:1,vars:2,consts:[["vScrollFixed","",1,"pbl-ngrid-cell-ellipsis",3,"dataSource","columns"]],template:function(e,t){1&e&&d.Sb(0,"pbl-ngrid",0),2&e&&d.qc("dataSource",t.ds)("columns",t.columns)},directives:[b.a,u.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(a.a)([Object(l.e)("pbl-fixed-size-example",{title:"Fixed Size"}),Object(a.b)("design:paramtypes",[s.a])],e),e})();var g=i("7WRX");let h=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.r)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(o.s)().onTrigger(()=>this.datasource.getPeople(100,500)).create()}};return e.\u0275fac=function(t){return new(t||e)(d.Rb(s.a))},e.\u0275cmp=d.Lb({type:e,selectors:[["pbl-auto-size-example"]],decls:1,vars:2,consts:[["vScrollAuto","",3,"dataSource","columns"]],template:function(e,t){1&e&&d.Sb(0,"pbl-ngrid",0),2&e&&d.qc("dataSource",t.ds)("columns",t.columns)},directives:[b.a,g.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(a.a)([Object(l.e)("pbl-auto-size-example",{title:"Auto Size"}),Object(a.b)("design:paramtypes",[s.a])],e),e})();var w=i("R0Ic"),f=i("ugF5"),j=i("z6lm"),x=i("NRLV"),O=i("fdU2");function y(e,t){1&e&&d.Sb(0,"pbl-ngrid-row",3),2&e&&d.qc("detailRow",t.$implicit)}function v(e,t){if(1&e&&(d.Xb(0,"div",4),d.fc("@detailExpand.done",function(){return t.animation.end()}),d.Xb(1,"div"),d.Xb(2,"h1"),d.Lc(3,"Detail Row"),d.Wb(),d.Xb(4,"pre"),d.Lc(5),d.kc(6,"json"),d.Wb(),d.Wb(),d.Wb()),2&e){const e=t.$implicit;d.qc("@.disabled",t.animation.fromRender)("@detailExpand",void 0),d.Fb(5),d.Mc(d.lc(6,3,e))}}let R=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.r)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(o.s)().onTrigger(()=>this.datasource.getPeople(100,500)).create(),this.rowClassUpdate=e=>{if(200===e.dsIndex)return"big-row"}}};return e.\u0275fac=function(t){return new(t||e)(d.Rb(s.a))},e.\u0275cmp=d.Lb({type:e,selectors:[["pbl-dynamic-size-example"]],decls:3,vars:3,consts:[["detailRow","","vScrollDynamic","",1,"pbl-ngrid-cell-ellipsis",3,"dataSource","columns"],["matRipple","",3,"detailRow",4,"pblNgridDetailRowParentRef"],["class","pbl-detail-row",4,"pblNgridDetailRowDef","pblNgridDetailRowDefHasAnimation"],["matRipple","",3,"detailRow"],[1,"pbl-detail-row"]],template:function(e,t){1&e&&(d.Xb(0,"pbl-ngrid",0),d.Jc(1,y,1,1,"pbl-ngrid-row",1),d.Jc(2,v,7,5,"div",2),d.Wb()),2&e&&(d.qc("dataSource",t.ds)("columns",t.columns),d.Fb(2),d.qc("pblNgridDetailRowDefHasAnimation","interaction"))},directives:[b.a,f.b,j.a,x.c,x.b,O.a],pipes:[c.k],styles:[".big-row{height:600px}"],encapsulation:2,data:{animation:[Object(w.m)("detailExpand",[Object(w.j)("void",Object(w.k)({height:"0px",minHeight:"0",visibility:"hidden"})),Object(w.j)("*",Object(w.k)({height:"*",visibility:"visible"})),Object(w.l)("void <=> *",Object(w.e)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]},changeDetection:0}),e=Object(a.a)([Object(l.e)("pbl-dynamic-size-example",{title:"Dynamic Size"}),Object(a.b)("design:paramtypes",[s.a])],e),e})(),S=(()=>{let e=class{};return e.\u0275mod=d.Pb({type:e}),e.\u0275inj=d.Ob({factory:function(t){return new(t||e)},imports:[[r.i,c.c,p.a,o.j,n.a]]}),e=Object(a.a)([Object(l.a)(m,h,R)],e),e})()}}]);