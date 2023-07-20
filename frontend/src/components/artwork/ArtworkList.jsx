import React, { useState } from 'react'
import ArtworkDetail from './ArtworkDetail'
import { Box, useBreakpointValue } from '@chakra-ui/react';
const ArtworkList = () => {

    const arts = [
        {
            "_id": "64b978aabaf02bbe3064f512",
            "title": "Beautiful Landscape",
            "image": "https://images.unsplash.com/photo-1613967193490-1d17b930c1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            "typeOfArtWork": "Painting",
            "tags": [
                "#ArtisticLandscapes",
                "#PaintingInNature",
                "#NaturalArtistry",
                "#NaturePalette",
                "#ArtisticSerenity",
                "#PaintingBeauty",
                "#NatureColors",
                "#ArtisticReflections",
                "#PaintingElegance"
            ],
            "creator": "64b955d0c928b0121c5e495f",
            "price": 3000,
            "description": "In the ethereal realm of art, a masterpiece emerges to captivate hearts and evoke emotions in those who gaze upon it. Serenity's Canvas, a breathtaking landscape painting, transports its viewers to a world of pristine beauty and tranquil harmony. Conceived by the skilled hand of a visionary artist, this work of art offers a symphony of colors, textures, and intricately crafted details, inviting viewers on an awe-inspiring journey through nature's untouched sanctuary.",
            "comments": [],
            "likes": []
        },
        {
            "_id": "64b97933df0e739d8e2c3ab4",
            "title": "Beautiful Landscape",
            "image": "https://images.unsplash.com/photo-1613967193490-1d17b930c1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            "typeOfArtWork": "Painting",
            "tags": [
                "#ArtisticLandscapes",
                "#PaintingInNature",
                "#NaturalArtistry",
                "#NaturePalette",
                "#ArtisticSerenity",
                "#PaintingBeauty",
                "#NatureColors",
                "#ArtisticReflections",
                "#PaintingElegance"
            ],
            "creator": "64b955d0c928b0121c5e495f",
            "price": 3000,
            "description": "In the ethereal realm of art, a masterpiece emerges to captivate hearts and evoke emotions in those who gaze upon it. Serenity's Canvas, a breathtaking landscape painting, transports its viewers to a world of pristine beauty and tranquil harmony. Conceived by the skilled hand of a visionary artist, this work of art offers a symphony of colors, textures, and intricately crafted details, inviting viewers on an awe-inspiring journey through nature's untouched sanctuary.",
            "comments": [],
            "likes": []
        },
        {
            "_id": "64b979552a05bf26240423f5",
            "title": "Beautiful Landscape",
            "image": "https://images.unsplash.com/photo-1613967193490-1d17b930c1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            "typeOfArtWork": "Painting",
            "tags": [
                "#ArtisticLandscapes",
                "#PaintingInNature",
                "#NaturalArtistry",
                "#NaturePalette",
                "#ArtisticSerenity",
                "#PaintingBeauty",
                "#NatureColors",
                "#ArtisticReflections",
                "#PaintingElegance"
            ],
            "creator": "64b955d0c928b0121c5e495f",
            "price": 3000,
            "description": "In the ethereal realm of art, a masterpiece emerges to captivate hearts and evoke emotions in those who gaze upon it. Serenity's Canvas, a breathtaking landscape painting, transports its viewers to a world of pristine beauty and tranquil harmony. Conceived by the skilled hand of a visionary artist, this work of art offers a symphony of colors, textures, and intricately crafted details, inviting viewers on an awe-inspiring journey through nature's untouched sanctuary.",
            "comments": [],
            "likes": []
        },
        {
            "_id": "64b979f59da09e861cd777d8",
            "title": "Beautiful Landscape",
            "image": "https://images.unsplash.com/photo-1613967193490-1d17b930c1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            "typeOfArtWork": "Painting",
            "tags": [
                "#ArtisticLandscapes",
                "#PaintingInNature",
                "#NaturalArtistry",
                "#NaturePalette",
                "#ArtisticSerenity",
                "#PaintingBeauty",
                "#NatureColors",
                "#ArtisticReflections",
                "#PaintingElegance"
            ],
            "creator": "64b955d0c928b0121c5e495f",
            "price": 3000,
            "description": "In the ethereal realm of art, a masterpiece emerges to captivate hearts and evoke emotions in those who gaze upon it. Serenity's Canvas, a breathtaking landscape painting, transports its viewers to a world of pristine beauty and tranquil harmony. Conceived by the skilled hand of a visionary artist, this work of art offers a symphony of colors, textures, and intricately crafted details, inviting viewers on an awe-inspiring journey through nature's untouched sanctuary.",
            "comments": [],
            "likes": []
        },
        {
            "_id": "64b97abb9da09e861cd777dc",
            "title": "Beautiful Couple Painting",
            "image": "https://feelingnifty.com/wp-content/uploads/2022/06/WinterDance-print-960x768.jpeg.webp",
            "typeOfArtWork": "Painting",
            "tags": [
                "#ArtisticLandscapes",
                "#PaintingInNature",
                "#NaturalArtistry",
                "#NaturePalette",
                "#ArtisticSerenity",
                "#PaintingBeauty",
                "#NatureColors",
                "#ArtisticReflections",
                "#PaintingElegance"
            ],
            "creator": "64b955d0c928b0121c5e495f",
            "price": 3500,
            "description": "In the ethereal realm of art, a masterpiece emerges to captivate hearts and evoke emotions in those who gaze upon it. Serenity's Canvas, a breathtaking painting, transports its viewers to a world of pristine beauty and tranquil harmony.",
            "comments": [],
            "likes": []
        },
        {
            "_id": "64b97b879da09e861cd777e0",
            "title": "Mystical Forest",
            "image": "https://e0.pxfuel.com/wallpapers/1010/72/desktop-wallpaper-mystical-forest-background-high-quality-magical-landscape.jpg",
            "typeOfArtWork": "Painting",
            "tags": [
                "#ArtisticLandscapes",
                "#PaintingInNature",
                "#NaturalArtistry",
                "#NaturePalette",
                "#ArtisticSerenity",
                "#PaintingBeauty",
                "#NatureColors",
                "#ArtisticReflections",
                "#PaintingElegance"
            ],
            "creator": "64b955d0c928b0121c5e495f",
            "price": 2500,
            "description": "Step into the enchanting embrace of the 'Mystical Forest.' This captivating landscape painting transports its beholders into a realm where nature and magic intertwine. Through skillful brushwork and vibrant colors, the artist has conjured an ethereal world, where sunbeams dance amidst the ancient trees, and gentle creatures roam in harmony. Immerse yourself in the serenity of this woodland haven, where whispers of ancient legends and the allure of the unknown beckon.",
            "comments": [],
            "likes": []
        },
        {
            "_id": "64b97c2b9da09e861cd777e4",
            "title": "Eternal Seaside",
            "image": "https://ychef.files.bbci.co.uk/1600x900/p02sxcp1.webp",
            "typeOfArtWork": "Painting",
            "tags": [
                "#ArtisticLandscapes",
                "#PaintingInNature",
                "#NaturalArtistry",
                "#NaturePalette",
                "#ArtisticSerenity",
                "#PaintingBeauty",
                "#NatureColors",
                "#ArtisticReflections",
                "#PaintingElegance"
            ],
            "creator": "64b955d0c928b0121c5e495f",
            "price": 3500,
            "description": "Experience the allure of the 'Eternal Seaside,' where land, sea, and sky unite in a timeless symphony of beauty. This mesmerizing landscape painting captures the essence of coastal bliss, where crashing waves serenade rugged cliffs, and the golden sun dips gracefully into the horizon. The artist's deft strokes bring to life the shimmering waters, playful seagulls, and a sense of endless possibilities. Let the 'Eternal Seaside' wash over you with tranquility and leave you yearning for the embrace of the ocean's eternal embrace.",
            "comments": [],
            "likes": []
        }
    ]


    const columnCount = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4, xxl: 6 });
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