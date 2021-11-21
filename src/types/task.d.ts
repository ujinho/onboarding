interface TaskFields {
  userId: number;
  title: string;
  completed?: boolean;
}

interface Task extends TaskFields {
  id: number;
}
