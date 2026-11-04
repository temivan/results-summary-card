import { summarise, type Result } from '../result.ts'
import { ResultPanel } from './ResultPanel.tsx'
import { SummaryPanel } from './SummaryPanel.tsx'

interface ResultsCardProps {
  result: Result
}

export function ResultsCard({ result }: ResultsCardProps) {
  return (
    <article className="w-full bg-white md:grid md:min-h-128 md:max-w-184 md:grid-cols-2 md:rounded-card md:shadow-card">
      <h1 className="sr-only">Results summary</h1>
      <ResultPanel summary={summarise(result)} />
      <SummaryPanel result={result} />
    </article>
  )
}
