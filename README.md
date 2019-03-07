# eggjs

## 功能点

## 启动

### 数据库

``` bash
# 编写其他表
npx sequelize migration:generate --name=init-users
```

数据库初始化

``` bash
# 升级数据库
npx sequelize db:migrate
# 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
# npx sequelize db:migrate:undo
# 可以通过 `db:migrate:undo:all` 回退到初始状态
# npx sequelize db:migrate:undo:all
```