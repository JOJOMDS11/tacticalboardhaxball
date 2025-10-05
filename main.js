// Configurações dos jogos (movido para dentro do arquivo para evitar problemas de importação)
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
    },
    bigeasy: {
      backgroundImage: 'https://i.imgur.com/rMetuYd.png',
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
        { uid: 9, id: 'MEI', team: 'red', x: 0.5, y: 0.5, size: 22 },
        
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
        { uid: 20, id: 'MEI', team: 'blue', x: 0.5, y: 0.5, size: 22 },
        
        // Ataque
        { uid: 21, id: 'ATA', team: 'blue', x: 0.35, y: 0.35, size: 22 },
        { uid: 22, id: 'ATA', team: 'blue', x: 0.35, y: 0.65, size: 22 },
        
        // Bola
        { uid: 23, id: '', team: 'ball', x: 0.5, y: 0.5, size: 8 }
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
    clearShadowsBtn: "Limpar Shadows",
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
    'clearShadowsBtn': translations[currentLang].clearShadowsBtn,
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
  
  playersLayer.innerHTML = '';
  
  const config = gameConfigs[teamSize][mapType];
  players = [...config.players];
  
  board.style.backgroundImage = `url('${config.backgroundImage}')`;
  
  players.forEach(p => {
    const el = document.createElement("div");
    el.className = `player ${p.team}`;
    el.textContent = p.id;
    el.dataset.uid = p.uid;
    // Aplicar o tamanho personalizado do gameConfig
    el.style.setProperty('--size', `${p.size}px`);
    playersLayer.appendChild(el);
    p.el = el;
  });
  
  placePlayers();
  
  ctx.clearRect(0, 0, draw.width, draw.height);
  history = [];
  shadows = []; // Limpar shadows também ao mudar configuração
  
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
    ctx.strokeStyle = '#ffff00';
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
    ctx.fillStyle = shadow.playerTeam === 'red' ? '#e53935' : shadow.playerTeam === 'blue' ? '#1e88e5' : '#B917FF';
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
};
document.getElementById("clearShadowsBtn").onclick=()=>{
  shadows = [];
  ctx.clearRect(0,0,draw.width,draw.height);
  if (history.length > 0) {
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
    img.src = history[history.length - 1];
  }
  saveState();
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

// Event listener para botão de tips
document.getElementById("tipsBtn").onclick=()=>{
  const tips = {
    pt: "💡 DICAS:\n\n• Ctrl+Z: Desfazer última ação\n• Botão Esquerdo: Desenhar com cor primária\n• Botão Direito: Desenhar com cor secundária\n• Botão Direito no Jogador + Arrastar: Criar shadow de movimento\n• Use 'Limpar Shadows' para remover todas as setas de movimento",
    en: "💡 TIPS:\n\n• Ctrl+Z: Undo last action\n• Left Click: Draw with primary color\n• Right Click: Draw with secondary color\n• Right Click on Player + Drag: Create movement shadow\n• Use 'Clear Shadows' to remove all movement arrows",
    tr: "💡 İPUÇLARI:\n\n• Ctrl+Z: Son işlemi geri al\n• Sol Tık: Birincil renkle çiz\n• Sağ Tık: İkincil renkle çiz\n• Oyuncuya Sağ Tık + Sürükle: Hareket gölgesi oluştur\n• Tüm hareket oklarını kaldırmak için 'Gölgeleri Temizle' kullanın",
    es: "💡 CONSEJOS:\n\n• Ctrl+Z: Deshacer última acción\n• Clic Izquierdo: Dibujar con color primario\n• Clic Derecho: Dibujar con color secundario\n• Clic Derecho en Jugador + Arrastrar: Crear sombra de movimiento\n• Usa 'Limpiar Sombras' para eliminar todas las flechas de movimiento"
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
