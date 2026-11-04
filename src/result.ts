import data from './data.json'

/** One row of the Result data: a Category and its Score out of 100. */
export interface CategoryScore {
  category: string
  score: number
  /** Path relative to the app's base URL, e.g. "./assets/images/icon-reaction.svg". */
  icon: string
}

export type Result = CategoryScore[]

export type Grade = 'Excellent' | 'Great' | 'Good' | 'Keep practising'

export interface ResultSummary {
  /** Mean of the category scores, rounded to the nearest whole number. */
  totalScore: number
  grade: Grade
}

export const result: Result = data

function gradeFor(totalScore: number): Grade {
  if (totalScore >= 90) return 'Excellent'
  if (totalScore >= 75) return 'Great'
  if (totalScore >= 50) return 'Good'
  return 'Keep practising'
}

/** Derives the Total score and Grade from the Result data. */
export function summarise(result: Result): ResultSummary {
  const sum = result.reduce((total, { score }) => total + score, 0)
  const totalScore = result.length === 0 ? 0 : Math.round(sum / result.length)
  return { totalScore, grade: gradeFor(totalScore) }
}
