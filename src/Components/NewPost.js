import axios from './service/Service';
import React,{Component} from 'react';
class NewPost extends Component{
    state={
        name:null,
        Department:null,
        Course:null,
        Course_id:null
    }
   

    render(){
        const submitHandler =(event)=>{
            event.preventDefault();
            const data={
                name:this.state.name,
                Department:this.state.Department,
                Course:this.state.Course,
                Course_id:this.state.Course_id,
            }
            console.log(data)
            axios.post('/student',data).then(response =>{console.log(response); window.location.href = "/success"})
            .catch(error=> console.log(error))

        }
        return(
        <div className="container"> 
        <h1>Online Course Registration</h1>
        <hr/>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="Title">Student Name</label>
                    <input  className="form-control"
                    type="text" name="name" id="Title"
                    placeholder="Enter your Name" required onChange={(event)=>{this.setState({name:event.target.value})}}/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="Author">Department</label>
                    <input  className="form-control"
                    type="text" name="Department" id="Author"
                    placeholder="Enter the Department" required onChange={(event)=>{this.setState({Department:event.target.value})}}/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="Author">Course</label>
                    <input  className="form-control"
                    type="text" name="Course" id="Author"
                    placeholder="Enter the Course" required onChange={(event)=>{this.setState({Course:event.target.value})}}/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="Author">Course ID</label>
                    <input  className="form-control"
                    type="text" name="Course_id" id="Author"
                    placeholder= "Enter the Course"  required onChange={(event)=>{this.setState({Course_id:event.target.value})}}/>
                </div>
                <br/>
                <div>
                <button className='btn btn-primary'>Submit</button>
                </div>
            <div className="form-group">
            </div>
            </form>
            <hr/>
        </div>)
    }
}
export default NewPost;