import React, { useState } from "react";

function NewProductForm() {
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: '',
        photo: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setProductData({
            ...productData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your responses are submitted successfully!');
        console.log('Your responses are saved!', productData);
        setProductData({
            name: '',
            description: '',
            category: '',
            quantity: '',
            price: '',
            photo: null
        });
    };

    const handleCancel = () => {
        console.log('Data erased.');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>New Product</h1>

            <div>
                <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                style={{ display: 'none' }}
                required 
                />
                <label htmlFor="photo">Upload your Logo</label>
                <button type="button" onClick={() => document.getElementById('photo').click()}>
                    Upload your Logo <span role="img" aria-label="upload" required>⬆️</span>
                </button>
            </div>
            <div>
                <label htmlFor="name">
                    Name:
                    <span style={{ color: "red" }}>*</span> 
                </label>
                <input
                type="text"
                id="name"
                name="name"
                value={productData.name}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label htmlFor="description">
                    Description:
                    <span style={{ color: "red" }}>*</span>
                </label>
                <input
                type="text"
                id="description"
                name="description"
                value={productData.description}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label htmlFor="category">
                    Category:
                    <span style={{ color: "red" }}>*</span>
                </label>
                <input
                type="text"
                id="category"
                name="category"
                value={productData.category}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label htmlFor="quantity">
                    Quantity:
                    <span style={{ color: "red" }}>*</span>
                </label>
                <input
                type="number"
                id="quantity"
                name="quantity"
                value={productData.quantity}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label htmlFor="price">
                    Price:
                    <span style={{ color: "red" }}>*</span>
                </label>
                <input
                type="number"
                id="price"
                name="price"
                value={productData.price}
                onChange={handleChange}
                required
                />
            </div>

            <button type="submit">Submit</button>
            <button type="reset" onClick={handleCancel}>Cancel</button>
        </form>
    )
}

export default NewProductForm;