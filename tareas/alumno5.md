# Alumno 5: Moda

- **Rama:** `alumno5-moda`
- **Sección en la web:** `#moda`
- **Prefijo CSS:** `.a5-`
- **Tus archivos:** `secciones/05-moda.html`, `css/05-moda.css`, `js/05-moda.js`, `img/alumno5/`

## ¿Qué hace tu sección?
Ropa para hombre, mujer y niños con filtros. Cada producto tiene botones de talla y el cliente DEBE elegir una talla antes de agregarlo al carro.

## Imágenes que necesitas
- Mínimo 12 fotos CUADRADAS de 600 × 600 px, con fondo blanco (como en las tiendas online). Guárdalas en `img/alumno5/`. Para ropa sirve una foto de la prenda sola o con modelo.

## Tareas obligatorias
1. [ ] Guardar las fotos en `img/alumno5/` y cambiar el `src` de los 8 productos (ej: `src="img/alumno5/producto1.jpg"`).
2. [ ] Cambiar marca, nombre y precio de los 8 productos con productos REALES de su departamento. En cada producto (<article class="producto">) el nombre y el precio están en DOS lugares: en `data-nombre` / `data-precio` (los usa el carrito) y en el texto visible (`.producto-nombre` y `.producto-precio`). Cambia los dos. En `data-precio` solo números con punto: `1299.00` (sin S/ ni comas). Cambia también la marca (`.producto-marca`).
3. [ ] Revisar que `data-categoria` de cada producto sea IGUAL al `data-filtro` de un botón: `hombre`, `mujer`, `ninos` (minúsculas, sin tildes ni ñ).
4. [ ] Agregar productos nuevos (copiar un `<article>` completo) hasta tener 12 en total.
5. [ ] Cambiar o quitar las etiquetas rojas (`-25%`, `NUEVO`) en `<span class="producto-etiqueta">`.
6. [ ] Revisar las tallas de cada producto: pantalones pueden ser 28, 30, 32, 34; niños 4, 6, 8, 10.
7. [ ] En su CSS cambiar el estilo de los botones de talla (`.a5-tallas button.activo`).

## Retos extra (puntos adicionales)
- [ ] Agregar un filtro "Ropa interior" o "Pijamas".
- [ ] Agregar un enlace "Guía de tallas" que muestre una tabla al hacer clic.

## Antes de subir, comprueba que
- [ ] Sin talla aparece el aviso "Primero elige una talla".
- [ ] En el carro aparece "Nombre (Talla M)".
- [ ] No modifiqué archivos de otros alumnos ni del profesor.
- [ ] Hice mínimo 3 commits.
