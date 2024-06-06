import React, { Component } from 'react'
import Child from './components/Child'

interface Props{

}

interface State{
  name:string
  age:number
  count:number
  isActive:boolean
}

export default class App extends Component<Props, State> {

  constructor(props:Props){
    super(props)
    this.state = {
      name:"minh thu",
      age:22,
      count:0,
      isActive:true
    }
  }

  componentWillMount(): void {//hàm này sẽ chạy trước rồi mới đến didmount
    console.log("componentdidmount");
    
  }

  componentDidMount(): void {
    console.log("componentwillmount");
    //chạy sau khi component render chạy lần đầu tiên
    //các thành phần của component được gán vào dom
    //có thể thực hiện tương tác với dom
    //nơi lý tưởng để callAPI lấy data render ra component
    
  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    console.log("1111");
    
    return true
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    console.log("phương thức componentDidUpdate được gọi");
    //chạy sau khi component re-render
    //nó được gắn kết vào dom cho nên có thể dùng để tương tác với dom
  }

  componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
    console.log("phương thức componentWillUpdate được gọi");
    //chạy trước re-render nên cũng có thể để tính toán lại state hoặc props
    
  }

  componentWillUnmount(): void {
    console.log("phương thức componentWillUnmount chạy");
    //thường chạy trước render cho nên có thể tính toán lại props, state nhưng nên lưu ý thời gian mà chuyển sang render nhanh
    //chạy cuối cùng khi phần tử xóa khỏi dom
    //nên nó thường được dùng để clear time-out xóa toàn bộ nhớ
  }

  //phương thức thay đổi state khi muốn thay đổi component thì dùng this.setState
  handleClick = ()=>{
    this.setState({count:this.state.count+1})
  }

  handleRemove = ()=>{
    this.setState({
      isActive:!this.state.isActive
    })
  }
  render() {

    console.log("component re-render");
    //component nó re-render liên tục ==> chạy vô hạn
    return (
      <div>App

        {this.state.name}
        {/*
          lifecycle(vòng đời của 1 component ==> chỉ áp dụng với class trải qua 4 giai đoạn
            1/ giai đoạn khởi tạo
              khởi tạo props, state
            2/ giai đoạn mounting (gán thêm vào)
              cung cấp có sẵn
              sau khi khởi tạo xong thì tiếp đến chạy vào phương thức componentWillMount()==> component render ==> componentDidMount
            3/ giai đoạn update (thay đổi)
              xảy ra khi props hoặc state thay đổi thì chạy vào giai đoạn update
              cung cấp các phương thức
              1.ShouldcomponentUpdate bắt buộc phải return true hoặc false
              nếu không kai báo mặc định là true
              2.componentWillupdate
              3.componentDidupdate
            4/ giai đoạn unmounting (gỡ bỏ xóa bỏ)


            1. function khi cập nhật lại state
              khi setState: replace (thay đổi)
            2. class khi cập nhật state
              setState: merge(gộp)
            **************
            -props không thể thay đổi trong component con
            -lifecycle có 4 giai đoạn
            +1.initial
            +2.mounting
            +3.update
            +4.unmount  

            -state là dùng để lưu trữ thông tin có thể thay đổi trong quá trình sử dụng
            -Reactjs dùng Dom ảo virtual DOM
            -Reactjs có hỗ trợ SSR:Nextjs
            -Reactjs ràng buộc dữ liệu 1 chiều: oneway data biding
            -SPA: ứng dụng trang đơn
            MPA:ứng dụng nhiều trang khi truy cập trang vào sẽ load dữ liệu trang đó: tối ưu cho SEO (tối ưu công cụ tìm kiếm)

            trong web có nhiều component cài thêm thư viện react router dom để quản lý các router
            Reactjs dùng thư viện babel để biên dịch code js thành jsx
            Destruturing là cách truy cập thược tính của một đới tượng hoặc một phần tử trong array 1 cách dễ dàng
          ) 
       */}
        {this.state.isActive ? <Child></Child>: ""}
        <button onClick={this.handleRemove}>clickRemove</button>
        <p> giá thí count {this.state.count}</p>
       <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}
