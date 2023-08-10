import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
  const kyle = await prisma.user.create({ data: { name: "kyle" } });
  const Sally = await prisma.user.create({ data: { name: "Sally" } });

  const post1 = await prisma.post.create({
    data: {
      body: " Counter Strike 2 to revamp rating system",
      title: "Post 1",
    },
  });

  const post2 = await prisma.post.create({
    data: {
      body: " You Will Never Walk Alone",
      title: "Post 2",
    },
  });

  const comment1 = await prisma.comment.create({
    data: {
      message: "I am root comment",
      userId: kyle.id,
      postId: post1.id,
    },
  });

  const comment2 = await prisma.comment.create({
    data: {
      ParentID: comment1.id,
      message: "I am nested comment",
      userId: Sally.id,
      postId: post1.id,
    },
  });

  const comment3 = await prisma.comment.create({
    data: {
      message: "I am another root comment",
      userId: Sally.id,
      postId: post1.id,
    },
  });
  const comment4 = await prisma.comment.create({
    data: {
      message: "fjdksa;jfkdsl;ajfksa; jksja fkld;sj fksad; j",
      userId: Sally.id,
      postId: post1.id,
    },
  });
}

seed();
