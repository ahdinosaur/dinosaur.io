---
title: mass market framework
date: 2013-09-18 13:59:31
author: dinosaur
tags: [big, meteor, stack]
template: article.jade
---
after spending the summer working on [big](https://github.com/bigcompany/big) (see my [resources](https://github.com/ahdinosaur/resources)), i've started using [Meteor](http://meteor.com) as my recommended framework. why?
<span class="more"></span>

## mass market frameworks

a mass market framework is a development platform that targets at least 90% of all developers, from every age and skill background, with a unified, curated set of modules that makes it easy to build what you want built.

building a framework for everything is no easy task. even if the groundwork has already been laid, as it was when i started hacking on big, there are so many features that must be found in any mass market framework for it to be worth considering: modularity, validation, templating, server-side rendering, client-side rendering, reactivity, authentication, access control, form generation, etc. while big is ahead of the game in some of these projections, it has yet to touch a number of them. after spending a significant amount of time and effort working to expand the features of big, i've come to the realization that i would much rather focus my time and effort on the applications i want to build rather than the framework that will power my application. this means jumping on board the best framework available and building from there.

### why Meteor

i've obviously chosen Meteor as my "best framework available". however, is that the case? i'm not about to start a framework war, but here are my reasons for liking Meteor:

- easy for non-expert to jump in, make an app, and deploy
- base features just make sense
  - Handlebars is easy templating
  - MongoDB is easy database
- reactivity just works
- many ways to structure an application
- packages add features extremely easily
- many packages available, with support for npm where even more available
- making new packages easy when not already available

and of course my dislikes:

- everything in a fiber makes async more difficult when you need it
- no client-side npm a la browserify
- no validation based on schema
- no form generation based on schema

Meteor is best at lowering the barrier to entry for new developers, which is a huge plus for open source if more people can be more involved. it may not be the most performant or the most right, but it just works.

## so far

so far i made a handful of packages to integrate existing tools with Meteor and have hacked on the works in progress of a few websites, such as 

### gridbeamjs

a browser-based 3d grid beam editor.

### JSON Schema

after using big for a few months: i've come to enjoy the usage of JSON Schema to define objects. as such, yesterday i started hacking on [easy-collection](http://atmosphere.meteor.com/package/easy-collection) and [easy-form](http://atmosphere.meteor.com/package/easy-form). it's a work in progress, but i hope it can make Meteor even easier. the goal is to make it such that all that is necessary to implement a basic [CRUD](http://http://en.wikipedia.org/wiki/Create,_read,_update_and_delete) interface is a JSON Schema.


---

the real test of Meteor's success will be whether or not i can teach non-programmers to build what they want built using Meteor.
