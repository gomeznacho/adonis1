import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, } from '@ioc:Adonis/Lucid/Orm'
import Skill from './skill'
import Candidate from './Candidate'

export default class Experience extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public level: number

  @column()
  public candidateId: number

  @column()
  public skillId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo (() => Skill)
  public skill: BelongsTo<typeof Skill>
  
  @belongsTo(() => Candidate)
  public candidate: BelongsTo<typeof Candidate>
}
