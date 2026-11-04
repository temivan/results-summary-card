import type { Result } from '../result.ts'
import { CategoryRow } from './CategoryRow.tsx'

interface SummaryPanelProps {
  result: Result
}

export function SummaryPanel({ result }: SummaryPanelProps) {
  return (
    <section className="flex flex-col justify-center gap-6 px-7.5 pt-6 pb-7.5 md:gap-8 md:p-10">
      <h2 className="text-preset-5-bold md:text-preset-4">Summary</h2>
      <ul className="flex flex-col gap-4">
        {result.map((item) => (
          <CategoryRow key={item.category} item={item} />
        ))}
      </ul>
      <button
        type="button"
        className="min-h-14 cursor-pointer rounded-full bg-navy-950 px-6 py-4 text-preset-5-bold text-white hover:bg-gradient-2 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-800"
      >
        Continue
      </button>
    </section>
  )
}
