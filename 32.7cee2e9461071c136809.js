(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"4DA5":function(t,e,i){"use strict";i.d(e,"a",function(){return c}),i.d(e,"b",function(){return l});var r=i("7+OI"),n=i("8LU1"),a=i("DcT9"),o=i("XEBs"),s=i("fXoL");const c="blockUi";let l=(()=>{class t{constructor(t,e){this.grid=t,this._blockInProgress=!1,this._removePlugin=e.setPlugin(c,this),t.registry.changes.subscribe(t=>{for(const e of t)switch(e.type){case"blocker":this.setupBlocker()}}),e.onInit().subscribe(t=>{t&&this._blockUi&&"boolean"==typeof this._blockUi&&this.setupBlocker()}),e.events.subscribe(t=>{if("onDataSource"===t.kind){const{prev:e,curr:i}=t;e&&a.r.kill(this,e),i.onSourceChanging.pipe(Object(a.r)(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),i.onSourceChanged.pipe(Object(a.r)(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(t){let e=Object(n.c)(t);!e||"auto"!==t&&""!==t||(e="auto"),Object(r.a)(t)&&this._blockUi!==t?(Object(r.a)(this._blockUi)&&a.r.kill(this,this._blockUi),this._blockUi=t,t.pipe(Object(a.r)(this,this._blockUi)).subscribe(t=>{this._blockInProgress=t,this.setupBlocker()})):this._blockUi!==e&&(this._blockUi=e,"auto"!==e&&(this._blockInProgress=e,this.setupBlocker()))}ngOnDestroy(){a.r.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this.grid.isInit)if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const t=this.grid.registry.getSingle("blocker");t&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",t.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(o.f),s.Sb(o.m))},t.\u0275dir=s.Nb({type:t,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),t})()},"6JOf":function(t,e,i){"use strict";i.d(e,"a",function(){return c});var r=i("ofXK"),n=i("f6nW"),a=i("XEBs"),o=i("4DA5"),s=i("fXoL");let c=(()=>{class t{}return t.NGRID_PLUGIN=Object(a.u)({id:o.a},o.b),t.\u0275mod=s.Qb({type:t}),t.\u0275inj=s.Pb({factory:function(e){return new(e||t)},imports:[[r.c,n.r,a.j]]}),t})()},WPM6:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var r=i("XiUz"),n=i("znSr"),a=i("YT2F"),o=i("fXoL");let s=(()=>{class t{}return t.\u0275mod=o.Qb({type:t}),t.\u0275inj=o.Pb({factory:function(e){return new(e||t)},imports:[[r.i,n.e,a.l],r.i,n.e,a.l]}),t})()},eZhf:function(t,e,i){"use strict";i.r(e),i.d(e,"PaginationExampleModule",function(){return v});var r=i("mrSG"),n=i("ofXK"),a=i("bTqV"),o=i("XEBs"),s=i("6JOf"),c=i("ewPf"),l=i("YT2F"),p=i("WPM6"),b=i("fluT"),d=i("fXoL"),u=i("XkVd"),g=i("4DA5"),h=i("z6lm"),f=i("mxEP"),m=i("ibH8");function k(t,e){if(1&t&&d.Tb(0,"pbl-ngrid-paginator",2),2&t){const t=e.$implicit;d.uc("grid",t)("paginator",t.ds.paginator)}}let O=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(o.r)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(o.s)().onTrigger(()=>this.datasource.getPeople(1e3,5e3)).create()}};return t.\u0275fac=function(e){return new(e||t)(d.Sb(b.a))},t.\u0275cmp=d.Mb({type:t,selectors:[["pbl-pagination-example"]],decls:2,vars:2,consts:[["usePagination","","blockUi","","vScrollNone","",3,"dataSource","columns"],[3,"grid","paginator",4,"pblNgridPaginatorRef"],[3,"grid","paginator"]],template:function(t,e){1&t&&(d.Yb(0,"pbl-ngrid",0),d.Qc(1,k,1,2,"pbl-ngrid-paginator",1),d.Xb()),2&t&&d.uc("dataSource",e.ds)("columns",e.columns)},directives:[u.a,g.b,h.a,f.a,m.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(r.a)([Object(l.e)("pbl-pagination-example",{title:"Client Side Pagination"}),Object(r.b)("design:paramtypes",[b.a])],t),t})();var j=i("Cfvw"),P=i("lJxs");function y(t,e){if(1&t&&d.Tb(0,"pbl-ngrid-paginator",2),2&t){const t=e.$implicit;d.uc("grid",t)("paginator",t.ds.paginator)}}let _=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(o.r)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(o.s)().onTrigger(t=>{const{page:e,perPage:i}=this.ds.paginator;return function(t,e,i){return Object(j.a)(t.getPeople(500,5e3)).pipe(Object(P.a)(t=>{const r=(e-1)*i,n=Math.min(t.length,r+i);return{total:t.length,data:t.slice(r,n)}}))}(this.datasource,e,i).pipe(Object(P.a)(e=>(t.updateTotalLength(e.total),e.data)))}).setCustomTriggers("pagination").create()}};return t.\u0275fac=function(e){return new(e||t)(d.Sb(b.a))},t.\u0275cmp=d.Mb({type:t,selectors:[["pbl-async-page-number-example"]],decls:2,vars:2,consts:[["usePagination","","blockUi","",3,"dataSource","columns"],[3,"grid","paginator",4,"pblNgridPaginatorRef"],[3,"grid","paginator"]],template:function(t,e){1&t&&(d.Yb(0,"pbl-ngrid",0),d.Qc(1,y,1,2,"pbl-ngrid-paginator",1),d.Xb()),2&t&&d.uc("dataSource",e.ds)("columns",e.columns)},directives:[u.a,g.b,f.a,m.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(r.a)([Object(l.e)("pbl-async-page-number-example",{title:"Async: Page Number"}),Object(r.b)("design:paramtypes",[b.a])],t),t})();function U(t,e){if(1&t&&d.Tb(0,"pbl-ngrid-paginator",2),2&t){const t=e.$implicit;d.uc("grid",t)("paginator",t.ds.paginator)}}function w(t,e,i){return Object(j.a)(t.getPeople(500,5e3)).pipe(Object(P.a)(t=>{const r=(e-1)*i,n=Math.min(t.length,r+i);return{total:t.length,data:t.slice(r,n)}}))}let S=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(o.r)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(o.s)().onTrigger(t=>{const{pagination:e}=t;let i;e.page.changed&&(i=e.page.curr),i||this.ds.paginator.reset();const{perPage:r}=this.ds.paginator;return function(t,e){const i=(t,e)=>btoa(JSON.stringify({page:t,perPage:e}));if("string"==typeof e){const r=JSON.parse(atob(e)),{page:n,perPage:a}=r;return w(t,n,a).pipe(Object(P.a)(t=>({token:i(n+1,a),data:t.data})))}{const r=i(2,e);return w(t,1,e).pipe(Object(P.a)(t=>({token:r,data:t.data})))}}(this.datasource,i||r).pipe(Object(P.a)(e=>(e.token&&this.ds.paginator.addNext(e.token),t.updateTotalLength(e.data.length),e.data)))}).setCustomTriggers("pagination").create()}};return t.\u0275fac=function(e){return new(e||t)(d.Sb(b.a))},t.\u0275cmp=d.Mb({type:t,selectors:[["pbl-async-token-example"]],decls:2,vars:2,consts:[["usePagination","token","blockUi","",3,"dataSource","columns"],[3,"grid","paginator",4,"pblNgridPaginatorRef"],[3,"grid","paginator"]],template:function(t,e){1&t&&(d.Yb(0,"pbl-ngrid",0),d.Qc(1,U,1,2,"pbl-ngrid-paginator",1),d.Xb()),2&t&&d.uc("dataSource",e.ds)("columns",e.columns)},directives:[u.a,g.b,f.a,m.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(r.a)([Object(l.e)("pbl-async-token-example",{title:"Async: Token"}),Object(r.b)("design:paramtypes",[b.a])],t),t})(),v=(()=>{let t=class{};return t.\u0275mod=d.Qb({type:t}),t.\u0275inj=d.Pb({factory:function(e){return new(e||t)},imports:[[n.c,a.c,p.a,o.j,s.a,c.a]]}),t=Object(r.a)([Object(l.a)(O,_,S)],t),t})()}}]);