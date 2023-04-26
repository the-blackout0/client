import DynamicProfile from '@/components/Profile/DynamicProfile'
import ProfileComponent from '@/components/Profile/Profile'
import React from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const Profile = () => {
	return <DynamicProfile />
}

export default Profile
