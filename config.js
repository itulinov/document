const packageJson = require('./package.json')

module.exports = {
    url: 'https://protutors.ru/view_doc.html?mode=menu_dev',
    publicPath: packageJson.homepage,
    cookieString: 'SessionID=515068463124728677; ' +
                  'x-auth-id=853342c01ff74d939f63a40d5a226b31'
}
