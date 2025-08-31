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
    }
  }
};

export default gameConfigs;
