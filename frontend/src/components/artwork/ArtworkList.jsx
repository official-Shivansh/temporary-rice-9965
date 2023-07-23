import React, { useEffect, useState } from 'react'
import ArtworkDetail from './ArtworkDetail'
import { Box, useBreakpointValue } from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";

import { fetchArts, deleteArt, fetchAllArts } from '../../redux/reducers/artworkReducer/artworkAction';
const ArtworkList = () => {

    const dispatch = useDispatch()

    const arts = useSelector((store) => store.artworkReducer.arts.arts)

    console.log("arts is", arts)
    const [reload, setReload] = useState(0);

    useEffect(() => {
        dispatch(fetchArts)
        dispatch(fetchAllArts)
    }, [reload])


    const handleDelete = (postId) => {
        // Assuming the post object has the _id field
        dispatch(deleteArt(postId))
        setReload((prev) => prev + 1);
    };

    const columnCount = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4, xxl: 6 });
    return (<>
        <Box
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
                margin: "25px",
            }}
        >
            {
                arts?.map((art) => {
                    return <ArtworkDetail {...art} key={art._id} handleDelete={handleDelete} />
                })
            }

        </Box >
    </>
    )
}

export default ArtworkList