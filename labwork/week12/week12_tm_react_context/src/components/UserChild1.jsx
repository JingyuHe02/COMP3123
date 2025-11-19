import React from "react";  
import UserContext from "../context/UserContext";
import UserChild2 from "./UserChild2";

export default function UserChild1() {
  return (
    <div>
      <h2>User Child 1 Component</h2>
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
            <UserChild2 />
    </div>
  );
}