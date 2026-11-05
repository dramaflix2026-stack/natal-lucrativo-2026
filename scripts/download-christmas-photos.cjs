const fs = require('node:fs');
const path = require('node:path');
const photos = [
  ['natal-footer-cinematic.jpg', [
    'https://images.unsplash.com/photo-1640101128550-cfb12d3d1f43?auto=format&fit=crop&w=2000&q=85',
    'https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=2000&q=85'
  ]],
  ['natal-hero.jpg', [
    'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1200&q=82',
    'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=1200&q=82',
    'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?w=1200'
  ]],
  ['natal-vitrine.jpg', [
    'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1200&q=82',
    'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=1200&q=82',
    'https://images.pexels.com/photos/6181838/pexels-photo-6181838.jpeg?w=1200'
  ]],
  ['natal-faq.jpg', [
    'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=1200&q=82',
    'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1200&q=82',
    'https://images.pexels.com/photos/1303082/pexels-photo-1303082.jpeg?w=1200'
  ]]
];
async function download(name, urls) {
  const dest=path.join(process.cwd(),'public','images',name);
  fs.mkdirSync(path.dirname(dest),{recursive:true});
  if(fs.existsSync(dest) && fs.statSync(dest).size>12000) return;
  for(const url of urls) {
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),18000);
    try {
      const response=await fetch(url,{signal:controller.signal,headers:{'User-Agent':'Mozilla/5.0'}});
      if(!response.ok) throw Error('HTTP '+response.status);
      const data=Buffer.from(await response.arrayBuffer());
      if(data.length<12000 || data[0]!==0xff || data[1]!==0xd8 || data[2]!==0xff) throw Error('invalid JPEG');
      fs.writeFileSync(dest,data);
      console.log('Photo ready:',name,data.length,'bytes');
      return;
    } catch(error) { console.warn('Photo source unavailable:',name,error.message); }
    finally {clearTimeout(timeout);}
  }
  throw Error('Unable to bundle a real Christmas photograph: '+name);
}
(async()=>{for(const [name,urls] of photos) await download(name,urls);})().catch(error=>{console.error(error);process.exitCode=1;});
