import { ReactNode, createContext, useState } from "react";
import { api } from "../lib/api";

interface Issue {
  number: number;
  title: string;
  body: string;
  created_at: string;
}

interface IssuesContextType {
  issues: Issue[];
  fetchIssues: (query?: string) => Promise<void>;
}

interface IssuesProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({} as IssuesContextType);

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([]);

  async function fetchIssues(query?: string) {
    let queryParam = "";

    if (query) {
      queryParam = query + " ";
    }

    // queryParam += "repo:schayene/ignite-github-blog";
    queryParam += "repo:rocketseat-education/reactjs-github-blog-challenge";

    const response = await api.get("search/issues", {
      params: {
        q: queryParam,
        sort: "created",
        order: "desc",
      },
    });

    setIssues(response.data.items);
  }

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  );
}
