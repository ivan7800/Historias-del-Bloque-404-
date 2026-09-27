import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
class Element {
  constructor(id=''){this.id=id;this.children=[];this.attrs={};this.listeners={};this.textContent='';this.disabled=false;this.hidden=false;this.classList={values:new Set(),add:(...v)=>v.forEach(x=>this.classList.values.add(x)),remove:(...v)=>v.forEach(x=>this.classList.values.delete(x)),toggle:(x,force)=>{const on=force===undefined?!this.classList.values.has(x):force;on?this.classList.values.add(x):this.classList.values.delete(x);return on},contains:x=>this.classList.values.has(x)}}
  addEventListener(name,fn){(this.listeners[name]??=[]).push(fn)}
  click(){for(const fn of this.listeners.click??[])fn({currentTarget:this})}
  setAttribute(name,value){this.attrs[name]=value}
  getAttribute(name){return this.attrs[name]??null}
  replaceChildren(...els){this.children=els}
  append(...els){this.children.push(...els)}
  focus(){}
  showModal(){}
  querySelectorAll(){return this.children}
}
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
const ids=[...html.matchAll(/id="([^"]+)"/g)].map(m=>m[1]);
function runtime(){
 const els=new Map(ids.map(id=>[id,new Element(id)]));
 const document={body:new Element('body'),createElement:()=>new Element(),addEventListener(name,fn){document.listeners??={};document.listeners[name]=fn},getElementById:id=>els.get(id)};document.body.dataset={};
 const storage=new Map();const context={document,window:{scrollTo(){},AudioContext:null,webkitAudioContext:null},navigator:{},location:{protocol:'file:',hostname:''},localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)},confirm:()=>true,console,setTimeout,clearTimeout};
 vm.runInNewContext(fs.readFileSync(new URL('../app.js',import.meta.url),'utf8'),context);
 return {els,document,storage};
}
function play(route){
 const r=runtime();const optionalSeen=[];r.els.get('new-game').click();
 const expected=['bar','car','road','incident','escape','aftermath','morning','rumour','witness','months','price','melli','ramiro','melli2','refusal','warehouse','chase','hospital','custody','javi-last','epilogue'];
 for(let i=0;i<route.length;i++){
  if(r.document.body.dataset.scene==='act-two'){const sceneText=r.els.get('narrative').children.map(n=>n.textContent).join(' ');const phrases=['cuadrante','sobre','ciclomotor'];assert.ok(sceneText.includes(phrases[route[9]]),'Act II scene reflects road choice');assert.equal(r.els.get('choices').children.length,2,'two choices for the chosen Act II route');r.els.get('choices').children[route[9]===1?1:0].click();assert.equal(r.els.get('act-two-impact').hidden,false,'consequence displayed during Act II')}
  while(['lucia-interlude','ferrer-interlude'].includes(r.document.body.dataset.scene)){const optional=r.document.body.dataset.scene;optionalSeen.push(optional);assert.equal(r.els.get('choices').children.length,3,`${optional} choices`);r.els.get('choices').children[0].click()}
  assert.equal(r.document.body.dataset.scene,expected[i],`route stage ${i+1}`);
  if(expected[i]==='ramiro')assert.equal(r.els.get('narrative').children.length,5,'Act II consequence recalled by Ramiro');const buttons=r.els.get('choices').children;assert.equal(buttons.length,3,`choices at ${expected[i]}`);buttons[route[i]].click();
 }
 assert.ok(r.els.get('ending').classList.contains('active'),'ending opens');
 assert.ok(r.els.get('ending-copy').textContent.length>100,'ending contains a personalized narrative');
 assert.ok(r.storage.has('historias-bloque-404-campaign-v2'),'autosave exists');
 r.els.get('ending-home').click();r.els.get('continue-game').click();assert.ok(r.els.get('ending').classList.contains('active'),'ending save resumes');
 return {copy:r.els.get('ending-copy').textContent,title:r.els.get('ending-title').textContent,coda:r.els.get('ending-coda').textContent,optionalSeen};
}
const accountable=play(Array(21).fill(0));
const defensive=play(Array(21).fill(1));
const observant=play(Array(21).fill(2));
assert.notEqual(accountable.copy,defensive.copy,'decisions change accountability and investigation epilogue');
assert.equal(new Set([accountable.title,defensive.title,observant.title]).size,3,'three different final titles');
assert.equal(new Set([accountable.coda,defensive.coda,observant.coda]).size,3,'three different final scenes');
assert.notEqual(defensive.copy+defensive.coda,observant.copy+observant.coda,'alternate choices change the final narrative');
for(const {copy:ending} of [accountable,defensive,observant]){
 assert.match(ending,/Joaquín murió, Sebas murió y Javi murió/,'canonical losses remain in the complete story');
 assert.match(ending,/Ramiro/,'campaign closes the Ramiro arc');
}
assert.ok([accountable,defensive,observant].some(r=>r.optionalSeen.includes('lucia-interlude')),'Lucía interlude reached');
assert.ok([accountable,defensive,observant].some(r=>r.optionalSeen.includes('ferrer-interlude')),'Ferrer interlude reached');

const collector=runtime();
for(let endingIndex=0;endingIndex<3;endingIndex++){
 collector.els.get('new-game').click();
 for(let steps=0;steps<25&&!collector.els.get('ending').classList.contains('active');steps++){
  const scene=collector.document.body.dataset.scene;
  collector.els.get('choices').children[scene==='epilogue'?endingIndex:0].click();
 }
 assert.ok(collector.els.get('ending').classList.contains('active'),'replay reaches ending');
 assert.match(collector.els.get('ending-discovery').textContent,new RegExp(`${endingIndex+1} de 3`),'discovered endings persist');
}
collector.els.get('replay').click();collector.els.get('reset-save').click();
assert.equal(collector.storage.has('historias-bloque-404-endings-v1'),false,'reset clears ending discovery');

console.log('PASS 3 canonical 21-scene routes, including three Act II paths and conditional Lucía/Ferrer interludes, fixed novel milestones, distinct epilogues and save recovery');
