import logo from "../assets/images/logo.svg";
import {Layout,Typography,Input} from "antd"

export const Header:React.FC = ()=>{
    return (
        <Layout.Header>
        <img src={logo} alt="" />
        <Typography.Title level={3}>react</Typography.Title>
        <Input.Search placeholder="请输入" />
      </Layout.Header>
    )
}