import { useTheme } from 'next-themes'
import { APP_NAME } from '@/lib/consts'
import { createClient, WagmiConfig, configureChains, useConnect } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { canto } from '@wagmi/chains'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const cantoTestnet = {
	/** ID in number form */
	id: 7701,
	/** Human-readable name */
	name: 'Canto Testnet',
	/** Internal network name */
	network: 'cantotest',
	/** Currency used by chain */
	nativeCurrency: { name: 'Canto', symbol: 'CANTO', decimals: 18 },
	/** Collection of RPC endpoints */
	rpcUrls: {
		default: {
			http: ['https://canto-testnet.plexnode.wtf'],
		},
		public: {
			http: ['https://canto-testnet.plexnode.wtf'],
		},
	},
	blockExplorers: {
		default: {
			name: 'Canto EVM Explorer (Tuber)',
			url: 'https://testnet.tuber.build/',
		},
	},
	testnet: true,
}

// const { chains, provider, webSocketProvider } = configureChains(
// 	// @ts-ignore
// 	[mainnet],
// 	[publicProvider()]
// )

const client = createClient(
	getDefaultClient({
		appName: APP_NAME,
		// chains: chains,
		autoConnect: true,
		infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
		// alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID,
	})
)

const Web3Provider = ({ children }) => {
	const { resolvedTheme } = useTheme()

	return (
		<WagmiConfig client={client}>
			<ConnectKitProvider mode={resolvedTheme as 'light' | 'dark'}>{children}</ConnectKitProvider>
		</WagmiConfig>
	)
}

export default Web3Provider
