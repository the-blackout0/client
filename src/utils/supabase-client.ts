import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

interface PlayerData {
	walletAddr: string
	name: string
	wins?: number
	losses?: number
	deck?: number[]
	nfts?: number
}

export async function upsertPlayer(playerData: PlayerData) {
	const { data, error } = await supabase.from('players').upsert([
		{
			walletAddr: playerData.walletAddr,
			name: playerData.name,
		},
	])

	if (error) {
		console.error('Error upserting player data:', error)
	} else {
		console.log('Player data upserted successfully:', data)
	}
}

export async function updateUserDeck(userId, cardId) {
	try {
		const { data, error } = await supabase.from('deck').insert([{ userId, cardId }])

		if (error) throw error

		return data
	} catch (error) {
		console.error('Error updating user deck:', error)
		return null
	}
}
