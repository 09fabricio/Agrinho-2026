# 🌱 Agrinho 2026 — Projeto Inicial

**Tema do Concurso:** Agro forte, futuro sustentável — equilíbrio entre produção e meio ambiente.

## Sobre

Protótipo de página web criado para o Agrinho 2026. O foco é demonstrar, através de um simulador, como variáveis ambientais (temperatura, umidade do ar e do solo) impactam a produção agrícola e a sustentabilidade.

Observação: atualmente a página principal contém a seção "hero", informações e rodapé; o código JavaScript (SCRIPT.JS) inclui lógica para um simulador interativo caso os controles estejam presentes na página.

## Funcionalidades

- Seção inicial (hero) com destaque visual e call-to-action.
- Conteúdo informativo sobre pilares do projeto.
- Código JavaScript preparado para um simulador ambiental (é necessário incluir os elementos HTML correspondentes para habilitar os controles).

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

## Como executar (local)

1. Garanta que os arquivos estejam no mesmo diretório:

- index.html
- STYLE.CSS
- SCRIPT.JS

2. Em sistemas Windows você pode abrir `index.html` com um duplo clique. Em Linux/servidores, lembre-se que nomes de arquivos são case-sensitive — mantenha exatamente os nomes acima.

3. Como alternativa para visualizar via servidor local (recomendado para comportamento consistente):

```bash
# a partir da pasta do projeto (Python 3)
python3 -m http.server 8000
# então abra http://localhost:8000 no navegador
```

## Observações úteis

- Se o simulador não aparecer, verifique se os controles (inputs e elementos de resultado) existem na página; o JavaScript está protegido contra ausência desses elementos, então não causará erros.
- O projeto usa STYLE.CSS e SCRIPT.JS com letras maiúsculas; em ambientes Linux/Unix respeite maiúsculas/minúsculas ao referenciar arquivos.

---

**Desenvolvido por:** Fabrício Mariano de Almeida

***Fim***
