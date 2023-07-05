\set  user  `echo  ${SOCIAL_NETWORK_USER}`
\set  pass  `echo  "'${SOCIAL_NETWORK_USER_PASSWORD}'"`
\set  db_name  `echo  ${SOCIAL_NETWORK_DB_NAME}`

CREATE DATABASE :db_name;

CREATE USER :user WITH ENCRYPTED PASSWORD :pass SUPERUSER;