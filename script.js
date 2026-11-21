var cv=document.getElementById('c'),x=cv.getContext('2d'),P=[],run=false;
function size(){cv.width=innerWidth;cv.height=innerHeight}size();addEventListener('resize',size);
var cols=['#ffe27a','#d4a62a','#fff3c4','#e6b422','#ffffff','#ff8fab'];
function boom(){
  for(var i=0;i<220;i++)P.push({x:Math.random()*cv.width,y:-20-Math.random()*cv.height*.6,vx:Math.random()*4-2,vy:Math.random()*3+2,s:Math.random()*9+4,r:Math.random()*6,c:cols[i%cols.length]});
  if(!run){run=true;tick()}
}
function tick(){
  x.clearRect(0,0,cv.width,cv.height);
  P=P.filter(function(p){return p.y<cv.height+20});
  P.forEach(function(p){p.x+=p.vx;p.y+=p.vy;p.r+=.1;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;x.fillRect(-p.s/2,-p.s/4,p.s,p.s/2);x.restore()});
  if(P.length)requestAnimationFrame(tick);else run=false;
}
document.getElementById('go').onclick=function(){boom();setTimeout(boom,700);setTimeout(boom,1400)};
setTimeout(boom,500);
for(var k=0;k<14;k++){var s=document.createElement('div');s.className='star';s.textContent=k%2?'✦':'✧';s.style.left=(Math.random()*100)+'vw';s.style.animationDuration=(8+Math.random()*10)+'s';s.style.animationDelay=(-Math.random()*12)+'s';s.style.fontSize=(10+Math.random()*16)+'px';document.body.appendChild(s)}
var $=function(i){return document.getElementById(i)};
document.querySelectorAll('.tab').forEach(function(b){b.onclick=function(){
  document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('on')});
  document.querySelectorAll('.pane').forEach(function(t){t.classList.remove('on')});
  b.classList.add('on');$(b.dataset.t).classList.add('on');boom()}});
var gal=$('gal');
gal.onclick=function(e){var im=e.target.closest('img');if(im){$('lbi').src=im.src;$('lb').classList.add('on')}else if(e.target.closest('.ph.e'))$('fp').click()};
$('lb').onclick=function(){$('lb').classList.remove('on')};
$('addp').onclick=function(){$('fp').click()};
$('fp').onchange=function(){Array.prototype.forEach.call(this.files,function(f){
  var im=document.createElement('img');im.src=URL.createObjectURL(f);
  var s=gal.querySelector('.ph.e'),b;
  if(s){s.classList.remove('e');s.textContent='';b=s}else{b=document.createElement('div');b.className='ph';gal.appendChild(b)}
  b.appendChild(im)});boom()};
$('addv').onclick=function(){$('fv').click()};
$('fv').onchange=function(){Array.prototype.forEach.call(this.files,function(f){
  var v=document.createElement('video');v.src=URL.createObjectURL(f);v.controls=true;v.playsInline=true;
  var e=$('ve');if(e)e.remove();$('vl').appendChild(v)})};
var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.stat,.card,.wish,.sign,.rv').forEach(function(el,i){el.classList.add('rv');el.style.transitionDelay=((i%3)*.12)+'s';io.observe(el)});
$('go').addEventListener('click',function(){for(var i=0;i<18;i++){(function(i){setTimeout(function(){var h=document.createElement('div');h.className='hrt';h.textContent=['💛','👑','✨','💖'][i%4];h.style.left=(Math.random()*95)+'vw';h.style.fontSize=(20+Math.random()*26)+'px';document.body.appendChild(h);setTimeout(function(){h.remove()},4200)},i*120)})(i)}});
