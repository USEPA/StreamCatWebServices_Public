import { SwaggerUIBundle } from "swagger-ui-dist"
window.onload = () => {
    window.ui = SwaggerUIBundle({
        url: "swagger.yml",
        dom_id: '#swagger-ui',
        deepLinking: true,
        
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
          // MyWrapActionPlugin
        ],
        layout: "StandaloneLayout"
      });
};
