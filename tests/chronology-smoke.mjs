import assert from 'node:assert/strict';
import fs from 'node:fs';

const source=fs.readFileSync(new URL('../app.js',import.meta.url),'utf8');
const rows=[...source.matchAll(/^  ,?(?:'([^']+)'|([\w-]+)):\{(n|step):(\d+),(?:(?:optional|branch):true,)?time:'([^']+)',date:'([^']+)'/gm)]
  .map(([,quoted,plain,type,position,time,date])=>({id:quoted||plain,type,position:Number(position),time,date}));
const weekdays=['DOMINGO','LUNES','MARTES','MIÉRCOLES','JUEVES','VIERNES','SÁBADO'];
const months=['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
function minute(row){
 const m=row.date.match(/^(?:(DOMINGO|LUNES|MARTES|MIÉRCOLES|JUEVES|VIERNES|SÁBADO) · )?(?:(\d+) )?([A-ZÁÉÍÓÚ]+) (\d{4})$/);
 assert.ok(m,`Unrecognized date ${row.id}: ${row.date}`);
 const [,label,dayText,monthText,yearText]=m,month=months.indexOf(monthText)+1,day=Number(dayText||1),year=Number(yearText);
 assert.ok(month>0,`Unrecognized month ${row.id}`);
 const date=new Date(Date.UTC(year,month-1,day));
 assert.equal(date.getUTCDate(),day,`Invalid day ${row.id}`);
 if(label)assert.equal(weekdays[date.getUTCDay()],label,`Weekday mismatch ${row.id}`);
 const [hour,minute]=row.time.split(':').map(Number);
 assert.ok(hour>=0&&hour<24&&minute>=0&&minute<60,`Invalid time ${row.id}`);
 return date.getTime()+hour*3600000+minute*60000;
}
const canonical=rows.filter(r=>r.type==='n');
assert.equal(canonical.length,21,'21 canonical scenes');
assert.deepEqual(canonical.map(r=>r.position),Array.from({length:21},(_,i)=>i+1),'canonical order');
for(let i=1;i<canonical.length;i++)assert.ok(minute(canonical[i])>=minute(canonical[i-1]),`Time runs backward at ${canonical[i].id}`);
for(const [optionalId,fromId,toId] of [['lucia-interlude','witness','months'],['act-two','months','price'],['ferrer-interlude','warehouse','chase']]){
 const optional=rows.find(r=>r.id===optionalId),from=rows.find(r=>r.id===fromId),to=rows.find(r=>r.id===toId);
 assert.ok(optional&&from&&to,`Missing interlude ${optionalId}`);
 assert.ok(minute(from)<=minute(optional)&&minute(optional)<=minute(to),`Interlude ${optionalId} breaks chronology`);
}
console.log('PASS chronological order and historical weekday labels for 21 canonical scenes and 2 interludes and 1 Act II branch scene');
