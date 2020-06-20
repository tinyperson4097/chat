import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'antd';
import './Chatbox.css';
import send from './send.svg';
import { Form } from 'antd';
import Typography from '@material-ui/core/Typography';
import Message from './Message';
import moment from 'moment';

let now = moment().format('LT');

export class Chatbox extends React.PureComponent<{}, IState> {
    constructor(props: {}, style: {}) {
       super(props);
        this.state = {
            currentText: '',
            texts: [
                new Message({
                    timestamp:'',
                    timest: moment().format('LT'),
                    sender:'Brian',
                    text:'hi',
                    userId: '1',
                    isYourself: false
                })
            ]
        };
        
    }

    public handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        this.setState({
            currentText: "",
            texts: [
                ...this.state.texts,
                new Message({
                    timestamp: this._timeInMilliseconds(),
                    timest: moment().format('LT'),
                    sender:'Felicia',
                    text:this.state.currentText,
                    userId: 'tinyperson',
                    isYourself: true
                })
            ]
        })
    }

    public receiveMessage(received: Message) {
        this.setState({
            currentText: '',
            texts: [
                ...this.state.texts,
                new Message({
                    timestamp: this._timeInMilliseconds(),
                    timest: moment().format('LT'),
                    sender: received.sender,
                    text: received.text,
                    userId: received.userId,
                    isYourself: false
                })
            ]
        })
    }

    public deleteText(timestamp: string): void {
        const filteredText: Array<Message> = this.state.texts.filter((msg: Message) => msg.timestamp !== timestamp);
        this.setState({texts: filteredText});
    }

    public renderTexts(): JSX.Element[] {
        return this.state.texts.map((msg: Message) => {
            return (
                <div key={msg.timestamp} className={`${msg.isYourself ? "alignMsgR": "alignMsgL"}`}>
                    <p className="sender">{msg.sender}</p>
                        <div className={`${msg.isYourself ? "speech-bubbleR": "speech-bubble"}`}>{msg.text}</div>
                        {/* 
                        <button className="dots" onClick={() => this.deleteText(msg.timestamp)}>...
                        </button>*/}
                        <p className="sender">{msg.timest}</p>
                </div>
            )
        })
    }

    

    public render(): JSX.Element {

       return (
        <div className="box">
            <div className="chatwindow"> 
                <div>{ this.renderTexts() }</div>
            </div>
            <form onSubmit={(e) => this.handleSubmit(e)} className="footer">
                <Input className='typeM' 
                    placeholder="Type your message..." 
                    value={this.state.currentText}
                    onChange={e => this.setState({currentText: e.target.value})}
                    />
                <button className='btn'>
                    <img src={send} className='logo'/>
                </button>
            </form>
        </div>
       );
    }

    public componentDidMount(){
        setTimeout(() => {
            this.receiveMessage(
                new Message({
                    timestamp:'',
                    timest: moment().format('LT'),
                    sender:'Brian',
                    text:'hi',
                    userId: '1',
                    isYourself: false
                })
            );
        }, 5000 )
    }

    private _timeInMilliseconds(): number {
        const date: Date = new Date();
        return date.getTime();
    }

 }

 interface IState {
     currentText: string;
     texts: Array<Message>;
 }

 
 /*style={{position: 'absolute', top: 20, right: 20}} 
 Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>*/

 export default Chatbox;