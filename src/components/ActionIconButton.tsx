import {FiInstagram,FiTwitter,FiCopy, FiShare} from 'react-icons/fi'
export enum ActionButtonIcon {
    Instagram = 0,
    Twitter = 1,
    Copy = 2,
    Share = 3
}

interface ActionIconButtonProps{
    icon: ActionButtonIcon,
    onClick: Function,
}

const divSize:string = "28px";
const iconSize:number = 20;
const iconColor:string = "white";

const ActionIconButton: React.FC<ActionIconButtonProps> = (props:ActionIconButtonProps) => {
    return(
        <div 
            onClick={() => props.onClick()}
            className="action-button-div" 
            style={{ height: divSize, width: divSize, padding: "5px"}}>
            {getActionIcon(props.icon)}
        </div>
    );
}

const getActionIcon = (iconEnum: ActionButtonIcon) =>{
    switch (iconEnum) {
        case 0:
            return <FiInstagram size={iconSize} color={iconColor}/>;
        case 1:
            return <div style={{marginLeft: "1px", marginTop: "5px"}}> <FiTwitter size={iconSize} color={iconColor}/> </div>;
        case 2:
            return <FiCopy size={iconSize} color={iconColor}/>;
        case 3:
            return <FiShare size={iconSize} color={iconColor}/>;
    }
}


export default ActionIconButton;