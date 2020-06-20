import React from 'react';
import { List, Avatar } from 'antd';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

/*const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];*/
  
  export class ChatWindow extends React.PureComponent {
    constructor(props: {}, style: {}) {
       super(props);

    }
    
    render() {
       return (
        <div>
            {
              [{from: 'user', msg: 'hi'}].map((chat, i)=>(
                  <div className="chatWindow" key ={i}>
                      <Typography>
                          {chat.from}
                      </Typography>
                      <Chip label={chat.msg} />
                  </div>
              ))
            }
            
        </div>
       );
    }
 }

 /*style={{position: 'absolute', top: 20, right: 20}} */

 export default ChatWindow;

 /*<List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
                )}
            />*/