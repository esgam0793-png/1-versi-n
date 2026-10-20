(function(){
var s=[].slice.call(document.querySelectorAll('.sl')),d=document.getElementById('dots'),i=0;
s.forEach(function(_,k){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Ir a la diapositiva '+(k+1));b.onclick=function(){go(k)};d.appendChild(b)});
function go(n){i=(n+s.length)%s.length;s.forEach(function(e,k){e.classList.toggle('on',k===i)});[].forEach.call(d.children,function(b,k){b.setAttribute('aria-current',k===i)})}
document.getElementById('pv').onclick=function(){go(i-1)};document.getElementById('nx').onclick=function(){go(i+1)};
go(0);
var m=document.getElementById('mb'),n=document.getElementById('nav');
function cl(){n.classList.remove('on');m.setAttribute('aria-expanded','false');m.setAttribute('aria-label','Abrir menú')}
m.onclick=function(e){e.stopPropagation();var o=n.classList.toggle('on');m.setAttribute('aria-expanded',o);m.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú')};
n.addEventListener('click',cl);
document.addEventListener('click',function(e){if(!n.contains(e.target))cl()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')cl()});
document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();var f=e.target,r=document.getElementById('err');
if(f.web.value)return;
if(!f.n.value||!f.e.value||!f.e.validity.valid||!f.c.value||!f.querySelector('[type=checkbox]').checked){r.textContent='Completa nombre, correo válido, empresa y acepta el tratamiento de datos.';return}
r.textContent='';f.style.display='none';document.getElementById('ok').style.display='block'});
})();

(function(){
var R=document.documentElement,$=function(i){return document.getElementById(i)},tg=$('tg');
function dk(){var t=R.dataset.theme;return t?t==='dark':matchMedia('(prefers-color-scheme:dark)').matches}
function up(){var d=dk();tg.firstChild.textContent=d?'☀':'☾';tg.setAttribute('aria-label',d?'Cambiar a modo claro':'Cambiar a modo oscuro')}
tg.onclick=function(){var n=dk()?'light':'dark';R.dataset.theme=n;try{localStorage.setItem('ca-theme',n)}catch(e){}up()};up();
var els=[].slice.call(document.querySelectorAll('.card,.pain p,section h2,.chain li,details,.jd'));
els.forEach(function(e,k){e.classList.add('rv');e.style.transitionDelay=(k%4)*80+'ms'});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});els.forEach(function(e){io.observe(e)})}else{els.forEach(function(e){e.classList.add('in')})}
var paused=matchMedia('(prefers-reduced-motion:reduce)').matches,ps=$('ps'),h=document.querySelector('.hero'),hov=false;
function lb(){ps.textContent=paused?'▶':'❚❚';ps.setAttribute('aria-label',paused?'Reanudar carrusel':'Pausar carrusel')}
ps.onclick=function(){paused=!paused;lb()};lb();
['mouseenter','focusin'].forEach(function(v){h.addEventListener(v,function(){hov=true})});
['mouseleave','focusout'].forEach(function(v){h.addEventListener(v,function(){hov=false})});
setInterval(function(){if(!paused&&!hov)$('nx').click()},7000);
var S=[[1,'Día'],[2,'Día'],[3,'Noche'],[4,'Día'],[5,'Noche'],[6,'Día']],sel={},fl='Todas';
function draw(){var c=$('ch');c.innerHTML='';
S.forEach(function(s){if(fl!=='Todas'&&s[1]!==fl)return;var b=document.createElement('button');b.type='button';b.setAttribute('aria-pressed',!!sel[s[0]]);b.textContent=(s[1]==='Día'?'☀ ':'☾ ')+'Escena '+s[0]+' · '+s[1];b.onclick=function(){sel[s[0]]=!sel[s[0]];draw()};c.appendChild(b)});
var l=$('jl');l.innerHTML='';var d=0,n=0;
S.forEach(function(s){if(sel[s[0]]){n++;if(s[1]==='Día')d++;var li=document.createElement('li');li.innerHTML='<span>Escena '+s[0]+'</span><span>'+s[1]+'</span>';l.appendChild(li)}});
$('jc').textContent=n?n+(n===1?' escena':' escenas')+' en la jornada · '+d+' de día · '+(n-d)+' de noche':'Toca una escena para asignarla a la jornada.'}
[].forEach.call($('cat').children,function(b){b.onclick=function(){fl=b.dataset.f;[].forEach.call($('cat').children,function(x){x.setAttribute('aria-pressed',x===b)});draw()}});
draw();
})();
