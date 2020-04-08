const posts = [];

function criaPost() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const conteudo = document.getElementById("conteudo").value;
    const linkImagem = document.getElementById("imagem").value;

    if(titulo === "" || titulo === " " ||
       autor === "" || autor === " " ||
       conteudo === "" || conteudo === " ") {
        alert("Nenhum dos campos pode ser vazio!")
    } else {
        let novoPost = {
            titulo,
            autor,
            conteudo,
        };

        if(imagem !== "") {
          novoPost = {
              ...novoPost,
              imagem: linkImagem
          };
        }

        posts.push(novoPost);
        limpaCampos();
        mostraPost(novoPost);
    }
}

function mostraPost(post) {
    const sectionPosts = document.getElementById("posts");

    const titulo = "<h2>" + post.titulo + "</h2>";
    const autor = "<h3><i>" + post.autor + "</i></h3>";
    const conteudo = "<p>" + post.conteudo + "</p>";

    if("imagem" in post) {
        console.log("Tem imagem carai!")
        console.log(post.imagem);
        const imagem = "<img src='" + post.imagem + "'>";

        sectionPosts.innerHTML += `<div class="post">
        ${titulo}
        ${autor}
        ${imagem}
        ${conteudo}
        </div>`;
    } else {
        sectionPosts.innerHTML += `<div class="post">
            ${titulo}
            ${autor}
            ${conteudo}
            </div>`;
    }
}

function limpaCampos() {
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("conteudo").value = "";
    document.getElementById("imagem").value = "";
}