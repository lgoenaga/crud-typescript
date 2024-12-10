import {User, ROLES} from './01-enums'

let currenUser: User = {
  id: 1,
  username: 'luis',
  role: ROLES.SELLER,
};

export const checkRoleAdmin = (user: User): boolean => {
  return user.role === ROLES.ADMIN;
}

let usr = checkRoleAdmin(currenUser);
if (usr) {
  console.log('User is admin');
} else {
  console.log('User is not admin');
}

// Rest parameters
export const checkRoles = (user: User, ...roles: ROLES[]): boolean => {
  switch (user.role) {
    case ROLES.ADMIN:
      return roles.includes(ROLES.ADMIN);
    case ROLES.SELLER:
      return roles.includes(ROLES.SELLER);
    case ROLES.CUSTOMER:
      return roles.includes(ROLES.CUSTOMER);
    default:
      return false;
  }
}

let usrRoles = checkRoles(currenUser, ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
if (usrRoles) {
  console.log(`User is ${currenUser.role}`);
} else {
  console.log(`User is not ${currenUser.role}`);
}