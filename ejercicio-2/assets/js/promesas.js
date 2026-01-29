const acoplarSatelite= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Satélite 'Sustantiva-1' acoplado y asegurado.");
            } else {
                reject("ERROR: Falla mecánica en brazo robótico."); 
            }
        }, 2000);
    });
}

const cargarCombustible = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Tanques de Hidrógeno al 100%. Presión estable.");
            } else {
                reject("ERROR: Fuga detectada en válvula principal."); 
            }
        }, 2000);
    });
}
 const calibrarSistema= () => {
        return new Promise((resolve) => {
            setTimeout(() => {
            resolve("Coordenadas calculadas. Trayectoria nominal.");
        }, 2000);
        });
 };