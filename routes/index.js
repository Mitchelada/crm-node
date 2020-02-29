const express = require('express')
const router = express.Router();
const clienteController = require('../controllers/clienteController')
const productoController = require('../controllers/productoController')
const pedidosController = require('../controllers/pedidosController')
const usuarioController = require('../controllers/usuarioController')

//middle para proteger las rutas
const auth = require('../middleware/auth')

module.exports = () => {

    //Agrega nuevos clientes via Post
    router.post('/clientes', auth, clienteController.nuevoCliente);

    // Obtener todos los clientes
    router.get('/clientes', auth, clienteController.mostrarClientes)

    // Mostrar cliente en especifico (ID)
    router.get('/clientes/:idCliente', auth, clienteController.mostrarCliente)

    //Actualizar cliente
    router.put('/clientes/:idCliente', auth, clienteController.actualizarCliente)

    //Eliminar cliente
    router.delete('/clientes/:idCliente', auth, clienteController.eliminarCliente)

    //** Productos **/
    //Nuevos productos
    router.post('/productos', auth, productoController.subirArchivo, productoController.nuevoProducto)

    //Obtener todos los productos
    router.get('/productos', auth, productoController.mostrarProductos)

    //Obtener solo un producto
    router.get('/productos/:idProducto', auth, productoController.mostrarProducto)

    //Actualizar Producto
    router.put('/productos/:idProducto', auth, productoController.subirArchivo, productoController.actualizarProducto)

    //Eliminar Producto
    router.delete('/productos/:idProducto', auth, productoController.eliminarProducto)

    //Busqueda de producots
    router.post('/productos/busqueda/:query', auth, productoController.buscarProducto)

    //**** Pedidos ****/
    //Agregar un pedido
    router.post('/pedidos/nuevo/:idUsuario', pedidosController.nuevoPedido)

    //Obtener todos los pedidos
    router.get('/pedidos', pedidosController.mostrarPedidos)

    //Obtener pedido por Id
    router.get('/pedidos/:idPedido', pedidosController.mostrarPedido)

    //Actualizar un pedido
    router.put('/pedidos/:idPedido', pedidosController.actualizarPedido)

    //Eliminar un pedido
    router.delete('/pedidos/:idPedido', pedidosController.eliminarPedido)

    //Usuarios
    router.post('/crear-cuenta', auth, usuarioController.registrarUsuario);

    router.post('/iniciar-sesion', usuarioController.autenticarUsuario)

    return router;
}