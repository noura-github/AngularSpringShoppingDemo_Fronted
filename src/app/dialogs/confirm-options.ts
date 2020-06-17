export class ConfirmOptions {

    title:string;
    left_message:string;
    content:string;
    right_message:string;
    right_message_warning:string;
    
    constructor(title="", left_message="", content="",
        right_message="",
        right_message_warning=""){
        
            this.title = title;
            this.left_message= left_message;
            this.content = content
            this.right_message = right_message
            this.right_message_warning = right_message_warning
    }

}
