function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
  if(id==='schemes'){
    let n=document.getElementById('name')?.value||'Rahul';
    document.getElementById('ps').innerText=n+', 28, Jaipur, Rajasthan | Startup | Up to 10L';
  }
}
showPage('home');