# Todo List - Desafío 5

Este proyecto consiste en una aplicación web interactiva de gestión de tareas pendientes (Todo List), desarrollada como parte de los desafíos de la academia Desafío Latam.

# Link del desafío: https://marcelofloresfuentealba-cpu.github.io/Todo-List/

## Descripción
El objetivo es crear una página web dinámica que permita a los usuarios administrar sus tareas diarias. La aplicación permite visualizar un listado de tareas, agregar nuevas, marcar tareas como completadas y eliminarlas, manteniendo un resumen actualizado del progreso.

## Funcionalidades principales

- **Gestión de tareas:**
    - Agregar nuevas tareas mediante un campo de entrada.
    - Eliminar tareas existentes de la lista.
    - Marcar tareas como completadas (cambiando su estado).
- **Resumen dinámico:**
    - Visualización del total de tareas registradas.
    - Contador de tareas realizadas, actualizado en tiempo real.
- **Persistencia en memoria:**
    - Las tareas se almacenan en un arreglo de objetos, cada uno con:
        - `id` (identificador único).
        - `descripcion` (texto de la tarea).
        - `completado` (booleano para marcar el estado).

## Requerimientos técnicos

Para cumplir con el desafío, la implementación debe contemplar:

1.  **Agregar tareas:** Al ingresar una descripción y presionar el botón "Agregar", la tarea se añade al arreglo y se actualiza la vista.
2.  **Borrar tareas:** Al hacer clic en el botón de eliminar, el elemento se remueve del arreglo y la interfaz se refresca.
3.  **Contador total:** El contador de tareas totales se mantiene sincronizado con las operaciones de agregar y borrar.
4.  **Marcar completadas:** Funcionalidad para cambiar el estado de `completado` de `false` a `true`.
5.  **Contador de realizadas:** Filtrado y conteo automático de las tareas que tienen el estado completado.
6.  **Carga inicial:** El código incluye al menos 3 tareas precargadas en el arreglo inicial, renderizadas automáticamente al cargar la página utilizando iteradores (`forEach` o `for of`).

## Estructura de Datos
Las tareas se manejan como objetos dentro de un arreglo:
```javascript
{
  id: Number,
  descripcion: String,
  completado: Boolean
}
