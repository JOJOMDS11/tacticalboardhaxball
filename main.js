// Importa as configurações dos jogos
import gameConfigs from './gameConfigs.js';

// Configuração do Firebase - CORRIGIDA
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyD2StS7Gz-ikxyt8kc0cSRzF_e7eL3FeiM",
    authDomain: "jojovius-f5de7.firebaseapp.com",
    databaseURL: "https://jojovius-f5de7-default-rtdb.firebaseio.com",
    projectId: "jojovius-f5de7",
    storageBucket: "jojovius-f5de7.appspot.com",
    messagingSenderId: "629248865232",
    appId: "1:629248865232:web:4e74d888f57161cedfffd5"
};

// Tracker de estatísticas com Firebase
class HaxballStatsTracker {
  constructor() {
    this.firebaseInitialized = false;
    
    try {
      // Verifica se todas as chaves necessárias estão presentes
      const hasAllKeys = Object.values(FIREBASE_CONFIG).every(key => key && key !== 'undefined');
      
      if (hasAllKeys && typeof firebase !== 'undefined') {
        if (!firebase.apps.length) {
          firebase.initializeApp(FIREBASE_CONFIG);
        }
        this.db = firebase.database();
        this.firebaseInitialized = true;
        console.log('Firebase inicializado com sucesso');
      } else {
        console.warn('Firebase não disponível ou configuração incompleta. Funcionando sem analytics.');
      }
    } catch (error) {
      console.error('Erro ao inicializar Firebase:', error);
    }
    
    this.counters = {
      totalVisits: 'totalVisits',
      todayVisits: 'todayVisits_' + new Date().toISOString().split('T')[0],
      downloads: 'downloads',
      drawActivations: 'drawActivations',
      languageChanges: 'languageChanges',
      discordClicks: 'discordClicks',
      configChanges: 'configChanges',
      langPt: 'langPt',
      langEn: 'langEn',
      langTr: 'langTr',
      langEs: 'langEs'
    };
  }

  async increment(key, amount = 1) {
    if (!this.firebaseInitialized) return 0;
    try {
      await this.db.ref(`stats/${key}`).transaction((current) => {
        return (current || 0) + amount;
      });
      const snapshot = await this.db.ref(`stats/${key}`).once('value');
      return snapshot.val() || 0;
    } catch (error) {
      console.error('Erro Firebase increment:', error);
      return 0;
    }
  }

  async trackVisit() {
    try {
      await this.increment(this.counters.totalVisits);
      await this.increment(this.counters.todayVisits);
      console.log('Visita rastreada com sucesso');
    } catch (error) {
      console.error('Erro ao rastrear visita:', error);
    }
  }

  async trackDownload() {
    try {
      await this.increment(this.counters.downloads);
      console.log('Download rastreado com sucesso');
    } catch (error) {
      console.error('Erro ao rastrear download:', error);
    }
  }

  async trackDraw() {
    try {
      await this.increment(this.counters.drawActivations);
      console.log('Ativação de desenho rastreada com sucesso');
    } catch (error) {
      console.error('Erro ao rastrear ativação de desenho:', error);
    }
  }

  async trackLanguageChange(lang) {
    try {
      await this.increment(this.counters.languageChanges);
      if (lang === 'pt') await this.increment(this.counters.langPt);
      if (lang === 'en') await this.increment(this.counters.langEn);
      if (lang === 'tr') await this.increment(this.counters.langTr);
      if (lang === 'es') await this.increment(this.counters.langEs);
      console.log(`Mudança de idioma para ${lang} rastreada com sucesso`);
    } catch (error) {
      console.error('Erro ao rastrear mudança de idioma:', error);
    }
  }

  async trackDiscordClick() {
    try {
      await this.increment(this.counters.discordClicks);
      console.log('Clique no Discord rastreado com sucesso');
    } catch (error) {
      console.error('Erro ao rastrear clique no Discord:', error);
    }
  }

  async trackConfigChange(type, value) {
    try {
      await this.increment(this.counters.configChanges);
      await this.increment(`${type}_${value}`);
      console.log(`Configuração ${type} alterada para ${value}`);
    } catch (error) {
      console.error('Erro ao rastrear mudança de configuração:', error);
    }
  }
}

// Instância global do tracker
const statsTracker = new HaxballStatsTracker();

const board = document.getElementById("board");
const draw = document.getElementById("drawLayer");
const playersLayer = document.getElementById("players");
const ctx = draw.getContext("2d");
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

// Usar as configurações importadas
let players = gameConfigs[currentTeamSize][currentMapType].players;

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
    comingSoon: "Em breve!"
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
    comingSoon: "Coming soon!"
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
    comingSoon: "Yakında!"
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
    comingSoon: "¡Próximamente!"
  }
};

// Função para atualizar labels dinâmicos
function updateCurrentModeLabel() {
  const teamSize = currentTeamSize;
  const mapType = currentMapType.charAt(0).toUpperCase() + currentMapType.slice(1);
  document.getElementById('currentModeLabel').textContent = `— ${teamSize} ${mapType}`;
}

// Função para popular os selects dinamicamente
function populateSelects() {
  const teamSizeSelect = document.getElementById('teamSizeSelect');
  const mapTypeSelect = document.getElementById('mapTypeSelect');
  
  // Limpar selects
  teamSizeSelect.innerHTML = '';
  mapTypeSelect.innerHTML = '';
  
  // Popular team sizes
  Object.keys(gameConfigs).forEach(teamSize => {
    const option = document.createElement('option');
    option.value = teamSize;
    option.textContent = teamSize;
    if (teamSize === currentTeamSize) option.selected = true;
    teamSizeSelect.appendChild(option);
  });
  
  // Popular map types baseado no team size atual
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
  document.getElementById('drawOnBtn').textContent = translations[currentLang].drawOnBtn;
  document.getElementById('drawOffBtn').textContent = translations[currentLang].drawOffBtn;
  document.getElementById('eraseBtn').textContent = translations[currentLang].eraseBtn;
  document.getElementById('clearBtn').textContent = translations[currentLang].clearBtn;
  document.getElementById('colorLabel').textContent = translations[currentLang].colorLabel;
  document.getElementById('downloadBtn').textContent = translations[currentLang].downloadBtn;
  document.getElementById('freeBtn').textContent = translations[currentLang].freeBtn;
  document.getElementById('lineBtn').textContent = translations[currentLang].lineBtn;
  document.getElementById('squareBtn').textContent = translations[currentLang].squareBtn;
  document.getElementById('triangleBtn').textContent = translations[currentLang].triangleBtn;
  document.getElementById('circleBtn').textContent = translations[currentLang].circleBtn;
  document.getElementById('arrowBtn').textContent = translations[currentLang].arrowBtn;
  document.getElementById('strokeSizeLabel').textContent = translations[currentLang].strokeSizeLabel;
  document.getElementById('eraserSizeLabel').textContent = translations[currentLang].eraserSizeLabel;
  document.querySelector('.discord-message a').textContent = translations[currentLang].discordMessage;
  document.getElementById('creditsLabel').textContent = translations[currentLang].creditsLabel;
  document.getElementById('helpProjectLabel').textContent = translations[currentLang].helpProject;
  document.getElementById('teamSizeLabel').textContent = translations[currentLang].teamSizeLabel;
  document.getElementById('mapTypeLabel').textContent = translations[currentLang].mapTypeLabel;

  // Atualiza a classe 'active' das bandeiras
  document.querySelectorAll('.language-selector img').forEach(img => {
      img.classList.remove('active');
  });
  document.getElementById(`flag-${currentLang}`).classList.add('active');
  
  // Atualiza o label do modo atual
  updateCurrentModeLabel();
}

// Event listeners para as bandeiras com tracking
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
  
  // Verificar se a configuração existe
  if (gameConfigs[newTeamSize]) {
    // Se o mapa atual não existir no novo team size, usar o primeiro disponível
    const availableMaps = Object.keys(gameConfigs[newTeamSize]);
    const newMapType = availableMaps.includes(currentMapType) ? currentMapType : availableMaps[0];
    
    changeGameConfig(newTeamSize, newMapType);
    statsTracker.trackConfigChange('team_size', newTeamSize);
  } else {
    // Resetar se não existir
    e.target.value = currentTeamSize;
    alert(translations[currentLang].comingSoon);
  }
});

document.getElementById('mapTypeSelect').addEventListener('change', (e) => {
  const newMapType = e.target.value;
  
  // Verificar se a configuração existe
  if (gameConfigs[currentTeamSize] && gameConfigs[currentTeamSize][newMapType]) {
    changeGameConfig(currentTeamSize, newMapType);
    statsTracker.trackConfigChange('map_type', newMapType);
  } else {
    // Resetar se não existir
    e.target.value = currentMapType;
    alert(translations[currentLang].comingSoon);
  }
});

function changeGameConfig(teamSize, mapType) {
  currentTeamSize = teamSize;
  currentMapType = mapType;
  
  // Limpar jogadores atuais
  playersLayer.innerHTML = '';
  
  // Obter nova configuração
  const config = gameConfigs[teamSize][mapType];
  players = [...config.players]; // Clone do array
  
  // Atualizar fundo do board
  board.style.backgroundImage = `url('${config.backgroundImage}')`;
  
  // Criar novos jogadores
  players.forEach(p => {
    const el = document.createElement("div");
    el.className = `player ${p.team}`;
    el.textContent = p.id;
    el.dataset.uid = p.uid;
    playersLayer.appendChild(el);
    p.el = el;
  });
  
  // Reposicionar jogadores
  placePlayers();
  
  // Limpar canvas
  ctx.clearRect(0, 0, draw.width, draw.height);
  history = [];
  
  // Atualizar selects e labels
  populateSelects();
  updateCurrentModeLabel();
}

// Tracking do Discord
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
      };
      img.src = history[history.length - 1];
    } else {
      ctx.clearRect(0, 0, draw.width, draw.height);
    }
  }
}

function resizeCanvas(){
  draw.width = board.clientWidth;
  draw.height = board.clientHeight;
  if (history.length > 0) {
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
    img.src = history[history.length - 1];
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
  playersLayer.appendChild(el);
  p.el=el;
});

function placePlayers(){
  const rect=board.getBoundingClientRect();
  players.forEach(p=>{
    const size = parseInt(getComputedStyle(p.el).getPropertyValue('--size'), 10);
    p.el.style.left=(p.x*rect.width - size/2)+"px";
    p.el.style.top=(p.y*rect.height - size/2)+"px";
  });
}
placePlayers();
window.addEventListener("resize",placePlayers);

// Drag (arrastar) - SEMPRE ATIVO
let drag=null;
board.addEventListener("pointerdown",e=>{
  const t=e.target.closest('.player'); 
  if(!t) return;
  
  const rect=board.getBoundingClientRect();
  const uniqueId = t.dataset.uid;
  const p = players.find(pp=>pp.uid == uniqueId);
  if (!p) return;

  const size = parseInt(getComputedStyle(t).getPropertyValue('--size'), 10);
  drag={p,offsetX:e.clientX-rect.left-(p.x*rect.width),offsetY:e.clientY-rect.top-(p.y*rect.height)};
  t.setPointerCapture(e.pointerId);
});

window.addEventListener("pointermove",e=>{
  if(!drag) return;
  const rect=board.getBoundingClientRect();
  const size = parseInt(getComputedStyle(drag.p.el).getPropertyValue('--size'), 10);
  
  drag.p.x = (e.clientX - rect.left - drag.offsetX) / rect.width;
  drag.p.y = (e.clientY - rect.top - drag.offsetY) / rect.height;

  // Lógica de fixação para não permitir que o jogador saia do campo
  const minX = (size / 2) / rect.width;
  const maxX = 1 - (size / 2) / rect.width;
  const minY = (size / 2) / rect.height;
  const maxY = 1 - (size / 2) / rect.height;

  drag.p.x = Math.max(minX, Math.min(drag.p.x, maxX));
  drag.p.y = Math.max(minY, Math.min(drag.p.y, maxY));
  
  placePlayers();
});
window.addEventListener("pointerup",()=>{ drag=null; });

// Drawing functions
function getPos(e){
  const rect=draw.getBoundingClientRect();
  return {x:e.clientX-rect.left,y:e.clientY-rect.top};
}

function drawShape(e) {
    const pos = getPos(e);
    ctx.clearRect(0, 0, draw.width, draw.height);
    if (history.length > 0) {
        const lastState = new Image();
        lastState.src = history[history.length - 1];
        ctx.drawImage(lastState, 0, 0);
    }

    ctx.strokeStyle = document.getElementById("colorPicker").value;
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
    ctx.strokeStyle = document.getElementById("colorPicker").value;
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

function endDraw(){ 
  if(drawing) {
    if (!erasing) {
        if (mode === 'free') {
            // Para desenho livre, não precisa fazer nada especial
        } else {
            drawShape(event); // Desenha a forma final
        }
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
                const playerCanvas = document.createElement('canvas');
                playerCanvas.width = p.el.offsetWidth;
                playerCanvas.height = p.el.offsetHeight;
                const playerCtx = playerCanvas.getContext('2d');

                playerCtx.font = "bold 14px Arial, sans-serif";
                playerCtx.fillStyle = getComputedStyle(p.el).color;
                playerCtx.textAlign = "center";
                playerCtx.textBaseline = "middle";
                playerCtx.fillText(p.el.textContent, p.el.offsetWidth / 2, p.el.offsetHeight / 2);

                tempCtx.drawImage(playerCanvas, p.el.offsetLeft, p.el.offsetTop);

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
document.getElementById("drawOffBtn").click();
populateSelects();
updateTexts();

// Rastrear visita após carregamento
setTimeout(() => {
  statsTracker.trackVisit();
}, 1000);.beginPath();
                playerCtx.arc(p.el.offsetWidth / 2, p.el.offsetHeight / 2, p.el.offsetWidth / 2 - 2, 0, Math.PI * 2);
                playerCtx.fillStyle = getComputedStyle(p.el).backgroundColor;
                playerCtx.fill();
                playerCtx.strokeStyle = getComputedStyle(p.el).borderColor;
                playerCtx.lineWidth = 2;
                playerCtx.stroke();

                playerCtx
