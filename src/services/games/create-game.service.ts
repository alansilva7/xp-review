import { GameStatus } from "../../../generated/prisma/enums";
import { GameRepository } from "../../repositories/game.repository";
import { AppError } from "../../utils/AppError";

interface CreateGameDTO {
  title: string;
  genre: string;
  platform: string;
  score?: number;
  status: GameStatus;
  review?: string;
  coverUrl: string;
  completedAt?: Date;
}

export class GameService {
  async create(data: CreateGameDTO) {
    const gameRepository = new GameRepository();

    // verificar duplicidade
    const gameAlreadyExists = await gameRepository.findByTitle(data.title);

    if (gameAlreadyExists) {
      throw new AppError("Jogo já cadastrado", 409);
    }

    // validas nota
    if (data.score && (data.score < 0 || data.score > 10)) {
      throw new AppError("Nota inválida", 409);
    }

    //  adicionando a data do jogo automaticamente
    // criar jogo
    const game = await gameRepository.create(data);

    return game;
  }
}
