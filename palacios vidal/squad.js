
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function deployWeapon(weaponType) {
    try {
        await delay(2000);

        const failed = Math.random() < 0.3;
        if (failed) {
            throw new Error(`Fallo al cargar ${weaponType}`);
        }

        return `Arma ${weaponType} cargada y lista`;
    } catch (error) {
        throw error;
    }
}

async function moveSquad(sector) {
    await delay(3000);
    return `Escuadrón arribado al ${sector}. Perímetro seguro`;
}

