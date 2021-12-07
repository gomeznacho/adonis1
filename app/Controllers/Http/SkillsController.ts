import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Skill from 'App/Models/Skill';

export default class SkillsController {
  public async index({response}: HttpContextContract) {
    const skills = await Skill.query();

    return response.json({skills})
  }

  public async create({}: HttpContextContract) {}

  public async store({request, response}: HttpContextContract) {
    const name = request.input('name')
    //const experience = request.input('experience')

    const skill = await Database.insertQuery<Skill>().table('skills').insert({name/*, experience*/})

    return response.json({skill})
  }

  public async show({response, params }: HttpContextContract) {
    const skill = await Database.from('skills').where('id', params.id).firstOrFail();

    return response.json({skill})
  }

  public async edit({}: HttpContextContract) {}

  public async update({request, response, params }: HttpContextContract) {
    const data = request.only(['name', 'experience'])
    const skill = Database.from('skills').where('id', params.id).update(data);

    return response.json({skill})
  }

  public async destroy({response, params}: HttpContextContract) {
    const skill = await Database.from('skill').where('id', params.id).delete();
    return response.json({skill})
  }
}
