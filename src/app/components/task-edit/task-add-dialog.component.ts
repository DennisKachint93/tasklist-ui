import {Component} from '@angular/core';
import {Task} from '../../models/task.model';
import {TaskService} from '../../services/task-service';
import {MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add-dialog.component.html',
  styleUrls: ['./task-add-dialog.component.css']
})
export class TaskAddDialogComponent {

  /**
   * TODO:
   *  (1) When user clicks add, disable button + disable input box
   *  (2) When request completes on success, close dialog
   *  (3) When request completes on failure, display error in dialog & re-enable everything
   *
   */

  task: Task | undefined;
  id: number | null = null;
  note = '';
  taskInFlight = false;


  constructor(private service: TaskService,
              public dialogRef: MatDialogRef<TaskAddDialogComponent>,
              private snackBar: MatSnackBar) {
  }
  addTask(): void {
    this.taskInFlight = true;
    this.service.add(this.note).subscribe(
      value => {
        this.dialogRef.close();
      },
      error => {
        this.snackBar.open('Adding task failed! Go procrastinate!');
        this.taskInFlight = false;
      }
    );



  }
}
