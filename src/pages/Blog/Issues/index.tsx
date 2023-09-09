import { useEffect, useState } from "react";
import { IssueCard, IssuesContainer } from "./style";
import { api } from "../../../lib/api";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

export function Issues() {
  const [issues, setIssues] = useState<Issue[]>([]);

  function fetchIssues() {
    api
      .get("search/issues", {
        params: {
          q: "repo:schayene/ignite-github-blog",
          sort: "created",
          order: "desc",
        },
      })
      .then((response) => {
        setIssues(response.data.items);
      });
  }

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <IssuesContainer>
      {issues.map((issue) => (
        <IssueCard key={issue.id}>
          <header>
            <h2>{issue.title}</h2>
            <span>
              {formatDistanceToNow(new Date(issue.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </header>
          <p>{issue.body}</p>
        </IssueCard>
      ))}
    </IssuesContainer>
  );
}
