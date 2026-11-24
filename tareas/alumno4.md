# Alumno 4: Electrohogar

- **Rama:** `alumno4-electrohogar`
- **Sección en la web:** `#electro`
- **Prefijo CSS:** `.a4-`
- **Tus archivos:** `secciones/04-electrohogar.html`, `css/04-electrohogar.css`, `js/04-electrohogar.js`, `img/alumno4/`

## ¿Qué hace tu sección?
Refrigeradoras, lavado, cocina y pequeños electrodomésticos con filtros, contador de productos visibles y selector para ordenar por precio.

## Imágenes que necesitas
- Mínimo 12 fotos CUADRADAS de 600 × 600 px, con fondo blanco (como en las tiendas online). Guárdalas en `img/alumno4/`.

## Tareas obligatorias
1. [ ] Guardar las fotos en `img/alumno4/` y cambiar el `src` de los 8 productos (ej: `src="img/alumno4/producto1.jpg"`).
2. [ ] Cambiar marca, nombre y precio de los 8 productos con productos REALES de su departamento. En cada producto (<article class="producto">) el nombre y el precio están en DOS lugares: en `data-nombre` / `data-precio` (los usa el carrito) y en el texto visible (`.producto-nombre` y `.producto-precio`). Cambia los dos. En `data-precio` solo números con punto: `1299.00` (sin S/ ni comas). Cambia también la marca (`.producto-marca`).
3. [ ] Revisar que `data-categoria` de cada producto sea IGUAL al `data-filtro` de un botón: `refrigeradoras`, `lavado`, `cocina`, `pequenos` (minúsculas, sin tildes ni ñ).
4. [ ] Agregar productos nuevos (copiar un `<article>` completo) hasta tener 12 en total.
5. [ ] Cambiar o quitar las etiquetas rojas (`-25%`, `NUEVO`) en `<span class="producto-etiqueta">`.
6. [ ] MUY IMPORTANTE: cada producto nuevo lleva `data-orden` con el número siguiente (9, 10, 11, 12). Sin eso, "Recomendados" no funciona.
7. [ ] Probar el selector "Precio: menor a mayor" y "mayor a menor".
8. [ ] En su CSS cambiar el estilo del selector (`.a4-orden select`).

## Retos extra (puntos adicionales)
- [ ] Agregar la opción "Nombre A-Z" en el select (en el JS: `a.dataset.nombre.localeCompare(b.dataset.nombre)`).
- [ ] Agregar un filtro "Climatización" (ventiladores, aire acondicionado).

## Antes de subir, comprueba que
- [ ] El contador dice cuántos productos se ven al filtrar.
- [ ] El orden por precio es correcto.
- [ ] Agregar al carro funciona.
- [ ] No modifiqué archivos de otros alumnos ni del profesor.
- [ ] Hice mínimo 3 commits.
