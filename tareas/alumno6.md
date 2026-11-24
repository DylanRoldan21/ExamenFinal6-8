# Alumno 6: Calzado

- **Rama:** `alumno6-calzado`
- **Sección en la web:** `#calzado`
- **Prefijo CSS:** `.a6-`
- **Tus archivos:** `secciones/06-calzado.html`, `css/06-calzado.css`, `js/06-calzado.js`, `img/alumno6/`

## ¿Qué hace tu sección?
Zapatillas, zapatos, sandalias y botas con filtros. Cada producto tiene una lista desplegable de tallas (36 al 43); si no eligen talla, el selector se pone rojo.

## Imágenes que necesitas
- Mínimo 12 fotos CUADRADAS de 600 × 600 px, con fondo blanco (como en las tiendas online). Guárdalas en `img/alumno6/`.

## Tareas obligatorias
1. [ ] Guardar las fotos en `img/alumno6/` y cambiar el `src` de los 8 productos (ej: `src="img/alumno6/producto1.jpg"`).
2. [ ] Cambiar marca, nombre y precio de los 8 productos con productos REALES de su departamento. En cada producto (<article class="producto">) el nombre y el precio están en DOS lugares: en `data-nombre` / `data-precio` (los usa el carrito) y en el texto visible (`.producto-nombre` y `.producto-precio`). Cambia los dos. En `data-precio` solo números con punto: `1299.00` (sin S/ ni comas). Cambia también la marca (`.producto-marca`).
3. [ ] Revisar que `data-categoria` de cada producto sea IGUAL al `data-filtro` de un botón: `zapatillas`, `zapatos`, `sandalias`, `botas` (minúsculas, sin tildes ni ñ).
4. [ ] Agregar productos nuevos (copiar un `<article>` completo) hasta tener 12 en total.
5. [ ] Cambiar o quitar las etiquetas rojas (`-25%`, `NUEVO`) en `<span class="producto-etiqueta">`.
6. [ ] Ajustar las tallas del `<select class="a6-talla">` de cada producto (ej: niños 28 al 35). La primera opción siempre debe ser `value=""`.
7. [ ] En su CSS cambiar el color de error del selector (`.a6-talla.a6-error`).

## Retos extra (puntos adicionales)
- [ ] Agregar un filtro "Niños" con calzado infantil.
- [ ] Mostrar "Última talla disponible" en algún producto con solo 1 talla.

## Antes de subir, comprueba que
- [ ] Sin talla el selector se pone rojo y sale aviso.
- [ ] En el carro aparece "Nombre (Talla 40)".
- [ ] No modifiqué archivos de otros alumnos ni del profesor.
- [ ] Hice mínimo 3 commits.
