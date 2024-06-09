export interface Task {
  id: number;
  title: string;
  description: string;
}

export type Tasks = Task[];
export type TaskId = Task['id'];
