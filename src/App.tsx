import { ResultsCard } from './components/ResultsCard.tsx'
import { result } from './result.ts'

export default function App() {
  return (
    <main className="md:grid md:min-h-dvh md:place-items-center md:px-10">
      <ResultsCard result={result} />
    </main>
  )
}
