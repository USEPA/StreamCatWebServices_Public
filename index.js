import { SwaggerUIBundle } from "swagger-ui-dist"
window.onload = () => {
    window.ui = SwaggerUIBundle({
          url: 'swagger_update.yml',
          dom_id: '#ui',
    });
};