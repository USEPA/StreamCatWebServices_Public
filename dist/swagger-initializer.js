//import { SwaggerUIBundle } from "swagger-ui-bundle";
// from https://swagger.io/docs/open-source-tools/swagger-ui/usage/installation/
var SwaggerUIBundle = require("swagger-ui-dist").SwaggerUIBundle
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

// window.onload = function() {
//   //<editor-fold desc="Changeable Configuration Block">

//   // the following lines will be replaced by docker/configurator, when it runs in a docker-container
//   window.ui = SwaggerUIBundle({
//     url: "streamcat_swagger.yml",
//     dom_id: '#swagger-ui',
//     deepLinking: true,
    
//     presets: [
//       SwaggerUIBundle.presets.apis,
//       SwaggerUIStandalonePreset
//     ],
//     plugins: [
//       SwaggerUIBundle.plugins.DownloadUrl
//     ],
//     layout: "StandaloneLayout"
//   });

//   //</editor-fold>
// };