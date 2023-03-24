import React, { useState } from 'react'
import { useAddDonationMutation } from '../../store/reducers/donationsSlice'

const AddDonationForm = () => {

    const [addNewDonation, { isLoading }] = useAddDonationMutation()

    const [userId, setUserId] = useState(1)
    const [category, setCategory] = useState('jersey')
    const [itemCount, setItemCount] = useState(3)
    const [description, setDescription] = useState('test')
    const [cut, setCut] = useState('nice')
    const [color, setColor] = useState('red')

    const onCategoryChanged = e => setCategory(e.target.value)
    const onDescriptionChanged = e => setDescription(e.target.value)
    const onItemCountChanged = e => setItemCount(e.target.value)
    const onCutChanged = e => setCut(e.target.value)
    const onColorChanged = e => setColor(e.target.value)

    const canSave = [description, category, userId, color, itemCount, cut, color].every(Boolean) && !isLoading;

    const onSaveDonationClicked = () => {
        if (canSave) {
            try {
                addNewDonation({ user_id: userId, category: category, amount: itemCount, color_1: color, size_1: cut, description: description }).unwrap()
                setCategory('')
                setDescription('')
                setItemCount('')
                setCut('')
                setColor('')
            } catch (err) {
                console.error('Failed to save the donation', err)
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