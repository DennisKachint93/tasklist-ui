import {Task} from '../../models/task.model';
import {TaskService} from '../../services/task-service';
import {Component} from '@angular/core';
import {TaskAddDialogComponent} from '../task-edit/task-add-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})

export class TaskViewComponent {
  displayedColumns: string[] = ['number', 'note', 'delete'];
  tasks: Task[] = [];

  constructor(private service: TaskService, public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.getAllTasks();
  }

  getAllTasks(): void {
    this.service.getAll().subscribe( newTasks => this.tasks = newTasks);
  }

  deleteTask(id: number): void {
    this.service.delete(id).subscribe(
      (data) => this.getAllTasks(),
      (error) => this.snackBar.open('Deleting task failed! Go procrastinate!')
    );
  }

  openCreate(): void {
    const dialogRef = this.dialog.open(TaskAddDialogComponent, {
      width: '250px'
    });
    dialogRef.afterClosed()
      .subscribe(() => { this.getAllTasks(); });
  }
}
