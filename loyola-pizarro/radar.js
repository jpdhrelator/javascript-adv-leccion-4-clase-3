const scanArea = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2; 
      if (success) {
        resolve("Señal de vida detectada en Sector 7");
      } else {
        reject("ERROR: Ruido estático. No se puede localizar objetivo");
      }
    }, 2000);
  });
};

const analyzeSignal = (sectorMsg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sectorMsg.includes("Sector 7")) {
        resolve({ type: "Civilian", count: 4 });
      } else {
        reject("Falsa alarma");
      }
    }, 3000);
  });
};