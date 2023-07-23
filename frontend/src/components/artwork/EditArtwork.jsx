import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { getProductById } from "../../redux/reducers/artworkReducer/artworkAction"

const EditProduct = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})
    const [price, setPrice] = useState(0)
    const [type, setType] = useState("")
    const [title, setTitle] = useState("")


    const products = useSelector((store => store.artworkReducer.arts.arts))

    console.log("products", products)

    useEffect(() => {
        const item = products.find((element) => element._id === id)
        console.log("item is", item)
        setProduct(item)
        setPrice(item.price)
        setType(item.typeOfArtWork)
        setTitle(item.title)
    }, [id, products])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleEdit = () => {
        // let data = { price: +price, type, title }
        // dispatch(patchArtwork(id, data))
        //     .then((res) => {
        //         navigate("/profile")
        //     })
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
            marginBottom: "5px",
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
            border: "1px solid grey"
        }
    };
    return (
        <div style={styles.container}>

            <img alt='imageInEdit' src='https://as2.ftcdn.net/v2/jpg/03/01/92/83/1000_F_301928370_bqDFDLxE9YsS3nTsukbDkwXqKK2xwqXO.jpg' style={{ width: "300px" }} />
            <div style={styles.input} >
                <h1 style={styles.title}>Editing: {product.title}</h1>
                <label style={styles.label}>Title:</label>
                <input type='text' style={styles.box} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Product Title" />
                <label style={styles.label}>Price:</label>
                <input type='number' style={styles.box} value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                <label style={styles.label}>Type:</label>
                <input type='text' style={styles.box} value={type} onChange={(e) => setType(e.target.value)} placeholder="Product Type" />
                <button style={styles.button} onClick={handleEdit}>Update</button>
            </div>
            <img alt='imageInEdit' src='https://media.istockphoto.com/id/1058684612/vector/man-artist-painting-autumn-tree-landscape-in-the-park-isolated-vector-illustration-scene.jpg?s=2048x2048&w=is&k=20&c=j6mtlZJTJdYBHuBqU3W5PdK69xXIngE9pSMATem_UpI=' style={{ width: "300px" }} />
        </div>

    )
}

export default EditProduct