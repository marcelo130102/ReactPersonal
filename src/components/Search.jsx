import styles from "../css/Search.module.css"
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search(){
    const query = useQuery();
    const search = query.get("search");
    let navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return(<form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
            <input 
                className={styles.searchInput}
                type="text" 
                value={search ?? ""} 
                onChange={(e)=>{
                    const search = e.target.value.toLowerCase();
                    navigate("/?search=" + search);
                }} 
                aria-label="Search Movies"
                placeholder="Title" 
                required/>

            <FaSearch size={20} color = "black" className={styles.searchButton} />

        </div>
    </form>
    )
}