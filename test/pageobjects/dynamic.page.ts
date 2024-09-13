import Page from './page.js'

class DynamicPage extends Page {
    /**
     * define elements
     */
    get btnStart () { return $('button=Start') }
    get loadedPage () { return $('#finish') }
    
    screenShot (path: string) {
        return browser.saveScreenshot(path)
    }
    /**
     * define or overwrite page methods
     */
    open () {
        return super.open('dynamic_loading/2')
    }
}

export default new DynamicPage()
