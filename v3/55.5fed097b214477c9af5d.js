(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"4DA5":function(t,e,i){"use strict";i.d(e,"a",function(){return c}),i.d(e,"b",function(){return l});var o=i("7+OI"),r=i("8LU1"),n=i("XEBs"),s=i("fXoL");const c="blockUi";let l=(()=>{class t{constructor(t,e){this.grid=t,this._blockInProgress=!1,this._removePlugin=e.setPlugin(c,this),t.registry.changes.subscribe(t=>{for(const e of t)switch(e.type){case"blocker":this.setupBlocker()}}),e.events.subscribe(t=>{if("onDataSource"===t.kind){const{prev:e,curr:i}=t;e&&n.x.unrx.kill(this,e),i.onSourceChanging.pipe(n.x.unrx(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),i.onSourceChanged.pipe(n.x.unrx(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(t){let e=Object(r.c)(t);!e||"auto"!==t&&""!==t||(e="auto"),Object(o.a)(t)&&this._blockUi!==t?(Object(o.a)(this._blockUi)&&n.x.unrx.kill(this,this._blockUi),this._blockUi=t,t.pipe(n.x.unrx(this,this._blockUi)).subscribe(t=>{this._blockInProgress=t,this.setupBlocker()})):this._blockUi!==e&&(this._blockUi=e,"auto"!==e&&(this._blockInProgress=e,this.setupBlocker()))}ngOnDestroy(){n.x.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const t=this.grid.registry.getSingle("blocker");t&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",t.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(n.g),s.Sb(n.n))},t.\u0275dir=s.Nb({type:t,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),t})()},"6JOf":function(t,e,i){"use strict";i.d(e,"a",function(){return l});var o=i("ofXK"),r=i("f6nW"),n=i("XEBs"),s=i("4DA5"),c=i("fXoL");let l=(()=>{class t{}return t.NGRID_PLUGIN=Object(n.v)({id:s.a},s.b),t.\u0275mod=c.Qb({type:t}),t.\u0275inj=c.Pb({factory:function(e){return new(e||t)},imports:[[o.c,r.r,n.k]]}),t})()},iQQw:function(t,e,i){"use strict";i.r(e),i.d(e,"CopySelectionExampleModule",function(){return x});var o=i("mrSG"),r=i("XEBs"),n=i("6JOf"),s=i("pLZG"),c=i("ofXK"),l=i("fXoL");class a{constructor(t,e){this._document=e;const i=this._textarea=this._document.createElement("textarea"),o=i.style;o.position="fixed",o.top=o.opacity="0",o.left="-999em",i.setAttribute("aria-hidden","true"),i.value=t,this._document.body.appendChild(i)}copy(){const t=this._textarea;let e=!1;try{if(t){const i=this._document.activeElement;t.select(),t.setSelectionRange(0,t.value.length),e=this._document.execCommand("copy"),i&&i.focus()}}catch(i){}return e}destroy(){const t=this._textarea;t&&(t.parentNode&&t.parentNode.removeChild(t),this._textarea=void 0)}}let u=(()=>{class t{constructor(t){this._document=t}copy(t){const e=this.beginCopy(t),i=e.copy();return e.destroy(),i}beginCopy(t){return new a(t,this._document)}}return t.\u0275fac=function(e){return new(e||t)(l.cc(c.e))},t.\u0275prov=Object(l.Ob)({factory:function(){return new t(Object(l.cc)(c.e))},token:t,providedIn:"root"}),t})();const d=/^mac/.test(navigator.platform.toLowerCase()),p="clipboard";let b=(()=>{class t{constructor(t,e,i){this.grid=t,this.injector=e,this.pluginCtrl=i,this.config=e.get(r.h),this.clipboard=e.get(u),this.init()}static create(e,i){const o=r.n.find(e);return new t(e,i,o)}ngOnDestroy(){r.x.unrx.kill(this),this._removePlugin(this.grid)}isCopyEvent(t){return!!(t instanceof KeyboardEvent&&"c"===t.key&&(!d&&t.ctrlKey||d&&t.metaKey))}doCopy(){const{cellSeparator:t,rowSeparator:e}=this.config.get("clipboard",{}),{rows:i,minIndex:o}=this.getSelectedRowData(this.grid);this.clipboard.copy(i.map(e=>e.slice(o).join(this.clpCellSep||t||"\t")).join(this.clpRowSep||e||"\n"))}getSelectedRowData(t){const{columnApi:e,contextApi:i}=t,o=new Map;let r=Number.MAX_SAFE_INTEGER;for(const s of i.selectedCells){const n=e.columns[s.colIndex];if(n){const c=e.renderIndexOf(n);if(c>-1){const e=i.findRowInCache(s.rowIdent).dataIndex,l=n.getValue(t.ds.source[e]),a=o.get(s.rowIdent)||[];a[c]=l,o.set(s.rowIdent,a),r=Math.min(r,c)}}}const n=Array.from(o.entries());return n.sort((t,e)=>i.findRowInCache(t[0]).dataIndex<i.findRowInCache(e[0]).dataIndex?-1:1),{minIndex:r,rows:n.map(t=>t[1])}}init(){this._removePlugin=this.pluginCtrl.setPlugin(p,this),this.pluginCtrl.hasPlugin("targetEvents")||this.pluginCtrl.createPlugin("targetEvents"),this.pluginCtrl.getPlugin("targetEvents").keyDown.pipe(Object(s.a)(t=>this.isCopyEvent(t.source)),r.x.unrx(this)).subscribe(t=>this.doCopy())}}return t.\u0275fac=function(e){return new(e||t)(l.Sb(r.g),l.Sb(l.v),l.Sb(r.n))},t.\u0275dir=l.Nb({type:t,selectors:[["pbl-ngrid","clipboard",""]],inputs:{clpCellSep:"clpCellSep",clpRowSep:"clpRowSep"},exportAs:["pblNgridClipboard"]}),t})();var h=i("4dOD");let g=(()=>{class t{constructor(e){r.n.onCreatedSafe(t,(t,i)=>{!0===e.get(p,{}).autoEnable&&i.onInit().subscribe(()=>{i.hasPlugin(p)||i.createPlugin(p)})})}}return t.NGRID_PLUGIN=Object(r.v)({id:p,factory:"create"},b),t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({factory:function(e){return new(e||t)(l.cc(r.h))},imports:[[c.c,r.k,h.a]]}),t})();var f=i("YT2F"),m=i("WPM6"),k=i("fluT"),y=i("XkVd"),_=i("IO+B");let w=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(r.s)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(r.t)().onTrigger(()=>this.datasource.getPeople(100,500)).create(),this.hideColumns=["bio"]}};return t.\u0275fac=function(e){return new(e||t)(l.Sb(k.a))},t.\u0275cmp=l.Mb({type:t,selectors:[["pbl-copy-selection-example"]],decls:1,vars:3,consts:[["clipboard","","focusMode","cell",3,"dataSource","columns","hideColumns"]],template:function(t,e){1&t&&l.Tb(0,"pbl-ngrid",0),2&t&&l.rc("dataSource",e.ds)("columns",e.columns)("hideColumns",e.hideColumns)},directives:[y.a,b,_.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(o.a)([Object(f.e)("pbl-copy-selection-example",{title:"Copy Selection"}),Object(o.b)("design:paramtypes",[k.a])],t),t})(),x=(()=>{let t=class{};return t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({factory:function(e){return new(e||t)},imports:[[m.a,r.k,n.a,g]]}),t=Object(o.a)([Object(f.a)(w)],t),t})()}}]);