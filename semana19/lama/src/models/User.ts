import { InvalidParameterError } from '../errors/InvalidParameterError';

const enum UserRole {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: UserRole
    ){}

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public getRole(): UserRole {
        return this.role;
    }

    public static stringToUserRole(value: string): UserRole {
        switch(value) {
            case "ADMIN":
                return UserRole.ADMIN;
            case "NORMAL":
                return UserRole.NORMAL;
            default:
                throw new InvalidParameterError("Invalid user role");
        }
    }

    public static userRoleToString(value: string): string {
        switch(value) {
            case UserRole.ADMIN:
                return "ADMIN";
            case UserRole.NORMAL:
                return "NORMAL";
            default:
                throw new InvalidParameterError("Invalid user role");
        }
    }

}