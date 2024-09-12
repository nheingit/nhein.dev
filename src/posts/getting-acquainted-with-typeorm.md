---
title: Getting Yourself Acquainted with TypeORM
description: First steps to getting TypeORM set up
pubDate: 2021-02-13
slug: "getting-acquainted-with-typeorm"
---

# # Intro

Hi everyone, I wanted to share with you all my experience with [TypeORM](typeorm.io). In my most recent project, I used TypeORM to build a full stack application for a food delivery service similar to Blue Apron. You can check out the code for my project [here](https://github.com/nheingit/JWCuisineServer) and you can see the end product [here](jwcuisine.io). In this post we will go over TypeORM from a top-level overview, where it fits in your application architecture, and how you can use it with a SQL database to make working with your database a little bit easier

## ## What Is TypeORM?

If you take a a look at their website, TypeORM describes themselves as:

> ... an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript.

While that is certainly descriptive, it doesn't do you much good if you don't know what an ORM is, so let's backup to that part.

From Wikipedia's ORM page:

> Object-relational mapping (ORM, O/RM, and O/R mapping tool!) in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.

While I wanted to include that description because that is 100% what it is, If you aren't already familiar with the lingo in the database world, it's pretty much 100% gibberish.

How I think of an ORM in my head is the following:
An ORM is a tool that allows me to convert my SQL data tables into JavaScript objects that I can then manipulate and put back into my database. While not 100% correct, for my use-case this was pretty spot on.

## ## Cool, Where In my App Do I put it?

TypeORM interfaces between your server and your Database, much like how GraphQL sits between your client and your server.

Here's a graphic that uses a nest application as an example.
![TypeORMArchitecture](https://dev-to-uploads.s3.amazonaws.com/i/96igm1itnlgjsurgu0qm.png)

This allows TypeORM to do quite a lot of magic as far as the structure of your Data is concerned, as it gets to touch every request that you decide to send to the database, and structures it in a way that makes it easier for you to manipulate. However, all this juicy magic doesn't do you much good if you can't get it working.

## ## Configuration

After you install typeORM in whatever stack it is that you are using, you need to do a bit of configuration before you get all the goodies. I am going to assume that you already have a DB setup in whatever environment you are using. I used Postgres, so that is what I will use in this example, however TypeORM supports pretty much every SQL database, as well as some noSQL.

In your root directory you need to make a `ormconfig.json` file, and in it you are going to need to establish a connection to your database. your `ormconfig.json` should have the following:

```json
{
  "type": "postgres",
  "host": "localhost",
  "port": 3306,
  "username": "test",
  "password": "test",
  "database": "test"
}
```

This will connect you to your DB, and allow you to start enjoying the TypeORM magic. This is the most basic connection, and there are many many more options to tailor TypeORM to exactly what your use-case is. You can find many of these options at [node-postgres](https://node-postgres.com/features/connecting).

Once you have the correct credentials plugged in here you only have to do one more thing which is head over to your `index.{ts/js}` file and put in a few lines of code. After this step the configuration is done and you will be able to start building out whatever objects you would like.

Two lines of code here will get the job done.

```javascript
import { createConnection } from "typeorm";

await createConnection();
```

If you want to see the exact structure of what my index.ts file looks like you can use the above link to look at my source code.

## ## Using TypeORM

For my application I did not have complex data needs. I only needed to record `Users`, and the columns that my `Users` had were not complicated at all. This should be a nice introduction as our data model isn't crazy and you can delve deeper into TypeORM on your own if you like what you see here.

If you are following along using my code you will want to take a look in `entity/User.ts`, where you fill find the following:

```javascript
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: true })
  postalCode: string | null;

  @Column("text", { nullable: true })
  priceId: string;

  @Column("text", { nullable: true })
  stripeId: string;

  @Column("text", { nullable: true })
  ccLast4: string;

  @Column("text")
  email: string;

  @Column("text", { default: "free-trial" })
  type: string;

  @Column("text")
  password: string;
}
```

While this may seem like a lot, it really isn't. Let me break it down for you.
TypeORM defines everything using decorators.
Our very first line we're going to define an `Entity` by using the `@Entity` decorator. Entities are simply classes that map to SQL database tables.

```javascript
@Entity()
export class User extends BaseEntity
```

I won't elaborate on the `BaseEntity` part, as it has to do with TypeORM supporting both _Active Record_ and _Data Mapper_ patterns, which is outside the scope of this post. However I opted to use Active Record, which is why we are extending the `BaseEntity` instead of just exporting the `User` class.

With the two lines above, I'm creating a new class `User` to work with in JavaScript. This class then maps to a table in Postgres. I am also exporting it so I can then use this `User` elsewhere in my code. I use GraphQL in this app, so I am able to `import { User } from "entity/User"` in my resolvers and then manipulate the data how I want, and put it back in my database.

TypeORM has some rules however. Every Entity must have a minimum of one primary column. There are several different primary columns but here I use:

```javascript
@PrimaryGeneratedColumn()
id: number;
```

This is going to automatically generate a number value that gets auto-incremented as more Users are created.

From here we can understand the rest of this code. We are just adding regular columns to our `User` class. You can customize the columns quite a [bit](https://github.com/typeorm/typeorm/blob/master/docs/entities.md#what-is-entity). I will quickly go over what I do in my next column and then you'll be off to the races!

```javascript
@Column("text", {nullable:true})
postalCode: string | null;
```

- in the `@Column("text", {nullable:true})` we are defining a `@column`, the datatype which is going to be `"text"`
- We are allowing it to be null with `{nullable:true}`.
- In the next line `postalCode: string | null;`
  we are naming the column `postalCode` and then using TypeScript to give it types.

That covers pretty much everything that I learned when using TypeORM in this project. I hope you were able to follow along and learn a thing or two!
