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
    'Work for a cause, not for applause.<br>Live life to express not to impress.<br>Don\'t strive to make your presence noticed. Just make your absence felt.',
    'You will never find time for anything. You must make it.<br>~ <a href="http://books.google.com.sg/books?id=0shmmQnfJIAC&pg=PA506&lpg=PA506&dq=charles+burton+you+will+never+find+time+for+anything.+you+must+make+it&source=bl&ots=7miVFTs5Ns&sig=qpI0N8XZxDz0gkK5sW2yjNb1YTg&hl=en&sa=X&ei=KHDcUvnOHYfqrAfInYCwAw&ved=0CHMQ6AEwDA#v=onepage&q=charles%20burton%20you%20will%20never%20find%20time%20for%20anything.%20you%20must%20make%20it&f=false">Charles Burton</a>',
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
    'Saying "no" has more creative power than ideas, insights, and talent combined. "No" guards time, the thread from which we weave our creations .<br>~ <a href="http://www.inc.com/the-build-network/secret-to-creativity-saying-no.html">INC</a>',
    'In every work of genius we recognize our own rejected thoughts.<br>~ Ralph Waldo Emerson',
    'The mind is sharper and keener in seclusion and uninterrupted solitude. No big laboratory is needed in which to think. Originality thrives in seclusion free of outside influences beating upon us to cripple the creative mind. Be alone, that is the secret of invention; be alone, that is when ideas are born.<br>~ Nikola Tesla',
    'Creative work is not a selfish act or a bid for attention on the part of the actor. It\'s a gift to the world and every being in it. Don\'t cheat us of your contribution. Give us what you\'ve got.<br>~ War of Art',
    'We have a right to our labor but not to the fruits of our labor.<br>~ Krishna to Arjun, Mahabharata',
    'The desire to write grows with writing.<br>~ Desiderius Erasmus',
    'First there is a mountain. Then there is no mountain. Then there is.<br>~ Zen proverb',
    'The point is that you learn how to make your work by making your work, and a great many of the pieces you make along the way will never stand out as finished art. The best you can do is make art you care about — and lots of it!<br>~ Art and Fear',
    'Most of us have two lives. The life we live, and the unlived life within us.<br>Between the two stands Resistance.<br>~ War of Art, Steven Pressfield',
    'Eternity is in love with the creations of time.<br>~ William Blake',
    'What you need to know about the next piece is contained in the last piece.<br>The place to learn about your execution is in your execution.<br>Put simply, your work is your guide: a complete, comprehensive, limitless reference book on your work.<br>~ Art & Fear',
    'In matters of change, the compass is more important than the clock.<br>~ Abraham Lincoln',
    'Never doubt that a small group of thoughtful, committed citizens can change the world.<br>Indeed, it is the only thing that ever has.<br> ~ Margaret Mead',
    'Just as a well-filled day brings blessed sleep, so a well-employed life brings a blessed death.',
    'Become who you are by learning who you are.<br>~ Pindar, Greek poet',
    'One can have no smaller or greater mastery than mastery of oneself.<br>~ Leonardo da Vinci',
    'Poor is the apprentice who does not surpass his Master.<br>~ Leonardo da Vinci',
    'Chance favors only the prepared mind.<br> ~ Louis Pasteur',
    'It is in fact the height of selfishness to merely consume what others create and to retreat into a shell of limited goals and immediate pleasures.<br>~ Mastery by Robert Greene',
    'Every child is an artist, the problem is staying an artist when you grow up.<br>~ Pablo Picasso',
    'Two things define you:<br>You patience when you have nothing,<br>And your attitude when you have everything.',
    'Civilisation advances by extending the number of important operations when we can perform without thinking about them.<br>~ <a href="http://m.theatlantic.com/magazine/archive/2013/11/the-great-forgetting/309516/">Alfred North Whitehead</a>',
    'Any sufficiently advanced technology is indistinguishable from magic.<br>~ Arthur C. Clake\'s 3 Laws',
    'It is possible to be unselfish without a moral code, sophisticated without an education, and beautiful wearing a skeleton on the outside.<br>~ <a href="http://www.brainpickings.org/index.php/2013/09/10/sex-on-six-legs-marlene-zuk/">Marlene Zuk</a>',
    'I\'ve known people who have not mastered their tools who are good programmers, but not a tool master who remained a mediocre programmer.<br>~ <a href="https://twitter.com/KentBeck/status/398623270917771264">Kent Beck</a>',
    'A thing is not right because we do it.<br>A method is not good because we use it.<br>Equipment is not best because we own it.<br>~ John Aldair',
    'If you are asked to look for a needle in a haystack, you search until you find it, whereas I search until I find all the needles.<br>~ Albert Einstein',
    'How I was able to discover the Laws of Gravity? By thinking of it continuously.<br>~ Issac Newton',
    'Most things are yet to be done. Glorious future!<br>~ Ingvar Kamprad',
    'If I have seen further, it is by standing on the shoulders of giants.<br>~ Issac Newton',
    ' I learned very early the difference between knowing the name of something and knowing something.<br>~ Richard Feynman'
  ];
  var min = 0;
  var max = quotationList.length - 1;
  var randomQuote = Math.floor(Math.random() * (max - min + 1) + min);

  quotation.innerHTML = quotationList[randomQuote];

})();
