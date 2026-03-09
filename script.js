const pessoas = [
  { nome: "Lucas Oliveira", idade: 28, cargo: "Dev Frontend", cidade: "São Paulo" },
  { nome: "Mariana Costa", idade: 32, cargo: "Dev Backend", cidade: "Rio de Janeiro" },
  { nome: "Rafael Souza", idade: 25, cargo: "Dev Fullstack", cidade: "Belo Horizonte" },
  { nome: "Fernanda Lima", idade: 30, cargo: "UX Designer", cidade: "Curitiba" },
  { nome: "Bruno Alves", idade: 35, cargo: "Dev Mobile", cidade: "Porto Alegre" },
  { nome: "Camila Rocha", idade: 27, cargo: "Dev Frontend", cidade: "Fortaleza" },
  { nome: "Diego Martins", idade: 31, cargo: "DevOps", cidade: "Recife" },
  { nome: "Juliana Ferreira", idade: 29, cargo: "Data Engineer", cidade: "Salvador" },
  { nome: "Thiago Nunes", idade: 26, cargo: "Dev Backend", cidade: "Manaus" },
  { nome: "Patrícia Gomes", idade: 33, cargo: "Tech Lead", cidade: "Brasília" },
]

const main = document.querySelector("main");
pessoas.forEach(pessoa => {
  const card = document.createElement("div");
  card.classList.add("card");

  const foto = document.createElement("img");  
  foto.classList.add("foto-card");
  foto.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  foto.width = 300;
  foto.height = 250;
  
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

  const button = document.createElement("button");
  button.classList.add("botao-card");
  button.textContent = "Seguir";    
  

  
  card.appendChild(foto); 
  card.appendChild(nome);
  card.appendChild(idade);
  card.appendChild(cargo);
  card.appendChild(cidade);
  main.appendChild(card);
  card.appendChild(button);
});

const buttons = document.querySelectorAll(".botao-card");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.textContent === "Seguir") {
      button.textContent = "Seguindo";
      button.style.backgroundColor = "#4CAF50";
    } else {
      button.textContent = "Seguir";
      button.style.backgroundColor = "#008CBA";
    }
  });
});