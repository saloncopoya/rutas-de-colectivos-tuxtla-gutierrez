const fs = require('fs');
const path = require('path');

// Reemplaza esta lista con tus datos o la consulta a tu Firebase/JSON
const rutas = [
    { 
        id: "ruta-108", 
        nombre: "Ruta 108", 
        desc: "Copoya - Centro - Hospitales", 
        imagen: "https://raw.githubusercontent.com/tu-usuario/tu-repo/main/img/ruta-108.jpg" 
    },
    { 
        id: "ruta-1", 
        nombre: "Ruta 1", 
        desc: "Terán - Poliforum - Mactumactzá", 
        imagen: "https://raw.githubusercontent.com/tu-usuario/tu-repo/main/img/ruta-1.jpg" 
    }
];

const outputDir = path.join(__dirname, 'rutas');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

rutas.forEach(ruta => {
    const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${ruta.nombre} - Colectivos</title>
    
    <meta property="og:type" content="website">
    <meta property="og:title" content="${ruta.nombre}">
    <meta property="og:description" content="${ruta.desc}">
    <meta property="og:image" content="${ruta.imagen}">
    <meta property="og:url" content="https://tu-usuario.github.io/tu-repo/rutas/${ruta.id}.html">

    <script>
        window.location.href = "../index.html?ruta=${ruta.id}";
    </script>
</head>
<body>
    <p style="font-family: sans-serif; text-align: center; margin-top: 50px;">
        Cargando ${ruta.nombre}...
    </p>
</body>
</html>`;

    fs.writeFileSync(path.join(outputDir, `${ruta.id}.html`), htmlContent);
    console.log(`Archivo generado: rutas/${ruta.id}.html`);
});
