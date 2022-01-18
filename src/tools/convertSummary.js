const convertSummary =(summary)=>{

const parser = new DOMParser();
const document = parser.parseFromString(summary, "text/html")

    return document.body.innerText.split("Click for more information")
}

module.exports = convertSummary;

