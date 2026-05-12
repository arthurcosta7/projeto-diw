const data = {
    restaurantes: [
        {
            id: 1,
            nome: "Xapuri",
            categoria: "Mineira",
            endereco: "Rua Mandacaru, 140 - Belvedere, Belo Horizonte - MG",
            telefone: "(31) 3297-3124",
            horario: "Terça a Domingo: 12h - 16h / 18h - 23h",
            nota: 4.8,
            descricao: "Restaurante tradicional de comida mineira, com pratos caseiros e fogão a lenha.",
            site: "https://xapuri.com.br"
        },
        {
            id: 2,
            nome: "Glouton",
            categoria: "Contemporânea",
            endereco: "Rua Antônio de Albuquerque, 121 - Lourdes, Belo Horizonte - MG",
            telefone: "(31) 3287-3015",
            horario: "Terça a Domingo: 12h - 15h / 19h - 23h",
            nota: 4.7,
            descricao: "Casa do chef Léo Paixão com menu contemporâneo que valoriza insumos mineiros.",
            site: "https://glouton.com.br"
        },
        {
            id: 3,
            nome: "Vecchio Sogno",
            categoria: "Italiana",
            endereco: "Rua Alagoas, 1335 - Funcionários, Belo Horizonte - MG",
            telefone: "(31) 3226-7373",
            horario: "Terça a Domingo: 12h - 16h / 19h - 23h",
            nota: 4.6,
            descricao: "Restaurante italiano sofisticado com massas artesanais e carta de vinhos selecionada.",
            site: "https://vecchiosogno.com.br"
        },
        {
            id: 4,
            nome: "Alma Chef",
            categoria: "Gourmet",
            endereco: "Rua Gonçalves Dias, 1100 - Funcionários, Belo Horizonte - MG",
            telefone: "(31) 3269-1191",
            horario: "Segunda a Sábado: 12h - 15h / 19h - 23h",
            nota: 4.7,
            descricao: "Experiência gastronômica autoral do chef Alê Costa com foco em sabores mineiros.",
            site: "https://almachef.com.br"
        },
        {
            id: 5,
            nome: "Dona Lucinha",
            categoria: "Mineira",
            endereco: "Avenida Cristiano Machado, 2882 - Santa Inês, Belo Horizonte - MG",
            telefone: "(31) 3277-4445",
            horario: "Segunda a Sábado: 11h - 15h",
            nota: 4.5,
            descricao: "Buffet tradicional de comida mineira com porções generosas e sobremesas caseiras.",
            site: "https://donalucinha.com.br"
        },
        {
            id: 6,
            nome: "Taste-Vin",
            categoria: "Francesa",
            endereco: "Rua Curitiba, 231 - Lourdes, Belo Horizonte - MG",
            telefone: "(31) 3296-5771",
            horario: "Terça a Domingo: 12h - 15h / 19h - 23h",
            nota: 4.6,
            descricao: "Bistrô francês com pratos clássicos e carta de vinhos refinada.",
            site: "https://tastevin.com.br"
        },
        {
            id: 7,
            nome: "Cerva & Companhia",
            categoria: "Bar gastronômico",
            endereco: "Rua Levindo Lopes, 176 - Funcionários, Belo Horizonte - MG",
            telefone: "(31) 3258-1287",
            horario: "Terça a Domingo: 17h - 0h",
            nota: 4.4,
            descricao: "Bar com petiscos criativos, chopes artesanais e ambiente animado.",
            site: "https://cervaciecompanhia.com.br"
        },
        {
            id: 8,
            nome: "Gennaro",
            categoria: "Italiana",
            endereco: "R. Santa Catarina, 1235 - Lourdes, Belo Horizonte - MG",
            telefone: "(31) 3226-7373",
            horario: "Terça a Domingo: 12h - 16h / 19h - 23h",
            nota: 4.6,
            descricao: "Restaurante italiano sofisticado com massas artesanais e carta de vinhos selecionada.",
            site: "https://gennaro.com.br"
        }
    ]
};

function preencherTop5() {
    const top5List = document.getElementById('top5-list');


    const top5 = data.restaurantes
        .slice()
        .sort((a, b) => {
            if (b.nota !== a.nota) return b.nota - a.nota;
            return a.nome.localeCompare(b.nome, 'pt-BR', { sensitivity: 'base' });
        })
        .slice(0, 5);

    top5List.innerHTML = '';

    top5.forEach(restaurante => {
        const item = document.createElement('li');
        item.innerHTML = `
            <strong>${restaurante.nome}</strong>
            <span class="nota">${restaurante.nota.toFixed(1)}</span>
            <p>${restaurante.categoria}  ${restaurante.endereco}</p>
        `;
        top5List.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', preencherTop5);
