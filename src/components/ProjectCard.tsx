import clsx from 'clsx'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { FiGitPullRequest, FiLink, FiEye, FiX } from 'react-icons/fi'
import { Transition, Dialog } from '@headlessui/react'
import { useState, Fragment } from 'react'

interface Project {
  name: string
  description: string
  icon: string
  tags: string[]
  website?: string
  repository?: string
  category?: string
  type?: 'featured' | 'primary' | 'secondary'
}

interface ProjectCardProps {
  project: Project
  showIcon: boolean
}

export function ProjectCard({ project, showIcon }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Card as="li" className="flex flex-col justify-between">
        <div>
          {showIcon && (
            <div className="relative z-10 flex h-12 w-12 items-center justify-center">
              <Image
                src={require('@/images/projects/' + project.icon)}
                className="h-12 w-12 rounded-xl"
                unoptimized
                alt={project.name + ' icon'}
              />
            </div>
          )}
          <h2 className="mt-4 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
            <span className="relative z-10">{project.name}</span>
          </h2>
          <div className="mt-2 flex flex-row space-x-2">
            {project.tags.map((tag) => (
              <span
                key={tag ?? ''}
                className={clsx(
                  'z-10 inline-flex items-center rounded-md px-1.5 py-0.5 font-mono text-xs font-medium ring-1 ring-inset',
                  techToColor(tag)
                )}
              >
                {tag}
              </span>
            ))}
          </div>
          <Card.Description>{project.description}</Card.Description>
        </div>
        <div className="flex flex-row gap-4">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-6 flex cursor-pointer gap-1.5 text-sm font-medium text-zinc-400 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-400"
            >
              <FiLink className="m-auto block h-4 w-4" />
              <span>Website</span>
            </a>
          )}
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-6 flex cursor-pointer gap-1.5 text-sm font-medium text-zinc-400 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-400"
            >
              <FiGitPullRequest className="m-auto block h-4 w-4" />
              <span>Code</span>
            </a>
          )}
          {project.repository && (
            <a
              onClick={() => setIsOpen(true)}
              className="relative z-10 mt-6 flex cursor-pointer gap-1.5 text-sm font-medium text-zinc-400 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-400"
            >
              <FiEye className="m-auto block h-4 w-4" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </Card>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <FiX className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {project.name}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="font-serif text-sm text-gray-500">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

function techToColor(tech) {
  switch (tech.toLowerCase()) {
    case 'go':
    case 'react':
    case 'react native':
      return 'bg-cyan-50 text-cyan-800 ring-cyan-600/20 dark:bg-cyan-400/10 dark:text-cyan-400 dark:ring-cyan-400/20'
    case 'typescript':
    case 'ionic':
      return 'bg-blue-50 text-blue-800 ring-blue-600/20 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/20'
    case 'javascript':
    case 'python':
      return 'bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/20'
    case 'mongodb':
      return 'bg-green-50 text-green-800 ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/20'
    case 'angular':
    case 'java':
      return 'bg-red-50 text-red-800 ring-red-600/20 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20'
    case 'rust':
      return 'bg-orange-50 text-orange-800 ring-orange-600/20 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/20'
    case 'php':
    case 'ngrx':
      return 'bg-purple-50 text-purple-800 ring-purple-600/20 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/20'
    case 'sass':
      return 'bg-pink-50 text-pink-800 ring-pink-600/20 dark:bg-pink-400/10 dark:text-pink-400 dark:ring-pink-400/20'
    case 'c':
    case 'c++':
      return 'bg-indigo-50 text-indigo-800 ring-indigo-600/20 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/20'
    default:
      return 'bg-gray-50 text-gray-800 ring-gray-600/20 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20'
  }
}
