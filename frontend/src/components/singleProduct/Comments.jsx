import React, { useState } from "react";
import { Box, Flex, Avatar, Text, IconButton, Input } from "@chakra-ui/react";
import { FaLocationArrow,FaRegCommentAlt } from "react-icons/fa";

const imageData = {
  imageUrl: "https://example.com/artwork.jpg",
  comments: [
    { user: "user1", comment: "This is beautiful!" },
    { user: "user2", comment: "Amazing artwork!" },
    { user: "user1", comment: "Great job!" },
  ],
  likes: 42,
};

export default function Comments() {
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
    <Box>
      <Flex>
        <IconButton
          icon={<FaRegCommentAlt />}
          aria-label="Comment"
          // size="sm"
          variant="ghost"
          // color="gray.600"
        />
        <Text m="auto" ml="2" as="b">
          Comments
        </Text>
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
        <Box ml="2" flex="1">
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
      </Flex>
    </Box>
  );
}
