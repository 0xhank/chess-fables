import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChessBoard } from "@/components/chess-board"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Chess Arena</h1>
          <nav className="ml-auto flex gap-4">
            <Link href="/play">
              <Button>Play Now</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline">About</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container grid items-center gap-6 py-8 md:py-12 lg:py-16">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Play Chess Online with Friends
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Challenge your friends or random opponents to a game of chess. Play in real-time with our smooth,
              responsive chess interface.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/play">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Playing
                </Button>
              </Link>
              <Link href="/learn">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn Chess
                </Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-[600px]">
            <ChessBoard />
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Chess Arena. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
