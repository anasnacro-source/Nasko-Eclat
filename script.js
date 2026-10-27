(function(){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll(".rv").forEach(function(el,i){el.style.transitionDelay=(i%4)*80+"ms";io.observe(el)});
document.getElementById("f").addEventListener("submit",function(ev){
ev.preventDefault();
var txt="Bonjour Nasko Éclat, je m’appelle "+document.getElementById("n").value+". Je souhaite un devis de nettoyage pour : "+document.getElementById("t").value+"."+(document.getElementById("m").value?" "+document.getElementById("m").value:"");
window.open("https://wa.me/22654822038?text="+encodeURIComponent(txt),"_blank","noopener");
});
})();
