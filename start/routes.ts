/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.where('id', {
    match: /^[0-9]+$/,
    cast: (id) => Number(id)
})

Route.get('/candidate',  () =>'todos los candidatos')
Route.get('/candidate/:id', ({ params }) =>`un solo candidato con id ${params.id}`)
Route.post('/candidate',  () => 'nuevo candidato')
Route.put('/candidate/:id', ({ params }) =>`actualizar candidato con id ${params.id}`)
Route.delete('/candidate/:id',  ({ params }) => `borrar un candidato con id ${params.id}`)

Route.get('/user',  () =>'todos los users')
Route.get('/user/:id', ({ params }) =>`un solo user con id ${params.id}`)
Route.post('/user',  () => 'nuevo user')
Route.put('/user/:id', ({ params }) =>`actualizar user con id ${params.id}`)
Route.delete('/user/:id',  ({ params }) => `borrar un user con id ${params.id}`)

Route.get('/skill',  () =>'todos los skills')
Route.get('/skill/:id', ({ params }) =>`una sola skill con id ${params.id}`)
Route.post('/skill',  () => 'nueva skill')
Route.put('/skill/:id', ({ params }) =>`actualizar skill con id ${params.id}`)
Route.delete('/skill/:id',  ({ params }) => `borrar una skill con id ${params.id}`)

Route.get('/experience',  () =>'todos las experiences')
Route.get('/experience/:id', ({ params }) =>`una sola experience con id ${params.id}`)
Route.post('/experience',  () => 'nueva experience')
Route.put('/experience/:id', ({ params }) =>`actualizar experience con id ${params.id}`)
Route.delete('/experience/:id',  ({ params }) => `borrar un experience con id ${params.id}`)
