---
layout: '@/templates/BasePost.astro'
title: Vector Search App With Ruby On Rails
description: How to add Vector Search To A Ruby On Rails App
pubDate: 2023-08-05
imgSrc: '/assets/images/Ruby-VectorSearch.png'
imgAlt: 'A little cartoon man standing beside a huge laptop that is in a crystalline desert filled with rubies'
---

## Building an AI Vectorsearch Q/A App with Rails

Recently, I worked on a project using Rails. What stood out to me was the availability of solutions to most problems. This proved to be an advantage, especially when tackling a modern use case like creating an AI vector search Q/A app.

Relying on GPT-4 was a game-changer. By accurately describing what I needed, GPT-4 provided code that worked instantly, with no adjustments needed. Like really, it would style things for me, and just had huge amounts of context into all of the actions I wanted to take.
It restyled the entire devise login/signup pages and knew where the partials were without me saying I was using Devise, or that it needed to mess with these certain files. It just *knew*. A really cool feeling.

One challenge was with 'prepared statements' generated by ActiveRecord, which seemed to struggle with the vector extension from Postgres. This was a minor issue, however, and didn't significantly impact the project.

I recommend developers, especially those used to JavaScript, to try Rails or Laravel. Use AI to learn as you solve problems. It's an effective and enjoyable approach.

Rails continues to be a powerful tool for developers, even more so when combined with AI. It's worth exploring what you can accomplish with it.

Check out the code here: https://github.com/nheingit/knowledge-upload/

You can see it in action here: https://knowledge-retrieval.fly.dev/dashboard
