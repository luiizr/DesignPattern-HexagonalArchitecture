# 🏗️ Arquitetura Limpa e Hexagonal - Design Patterns

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)](https://jestjs.io/)

Projeto desenvolvido durante o curso **"Domine a Arquitetura Limpa e Hexagonal"** ministrado por **Leonardo 
Moura Leitão** na plataforma **Cod3r Cursos**.


## 📜 Certificado de conclusão de curso
![UC-4184c7e4-d7e7-441e-aa1a-edb6f159f4f9](https://github.com/user-attachments/assets/dd6dbc62-b9fc-4b53-a1b9-e6fda74f4fa6)

## 📋 Sobre o Projeto

Este repositório demonstra a implementação prática dos conceitos de **Arquitetura Hexagonal** (Ports & Adapters) e **Clean Architecture**, construindo uma aplicação robusta, testável e independente de frameworks externos.

O projeto consiste em dois módulos principais:
- **Backend**: API REST completa com autenticação e gerenciamento de usuários
- **Projeto**: Aplicação CLI para demonstração de fundamentos e princípios SOLID

## 🎯 Conceitos Aplicados

### Arquitetura Hexagonal
- **Core (Domínio)**: Lógica de negócio pura, independente de frameworks
- **Ports (Portas)**: Interfaces que definem contratos
- **Adapters (Adaptadores)**: Implementações concretas para comunicação externa

### Princípios SOLID
- ✅ **Single Responsibility Principle (SRP)**
- ✅ **Open/Closed Principle (OCP)**
- ✅ **Liskov Substitution Principle (LSP)**
- ✅ **Interface Segregation Principle (ISP)**
- ✅ **Dependency Inversion Principle (DIP)**

### Padrões de Projeto
- 🔹 Repository Pattern
- 🔹 Use Case Pattern
- 🔹 Adapter Pattern
- 🔹 Strategy Pattern
- 🔹 Dependency Injection

## 🏛️ Estrutura do Projeto

```
DesignPattern-HexagonalArchitecture/
├── backend/                          # API REST
│   ├── src/
│   │   ├── core/                    # Núcleo da aplicação (regras de negócio)
│   │   │   ├── usuario/
│   │   │   │   ├── model/          # Entidades de domínio
│   │   │   │   └── service/        # Casos de uso (Use Cases)
│   │   │   ├── produto/
│   │   │   └── shared/             # Abstrações compartilhadas
│   │   └── external/               # Camada de infraestrutura
│   │       ├── API/                # Controllers e Middlewares
│   │       ├── auth/               # Provedores de criptografia
│   │       ├── db/                 # Repositórios (PostgreSQL)
│   │       └── mock/               # Implementações em memória
│   └── script/
│       └── db.sql                  # Schema do banco de dados
│
└── projeto/                         # Aplicação CLI
    └── src/
        ├── core/                    # Núcleo da aplicação
        │   ├── fundamentos/        # Exemplos de polimorfismo e DIP
        │   └── usuario/
        ├── adapters/               # Adaptadores externos
        │   ├── auth/
        │   ├── db/
        │   └── mock/
        └── app/                    # Interface de usuário (Terminal)
            ├── fundamentos/
            ├── menu/
            └── usuario/
```

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js** + **TypeScript**
- **Express.js** - Framework web minimalista
- **PostgreSQL** - Banco de dados relacional
- **pg-promise** - Client PostgreSQL com promises
- **JWT (jsonwebtoken)** - Autenticação e autorização
- **Bcrypt** - Criptografia de senhas
- **Jest** - Framework de testes
- **dotenv** - Gerenciamento de variáveis de ambiente

### Projeto CLI
- **Terminal-kit** - Interface interativa no terminal
- Mesma stack do backend para lógica de negócio

## 📦 Instalação e Configuração

### Pré-requisitos
- Node.js (v16 ou superior)
- PostgreSQL (v12 ou superior)
- npm ou yarn

### 1. Clone o repositório
```bash
git clone https://github.com/luiizr/DesignPattern-HexagonalArchitecture.git
cd DesignPattern-HexagonalArchitecture
```

### 2. Configure o Backend

```bash
cd backend
npm install
```

#### 2.1. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do diretório `backend` baseado no `.env.exemplo`:

```env
API_PORT=4000

# Configuração do banco de dados PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_NAME=hexagonal_db
DB_USER=seu_usuario
DB_PASSWORD=sua_senha

# Configuração do JWT
JWT_SECRET=sua_chave_secreta_aqui
```

#### 2.2. Configure o banco de dados
```bash
# Execute o script SQL para criar a tabela
psql -U seu_usuario -d hexagonal_db -f script/db.sql
```

#### 2.3. Inicie o servidor
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:4000`

### 3. Configure o Projeto CLI (Opcional)

```bash
cd ../projeto
npm install
npm run dev
```

## 🔌 Endpoints da API

### Autenticação

#### Registrar Usuário
```http
POST /api/usuarios/registrar
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@example.com",
  "senha": "senha123"
}
```

#### Login
```http
POST /api/usuarios/login
Content-Type: application/json

{
  "email": "joao@example.com",
  "senha": "senha123"
}
```

**Resposta:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Produtos (Requer Autenticação)

#### Obter Produto por ID
```http
GET /api/produtos/:id
Authorization: Bearer {seu_token_jwt}
```

## 🧪 Testes

Execute os testes unitários:

```bash
# No diretório backend
npm test

# No diretório projeto
npm test
```

## 🎓 Aprendizados Principais

### 1. Separação de Responsabilidades
- **Core**: Contém as regras de negócio puras, sem dependências externas
- **External**: Adaptadores que conectam o core ao mundo externo (API, DB, Auth)

### 2. Inversão de Dependências
As dependências apontam sempre para o core (camada de domínio):
```
External → Core
(Adapters implementam interfaces definidas no Core)
```

### 3. Testabilidade
- Casos de uso isolados e testáveis
- Implementações mock para testes sem dependências externas
- Injeção de dependências facilita substituição de componentes

### 4. Flexibilidade
- Fácil troca de implementações (ex: PostgreSQL → MongoDB)
- Fácil adicionar novos adaptadores (ex: GraphQL, gRPC)
- Múltiplas estratégias de criptografia intercambiáveis

## 📚 Casos de Uso Implementados

### Módulo Usuário
- ✅ `RegistrarUsuario` - Cadastro de novos usuários
- ✅ `LoginUsuario` - Autenticação e geração de token JWT
- ✅ Validação de credenciais
- ✅ Criptografia de senhas com diferentes estratégias

### Módulo Produto
- ✅ `ObterProdutoPorId` - Busca de produto com autenticação JWT

## 🔐 Segurança

- ✅ Senhas criptografadas com Bcrypt
- ✅ Autenticação via JWT
- ✅ Middleware de validação de token
- ✅ Validação de dados de entrada
- ✅ Tratamento de erros apropriado

## 🛠️ Adaptadores Implementados

### Criptografia
- `SenhaCripto` - Implementação padrão com Bcrypt
- `InverterSenhaCripto` - Implementação alternativa (exemplo didático)
- `EspacoSenhaCripto` - Outra implementação alternativa

### Repositórios
- `RepositorioUsuarioPG` - Persistência em PostgreSQL
- `RepositorioUsuarioEmMemoria` - Implementação em memória para testes

### API
- Controllers REST com Express
- Middleware de autenticação JWT
- Tratamento de erros centralizado

## 📈 Diagrama da Arquitetura

```
┌─────────────────────────────────────────────────────────┐
│                    EXTERNAL LAYER                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │     API      │  │     Auth     │  │   Database   │   │
│  │ (Express.js) │  │  (Bcrypt)    │  │ (PostgreSQL) │   │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘   │
└─────────┼──────────────────┼──────────────────┼─────────┘
          │                  │                  │
          │ implements       │ implements       │ implements
          ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────────┐
│                     PORTS (Interfaces)                  │
│    Controllers    ProvedorCriptografia   RepositorioUsuario
└─────────────────────────────────────────────────────────┘
                             │
                    depends on
                             ▼
┌─────────────────────────────────────────────────────────┐
│                      CORE LAYER                         │
│  ┌────────────────────────────────────────────────────┐ │
│  │              Use Cases (Business Logic)            │ │
│  │  • RegistrarUsuario  • LoginUsuario                │ │
│  │  • ObterProdutoPorId                               │ │
│  └────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────┐ │
│  │              Domain Models                         │ │
│  │  • Usuario  • Produto                              │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

## 🤝 Contribuindo

Este é um projeto educacional, mas contribuições são bem-vindas! Sinta-se à vontade para:
1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC.

## 👨‍💻 Autor

**Luiz Roberto**

- LinkedIn: [Luiz Roberto](https://www.linkedin.com/in/luiz-roberto-desenvolvedor)
- GitHub: [@luiizr](https://github.com/luiizr)

## 🎓 Agradecimentos

- **Leonardo Moura Leitão** - Instrutor do curso
- **Cod3r Cursos** - Plataforma de ensino
- Comunidade de desenvolvedores que contribuem para o ecossistema open-source

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!

**#CleanArchitecture #HexagonalArchitecture #TypeScript #NodeJS #DesignPatterns #SOLID**
