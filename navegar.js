// Função para alternar a visibilidade do menu mobile
function animarMenu() {
    const menu = document.getElementById('menu-mobile');
    menu.classList.toggle('abrir');
    const btnAnimar = document.getElementById('btn-menu-mobile');
    btnAnimar.classList.toggle('ativo');
}

// Função para rolar para a seção correspondente
function navigateTo(sectionName) {
    // Ajusta o nome da seção para corresponder à classe
    const sectionClassMap = {
        'Home': 'topo-do-site',
        'Servicos': 'especialidades',
        'Sobre': 'sobre',
        'Projetos': 'portifolio',
        'Contato': 'formulario',
    };
    const targetClass = sectionClassMap[sectionName];
    
    // Seleciona e rola para a seção de forma suave
    if (targetClass) {
        const targetSection = document.querySelector(`.${targetClass}`);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Adiciona equivalente aos botões do menu mobile
document.querySelectorAll('.menu-mobile li a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        navigateTo(link.textContent);
    });
});

// Adiciona equivalente ao botão de contato
document.querySelector('.btn-contato a').addEventListener('click', (event) => {
    event.preventDefault();
    navigateTo('Contato');
});

