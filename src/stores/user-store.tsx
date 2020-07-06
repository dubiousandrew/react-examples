import { observable } from "mobx";

export class UserStore {
  @observable
  username: string = "Andrew";
}
