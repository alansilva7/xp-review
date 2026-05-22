import type { Request, Response } from "express";
import { GameService } from "../services/games/create-game.service";
import { ListGamesService } from "../services/games/searchAll-game.service";
import { SearchGameIdService } from "../services/games/searchID-game.service";
import { UpdateGameService } from "../services/games/update-game.service";
import { DeleteGameService } from "../services/games/delete-game.service";

export class GameController {
  // salvando os jogos
  async createGame(req: Request, res: Response) {
    const gameService = new GameService();

    const game = await gameService.create(req.body);

    return res.status(201).json(game);
  }
  // buscar lista completa de jogos
  async findAllGames(req: Request, res: Response) {
    const service = new ListGamesService();

    const searchAllGames = await service.execute();

    return res.json(searchAllGames);
  }

  // buscar o jogo por ID
  async findIdGame(req: Request, res: Response) {
    const service = new SearchGameIdService();

    const searchIdGame = await service.execute(Number(req.params.id));

    return res.json(searchIdGame);
  }

  // atualizando jogo
  async updateGame(req: Request, res: Response) {
    const service = new UpdateGameService();

    const updateGame = await service.execute(Number(req.params.id), req.body);

    return res.json(updateGame);
  }

  // deletando jogo
  async deletedGame(req: Request, res: Response) {
    const service = new DeleteGameService();

    await service.execute(Number(req.params.id));

    return res.status(204).send();
  }
}
