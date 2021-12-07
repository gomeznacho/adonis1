import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import User from 'App/Models/User'
import {schema, rules} from '@ioc:Adonis/Core/Validator'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const users = await User.query();

    return response.json({users})
  }

  public async register({ request, response }: HttpContextContract) {
    const userSchema = schema.create({
     name: schema.string({ trim: true }, [
        rules.unique({ table: 'users', column: 'name' }),
        rules.regex(/^[a-zA-Z0-9-_]+$/),
      ]),

      email: schema.string({ trim: true }, [rules.unique({ table: 'users', column: 'email' })]),
      password: schema.string({})
    });

    const data = await request.validate({ schema: userSchema })
    const user = await User.create(data );
    return response.json({user})
  }


 /* public async store({ request, response }: HttpContextContract) {
    const name = request.input('name');
    const email = request.input('email');
    const password = request.input('password');
    //const candidates = request.input('candidates')

    const user = await User.create({ name, email, password } );
 
    //const user = await Database.insertQuery<User>().table('users').insert({name, email, password, candidates});
   
    return response.json({user})
  }
*/
  public async show({response, params}: HttpContextContract) {

    //const user = await User.query().where('id', params.id).firstOrFail();
    //const user = await User.findOrFail(params.id);
    const user = await Database.from('users').where('id', params.id).firstOrFail();

    return response.json({user})
  }

  public async edit({}: HttpContextContract) {}

  public async update({request, response, params }: HttpContextContract) {
    const data = request.only(['name', 'email'])

    //const user = await User.findOrFail(params.id)
    //user.name = request.input('name');
    //user.email = request.input('email');
    //await user.save()

    const user = await Database.from('users').where('id', params.id).update(data);

    return response.json({user})

    
  }

  public async destroy({ response, params }: HttpContextContract) {
   //const user = await User.findOrFail(params.id);
   //await user.delete();

   const user = await Database.from('users').where('id', params.id).delete()
   return response.json({user})
  }
}
