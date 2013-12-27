(function () {
  'use strict';

  console.log('%c Yo fellow techie!', 'background: #222; color: #bada55');

  var quotation = document.getElementsByClassName('quote')[0];
  var quotationList = [
    'Whatever you can do, or dream you can, begin it.<br>Boldness has genius, magic, and power in it.<br>Begin it now.<br>~ Goethe',
    'The only people who get paid enough, get paid what they\'re worth are people who don\'t follow the instruction book, who create art, who are innovative, who work without a map. That option is now available to everyone so take it.<br>~ Seth Godin',
    'Stop waiting for things to happen. Go out and make them happen.',
    'It is the greatest of all mistakes to do nothing<br>because you can only do little - do what you can.<br>~ Sydney Smith',
    'You are the universe, expressing itself as a human for a little while.<br>~ Eckhart Tolle',
    'Decide that you want it more than you are afraid of it.<br>~ Bill Cosby',
    'Change will lead to insight far more than insight will lead to change.<br>~ Milton Erickson',
    'Uncertainty is an uncomfortable position. But certainty is an absurd one.<br>~ Voltaire',
    'Being right keeps you in place, being wrong forces you to explore.<br>~Steven Johnson',
    'Live as if you were living already for the second time and as if you had acted the first time as wrongly as you are about to act now!<br>~ Viktor Frankl',
    'You are what you settle for.',
    '"What day is it?" asked Pooh.<br>"It is today." squealed Piglet.<br>"My favourite day" said Pooh.',
    'The cure for boredom is curiosity. There is no cure for curiosity.<br>~ Dorothy Parker',
    'Live the full life of the mind, exhilarated by new ideas,<br>intoxicated by the romance of the unusual.<br>~ Ernest Hemingway',
    'He who works with his hands is a laborer.<br>He who works with his hands and his head is craftsman.<br>He who works with his hands, his head and his heart is an artist.<br>~ St. Francis of Assisi',
    'If your biggest dreams in life can be found on sale in a catalog,<br>you should try dreaming bigger.',
    'It\'s your road and yours alone.<br>Others may walk it with you, but no one can walk it for you.<br>~ Rumi',
    'It doesn\'t get easier. You just get stronger',
    'It is possible that your next frontier isn\'t to get more efficient.<br>It is just to get more brave<br>~Seth Godin',
    'Work for a case, not for applause.<br>Live life to express not to impress.<br>Don\'t strive to make your presence noticed. Just make your absence felt.',
    'You will never find time for anything. You must make it.<br>~ Charles Burton',
    'A bird sitting on a tree is never afraid of the branch breaking<br>because its trust is not on the branch, but its own wings',
    'Liberate yourself from the need to be right.<br>~ Seth Godin',
    'Be less curious about people and more curious about ideas.<br>~ Marie Curie',
    'Don\'t compare your beginnings to someone else\'s middle.<br>~ Jon Cuff',
    'I don\'t wait for moods. You can accomplish nothing if you do that.<br>Your mind must know it has to get down to work.<br>~ Pearl S. Buck',
    'All great things take time',
    'The easiest thing is to react.<br>The second easiest thing is to respond.<br>But the hardest things is to initiate.<br>~ Seth Godin',
    'There is no passion to be found in settling for a life<br>that is less than the one you are capable of living.<br>~ Nelson Mandela'
  ];
  var min = 0;
  var max = quotationList.length - 1;
  var randomQuote = Math.floor(Math.random() * (max - min + 1) + min);

  quotation.innerHTML = quotationList[randomQuote];

})();
