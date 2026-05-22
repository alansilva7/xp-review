export function Header() {
  return (
    <header className="w-full border-b border-zinc-800 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Game Review 🎮</h1>

        <button className="bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 rounded-lg text-white font-medium">
          Adicionar jogo
        </button>
      </div>
    </header>
  );
}
