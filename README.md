# Projeto gestão de mercado - SAP Fiori

## OBJETIVO:

- Criar um app para ser utilizado pelo gerente loja, para aprovar a alteração do preço do produto no caixa .

## JUSTIFICATIVA:
- O preço de um produto pode ser alterado mais de uma vez durante o dia, gerando divergência entre o preço da etiqueta na gondola e o preço exibido no caixa. Isso gera transtorno para o cliente que na hora de pagar vê no caixa um preço diferente do anunciado na etiqueta;
  
- Com esta solução, o preço será alterado no caixa somente após aprovação do gerente da loja.

## DESCRIÇÃO DA SOLUÇÃO PROPOSTA

- App para o gerente da loja aprovar alteração de preço;
 
- O app exibe uma lista com todos os produtos que precisam ser verificados, exibindo o preço atual e o preço novo;
 
- Pelo app de Aprovar Alteração de Preço o gerente pode aprovar ou rejeitar a alteração de um ou vários produtos;

- O preço será alterado no caixa somente após aprovação do gerente.
 

## COMPLEMENTO DA SOLUÇÃO 

- Aplicativo para administrar Preço no caixa (listar, criar, alterar, excluir);

- Aplicativo para administrar Produtos (listar, criar, alterar, excluir);
 
- Aplicativo para administrar Solicitações de alteração de preço.
  

## ORIENTAÇÃO TÉCNICA:
 
​O diagrama da solução tem 3 tabelas:

- material;

- preço do material no caixa;

- solicitações de alteração no preço.
 

A tabela contendo o preço exibido no caixa contém as seguintes informações:

- Código do produto

- Preço do produto

- Moeda

 

A tabela para armazenar as solicitações de alteração de preço contém as seguintes informações:

- ID da solicitação;

- Data Solicitação;

- Hora Solicitação;

- Código Material;

- Status (Pendente/Aprovado/Rejeitado);

- Data que o gerente tomou ação;

- Hora que o gerente tomou ação.


## TELA DO APLICATIVO DE APROVAÇÃO

- Aplicativo do modelo Freestyle;

- Informações exibidas: código do produto, descrição do produto, preço atual (preço do caixa), preço novo, data e hora da solicitação;

- Os produtos exibidos para o gerente são os que estão com status pendente na tabela de solicitações de alteração de preço.

 

## REGRA - LEITURA DO PREÇO NOVO

- O preço novo vem do Northwind Services;

- O preço novo está na entidade Products, na propriedade UnitPrice;

- A busca do material deve ser realizada pela propriedade ProductID​.

 

Regra - Tomada de decisões:

- Quando o gerente aprova ou rejeita uma solicitação de alteração de preço, a decisão que ele tomou é registrada na tabela de solicitações de alteração de preço;

- Caso a ação seja 'aprovar', o preço é alterado na tabela de preço do caixa.


## Apps de Preço, Materiais e de Solicitações

- Os aplicativos são do modelo Fiori Elements e utilizam o template “List Report”;
- A lista do aplicativo exibe as informações das respectivas tabelas;
- Cada solicitação nova é criada automaticamente com o status Pendente.

## Tela inicial do aplicativo de "Cadastro de materiais"
![Tela inicial cadastro de materiais](https://raw.githubusercontent.com/Rafael-Ienne/projeto_gestao_mercado.abap/main/img/tela_inicial_materiais.png)

## Tela de detalhes do aplicativo de "Cadastro de materiais"
![Tela de detalhes do aplicativo cadastro de materiais](https://raw.githubusercontent.com/Rafael-Ienne/projeto_gestao_mercado.abap/main/img/tela_detalhes_materiais.png)

## Tela inicial do aplicativo de "Cadastro de preço de materiais"
![Tela inicial Cadastro de preço de materiais](https://raw.githubusercontent.com/Rafael-Ienne/projeto_gestao_mercado.abap/main/img/tela_inicial_preco.png)

## Tela de detalhes do aplicativo de "Cadastro de preço de materiais"
![Tela de detalhes do aplicativo de "Cadastro de preço de materiais"](https://raw.githubusercontent.com/Rafael-Ienne/projeto_gestao_mercado.abap/main/img/tela_detalhes_preco.png)

## Tela inicial do aplicativo de "Cadastro de solicitações"
![Tela inicial Cadastro de solicitações](https://raw.githubusercontent.com/Rafael-Ienne/projeto_gestao_mercado.abap/main/img/tela_inicial_cadastro_solicitacao.png)

## Tela de detalhes do aplicativo de "Cadastro de solicitações"
![Tela de detalhe do aplicativo Cadastro de solicitações](https://raw.githubusercontent.com/Rafael-Ienne/projeto_gestao_mercado.abap/main/img/tela_detalhes_cadastro_solicitacoes.png)

## Tela de início antes e depois do aplicativo "Aprovar solicitações de mudança de preço"
![Tela de início antes e depois do aplicativo "Aprovar solicitações de mudança de preço"](https://raw.githubusercontent.com/Rafael-Ienne/projeto_gestao_mercado.abap/main/img/antes_e_depois_tela_aprovacao_solicitacao.png)

