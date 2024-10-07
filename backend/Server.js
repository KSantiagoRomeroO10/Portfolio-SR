//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const Express = require('express')
const Index = require('./DataBase/Index')
const router = require('./Routes/InfoPersonalRoute/Index')

const Server = Express()

const Port = 3001

// Middleware
Server.use(Express.json())

// Rutas
Server.use(router)

Server.listen(Port, async () => {
  await Index()
  console.log('-'.repeat(60))
  console.log('Reporte del Servidor')  
  console.log()

  console.log(`Servidor en el puerto: ${Port}.`)
  console.log()
  console.log('-'.repeat(60))
})
