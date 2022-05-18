import Author from "@classes/Author";
import { Role, getRoleFromString } from "@classes/Role";
import { useEffect } from "react";

interface FilterTeammatesProps {
    allTeammates: Author[], 
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

        const newList = allTeammates.filter((author: Author) => author.roles.includes(activeRoleFilter))
        setFilteredTeammates(newList)
    }, [activeRoleFilter, setFilteredTeammates, allTeammates]);

    return (
        <>  
            {
                roleButtonsOptions.map((role: string[], index: number) =>{
                    return (
                        <button 
                            className={activeRoleFilter == getRoleFromString(role[0]) ?  "active" : ""}
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