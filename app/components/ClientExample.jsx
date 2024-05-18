'use client'

export default function ClientExample({user}){
    return <p>Client example - user name: {user?.name || 'no user'}</p>
}