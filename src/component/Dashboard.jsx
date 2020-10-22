import React from 'react';
import { Button, Layout} from 'antd';
import './css/dashboard.css';
import {AuthContext} from './../utils/authContex';
const {Content} = Layout;

function Dashboard () {
  const {signOut} = React.useContext(AuthContext);
  const [userName,setUserName] = React.useState('');

  React.useEffect(()=>{
    const name = window.localStorage.getItem('@user_name');
    setUserName(name);
    return ()=>{
      setUserName('')
    }
  },[]);

  return(
    <Layout className='centered'>
      <Content className='centered' style={{flexDirection:'column'}}>
        <h1 style={{fontSize:30, fontWeight:'bold'}}>{`Welcome ${userName}!`}</h1>
        <Button onClick={()=>signOut()} type='primary' danger style={{fontWeight:'bold'}}>Log out!</Button>
      </Content>
    </Layout>
  );
}

export default Dashboard;
