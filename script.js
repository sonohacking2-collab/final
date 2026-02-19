let viewers = Math.floor(Math.random()*40000)+40000;
setInterval(()=>{
  viewers += Math.floor(Math.random()*300-150);
  if(viewers<1000) viewers=1000;
  document.getElementById("viewers").innerText = viewers.toLocaleString();
},2000);

// ================= POPUP =================
function openPopup(){
  document.getElementById("popup").style.display="flex";
}

// Close function not needed because cross now direct link
