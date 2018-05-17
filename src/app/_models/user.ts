export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    contactNo: string;
    role: UserRoles;
    status: UserStatus;
    username: string;
    password: string;

    constructor() {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.contactNo = '';
        this.role = UserRoles.DATA_SCIENTIST;
        this.status = UserStatus.ACTIVE;
    }
}

export enum UserRoles {
    DATA_SCIENTIST = 'Data Scientist',
    EMPLOYEE = 'Employee'
}

export enum UserStatus {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive'
}
