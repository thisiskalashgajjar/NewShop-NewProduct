import React, { cloneElement, useState } from "react";
import NewProductForm from './new-product.component';

function NewShopForm() {
    const [shopData, setShopData] = useState({
        name: '',
        description: '',
        logo: null
    });

    const [currentPage, setCurrentPage] = useState('new-shop');

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setShopData({
            ...shopData,
            [name] : files ? files [0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your responses are recorded.");
        console.log("Your responses has been submitted", shopData);

        setShopData({
            name: '',
            description: '',
            logo: null
        });
    };

    const handleCancel = () => {
        console.log('Responses erased.');
    }

    const handleNavClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>

            {currentPage === 'new-shop' ? (
                <form onSubmit={handleSubmit}>
                    <h1>New Shop</h1>

                    <div>
                        <input
                        type="file"
                        id="logo"
                        name="logo"
                        accept="image/*"
                        onChange={handleChange}
                        style={{display: 'none'}}
                        required
                        />
                        <label htmlFor="logo">Upload Logo</label>
                        <button type="button" onClick={() => document.getElementById('logo').click()}>
                            Upload <span role="img" aria-label="upload">⬆️</span>
                        </button>
                    </div>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <span style={{color: 'red'}}>*</span>
                        <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={shopData.name}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <span style={{color: 'red'}}>*</span>
                        <input
                        type='text'
                        id='description'
                        name='description'
                        value={shopData.description}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <button type="submit">Submit</button>
                    <button type="reset" onClick={handleCancel}>Cancel</button>
                </form>
            ) : (
                <NewProductForm />
            )
        }
        </div>
    );

}

export default NewShopForm;