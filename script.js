function addLink() {
    var title = document.getElementById('title').value;
    var url = document.getElementById('url').value;
    var description = document.getElementById('description').value; // Obtém a descrição do link
    var category = document.getElementById('category').value;
    
    // Formata o link como uma string concatenada
    var link = title + '|' + url + '|' + description + '|' + category + ';'; // Adiciona a descrição ao link

    // Recupera os links do localStorage ou inicializa como uma string vazia
    var links = localStorage.getItem('links') || '';

    // Adiciona o novo link à string de links
    links += link;

    // Armazena a string de links atualizada no localStorage
    localStorage.setItem('links', links);

    // Limpa os campos do formulário
    document.getElementById('title').value = '';
    document.getElementById('url').value = '';
    document.getElementById('description').value = ''; // Limpa o campo de descrição
    document.getElementById('category').value = '';
}


function editLink(index) {
    var linksString = localStorage.getItem('links') || '';
    var linksArray = linksString.split(';');

    var linkToEdit = linksArray[index].split('|');
    var newTitle = prompt('Digite o novo título:', linkToEdit[0]);
    if (newTitle !== null) {
        linkToEdit[0] = newTitle;
        linksArray[index] = linkToEdit.join('|');

        // Atualiza a string de links no localStorage
        localStorage.setItem('links', linksArray.join(';'));

        // Recarrega a página para atualizar os links exibidos
        location.reload();
    }
}

