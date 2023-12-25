import {
  Inject,
  Injectable,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { UserLoginGoogleDto } from '../dto/user-login-google.dto';
import { JwtService } from '@nestjs/jwt';
import { UserLoginDto } from '../dto/user-login.dto';
import { UserRegisterDto } from '../dto/user-register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '~/users/schema/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async getProfile() {
    const id = '1';
    const user = await this.userModel.findById(id)

    const profile = {

    };

    return profile;
  }

  // async loginWithGoogle(user: UserLoginGoogleDto) {
  //   try {
  //     // tài khoản đăng hoặc là đăng ký bằng firebase
  //     const { uid } = user;
  //     let account = await this.userModel.findOne({ uid }).select({
  //       password: 0,
  //       uid: 0,
  //     });
  //     let message = 'Đăng nhập bằng firebase thành công';
  //     let statusCode = 200;

  //     if (!account) {
  //       message = 'Tạo tài khoản thành công!';
  //       account = await this.userModel.create(user);
  //       delete account.password;
  //       delete account.uid;
  //       statusCode = 201;
  //     }

  //     return new ResponseCustomData(account, message, statusCode);
  //     // tạo tài khoản dựa vào uid
  //   } catch (error) {
  //     throw new ResponseCustomError(error, 400);
  //   }
  // }

  // async register(userCreate: UserRegisterDto) {
  //   try {
  //     // Create a new user
  //     const AuthServiceUser = new AuthService(this.jwtService);
  //     const [password_hash, access_token, existingUser] = await Promise.all([
  //       PassWordGenerator.hash(userCreate.password),
  //       AuthServiceUser.createToken({
  //         username: userCreate.email,
  //       }),
  //       this.userModel.findOne({ email: userCreate.email }),
  //     ]);

  //     if (existingUser) {
  //       throw new Error('Email đã tồn tại!');
  //     }

  //     const dataCreateUser = {
  //       email: userCreate.email,
  //       password: password_hash,
  //       access_token,
  //       nick_name: userCreate.nick_name
  //     };

  //     const data = await this.userModel.create(dataCreateUser);

  //     if (!data) {
  //       throw new Error('Tạo thất bại');
  //     } else {
  //       delete data.password;
  //     }
  //     return new ResponseCustomData(
  //       data,
  //       'Tạo tài khoản thành công',
  //       HttpStatus.CREATED,
  //     );
  //   } catch (err) {
  //     return ResponseCustomError(err);
  //   }
  // }

  // async validateUserAndGenerateToken(loginDto: UserLoginDto): Promise<string> {
  //   try {
  //     const user = await this.userModel.findOne({
  //       email: loginDto.email,
  //     }).exec();
  //     if (user && await PassWordGenerator.verify(loginDto.password, user.password.toString())) {
  //       const payload = { id: user.id, email: user.email };
  //       return this.jwtService.signAsync(payload);
  //     }
  //     throw new Error('Thông tin đăng nhập không hợp lệ !');
  //   } catch (e) {
  //     throw new ResponseCustomError(e, 401);
  //   }
  // }

  // async getUser(userId: string) {
  //   try {
  //     // field 0 là bỏ qua giá trị đó
  //     // field 1 là bỏ qua giá trị đó mặc định là field 1
  //     const data = await this.userModel.findById(userId, {
  //       password: 0,
  //       role: 0,
  //     });
  //     return new ResponseCustomData(
  //       data,
  //       'Lấy thành công with userID: ' + userId,
  //     );
  //   } catch (err) {
  //     return ResponseCustomError(err);
  //   }
  // }

  // async deleteUser(id: string) {
  //   return await this.userModel.findByIdAndDelete(id);
  // }

}
