import { useEffect, useState } from "react";

import { GameCard } from "../../components/GameCard";

import { api } from "../../services/api";
import { Header } from "../../components/Header";

type Game = {
  id: number;
  title: string;
  genre: string;
  platform: string;
  score?: number;
  status: string;
  coverUrl?: string;
};

export function Home() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    api.get("/games").then((res) => {
      setGames(res.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              genre={game.genre}
              platform={game.platform}
              score={game.score}
              status={game.status}
              coverUrl={game.coverUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
