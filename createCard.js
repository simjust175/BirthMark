const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater")

const fs = require("fs");
const path = require("path")
//const color = "color"
const lang = "en"


const loadContent = (firstName, lastName, color) => {
    const content = fs.readFileSync(
        path.resolve(__dirname, `./assets/templates/b-day_${color}_${lang}.docx`),
        "binary"
    )
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    });

    doc.render({ firstName, lastName });

    return doc.getZip().generate({
        type: "nodebuffer",
        compression: "DEFLATE",
    });
}

const renderCard = (firstName, lastName, color) => {
    const buf = loadContent(firstName, lastName, color)
    const outputFolder = "./createdDocuments"
    const outputPath = path.join(__dirname, outputFolder)
    fs.writeFileSync(path.resolve(outputPath, `happyB-day${firstName}.docx`), buf)
    console.log(`File for ${firstName} rendered`);
}

module.exports = renderCard