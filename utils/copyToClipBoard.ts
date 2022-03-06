import { toast } from "react-hot-toast";

const copyToClipboard = (text: string) =>{
    if (!navigator.clipboard) {
        return;
    }
    navigator.clipboard.writeText(text).then(()=> {
        toast('Copied',{icon: "✔️", duration: 2000,  style:{
            background: "#4B81AB", color: "white"
        }});
    }, (err) => {
        toast('Unable to Copy, Try Again',{icon: "❌"});
        console.error('Async: Could not copy text: ', err);
    });
}

export default copyToClipboard;