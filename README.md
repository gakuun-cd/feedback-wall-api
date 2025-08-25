项目简介
这是一个基于 Node.js 和 Koa2 构建的后端API服务，旨在为留言板应用提供核心功能。该项目采用RESTful API设计，实现了用户注册、登录，以及留言的创建、更新、删除和查询等所有基本操作。

项目遵循MVC分层架构，确保了代码的高可维护性和可扩展性。

核心技术栈
后端框架：Node.js 和 Koa2

数据库：MongoDB

数据库ODM：Mongoose

路由管理：koa-router

身份验证：JWT (JSON Web Tokens)

主要功能模块
本API服务提供以下核心接口，以支持前端应用的开发：

用户认证与授权

注册（/api/register）：允许新用户创建账户。

登录（/api/login）：验证用户身份并返回JWT，用于后续接口的认证。

留言管理

创建留言（/api/messages）：允许已登录用户发布新留言。

获取留言列表（/api/messages）：分页查询所有留言，支持按时间排序等。

更新留言（/api/messages/:id）：允许留言的发布者修改其内容。

删除留言（/api/messages/:id）：允许留言的发布者删除其留言。

项目亮点
分层架构：项目严格按照 Controller-Service-Model 分层，职责明确，便于团队协作和功能迭代。

安全认证：采用 JWT 机制进行用户身份验证，确保了API接口的安全性。

RESTful设计：所有接口均遵循 RESTful 规范，URL设计清晰，易于理解和使用。
