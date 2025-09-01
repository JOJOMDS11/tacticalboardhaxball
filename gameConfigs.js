const gameConfigs = {
  '3x3': {
    futsal: {
      backgroundImage: 'https://i.imgur.com/UiOK7Gr.png',
      players: [
        { uid: 1, id: 'GK', team: 'red', x: 0.1, y: 0.5 },
        { uid: 2, id: 'VL', team: 'red', x: 0.25, y: 0.25 },
        { uid: 3, id: 'PV', team: 'red', x: 0.25, y: 0.75 },
        { uid: 4, id: 'GK', team: 'blue', x: 0.9, y: 0.5 },
        { uid: 5, id: 'VL', team: 'blue', x: 0.75, y: 0.25 },
        { uid: 6, id: 'PV', team: 'blue', x: 0.75, y: 0.75 },
        { uid: 10, id: '', team: 'ball', x: 0.5, y: 0.5 }
      ]
    },
    bigeasy: {
      backgroundImage: 'https://i.imgur.com/rMetuYd.png', // URL do mapa campo
      players: [
        { uid: 1, id: 'GK', team: 'red', x: 0.1, y: 0.5 },
        { uid: 2, id: 'VL', team: 'red', x: 0.25, y: 0.25 },
        { uid: 3, id: 'PV', team: 'red', x: 0.25, y: 0.75 },
        { uid: 4, id: 'GK', team: 'blue', x: 0.9, y: 0.5 },
        { uid: 5, id: 'VL', team: 'blue', x: 0.75, y: 0.25 },
        { uid: 6, id: 'PV', team: 'blue', x: 0.75, y: 0.75 },
        { uid: 10, id: '', team: 'ball', x: 0.5, y: 0.5 }
      ]
    }
  },
  '4x4': {
    futsal: {
      backgroundImage: 'https://i.imgur.com/dZgIa0e.png',
      players: [
        { uid: 1, id: 'GK', team: 'red', x: 0.1, y: 0.5 },
        { uid: 2, id: 'VL', team: 'red', x: 0.3, y: 0.3 },
        { uid: 3, id: 'MC', team: 'red', x: 0.3, y: 0.7 },
        { uid: 4, id: 'PV', team: 'red', x: 0.45, y: 0.5 },
        { uid: 5, id: 'GK', team: 'blue', x: 0.9, y: 0.5 },
        { uid: 6, id: 'VL', team: 'blue', x: 0.7, y: 0.3 },
        { uid: 7, id: 'MC', team: 'blue', x: 0.7, y: 0.7 },
        { uid: 8, id: 'PV', team: 'blue', x: 0.55, y: 0.5 },
        { uid: 10, id: '', team: 'ball', x: 0.5, y: 0.5 }
   ]
    },
    bigeasy: {
      backgroundImage: 'https://i.imgur.com/dZgIa0e.png',
      players: [
        { uid: 1, id: 'GK', team: 'red', x: 0.1, y: 0.5 },
        { uid: 2, id: 'VL', team: 'red', x: 0.3, y: 0.3 },
        { uid: 3, id: 'MC', team: 'red', x: 0.3, y: 0.7 },
        { uid: 4, id: 'PV', team: 'red', x: 0.45, y: 0.5 },
        { uid: 5, id: 'GK', team: 'blue', x: 0.9, y: 0.5 },
        { uid: 6, id: 'VL', team: 'blue', x: 0.7, y: 0.3 },
        { uid: 7, id: 'MC', team: 'blue', x: 0.7, y: 0.7 },
        { uid: 8, id: 'PV', team: 'blue', x: 0.55, y: 0.5 },
        { uid: 10, id: '', team: 'ball', x: 0.5, y: 0.5 }
      ]
    }
  },
 '7x7': {
    futsal: {
      backgroundImage: 'https://i.imgur.com/n56z593.png',
      players: [
        // Exemplo de formação 7x7
        { uid: 1, id: 'GK', team: 'red', x: 0.05, y: 0.5 },
        { uid: 2, id: 'LD', team: 'red', x: 0.2, y: 0.2 },
        { uid: 3, id: 'PD', team: 'red', x: 0.35, y: 0.2 },
        { uid: 4, id: 'MC', team: 'red', x: 0.15, y: 0.6 },
        { uid: 5, id: 'LE', team: 'red', x: 0.2, y: 0.8 },
        { uid: 6, id: 'PV', team: 'red', x: 0.35, y: 0.5 },
        { uid: 7, id: 'PE', team: 'red', x: 0.35, y: 0.8 },
        
        { uid: 8, id: 'GK', team: 'blue', x: 0.95, y: 0.5 },
        { uid: 9, id: 'LD', team: 'blue', x: 0.8, y: 0.2 },
        { uid: 10, id: 'PD', team: 'blue', x: 0.65, y: 0.2 },
        { uid: 11, id: 'MC', team: 'blue', x: 0.85, y: 0.6 },
        { uid: 12, id: 'LE', team: 'blue', x: 0.8, y: 0.8 },
        { uid: 13, id: 'PV', team: 'blue', x: 0.65, y: 0.5 },
        { uid: 14, id: 'PE', team: 'blue', x: 0.65, y: 0.8 },
        
        { uid: 15, id: '', team: 'ball', x: 0.5, y: 0.5 }
      ]
    }
  }
};

export default gameConfigs;
