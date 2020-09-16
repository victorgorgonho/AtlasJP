# Teste para frontend

## Instruções iniciais

Parabéns por chegar até aqui. Agora, seguem algumas instruções para o teste:
<ol>
<li>Você deverá clonar o projeto para seu git, seja ele diretamente, ou clonando para sua máquina e inserindo outra origem;</li>
<li>Existem arquivos de <i>lint</i> dentro do projeto que devem ser utilizados para organização do seu código. Para isso, verifique as extensões do seu VSCode se suportam os mesmos;</li>
<li>É importante que, na pasta <b>public</b>, você insira seu nome juntamente à aplicação e altere as imagens da logo da plataforma para alguma do seu gosto.</li>
<li>Utilize ao máximo os componentes do Bootstrap que achar necessário, podendo estilizá-los da sua maneira.</li>
</ol>

## Scripts disponíveis

Na aplicação teste, você deverá executar os comandos oferecidos pelo <b>yarn</b>
como <i>install</i>, <i>start</i>, e etc.
Por padrão, a aplicação será executada em [http://localhost:3000](http://localhost:3000).

## Arquitetura da aplicação

A aplicação possui uma arquitetura intuitiva e genérica para os diversos tipos de componentes, sendo estes separados por pastas e arquivos com nomes sugestivos, como mostram os exemplos dentro do projeto.

### Pastas

<ul>
<li><b>components:</b> Pastas de componentes criados na aplicação. Um conjunto de componentes forma um <b>container</b>; </li>
<li><b>containers:</b> Pastas de containers que agrupam um conjunto de <b>components</b>; </li>
<li><b>css:</b> Folhas de estilo de componentes das dependências da aplicação; </li>
<li><b>data:</b> Arquivos utilizados dentro da aplicação; </li>
<li><b>environment:</b> Informações como versão da aplicação e variáveis de ambiente; </li>
<li><b>fonts:</b> Fontes de terceiros utilizadas na aplicação; </li>
<li><b>images:</b> Imagens utilizadas na aplicação; </li>
<li><b>routes:</b> Rotas públicas e privadas da aplicação; </li>
<li><b>services:</b> Serviços para a aplicação como <i>auth</i> para autenticação, <i>functions</i> para funções genéricas, <i>mask</i> para máscaras de inputs, <i>types</i> para tipos de dados e <i>validation</i> para validações; </li>
<li><b>store:</b> Redux com <i>Ducks Pattern</i>, caso ache necessário. </li>
</ul>

### Arquivos 

<ul>
<li><b>common:</b> Componentes de estilo que serão herdados na aplicação como um todo, como <i>body</i>, <i>font-family</i> e etc; </li>
<li><b>mixin:</b> Cores e efeitos que serão importadas nos arquivos de estilização de cada componente caso necessário. </li>
</ul>

### Components e Containers

Cada componente e container criado dentro da aplicação deve conter a mesma estrutura dos modelos de exemplo, sendo eles o componente Example e o container ExampleExample.

Para estilização, caso prefira utilizar Styled Components ao invés de Sass, o uso será permitido.

## Atividade

Baseado na geografia de João Pessoa - PB, você receberá na pasta <b>data</b> um arquivo em JSON contendo uma lista de zonas que possuem um conjunto de bairros únicos da cidade. As zonas são representadas pela sua numeração de id, sendo "9ª zona" a <i>zone</i> de número 9, por exemplo, e o bairro dentro da zona representado pelo seu nome, como "Varadouro".

Para identificar um morador da cidade, o sistema deverá conter uma área para login, que autentica um usuário e permite que ele envie uma mensagem para um dos bairros listados pela plataforma. Haverá uma área para o usuário autenticado visualizar seu nome caso esteja logado na plataforma, validando assim seu login.

O usuário não logado na plataforma poderá pesquisar (numa barra de pesquisa) por algum bairro de forma genérica estilo Google, ou seja, você receberá a informação do campo pesquisa e fará uma busca genérica dentro dos dados fornecidos.

Ao selecionar um bairro de determinada zona, o usuário poderá escrever uma mensagem e enviar para o respectivo bairro apenas se o mesmo estiver logado no sistema. Caso não esteja, o sistema deve solicitar que seja feito o login através de uma modal e, após feito o login, permitir o envio da mensagem.

O objetivo do sistema é coletar uma mensagem sobre um bairro selecionado pelo usuário autenticado na plataforma, permitindo que ele encontre o bairro através de listagem dos dados com zonas como categorias e os bairros sendo subcategorias, e utilizando barra de busca para todos os dados existentes nas informações fornecidas, inserindo estas informações no formulário de envio de mensagem após o usuário selecionar.

A mensagem deve ser exibida em uma modal, identificando a zona selecionada, o id e nome do bairro, o nome do usuário e a respectiva mensagem.

## Observações

<ul>
<li> A autenticação é <b>estática</b>, ou seja, você irá inventar um login e senha para acessar a área privada da plataforma que exiba seu nome.</li>
<li> O login pode ser feito utilizando armazenamento de informações na LocalStorage, para que haja atualização da página e não perca o acesso; </li>
<li> Existe um arquivo chamado <i>auth</i> na pasta <b>services</b> que contém um modelo funcional de validação de login (se está logado ou não) baseado em token; </li>
<li> Dentro da <b>store</b>, existe um componente de usuário base usando Redux para que você insira as ações ou informações que desejar; </li>
<li> É aconselhável que a autenticação seja feita utilizando Redux ou ContextAPI; </li>
<li> Todas as variáveis e funções deverão ser nomeadas em <b>inglês</b>, de modo 
que seja – minimamente – compreensível; </li>
<li> A arquitetura da aplicação base deve ser respeitada para criar os componentes de sua aplicação;</li>
<li> É fundamental que os comentários no código sejam o mais compreensível e menos verboso possível.</li>
</ul>
