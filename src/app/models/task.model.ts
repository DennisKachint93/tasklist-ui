export class Task {
  id: number | null;
  task: string;

  constructor( id: number | null = null, task: string = '' ) {
    this.task = task;
    this.id = id;
  }
}
