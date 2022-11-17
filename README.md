# 99 Bottles of Beer

[99 Bottles of Beer](https://en.wikipedia.org/wiki/99_Bottles_of_Beer) is a
reverse counting song popular in the United States and Canada. The lyrics of the
first verse is as follows:

```
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around.
98 bottles of beer on the wall.
```

In each verse one bottle of beer is consumed until no bottles remain. In the
final verse the bottles are replenished:

```
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more.
99 bottles of beer on the wall.
```


## Assignment

Your task is to write a program that can produce the lyrics of the 99 Bottles of
Beer song. A skeleton solution is provided alongside [the README
file](./README.md). There are two source files, [song.js](./song.js) and
[song.test.js](song.test.js). The `song.js` file is currently almost empty and
the `song.test.js` contains a number of automated tests for the song lyrics. All
tests are currently disabled, i.e. marked as skipped.

Your job is to work in small steps, enabling one test at a time and implement
the smallest amount of logic to pass the newly enabled test. To enable a test,
simply replace `test.skip` with `test`. You can run the tests in whatever way
you like. If you are using an IDE, it is probably possible to run the tests
directly from there. Otherwise, you can run the tests from the command line
using the command below (assuming your current working directory is at the root
of the repository):

```bash
npm test
```

Out of the box, the command will produce output similar to the one below:

```
> test
> jest

Test Suites: 1 skipped, 0 of 1 total
Tests:       7 skipped, 7 total
Snapshots:   0 total
Time:        0.126 s, estimated 1 s
Ran all test suites.
```

As you work your way through the tests, fewer and fewer of them will be skipped.
In the end, no tests are skipped and all of them pass. When you run the tests
from the command line, you should see output similar to this:

```
> test
> jest

 PASS  ./song.test.js
  ✓ produces verse for 99 bottles (1 ms)
  ✓ produces verse for 98 bottles
  ✓ produces verse for 2 bottles
  ✓ produces verse for 1 bottle
  ✓ produces verse for 0 bottles
  ✓ produces several verses (1 ms)
  ✓ produces whole song

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        0.127 s, estimated 1 s
Ran all test suites.
```

When all tests are passing, you are done.


## Getting started

In order to get started you make a clone or copy of the repository hosting this
README file. You also need to have [git](https://git-scm.com/) and [the
npm](https://www.npmjs.com/) command line utility installed on your computer.
You many use any code editor or IDE that you like.


## Delivery

Your solution should be delivered as a git repository, either hosted somewhere
on the web - for instance on [GitHub](https://github.com/) - or sent [via
e-mail](mailto:eric.thelin@zingtongroup.com). If you choose to send your
solution by e-mail, it is best to zip the repository in order to reduce the
likelihood of the message being stopped by spam filters.


## Rules

In order to follow how you worked your way to the final solution **there should
be at least one commit per enabled test**. Since there are seven tests in
total, that means that the smallest number of allowed commits in the delivered
repository is also seven. However, you may choose to have additional commits for
refactorings and so on.

Here are some more rules you should try to follow:

 1. Never commit when the tests are failing.
 2. Only enable one test at a time.
 3. Try to write the smallest amount of logic needed to make the newly enabled
    test to pass. This means you should not deliver the whole solution in a single
    commit but rather in a stepwise fashion were the solutions grows and evolves as
    you enable more and more of the tests.
 4. After getting a test to pass, it should never fail again. Nor should it be
    marked as skipped.


## Evaluation

When evaluating your solution, we will of course look at the final solution and
evaluate it from a couple of perspectives, such as:

 1. Fulfilling the requirements (Passes all the tests)
 2. Simplicity
 3. Readability
 4. Extensibility

However, we will also look at the commit history to see how you worked your way
to the solution. Please take care to make each commit a cohesive piece of change.


## Final Notes

If you have any questions, please [reach
out](mailto:eric.thelin@zingtongroup.com), and we will try to respond in a
timely fashion.

Good luck!
