import React, { useState, useEffect } from "react";
import { Box, Flex, Avatar, Text, IconButton, Input } from "@chakra-ui/react";
import { FaLocationArrow, FaRegCommentAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { postComment, getComments } from "../../redux/reducers/artworkReducer/artworkAction";

const imageData = {
  imageUrl: "https://example.com/artwork.jpg",
  comments: [
    { user: "Monika", comment: "This is beautiful!", profilePicture: `https://e1.pxfuel.com/desktop-wallpaper/932/598/desktop-wallpaper-cartoon-dp-girl-for-whatsapp-instagram-dp-girl.jpg` },
    { user: "Gaby", comment: "Amazing artwork!", profilePicture: 'https://e1.pxfuel.com/desktop-wallpaper/886/876/desktop-wallpaper-top-35-sad-girl-pics-for-whatsapp-sad-alone-girls-for-whatsapp-dp-girls-whatsapp-dp.jpg' },
    { user: "Justin", comment: "Great job!", profilePicture: "https://veenanews.in/wp-content/uploads/2023/04/14451fcffeebdf14ab11c3c47b37ee9b.jpg" },
  ],
  likes: 42,
};

export default function Comments() {

  const [reload, setReload] = useState(0)
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { id } = useParams()

  const user = JSON.parse(localStorage.getItem("user"))

  const handleAddComment = async () => {
    // if (newComment.trim() !== "") {
    //   const updatedComments = [
    //     ...comments,
    //     { user: user.name, comment: newComment, profilePicture: user.profilePicture },
    //   ];
    //   setComments(updatedComments);
    //   setNewComment("");
    // }
    await postComment(id, newComment); // Assuming postComment is an async function
    setNewComment("");
    setReload(reload + 1);

  };

  useEffect(() => {
    let commentData = getComments(id).then((res) => {
      console.log("res inside use effect ", res)
      setComments(res.data)
    })


  }, [newComment, reload])

  console.log("comments", comments)
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
        {comments?.map((comment, index) => (
          <Flex key={index} align="center" mt="2">
            <Avatar
              size="sm"
              name={comment.user}
              src={comment.comment_creator_img}
            />
            <Text ml="2" fontSize="sm">
              <strong>{comment.createdby}:</strong> {comment.comment_text}
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
          src={user.profilePicture}
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
