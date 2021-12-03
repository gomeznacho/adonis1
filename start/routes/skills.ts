import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/',  () =>'todos los skills')
    Route.get('/:id', ({ params }) =>`una sola skill con id ${params.id}`)
    Route.post('/',  () => 'nueva skill')
    Route.put('/:id', ({ params }) =>`actualizar skill con id ${params.id}`)
    Route.delete('/:id',  ({ params }) => `borrar una skill con id ${params.id}`)
    }).prefix('/skill')