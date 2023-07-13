interface Todo {
  title: string;
  description: string | null;
  attachment?: string;
  completed: boolean;
}

const todos: Todo[] = [];

// Partial
type PartialTodo = Partial<Todo>;

// Required
type RequiredTodo = Required<Todo>;

// Readonly
declare const t: Readonly<Todo>;
t.attachment;
t.attachment = "hello"; // Error: Cannot assign to 'attachment' because it is a read-only property.

// Instead of:
const todoByTitleObject: { [key: string]: Todo } = {};
// use Record:
const todoByTitleRecord: Record<string, Todo> = {};

const todoByTitle: Record<string, Todo> = {};
for (const todo of todos) {
  todoByTitle[todo.title] = todo;
}
const blahTodo = todoByTitle.blah;
blahTodo.description;
todoByTitle["blah"].title;

type UserType = "student" | "district_admin" | "school_admin";
const humanReadibleDisplayNames: { [userType: UserType]: string } = {
  student: "Student",
  district_admin: "District Admin",
};

// Pick
type TodoPreview = Pick<Todo, "title" | "completed">;

// Omit
type TodoHeader = Omit<Todo, "attachment" | "completed">;

// NonNullable
type R = NonNullable<string | boolean | null | undefined>;
