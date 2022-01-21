#!/usr/bin/env node
// const { program } = require('commander');
const program = require('commander')
// program
//   .version('0.1.0')
//   .argument('<username>', 'user to login')
//   .argument('[password]', 'password for user, if required', 'no password given')
//   .description('example program for argument')
//   .action((username, password) => {
//     console.log('username:', username);
//     console.log('password:', password);
//   });

// program.parse();
// const { program } = require('commander');
// program.version('0.0.1');

/***
 * 选项命令
 * 
 * */ 
// program
//   .option('-d, --debug', 'output extra debugging')
//   .option('-s, --small', 'small pizza size')
//   .option('-p, --pizza-type <type>', 'flavour of pizza');

// program.parse(process.argv);

// const options = program.opts();
// if (options.debug) console.log(options,'666');
// console.log('pizza details:');
// if (options.small) console.log('- small pizza size');
// if (options.pizzaType) console.log(`- ${options.pizzaType}`);
/**
 * 
 * 选项的默认值
*/
// program
//     .option('-c, --cheese <type>','add the', 'blue')
// program.parse();
// console.log(`cheese: ${program.opts().cheese} `);



/**
 * 反选参数
*/


// program
//     .option('--no-sauce','Remove sauce')
//     .option('--cheese <flavour>', 'cheese flavour','mozzarella')
//     .option('--no-cheese','plain with no cheese')
//     .parse()
// const options =program.opts()
// const sauceStr = options.sauce ? 'sauce' :  'no sauce'
// const cheeseStr = (options.cheese === false) ? 'no cheese' : `${options.cheese} cheese`
// console.log(sauceStr,' sauceStr');
// console.log(cheeseStr,' cheeseStr');



/***
 * 版本输出
*/
program
    .version(require('../package').version)
    .parse()




/**
 *自定义选项处理 
*/
function myPaseInt(value,dummyPrevious){


}


/**
 * 命令编写 command 命令
*/
// program
//     .command('clone <source> [destination]')
//     .description('clone a repository')
//     .action((source, destination)=>{
//         console.log(source, 'source');
//         console.log(destination, 'destination');
//     })
//     .parse()
// program
//   .command('build')
//   .description('build web site for deployment')
//   .action(() => {
//     console.log('build');
//   });

// program
//   .command('deploy')
//   .description('deploy web site to production')
//   .action(() => {
//     console.log('deploy');
//   });

// program
//   .command('serve', { isDefault: true })
//   .description('launch web server')
//   .option('-p,--port <port_number>', 'web port')
//   .action((options) => {
//     console.log(`server on port ${options.port}`);
//   });

// program.parse(process.argv);

// program
//   .version('0.1.0')
//   .argument('<username>', 'user to login')
//   .argument('[password]', 'password for user, if required', 'no password given')
//   .action((username, password) => {
//     console.log('username:', username);
//     console.log('password:', password);
//   });

// program 
//     .command('clone <source> [des]')
//     .description('clone')
//     .action((source,aa,des)=>{
//         console.log('clone 1111',source,aa,des);
//     })
//     .parse()

program.version(require('../package.json').version)
program
    .command('init <name>')
    .description('init project')
    .action(require('../lib/init'))


program.parse()
