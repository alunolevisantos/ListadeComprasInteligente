# ListadeComprasInteligente

📌 Visão Geral

A Lista de Compras Inteligente é uma aplicação web simples e funcional que permite cadastrar itens com nome e preço, atualizando automaticamente o total estimado da compra.

O sistema salva os dados no LocalStorage, garantindo que a lista permaneça mesmo após atualizar ou fechar o navegador.

🚀 Funcionalidades

✔ Adicionar itens com nome e preço
✔ Excluir itens individualmente
✔ Soma automática do valor total
✔ Salvamento automático no navegador (LocalStorage)
✔ Mantém todos os dados mesmo após atualizar a página
✔ Interface simples, limpa e responsiva
✔ Uso intuitivo e rápido

Como Funciona a Lógica
🔹 1. Capturando e validando os dados
Quando o usuário clica no botão “Adicionar”, o JavaScript:
✔ Verifica se o nome não está vazio
✔ Converte o preço para número
✔ Adiciona um novo item no array itens


🔹 2. Exibindo os itens na tela
A função mostrar() cria a lista dinamicamente:
✔ Calcula o total
✔ Exibe cada item com botão para excluir
✔ Atualiza o valor total automaticamente

🔹 3. Excluindo itens
✔ Remove o item escolhido
✔ Atualiza a tela e salva tudo novamente

🔹 4. Salvando os dados no LocalStorage
O projeto usa o LocalStorage para que:
✔ Todos os itens permaneçam ao fechar a página
✔ Os dados carreguem automaticamente ao abrir novamente

🔹 5. Restaurando os dados ao iniciar
✔ Converte os dados salvos de volta para array
✔ Chama mostrar() para exibir tudo imediatamente

🛠 Tecnologias Utilizadas
HTML5 – Estrutura da interface
CSS3 – Design, responsividade e layout
JavaScript ES6+ – Funcionalidade e lógica da aplicação
LocalStorage – Armazenamento permanente no navegador

🎓 Fontes de Estudo e Inspiração
Lógica de Programação Web – Manipulação de DOM e boas práticas
Everton Dev – LocalStorage – Armazenamento e recuperação de dados
Larissa Kich – CSS – Layout e responsividade no CSS

🌟 Melhorias Futuras
✨ Editar itens já cadastrados
✨ Criar categorias para os produtos
✨ Tema claro/escuro
✨ Ordenação dos itens por preço ou nome
✨ Exportar a lista para PDF

👤 Autor
Levi Santos Vasconcelos
Desenvolvedor em formação 🚀
