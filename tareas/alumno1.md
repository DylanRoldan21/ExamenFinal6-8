# Alumno 1: Header, buscador, carro y banner

- **Rama:** `alumno1-header`
- **Sección en la web:** `#inicio`
- **Prefijo CSS:** `.a1-`
- **Tus archivos:** `secciones/01-header-banner.html`, `css/01-header-banner.css`, `js/01-header-banner.js`, `img/alumno1/`

## ¿Qué hace tu sección?
La parte de arriba de toda la tienda: barra superior, logo, buscador (busca en los productos de TODA la página), botón de usuario, carro de compras con contador, lista y total, menú de departamentos y el banner principal que cambia solo.

## Imágenes que necesitas
- 3 banners horizontales de 1600 × 500 px (promociones: tecnología, electrohogar, moda).

## Tareas obligatorias
1. [ ] Acordar con el equipo el nombre de la tienda y escribirlo en el logo: `Mega<span>Tienda</span>` (el `span` sale en otro color). Avisar el nombre al Alumno 10.
2. [ ] Cambiar el texto de la barra superior oscura (`.a1-top`) y los 3 enlaces (Tiendas, Ayuda, Vende con nosotros).
3. [ ] Guardar 3 banners en `img/alumno1/` y cambiar el `src` y el `alt` de las 3 imágenes del banner.
4. [ ] En cada slide cambiar el texto pequeño (`.a1-mini`), el título `<h1>` y el botón. Cada botón debe llevar a un departamento real (`#tecnologia`, `#electro`, `#moda`, etc.).
5. [ ] Cambiar el `placeholder` del buscador. Probar buscando "laptop", "zapatillas" o "perfume": debe bajar al producto y marcarlo con borde verde.
6. [ ] Cambiar la constante `VELOCIDAD` del banner en `js/01-header-banner.js` (5000 = 5 segundos).
7. [ ] En su CSS cambiar al menos 2 estilos: color del logo (`.a1-logo`) y fondo de la barra superior (`.a1-top`).

## Retos extra (puntos adicionales)
- [ ] Agregar un 4.º slide (los puntos se crean solos).
- [ ] Botón "Vaciar carro" en el panel: `window.carrito.length = 0;` y disparar `document.dispatchEvent(new CustomEvent('carrito-actualizado', { detail: window.carrito }));`

## Antes de subir, comprueba que
- [ ] El banner cambia solo y con las flechas.
- [ ] El buscador encuentra productos de otras secciones.
- [ ] Al agregar productos sube el contador y el total del carro.
- [ ] No modifiqué archivos de otros alumnos ni del profesor.
- [ ] Hice mínimo 3 commits.
