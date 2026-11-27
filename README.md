# Visitas Pedagógicas NTM — Setor Pedagógico
### Sistema Híbrido de Agendamento, Registros de Campo e Relatórios em PDF

Desenvolvido para o **Setor Pedagógico do Núcleo de Tecnologia Municipal (NTM / SEMED)** sob coordenação da **Pedagoga Marcia Bastos**.

---

## 🌟 Principais Recursos

1. **🔐 Controle de Acesso, Múltiplos Usuários e Modo Visitante:**
   - **Autenticação Inicial:** Tela com o brasão oficial do NTM, garantindo privacidade e controle para o Setor Pedagógico.
   - **👁️ Modo Visitante (Acesso Rápido):**
     - Botão direto **`👁️ Entrar como Visitante (Apenas Consulta e Relatórios)`** na tela de login.
     - Permite que qualquer pessoa consulte a agenda, pesquise escolas e **emita relatórios oficiais em PDF**.
     - **Segurança ativa:** O visitante **não pode alterar, excluir nem cadastrar visitas** (todos os formulários ficam travados em somente-leitura).
   - **👥 Cadastro e Gerenciamento de Novos Usuários:**
     - A Pedagoga Administradora pode clicar no botão **`👥 Usuários`** no topo para cadastrar novos membros da equipe.
     - Permite definir para cada novo usuário: Nome, Login, Senha e Perfil de Acesso (*Pedagogo com Acesso Total* ou *Visitante para Consulta*).
   - **Credenciais Iniciais Configuradas:**
     - **Administrador/Pedagoga:** Usuário `marcia.bastos` (ou `marcia` / `ntm`) | Senha: `ntm2026`
     - **Visitante:** Usuário `visitante` (ou clique direto no botão de visitante)
   - **Alteração de Senha:** Disponível no menu "💾 Backup" da barra superior.

2. **📅 Painel de Visitas Técnicas de Hoje e da Semana:**
   - **Radar do Dia (Hoje):** Exibe imediatamente as visitas técnicas marcadas para a data atual, indicando as escolas, horários e status.
   - **Radar da Semana:** Exibe o cronograma das visitas previstas para a semana corrente (segunda a domingo), com contadores e atalhos diretos.
   - **Filtros Rápidos:** Botões `[📅 Visitas de Hoje]` e `[🗓️ Esta Semana]` na barra de controle para filtrar a visualização com um único clique.

3. **Modo Híbrido (Offline-First com Sincronização Automática):**
   - **Sem internet na escola?** Você pode preencher todos os dados, agendar visitas, digitar anotações e anexar fotos. Tudo é gravado com total segurança no banco local do seu próprio aparelho (**IndexedDB**).
   - **Quando conectar à internet:** O sistema detecta a conexão automaticamente e sincroniza seus registros, exibindo alertas visuais de confirmação.

4. **Interface Expandida em Tela Cheia & Brasão Destacado:**
   - **Símbolo NTM Ampliado:** O brasão oficial do Setor Pedagógico / Pedagoga Marcia Bastos está destacado no canto esquerdo com acabamento dourado em alta definição.
   - **Layout Full Width:** O site ocupa 96% da tela (até 1750px), aproveitando todo o espaço horizontal em monitores modernos com 3 a 4 colunas de cards organizados.
   - **Pilares Pedagógicos no Cabeçalho:**
     - `🤖 Robótica Educacional`
     - `💻 Informática Educativa`
     - `🧩 Cultura Maker & Scratch`
     - `📘 BNCC Computação`

5. **Relatório Geral de Visitas Agendadas em PDF (com Assinaturas NTM):**
   - Botão **`📋 Relatório das Agendadas (PDF)`** no topo e na barra de controle.
   - Emite o cronograma oficial timbrado com as visitas agendadas, dados das escolas, horários, objetivos e status.
   - **Assinaturas Oficiais:**
     - ✍️ **Marcia Bastos** &mdash; *Pedagoga &bull; Setor Pedagógico NTM / SEMED*
     - ✍️ **Coordenação do NTM** &mdash; *Coordenação &bull; Núcleo de Tecnologia Municipal / SEMED*

6. **Relatório Geral Consolidado de Todas as Visitas Concluídas (PDF Oficial):**
   - Botão **`✅ Relatório das Concluídas (PDF)`** no topo e na barra de controle (disponível tanto para Pedagoga quanto para Visitante).
   - **Painel Executivo / Indicadores:** Total de escolas atendidas, total de registros fotográficos e tecnologias mapeadas.
   - **Quadro Sinóptico Geral:** Tabela comparativa com todas as escolas atendidas, datas, equipes escolares, recursos de TI diagnosticados e síntese das intervenções pedagógicas.
   - **Caderno de Fichas Técnicas Detalhadas por Escola:** Ficha individual de cada unidade com os objetivos da visita, práticas pedagógicas observadas, diagnósticos do espaço e laboratório, orientações e encaminhamentos do NTM.
   - **Galeria Fotográfica Oficial:** Fotos das escolas com moldura e legendas explicativas anexadas no próprio documento.
   - **Parecer Conclusivo do Setor Pedagógico:** Parecer institucional do NTM/SEMED sobre a integração de Robótica, Informática Educativa, Scratch e BNCC Computação.
   - **Assinaturas Oficiais:** Marcia Bastos (Pedagoga) e Coordenação do NTM.

7. **Relatório Individual de Campo com Fotos:**
   - Em cada escola visitada, o botão **`[📝 Preencher Registro da Visita]`** (ou **`[👁️ Ver Registros]`** para visitantes) permite consultar horários, participantes, checklist de recursos tecnológicos (robótica, informática educativa, scratch, tablets, BNCC Computação), anotações pedagógicas e fotos com legendas.
   - Emite o **Relatório Técnico-Pedagógico Individual** em PDF com fotos nítidas e validação do NTM.

8. **Backup & Segurança dos Dados:**
   - Botão **"💾 Backup"** na barra superior permite exportar todas as visitas e fotos em arquivo `.json` a qualquer momento para guardar no pen-drive ou migrar de computador.

---

## 🚀 Como Executar

### Opção 1: Clique Duplo Direto (Mais Rápido)
1. Dê um duplo-clique no arquivo **`Abrir-Agenda-NTM.bat`** (ou dê um duplo clique diretamente em **`index.html`**).
2. Na tela de login:
   - Para acesso completo de Pedagoga: Digite `marcia.bastos` e `ntm2026`.
   - Para acesso de consulta/relatórios: Clique em **`👁️ Entrar como Visitante`**.

### Opção 2: PWA / Instalar como Aplicativo
- No Google Chrome ou Microsoft Edge, você pode clicar no ícone de **"Instalar aplicativo"** na barra de endereços para fixar o sistema na sua Área de Trabalho ou barra de tarefas do Windows.

---

## 📂 Estrutura de Arquivos

```
agenda-visitas-ntm/
├── index.html                  # Interface completa do sistema
├── Abrir-Agenda-NTM.bat        # Atalho de inicialização rápida no Windows
├── manifest.json               # Configuração PWA
├── sw.js                       # Service Worker para suporte offline contínuo
├── css/
│   └── style.css               # Design moderno, tema tecnologia/educação e folha A4 para impressão
├── js/
│   ├── app.js                  # Lógica da interface, agendamentos e controle
│   ├── auth.js                 # Sistema de login, múltiplos usuários e modo visitante
│   ├── db.js                   # Banco de dados local IndexedDB
│   ├── image-utils.js          # Otimização e compressão inteligente de fotos
│   ├── sync.js                 # Motor de detecção online/offline e sincronização
│   └── pdf-generator.js        # Gerador do Relatório Oficial NTM e layout PDF
└── assets/
    ├── logo-ntm.jpg            # Símbolo oficial Setor Pedagógico NTM
    ├── logo-base64.js          # Imagem embutida para evitar qualquer bloqueio offline
    └── html2pdf.bundle.min.js  # Motor de geração de PDF offline
```
