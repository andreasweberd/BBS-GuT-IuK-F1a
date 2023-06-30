cd ~
wget https://dev.mysql.com/get/mysql80-community-release-el9-1.noarch.rpm
rpm -Uvh mysql80-community-release-el9-1.noarch.rpm
dnf install mysql-community-server
systemctl start mysqld
echo "\nbind-address=0.0.0.0" >> /etc/my.cnf
grep 'temporary password' /var/log/mysqld.log
read -p "Enter temporary root password: " password
newrootPass = '4bX!k8gM'
mysql -uroot -p$password -Bse "ALTER USER 'root'@'localhost' IDENTIFIED BY $newrootPass;CREATE DATABASE pizzeria;CREATE USER 'team_db'@'%' IDENTIFIED BY '9n3c&2D2';CREATE DATABASE team_cs;CREATE USER 'team_cs'@'%' IDENTIFIED BY '7b3Tr%!a';CREATE DATABASE team_java;CREATE USER 'team_java'@'%' IDENTIFIED BY '5b$2wQNj';GRANT ALL PRIVILEGES ON pizzeria.* TO 'team_db'@'%';GRANT ALL PRIVILEGES ON pizzeria.* TO 'team_java'@'%';GRANT ALL PRIVILEGES ON team_cs.* TO 'team_cs'@'%';GRANT ALL PRIVILEGES ON team_java.* TO 'team_java'@'%';"
echo "\n[client]\nuser=root\npassword=$newrootPass" >> /etc/my.cnf