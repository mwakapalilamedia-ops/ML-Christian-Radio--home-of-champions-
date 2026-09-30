const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu?.addEventListener('click',()=>{nav?.classList.toggle('open');});document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();

const modal=document.getElementById('membershipModal');
const openers=document.querySelectorAll('[data-open-membership]');
const closers=document.querySelectorAll('[data-close-membership]');
function openMembership(){if(!modal)return;modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.classList.add('modalOpen');setTimeout(()=>modal.querySelector('input')?.focus(),80);}
function closeMembership(){if(!modal)return;modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modalOpen');}
openers.forEach(b=>b.addEventListener('click',openMembership));closers.forEach(b=>b.addEventListener('click',closeMembership));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMembership();});

const shares=document.getElementById('shares'),total=document.getElementById('total'),paid=document.getElementById('paid'),form=document.getElementById('membershipForm');
function calc(){const s=Number(shares?.value||0),p=Number(paid?.value||0),t=s*10000;if(total)total.value='TZS '+t.toLocaleString('en-US');if(paid)paid.value=p;}
shares?.addEventListener('input',calc);paid?.addEventListener('input',calc);calc();
form?.addEventListener('submit',e=>{e.preventDefault();if(!document.getElementById('agree')?.checked){alert('Tafadhali kubali tamko la maombi kwanza.');return;}const f=new FormData(form);const msg=['ML CHRISTIAN RADIO – MEMBERSHIP APPLICATION','',`Jina kamili: ${f.get('name')}`,`Simu: ${f.get('phone')}`,`Email: ${f.get('email')||'-'}`,`Mkoa/Wilaya: ${f.get('region')||'-'}`,`Kazi/Biashara: ${f.get('occupation')||'-'}`,'',`Hisa zilizoombwa: ${f.get('shares')||0}`,`Thamani ya hisa: ${f.get('total')}`,`Kiasi kilicholipwa: TZS ${f.get('paid')||0}`,'','Nimehakikisha taarifa nilizotoa ni za kweli na nimekubali masharti ya uanachama.'].join('\n');window.open('https://wa.me/255744936258?text='+encodeURIComponent(msg),'_blank');});