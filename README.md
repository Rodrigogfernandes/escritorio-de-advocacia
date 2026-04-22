# Ribeiro & Costa Landing Page

Landing page institucional estatica para o escritorio ficticio `Ribeiro & Costa Advogados Associados`.

O projeto foi construido com HTML, CSS e JavaScript puro, sem framework ou etapa de build.

## Estrutura

```text
.
|-- index.html
|-- README.md
`-- assets
    |-- css
    |   `-- style.css
    |-- images
    |   |-- foto.png
    |   `-- logo.png
    `-- js
        `-- script.js
```

## Arquivos principais

- `index.html`: estrutura da pagina, secoes, textos e conteudo institucional
- `assets/css/style.css`: layout, paleta, responsividade, animacoes e menu mobile
- `assets/js/script.js`: navegacao suave, menu mobile, navbar sticky, reveal on scroll, slider e formulario
- `assets/images/`: imagens usadas na hero e na secao sobre

## Como abrir

Como a pagina e estatica, basta abrir o `index.html` no navegador.

Opcoes comuns:

1. Dar duplo clique em `index.html`
2. Abrir com Live Server no VS Code
3. Servir localmente com um servidor estatico simples

Exemplo no PowerShell:

```powershell
start .\index.html
```

## Secoes da pagina

O `index.html` esta organizado nas seguintes partes:

- menu mobile
- navbar
- hero
- sobre
- areas de atuacao
- diferenciais
- equipe
- depoimentos
- CTA
- contato
- footer
- botao flutuante do WhatsApp

## O que ja existe

- navegacao suave entre secoes
- menu mobile com abertura e fechamento via JavaScript
- navbar com estado visual ao rolar a pagina
- animacoes de entrada com `IntersectionObserver`
- slider automatico de depoimentos
- formulario com feedback visual de envio
- layout responsivo para desktop e mobile

## Onde editar

### Conteudo

Edite diretamente o `index.html` para alterar:

- nome do escritorio
- titulos e subtitulos
- textos das secoes
- informacoes de contato
- links de CTA e WhatsApp

### Visual

Edite `assets/css/style.css` para ajustar:

- cores e variaveis
- tipografia
- espacamentos
- grids e breakpoints
- botoes, cards e efeitos de hover
- comportamento do menu mobile

### Interacoes

Edite `assets/js/script.js` para modificar:

- scroll suave
- logica do menu mobile
- comportamento da navbar
- animacoes de entrada
- depoimentos
- envio do formulario

## Observacao importante

O projeto ainda possui textos com problema de encoding em alguns trechos, entao certos caracteres especiais podem aparecer quebrados no HTML atual.

Se quiser corrigir isso depois, o ideal e:

1. Garantir que os arquivos estejam salvos em `UTF-8`
2. Revisar os textos que aparecem com acentuacao corrompida
3. Padronizar os simbolos especiais usados no conteudo

## Proximos passos sugeridos

- corrigir o encoding dos arquivos
- substituir o conteudo ficticio pelos dados reais do escritorio
- conectar o formulario a WhatsApp, email ou backend
- revisar acessibilidade basica do menu e dos botoes
- otimizar imagens e metadados para SEO e performance

## Uso

Projeto local para edicao rapida de uma landing page institucional de escritorio de advocacia.
