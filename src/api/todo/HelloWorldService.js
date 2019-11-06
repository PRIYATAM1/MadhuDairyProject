import axios from 'axios'
class HelloWorldService{
    executedHelloWorldService()
    {
        //console.log('Executed Hello World')
       return axios.get('http://localhost:8080/hello-world/path-variable/piku')
    }
}
export default new HelloWorldService()