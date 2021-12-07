import Route from '@ioc:Adonis/Core/Route'

Route.post('/', 'UsersController.store').prefix('/user')

Route.post('/register', 'UsersController.register').prefix('/user')

Route.post('/login', async ({ auth, request, response }) => {
  const email = request.input('email')
  const password = request.input('password')
  try {
      const token = await auth.use('api').attempt(email, password)
      return token
    } catch {
      return response.badRequest('Invalid credentials')
    }
}).prefix('/user')

Route.post('/logout', async ({ auth, response }) => {
 await auth.use('api').logout()
  }).prefix('/user')

Route.group(() =>{
    Route.get('/', 'UsersController.index')
    Route.get('/:id', 'UsersController.show')
    
    Route.put('/:id', 'UsersController.update')

    Route.delete('/:id', 'UsersController.destroy' )
   
    }).prefix('/user').middleware('auth')