cd ~
wget https://dev.mysql.com/get/mysql80-community-release-el9-1.noarch.rpm
rpm -Uvh mysql80-community-release-el9-1.noarch.rpm
dnf install mysql-community-server
systemctl start mysqld
echo "\nbind-address=0.0.0.0" >> /etc/my.cnf
read -p "Enter new root password: " newRootPass
read -p "Enter team_db password: " teamdbPass
read -p "Enter team_cs password: " teamcsPass
read -p "Enter team_java password: " teamjavaPass
grep 'temporary password' /var/log/mysqld.log
mysql -uroot -p -B --execute="ALTER USER 'root'@'localhost' IDENTIFIED BY '$newRootPass';CREATE DATABASE pizzeria;CREATE USER 'team_db'@'%' IDENTIFIED BY '$teamdbPass';CREATE DATABASE team_cs;CREATE USER 'team_cs'@'%' IDENTIFIED BY '$teamcsPass';CREATE DATABASE team_java;CREATE USER 'team_java'@'%' IDENTIFIED BY '$teamjavaPass';GRANT ALL PRIVILEGES ON pizzeria.* TO 'team_db'@'%';GRANT ALL PRIVILEGES ON pizzeria.* TO 'team_java'@'%';GRANT ALL PRIVILEGES ON team_cs.* TO 'team_cs'@'%';GRANT ALL PRIVILEGES ON team_java.* TO 'team_java'@'%';"