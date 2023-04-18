### Prisma with Express.js and session in Database + Middleware
----------

This is a simple example of how to use Prisma with Express.js and store session in database.

#### Notes
----------

Still in development, the files / folders can be changed.

##### File Structure
----------

```bash
.
├── controllers
│   ├── authController.js
│   ├── categoriesController.js
│   ├── productsController.js
│   └── userController.js
├── middlewares
│   └── usersMiddleware.js
├── package.json
├── package-lock.json
├── prisma
│   ├── docs
│   │   ├── index.html
│   │   └── styles
│   │       └── main.css
│   ├── migrations
│   │   ├── 20230417235511_init
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   ├── schema.prisma
│   └── seed.js
├── readme.md
├── routes
│   ├── authRoute.js
│   ├── categoriesRoute.js
│   ├── productsRoute.js
│   └── usersRoute.js
└── server.js

9 directories, 19 files
```
