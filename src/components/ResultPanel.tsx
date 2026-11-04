import type { ResultSummary } from '../result.ts'

interface ResultPanelProps {
  summary: ResultSummary
}

export function ResultPanel({ summary }: ResultPanelProps) {
  return (
    <section className="flex items-center justify-center rounded-b-card bg-gradient-2 px-6 py-400 shadow-card md:rounded-card md:px-[4.3125rem] md:shadow-none lg:px-[3.375rem]">
      <div className="flex w-full max-w-65 flex-col items-center gap-6 text-center md:gap-400">
        <h2 className="text-preset-5-bold text-navy-200 md:text-preset-4">Your Result</h2>
        <p className="flex size-35 flex-col items-center justify-center rounded-full bg-gradient-1 md:size-50">
          <span className="text-preset-2 text-white md:text-preset-1">{summary.totalScore}</span>
          <span className="text-preset-6-bold text-navy-200/52 md:text-preset-5-bold">of 100</span>
        </p>
        <div className="flex flex-col gap-2 md:gap-200">
          <p className="text-preset-4 text-white md:text-preset-3">{summary.grade}</p>
          <p className="text-preset-6-medium text-navy-200 md:text-preset-5-medium">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
    </section>
  )
}
