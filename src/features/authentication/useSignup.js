import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
// import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSingup() {
  // const navigate = useNavigate();

  const { mutate: signup, isLoading: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success("Account successfully created");
    },
    onError: (err) => {
      console.error(err);
      // toast.error(err?.message);
    },
  });

  return { signup, isSigningUp };
}
