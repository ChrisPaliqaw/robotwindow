# README

![Viam Rover close-up](viam_rover.png)

**What I want to build**

RobotWindow provides components for visualizing robot state. Initially, the focus is on providing debugging tools for mapping and navigation using a [Viam](https://viam.com) Rover equipped with lidar.

**More Detailed Description**

Planned features
* Uses Viam's TypeScript API to query a remote robot for sensor data using gRPC
* See robot camera data and particle cloud using WebRTC
* Visualize the robot's
  * Odometry (estimated distance and rotation from starting position)
  * Local and global costmaps (a robot's static and dynamic map of obstacles in the environment)
  * Point cloud - 3D data generated using lidar
  * Camera view
  * POIs: waypoints that the robot can navigate to
* Save configurations to the cloud

**Permissive License**
MIT

**Background (What made you decide to build this particular app? What inspired you?)**

I worked for eight months maintaining and building full-stack HMI's (Human-Machine Interface) for Robotnik. The ROS (Robot Operating System) has tools such as rviz and Foxglove
to debug and visualize sensor data, and ros3djs to build HMI's, but these tools do not yet exist for the new Viam framework.

**How will you utilize RedwoodJS?**

I will use:
* Storyboard and rw's testing tools to create testable, resusable components
* auth so users can keep private remote connection info private
* cells for editing connection info and configuration
* Prisma for storing this info

**Additional Resources/Info**


This project uses [RedwoodJS](https://redwoodjs.com)

> **Prerequisites**
>
> - Redwood requires [Node.js](https://nodejs.org/en/) (=18.x) and [Yarn](https://yarnpkg.com/) (>=1.15)
> - Are you on Windows? For best results, follow our [Windows development setup](https://redwoodjs.com/docs/how-to/windows-development-setup) guide

Start by installing dependencies:

```
yarn install
```

Then start the development server:

```
yarn redwood dev
```

Your browser should automatically open to [http://localhost:8910](http://localhost:8910).  In front of the camera, you will see a model of a Viam Rover. The X, Y, and Z axes of the Rover are indicated

> **The Redwood CLI**
>
> Congratulations on running your first Redwood CLI command! From dev to deploy, the CLI is with you the whole way. And there's quite a few commands at your disposal:
>
> ```
> yarn redwood --help
> ```
>
> For all the details, see the [CLI reference](https://redwoodjs.com/docs/cli-commands).

## Prisma and the database

Redwood wouldn't be a full-stack framework without a database. It all starts with the schema. Open the [`schema.prisma`](api/db/schema.prisma) file in `api/db` and replace the `UserExample` model with the following `Post` model:

```prisma
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  body      String
  createdAt DateTime @default(now())
}
```

Redwood uses [Prisma](https://www.prisma.io/), a next-gen Node.js and TypeScript ORM, to talk to the database. Prisma's schema offers a declarative way of defining your app's data models. And Prisma [Migrate](https://www.prisma.io/migrate) uses that schema to make database migrations hassle-free:

```
yarn rw prisma migrate dev

# ...

? Enter a name for the new migration: › create posts
```

> `rw` is short for `redwood`

You'll be prompted for the name of your migration. `create posts` will do.

Now let's generate everything we need to perform all the CRUD (Create, Retrieve, Update, Delete) actions on our `Post` model:

```
yarn redwood generate scaffold post
```

Navigate to [http://localhost:8910/posts/new](http://localhost:8910/posts/new), fill in the title and body, and click "Save".

Did we just create a post in the database? Yup! With `yarn rw generate scaffold <model>`, Redwood created all the pages, components, and services necessary to perform all CRUD actions on our posts table.

## Frontend first with Storybook

Don't know what your data models look like? That's more than ok—Redwood integrates Storybook so that you can work on design without worrying about data. Mockup, build, and verify your React components, even in complete isolation from the backend:

```
yarn rw storybook
```

Seeing "Couldn't find any stories"? That's because you need a `*.stories.{tsx,jsx}` file. The Redwood CLI makes getting one easy enough—try generating a [Cell](https://redwoodjs.com/docs/cells), Redwood's data-fetching abstraction:

```
yarn rw generate cell examplePosts
```

The Storybook server should hot reload and now you'll have four stories to work with. They'll probably look a little bland since there's no styling. See if the Redwood CLI's `setup ui` command has your favorite styling library:

```
yarn rw setup ui --help
```

## Testing with Jest

It'd be hard to scale from side project to startup without a few tests. Redwood fully integrates Jest with both the front- and back-ends, and makes it easy to keep your whole app covered by generating test files with all your components and services:

```
yarn rw test
```

To make the integration even more seamless, Redwood augments Jest with database [scenarios](https://redwoodjs.com/docs/testing#scenarios)  and [GraphQL mocking](https://redwoodjs.com/docs/testing#mocking-graphql-calls).

## Ship it

Redwood is designed for both serverless deploy targets like Netlify and Vercel and serverful deploy targets like Render and AWS:

```
yarn rw setup deploy --help
```

Don't go live without auth! Lock down your app with Redwood's built-in, database-backed authentication system ([dbAuth](https://redwoodjs.com/docs/authentication#self-hosted-auth-installation-and-setup)), or integrate with nearly a dozen third-party auth providers:

```
yarn rw setup auth --help
```

## Next Steps

The best way to learn Redwood is by going through the comprehensive [tutorial](https://redwoodjs.com/docs/tutorial/foreword) and joining the community (via the [Discourse forum](https://community.redwoodjs.com) or the [Discord server](https://discord.gg/redwoodjs)).

## Quick Links

- Stay updated: read [Forum announcements](https://community.redwoodjs.com/c/announcements/5), follow us on [Twitter](https://twitter.com/redwoodjs), and subscribe to the [newsletter](https://redwoodjs.com/newsletter)
- [Learn how to contribute](https://redwoodjs.com/docs/contributing)
