---
layout: post
title: Install Scikit-Learn on Ubuntu
status: draft
type: post
published: true
comments: true
---


##Machine Learning with Scikit
###Setup and Installation

For this tutorial we will be working with a Python framework called Scikit Learn. This is a free machine learning library that will allow us to execute multiple ML techniques and methodologies.

Macs come pre-installed with Python, so let's dive right into it. 
(Windows users please pair programme)

Open up your terminal and enter:
```
$ which python
```
You should see:
```
/usr/local/bin/python
```
**If you do not have Python**, use Homebrew to install it:
```
$ brew install python
```
Also make sure that the version is 2.7. This will allow us to install the necessary dependencies.
```
$ python --version
```

Firstly, we need a package manager for python, to manage our libraries and dependencies. The most commonly used one is "pip". Most Macs come pre-installed with pip. Again you can check this using:
```
$ which pip
```
If you have it already, fantastic! Otherwise install it using EasyInstall.
```
$ easy_install pip
```
Now time for the dependencies. Before we can use Scikit Learn, we will need to have the following dependencies:

 - Scipy - Scientific Computing Library
 - Numpy - Library for complex mathematical computations
 - matplotlib - Graph and Visuals plotting library
 - Pandas - Data structures and Analysis
 - iPython - Interactive console
 - Sympy - Symbolic Mathematics
 - virtualenv - Create virtual environments for python (Like Docker)

Start off by installing the virtual environment packages.
```
$ pip install virtualenv
$ pip install virtualenvwrapper
```
Now we can install Numpy.
```
$ pip install numpy
```
Before we can install Scipy, we need to get a compiler. Here we are using Fortran, an open source free compiler.
```
$ brew install gcc
$ pip install scipy
```
Now we can go ahead with MatplotLib, Pandas and iPython, along with its dependencies.
```
$ pip install matplotlib
$ pip install pandas
$ pip install jinja2
$ pip install tornado
$ pip install zmq
$ pip install ipython
$ pip install jupyter
```
We're almost there! One last package, our Scikit-Learn:
```
$ pip install -U scikit-learn
```

Actually, I installed scikit-learn with 
```
$ pip3 install git+https://github.com/scikit-learn/scikit-learn.git
```