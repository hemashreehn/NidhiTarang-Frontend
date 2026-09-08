const data = [
 {title:"PMMY - Pradhan Mantri MUDRA Yojana", desc:"Up to 10L - Collateral Free"},
 {title:"Rajasthan Startup Policy 2021", desc:"Up to 10L - Incubation Support"},
 {title:"Stand-Up India Scheme", desc:"Up to 10Cr - SC/ST - Collateral Free"},
 {title:"Rajasthan MSME Interest Subsidy", desc:"Up to 8L - 5% Interest"}
];

function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('nav a').forEach(a=>a.classList.remove('active'));
  if(document.getElementById('nav-'+id)) document.getElementById('nav-'+id).classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

function showSchemes(){
 const grid = document.getElementById("schemesGrid");
 grid.innerHTML="";
 data.forEach(s=>{
   grid.innerHTML += `<div class="scheme"><h4>${s.title}</h4><p>${s.desc}</p><button class="orange small">Apply Now →</button> <button class="outline small">View Details</button></div>`;
 });
}

document.addEventListener("DOMContentLoaded", ()=>{
  showSchemes();
  showPage('home');
});

document.getElementById("form").addEventListener("submit", function(e){
 e.preventDefault();
 let name = document.getElementById("fullName").value || "Rahul";
 let age = document.getElementById("age").value || "28";
 let state = document.getElementById("state").value;
 let biz = document.getElementById("biz").value;
 let fund = document.getElementById("fund").value;
 document.getElementById("badge").innerText = `${name}, ${age}, ${state} | ${biz} | ${fund}`;
 showPage('schemesList');
});