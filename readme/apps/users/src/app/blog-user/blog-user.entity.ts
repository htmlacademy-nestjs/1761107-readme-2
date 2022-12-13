import { User } from '@readme/shared-types';
import { genSalt, hash, compare } from 'bcrypt';

const SALT_ROUNDS = 10;
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
    return { ...this };
  }

  public fillEntity(blogUser: User) {
    this._id = blogUser._id;
    this.email = blogUser.email;
    this.login = blogUser.login;
    this.avatar = blogUser.avatar;
    this.passwordHash = blogUser.passwordHash;
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
