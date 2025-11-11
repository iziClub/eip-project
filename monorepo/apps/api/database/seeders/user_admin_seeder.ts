import { BaseSeeder } from '@adonisjs/lucid/seeders'

import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    await User.create({
      firstName: 'admin',
      lastName: 'admin',
      email: 'admin@admin.com',
      password: 'jojo',
      role: 'ADMIN',
    })

    await User.create({
      firstName: 'jojo',
      lastName: 'jojo',
      email: 'jojo@jojo.com',
      password: 'jojo',
      role: 'ADMIN',
    })

    await User.create({
      firstName: 'member',
      lastName: 'member',
      email: 'member@member.com',
      password: 'member',
      role: 'USER',
    })
  }
}