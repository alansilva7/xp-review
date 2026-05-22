import { Router } from "express";
import { GameController } from "../controllers/gamer.controller";

const routes = Router();

const gameController = new GameController();

routes.post("/game", gameController.createGame);
routes.get("/games", gameController.findAllGames);
routes.get("/game/:id", gameController.findIdGame);
routes.put("/game/:id", gameController.updateGame);
routes.delete("/game/:id", gameController.deletedGame);

export default routes;
