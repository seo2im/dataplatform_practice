import db from './connect';

export const getUsers = async (name?: string) => {
  if (!name) {
    return await db.any('SELECT * FROM Users');
  } else {
    return await db.any('SELECT * FROM Users WHERE name = $1', [name]);
  }
};
export const addUsers = async (name: string) => {
  return await db.none(`INSERT INTO Users(name) VALUES(${name})`);
};
