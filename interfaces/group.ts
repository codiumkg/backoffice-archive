import { ISubject } from "./subject";

export interface IGroup {
  id: number;
  title: string;
  subjectId: number;
  subject: ISubject;
}
