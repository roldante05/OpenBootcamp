import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

const TaskListComponent = ( ) => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);


  return (
    <div>
        <div>
            Your Task:
        </div>
        {/* Aplicar un for/Map para renderizar una lista */}
    <TaskComponent task={defaultTask} />
    </div>
  )
}


export default TaskListComponent
