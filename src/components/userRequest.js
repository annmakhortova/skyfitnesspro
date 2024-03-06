import { useDispatch } from "react-redux";
import { getCurrentUser } from "../pages/api";
import { setFullCurrentUser } from "../store/userSlice";


 export const UpdateUserDetails = () => {
  const dispatch = useDispatch();

  const currentId = localStorage.getItem("userId");
  
  getCurrentUser(currentId).then((currentUser) => {
    dispatch(setFullCurrentUser(currentUser));
  });
}