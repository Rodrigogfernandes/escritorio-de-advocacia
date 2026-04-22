# Ferreira & Novaes Landing Page

Landing page institucional estática para o escritório fictício `Ferreira & Novaes Advogados Associados`.

O projeto foi feito com arquivos simples, sem framework:

- `index.html`: estrutura da página e conteúdo
- `style.css`: estilos, layout e responsividade
- `script.js`: menu mobile, animações, slider de depoimentos e formulário
- `foto.png`: imagem disponível no projeto

## Como abrir

Como é uma página estática, basta abrir o arquivo `index.html` no navegador.

Opções:

1. dar duplo clique em `index.html`
2. abrir pelo VS Code com Live Server
3. servir localmente com qualquer servidor estático

Exemplo com PowerShell:

```powershell
start .\index.html
```

## Estrutura da página

O `index.html` está organizado em seções:

- menu mobile
- navbar
- hero
- sobre
- áreas de atuação
- diferenciais
- equipe
- depoimentos
- CTA
- contato
- footer

## Onde editar

### Texto e conteúdo

Edite diretamente no arquivo `index.html`.

Exemplos:

- nome do escritório
- títulos
- textos das seções
- informações de contato
- links e botões

### Visual

Edite no `style.css`.

Lá estão definidos:

- cores principais
- tipografia
- espaçamentos
- grid e responsividade
- hover dos cards e botões
- animações de entrada

### Interações

Edite no `script.js`.

Hoje o arquivo controla:

- navegação suave entre seções
- abertura e fechamento do menu mobile
- efeito da navbar ao rolar
- animação com `IntersectionObserver`
- slider de depoimentos
- envio fake do formulário com mensagem de sucesso

## Observação importante

Os arquivos atuais apresentam problema de encoding em vários textos, por isso alguns caracteres aparecem quebrados, como:

- `ExcelÃªncia`
- `JoÃ£o Pessoa`
- `Ãreas`

Se quiser corrigir isso depois, o ideal é salvar os arquivos em `UTF-8` e revisar os textos corrompidos.

## Próximos passos sugeridos

- corrigir o encoding dos arquivos
- trocar os textos fictícios pelos reais do escritório
- conectar o formulário a WhatsApp, e-mail ou backend
- revisar SEO básico
- otimizar imagens e performance

## Uso

Projeto local para edição rápida de landing page institucional.
