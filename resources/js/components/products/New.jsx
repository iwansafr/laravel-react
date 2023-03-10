import React, {useState} from "react";

const New = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState(null);
    const [type, setType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const changeHandle = (e) => {
        let file = e.target.file[0];
        let reader = new FileReader();
        let limit = 1024 * 1024 * 2;
        if(file['size'])

    }

    return (
        <div className="container">
            <div className="products_create">
                <div className="titlebar">
                    <div className="titlebar_item">
                        <h1>Add Product</h1>
                    </div>
                    <div className="titlebar_item">
                        <button className="btn">
                            Save
                        </button>
                    </div>
                </div>
                <div className="card_wrapper">
                    <div className="wrapper_left">
                        <div className="card">
                            <p>Name</p>
                            <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} />
                            <p>Description (Optional)</p>
                            <textarea  cols="10" rows="5" value={description} onChange={(event)=>{setDescription(event.target.value)}}></textarea>

                            <div className="media">
                                <ul className="image">
                                    <li className="image_item">
                                        <div className="image_item-img">
                                            <img src={photo} width="117px" height="100px" />
                                        </div>
                                    </li>
                                    <li className="image_item">
                                        <form className="imag_item-form">
                                            <label className="image_item-form--label">Add Image</label>
                                            <input type="file" className="image_item-form--input"  />
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper_right">
                        <div className="card">
                            <p>Product Type</p>
                            <input type="text" />
                            <hr className="hr" />
                            <p>Inventory</p>
                            <input type="text" />
                            <hr className="hr" />
                            <p>Price</p>
                            <input type="text" />
                            <div className="br"></div>
                        </div>
                    </div>
                </div>

                <div className="titlebar">
                    <div className="titlebar_item">
                        
                    </div>
                    <div className="titlebar_item">
                        <button className="btn">
                            Save
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default New;