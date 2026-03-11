const pessoas = [
  { nome: "Lucas Oliveira", idade: 28, cargo: "Dev Frontend", cidade: "São Paulo", seguidores: Math.floor(Math.random() * 1000) },
  { nome: "Mariana Costa", idade: 32, cargo: "Dev Backend", cidade: "Rio de Janeiro", seguidores: Math.floor(Math.random() * 1000) },
  { nome: "Rafael Souza", idade: 25, cargo: "Dev Fullstack", cidade: "Belo Horizonte", seguidores: Math.floor(Math.random() * 1000) },
  { nome: "Fernanda Lima", idade: 30, cargo: "UX Designer", cidade: "Curitiba", seguidores: Math.floor(Math.random() * 1000) },
  { nome: "Bruno Alves", idade: 35, cargo: "Dev Mobile", cidade: "Porto Alegre", seguidores: Math.floor(Math.random() * 1000) },
  { nome: "Camila Rocha", idade: 27, cargo: "Dev Frontend", cidade: "Fortaleza", seguidores: Math.floor(Math.random() * 1000) },
  { nome: "Diego Martins", idade: 31, cargo: "DevOps", cidade: "Recife", seguidores: Math.floor(Math.random() * 1000) },
  { nome: "Juliana Ferreira", idade: 29, cargo: "Data Engineer", cidade: "Salvador", seguidores: Math.floor(Math.random() * 1000) },
  { nome: "Thiago Nunes", idade: 26, cargo: "Dev Backend", cidade: "Manaus", seguidores: Math.floor(Math.random() * 1000) },
  { nome: "Patrícia Gomes", idade: 33, cargo: "Tech Lead", cidade: "Brasília", seguidores: Math.floor(Math.random() * 1000) },
];

const main = document.querySelector("main");
atualizaPessoas();

const formCadastro = document.querySelector("#formCadastro");
formCadastro.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.querySelector("#nome").value;
  const fotoInput = document.querySelector("#foto");
  const idade = document.querySelector("#idade").value;
  const profissao = document.querySelector("#profissao").value;
  const cidade = document.querySelector("#cidade").value;

  let fotoURL = "";
  if (fotoInput.files && fotoInput.files[0]) {
    fotoURL = URL.createObjectURL(fotoInput.files[0]);
  }

  const novaPessoa = {
    nome,
    idade: parseInt(idade),
    cargo: profissao,
    cidade,
    seguidores: Math.floor(Math.random() * 1000),
    foto: fotoURL
  };
  pessoas.push(novaPessoa);

  main.innerHTML = "";
  atualizaPessoas();
  formCadastro.reset();
});

function atualizaPessoas() {
  pessoas.forEach((pessoa, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const foto = document.createElement("img");
    foto.classList.add("foto-card");
    foto.src = pessoa.foto || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlwkUTsaWA_zSj0oFI7sbKYXqs-ih3b0_Bg&s__";
    foto.alt = `Foto de ${pessoa.nome}`;

    const nome = document.createElement("h2");
    nome.classList.add("titulo-card");
    nome.textContent = pessoa.nome;

    const idade = document.createElement("p");
    idade.classList.add("texto-card");
    idade.textContent = `Idade: ${pessoa.idade}`;

    const cargo = document.createElement("p");
    cargo.classList.add("texto-card");
    cargo.textContent = `Cargo: ${pessoa.cargo}`;

    const cidade = document.createElement("p");
    cidade.classList.add("texto-card");
    cidade.textContent = `Cidade: ${pessoa.cidade}`;

    const seguidores = document.createElement("p");
    seguidores.classList.add("texto-card");
    seguidores.id = `seguidores-${index}`;
    seguidores.textContent = `Seguidores: ${pessoa.seguidores}`;

    const button = document.createElement("button");
    button.classList.add("botao-card");
    button.textContent = "Seguir";
    button.style.marginRight = "10px";

    button.addEventListener("click", () => {
      if (button.textContent === "Seguir") {
        button.textContent = "Seguindo";
        button.style.backgroundColor = "#4CAF50";
        pessoa.seguidores++;
        seguidores.textContent = `Seguidores: ${pessoa.seguidores}`;
      } else {
        button.textContent = "Seguir";
        button.style.backgroundColor = "#007BFF";
        pessoa.seguidores--;
        seguidores.textContent = `Seguidores: ${pessoa.seguidores}`;
      }
    });

    const buttonRemover = document.createElement("button");
    buttonRemover.classList.add("botao-card", "botao-remover");
    buttonRemover.textContent = "Remover";

    buttonRemover.addEventListener("click", () => {
      const indexAtual = pessoas.indexOf(pessoa);

      if (pessoas.length === 1) {
        alert("Não é possível remover a última pessoa.");
      } else {
        pessoas.splice(indexAtual, 1);
        main.innerHTML = "";
        atualizaPessoas();
      }
    });

    const containerBotoes = document.createElement("div");
    containerBotoes.classList.add("container-botoes");
    containerBotoes.appendChild(button);
    containerBotoes.appendChild(buttonRemover);

    card.appendChild(foto);
    card.appendChild(nome);
    card.appendChild(idade);
    card.appendChild(cargo);
    card.appendChild(cidade);
    card.appendChild(seguidores);
    card.appendChild(containerBotoes);
    main.appendChild(card);
  });
}