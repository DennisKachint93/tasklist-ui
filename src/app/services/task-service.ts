import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Task} from '../models/task.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];
  private url = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) {
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id);
  }

  get(id: number): Observable<Task | null> {
    return this.http.get<Task>(this.url + '/' + id);
  }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  add(note: string): Observable<any> {
    return this.http.post<any>(this.url, new Task(null, note));
  }
}
