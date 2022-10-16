import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Attendance from 'App/Models/Attendance'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Attendance.createMany([
      {
        studentId:'ps/itc/18/0569',
        firstName: 'Emma',
        lastName: 'Doe',
        telephone: '055341083'
      },
      {
        studentId:'ps/itc/18/0029',
        firstName: 'Yaw',
        lastName: 'cret',
        telephone: '055341045'
      },
      {
        studentId:'ps/itc/18/0099',
        firstName: 'simon',
        lastName: 'willson',
        telephone: '0553411123'
      },
      {
        studentId:'ps/itc/18/0049',
        firstName: 'Mary',
        lastName: 'Amoah',
        telephone: '0553867543'
      },
      {
        studentId:'ps/itc/18/0002',
        firstName: 'Sammy',
        lastName: 'Bin',
        telephone: '0553321324'
      },

    ])
  }
}
