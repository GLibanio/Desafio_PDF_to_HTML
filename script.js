document.addEventListener('DOMContentLoaded', () => {

    const lightboxLinks = document.querySelectorAll('.lightbox-link');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
    const closeBtn = document.querySelector('.close-btn');

    lightboxLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const imageId = link.dataset.id;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxContent) {
            lightbox.style.display = 'none';
        }
    });

    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownToggle.addEventListener('click', () => {
        dropdownContent.classList.toggle('active');
        dropdownToggle.classList.toggle('active');
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
    
    const glossaryTerms = document.querySelectorAll('.glossary-term');

    const definitions = {
        'equacao-2-grau': {
            title: 'Equação do 2º grau',
            definition: 'É denominada forma geral, forma normal ou, ainda, forma reduzida a equação do 2º grau que esteja escrita na forma de ax² + bx + c = 0, com a ≠ 0.'
        }
    };

    glossaryTerms.forEach(term => {
        const popup = document.createElement('div');
        popup.classList.add('glossary-popup');
        term.appendChild(popup);

        let timeoutId;

        term.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId);
            const termKey = term.dataset.term;
            const definition = definitions[termKey];

            if (definition) {
                popup.innerHTML = `<h4>${definition.title}</h4><p>${definition.definition}</p>`;
                popup.style.display = 'block';
            }
        });

        term.addEventListener('mouseleave', () => {
            timeoutId = setTimeout(() => {
                popup.style.display = 'none';
            }, 300); 
        });

        popup.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId);
        });
        
        popup.addEventListener('mouseleave', () => {
            popup.style.display = 'none';
        });

    });
});