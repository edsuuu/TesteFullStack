import { PrismaService } from '../database/prisma';

class Auth {
    constructor(private prisma = PrismaService.getInstance()) {}

    async autenticarUsuario(emailUser: string): Promise<boolean> {
        const user = await this.prisma.companies.findFirst({
            where: { mail: emailUser },
        });
        return !!user;
    }
}
export default Auth;
