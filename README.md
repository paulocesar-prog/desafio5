# Password Strength Meter

Um avaliador de força de senhas que classifica senhas como **fracas**, **médias** ou **fortes** baseado em critérios de segurança.

## 📁 Estrutura do Projeto

### Arquivos Principais

#### `index.js` - Arquivo Principal
**Função**: Contém a lógica principal do avaliador de senhas.

**Funcionalidades**:
- `checkCategories(password)`: Verifica se a senha contém:
  - Letras maiúsculas (A-Z)
  - Letras minúsculas (a-z) 
  - Números (0-9)
  - Símbolos especiais (!@#$%^&*)
- `strength(password)`: Classifica a senha baseado em:
  - **Forte**: ≥12 caracteres + 4 categorias
  - **Média**: ≥8 caracteres + 3 categorias
  - **Fraca**: Qualquer outro caso

**Uso**:
```bash
node index.js "MinhaSenh@123"
# Output: Força: forte
```

#### `package.json` - Configuração do Projeto
**Função**: Define metadados, dependências e scripts do projeto Node.js.

**Conteúdo**:
- **Metadados**: Nome, versão, descrição
- **Scripts**:
  - `npm start`: Executa com senha de exemplo
  - `npm test`: Executa testes unitários
  - `npm run lint`: Verifica qualidade do código
- **Dependências**: ESLint e Jest para desenvolvimento
- **Engines**: Requer Node.js ≥18

#### `Dockerfile` - Containerização
**Função**: Cria uma imagem Docker otimizada para produção.

**Estrutura**:
- **Multi-stage build**: Usa Node.js Alpine para build, Distroless para runtime
- **Otimizações**: Instala apenas dependências de produção
- **Segurança**: Imagem final sem shell/binários desnecessários
- **Comando**: Executa `index.js` com senha "abc" (fraca)

### Arquivos de Configuração

#### `.eslintrc.json` - Configuração do Linter
**Função**: Define regras de qualidade e estilo do código.

**Configurações**:
- **Ambiente**: Node.js, Jest, ES2020
- **Regras**:
  - Obrigatório ponto e vírgula (`;`)
  - Aspas simples obrigatórias
  - Regras recomendadas do ESLint

#### `__tests__/strength.test.js` - Testes Unitários
**Função**: Testa todas as funcionalidades do avaliador de senhas.

**Casos de Teste**:
- ✅ Senha forte: `"Str0ngP@ssw0rd!"`
- ✅ Senha média: `"Medium123!"`
- ✅ Senha fraca: `"abc"`
- ✅ Distinção por tamanho: `"Abc1!"` vs `"Abcdef1!"`

### Arquivos de CI/CD

#### `.github/workflows/workflow01.yaml` - Pipeline de Deploy
**Função**: Automatiza lint, testes, build e deploy.

**Jobs**:
1. **Lint**: Verifica qualidade do código
2. **Unit**: Executa testes com cobertura (≥80%)
3. **Docker**: Build e push da imagem (se cobertura OK)
4. **Deploy**: Deploy para produção

**Fluxo**:
```
Lint → Unit Tests → Docker Build → Deploy
         ↓
    Cobertura ≥80%
```

## 🚀 Como Usar

### Instalação
```bash
npm install
```

### Execução Local
```bash
# Testar senha específica
node index.js "MinhaSenh@123"

# Executar com senha de exemplo
npm start

# Executar testes
npm test

# Verificar qualidade do código
npm run lint
```

### Docker
```bash
# Build da imagem
docker build -t password-meter .

# Executar container
docker run password-meter
```

## 📊 Critérios de Classificação

| Força | Tamanho | Categorias | Exemplo |
|-------|---------|------------|---------|
| **Fraca** | <8 chars | <3 categorias | `"abc"`, `"123"` |
| **Média** | ≥8 chars | ≥3 categorias | `"Medium123!"` |
| **Forte** | ≥12 chars | 4 categorias | `"Str0ngP@ssw0rd!"` |

## 🧪 Testes

O projeto possui **80% de cobertura de código** com 4 testes que cobrem:
- Classificação de senhas fortes
- Classificação de senhas médias  
- Classificação de senhas fracas
- Distinção por tamanho mínimo

## 🔧 Tecnologias

- **Node.js** ≥18
- **Jest** - Testes unitários
- **ESLint** - Qualidade do código
- **Docker** - Containerização
- **GitHub Actions** - CI/CD

## 📝 Licença

MIT License