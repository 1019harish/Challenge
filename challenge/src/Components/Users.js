import React  , {useState , useEffect} from 'react'
import axios from 'axios'
import Pagination from './Pagination'
function Users() {

  const [userList, setUserList] = useState([]); //State hook for userslist
  const [count , setCount] = useState(0); //stte hook for count of user list 
  let sortedUsers = []; //to store the sorted array of users 

  
  //to get array of users from endpoint
  useEffect(() => {
   axios.get("https://6368ea6d15219b84960a2d80.mockapi.io/users")
   .then( res => {
    console.log(res.data)
    setUserList(res.data)
    setCount(res.data.length);
  })
  .catch(err => alert(`error in fetching data is ${err}`))
  }, [])
  
  //sort users on button click
  const sortUsers = () => {
    sortedUsers = [].concat(userList);
    sortedUsers.sort( (present , next) => present.name > next.name ? 1: -1)
    setUserList(sortedUsers)
    console.log(sortedUsers)
  }
  //delete user by userid
  const deleteUser = (id) => {
            const deletedUserList = userList.filter( (user) => user.id !== id)
             setCount(deletedUserList.length);
             
            setUserList(deletedUserList)
            alert('deleted the specific user')
  }

  return (
    <>
    <div>
        <button  className='btn btn-primary' onClick={sortUsers}>Sort Alphabetically</button>
        <h4>Users Count After successfully Deleting Users is :{count}</h4>
    </div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th>Remove User</th>
    </tr>
  </thead>
  <tbody> 
      {userList.map( (user , index) => {
        return <tr key={index}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.Password}</td>
        <td><span className="badge bg-danger" style={{cursor:'pointer'}} onClick={() => deleteUser(user.id)}>X</span></td>
        </tr>
        
      })}
    
     
  </tbody>
</table>
    </>
  )
}

export default Users
