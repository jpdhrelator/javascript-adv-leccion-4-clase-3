const esperar = (ms) => new Promise (resolve => setTimeout(resolve, ms));

async function deployWeapon(weaponType){
    try {
        await esperar(2000);
        const fallar = Math.random() < 0.3; // 30%
        if (fallo){
            
        }

        return `Arma ${weaponType} cargada y lista`
    } catch (error) {
        
    }
}