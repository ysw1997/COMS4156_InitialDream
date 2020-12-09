import React, {Component} from 'react';
import "./file.css";

class FetchUpload extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            //msg: "Please select a file!",
            username : '',
        
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    upload = () => {
        const data = new FormData();
        
        
        data.append("file", this.fileInput.current.files[0]);
        // data.append("abc","abcc");
        fetch('/ocr/test', {
            method: 'POST',
            body: data
        }).then (response => response.json())
       // .then(e => this.setState({ msg: e.msg }));
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    
    
    
        
        onChange(e) {//把当前修改的值赋入state
            this.setState({
                [e.target.name]:e.target.value
            })
        }

onSubmit(e) {
    e.preventDefault();
    const post = {          
        username:this.state.username,
}


        fetch('ocr/test',{
            // post提交
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
        })
        
    }




    // submitXML(){
    //     //var fileInput = ('#reportXML').get(0).files[0];
    //     const data = upload.data;
    //     console.info(data);
    //     if(data){
    //         ("reportXMLform").submit();
    //     }else{
    //         alert("请选择上传文件！");
    //     }
    // }

    render() {
        //const { msg } = this.state;
        return (
            
    
            <div>
                <h3 align = "center" > <input   className ="file" type='file' name='file' ref={this.fileInput}/></h3>
      
                <h3 align = "center" >  <input className ="file" type='button' value='Upload' onClick={this.upload}/></h3>


                <form onSubmit={this.onSubmit.bind(this)}>
                <span className="kv-label">
            <h2 align="center">   <label className="text" >username：</label></h2>
            </span>
    
    
            <h3 align="center">   
            <input type="text" name="username" align = "center" className="tsl" placeholder="*Must fill it" autoFocus size="25" onChange={this.onChange.bind(this)} defaultValue={this.state.username}/></h3>
               {/* Msg: {msg} */}

            
            <button type="submit" className= "sbu"  value="Submit">Submit</button> 
            </form>
           
            </div>
            
              
           
        )
    }}

export default FetchUpload;

