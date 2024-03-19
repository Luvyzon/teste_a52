import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    await this.createAdmin();
    const user = await this.usersService.findByUsername(username);
    const isMatch = await bcrypt.compare(pass, user?.password);
    if (!isMatch) throw new UnauthorizedException();
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async createAdmin() {
    const adminExists = await this.usersService.findByUsername('admin');
    if (!adminExists) {
      await this.usersService.create({
        name: 'Admin',
        username: 'admin',
        password: 'ABC$1234',
      });
    }
  }
}
