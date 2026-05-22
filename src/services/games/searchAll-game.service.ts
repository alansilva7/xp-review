import { prisma } from "../../libs/prisma";
export class ListGamesService {
  async execute() {
    const games = await prisma.game.findMany({
      select: {
        id: true,
        title: true,
        genre: true,
        platform: true,
        score: true,
        status: true,
        coverUrl: true,
        createdAt: true,
      },
    });

    return games;
  }
}
