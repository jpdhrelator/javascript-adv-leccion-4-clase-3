const esperar = (ms) => new Promise (resolve => setTimeout(resolve, ms));

async function deployWeapon(weaponType){
    try {
        await esperar(2000);
        const fallar = Math.random() < 0.3; // 30%
        if (fallar){
            console.log(`Fallo al cargar ${weaponType}`);
        }
        return `Arma ${weaponType} cargada y lista`
    } catch (error) {
        throw error.msg;
    }
}

async function moveSquad(sector) {
    await esperar(3000);
    return `Escuadrón arribado al ${sector}. Perimetro seguro`;
}