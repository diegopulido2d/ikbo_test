# 📦 QuoteAccept App - IKBO Prueba

## 📖 Descripción

**QuoteAccept** es una aplicación desarrollada con **React** que permite visualizar una lista de ofertas y aceptar aquellas que interesen.  

La aplicación se conecta a un servicio (simulado con *dummy data*) para obtener todas las ofertas disponibles, y permite:

- **Visualizar** todas las ofertas obtenidas desde la API.
- **Aceptar** ofertas individuales, que pasarán a una lista separada de *Ofertas aceptadas*.
- **Eliminar** ofertas de la lista principal.

Características:
- Uso de **React Hooks** (`useState`, `useEffect`).
- Uso de **RTK Query** para consumir datos y mutaciones en una API.
- Gestión de listas y actualización dinámica del estado.

---

## 📂 Estructura del proyecto

```plaintext
src/
│
├── app/
│   └── service/
│       └── dummyData.js     # Servicio RTK Query para obtener y agregar ofertas
│
├── components/
│   └── QuoteAccept/
│       ├── index.jsx        # Lógica principal de la aplicación
│       └── styles.css       # Estilos del componente
│
├── App.js                   # Punto de entrada de la UI
└── index.js                 # Renderizado en ReactDOM
```

## 🛠 Instalación del proyecto

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/diegopulido2d/ikbo_test.git
   ```
2. **Instalar dependencias**
    ```bash
   npm install
   npm install @reduxjs/toolkit react-redux
   ```
3. **Ejecución en local**
   ```bash
   npm run dev
   ```

## Uso de la aplicación

Una vez que la aplicación esté corriendo en tu entorno local, podrás acceder a ella desde tu navegador en:
http://localhost:3000


La aplicación muestra dos columnas principales:

1. **Todas las ofertas**  
   - Esta sección lista todos los productos/servicios disponibles que provienen del *endpoint* o servicio configurado en el proyecto (`useGetAllProductsQuery`).  
   - Cada oferta incluye:  
     - **Título**
     - **Precio**
     - **Descripción**
     - Un botón **"Aceptar oferta"**, que permite agregar esa oferta a la lista de aceptadas.

2. **Ofertas aceptadas**  
   - Aquí se muestran todas las ofertas que el usuario ha aceptado durante la sesión.  
   - Cada vez que se presiona el botón **"Aceptar oferta"** en la columna izquierda, dicha oferta se agrega a este listado, usando el *hook* `useAddNewProductMutation`.

### Flujo de uso

1. El usuario entra a la aplicación y ve la lista de todas las ofertas disponibles.
2. Si le interesa alguna, presiona el botón **"Aceptar oferta"**.
3. La oferta seleccionada se agrega a la columna derecha **"Ofertas aceptadas"**, la cual se va llenando a medida que se aceptan más ofertas.
4. La información se maneja mediante *mutations* y *queries* proporcionadas por RTK Query.

> 💡 **Nota:** Actualmente, los datos provienen de un servicio ficticio (dummyData), pero pueden adaptarse fácilmente para consumir una API real.

-------------------------------------
Autor: diegopulido2d, 2025.