import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, scope } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Experience from './Experience'

export default class Candidate extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public phoneNumber: string

  @column()
  public birthDate: DateTime

  @column()
  public currentSalary: number

  @column()
  public expectSalary: number

  @column()
  public city: string

  @column()
  public remote: boolean

  @column()
  public mobility: boolean

  @column()
  public active: boolean

  @column()
  public userId: number

  @belongsTo (() => User
    //{localKey: 'userId'}
   )
   public user: BelongsTo<typeof User>
 
   @hasMany(() => Experience)
   public experiences: HasMany<typeof Experience>
 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static byCity = scope((query, city: string/*, mobility: boolean, active: boolean*/) =>{
    query.where('city', city)
  })
 // public static hasExperiences = scope<typeof Candidate>(query =>{
   // query.whereHas('experiences', expQuery => expQuery.apply(scopes=> scopes.skillId()))
  //})
 
}
