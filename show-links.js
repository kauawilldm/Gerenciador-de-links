document.addEventListener('DOMContentLoaded', function() {
    // Recupera a string de links do localStorage e os exibe na página
    var linksString = localStorage.getItem('links') || '';
    var linksArray = linksString.split(';');
    var trabalhoLinks = document.getElementById('trabalho-links');
    var estudoLinks = document.getElementById('estudo-links');
    var lazerLinks = document.getElementById('lazer-links');
    var outrosLinks = document.getElementById('outros-links');

    linksArray.forEach(function(linkString) {
        if (linkString.trim() !== '') {
            var linkParts = linkString.split('|');
            var linkElement = document.createElement('li');
            var linkTitle = document.createElement('div');
            linkTitle.textContent = "Título: " + linkParts[0]; // Adiciona o título
            linkTitle.classList.add('link-title'); // Adiciona a classe para estilização
            var linkDescription = document.createElement('div');
            linkDescription.textContent = "Descrição: " + (linkParts[2] ? linkParts[2] : ''); // Adiciona a descrição, se existir
            linkDescription.classList.add('link-description'); // Adiciona a classe para estilização
            var linkUrl = document.createElement('a'); // Altera de <div> para <a>
            linkUrl.href = linkParts[1]; // Define o atributo href com o valor da URL
            linkUrl.textContent = "URL: " + linkParts[1]; // Adiciona a URL
            linkUrl.classList.add('link-url'); // Adiciona a classe para estilização
            var editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.classList.add('edit-button'); // Adiciona a classe para estilização
            editButton.onclick = function() {
                editLink(linksArray.indexOf(linkString));
            };
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.classList.add('delete-button'); // Adiciona a classe para estilização
            deleteButton.onclick = function() {
                deleteLink(linksArray.indexOf(linkString)); // Passa o índice do link para a função deleteLink
            };
            linkElement.appendChild(linkTitle);
            linkElement.appendChild(linkDescription);
            linkElement.appendChild(linkUrl); // Adiciona o elemento <a> ao elemento <li>
            linkElement.appendChild(editButton);
            linkElement.appendChild(deleteButton);

            switch (linkParts[3]) {
                case 'Trabalho':
                    trabalhoLinks.appendChild(linkElement);
                    break;
                case 'Estudo':
                    estudoLinks.appendChild(linkElement);
                    break;
                case 'Lazer':
                    lazerLinks.appendChild(linkElement);
                    break;
                case 'Outros':
                    outrosLinks.appendChild(linkElement);
                    break;
                default:
                    break;
            }
        }
    });
});


function deleteLink(index) {
    var linksString = localStorage.getItem('links') || '';
    var linksArray = linksString.split(';');
    var confirmation = confirm('Tem certeza que deseja excluir este link?');
    
    if (confirmation) {
        // Remove o link da array de links
        linksArray.splice(index, 1);

        // Atualiza a string de links no localStorage
        localStorage.setItem('links', linksArray.join(';'));

        // Recarrega a página para atualizar os links exibidos
        location.reload();
    }
}

