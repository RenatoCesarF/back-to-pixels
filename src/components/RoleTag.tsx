

interface RoleTagProps{
    role: string
}

const RoleTag = ({role}: RoleTagProps) =>{
    return(
        <div style={{display: "relative"}}>
            <div className="role-tag-div">
                <span>{role}</span>
            </div>
        </div>
    )
}

export default RoleTag;