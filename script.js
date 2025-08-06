const products = [
  //Cães
  { nome: "Alpo Adulto", codigo: "18Kg", preco: "R$170", categoria: "Cães" },
  { nome: "Bidog Adulto", codigo: "25Kg", preco: "R$150", categoria: "Cães" },
  { nome: "Bioselect Adulto", codigo: "15Kg", preco: "R$199,90", categoria: "Cães" },
  { nome: "Bonzo Adulto", codigo: "18Kg", preco: "R$125", categoria: "Cães" },
  { nome: "Canister Almôndega Adulto", codigo: "25Kg", preco: "R$145", categoria: "Cães" },
  { nome: "Canister Carne, Leite e Cereais Filhote", codigo: "25Kg", preco: "R$190", categoria: "Cães" },
  { nome: "Canister Frango com Milho Filhote", codigo: "25Kg", preco: "R$190", categoria: "Cães" },
  { nome: "Dog Chow Raças Grandes e Médios Adulto", codigo: "20Kg", preco: "R$230", categoria: "Cães" },
  { nome: "Dog Chow Raças Pequenas e Médias Adulto", codigo: "20Kg", preco: "R$230", categoria: "Cães" },
  { nome: "Dog Chow Raças Papita Todos os Tamanhos Filhote", codigo: "20Kg", preco: "R$230", categoria: "Cães" },
  { nome: "Dominium Adulto", codigo: "15Kg", preco: "R$125", categoria: "Cães" },
  { nome: "Golden Fórmula", codigo: "15Kg", preco: "R$190", categoria: "Cães" },
  { nome: "Golden Power Trainer", codigo: "15Kg", preco: "R$210", categoria: "Cães" },
  { nome: "Golden Filhote", codigo: "10Kg", preco: "R$158", categoria: "Cães" },
  { nome: "Kanina Adulto", codigo: "15Kg", preco: "R$135", categoria: "Cães" },
  { nome: "Kanina Filhote", codigo: "15Kg", preco: "R$158", categoria: "Cães" },
  { nome: "Magic Pet Adulto", codigo: "25Kg", preco: "R$165", categoria: "Cães" },
  { nome: "Nature Fórmula", codigo: "15Kg", preco: "R$210", categoria: "Cães" },
  { nome: "Nature Pró", codigo: "15Kg", preco: "R$230", categoria: "Cães" },
  { nome: "Nino Dog", codigo: "25Kg", preco: "R$125", categoria: "Cães" },
  { nome: "Ped Dog", codigo: "25Kg", preco: "R$120", categoria: "Cães" },
  { nome: "Pedigree Adulto Porte Pequeno", codigo: "10Kg", preco: "R$125", categoria: "Cães" },
  { nome: "Peddy Carne", codigo: "25Kg", preco: "R$145", categoria: "Cães" },
  { nome: "Pleno", codigo: "15Kg", preco: "R$100", categoria: "Cães" },
  { nome: "Pleno", codigo: "20Kg", preco: "R$125", categoria: "Cães" },
  { nome: "Receita Cachorro", codigo: "15Kg", preco: "R$165", categoria: "Cães" },
  { nome: "Tutano", codigo: "15Kg", preco: "R$165", categoria: "Cães" },
  { nome: "Vitta", codigo: "15Kg", preco: "R$180", categoria: "Cães" },
  { nome: "Zuppy", codigo: "20Kg", preco: "R$199,90", categoria: "Cães" },
  //Gatos
  { nome: "Canister Peixe e Vegetais", codigo: "25Kg", preco: "R$190", categoria: "Gatos" },
  { nome: "Good Friends Peixe e Frutas Amarelas", codigo: "20Kg", preco: "R$180", categoria: "Gatos" },
  { nome: "Snow Cat Sabores do mar / Peixe", codigo: "25Kg", preco: "R$200", categoria: "Gatos" }, 
  // Frangos, equinos, suínos...
  { nome: "Frango Crescimento Especial F2", codigo: "40Kg", preco: "R$125", categoria: "Frangos, Suínos, Equinos e outros..." },
  { nome: "Frango Crescimento T2", codigo: "20Kg", preco: "R$60", categoria: "Frangos, Suínos, Equinos e outros..." },
  { nome: "Frango Acabamento", codigo: "20Kg", preco: "R$55", categoria: "Frangos, Suínos, Equinos e outros..." },
  { nome: "Postura", codigo: "40Kg", preco: "R$130", categoria: "Frangos, Suínos, Equinos e outros..." },
  { nome: "Postura Poidera", codigo: "20Kg", preco: "R$98", categoria: "Frangos, Suínos, Equinos e outros..." },
  { nome: "Vermicina Granulada", codigo: "40Kg", preco: "R$130", categoria: "Frangos, Suínos, Equinos e outros..." },
  { nome: "Vermicina Triturada", codigo: "40Kg", preco: "R$130", categoria: "Frangos, Suínos, Equinos e outros..." },
  { nome: "Pré Forte", codigo: "20Kg", preco: "R$95", categoria: "Frangos, Suínos, Equinos e outros..." },
  { nome: "Milho inteiro", codigo: "30Kg", preco: "R$65", categoria: "Frangos, Suínos, Equinos e outros..." },
  { nome: "Milho Quebrado", codigo: "40Kg", preco: "R$95", categoria: "Frangos, Suínos, Equinos e outros..." },
  { nome: "Milho Muido", codigo: "50Kg", preco: "R$100", categoria: "Frangos, Suínos, Equinos e outros..." },
  { nome: "Farelo de Soja", codigo: "50Kg", preco: "R$165", categoria: "Frangos, Suínos, Equinos e outros..." },
  { nome: "Farelo de Trigo", codigo: "30Kg", preco: "R$65", categoria: "Frangos, Suínos, Equinos e outros..." },
  { nome: "Mixtão Suíno", codigo: "30Kg", preco: "R$75", categoria: "Frangos, Suínos, Equinos e outros..." },
  { nome: "Suíno Crescimento", codigo: "40Kg", preco: "R$120", categoria: "Frangos, Suínos, Equinos e outros..." },
  { nome: "Borra de Coco", codigo: "50Kg", preco: "R$130", categoria: "Frangos, Suínos, Equinos e outros..." },
  //PEIXES PEIXES PEIXES PEIXES
  { nome: "Peixe 28%", codigo: "30Kg", preco: "R$90", categoria: "Peixes" },
  { nome: "Peixe 32%", codigo: "30Kg", preco: "R$95", categoria: "Frangos, Suínos, Equinos e outros..." },
  { nome: "Peixe 36%", codigo: "30Kg", preco: "R$145", categoria: "Peixes" },
  { nome: "Peixe 40%", codigo: "30Kg", preco: "R$195", categoria: "Frangos, Suínos, Equinos e outros..." },
  // TELAS TELAS TELAS TELAS
{ nome: "Tela Pinteiro Plástico", codigo: "1m", preco: "R$275", categoria: "Telas" },
{ nome: "Tela Viveiro Plástico", codigo: "1m", preco: "R$275", categoria: "Telas" },
{ nome: "Tela Galinheiro Plástico", codigo: "1m", preco: "R$275", categoria: "Telas" },
//
{ nome: "Tela Pinteiro Plástico", codigo: "1,5m", preco: "R$385", categoria: "Telas" },
{ nome: "Tela Viveiro Plástico", codigo: "1,5m", preco: "R$385", categoria: "Telas" },
{ nome: "Tela Galinheiro Plástico", codigo: "1,5m", preco: "R$385", categoria: "Telas" },
//
{ nome: "Tela Pinteiro Galvanizada", codigo: "1m", preco: "R$550", categoria: "Telas" },
{ nome: "Tela Viveiro Galvanizada", codigo: "1m", preco: "R$600", categoria: "Telas" },
{ nome: "Tela Galinheiro Galvanizada", codigo: "1,5m", preco: "R$350", categoria: "Telas" },
{ nome: "Tela Pinteiro Galvanizada", codigo: "1,5m", preco: "R$690", categoria: "Telas" },
{ nome: "Tela Viveiro Galvanizada", codigo: "1,5m", preco: "R$850", categoria: "Telas" },
];

function updateTable(data) {
  const tbody = document.querySelector('#productTable tbody');
  tbody.innerHTML = '';
  for (let p of data) {
    const row = `<tr><td>${p.nome}</td><td>${p.codigo}</td><td>${p.preco}</td></tr>`;
    tbody.innerHTML += row;
  }
}

function filtrarProdutos() {
  const termo = document.getElementById('search').value.toLowerCase();
  const categoria = document.getElementById('categorySelect').value;

  const filtrados = products.filter(p => {
    const correspondeBusca = p.nome.toLowerCase().includes(termo) || p.codigo.toLowerCase().includes(termo);
    const correspondeCategoria = categoria === '' || p.categoria === categoria;
    return correspondeBusca && correspondeCategoria;
  });

  updateTable(filtrados);
}

document.getElementById('search').addEventListener('input', filtrarProdutos);
document.getElementById('categorySelect').addEventListener('change', filtrarProdutos);

updateTable(products);
