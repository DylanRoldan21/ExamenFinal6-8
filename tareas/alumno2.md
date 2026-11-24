# Alumno 2: Categorías, promociones y cupón

- **Rama:** `alumno2-categorias`
- **Sección en la web:** `#categorias`
- **Prefijo CSS:** `.a2-`
- **Tus archivos:** `secciones/02-categorias-promos.html`, `css/02-categorias-promos.css`, `js/02-categorias-promos.js`, `img/alumno2/`

## ¿Qué hace tu sección?
Círculos de categorías (como en las tiendas por departamentos) que llevan a cada sección, 3 banners promocionales y un cupón de descuento con botón "Copiar código".

## Imágenes que necesitas
- 3 banners promocionales de 600 × 320 px.
- Opcional: 8 íconos cuadrados (.png de 128 × 128 px) para reemplazar los emojis de los círculos.

## Tareas obligatorias
1. [ ] Revisar que los 8 círculos tengan el `href` correcto: `#tecnologia`, `#electro`, `#moda`, `#calzado`, `#belleza`, `#deporte`, `#cyber`, `#ayuda`.
2. [ ] Cambiar los emojis por íconos propios: reemplazar `<span class="a2-icono">💻</span>` por `<span class="a2-icono"><img src="img/alumno2/icono-tecno.png" alt=""></span>`.
3. [ ] Guardar 3 promociones en `img/alumno2/` y cambiar el `src`, el `alt` y el `href` de cada una.
4. [ ] Cambiar el título del cupón, la condición (monto mínimo, fecha) y el código (`id="a2-codigo"`).
5. [ ] Probar el botón "Copiar código" y pegar (Ctrl + V) en el buscador para comprobar que se copió.
6. [ ] En su CSS cambiar el color del borde del cupón (`.a2-cupon`) y el color de los círculos al pasar el mouse.

## Retos extra (puntos adicionales)
- [ ] Agregar un 4.º banner promocional (cambiar el grid a 4 columnas).
- [ ] Que el botón cambie a "¡Copiado!" por 2 segundos (`setTimeout`).

## Antes de subir, comprueba que
- [ ] Cada círculo lleva a su departamento.
- [ ] El cupón se copia y aparece el aviso.
- [ ] En celular los círculos quedan en 2 filas de 4.
- [ ] No modifiqué archivos de otros alumnos ni del profesor.
- [ ] Hice mínimo 3 commits.
