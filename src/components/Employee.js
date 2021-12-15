import { useState } from "react"
import { Link } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"
import employeeServices from "../services/employeeServices"


const Employee = () =>{
    const[employees, setEmployees] = useState([])

    useEffect(
        () => {
            refreshTable();
        }
    )

    const refreshTable = () =>{
        employeeServices.getEmployees() //promise
            .then(
                response => {
                    setEmployees(response.data)
                }            
            )
            .catch(
                error => {
                    console.log("sorry mima")
                }
            )
    }

    const deleteEmployee = (employeeId) =>{
        let confirm = window.confirm("Click Ok if men are trash");
        if(confirm){
            employeeServices.deleteEmployee(employeeId)
        .then(
            response =>{
                console.log("Successfully deleted!!")
                refreshTable();
            }
        )
        .catch(
            error =>{
                console.error("Walang perfect sa mundo, ayos lang yan", error)
            }
        )
        }       
    }
  return(
      <div className="container"> 
          <h3> List of Employees</h3>
          <div>
              <table class="table table-hover table-light table-striped">
                  <thead>
                  <tr className="table-danger">                               
                    <td>Name</td>
                    <td>Location</td>
                    <td>Department</td>
                    <td>Action</td>
                  </tr>
                      </thead>
                  <tbody> 
                  {
                      employees.map(
                          employee =>(
                            <tr key={employee.employeeId}>
                                <td>{employee.main}</td>
                                <td>{employee.location}</td>
                                <td>{employee.department}</td>
                                <td>
                                    <div className="d-grid gap-2 d-flex justify-content-center">
                                    <Link className="btn btn-outline-dark" to={`/edit/${employee.employeeId}`}>Update</Link>                              
                                    <button className="btn btn-dark" onClick={() => deleteEmployee(employee.employeeId)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                          )                                   
                      )
                  }
                  </tbody>               
              </table>
          </div>
      </div>
  )
}

export default Employee