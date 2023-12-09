import { Component, OnInit } from '@angular/core';
import { TaskmanagerService } from '../taskmanager.service';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  tasks: any[] = [];
  constructor(private taskService:TaskmanagerService) { }

  ngOnInit() {
    this.taskService.getTask().subscribe((tasks) => {
      this.tasks = tasks;
    })
  }

  
}
