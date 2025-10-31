const packageJson = require('./package.json')

module.exports = {
    url: 'https://protutors.ru/view_doc.html?mode=menu_dev',
    publicPath: packageJson.homepage,
    cookieString: 'SessionID=5545373038429523708; ' +
                  'x-auth-id=a0a19cba9c034bc8a5b49cba4393f3c8'
}
