# Documentação do Teste de API com Cypress

![image](/assets/img.png)

Este documento fornece uma descrição e documentação básica de um teste automatizado de API usando o Cypress, que verifica a obtenção de posts de um usuário específico usando a JSONPlaceholder API.

## Objetivo do Teste

O objetivo deste teste é garantir que a API JSONPlaceholder esteja retornando corretamente os posts de um usuário específico quando uma solicitação é feita ao endpoint correspondente.

## Ferramentas Utilizadas

- [Cypress](https://www.cypress.io/): Um framework de teste de front-end.
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/): Uma API fake usada para teste e prototipagem.

## Pré-requisitos

- Node.js instalado no sistema.
- Cypress instalado no projeto.

## Estrutura do Teste

O teste está estruturado da seguinte forma:

- Uma descrição geral do teste dentro de um bloco `describe`.
- Um caso de teste dentro de um bloco `it`.
- Uma solicitação HTTP feita usando `cy.request()` para obter os posts de um usuário específico (no caso, usuário com ID 1).
- Asserts para verificar se a resposta da API possui o status esperado, se contém uma lista de posts e se cada post tem as propriedades corretas.

## Executando o Teste

1. Certifique-se de que o servidor Cypress esteja em execução.
2. Abra o Cypress executando `npx cypress open` no terminal.
3. Na interface do Cypress, clique no arquivo de teste `api_spec.js`.
4. O teste será executado automaticamente e os resultados serão exibidos na interface do usuário do Cypress.

## Resultados Esperados

Espera-se que o teste seja bem-sucedido, indicando que a API JSONPlaceholder está retornando corretamente os posts do usuário com ID 1.

## Considerações

- Este é apenas um exemplo básico de um teste de API com Cypress. Em um ambiente de produção, testes mais abrangentes e robustos seriam necessários.
- Certifique-se de que o servidor esteja em execução e que haja conexão com a internet ao executar os testes.
