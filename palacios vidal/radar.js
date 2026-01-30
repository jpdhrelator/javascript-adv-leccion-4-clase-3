//escanear area

function scanArea() {
    return new Promise(
        (resolve, reject) => {
            console.log("Inicio de escaneo de area...");

            setTimeout(() => {
                const falla = Math.random() < 0.2;

                if (falla) {
                    reject("ERROR: Ruido estatico. No se puede localizar objetivo");
                }
                 else {
                    resolve("Señal de vida detectada en Sector 7");
                }
            }, 2000);
        });
}