import React from 'react'
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/reducers/authSlice';
import { useGetUserByIdQuery } from '../../store/reducers/userSlice'

const AccountDetail = () => {
    const currentUser = useSelector(selectCurrentUser);
    console.log(currentUser)

    const userId = localStorage.getItem('userId')

    const { data: user, isLoading, isSuccess, isError } = useGetUserByIdQuery(userId)

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: error</div>;
    }

    return (
        <div>
            <h1>Account Detail</h1>
            <p>User ID: {user.id}</p>
            <p>Email: {user.email}</p>
            {/* ...other user details */}
        </div>
    )
}

export default AccountDetail