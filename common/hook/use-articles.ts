import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useArticles() {
    return useQuery({
        queryKey: ["articles"],
        queryFn: async () => {
            const response = await axios.post("/api/articles");
            return response.data; 
        }
    })
}