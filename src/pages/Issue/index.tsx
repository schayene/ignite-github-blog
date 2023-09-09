import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../lib/api";
import { useEffect, useState } from "react";
import { IssueContainer, IssueContent, IssueHeader, IssueInfo } from "./style";
import ReactMarkdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import iconGo from "../../assets/go.svg";
import iconBack from "../../assets/back.svg";
import iconGithub from "../../assets/github.svg";
import iconCalendar from "../../assets/calendar.svg";
import iconComment from "../../assets/comment.svg";

interface User {
  login: string;
}

interface Issue {
  number: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
  comments: number;
  user: User;
}

export function Issue() {
  const params = useParams();
  const navigate = useNavigate();

  const [issue, setIssue] = useState<Issue>({
    number: 0,
    title: "",
    body: "",
    created_at: "",
    html_url: "",
    comments: 0,
    user: {
      login: "",
    },
  });

  function fetchIssue() {
    api
      .get("repos/schayene/ignite-github-blog/issues/" + params.number)
      .then((response) => {
        setIssue(response.data);
      });
  }

  useEffect(() => {
    fetchIssue();
  }, []);

  return (
    <IssueContainer>
      <IssueHeader>
        <nav>
          <span onClick={() => navigate(-1)}>
            <img src={iconBack} alt="" />
            Voltar
          </span>
          <a href={issue.html_url} rel="noreferrer" target="_blank">
            Ver no github <img src={iconGo} alt="" />
          </a>
        </nav>
        <h1>{issue.title}</h1>
        <IssueInfo>
          <span>
            <img src={iconGithub} alt="" />
            {issue.user.login}
          </span>
          <span>
            <img src={iconCalendar} alt="" />
            {formatDistanceToNow(
              issue.created_at ? new Date(issue.created_at) : new Date(),
              {
                addSuffix: true,
                locale: ptBR,
              }
            )}
          </span>
          <span>
            <img src={iconComment} alt="" />
            {issue.comments} comentários
          </span>
        </IssueInfo>
      </IssueHeader>

      <IssueContent>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </IssueContent>
    </IssueContainer>
  );
}
