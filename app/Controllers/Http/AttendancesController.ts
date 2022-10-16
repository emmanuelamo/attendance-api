import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Attendance from 'App/Models/Attendance'
import BaseController from './BaseController'

export default class AttendancesController extends BaseController {
  public async index({ }: HttpContextContract) {
    return await Attendance.all()
  }

  public async store({ request,response }: HttpContextContract) {
    const attendanceSchema = schema.create({
      studentId:schema.string(),
      firstName: schema.string(),
      lastName: schema.string(),
      telephone: schema.string({},[
        rules.unique({ table: 'attendances', column: 'telephone' }),
        rules.maxLength(10)
      ])
    })

       const validatedData = await request.validate({
            schema: attendanceSchema,
         messages: {
                'required':'the {{ field}} is required to create attendance ',
                'telephone.maxLength': 'Phoone number must not exceed 10 digits',
                'telephone.unique':'Phoone number already '
            }
       })
    
    try {

            const student = await Attendance.create(validatedData)

            return this.sendResponse(response,'attendance saved successfully',student) 
            
        } catch (error) {
            
            return this.sendError(response, 'attendance was not successfully saved',[]) 
        }
        
  }


  public async show({params ,response}: HttpContextContract) {
    const student = await Attendance.query().where('id', params.id).first()

      if (student) {

            return this.sendResponse(response,'Attendance found successfully',student)
            
        } else {

            return this.sendError(response,'Attendance not found',[]) 
        }
  }


  public async update({params,request }: HttpContextContract) {
    const data = request.body()
    const student = await Attendance.findOrFail(params.id)
    student.studentId = data.studentid
    student.firstName = data.firstName
    student.lastName = data.lastName
    student.telephone = data.telephone

    return student.save()
  }


  public async destroy({params,response }: HttpContextContract) {
const student = await Attendance.query().where('id', params.id).first()    
     if (student) {
                
                const student = await Attendance.query().where('id', params.id).delete()

                return this.sendResponse(response,'Attendance Deleted Successfully',student) 

            } else {
                
                return this.sendError(response,'Attendance ID not found, Attendance Failed to Delete',[])
            }
    
  }
}
