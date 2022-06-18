export class User {
    firstName: string
    lastName: string
    phoneNumber: number
    status: string
    isBlocked: boolean

    constructor() {
        this.firstName = ""
        this.lastName = ""
        this.phoneNumber = 0
        this.status = "active"
        this.isBlocked = false
    }
}