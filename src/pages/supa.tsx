import PageWrapper from '@/components/wrappers/PageWrapper'
import { supabase } from '@/utils/supabase-client'
import React from 'react'

const Supabase = () => {
	console.log(supabase)
	return <PageWrapper>Supabase</PageWrapper>
}

export default Supabase
