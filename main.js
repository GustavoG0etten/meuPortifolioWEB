
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        // Quando ele detectar que tem mais que 80px ele automaticamente adiciona a 
        // classe scroll ai header
        document.getElementById("navbar").classList.remove("scroll");
    } else {
        // Aqui quando o scroll for menor que os 80px mencionados acima ele remove 
        // a classe do header
        document.getElementById("navbar").classList.remove("scroll");
    }
}
