import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Candidate from './Candidate'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fullName: string

  @column()
  public email: string

  @column()
  public password: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Candidate)
  public assignedCandidate: HasMany<typeof Candidate>

}
