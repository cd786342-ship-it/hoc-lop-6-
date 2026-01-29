function login(){const n=document.getElementById('name')?.value||'Học sinh';localStorage.setItem('name',n);updateLeader();}
function grade(q,ans,sub){const v=document.querySelector('input[name='+q+']:checked')?.value;
const ok=v===ans;document.getElementById('r_'+q).innerText=ok?'✅ Đúng':'❌ Sai';
const k='score_'+sub;const cur=parseInt(localStorage.getItem(k)||0);localStorage.setItem(k,cur+(ok?1:0));updateLeader();}
function updateLeader(){const ul=document.getElementById('leader'); if(!ul) return; ul.innerHTML='';
const name=localStorage.getItem('name')||'Học sinh';
let total=0;['toan','van','anh','khoa','su','dia','tin'].forEach(s=>{total+=parseInt(localStorage.getItem('score_'+s)||0)});
ul.innerHTML=`<li>${name}: ${total} điểm</li>`;}
function toggleTheme(){document.documentElement.classList.toggle('dark');}
document.addEventListener('DOMContentLoaded',updateLeader);