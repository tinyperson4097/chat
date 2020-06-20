
export default class Message {
    public text?: string;
    public sender?: string;
    public userId?: string;
    public timestamp: string;
    public isYourself?: boolean;
    public timest: string;

    constructor(o: any){
        this.text=o.text;
        this.sender=o.sender;
        this.userId=o.userId;
        this.timestamp=o.timestamp;
        this.isYourself=o.isYourself;
        this.timest=o.timest;
    }
}