import logo from './logo.svg';
import './App.less';
import { Layout, Image, Button } from 'antd';

function App() {
  return (
    <div className="App" style={{
      width: "100%",
      backgroundColor: "blue",
      flexDirection: "column"
    }}>
      <div style={{
        width: "100%",
        height: "80px",
        backgroundColor: "yellow"
      }}> 
        标题内容
      </div>
      <div style={{
        width: "100%",
        height: "820px",
        flexDirection: "row"
      }}>
        <div display={"d"}> 
          输入内容
        </div>

        <div> 
          结果展示部分
        </div>
      </div>
    </div>
  );
}

export default App;
