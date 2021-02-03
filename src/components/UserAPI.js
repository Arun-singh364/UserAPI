import React, { Component } from 'react'
import axios from "axios";
import "./UserAPI.css"


class UserAPI extends Component {

constructor(props) {
    super(props)

    this.state = {
         users:[],
         rows:0
    }
    this.onClickHandler=this.onClickHandler.bind(this);
}
componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        this.setState({
            users:response.data
        })
    })
    .catch(error=>{
        console.log(error);
    });
}

onClickHandler(){
    this.setState(    {
   rows:this.state.rows+1
    });
}

    render() {
        const {users,rows}=this.state
         return (
            <div>
                 <h1 id ="title">List of Users</h1>
                 <hr/>
              { <table id="users">
                  <tr>
                     <th>Id</th>
                     <th>Name</th>
                     <th>User Name</th>
                     <th>Email</th>
                     <th>Street</th>
                     <th>City</th>
                     <th>Zipcode</th>
                     <th>Lng</th>
                     <th>Phone</th>
                     <th>Website</th>
                     <th>Company Name</th>
                  </tr>
                     
                  {users.length?users.slice(0,rows+1 ).map(user=>
                  <tr key={user.id}>
                    <td>{user.id}</td> 
                    <td>{user.name}</td> 
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address.street}</td>
                    <td>{user.address.city}</td>
                    <td>{user.address.zipcode}</td>
                    <td>{user.address.geo.lng}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.company.name}</td>
                  </tr>
                       ):null}
              </table> }

             <button type="button" onClick={this.onClickHandler}>Show More..</button>
          </div>
        )
    }
}

export default UserAPI