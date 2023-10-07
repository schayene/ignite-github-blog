import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./style";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { IssuesContext } from "../../../../contexts/IssuesContext";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const { issues, fetchIssues } = useContext(IssuesContext);

  function handleSearchIssues(data: SearchFormInputs) {
    fetchIssues(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <header>
        <h2>Publicações</h2>
        <span>{issues.length} publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchFormContainer>
  );
}
