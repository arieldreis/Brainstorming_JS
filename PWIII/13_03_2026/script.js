function carregarUsuarios(){
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url).then(response => response.json()).then(users => {
        const lista = document.getElementById('listaUsuarios');

        users.forEach(user => {
            const item = document.createElement("li");
            item.textContent = `${user.name} - ${user.email}`;
            lista.appendChild(item);
        });
    }).catch(error => {
        console.error("Erro ao buscar os dados: ", error);
    })
} 