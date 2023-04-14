import React from 'react'
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/reducers/authSlice';

const AccountDetail = () => {
    const currentUser = useSelector(selectCurrentUser);
    console.log(currentUser)
    return (
        <div>cuurrent user</div>
    )
}

export default AccountDetail