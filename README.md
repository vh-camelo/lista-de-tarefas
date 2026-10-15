# Lista de Tarefas

Aplicação web de lista de tarefas feita com **HTML, CSS e JavaScript puro**, sem frameworks nem bibliotecas. Permite adicionar tarefas, marcar como concluídas, excluir e filtrar a lista por situação.

> Projeto de estudos, feito para praticar manipulação do DOM, eventos e organização de dados com arrays de objetos.

![Tela da lista de tarefas](![alt text](image.png))

## Funcionalidades

- **Adicionar tarefas** pelo campo de texto
- **Marcar como concluída** clicando na tarefa (o texto fica riscado, e clicar de novo desfaz)
- **Excluir** uma tarefa pelo botão de cada item
- **Filtrar** a lista: todas as tarefas, apenas as concluídas ou apenas as pendentes, com o título da seção mudando conforme o filtro

## Conceitos praticados

| Conceito | Onde aparece |
|----------|--------------|
| **Manipulação do DOM** | `createElement`, `appendChild`, `removeChild` e `querySelector` para criar e remover itens da lista |
| **Eventos** | cliques para adicionar, concluir, excluir e filtrar |
| **Propagação de eventos (bubbling)** | `stopPropagation()` no botão excluir, para o clique não marcar a tarefa como concluída |
| **Array de objetos** | cada tarefa é um objeto `{ texto, concluida }` guardado no array `tarefas` |
| **Sincronização entre dados e tela** | o atributo `data-index` liga cada item da tela à posição no array, e é atualizado após cada exclusão |
| **Classes e atributos** | `classList.toggle` para alternar o estilo de tarefa concluída |
| **Filtragem de dados** | exibição dos itens conforme o estado `concluida` de cada tarefa |
| **CSS** | layout com Flexbox, cartão centralizado e estilos por classe e por id |

## Estrutura do projeto

```
├── index.html   # estrutura da página
├── script.js    # lógica: adicionar, concluir, excluir e filtrar
└── style.css    # estilos da interface
```

## Como rodar

Não precisa instalar nada. Baixe ou clone o repositório e abra o arquivo `index.html` no navegador.

```bash
git clone https://github.com/vh-camelo/lista-de-tarefas.git
```

## Limitações conhecidas

As tarefas ficam apenas na memória da página: ao recarregar, a lista é perdida.

## Próximos passos

- Salvar as tarefas no navegador (`localStorage`) para não se perderem ao recarregar
- Impedir o cadastro de tarefas vazias
- Permitir editar uma tarefa já criada
- Mostrar a quantidade de tarefas pendentes
- Publicar a página online com GitHub Pages
