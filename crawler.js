const { JSDOM } = require('jsdom')
    // go to jsdom webpage to get the syntax

async function crawlPage(currentURL) {
    try {
        const resp = await fetch(currentURL)
        if (resp.status > 399) {
            console.log(`error in fetch with status code ${resp.status} on page:${currentURL}`)
            return
        }
    } catch (err) {
        console.log(`Error ${err.message}, Check URL`)
    }

}


function getURLsFromHtml(htmlBody, baseURL) {
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a')
    for (const linkElement of linkElements) {
        urls.push(linkElement.href)
    }
    return urls
}

function normalizeURL(urlString) {
    const urlObj = new URL(urlString)
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`
    if (hostPath.length > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1)
    }
    return hostPath
}

module.exports = {
    normalizeURL,
    getURLsFromHtml,
    crawlPage
}