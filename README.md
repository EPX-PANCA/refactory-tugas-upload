# TUGAS API MVC AUTH


* Method POST : http://localhost:3000/auths/register    -> Register
    * Minimal Register "username" dan "password", lainnya boleh kosong.
    
* Method POST : http://localhost:3000/auths/login    -> Generate Token
    * Masukkan {"username": "Panca", "password": "passwottt"} atau cari sendiri username dan password setelah seeder untuk generate token/ bisa juga register dulu




* Method PATCH/POST/GET/DELETE  http://localhost:3000/users/  -> Test Token/authorization
    * Masukkan token (kedalam authorization - bearer token) agar bisa akses data users