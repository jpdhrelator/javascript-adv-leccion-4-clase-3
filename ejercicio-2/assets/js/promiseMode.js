
const promiseMode= ()=>{

    consoleList.innerHTML = '';
    statusSpan.innerText = "SECUENCIA INICIADA (PROMISE MODE)";
    statusSpan.className = "text-info blink";

    toggleOverlay(true, "Iniciando Secuencia Manual...");


    acoplarSatelite()
        .then(mensaje=>{
            log(mensaje, 'success');
            toggleOverlay(true, "Cargando combustible...");
            return cargarCombustible();
        })
        .then(mensaje=>{
            log(mensaje, 'success');
            toggleOverlay(true, "Calibrando sistemas...");
            return calibrarSistema();
        })
        .then(mensaje =>{
            log(mensaje, 'success');
            log("🚀 ¡LANZAMIENTO EXITOSO! Buen viaje.", 'info');
            statusSpan.innerText = "EN ÓRBITA";
            statusSpan.className = "text-success";
        })
        .catch(error => {
            log(error, 'error');
            log("❌ ABORTANDO MISIÓN.", 'error');
            statusSpan.innerText = "ABORTADO";
            statusSpan.className = "text-danger";
        })
        .finally(() => {
            toggleOverlay(false);
            console.log("Proceso terminado (Promise)");
        })
};
