import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions } from "@nestjs/mongoose";

export const connectDBFactory = (
  configService: ConfigService
): MongooseModuleOptions => {
  const MONGODB_URL = configService.get<string>('MONGODB_URL');

  return {
    uri: MONGODB_URL,
    autoIndex: false,
  };
};
