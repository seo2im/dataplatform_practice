import db from './connect';

export const getDatas = async (userid: number, name: string) => {
  return await db.any('SELECT * FROM Datas WHERE userid = $1 AND NAME = $2', [userid, name]);
};
export const addDatas = async (userid: number, name: string, path: string) => {
  return await db.none('INSERT INTO Datas(USERID, name, path) VALUES($1, $2, $3)', [userid, name, path]);
}
