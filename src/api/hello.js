import instance from "./request";

const sayHello =()=>{
    return  instance({
        url:"/hello",
        method:"GET",
    })
}


export default sayHello