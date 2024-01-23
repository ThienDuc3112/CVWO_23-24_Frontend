import { Typography } from "@mui/material";
import { useUserContext } from "../../contexts/UserContext";

const CreateCategory = () => {
  const { user } = useUserContext();
  if (!user || !user.is_admin)
    return <Typography>You are not allow to go here</Typography>;
  return <div>CreateCategory</div>;
};

export default CreateCategory;
