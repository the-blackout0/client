import PageWrapper from '@/components/wrappers/PageWrapper'
import { supabase } from '@/utils/supabase-client'
import React, { useEffect, useState } from 'react'

const Supabase = () => {
	const [citiesCount, setCitiesCount] = useState(0)
	const [cities, setCities] = useState([])

	const insertCity = async () => {
		await supabase.from('cities').insert({ name: 'Bucharest' })
	}

	useEffect(() => {
		const cities = supabase
			.from('cities')
			.select()
			.then(res => {
				setCities(res.data)
			})

		const subscription = supabase
			.channel(`any`)
			.on('postgres_changes', { event: '*', schema: 'public', table: 'cities' }, res => {
				console.log('res', res)
			})
			.subscribe()
	}, [])

	console.log(supabase)
	return (
		<PageWrapper>
			<div>
				<p className="text-2xl">Supabase</p>
				<p>Cities: {cities.map(item => item.name + ', ')}</p>
				<p>Cities Count: {citiesCount}</p>
				<button className="p-5 mt-5 bg-red-800 rounded-md" onClick={insertCity}>
					Insert city
				</button>
			</div>
		</PageWrapper>
	)
}

export default Supabase
