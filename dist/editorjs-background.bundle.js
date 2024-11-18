!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.BackgroundTune=o():t.BackgroundTune=o()}(self,(()=>(()=>{"use strict";var t={d:(o,r)=>{for(var e in r)t.o(r,e)&&!t.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:r[e]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o)},o={};t.d(o,{default:()=>r});class r{static get isTune(){return!0}static defaultColors(){return[{id:"info",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M444-288h72v-240h-72v240Zm35.79-312q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm.49 504Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/></svg>',title:"Info",color:"rgba(92, 182, 255, 0.1)"},{id:"warning",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -960 960 960"><path d="m48-144 432-720 432 720H48Zm127-72h610L480-724 175-216Zm304.79-48q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM444-384h72v-192h-72v192Zm36-86Z"/></svg>',title:"Warning",color:"rgba(255, 208, 37, 0.1)"}]}constructor({data:t,api:o,config:e,block:i}){this.api=o,this.config={colors:e.colors||r.defaultColors()},this.block=i,this._color=null,this.color=t?.color,this._wrapper=null}get color(){return this._color}set color(t){const o=this.config.colors.find((o=>o.id===t));this._color=o?t:null,this._wrapper&&(this._wrapper.className=o?`cdx-background-tune cdx-background-tune--${t}`:"",this._wrapper.style.backgroundColor=o?o.color:null)}render(){const t=[];return this.config.colors.forEach((o=>{t.push({icon:o.icon,title:this.api.i18n.t(o.title),isActive:()=>this.color===o.id,onActivate:()=>this.color=this.color!==o.id?o.id:null,closeOnActivate:!0})})),{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5.24296 11.4075C5.23167 10.6253 5.52446 9.8395 6.12132 9.24264L9.65686 5.70711C10.0474 5.31658 10.6809 5.31693 11.0714 5.70745L16.0205 10.6565C16.2268 10.8629 16.3243 11.1371 16.3126 11.4075M5.24296 11.4075C5.25382 12.1607 5.54661 12.9106 6.12132 13.4853L8 15.364M5.24296 11.4075H11.9565M16.3126 11.4075C16.3022 11.6487 16.205 11.8869 16.0208 12.0711L12.4853 15.6066C11.3137 16.7782 9.41421 16.7782 8.24264 15.6066L8 15.364M16.3126 11.4075H11.9565M8 15.364L11.9565 11.4075"/><path stroke="currentColor" stroke-width="2" d="M20 17.4615C20 18.3112 19.3284 19 18.5 19C17.6716 19 17 18.3112 17 17.4615C17 16.6119 17.9 15.6154 18.5 15C19.1 15.6154 20 16.6119 20 17.4615Z"/></svg>',title:this.api.i18n.t("Background"),children:{items:t},isActive:()=>null!==this.color}}wrap(t){const o=document.createElement("div");return o.append(t),this._wrapper=o,this.color=this.color,o}save(){return this.color?{color:this.color}:void 0}}return o.default})()));