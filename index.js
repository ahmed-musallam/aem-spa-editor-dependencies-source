const { exec } = require("child_process");


function unpack(sourcemapFile) {
  exec(`./node_modules/.bin/unpack out ${sourcemapFile}`, (error, stdout, stderr) => {
    if (error) console.log(`error: ${error.message}`);
    else if (stderr) console.log(`stderr: ${stderr}`);
    else console.log(`stdout: ${stdout}`);
  });
}

[
  "./node_modules/@adobe/cq-react-editable-components/dist/cq-react-editable-components.js.map",
  "./node_modules/@adobe/cq-spa-component-mapping/dist/cq-spa-component-mapping.js.map",
  "./node_modules/@adobe/cq-spa-page-model-manager/dist/cq-spa-page-model-manager.js.map"
].forEach(file => unpack(file))
