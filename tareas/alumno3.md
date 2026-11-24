# Alumno 3: Tecnología

- **Rama:** `alumno3-tecnologia`
- **Sección en la web:** `#tecnologia`
- **Prefijo CSS:** `.a3-`
- **Tus archivos:** `secciones/03-tecnologia.html`, `css/03-tecnologia.css`, `js/03-tecnologia.js`, `img/alumno3/`

## ¿Qué hace tu sección?
Televisores, laptops, celulares y audio con filtros. Cada producto muestra estrellas de calificación y el JavaScript calcula solo el precio en 12 cuotas sin intereses.

## Imágenes que necesitas
- Mínimo 12 fotos CUADRADAS de 600 × 600 px, con fondo blanco (como en las tiendas online). Guárdalas en `img/alumno3/`.

## Tareas obligatorias
1. [ ] Guardar las fotos en `img/alumno3/` y cambiar el `src` de los 8 productos (ej: `src="img/alumno3/producto1.jpg"`).
2. [ ] Cambiar marca, nombre y precio de los 8 productos con productos REALES de su departamento. En cada producto (<article class="producto">) el nombre y el precio están en DOS lugares: en `data-nombre` / `data-precio` (los usa el carrito) y en el texto visible (`.producto-nombre` y `.producto-precio`). Cambia los dos. En `data-precio` solo números con punto: `1299.00` (sin S/ ni comas). Cambia también la marca (`.producto-marca`).
3. [ ] Revisar que `data-categoria` de cada producto sea IGUAL al `data-filtro` de un botón: `televisores`, `laptops`, `celulares`, `audio` (minúsculas, sin tildes ni ñ).
4. [ ] Agregar productos nuevos (copiar un `<article>` completo) hasta tener 12 en total.
5. [ ] Cambiar o quitar las etiquetas rojas (`-25%`, `NUEVO`) en `<span class="producto-etiqueta">`.
6. [ ] Cambiar la calificación de cada producto en `data-estrellas` (1 a 5) y el número de opiniones dentro de `<span>(128)</span>`.
7. [ ] Cambiar el número de cuotas en `const CUOTAS = 12;` del JS y comprobar que se recalculan.
8. [ ] En su CSS cambiar el estilo del recuadro de cuotas (`.a3-cuotas`).

## Retos extra (puntos adicionales)
- [ ] Agregar un filtro "Videojuegos" con 2 productos.
- [ ] Mostrar "Envío gratis" solo en productos de más de S/ 1000 (comparar `p.dataset.precio` en el JS).

## Antes de subir, comprueba que
- [ ] Los filtros funcionan.
- [ ] Las estrellas coinciden con `data-estrellas`.
- [ ] Las cuotas son el precio dividido entre 12.
- [ ] No modifiqué archivos de otros alumnos ni del profesor.
- [ ] Hice mínimo 3 commits.
