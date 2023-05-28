import * as bcrypt from 'bcrypt';

const salt = 10;
export function encodePassword(password: string) {
    return bcrypt.hashSync(password, salt);
}

export function comparePasswords(password: string, hash: string) {
    return bcrypt.compareSync(password, hash)
}