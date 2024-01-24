import { QUERY_KEYS } from "@/constants/queryKeys";
import { IGroupCreate } from "@/interfaces/group";
import { ISubject } from "@/interfaces/subject";
import { createGroup } from "@/requests/groups";
import { getSubjects } from "@/requests/subjects";
import { useMutation, useQuery } from "@tanstack/react-query";

interface QueryParams {
  params?: any;
  enabled?: boolean;
}

export const useSubjects = ({ params, enabled }: QueryParams) => {
  const { data, isFetching, isSuccess, isError, refetch } = useQuery<
    ISubject[]
  >({
    queryKey: [QUERY_KEYS.SUBJECTS, params?.title],
    queryFn: () => getSubjects(params?.search || ""),
    refetchOnWindowFocus: false,
    enabled,
  });

  return {
    data,
    isFetching,
    isSuccess,
    isError,
    refetch,
  };
};
