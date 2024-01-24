import { IGroup } from "@/interfaces/auth";
import { createGroup } from "@/requests/groups";
import { useMutation } from "@tanstack/react-query";

interface MutationQuery {
  onSuccess?: (data: IGroup) => void;
  onError?: () => void;
}

export const useGroupMutation = ({ onSuccess, onError }: MutationQuery) => {
  const { data, mutate, isPending } = useMutation({
    mutationFn: createGroup,
    onSuccess,
    onError,
  });

  return {
    data,
    isPending,
    mutate,
  };
};
