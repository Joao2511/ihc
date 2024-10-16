const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        // Alterna a classe "active"
        faq.classList.toggle("active");
        
        // Seleciona a imagem dentro do .faq clicado
        const img = faq.querySelector("img");
        
        // Verifica se o .faq está ativo e altera a imagem
        if (faq.classList.contains("active")) {
            img.src = "../src/menos.png"; // Altere para a imagem que você deseja quando ativo
        } else {
            img.src = "../src/mais.png"; // Volte para a imagem original
        }
    });
});