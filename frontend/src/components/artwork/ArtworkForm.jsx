import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { postArt } from "../../redux/reducers/artworkReducer/artworkAction";
import { useDispatch } from "react-redux"

const ArtworkForm = () => {
    const dispatch = useDispatch();
    const [formState, setFormState] = useState({
        title: "",
        image: "",
        typeOfArtWork: "",
        tags: "",
        price: "",
        description: "",
    });

    const { register, handleSubmit } = useForm();

    const handlePost = (e) => {
        const postFormData = new FormData();
        postFormData.append('title', formState.title);
        postFormData.append('image', formState.image);
        postFormData.append('typeOfArtWork', formState.typeOfArtWork);
        postFormData.append('tags', formState.tags);
        postFormData.append('price', formState.price);
        postFormData.append('description', formState.description);
        dispatch(postArt(postFormData));
    };


    return (
        <form onSubmit={handleSubmit(handlePost)} style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "500px",
            margin: " 0 auto",
            marginBottom: "0",
            padding: "10px",
            border: "1px solid #ccc",
            backgroundColor: "rgba(0, 0, 0, 0.17) 0px - 23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px - 36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px - 79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
        }}>
            <label style={{ fontWeight: "bold", marginBottom: "5px" }}>Title</label>
            <input
                type="text"
                name="title"
                placeholder="Enter title"
                value={formState.title}
                onChange={(event) => setFormState({ ...formState, title: event.target.value })}
                style={{ width: " 100 %", padding: "5px", border: "1px solid #ccc " }}
            />
            <br />
            <label style={{ fontWeight: "bold", marginBottom: "5px " }}>Image</label>
            <input
                type="url"
                name="image"
                placeholder="Enter Art Picture Url"
                value={formState.image}
                onChange={(event) => {
                    setFormState({ ...formState, image: event.target.value });
                }}
                style={{ width: " 100 %", padding: "5px", border: "1px solid #ccc " }}
            /><br />
            <label style={{ fontWeight: "bold", marginBottom: "5px" }}>Type of Artwork</label>
            <input
                type="text"
                name="typeOfArtwork"
                placeholder="Enter type of artwork"
                value={formState.typeOfArtwork}
                onChange={(event) => setFormState({ ...formState, typeOfArtWork: event.target.value })}
                style={{ width: " 100 %", padding: "5px", border: "1px solid #ccc " }}
            /><br />
            <label style={{ fontWeight: "bold", marginBottom: "5px" }}>Tags</label>
            <input
                type="text"
                name="tags"
                placeholder="Enter tags"
                value={formState.tags}
                onChange={(event) => setFormState({ ...formState, tags: event.target.value.split(" ") })}
                style={{ width: " 100 %", padding: "5px", border: "1px solid #ccc " }}
            />
            <br />
            <label style={{ fontWeight: "bold", marginBottom: "5px" }}>Price</label>
            <input
                type="number"
                name="price"
                placeholder="Enter price"
                value={formState.price}
                onChange={(event) => setFormState({ ...formState, price: event.target.value })}
                style={{ width: " 100 %", padding: "5px", border: "1px solid #ccc " }}
            />
            <br />
            <label style={{ fontWeight: "bold", marginBottom: "5px" }}>Description</label>
            <textarea
                name="description"
                placeholder="Enter description"
                value={formState.description}
                onChange={(event) => setFormState({ ...formState, description: event.target.value })}
                style={{ width: " 100 %", padding: "5px", border: "1px solid #ccc " }}
            />
            <button style={{ background: "#0066FF", padding: "10px", fontSize: "18px", marginTop: "10px", color: "white", fontWeight: "600", borderRadius: "5px" }}>Post Art</button>
        </form>
    );
};

export default ArtworkForm;