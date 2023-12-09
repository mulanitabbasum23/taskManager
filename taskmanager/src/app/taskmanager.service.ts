import { Injectable } from '@angular/core';
import { TaskModule } from './task/task.module';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskmanagerService {
 tasks: any[] = [];
 tasksSubject = new BehaviorSubject<any[]>(this.tasks);

  constructor() { }

  getTask():Observable<any>{
    return this.tasksSubject;
  }
  addTask(task: any) {
    this.tasks.push(task);
    this.updateTasks();
  }
  updateTasks() {
    this.tasksSubject.next([...this.tasks]);
  }
}
