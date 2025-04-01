const packageJson = require('./package.json')

module.exports = {
    url: 'https://protutors.ru/view_doc.html?mode=menu_dev',
    publicPath: packageJson.homepage,
    cookieString: 'SessionID=5545373038429523708; ' +
                  'x-auth-id=cc48385f6fdc4d8898515c723ae3c00c'
}
