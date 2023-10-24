import React from "react";
import "./pageRight.css";
import TextInput from "../widget/textInput";
import axios from "axios";

const data = [
  { "name": "Email", "label": "Email", "value": "", "icon": "" },
  { "name": "Password", "label": "Password", "value": "", "icon": "" },
]

export default class PageRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.submit = this.submit.bind(this);
    this.getData = this.getData.bind(this);
  }
  inputHandler(params) {
    // console.log(params);
  }


  async getData() {
    // 这里的数据获取方式应该优化下,索引可能不存在
    let name = this.state.data.filter((e) => e.name === 'Email')[0]?.value;
    let password = this.state.data.filter((e) => e.name === 'Password')[0]?.value;
    let data = { 'name': name, 'password': password }
    try {
      const res = await axios.post('https://clare1.ngrok.io/api/v1/login', data);
      this.gotoHome(res.data.msg);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  async gotoHome(token) {
    try {
      const res = await axios.get(`https://clare1.ngrok.io/api/v1/welcome/${token}`);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  submit() {
    console.log(this.state.data);
  }
  render() {
    return (
      <div className="page_right_box">
        <div>Logo</div>
        <div>
          {
            this.state.data.map((item, index) => {
              return <TextInput key={index} item={item} onChange={(item) => {
                this.inputHandler(item);
                console.log(item);
              }} />
            })
          }
        </div>
        <div>
          <div>
            <input type="checkbox" onChange={(e) => {
              console.log(e);
            }} />
            <span>Remember me</span>
          </div>
          <div>
            <span>Forgot password?</span>
          </div>

        </div>
        <div>
          <button onClick={this.getData}>Login</button>
        </div>
      </div>);
  }
}

