import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

import EmployeeContext from '../context/EmployeeContext'
import EmployeeChild1 from './EmployeeChild1'

const emp = {
    first_name: "Pritesh",
    last_name: "Patel",
    gender: "Male",
    city: "Toronto"
}

export default function UserChild2() {
  return (
    <div>
        <h2>User Child2</h2>
        <UserContext.Consumer>
           {
             (user) => {
                return (
                    <div>
                        <p>Name: {user.name}</p>
                        <p>Role: {user.role}</p>
                    </div>
                )
            }
           }
            
        </UserContext.Consumer>
        <EmployeeChild1/>
        <EmployeeContext.Provider value={ emp}>
            <EmployeeChild1/>
        </EmployeeContext.Provider>
    </div>
  )
}