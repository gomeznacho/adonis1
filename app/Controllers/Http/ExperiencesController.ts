import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Experience from 'App/Models/experience';

export default class ExperiencesController {
  public async index({response}: HttpContextContract) {
    const experiences = await Experience.query();

    return response.json({experiences})
  }

  public async create({}: HttpContextContract) {}

  public async store({response}: HttpContextContract) {
    //const skillId = request.input('skillId')
   // const candidateId = request.input('candidateId')

  const experience = await Database.insertQuery<Experience>().table('experiences').insert({/* skillId candidateId*/})

    return response.json({experience})
  }

  public async show({response, params }: HttpContextContract) {
    const experience = await Database.from('experiences').where('id', params.id).firstOrFail();

    return response.json({experience})
  }

  public async edit({}: HttpContextContract) {}

  public async update({request, response, params }: HttpContextContract) {
    const data = request.only(['name', 'skill'])
    const experience = Database.from('experiences').where('id', params.id).update(data);

    return response.json({experience})
  }

  public async destroy({response, params}: HttpContextContract) {
    const experience = await Database.from('experiences').where('id', params.id).delete();
    return response.json({experience})
  }
}
