import db from './connect';

export const getUser = async (name: string) => {
  return await db.any('SELECT * FROM Users WHERE name = $1', [name]);
};
export const addUser = async (name: string) => {
  return await db.none('INSERT INTO Users(name) VALUES($1)', [name]);
};
