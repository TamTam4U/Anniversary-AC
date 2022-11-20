const music = document.getElementById('playMusic')

const open = document.querySelector(".profile")
const balon = document.querySelector('.balon')
const text = document.querySelector('balon-text')
const anim = document.querySelector('.affan')
const anim2 = document.querySelector('.affan2')
const dan = document.querySelector('.dan')
balon.addEventListener('click',function(){
    music.volume=1
    music.play()
    // open.style.display='flex'
    dan.style.display='flex'
    balon.style.display='none'
    anim.innerHTML='<div data-aos="flip-left"data-aos-easing="ease-out-cubic"data-aos-duration="2000"><div class="affan-img"><img src="img/affan.png" alt="affan"/></div><div class="nama">Muhammad Affan Said</div><div class="profesi">Korlap Kaderisasi 2021</div><div class="igeh">@m.affan.said</div></div>'

    dan.innerHTML='<div data-aos="fade-up"data-aos-anchor-placement="bottom-bottom">&</div>'

    anim2.innerHTML='<div data-aos="flip-left"data-aos-easing="ease-out-cubic"data-aos-duration="2000"><div class="affan-img"><img src="img/carin.png" alt="affan" /></div><div class="nama">Carin Akiela Amanda</div><div class="profesi">Medis Kaderisasi 2021</div><div class="igeh">@carinakielaaa</div></div>'
})
