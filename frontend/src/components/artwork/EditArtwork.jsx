import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { patchArt } from "../../redux/reducers/artworkReducer/artworkAction"

const EditProduct = () => {

    const { id } = useParams()
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [product, setProduct] = useState({})
    const [price, setPrice] = useState(0)
    const [type, setType] = useState("")
    const [title, setTitle] = useState("")


    const products = useSelector((store => store.artworkReducer.arts.arts))

    useEffect(() => {
        const item = products.find((element) => element._id === id)
        console.log("item is", item)
        setProduct(item)
        setPrice(item.price)
        setType(item.typeOfArtWork)
        setTitle(item.title)
    }, [id, products])




    const handleEdit = () => {
        let data = { price: +price, type, title }
        dispatch(patchArt(id, data))
        navigate("/profile")
    }


    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            width: "100%",
            margin: "auto",
            marginTop: "100px",
            fontFamily: "Arial, sans-serif",
            color: "#333",
            padding: "20px"
        },
        title: {
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
        },
        input: {
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            width: "300px",
            marginBottom: "10px",
            border: "2px solid #ccc",
            borderRadius: "5px",
            width: "300px",
            fontSize: "16px",
            marginRight: "50px",
            marginLeft: "50px"
        },
        label: {
            margin: "5px",
            fontWeight: "600"
        },
        button: {
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "18px",
            cursor: "pointer",
            transition: "background-color 0.2s",
        },
        box: {
            border: "1px solid grey",
            padding: "5px",
            borderRadius: "3px"
        },
        img: {
            width: "300px"
        }
    };


    // Add media queries for responsiveness
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        // Adjust styles for small screens (less than 768px wide)
        styles.container.flexDirection = 'column';
        styles.input.width = '100%';
        styles.input.marginRight = '0';
        styles.input.marginLeft = '0';
        styles.input.maxWidth = '400px';

    } else if (screenWidth < 992) {
        // Adjust styles for medium screens (between 768px and 991px wide)
        styles.container.flexDirection = 'row';
        styles.container.flexWrap = 'wrap';
        styles.input.marginRight = '10px';
        styles.input.marginLeft = '10px';

    }
    return (
        <div style={styles.container}>
            <img alt='imageInEdit' src='https://as2.ftcdn.net/v2/jpg/03/01/92/83/1000_F_301928370_bqDFDLxE9YsS3nTsukbDkwXqKK2xwqXO.jpg' style={styles.img} />
            <div style={styles.input} >
                <h2 style={styles.title}>Editing: {product.title}</h2>
                <label style={styles.label}>Title:</label>
                <input type='text' style={styles.box} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Product Title" />
                <label style={styles.label}>Price:</label>
                <input type='number' style={styles.box} value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                <label style={styles.label}>Type:</label>
                <input type='text' style={styles.box} value={type} onChange={(e) => setType(e.target.value)} placeholder="Product Type" />
                <button style={styles.button} onClick={handleEdit}>Update</button>
            </div>

        </div>

    )
}

export default EditProduct