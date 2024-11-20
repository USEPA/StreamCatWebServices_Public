import { SwaggerUIBundle } from "swagger-ui-dist";

const loadSwaggerUI = (url) => {
    window.ui = SwaggerUIBundle({
        url: url,
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIBundle.presets.apis.standaloneLayout
        ],
        plugins: [
            SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
    });
};

document.getElementById('streamcat-link').addEventListener('click', () => {
    loadSwaggerUI('streamcat_swagger.yml');
});

document.getElementById('lakecat-link').addEventListener('click', () => {
    loadSwaggerUI('lakecat_swagger.yml');
});

// Load Streamcat by default
window.onload = () => {
    loadSwaggerUI('streamcat_swagger.yml');
};