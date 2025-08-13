### Liderando el desarrollo de un sistema con un equipo de 2-3 desarrolladores

#### 1. Organización de sprints y asignación de tareas
- **Metodología recomendada:** Scrum.  
- **Duración de sprints:** 2 - 3 semanas, lo suficiente para entregar resultados funcionales.  
- **Planificación:**  
  1. **Sprint Planning** al inicio: definir objetivos claros y priorizar tareas según el backlog.
  2. **Daily Stand-up** de 10-15 minutos para sincronizar avances y desbloquear problemas.
  3. **Sprint Review** al final para mostrar resultados y recibir feedback.
  4. **Sprint Retrospective** para mejorar procesos.
- **Asignación de tareas:**  
  - Uso de **tablero en Jira** con columnas *To Do → In Progress → In Review → Done*.  
  - Tareas divididas en historias de usuario o subtareas, estimadas con *story points* o *horas*.
  - Asignar según fortalezas individuales.

---

#### 2. Metodologías y herramientas de revisión de código
- **Revisión de código:**  
  - Todo cambio debe pasar por **Pull Request (PR)** antes de ser mergeado.
  - Revisiones cruzadas: al menos un compañero revisa el PR.
  - Uso de **comentarios específicos** en línea y sugerencias claras.
- **Herramientas recomendadas:**  
  - GitHub / GitLab / Bitbucket para repositorios y PRs.
  - Integración con **linters y formatters** (ESLint, Prettier) para mantener estilo consistente.

---

#### 3. Procesos de CI/CD para calidad y despliegue continuo
- **Integración Continua (CI):**
  - Pipeline que se ejecuta en cada push/PR para:
    - Ejecutar tests unitarios y de integración (Jest / React Testing Library).
    - Verificar estándares de código (lint, formateo).
- **Despliegue Continuo (CD):**
  - Configuración en GitHub Actions, GitLab CI o CircleCI para:
    - Deploy automático a entornos de **staging** después de que la rama `develop` pase todas las pruebas.
    - Deploy automático a **producción** solo desde `main` y tras aprobación.
- **Entornos recomendados:**
  - **Staging:** para validar cambios en un entorno similar a producción.
  - **Producción:** despliegue controlado con *feature flags* para habilitar nuevas funciones gradualmente.
