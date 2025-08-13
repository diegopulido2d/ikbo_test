## 1. ¿Por qué eligió la estructura arquitectónica propuesta?
La estructura arquitectónica se basa en **React + Vite** para el desarrollo rápido y modular del frontend, con **Redux Toolkit** para la gestión de estado global y **RTK Query** para la obtención y almacenamiento en caché de datos desde APIs.  
Esta arquitectura ofrece:
- **Escalabilidad**: separación clara de componentes, slices de Redux y servicios de API.
- **Mantenibilidad**: el uso de Redux Toolkit y RTK Query reduce el código repetitivo y facilita la extensión del proyecto.
- **Velocidad de desarrollo**: Vite permite tiempos de compilación y recarga muy rápidos en comparación con herramientas tradicionales.

---

## 2. ¿Cómo maneja el sistema la seguridad de las transacciones (autenticación, roles de usuario)?
En su versión actual, el sistema no implementa autenticación real, ya que se trata de un prototipo.  
En un entorno productivo, se podría integrar:
- **Autenticación basada en tokens (JWT)** para validar cada petición al backend.
- **Roles de usuario** definidos en el backend y enviados junto con el token, para controlar la visibilidad y acciones disponibles en la interfaz.
- **RTK Query** con middleware para inyectar automáticamente el token en cada request.
- **HTTPS** para garantizar la encriptación de los datos transmitidos.

---

### 3. ¿Cómo manejaría el crecimiento del sistema si tuviera que escalar?

Para manejar el crecimiento del sistema y garantizar que pueda escalar de manera eficiente, propondría las siguientes estrategias:

1. **Arquitectura modular**  
   Mantener la aplicación dividida en componentes independientes y reutilizables, facilitando la adición de nuevas funcionalidades sin afectar las existentes.

2. **Separación de responsabilidades (Frontend y Backend)**  
   - **Frontend**: Utilizar Next.js para renderizado eficiente y optimización de rendimiento (SSG/ISR).  
   - **Backend**: Implementar una API escalable que permita la comunicación eficiente con el cliente.  
   Esto facilita la escalabilidad horizontal, ya que cada parte puede crecer de forma independiente.

3. **Optimización del rendimiento**  
   - Uso de **CDN** para servir recursos estáticos.
   - Caching inteligente de datos frecuentes.
   - Compresión y minificación de archivos para reducir tiempos de carga.
