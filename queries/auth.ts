import { IUserData } from "@/interfaces/auth";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/queryKeys";
import checkStatus from "@/requests/auth/checkStatus";

export const useUserData = () => {
  const { data, isFetching } = useQuery<IUserData>({
    queryKey: [QUERY_KEYS.USERDATA],
    queryFn: checkStatus,
    staleTime: 60000 * 20,
  });

  return {
    data,
    isFetching,
  };
};
