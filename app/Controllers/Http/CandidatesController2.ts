
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Candidate from 'App/Models/Candidate'

export default class CandidatesController2 {

    public async show({response, params }: HttpContextContract) {
        const candidate = await Database.from('candidates').where('city', params.city)
    
        return response.json({candidate})
      }
}