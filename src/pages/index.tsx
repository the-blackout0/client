import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import PageWrapper from '@/components/Wrappers/PageWrapper'

const Home: FC = () => {
	return (
		<PageWrapper>
			<ThemeSwitcher className="absolute bottom-6 right-6" />
			<div className="flex flex-col ">
				<div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
					<div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
						<h1 className="text-6xl font-bold dark:text-white">{APP_NAME}</h1>
					</div>

					<div className="mt-8 overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-lg">
						<div className="grid grid-cols-1 md:grid-cols-2">
							<div className="p-6">
								<div className="flex items-center">
									<BookOpenIcon className="w-8 h-8 text-gray-500" />
									<div className="ml-4 text-lg font-semibold leading-7">
										<a
											href="https://nextjs.org/docs"
											className="text-gray-900 underline dark:text-white"
										>
											Next.js Docs
										</a>
									</div>
								</div>

								<div className="ml-12">
									<div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
										Next.js gives you the best developer experience with all the features you need
										for production: hybrid static &amp; server rendering, TypeScript support, smart
										bundling, route pre-fetching, and more. No config needed.
									</div>
								</div>
							</div>

							<div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
								<div className="flex items-center">
									<BookOpenIcon className="w-8 h-8 text-gray-500" />
									<div className="ml-4 text-lg font-semibold leading-7">
										<a href="https://wagmi.sh" className="text-gray-900 underline dark:text-white">
											wagmi Docs
										</a>
									</div>
								</div>

								<div className="ml-12">
									<div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
										wagmi is a collection of React Hooks containing everything you need to start
										working with Ethereum. wagmi makes it easy to display ENS and balance
										information, sign messages, interact with contracts, and much more — all with
										caching, request deduplication, and persistence.
									</div>
								</div>
							</div>

							<div className="p-6 border-t border-gray-200 dark:border-gray-700">
								<div className="flex items-center">
									<BookOpenIcon className="w-8 h-8 text-gray-500" />
									<div className="ml-4 text-lg font-semibold leading-7">
										<a
											href="https://laravel-news.com/"
											className="text-gray-900 underline dark:text-white"
										>
											Tailwind Docs
										</a>
									</div>
								</div>

								<div className="ml-12">
									<div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
										Tailwind CSS is a highly customizable, low-level CSS framework that gives you
										all of the building blocks you need to build bespoke designs without any
										annoying opinionated styles you have to fight to override.
									</div>
								</div>
							</div>
						</div>

						<div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
							<div className="flex items-center">
								<CodeIcon className="w-8 h-8 text-gray-500" />
								<div className="ml-4 text-lg font-semibold leading-7 text-gray-900 dark:text-white">
									About this Template
								</div>
							</div>

							<div className="ml-12">
								<div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
									This starter kit is composed of{' '}
									<a href="https://nextjs.org" className="underline" target="_blank" rel="noreferrer">
										Next.js
									</a>{' '}
									and{' '}
									<a
										href="https://tailwindcss.com"
										className="underline"
										target="_blank"
										rel="noreferrer"
									>
										Tailwind CSS
									</a>
									, with{' '}
									<a
										href="https://docs.family.co/connectkit"
										className="underline"
										target="_blank"
										rel="noreferrer"
									>
										ConnectKit
									</a>
									,{' '}
									<a href="https://ethers.org" className="underline" target="_blank" rel="noreferrer">
										ethers
									</a>{' '}
									&amp;{' '}
									<a href="https://wagmi.sh" className="underline" target="_blank" rel="noreferrer">
										wagmi
									</a>{' '}
									for all your web3 needs. It uses{' '}
									<a
										href="https://www.typescriptlang.org/"
										className="underline"
										target="_blank"
										rel="noreferrer"
									>
										Typescript
									</a>{' '}
									and an opinionated directory structure for maximum dev confy-ness. Enjoy!
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-center mt-4 sm:items-center sm:justify-between">
					<div className="text-sm text-center text-gray-500 sm:text-left">
						<div className="flex items-center">
							<ShareIcon className="w-5 h-5 -mt-px text-gray-400" />

							<a href="https://twitter.com/m1guelpf" className="ml-1 underline">
								Share
							</a>
						</div>
					</div>
				</div>
			</div>
		</PageWrapper>
	)
}

export default Home
