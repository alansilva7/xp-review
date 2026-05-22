import { prisma } from "../libs/prisma";

export class GameRepository {
  async findByTitle(title: string) {
    return prisma.game.findFirst({
      where: {
        title: {
          // equals e mode faz a busca ignorar maiúscula e minúscula
          equals: title,
          mode: "insensitive",
        },
      },
    });
  }

  async create(data: any) {
    return prisma.game.create({
      data,
    });
  }
}
