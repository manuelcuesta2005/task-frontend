export const registerBody = { email: "", password: "", full_name: "", identification: "" }

export function validateRegisterBody(register: typeof registerBody): String | typeof registerBody {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (register.full_name == '') return 'Full Name is Empty'
    if (register.identification == '') return 'Identification is Empty'
    if (register.email == '') return 'Email is Empty'
    if (register.password == '') return 'Password is Empty'
    if (register.password.length <= 7 ) return 'Password too short'
    if (!expression.test(register.email)) return 'Email is Incorrect'
    return register
}