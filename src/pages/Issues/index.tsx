import { useContext, useEffect } from "react";
import { IssueCard, IssuesContainer } from "./style";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useNavigate } from "react-router-dom";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { IssuesContext } from "../../contexts/IssuesContext";

export function Issues() {
  const navigate = useNavigate();

  const { issues, fetchIssues } = useContext(IssuesContext);

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <>
      <Profile />
      <SearchForm />

      <IssuesContainer>
        {issues.map((issue) => (
          <IssueCard
            key={issue.number}
            onClick={() => navigate("issue/" + issue.number)}
          >
            <header>
              <h3>{issue.title}</h3>
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
    </>
  );
}
