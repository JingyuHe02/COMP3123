import React, { useContext } from 'react'
import EmployeeContext from '../context/EmployeeContext'
import UserContext from '../context/UserContext'
export default function EmployeeChild1() {
    const empContextValue = useContext(EmployeeContext)
    const userContextValue = useContext(UserContext)
  return (
    <div>
        <h2>Employee Child1</h2>
        <h3>Employee</h3>
        <p>First Name: {empContextValue.first_name}</p>
        <p>Last Name: {empContextValue.last_name}</p>
        <p>City: {empContextValue.city}</p>
        <p>Salary: {empContextValue.salary}</p>
        <h3>User</h3>
        <p>Name: {userContextValue.name}</p>
        <p>Role: {userContextValue.role}</p>
        <p>College: {userContextValue.college}</p>
    </div>
  )
}
