import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addDonation } from '../../store/reducers/donationsSlice'

const AddDonationForm = () => {

    const dispatch = useDispatch()
    const [userId, setUserId] = useState(1)
    const [category, setCategory] = useState('')
    const [itemCount, setItemCount] = useState('')
    const [description, setDescription] = useState('')
    const [cut, setCut] = useState('')
    const [color, setColor] = useState('')

    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const onCategoryChanged = e => setCategory(e.target.value)
    const onDescriptionChanged = e => setDescription(e.target.value)
    const onItemCountChanged = e => setItemCount(e.target.value)
    const onCutChanged = e => setCut(e.target.value)
    const onColorChanged = e => setColor(e.target.value)

    const canSave = [description, category, userId, color, itemCount, cut, color].every(Boolean) && addRequestStatus === 'idle';

    const onSaveDonationClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addDonation({ user_id: userId, category: category, number: itemCount, color: color, cut: cut, description: description })).unwrap()


            } catch (err) {
                console.error('Failed to save the donation', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }

    }

    return (
        <section>
            <h2>Add a New Donation</h2>
            <form>
                <label htmlFor="c">Category:</label>
                <input
                    type="text"
                    id="donationType"
                    name="donationType"
                    value={category}
                    onChange={onCategoryChanged}
                />
                <label htmlFor="userId">User:</label>
                <input
                    type="number"
                    id="userId"
                    name="userId"
                    value={userId}
                    onChange={() => { }}
                />
                <label htmlFor="donationDescription">Description:</label>
                <textarea
                    id="donationDescription"
                    name="donationDescription"
                    value={description}
                    onChange={onDescriptionChanged}
                />
                <label htmlFor="number">Count:</label>
                <input
                    type="number"
                    id="itemCount"
                    name="itemCount"
                    value={itemCount}
                    onChange={onItemCountChanged}
                />
                <label htmlFor="cut">Cut:</label>
                <input
                    type="text"
                    id="cut"
                    name="cut"
                    value={cut}
                    onChange={onCutChanged}
                />
                <label htmlFor="color">Color:</label>
                <input
                    type="text"
                    id="color"
                    name="color"
                    value={color}
                    onChange={onColorChanged}
                />
                <button
                    type="button"
                    onClick={onSaveDonationClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddDonationForm