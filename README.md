# Projeto MyTasks

Bem-vindo!
Este é o frontend do Projeto MyTask, criado inteiramente por mim. Um CRUD onde é possível pesquisar, deletar, criar e atualizar tarefas.

## Tecnologias Usadas

![TypeScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![REACT-ICONS](https://img.shields.io/badge/React_Icons-0F0F0F?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)



## Um Pouco de Cada Tecnologia

Criar um projeto usando as seguintes tecnologias foi uma experiência incrivelmente enriquecedora:

- **JavaScript**: A linguagem de programação dinâmica e interpretada trouxe flexibilidade e facilidade de uso para o projeto. Sua natureza orientada a eventos tornou a manipulação e interação da interface do usuário suaves e intuitivas. Isso resultou em um desenvolvimento mais rápido e uma experiência do usuário aprimorada.

- **React**: Permitiu a criação de componentes reutilizáveis e dinâmicos, tornando o código mais organizado e a interface do usuário mais interativa.

- **React-Icons**: Incorporou uma grande variedade de ícones acessíveis e personalizáveis ao projeto, melhorando a estética e a usabilidade. A capacidade de importar apenas os ícones usados ajudou a manter o tamanho do pacote pequeno, resultando em tempos de carregamento mais rápidos e melhor desempenho geral da aplicação.

- **Styled Components**: Trouxe uma abordagem única para estilizar componentes React. Isso permitiu que o estilo fosse uma parte integral do componente, melhorando a legibilidade do código e facilitando a manutenção do estilo.

- **Docker**: O uso do Docker no projeto simplificou o processo de configuração e gerenciamento do ambiente de desenvolvimento da aplicação. Ao containerizar a aplicação e suas dependências, o Docker garantiu consistência em vários ambientes de desenvolvimento e produção. Isso levou a menos cenários de 'funciona na minha máquina', aumentou a produtividade e passou mais tempo desenvolvendo recursos que agregam valor à aplicação.




## Desenvolvedor

- Luiz Pedro Galdino Silva

## Recursos do Projeto

1. Registro
2. Atualização
3. Deletar
4. Pesquisar

## Como executar o projeto

Após clonar o repositório, certifique-se de que o Docker está instalado em seu sistema. Se não, você pode baixar e instalar a partir do site oficial do Docker.

Uma vez que o Docker está instalado, siga estes passos para executar o projeto:

1. Certifique-se de que o servidor (EducaData-Back) está rodando na porta 8080.

2. Para verificar se o servidor está rodando, digite no seu navegador:
```
localhost:8080/graphql
```

3. Se a parte gráfica do graphql aparecer, então o servidor está rodando corretamente

4. Derrube quaisquer versões antigas do projeto que possam estar rodando com o seguinte comando:

```
docker-compose down
```
5. Construa o projeto Docker Compose com o seguinte comando:

```
docker-compose build
```
6. Construa o projeto Docker Compose com o seguinte comando:

```
docker-compose up

```

Após executar o comando acima, o servidor será inicializado automaticamente e estará disponível em localhost:8083. Se o navegador não abrir automaticamente, você precisará copiar e colar este link no seu navegador.

## Como testar o projeto

1. Para testar o projeto, na raiz do projeto, simplesmente digite o seguinte comando:


```
npx jest --env=jsdom
```

## Conclusão

Em resumo, cada uma dessas tecnologias desempenhou um papel vital no projeto, contribuindo para o seu sucesso. A combinação dessas ferramentas resultou em um código limpo, eficiente e seguro. Foi uma jornada de aprendizado valiosa que certamente terá um impacto positivo em projetos futuros.
