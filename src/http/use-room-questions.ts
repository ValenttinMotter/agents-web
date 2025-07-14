import { useQuery } from "@tanstack/react-query";
import type { GetRoomQuestionsResponse } from "./types/create-room-questions-response";

export function useRoomQuestions(roomId: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["get-questions", roomId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`
      );
      const result: GetRoomQuestionsResponse = await response.json();

      return result;
    },
  });

  return {
    data,
    isLoading,
  };
}
