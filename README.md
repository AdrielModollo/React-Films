# React films

## Script disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.
Abra [http://localhost:3001](http://localhost:3001) para visualizá-lo no navegador.

A página será recarregada sempre que você fizer alterações.
Você também poderá ver quaisquer erros de lint no console.

### `npm test`

Inicia o executor de teste no modo de observação interativo.
Consulte a seção sobre executando testes para obter mais informações.

### `npm run build`

Compila o aplicativo para produção na pasta build.
Ele agrupa o React corretamente no modo de produção e otimiza a compilação para obter o melhor desempenho.

A compilação é minimizada e os nomes dos arquivos incluem os hashes.
Seu aplicativo está pronto para ser implantado!
### `npm run eject`

**Nota: esta é uma operação unilateral. Depois de "ejetar", você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de compilação e as opções de configuração, poderá "ejetar" a qualquer momento. Este comando removerá a única dependência de compilação do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) direto para o seu projeto para que você tenha total controle sobre eles. Todos os comandos, exceto eject, ainda funcionarão, mas eles apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto, você está por sua conta e risco.

Você não precisa usar eject nunca. O conjunto de recursos selecionado é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que essa ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para isso.

## Leia Mais

### Estrutura

O repositório em questão trata-se de uma aplicação em React que lida com informações de filmes, permitindo ao usuário visualizar detalhes, alugar ou adicionar novos filmes. A estrutura de arquivos está organizada da seguinte forma:

````
- O arquivo global.css contém estilos CSS globais para a aplicação.
- O arquivo index.js é o ponto de entrada da aplicação, que renderiza o componente App na página.
- A pasta pages contém subpastas para cada página da aplicação, cada uma contendo um arquivo index.js e um arquivo styles.js.
- O diretório Details contém os arquivos index.js e styles.js, responsáveis pela página de detalhes de um filme.
- O diretório Home contém os arquivos index.js e styles.js, responsáveis pela página inicial da aplicação.
- O diretório Login contém três arquivos: authContext.js, que implementa o contexto de autenticação da aplicação; authLogin.js, responsável pela página de login; e styles.js, que contém estilos específicos da página de login.
- O diretório Rentals contém o arquivo createRental.js, responsável pela página de criação de um novo aluguel.
````

Ao analisar o código em cada arquivo, é possível identificar as seguintes funcionalidades:

````
- global.css: contém estilos CSS globais para a aplicação, como definições de fontes, cores e margens.
- index.js: define o componente App, que é o componente principal da aplicação. Ele é renderizado na página e é responsável por lidar com as rotas e renderizar os componentes correspondentes a cada rota.
- pages/Home/index.js: define o componente Home, que é responsável pela página inicial da aplicação. Ele renderiza uma lista de filmes obtidos da API e permite ao usuário clicar em um filme para ver seus detalhes ou alugá-lo.
- pages/Home/styles.js: contém estilos específicos da página inicial, como definições de margens, tamanhos e cores.
- pages/Details/index.js: define o componente Details, que é responsável pela página de detalhes de um filme. Ele obtém as informações do filme a partir da API e renderiza essas informações na página.
- pages/Details/styles.js: contém estilos específicos da página de detalhes, como definições de margens, tamanhos e cores.
- pages/Login/authContext.js: define o contexto de autenticação da aplicação, que permite compartilhar informações de autenticação entre os componentes.
- pages/Login/authLogin.js: define o componente AuthLogin, que é responsável pela página de login da aplicação. Ele recebe as credenciais do usuário e faz a autenticação usando a API.
- pages/Login/styles.js: contém estilos específicos da página de login, como definições de margens, tamanhos e cores.
- pages/Rentals/createRental.js: define o componente CreateRental, que é responsável pela página de criação de um novo aluguel. Ele permite ao usuário escolher o filme a ser alugado e o período de aluguel, e faz a comunicação com a API para criar o aluguel.
- pages/styles.js: contém estilos compartilhados entre as páginas da aplicação, como definições de margens, tamanhos e cores.
````

### Libs

Além disso, é importante destacar que a aplicação faz uso de algumas bibliotecas externas para implementar certas funcionalidades, como por exemplo:

````
- react-router-dom: biblioteca utilizada para lidar com as rotas da aplicação e renderizar os componentes correspondentes a cada rota.
- axios: biblioteca utilizada para fazer requisições HTTP para a API que fornece os dados dos filmes e os endpoints de autenticação e aluguel.
- styled-components: O arquivo styles.js é utilizado para definir os estilos do componente React que está presente no arquivo index.js da mesma pasta. Esses estilos são definidos utilizando a sintaxe do styled-components, que é uma biblioteca de CSS-in-JS para o React.
````

### Rotas

As rotas utilizadas em cada arquivo são:

````
- pages/Home/index.js: a rota '/' é utilizada para renderizar o componente Home, responsável pela página inicial da aplicação. Este componente renderiza uma lista de filmes obtidos da API e permite ao usuário clicar em um filme para ver seus detalhes ou alugá-lo.
- pages/Details/index.js: a rota '/films/:id' é utilizada para renderizar o componente Details, responsável pela página de detalhes de um filme. Este componente obtém as informações do filme a partir da API e renderiza essas informações na página.
- pages/Login/authLogin.js: a rota '/login' é utilizada para renderizar o componente AuthLogin, responsável pela página de login da aplicação. Este componente recebe as credenciais do usuário(email e password) e faz a autenticação usando a API.
- pages/Rentals/createRental.js: a rota '/rentals/new' é utilizada para renderizar o componente CreateRental, responsável pela página de criação de um novo aluguel. Este componente permite ao usuário escolher o filme a ser alugado e o período de aluguel, e faz a comunicação com a API para criar o aluguel.
````

Além disso, o arquivo index.js também define uma rota com caminho '*', que é utilizada como rota curinga para lidar com casos em que a rota acessada pelo usuário não existe na aplicação. Lembrando que api está integrada com o back-end, onde é feito a integração com api [themoviedb](https://developers.themoviedb.org/3/movies) para consulta de filmes!

### Telas

![Login](https://www.imagemhost.com.br/image/rRQ67C)
![Home](https://www.imagemhost.com.br/image/rRQAYL)
![Details](https://www.imagemhost.com.br/image/rRQIIB)