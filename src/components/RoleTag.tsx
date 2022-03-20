import { getRoleBackgroundColor, Role } from "@classes/Author";


interface RoleTagProps{
    role: Role
}

const RoleTag = ({role}: RoleTagProps) =>{
    return(
        <div style={{display: "relative"}}>
            <div className="role-tag-div" style={{backgroundColor: getRoleBackgroundColor(role)}}>
                <span>{role}</span>
            </div>
        </div>
    )
}

export default RoleTag;