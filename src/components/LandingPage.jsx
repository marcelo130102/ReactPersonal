import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";
import { MoviesGrid } from "./MoviesGrid";
import { Search } from "./Search";

export function LandingPage(){
    const query = useQuery();
    const search = query.get("search");
    const debounceSearch = useDebounce(search, 300);
    return <div>
        <Search/>
        <MoviesGrid key={debounceSearch} search={debounceSearch}/>
    </div>
}