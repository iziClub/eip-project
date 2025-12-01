import { BaseSeeder } from '@adonisjs/lucid/seeders'

import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    const users = [
      {
        firstName: 'admin',
        lastName: 'admin',
        email: 'admin@admin.com',
        password: 'jojo',
        role: 'ADMIN' as const,
        isSuperAdmin: false,
        clubId: null,
      },
      {
        firstName: 'jojo',
        lastName: 'jojo',
        email: 'jojo@jojo.com',
        password: 'jojo',
        role: 'ADMIN' as const,
        isSuperAdmin: false,
        clubId: null,
      },
      {
        firstName: 'member',
        lastName: 'member',
        email: 'member@member.com',
        password: 'member',
        role: 'USER' as const,
        isSuperAdmin: false,
        clubId: null,
      },
    ]

    for (const user of users) {
      await User.updateOrCreate({ email: user.email }, user)
    }
  }
}
