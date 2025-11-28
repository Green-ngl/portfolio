<script>
// Simple fade animation for sections
const sections = document.querySelectorAll("section");


const reveal = () => {
sections.forEach(sec => {
const top = sec.getBoundingClientRect().top;
if (top < window.innerHeight - 100) sec.style.opacity = 1;
});
};


window.addEventListener("scroll", reveal);
reveal();
</script>
