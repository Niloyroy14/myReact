
export default function Text({ addEmoji }) {
    
    let text = "I am javaScript Language";

    return (
        <div> 
            {addEmoji ? addEmoji(text,'$'):text}
        </div>
    
    );
    
}