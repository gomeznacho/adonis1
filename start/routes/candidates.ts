import Route from '@ioc:Adonis/Core/Route'

Route.group(() =>{
    Route.get('/', 'CandidatesController.index')
    Route.get('/:id', 'CandidatesController.show' )
    //Route.get('/api/:city', 'CandidatesController2.show')
    Route.post('/', 'CandidatesController.store' )
    Route.put('/:id', 'CandidatesController.update')
    Route.delete('/:id', 'CandidatesController.destroy' )
    }).prefix('/candidate').middleware('auth')