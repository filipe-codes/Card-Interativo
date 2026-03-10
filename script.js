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
]
const main = document.querySelector("main");
pessoas.forEach((pessoa, index )=> {
  const card = document.createElement("div");
  card.classList.add("card");

  const foto = document.createElement("img");  
  foto.classList.add("foto-card");
  foto.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  
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
  
  const seguidores = document.createElement("p");
  seguidores.classList.add("texto-card");
  seguidores.id = `seguidores-${index}`;           
  seguidores.textContent = `Seguidores: ${pessoa.seguidores}`;
  

  
  card.appendChild(foto); 
  card.appendChild(nome);
  card.appendChild(idade);
  card.appendChild(cargo);
  card.appendChild(cidade);
  card.appendChild(seguidores);
  card.appendChild(button);
  main.appendChild(card);
  
});

const buttons = document.querySelectorAll(".botao-card");
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Seguir") {
      button.textContent = "Seguindo";
      button.style.backgroundColor = "#4CAF50";
      pessoas[index].seguidores++;      
      const seguidores = document.getElementById(`seguidores-${index}`);
      seguidores.textContent = `Seguidores: ${pessoas[index].seguidores}`;
    } else {
      button.textContent = "Seguir";
      button.style.backgroundColor = "#008CBA";
      pessoas[index].seguidores--; 
      const seguidores = document.getElementById(`seguidores-${index}`);  
      seguidores.textContent = `Seguidores: ${pessoas[index].seguidores}`;     
    }
  });
});