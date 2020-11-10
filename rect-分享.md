###  React前端知识分享

#### 主要内容：

   一、react简介

   二、前置知识

   三、本地搭建一个React demo

   四、React主要核心概念

   五、前端项目需要掌握哪些知识

​      

#### 一、react简介

##### 1、起源

​     React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就自己写了一套，效果不错。于2013开源，到目前为止在不断的进行优化与完善。

##### 2、定义

​       用于构建用户界面的JavaScript框架 .它遵循组件设计模式、声明式编程范式和函数式编程概念，以使前端应用程序更高效。它使用虚拟DOM来有效地操作DOM。它遵循从高阶组件到低阶组件的单向数据流。

##### 3、React特点

1. 声明式设计：声明范式
2. 高效：使用VDOM，减少DOM的交互
3. 灵活：与已知的库或框架完好配合
4. JSX：一种独立的语言，试图解决很多JS的缺陷，ES6包含了几乎所有JSX的特性
5. 组件：代码复用
6. 单向响应数据流：比双向绑定更简单，更快。

 ##### 4、为什么用

​      传统方法频繁操作DOM，性能无法达到要求；React使用VDOM和diff算法来更新DOM，性能高；

​      传统JS代码维护成本高，React基于组件开发.

#### 二、前置知识

​        1、ES6的入门知识

​             https://es6.ruanyifeng.com/

​       2、ES6总结的知识点

​             https://github.com/SimplyWenjing/ES6

#### 三、如何在本地搭建一个demo

​    demo链接：https://github.com/oumiga1314/react-demo

1、按照Node.js

​        下载地址：https://nodejs.org/zh-cn/

​        安装链接：https://www.runoob.com/nodejs/nodejs-install-setup.html

2、使用命令创建一个react demo

```
npx create-react-app my-app
```

3、用编辑工具打开（idea,vsCode)   src/index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
  <div>hello word this is who write</div>,
  document.getElementById('root')
);

```

4、运行

npm start



![image-20201108131219918](React.assets/image-20201108131219918.png)

**另外的方式：**直接使用链接的方式

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>菜鸟教程 React 实例</title>
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
</head>
<body>

<div id="example"></div>
<script type="text/babel">
function HelloMessage(props) {
	return <h1>Hello World!</h1>;
}

const element = <HelloMessage />;

ReactDOM.render(
	element,
	document.getElementById('example')
);
</script>

</body>
</html>
```



#### 四、react的一些核心概念

##### 1、JSX是啥

​        是一个 JavaScript 的语法扩展。JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能。

​     **当遇到<，JSX就当HTML解析，遇到{就当JavaScript解析**



##### 2、元素渲染

​      1、什么是元素（屏幕上你看到的东西）

​       const element = <h1>Hello, world</h1>;

​      2、如何将一个元素渲染成DOM

​           1、有一个DOM根节点

```html
        <div id="root"></div>
```

​           2、有一个元素

```js
   const element = <h1>Hello, world</h1>;
```



​          3、有一个render方法

```js
   const element = <h1>Hello, world</h1>;
   ReactDOM.render(element, document.getElementById('root'));
```



​          4、如何更新

​               ReactDOM.render()可以更新 一个节点下的元素



##### 3、组件与props

​     1、什么是组件     

​      类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。

​     2、如何定义组件

​      通过函数定义

```js
function Test(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

​    通过ES6语法来定义

  ```js
class Test extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
  ```

   3、如何渲染组件

 ```js
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
 ```

  ##### props

   1、什么是props？

​     单向数据流传递的媒介

  2、作用：组件之间进行通信

  3、特点

​       1、组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props

​       2、props的赋值在与提供给外部组件使用  

  4、如何使用props

```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Son extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class Father extends Component {
  render() {
    return (
        <Son name='Rexxar' />
      
    );
  }
}
```



##### 4、State & 生命周期

##### state

​    1、什么是state？

​          管理组件内部状态的一种媒介          

​    2、作用   

​      用于组件内部的状态维护，更新组建内部的数据，状态，更新子组件的props等

​     3、特点

​       state的赋值在于组件内部

​       state存在的目的就是让组件来修改的

​     4、如何使用 

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

 //如何赋值
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```



##### 生命周期

1、什么是React生命周期？

react组件从加载到卸载的过程。一般讲其分为挂载、渲染、卸载三个阶段。

2、生命周期图

![img](https://img2020.cnblogs.com/blog/480452/202003/480452-20200304192602004-1059457791.png)





生命周期图官网地址：https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/



3、如果存在组件嵌套，组件的生命周期执行顺序是什么样子的？

![img](https://images2018.cnblogs.com/blog/1414709/201808/1414709-20180830111612245-37028468.png)

##### 3、react生命周期总结

   从执行次数可以分为：

只执行一次： constructor、componentWillMount、componentDidMount 

执行多次：render 、子组件的componentWillReceiveProps、componentWillUpdate、componentDidUpdate 

有条件的执行：componentWillUnmount（页面离开，组件销毁时） 

不执行的：根组件（ReactDOM.render在DOM上的组件）的componentWillReceiveProps（因为压根没有父组件给传递props）



##### 5、事件处理

1、什么是事件

​    在某种条件下触发某种动作

2、react中的事件处理的使用

```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 为了在回调中使用 `this`，这个绑定是必不可少的,如果使用箭头函数就不需要这行绑定
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
    
    //使用箭头函数
    handleClick=()=> {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }


  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

3、事件如何传递参数

```js
button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```



##### 6、条件渲染

1、什么是条件渲染

根据条件运算符去创建元素，然后让 React 更新 UI。

##### 7、其他

列表 & Key

表单

状态提升

组合 vs 继承

##### 8、一个demo来总结刚刚学习的知识

demo的链接地址：https://github.com/oumiga1314/react-demo-props

1、实现的界面

![image-20201110101746795](React.assets/image-20201110101746795.png)

2、主要问题

  1、父组件怎么传值给子组件

  2、组件如何管理自己的状态及更新状态

  3、使用一个生命周期钩子函数



3、实现代码

 ```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Test extends Component{
  constructor(props){
    super(props)
    console.log("this.props====",this.props)
    this.state = {
      department: '',
      input: ''
    }
  }
   
  componentDidMount(){
    const {dept} = this.props
    let x = []
    dept.map((v,k)=>
      // console.log("v=====",v)
        x.push(v)
    )

    this.setState({
      department: x
    })
  }

  handleAdd=(e)=>{
    console.log("e=====",e.target.value)
    this.setState({
      input :e.target.value
    })
  };

  addDempartment=()=>{
    let x = this.state.department
    x.push(this.state.input)
    Object.keys(x).map((k)=>
    console.log(x[k]))
    this.setState({
      department:x,
      input: ''
    })
  }

  render() {
    
      const {department,input} = this.state
      const listItems = Object.keys(department).map((dept)=>
                  <div >
                   <li>{this.state.department[dept]}</li>
                  </div>
      )
    return(

    <div  style ={{marginTop: '100px',marginLeft:'40%'}}> 
       <input type='text' placeholder ='添加部门' onChange ={this.handleAdd} value = {this.state.input}/> 
        <button onClick = {this.addDempartment}  style ={{background:'#F0FFFF'}}>添加</button><br></br><br></br>
       <span style ={{fontWeight: 'bolder'}}>公司部门</span>
       <ol style={{marginLeft: '20px'}}>{listItems}</ol>
    </div>
    )  
  }
}

const dept = ['平台中心','研发部']
ReactDOM.render(<Test dept={dept}/>,document.getElementById('root'))

 ```



##### 五 一个前端项目还需要掌握的知识

​    1、mobx 

​      通过透明的函数响应式编程，使得状态管理变得简单和可扩展。

​    2、webpack

​      *webpack* JavaScript 应用程序的*静态模块打包器(module bundler)*

   3、antd

​     是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品

   4、css的一些基本知识

   5、掌握基本的ES6语法
