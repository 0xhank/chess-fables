import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LearnPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Learn Chess</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Basic Rules</CardTitle>
            <CardDescription>Learn how to play chess</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Chess is played on a square board with 64 squares arranged in an 8×8 grid. Each player begins with 16
              pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Piece Movement</CardTitle>
            <CardDescription>How each piece moves</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>King:</strong> One square in any direction
              </li>
              <li>
                <strong>Queen:</strong> Any number of squares diagonally, horizontally, or vertically
              </li>
              <li>
                <strong>Rook:</strong> Any number of squares horizontally or vertically
              </li>
              <li>
                <strong>Bishop:</strong> Any number of squares diagonally
              </li>
              <li>
                <strong>Knight:</strong> In an &apos;L&apos; shape (2 squares in one direction, then 1 square perpendicular)
              </li>
              <li>
                <strong>Pawn:</strong> One square forward (or two from starting position), captures diagonally
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Special Moves</CardTitle>
            <CardDescription>Unique chess moves</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Castling:</strong> King moves two squares toward a rook, and the rook moves to the square the
                king crossed
              </li>
              <li>
                <strong>En Passant:</strong> Pawn captures an opponent&apos;s pawn that has just moved two squares
              </li>
              <li>
                <strong>Promotion:</strong> Pawn reaches the opposite end of the board and is replaced with a queen,
                rook, bishop, or knight
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Basic Strategies</CardTitle>
            <CardDescription>Fundamental chess concepts</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Control the center:</strong> The four central squares are crucial
              </li>
              <li>
                <strong>Develop pieces:</strong> Move knights and bishops early
              </li>
              <li>
                <strong>Castle early:</strong> Protect your king
              </li>
              <li>
                <strong>Connect your rooks:</strong> Create a strong defensive line
              </li>
              <li>
                <strong>Think ahead:</strong> Plan your moves and anticipate your opponent&apos;s
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Openings</CardTitle>
            <CardDescription>Popular first moves</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>King&apos;s Pawn Opening:</strong> e4
              </li>
              <li>
                <strong>Queen&apos;s Pawn Opening:</strong> d4
              </li>
              <li>
                <strong>Ruy Lopez:</strong> 1.e4 e5 2.Nf3 Nc6 3.Bb5
              </li>
              <li>
                <strong>Sicilian Defense:</strong> 1.e4 c5
              </li>
              <li>
                <strong>French Defense:</strong> 1.e4 e6
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Checkmate Patterns</CardTitle>
            <CardDescription>Common winning positions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Back Rank Mate:</strong> Attacking the back rank when the king is trapped by its own pieces
              </li>
              <li>
                <strong>Scholar&apos;s Mate:</strong> Quick checkmate targeting f7/f2 (1.e4 e5 2.Qh5 Nc6 3.Bc4 Nf6?? 4.Qxf7#)
              </li>
              <li>
                <strong>Smothered Mate:</strong> Knight checkmate when the king is surrounded by its own pieces
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

