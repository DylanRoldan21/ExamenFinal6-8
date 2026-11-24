# MegaTienda · Tienda por departamentos online (trabajo en equipo con Git)

Web de una tienda por departamentos dividida en **10 secciones independientes**. Cada alumno trabaja SOLO en sus archivos,
así al unir las 10 ramas no hay conflictos.

Repositorio: https://github.com/DylanRoldan21/mega-tienda.git

## Reparto

| Alumno | Sección | Rama | Archivos |
|---|---|---|---|
| 1 | Header, buscador, carro y banner | `alumno1-header` | `secciones/01-header-banner.html`, `css/01-header-banner.css`, `js/01-header-banner.js`, `img/alumno1/` |
| 2 | Categorías, promociones y cupón | `alumno2-categorias` | `secciones/02-categorias-promos.html`, `css/02-categorias-promos.css`, `js/02-categorias-promos.js`, `img/alumno2/` |
| 3 | Tecnología | `alumno3-tecnologia` | `secciones/03-tecnologia.html`, `css/03-tecnologia.css`, `js/03-tecnologia.js`, `img/alumno3/` |
| 4 | Electrohogar | `alumno4-electrohogar` | `secciones/04-electrohogar.html`, `css/04-electrohogar.css`, `js/04-electrohogar.js`, `img/alumno4/` |
| 5 | Moda | `alumno5-moda` | `secciones/05-moda.html`, `css/05-moda.css`, `js/05-moda.js`, `img/alumno5/` |
| 6 | Calzado | `alumno6-calzado` | `secciones/06-calzado.html`, `css/06-calzado.css`, `js/06-calzado.js`, `img/alumno6/` |
| 7 | Belleza y cuidado personal | `alumno7-belleza` | `secciones/07-belleza.html`, `css/07-belleza.css`, `js/07-belleza.js`, `img/alumno7/` |
| 8 | Deporte | `alumno8-deporte` | `secciones/08-deporte.html`, `css/08-deporte.css`, `js/08-deporte.js`, `img/alumno8/` |
| 9 | Cyber ofertas | `alumno9-cyber` | `secciones/09-cyber.html`, `css/09-cyber.css`, `js/09-cyber.js`, `img/alumno9/` |
| 10 | Servicios, newsletter y footer | `alumno10-footer` | `secciones/10-footer.html`, `css/10-footer.css`, `js/10-footer.js`, `img/alumno10/` |

## Reglas de oro
1. Solo editas TUS 3 archivos y TU carpeta de imágenes.
2. **Nunca** edites `index.html`, `css/base.css`, `js/tienda.js` ni `js/include.js` (son del profesor).
3. Tus clases CSS nuevas empiezan con tu prefijo: `.a1-`, `.a2-` … `.a10-`.
4. Puedes **usar** las clases comunes de `base.css`: `.btn`, `.producto`, `.filtro`, `.titulo-seccion`, etc.
5. Rutas de imágenes: `img/alumnoX/nombre.jpg` (minúsculas, sin espacios, con la extensión correcta).

## Cómo ver la web
Las secciones se cargan con JavaScript: **no funciona con doble clic**.
VS Code → extensión **Live Server** → clic derecho en `index.html` → *Open with Live Server*.

## El carrito (compartido)
Cualquier sección agrega un producto con `agregarAlCarrito('Nombre', 49.90)` y muestra avisos con
`mostrarToast('texto')`. Estas funciones están en `js/tienda.js`. El Alumno 1 muestra el contador y el total.

## Pasos en Git (alumno)
```bash
git clone https://github.com/DylanRoldan21/mega-tienda.git
cd mega-tienda
git checkout -b alumnoX-nombre        # tu rama
# ...trabajas...
git add .
git commit -m "Alumno X: descripción del cambio"
git push -u origin alumnoX-nombre
```
Luego en GitHub: **Compare & pull request** hacia `main`.

## Pasos en Git (profesor) – subir esta plantilla
```bash
cd mega-tienda            # la carpeta descomprimida
git init
git add .
git commit -m "Plantilla inicial MegaTienda"
git branch -M main
git remote add origin https://github.com/DylanRoldan21/mega-tienda.git
git push -u origin main
```

## Unir las ramas (profesor)
GitHub → **Pull requests** → revisar *Files changed* → **Merge pull request** (uno por uno).
Publicar: **Settings → Pages → Branch: main / (root) → Save**.

Las tareas detalladas de cada alumno están en la carpeta `tareas/` y en el PDF de indicaciones.
