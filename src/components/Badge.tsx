export function Badge({ text }: { text: string }) {
  return (
    <span className="z-10 inline-flex items-center rounded-md bg-gray-50 px-1.5 py-0.5 font-mono text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-600/20 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20">
      {text}
    </span>
  )
}
