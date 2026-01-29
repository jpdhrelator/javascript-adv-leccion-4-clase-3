
---

# 🧟‍♂️ Desafío Cooperativo: "Operación Apocalipsis Zombie"

**Modalidad:** Parejas
**Objetivo:** Desarrollar un sistema de defensa contra zombies donde dos módulos (Radar y Escuadrón) deben comunicarse. Un estudiante desarrollará el módulo de detección usando **Promesas** y el otro el módulo de combate usando **Async/Await**. Finalmente, integrarán ambos para salvar la ciudad.

---

## 📂 1. Preparación del Entorno (Git Flow)

Para evitar conflictos de código, trabajarán en archivos separados y usarán ramas.

1. **Líder del Grupo:** Clona el repositorio entregado por el instructor.
2. **Líder del Grupo:** Cambiate a la rama `grupo-N` (ej: `grupo-1`), crea una carpeta con los apellido de ambos y súbela al remoto (ej: `git push origin grupo-1`).
3. **Ambos:**
* Hagan `git fetch` y cámbiense a la rama de su grupo (`git checkout grupo-N`).
* Ahora, **cada uno cree su propia sub-rama** desde `grupo-N`:
* Estudiante A: crea rama `feature/radar-nombre`.
* Estudiante B: crea rama `feature/squad-nombre`.




4. **Archivos:** Creen los archivos `radar.js` (Estudiante A) y `squad.js` (Estudiante B) en la carpeta del proyecto. *No toquen el archivo del otro compañero*.

---

## 🎨 2. Interfaz Gráfica (Copiar y Pegar)

No pierdan tiempo diseñando. Usen este código base. Creen un archivo `index.html` y un `style.css`.

### `index.html`

Nota que importamos los scripts de ambos estudiantes y un `main.js` para la integración.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zombie Defense System</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-dark text-white">

    <div id="overlay" class="d-none">
        <div class="spinner-border text-danger" style="width: 4rem; height: 4rem;" role="status"></div>
        <h2 class="mt-3 text-danger blink">PROCESANDO AMENAZA...</h2>
    </div>

    <div class="container py-5">
        <div class="text-center mb-5">
            <h1 class="display-4 text-uppercase fw-bold text-danger">⚠️ Z-Defense System</h1>
            <p class="lead text-secondary">Panel de Control de Supervivencia</p>
        </div>

        <div class="row g-4">
            <div class="col-md-6">
                <div class="card bg-black border-success h-100 shadow">
                    <div class="card-header bg-success text-black fw-bold">
                        📡 MÓDULO DE RADAR (Promesas)
                    </div>
                    <div class="card-body text-center">
                        <div class="radar-scan mb-3 mx-auto"></div>
                        <p class="text-success small">Estado: <span id="radarStatus">Escaneando...</span></p>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card bg-black border-info h-100 shadow">
                    <div class="card-header bg-info text-black fw-bold">
                        🔫 MÓDULO DE ESCUADRÓN (Async/Await)
                    </div>
                    <div class="card-body text-center">
                        <div class="icon-box mb-3">🛡️</div>
                        <p class="text-info small">Estado: <span id="squadStatus">En barracas</span></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-12">
                <div class="card bg-dark border-secondary">
                    <div class="card-body">
                        <div class="d-grid gap-2 col-6 mx-auto mb-3">
                            <button id="btnStartMission" class="btn btn-outline-danger btn-lg fw-bold">
                                ☢️ INICIAR MISIÓN DE RESCATE ☢️
                            </button>
                        </div>
                        <div class="terminal-window p-3 rounded" id="consoleLogs">
                            <div class="text-muted">> Sistema listo. Esperando comando...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="radar.js"></script>
    <script src="squad.js"></script>
    <script src="main.js"></script>
</body>
</html>

```

### `style.css`

```css
body { background-color: #0f0f0f; font-family: 'Courier New', monospace; }

/* Overlay */
#overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.92); z-index: 9999;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
}
.blink { animation: blinker 1s linear infinite; }
@keyframes blinker { 50% { opacity: 0; } }

/* Radar Animation */
.radar-scan {
    width: 100px; height: 100px; border: 2px solid #198754; border-radius: 50%;
    position: relative; overflow: hidden; background: radial-gradient(circle, #002200 0%, #000 100%);
}
.radar-scan::after {
    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent 50%, rgba(25, 135, 84, 0.5) 100%);
    border-radius: 50%; animation: scan 2s linear infinite;
}
@keyframes scan { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

/* Console */
.terminal-window {
    background-color: #000; height: 250px; overflow-y: auto;
    border: 1px solid #333; font-size: 0.9rem;
}
.log-radar { color: #198754; }
.log-squad { color: #0dcaf0; }
.log-error { color: #dc3545; font-weight: bold; }
.log-success { color: #ffc107; }

```

---

## 💻 3. Instrucciones de Desarrollo

### 👤 Estudiante A: El Operador del Radar (`radar.js`)

**Restricción:** Solo puedes usar **Promesas** (`new Promise`, `.then`, `.catch`). Prohibido usar `async/await`.

Debes crear y exportar (o dejar global) las siguientes funciones:

1. **Función `scanArea()`:**
* Simula un escaneo de 2 segundos.
* Debe tener una probabilidad de fallo del 20% (Interferencia atmosférica).
* Si tiene éxito: Resuelve la promesa con el mensaje "Señal de vida detectada en Sector 7".
* Si falla: Rechaza la promesa con "ERROR: Ruido estático. No se puede localizar objetivo".


2. **Función `analyzeSignal(sector)`:**
* Recibe el sector detectado. Simula un análisis de 3 segundos.
* Si el sector es "Sector 7", resuelve con un objeto: `{ type: "Civilian", count: 4 }`.
* Si no, rechaza indicando "Falsa alarma".



### 👤 Estudiante B: El Comandante del Escuadrón (`squad.js`)

**Restricción:** Solo puedes usar **Async / Await** y bloques `try/catch`.

Debes crear y exportar (o dejar global) las siguientes funciones (que internamente retornan promesas para simular tiempo):

1. **Función `deployWeapon(weaponType)`:**
* Simula 2 segundos de preparación.
* Debe tener una probabilidad de fallo del 30% (El arma se atascó).
* Retorna: "Arma [tipo] cargada y lista".
* Lanza error: "Fallo al cargar [tipo]".


2. **Función `moveSquad(sector)`:**
* Simula 3 segundos de viaje.
* Retorna: "Escuadrón arribado al [sector]. Perímetro seguro".



---

## 🔗 4. Integración y Ejecución (Trabajo Conjunto)

1. Creen el archivo `main.js`.
2. Obtengan las referencias del botón "Iniciar Misión" y la consola de logs.
3. Programen el evento `click` del botón. **Aquí deben trabajar juntos** para mezclar ambas lógicas.

**El Flujo de la Misión debe ser:**

1. Mostrar Overlay de carga.
2. **Paso 1 (Radar - Promesa):** Ejecutar `scanArea()`.
3. **Paso 2 (Radar - Promesa):** Si hay éxito, tomar el resultado y ejecutar `analyzeSignal()`.
* *Nota:* Muestren los mensajes de progreso en la consola HTML (clase `.log-radar`).


4. **Paso 3 (Escuadrón - Async/Await):** Una vez que el radar confirme civiles:
* Llamar a `deployWeapon("Plasma Rifle")`.
* Llamar a `moveSquad("Sector 7")`.
* *Nota:* Usen `await` para esperar estos pasos y muestren logs (clase `.log-squad`).


5. **Cierre:**
* Si todo sale bien: Mostrar "¡Misión Cumplida! Civiles rescatados".
* Si algo falla (Catch): Mostrar "Misión Fallida: [Error]" en rojo.
* Ocultar Overlay (Finally).



---

## 🚀 5. Entrega (Git Flow Final)

1. Cada estudiante hace `commit` y `push` a su rama (`feature/radar` o `feature/squad`).
2. Vayan a GitHub y creen un **Pull Request** desde su rama hacia la rama `grupo-N`.
3. Revisen el código del compañero, apruébenlo y hagan **Merge**.
4. Finalmente, en su local, hagan `git checkout grupo-N` y `git pull` para tener el trabajo de ambos unido.
5. Verifiquen que el `index.html` funcione correctamente con ambos scripts.

---

### ✨ Personalización (Opcional)

Si terminan antes, personalicen el ejercicio:

* Cambien los nombres de las armas o los sectores.
* Agreguen un sonido de alarma (usando JS `Audio`) cuando falle una promesa.
* Hagan que el número de civiles rescatados sea aleatorio.

**¡Buena suerte, equipo! La ciudad depende de su código.**