import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from "@nestjs/swagger";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @ApiOperation({ summary: "Авторизация пользователя" })
  @ApiResponse({
    status: 200,
    description: "Пользователь успешно авторизован.",
    schema: { example: { userId: "user_id_example" } },
  })
  @ApiResponse({ status: 500, description: "Неверные данные для авторизации." })
  @ApiBody({
    description: "Имя пользователя для авторизации",
    schema: {
      example: { name: "" },
    },
  })
  async login(@Body("name") name: string) {
    return this.authService.login(name);
  }
}
