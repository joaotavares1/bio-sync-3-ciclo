# Tema - Sustentabilidade e Meio Ambiente

# Introdução

O BioSync é uma plataforma digital criada para promover práticas ambientais sustentáveis, 
facilitando o descarte responsável de resíduos recicláveis e conectando doadores a catadores. 
Através dessa rede, os usuários podem descartar materiais recicláveis de forma eficiente, 
enquanto os catadores têm acesso a recursos essenciais, otimizando a distribuição e promovendo 
a conscientização ambiental. O objetivo é criar um sistema mais eficiente e inclusivo para o
gerenciamento de resíduos, beneficiando tanto os indivíduos quanto a sociedade em geral.

# O Que se espera? 

O BioSync visa proporcionar aos catadores visibilidade e acesso a uma fonte contínua de resíduos, 
ampliando suas oportunidades de geração de renda e melhorando suas condições de trabalho. A plataforma
também promove a conscientização ambiental, sensibilizando a comunidade sobre a importância da reciclagem 
e do descarte responsável, fomentando uma cultura sustentável. Além disso, busca integrar esforços individuais
em uma iniciativa coletiva para enfrentar desafios ambientais, contribuindo para um futuro mais sustentável e equilibrado, 
refletindo o compromisso em gerar um impacto positivo nas práticas sustentáveis, inclusão social e preservação do meio ambiente.

# Objetivo Principal

Criar uma plataforma virtual prática e eficiente para promover práticas ambientais
sustentáveis e proporcionar melhorias significativas na vida das pessoas.

# Problema

Observamos uma lacuna no atual sistema de descarte de resíduos, onde muitos indivíduos
estão dispostos a adotar práticas mais sustentáveis, mas enfrentam dificuldades na identificação
de canais adequados para o descarte responsável de materiais recicláveis.
A falta de opções acessíveis e eficientes para o descarte contribui para a perpetuação de 
práticas não sustentáveis, resultando em impactos negativos no meio ambiente.
Os catadores, apesar de desempenharem um papel crucial na cadeia de reciclagem, muitas
vezes enfrentam condições adversas e falta de reconhecimento.
A ausência de uma plataforma centralizada para conectar diretamente os catadores aos
potenciais doadores de resíduos limita suas oportunidades, renda e visibilidade na sociedade

# Solução

BIOSYNC busca oferecer uma solução integral que transcende as limitações do sistema atual. 
Concentramo-nos em proporcionar uma conexão direta entre doadores de resíduos e catadores,
promovendo uma gestão eficiente de recursos e, ao mesmo tempo, melhorando as condições de 
trabalho e a qualidade de vida dos catadores de resíduos.

# Requisitos Funcionais
 - Cadastro de Usuários
 - Cadastro de Pontos de Descarte
 - Visualização de Pontos de Descarte
 - Agendamento "Quero Descartar"
 - Agendamento do Coletor
 - Alteração de Dados de Cadastro

# Requisitos Não-Funcionais
 - Interface Amigável
 - Acessibilidade
 - Segurança
   
# Regras de Negocio
 - LGPD
 - Leis da Acessibilidade: a Lei nº
10.098 e o Decreto nº 6.949
 - Lei de Descarte Sustentável: Os pontos
de descarte cadastrados devem aderir às
regulamentações locais sobre descarte
sustentável.
 - Conscientização Ambiental

# Tecnologias Aplicadas

 - React - Uma biblioteca de JavaScript que serve para criar interfaces de usuários para aplicativos web e móveis.
 - Firebase - Um serviço de Back-End pronto que fornece diversos tipos de ferramentas, entre elas estão: Authentication, Firestore e Hosting.
 - GitHub - Uma plataforma de desenvolvedor colaborativa que serve para armazenar, compartilhar e gerenciar projetos.
 - Tailwind CSS - é um framework de estilo CSS que fornece classes pré-definidas para estilizar HTML
   
# Como Contribuir
 1. Faça um fork do repositório.
 2. Crie uma branch para sua feature.
 3. Envie um pull request para revisão.

[Visite o site oficial do BioSync(em desenvolvimeto)] (https://biosync-32e95.firebaseapp.com/)

# Tarefas de Melhoria Avaliação de DW3
### Lista de Melhorias com Dificuldade em Escala de Fibonacci

---

#### **Tarefa 1: Criação de Dashboard para Catadores**
**Código**: T01  
**Descrição**: Desenvolver um dashboard exclusivo para catadores, onde eles possam visualizar agendamentos, históricos de coletas e métricas como quantidade de resíduos coletados e renda estimada.  
**Dificuldade**: 21  
**Dependências**:
- Firebase Firestore para armazenar os dados de agendamentos e métricas.
- Firebase Authentication para autenticação de usuários.
- Tailwind CSS para estilização.

---

#### **Tarefa 2: Implementação de Sistema de Avaliação**
**Código**: T02  
**Descrição**: Permitir que doadores avaliem os catadores após a coleta, promovendo confiança e transparência na plataforma.  
**Dificuldade**: 13  
**Dependências**:
- Firebase Firestore para armazenar avaliações.
- Atualização do backend para gerenciar notas e exibi-las no perfil do catador.

---

#### **Tarefa 3: Integração com Mapas**
**Código**: T03  
**Descrição**: Adicionar visualização em mapa para localizar pontos de descarte cadastrados e catadores ativos na região.  
**Dificuldade**: 34  
**Dependências**:
- API de Mapas (como Google Maps).
- Dados de geolocalização no Firebase Firestore para armazenar as coordenadas de pontos e catadores.

---

#### **Tarefa 4: Notificações em Tempo Real**
**Código**: T04  
**Descrição**: Implementar notificações em tempo real para catadores e doadores sobre novas solicitações, confirmações de agendamento e alterações.  
**Dificuldade**: 21  
**Dependências**:
- Firebase Cloud Messaging para envio de notificações push.
- Atualização de eventos no Firestore.

---

#### **Tarefa 5: Tutorial Interativo**
**Código**: T05  
**Descrição**: Desenvolver um tutorial interativo para ensinar novos usuários (doadores e catadores) a utilizar a plataforma.  
**Dificuldade**: 8  
**Dependências**:
- Criar componentes React reutilizáveis para cada passo do tutorial.
- Tailwind CSS para estilização.

---

#### **Tarefa 6: Sistema de Relatórios**
**Código**: T06  
**Descrição**: Adicionar funcionalidade para geração de relatórios mensais sobre os resíduos coletados, incluindo métricas como tipos de materiais, peso e pontos de descarte mais utilizados.  
**Dificuldade**: 34  
**Dependências**:
- Firebase Firestore para consultar dados históricos.
- Bibliotecas de geração de relatórios, como jsPDF.

---

#### **Tarefa 7: Validação de Pontos de Descarte**
**Código**: T07  
**Descrição**: Adicionar funcionalidade para validar pontos de descarte com base nas leis locais de descarte sustentável.  
**Dificuldade**: 13  
**Dependências**:
- Atualização de dados no Firestore para armazenar certificações.
- Integração com uma base de dados externa para validação (se disponível).

---

#### **Tarefa 8: Sistema de Match Inteligente**
**Código**: T08  
**Descrição**: Implementar um sistema de "match" que sugira catadores para doadores com base na proximidade e no histórico de avaliações.  
**Dificuldade**: 55  
**Dependências**:
- Firebase Firestore para armazenar e consultar dados de histórico e localização.
- Algoritmo personalizado para encontrar o melhor "match".

---

#### **Tarefa 9: Modo Offline**
**Código**: T09  
**Descrição**: Permitir que usuários visualizem pontos de descarte e agendamentos recentes mesmo sem conexão à internet.  
**Dificuldade**: 34  
**Dependências**:
- Firebase Offline Persistence para cache local de dados.
- React Context ou Redux para gerenciar estados offline.

---

#### **Tarefa 10: Monitoramento de Sustentabilidade**
**Código**: T10  
**Descrição**: Criar uma seção no dashboard para mostrar o impacto ambiental gerado pelo usuário (ex.: resíduos reciclados, CO₂ evitado).  
**Dificuldade**: 21  
**Dependências**:
- Firebase Firestore para armazenar métricas ambientais.
- Algoritmos para calcular impacto baseado em resíduos coletados.

---

#### **Tarefa 11: Suporte PWA com Funcionalidade Offline Básica**
**Código**: T11  
**Descrição**: Converter a aplicação em um Progressive Web App básico, permitindo que os usuários acessem as páginas principais mesmo offline.  
**Dificuldade**: 13  
**Dependências**:
- Configuração de um `service worker` para cache básico.
- Uso da API Cache para armazenar assets estáticos e rotas críticas.

---

#### **Tarefa 12: Notificações Push PWA**
**Código**: T12  
**Descrição**: Adicionar suporte a notificações push diretamente no PWA, mantendo usuários atualizados sobre novos agendamentos e confirmações.  
**Dificuldade**: 21  
**Dependências**:
- Firebase Cloud Messaging integrado ao `service worker`.
- Permissões do navegador para notificações.

---

#### **Tarefa 13: Tela Inicial Customizada**
**Código**: T13  
**Descrição**: Configurar o PWA para exibir um splash screen personalizado e ícone da aplicação ao ser adicionado à tela inicial de dispositivos móveis.  
**Dificuldade**: 5  
**Dependências**:
- Arquivo `manifest.json` configurado com ícones e temas personalizados.

---

#### **Tarefa 14: Sincronização de Dados Offline**
**Código**: T14  
**Descrição**: Implementar sincronização automática de dados quando a conexão for restaurada, garantindo que agendamentos criados offline sejam atualizados no servidor.  
**Dificuldade**: 34  
**Dependências**:
- Firebase Offline Persistence para armazenamento local.
- Detecção de reconexão no navegador.

---

#### **Tarefa 15: Cache Dinâmico de Dados**
**Código**: T15  
**Descrição**: Configurar o PWA para armazenar em cache os dados mais utilizados, como pontos de descarte e agendamentos recentes, para acesso rápido.  
**Dificuldade**: 13  
**Dependências**:
- Configuração de cache dinâmico no `service worker`.
- Estratégia de cache com a biblioteca Workbox.

---

#### **Tarefa 16: Atualização de Versão Automatizada**
**Código**: T16  
**Descrição**: Adicionar funcionalidade de atualização automática do PWA, notificando os usuários sobre novas versões.  
**Dificuldade**: 8  
**Dependências**:
- Configuração no `service worker` para verificar atualizações.
- Interface de notificação ao usuário para recarregar a página.

---

#### **Tarefa 17: Modo Instalação Guiado**
**Código**: T17  
**Descrição**: Criar um modal que oriente os usuários sobre como adicionar o PWA à tela inicial em diferentes dispositivos.  
**Dificuldade**: 5  
**Dependências**:
- Detecção de suporte a PWA no navegador.
- Componentes React para exibir instruções dinâmicas.

---

#### **Tarefa 18: Relatórios Offline**
**Código**: T18  
**Descrição**: Permitir que os usuários gerem e visualizem relatórios de impacto ambiental mesmo sem conexão, com sincronização posterior.  
**Dificuldade**: 21  
**Dependências**:
- Firebase Offline Persistence para dados locais.
- jsPDF para geração de relatórios no lado do cliente.

---

#### **Tarefa 19: Busca por Voz (Offline e Online)**
**Código**: T19  
**Descrição**: Implementar funcionalidade de busca por voz para localizar pontos de descarte e agendamentos, funcionando também offline.  
**Dificuldade**: 34  
**Dependências**:
- Web Speech API para captura de voz.
- Sincronização de pontos de descarte no cache local.

---

#### **Tarefa 20: Monitoramento de Conexão**
**Código**: T20  
**Descrição**: Adicionar um indicador no PWA para informar o estado da conexão do usuário (online/offline).  
**Dificuldade**: 8  
**Dependências**:
- API de Conexão do Navegador (`navigator.onLine`).
- Componente React para exibir status dinâmico.

---

#### **Tarefa 21: Integração com API de Previsão do Tempo**
**Código**: T21  
**Descrição**: Integrar uma API de previsão do tempo (como OpenWeather) para exibir condições climáticas relevantes para catadores planejarem suas coletas.  
**Dificuldade**: 13  
**Dependências**:
- Configurar chamada à API OpenWeather.
- Componente React para exibir previsões na interface.

---

#### **Tarefa 22: Integração com API de Mapas (OpenStreetMap)**
**Código**: T22  
**Descrição**: Substituir dependências pagas como Google Maps por APIs gratuitas, como OpenStreetMap, para exibir pontos de descarte e localizações de catadores.  
**Dificuldade**: 21  
**Dependências**:
- Biblioteca Leaflet para renderização de mapas.
- Firebase Firestore para armazenar dados de localização.

---

#### **Tarefa 23: Classificação Automática de Resíduos**
**Código**: T23  
**Descrição**: Usar APIs de machine learning gratuitas, como Teachable Machine, para identificar tipos de resíduos com base em imagens enviadas pelos usuários.  
**Dificuldade**: 34  
**Dependências**:
- Implementar upload de imagens para o modelo.
- Configurar integração com Firebase Firestore para armazenar resultados.

---

#### **Tarefa 24: API de Tradução (LibreTranslate)**
**Código**: T24  
**Descrição**: Implementar tradução automática da interface para idiomas locais usando a API LibreTranslate, promovendo inclusão linguística.  
**Dificuldade**: 13  
**Dependências**:
- Configuração de chamadas à API.
- Atualização dinâmica da interface com os resultados.

---

#### **Tarefa 25: Geração de Estatísticas Ambientais**
**Código**: T25  
**Descrição**: Usar APIs ambientais gratuitas, como Climate Data API, para exibir informações sobre o impacto da reciclagem em CO₂ reduzido ou energia economizada.  
**Dificuldade**: 21  
**Dependências**:
- Integração da API com métricas locais do Firestore.
- Componente React para exibir estatísticas.

---

#### **Tarefa 26: Integração com API de Plantio de Árvores**
**Código**: T26  
**Descrição**: Conectar a API da Ecosia ou outra similar para mostrar quantas árvores podem ser plantadas com base na quantidade de resíduos reciclados.  
**Dificuldade**: 13  
**Dependências**:
- Consulta à API de plantio.
- Componente React para exibir dados na interface.

---

#### **Tarefa 27: Rastreamento de Catadores com API Geolocation**
**Código**: T27  
**Descrição**: Usar a API Geolocation gratuita do navegador para permitir que catadores compartilhem sua localização atual em tempo real.  
**Dificuldade**: 34  
**Dependências**:
- API Geolocation do navegador.
- Atualização de coordenadas em Firebase Firestore.

---

#### **Tarefa 28: Busca de Ponto de Descarte por CEP**
**Código**: T28  
**Descrição**: Usar APIs gratuitas como ViaCEP para buscar pontos de descarte com base no CEP do usuário.  
**Dificuldade**: 8  
**Dependências**:
- Integração com a API ViaCEP.
- Atualização dinâmica do mapa e lista de pontos.

---

#### **Tarefa 29: Integração com API de Calculadora de Rotas**
**Código**: T29  
**Descrição**: Usar APIs gratuitas como OSRM para calcular rotas entre doadores e catadores.  
**Dificuldade**: 21  
**Dependências**:
- API OSRM para cálculos de rota.
- Exibição de trajetos no mapa.

---

#### **Tarefa 30: Monitoramento de Qualidade do Ar**
**Código**: T30  
**Descrição**: Exibir informações sobre a qualidade do ar local usando APIs gratuitas, como a AirVisual API.  
**Dificuldade**: 21  
**Dependências**:
- Integração com AirVisual API.
- Componente React para exibição de dados em tempo real.

---

#### **Tarefa 31: Integração com Google Maps API Free Tier**
**Código**: T31  
**Descrição**: Adicionar suporte a mapas do Google Maps para exibir pontos de descarte e rotas para catadores, usando o free tier da API.  
**Dificuldade**: 13  
**Dependências**:
- Configuração de Google Maps API (JavaScript API).
- Firebase Firestore para armazenar e consultar pontos de descarte.

---

#### **Tarefa 32: Integração com Google Calendar API**
**Código**: T32  
**Descrição**: Permitir que doadores e catadores sincronizem agendamentos de coleta com seus calendários do Google.  
**Dificuldade**: 21  
**Dependências**:
- Configuração da API Google Calendar.
- Implementação de autenticação OAuth para integração com contas Google.

---

#### **Tarefa 33: Tradução Automática com Google Translate API Free Tier**
**Código**: T33  
**Descrição**: Usar a API gratuita do Google Translate para traduzir automaticamente a interface da aplicação para diferentes idiomas.  
**Dificuldade**: 13  
**Dependências**:
- Integração com Google Translate API.
- Componente React para atualizar o idioma dinamicamente.

---

#### **Tarefa 34: Armazenamento de Imagens no Google Photos**
**Código**: T34  
**Descrição**: Permitir que os usuários façam upload de fotos de resíduos e armazenem no Google Photos com pastas específicas para o projeto.  
**Dificuldade**: 21  
**Dependências**:
- Integração com Google Photos API.
- Configuração de permissões OAuth para acesso do usuário.

---

#### **Tarefa 35: Análise de Dados com Google Sheets**
**Código**: T35  
**Descrição**: Exportar relatórios de resíduos coletados e métricas ambientais diretamente para planilhas no Google Sheets.  
**Dificuldade**: 21  
**Dependências**:
- Integração com Google Sheets API.
- Configuração de autenticação OAuth para acesso às planilhas.

---

#### **Tarefa 36: Busca de Locais com Google Places API**
**Código**: T36  
**Descrição**: Adicionar busca de locais (como pontos de descarte) usando a API Google Places para melhorar a precisão e acessibilidade.  
**Dificuldade**: 13  
**Dependências**:
- Configuração de Google Places API.
- Integração com Firebase Firestore para sincronizar pontos encontrados.

---

#### **Tarefa 37: Integração com Google Drive**
**Código**: T37  
**Descrição**: Permitir que catadores e doadores façam upload e compartilhem documentos relacionados à reciclagem diretamente no Google Drive.  
**Dificuldade**: 21  
**Dependências**:
- Integração com Google Drive API.
- Configuração de permissões para pastas e arquivos.

---

#### **Tarefa 38: Autenticação com Google Sign-In**
**Código**: T38  
**Descrição**: Adicionar suporte ao Google Sign-In para login rápido e seguro dos usuários.  
**Dificuldade**: 8  
**Dependências**:
- Firebase Authentication com provedor Google.
- Atualização do fluxo de autenticação no React.

---

#### **Tarefa 39: Integração com Google Cloud Vision API**
**Código**: T39  
**Descrição**: Usar a Cloud Vision API para identificar tipos de resíduos em imagens enviadas pelos usuários, automatizando a categorização.  
**Dificuldade**: 34  
**Dependências**:
- Configuração da Google Cloud Vision API.
- Firebase Storage para armazenar imagens temporariamente.

---

#### **Tarefa 40: Criação de Dashboards com Google Data Studio**
**Código**: T40  
**Descrição**: Fornecer dashboards visuais interativos para catadores e doadores, mostrando métricas ambientais e de reciclagem por meio do Google Data Studio.  
**Dificuldade**: 21  
**Dependências**:
- Integração com Firestore para exportar dados.
- Configuração de relatórios no Google Data Studio.

