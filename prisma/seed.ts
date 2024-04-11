import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '703a6c51-5fe7-495d-9c72-35da4de4d459',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento para devs apaixonados por código!',
      maximumAttendees: 120,
    }
  })
}
seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})
