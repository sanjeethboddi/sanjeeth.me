---
id: 1
title: Naive Bayes Algorithm from Scratch
# image field is not mandatory
# you can skip it to keep the size of blog cards small
# image: https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80
createdAt: "2018-11-10"
tags:
  - Machine Learning
  - Naive Bayes
  - Algorithm
  - Math
category: dev
author:
  name: Sanjeeth
  twitter: sanjeethboddi
  image: /images/sanjeeth_cartoon.jpeg
---
**Naive Bayes** algorithm is a **Classification algorithm** based on applying Bayes theorem with the **“naive” assumption** of conditional independence between every pair of features given the value of the class variable.

Don’t worry if you can’t understand this definition. By the end of this article, you will clearly understand. But please read and understand each and every line.

These are the sub-sections we are going to cover.

* Basic Probability

* Bayes Theorem

* Working of Naive Bayes

* Derivation of Naive Bayes

* Laplace/Additive Smoothing

* Hyper-Parameter tuning

* Real-valued features

* Log probabilities

* Time Complexity

* Impact of an imbalanced dataset

* Feature Importance and Interpretability

* Best and Worst Cases

## Basic Probability

First, let's know few terms and their meanings in probability.

**Experiment**: Experiment is any procedure that can be infinitely repeated and has well-defined set of outcomes, known as sample space.
**Sample Space(S)**: Sample space is a set of all possible outcomes of an experiment.
**Event(E)**: Event is a set of outcomes of an experiment(the subset of sample space).
**Random Variable**: Random Variable is a function defined on a sample space(S) whose outputs are numerical values. The representation is ***X: S →ℝ. (***But most of them just represent it as **X**.)
**Probability**: Probability is the measure of the likelihood that an event will occur.

Now let’s understand these definitions clearly using examples.
***Example 1***: Probability of Flipping a fair coin and getting heads.

→Here ‘Flipping a fair coin’ is an experiment. 
 →The sample space(S) will be {Heads, Tails}.

![](https://cdn-images-1.medium.com/max/3760/1*iWVQj_EaBRngeTy0-u8V7Q.png)

→Let Random Variable (X) be {0,1} where Heads denotes 0 and Tails denotes 1. 
→”Fair coin getting heads” is an event, E = {0}
→The Probability of Flipping a fair coin and getting heads can be written as P(X=0).
 →Now, P(X = 0) = n(E)/n(S)= 1/2.

***Example 2***: Probability of Rolling two fair dice and getting the sum of 9.

→Here ‘Rolling two fair dice’ is an experiment. 
 →The sample space(S) will be

![](https://cdn-images-1.medium.com/max/2000/1*ffa304w6mgiF0LDtTWx5vg.png)

![sum of outcomes of dice 1 and dice 2](https://cdn-images-1.medium.com/max/2000/1*C3vVr55cPGhtj7raP-Clzg.png)

→Random Variable (X) will be the same as Sample space(S).
 →The Event(E) be the sum of outcomes equal to 9. 
 **∴ E = {(3,6),(4,5),(5,4),(6,3)}** 
→The Probability of Rolling two fair dice and getting a sum of 9 can be written as P(E).
 →Now, P(E) = n(E)/n(S)= 4/36 =1/9 .

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —**Conditional Probability**: Conditional probability is a measure of the probability of an event given that another event has occurred.

Let A, B are two events. P(A|B) is read as the Probability of event A happening given B has already occurred.

**Formula: P(A|B) = P(A ∩ B)/P(B)
**where **A, B are Events **and **P(B) ≠ 0.**

Now let's look at an example on conditional probability.
***Example***: What is the probability that the sum of outcomes of two dice will be greater than 5 given that the outcome of the second dice is 1?

![](https://cdn-images-1.medium.com/max/2000/1*leVUNKMA4W85yyqIvZyiBQ.gif)

→Here ‘Rolling two fair dice’ is an experiment. 
→The sample space(S) will be 
{ (1,1),(1,2),(1,3),(1,4),(1,5),(1,6) 
 (2,1),(2,2),(2,3),(2,4),(2,5),(2,6) 
 (3,1),(3,2),(3,3),(3,4),(3,5),(3,6) 
 (4,1),(4,2),(4,3),(4,4),(4,5),(4,6) 
 (5,1),(5,2),(5,3),(5,4),(5,5),(5,6) 
 (6,1),(6,2),(6,3),(6,4),(6,5),(6,6) }
→**Event A** : getting sum of outcomes of dice greater than 5.
**∴ A= { (1,5),(1,6) ,(2,4),(2,5),(2,6) ,(3,3),(3,4),(3,5),(3,6) ,(4,2),(4,3),(4,4),(4,5),(4,6),(5,1),(5,2),(5,3),(5,4),(5,5),(5,6),(6,1),(6,2),(6,3),(6,4),(6,5),(6,6) }
**→**Event B** : getting outcome of 1 in dice 2.
**∴ B= {(1,1),(1,2),(1,3),(1,4),(1,5),(1,6)}**

![](https://cdn-images-1.medium.com/max/2000/1*M0zUdkWwrf0rwQjWtgcguA.png)

**→ P(A ∩ B) = n(A∩ B)/n(S) = 2/36
 → P(B) = n(B)/n(S) = 6/36
 → P(A|B) = P(A ∩ B)/P(B) = (2/36)/(6/36) = 2/6 = 1/3**

*∴ The probability that the sum of outcomes of two dice will be greater than 5 given that the outcome of second dice is 1 = 1/3.*

## Bayes Theorem

Bayes’ theorem is stated mathematically as the following equation:

![](https://cdn-images-1.medium.com/max/2000/1*V46gkovbvrbqIhR37LXvfg.png)

### Derivation of Bayes Theorem:

From Conditional Probability, we know 
⇒ **P(A|B) = P(A ∩ B)/P(B) 
We know P(A ∩ B) is equal to P(B ∩ A). And we can write P(B ∩ A) as P(B|A) * P(A)**

**∴*** ***P(A|B) = ( P(B|A) * P(A)) / P(B)**

![](https://cdn-images-1.medium.com/max/2000/1*jJf6UsCEYQLqcZQWQHbDJw.png)

* Please Look at the image above and remember which terms are called posterior, likelihood, prior, evidence because we will be using those terms from now on.

Just as before, we will use this formula and solve an example problem.
***Example: ***A gambler has in his pocket a fair coin and a two-head coin. He selects one of the coins at random; when he flips it, it shows head. What is the probability that it is the fair coin?

***Solution: ***Let FC means Fair Coin, **BC** means Biased Coin, H means heads and T means tails.

We need to find P(FC|H).

The probability of selecting either of a coin from the pocket is **1/2**.
P(FC) = P(BC) = 1/2

Probability of getting head given it’s a FC. 
P(H|FC) = 1/2

The probability of getting head given it’s a BC.
P(H|BC) = 1

![](https://cdn-images-1.medium.com/max/2000/1*UnGMvGqXSsSTfzvMr0_mUQ.png)

**∴ **the probability that it is the fair coin is 1/3.

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

***Since you have built some basic math foundation. Let’s move on to some formal meanings in Machine Learning.***

**What is a Classification model or a Classifier?**
 → A model/program which looks at the Query and tells us which class does the query point belongs to is called as a Classifier.

⇒ Now, what if I tell you the details of a person like hair length, height, age, weight and ask you whether it’s Male or Female.
⇒ Your Brain can easily classify these kinda queries with very good accuracy. You have seen thousands of Male and female in this society. Your Brain has been trained on Bigger Data set than you can ever imagine.
⇒ Even to train any machine learning model we need a data set.

## The 3 important Phases in Machine Learning:

Given a data set, The data is split into 3 parts.
*** Training data
* Cross Validation data
* Test data**

![](https://cdn-images-1.medium.com/max/2000/1*K6xcCBqsJyPGadLJBC5hqg.png)
>  Dataset splitting not necessary to be in 60:20: 20 ratio. It can be also in other ratios such as 70:15:15 .

Each part is used in each different phase.
There are 3 phases:
*** Training Phase/ Learning Phase:** In this phase, we use the training data set to find the likelihood and prior probabilities.
* **Cross Validation Phase**: In this phase, we use Cross Validation data to do hyper-parameter tuning.
* **Test phase/Run phase**: In this phase, we use Test data to find the accuracy of the model.

## Working of Naive Bayes Algorithm

You have understood what’s a classifier. Let’s go further and understand How Naive Bayes Classifier works using a simple data set.

In this subsection, we talk only about the Training phase and Run phase.

Let’s assume you have got some data set from a Micro Biology Lab and the data set describes whether the substance is poisonous or not.

![](https://cdn-images-1.medium.com/max/3100/1*eaquJb8raEbfI0c6mASKiw.png)

There are 4 features (Color, Toughness, Fungus, Appearance) and one Class Label (Poisonous) in the data set.

In the training phase of the Naive Bayes Algorithm, we calculate the likelihoods and priors and store them.

P(Color =c|Poisonous = p), where c ∈ [Orange, Green, Brown] and p ∈ [yes, no]

P(Toughness=t|Poisonous = p), where t ∈ [Hard, Soft] and p ∈ [yes, no]

P(Fungus = f |Poisonous = p), where f ∈ [Yes, No] and p ∈ [yes, no],

P(Appearance = a|Poisonous = p), where a ∈ [Smooth, Wrinkled] and p ∈ [yes, no].

![](https://cdn-images-1.medium.com/max/2000/1*-NJLBtg7ZSuTEXScm0Fwqg.png)

![](https://cdn-images-1.medium.com/max/2000/1*rCBELB8b-Fzz4bzFiZORJw.png)

![](https://cdn-images-1.medium.com/max/2000/1*jUQCHYKQIwMaOzht--2XkA.png)

![](https://cdn-images-1.medium.com/max/2000/1*dvvKDv61uRCe5kCw_Ds9xw.png)

![](https://cdn-images-1.medium.com/max/2000/1*g2rKVDVLyM5d_NlM7AnUkg.png)

In the run phase we use the Naive Bayes formulation to find the query.
>  The formula below is the heart of Naive Bayes classifier.

![](https://cdn-images-1.medium.com/max/2000/1*XCX5kYnyhc635si16qJ6vQ.png)

Let’s take an example query:
given Color = Green, Toughness = Soft, Fungus = Y, Appearance = Wrinkled we need to find whether the substance is poisonous or not.

Now by using the above formula, we try to find the probability of query point belong to classes Poisonous and not poisonous.

![](https://cdn-images-1.medium.com/max/2000/1*MnkWwH2lUgquh0tvwZKfRA.png)

![](https://cdn-images-1.medium.com/max/2000/1*ofh1YlRfe5FGzATEzyE0QQ.png)

Since we already calculated the likelihoods and priors in the training phase, we use them to solve.

*P(Poisonous=Y|Green,Soft,Yes,Wrinkled)= (4/7)*(2/4)*(1/4)*(2/4)*(3/4)
* **∴ *P(Poisonous=Y|Green,Soft,Yes,Wrinkled) = *0.0267857143**

*P(Poisonous=N|Green,Soft,Yes,Wrinkled)= (3/7)*(2/3)*(1/3)*(1/3)*(1/3)
***∴ *P(Poisonous= N|Green,Soft,Yes,Wrinkled) = *0.0105820106**

By looking at the probabilities we can say that the query substance is poisonous.
>  Now if you get a doubt that their probabilities should sum to 1. Then please go up and refer the formula once again. In the formula there is “directly proportional (∝)” symbol , not “equal to(=)” symbol. The reason will be discussed below.

## Derivation of Naive Bayes Algorithm

Our goal is to find the probability of a given query point **X** belonging to class **C_k**. Where X is a *vector/data_point/query* with **d** features **<x1, x2,… , xd>.**

![](https://cdn-images-1.medium.com/max/2000/1*G9cpLRGBv7w58cLhcp2R9g.png)

Since P(X) is constant we neglect it because we just need to know which class it belongs.

![](https://cdn-images-1.medium.com/max/2000/1*SLuCO8cCKWQaYemkTRVSNQ.png)

Now expanding X

![](https://cdn-images-1.medium.com/max/2000/1*OpYZ9OngfhRgJXHldmrZEA.png)

Now by using the [chain rule](https://en.wikipedia.org/wiki/Chain_rule_(probability)) for repeated applications of conditional probability.

![](https://cdn-images-1.medium.com/max/2000/1*0hekuVTJ2-vXzUGnbr22Tg.png)

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

Now let’s consider the same query point **(Color = Green, Toughness = Soft, Fungus = Y, Appearance = Wrinkled) **which we used in the above subsection.

Let’s use the above-derived formula to classify the query point. If we try to solve the first likelihood term from the formula, 
P(Color=Green| Toughness = Soft, Fungus = Y, Appearance = Wrinkled, Poisonous = Yes), There is no point in the data set with 
Toughness = Soft, Fungus = Y, Appearance = Wrinkled, Poisonous = Yes.
If we look back at the conditional probability formula, the formula works only when the probability of Event B happened is not equal to 0.

### To overcome this problem we make a naive assumption that the features in the data set are conditionally independent and modify our formula.

![](https://cdn-images-1.medium.com/max/2000/1*5WE4yVvFH2w5MV9tiLnMRQ.png)

Our modified formula is

![](https://cdn-images-1.medium.com/max/2000/1*JhiEWctniSp7VBFwQdlLOw.png)

This can be rewritten as

![](https://cdn-images-1.medium.com/max/NaN/1*XCX5kYnyhc635si16qJ6vQ.png)

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

## Laplace/Additive Smoothing

Note: don’t confuse with Laplacian smoothing

Let’s look at our dataset once again.

![](https://cdn-images-1.medium.com/max/NaN/1*eaquJb8raEbfI0c6mASKiw.png)

What if we get a query (Color = Red, Toughness = Soft, Fungus = N, Appearance = Wrinkled) and we have to find out whether it is poisonous or not.

![](https://cdn-images-1.medium.com/max/2184/1*6LZigkgL81F51oMjbII-rw.png)

![](https://cdn-images-1.medium.com/max/2000/1*w14_BPAWdlCGDRxAg3EQsA.png)

The probability of the query being both Poisonous and not poisonous is 0.
There may be a substance with color **Red** but since our data set has no data point with the color red, our model is unable to predict (just because one feature got new value). This happened because we have overfitted our model. overfitting means we have fixated our model to that data set without generalizing it.

To overcome this problem we do Laplace smoothing.
The formulation for computing likelihoods changes a little bit.

![](https://cdn-images-1.medium.com/max/2000/1*1Fe0yGNqyNa9_EihzSZ4DQ.png)

Let’s take α = 0.1 
Now let’s try to solve the same query.

![](https://cdn-images-1.medium.com/max/2000/1*tu0HSrCMCEcFCJZPOXO4mg.png)

![](https://cdn-images-1.medium.com/max/2000/1*l98sqiMykAkV8mEfGhd9jw.png)

Now if you look at probabilities, we can say that the query substance is poisonous.

## Hyper-Parameter tuning

Since alpha is a real number, it has infinite possibilities. But from the best practices we take a set of alpha values **α_set = [0.0001, 0.001, 0.01, 0.1, 1, 10, 100, 1000, 10000].**

**What is the right alpha(α)?
**alpha is a hyperparameter. We use cross-validation data to do hyperparameter tuning and find the right alpha. 
**How is hyperparameter tuning done?
**With each different alpha value from our α_set, we train a model. Using cross-validation data we find the accuracy of our model. We consider that alpha value as right alpha which gives high accuracy.

## What if the data set has Real-valued features instead of categorical features?

If our feature values are real-valued we make another assumption that the feature values follows [Gaussian/Normal distribution.](https://en.wikipedia.org/wiki/Normal_distribution)

Examples of real-valued features are Height, Weight, Price, Distance, etc.

We find the **mean( µ)** and **standard deviation( σ)** of the features and use this formula to compute likelihoods.

![](https://cdn-images-1.medium.com/max/2000/0*_1z9wA6clez4UyKS)

**Note: We don’t do Laplace smoothing when features are real valued. Laplace smoothing is done only when features have categorical values.**

## Using Log probabilities

All the values of likelihoods lie between value 0 to 1. 
When you multiply those likelihoods, the number of decimal places increases. 
Computers use bit representation to store information. To store floating point numbers computers use float data type. Even though a floating point number can have infinite decimal places, a computer’s storage is bounded and it will round the number if the number of decimal places increases than the limit.

![](https://cdn-images-1.medium.com/max/2000/1*0H8fSLycgLu37NdVjL2qfQ.png)

* Here float data type of 16 bits is used.

* It rounded **0.00000001** to **0.0 **because there are more number of decimal places.

* Because of this problem, given any query, the problem of belonging to a class will become zero.

To overcome this problem we use log probabilities. Our formula changes to

![](https://cdn-images-1.medium.com/max/2000/1*_qNGXGt3mmEJspaz3RWfsA.png)

### Why log?

log is a monotonically increasing function. For {*x* | 0< *x* < 1}, log(x) returns a number which can easily stored in a float data type.

![](https://cdn-images-1.medium.com/max/2416/1*4Uj_oPpCzyPyP57qxUG7Tw.png)

## Time Complexity

* In the training phase, we only compute likelihood probabilities and priors and its time complexity is **O(n * d).
**where **n** is the number of data points in the training data and **d** is the number of features.

* In the run phase, we find the product of likelihoods. The time complexity is **O(d).
**where **d** is the number of features.

## Impact of an imbalanced dataset

A dataset is called as imbalanced dataset if the class distribution is not uniform across the dataset.

**Example: *In a dataset of 10,000 data points, 5100 data points belong to positive class label and 4900 data points belong to the negative class label. This data set is a balanced dataset. The difference between the number of data points is not big.*
Example: *In a dataset of 10000 data points, 8900 data points belong to positive class label and 1100 data points belong to the negative class label. This data set is an imbalanced dataset. Here the difference between the number of data points is significantly big.***
>  The prior probability term in our Naive Bayes formulation would affect the output of model if the data is imbalanced.

![](https://cdn-images-1.medium.com/max/2000/1*yVvXbUChSJggPvdqcGXJyw.png)

* There is a simple hack to get rid of this problem. Just drop the class priors and the rest is okay.

![](https://cdn-images-1.medium.com/max/2000/1*6Z6v9UGIeBMYlUttwoGd0A.png)

## Feature Importance and Interpretability

Suppose you have trained a machine learning model which can detect whether the patient is cancerous or not. You will go and tell a doctor that this model can classify whether a patient is cancerous or not and ask him/her to use this model. But the doctor doesn’t satisfy, he can’t blindly trust your model. He also needs to know how the model is classifying, based on what assumptions. Along with the class label, if the model also gives its interpretation then the doctor would satisfy.

![model without interpretability.](https://cdn-images-1.medium.com/max/2426/1*khW4UgwfgeNCgP9GFdvADg.png)

![model with interpretability.](https://cdn-images-1.medium.com/max/2442/1*kVu7g2S2ov74y0tF_GKR_A.png)

Sometimes there may be so many features (>1000). We can’t use each and every feature for interpretation which will be absurd.

We will be using only those features which are important for classifying the query.

**How do we decide which features are important?**
In the Naive Bayes algorithm, we could use the features with greater likelihoods of belonging to a class label as important features for that specific class label.

## Best and Worst Cases

* We have taken a naive assumption that our features are conditionally independent. Our algorithm works very well if all the features of the data set are conditionally independent, and the performance decreases in the case where features are not conditionally independent.

* Time Complexity for training and testing is very low.

* Can get feature importance and the model is also interpretable.

* Naive Bayes algorithm is mostly used for text classification.

## Thanks for reading.

### Note: This blog was originally posted on [Medium](https://medium.com/@sanjeethboddi/naive-bayes-algorithm-from-scratch-715d7cc0de53).

