# Alumno 7: Belleza y cuidado personal

- **Rama:** `alumno7-belleza`
- **Sección en la web:** `#belleza`
- **Prefijo CSS:** `.a7-`
- **Tus archivos:** `secciones/07-belleza.html`, `css/07-belleza.css`, `js/07-belleza.js`, `img/alumno7/`

## ¿Qué hace tu sección?
Maquillaje, perfumes, cuidado de la piel y cabello con filtros y botón de corazón para favoritos con contador.

## Imágenes que necesitas
- Mínimo 12 fotos CUADRADAS de 600 × 600 px, con fondo blanco (como en las tiendas online). Guárdalas en `img/alumno7/`.

## Tareas obligatorias
1. [ ] Guardar las fotos en `img/alumno7/` y cambiar el `src` de los 8 productos (ej: `src="img/alumno7/producto1.jpg"`).
2. [ ] Cambiar marca, nombre y precio de los 8 productos con productos REALES de su departamento. En cada producto (<article class="producto">) el nombre y el precio están en DOS lugares: en `data-nombre` / `data-precio` (los usa el carrito) y en el texto visible (`.producto-nombre` y `.producto-precio`). Cambia los dos. En `data-precio` solo números con punto: `1299.00` (sin S/ ni comas). Cambia también la marca (`.producto-marca`).
3. [ ] Revisar que `data-categoria` de cada producto sea IGUAL al `data-filtro` de un botón: `maquillaje`, `perfumes`, `piel`, `cabello` (minúsculas, sin tildes ni ñ).
4. [ ] Agregar productos nuevos (copiar un `<article>` completo) hasta tener 12 en total.
5. [ ] Cambiar o quitar las etiquetas rojas (`-25%`, `NUEVO`) en `<span class="producto-etiqueta">`.
6. [ ] Cambiar el color principal de la sección (ahora rosado `#b0306a`) y el fondo (`.a7-seccion`) en su CSS.
7. [ ] Cambiar el color del corazón activo (`.a7-fav.activo`).

## Retos extra (puntos adicionales)
- [ ] Que al quitar un favorito diga "Quitado de favoritos" (usar `else` en el JS).
- [ ] Agregar un filtro "Cuidado masculino".

## Antes de subir, comprueba que
- [ ] El corazón cambia a ♥ y el contador sube y baja.
- [ ] Los filtros y el carro funcionan.
- [ ] No modifiqué archivos de otros alumnos ni del profesor.
- [ ] Hice mínimo 3 commits.
