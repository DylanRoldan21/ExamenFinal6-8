# Alumno 8: Deporte

- **Rama:** `alumno8-deporte`
- **Sección en la web:** `#deporte`
- **Prefijo CSS:** `.a8-`
- **Tus archivos:** `secciones/08-deporte.html`, `css/08-deporte.css`, `js/08-deporte.js`, `img/alumno8/`

## ¿Qué hace tu sección?
Fitness, ciclismo, fútbol y outdoor con filtros. Cada producto tiene bolitas de color: al hacer clic cambia el texto "Color: ..." y ese color se guarda en el carro.

## Imágenes que necesitas
- Mínimo 12 fotos CUADRADAS de 600 × 600 px, con fondo blanco (como en las tiendas online). Guárdalas en `img/alumno8/`.

## Tareas obligatorias
1. [ ] Guardar las fotos en `img/alumno8/` y cambiar el `src` de los 8 productos (ej: `src="img/alumno8/producto1.jpg"`).
2. [ ] Cambiar marca, nombre y precio de los 8 productos con productos REALES de su departamento. En cada producto (<article class="producto">) el nombre y el precio están en DOS lugares: en `data-nombre` / `data-precio` (los usa el carrito) y en el texto visible (`.producto-nombre` y `.producto-precio`). Cambia los dos. En `data-precio` solo números con punto: `1299.00` (sin S/ ni comas). Cambia también la marca (`.producto-marca`).
3. [ ] Revisar que `data-categoria` de cada producto sea IGUAL al `data-filtro` de un botón: `fitness`, `ciclismo`, `futbol`, `outdoor` (minúsculas, sin tildes ni ñ).
4. [ ] Agregar productos nuevos (copiar un `<article>` completo) hasta tener 12 en total.
5. [ ] Cambiar o quitar las etiquetas rojas (`-25%`, `NUEVO`) en `<span class="producto-etiqueta">`.
6. [ ] Cambiar los colores de cada producto: `<button class="a8-color" data-color="Rojo" style="background:#e4002b">`. El primero lleva la clase `activo` y el texto `.a8-color-texto` debe decir ese color.
7. [ ] En su CSS cambiar el color de los filtros activos (ahora azul `#1e63c9`).

## Retos extra (puntos adicionales)
- [ ] Agregar un filtro "Natación".
- [ ] Que al cambiar de color cambie también la foto (guardar la ruta en `data-foto` de cada bolita).

## Antes de subir, comprueba que
- [ ] Al tocar un color cambia el texto.
- [ ] En el carro aparece "Nombre - Color".
- [ ] No modifiqué archivos de otros alumnos ni del profesor.
- [ ] Hice mínimo 3 commits.
