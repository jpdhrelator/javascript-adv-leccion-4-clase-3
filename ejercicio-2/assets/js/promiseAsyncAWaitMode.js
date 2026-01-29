const promiseAsyncAWaitMode= async()=>{
    consoleList.innerHTML = '';
    statusSpan.innerText = "SECUENCIA AUTOMÁTICA (ASYNC MODE)";
    statusSpan.className = "text-info blink";

    try {
        toggleOverlay(true, "Fase 1: Acoplando Satélite...");
        const msgAcopleSatelite = await acoplarSatelite();
        log(msgAcopleSatelite,'success');

        toggleOverlay(true, "Fase 2: Hidrógeno Líquido...");
        const msgCArgaCombustible= await cargarCombustible();
        log(msgCArgaCombustible,'success');


        toggleOverlay(true, "Fase 3: Computadora de vuelo...");
        const msgCalibrarSistema= await calibrarSistema();
        log(msgCalibrarSistema,'success');


        log("🚀 ¡DESPEGUE CONFIRMADO! Siguiente parada: Marte.", 'info');
        statusSpan.innerText = "EN VELOCIDAD HIPERSÓNICA";
        statusSpan.className = "text-success";


    } catch (error) {
        log(error, 'error');
        log("💥 FALLO CRÍTICO. Protocolo de emergencia activado.", 'error');
        statusSpan.innerText = "FALLO DEL SISTEMA";
        statusSpan.className = "text-danger";
    }finally{
        toggleOverlay(false);
        console.log("Proceso terminado (Async/Await)");
    }
};