const navBar = [
    {
        title: ' Home',
        link: 'index.html',
        icon: 'fa-house'
    },
    {
        title: ' Biblioteca',
        link: 'biblioteca.html',
        icon: 'fa-book'
    },
    {
        title: ' FAQ',
        link: 'faq.html',
        icon: 'fa-person-circle-question'
    },
    {
        title: ' Contato',
        link: 'contato.html',
        icon: 'fa-comments'
    },
    {
        title: ' Cadastro',
        link: 'formulario.html',
        icon: 'fa-arrow-right-to-bracket'
    }
]

function addNavItens(navItens) {
    const navBar = document.getElementById('navBarPages');

    navItens.forEach(item => {
        const box = document.createElement('div');
        box.classList.add('navItensPages');

        const link = document.createElement('a');
        link.setAttribute('href', item.link);

        const icon = document.createElement('i');
        icon.classList.add('fa-solid');
        icon.classList.add(item.icon);
        icon.classList.add('fa-xs');

        const text = document.createElement('span');
        text.textContent = item.title;

        link.appendChild(icon);
        link.appendChild(text);
        box.appendChild(link);
        navBar.appendChild(box);
    });
}

document.addEventListener("DOMContentLoaded", addNavItens(navBar));