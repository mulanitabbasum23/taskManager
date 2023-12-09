import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskmanagerService } from '../taskmanager.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  myForm: FormGroup;
  isFormSubmmited: boolean = false;
  constructor(private fb:FormBuilder, private taskManager:TaskmanagerService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', [Validators.required]],
      dueDate: ['', [Validators.required]]
    });
  }
  onSubmit(){
    this.isFormSubmmited = true;
    console.log(this.myForm);
    if (this.myForm.valid) {
      this.taskManager.addTask({
        title: this.myForm.value.title,
        dueDate: this.myForm.value.dueDate

      });
      this.myForm.reset();
    }
    
    
  }

}
