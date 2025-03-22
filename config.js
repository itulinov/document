const packageJson = require('./package.json')

module.exports = {
    url: 'https://bu-online.beeline.ru/view_doc.html?mode=menu_dev',
    publicPath: packageJson.homepage,
    cookieString: 'SessionID=7459720584482392364'
}
