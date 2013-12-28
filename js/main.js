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
    'There is no passion to be found in settling for a life<br>that is less than the one you are capable of living.<br>~ Nelson Mandela',
    'The folks I know who took the risk to write their own destiny<br>are the ones who seem to enjoy it the most.<br>~ <a href="https://twitter.com/scottbelsky/status/416384582053666816">Scott Belsky</a>',
    'The monotony of a quiet life stimulates the creative mind.<br>~ Albert Einstein',
    'I never am really satisfied that I understand anything; because understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand.<br>~ Ada Lovelace',
    'Most people do not listen with the intent to understand; they listen with the intent to reply.<br>~ Stephen R. Covey',
    'You will never find out what you can do, until you do all you can to find out.<br>~ John C. Maxwell',
    'To avoid criticism, say nothing, do nothing, be nothing.',
    'I\'m enchanted to observe that in recent times the universe and its contents have risen to serve as the artist\'s muse.<br>~ <a href="https://twitter.com/neiltyson/status/415326930825904128">Neil deGrasse Tyson</a>',
    'The meaning of life is to find your gift. The purpose of life is to give it away.<br>~ <a href="https://twitter.com/dam/status/411043479393812480">Pablo Picasso</a>',
    'To follow the path: look to the master, follow the master, walk with the master, see through the master, become the master.<br>~ <a href="https://twitter.com/creationix/status/408702633617420288">Zen</a>',
    'You want to say no at the right time and you want to say yes more sparingly.<br>~ <a href="http://99u.com/workbook/18460/bill-murray-saying-yes-can-imprison-you">Bill Murray</a>'
  ];
  var min = 0;
  var max = quotationList.length - 1;
  var randomQuote = Math.floor(Math.random() * (max - min + 1) + min);

  quotation.innerHTML = quotationList[randomQuote];

})();
