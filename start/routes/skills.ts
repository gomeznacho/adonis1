import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'SkillsController.index')
    Route.get('/:id', 'SkillsController.show')
    Route.post('/', 'SkillsController.store' )
    Route.put('/:id', 'SkillsController.update')
    Route.delete('/:id', 'SkillsController.destroy')
    }).prefix('/skill').middleware('auth')