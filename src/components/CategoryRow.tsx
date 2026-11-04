import type { CategoryScore } from '../result.ts'

/* Full class names so Tailwind can find them. Keyed by Category name. */
const categoryClassNames: Record<string, string> = {
  Reaction: 'bg-red-50 text-red-400',
  Memory: 'bg-yellow-50 text-yellow-400',
  Verbal: 'bg-green-50 text-green-500',
  Visual: 'bg-blue-50 text-blue-800',
}

interface CategoryRowProps {
  item: CategoryScore
}

export function CategoryRow({ item }: CategoryRowProps) {
  const colours = categoryClassNames[item.category] ?? 'bg-navy-50 text-navy-950'

  return (
    <li className={`flex min-h-14 items-center justify-between gap-4 rounded-xl p-4 ${colours}`}>
      <span className="flex items-center gap-4">
        <img
          src={`${import.meta.env.BASE_URL}${item.icon}`}
          alt=""
          width={20}
          height={20}
          className="size-5 shrink-0"
        />
        <span className="text-preset-6-medium md:text-preset-5-medium">{item.category}</span>
      </span>
      <span className="flex shrink-0 gap-2 text-preset-6-bold text-navy-950 md:text-preset-5-bold">
        <span>{item.score}</span>
        <span className="opacity-50">/ 100</span>
      </span>
    </li>
  )
}
