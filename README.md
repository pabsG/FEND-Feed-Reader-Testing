# FEND-project-4

## Table of Contents

* [Description](#Description)
* [RSS Feeds](#RSS-Feeds)
* [Jasmine Tests](#Jasmine-Tests)

## Description

This is a simple RSS feed reader application that takes different feeds as specified on the app.js file. To run, open the index.html file on any modern web browser.

The intent of this project was to understand how to write a test file against the Javascript provided. All the HTML, CSS, and the app.js files were provided by Udacity. I wrote the feedreader.js file using Jasmine's development framework.

For more information on Jasmine visit [jasmine.github.io](https://jasmine.github.io).

## RSS Feeds

The feeds in this app are being pulled from the following sites:

* [Udacity Blog](http://blog.udacity.com/feed)
* [CSS Tricks](http://feeds.feedburner.com/CssTricks)
* [html5rocks](http://feeds.feedburner.com/html5rocks)
* [Linear Digressions](http://feeds.feedburner.com/udacity-linear-digressions)

## Jasmine Tests

All tests were written using the Jasmine framework. The elements being tested are the RSS feeds objects in the app.js file, the menu button, and the functions that pull the articles and feeds themselves.

The tests results are loaded right into the index.html file, immediately below the app. All tests are functional and pass.
