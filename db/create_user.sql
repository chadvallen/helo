insert into users3 (username, password)
values ($1, $2) returning *;