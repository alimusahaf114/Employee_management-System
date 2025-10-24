import React from "react";
import Header from "../other/Header";
import TaskListNo from "../other/TaskListNo";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({data}) => {
  return (
    <div className="p-10 bg-customGrey h-screen ">
      <Header data={data}/>
      <TaskListNo data={data} />
      <TaskList data={data}/>
    </div>
  );
};

export default EmployeeDashboard;
