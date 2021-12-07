
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Candidate from 'App/Models/Candidate'

export default class CandidatesController {
  public async index({request, response}: HttpContextContract) {
    //const city = ''

    const candidates = await Candidate.query()
    //const candidates = await Candidate.query()
    return response.json({candidates})
  }

  public async create({}: HttpContextContract) {}

  public async store({request, response}: HttpContextContract) {
    const name = request.input('name');
    const email = request.input('email');
    const phoneNumber = request.input('phoneNumber');
    const birthDate = request.input('birthDate');
    const currentSalary = request.input('currentSalary');
    const expectSalary = request.input('expectSalary');
    const city = request.input('city');
    const remote = request.input('remote');
    const mobility = request.input('mobility');
    const active = request.input('active');
    const user_id = request.input('user_id');

    const candidate = await Database.insertQuery<Candidate>().table('candidates')
                        .insert({name, email, phoneNumber, birthDate, currentSalary,
                        expectSalary, city, remote, mobility, active, user_id});
    return response.json({candidate})                    
  }

  public async show({response, params }: HttpContextContract) {
    const candidate = await Database.from('candidates').where('id', params.id).firstOrFail()

    return response.json({candidate})
  }

  public async edit({}: HttpContextContract) {}

  public async update({request, response, params }: HttpContextContract) {
    const data =request.only(['name', 'email', 'phoneNumber', 'currentSalary',
                              'city', 'remote', 'mobility', 'active']);
    const candidate = Database.from('candidates').where('id', params.id).update(data);

    return response.json({candidate})
    }

  public async destroy({response, params }: HttpContextContract) {
    const candidate = await Database.from('candidates').where('id', params.id).delete();
    return response.json({candidate})
   
  }
}
