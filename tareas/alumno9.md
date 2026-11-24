# Alumno 9: Cyber ofertas

- **Rama:** `alumno9-cyber`
- **Sección en la web:** `#cyber`
- **Prefijo CSS:** `.a9-`
- **Tus archivos:** `secciones/09-cyber.html`, `css/09-cyber.css`, `js/09-cyber.js`, `img/alumno9/`

## ¿Qué hace tu sección?
Sección roja de ofertas con cuenta regresiva y stock limitado: cada vez que alguien agrega un producto, baja la barra de stock; al llegar a 0 dice AGOTADO. El % de descuento se calcula solo.

## Imágenes que necesitas
- Mínimo 8 fotos cuadradas de 600 × 600 px con fondo blanco.

## Tareas obligatorias
1. [ ] Guardar las fotos en `img/alumno9/` y cambiar el `src` de las 6 ofertas.
2. [ ] Cambiar marca y nombre (`data-nombre` y el `<h3>`) de cada oferta.
3. [ ] Cambiar los precios SOLO en los atributos: `data-antes` (precio normal) y `data-precio` (precio Cyber, debe ser MENOR). El % y los precios visibles los calcula el JS.
4. [ ] Cambiar el stock de cada oferta en `data-stock` (entre 1 y 15).
5. [ ] Cambiar la fecha de fin en `data-fin`. Formato: `2026-12-31T23:59:59-05:00` (año-mes-día T hora; -05:00 = hora de Perú).
6. [ ] Agregar 2 ofertas más. Total: 8.
7. [ ] Cambiar el nombre del evento (`.a9-titulo`) y el texto pequeño.

## Retos extra (puntos adicionales)
- [ ] Mostrar "Ahorras S/ X" en cada oferta (`antes - ahora`).
- [ ] Probar una fecha pasada para ver "¡El Cyber terminó!" y luego volver a la fecha correcta.

## Antes de subir, comprueba que
- [ ] El % de descuento es correcto.
- [ ] Al agregar baja el stock; en 0 dice AGOTADO.
- [ ] La cuenta regresiva baja cada segundo.
- [ ] No modifiqué archivos de otros alumnos ni del profesor.
- [ ] Hice mínimo 3 commits.
