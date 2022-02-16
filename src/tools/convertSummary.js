const convertSummary =(summary)=>{
console.log(summary)
const parser = new DOMParser();
const document = parser.parseFromString(summary, "text/html")

// const pageTitle = document.getElementById()
    return document.body.innerText.split("Click for more information")
}

module.exports = convertSummary;

