const form = document .getElementById ('form-telefone')

let Linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();  

    const inputNomeIndividuo = document.getElementById ('Nome-Individuo');
    const inputNúmeroIndividuo = document.getElementById ('Número-Individuo');

    let Linha = '<tr>';
    Linha += `<td>${inputNomeIndividuo.value}</td>`;
    Linha += `<td>${inputNúmeroIndividuo.value}</td>`;
    Linha += '</tr>';


    Linhas += Linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = Linhas;

    inputNomeIndividuo.value = '';
    inputNúmeroIndividuo.value = '';

});
