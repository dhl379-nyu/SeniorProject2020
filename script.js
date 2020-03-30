<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

AOS.init({
  duration: 1200,
})

window.addEventListener('load', AOS.refresh)

if (document.readyState == 'complete')
{
    AOS.refresh();
}
