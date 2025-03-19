import { useSearchParams } from "react-router";

export default function Search() {
  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get('query');
  
  return <div>Search</div>;
}
