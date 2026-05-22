type Props = {
  title: string;
  genre: string;
  platform: string;
  score?: number;
  status: string;
  coverUrl?: string;
};

export function GameCard({
  title,
  genre,
  platform,
  score,
  status,
  coverUrl,
}: Props) {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-indigo-500 transition hover:scale-[1.02] shadow-lg">
      <img
        src={coverUrl || "https://placehold.co/600x400?text=Game"}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-white text-xl font-bold">{title}</h2>

            <p className="text-zinc-400 mt-1">{genre}</p>

            <p className="text-zinc-500 text-sm">{platform}</p>
          </div>

          <div className="bg-indigo-600 min-w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {score ?? "-"}
          </div>
        </div>

        <div className="mt-5">
          <span className="bg-zinc-800 text-indigo-400 px-3 py-1 rounded-full text-sm font-medium">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}
