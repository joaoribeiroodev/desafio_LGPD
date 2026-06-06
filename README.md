# 🚗 Desafio LGPD - Portal de Lançamentos Ford

Um portal web interativo desenvolvido em conformidade com as diretrizes de proteção de dados da **Lei Geral de Proteção de Dados (LGPD)**, apresentando lançamentos de veículos Ford com funcionalidades avançadas de visualização e comparação de modelos.

---

## ✨ Funcionalidades Principais

- 🎠 **Carousel Dinâmico**: Exibição automática de imagens com navegação por pontos interativos
- 🚙 **Catálogo de Veículos**: Apresentação detalhada dos modelos Ford disponíveis com especificações técnicas
- ⚖️ **Comparador de Modelos**: Ferramenta para comparar até 2 veículos simultaneamente, exibindo todos os atributos técnicos
- 📋 **Formulário de Contato Avançado**: Captura de dados com conformidade LGPD e consentimento do usuário
- 📱 **Design Responsivo**: Interface otimizada para diferentes tamanhos de tela
- 🔗 **Integração de Redes Sociais**: Links diretos para as plataformas oficiais Ford Brasil
- 🎨 **Interface Moderna**: Design limpo e intuitivo com navegação fluida

---

## 🛠️ Tecnologias Utilizadas

### Frontend
| Tecnologia | Descrição |
|-----------|-----------|
| **HTML5** | Estrutura semântica das páginas |
| **CSS3** | Estilos, layout responsivo e animações |
| **JavaScript (ES6+)** | Lógica interativa e manipulação do DOM |

### Recursos Específicos
- **Classes JavaScript**: Implementação de `Carousel`, `Car` e `Contato`
- **API Intl**: Formatação de moeda (Real Brasileiro)
- **CSS Animations**: Transições suaves e efeitos de fade-in 

---

## 📋 Pré-requisitos e Instalação

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge - versões recentes)
- Servidor web local (recomendado para melhor funcionalidade)

### Instalação

#### 1️⃣ **Clonar o Repositório**
```bash
git clone https://github.com/joaoribeiroodev/desafio_LGPD.git
cd desafio_LGPD
```

#### 2️⃣ **Servir Localmente** (Opcional, mas recomendado)

**Usando Python 3:**
```bash
python -m http.server 8000
```

**Usando Node.js (http-server):**
```bash
npx http-server
```

**Usando Live Server no VS Code:**
- Instale a extensão "Live Server"
- Clique com botão direito em `index.html`
- Selecione "Open with Live Server"

#### 3️⃣ **Acessar a Aplicação**
Abra seu navegador e acesse:
```
http://localhost:8000
```

---

## 📁 Estrutura de Pastas

```
desafio_LGPD/
│
├── 📄 index.html              # Página inicial com carousel
├── 📄 lancamento.html         # Página de lançamentos e comparador
├── 📄 contato.html            # Página de formulário de contato LGPD
├── 📄 README.md               # Este arquivo
│
├── 📂 css/                    # Arquivos de estilos
│   ├── reset.css              # Reset de estilos padrão do navegador
│   ├── style.css              # Estilos globais e layout
│   ├── form.css               # Estilos específicos do formulário
│   └── lancamento.css         # Estilos da página de lançamentos
│
├── 📂 js/                     # Arquivos JavaScript
│   ├── carousel.js            # Classe e lógica do carousel automático
│   ├── compare.js             # Classe Car e lógica do comparador
│   └── form.js                # Classe Contato e validações de formulário
│
└── 📂 img/                    # Recursos de imagem
    ├── logo-ford-256.png      # Logo principal Ford
    ├── ford-96.png            # Logo reduzido para footer
    ├── imagem_1.jpg           # Imagem do carousel (Ranger Ford 2022)
    ├── imagem_2.jpg           # Imagem do carousel (História Ford)
    ├── imagem_3.jpg           # Imagem do carousel (Bronco Sport 2022)
    ├── XL Cabine.jpg          # Imagem do modelo XL Cabine
    ├── xls 2.2 diesel.jpg     # Imagem do modelo XLS 2.2 Diesel
    ├── storm.jpg              # Imagem do modelo Storm
    ├── facebook-50.png        # Ícone Facebook
    ├── instagram-logo-50.png  # Ícone Instagram
    ├── youtube-squared-50.png # Ícone YouTube
    └── info.png               # Ícone informativo

```

---

## 🔐 Conformidade com LGPD

Este projeto implementa práticas de proteção de dados em conformidade com a Lei Geral de Proteção de Dados (LGPD):

✅ **Consentimento Explícito**: Checkboxes obrigatórios para aceitar Termos e Condições  
✅ **Coleta Controlada**: Formulário captura apenas dados necessários  
✅ **Política de Privacidade**: Link direto aos Termos e Condições Ford Brasil  
✅ **Transparência**: Aviso claro sobre retenção e gerenciamento de dados  

---

## 📝 Como Usar

### 🏠 **Página Home (index.html)**
- Carousel com 3 imagens rotativas a cada 3 segundos
- Navegação por pontos interativos (dots)
- Links rápidos para outras seções

### 🚗 **Página de Lançamentos (lancamento.html)**
- Visualize os 3 modelos Ford disponíveis
- Selecione até 2 veículos para comparação
- Clique no botão "Comparar Carros" para visualizar especificações lado a lado
- Modelos disponíveis:
  - XL Cabine Simples 2.2 Diesel 4X4 MT 2022
  - XLS 2.2 Diesel 4X4 AT 2022
  - Storm 3.2 Diesel 4X4 AT 2022

### 📧 **Página de Contato (contato.html)**
- Preencha os campos obrigatórios (marcados com *)
- Aceite os Termos e Condições para ativar o botão "Enviar"
- Dados capturados: Nome, Sobrenome, Email, CPF, Telefone, Mensagem, Tipo de Contato
- Opção para receber newsletter com descontos e novidades

---

## 🧑‍💻 Estrutura de Código

### Classe Carousel (js/carousel.js)
Gerencia o carrossel de imagens com:
- Rotação automática a cada 3 segundos
- Navegação manual via pontos interativos
- Efeito de fade-in nas imagens

### Classe Car (js/compare.js)
Modelo de dados para veículos contendo:
- Informações técnicas (dimensões, capacidade, motor)
- Preço com formatação em Real Brasileiro
- Imagem associada

### Classe Contato (js/form.js)
Estrutura de dados de contato com validação:
- Confirmação de envio com alert do navegador
- Reset automático do formulário após envio
- Habilitação condicional do botão de envio

---

## 🚀 Próximos Passos & Melhorias Futuras

- [ ] Backend para persistência de dados de contato
- [ ] Integração com banco de dados (LGPD-compliant)
- [ ] Autenticação de usuários
- [ ] Painel de administração para gerenciamento de dados
- [ ] API REST para consulta de veículos
- [ ] Testes automatizados (Jest, Cypress)
- [ ] PWA (Progressive Web App)
- [ ] Análise e relatórios de contatos

---

## 📞 Suporte e Contato

Para dúvidas ou sugestões sobre este projeto, entre em contato através de:

- 📧 **GitHub Issues**: [Abrir uma issue](https://github.com/joaoribeiroodev/desafio_LGPD/issues)
- 🔗 **Redes Sociais Ford Brasil**:
  - [Facebook](https://www.facebook.com/FordBrasil/)
  - [Instagram](https://www.instagram.com/fordbrasil/)
  - [YouTube](https://www.youtube.com/@fordbrasil/)

---

## 📄 Licença

[Insira aqui a licença do projeto - ex: MIT, Apache 2.0]

---

## ✍️ Autor

**João Ribeiro**  
🔗 [GitHub](https://github.com/joaoribeiroodev)

---

<div align="center">

**Desenvolvido com ❤️ em conformidade com a LGPD**

![Ford](https://img.shields.io/badge/Ford-Brasil-blue?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>
