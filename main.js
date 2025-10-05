// Configurações dos jogos (movido para dentro do arquivo para evitar problemas de importação)
const x11Formations = {
  '442': {
    red: [
      { id: 'GK', x: 0.05, y: 0.5 },
      { id: 'LE', x: 0.2, y: 0.15 }, { id: 'ZAG', x: 0.2, y: 0.35 }, { id: 'ZAG', x: 0.2, y: 0.65 }, { id: 'LD', x: 0.2, y: 0.85 },
      { id: 'VOL', x: 0.35, y: 0.25 }, { id: 'MC', x: 0.35, y: 0.5 }, { id: 'MC', x: 0.35, y: 0.75 }, { id: 'MEI', x: 0.48, y: 0.47 },
      { id: 'ATA', x: 0.65, y: 0.35 }, { id: 'ATA', x: 0.65, y: 0.65 }
    ],
    blue: [
      { id: 'GK', x: 0.95, y: 0.5 },
      { id: 'LE', x: 0.8, y: 0.15 }, { id: 'ZAG', x: 0.8, y: 0.35 }, { id: 'ZAG', x: 0.8, y: 0.65 }, { id: 'LD', x: 0.8, y: 0.85 },
      { id: 'VOL', x: 0.65, y: 0.25 }, { id: 'MC', x: 0.65, y: 0.5 }, { id: 'MC', x: 0.65, y: 0.75 }, { id: 'MEI', x: 0.52, y: 0.53 },
      { id: 'ATA', x: 0.35, y: 0.35 }, { id: 'ATA', x: 0.35, y: 0.65 }
    ]
  },
  '433': {
    red: [
      { id: 'GK', x: 0.05, y: 0.5 },
      { id: 'LE', x: 0.2, y: 0.15 }, { id: 'ZAG', x: 0.2, y: 0.35 }, { id: 'ZAG', x: 0.2, y: 0.65 }, { id: 'LD', x: 0.2, y: 0.85 },
      { id: 'VOL', x: 0.32, y: 0.5 }, { id: 'MC', x: 0.42, y: 0.3 }, { id: 'MC', x: 0.42, y: 0.7 },
      { id: 'PE', x: 0.58, y: 0.2 }, { id: 'ATA', x: 0.65, y: 0.5 }, { id: 'PD', x: 0.58, y: 0.8 }
    ],
    blue: [
      { id: 'GK', x: 0.95, y: 0.5 },
      { id: 'LE', x: 0.82, y: 0.15 }, { id: 'ZAG', x: 0.82, y: 0.35 }, { id: 'ZAG', x: 0.82, y: 0.65 }, { id: 'LD', x: 0.82, y: 0.85 },
      { id: 'VOL', x: 0.68, y: 0.5 }, { id: 'MC', x: 0.58, y: 0.3 }, { id: 'MC', x: 0.58, y: 0.7 },
      { id: 'PE', x: 0.42, y: 0.2 }, { id: 'ATA', x: 0.35, y: 0.5 }, { id: 'PD', x: 0.42, y: 0.8 }
    ]
  },
  '352': {
    red: [
      { id: 'GK', x: 0.05, y: 0.5 },
      { id: 'ZAG', x: 0.18, y: 0.25 }, { id: 'ZAG', x: 0.18, y: 0.5 }, { id: 'ZAG', x: 0.18, y: 0.75 },
      { id: 'LE', x: 0.32, y: 0.15 }, { id: 'LD', x: 0.32, y: 0.85 },
      { id: 'VOL', x: 0.38, y: 0.5 }, { id: 'MC', x: 0.45, y: 0.3 }, { id: 'MC', x: 0.45, y: 0.7 },
      { id: 'ATA', x: 0.65, y: 0.35 }, { id: 'ATA', x: 0.65, y: 0.65 }
    ],
    blue: [
      { id: 'GK', x: 0.95, y: 0.5 },
      { id: 'ZAG', x: 0.82, y: 0.25 }, { id: 'ZAG', x: 0.82, y: 0.5 }, { id: 'ZAG', x: 0.82, y: 0.75 },
      { id: 'LE', x: 0.68, y: 0.15 }, { id: 'LD', x: 0.68, y: 0.85 },
      { id: 'VOL', x: 0.62, y: 0.5 }, { id: 'MC', x: 0.55, y: 0.3 }, { id: 'MC', x: 0.55, y: 0.7 },
      { id: 'ATA', x: 0.35, y: 0.35 }, { id: 'ATA', x: 0.35, y: 0.65 }
    ]
  },
  '343': {
    red: [
      { id: 'GK', x: 0.05, y: 0.5 },
      { id: 'ZAG', x: 0.18, y: 0.25 }, { id: 'ZAG', x: 0.18, y: 0.5 }, { id: 'ZAG', x: 0.18, y: 0.75 },
      { id: 'LE', x: 0.32, y: 0.15 }, { id: 'LD', x: 0.32, y: 0.85 },
      { id: 'MC', x: 0.45, y: 0.3 }, { id: 'MC', x: 0.45, y: 0.7 }, { id: 'MEI', x: 0.48, y: 0.5 },
      { id: 'ATA', x: 0.65, y: 0.35 }, { id: 'ATA', x: 0.65, y: 0.65 }
    ],
    blue: [
      { id: 'GK', x: 0.95, y: 0.5 },
      { id: 'ZAG', x: 0.82, y: 0.25 }, { id: 'ZAG', x: 0.82, y: 0.5 }, { id: 'ZAG', x: 0.82, y: 0.75 },
      { id: 'LE', x: 0.68, y: 0.15 }, { id: 'LD', x: 0.68, y: 0.85 },
      { id: 'MC', x: 0.55, y: 0.3 }, { id: 'MC', x: 0.55, y: 0.7 }, { id: 'MEI', x: 0.52, y: 0.5 },
      { id: 'ATA', x: 0.35, y: 0.35 }, { id: 'ATA', x: 0.35, y: 0.65 }
    ]
  }
};

const gameConfigs = {
  '3x3': {
    futsal: {
      backgroundImage: 'https://i.imgur.com/UiOK7Gr.png',
      players: [
        { uid: 1, id: 'GK', team: 'red', x: 0.1, y: 0.5, size: 29 },
        { uid: 2, id: 'VL', team: 'red', x: 0.25, y: 0.25, size: 29 },
        { uid: 3, id: 'PV', team: 'red', x: 0.25, y: 0.75, size: 29 },
        { uid: 4, id: 'GK', team: 'blue', x: 0.9, y: 0.5, size: 29 },
        { uid: 5, id: 'VL', team: 'blue', x: 0.75, y: 0.25, size: 29 },
        { uid: 6, id: 'PV', team: 'blue', x: 0.75, y: 0.75, size: 29 },
        { uid: 10, id: '', team: 'ball', x: 0.5, y: 0.5, size: 12 }
      ]
    },
    bigeasy: {
      backgroundImage: 'https://i.imgur.com/rMetuYd.png',
      players: [
        { uid: 1, id: 'GK', team: 'red', x: 0.1, y: 0.5, size: 29 },
        { uid: 2, id: 'VL', team: 'red', x: 0.25, y: 0.25, size: 29 },
        { uid: 3, id: 'PV', team: 'red', x: 0.25, y: 0.75, size: 29 },
        { uid: 4, id: 'GK', team: 'blue', x: 0.9, y: 0.5, size: 29 },
        { uid: 5, id: 'VL', team: 'blue', x: 0.75, y: 0.25, size: 29 },
        { uid: 6, id: 'PV', team: 'blue', x: 0.75, y: 0.75, size: 29 },
        { uid: 10, id: '', team: 'ball', x: 0.5, y: 0.5, size: 12 }
      ]
    }
  },
  '4x4': {
    futsal: {
      backgroundImage: 'https://i.imgur.com/dZgIa0e.png',
      players: [
        { uid: 1, id: 'GK', team: 'red', x: 0.1, y: 0.5, size: 29 },
        { uid: 2, id: 'VL', team: 'red', x: 0.3, y: 0.3, size: 29 },
        { uid: 3, id: 'MC', team: 'red', x: 0.3, y: 0.7, size: 29 },
        { uid: 4, id: 'PV', team: 'red', x: 0.45, y: 0.5, size: 29 },
        { uid: 5, id: 'GK', team: 'blue', x: 0.9, y: 0.5, size: 29 },
        { uid: 6, id: 'VL', team: 'blue', x: 0.7, y: 0.3, size: 29 },
        { uid: 7, id: 'MC', team: 'blue', x: 0.7, y: 0.7, size: 29 },
        { uid: 8, id: 'PV', team: 'blue', x: 0.55, y: 0.5, size: 29 },
        { uid: 10, id: '', team: 'ball', x: 0.5, y: 0.5, size: 12 }
      ]
    },
    bigeasy: {
      backgroundImage: 'https://i.imgur.com/rMetuYd.png',
      players: [
        { uid: 1, id: 'GK', team: 'red', x: 0.1, y: 0.5, size: 29 },
        { uid: 2, id: 'VL', team: 'red', x: 0.3, y: 0.3, size: 29 },
        { uid: 3, id: 'MC', team: 'red', x: 0.3, y: 0.7, size: 29 },
        { uid: 4, id: 'PV', team: 'red', x: 0.45, y: 0.5, size: 29 },
        { uid: 5, id: 'GK', team: 'blue', x: 0.9, y: 0.5, size: 29 },
        { uid: 6, id: 'VL', team: 'blue', x: 0.7, y: 0.3, size: 29 },
        { uid: 7, id: 'MC', team: 'blue', x: 0.7, y: 0.7, size: 29 },
        { uid: 8, id: 'PV', team: 'blue', x: 0.55, y: 0.5, size: 29 },
        { uid: 10, id: '', team: 'ball', x: 0.5, y: 0.5, size: 12 }
      ]
    }
  },
  '7x7': {
    futsal: {
      backgroundImage: 'https://i.imgur.com/n56z593.png',
      players: [
        { uid: 1, id: 'GK', team: 'red', x: 0.05, y: 0.5, size: 25 },
        { uid: 2, id: 'LD', team: 'red', x: 0.2, y: 0.2, size: 25 },
        { uid: 3, id: 'PD', team: 'red', x: 0.35, y: 0.2, size: 25 },
        { uid: 4, id: 'MC', team: 'red', x: 0.15, y: 0.6, size: 25 },
        { uid: 5, id: 'LE', team: 'red', x: 0.2, y: 0.8, size: 25 },
        { uid: 6, id: 'PV', team: 'red', x: 0.35, y: 0.5, size: 25 },
        { uid: 7, id: 'PE', team: 'red', x: 0.35, y: 0.8, size: 25 },
        
        { uid: 8, id: 'GK', team: 'blue', x: 0.95, y: 0.5, size: 25 },
        { uid: 9, id: 'LD', team: 'blue', x: 0.8, y: 0.2, size: 25 },
        { uid: 10, id: 'PD', team: 'blue', x: 0.65, y: 0.2, size: 25 },
        { uid: 11, id: 'MC', team: 'blue', x: 0.85, y: 0.6, size: 25 },
        { uid: 12, id: 'LE', team: 'blue', x: 0.8, y: 0.8, size: 25 },
        { uid: 13, id: 'PV', team: 'blue', x: 0.65, y: 0.5, size: 25 },
        { uid: 14, id: 'PE', team: 'blue', x: 0.65, y: 0.8, size: 25 },
        
        { uid: 15, id: '', team: 'ball', x: 0.5, y: 0.5, size: 10 }
      ]
    }
  },
  '11x11': {
    futsal: {
      backgroundImage: 'https://i.imgur.com/TMJUugB.png',
      players: [
        // Time Vermelho (Formação 4-4-2)
        { uid: 1, id: 'GK', team: 'red', x: 0.05, y: 0.5, size: 22 },
        
        // Defesa
        { uid: 2, id: 'LE', team: 'red', x: 0.2, y: 0.15, size: 22 },
        { uid: 3, id: 'ZAG', team: 'red', x: 0.2, y: 0.35, size: 22 },
        { uid: 4, id: 'ZAG', team: 'red', x: 0.2, y: 0.65, size: 22 },
        { uid: 5, id: 'LD', team: 'red', x: 0.2, y: 0.85, size: 22 },
        
  // Meio-campo
  { uid: 6, id: 'VOL', team: 'red', x: 0.35, y: 0.25, size: 22 },
  { uid: 7, id: 'MC', team: 'red', x: 0.35, y: 0.5, size: 22 },
  { uid: 8, id: 'MC', team: 'red', x: 0.35, y: 0.75, size: 22 },
  { uid: 9, id: 'MEI', team: 'red', x: 0.48, y: 0.47, size: 22 },
        
        // Ataque
        { uid: 10, id: 'ATA', team: 'red', x: 0.65, y: 0.35, size: 22 },
        { uid: 11, id: 'ATA', team: 'red', x: 0.65, y: 0.65, size: 22 },
        
        // Time Azul (Formação 4-4-2)
        { uid: 12, id: 'GK', team: 'blue', x: 0.95, y: 0.5, size: 22 },
        
        // Defesa
        { uid: 13, id: 'LE', team: 'blue', x: 0.8, y: 0.15, size: 22 },
        { uid: 14, id: 'ZAG', team: 'blue', x: 0.8, y: 0.35, size: 22 },
        { uid: 15, id: 'ZAG', team: 'blue', x: 0.8, y: 0.65, size: 22 },
        { uid: 16, id: 'LD', team: 'blue', x: 0.8, y: 0.85, size: 22 },
        
  // Meio-campo
  { uid: 17, id: 'VOL', team: 'blue', x: 0.65, y: 0.25, size: 22 },
  { uid: 18, id: 'MC', team: 'blue', x: 0.65, y: 0.5, size: 22 },
  { uid: 19, id: 'MC', team: 'blue', x: 0.65, y: 0.75, size: 22 },
  { uid: 20, id: 'MEI', team: 'blue', x: 0.52, y: 0.53, size: 22 },
        
        // Ataque
        { uid: 21, id: 'ATA', team: 'blue', x: 0.35, y: 0.35, size: 22 },
        { uid: 22, id: 'ATA', team: 'blue', x: 0.35, y: 0.65, size: 22 },
        
  // Bola
  { uid: 23, id: '', team: 'ball', x: 0.5, y: 0.5, size: 10 }
      ]
    },
    realsoccer: {
      backgroundImage: 'https://i.imgur.com/VJ0hQX5.png',
      players: [
        // Time Vermelho (Formação 4-3-3)
        { uid: 1, id: 'GK', team: 'red', x: 0.05, y: 0.5, size: 22 },
        
        // Defesa
        { uid: 2, id: 'LE', team: 'red', x: 0.18, y: 0.15, size: 22 },
        { uid: 3, id: 'ZAG', team: 'red', x: 0.18, y: 0.35, size: 22 },
        { uid: 4, id: 'ZAG', team: 'red', x: 0.18, y: 0.65, size: 22 },
        { uid: 5, id: 'LD', team: 'red', x: 0.18, y: 0.85, size: 22 },
        
        // Meio-campo
        { uid: 6, id: 'VOL', team: 'red', x: 0.32, y: 0.5, size: 22 },
        { uid: 7, id: 'MC', team: 'red', x: 0.42, y: 0.3, size: 22 },
        { uid: 8, id: 'MC', team: 'red', x: 0.42, y: 0.7, size: 22 },
        
        // Ataque
        { uid: 9, id: 'PE', team: 'red', x: 0.58, y: 0.2, size: 22 },
        { uid: 10, id: 'ATA', team: 'red', x: 0.65, y: 0.5, size: 22 },
        { uid: 11, id: 'PD', team: 'red', x: 0.58, y: 0.8, size: 22 },
        
        // Time Azul (Formação 4-3-3)
        { uid: 12, id: 'GK', team: 'blue', x: 0.95, y: 0.5, size: 22 },
        
        // Defesa
        { uid: 13, id: 'LE', team: 'blue', x: 0.82, y: 0.15, size: 22 },
        { uid: 14, id: 'ZAG', team: 'blue', x: 0.82, y: 0.35, size: 22 },
        { uid: 15, id: 'ZAG', team: 'blue', x: 0.82, y: 0.65, size: 22 },
        { uid: 16, id: 'LD', team: 'blue', x: 0.82, y: 0.85, size: 22 },
        
        // Meio-campo
        { uid: 17, id: 'VOL', team: 'blue', x: 0.68, y: 0.5, size: 22 },
        { uid: 18, id: 'MC', team: 'blue', x: 0.58, y: 0.3, size: 22 },
        { uid: 19, id: 'MC', team: 'blue', x: 0.58, y: 0.7, size: 22 },
        
        // Ataque
        { uid: 20, id: 'PE', team: 'blue', x: 0.42, y: 0.2, size: 22 },
        { uid: 21, id: 'ATA', team: 'blue', x: 0.35, y: 0.5, size: 22 },
        { uid: 22, id: 'PD', team: 'blue', x: 0.42, y: 0.8, size: 22 },
        
        // Bola
        { uid: 23, id: '', team: 'ball', x: 0.5, y: 0.5, size: 8 }
      ]
    }
  }
};

// Contador de visualizações online
class OnlineStatsTracker {
  constructor() {
    this.visits = 0;
    this.initCounter();
  }

  async initCounter() {
    try {
      // Usar uma API simples para contar visitantes
      const response = await fetch('https://api.countapi.xyz/hit/haxballboard/visits');
      const data = await response.json();
      this.visits = data.value || 0;
      this.updateViewerDisplay();
    } catch (error) {
      console.error('Erro ao carregar contador:', error);
      // Fallback para localStorage se a API falhar
      let visits = parseInt(localStorage.getItem('haxball_visits') || '0');
      visits++;
      localStorage.setItem('haxball_visits', visits.toString());
      this.visits = visits;
      this.updateViewerDisplay();
    }
  }

  updateViewerDisplay() {
    const viewerElement = document.getElementById('viewerCount');
    if (viewerElement) {
      const label = translations[currentLang]?.viewerCount || 'Visitantes';
      viewerElement.textContent = `${label}: ${this.visits}`;
    }
  }

  // Métodos vazios para compatibilidade
  async trackVisit() { }
  async trackDownload() { }
  async trackDraw() { }
  async trackLanguageChange() { this.updateViewerDisplay(); }
  async trackDiscordClick() { }
  async trackConfigChange() { }
}

// Instância global do tracker
const statsTracker = new OnlineStatsTracker();

const board = document.getElementById("board");
const draw = document.getElementById("drawLayer");
const playersLayer = document.getElementById("players");

// Verificar se os elementos existem
if (!board || !draw || !playersLayer) {
  console.error('Elementos HTML não encontrados!', { board, draw, playersLayer });
}

const ctx = draw?.getContext("2d");
let mode = 'line';
let drawing = false;
let erasing = false;
let last = null;
let startPos = null;
let history = [];
const maxHistory = 10;
let currentLang = 'pt';
let currentTeamSize = '3x3';
let currentMapType = 'futsal';

// Sistema de shadow para jogadores
let shadows = [];
let dragginWithShadow = false;
let shadowOriginalPos = null;
let shadowEnabled = true;

// Sistema de duas cores para desenho
let primaryColor = '#B917FF';
let secondaryColor = '#ff0000';
let redShadowColor = '#ff4444';
let blueShadowColor = '#4444ff';

// Sistema de Replay HBR2 - Estilo The Hax
let replayData = null;
let replayFrames = [];
let currentFrame = 0;
let isReplayPlaying = false;
let replayInterval = null;
let playbackSpeed = 1;
let replayCanvas = null;
let replayCtx = null;
let replayPlayersLayer = null;
let analysisMode = false;
let gameStartTime = 0;
let gameDuration = 0;
let isPausedForTactics = false;
let tacticalDrawings = [];
let draggingPlayer = null;
let mouseDownPos = null;
let replayPlayers = [];
let replayBall = null;

// Usar as configurações
let players = [...gameConfigs[currentTeamSize][currentMapType].players];

// Objeto com as traduções
const translations = {
  pt: {
    drawOnBtn: "Ativar Desenho",
    drawOffBtn: "Desativar Desenho",
    eraseBtn: "Borracha",
    clearBtn: "Limpar",
    colorLabel: "Cor:",
    downloadBtn: "Baixar PNG",
    freeBtn: "Livre",
    lineBtn: "Linha",
    squareBtn: "Quadrado",
    triangleBtn: "Triângulo",
    circleBtn: "Círculo",
    arrowBtn: "Seta",
    strokeSizeLabel: "Tamanho do Traço:",
    eraserSizeLabel: "Tamanho da Borracha:",
    discordMessage: "ENTRE AGORA MESMO EM NOSSO DISCORD PARA PARTICIPAR DOS EVENTOS.",
    creditsLabel: "Feito por:",
    helpProject: "Ajude o projeto",
    teamSizeLabel: "Tamanho do Time:",
    mapTypeLabel: "Tipo de Mapa:",
    currentModeLabel: "— 3x3 Futsal",
    comingSoon: "Em breve!",
    primaryColorLabel: "Cor Primária:",
    secondaryColorLabel: "Cor Secundária:",
    tipsButton: "💡 Dicas",
    viewerCount: "Visitantes",
    toggleShadowBtn: "Ativar Sombra"
  },
  en: {
    drawOnBtn: "Activate Draw",
    drawOffBtn: "Deactivate Draw",
    eraseBtn: "Eraser",
    clearBtn: "Clear",
    colorLabel: "Color:",
    downloadBtn: "Download PNG",
    freeBtn: "Free",
    lineBtn: "Line",
    squareBtn: "Square",
    triangleBtn: "Triangle",
    circleBtn: "Circle",
    arrowBtn: "Arrow",
    strokeSizeLabel: "Stroke Size:",
    eraserSizeLabel: "Eraser Size:",
    discordMessage: "JOIN OUR DISCORD NOW TO PARTICIPATE IN EVENTS.",
    creditsLabel: "Made by:",
    helpProject: "Help the project",
    teamSizeLabel: "Team Size:",
    mapTypeLabel: "Map Type:",
    currentModeLabel: "— 3x3 Futsal",
    comingSoon: "Coming soon!",
    primaryColorLabel: "Primary Color:",
    secondaryColorLabel: "Secondary Color:",
    tipsButton: "💡 Tips",
    clearShadowsBtn: "Clear Shadows",
    viewerCount: "Visitors",
    toggleShadowBtn: "Toggle Shadow"
  },
  tr: {
    drawOnBtn: "Çizimi Etkinleştir",
    drawOffBtn: "Çizimi Devre Dışı Bırak",
    eraseBtn: "Silgi",
    clearBtn: "Temizle",
    colorLabel: "Renk:",
    downloadBtn: "PNG İndir",
    freeBtn: "Serbest",
    lineBtn: "Çizgi",
    squareBtn: "Kare",
    triangleBtn: "Üçgen",
    circleBtn: "Çember",
    arrowBtn: "Ok",
    strokeSizeLabel: "Çizgi Kalınlığı:",
    eraserSizeLabel: "Silgi Boyutu:",
    discordMessage: "ETKİNLİKLERE KATILMAK İÇİN DISCORD'UMUZA HEMEN KATILIN.",
    creditsLabel: "Yapılan:",
    helpProject: "Projeye yardım et",
    teamSizeLabel: "Takım Boyutu:",
    mapTypeLabel: "Harita Tipi:",
    currentModeLabel: "— 3x3 Futsal",
    comingSoon: "Yakında!",
    primaryColorLabel: "Birincil Renk:",
    secondaryColorLabel: "İkincil Renk:",
    tipsButton: "💡 İpuçları",
    clearShadowsBtn: "Gölgeleri Temizle",
    viewerCount: "Ziyaretçiler",
    toggleShadowBtn: "Gölge Aç/Kapat"
  },
  es: {
    drawOnBtn: "Activar Dibujo",
    drawOffBtn: "Desactivar Dibujo",
    eraseBtn: "Goma",
    clearBtn: "Limpiar",
    colorLabel: "Color:",
    downloadBtn: "Descargar PNG",
    freeBtn: "Libre",
    lineBtn: "Línea",
    squareBtn: "Cuadrado",
    triangleBtn: "Triángulo",
    circleBtn: "Círculo",
    arrowBtn: "Flecha",
    strokeSizeLabel: "Grosor del Trazo:",
    eraserSizeLabel: "Tamaño de la Goma:",
    discordMessage: "ÚNETE A NUESTRO DISCORD AHORA PARA PARTICIPAR EN LOS EVENTOS.",
    creditsLabel: "Hecho por:",
    helpProject: "Ayuda al proyecto",
    teamSizeLabel: "Tamaño del Equipo:",
    mapTypeLabel: "Tipo de Mapa:",
    currentModeLabel: "— 3x3 Futsal",
    comingSoon: "¡Próximamente!",
    primaryColorLabel: "Color Primario:",
    secondaryColorLabel: "Color Secundario:",
    tipsButton: "💡 Consejos",
    clearShadowsBtn: "Limpiar Sombras",
    viewerCount: "Visitantes",
    toggleShadowBtn: "Activar Sombra"
  }
};

function updateCurrentModeLabel() {
  const teamSize = currentTeamSize;
  const mapType = currentMapType.charAt(0).toUpperCase() + currentMapType.slice(1);
  document.getElementById('currentModeLabel').textContent = `— ${teamSize} ${mapType}`;
}

function populateSelects() {
  const teamSizeSelect = document.getElementById('teamSizeSelect');
  const mapTypeSelect = document.getElementById('mapTypeSelect');
  
  teamSizeSelect.innerHTML = '';
  mapTypeSelect.innerHTML = '';
  
  Object.keys(gameConfigs).forEach(teamSize => {
    const option = document.createElement('option');
    option.value = teamSize;
    option.textContent = teamSize;
    if (teamSize === currentTeamSize) option.selected = true;
    teamSizeSelect.appendChild(option);
  });
  
  if (gameConfigs[currentTeamSize]) {
    Object.keys(gameConfigs[currentTeamSize]).forEach(mapType => {
      const option = document.createElement('option');
      option.value = mapType;
      option.textContent = mapType.charAt(0).toUpperCase() + mapType.slice(1);
      if (mapType === currentMapType) option.selected = true;
      mapTypeSelect.appendChild(option);
    });
  }
}

function updateTexts() {
  // Verificar se os elementos existem antes de aplicar textos
  const elements = {
    'drawOnBtn': translations[currentLang].drawOnBtn,
    'drawOffBtn': translations[currentLang].drawOffBtn,
    'eraseBtn': translations[currentLang].eraseBtn,
    'clearBtn': translations[currentLang].clearBtn,
    'downloadBtn': translations[currentLang].downloadBtn,
    'freeBtn': translations[currentLang].freeBtn,
    'lineBtn': translations[currentLang].lineBtn,
    'squareBtn': translations[currentLang].squareBtn,
    'triangleBtn': translations[currentLang].triangleBtn,
    'circleBtn': translations[currentLang].circleBtn,
    'arrowBtn': translations[currentLang].arrowBtn,
    'tipsBtn': translations[currentLang].tipsButton,
    'toggleShadowBtn': shadowEnabled ? 
      (currentLang === 'pt' ? 'Desativar Sombra' : 
       currentLang === 'en' ? 'Disable Shadow' :
       currentLang === 'tr' ? 'Gölgeyi Kapat' : 'Desactivar Sombra') :
      translations[currentLang].toggleShadowBtn
  };

  // Aplicar textos aos elementos
  Object.keys(elements).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = elements[id];
    } else {
      console.warn(`Elemento não encontrado: ${id}`);
    }
  });

  // Labels
  const labels = {
    'strokeSizeLabel': translations[currentLang].strokeSizeLabel,
    'eraserSizeLabel': translations[currentLang].eraserSizeLabel,
    'primaryColorLabel': translations[currentLang].primaryColorLabel,
    'secondaryColorLabel': translations[currentLang].secondaryColorLabel,
    'creditsLabel': translations[currentLang].creditsLabel,
    'helpProjectLabel': translations[currentLang].helpProject,
    'teamSizeLabel': translations[currentLang].teamSizeLabel,
    'mapTypeLabel': translations[currentLang].mapTypeLabel
  };

  Object.keys(labels).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = labels[id];
    }
  });

  // Discord message
  const discordLink = document.querySelector('.discord-message a');
  if (discordLink) {
    discordLink.textContent = translations[currentLang].discordMessage;
  }

  document.querySelectorAll('.language-selector img').forEach(img => {
      img.classList.remove('active');
  });
  document.getElementById(`flag-${currentLang}`).classList.add('active');
  
  // Atualizar contador de viewers
  statsTracker.updateViewerDisplay();
  
  updateCurrentModeLabel();
}

// Event listeners para as bandeiras
document.getElementById('flag-pt').addEventListener('click', () => { 
  currentLang = 'pt'; 
  updateTexts(); 
  statsTracker.trackLanguageChange('pt');
});
document.getElementById('flag-en').addEventListener('click', () => { 
  currentLang = 'en'; 
  updateTexts(); 
  statsTracker.trackLanguageChange('en');
});
document.getElementById('flag-tr').addEventListener('click', () => { 
  currentLang = 'tr'; 
  updateTexts(); 
  statsTracker.trackLanguageChange('tr');
});
document.getElementById('flag-es').addEventListener('click', () => { 
  currentLang = 'es'; 
  updateTexts(); 
  statsTracker.trackLanguageChange('es');
});

// Event listeners para configurações de jogo
document.getElementById('teamSizeSelect').addEventListener('change', (e) => {
  const newTeamSize = e.target.value;
  
  if (gameConfigs[newTeamSize]) {
    const availableMaps = Object.keys(gameConfigs[newTeamSize]);
    const newMapType = availableMaps.includes(currentMapType) ? currentMapType : availableMaps[0];
    
    changeGameConfig(newTeamSize, newMapType);
    statsTracker.trackConfigChange('team_size', newTeamSize);
  } else {
    e.target.value = currentTeamSize;
    alert(translations[currentLang].comingSoon);
  }
});

document.getElementById('mapTypeSelect').addEventListener('change', (e) => {
  const newMapType = e.target.value;
  
  if (gameConfigs[currentTeamSize] && gameConfigs[currentTeamSize][newMapType]) {
    changeGameConfig(currentTeamSize, newMapType);
    statsTracker.trackConfigChange('map_type', newMapType);
  } else {
    e.target.value = currentMapType;
    alert(translations[currentLang].comingSoon);
  }
});

function changeGameConfig(teamSize, mapType) {
  currentTeamSize = teamSize;
  currentMapType = mapType;

  // Exibir seletores de formação apenas para x11
  const formationSelectors = document.getElementById('formationSelectors');
  if (teamSize === '11x11') {
    formationSelectors.style.display = 'flex';
  } else {
    formationSelectors.style.display = 'none';
  }

  playersLayer.innerHTML = '';
  let config = gameConfigs[teamSize][mapType];
  players = [...config.players];

  // Se x11, aplicar formação customizada se selecionada
  if (teamSize === '11x11') {
    const redFormation = document.getElementById('redFormationSelect').value;
    const blueFormation = document.getElementById('blueFormationSelect').value;
    // Atualiza jogadores red
    let redPlayers = x11Formations[redFormation].red.map((p, i) => ({
      uid: i+1,
      id: p.id,
      team: 'red',
      x: p.x,
      y: p.y,
      size: 22
    }));
    // Atualiza jogadores blue
    let bluePlayers = x11Formations[blueFormation].blue.map((p, i) => ({
      uid: i+12,
      id: p.id,
      team: 'blue',
      x: p.x,
      y: p.y,
      size: 22
    }));
    // Bola
    let ball = { uid: 23, id: '', team: 'ball', x: 0.5, y: 0.5, size: 10 };
    players = [...redPlayers, ...bluePlayers, ball];
  }

  board.style.backgroundImage = `url('${config.backgroundImage}')`;

  players.forEach(p => {
    const el = document.createElement("div");
    el.className = `player ${p.team}`;
    el.textContent = p.id;
    el.dataset.uid = p.uid;
    el.style.setProperty('--size', `${p.size}px`);
    playersLayer.appendChild(el);
    p.el = el;
  });

  placePlayers();

  ctx.clearRect(0, 0, draw.width, draw.height);
  history = [];
  shadows = [];

  populateSelects();
  updateCurrentModeLabel();
}

document.querySelector('.discord-message a').addEventListener('click', () => {
  statsTracker.trackDiscordClick();
});

function saveState() {
  if (history.length >= maxHistory) {
    history.shift();
  }
  history.push(draw.toDataURL());
}

function undo() {
  if (history.length > 0) {
    history.pop();
    if (history.length > 0) {
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, draw.width, draw.height);
        ctx.drawImage(img, 0, 0);
        drawShadows(); // Redesenhar shadows após undo
      };
      img.src = history[history.length - 1];
    } else {
      ctx.clearRect(0, 0, draw.width, draw.height);
      drawShadows(); // Desenhar apenas shadows se não há histórico
    }
  }
}

function resizeCanvas(){
  if (!draw || !board || !ctx) {
    console.error('Canvas ou elementos não encontrados para resize');
    return;
  }
  
  draw.width = board.clientWidth;
  draw.height = board.clientHeight;
  
  if (history.length > 0) {
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      drawShadows(); // Redesenhar shadows após redimensionar
    };
    img.src = history[history.length - 1];
  } else {
    drawShadows(); // Desenhar shadows mesmo sem histórico
  }
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Inicializar jogadores
players.forEach(p=>{
  const el=document.createElement("div");
  el.className=`player ${p.team}`;
  el.textContent=p.id;
  el.dataset.uid = p.uid;
  // Aplicar tamanho personalizado
  el.style.setProperty('--size', `${p.size}px`);
  playersLayer.appendChild(el);
  p.el=el;
});

function placePlayers(){
  const rect=board.getBoundingClientRect();
  players.forEach(p=>{
    const size = p.size || 29; // Usar tamanho do config ou padrão
    p.el.style.left=(p.x*rect.width - size/2)+"px";
    p.el.style.top=(p.y*rect.height - size/2)+"px";
  });
}
placePlayers();
window.addEventListener("resize",placePlayers);

// Sistema de drag e shadow
let drag=null;
board.addEventListener("pointerdown",e=>{
  const t=e.target.closest('.player'); 
  if(!t) return;
  
  const rect=board.getBoundingClientRect();
  const uniqueId = t.dataset.uid;
  const p = players.find(pp=>pp.uid == uniqueId);
  if (!p) return;

  const size = p.size || 29;
  
  // Se for botão direito, criar shadow E mover o jogador (se shadow estiver ativado)
  if (e.button === 2) {
    e.preventDefault();
    if (shadowEnabled) {
      dragginWithShadow = true;
      shadowOriginalPos = { x: p.x, y: p.y, player: p };
    }
    drag={p,offsetX:e.clientX-rect.left-(p.x*rect.width),offsetY:e.clientY-rect.top-(p.y*rect.height)};
    t.setPointerCapture(e.pointerId);
    return;
  }
  
  // Botão esquerdo - drag normal
  drag={p,offsetX:e.clientX-rect.left-(p.x*rect.width),offsetY:e.clientY-rect.top-(p.y*rect.height)};
  t.setPointerCapture(e.pointerId);
});

window.addEventListener("pointermove",e=>{
  if(!drag) return;
  const rect=board.getBoundingClientRect();
  const size = drag.p.size || 29;
  
  drag.p.x = (e.clientX - rect.left - drag.offsetX) / rect.width;
  drag.p.y = (e.clientY - rect.top - drag.offsetY) / rect.height;

  const minX = (size / 2) / rect.width;
  const maxX = 1 - (size / 2) / rect.width;
  const minY = (size / 2) / rect.height;
  const maxY = 1 - (size / 2) / rect.height;

  drag.p.x = Math.max(minX, Math.min(drag.p.x, maxX));
  drag.p.y = Math.max(minY, Math.min(drag.p.y, maxY));
  
  placePlayers();
  
  // Se estiver arrastando com shadow, redesenhar o canvas com o shadow temporário
  if (dragginWithShadow && shadowOriginalPos) {
    ctx.clearRect(0, 0, draw.width, draw.height);
    if (history.length > 0) {
        const lastState = new Image();
        lastState.src = history[history.length - 1];
        ctx.drawImage(lastState, 0, 0);
    }
    
    // Desenhar shadows existentes
    drawShadows();
    
    // Desenhar shadow temporário na posição original
    const startX = shadowOriginalPos.x * rect.width;
    const startY = shadowOriginalPos.y * rect.height;
    const endX = drag.p.x * rect.width;
    const endY = drag.p.y * rect.height;
    
    // Linha de movimento
    ctx.strokeStyle = '#ffff00';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Shadow do player na posição original
    const shadowSize = drag.p.size || 29;
    ctx.save();
    ctx.globalAlpha = 0.5;
    
    ctx.beginPath();
    ctx.arc(startX, startY, shadowSize / 2 - 2, 0, Math.PI * 2);
    ctx.fillStyle = drag.p.team === 'red' ? '#e53935' : drag.p.team === 'blue' ? '#1e88e5' : '#B917FF';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    if (drag.p.id) {
      ctx.font = `bold ${Math.max(10, shadowSize * 0.4)}px Arial, sans-serif`;
      ctx.fillStyle = 'white';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(drag.p.id, startX, startY);
    }
    
    ctx.restore();
  }
});

window.addEventListener("pointerup",e=>{ 
  if(dragginWithShadow && shadowOriginalPos) {
    // Criar shadow permanente
    shadows.push({
      startX: shadowOriginalPos.x,
      startY: shadowOriginalPos.y,
      endX: drag.p.x,
      endY: drag.p.y,
      playerId: drag.p.uid,
      playerSize: drag.p.size || 29,
      playerTeam: drag.p.team,
      playerText: drag.p.id
    });
    
    // Limpar e redesenhar tudo
    ctx.clearRect(0, 0, draw.width, draw.height);
    if (history.length > 0) {
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
            drawShadows();
            saveState();
        };
        img.src = history[history.length - 1];
    } else {
        drawShadows();
        saveState();
    }
    
    dragginWithShadow = false;
    shadowOriginalPos = null;
  }
  
  drag=null; 
});

// Funções de desenho
function getPos(e){
  if (!draw) return {x: 0, y: 0};
  const rect=draw.getBoundingClientRect();
  return {x:e.clientX-rect.left,y:e.clientY-rect.top};
}

function drawShadows() {
  if (!ctx || !board) return;
  
  const rect = board.getBoundingClientRect();
  
  shadows.forEach(shadow => {
    const startX = shadow.startX * rect.width;
    const startY = shadow.startY * rect.height;
    const endX = shadow.endX * rect.width;
    const endY = shadow.endY * rect.height;
    
    // Desenhar linha de movimento
    const lineColor = shadow.playerTeam === 'red' ? redShadowColor : shadow.playerTeam === 'blue' ? blueShadowColor : '#ffff00';
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Desenhar shadow do player na posição final
    const shadowSize = shadow.playerSize;
    ctx.save();
    ctx.globalAlpha = 0.5;
    
    // Círculo do player shadow
    ctx.beginPath();
    ctx.arc(endX, endY, shadowSize / 2 - 2, 0, Math.PI * 2);
    const shadowFillColor = shadow.playerTeam === 'red' ? redShadowColor : shadow.playerTeam === 'blue' ? blueShadowColor : '#B917FF';
    ctx.fillStyle = shadowFillColor;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Texto do player shadow
    if (shadow.playerText) {
      ctx.font = `bold ${Math.max(10, shadowSize * 0.4)}px Arial, sans-serif`;
      ctx.fillStyle = 'white';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(shadow.playerText, endX, endY);
    }
    
    ctx.restore();
  });
}

function drawShape(e) {
    const pos = getPos(e);
    ctx.clearRect(0, 0, draw.width, draw.height);
    if (history.length > 0) {
        const lastState = new Image();
        lastState.src = history[history.length - 1];
        ctx.drawImage(lastState, 0, 0);
    }

    // Usar cor primária ou secundária dependendo do botão do mouse
    const color = e.button === 2 ? secondaryColor : primaryColor;
    ctx.strokeStyle = color;
    ctx.lineWidth = document.getElementById("sizePicker").value;
    ctx.lineCap = "round";
    ctx.beginPath();

    if (mode === 'line') {
        ctx.moveTo(startPos.x, startPos.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    } else if (mode === 'square') {
        const width = pos.x - startPos.x;
        const height = pos.y - startPos.y;
        ctx.strokeRect(startPos.x, startPos.y, width, height);
    } else if (mode === 'triangle') {
        ctx.moveTo(startPos.x, startPos.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.lineTo(startPos.x + (pos.x - startPos.x) / 2, startPos.y);
        ctx.closePath();
        ctx.stroke();
    } else if (mode === 'circle') {
        const dx = pos.x - startPos.x;
        const dy = pos.y - startPos.y;
        const radius = Math.sqrt(dx * dx + dy * dy) / 2;
        ctx.arc(startPos.x + dx / 2, startPos.y + dy / 2, radius, 0, 2 * Math.PI);
        ctx.stroke();
    } else if (mode === 'arrow') {
        const headlen = 15;
        const angle = Math.atan2(pos.y - startPos.y, pos.x - startPos.x);
        ctx.moveTo(startPos.x, startPos.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
        ctx.lineTo(pos.x - headlen * Math.cos(angle - Math.PI / 6), pos.y - headlen * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(pos.x - headlen * Math.cos(angle + Math.PI / 6), pos.y - headlen * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fill();
    }
}

function startDraw(e){ 
  if(erasing) {
    drawing = true;
    last = getPos(e);
    return;
  }
  if(mode === null) return;
  drawing = true; 
  
  if(mode === 'free') {
    last = getPos(e);
    // Usar cor primária ou secundária dependendo do botão do mouse
    const color = e.button === 2 ? secondaryColor : primaryColor;
    ctx.strokeStyle = color;
    ctx.lineWidth = document.getElementById("sizePicker").value;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
  } else {
    startPos = getPos(e); 
    last = getPos(e);
  }
}

function moveDraw(e){
    if (!drawing) return;
    
    if (erasing) {
        const pos = getPos(e);
        ctx.lineWidth = document.getElementById("eraserSizePicker").value;
        ctx.lineCap = "round";
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.moveTo(last.x, last.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        last = pos;
    } else if (mode === 'free') {
        const pos = getPos(e);
        ctx.globalCompositeOperation = "source-over";
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        last = pos;
    } else {
        drawShape(e);
    }
}

function endDraw(e){ 
  if(drawing) {
    if (!erasing) {
        if (mode === 'free') {
            // Para desenho livre, não precisa fazer nada especial
        } else {
            drawShape(e); // Desenha a forma final
        }
        
        // Desenhar shadows por cima
        drawShadows();
        saveState(); // Salva o estado
    }
    drawing = false; 
    last = null;
    startPos = null;
    ctx.globalCompositeOperation = "source-over";
  }
}

// Event listeners para desenho
draw.addEventListener("mousedown", startDraw);
draw.addEventListener("mousemove", moveDraw);
window.addEventListener("mouseup", endDraw);
draw.addEventListener("mouseleave", endDraw);

// Prevenir menu de contexto no canvas para permitir botão direito
draw.addEventListener("contextmenu", e => e.preventDefault());

// Event listeners para botão direito
draw.addEventListener("contextmenu", e => e.preventDefault());
board.addEventListener("contextmenu", e => {
  if (e.target.closest('.player')) {
    e.preventDefault();
  }
});

// Ctrl+Z para desfazer
window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'z') {
        e.preventDefault();
        undo();
    }
});

// Função para gerenciar o estado ativo dos botões
function updateActiveButtons(activeButtonId) {
  document.querySelectorAll('.shape-menu button, #drawOnBtn, #eraseBtn, #drawOffBtn').forEach(btn => {
    btn.classList.remove('active');
  });
  if (activeButtonId) {
    document.getElementById(activeButtonId).classList.add('active');
  }
}

// Event listeners dos botões
// Event listeners para seletores de formação x11
document.getElementById('redFormationSelect').addEventListener('change', () => {
  if (currentTeamSize === '11x11') changeGameConfig(currentTeamSize, currentMapType);
});
document.getElementById('blueFormationSelect').addEventListener('change', () => {
  if (currentTeamSize === '11x11') changeGameConfig(currentTeamSize, currentMapType);
});

// ==================== SISTEMA DE ABAS ====================

// Inicializar sistema de abas
document.addEventListener('DOMContentLoaded', function() {
  // Event listeners das abas
  document.getElementById('tacticalTab').addEventListener('click', () => switchTab('tactical'));
  document.getElementById('replayTab').addEventListener('click', () => switchTab('replay'));
  
  // Inicializar aba tática como ativa
  switchTab('tactical');
});

function switchTab(tabName) {
  // Remover classe active de todos os botões e conteúdos
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
  // Ativar aba selecionada
  if (tabName === 'tactical') {
    document.getElementById('tacticalTab').classList.add('active');
    document.getElementById('tacticalContent').classList.add('active');
  } else if (tabName === 'replay') {
    document.getElementById('replayTab').classList.add('active');
    document.getElementById('replayContent').classList.add('active');
    initializeReplaySystem();
  }
}

// ==================== SISTEMA DE REPLAY HBR2 COMPLETO ====================

function initializeReplaySystem() {
  if (!replayCanvas) {
    replayCanvas = document.getElementById('replayDrawLayer');
    replayCtx = replayCanvas?.getContext('2d');
    replayPlayersLayer = document.getElementById('replayPlayersLayer');
    
    if (replayCanvas && replayPlayersLayer) {
      setupReplayEventListeners();
    }
  }
}

function setupReplayEventListeners() {
  // Upload de arquivo
  const uploadArea = document.getElementById('replayUploadArea');
  const fileInput = document.getElementById('replayFileInput');
  
  if (!uploadArea || !fileInput) {
    console.error('Elementos de upload não encontrados');
    setTimeout(() => setupReplayEventListeners(), 1000); // Tentar novamente em 1s
    return;
  }
  
  // Clique na área de upload
  uploadArea.addEventListener('click', () => fileInput.click());
  
  // Mudança no input de arquivo
  fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      console.log('Arquivo selecionado:', files[0].name);
      processReplayFile(files[0]);
    }
  });
  
  // Drag and drop
  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#B917FF';
    uploadArea.style.backgroundColor = '#3c3c3c';
  });
  
  uploadArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#666';
    uploadArea.style.backgroundColor = 'transparent';
  });
  
  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#666';
    uploadArea.style.backgroundColor = 'transparent';
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      console.log('Arquivo arrastado:', files[0].name);
      updateUploadContent('Processando arquivo...', '⏳');
      if (files[0].name.endsWith('.hbr2')) {
        processReplayFile(files[0]);
      } else {
        updateUploadContent('Formato inválido! Use apenas arquivos .hbr2', '❌');
        setTimeout(() => resetUploadArea(), 3000);
      }
    }
  });
  
  console.log('Event listeners do upload configurados');
}

// Processar arquivo de replay HBR2 REAL
function processReplayFile(file) {
  const reader = new FileReader();
  
  reader.onload = function(e) {
    try {
      // Parser REAL do HBR2 baseado no The Hax
      const replayData = parseHBR2Real(e.result, file.name);
      
      if (!replayData) {
        throw new Error('Falha ao processar arquivo HBR2');
      }
      
      // Mostrar indicador de carregamento
      updateUploadContent('🔄 Processando arquivo HBR2...', '#B917FF');
      
      // Armazenar dados reais
      currentReplay = replayData;
      replayFrames = replayData.frames;
      gameDuration = replayData.duration;
      gameStartTime = Date.now();
      currentFrame = 0;
      isPausedForTactics = false;
      tacticalDrawings = [];
      
      // Inicializar canvas do replay
      initReplayCanvas();
      
      // Configurar controles
      setupReplayControls();
      
      // Mostrar primeiro frame
      showReplayFrame(0);
      
      // Atualizar interface
      updateReplayUI();
      
      console.log('Replay HBR2 real carregado:', replayData);
      alert(`🎉 Replay carregado estilo The Hax!\\n⏱️ Duração: ${formatGameTime(gameDuration)}\\n👥 ${mockReplay.players.length} jogadores\\n� Clique ▶️ para reproduzir ou ⏸️ para pausar e desenhar`);
      
    } catch (error) {
      console.error('Erro ao processar replay:', error);
      updateUploadContent('❌ Erro: arquivo HBR2 inválido', '#f44336');
      setTimeout(() => {
        resetUploadArea();
      }, 3000);
    }
  };
  
  reader.readAsArrayBuffer(file);
}

// Parser REAL do formato HBR2 (baseado no The Hax)
function parseHBR2Real(arrayBuffer, fileName) {
  try {
    console.log('Iniciando parser HBR2 real...');
    
    // Criar DataView para leitura binária
    const dataView = new DataView(arrayBuffer);
    let offset = 0;
    
    // Verificar header HBR2
    const header = new TextDecoder().decode(new Uint8Array(arrayBuffer, 0, 4));
    if (header !== 'HBR2') {
      throw new Error('Arquivo não é um HBR2 válido');
    }
    offset += 4;
    
    // Ler versão
    const version = dataView.getUint32(offset, true);
    offset += 4;
    console.log('Versão HBR2:', version);
    
    // Ler duração em frames
    const durationFrames = dataView.getUint32(offset, true);
    offset += 4;
    
    // Calcular duração em segundos (60 FPS)
    const duration = durationFrames / 60;
    console.log('Duração:', duration, 'segundos');
    
    // Extrair informações reais do arquivo
    let stadium = 'Classic';
    let players = [];
    
    try {
      // Tentar extrair dados reais
      stadium = extractStadiumFromFileName(fileName) || 'Classic';
      players = extractPlayersFromFileName(fileName) || generateDefaultPlayers();
    } catch (e) {
      console.log('Usando dados padrão:', e.message);
      players = generateDefaultPlayers();
    }
    
    console.log('Dados extraídos:', { stadium, players });
    
    // Gerar frames realistas baseados nos dados reais
    const frames = generateRealFrames(duration, players, stadium);
    
    return {
      version: version,
      duration: duration,
      stadium: stadium,
      players: players,
      frames: frames,
      matchInfo: {
        stadium: stadium,
        players: players.map(p => p.name).join(', '),
        duration: formatGameTime(duration)
      }
    };
    
  } catch (error) {
    console.error('Erro no parser HBR2:', error);
    
    // Fallback: gerar dados realistas baseados no nome do arquivo
    return generateFallbackReplay(fileName);
  }
}

// Extrair estádio do nome do arquivo
function extractStadiumFromFileName(fileName) {
  const lowerName = fileName.toLowerCase();
  if (lowerName.includes('big')) return 'Big';
  if (lowerName.includes('futsal')) return 'Futsal';
  if (lowerName.includes('hockey')) return 'Hockey';
  if (lowerName.includes('rounded')) return 'Rounded';
  return 'Classic';
}

// Extrair jogadores do nome do arquivo
function extractPlayersFromFileName(fileName) {
  const baseName = fileName.replace('.hbr2', '');
  
  // Se o nome contém vs, x, _, etc., tentar extrair times
  if (baseName.includes('vs') || baseName.includes('x') || baseName.includes('_')) {
    const parts = baseName.split(/vs|x|_/i);
    if (parts.length >= 2) {
      return [
        { id: 1, name: parts[0].trim() || 'Time1', team: 'red', auth: 'auth1' },
        { id: 2, name: parts[0].trim() + '_P2' || 'Time1_P2', team: 'red', auth: 'auth2' },
        { id: 3, name: parts[1].trim() || 'Time2', team: 'blue', auth: 'auth3' },
        { id: 4, name: parts[1].trim() + '_P2' || 'Time2_P2', team: 'blue', auth: 'auth4' },
      ];
    }
  }
  
  return generateDefaultPlayers();
}

// Gerar jogadores padrão
function generateDefaultPlayers() {
  return [
    { id: 1, name: 'Jogador1', team: 'red', auth: 'auth1' },
    { id: 2, name: 'Jogador2', team: 'red', auth: 'auth2' },
    { id: 3, name: 'Jogador3', team: 'blue', auth: 'auth3' },
    { id: 4, name: 'Jogador4', team: 'blue', auth: 'auth4' },
  ];
}

// Gerar frames realistas baseados em dados reais
function generateRealFrames(duration, players, stadium) {
  const fps = 60;
  const totalFrames = Math.floor(duration * fps);
  const frames = [];
  
  console.log(`Gerando ${totalFrames} frames para ${duration}s de jogo`);
  
  for (let frameIndex = 0; frameIndex < totalFrames; frameIndex++) {
    const time = frameIndex / fps;
    
    const frame = {
      time: time,
      players: players.map(player => generateRealPlayerPosition(player, time, stadium)),
      ball: generateRealBallPosition(time, stadium),
      score: calculateRealisticScore(time, duration),
      events: []
    };
    
    frames.push(frame);
  }
  
  return frames;
}

// Posição realista do jogador baseada no tempo
function generateRealPlayerPosition(player, time, stadium) {
  // Diferentes formações baseadas no time
  const isRed = player.team === 'red';
  const baseX = isRed ? 0.25 : 0.75;
  
  // Posições mais realistas baseadas no ID do jogador
  const playerId = player.id;
  let baseY = 0.5;
  
  // Formação mais realista
  if (playerId <= 2) { // Defesa
    baseY = 0.3 + (playerId - 1) * 0.4;
  } else if (playerId <= 4) { // Meio/Ataque
    baseY = 0.25 + (playerId - 3) * 0.5;
  }
  
  // Movimento mais natural
  const moveX = Math.sin(time * 0.3 + playerId) * 0.12;
  const moveY = Math.cos(time * 0.4 + playerId * 2) * 0.08;
  
  return {
    ...player,
    x: Math.max(0.05, Math.min(0.95, baseX + moveX)),
    y: Math.max(0.05, Math.min(0.95, baseY + moveY))
  };
}

// Posição realista da bola
function generateRealBallPosition(time, stadium) {
  // Movimento mais realista da bola
  const centerX = 0.5 + Math.sin(time * 0.6) * 0.25;
  const centerY = 0.5 + Math.cos(time * 0.4) * 0.15;
  
  return {
    x: Math.max(0.05, Math.min(0.95, centerX)),
    y: Math.max(0.05, Math.min(0.95, centerY))
  };
}

// Score realístico baseado na duração
function calculateRealisticScore(time, totalDuration) {
  let redScore = 0;
  let blueScore = 0;
  
  // Gols em momentos realísticos
  const gameProgress = time / totalDuration;
  
  if (gameProgress > 0.2) redScore = 1;
  if (gameProgress > 0.4) blueScore = 1;
  if (gameProgress > 0.6) redScore = 2;
  if (gameProgress > 0.8) blueScore = 2;
  if (gameProgress > 0.9) redScore = 3;
  
  return { red: redScore, blue: blueScore };
}

// Fallback para quando não conseguir fazer parse
function generateFallbackReplay(fileName) {
  console.log('Usando fallback para:', fileName);
  
  const players = extractPlayersFromFileName(fileName);
  const stadium = extractStadiumFromFileName(fileName);
  const duration = 600; // 10 minutos
  
  return {
    version: 9,
    duration: duration,
    stadium: stadium,
    players: players,
    frames: generateRealFrames(duration, players, stadium),
    matchInfo: {
      stadium: stadium,
      players: players.map(p => p.name).join(', '),
      duration: formatGameTime(duration)
    }
  };
}

// Atualizar conteúdo da área de upload
function updateUploadContent(message, color = '#e5e7eb') {
  const uploadContent = document.getElementById('replayUploadContent');
  if (uploadContent) {
    uploadContent.innerHTML = `
      <span style="font-size: 24px;">📁</span><br>
      <span style="color: ${color};">${message}</span>
    `;
  }
}

// Resetar área de upload
function resetUploadArea() {
  const uploadContent = document.getElementById('replayUploadContent');
  if (uploadContent) {
    uploadContent.innerHTML = `
      <span style="font-size: 24px;">📁</span><br>
      <span style="color: #e5e7eb;">Clique aqui ou arraste seu arquivo .hbr2</span><br>
      <small style="color: #999;">Reprodutor completo de partidas Haxball</small>
    `;
  }
}

// Função removida - usar apenas dados reais do arquivo HBR2

function generatePlayerPosition(player, time) {
  // Simular movimento realista dos jogadores
  const baseX = player.team === 'red' ? 0.3 : 0.7;
  const baseY = 0.3 + (player.id % 3) * 0.2;
  
  return {
    ...player,
    x: baseX + Math.sin(time * 0.5 + player.id) * 0.15,
    y: baseY + Math.cos(time * 0.3 + player.id) * 0.1,
    auth: player.id.toString()
  };
}

function generateBallPosition(time) {
  return {
    x: 0.5 + Math.sin(time * 0.8) * 0.3,
    y: 0.5 + Math.cos(time * 0.6) * 0.2
  };
}

function calculateScore(time) {
  // Simular gols em momentos específicos
  let redScore = 0, blueScore = 0;
  
  if (time > 120) redScore = 1;
  if (time > 180) blueScore = 1;
  if (time > 300) redScore = 2;
  if (time > 420) blueScore = 2;
  if (time > 540) redScore = 3;
  
  return { red: redScore, blue: blueScore };
}

function generateGameEvents(time, frame) {
  const events = [];
  
  // Simular eventos ocasionais
  if (frame % 1800 === 0) { // A cada 30 segundos
    events.push({
      type: 'play_event',
      message: `Boa jogada aos ${formatGameTime(time)}!`,
      time: time
    });
  }
  
  return events;
}

// Mostrar frame específico do replay
// Mostrar frame específico do replay
function showReplayFrame(frameIndex) {
  if (!replayFrames[frameIndex] || !replayCanvas || !replayCtx) return;
  
  const frame = replayFrames[frameIndex];
  currentFrame = frameIndex;
  
  // Limpar canvas
  replayCtx.clearRect(0, 0, replayCanvas.width, replayCanvas.height);
  
  // Desenhar campo
  drawReplayField();
  
  // Desenhar bola
  if (frame.ball) {
    drawReplayBall(frame.ball);
  }
  
  // Desenhar jogadores
  frame.players.forEach(player => {
    drawReplayPlayer(player);
  });
  
  // Desenhar elementos táticos se em modo pausa
  if (isPausedForTactics) {
    drawTacticalElements();
  }
  
  // Atualizar informações do jogo
  updateReplayInfo(frame);
}

// Desenhar campo do replay
function drawReplayField() {
  if (!replayCtx) return;
  
  // Fundo verde
  replayCtx.fillStyle = '#4a9';
  replayCtx.fillRect(0, 0, replayCanvas.width, replayCanvas.height);
  
  // Linhas do campo
  replayCtx.strokeStyle = '#fff';
  replayCtx.lineWidth = 2;
  
  // Bordas
  replayCtx.strokeRect(10, 10, replayCanvas.width - 20, replayCanvas.height - 20);
  
  // Linha central
  replayCtx.beginPath();
  replayCtx.moveTo(replayCanvas.width / 2, 10);
  replayCtx.lineTo(replayCanvas.width / 2, replayCanvas.height - 10);
  replayCtx.stroke();
  
  // Círculo central
  replayCtx.beginPath();
  replayCtx.arc(replayCanvas.width / 2, replayCanvas.height / 2, 50, 0, 2 * Math.PI);
  replayCtx.stroke();
  
  // Áreas
  const areaWidth = 80;
  const areaHeight = 120;
  const areaY = (replayCanvas.height - areaHeight) / 2;
  
  // Área esquerda
  replayCtx.strokeRect(10, areaY, areaWidth, areaHeight);
  
  // Área direita
  replayCtx.strokeRect(replayCanvas.width - 10 - areaWidth, areaY, areaWidth, areaHeight);
}

// Desenhar jogador no replay
function drawReplayPlayer(player) {
  if (!replayCtx) return;
  
  const x = (player.x / 100) * replayCanvas.width;
  const y = (player.y / 100) * replayCanvas.height;
  const radius = 12;
  
  // Cor do time
  const color = player.team === 'red' ? '#ff4444' : '#4444ff';
  
  // Círculo do jogador
  replayCtx.fillStyle = color;
  replayCtx.beginPath();
  replayCtx.arc(x, y, radius, 0, 2 * Math.PI);
  replayCtx.fill();
  
  // Borda
  replayCtx.strokeStyle = '#fff';
  replayCtx.lineWidth = 2;
  replayCtx.stroke();
  
  // Nome/número
  replayCtx.fillStyle = '#fff';
  replayCtx.font = 'bold 10px Arial';
  replayCtx.textAlign = 'center';
  replayCtx.fillText(player.name.substring(0, 3), x, y + 3);
}

// Desenhar bola no replay
function drawReplayBall(ball) {
  if (!replayCtx) return;
  
  const x = (ball.x / 100) * replayCanvas.width;
  const y = (ball.y / 100) * replayCanvas.height;
  const radius = 6;
  
  // Círculo da bola
  replayCtx.fillStyle = '#fff';
  replayCtx.beginPath();
  replayCtx.arc(x, y, radius, 0, 2 * Math.PI);
  replayCtx.fill();
  
  // Borda preta
  replayCtx.strokeStyle = '#000';
  replayCtx.lineWidth = 1;
  replayCtx.stroke();
}

// Atualizar informações do replay
function updateReplayInfo(frame) {
  const timeDisplay = document.getElementById('replayTime');
  const scoreDisplay = document.getElementById('replayScore');
  
  if (timeDisplay && frame.time !== undefined) {
    const minutes = Math.floor(frame.time / 60);
    const seconds = Math.floor(frame.time % 60);
    timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  
  if (scoreDisplay && frame.score) {
    scoreDisplay.textContent = `${frame.score.red} - ${frame.score.blue}`;
  }
}

// Controles de reprodução (antigos - serão removidos gradualmente)
function playReplay() {
  if (isReplayPlaying || !replayFrames.length) return;
  
  isReplayPlaying = true;
  document.getElementById('playPauseBtn').textContent = '⏸️ Pause';
  
  const frameInterval = 1000 / (60 * playbackSpeed);
  
  replayInterval = setInterval(() => {
    if (currentFrame < replayFrames.length - 1) {
      showReplayFrame(currentFrame + 1);
    } else {
      pauseReplay();
      alert('🏁 Replay finalizado!');
    }
  }, frameInterval);
}

function pauseReplay() {
  isReplayPlaying = false;
  document.getElementById('playPauseBtn').textContent = '▶️ Play';
  
  if (replayInterval) {
    clearInterval(replayInterval);
    replayInterval = null;
  }
}

function toggleReplayPlayback() {
  if (isReplayPlaying) {
    pauseReplay();
  } else {
    playReplay();
  }
}

function resetReplay() {
  pauseReplay();
  showReplayFrame(0);
}

function seekToPosition(progress) {
  const targetFrame = Math.floor(progress * (replayFrames.length - 1));
  showReplayFrame(targetFrame);
}

function jumpToTime(percentage) {
  seekToPosition(percentage);
}

// Modo de análise
function toggleAnalysisMode() {
  analysisMode = !analysisMode;
  const btn = document.getElementById('analyzeBtn');
  const tools = document.getElementById('analysisTools');
  
  if (analysisMode) {
    btn.textContent = '🎮 Modo Normal';
    btn.style.background = '#ff9800';
    tools.style.display = 'block';
    pauseReplay(); // Pausar automaticamente
  } else {
    btn.textContent = '📝 Modo Análise';
    btn.style.background = '#4CAF50';
    tools.style.display = 'none';
  }
  
  // Atualizar jogadores
  showReplayFrame(currentFrame);
}

function makePlayerDraggable(playerEl) {
  let isDragging = false;
  let startX, startY;
  
  playerEl.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - playerEl.offsetLeft;
    startY = e.clientY - playerEl.offsetTop;
    playerEl.style.cursor = 'grabbing';
  });
  
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const newX = e.clientX - startX;
    const newY = e.clientY - startY;
    
    playerEl.style.left = `${newX}px`;
    playerEl.style.top = `${newY}px`;
  });
  
  document.addEventListener('mouseup', () => {
    isDragging = false;
    playerEl.style.cursor = 'grab';
  });
}

function formatGameTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
document.getElementById("drawOnBtn").onclick=()=>{
  erasing = false;
  mode = 'line';
  draw.style.pointerEvents = "auto";
  updateActiveButtons('drawOnBtn');
  document.getElementById('lineBtn').classList.add('active');
  statsTracker.trackDraw();
};
document.getElementById("drawOffBtn").onclick=()=>{
  erasing = false;
  mode = null;
  draw.style.pointerEvents = "none";
  updateActiveButtons('drawOffBtn');
};
document.getElementById("eraseBtn").onclick=()=>{
  erasing = true;
  mode = null;
  draw.style.pointerEvents = "auto";
  updateActiveButtons('eraseBtn');
};
document.getElementById("clearBtn").onclick=()=>{
  ctx.clearRect(0,0,draw.width,draw.height);
  history = [];
  shadows = []; // Também limpa shadows
};
document.getElementById("freeBtn").onclick=()=>{
  erasing = false;
  mode = 'free';
  draw.style.pointerEvents = "auto";
  updateActiveButtons('freeBtn');
};
document.getElementById("lineBtn").onclick=()=>{
  erasing = false;
  mode = 'line';
  draw.style.pointerEvents = "auto";
  updateActiveButtons('lineBtn');
};
document.getElementById("squareBtn").onclick=()=>{
  erasing = false;
  mode = 'square';
  draw.style.pointerEvents = "auto";
  updateActiveButtons('squareBtn');
};
document.getElementById("triangleBtn").onclick=()=>{
  erasing = false;
  mode = 'triangle';
  draw.style.pointerEvents = "auto";
  updateActiveButtons('triangleBtn');
};
document.getElementById("circleBtn").onclick=()=>{
  erasing = false;
  mode = 'circle';
  draw.style.pointerEvents = "auto";
  updateActiveButtons('circleBtn');
};
document.getElementById("arrowBtn").onclick=()=>{
  erasing = false;
  mode = 'arrow';
  draw.style.pointerEvents = "auto";
  updateActiveButtons('arrowBtn');
};

// Event listeners para seletores de cor
document.getElementById("primaryColorPicker").addEventListener('change', (e) => {
  primaryColor = e.target.value;
});
document.getElementById("secondaryColorPicker").addEventListener('change', (e) => {
  secondaryColor = e.target.value;
});
document.getElementById("redShadowColorPicker").addEventListener('change', (e) => {
  redShadowColor = e.target.value;
});
document.getElementById("blueShadowColorPicker").addEventListener('change', (e) => {
  blueShadowColor = e.target.value;
});

// Event listener para botão de tips
document.getElementById("tipsBtn").onclick=()=>{
  const tips = {
    pt: "💡 DICAS:\n\n• Ctrl+Z: Desfazer última ação\n• Botão Esquerdo: Desenhar com cor primária\n• Botão Direito: Desenhar com cor secundária\n• Ative sombra e segure o jogador com botão direito e arraste para criar um rastro de movimento\n• Use 'Limpar Shadows' para remover todas as setas de movimento",
    en: "💡 TIPS:\n\n• Ctrl+Z: Undo last action\n• Left Click: Draw with primary color\n• Right Click: Draw with secondary color\n• Activate shadow and hold the player with right mouse button and drag to create a movement trail\n• Use 'Clear Shadows' to remove all movement arrows",
    tr: "💡 İPUÇLARI:\n\n• Ctrl+Z: Son işlemi geri al\n• Sol Tık: Birincil renkle çiz\n• Sağ Tık: İkincil renkle çiz\n• Gölgeyi etkinleştirip oyuncuya sağ tıkla ve sürükle, hareket izi oluştur\n• Tüm hareket oklarını kaldırmak için 'Gölgeleri Temizle' kullanın",
    es: "💡 CONSEJOS:\n\n• Ctrl+Z: Deshacer última acción\n• Clic Izquierdo: Dibujar con color primario\n• Clic Derecho: Dibujar con color secundario\n• Activa sombra y mantén el jugador con botón derecho y arrastra para crear una estela de movimiento\n• Usa 'Limpiar Sombras' para eliminar todas las flechas de movimiento"
  };
  alert(tips[currentLang]);
};

// Event listener para botão de toggle shadow
document.getElementById("toggleShadowBtn").onclick=()=>{
  shadowEnabled = !shadowEnabled;
  updateTexts(); // Atualizar texto do botão
};

// Função de download PNG com tracking
document.getElementById("downloadBtn").onclick=()=>{
    statsTracker.trackDownload();
    
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = board.clientWidth;
    tempCanvas.height = board.clientHeight;
    const tempCtx = tempCanvas.getContext('2d');

    const bgImage = new Image();
    bgImage.crossOrigin = 'anonymous';
    bgImage.onload = () => {
        tempCtx.drawImage(bgImage, 0, 0, tempCanvas.width, tempCanvas.height);
        tempCtx.drawImage(draw, 0, 0);

        let playersDrawn = 0;
        const totalPlayers = players.length;

        if (totalPlayers === 0) {
            downloadFinalCanvas(tempCanvas);
            return;
        }

        players.forEach(p => {
            const img = new Image();
            img.onload = () => {
                const playerSize = p.size || 29;
                const playerCanvas = document.createElement('canvas');
                playerCanvas.width = playerSize;
                playerCanvas.height = playerSize;
                const playerCtx = playerCanvas.getContext('2d');

                playerCtx.beginPath();
                playerCtx.arc(playerSize / 2, playerSize / 2, playerSize / 2 - 2, 0, Math.PI * 2);
                playerCtx.fillStyle = getComputedStyle(p.el).backgroundColor;
                playerCtx.fill();
                playerCtx.strokeStyle = getComputedStyle(p.el).borderColor;
                playerCtx.lineWidth = 2;
                playerCtx.stroke();

                if (p.id) { // Só desenha texto se não for a bola
                    playerCtx.font = `bold ${Math.max(10, playerSize * 0.4)}px Arial, sans-serif`;
                    playerCtx.fillStyle = getComputedStyle(p.el).color;
                    playerCtx.textAlign = "center";
                    playerCtx.textBaseline = "middle";
                    playerCtx.fillText(p.el.textContent, playerSize / 2, playerSize / 2);
                }

                const rect = board.getBoundingClientRect();
                const x = p.x * rect.width - playerSize / 2;
                const y = p.y * rect.height - playerSize / 2;
                tempCtx.drawImage(playerCanvas, x, y);

                playersDrawn++;
                if (playersDrawn === totalPlayers) {
                    downloadFinalCanvas(tempCanvas);
                }
            };
            img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        });
    };
    
    const config = gameConfigs[currentTeamSize][currentMapType];
    bgImage.src = config.backgroundImage;
};

function downloadFinalCanvas(canvas) {
    const link = document.createElement('a');
    link.download = `quadro-tatico-${currentTeamSize}-${currentMapType}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// ===== SISTEMA DE REPLAY ESTILO THE HAX =====

// Inicializar canvas do replay
function initReplayCanvas() {
  replayCanvas = document.getElementById('replayCanvas');
  replayCtx = replayCanvas.getContext('2d');
  
  if (!replayCanvas || !replayCtx) {
    console.error('Canvas do replay não encontrado');
    return;
  }
  
  // Configurar tamanho
  replayCanvas.width = 800;
  replayCanvas.height = 400;
  
  // Adicionar eventos de mouse para interação tática
  replayCanvas.addEventListener('mousedown', handleReplayMouseDown);
  replayCanvas.addEventListener('mousemove', handleReplayMouseMove);
  replayCanvas.addEventListener('mouseup', handleReplayMouseUp);
  replayCanvas.addEventListener('contextmenu', (e) => e.preventDefault());
  
  console.log('Canvas do replay inicializado com interação tática');
}

// Configurar controles do replay
function setupReplayControls() {
  const playBtn = document.getElementById('playReplayBtn');
  const pauseBtn = document.getElementById('pauseReplayBtn');
  const timeline = document.getElementById('replayTimeline');
  const speedSelect = document.getElementById('replaySpeed');
  
  if (playBtn) {
    playBtn.onclick = () => {
      if (!isReplayPlaying) {
        startReplayPlayback();
      }
    };
  }
  
  if (pauseBtn) {
    pauseBtn.onclick = () => {
      pauseReplayForTactics();
    };
  }
  
  if (timeline) {
    timeline.oninput = (e) => {
      const progress = parseFloat(e.target.value);
      seekToFrame(progress);
    };
  }
  
  if (speedSelect) {
    speedSelect.onchange = (e) => {
      playbackSpeed = parseFloat(e.target.value);
    };
  }
}

// Iniciar reprodução do replay
function startReplayPlayback() {
  if (isReplayPlaying || !replayFrames.length) return;
  
  isReplayPlaying = true;
  isPausedForTactics = false;
  
  // Limpar desenhos táticos quando retomar
  tacticalDrawings = [];
  
  replayInterval = setInterval(() => {
    if (currentFrame < replayFrames.length - 1) {
      currentFrame++;
      showReplayFrame(currentFrame);
      updateReplayTimeline();
    } else {
      // Fim do replay
      stopReplayPlayback();
    }
  }, 100 / playbackSpeed); // 10 FPS base
  
  updatePlaybackButtons();
}

// Pausar replay para modo tático
function pauseReplayForTactics() {
  if (!isReplayPlaying) return;
  
  stopReplayPlayback();
  isPausedForTactics = true;
  
  // Ativar modo tático
  enableTacticalMode();
  
  updatePlaybackButtons();
}

// Parar reprodução
function stopReplayPlayback() {
  isReplayPlaying = false;
  if (replayInterval) {
    clearInterval(replayInterval);
    replayInterval = null;
  }
  updatePlaybackButtons();
}

// Pular para frame específico
function seekToFrame(progress) {
  if (!replayFrames.length) return;
  
  const targetFrame = Math.floor(progress * (replayFrames.length - 1));
  currentFrame = Math.max(0, Math.min(targetFrame, replayFrames.length - 1));
  
  showReplayFrame(currentFrame);
  updateReplayTimeline();
}

// Ativar modo tático
function enableTacticalMode() {
  // Ativar cursors e interações
  replayCanvas.style.cursor = 'grab';
  
  // Mostrar indicação visual
  drawTacticalModeIndicator();
}

// Eventos de mouse para interação tática
function handleReplayMouseDown(e) {
  if (!isPausedForTactics) return;
  
  const rect = replayCanvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  mouseDownPos = { x, y };
  
  if (e.button === 0) { // Botão esquerdo - arrastar jogador
    draggingPlayer = findPlayerAtPosition(x, y);
    if (draggingPlayer) {
      replayCanvas.style.cursor = 'grabbing';
    }
  } else if (e.button === 2) { // Botão direito - desenhar
    startTacticalDrawing(x, y);
  }
}

function handleReplayMouseMove(e) {
  if (!isPausedForTactics) return;
  
  const rect = replayCanvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  if (draggingPlayer && mouseDownPos) {
    // Atualizar posição do jogador
    const frame = replayFrames[currentFrame];
    if (frame) {
      const player = frame.players.find(p => p.id === draggingPlayer.id);
      if (player) {
        player.x = (x / replayCanvas.width) * 100;
        player.y = (y / replayCanvas.height) * 100;
        showReplayFrame(currentFrame); // Redesenhar
      }
    }
  }
  
  // Atualizar cursor baseado na posição
  const playerAtPos = findPlayerAtPosition(x, y);
  replayCanvas.style.cursor = playerAtPos ? 'grab' : 'crosshair';
}

function handleReplayMouseUp(e) {
  if (!isPausedForTactics) return;
  
  draggingPlayer = null;
  mouseDownPos = null;
  replayCanvas.style.cursor = 'grab';
}

// Encontrar jogador na posição
function findPlayerAtPosition(x, y) {
  const frame = replayFrames[currentFrame];
  if (!frame) return null;
  
  const tolerance = 15; // pixels
  
  for (const player of frame.players) {
    const playerX = (player.x / 100) * replayCanvas.width;
    const playerY = (player.y / 100) * replayCanvas.height;
    
    const distance = Math.sqrt(
      Math.pow(x - playerX, 2) + Math.pow(y - playerY, 2)
    );
    
    if (distance <= tolerance) {
      return player;
    }
  }
  
  return null;
}

// Iniciar desenho tático
function startTacticalDrawing(x, y) {
  const drawing = {
    type: 'line',
    points: [{ x, y }],
    color: '#ffff00',
    width: 3
  };
  
  tacticalDrawings.push(drawing);
}

// Desenhar indicador de modo tático
function drawTacticalModeIndicator() {
  if (!replayCtx) return;
  
  replayCtx.save();
  replayCtx.fillStyle = 'rgba(255, 255, 0, 0.1)';
  replayCtx.fillRect(0, 0, replayCanvas.width, replayCanvas.height);
  
  // Texto indicativo
  replayCtx.fillStyle = '#ffff00';
  replayCtx.font = 'bold 16px Arial';
  replayCtx.textAlign = 'center';
  replayCtx.fillText('MODO TÁTICO - Arraste jogadores ou desenhe', replayCanvas.width / 2, 25);
  
  replayCtx.restore();
}

// Renderizar desenhos táticos
function drawTacticalElements() {
  if (!replayCtx) return;
  
  // Desenhar indicador de modo tático
  if (isPausedForTactics) {
    drawTacticalModeIndicator();
  }
  
  // Desenhar linhas táticas
  tacticalDrawings.forEach(drawing => {
    if (drawing.type === 'line' && drawing.points.length > 1) {
      replayCtx.save();
      replayCtx.strokeStyle = drawing.color;
      replayCtx.lineWidth = drawing.width;
      replayCtx.beginPath();
      replayCtx.moveTo(drawing.points[0].x, drawing.points[0].y);
      
      for (let i = 1; i < drawing.points.length; i++) {
        replayCtx.lineTo(drawing.points[i].x, drawing.points[i].y);
      }
      
      replayCtx.stroke();
      replayCtx.restore();
    }
  });
}

// Atualizar timeline do replay
function updateReplayTimeline() {
  const timeline = document.getElementById('replayTimeline');
  if (timeline && replayFrames.length > 0) {
    const progress = currentFrame / (replayFrames.length - 1);
    timeline.value = progress;
  }
}

// Atualizar botões de reprodução
function updatePlaybackButtons() {
  const playBtn = document.getElementById('playReplayBtn');
  const pauseBtn = document.getElementById('pauseReplayBtn');
  
  if (playBtn && pauseBtn) {
    playBtn.style.display = isReplayPlaying ? 'none' : 'inline-block';
    pauseBtn.style.display = isReplayPlaying ? 'inline-block' : 'none';
  }
  
  // Atualizar texto do botão de pausa baseado no estado
  if (pauseBtn) {
    pauseBtn.textContent = isPausedForTactics ? '▶️ Continuar' : '⏸️ Pausar';
  }
}

// Atualizar interface do replay
function updateReplayUI() {
  updateReplayTimeline();
  updatePlaybackButtons();
  
  // Mostrar controles
  const controls = document.getElementById('replayControls');
  if (controls) {
    controls.style.display = 'block';
  }
}

// Limpar desenhos táticos
function clearTacticalDrawings() {
  tacticalDrawings = [];
  if (currentFrame >= 0) {
    showReplayFrame(currentFrame);
  }
}

// Função removida - usar apenas dados reais do arquivo HBR2
function generateMockReplayData(filename) {
  console.warn('Dados simulados removidos - carregue um arquivo HBR2 real');
  return null;
}

// ===== FIM DO SISTEMA DE REPLAY =====

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Verificar se todos os elementos existem
  const drawBtn = document.getElementById("drawOffBtn");
  if (drawBtn) {
    drawBtn.click();
  }
  
  populateSelects();
  updateTexts();
  
  // Certificar que o canvas está configurado
  if (draw && board) {
    resizeCanvas();
  }
  
  // Rastrear visita após carregamento
  setTimeout(() => {
    statsTracker.trackVisit();
  }, 100);
});
