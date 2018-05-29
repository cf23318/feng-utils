const path = require('path')
const fs = require('fs')
const ora = require('ora')
const copy = require('copy')
const chalk = require('chalk')
const config = require('../config')

const rootPath = path.resolve(__dirname, '../')

// 替换模块文件
let copying = ora('copying...')
copying.start()

let folderList = fs.readdirSync(path.resolve(rootPath, 'src'))
folderList.forEach((item, index) => {
  copy(`src/utils/*.js`, config.assetsRoot, function (err, files) {
    if (err) throw err;
    if (index === folderList.length - 1) {
      console.log(chalk.cyan('  Copy complete.\n'))
      copying.stop()
    }
  })
})
