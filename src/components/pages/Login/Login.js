import React,{useState} from 'react'
import { Carousel, Card, Input, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import {useNavigate} from 'react-router-dom'

const contentStyle = {
    height: '700px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () =>{
        if(name === "admin" && password === "admin"){
            navigate('/home')
        }else{
            window.alert("Invalid Credentials")
        }
    }
    return (
        <div style={{ flexDirection: "row", display: "flex" }}>
            <div style={{ width: "50%", height: "500px" }}>
                <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>
            <div style={{alignItems:"center", display:"flex", width:"50%", justifyContent:"center", backgroundColor:"antiquewhite", height:"700px", marginTop:"15px"}}>
            <div className="site-card-border-less-wrapper">
                <Card
                    title="Login Into Name"
                    bordered={false}
                    style={{
                        width: 450,
                    }}
                >
                     <Input size="large" placeholder="Username" prefix={<UserOutlined />} onChange={(e)=>{setName(e.target.value)}}/>
                     
                     <Input size="large" placeholder="Password" prefix={<UserOutlined />} style={{marginTop:"20px"}} type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                     <p style={{textAlign:"end", marginTop:"-1px"}}>Forget password?</p>
                     <Button type="primary" style={{marginLeft:"40%", marginTop:"80px", background:"red"}} onClick={handleLogin}>Login</Button>

                     <p style={{textAlign:"center"}}>Don't have account? <span style={{color:"orange"}}>signup</span></p>
                </Card>
            </div>
            </div>
        </div>
    )
}
