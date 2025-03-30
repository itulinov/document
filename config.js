const packageJson = require('./package.json')

module.exports = {
    url: 'https://protutors.ru/view_doc.html?mode=menu_dev',
    publicPath: packageJson.homepage,
    cookieString: 'SessionID=5545373038429523708; ' +
                  'x-auth-id=6c5094926e2348c4b18417198432f6cf'
}
