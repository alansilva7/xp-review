import { prisma } from "../../libs/prisma";
import { AppError } from "../../utils/AppError";

export class DeleteGameService {
  async execute(id: number) {
    const gameAlreadyExists = await prisma.game.findUnique({
      where: {
        id,
      },
    });

    if (!gameAlreadyExists) {
      throw new AppError("Jogo não encontrado", 404);
    }

    const deletedGame = await prisma.game.delete({
      where: {
        id,
      },
    });
    return deletedGame;
  }
}
