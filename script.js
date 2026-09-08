function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'))
  document.getElementById(id).classList.add('active')
  window.scrollTo(0,0)
  // update profile summary from name
  if(id==='schemes'){
    let n=document.getElementById('name')?.value || 'Rahul'
    document.getElementById('profile-summary').innerText=`${n}, 28, Jaipur, Rajasthan | Startup | Up to 10L`
  }
}
// default home
showPage('home');