export interface UserReadable {
  getUsers(): string[];
}
export interface UserWritable {
  addUser(user: string): void;
}