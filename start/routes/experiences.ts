import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/',  () =>'todos las experiences')
    Route.get('/:id', ({ params }) =>`una sola experience con id ${params.id}`)
    Route.post('/',  () => 'nueva experience')
    Route.put('/:id', ({ params }) =>`actualizar experience con id ${params.id}`)
    Route.delete('/:id',  ({ params }) => `borrar un experience con id ${params.id}`)
    }).prefix('/experience')