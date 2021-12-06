import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'ExperiencesController.index')
    Route.get('/:id', 'ExperiencesController.show')
    Route.post('/', 'ExperiencesController.store')
    Route.put('/:id', 'ExperiencesController.update')
    Route.delete('/:id', 'ExperiencesController.destroy' )
    }).prefix('/experience').middleware('auth')