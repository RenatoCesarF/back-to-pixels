import Author, {Role, roleFromString} from "@classes/Author";
import { useEffect } from "react";

interface FilterTeammatesProps {
    allTeammates: Array<Author>, 
    activeRoleFilter: Role, 
    setFilteredTeammates: Function, 
    setActiveRoleFilter: Function
}

const FilterTeammates = ({allTeammates, setFilteredTeammates, activeRoleFilter, setActiveRoleFilter}: FilterTeammatesProps) =>{
    const roleButtonsOptions = Object.entries(Role);
    useEffect(() => {
        if(activeRoleFilter === Role.Everyone){
            setFilteredTeammates(allTeammates)
            return;
        }

        const filteredTeammates = allTeammates.filter((author: Author) => author.roles.includes(activeRoleFilter))
        setFilteredTeammates(filteredTeammates)
    }, [activeRoleFilter]);

    return (
        <>  
            {
                roleButtonsOptions.map((role: Array<string>, index: number) =>{
                    return (
                        <button 
                            className={activeRoleFilter == roleFromString(role[0]) ?  "active" : ""}
                            onClick={()=> setActiveRoleFilter(role[0])}
                            key={index}
                            name={`filter by ${role} button`} 
                        >
                            {role[0]}{role[0] != Role.Everyone? "s" : ""}
                        </button>
                    );
                })
            }
        </>
    )
}

export default FilterTeammates;