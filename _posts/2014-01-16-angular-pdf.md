---
layout: post
title:  "Open sourced: Angular PDF"
categories:
- web
- iot
abstract: I have been working with pdf in AngularJS for my current project. I decided to open source it as a directive under bower package manager. With this, a pdf file can be embedded directly into a web page with simple navigation functions.
---

**Angular-pdf** is an [AngularJS](http://angularjs.org/) directive based on [Mozilla's PDFJS](http://mozilla.github.io/pdf.js/). With this directive, a pdf file can be embedded into a web page with simple controls such as next/previous page, zooming, rotation and jump to a page.

<ol class="os">
  <li><a href="http://sayan.ee/angularjs-pdf/">demo</a></li>
  <li><a href="https://github.com/sayanee/angularjs-pdf/blob/master/readme.md">docs</a></li>
  <li><a href="https://github.com/sayanee/angularjs-pdf">source code</a></li>
  <li><a href="https://github.com/sayanee/angularjs-pdf/issues/new">feedback</a></li>
</ol>

Install it for current projects with [bower](http://bower.io/) or simply git clone:

<pre><code class="language-bash">bower install angular-pdf
# or
<!--email_off-->git clone git@github.com:sayanee/angularjs-pdf.git<!--/email_off-->
</code></pre>

And once the file `dist/angular-pdf.js` is integrated as a directive `<ng-pdf>` in the application, some simple navigations can be done to the pdf file.

<pre><code class="language-markup">&lt;div class="container" ng-controller="DocCtrl">
  &lt;ng-pdf template-url="viewer.html">&lt;/ng-pdf>
&lt;/div>
</code></pre>

![Angular-PDF preview](/img/ng-pdf.gif)

___

##The idea

I had the challenge to integrate over a thousand pdf files into a web application. This was a great idea as it was part of an effort to totally eliminate paper printing. Along with the ability to view and manipulate each pdf file with simple controls, there should also be a unique url for each pdf so that it can be bookmarked in the browser for future reference.

Hence, I used the [$routeParams](http://docs.angularjs.org/api/ngRoute.$routeParams) service to get the current route parameters. With some simple string concatenation, the path to the pdf is stored in the scope variable `$scope.pdfUrl` under the controller `DocCtrl`, which then can be used by the Angular-pdf directive to render the file.

<pre><code class="language-javascript">app.controller('DocCtrl', function($scope) {
  $scope.pdfUrl = '/path/to/all/pdf/' + $routeParams.pdfname + '.pdf';
});
</code></pre>

##Learning to open source

I'm still quite a newbie to open sourcing my code. As I build more and more software, I'm finding that open source is a great way to learn. Finding ways to modularize and releasing it as a package can not only decouple our code base, but it's also a fantastic way to give back to the very community I benefit from everyday.

Here are some links I found about why and how to open source:

1. [Open source everthing](http://tom.preston-werner.com/2011/11/22/open-source-everything.html)
1. [Open source code](http://mattgemmell.com/open-source-code/)
1. [How to get your code into an open source project](http://people.redhat.com/~rjones/how-to-supply-code-to-open-source-projects/)

I would love to have feedback on what are the elements of a good open source project and how I can integrate them into Angular-PDF or even future ones.

<p class="discussion">What are some good practices to incorporate when open sourcing?</p>

