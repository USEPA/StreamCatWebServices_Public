import { SwaggerUIBundle } from "swagger-ui-dist"
window.onload = () => {
    window.ui = SwaggerUIBundle({
          url: 'swagger.yml',
          dom_id: '#ui',
    });
};
