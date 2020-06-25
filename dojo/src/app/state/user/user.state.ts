export class UserState {
  public user: string;
  public token: string;

  constructor(user: string, token: string) {
    this.user = user;
    this.token = token;
  }
}
