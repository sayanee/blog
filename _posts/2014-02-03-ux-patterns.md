---
layout: post
title:  "UX Patterns with Code"
categories:
- web
- iot
abstract: A demo of 6 user experience patterns for web applications that aids info search and decision making.
---

<div ng-app="App">

  <p>The coolest thing about being a full-stack engineer is that I get to dabble in all parts of development including <a href="http://en.wikipedia.org/wiki/User_experience">ux</a>, frontend, backend and <a href="http://en.wikipedia.org/wiki/DevOps">devops</a>. While I love the coding aspect, the real test of the software comes when the user ultimately gets to interact with it.</p>

  <p>My current project's tech stack included <a href="http://rubyonrails.org/">Rails</a> as a pure <a href="https://github.com/rails-api/rails-api">api</a> server, along with <a href="http://angularjs.org/">AngularJS</a> as a stand-alone frontend and <a href="http://aws.amazon.com/">AWS</a> for deployment. In terms of user interaction, I had 2 main challenges:</p>

  <ol>
    <li>Querying from large volume of data</li>
    <li>Displaying the right amount of data to the user</li>
  </ol>

  <p>As I was displaying the query results from the backend to the frontend, I realised I kept using these 6 patterns. They were implemented in <a href="http://angularjs.org/">AngularJS</a>, but in terms of user interaction the tool is of course flexible.</p>

  <h2>1. auto complete search</h2>

  <p>Users love it when they come to a clean page with a big focus on just the search bar. Yes, a very Google-like clean design. In the following demo, the user <strong>already knows the search term</strong> e.g. a serial number, name of person, etc. As the typing progresses, the search result becomes narrower quickly reducing to just the right number of info required by the user.</p>

  <div class="demo">

    <a class="code" href="http://plnkr.co/edit/IuaW3l2WiN9Mi60r1FUC?p=preview">code</a>
    <div ng-controller="PlanetsCtrl">
      <input type="text" class="textbox" ng-model="searchPlanets" placeholder="Planet name in the Solar System. E.g. Saturn" autofocus>
      <ol ng-show="searchPlanets">
        <li ng-repeat='planet in planets | filter:searchPlanets'>
          <strong>{{ "{{planet.name" }}}}</strong> at {{ "{{planet.distance" }}}} AU
        </li>
      </ol>
    </div>

  </div>

  <h2>2. search within</h2>

  <p>In the following search pattern, a certain number of possible results are already displayed for the user to see and then search within them. This is because, the user is <strong>yet to know what is available</strong>. The use case can be banking transactions or incoming donation amounts. Also, the user can type in any search terms apart from the main item. For example, in the demo below apart from the book name, the user can also search by author or year.</p>

  <p>Another interesting pattern is the <strong>sorting order</strong> of the displayed list. If there is a date and oldest item should be processed first (<a href="http://en.wikipedia.org/wiki/FIFO">FIFO</a>), then the list should be <strong>chronological</strong> (oldest is the first item). If the list is for activity monitoring e.g. transactions, then the order becomes <strong>reverse chronological</strong> (newest is the first item).</p>

  <div class="demo">

    <a class="code" href="http://plnkr.co/edit/RxFzsjPR5h3pVGHl0ywj?p=preview">code</a>
    <div ng-controller="BooksCtrl">
      <input type="text" class="textbox" ng-model="searchBooks" placeholder="Search book name, author or year">
      <ol>
        <li ng-repeat='book in books | filter:searchBooks'>
          <strong>{{ "{{book.name" }}}}</strong> by {{ "{{book.author" }}}} <em>[{{ "{{book.published" }}}}]</em>
        </li>
      </ol>
    </div>

  </div>

  <h2>3. emphasized selected item</h2>

  <p>This is a common pattern to emphasize the chosen item among a list. The subtle visual cue helps in pointing out the selection from a large data set. In the following demo, the entire row becomes colored when the user selects the checkbox.</p>

  <div class="demo">

    <a class="code" href="http://plnkr.co/edit/dNoeYpj67NtlZ1JhFqFu?p=preview">code</a>
    <div ng-controller="BooksCtrl">
      <table class="table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Book name</th>
            <th>Author</th>
          </tr>
        </thead>
        <tr ng-repeat='book in books' ng-class="{'demo-selected': (book.selected == true)}">
          <td><input type="checkbox" class="check-ctr" ng-model="book.selected"></td>
          <td>{{ "{{book.name" }}}}</td>
          <td>{{ "{{book.author" }}}}</td>
        </tr>
      </table>
    </div>

  </div>

  <h2>4. sequential steps</h2>

  <p>If the user has to perform some sequential steps and the answer to the current step depends on the previous one, then the following patterns aid the user in focusing on the current step:</p>

  <ol>
    <li>Hide all future steps</li>
    <li>Reveal one step at a time</li>
    <li>Disable input/action buttons to all previous steps</li>
    <li>Display input/action buttons for the current action only</li>
  </ol>

  <div class="demo">
    <a class="code" href="http://plnkr.co/edit/hUNpBTpPGHGXvSnxXEtw?p=preview">code</a>
    <ol>
      <li>Pick a number from 1-10 <button class="button" ng-hide="(count > 0)" ng-click="count = count + 1" ng-init="count=0">OK</button></li>
      <li ng-show="(count > 0)">Multiply that number by 9 <button class="button" ng-hide="(count > 1)" ng-click="count = count + 1">OK</button></li>
      <li ng-show="(count > 1)">Add up the digits to the previous answer <button class="button" ng-hide="(count > 2)" ng-click="count = count + 1">OK</button></li>
      <li ng-show="(count > 2)">Subtract 5 from that number <button class="button" ng-hide="(count > 3)" ng-click="count = count + 1">OK</button></li>
      <li ng-show="(count > 3)">Find the alphabet that corresponds to the number <button class="button" ng-hide="(count > 4)" ng-click="count = count + 1">OK</button></li>
      <li ng-show="(count > 4)">Think of a country whose name starts with that letter <button class="button" ng-hide="(count > 5)" ng-click="count = count + 1">OK</button></li>
      <li ng-show="(count > 5)">Take the 2nd alphabet of that country and think of an animal <button class="button" ng-hide="(count > 6)" ng-click="count = count + 1">OK</button></li>
      <li ng-show="(count > 6)">Think of the color of that animal <button class="button" ng-hide="(count > 7)" ng-click="count = count + 1">OK</button></li>
      <li ng-show="(count > 7)">Sadly, <strong>grey elephants</strong> aren't found in <strong>Denmark</strong> :-)</li>
    </ol>
  </div>

  <h2>5. disabled action button</h2>

  <p>The following ux pattern helps the user keep a track while the selection is being made and guides the user upon each selection. Certain elements are also disabled so that the interface itself acts to allow only valid inputs.</p>

  <p>The implementation can be summarised as:</p>

  <ol>
    <li>Guiding words change as the user selects</li>
    <li>Upon selecting all the required items:
      <ul>
        <li>the final action button appears</li>
        <li>selection/input buttons for unselected items are disabled</li>
      </ul>
  </ol>

  <p>In the following demo, upon choosing any 3 books, not only the action button appears, but the checkboxes for the unselected items are also disabled.</p>

  <div class="demo" ng-controller="BooksCtrl">
    <a class="code" href="http://plnkr.co/edit/PS4TCagaidIYwd30rIQd?p=preview">code</a>

    <p ng-hide="(count == 0)">Choose <strong>{{ "{{count" }}}}</strong> <span ng-show="(count < 3)">more</span> book<span ng-hide="(count == 1)">s</span></p>
    <button class="button" ng-show="(count == 0)">Get the books!</button>

    <table class="table" ng-hide="(booksOrdered == true)">
      <tr ng-repeat='book in books' ng-class="{'demo-selected': (book.chosen == true)}">
        <td><input ng-hide="(count == 0) && (book.chosen == false)" type="checkbox" class="check-ctr" ng-model="book.chosen" ng-init="book.chosen=false" ng-click="updateCount(book)"></td>
        <td>{{ "{{book.name" }}}}</td>
      </tr>
    </table>

  </div>

  <h2>6. more info on demand</h2>

  <p>Finally, in this ux pattern the user has the <strong>choice of displaying more information</strong> upon selecting an individual item. Often, we can query the server for all the information related to an individual item, but viewing them at one go might be too overwhelming for the user. In this case, only the most asked information is displayed first, leaving it to the user's discretion to reveal more information.</p>

  <p>Often, I love to <a href="http://codepen.io/bbodine1/pen/novBm">style these checkboxes</a> as switches or push button to give a more visual context on what the user can see upon clicking it.</p>

  <div class="demo" ng-controller="BooksCtrl">
    <a class="code" href="http://plnkr.co/edit/NLVzEsdVyhbdwdhfrs2H?p=preview">code</a>

    <table class="table">
      <thead>
        <tr>
          <th>More</th>
          <th>Book name</th>
        </tr>
      </thead>
      <tr ng-repeat='book in books' ng-class="{'demo-selected': (book.chosen == true)}">
        <td class="demo-fixed"><input type="checkbox" class="check-ctr" ng-model="book.chosen" ng-init="book.chosen=false"></td>
        <td>
          {{ "{{book.name" }}}}
          <p ng-if="book.chosen">{{ "{{book.summary" }}}}</p>
        </td>
      </tr>
    </table>

  </div>

  <h2>Learning about UX</h2>

  <p>I found the following resources on common patterns as well as good examples of ux implementations for both web and mobile apps.</p>

  <ol class="ideas">
    <li><a href="http://www.lukew.com/ff/entry.asp?1826">Best UX patterns for mobile apps</a></li>
    <li><a href="http://uxdesign.smashingmagazine.com/2009/01/12/10-useful-web-application-interface-techniques/">Useful web app interface techniques</a></li>
    <li><a href="http://ui-patterns.com/">UI Patterns</a></li>
    <li><a href="http://quince.infragistics.com/html/AllPatterns.aspx">Public patterns</a></li>
  </ol>

  <p>As I am getting to work with larger and larger data set, I'm actually enjoying going through the thinking of what will ease the user into finding the right information and making a clear decision. As much as possible, these can be built into the interface. And I would love to know more know how we can do them so as it make it as intuitive as possible to the user. </p>

  <p class="discussion">What are other UX patterns that can aid the user in info search and decision making?</p>

</div>

<style>
.demo-selected{ background-color: #ddd;}
.demo-fixed{width:20px; vertical-align: baseline;}
</style>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.10/angular.min.js"></script>
<script>

var app = angular.module('App', []);

app.controller('BooksCtrl', function($scope) {

  $scope.books = [
    { name: 'Design Patterns', author: 'Gang of 4', published: '1994', summary: 'Elements of Reusable Object-Oriented Software' },
    { name: 'Getting Started with Electronics', author: 'Forrest M. Mims', published: '1983', summary: 'Teaches you the basics, takes you on a tour of analog and digital components' },
    { name: 'Design of Everyday Things', author: 'Donald A. Norman', published: '1988', summary: 'A powerful primer on how-and why-some products satisfy customers while others only frustrate them.' },
    { name: 'The Feynman Lectures on Physics', author: 'Richard Feynman', published: '1964', summary: 'Lectures on mathematics, electromagnetism, Newtonian physics, quantum physics, and the relation of physics to other sciences' },
  ];

  $scope.count =  3;

  $scope.updateCount = function(book) {
    if(book.chosen) $scope.count += 1;
    else $scope.count -= 1;
  }

});

app.controller('PlanetsCtrl', function($scope) {

  $scope.planets = [
    { name: 'Mercury'   , distance: '0.39' },
    { name: 'Venus'     , distance: '0.72' },
    { name: 'Earth'     , distance: '1' },
    { name: 'Mars'      , distance: '1.52' },
    { name: 'Jupiter'   , distance: '5.20' },
    { name: 'Saturn'    , distance: '9.52' },
    { name: 'Uranus'    , distance: '19.21' },
    { name: 'Neptune'   , distance: '30.09' }
  ];
});

</script>
