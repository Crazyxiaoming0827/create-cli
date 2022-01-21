console.log('执行init');
const clear = require('clear')
const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const chalk = require('chalk')
const { clone } = require('./download')


const log = (content) => {
    console.log(chalk.yellow(content))
}
const spawn = async (...args) => {
    const { spawn } = require('child_process')
    const options = args[args.length - 1]
    if (process.platform === 'win32') {
        // 设置 shell 选项为 true 以隐式地调用 cmd 
        options.shell = true
    } else {
        // nothing
    }

    return new Promise(resolve => {
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close', () => {
            resolve()
        })
    })
}

module.exports = async name => {
    console.log('name');
    // 清理屏幕
    clear()
    const data = await figlet('hello word')
    log(data)
    // 创建项目
    log(`🚀创建项目:` + name)
    // 克隆项目
    await clone('github:Crazyxiaoming0827/test', name)

    log('安装依赖')

    await spawn('npm', ['install'], { cwd: `./${name}` })
    log(`
    👌安装完成：
    To get Start:
    ===========================
        cd ${name}
        npm run serve
    ===========================
                `)
    const open = require('open')
    open('http://localhost:8080')
    await spawn('npm', ['run', 'serve'], { cwd: `./${name}` })
}