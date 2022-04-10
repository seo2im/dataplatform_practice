GRANT ALL PRIVILEGES ON DATABASE test TO test;

\c test;

CREATE TABLE Users(
  ID     int          not null  AUTO_INCREMENT  primary key,
  name   varchar(20)  not null  UNIQUE
);
CREATE TABLE Datas(
  ID      int          not null  AUTO_INCREMENT primary key,
  USERID  int          not null  REFERENCES Users (ID),
  name    varchar(20)  not null,
  path    varchar(100) not null
);
CREATE TABLE Works(
  ID      int not null  AUTO_INCREMENT  primary key,
  USERID  int not null  REFERENCES Users (ID),
  type    int not null,
  state   int not null  DEFAULT 0
);
CREATE TABLE Results(
  ID      int   not null  AUTO_INCREMENT  primary key,
  WORKID  int   not null  REFERENCES Works (ID),
  result  text  not null
);