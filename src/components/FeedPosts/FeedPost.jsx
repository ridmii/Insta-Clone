import { Box, Image } from "@chakra-ui/react";
import PropTypes from "prop-types"; // Import PropTypes
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";

const FeedPost = ({ post }) => {
  const { userProfile } = useGetUserProfileById(post.createdBy);

  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={post.imageURL} alt={"FEED POST IMG"} />
      </Box>
      <PostFooter post={post} creatorProfile={userProfile} />
    </>
  );
};

// Define propTypes for validation
FeedPost.propTypes = {
  post: PropTypes.shape({
    createdBy: PropTypes.string.isRequired, // User ID
    imageURL: PropTypes.string.isRequired,  // URL for the image
    // Add more fields based on the post object structure
  }).isRequired, // post is a required prop
};

export default FeedPost;
