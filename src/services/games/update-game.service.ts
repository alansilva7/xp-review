import { GameStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../libs/prisma";
import { AppError } from "../../utils/AppError";

interface UpdateGameDTO {
  title?: string;
  genre?: string;
  platform?: string;
  score?: number;
  status?: GameStatus;
  review?: string;
  coverUrl?: string;
  completedAt?: Date;
}

export class UpdateGameService {
  async execute(id: number, data: UpdateGameDTO) {
    const gameAlreadyExists = await prisma.game.findUnique({
      where: {
        id,
      },
    });

    if (!gameAlreadyExists) {
      throw new AppError("Jogo não encontrado", 404);
    }
    const updateGameId = await prisma.game.update({
      where: {
        id,
      },
      data,
    });
    return updateGameId;
  }
}
