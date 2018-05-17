---
layout: post
title: How to use python to do regression with fixed effect and cluster
status: draft
type: post
published: true
comments: true
tag: Python, Regression Analysis, Linear Regression, Cluster, Fixed Effect, linearmodels
---

This blog mainly based on linearmodels ([PyPI](https://pypi.org/project/linearmodels), [Documents](https://bashtage.github.io/linearmodels/)), which is a good interface to do regression analysis.

Sample data used in this article can be download [here]({{ site.baseurl }}/data/useful_data/sample_data.zip)

# Panel Models

## Basic Linear Regression
First we load a sample dataset and use that dataset to do some simple regression


```python
import numpy as np
from statsmodels.datasets import cpunish
data = cpunish.load_pandas().data

```


```python
data.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>EXECUTIONS</th>
      <th>INCOME</th>
      <th>PERPOVERTY</th>
      <th>PERBLACK</th>
      <th>VC100k96</th>
      <th>SOUTH</th>
      <th>DEGREE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>37.0</td>
      <td>34453.0</td>
      <td>16.7</td>
      <td>12.2</td>
      <td>644.0</td>
      <td>1.0</td>
      <td>0.16</td>
    </tr>
    <tr>
      <th>1</th>
      <td>9.0</td>
      <td>41534.0</td>
      <td>12.5</td>
      <td>20.0</td>
      <td>351.0</td>
      <td>1.0</td>
      <td>0.27</td>
    </tr>
    <tr>
      <th>2</th>
      <td>6.0</td>
      <td>35802.0</td>
      <td>10.6</td>
      <td>11.2</td>
      <td>591.0</td>
      <td>0.0</td>
      <td>0.21</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4.0</td>
      <td>26954.0</td>
      <td>18.4</td>
      <td>16.1</td>
      <td>524.0</td>
      <td>1.0</td>
      <td>0.16</td>
    </tr>
    <tr>
      <th>4</th>
      <td>3.0</td>
      <td>31468.0</td>
      <td>14.8</td>
      <td>25.9</td>
      <td>565.0</td>
      <td>1.0</td>
      <td>0.19</td>
    </tr>
  </tbody>
</table>
</div>




```python
import statsmodels.api as sm
dir(sm.datasets)
```




    ['__builtins__',
     '__cached__',
     '__doc__',
     '__file__',
     '__loader__',
     '__name__',
     '__package__',
     '__path__',
     '__spec__',
     'anes96',
     'cancer',
     'ccard',
     'check_internet',
     'china_smoking',
     'clear_data_home',
     'co2',
     'committee',
     'copper',
     'cpunish',
     'elnino',
     'engel',
     'fair',
     'fertility',
     'get_data_home',
     'get_rdataset',
     'grunfeld',
     'heart',
     'longley',
     'macrodata',
     'modechoice',
     'nile',
     'randhie',
     'scotland',
     'spector',
     'stackloss',
     'star98',
     'statecrime',
     'strikes',
     'sunspots',
     'utils',
     'webuse']


