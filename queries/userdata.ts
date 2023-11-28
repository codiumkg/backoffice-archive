import { IUserData } from "@/interfaces/auth";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/queryKeys";
import getUserData from "@/requests/auth/getUserData";

export const useUserData = () => {
  const { data, isFetching, isSuccess, isError } = useQuery<IUserData>({
    queryKey: [QUERY_KEYS.USERDATA],
    queryFn: getUserData,
    staleTime: 60000 * 20,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isFetching,
    isSuccess,
    isError,
  };
};
