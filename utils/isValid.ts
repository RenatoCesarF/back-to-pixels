

export default function isValid(value: any): boolean{
    if(!value || value === undefined || value === null){
        return false;
    }
    return true;
};