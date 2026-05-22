import { prisma } from "../../libs/prisma";
import { AppError } from "../../utils/AppError";

export class SearchGameIdService {
  async execute(id: number) {
    const gameAlreadyExists = await prisma.game.findUnique({
      where: {
        id,
      },
    });

    if (!gameAlreadyExists) {
      throw new AppError("Jogo não encontrado", 404);
    }

    const gameID = await prisma.game.findUnique({
      where: {
        id,
      },
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

    return gameID;
  }
}
