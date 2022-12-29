import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {

  await prisma.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      userId: '123',
      type: 'Text',
      isRepost: false,
      tags: ['#test'],
      titlePost: 'bla',
      previewPost: 'bla bla',
      textPost: 'bla bla bla',
      comments: {
        create: [
          {
            text: 'bla bla bla',
            userId: '111'
          },
          {
            text: 'bla bla bla1',
            userId: '111'
          },
          {
            text: 'bla bla bla2',
            userId: '111'
          },
          {
            text: 'bla bla bla3',
            userId: '111'
          },
        ]
      },
    }
  });

  console.info('🤘️ Database was filled')
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })
