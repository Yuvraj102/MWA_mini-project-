import React, { useState } from 'react';
import '../css/Sell.css';

const Sell = () => {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        sellOrDonate: '',
        price: '',
        imageDescription: '',
        imageFile: null,
    }); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData, //creates a shallow copy 
            imageFile: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="product-form-container">
            <h2>Product Description Form</h2>
            <form className="product-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <input type="text" name="category" value={formData.category} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Sell or Donate:</label>
                    <select name="sellOrDonate" value={formData.sellOrDonate} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="sell">Sell</option>
                        <option value="donate">Donate</option>
                    </select>
                </div>
                {formData.sellOrDonate === 'sell' && (
                    <div className="form-group">
                        <label>Price:</label>
                        <input type="number" name="price" value={formData.price} onChange={handleChange} />
                    </div>
                )}
                <div className="form-group">
                    <label>Description of Image:</label>
                    <textarea name="imageDescription" value={formData.imageDescription} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label>Upload Image:</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                </div>
                <button type="submit">Post</button>
            </form>
        </div>
    );
}
export default Sell;
