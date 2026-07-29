const nav=document.querySelector('.nav'),topButton=document.querySelector('.to-top');

addEventListener('scroll',()=>{nav?.classList.toggle('scrolled',scrollY>20);topButton?.classList.toggle('visible',scrollY>500)},{passive:true});
topButton?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

// Replace the temporary hero background and decorative QR with the supplied assets.
const heroBackground=document.querySelector('.hero-water');
if(heroBackground){heroBackground.style.background="linear-gradient(90deg,rgba(0,0,0,.18),rgba(0,0,0,.06)),url('hero-barquito-altamira.png') center 54% / cover no-repeat";heroBackground.style.filter='saturate(.74) brightness(.76)'}
const qr=document.querySelector('.qr');
if(qr){const realQr=document.createElement('img');realQr.className='qr';realQr.src='vp1-descarga.png';realQr.alt='Código QR para descargar VP1';qr.replaceWith(realQr)}

// On phones the phone mockup is placed below the hero copy instead of over it.
const mobileFix=document.createElement('style');
mobileFix.textContent='@media(max-width:800px){.hero{height:auto!important;min-height:950px!important}.hero-water{background-position:63% center!important}.hero-copy{top:95px!important}.hero-phone{top:auto!important;bottom:52px!important;left:calc(50% - 96px)!important;width:192px!important;height:396px!important}.scroll-hint{display:none!important}.qr{height:185px!important;width:185px!important;object-fit:contain!important;border:1px solid #e0dfd8!important;background:#fff!important}}@media(max-width:390px){.hero{min-height:920px!important}.hero-copy{top:88px!important}}';
document.head.append(mobileFix);
