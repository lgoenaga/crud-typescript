export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

  export type User = {
    id: number;
    username: string;
    role: ROLES;
  };

function getRolesName(role: ROLES): void {

  const adminUser: User = {
    id: 1,
    username: 'admin',
    role: ROLES.ADMIN
  };

  console.log(adminUser);

  const sellerUser: User = {
    id: 2,
    username: 'seller',
    role: ROLES.SELLER
  };

  console.log(sellerUser);

  const customerUser: User = {
    id: 3,
    username: 'customer',
    role: ROLES.CUSTOMER
  };

  console.log(customerUser);
}
