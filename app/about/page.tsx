export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">About Chess Arena</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Chess Arena is an online platform that allows chess enthusiasts to play against each other in real-time. Our
          mission is to create a seamless and enjoyable chess experience for players of all skill levels.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Real-time multiplayer chess games</li>
          <li>Simple game creation and joining process</li>
          <li>Responsive chess board that works on all devices</li>
          <li>Game state synchronization between players</li>
          <li>Visual indicators for game status and turns</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How to Play</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Create a new game or join an existing one using a game code</li>
          <li>Share the game code with your opponent</li>
          <li>Make moves by dragging and dropping pieces on the board</li>
          <li>The game automatically enforces chess rules and detects game-ending conditions</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Technology</h2>
        <p>Chess Arena is built using modern web technologies including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Next.js for the frontend framework</li>
          <li>React for UI components</li>
          <li>Supabase for real-time data synchronization</li>
          <li>chess.js for chess move validation and game state management</li>
          <li>react-chessboard for the interactive chess board UI</li>
        </ul>
      </div>
    </div>
  )
}

