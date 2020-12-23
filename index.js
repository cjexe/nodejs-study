const path = require('path')
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
eventEmitter.on('start',(n) => {
    console.log(n,123)
})
eventEmitter.emit('start','hello')

eventEmitter.on('end',(n,m) => {
    console.log(n,m,123)
})
eventEmitter.emit('end','hello','world')