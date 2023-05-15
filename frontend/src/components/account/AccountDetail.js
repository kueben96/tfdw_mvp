import React from 'react'
import { userIdFromLocalStorage } from '../../store/reducers/authSlice';
import { useGetUserByIdQuery } from '../../store/reducers/userSlice'

const AccountDetail = () => {

    const userId = userIdFromLocalStorage

    const { data: user, isLoading, isError, error } = useGetUserByIdQuery(userId)

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Account Detail</h1>
            <p>Email: {user.email}</p>
            <p>Name: {user.first_name} {user.last_name}</p>
            <p>Rolle: {user.role}</p>
            <p>Stadt: {user.city}</p>
            <p>Addresse: {user.street}</p>
            <p>Region: {user.region}</p>
            <p>Verein: {user.club_name}</p>
            {/* ...other user details */}
        </div>
    )
}

export default AccountDetail