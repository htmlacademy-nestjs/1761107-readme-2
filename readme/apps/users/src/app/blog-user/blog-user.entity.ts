import {User} from '@readme/shared-types';

export class BlogUserEntity implements User {
  public _id?: string;
  public email: string;
  public login: string;
  public avatar: string;
  public passwordHash: string;

  constructor(blogUser: User) {
    this.fillEntity(blogUser);
 }

  public toObject() {
    return {...this};
  }

  public fillEntity(blogUser: User) {
    this._id = blogUser._id;
    this.email = blogUser.email;
    this.login = blogUser.login;
    this.avatar = blogUser.avatar;
    this.passwordHash = blogUser.passwordHash;
  }
}
