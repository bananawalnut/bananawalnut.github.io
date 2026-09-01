import{c as so,S as Ut,a as qt,b as ur,d as hr,e as fr,f as ge,g as me}from"./main-C-mNEgGA.js";const un="solana:mainnet";var Nt=8078012;function pr(e){return Array.isArray(e)?"%5B"+e.map(pr).join("%2C%20")+"%5D":typeof e=="bigint"?`${e}n`:encodeURIComponent(String(e!=null&&Object.getPrototypeOf(e)===null?{...e}:e))}function ao([e,t]){return`${e}=${pr(t)}`}function co(e){const t=Object.entries(e).map(ao).join("&");return btoa(t)}function lo(e,t={}){{let r=`Solana error #${e}; Decode this error by running \`npx @solana/errors decode -- ${e}`;return Object.keys(t).length&&(r+=` '${co(t)}'`),`${r}\``}}var Mt=class extends Error{cause=this.cause;context;constructor(...[e,t]){let r,n;t&&Object.entries(Object.getOwnPropertyDescriptors(t)).forEach(([i,s])=>{i==="cause"?n={cause:s.value}:(r===void 0&&(r={__code:e}),Object.defineProperty(r,i,s))});const o=lo(e,r);super(o,n),this.context=Object.freeze(r===void 0?{__code:e}:r),this.name="SolanaError"}};function uo(e,t){return"fixedSize"in t?t.fixedSize:t.getSizeFromValue(e)}function zt(e){return Object.freeze({...e,encode:t=>{const r=new Uint8Array(uo(t,e));return e.write(t,r,0),r}})}function Kt(e){return Object.freeze({...e,decode:(t,r=0)=>e.read(t,r)[0]})}function ho(e,t,r=t){if(!t.match(new RegExp(`^[${e}]*$`)))throw new Mt(Nt,{alphabet:e,base:e.length,value:r})}var fo=e=>zt({getSizeFromValue:t=>{const[r,n]=hn(t,e[0]);if(!n)return t.length;const o=fn(n,e);return r.length+Math.ceil(o.toString(16).length/2)},write(t,r,n){if(ho(e,t),t==="")return n;const[o,i]=hn(t,e[0]);if(!i)return r.set(new Uint8Array(o.length).fill(0),n),n+o.length;let s=fn(i,e);const a=[];for(;s>0n;)a.unshift(Number(s%256n)),s/=256n;const c=[...Array(o.length).fill(0),...a];return r.set(c,n),n+c.length}}),po=e=>Kt({read(t,r){const n=r===0||r<=-t.byteLength?t:t.slice(r);if(n.length===0)return["",t.length];let o=n.findIndex(c=>c!==0);o=o===-1?n.length:o;const i=e[0].repeat(o);if(o===n.length)return[i,t.length];const s=n.slice(o).reduce((c,l)=>c*256n+BigInt(l),0n),a=go(s,e);return[i+a,t.length]}});function hn(e,t){const[r,n]=e.split(new RegExp(`((?!${t}).*)`));return[r,n]}function fn(e,t){const r=BigInt(t.length);let n=0n;for(const o of e)n*=r,n+=BigInt(t.indexOf(o));return n}function go(e,t){const r=BigInt(t.length),n=[];for(;e>0n;)n.unshift(t[Number(e%r)]),e/=r;return n.join("")}var gr="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",mo=()=>fo(gr),wo=()=>po(gr),pn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bo=()=>zt({getSizeFromValue:e=>{try{return atob(e).length}catch{throw new Mt(Nt,{alphabet:pn,base:64,value:e})}},write(e,t,r){try{const n=atob(e).split("").map(o=>o.charCodeAt(0));return t.set(n,r),n.length+r}catch{throw new Mt(Nt,{alphabet:pn,base:64,value:e})}}}),mr=()=>Kt({read(e,t=0){const r=e.slice(t);return[btoa(String.fromCharCode(...r)),e.length]}}),yo=e=>e.replace(/\u0000/g,""),Eo=globalThis.TextDecoder,gn=globalThis.TextEncoder,wr=()=>{let e;return zt({getSizeFromValue:t=>(e||=new gn).encode(t).length,write:(t,r,n)=>{const o=(e||=new gn).encode(t);return r.set(o,n),n+o.length}})},Ro=()=>{let e;return Kt({read(t,r){const n=(e||=new Eo).decode(t.slice(r));return[yo(n),t.length]}})};function Co(e){return mr().decode(wr().encode(e))}function le(e,t){const r=mr().decode(e);return t?r.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""):r}function xe(e){return bo().encode(e)}function br(e){return wo().decode(e)}function vo(e){return mo().encode(e)}function _o(e){return br(xe(e))}function Ht(e){return le(new Uint8Array(e))}function Ve(e){return br(e)}function So(e){return vo(e)}function he(e){return le(e)}function Q(e){return xe(e)}function Ao(e){return Ro().decode(e)}function xo(e){return wr().encode(e)}var To=function(e,t,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)},Lo=function(e,t,r,n,o){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?o.call(e,r):o?o.value=r:t.set(e,r),r},We;function rt(e){const t=({register:r})=>r(e);try{window.dispatchEvent(new Bo(t))}catch(r){console.error(`wallet-standard:register-wallet event could not be dispatched
`,r)}try{window.addEventListener("wallet-standard:app-ready",({detail:r})=>t(r))}catch(r){console.error(`wallet-standard:app-ready event listener could not be added
`,r)}}class Bo extends Event{get detail(){return To(this,We,"f")}get type(){return"wallet-standard:register-wallet"}constructor(t){super("wallet-standard:register-wallet",{bubbles:!1,cancelable:!1,composed:!1}),We.set(this,void 0),Lo(this,We,t,"f")}preventDefault(){throw new Error("preventDefault cannot be called")}stopImmediatePropagation(){throw new Error("stopImmediatePropagation cannot be called")}stopPropagation(){throw new Error("stopPropagation cannot be called")}}We=new WeakMap;const Io=e=>e/2**32|0,Oo=e=>e>>>0;function No(e,t,r,n){const o=Io(r),i=Oo(r);e.setUint32(t,n?i:o,n),e.setUint32(t+4,n?o:i,n)}function Pt(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"&&"BYTES_PER_ELEMENT"in e&&e.BYTES_PER_ELEMENT===1}const Dt=e=>e?`"${e}" `:"";function Qe(e,t=""){if(typeof e!="number")throw new TypeError(Dt(t)+"expected number, got "+typeof e);if(!Number.isSafeInteger(e)||e<0)throw new RangeError(Dt(t)+"expected integer >= 0, got "+e);return e}function Ie(e,t,r=""){if(Pt(e)&&(t===void 0||e.length===t))return e;t!==void 0&&Qe(t,"length");const n=Pt(e),o=t!==void 0?` of length ${t}`:"",i=n?`length=${e.length}`:`type=${typeof e}`,s=Dt(r)+"expected Uint8Array"+o+", got "+i;throw n?new RangeError(s):new TypeError(s)}const Mo=(e,t)=>{if(e===null||typeof e!="object"||Array.isArray(e))throw new TypeError((t==="object"?"":`"${t}" `)+"expected object, got type="+typeof e)},mn=(e,t)=>{Mo(e,t);const r=Object.getPrototypeOf(e);if(r!==Object.prototype&&r!==null)throw new TypeError(`"${t}" expected plain object`);if(Object.hasOwn(e,"__proto__"))throw new TypeError(`"${t}.__proto__" is not allowed`)};function wn(e,t=!0){if(e.destroyed)throw new Error("hash was destroyed");if(t&&e.finished)throw new Error("digest() was already called")}function Po(e,t){Ie(e,void 0,"output");const r=t.outputLen;if(!(e.length>=r))throw new RangeError('"output" expected length >= '+r)}function bn(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}function ot(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function ae(e,t){return e<<32-t|e>>>t}const yr=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",Do=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function fe(e){if(Ie(e),yr)return e.toHex();let t="";for(let r=0;r<e.length;r++)t+=Do[e[r]];return t}function yn(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:void 0}function _e(e){if(typeof e!="string")throw new TypeError("hex string expected, got "+typeof e);if(yr)try{return Uint8Array.fromHex(e)}catch(o){throw o instanceof SyntaxError?new RangeError(o.message):o}const t=e.length,r=t/2;if(t%2)throw new RangeError("hex string expected, got unpadded hex of length "+t);const n=new Uint8Array(r);for(let o=0,i=0;o<r;o++,i+=2){const s=yn(e.charCodeAt(i)),a=yn(e.charCodeAt(i+1));if(s===void 0||a===void 0){const c=e[i]+e[i+1];throw new RangeError('hex string expected, got non-hex character "'+c+'" at index '+i)}n[o]=s*16+a}return n}function ko(...e){let t=0;for(let n=0;n<e.length;n++){const o=e[n];Ie(o),t+=o.length}const r=new Uint8Array(t);for(let n=0,o=0;n<e.length;n++){const i=e[n];r.set(i,o),o+=i.length}return r}function Fo(e,t,r="opts"){return mn(e,"defaults"),t!==void 0&&mn(t,r),Object.assign(Object.create(null),e,t)}function Uo(e,t={}){if(typeof e!="function")throw new TypeError('"hashCons" expected function, got type='+typeof e);t=Fo({},t,"info");const r=(o,i)=>e(i).update(o).digest(),n=e(void 0);return r.outputLen=n.outputLen,r.blockLen=n.blockLen,r.canXOF=n.canXOF,r.create=o=>e(o),Object.assign(r,t),Object.freeze(r)}function Wt(e=32){Qe(e,"bytesLength");const t=typeof globalThis=="object"?globalThis.crypto:null;if(typeof t?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined");if(e>65536)throw new RangeError(`"bytesLength" expected <= 65536, got ${e}`);return t.getRandomValues(new Uint8Array(e))}const qo=e=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,e])});function zo(e,t,r){return e&t^~e&r}function Ko(e,t,r){return e&t^e&r^t&r}class Ho{blockLen;outputLen;canXOF=!1;padOffset;isLE;buffer;view;finished=!1;length=0;pos=0;destroyed=!1;constructor(t,r,n,o){this.blockLen=t,this.outputLen=r,this.padOffset=n,this.isLE=o,this.buffer=new Uint8Array(t),this.view=ot(this.buffer)}update(t){wn(this),Ie(t);const{view:r,buffer:n,blockLen:o}=this,i=t.length;let s=!1;for(let a=0;a<i;){const c=Math.min(o-this.pos,i-a);if(c===o){const l=ot(t);for(;o<=i-a;a+=o)this.process(l,a);s=!0;continue}n.set(a===0&&c===i?t:t.subarray(a,a+c),this.pos),this.pos+=c,a+=c,this.pos===o&&(this.process(r,0),this.pos=0,s=!0)}return this.length+=t.length,s&&this.roundClean(),this}digestInto(t){wn(this),Po(t,this),this.finished=!0;const{buffer:r,view:n,blockLen:o,isLE:i}=this;let{pos:s}=this;r[s++]=128,r.fill(0,s),this.padOffset>o-s&&(this.process(n,0),r.fill(0)),No(n,o-8,this.length*8,i),this.process(n,0),this.roundClean();const a=t===r?n:ot(t),c=this.outputLen,l=c/4,d=this.get();if(c%4||l>d.length)throw new Error("invalid outputLen");for(let h=0;h<l;h++)a.setUint32(4*h,d[h],i)}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const n=t.slice(0,r);return this.destroy(),n}_cloneIntoMeta(t){const{buffer:r,length:n,finished:o,destroyed:i,pos:s}=this;return t.destroyed=i,t.finished=o,t.length=n,t.pos=s,s&&t.buffer.set(r),t}clone(){return this._cloneInto()}}const Wo=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Vo=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),de=new Uint32Array(64);class jo extends Ho{A=0;B=0;C=0;D=0;E=0;F=0;G=0;H=0;constructor(t,r){super(64,t,8,!1),this.A=r[0]|0,this.B=r[1]|0,this.C=r[2]|0,this.D=r[3]|0,this.E=r[4]|0,this.F=r[5]|0,this.G=r[6]|0,this.H=r[7]|0}get(){const{A:t,B:r,C:n,D:o,E:i,F:s,G:a,H:c}=this;return[t,r,n,o,i,s,a,c]}set(t,r,n,o,i,s,a,c){this.A=t|0,this.B=r|0,this.C=n|0,this.D=o|0,this.E=i|0,this.F=s|0,this.G=a|0,this.H=c|0}_cloneInto(t){return(t||=new this.constructor).set(...this.get()),this._cloneIntoMeta(t)}process(t,r){for(let h=0;h<16;h++,r+=4)de[h]=t.getUint32(r,!1);for(let h=16;h<64;h++){const f=de[h-15],u=de[h-2],E=ae(f,7)^ae(f,18)^f>>>3,m=ae(u,17)^ae(u,19)^u>>>10;de[h]=m+de[h-7]+E+de[h-16]|0}let{A:n,B:o,C:i,D:s,E:a,F:c,G:l,H:d}=this;for(let h=0;h<64;h++){const f=ae(a,6)^ae(a,11)^ae(a,25),u=d+f+zo(a,c,l)+Vo[h]+de[h]|0,m=(ae(n,2)^ae(n,13)^ae(n,22))+Ko(n,o,i)|0;d=l,l=c,c=a,a=s+u|0,s=i,i=o,o=n,n=u+m|0}n=n+this.A|0,o=o+this.B|0,i=i+this.C|0,s=s+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,d=d+this.H|0,this.set(n,o,i,s,a,c,l,d)}roundClean(){bn(de)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),bn(this.buffer)}}class $o extends jo{constructor(){super(32,Wo)}}const je=Uo(()=>new $o,qo(1));function Er(e,t,r=()=>{}){if(!Array.isArray(e))throw new TypeError(`"${t}" expected array, got type=${typeof e}`);for(let n=0;n<e.length;n++)r(e[n],`${t}[${n}]`);return e}const re=(e,t,r)=>Ie(e,t,r),Rr=Qe;function Se(e,t="object"){if(e===null||typeof e!="object"||Array.isArray(e))throw new TypeError(t==="object"?"expected valid options object":`"${t}" expected object, got type=${typeof e}`);return e}function Pe(e,t){if(typeof e!="function")throw new TypeError(`"${t}" is invalid: expected function, got ${typeof e}`);return e}const Zo=fe,$e=(...e)=>ko(...e),Yo=e=>_e(e),Cr=Pt,Go=e=>Wt(e),Ze=BigInt(0),En=BigInt(1),Qo=e=>e?`"${e}" `:"";function Fe(e,t=""){if(typeof e!="boolean")throw new TypeError(Qo(t)+"expected boolean, got type="+typeof e);return e}function Jo(e){if(typeof e=="bigint"){if(!we(e))throw new RangeError("positive bigint expected, got "+e)}else Rr(e);return e}function kt(e,t=""){if(typeof e!="number"){const r=t&&`"${t}" `;throw new TypeError(r+"expected number, got type="+typeof e)}if(!Number.isSafeInteger(e)){const r=t&&`"${t}" `;throw new RangeError(r+"expected safe integer, got "+e)}}function vr(e){if(typeof e!="string")throw new TypeError("hex string expected, got "+typeof e);return e===""?Ze:BigInt("0x"+e)}function Je(e){return vr(fe(e))}function _r(e){return vr(fe(Ar(Ie(e)).reverse()))}function Vt(e,t){if(Qe(t),t===0)throw new Error("zero output length is invalid");e=Jo(e);const r=t*2,n=e.toString(16);if(n.length>r)throw new RangeError("number is too large");return _e(n.padStart(r,"0"))}function Sr(e,t){return Vt(e,t).reverse()}function Ar(e){return Uint8Array.from(re(e))}function Xo(e){if(typeof e!="string")throw new TypeError("ascii string expected, got "+typeof e);return Uint8Array.from(e,(t,r)=>{const n=t.charCodeAt(0);if(t.length!==1||n>127)throw new RangeError(`string contains non-ASCII character "${e[r]}" with code ${n} at position ${r}`);return n})}function we(e){return typeof e=="bigint"&&Ze<=e}function xr(e,t,r){return we(e)&&we(t)&&we(r)&&t<=e&&e<r}function ei(e,t,r,n){if(!xr(t,r,n))throw new RangeError("expected valid "+e+": "+r+" <= n < "+n+", got "+t)}function jt(e){if(e<Ze)throw new Error("expected non-negative bigint, got "+e);return e===Ze?0:e.toString(2).length}const Tr=e=>(kt(e,"n"),(En<<BigInt(e))-En);function Lr(e,t={},r={},n="object"){Se(e,n),Se(t,"fields"),Se(r,"optFields");function o(s,a,c){const l=n==="object"?`param "${String(s)}"`:`"${n}.${String(s)}"`,d=e[s];if(!Object.hasOwn(e,s)&&(c?d!==void 0:a!=="function"))throw new TypeError(`${l} is invalid: expected own property`);if(c&&d===void 0)return;const h=typeof d;if(h!==a||d===null)throw new TypeError(`${l} is invalid: expected ${a}, got ${h}`)}const i=(s,a)=>Object.entries(s).forEach(([c,l])=>o(c,l,a));i(t,!1),i(r,!0)}const G=BigInt(0),V=BigInt(1),pe=BigInt(2),Br=BigInt(3),$t=BigInt(4),Ir=BigInt(5),ti=BigInt(7),Or=BigInt(8),ni=BigInt(9),ri=BigInt(15),Nr=BigInt(16),oi=BigInt("0x10000000000000000");function ie(e,t){if(t<=G)throw new Error("mod: expected positive modulus, got "+t);const r=e%t;return r>=G?r:t+r}function ii(e,t,r){if(r<=V)throw new Error("pow: expected modulus > 1, got "+r);if(typeof t!="bigint")throw new TypeError("invalid exponent: expected bigint, got "+typeof t);if(t<G)throw new Error("invalid exponent, negatives unsupported");if(t===G)return V;if(t===V)return e;let n=e%r;if(n<G&&(n+=r),t<oi){let a=V;for(;t>G;)t&V&&(a=a*n%r),n=n*n%r,t>>=V;return a}const o=[];for(;t>G;)o.push(Number(t&ri)),t>>=$t;const i=new Array(16);i[0]=V,i[1]=n;for(let a=2;a<16;a++)i[a]=i[a-1]*n%r;let s=i[o[o.length-1]];for(let a=o.length-2;a>=0;a--){s=s*s%r,s=s*s%r,s=s*s%r,s=s*s%r;const c=o[a];c!==0&&(s=s*i[c]%r)}return s}function ne(e,t,r){if(r<=V)throw new Error("pow2: expected modulus > 1, got "+r);if(t<G)throw new Error("pow2: expected non-negative exponent, got "+t);let n=e;for(;t-- >G;)n*=n,n%=r;return n}function Rn(e,t){if(e===G)throw new Error("invert: expected non-zero number");if(t<=V)throw new Error("invert: expected modulus > 1, got "+t);let r=ie(e,t),n=t,o=G,i=V;for(;r!==G;){const a=n/r,c=n-r*a,l=o-i*a;n=r,r=c,o=i,i=l}if(n!==V)throw new Error("invert: does not exist");return ie(o,t)}function Zt(e,t,r){const n=e;if(!n.eql(n.sqr(t),r))throw new Error("Cannot find square root")}function Yt(e,t){if((e&V)===G)throw new Error(t+": expected odd modulus, got "+e)}function Mr(e,t){const r=e,n=(r.ORDER+V)/$t,o=r.pow(t,n);return Zt(r,o,t),o}function si(e,t){const r=e,n=(r.ORDER-Ir)/Or,o=r.mul(t,pe),i=r.pow(o,n),s=r.mul(t,i),a=r.mul(r.mul(s,pe),i),c=r.mul(s,r.sub(a,r.ONE));return Zt(r,c,t),c}function ai(e){const t=Xe(e),r=Pr(e),n=r(t,t.neg(t.ONE)),o=r(t,n),i=r(t,t.neg(n)),s=(e+ti)/Nr;return((a,c)=>{const l=a;let d=l.pow(c,s),h=l.mul(d,n);const f=l.mul(d,o),u=l.mul(d,i),E=l.eql(l.sqr(h),c),m=l.eql(l.sqr(f),c);d=l.cmov(d,h,E),h=l.cmov(u,f,m);const I=l.eql(l.sqr(h),c),y=l.cmov(d,h,I);return Zt(l,y,c),y})}function Pr(e){if(e<Br)throw new Error("sqrt is not defined for small field");Yt(e,"tonelliShanks");let t=e-V,r=0;for(;t%pe===G;)t/=pe,r++;let n=pe;const o=Xe(e);for(;Cn(o,n)===1;)if(n++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(r===1)return Mr;let i=o.pow(n,t);const s=(t+V)/pe;return function(c,l){const d=c;if(d.is0(l))return l;if(Cn(d,l)!==1)throw new Error("Cannot find square root");let h=r,f=d.mul(d.ONE,i),u=d.pow(l,t),E=d.pow(l,s);for(;!d.eql(u,d.ONE);){if(d.is0(u))throw new Error("Cannot find square root: probably non-prime P");let m=1,I=d.sqr(u);for(;!d.eql(I,d.ONE);)if(m++,I=d.sqr(I),m===h)throw new Error("Cannot find square root");const y=V<<BigInt(h-m-1),B=d.pow(f,y);h=m,f=d.sqr(B),u=d.mul(u,f),E=d.mul(E,B)}return E}}function ci(e){return Yt(e,"Fp.sqrt"),e%$t===Br?Mr:e%Or===Ir?si:e%Nr===ni?ai(e):Pr(e)}const li=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Ue(e){if(Se(e,"field"),typeof e.ORDER!="bigint")throw new TypeError('param "ORDER" is invalid: expected bigint, got '+typeof e.ORDER);kt(e.BYTES,"BYTES"),kt(e.BITS,"BITS");for(const t of li)Pe(e[t],"field."+t);if(e.BYTES<1||e.BITS<1)throw new Error("invalid field: expected BYTES/BITS > 0");if(e.ORDER<=V)throw new Error("invalid field: expected ORDER > 1, got "+e.ORDER);return e}function Dr(e,t,r=!1){Ue(e),Er(t,"nums"),Fe(r,"passZero");const n=e,o=new Array(t.length).fill(r?n.ZERO:void 0),i=t.reduce((a,c,l)=>n.is0(c)?a:(o[l]=a,n.mul(a,c)),n.ONE),s=n.inv(i);return t.reduceRight((a,c,l)=>n.is0(c)?a:(o[l]=n.mul(a,o[l]),n.mul(a,c)),s),o}function Cn(e,t){Ue(e);const r=e;Yt(r.ORDER,"FpLegendre");const n=(r.ORDER-V)/pe,o=r.pow(t,n),i=r.eql(o,r.ONE),s=r.eql(o,r.ZERO),a=r.eql(o,r.neg(r.ONE));if(!i&&!s&&!a)throw new Error("invalid Legendre symbol result");return i?1:s?0:-1}function di(e,t){if(t!==void 0&&Rr(t),e<=G)throw new Error("invalid n length: expected positive n, got "+e);if(t!==void 0&&t<1)throw new Error("invalid n length: expected positive bit length, got "+t);const r=jt(e);if(t!==void 0&&t<r)throw new Error(`invalid n length: expected nBitLength (${t}) >= bitLen(n) (${r})`);const n=t!==void 0?t:r,o=Math.ceil(n/8);return{nBitLength:n,nByteLength:o}}const vn=new WeakMap;class _n{ORDER;BITS;BYTES;isLE;ZERO=G;ONE=V;_lengths;_mod;constructor(t,r={}){if(t<=V)throw new Error("invalid field: expected ORDER > 1, got "+t);let n;this.isLE=!1,r!=null&&typeof r=="object"&&(typeof r.BITS=="number"&&(n=r.BITS),typeof r.sqrt=="function"&&Object.defineProperty(this,"sqrt",{value:r.sqrt,enumerable:!0}),typeof r.isLE=="boolean"&&(this.isLE=r.isLE),r.allowedLengths&&(this._lengths=Object.freeze(r.allowedLengths.slice())),typeof r.modFromBytes=="boolean"&&(this._mod=r.modFromBytes));const{nBitLength:o,nByteLength:i}=di(t,n);if(i>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");this.ORDER=t,this.BITS=o,this.BYTES=i,Object.freeze(this)}create(t){return ie(t,this.ORDER)}isValid(t){if(typeof t!="bigint")throw new TypeError("invalid field element: expected bigint, got "+typeof t);return G<=t&&t<this.ORDER}is0(t){return t===G}isValidNot0(t){return!this.is0(t)&&this.isValid(t)}isOdd(t){return(t&V)===V}neg(t){return ie(-t,this.ORDER)}eql(t,r){return t===r}sqr(t){return ie(t*t,this.ORDER)}add(t,r){return ie(t+r,this.ORDER)}sub(t,r){return ie(t-r,this.ORDER)}mul(t,r){return ie(t*r,this.ORDER)}pow(t,r){return ii(t,r,this.ORDER)}div(t,r){return ie(t*Rn(r,this.ORDER),this.ORDER)}sqrN(t){return t*t}addN(t,r){return t+r}subN(t,r){return t-r}mulN(t,r){return t*r}inv(t){return Rn(t,this.ORDER)}sqrt(t){let r=vn.get(this);return r||vn.set(this,r=ci(this.ORDER)),r(this,t)}toBytes(t){return this.isLE?Sr(t,this.BYTES):Vt(t,this.BYTES)}fromBytes(t,r=!1){re(t);const{_lengths:n,BYTES:o,isLE:i,ORDER:s,_mod:a}=this;if(n){if(t.length<1||!n.includes(t.length)||t.length>o)throw new Error("Field.fromBytes: expected "+n+" bytes, got "+t.length);const l=new Uint8Array(o);l.set(t,i?0:l.length-t.length),t=l}if(t.length!==o)throw new Error("Field.fromBytes: expected "+o+" bytes, got "+t.length);let c=i?_r(t):Je(t);if(a&&(c=ie(c,s)),!r&&!this.isValid(c))throw new Error("invalid field element: outside of range 0..ORDER");return c}invertBatch(t){return Dr(this,t,!0)}cmov(t,r,n){return Fe(n,"condition"),n?r:t}}function Xe(e,t={}){return Object.freeze(_n.prototype),new _n(e,t)}function kr(e){if(typeof e!="bigint")throw new Error("field order must be bigint");if(e<=V)throw new Error("field order must be greater than 1");const t=jt(e-V);return Math.ceil(t/8)}function ui(e){const t=kr(e);return t+Math.ceil(t/2)}function hi(e,t,r=!1){re(e);const n=e.length,o=kr(t),i=Math.max(ui(t),16);if(n<i||n>1024)throw new Error("expected "+i+"-1024 bytes of input, got "+n);const s=r?_r(e):Je(e),a=ie(s,t-V)+V;return r?Sr(a,o):Vt(a,o)}const Gt=BigInt(0),qe=BigInt(1),fi=BigInt(4),it=16,Sn=128,pi=5,An=2**31;function Qt(e){const t=e;if(typeof t!="function")throw new TypeError('"Point" expected constructor, got type='+typeof e);Pe(t.fromAffine,"Point.fromAffine"),Pe(t.fromBytes,"Point.fromBytes"),Pe(t.fromHex,"Point.fromHex"),Se(t.BASE,"Point.BASE"),Se(t.ZERO,"Point.ZERO"),Ue(t.Fp),Ue(t.Fn)}function gi(e,t){Qt(e),Fr(t,e);const r=Dr(e.Fp,t.map(n=>n.Z));return t.map((n,o)=>e.fromAffine(n.toAffine(r[o])))}function mi(e,t,r=1){if(!Number.isSafeInteger(e)||e<r||e>t)throw new Error("invalid window size, expected ["+r+".."+t+"], got W="+e)}function wi(e,t){const r=e*(4*t+128);if(r>An)throw new Error("invalid window size: table would need ~"+Math.ceil(r/2**20)+" MiB, max "+An/2**20+" MiB")}function bi(e,t){if(e!==void 0){Pe(e,"randomBytes");try{const r=e(t);if(!Cr(r)||r.length!==t)return}catch{return}return e}}function Fr(e,t){Er(e,"points"),e.forEach((r,n)=>{if(!(r instanceof t))throw new Error("invalid point at index "+n)})}function yi(e,t,r){if(!Array.isArray(e))throw new Error("array of scalars expected");e.forEach((n,o)=>{if(!(r===void 0?t.isValid(n):we(n)&&n<r))throw new Error("invalid scalar at index "+o)})}const Ur=new WeakMap;function st(e){return Ur.get(e)||1}function Ei(e,t){const r=e.double(),n=[e];for(let o=1;o<t;o++)n.push(n[o-1].add(r));return n}function Ri(e,t){const r=2**t,n=r/2,o=BigInt(r-1),i=[];for(;e>Gt;){let s=0;e&qe&&(s=Number(e&o),s>=n&&(s-=r),e-=BigInt(s)),i.push(s),e>>=qe}return i}function Ci(e,t,r){const n=2**t,o=n/2,i=BigInt(n-1),s=BigInt(t),a=[];for(let c=0;c<r;c++){let l=Number(e&i);e>>=s,l>o&&(l-=n,e+=qe),a.push(l)}if(e!==Gt)throw new Error("invalid wnaf");return a}function vi(e,t,r){let n=0;for(const i of r)n=Math.max(n,i.length);let o=e;for(let i=n-1;i>=0;i--){i!==n-1&&(o=o.double());for(let s=0;s<r.length;s++){const a=r[s][i];if(a){const c=t[s][Math.abs(a)-1>>1];o=o.add(a<0?c.negate():c)}}}return o}class _i{Point;BASE;ZERO;randomBytes;wnafPrecomputes=new WeakMap;baseCanBeBlinded;bits;constructor(t,r){Qt(t),this.randomBytes=bi(r,it),this.Point=t,this.BASE=t.BASE,this.ZERO=t.ZERO,this.bits=t.Fn.BITS}buildWnafTable(t,r,n){const o=Math.ceil(n/r)+1,i=2**(r-1),s=[];let a=t;for(let c=0;c<o;c++){let l=a;for(let d=0;d<i;d++)s.push(l),l=l.add(a);a=s[s.length-1].double()}return{W:r,bits:n,windows:o,comp:s}}wnafCachedCT(t,r){const{W:n,windows:o,comp:i}=t,s=2**(n-1),a=Ci(r,n,o);let c=this.ZERO,l=this.BASE;for(let d=0;d<o;d++){const h=a[d],f=d*s,u=Math.abs(h)-1;let E=i[f];for(let I=1;I<s;I++)E=I===u?i[f+I]:E;const m=E.negate();h===0?l=l.add(i[f]):c=c.add(h<0?m:E)}return{p:c,f:l}}getWnafPrecomputes(t,r,n,o){let i=this.wnafPrecomputes.get(r),s=i?.find(a=>a.W===t&&a.bits===n);return s||(s=this.buildWnafTable(r,t,n),typeof o=="function"&&(s={...s,comp:o(s.comp)}),i||(i=[],this.wnafPrecomputes.set(r,i)),i.push(s)),s}assertPoint(t){if(!(t instanceof this.Point))throw new TypeError('"point" expected Point instance, got type='+typeof t)}validateMulInput(t,r){if(this.assertPoint(t),!xr(r,qe,this.Point.Fn.ORDER))throw new Error("invalid scalar")}runCT(t,r,n,o){const i=st(t);return i===1?this.fixedWindowCT(t,r,n):this.wnafCachedCT(this.getWnafPrecomputes(i,t,n,o),r)}mulCT(t,r,n){return this.validateMulInput(t,r),this.runCT(t,r,this.bits,n)}mulCTBlinded(t,r,n){if(this.validateMulInput(t,r),this.randomBytes===void 0)throw new Error("randomBytes is required for scalar blinding");const o=this.Point.Fn.BITS+Sn,i=this.randomBytes(it);if(!Cr(i)||i.length!==it)throw new Error("randomBytes returned invalid byte array");i[0]=i[0]&63|128;const s=r+Je(i)*this.Point.Fn.ORDER;return this.runCT(t,s,o,n)}fixedWindowCT(t,r,n){const o=pi,i=1<<o,s=Tr(o),a=new Array(i);a[0]=this.ZERO;for(let d=1;d<i;d++)a[d]=a[d-1].add(t);const c=Math.ceil(n/o);let l=this.ZERO;for(let d=c-1;d>=0;d--){if(d!==c-1)for(let u=0;u<o;u++)l=l.double();const h=Number(r>>BigInt(d*o)&s);let f=a[0];for(let u=1;u<i;u++)f=u===h?a[u]:f;l=l.add(f)}return{p:l,f:l}}shouldBlind(t,r){return this.randomBytes===void 0?!1:r===qe?!0:t!==this.BASE?!1:(this.baseCanBeBlinded===void 0&&(this.baseCanBeBlinded=this.mulUnsafe(this.BASE,this.Point.Fn.ORDER).is0()),this.baseCanBeBlinded)}mulSecret(t,r,n,o){return this.shouldBlind(t,n)?this.mulCTBlinded(t,r,o):this.mulCT(t,r,o)}mulUnsafe(t,r,n){if(this.assertPoint(t),!we(r))throw new Error("invalid scalar");const o=st(t);if(o===1||r>=this.Point.Fn.ORDER)return Ft(this.Point,[t],[r],!0);const i=this.getWnafPrecomputes(o,t,this.bits,n);return this.wnafCachedCT(i,r).p}setWindowSize(t,r){this.assertPoint(t),mi(r,this.bits);const n=Math.ceil((this.bits+Sn)/r)+1;wi(n*2**(r-1),this.Point.Fp.BYTES),Ur.set(t,r),this.wnafPrecomputes.delete(t)}hasWindowSize(t){return st(t)!==1}}function Ft(e,t,r,n=!1){if(Qt(e),Fr(t,e),Fe(n,"allowOversized"),yi(r,e.Fn,n?e.Fn.ORDER**fi:void 0),t.length!==r.length)throw new Error("arrays of points and scalars must have equal length");const o=t.map(s=>Ei(s,4)),i=r.map(s=>Ri(s,4));return vi(e.ZERO,o,i)}function xn(e,t,r){if(t){if(t.ORDER!==e)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return Ue(t),t}else return Xe(e,{isLE:r})}function Si(e,t,r={},n){if(n===void 0&&(n=e==="edwards"),!t||typeof t!="object")throw new Error(`expected valid ${e} CURVE object`);Lr(r);for(const c of["p","n","h"]){const l=t[c];if(!(we(l)&&l!==Gt))throw new Error(`CURVE.${c} must be positive bigint`)}const o=xn(t.p,r.Fp,n),i=xn(t.n,r.Fn,n),a=["Gx","Gy","a","b"];for(const c of a)if(!o.isValid(t[c]))throw new Error(`CURVE.${c} must be valid field element of CURVE.Fp`);return t=Object.freeze(Object.assign({},t)),{CURVE:t,Fp:o,Fn:i}}function Ai(e,t){return function(n){const o=e(n);return{secretKey:o,publicKey:t(o)}}}const Tn=(e,t)=>(e+(e>=0?t:-t)/Ti)/t;function xi(e,t,r){ei("scalar",e,ve,r);const[[n,o],[i,s]]=t,a=Tn(s*e,r),c=Tn(-o*e,r);let l=e-a*n-c*i,d=-a*o-c*s;const h=l<ve,f=d<ve;h&&(l=-l),f&&(d=-d);const u=Tr(Math.ceil(jt(r)/2))+Me;if(l<ve||l>=u||d<ve||d>=u)throw new Error("splitScalar (endomorphism): failed for k");return{k1neg:h,k1:l,k2neg:f,k2:d}}const ve=BigInt(0),Me=BigInt(1),Ti=BigInt(2),at=BigInt(3),Li=BigInt(4);function Bi(e,t={}){const r=Si("weierstrass",e,t),n=r.Fp,o=r.Fn;let i=r.CURVE;const{h:s,n:a}=i;Lr(t,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",randomBytes:"function"});const{endo:c,allowInfinityPoint:l,clearCofactor:d,isTorsionFree:h,fromBytes:f,toBytes:u}=t,E=t.randomBytes===void 0?Go:t.randomBytes;if(c&&(!n.is0(i.a)||typeof c.beta!="bigint"||!Array.isArray(c.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');const m=c?{beta:c.beta,basises:c.basises.map(q=>[...q])}:void 0,I=Oi(n,o);function y(){if(!n.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function B(q,b,S){if(b.is0()){if(!l)throw new Error("bad point: ZERO");return Uint8Array.of(0)}const{x:O,y:k}=b.toAffine(),F=n.toBytes(O);if(Fe(S,"isCompressed"),S){y();const D=!n.isOdd(k);return $e(Ii(D),F)}else return $e(Uint8Array.of(4),F,n.toBytes(k))}function A(q){re(q,void 0,"Point");const{publicKey:b,publicKeyUncompressed:S}=I,O=q.length,k=q[0],F=q.subarray(1);if(l&&O===1&&k===0)return{x:n.ZERO,y:n.ZERO};if(O===b&&(k===2||k===3)){const D=n.fromBytes(F);if(!n.isValid(D))throw new Error("bad point: is not on curve, wrong x");const U=C(D);let P;try{P=n.sqrt(U)}catch(J){const te=J instanceof Error?": "+J.message:"";throw new Error("bad point: is not on curve, sqrt error"+te)}y();const W=n.isOdd(P);return(k&1)===1!==W&&(P=n.neg(P)),{x:D,y:P}}else if(O===S&&k===4){const D=n.BYTES,U=n.fromBytes(F.subarray(0,D)),P=n.fromBytes(F.subarray(D,D*2));if(!w(U,P))throw new Error("bad point: is not on curve");return{x:U,y:P}}else throw new Error(`bad point: got length ${O}, expected compressed=${b} or uncompressed=${S}`)}const R=u===void 0?B:u,x=f===void 0?A:f,p=n.mul(i.b,at),g=n.is0(i.a)?q=>n.ZERO:q=>n.mul(i.a,q);function C(q){const b=n.sqr(q),S=n.mul(b,q);return n.add(n.add(S,n.mul(q,i.a)),i.b)}function w(q,b){const S=n.sqr(b),O=C(q);return n.eql(S,O)}if(!w(i.Gx,i.Gy))throw new Error("bad curve params: generator point");const T=n.mul(n.pow(i.a,at),Li),_=n.mul(n.sqr(i.b),BigInt(27));if(n.is0(n.add(T,_)))throw new Error("bad curve params: a or b");function L(q,b,S=!1){if(!n.isValid(b)||S&&n.is0(b))throw new Error(`bad point coordinate ${q}`);return typeof b=="object"&&b!==null?n.create(b):b}function v(q){if(!(q instanceof M))throw new Error("Weierstrass Point expected")}function N(q){if(!m||!m.basises)throw new Error("no endo");return xi(q,m.basises,o.ORDER)}function $(q,b,S,O){if(!o.isValid(O))throw new RangeError("invalid scalar: out of range");if(m){const{k1neg:k,k1:F,k2neg:D,k2:U}=N(O),P=new M(n.mul(S.X,m.beta),S.Y,S.Z);q.push(k?S.negate():S,D?P.negate():P),b.push(F,U)}else q.push(S),b.push(O)}const j=new WeakSet;class M{static BASE=new M(i.Gx,i.Gy,n.ONE);static ZERO=new M(n.ZERO,n.ONE,n.ZERO);static Fp=n;static Fn=o;X;Y;Z;constructor(b,S,O){this.X=L("x",b),this.Y=L("y",S,!0),this.Z=L("z",O),Object.freeze(this)}static CURVE(){return i}static fromAffine(b){const{x:S,y:O}=b||{};if(!b||!n.isValid(S)||!n.isValid(O))throw new Error("invalid affine point");if(b instanceof M)throw new Error("projective point not allowed");return n.is0(S)&&n.is0(O)?M.ZERO:new M(S,O,n.ONE)}static fromBytes(b){const S=M.fromAffine(x(re(b,void 0,"point")));return S.assertValidity(),S}static fromHex(b){return M.fromBytes(Yo(b))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(b=6,S=!0){return Y.setWindowSize(this,b),S||this.multiply(at),this}assertValidity(){const b=this;if(b.is0()){if(l&&n.is0(b.X)&&n.eql(b.Y,n.ONE)&&n.is0(b.Z))return;throw new Error("bad point: ZERO")}if(j.has(b))return;const{x:S,y:O}=b.toAffine();if(!n.isValid(S)||!n.isValid(O))throw new Error("bad point: x or y not field elements");if(!w(S,O))throw new Error("bad point: equation left != right");if(!b.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");j.add(b)}hasEvenY(){const{y:b}=this.toAffine();if(!n.isOdd)throw new Error("Field doesn't support isOdd");return!n.isOdd(b)}equals(b){v(b);const{X:S,Y:O,Z:k}=this,{X:F,Y:D,Z:U}=b,P=n.eql(n.mul(S,U),n.mul(F,k)),W=n.eql(n.mul(O,U),n.mul(D,k));return P&&W}negate(){return new M(this.X,n.neg(this.Y),this.Z)}double(){const{X:b,Y:S,Z:O}=this;let k=n.ZERO,F=n.ZERO,D=n.ZERO,U=n.mul(b,b),P=n.mul(S,S),W=n.mul(O,O),K=n.mul(b,S);return K=n.add(K,K),D=n.mul(b,O),D=n.add(D,D),k=g(D),F=n.mul(p,W),F=n.add(k,F),k=n.sub(P,F),F=n.add(P,F),F=n.mul(k,F),k=n.mul(K,k),D=n.mul(p,D),W=g(W),K=n.sub(U,W),K=g(K),K=n.add(K,D),D=n.add(U,U),U=n.add(D,U),U=n.add(U,W),U=n.mul(U,K),F=n.add(F,U),W=n.mul(S,O),W=n.add(W,W),U=n.mul(W,K),k=n.sub(k,U),D=n.mul(W,P),D=n.add(D,D),D=n.add(D,D),new M(k,F,D)}add(b){v(b);const{X:S,Y:O,Z:k}=this,{X:F,Y:D,Z:U}=b;let P=n.ZERO,W=n.ZERO,K=n.ZERO,J=n.mul(S,F),te=n.mul(O,D),oe=n.mul(k,U),Ee=n.add(S,O),X=n.add(F,D);Ee=n.mul(Ee,X),X=n.add(J,te),Ee=n.sub(Ee,X),X=n.add(S,k);let se=n.add(F,U);return X=n.mul(X,se),se=n.add(J,oe),X=n.sub(X,se),se=n.add(O,k),P=n.add(D,U),se=n.mul(se,P),P=n.add(te,oe),se=n.sub(se,P),K=g(X),P=n.mul(p,oe),K=n.add(P,K),P=n.sub(te,K),K=n.add(te,K),W=n.mul(P,K),te=n.add(J,J),te=n.add(te,J),oe=g(oe),X=n.mul(p,X),te=n.add(te,oe),oe=n.sub(J,oe),oe=g(oe),X=n.add(X,oe),J=n.mul(te,X),W=n.add(W,J),J=n.mul(se,X),P=n.mul(Ee,P),P=n.sub(P,J),J=n.mul(Ee,te),K=n.mul(se,K),K=n.add(K,J),new M(P,W,K)}subtract(b){return v(b),this.add(b.negate())}is0(){return this.equals(M.ZERO)}multiply(b){if(!o.isValidNot0(b))throw new RangeError("invalid scalar: out of range");const{p:S,f:O}=Y.mulSecret(this,b,s,Z);return Z([S,O])[0]}multiplyUnsafe(b){const S=this,O=b;if(!o.isValid(O))throw new RangeError("invalid scalar: out of range");if(O===ve||S.is0())return M.ZERO;if(O===Me)return S;if(Y.hasWindowSize(this))return Y.mulUnsafe(S,O,Z);const k=[],F=[];return $(k,F,S,O),Ft(M,k,F)}mulAddUnsafe(b,S,O){v(S);const k=[],F=[];return $(k,F,this,b),$(k,F,S,O),Ft(M,k,F)}toAffine(b){const S=this;let O=b;if(O!=null&&!n.isValid(O))throw new RangeError('"invertedZ" expected valid field element');const{X:k,Y:F,Z:D}=S;if(n.eql(D,n.ONE))return{x:k,y:F};const U=S.is0();O==null&&(O=U?n.ONE:n.inv(D));const P=n.mul(k,O),W=n.mul(F,O),K=n.mul(D,O);if(U)return{x:n.ZERO,y:n.ZERO};if(!n.eql(K,n.ONE))throw new Error("invZ was invalid");return{x:P,y:W}}isTorsionFree(){return s===Me?!0:h?h(M,this):Y.mulUnsafe(this,a).is0()}clearCofactor(){return s===Me?this:d?d(M,this):this.multiplyUnsafe(s)}isSmallOrder(){return s===Me?this.is0():this.clearCofactor().is0()}toBytes(b=!0){return Fe(b,"isCompressed"),this.assertValidity(),R(M,this,b)}toHex(b=!0){return Zo(this.toBytes(b))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}}const Z=q=>gi(M,q),Y=new _i(M,E);return Y.bits>=6&&M.BASE.precompute(6),Object.freeze(M.prototype),Object.freeze(M),M}function Ii(e){return Uint8Array.of(e?2:3)}function Oi(e,t){return{secretKey:t.BYTES,publicKey:1+e.BYTES,publicKeyUncompressed:1+2*e.BYTES,publicKeyHasPrefix:!0,signature:2*t.BYTES}}const et={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},Ni={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),basises:[[BigInt("0x3086d221a7d46bcde86c90e49284eb15"),-BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],[BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]},Mi=BigInt(0),Ln=BigInt(2);function Pi(e){const t=et.p,r=BigInt(3),n=BigInt(6),o=BigInt(11),i=BigInt(22),s=BigInt(23),a=BigInt(44),c=BigInt(88),l=e*e*e%t,d=l*l*e%t,h=ne(d,r,t)*d%t,f=ne(h,r,t)*d%t,u=ne(f,Ln,t)*l%t,E=ne(u,o,t)*u%t,m=ne(E,i,t)*E%t,I=ne(m,a,t)*m%t,y=ne(I,c,t)*I%t,B=ne(y,a,t)*m%t,A=ne(B,r,t)*d%t,R=ne(A,s,t)*E%t,x=ne(R,n,t)*l%t,p=ne(x,Ln,t);if(!Te.eql(Te.sqr(p),e))throw new Error("Cannot find square root");return p}const Te=Xe(et.p,{sqrt:Pi}),Oe=Bi(et,{Fp:Te,endo:Ni}),Bn=Object.create(null);function Ye(e,...t){let r=Bn[e];if(r===void 0){const n=je(Xo(e));r=$e(n,n),Bn[e]=r}return je($e(r,...t))}const qr=e=>e.toBytes(!0).slice(1),zr=({x:e})=>Te.toBytes(e),tt=e=>!Te.isOdd(e);function Kr(e){const{Fn:t,BASE:r}=Oe,n=t.fromBytes(re(e,32,"secretKey")),i=r.multiply(n).toAffine();return{scalar:tt(i.y)?n:t.neg(n),bytes:zr(i)}}function Hr(e){const t=Te;if(!t.isValidNot0(e))throw new Error("invalid x: Fail if x ≥ p");const r=t.sqr(e),n=t.add(t.mulN(r,e),BigInt(7));let o=t.sqrt(n);tt(o)||(o=t.neg(o));const i=Oe.fromAffine({x:e,y:o});return i.assertValidity(),i}const Ae=Je;function Wr(...e){return Oe.Fn.create(Ae(Ye("BIP0340/challenge",...e)))}function In(e){return Kr(e).bytes}function Di(e,t,r=Wt(32)){const{Fn:n,BASE:o}=Oe,i=Ar(re(e,void 0,"message")),{bytes:s,scalar:a}=Kr(t),c=re(r,32,"auxRand"),l=n.toBytes(a^Ae(Ye("BIP0340/aux",c))),d=Ye("BIP0340/nonce",l,s,i),h=n.create(Ae(d));if(h===Mi)throw new Error("sign failed: k is zero");const u=o.multiply(h).toAffine(),E=tt(u.y)?h:n.neg(h),m=zr(u),I=Wr(m,s,i),y=new Uint8Array(64);if(y.set(m,0),y.set(n.toBytes(n.create(E+I*a)),32),!Vr(y,i,s))throw new Error("sign: Invalid signature produced");return y}function Vr(e,t,r){const{Fp:n,Fn:o,BASE:i}=Oe,s=re(e,64,"signature"),a=re(t,void 0,"message"),c=re(r,32,"publicKey");try{const l=Hr(Ae(c)),d=s.subarray(0,32),h=Ae(d);if(!n.isValidNot0(h))return!1;const f=Ae(s.subarray(32,64));if(!o.isValidNot0(f))return!1;const u=Wr(d,qr(l),a),E=i.mulAddUnsafe(f,l,o.neg(u)),{x:m,y:I}=E.toAffine();return!(E.is0()||!tt(I)||!n.eql(m,h))}catch{return!1}}const ze=(()=>{const r=n=>(n=n===void 0?Wt(48):n,hi(re(n,48,"seed"),et.n));return Object.freeze({keygen:Ai(r,In),getPublicKey:In,sign:Di,verify:Vr,Point:Oe,utils:Object.freeze({randomSecretKey:r,taggedHash:Ye,lift_x:Hr,pointToBytes:qr}),lengths:Object.freeze({secretKey:32,publicKey:32,publicKeyHasPrefix:!1,signature:64,seed:48})})})(),H={ERROR_ASSOCIATION_PORT_OUT_OF_RANGE:"ERROR_ASSOCIATION_PORT_OUT_OF_RANGE",ERROR_REFLECTOR_ID_OUT_OF_RANGE:"ERROR_REFLECTOR_ID_OUT_OF_RANGE",ERROR_FORBIDDEN_WALLET_BASE_URL:"ERROR_FORBIDDEN_WALLET_BASE_URL",ERROR_SECURE_CONTEXT_REQUIRED:"ERROR_SECURE_CONTEXT_REQUIRED",ERROR_SESSION_CLOSED:"ERROR_SESSION_CLOSED",ERROR_SESSION_TIMEOUT:"ERROR_SESSION_TIMEOUT",ERROR_WALLET_NOT_FOUND:"ERROR_WALLET_NOT_FOUND",ERROR_INVALID_PROTOCOL_VERSION:"ERROR_INVALID_PROTOCOL_VERSION",ERROR_BROWSER_NOT_SUPPORTED:"ERROR_BROWSER_NOT_SUPPORTED",ERROR_LOOPBACK_ACCESS_BLOCKED:"ERROR_LOOPBACK_ACCESS_BLOCKED",ERROR_ASSOCIATION_CANCELLED:"ERROR_ASSOCIATION_CANCELLED",ERROR_ILLEGAL_TRANSPORT_STATE:"ERROR_ILLEGAL_TRANSPORT_STATE"};var z=class extends Error{data;code;constructor(...e){const[t,r,n]=e;super(r),this.code=t,this.data=n,this.name="SolanaMobileWalletAdapterError"}},nt=class extends Error{data;code;jsonRpcMessageId;constructor(...e){const[t,r,n,o]=e;super(n),this.code=r,this.data=o,this.jsonRpcMessageId=t,this.name="SolanaMobileWalletAdapterProtocolError"}};const ct=20012;function ki(){const e=ze.utils.randomSecretKey();return{privateKey:e,publicKey:fe(ze.getPublicKey(e))}}async function Fi(e){const t=await crypto.subtle.exportKey("raw",e),r=je(new Uint8Array(t));return fe(r)}function Ui(e,t,r,n,o){return JSON.stringify([0,e,t,r,n,o])}function jr(e,t,r,n,o){const i=Ui(e,t,r,n,o);return fe(je(new TextEncoder().encode(i)))}function On(e,t,r,n){const o=fe(ze.getPublicKey(n)),i=Math.floor(Date.now()/1e3),s=jr(o,i,e,r,t);return{id:s,pubkey:o,created_at:i,kind:e,tags:r,content:t,sig:fe(ze.sign(_e(s),n))}}function qi(e){if(jr(e.pubkey,e.created_at,e.kind,e.tags,e.content)!==e.id)return!1;try{return ze.verify(_e(e.sig),_e(e.id),_e(e.pubkey))}catch{return!1}}async function De(e,t){const r=await crypto.subtle.exportKey("raw",e),n=await crypto.subtle.sign({hash:"SHA-256",name:"ECDSA"},t,r),o=new Uint8Array(r.byteLength+n.byteLength);return o.set(new Uint8Array(r),0),o.set(new Uint8Array(n),r.byteLength),o}function zi(e){return so(e)}function Ki(e){return Co(zi(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}const Hi="solana:signTransactions",Nn="solana:cloneAuthorization";function Jt(e,t){return new Proxy({},{get(r,n){return n==="then"?null:(r[n]==null&&(r[n]=async function(o){const{method:i,params:s}=Wi(n,o,e),a=await t(i,s);return i==="authorize"&&s.sign_in_payload&&!a.sign_in_result&&(a.sign_in_result=await ji(s.sign_in_payload,a,t)),Vi(n,a,e)}),r[n])},defineProperty(){return!1},deleteProperty(){return!1}})}function Wi(e,t,r){let n=t,o=e.toString().replace(/[A-Z]/g,i=>`_${i.toLowerCase()}`).toLowerCase();switch(e){case"authorize":{const i=n;let{chain:s}=i;if(r==="legacy"){switch(s){case"solana:testnet":s="testnet";break;case"solana:devnet":s="devnet";break;case"solana:mainnet":s="mainnet-beta";break;default:s=i.cluster}i.cluster=s,n=i}else{switch(s){case"testnet":case"devnet":s=`solana:${s}`;break;case"mainnet-beta":s="solana:mainnet"}i.chain=s,n=i}}case"reauthorize":{const{auth_token:i,identity:s}=n;i&&(r==="legacy"?(o="reauthorize",n={auth_token:i,identity:s}):o="authorize");break}}return{method:o,params:n}}function Vi(e,t,r){switch(e){case"getCapabilities":{const n=t;switch(r){case"legacy":{const o=[Hi];return n.supports_clone_authorization===!0&&o.push(Nn),{...n,features:o}}case"v1":return{...n,supports_sign_and_send_transactions:!0,supports_clone_authorization:n.features.includes(Nn)}}}}return t}async function ji(e,t,r){const n=e.domain??window.location.host,o=t.accounts[0].address,i=Ki({...e,domain:n,address:_o(o)}),s=await r("sign_messages",{addresses:[o],payloads:[i]}),a=xe(s.signed_payloads[0]),c=le(a.slice(0,a.length-64)),l=le(a.slice(a.length-64));return{address:o,signed_message:c.length==0?i:c,signature:l}}function $i(e){if(e>=4294967296)throw new Error("Outbound sequence number overflow. The maximum sequence number is 32-bytes.");const t=new ArrayBuffer(4);return new DataView(t).setUint32(0,e,!1),new Uint8Array(t)}const Zi=12;async function Yi(e,t,r){const n=$i(t),o=new Uint8Array(Zi);crypto.getRandomValues(o);const i=await crypto.subtle.encrypt(Zr(n,o),r,xo(e)),s=new Uint8Array(n.byteLength+o.byteLength+i.byteLength);return s.set(new Uint8Array(n),0),s.set(new Uint8Array(o),n.byteLength),s.set(new Uint8Array(i),n.byteLength+o.byteLength),s}async function $r(e,t){const r=e.slice(0,4),n=e.slice(4,16),o=e.slice(16),i=await crypto.subtle.decrypt(Zr(r,n),t,o);return Ao(new Uint8Array(i))}function Zr(e,t){return{additionalData:e,iv:t,name:"AES-GCM",tagLength:128}}async function Xt(){return await crypto.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},!1,["sign"])}async function ke(){return await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!1,["deriveKey","deriveBits"])}function Gi(){return Yr(49152+Math.floor(Math.random()*16384))}function Yr(e){if(e<49152||e>65535)throw new z(H.ERROR_ASSOCIATION_PORT_OUT_OF_RANGE,`Association port number must be between 49152 and 65535. ${e} given.`,{port:e});return e}function en(e){return e.replace(/[/+=]/g,t=>({"/":"_","+":"-","=":"."})[t])}const Qi="solana-wallet";function Mn(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function tn(e,t){let r=null;if(t){try{r=new URL(t)}catch{}if(r?.protocol!=="https:")throw new z(H.ERROR_FORBIDDEN_WALLET_BASE_URL,"Base URLs supplied by wallets must be valid `https` URLs")}r||=new URL(`${Qi}:/`);const n=e.startsWith("/")?e:[...Mn(r.pathname),...Mn(e)].join("/");return new URL(n,r)}async function Ji(e,t,r,n=["v1"]){const o=Yr(t),i=await crypto.subtle.exportKey("raw",e),s=Ht(i),a=tn("v1/associate/local",r);return a.searchParams.set("association",en(s)),a.searchParams.set("port",`${o}`),n.forEach(c=>{a.searchParams.set("v",c)}),a}async function Xi(e,t,r,n,o=["v1"]){const i=await crypto.subtle.exportKey("raw",e),s=Ht(i),a=tn("v1/associate/remote",n);return a.searchParams.set("association",en(s)),a.searchParams.set("reflector",`${t}`),a.searchParams.set("id",`${le(r,!0)}`),o.forEach(c=>{a.searchParams.set("v",c)}),a}async function es(e,t,r,n,o,i=["v1"]){const s=await crypto.subtle.exportKey("raw",e),a=Ht(s),c=tn(`v1/associate/${t}/nostr`,o);return c.searchParams.set("association",en(a)),c.searchParams.set("relay",r),c.searchParams.set("pubkey",n),i.forEach(l=>{c.searchParams.set("v",l)}),c}async function nn(e,t){const r=JSON.stringify(e),n=e.id;return Yi(r,n,t)}async function rn(e,t){const r=await $r(e,t),n=JSON.parse(r);if(Object.hasOwnProperty.call(n,"error"))throw new nt(n.id,n.error.code,n.error.message);return n}async function on(e,t,r){const[n,o]=await Promise.all([crypto.subtle.exportKey("raw",t),crypto.subtle.importKey("raw",e.slice(0,65),{name:"ECDH",namedCurve:"P-256"},!1,[])]),i=await crypto.subtle.deriveBits({name:"ECDH",public:o},r,256),s=await crypto.subtle.importKey("raw",i,"HKDF",!1,["deriveKey"]);return await crypto.subtle.deriveKey({name:"HKDF",hash:"SHA-256",salt:new Uint8Array(n),info:new Uint8Array},s,{name:"AES-GCM",length:128},!1,["encrypt","decrypt"])}async function sn(e,t){const r=await $r(e,t),n=JSON.parse(r);let o="legacy";if(Object.hasOwnProperty.call(n,"v"))switch(n.v){case 1:case"1":case"v1":o="v1";break;case"legacy":o="legacy";break;default:throw new z(H.ERROR_INVALID_PROTOCOL_VERSION,`Unknown/unsupported protocol version: ${n.v}`)}return{protocol_version:o}}const Ge={Firefox:0,Other:1};function ts(){return navigator.userAgent.indexOf("Firefox/")!==-1?Ge.Firefox:Ge.Other}function ns(){return new Promise((e,t)=>{function r(){clearTimeout(o),window.removeEventListener("blur",n)}function n(){r(),e()}window.addEventListener("blur",n);const o=setTimeout(()=>{r(),t()},3e3)})}let Re=null;function rs(e){(Re==null||!Re.isConnected)&&(Re=document.createElement("iframe"),Re.style.display="none",document.body.appendChild(Re)),Re.contentWindow.location.href=e.toString()}async function Gr(e){if(e.protocol==="https:")window.location.assign(e);else try{switch(ts()){case Ge.Firefox:rs(e);break;case Ge.Other:{const t=ns();window.location.assign(e),await t;break}}}catch{throw new z(H.ERROR_WALLET_NOT_FOUND,"Found no installed wallet that supports the mobile wallet protocol.")}}async function os(e,t){const r=Gi();return await Gr(await Ji(e,r,t)),r}async function is(e,t,r,n,o){const i=await es(e,t,r,n,o);return t=="local"&&await Gr(i),i}const Le={retryDelayScheduleMs:[150,150,200,500,500,750,750,1e3],timeoutMs:3e4},Qr="com.solana.mobilewalletadapter.v1",Pn="com.solana.mobilewalletadapter.v1.base64";function an(){if(typeof window>"u"||window.isSecureContext!==!0)throw new z(H.ERROR_SECURE_CONTEXT_REQUIRED,"The mobile wallet adapter protocol must be used in a secure context (`https`).")}function cn(e){let t;try{t=new URL(e)}catch{throw new z(H.ERROR_FORBIDDEN_WALLET_BASE_URL,"Invalid base URL supplied by wallet")}if(t.protocol!=="https:")throw new z(H.ERROR_FORBIDDEN_WALLET_BASE_URL,"Base URLs supplied by wallets must be valid `https` URLs")}function Be(e){return new DataView(e).getUint32(0,!1)}function ss(e){const t=new Uint8Array(e),r=e.byteLength,n=10;let o=0,i=0,s;do{if(i>=r||i>n)throw new RangeError("Failed to decode varint");s=t[i++],o|=(s&127)<<7*i}while(s>=128);return{value:o,offset:i}}function as(e){const{value:t,offset:r}=ss(e);return new Uint8Array(e.slice(r,r+t))}async function cs(e){an();const t=await Xt(),r=`ws://localhost:${await os(t.publicKey,e?.baseUri)}/solana-wallet`;let n;const o=(()=>{const h=[...Le.retryDelayScheduleMs];return()=>h.length>1?h.shift():h[0]})();let i=1,s=0,a={__type:"disconnected"},c,l=!1,d;return{close:()=>{c.close(),d()},wallet:new Promise((h,f)=>{const u={},E=async()=>{if(a.__type!=="connecting"){console.warn(`Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${a.__type}\`.`);return}c.removeEventListener("open",E);const{associationKeypair:x}=a,p=await ke();c.send(await De(p.publicKey,x.privateKey)),a={__type:"hello_req_sent",associationPublicKey:x.publicKey,ecdhPrivateKey:p.privateKey}},m=x=>{x.wasClean?a={__type:"disconnected"}:f(new z(H.ERROR_SESSION_CLOSED,`The wallet session dropped unexpectedly (${x.code}: ${x.reason}).`,{closeEvent:x})),B()},I=async x=>{B(),Date.now()-n>=Le.timeoutMs?f(new z(H.ERROR_SESSION_TIMEOUT,`Failed to connect to the wallet websocket at ${r}.`)):(await new Promise(p=>{const g=o();A=window.setTimeout(p,g)}),R())},y=async x=>{const p=await x.data.arrayBuffer();switch(a.__type){case"connecting":{if(p.byteLength!==0){f(new z(H.ERROR_ILLEGAL_TRANSPORT_STATE,"Encountered unexpected message while connecting"));return}const g=await ke();c.send(await De(g.publicKey,t.privateKey)),a={__type:"hello_req_sent",associationPublicKey:t.publicKey,ecdhPrivateKey:g.privateKey};break}case"connected":try{const g=Be(p.slice(0,4));if(g!==s+1)throw new z(H.ERROR_ILLEGAL_TRANSPORT_STATE,"Encrypted message has invalid sequence number");s=g;const C=await rn(p,a.sharedSecret),w=u[C.id];delete u[C.id],w.resolve(C.result)}catch(g){if(g instanceof nt){const C=u[g.jsonRpcMessageId];delete u[g.jsonRpcMessageId],C.reject(g)}else throw g}break;case"hello_req_sent":{if(p.byteLength===0){const _=await ke();c.send(await De(_.publicKey,t.privateKey)),a={__type:"hello_req_sent",associationPublicKey:t.publicKey,ecdhPrivateKey:_.privateKey};break}const g=await on(p,a.associationPublicKey,a.ecdhPrivateKey),C=p.slice(65),w=C.byteLength!==0?await(async()=>{const _=Be(C.slice(0,4));return _!==s+1?(f(new z(H.ERROR_ILLEGAL_TRANSPORT_STATE,"Encrypted message has invalid sequence number")),c.close(),{protocol_version:"v1"}):(s=_,sn(C,g))})():{protocol_version:"legacy"};a={__type:"connected",sharedSecret:g,sessionProperties:w};const T=Jt(w.protocol_version,async(_,L)=>{const v=i++;return c.send(await nn({id:v,jsonrpc:"2.0",method:_,params:L??{}},g)),new Promise((N,$)=>{u[v]={resolve(j){switch(_){case"authorize":case"reauthorize":{const{wallet_uri_base:M}=j;if(M!=null)try{cn(M)}catch(Z){$(Z);return}break}}N(j)},reject:$}})});l=!0;try{h(T)}catch(_){f(_)}break}}};d=()=>{c.removeEventListener("message",y),B(),l||f(new z(H.ERROR_SESSION_CLOSED,"The wallet session was closed before connection.",{closeEvent:new CloseEvent("socket was closed before connection")}))};let B,A;const R=()=>{B&&B(),a={__type:"connecting",associationKeypair:t},n===void 0&&(n=Date.now()),c=new WebSocket(r,[Qr]),c.addEventListener("open",E),c.addEventListener("close",m),c.addEventListener("error",I),c.addEventListener("message",y),B=()=>{window.clearTimeout(A),c.removeEventListener("open",E),c.removeEventListener("close",m),c.removeEventListener("error",I),c.removeEventListener("message",y)}};R()})}}async function ls(e){an();const t=await Xt(),r=`wss://${e?.remoteHostAuthority}/reflect`;let n;const o=(()=>{const m=[...Le.retryDelayScheduleMs];return()=>m.length>1?m.shift():m[0]})();let i=1,s=0,a,c={__type:"disconnected"},l,d;const h=async m=>{if(a=="base64"){const I=await m.data;return xe(I).buffer}else return await m.data.arrayBuffer()},f=await new Promise((m,I)=>{const y=async()=>{if(c.__type!=="connecting"){console.warn(`Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${c.__type}\`.`);return}l.protocol.includes(Pn)?a="base64":a="binary",l.removeEventListener("open",y)},B=g=>{g.wasClean?c={__type:"disconnected"}:I(new z(H.ERROR_SESSION_CLOSED,`The wallet session dropped unexpectedly (${g.code}: ${g.reason}).`,{closeEvent:g})),d()},A=async g=>{d(),Date.now()-n>=Le.timeoutMs?I(new z(H.ERROR_SESSION_TIMEOUT,`Failed to connect to the wallet websocket at ${r}.`)):(await new Promise(C=>{const w=o();x=window.setTimeout(C,w)}),p())},R=async g=>{const C=await h(g);if(c.__type==="connecting"){if(C.byteLength==0){I(new z(H.ERROR_ILLEGAL_TRANSPORT_STATE,"Encountered unexpected message while connecting")),l.close();return}const w=as(C);c={__type:"reflector_id_received",reflectorId:w};const T=await Xi(t.publicKey,e.remoteHostAuthority,w,e?.baseUri);l.removeEventListener("message",R),m(T)}};let x;const p=()=>{d&&d(),c={__type:"connecting",associationKeypair:t},n===void 0&&(n=Date.now()),l=new WebSocket(r,[Qr,Pn]),l.addEventListener("open",y),l.addEventListener("close",B),l.addEventListener("error",A),l.addEventListener("message",R),d=()=>{window.clearTimeout(x),l.removeEventListener("open",y),l.removeEventListener("close",B),l.removeEventListener("error",A),l.removeEventListener("message",R)}};p()});let u=!1,E;return{associationUrl:f,close:()=>{l.close(),E()},wallet:new Promise((m,I)=>{const y={},B=async A=>{const R=await h(A);switch(c.__type){case"reflector_id_received":{if(R.byteLength!==0){I(new z(H.ERROR_ILLEGAL_TRANSPORT_STATE,"Encountered unexpected message while awaiting reflection")),l.close();return}const x=await ke(),p=await De(x.publicKey,t.privateKey);a=="base64"?l.send(le(p)):l.send(p),c={__type:"hello_req_sent",associationPublicKey:t.publicKey,ecdhPrivateKey:x.privateKey};break}case"connected":try{const x=Be(R.slice(0,4));if(x!==s+1)throw new z(H.ERROR_ILLEGAL_TRANSPORT_STATE,"Encrypted message has invalid sequence number");s=x;const p=await rn(R,c.sharedSecret),g=y[p.id];delete y[p.id],g.resolve(p.result)}catch(x){if(x instanceof nt){const p=y[x.jsonRpcMessageId];delete y[x.jsonRpcMessageId],p.reject(x)}else throw x}break;case"hello_req_sent":{const x=await on(R,c.associationPublicKey,c.ecdhPrivateKey),p=R.slice(65),g=p.byteLength!==0?await(async()=>{const w=Be(p.slice(0,4));return w!==s+1?(I(new z(H.ERROR_ILLEGAL_TRANSPORT_STATE,"Encrypted message has invalid sequence number")),l.close(),{protocol_version:"v1"}):(s=w,sn(p,x))})():{protocol_version:"legacy"};c={__type:"connected",sharedSecret:x,sessionProperties:g};const C=Jt(g.protocol_version,async(w,T)=>{const _=i++,L=await nn({id:_,jsonrpc:"2.0",method:w,params:T??{}},x);return a=="base64"?l.send(le(L)):l.send(L),new Promise((v,N)=>{y[_]={resolve($){switch(w){case"authorize":case"reauthorize":{const{wallet_uri_base:j}=$;if(j!=null)try{cn(j)}catch(M){N(M);return}break}}v($)},reject:N}})});u=!0;try{m(C)}catch(w){I(w)}break}}};l.addEventListener("message",B),E=()=>{l.removeEventListener("message",B),d(),u||I(new z(H.ERROR_SESSION_CLOSED,"The wallet session was closed before connection.",{closeEvent:new CloseEvent("socket was closed before connection")}))}})}}async function Jr(e){an();const t=await Xt(),{privateKey:r,publicKey:n}=ki(),o=await is(t.publicKey,e.connectionType,e.relayDomain,n,e.baseUri),i=await Fi(t.publicKey),s=crypto.randomUUID(),a=`wss://${e.relayDomain}`,c=Date.now(),l=(()=>{const A=[...Le.retryDelayScheduleMs];return()=>A.length>1?A.shift():A[0]})();let d=1,h=0,f={__type:"disconnected"},u,E=!1,m;const I=(A,R)=>{const x=On(ct,A,[["d",i],["p",R]],r);u.send(JSON.stringify(["EVENT",x]))},y=()=>{if(f.__type=="connected"||f.__type=="hello_req_sent"){const A=On(ct,"",[["d",i],["p",f.walletNostrPubkey],["msg","SESSION_END"]],r);u.send(JSON.stringify(["EVENT",A]))}u.close()},B={close:()=>{y(),m()},wallet:new Promise((A,R)=>{const x={},p=async()=>{if(f.__type!=="connecting"){console.warn(`Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${f.__type}\`.`);return}u.removeEventListener("open",p),u.send(JSON.stringify(["REQ",s,{kinds:[ct],"#d":[i]}])),f={__type:"subscribed",dappNostrPrivateKey:r,dappNostrPubkey:n,sessionIdentifier:i}},g=v=>{v.wasClean?f={__type:"disconnected"}:R(new z(H.ERROR_SESSION_CLOSED,`The Nostr subscription dropped unexpectedly (${v.code}: ${v.reason}).`,{closeEvent:v})),T()},C=async()=>{T(),Date.now()-c>=Le.timeoutMs?R(new z(H.ERROR_SESSION_TIMEOUT,`Failed to connect to the Nostr relay at ${e.relayDomain}.`)):(await new Promise(v=>{const N=l();_=window.setTimeout(v,N)}),L())},w=async v=>{let N;try{if(N=JSON.parse(v.data),!Array.isArray(N))throw new Error}catch{R(new z(H.ERROR_ILLEGAL_TRANSPORT_STATE,"Invalid Nostr message received: "+v.data)),y();return}const $=N[0];if($==="CLOSED")T();else if($==="EVENT"){const j=N[2];if(!j||!qi(j))return;switch(f.__type){case"subscribed":{if(j.content.length!==0){R(new z(H.ERROR_ILLEGAL_TRANSPORT_STATE,"Encountered unexpected message while awaiting reflection")),y();return}const M=j.pubkey,Z=await ke(),Y=await De(Z.publicKey,t.privateKey),q=le(Y);I(q,M),f={__type:"hello_req_sent",associationPublicKey:t.publicKey,ecdhPrivateKey:Z.privateKey,walletNostrPubkey:M};break}case"hello_req_sent":{if(j.pubkey!==f.walletNostrPubkey||j.content==="")return;const M=xe(j.content).buffer,Z=await on(M,f.associationPublicKey,f.ecdhPrivateKey),Y=M.slice(65),q=Y.byteLength!==0?await(async()=>{const S=Be(Y.slice(0,4));return S!==h+1?(R(new z(H.ERROR_ILLEGAL_TRANSPORT_STATE,"Encrypted message has invalid sequence number")),y(),{protocol_version:"v1"}):(h=S,sn(Y,Z))})():{protocol_version:"legacy"};f={__type:"connected",sharedSecret:Z,sessionProperties:q,walletNostrPubkey:f.walletNostrPubkey};const b=Jt(q.protocol_version,async(S,O)=>{const k=d++,F=await nn({id:k,jsonrpc:"2.0",method:S,params:O??{}},Z);return I(le(F),f.walletNostrPubkey),new Promise((D,U)=>{x[k]={resolve(P){switch(S){case"authorize":case"reauthorize":{const{wallet_uri_base:W}=P;if(W!=null)try{cn(W)}catch(K){U(K);return}break}}D(P)},reject:U}})});E=!0;try{A(b)}catch(S){R(S)}break}case"connected":if(j.pubkey!==f.walletNostrPubkey||j.content==="")return;try{const M=xe(j.content).buffer,Z=Be(M.slice(0,4));if(Z!==h+1)throw new z(H.ERROR_ILLEGAL_TRANSPORT_STATE,"Encrypted message has invalid sequence number");h=Z;const Y=await rn(M,f.sharedSecret),q=x[Y.id];delete x[Y.id],q.resolve(Y.result)}catch(M){if(M instanceof nt){const Z=x[M.jsonRpcMessageId];delete x[M.jsonRpcMessageId],Z.reject(M)}else throw M}}}};m=()=>{u.removeEventListener("message",w),T(),E||R(new z(H.ERROR_SESSION_CLOSED,"The wallet session was closed before connection.",{closeEvent:new CloseEvent("socket was closed before connection")}))};let T,_;const L=()=>{T&&T(),f={__type:"connecting",associationKeypair:t},u=new WebSocket(a),u.addEventListener("open",p),u.addEventListener("close",g),u.addEventListener("error",C),u.addEventListener("message",w),T=()=>{window.clearTimeout(_),u.removeEventListener("open",p),u.removeEventListener("close",g),u.removeEventListener("error",C),u.removeEventListener("message",w)}};L()})};return e.connectionType=="local"?B:{...B,associationUrl:o}}function ds(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ce={},lt,Dn;function us(){return Dn||(Dn=1,lt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),lt}var dt={},ue={},kn;function be(){if(kn)return ue;kn=1;let e;const t=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return ue.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},ue.getSymbolTotalCodewords=function(n){return t[n]},ue.getBCHDigit=function(r){let n=0;for(;r!==0;)n++,r>>>=1;return n},ue.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');e=n},ue.isKanjiModeEnabled=function(){return typeof e<"u"},ue.toSJIS=function(n){return e(n)},ue}var ut={},Fn;function ln(){return Fn||(Fn=1,(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+r)}}e.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},e.from=function(n,o){if(e.isValid(n))return n;try{return t(n)}catch{return o}}})(ut)),ut}var ht,Un;function hs(){if(Un)return ht;Un=1;function e(){this.buffer=[],this.length=0}return e.prototype={get:function(t){const r=Math.floor(t/8);return(this.buffer[r]>>>7-t%8&1)===1},put:function(t,r){for(let n=0;n<r;n++)this.putBit((t>>>r-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const r=Math.floor(this.length/8);this.buffer.length<=r&&this.buffer.push(0),t&&(this.buffer[r]|=128>>>this.length%8),this.length++}},ht=e,ht}var ft,qn;function fs(){if(qn)return ft;qn=1;function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}return e.prototype.set=function(t,r,n,o){const i=t*this.size+r;this.data[i]=n,o&&(this.reservedBit[i]=!0)},e.prototype.get=function(t,r){return this.data[t*this.size+r]},e.prototype.xor=function(t,r,n){this.data[t*this.size+r]^=n},e.prototype.isReserved=function(t,r){return this.reservedBit[t*this.size+r]},ft=e,ft}var pt={},zn;function ps(){return zn||(zn=1,(function(e){const t=be().getSymbolSize;e.getRowColCoords=function(n){if(n===1)return[];const o=Math.floor(n/7)+2,i=t(n),s=i===145?26:Math.ceil((i-13)/(2*o-2))*2,a=[i-7];for(let c=1;c<o-1;c++)a[c]=a[c-1]-s;return a.push(6),a.reverse()},e.getPositions=function(n){const o=[],i=e.getRowColCoords(n),s=i.length;for(let a=0;a<s;a++)for(let c=0;c<s;c++)a===0&&c===0||a===0&&c===s-1||a===s-1&&c===0||o.push([i[a],i[c]]);return o}})(pt)),pt}var gt={},Kn;function gs(){if(Kn)return gt;Kn=1;const e=be().getSymbolSize,t=7;return gt.getPositions=function(n){const o=e(n);return[[0,0],[o-t,0],[0,o-t]]},gt}var mt={},Hn;function ms(){return Hn||(Hn=1,(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const i=o.size;let s=0,a=0,c=0,l=null,d=null;for(let h=0;h<i;h++){a=c=0,l=d=null;for(let f=0;f<i;f++){let u=o.get(h,f);u===l?a++:(a>=5&&(s+=t.N1+(a-5)),l=u,a=1),u=o.get(f,h),u===d?c++:(c>=5&&(s+=t.N1+(c-5)),d=u,c=1)}a>=5&&(s+=t.N1+(a-5)),c>=5&&(s+=t.N1+(c-5))}return s},e.getPenaltyN2=function(o){const i=o.size;let s=0;for(let a=0;a<i-1;a++)for(let c=0;c<i-1;c++){const l=o.get(a,c)+o.get(a,c+1)+o.get(a+1,c)+o.get(a+1,c+1);(l===4||l===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const i=o.size;let s=0,a=0,c=0;for(let l=0;l<i;l++){a=c=0;for(let d=0;d<i;d++)a=a<<1&2047|o.get(l,d),d>=10&&(a===1488||a===93)&&s++,c=c<<1&2047|o.get(d,l),d>=10&&(c===1488||c===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let i=0;const s=o.data.length;for(let c=0;c<s;c++)i+=o.data[c];return Math.abs(Math.ceil(i*100/s/5)-10)*t.N4};function r(n,o,i){switch(n){case e.Patterns.PATTERN000:return(o+i)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return i%3===0;case e.Patterns.PATTERN011:return(o+i)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case e.Patterns.PATTERN101:return o*i%2+o*i%3===0;case e.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case e.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}e.applyMask=function(o,i){const s=i.size;for(let a=0;a<s;a++)for(let c=0;c<s;c++)i.isReserved(c,a)||i.xor(c,a,r(o,c,a))},e.getBestMask=function(o,i){const s=Object.keys(e.Patterns).length;let a=0,c=1/0;for(let l=0;l<s;l++){i(l),e.applyMask(l,o);const d=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(l,o),d<c&&(c=d,a=l)}return a}})(mt)),mt}var He={},Wn;function Xr(){if(Wn)return He;Wn=1;const e=ln(),t=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],r=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return He.getBlocksCount=function(o,i){switch(i){case e.L:return t[(o-1)*4+0];case e.M:return t[(o-1)*4+1];case e.Q:return t[(o-1)*4+2];case e.H:return t[(o-1)*4+3];default:return}},He.getTotalCodewordsCount=function(o,i){switch(i){case e.L:return r[(o-1)*4+0];case e.M:return r[(o-1)*4+1];case e.Q:return r[(o-1)*4+2];case e.H:return r[(o-1)*4+3];default:return}},He}var wt={},Ne={},Vn;function ws(){if(Vn)return Ne;Vn=1;const e=new Uint8Array(512),t=new Uint8Array(256);return(function(){let n=1;for(let o=0;o<255;o++)e[o]=n,t[n]=o,n<<=1,n&256&&(n^=285);for(let o=255;o<512;o++)e[o]=e[o-255]})(),Ne.log=function(n){if(n<1)throw new Error("log("+n+")");return t[n]},Ne.exp=function(n){return e[n]},Ne.mul=function(n,o){return n===0||o===0?0:e[t[n]+t[o]]},Ne}var jn;function bs(){return jn||(jn=1,(function(e){const t=ws();e.mul=function(n,o){const i=new Uint8Array(n.length+o.length-1);for(let s=0;s<n.length;s++)for(let a=0;a<o.length;a++)i[s+a]^=t.mul(n[s],o[a]);return i},e.mod=function(n,o){let i=new Uint8Array(n);for(;i.length-o.length>=0;){const s=i[0];for(let c=0;c<o.length;c++)i[c]^=t.mul(o[c],s);let a=0;for(;a<i.length&&i[a]===0;)a++;i=i.slice(a)}return i},e.generateECPolynomial=function(n){let o=new Uint8Array([1]);for(let i=0;i<n;i++)o=e.mul(o,new Uint8Array([1,t.exp(i)]));return o}})(wt)),wt}var bt,$n;function ys(){if($n)return bt;$n=1;const e=bs();function t(r){this.genPoly=void 0,this.degree=r,this.degree&&this.initialize(this.degree)}return t.prototype.initialize=function(n){this.degree=n,this.genPoly=e.generateECPolynomial(this.degree)},t.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const o=new Uint8Array(n.length+this.degree);o.set(n);const i=e.mod(o,this.genPoly),s=this.degree-i.length;if(s>0){const a=new Uint8Array(this.degree);return a.set(i,s),a}return i},bt=t,bt}var yt={},Et={},Rt={},Zn;function eo(){return Zn||(Zn=1,Rt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}),Rt}var ce={},Yn;function to(){if(Yn)return ce;Yn=1;const e="[0-9]+",t="[A-Z $%*+\\-./:]+";let r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";r=r.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+r+`)(?:.|[\r
]))+`;ce.KANJI=new RegExp(r,"g"),ce.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),ce.BYTE=new RegExp(n,"g"),ce.NUMERIC=new RegExp(e,"g"),ce.ALPHANUMERIC=new RegExp(t,"g");const o=new RegExp("^"+r+"$"),i=new RegExp("^"+e+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return ce.testKanji=function(c){return o.test(c)},ce.testNumeric=function(c){return i.test(c)},ce.testAlphanumeric=function(c){return s.test(c)},ce}var Gn;function ye(){return Gn||(Gn=1,(function(e){const t=eo(),r=to();e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},e.getBestModeForData=function(i){return r.testNumeric(i)?e.NUMERIC:r.testAlphanumeric(i)?e.ALPHANUMERIC:r.testKanji(i)?e.KANJI:e.BYTE},e.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},e.isValid=function(i){return i&&i.bit&&i.ccBits};function n(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(i,s){if(e.isValid(i))return i;try{return n(i)}catch{return s}}})(Et)),Et}var Qn;function Es(){return Qn||(Qn=1,(function(e){const t=be(),r=Xr(),n=ln(),o=ye(),i=eo(),s=7973,a=t.getBCHDigit(s);function c(f,u,E){for(let m=1;m<=40;m++)if(u<=e.getCapacity(m,E,f))return m}function l(f,u){return o.getCharCountIndicator(f,u)+4}function d(f,u){let E=0;return f.forEach(function(m){const I=l(m.mode,u);E+=I+m.getBitsLength()}),E}function h(f,u){for(let E=1;E<=40;E++)if(d(f,E)<=e.getCapacity(E,u,o.MIXED))return E}e.from=function(u,E){return i.isValid(u)?parseInt(u,10):E},e.getCapacity=function(u,E,m){if(!i.isValid(u))throw new Error("Invalid QR Code version");typeof m>"u"&&(m=o.BYTE);const I=t.getSymbolTotalCodewords(u),y=r.getTotalCodewordsCount(u,E),B=(I-y)*8;if(m===o.MIXED)return B;const A=B-l(m,u);switch(m){case o.NUMERIC:return Math.floor(A/10*3);case o.ALPHANUMERIC:return Math.floor(A/11*2);case o.KANJI:return Math.floor(A/13);case o.BYTE:default:return Math.floor(A/8)}},e.getBestVersionForData=function(u,E){let m;const I=n.from(E,n.M);if(Array.isArray(u)){if(u.length>1)return h(u,I);if(u.length===0)return 1;m=u[0]}else m=u;return c(m.mode,m.getLength(),I)},e.getEncodedBits=function(u){if(!i.isValid(u)||u<7)throw new Error("Invalid QR Code version");let E=u<<12;for(;t.getBCHDigit(E)-a>=0;)E^=s<<t.getBCHDigit(E)-a;return u<<12|E}})(yt)),yt}var Ct={},Jn;function Rs(){if(Jn)return Ct;Jn=1;const e=be(),t=1335,r=21522,n=e.getBCHDigit(t);return Ct.getEncodedBits=function(i,s){const a=i.bit<<3|s;let c=a<<10;for(;e.getBCHDigit(c)-n>=0;)c^=t<<e.getBCHDigit(c)-n;return(a<<10|c)^r},Ct}var vt={},_t,Xn;function Cs(){if(Xn)return _t;Xn=1;const e=ye();function t(r){this.mode=e.NUMERIC,this.data=r.toString()}return t.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let o,i,s;for(o=0;o+3<=this.data.length;o+=3)i=this.data.substr(o,3),s=parseInt(i,10),n.put(s,10);const a=this.data.length-o;a>0&&(i=this.data.substr(o),s=parseInt(i,10),n.put(s,a*3+1))},_t=t,_t}var St,er;function vs(){if(er)return St;er=1;const e=ye(),t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function r(n){this.mode=e.ALPHANUMERIC,this.data=n}return r.getBitsLength=function(o){return 11*Math.floor(o/2)+6*(o%2)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(o){let i;for(i=0;i+2<=this.data.length;i+=2){let s=t.indexOf(this.data[i])*45;s+=t.indexOf(this.data[i+1]),o.put(s,11)}this.data.length%2&&o.put(t.indexOf(this.data[i]),6)},St=r,St}var At,tr;function _s(){if(tr)return At;tr=1;const e=ye();function t(r){this.mode=e.BYTE,typeof r=="string"?this.data=new TextEncoder().encode(r):this.data=new Uint8Array(r)}return t.getBitsLength=function(n){return n*8},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){for(let n=0,o=this.data.length;n<o;n++)r.put(this.data[n],8)},At=t,At}var xt,nr;function Ss(){if(nr)return xt;nr=1;const e=ye(),t=be();function r(n){this.mode=e.KANJI,this.data=n}return r.getBitsLength=function(o){return o*13},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(n){let o;for(o=0;o<this.data.length;o++){let i=t.toSJIS(this.data[o]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[o]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),n.put(i,13)}},xt=r,xt}var Tt={exports:{}},rr;function As(){return rr||(rr=1,(function(e){var t={single_source_shortest_paths:function(r,n,o){var i={},s={};s[n]=0;var a=t.PriorityQueue.make();a.push(n,0);for(var c,l,d,h,f,u,E,m,I;!a.empty();){c=a.pop(),l=c.value,h=c.cost,f=r[l]||{};for(d in f)f.hasOwnProperty(d)&&(u=f[d],E=h+u,m=s[d],I=typeof s[d]>"u",(I||m>E)&&(s[d]=E,a.push(d,E),i[d]=l))}if(typeof o<"u"&&typeof s[o]>"u"){var y=["Could not find a path from ",n," to ",o,"."].join("");throw new Error(y)}return i},extract_shortest_path_from_predecessor_list:function(r,n){for(var o=[],i=n;i;)o.push(i),r[i],i=r[i];return o.reverse(),o},find_path:function(r,n,o){var i=t.single_source_shortest_paths(r,n,o);return t.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(r){var n=t.PriorityQueue,o={},i;r=r||{};for(i in n)n.hasOwnProperty(i)&&(o[i]=n[i]);return o.queue=[],o.sorter=r.sorter||n.default_sorter,o},default_sorter:function(r,n){return r.cost-n.cost},push:function(r,n){var o={value:r,cost:n};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Tt)),Tt.exports}var or;function xs(){return or||(or=1,(function(e){const t=ye(),r=Cs(),n=vs(),o=_s(),i=Ss(),s=to(),a=be(),c=As();function l(y){return unescape(encodeURIComponent(y)).length}function d(y,B,A){const R=[];let x;for(;(x=y.exec(A))!==null;)R.push({data:x[0],index:x.index,mode:B,length:x[0].length});return R}function h(y){const B=d(s.NUMERIC,t.NUMERIC,y),A=d(s.ALPHANUMERIC,t.ALPHANUMERIC,y);let R,x;return a.isKanjiModeEnabled()?(R=d(s.BYTE,t.BYTE,y),x=d(s.KANJI,t.KANJI,y)):(R=d(s.BYTE_KANJI,t.BYTE,y),x=[]),B.concat(A,R,x).sort(function(g,C){return g.index-C.index}).map(function(g){return{data:g.data,mode:g.mode,length:g.length}})}function f(y,B){switch(B){case t.NUMERIC:return r.getBitsLength(y);case t.ALPHANUMERIC:return n.getBitsLength(y);case t.KANJI:return i.getBitsLength(y);case t.BYTE:return o.getBitsLength(y)}}function u(y){return y.reduce(function(B,A){const R=B.length-1>=0?B[B.length-1]:null;return R&&R.mode===A.mode?(B[B.length-1].data+=A.data,B):(B.push(A),B)},[])}function E(y){const B=[];for(let A=0;A<y.length;A++){const R=y[A];switch(R.mode){case t.NUMERIC:B.push([R,{data:R.data,mode:t.ALPHANUMERIC,length:R.length},{data:R.data,mode:t.BYTE,length:R.length}]);break;case t.ALPHANUMERIC:B.push([R,{data:R.data,mode:t.BYTE,length:R.length}]);break;case t.KANJI:B.push([R,{data:R.data,mode:t.BYTE,length:l(R.data)}]);break;case t.BYTE:B.push([{data:R.data,mode:t.BYTE,length:l(R.data)}])}}return B}function m(y,B){const A={},R={start:{}};let x=["start"];for(let p=0;p<y.length;p++){const g=y[p],C=[];for(let w=0;w<g.length;w++){const T=g[w],_=""+p+w;C.push(_),A[_]={node:T,lastCount:0},R[_]={};for(let L=0;L<x.length;L++){const v=x[L];A[v]&&A[v].node.mode===T.mode?(R[v][_]=f(A[v].lastCount+T.length,T.mode)-f(A[v].lastCount,T.mode),A[v].lastCount+=T.length):(A[v]&&(A[v].lastCount=T.length),R[v][_]=f(T.length,T.mode)+4+t.getCharCountIndicator(T.mode,B))}}x=C}for(let p=0;p<x.length;p++)R[x[p]].end=0;return{map:R,table:A}}function I(y,B){let A;const R=t.getBestModeForData(y);if(A=t.from(B,R),A!==t.BYTE&&A.bit<R.bit)throw new Error('"'+y+'" cannot be encoded with mode '+t.toString(A)+`.
 Suggested mode is: `+t.toString(R));switch(A===t.KANJI&&!a.isKanjiModeEnabled()&&(A=t.BYTE),A){case t.NUMERIC:return new r(y);case t.ALPHANUMERIC:return new n(y);case t.KANJI:return new i(y);case t.BYTE:return new o(y)}}e.fromArray=function(B){return B.reduce(function(A,R){return typeof R=="string"?A.push(I(R,null)):R.data&&A.push(I(R.data,R.mode)),A},[])},e.fromString=function(B,A){const R=h(B,a.isKanjiModeEnabled()),x=E(R),p=m(x,A),g=c.find_path(p.map,"start","end"),C=[];for(let w=1;w<g.length-1;w++)C.push(p.table[g[w]].node);return e.fromArray(u(C))},e.rawSplit=function(B){return e.fromArray(h(B,a.isKanjiModeEnabled()))}})(vt)),vt}var ir;function Ts(){if(ir)return dt;ir=1;const e=be(),t=ln(),r=hs(),n=fs(),o=ps(),i=gs(),s=ms(),a=Xr(),c=ys(),l=Es(),d=Rs(),h=ye(),f=xs();function u(p,g){const C=p.size,w=i.getPositions(g);for(let T=0;T<w.length;T++){const _=w[T][0],L=w[T][1];for(let v=-1;v<=7;v++)if(!(_+v<=-1||C<=_+v))for(let N=-1;N<=7;N++)L+N<=-1||C<=L+N||(v>=0&&v<=6&&(N===0||N===6)||N>=0&&N<=6&&(v===0||v===6)||v>=2&&v<=4&&N>=2&&N<=4?p.set(_+v,L+N,!0,!0):p.set(_+v,L+N,!1,!0))}}function E(p){const g=p.size;for(let C=8;C<g-8;C++){const w=C%2===0;p.set(C,6,w,!0),p.set(6,C,w,!0)}}function m(p,g){const C=o.getPositions(g);for(let w=0;w<C.length;w++){const T=C[w][0],_=C[w][1];for(let L=-2;L<=2;L++)for(let v=-2;v<=2;v++)L===-2||L===2||v===-2||v===2||L===0&&v===0?p.set(T+L,_+v,!0,!0):p.set(T+L,_+v,!1,!0)}}function I(p,g){const C=p.size,w=l.getEncodedBits(g);let T,_,L;for(let v=0;v<18;v++)T=Math.floor(v/3),_=v%3+C-8-3,L=(w>>v&1)===1,p.set(T,_,L,!0),p.set(_,T,L,!0)}function y(p,g,C){const w=p.size,T=d.getEncodedBits(g,C);let _,L;for(_=0;_<15;_++)L=(T>>_&1)===1,_<6?p.set(_,8,L,!0):_<8?p.set(_+1,8,L,!0):p.set(w-15+_,8,L,!0),_<8?p.set(8,w-_-1,L,!0):_<9?p.set(8,15-_-1+1,L,!0):p.set(8,15-_-1,L,!0);p.set(w-8,8,1,!0)}function B(p,g){const C=p.size;let w=-1,T=C-1,_=7,L=0;for(let v=C-1;v>0;v-=2)for(v===6&&v--;;){for(let N=0;N<2;N++)if(!p.isReserved(T,v-N)){let $=!1;L<g.length&&($=(g[L]>>>_&1)===1),p.set(T,v-N,$),_--,_===-1&&(L++,_=7)}if(T+=w,T<0||C<=T){T-=w,w=-w;break}}}function A(p,g,C){const w=new r;C.forEach(function(N){w.put(N.mode.bit,4),w.put(N.getLength(),h.getCharCountIndicator(N.mode,p)),N.write(w)});const T=e.getSymbolTotalCodewords(p),_=a.getTotalCodewordsCount(p,g),L=(T-_)*8;for(w.getLengthInBits()+4<=L&&w.put(0,4);w.getLengthInBits()%8!==0;)w.putBit(0);const v=(L-w.getLengthInBits())/8;for(let N=0;N<v;N++)w.put(N%2?17:236,8);return R(w,p,g)}function R(p,g,C){const w=e.getSymbolTotalCodewords(g),T=a.getTotalCodewordsCount(g,C),_=w-T,L=a.getBlocksCount(g,C),v=w%L,N=L-v,$=Math.floor(w/L),j=Math.floor(_/L),M=j+1,Z=$-j,Y=new c(Z);let q=0;const b=new Array(L),S=new Array(L);let O=0;const k=new Uint8Array(p.buffer);for(let W=0;W<L;W++){const K=W<N?j:M;b[W]=k.slice(q,q+K),S[W]=Y.encode(b[W]),q+=K,O=Math.max(O,K)}const F=new Uint8Array(w);let D=0,U,P;for(U=0;U<O;U++)for(P=0;P<L;P++)U<b[P].length&&(F[D++]=b[P][U]);for(U=0;U<Z;U++)for(P=0;P<L;P++)F[D++]=S[P][U];return F}function x(p,g,C,w){let T;if(Array.isArray(p))T=f.fromArray(p);else if(typeof p=="string"){let $=g;if(!$){const j=f.rawSplit(p);$=l.getBestVersionForData(j,C)}T=f.fromString(p,$||40)}else throw new Error("Invalid data");const _=l.getBestVersionForData(T,C);if(!_)throw new Error("The amount of data is too big to be stored in a QR Code");if(!g)g=_;else if(g<_)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+_+`.
`);const L=A(g,C,T),v=e.getSymbolSize(g),N=new n(v);return u(N,g),E(N),m(N,g),y(N,C,0),g>=7&&I(N,g),B(N,L),isNaN(w)&&(w=s.getBestMask(N,y.bind(null,N,C))),s.applyMask(w,N),y(N,C,w),{modules:N,version:g,errorCorrectionLevel:C,maskPattern:w,segments:T}}return dt.create=function(g,C){if(typeof g>"u"||g==="")throw new Error("No input text");let w=t.M,T,_;return typeof C<"u"&&(w=t.from(C.errorCorrectionLevel,t.M),T=l.from(C.version),_=s.from(C.maskPattern),C.toSJISFunc&&e.setToSJISFunction(C.toSJISFunc)),x(g,T,w,_)},dt}var Lt={},Bt={},sr;function no(){return sr||(sr=1,(function(e){function t(r){if(typeof r=="number"&&(r=r.toString()),typeof r!="string")throw new Error("Color should be defined as hex string");let n=r.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+r);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(i){return[i,i]}))),n.length===6&&n.push("F","F");const o=parseInt(n.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+n.slice(0,6).join("")}}e.getOptions=function(n){n||(n={}),n.color||(n.color={});const o=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,i=n.width&&n.width>=21?n.width:void 0,s=n.scale||4;return{width:i,scale:i?4:s,margin:o,color:{dark:t(n.color.dark||"#000000ff"),light:t(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},e.getScale=function(n,o){return o.width&&o.width>=n+o.margin*2?o.width/(n+o.margin*2):o.scale},e.getImageWidth=function(n,o){const i=e.getScale(n,o);return Math.floor((n+o.margin*2)*i)},e.qrToImageData=function(n,o,i){const s=o.modules.size,a=o.modules.data,c=e.getScale(s,i),l=Math.floor((s+i.margin*2)*c),d=i.margin*c,h=[i.color.light,i.color.dark];for(let f=0;f<l;f++)for(let u=0;u<l;u++){let E=(f*l+u)*4,m=i.color.light;if(f>=d&&u>=d&&f<l-d&&u<l-d){const I=Math.floor((f-d)/c),y=Math.floor((u-d)/c);m=h[a[I*s+y]?1:0]}n[E++]=m.r,n[E++]=m.g,n[E++]=m.b,n[E]=m.a}}})(Bt)),Bt}var ar;function Ls(){return ar||(ar=1,(function(e){const t=no();function r(o,i,s){o.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(i,s,a){let c=a,l=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(l=n()),c=t.getOptions(c);const d=t.getImageWidth(i.modules.size,c),h=l.getContext("2d"),f=h.createImageData(d,d);return t.qrToImageData(f.data,i,c),r(h,l,d),h.putImageData(f,0,0),l},e.renderToDataURL=function(i,s,a){let c=a;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const l=e.render(i,s,c),d=c.type||"image/png",h=c.rendererOpts||{};return l.toDataURL(d,h.quality)}})(Lt)),Lt}var It={},cr;function Bs(){if(cr)return It;cr=1;const e=no();function t(o,i){const s=o.a/255,a=i+'="'+o.hex+'"';return s<1?a+" "+i+'-opacity="'+s.toFixed(2).slice(1)+'"':a}function r(o,i,s){let a=o+i;return typeof s<"u"&&(a+=" "+s),a}function n(o,i,s){let a="",c=0,l=!1,d=0;for(let h=0;h<o.length;h++){const f=Math.floor(h%i),u=Math.floor(h/i);!f&&!l&&(l=!0),o[h]?(d++,h>0&&f>0&&o[h-1]||(a+=l?r("M",f+s,.5+u+s):r("m",c,0),c=0,l=!1),f+1<i&&o[h+1]||(a+=r("h",d),d=0)):c++}return a}return It.render=function(i,s,a){const c=e.getOptions(s),l=i.modules.size,d=i.modules.data,h=l+c.margin*2,f=c.color.light.a?"<path "+t(c.color.light,"fill")+' d="M0 0h'+h+"v"+h+'H0z"/>':"",u="<path "+t(c.color.dark,"stroke")+' d="'+n(d,l,c.margin)+'"/>',E='viewBox="0 0 '+h+" "+h+'"',I='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+E+' shape-rendering="crispEdges">'+f+u+`</svg>
`;return typeof a=="function"&&a(null,I),I},It}var lr;function Is(){if(lr)return Ce;lr=1;const e=us(),t=Ts(),r=Ls(),n=Bs();function o(i,s,a,c,l){const d=[].slice.call(arguments,1),h=d.length,f=typeof d[h-1]=="function";if(!f&&!e())throw new Error("Callback required as last argument");if(f){if(h<2)throw new Error("Too few arguments provided");h===2?(l=a,a=s,s=c=void 0):h===3&&(s.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=a,a=s,s=void 0))}else{if(h<1)throw new Error("Too few arguments provided");return h===1?(a=s,s=c=void 0):h===2&&!s.getContext&&(c=a,a=s,s=void 0),new Promise(function(u,E){try{const m=t.create(a,c);u(i(m,s,c))}catch(m){E(m)}})}try{const u=t.create(a,c);l(null,i(u,s,c))}catch(u){l(u)}}return Ce.create=t.create,Ce.toCanvas=o.bind(null,r.render),Ce.toDataURL=o.bind(null,r.renderToDataURL),Ce.toString=o.bind(null,function(i,s,a){return n.render(i,a)}),Ce}var Os=Is();const Ns=ds(Os),Ot="SolanaMobileWalletAdapterDefaultAuthorizationCache";function pa(){let e;try{e=window.localStorage}catch{}return{async clear(){if(e)try{e.removeItem(Ot)}catch{}},async get(){if(e)try{const t=JSON.parse(e.getItem(Ot));if(t&&t.accounts){const r=t.accounts.map(n=>({...n,publicKey:"publicKey"in n?new Uint8Array(Object.values(n.publicKey)):So(n.address)}));return{...t,accounts:r}}else return t||void 0}catch{}},async set(t){if(e)try{e.setItem(Ot,JSON.stringify(t))}catch{}}}}function ga(){return{async select(e){return e.length===1?e[0]:e.includes(un)?un:e[0]}}}const Ms=`
<div class="mobile-wallet-adapter-embedded-modal-container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div data-modal-close style="position: absolute; width: 100%; height: 100%;"></div>
	<div class="mobile-wallet-adapter-embedded-modal-card">
		<div>
			<button data-modal-close class="mobile-wallet-adapter-embedded-modal-close">
				<svg width="14" height="14">
					<path d="M 6.7125,8.3036995 1.9082,13.108199 c -0.2113,0.2112 -0.4765,0.3168 -0.7957,0.3168 -0.3192,0 -0.5844,-0.1056 -0.7958,-0.3168 C 0.1056,12.896899 0,12.631699 0,12.312499 c 0,-0.3192 0.1056,-0.5844 0.3167,-0.7958 L 5.1212,6.7124995 0.3167,1.9082 C 0.1056,1.6969 0,1.4317 0,1.1125 0,0.7933 0.1056,0.5281 0.3167,0.3167 0.5281,0.1056 0.7933,0 1.1125,0 1.4317,0 1.6969,0.1056 1.9082,0.3167 L 6.7125,5.1212 11.5167,0.3167 C 11.7281,0.1056 11.9933,0 12.3125,0 c 0.3192,0 0.5844,0.1056 0.7957,0.3167 0.2112,0.2114 0.3168,0.4766 0.3168,0.7958 0,0.3192 -0.1056,0.5844 -0.3168,0.7957 L 8.3037001,6.7124995 13.1082,11.516699 c 0.2112,0.2114 0.3168,0.4766 0.3168,0.7958 0,0.3192 -0.1056,0.5844 -0.3168,0.7957 -0.2113,0.2112 -0.4765,0.3168 -0.7957,0.3168 -0.3192,0 -0.5844,-0.1056 -0.7958,-0.3168 z" />
				</svg>
			</button>
		</div>
		<div class="mobile-wallet-adapter-embedded-modal-content"></div>
	</div>
</div>
`,Ps=`
.mobile-wallet-adapter-embedded-modal-container {
    display: flex; /* Use flexbox to center content */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    position: fixed; /* Stay in place */
    z-index: 2147483647; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    overflow-y: auto; /* enable scrolling */
}

.mobile-wallet-adapter-embedded-modal-card {
    display: flex;
    flex-direction: column;
    margin: auto 20px;
    max-width: 780px;
    padding: 20px;
    border-radius: 24px;
    background: #ffffff;
    font-family: "Inter Tight", "PT Sans", Calibri, sans-serif;
    transform: translateY(-200%);
    animation: slide-in 0.5s forwards;
}

@keyframes slide-in {
    100% { transform: translateY(0%); }
}

.mobile-wallet-adapter-embedded-modal-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    background: #e4e9e9;
    border: none;
    border-radius: 50%;
}

.mobile-wallet-adapter-embedded-modal-close:focus-visible {
    outline-color: red;
}

.mobile-wallet-adapter-embedded-modal-close svg {
    fill: #546266;
    transition: fill 200ms ease 0s;
}

.mobile-wallet-adapter-embedded-modal-close:hover svg {
    fill: #fff;
}
`,Ds=`
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
`;var Ke=class{#e=null;#n={};#o=!1;dom=null;constructor(){this.init=this.init.bind(this),this.#e=document.getElementById("mobile-wallet-adapter-embedded-root-ui")}async init(){console.log("Injecting modal"),this.#u()}open=()=>{console.debug("Modal open"),this.#h(),this.#e&&(this.#e.style.display="flex")};close=(e=void 0)=>{console.debug("Modal close"),this.#s(),this.#e&&(this.#e.style.display="none"),this.#n.close?.forEach(t=>t(e))};addEventListener(e,t){return this.#n[e]?.push(t)||(this.#n[e]=[t]),()=>this.removeEventListener(e,t)}removeEventListener(e,t){this.#n[e]=this.#n[e]?.filter(r=>t!==r)}#u(){if(document.getElementById("mobile-wallet-adapter-embedded-root-ui")){this.#e||(this.#e=document.getElementById("mobile-wallet-adapter-embedded-root-ui"));return}this.#e=document.createElement("div"),this.#e.id="mobile-wallet-adapter-embedded-root-ui",this.#e.innerHTML=Ms,this.#e.style.display="none";const e=this.#e.querySelector(".mobile-wallet-adapter-embedded-modal-content");e&&(e.innerHTML=this.contentHtml);const t=document.createElement("style");t.id="mobile-wallet-adapter-embedded-modal-styles",t.textContent=Ps+this.contentStyles;const r=document.createElement("div");r.innerHTML=Ds,this.dom=r.attachShadow({mode:"closed"}),this.dom.appendChild(t),this.dom.appendChild(this.#e),document.body.appendChild(r)}#h(){!this.#e||this.#o||([...this.#e.querySelectorAll("[data-modal-close]")].forEach(e=>e?.addEventListener("click",this.close)),window.addEventListener("load",this.close),document.addEventListener("keydown",this.#t),this.#o=!0)}#s(){this.#o&&(window.removeEventListener("load",this.close),document.removeEventListener("keydown",this.#t),this.#e&&([...this.#e.querySelectorAll("[data-modal-close]")].forEach(e=>e?.removeEventListener("click",this.close)),this.#o=!1))}#t=e=>{e.key==="Escape"&&this.close(e)}};const ks="To use mobile wallet adapter, you must have a compatible mobile wallet application installed on your device.",Fs="This browser appears to be incompatible with mobile wallet adapter. Open this page in a compatible mobile browser app and try again.";var Us=class extends Ke{contentStyles=zs;contentHtml=qs;initWithError(e){super.init(),this.populateError(e)}populateError(e){const t=this.dom?.getElementById("mobile-wallet-adapter-error-message"),r=this.dom?.getElementById("mobile-wallet-adapter-error-action");if(t){if(e.name==="SolanaMobileWalletAdapterError")switch(e.code){case"ERROR_WALLET_NOT_FOUND":t.innerHTML=ks,r&&r.addEventListener("click",()=>{window.location.href="https://solanamobile.com/wallets"});return;case"ERROR_BROWSER_NOT_SUPPORTED":t.innerHTML=Fs,r&&(r.style.display="none");return}t.innerHTML=`An unexpected error occurred: ${e.message}`}else console.log("Failed to locate error dialog element")}};const qs=`
<svg class="mobile-wallet-adapter-embedded-modal-error-icon" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M 280,-80 Q 197,-80 138.5,-138.5 80,-197 80,-280 80,-363 138.5,-421.5 197,-480 280,-480 q 83,0 141.5,58.5 58.5,58.5 58.5,141.5 0,83 -58.5,141.5 Q 363,-80 280,-80 Z M 824,-120 568,-376 Q 556,-389 542.5,-402.5 529,-416 516,-428 q 38,-24 61,-64 23,-40 23,-88 0,-75 -52.5,-127.5 Q 495,-760 420,-760 345,-760 292.5,-707.5 240,-655 240,-580 q 0,6 0.5,11.5 0.5,5.5 1.5,11.5 -18,2 -39.5,8 -21.5,6 -38.5,14 -2,-11 -3,-22 -1,-11 -1,-23 0,-109 75.5,-184.5 Q 311,-840 420,-840 q 109,0 184.5,75.5 75.5,75.5 75.5,184.5 0,43 -13.5,81.5 Q 653,-460 629,-428 l 251,252 z m -615,-61 71,-71 70,71 29,-28 -71,-71 71,-71 -28,-28 -71,71 -71,-71 -28,28 71,71 -71,71 z"/></svg>
<div class="mobile-wallet-adapter-embedded-modal-title">We can't find a wallet.</div>
<div id="mobile-wallet-adapter-error-message" class="mobile-wallet-adapter-embedded-modal-subtitle"></div>
<div>
    <button data-error-action id="mobile-wallet-adapter-error-action" class="mobile-wallet-adapter-embedded-modal-error-action">
        Find a wallet
    </button>
</div>
`,zs=`
.mobile-wallet-adapter-embedded-modal-content {
    text-align: center;
}

.mobile-wallet-adapter-embedded-modal-error-icon {
    margin-top: 24px;
}

.mobile-wallet-adapter-embedded-modal-title {
    margin: 18px 100px auto 100px;
    color: #000000;
    font-size: 2.75em;
    font-weight: 600;
}

.mobile-wallet-adapter-embedded-modal-subtitle {
    margin: 30px 60px 40px 60px;
    color: #000000;
    font-size: 1.25em;
    font-weight: 400;
}

.mobile-wallet-adapter-embedded-modal-error-action {
    display: block;
    width: 100%;
    height: 56px;
    /*margin-top: 40px;*/
    font-size: 1.25em;
    /*line-height: 24px;*/
    /*letter-spacing: -1%;*/
    background: #000000;
    color: #FFFFFF;
    border-radius: 18px;
}

/* Smaller screens */
@media all and (max-width: 600px) {
    .mobile-wallet-adapter-embedded-modal-title {
        font-size: 1.5em;
        margin-right: 12px;
        margin-left: 12px;
    }
    .mobile-wallet-adapter-embedded-modal-subtitle {
        margin-right: 12px;
        margin-left: 12px;
    }
}
`;async function Ks(){if(typeof window<"u"){const e=window.navigator.userAgent.toLowerCase(),t=new Us;e.includes("wv")?t.initWithError({name:"SolanaMobileWalletAdapterError",code:"ERROR_BROWSER_NOT_SUPPORTED",message:""}):t.initWithError({name:"SolanaMobileWalletAdapterError",code:"ERROR_WALLET_NOT_FOUND",message:""}),t.open()}}function ma(){return async()=>{Ks()}}var Hs=class extends Ke{contentStyles=Vs;contentHtml=Ws;initWithCallback(e){super.init(),this.#e(e)}#e(e){const t=this.dom?.getElementById("mobile-wallet-adapter-launch-action"),r=async()=>{t?.removeEventListener("click",r),this.close(),e()};t?.addEventListener("click",r)}};const Ws=`
<svg class="mobile-wallet-adapter-embedded-modal-launch-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.6 48C7.2 48 0 40.8 0 26.4V21.6C0 7.2 7.2 0 21.6 0H26.4C40.8 0 48 7.2 48 21.6V26.4C48 40.8 40.8 48 26.4 48H21.6Z" fill="#15994E"/>
    <mask id="mask0_189_522" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="8" y="8" width="32" height="32">
        <rect x="8" y="8" width="32" height="32" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_189_522)">
        <mask id="mask1_189_522" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="8" y="8" width="32" height="32">
            <rect x="8" y="8" width="32" height="32" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask1_189_522)">
            <path d="M22.1092 26.1208L19.4498 23.4615C19.1736 23.1851 18.8253 23.0468 18.4048 23.0468C17.9846 23.0468 17.6363 23.1851 17.3598 23.4615C17.0836 23.7377 16.9468 24.0861 16.9495 24.5065C16.9522 24.9267 17.0916 25.275 17.3678 25.5512L21.0405 29.2238C21.3463 29.5276 21.7031 29.6795 22.1108 29.6795C22.5184 29.6795 22.8742 29.5276 23.1782 29.2238L30.5918 21.8098C30.8683 21.5336 31.0065 21.1867 31.0065 20.7692C31.0065 20.3514 30.8683 20.0044 30.5918 19.7282C30.3156 19.4517 29.9673 19.3135 29.5468 19.3135C29.1266 19.3135 28.7784 19.4517 28.5022 19.7282L22.1092 26.1208ZM23.9998 37.6042C22.113 37.6042 20.3425 37.2473 18.6885 36.5335C17.0343 35.8197 15.5954 34.8512 14.3718 33.6278C13.1485 32.4043 12.18 30.9654 11.4662 29.3112C10.7524 27.6572 10.3955 25.8867 10.3955 23.9998C10.3955 22.113 10.7524 20.3425 11.4662 18.6885C12.18 17.0343 13.1485 15.5954 14.3718 14.3718C15.5954 13.1485 17.0343 12.18 18.6885 11.4662C20.3425 10.7524 22.113 10.3955 23.9998 10.3955C25.8867 10.3955 27.6572 10.7524 29.3112 11.4662C30.9654 12.18 32.4043 13.1485 33.6278 14.3718C34.8512 15.5954 35.8197 17.0343 36.5335 18.6885C37.2473 20.3425 37.6042 22.113 37.6042 23.9998C37.6042 25.8867 37.2473 27.6572 36.5335 29.3112C35.8197 30.9654 34.8512 32.4043 33.6278 33.6278C32.4043 34.8512 30.9654 35.8197 29.3112 36.5335C27.6572 37.2473 25.8867 37.6042 23.9998 37.6042Z" fill="white"/>
        </g>
    </g>
</svg>
<div class="mobile-wallet-adapter-embedded-modal-title">Ready to connect!</div>
<div>
    <button data-modal-action id="mobile-wallet-adapter-launch-action" class="mobile-wallet-adapter-embedded-modal-launch-action">
        Connect Wallet
    </button>
</div>
`,Vs=`
.mobile-wallet-adapter-embedded-modal-close {
    display: none;
}
.mobile-wallet-adapter-embedded-modal-content {
    text-align: center;
    min-width: 300px;
}
.mobile-wallet-adapter-embedded-modal-launch-icon {
    margin-top: 24px;
}
.mobile-wallet-adapter-embedded-modal-title {
    margin: 18px 100px 30px 100px;
    color: #000000;
    font-size: 2.75em;
    font-weight: 600;
}
.mobile-wallet-adapter-embedded-modal-launch-action {
    display: block;
    width: 100%;
    height: 56px;
    font-size: 1.25em;
    background: #000000;
    color: #FFFFFF;
    border-radius: 18px;
}
/* Smaller screens */
@media all and (max-width: 600px) {
    .mobile-wallet-adapter-embedded-modal-title {
        font-size: 1.5em;
        margin-right: 12px;
        margin-left: 12px;
    }
}
`;var js=class extends Ke{contentStyles=Zs;get contentHtml(){const e=ta()?"Long press the app icon on your home screen to open site settings":"Tap the lock or settings icon in the address bar to open site settings";return $s.replace("{{PERMISSION_INSTRUCTION_DETAIL}}",e)}async init(){super.init(),this.#e()}#e(){const e=this.dom?.getElementById("mobile-wallet-adapter-launch-action"),t=async r=>{e?.removeEventListener("click",t),this.close(r)};e?.addEventListener("click",t)}};const $s=`
<div class="mobile-wallet-adapter-embedded-modal-header">
    Local Wallet Connection
</div>
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.6 48C7.2 48 0 40.8 0 26.4V21.6C0 7.2 7.2 0 21.6 0H26.4C40.8 0 48 7.2 48 21.6V26.4C48 40.8 40.8 48 26.4 48H21.6Z" fill="#ED1515"/>
    <mask id="mask0_147_1364" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="8" y="8" width="32" height="32">
        <rect x="8" y="8" width="32" height="32" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_147_1364)">
        <path d="M20.1398 36.2705C19.7363 36.2705 19.3508 36.1945 18.9835 36.0425C18.6162 35.8907 18.2916 35.674 18.0098 35.3922L12.6072 29.9895C12.3254 29.7077 12.1086 29.3832 11.9568 29.0158C11.8048 28.6485 11.7288 28.2631 11.7288 27.8595V20.1395C11.7288 19.736 11.8048 19.3505 11.9568 18.9832C12.1086 18.6158 12.3254 18.2913 12.6072 18.0095L18.0098 12.6068C18.2916 12.3251 18.6162 12.1083 18.9835 11.9565C19.3508 11.8045 19.7363 11.7285 20.1398 11.7285H27.8598C28.2634 11.7285 28.6488 11.8045 29.0162 11.9565C29.3835 12.1083 29.708 12.3251 29.9898 12.6068L35.3925 18.0095C35.6743 18.2913 35.891 18.6158 36.0428 18.9832C36.1948 19.3505 36.2708 19.736 36.2708 20.1395V27.8595C36.2708 28.2631 36.1948 28.6485 36.0428 29.0158C35.891 29.3832 35.6743 29.7077 35.3925 29.9895L29.9898 35.3922C29.708 35.674 29.3835 35.8907 29.0162 36.0425C28.6488 36.1945 28.2634 36.2705 27.8598 36.2705H20.1398ZM20.1732 33.2372H27.8265L33.2375 27.8262V20.1728L27.8265 14.7618H20.1732L14.7622 20.1728V27.8262L20.1732 33.2372ZM23.9998 25.9538L26.7868 28.7408C27.0473 29.0013 27.3729 29.1302 27.7638 29.1275C28.1549 29.1248 28.4807 28.9933 28.7412 28.7328C29.0016 28.4724 29.1318 28.1466 29.1318 27.7555C29.1318 27.3646 29.0016 27.039 28.7412 26.7785L25.9542 23.9995L28.7412 21.2125C29.0016 20.9521 29.1318 20.6264 29.1318 20.2355C29.1318 19.8444 29.0016 19.5186 28.7412 19.2582C28.4807 18.9977 28.1549 18.8675 27.7638 18.8675C27.3729 18.8675 27.0473 18.9977 26.7868 19.2582L23.9998 22.0452L21.2128 19.2582C20.9524 18.9977 20.628 18.8675 20.2398 18.8675C19.8514 18.8675 19.5269 18.9977 19.2665 19.2582C19.006 19.5186 18.8758 19.8444 18.8758 20.2355C18.8758 20.6264 19.006 20.9521 19.2665 21.2125L22.0455 23.9995L19.2585 26.7865C18.998 27.047 18.8692 27.3713 18.8718 27.7595C18.8745 28.148 19.006 28.4724 19.2665 28.7328C19.5269 28.9933 19.8527 29.1235 20.2438 29.1235C20.6347 29.1235 20.9604 28.9933 21.2208 28.7328L23.9998 25.9538Z" fill="black"/>
    </g>
</svg>
<div class="mobile-wallet-adapter-embedded-modal-title">
    Your wallet connection is blocked
</div>
<div id="mobile-wallet-adapter-local-launch-message" class="mobile-wallet-adapter-embedded-modal-subtitle">
    Visit site settings in the address bar and allow "Apps on Device".
</div>

<div class="mobile-wallet-adapter-embedded-modal-divider"><hr></div>
<div class="mobile-wallet-adapter-embedded-modal-footer">
    <div class="mobile-wallet-adapter-embedded-modal-details">
        <!-- Clickable header (label associated with the checkbox) -->
      	<label for="collapsible-1" class="mobile-wallet-adapter-embedded-modal-details-collapsible-header">
            <!-- Hidden checkbox to track state -->
            <input type="checkbox" id="collapsible-1" class="mobile-wallet-adapter-embedded-modal-details-collapsible-input">
            <span class="mobile-wallet-adapter-embedded-modal-details-collapsible-header-label">
              See details
            </span>
            <svg class="mobile-wallet-adapter-embedded-modal-details-collapsible-header-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_147_1382" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_147_1382)">
                <path d="M11.9999 17.0811C11.8506 17.0811 11.7087 17.0563 11.5741 17.0067C11.4395 16.957 11.3162 16.8762 11.2042 16.7643L6.57924 12.1393C6.36801 11.9281 6.26656 11.667 6.27489 11.3561C6.28322 11.0453 6.39301 10.7842 6.60424 10.573C6.81547 10.3618 7.08069 10.2561 7.39989 10.2561C7.71909 10.2561 7.9843 10.3618 8.19554 10.573L11.9999 14.3773L15.8292 10.548C16.0405 10.3368 16.3015 10.2353 16.6124 10.2436C16.9233 10.252 17.1843 10.3618 17.3955 10.573C17.6068 10.7842 17.7124 11.0494 17.7124 11.3686C17.7124 11.6878 17.6068 11.9531 17.3955 12.1643L12.7955 16.7643C12.6836 16.8762 12.5603 16.957 12.4257 17.0067C12.2911 17.0563 12.1492 17.0811 11.9999 17.0811Z" fill="black"/>
              </g>
            </svg>
      	</label>
        
        <!-- Content to show/hide -->
        <ul class="mobile-wallet-adapter-embedded-modal-details-collapsible-content">
            <li>{{PERMISSION_INSTRUCTION_DETAIL}}</li>
            <li>Allow "Apps on Device"</li>
        </ul>
    </div>
</div>
<div>
    <button data-modal-action id="mobile-wallet-adapter-launch-action" class="mobile-wallet-adapter-embedded-modal-launch-action">
        Got it
    </button>
</div>
`,Zs=`
.mobile-wallet-adapter-embedded-modal-close {
    display: none;
}
.mobile-wallet-adapter-embedded-modal-content {
    text-align: center;
}
.mobile-wallet-adapter-embedded-modal-header {
    margin: 18px auto 30px auto;
    color: #7D9093;
    font-size: 1.0em;
    font-weight: 500;
}
.mobile-wallet-adapter-embedded-modal-title {
    margin: 18px 100px auto 100px;
    color: #000000;
    font-size: 2.75em;
    font-weight: 600;
}
.mobile-wallet-adapter-embedded-modal-subtitle {
    margin: 12px 60px 30px 60px;
    color: #7D9093;
    font-size: 1.25em;
    font-weight: 400;
}
.mobile-wallet-adapter-embedded-modal-details-collapsible-header {
    display: flex;
    flex-direction: row;
  	justify-content: space-between;
    margin: 10px auto 10px auto;
    color: #000000;
    font-size: 1.5em;
    font-weight: 600;
    cursor: pointer; /* Show pointer on hover */
    transition: background 0.2s ease; /* Smooth background change */
}
.mobile-wallet-adapter-embedded-modal-details-collapsible-header-icon {
  	transition: rotate 0.3s ease;
}
.mobile-wallet-adapter-embedded-modal-details-collapsible-input {
  	display: none; /* Hide the checkbox */
}
.mobile-wallet-adapter-embedded-modal-details-collapsible-content {
    margin: 0px auto 40px auto;
    max-height: 0px; /* Collapse content */
    overflow: hidden; /* Hide overflow when collapsed */
    transition: max-height 0.3s ease; /* Smooth transition */
}
.mobile-wallet-adapter-embedded-modal-details-collapsible-content li {
    margin: 20px auto;
    color: #000000;
    font-size: 1.25em;
    font-weight: 400;
    text-align: left;
}
/* When checkbox is checked, show content */
.mobile-wallet-adapter-embedded-modal-details-collapsible-header:has(> input:checked) ~ .mobile-wallet-adapter-embedded-modal-details-collapsible-content {
  	max-height: 300px;
}
.mobile-wallet-adapter-embedded-modal-details-collapsible-header:has(> input:checked) > .mobile-wallet-adapter-embedded-modal-details-collapsible-header-icon {
  	rotate: 180deg;
}
.mobile-wallet-adapter-embedded-modal-launch-action {
    display: block;
    width: 100%;
    height: 56px;
    /*margin-top: 40px;*/
    font-size: 1.25em;
    /*line-height: 24px;*/
    /*letter-spacing: -1%;*/
    background: #000000;
    color: #FFFFFF;
    border-radius: 18px;
}
/* Smaller screens */
@media all and (max-width: 600px) {
    .mobile-wallet-adapter-embedded-modal-title {
        font-size: 1.75em;
        margin-right: 12px;
        margin-left: 12px;
    }
    .mobile-wallet-adapter-embedded-modal-subtitle {
        margin-right: 12px;
        margin-left: 12px;
    }
}
`;var Ys=class extends Ke{contentStyles=Qs;contentHtml=Gs;async init(){super.init(),this.#e()}#e(){const e=this.dom?.getElementById("mobile-wallet-adapter-launch-action"),t=async()=>{e?.removeEventListener("click",t);try{await fetch("http://localhost")}catch{}this.close()};e?.addEventListener("click",t)}};const Gs=`
<div class="mobile-wallet-adapter-embedded-modal-title">Allow connections to your wallet</div>
<div id="mobile-wallet-adapter-local-launch-message" class="mobile-wallet-adapter-embedded-modal-subtitle">
    Tap "Allow" on the next screen
</div>
<svg class="mobile-wallet-adapter-embedded-modal-permission-prompt-mock" xmlns="http://www.w3.org/2000/svg" width="281" height="83" viewBox="0 0 281 83" fill="none">
    <rect width="281" height="83" rx="22" fill="#F0F3F5"/>
    <path d="M254.194 64L252.626 56.657H254.047L254.866 61.452L254.985 62.278H255.02L255.146 61.452L255.993 57.497H257.4L258.254 61.431L258.373 62.278H258.415L258.534 61.431L259.346 56.657H260.718L259.143 64H257.673L256.826 59.961L256.693 59.093H256.651L256.511 59.961L255.664 64H254.194Z" fill="black"/>
    <path d="M248.837 64.231C248.147 64.231 247.54 64.07 247.017 63.748C246.495 63.426 246.086 62.978 245.792 62.404C245.498 61.83 245.351 61.1673 245.351 60.416V60.241C245.351 59.4897 245.498 58.827 245.792 58.253C246.086 57.679 246.495 57.2333 247.017 56.916C247.54 56.594 248.147 56.433 248.837 56.433C249.528 56.433 250.135 56.594 250.657 56.916C251.18 57.2333 251.588 57.679 251.882 58.253C252.176 58.827 252.323 59.4897 252.323 60.241V60.416C252.323 61.1673 252.176 61.83 251.882 62.404C251.588 62.978 251.18 63.426 250.657 63.748C250.135 64.07 249.528 64.231 248.837 64.231ZM248.837 62.824C249.43 62.824 249.897 62.607 250.237 62.173C250.583 61.7343 250.755 61.1417 250.755 60.395V60.262C250.755 59.5107 250.583 58.918 250.237 58.484C249.897 58.05 249.43 57.833 248.837 57.833C248.249 57.833 247.783 58.05 247.437 58.484C247.092 58.918 246.919 59.5107 246.919 60.262V60.395C246.919 61.1417 247.092 61.7343 247.437 62.173C247.783 62.607 248.249 62.824 248.837 62.824Z" fill="black"/>
    <path d="M242.298 64.231C241.467 64.231 240.814 63.993 240.338 63.517C239.866 63.0364 239.631 62.3737 239.631 61.529V53.78H241.178V61.389C241.178 62.3317 241.591 62.803 242.417 62.803C242.65 62.803 242.865 62.7587 243.061 62.67C243.257 62.5814 243.464 62.4367 243.684 62.236L244.538 63.377C244.225 63.6664 243.884 63.881 243.516 64.021C243.152 64.161 242.746 64.231 242.298 64.231ZM237.51 55.061V53.78H240.611V55.061H237.51Z" fill="black"/>
    <path d="M234.463 64.231C233.633 64.231 232.979 63.993 232.503 63.517C232.032 63.0364 231.796 62.3737 231.796 61.529V53.78H233.343V61.389C233.343 62.3317 233.756 62.803 234.582 62.803C234.816 62.803 235.03 62.7587 235.226 62.67C235.422 62.5814 235.63 62.4367 235.849 62.236L236.703 63.377C236.391 63.6664 236.05 63.881 235.681 64.021C235.317 64.161 234.911 64.231 234.463 64.231ZM229.675 55.061V53.78H232.776V55.061H229.675Z" fill="black"/>
    <path d="M221.442 64L224.557 53.976H226.132L229.233 64H227.581L225.642 56.972L225.341 55.761H225.299L225.005 56.972L223.073 64H221.442ZM222.835 61.634L223.255 60.29H227.371L227.805 61.634H222.835Z" fill="black"/>
    <path d="M178.261 64L175.034 60.066V60.024L178.121 56.657H180.011L176.504 60.423V59.632L180.165 64H178.261ZM173.543 64V53.78H175.097V64H173.543Z" fill="#7D9093" fill-opacity="0.5"/>
    <path d="M169.306 64.224C168.588 64.224 167.958 64.0653 167.416 63.748C166.88 63.426 166.462 62.9803 166.163 62.411C165.865 61.837 165.715 61.1673 165.715 60.402V60.248C165.715 59.4873 165.862 58.8223 166.156 58.253C166.45 57.679 166.863 57.2333 167.395 56.916C167.927 56.594 168.546 56.433 169.25 56.433C169.978 56.433 170.59 56.6056 171.084 56.951C171.579 57.2917 171.955 57.777 172.211 58.407L170.874 58.995C170.72 58.6123 170.508 58.323 170.237 58.127C169.967 57.9263 169.633 57.826 169.236 57.826C168.63 57.826 168.149 58.0383 167.794 58.463C167.444 58.883 167.269 59.4616 167.269 60.199V60.465C167.269 61.1837 167.454 61.7577 167.822 62.187C168.196 62.6163 168.69 62.831 169.306 62.831C169.712 62.831 170.06 62.733 170.349 62.537C170.639 62.341 170.877 62.0423 171.063 61.641L172.379 62.285C172.188 62.6957 171.941 63.0457 171.637 63.335C171.334 63.6243 170.986 63.846 170.594 64C170.202 64.1493 169.773 64.224 169.306 64.224Z" fill="#7D9093" fill-opacity="0.5"/>
    <path d="M161.003 64.231C160.312 64.231 159.706 64.07 159.183 63.748C158.66 63.426 158.252 62.978 157.958 62.404C157.664 61.83 157.517 61.1673 157.517 60.416V60.241C157.517 59.4897 157.664 58.827 157.958 58.253C158.252 57.679 158.66 57.2333 159.183 56.916C159.706 56.594 160.312 56.433 161.003 56.433C161.694 56.433 162.3 56.594 162.823 56.916C163.346 57.2333 163.754 57.679 164.048 58.253C164.342 58.827 164.489 59.4897 164.489 60.241V60.416C164.489 61.1673 164.342 61.83 164.048 62.404C163.754 62.978 163.346 63.426 162.823 63.748C162.3 64.07 161.694 64.231 161.003 64.231ZM161.003 62.824C161.596 62.824 162.062 62.607 162.403 62.173C162.748 61.7343 162.921 61.1417 162.921 60.395V60.262C162.921 59.5107 162.748 58.918 162.403 58.484C162.062 58.05 161.596 57.833 161.003 57.833C160.415 57.833 159.948 58.05 159.603 58.484C159.258 58.918 159.085 59.5107 159.085 60.262V60.395C159.085 61.1417 159.258 61.7343 159.603 62.173C159.948 62.607 160.415 62.824 161.003 62.824Z" fill="#7D9093" fill-opacity="0.5"/>
    <path d="M154.463 64.231C153.633 64.231 152.979 63.993 152.503 63.517C152.032 63.0364 151.796 62.3737 151.796 61.529V53.78H153.343V61.389C153.343 62.3317 153.756 62.803 154.582 62.803C154.816 62.803 155.03 62.7587 155.226 62.67C155.422 62.5814 155.63 62.4367 155.849 62.236L156.703 63.377C156.391 63.6664 156.05 63.881 155.681 64.021C155.317 64.161 154.911 64.231 154.463 64.231ZM149.675 55.061V53.78H152.776V55.061H149.675Z" fill="#7D9093" fill-opacity="0.5"/>
    <path d="M142.24 64V53.976H145.544C146.421 53.976 147.112 54.1953 147.616 54.634C148.12 55.0726 148.372 55.6583 148.372 56.391V56.566C148.372 57.0886 148.246 57.5366 147.994 57.91C147.742 58.2833 147.38 58.5586 146.909 58.736V58.792C147.492 58.9226 147.947 59.2003 148.274 59.625C148.605 60.045 148.771 60.5606 148.771 61.172V61.361C148.771 61.893 148.645 62.3573 148.393 62.754C148.145 63.1506 147.795 63.4586 147.343 63.678C146.895 63.8926 146.365 64 145.754 64H142.24ZM143.794 62.656H145.572C146.085 62.656 146.482 62.5253 146.762 62.264C147.042 62.0026 147.182 61.6293 147.182 61.144V60.99C147.182 60.5046 147.037 60.1313 146.748 59.87C146.463 59.604 146.05 59.471 145.509 59.471H143.36V58.183H145.32C145.791 58.183 146.153 58.064 146.405 57.826C146.657 57.588 146.783 57.2496 146.783 56.811V56.685C146.783 56.2416 146.657 55.9033 146.405 55.67C146.157 55.4366 145.796 55.32 145.32 55.32H143.794V62.656Z" fill="#7D9093" fill-opacity="0.5"/>
    <rect x="18" y="17" width="246" height="7" rx="3.5" fill="#7D9093" fill-opacity="0.26"/>
    <rect x="18" y="33" width="82" height="7" rx="3.5" fill="#7D9093" fill-opacity="0.26"/>
</svg>
<div>
    <button data-modal-action id="mobile-wallet-adapter-launch-action" class="mobile-wallet-adapter-embedded-modal-launch-action">
        Continue to Allow
    </button>
</div>
`,Qs=`
.mobile-wallet-adapter-embedded-modal-close {
    display: none;
}
.mobile-wallet-adapter-embedded-modal-content {
    text-align: center;
}
.mobile-wallet-adapter-embedded-modal-title {
    margin: 18px 100px auto 100px;
    color: #000000;
    font-size: 2.75em;
    font-weight: 600;
}
.mobile-wallet-adapter-embedded-modal-subtitle {
    margin: 20px 60px 40px 60px;
    color: #7D9093;
    font-size: 1.25em;
    font-weight: 400;
}
.mobile-wallet-adapter-embedded-modal-permission-prompt-mock {
    width: 90%;
    height: auto;
    margin: 0 auto 30px auto;
    display: block;
}
.mobile-wallet-adapter-embedded-modal-launch-action {
    display: block;
    width: 100%;
    height: 56px;
    font-size: 1.25em;
    background: #000000;
    color: #FFFFFF;
    border-radius: 18px;
}
/* Smaller screens */
@media all and (max-width: 600px) {
    .mobile-wallet-adapter-embedded-modal-title {
        font-size: 1.5em;
        margin-right: 12px;
        margin-left: 12px;
    }
    .mobile-wallet-adapter-embedded-modal-subtitle {
        margin-right: 12px;
        margin-left: 12px;
    }
}
`;function Js(){return typeof window<"u"&&window.isSecureContext&&typeof document<"u"&&/android/i.test(navigator.userAgent)}function Xs(){return typeof window<"u"&&window.isSecureContext&&typeof document<"u"&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}function ea(e){return/(WebView|Version\/.+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)|; wv\).+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+))/i.test(e)}function dn(e){return e.includes("Solana Mobile Web Shell")}function ta(){const e=typeof document<"u"&&document.referrer.startsWith("android-app://");if(typeof window>"u")return e;const t=window.matchMedia("(display-mode: standalone)").matches,r=window.matchMedia("(display-mode: fullscreen)").matches,n=window.matchMedia("(display-mode: minimal-ui)").matches;return e||t||r||n}async function na(){if(typeof navigator<"u"&&dn(navigator.userAgent))return!0;try{return(await navigator.permissions.query({name:"loopback-network"})).state==="granted"}catch(e){return!!(e instanceof TypeError&&(e.message.includes("loopback-network")||e.message.includes("local-network-access")))}}async function ro(){if(!(typeof navigator<"u"&&dn(navigator.userAgent)))try{const e=await navigator.permissions.query({name:"loopback-network"});if(e.state==="granted")return;if(e.state==="denied"){const t=new js;throw t.init(),t.open(),new z(H.ERROR_LOOPBACK_ACCESS_BLOCKED,"Local Network Access permission denied")}else if(e.state==="prompt"){const t=new Ys;if(await new Promise((r,n)=>{t.addEventListener("close",o=>{o&&n(new z(H.ERROR_ASSOCIATION_CANCELLED,"Wallet connection cancelled by user",{event:o}))}),e.onchange=()=>{e.onchange=null,r(e.state)},t.init(),t.open()})==="granted"){const r=new Hs;await new Promise((n,o)=>{r.addEventListener("close",i=>{i&&o(new z(H.ERROR_ASSOCIATION_CANCELLED,"Wallet connection cancelled by user",{event:i}))}),r.initWithCallback(async()=>{n(!0)}),r.open()});return}else return await ro()}throw new z(H.ERROR_LOOPBACK_ACCESS_BLOCKED,"Local Network Access permission unknown")}catch(e){if(e instanceof TypeError&&(e.message.includes("loopback-network")||e.message.includes("local-network-access")))return;throw e instanceof z?e:new z(H.ERROR_LOOPBACK_ACCESS_BLOCKED,e instanceof Error?e.message:"Local Network Access permission unknown")}}const ra=`
<div class="mobile-wallet-adapter-embedded-loading-indicator" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div data-modal-close style="position: absolute; width: 100%; height: 100%;"></div>
    <div class="mobile-wallet-adapter-embedded-loading-container">
        <div class="mobile-wallet-adapter-embedded-loading-animation"></div>
    </div>
</div>
`,oa=`
.mobile-wallet-adapter-embedded-loading-indicator {
    display: flex; /* Use flexbox to center content */
    justify-content: center; /* Center horizontally */
    align-items: start; /* Center vertically */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    overflow-y: auto; /* enable scrolling */
}

.mobile-wallet-adapter-embedded-loading-container {
    display: flex;
    margin: auto;
}

.mobile-wallet-adapter-embedded-loading-animation {
    position: relative;
    left: -9999px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: var(--spinner-color);
    color: var(--spinner-color);
    box-shadow: 9984px 0 0 0 var(--spinner-color), 
                9999px 0 0 0 var(--spinner-color), 
                10014px 0 0 0 var(--spinner-color);
    animation: dot-typing 1.5s infinite linear;
}

@keyframes dot-typing {
    0% {
        box-shadow: 9984px 0 0 0 var(--spinner-color), 
                    9999px 0 0 0 var(--spinner-color), 
                    10014px 0 0 0 var(--spinner-color);
    }
    16.667% {
        box-shadow: 9984px -10px 0 0 var(--spinner-color), 
                    9999px 0 0 0 var(--spinner-color), 
                    10014px 0 0 0 var(--spinner-color);
    }
    33.333% {
        box-shadow: 9984px 0 0 0 var(--spinner-color), 
                    9999px 0 0 0 var(--spinner-color), 
                    10014px 0 0 0 var(--spinner-color);
    }
    50% {
        box-shadow: 9984px 0 0 0 var(--spinner-color), 
                    9999px -10px 0 0 var(--spinner-color), 
                    10014px 0 0 0 var(--spinner-color);
    }
    66.667% {
        box-shadow: 9984px 0 0 0 var(--spinner-color), 
                    9999px 0 0 0 var(--spinner-color), 
                    10014px 0 0 0 var(--spinner-color);
    }
    83.333% {
        box-shadow: 9984px 0 0 0 var(--spinner-color), 
                    9999px 0 0 0 var(--spinner-color), 
                    10014px -10px 0 0 var(--spinner-color);
    }
    100% {
        box-shadow: 9984px 0 0 0 var(--spinner-color), 
                    9999px 0 0 0 var(--spinner-color), 
                    10014px 0 0 0 var(--spinner-color);
    }
}
`;var ia=class{#e=null;#n={};#o=!1;dom=null;constructor(){this.init=this.init.bind(this),this.#e=document.getElementById("mobile-wallet-adapter-embedded-root-ui")}async init(){console.log("Injecting modal"),this.#u()}open=()=>{console.debug("Modal open"),this.#h(),this.#e&&(this.#e.style.display="flex")};close=(e=void 0)=>{console.debug("Modal close"),this.#s(),this.#e&&(this.#e.style.display="none"),this.#n.close?.forEach(t=>t(e))};addEventListener(e,t){return this.#n[e]?.push(t)||(this.#n[e]=[t]),()=>this.removeEventListener(e,t)}removeEventListener(e,t){this.#n[e]=this.#n[e]?.filter(r=>t!==r)}#u(){if(this.dom)return;this.#e=document.createElement("div"),this.#e.id="mobile-wallet-adapter-embedded-root-ui",this.#e.innerHTML=ra,this.#e.style.display="none";const e=document.createElement("style");e.id="mobile-wallet-adapter-embedded-modal-styles",e.textContent=oa;const t=document.createElement("div");this.dom=t.attachShadow({mode:"closed"}),t.style.setProperty("--spinner-color","#FFFFFF"),this.dom.appendChild(e),this.dom.appendChild(this.#e),document.body.appendChild(t)}#h(){!this.#e||this.#o||([...this.#e.querySelectorAll("[data-modal-close]")].forEach(e=>e?.addEventListener("click",t=>{this.close(t)})),window.addEventListener("load",this.close),document.addEventListener("keydown",this.#t),this.#o=!0)}#s(){this.#o&&(window.removeEventListener("load",this.close),document.removeEventListener("keydown",this.#t),this.#e&&([...this.#e.querySelectorAll("[data-modal-close]")].forEach(e=>e?.removeEventListener("click",this.close)),this.#o=!1))}#t=e=>{e.key==="Escape"&&this.close(e)}},sa=class extends Ke{contentStyles=ca;contentHtml=aa;async initWithQR(e){super.init(),this.populateQRCode(e)}async populateQRCode(e){const t=this.dom?.getElementById("mobile-wallet-adapter-embedded-modal-qr-code-container");if(t){const r=await Ns.toCanvas(e,{width:200,margin:0});t.firstElementChild!==null?t.replaceChild(r,t.firstElementChild):t.appendChild(r);const n=this.dom?.getElementById("mobile-wallet-adapter-embedded-modal-qr-placeholder");n&&(n.style.display="none")}else console.error("QRCode Container not found")}};const aa=`
<div class="mobile-wallet-adapter-embedded-modal-qr-content">
    <div>
        <svg class="mobile-wallet-adapter-embedded-modal-icon" width="100%" height="100%">
            <circle r="52" cx="53" cy="53" fill="#99b3be" stroke="#000000" stroke-width="2"/>
            <path d="m 53,82.7305 c -3.3116,0 -6.1361,-1.169 -8.4735,-3.507 -2.338,-2.338 -3.507,-5.1625 -3.507,-8.4735 0,-3.3116 1.169,-6.1364 3.507,-8.4744 2.3374,-2.338 5.1619,-3.507 8.4735,-3.507 3.3116,0 6.1361,1.169 8.4735,3.507 2.338,2.338 3.507,5.1628 3.507,8.4744 0,3.311 -1.169,6.1355 -3.507,8.4735 -2.3374,2.338 -5.1619,3.507 -8.4735,3.507 z m 0.007,-5.25 c 1.8532,0 3.437,-0.6598 4.7512,-1.9793 1.3149,-1.3195 1.9723,-2.9058 1.9723,-4.7591 0,-1.8526 -0.6598,-3.4364 -1.9793,-4.7512 -1.3195,-1.3149 -2.9055,-1.9723 -4.7582,-1.9723 -1.8533,0 -3.437,0.6598 -4.7513,1.9793 -1.3148,1.3195 -1.9722,2.9058 -1.9722,4.7591 0,1.8527 0.6597,3.4364 1.9792,4.7512 1.3195,1.3149 2.9056,1.9723 4.7583,1.9723 z m -28,-33.5729 -3.85,-3.6347 c 4.1195,-4.025 8.8792,-7.1984 14.2791,-9.52 5.4005,-2.3223 11.2551,-3.4834 17.5639,-3.4834 6.3087,0 12.1634,1.1611 17.5639,3.4834 5.3999,2.3216 10.1596,5.495 14.2791,9.52 l -3.85,3.6347 C 77.2999,40.358 73.0684,37.5726 68.2985,35.5514 63.5292,33.5301 58.4296,32.5195 53,32.5195 c -5.4297,0 -10.5292,1.0106 -15.2985,3.0319 -4.7699,2.0212 -9.0014,4.8066 -12.6945,8.3562 z m 44.625,10.8771 c -2.2709,-2.1046 -4.7962,-3.7167 -7.5758,-4.8361 -2.7795,-1.12 -5.7983,-1.68 -9.0562,-1.68 -3.2579,0 -6.2621,0.56 -9.0125,1.68 -2.7504,1.1194 -5.2903,2.7315 -7.6195,4.8361 L 32.5189,51.15 c 2.8355,-2.6028 5.9777,-4.6086 9.4263,-6.0174 3.4481,-1.4087 7.133,-2.1131 11.0548,-2.1131 3.9217,0 7.5979,0.7044 11.0285,2.1131 3.43,1.4088 6.5631,3.4146 9.3992,6.0174 z"/>
        </svg>
        <div class="mobile-wallet-adapter-embedded-modal-title">Remote Mobile Wallet Adapter</div>
    </div>
    <div>
        <div>
            <h4 class="mobile-wallet-adapter-embedded-modal-qr-label">
                Open your wallet and scan this code
            </h4>
        </div>
        <div id="mobile-wallet-adapter-embedded-modal-qr-code-container" class="mobile-wallet-adapter-embedded-modal-qr-code-container">
            <div id="mobile-wallet-adapter-embedded-modal-qr-placeholder" class="mobile-wallet-adapter-embedded-modal-qr-placeholder"></div>
        </div>
    </div>
</div>
<div class="mobile-wallet-adapter-embedded-modal-divider"><hr></div>
<div class="mobile-wallet-adapter-embedded-modal-footer">
    <div class="mobile-wallet-adapter-embedded-modal-subtitle">
        Follow the instructions on your device. When you're finished, this screen will update.
    </div>
    <div class="mobile-wallet-adapter-embedded-modal-progress-badge">
        <div>
            <div class="spinner">
                <div class="leftWrapper">
                    <div class="left">
                        <div class="circle"></div>
                    </div>
                </div>
                <div class="rightWrapper">
                    <div class="right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        </div>
        <div>Waiting for scan</div>
    </div>
</div>
`,ca=`
.mobile-wallet-adapter-embedded-modal-qr-content {
    display: flex; 
    margin-top: 10px;
    padding: 10px;
}

.mobile-wallet-adapter-embedded-modal-qr-content > div:first-child {
    display: flex;
    flex-direction: column;
    flex: 2;
    margin-top: auto;
    margin-right: 30px;
}

.mobile-wallet-adapter-embedded-modal-qr-content > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: auto;
}

.mobile-wallet-adapter-embedded-modal-footer {
    display: flex;
    padding: 10px;
}

.mobile-wallet-adapter-embedded-modal-icon {}

.mobile-wallet-adapter-embedded-modal-title {
    color: #000000;
    font-size: 2.5em;
    font-weight: 600;
}

.mobile-wallet-adapter-embedded-modal-qr-label {
    text-align: right;
    color: #000000;
}

.mobile-wallet-adapter-embedded-modal-qr-code-container {
    margin-left: auto;
}

.mobile-wallet-adapter-embedded-modal-qr-placeholder {
    margin-left: auto;
    min-width: 200px;
    min-height: 200px;
    background: linear-gradient(-60deg, #F7F8F8 30%, #ECEEEE 50%, #F7F8F8 70%);
    background-size: 200%;
    animation: placeholderAnimate 2.7s linear infinite;
    border-radius: 12px;
}

.mobile-wallet-adapter-embedded-modal-divider {
    margin-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
}

.mobile-wallet-adapter-embedded-modal-divider hr {
    border-top: 1px solid #D9DEDE;
}

.mobile-wallet-adapter-embedded-modal-subtitle {
    margin: auto;
    margin-right: 60px;
    padding: 20px;
    color: #6E8286;
}

.mobile-wallet-adapter-embedded-modal-progress-badge {
    display: flex;
    background: #F7F8F8;
    height: 56px;
    min-width: 200px;
    margin: auto;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 18px;
    color: #A8B6B8;
    align-items: center;
}

.mobile-wallet-adapter-embedded-modal-progress-badge > div:first-child {
    margin-left: auto;
    margin-right: 20px;
}

.mobile-wallet-adapter-embedded-modal-progress-badge > div:nth-child(2) {
    margin-right: auto;
}

/* Smaller screens */
@media all and (max-width: 600px) {
    .mobile-wallet-adapter-embedded-modal-card {
        text-align: center;
    }
    .mobile-wallet-adapter-embedded-modal-qr-content {
        flex-direction: column;
    }
    .mobile-wallet-adapter-embedded-modal-qr-content > div:first-child {
        margin: auto;
    }
    .mobile-wallet-adapter-embedded-modal-qr-content > div:nth-child(2) {
        margin: auto;
        flex: 2 auto;
    }
    .mobile-wallet-adapter-embedded-modal-footer {
        flex-direction: column;
    }
    .mobile-wallet-adapter-embedded-modal-icon {
        display: none;
    }
    .mobile-wallet-adapter-embedded-modal-title {
        font-size: 1.5em;
    }
    .mobile-wallet-adapter-embedded-modal-subtitle {
        margin-right: unset;
    }
    .mobile-wallet-adapter-embedded-modal-qr-label {
        text-align: center;
    }
    .mobile-wallet-adapter-embedded-modal-qr-code-container {
        margin: auto;
    }
    .mobile-wallet-adapter-embedded-modal-qr-placeholder {
        margin: auto;
    }
}

/* QR Placeholder */
@keyframes placeholderAnimate {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

/* Spinner */
@keyframes spinLeft {
    0% {
        transform: rotate(20deg);
    }
    50% {
        transform: rotate(160deg);
    }
    100% {
        transform: rotate(20deg);
    }
}
@keyframes spinRight {
    0% {
        transform: rotate(160deg);
    }
    50% {
        transform: rotate(20deg);
    }
    100% {
        transform: rotate(160deg);
    }
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(2520deg);
    }
}

.spinner {
    position: relative;
    width: 1.5em;
    height: 1.5em;
    margin: auto;
    animation: spin 10s linear infinite;
}
.spinner::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.right, .rightWrapper, .left, .leftWrapper {
    position: absolute;
    top: 0;
    overflow: hidden;
    width: .75em;
    height: 1.5em;
}
.left, .leftWrapper {
    left: 0;
}
.right {
    left: -12px;
}
.rightWrapper {
    right: 0;
}
.circle {
    border: .125em solid #A8B6B8;
    width: 1.25em; /* 1.5em - 2*0.125em border */
    height: 1.25em; /* 1.5em - 2*0.125em border */
    border-radius: 0.75em; /* 0.5*1.5em spinner size 8 */
}
.left {
    transform-origin: 100% 50%;
    animation: spinLeft 2.5s cubic-bezier(.2,0,.8,1) infinite;
}
.right {
    transform-origin: 100% 50%;
    animation: spinRight 2.5s cubic-bezier(.2,0,.8,1) infinite;
}
`,oo="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDIuNUgxN0MxNy44Mjg0IDIuNSAxOC41IDMuMTcxNTcgMTguNSA0VjIwQzE4LjUgMjAuODI4NCAxNy44Mjg0IDIxLjUgMTcgMjEuNUg3QzYuMTcxNTcgMjEuNSA1LjUgMjAuODI4NCA1LjUgMjBWNEM1LjUgMy4xNzE1NyA2LjE3MTU3IDIuNSA3IDIuNVpNMyA0QzMgMS43OTA4NiA0Ljc5MDg2IDAgNyAwSDE3QzE5LjIwOTEgMCAyMSAxLjc5MDg2IDIxIDRWMjBDMjEgMjIuMjA5MSAxOS4yMDkxIDI0IDE3IDI0SDdDNC43OTA4NiAyNCAzIDIyLjIwOTEgMyAyMFY0Wk0xMSA0LjYxNTM4QzEwLjQ0NzcgNC42MTUzOCAxMCA1LjA2MzEgMTAgNS42MTUzOFY2LjM4NDYyQzEwIDYuOTM2OSAxMC40NDc3IDcuMzg0NjIgMTEgNy4zODQ2MkgxM0MxMy41NTIzIDcuMzg0NjIgMTQgNi45MzY5IDE0IDYuMzg0NjJWNS42MTUzOEMxNCA1LjA2MzEgMTMuNTUyMyA0LjYxNTM4IDEzIDQuNjE1MzhIMTFaIiBmaWxsPSIjRENCOEZGIi8+Cjwvc3ZnPgo=",la="Mobile Wallet Adapter",da="Remote Mobile Wallet Adapter",io=[me,ge,qt,Ut],ua=3e4;function ee(e){return e instanceof Error?e.message:"Unknown error"}var ha=class{#e={};#n="1.0.0";#o=la;#u="https://solanamobile.com/wallets";#h=oo;#s;#t;#r;#i=!1;#f=0;#a=[];#E;#p;#R;#l;get version(){return this.#n}get name(){return this.#o}get url(){return this.#u}get icon(){return this.#h}get chains(){return this.#a}get features(){return{[fr]:{version:"1.0.0",connect:this.#I},[hr]:{version:"1.0.0",disconnect:this.#b},[ur]:{version:"1.0.0",on:this.#c},[qt]:{version:"1.0.0",signMessage:this.#L},[Ut]:{version:"1.0.0",signIn:this.#N},...this.#p}}get accounts(){return this.#t?.accounts??[]}constructor(e){this.#r=e.authorizationCache,this.#s=e.appIdentity,this.#a=e.chains,this.#E=e.chainSelector,this.#R=e.onWalletNotFound,this.#l=e.nostrRelay,this.#p={[me]:{version:"1.0.0",supportedTransactionVersions:["legacy",0],signAndSendTransaction:this.#T},[ge]:{version:"1.0.0",supportedTransactionVersions:["legacy",0],signTransaction:this.#S}}}get connected(){return!!this.#t}get isAuthorized(){return!!this.#t}get currentAuthorization(){return this.#t}get cachedAuthorizationResult(){return this.#r.get()}#c=(e,t)=>(this.#e[e]?.push(t)||(this.#e[e]=[t]),()=>this.#v(e,t));#C(e,...t){this.#e[e]?.forEach(r=>r.apply(null,t))}#v(e,t){this.#e[e]=this.#e[e]?.filter(r=>t!==r)}#I=async({silent:e}={})=>{if(this.#i||this.connected)return{accounts:this.accounts};this.#i=!0;try{if(e){const t=await this.#r.get();if(t)await this.#w(t.capabilities),await this.#g(t);else return{accounts:this.accounts}}else await this.#A()}catch(t){throw new Error(ee(t),{cause:t})}finally{this.#i=!1}return{accounts:this.accounts}};#A=async e=>{try{const t=await this.#r.get();if(t)return this.#g(t),t;const r=await this.#E.select(this.#a);return await this.#m(async n=>{const[o,i]=await Promise.all([n.getCapabilities(),n.authorize({chain:r,identity:this.#s,sign_in_payload:e})]),s=this.#y(i.accounts),a={...i,accounts:s,chain:r,capabilities:o};return Promise.all([this.#w(o),this.#r.set(a),this.#g(a)]),a})}catch(t){throw new Error(ee(t),{cause:t})}};#g=async e=>{const t=this.#t==null||this.#t?.accounts.length!==e.accounts.length||this.#t.accounts.some((r,n)=>r.address!==e.accounts[n].address);this.#t=e,t&&this.#C("change",{accounts:this.accounts})};#w=async e=>{const t=e.features.includes("solana:signTransactions"),r=e.supports_sign_and_send_transactions,n=me in this.features!==r||ge in this.features!==t;this.#p={...(r||!r&&!t)&&{[me]:{version:"1.0.0",supportedTransactionVersions:["legacy",0],signAndSendTransaction:this.#T}},...t&&{[ge]:{version:"1.0.0",supportedTransactionVersions:["legacy",0],signTransaction:this.#S}}},n&&this.#C("change",{features:this.features})};#_=async(e,t,r)=>{try{const[n,o]=await Promise.all([this.#t?.capabilities??await e.getCapabilities(),e.authorize({auth_token:t,identity:this.#s,chain:r})]),i=this.#y(o.accounts),s={...o,accounts:i,chain:r,capabilities:n};Promise.all([this.#r.set(s),this.#g(s)])}catch(n){throw this.#b(),new Error(ee(n),{cause:n})}};#b=async()=>{this.#r.clear(),this.#i=!1,this.#f++,this.#t=void 0,this.#C("change",{accounts:this.accounts})};#m=async e=>{const t=this.#t?.wallet_uri_base,r=t?{baseUri:t}:void 0,n=this.#f,o=new ia;try{let i=!0,s;const a=await na(),c=await Promise.race([(async()=>{!a&&!this.#l&&await ro()})().then(async()=>{o.init();const{wallet:l,close:d}=!a&&this.#l?await Jr({...r,connectionType:"local",relayDomain:this.#l}):await cs(r);i=!1,o.addEventListener("close",f=>{f&&d()}),o.open();const h=await e(await l);return o.close(),d(),h}),new Promise((l,d)=>{s=setTimeout(()=>{i&&d(new z(H.ERROR_ASSOCIATION_CANCELLED,"Wallet connection timed out",{event:void 0}))},ua)})]);return clearTimeout(s),c}catch(i){throw o.close(),this.#f!==n&&await new Promise(()=>{}),i instanceof Error&&i.name==="SolanaMobileWalletAdapterError"&&i.code==="ERROR_WALLET_NOT_FOUND"&&await this.#R(this),i}};#d=()=>{if(!this.#t)throw new Error("Wallet not connected");return{authToken:this.#t.auth_token,chain:this.#t.chain}};#y=e=>e.map(t=>{const r=Q(t.address);return{address:Ve(r),publicKey:r,label:t.label,icon:t.icon,chains:t.chains??this.#a,features:t.features??io}});#x=async e=>{const{authToken:t,chain:r}=this.#d();try{const n=e.map(o=>he(o));return await this.#m(async o=>(await this.#_(o,t,r),(await o.signTransactions({payloads:n})).signed_payloads.map(Q)))}catch(n){throw new Error(ee(n),{cause:n})}};#O=async(e,t)=>{const{authToken:r,chain:n}=this.#d();try{return await this.#m(async o=>{const[i]=await Promise.all([o.getCapabilities(),this.#_(o,r,n)]);if(i.supports_sign_and_send_transactions){const s=he(e);return(await o.signAndSendTransactions({...t,payloads:[s]})).signatures.map(Q)[0]}else throw new Error("connected wallet does not support signAndSendTransaction")})}catch(o){throw new Error(ee(o),{cause:o})}};#T=async(...e)=>{const t=[];for(const r of e){const n=await this.#O(r.transaction,r.options);t.push({signature:n})}return t};#S=async(...e)=>(await this.#x(e.map(({transaction:t})=>t))).map(t=>({signedTransaction:t}));#L=async(...e)=>{const{authToken:t,chain:r}=this.#d(),n=e.map(({account:i})=>he(new Uint8Array(i.publicKey))),o=e.map(({message:i})=>he(i));try{return await this.#m(async i=>(await this.#_(i,t,r),(await i.signMessages({addresses:n,payloads:o})).signed_payloads.map(Q).map(s=>({signedMessage:s,signature:s.slice(-64)}))))}catch(i){throw new Error(ee(i),{cause:i})}};#N=async(...e)=>{const t=[];if(e.length>1)for(const r of e)t.push(await this.#B(r));else return[await this.#B(e[0])];return t};#B=async e=>{this.#i=!0;try{const t=await this.#A({...e,domain:e?.domain??window.location.host});if(!t.sign_in_result)throw new Error("Sign in failed, no sign in result returned by wallet");const r=t.sign_in_result.address,n=t.accounts.find(o=>o.address==r);return{account:{...n??{address:Ve(Q(r))},publicKey:Q(r),chains:n?.chains??this.#a,features:n?.features??t.capabilities.features},signedMessage:Q(t.sign_in_result.signed_message),signature:Q(t.sign_in_result.signature)}}catch(t){throw new Error(ee(t),{cause:t})}finally{this.#i=!1}}},dr=class{#e={};#n="1.0.0";#o=da;#u="https://solanamobile.com/wallets";#h=oo;#s;#t;#r;#i=!1;#f=0;#a=[];#E;#p;#R;#l;#c;get version(){return this.#n}get name(){return this.#o}get url(){return this.#u}get icon(){return this.#h}get chains(){return this.#a}get features(){return{[fr]:{version:"1.0.0",connect:this.#A},[hr]:{version:"1.0.0",disconnect:this.#m},[ur]:{version:"1.0.0",on:this.#C},[qt]:{version:"1.0.0",signMessage:this.#N},[Ut]:{version:"1.0.0",signIn:this.#B},...this.#p}}get accounts(){return this.#t?.accounts??[]}constructor(e){this.#r=e.authorizationCache,this.#s=e.appIdentity,this.#a=e.chains,this.#E=e.chainSelector,this.#l="remoteHostAuthority"in e?{kind:"reflector",domain:e.remoteHostAuthority}:{kind:"nostr",domain:e.nostrRelay},this.#R=e.onWalletNotFound,this.#p={[me]:{version:"1.0.0",supportedTransactionVersions:["legacy",0],signAndSendTransaction:this.#S},[ge]:{version:"1.0.0",supportedTransactionVersions:["legacy",0],signTransaction:this.#L}}}get connected(){return!!this.#c&&!!this.#t}get isAuthorized(){return!!this.#t}get currentAuthorization(){return this.#t}get cachedAuthorizationResult(){return this.#r.get()}#C=(e,t)=>(this.#e[e]?.push(t)||(this.#e[e]=[t]),()=>this.#I(e,t));#v(e,...t){this.#e[e]?.forEach(r=>r.apply(null,t))}#I(e,t){this.#e[e]=this.#e[e]?.filter(r=>t!==r)}#A=async(e={})=>{if(this.#i||this.connected)return{accounts:this.accounts};this.#i=!0;try{await this.#g()}catch(t){throw new Error(ee(t),{cause:t})}finally{this.#i=!1}return{accounts:this.accounts}};#g=async e=>{try{const t=await this.#r.get();if(t)return this.#w(t),t;this.#c&&(this.#c=void 0);const r=await this.#E.select(this.#a);return await this.#d(async n=>{const[o,i]=await Promise.all([n.getCapabilities(),n.authorize({chain:r,identity:this.#s,sign_in_payload:e})]),s=this.#x(i.accounts),a={...i,accounts:s,chain:r,capabilities:o};return Promise.all([this.#_(o),this.#r.set(a),this.#w(a)]),a})}catch(t){throw new Error(ee(t),{cause:t})}};#w=async e=>{const t=this.#t==null||this.#t?.accounts.length!==e.accounts.length||this.#t.accounts.some((r,n)=>r.address!==e.accounts[n].address);this.#t=e,t&&this.#v("change",{accounts:this.accounts})};#_=async e=>{const t=e.features.includes("solana:signTransactions"),r=e.supports_sign_and_send_transactions||e.features.includes("solana:signAndSendTransaction"),n=me in this.features!==r||ge in this.features!==t;this.#p={...r&&{[me]:{version:"1.0.0",supportedTransactionVersions:e.supported_transaction_versions,signAndSendTransaction:this.#S}},...t&&{[ge]:{version:"1.0.0",supportedTransactionVersions:e.supported_transaction_versions,signTransaction:this.#L}}},n&&this.#v("change",{features:this.features})};#b=async(e,t,r)=>{try{const[n,o]=await Promise.all([this.#t?.capabilities??await e.getCapabilities(),e.authorize({auth_token:t,identity:this.#s,chain:r})]),i=this.#x(o.accounts),s={...o,accounts:i,chain:r,capabilities:n};Promise.all([this.#r.set(s),this.#w(s)])}catch(n){throw this.#m(),new Error(ee(n),{cause:n})}};#m=async()=>{this.#c?.close(),this.#r.clear(),this.#i=!1,this.#f++,this.#t=void 0,this.#c=void 0,this.#v("change",{accounts:this.accounts})};#d=async e=>{const t=this.#t?.wallet_uri_base,r=t?{baseUri:t}:void 0,n=this.#f,o=new sa;if(this.#c)return e(this.#c.wallet);try{o.init(),o.open();const{associationUrl:i,close:s,wallet:a}=this.#l.kind=="reflector"?await ls({...r,remoteHostAuthority:this.#l.domain}):await Jr({...r,connectionType:"remote",relayDomain:this.#l.domain}),c=o.addEventListener("close",l=>{l&&s()});return o.populateQRCode(i.toString()),this.#c={close:s,wallet:await a},c(),o.close(),await e(this.#c.wallet)}catch(i){throw o.close(),this.#f!==n&&await new Promise(()=>{}),i instanceof Error&&i.name==="SolanaMobileWalletAdapterError"&&i.code==="ERROR_WALLET_NOT_FOUND"&&await this.#R(this),i}};#y=()=>{if(!this.#t)throw new Error("Wallet not connected");return{authToken:this.#t.auth_token,chain:this.#t.chain}};#x=e=>e.map(t=>{const r=Q(t.address);return{address:Ve(r),publicKey:r,label:t.label,icon:t.icon,chains:t.chains??this.#a,features:t.features??io}});#O=async e=>{const{authToken:t,chain:r}=this.#y();try{return await this.#d(async n=>(await this.#b(n,t,r),(await n.signTransactions({payloads:e.map(he)})).signed_payloads.map(Q)))}catch(n){throw new Error(ee(n),{cause:n})}};#T=async(e,t)=>{const{authToken:r,chain:n}=this.#y();try{return await this.#d(async o=>{const[i]=await Promise.all([o.getCapabilities(),this.#b(o,r,n)]);if(i.supports_sign_and_send_transactions)return(await o.signAndSendTransactions({...t,payloads:[he(e)]})).signatures.map(Q)[0];throw new Error("connected wallet does not support signAndSendTransaction")})}catch(o){throw new Error(ee(o),{cause:o})}};#S=async(...e)=>{const t=[];for(const r of e){const n=await this.#T(r.transaction,r.options);t.push({signature:n})}return t};#L=async(...e)=>(await this.#O(e.map(({transaction:t})=>t))).map(t=>({signedTransaction:t}));#N=async(...e)=>{const{authToken:t,chain:r}=this.#y(),n=e.map(({account:i})=>he(new Uint8Array(i.publicKey))),o=e.map(({message:i})=>he(i));try{return await this.#d(async i=>(await this.#b(i,t,r),(await i.signMessages({addresses:n,payloads:o})).signed_payloads.map(Q).map(s=>({signedMessage:s,signature:s.slice(-64)}))))}catch(i){throw new Error(ee(i),{cause:i})}};#B=async(...e)=>{const t=[];if(e.length>1)for(const r of e)t.push(await this.#M(r));else return[await this.#M(e[0])];return t};#M=async e=>{this.#i=!0;try{const t=await this.#g({...e,domain:e?.domain??window.location.host});if(!t.sign_in_result)throw new Error("Sign in failed, no sign in result returned by wallet");const r=t.sign_in_result.address,n=t.accounts.find(o=>o.address==r);return{account:{...n??{address:Ve(Q(r))},publicKey:Q(r),chains:n?.chains??this.#a,features:n?.features??t.capabilities.features},signedMessage:Q(t.sign_in_result.signed_message),signature:Q(t.sign_in_result.signature)}}catch(t){throw new Error(ee(t),{cause:t})}finally{this.#i=!1}}};function wa(e){if(typeof window>"u"){console.warn("MWA not registered: no window object");return}if(!window.isSecureContext){console.warn("MWA not registered: secure context required (https)");return}const t=navigator.userAgent;Js()&&(!ea(t)||dn(t))?rt(new ha(e)):Xs()&&("nostrRelay"in e||e.remoteHostAuthority!==void 0)?"nostrRelay"in e?rt(new dr({...e,nostrRelay:e.nostrRelay})):rt(new dr({...e,remoteHostAuthority:e.remoteHostAuthority})):console.warn("MWA not registered: device or environment not supported")}export{ha as LocalSolanaMobileWalletAdapterWallet,dr as RemoteSolanaMobileWalletAdapterWallet,da as SolanaMobileWalletAdapterRemoteWalletName,la as SolanaMobileWalletAdapterWalletName,pa as createDefaultAuthorizationCache,ga as createDefaultChainSelector,ma as createDefaultWalletNotFoundHandler,Ks as defaultErrorModalWalletNotFoundHandler,wa as registerMwa};
