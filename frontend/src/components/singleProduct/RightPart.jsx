import React, { useState } from "react";
import {
  Box,
  Image,
  Flex,
  Avatar,
  Text,
  IconButton,
  Badge,
  Button,
  Input,
} from "@chakra-ui/react";
import { FaHeart, FaComment, FaLocationArrow } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";

// Dummy data for the image, comments, and likes
const imageData = {
  imageUrl: "https://example.com/artwork.jpg",
  comments: [
    { user: "user1", comment: "This is beautiful!" },
    { user: "user2", comment: "Amazing artwork!" },
    { user: "user1", comment: "Great job!" },
  ],
  likes: 42,
};

const SingleArtPage = () => {
  const [comments, setComments] = useState(imageData.comments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const updatedComments = [
        ...comments,
        { user: "Your Name", comment: newComment },
      ];
      setComments(updatedComments);
      setNewComment("");
    }
  };

  return (
    <Box maxW="600px" mx="auto" my="4">
      {/* Artwork Image */}
      {/* <Image src={imageData.imageUrl} alt="Artwork" /> */}

      {/* Likes */}
      <Flex mt="2" align="center" justify="space-between">
        <IconButton
          icon={<FaHeart />}
          aria-label="Like"
          // size="sm"
          variant="ghost"
          color="gray.600"
        />
        <Badge colorScheme="pink">{imageData.likes} Likes</Badge>
      </Flex>
      <Flex border='1px solid red'>
        <IconButton
          icon={<FaRegCommentAlt />}
          aria-label="Comment"
          // size="sm"
          variant="ghost"
          // color="gray.600"
        />
        <Text m="auto" ml='2' as="b">Comments</Text>
      </Flex>
      {/* Comments */}
      <Box mt="4">
        {comments.map((comment, index) => (
          <Flex key={index} align="center" mt="2">
            <Avatar
              size="sm"
              name={comment.user}
              src={`https://i.pravatar.cc/40?u=${comment.user}`}
            />
            <Text ml="2" fontSize="sm">
              <strong>{comment.user}:</strong> {comment.comment}
            </Text>
          </Flex>
        ))}
      </Box>

      {/* Comment Input */}
      <Flex mt="4" border="1px solid grey" borderRadius="8" p="2">
        <Avatar
          size="sm"
          m="auto"
          name="Your Name"
          src="https://i.pravatar.cc/40?u=yourname"
        />
        <Box
          ml="2"
          flex="1"
          // border={"1px solid red"}
        >
          <Input
            type="text"
            border={"0px"}
            placeholder="Write a comment..."
            value={newComment}
            w={"300px"}
            onChange={(e) => setNewComment(e.target.value)}
            focusBorderColor="none"
          ></Input>
        </Box>
        <IconButton
          icon={<FaLocationArrow />}
          aria-label="Post comment"
          size="md"
          // color={""}
          onClick={handleAddComment}
        />
        {/* <Button onClick={handleAddComment}>Add</Button> */}
      </Flex>
    </Box>
  );
};

export default SingleArtPage;
