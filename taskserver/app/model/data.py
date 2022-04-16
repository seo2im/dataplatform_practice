def select_data(conn):
  cur = conn.cursor()
  try:
    cur.execute('SELECT * FROM DATAS')
    datas = cur.fetchall()
  except:
    print('SQL ERROR')
  conn.commit()
  return datas

def insert_data(conn, data):
  cur = conn.cursor()
  try:
    cur.execute('INSERT INTO USERS (name) VALUES(%s)', (data['name']))
  except:
    print('SQL ERROR')
  conn.commit()