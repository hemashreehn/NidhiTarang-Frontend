function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('nav a').forEach(a=>a.classList.remove('active'));
  if(id==='home') document.getElementById('n-home').classList.add('active');
  if(id==='schemesPage' || id==='results') document.getElementById('n-schemes').classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}

const schemes = [
 {cat:"Central Government Schemes - 7 Schemes", tag:"Central", title:"PMMY - Pradhan Mantri MUDRA Yojana", desc:"Up to 10L - Collateral Free - 8-12% Interest<br>• Min/relaxed business, Start-up, Exp to<br>• Loan for working capital & equipment, no collateral required"},
 {cat:"Rajasthan State Schemes - 5 Schemes", tag:"Rajasthan", title:"Rajasthan Startup Policy 2021", desc:"Up to 10L, Up to - 3.6L/yr - 2-6yr<br>• Rajasthan domicile, Startup (45 yrs)<br>• Grant up to 10L for early-stage startups"},
 {cat:"Central Government Schemes - 7 Schemes", tag:"Central", title:"Stand-Up India Scheme", desc:"Up to 1Cr - 1Cr - SC/ST - Collateral Free<br>• For women entrepreneurs / SC/ST Startup<br>• 75% of project cost or MUDRA credit guarantee support"},
 {cat:"Rajasthan State Schemes - 5 Schemes", tag:"Rajasthan", title:"Rajasthan MSME Interest Subsidy", desc:"Up to 1L - Subsidy - 5% Interest<br>• MSME registered in Rajasthan, Interest subsidy up to 5% p.a<br>• For manufacturing & services units valid for 5 years"}
];

function render(){
  const c=document.getElementById('cards');
  c.innerHTML="";
  schemes.forEach(s=>{
    c.innerHTML+=`<div class="card"><div class="card-head">${s.cat} <span style="background:#fde68a;padding:2px 6px;border-radius:4px">${s.tag}</span></div><div class="card-body"><h4>${s.title}</h4><p>${s.desc}</p><br><button class="btn-orange sm" onclick="showPage('results')">Apply Now →</button> <button class="btn-outline sm">View Details</button></div></div>`;
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  render();
  showPage('home');
  document.getElementById('findBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    let n=document.getElementById('fullName').value||'Rahul';
    let a=document.getElementById('age').value||'28';
    let st=document.getElementById('state').value;
    let b=document.getElementById('biz').value;
    let f=document.getElementById('fund').value;
    document.getElementById('profileBadge').innerText=`${n}, ${a}, Jaipur, ${st} | ${b} | ${f} ✎`;
    showPage('schemesPage');
  });
});