import Route from '@ioc:Adonis/Core/Route'

Route.group(() =>{
    Route.get('/',  () =>'todos los users')
    Route.get('/:id', ({ params }) =>`un solo user con id ${params.id}`)
    Route.post('/',  () => 'nuevo user')
    Route.put('/:id', ({ params }) =>`actualizar user con id ${params.id}`)
    Route.delete('/:id',  ({ params }) => `borrar un user con id ${params.id}`)
    }).prefix('/user')