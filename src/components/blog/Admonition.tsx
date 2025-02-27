import { FiInfo, FiAlertTriangle, FiAlertCircle } from 'react-icons/fi'
import { HiLightBulb } from 'react-icons/hi'
import { AiOutlineFire } from 'react-icons/ai'
import clsx from 'clsx'
import {
  FaExclamation,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaFire,
  FaInfo,
  FaInfoCircle,
  FaLightbulb,
} from 'react-icons/fa'

const styles = {
  note: {
    container:
      'border-zinc-500/20 bg-zinc-50/50 text-zinc-900 dark:border-zinc-500/30 dark:bg-zinc-500/5 dark:text-zinc-200 dark:[--tw-prose-links-hover:theme(colors.zinc.300)] dark:[--tw-prose-links:theme(colors.white)]',
    icon: 'text-zinc-500 dark:text-zinc-400',
    text: 'Note',
  },
  tip: {
    container:
      'border-emerald-500/20 bg-emerald-50/50 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200 dark:[--tw-prose-links-hover:theme(colors.emerald.300)] dark:[--tw-prose-links:theme(colors.white)]',
    icon: 'text-emerald-500 dark:text-emerald-400',
    text: 'Tip',
  },
  info: {
    container:
      'border-blue-500/20 bg-blue-50/50 text-blue-900 dark:border-blue-500/30 dark:bg-blue-500/5 dark:text-blue-200 dark:[--tw-prose-links-hover:theme(colors.blue.300)] dark:[--tw-prose-links:theme(colors.white)]',
    icon: 'text-blue-500 dark:text-blue-400',
    text: 'Info',
  },
  caution: {
    container:
      'border-amber-500/20 bg-amber-50/50 text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/5 dark:text-amber-200 dark:[--tw-prose-links-hover:theme(colors.amber.300)] dark:[--tw-prose-links:theme(colors.white)]',
    icon: 'text-amber-500 dark:text-amber-400',
    text: 'Caution',
  },
  danger: {
    container:
      'border-red-500/20 bg-red-50/50 text-red-900 dark:border-red-500/30 dark:bg-red-500/5 dark:text-red-200 dark:[--tw-prose-links-hover:theme(colors.red.300)] dark:[--tw-prose-links:theme(colors.white)]',
    icon: 'text-red-500 dark:text-red-400',
    text: 'Danger',
  },
}

const icons = {
  note: (props) => <FaInfoCircle {...props} />,
  caution: (props) => <FaExclamationTriangle {...props} />,
  danger: (props) => <FaFire {...props} />,
  tip: (props) => <FaLightbulb {...props} />,
  info: (props) => <FaExclamationCircle {...props} />,
}

export function Admonition({ type = 'note', children }) {
  let Icon = icons[type]

  return (
    <div
      className={`
          'my-6 leading-6', flex gap-2.5 rounded-2xl border p-4
          ${styles[type].container}
        `}
    >
      <Icon className={clsx('mt-1 h-5 w-5 flex-none', styles[type].icon)} />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}
