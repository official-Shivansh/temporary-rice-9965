import React, { useState } from 'react'
import ArtworkDetail from './ArtworkDetail'
import { Box, useBreakpointValue } from '@chakra-ui/react';
const ArtworkList = () => {

    const [arts, setArts] = useState([])

    const columnCount = useBreakpointValue({ base: 1, sm: 1, md: 3, lg: 4, xl: 6 });
    return (<>
        <Box
            style={{
                display: "grid",
                border: "5px solid blue",
                gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
                margin: "25px",
            }}
        >
            {
                arts?.map((art) => {
                    return <ArtworkDetail {...art} key={art._id} />
                })
            }

        </Box >
    </>
    )
}

export default ArtworkList