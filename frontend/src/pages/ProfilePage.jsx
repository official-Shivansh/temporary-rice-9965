import ArtworkList from "../components/artwork/ArtworkList";
import UserAvatar from "../components/profile/UserAvatar";
import AddNewArt from "../components/artwork/AddNewArt";

const ProfilePage = () => {
  return (
    <div>
      <UserAvatar />
      <AddNewArt />

      <ArtworkList />
    </div>
  );
};

export default ProfilePage;
