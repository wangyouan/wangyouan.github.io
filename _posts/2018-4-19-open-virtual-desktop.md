---
layout: post
title: How to open a visual desktop in shell
status: draft
type: post
published: true
---

Sometimes, you may want to use shell to run some program without ssh, then you will need this skill.

Here I use [Xvfb](https://www.x.org/archive/X11R7.6/doc/man/man1/Xvfb.1.xhtml#heading1). Before starting, if you use python, then [xvfbwrapper](https://github.com/cgoldberg/xvfbwrapper) would be a good choice.

1. Start a new visual desktop
```
Xvfb :99 -screen 0 1280x960x16&
```
Here you can also choose other number not ":99", as long as no other program use that port. And don't forget "&" at the end of the commend.


2. Configure display environment
```
export DISPLAY=:99
```
Now you can run your program headlessly.