angular.module('concertsServices', [])

.factory('Concerts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var concerts = [{
    id: 1,
    month: 1,
    monthName: 'January',
    day: '10',
    venue: 'O2 Arena Dublin 1',
    description: 'The Monkees are playing at 8pm at the O2 Arena, Dublin 1 on January 10th, 2016.',
    url: 'http://www.ticketmaster.ie/section/concerts?tm_link=tm_homeA_music_header'
  }, {
    id: 2,
    month: 2,
    monthName: 'February',
    day: '14',
    venue: 'Olympia Theatre Dublin 2',
    description: 'The Monkees are playing at 8pm at the Olympia Theatre, Dublin 2 on February 14th, 2016.',
    url: 'http://www.ticketmaster.ie/section/concerts?tm_link=tm_homeA_music_header'
  }, {
    id: 3,
    month: 3,
    monthName: 'March',
    day: '19',
    venue: 'O2 Arena Dublin 1',
    description: 'The Monkees are playing at 8pm at the Olympia Theatre, Dublin 2 on March 17th, 2016.',
    url: 'http://www.ticketmaster.ie/section/concerts?tm_link=tm_homeA_music_header'
  }, {
    id: 4,
    month: 4,
    monthName: 'April',
    day: '20',
    venue: 'Olympia Theatre Dublin 2',
    description: 'The Monkees are playing at 8pm at the Olympia Theatre, Dublin 2 on April 20th, 2016.',
    url: 'http://www.ticketmaster.ie/section/concerts?tm_link=tm_homeA_music_header'
  }, {
    id: 5,
    month: 5,
    monthName: 'May',
    day: '20',
    venue: 'Gate Theatre Dublin 1',
    description: 'The Monkees are playing at 8pm at the Olympia Theatre, Dublin 2 on May 20th, 2016.',
    url: 'http://www.ticketmaster.ie/section/concerts?tm_link=tm_homeA_music_header'
    }, {
    id: 6,
    month: 6,
    monthName: 'June',
    day: '20',
    venue: 'Abbey Theatre Dublin 1',
    description: 'The Monkees are playing at 8pm at the Olympia Theatre, Dublin 2 on June 20th, 2016.',
    url: 'http://www.ticketmaster.ie/section/concerts?tm_link=tm_homeA_music_header'
  }, {
    id: 7,
    month: 7,
    monthName: 'July',
    day: '10',
    venue: 'O2 Arena Dublin 1',
    description: 'The Monkees are playing at 8pm at the Olympia Theatre, Dublin 2 on July 10th, 2016.',
    url: 'http://www.ticketmaster.ie/section/concerts?tm_link=tm_homeA_music_header'
  }, {
    id: 8,
    month: 8,
    monthName: 'August',
    day: '14',
    venue: 'Olympia Theatre Dublin 2',
    description: 'The Monkees are playing at 8pm at the Olympia Theatre, Dublin 2 on August 14th, 2016.',
    url: 'http://www.ticketmaster.ie/section/concerts?tm_link=tm_homeA_music_header'
  }, {
    id: 9,
    month: 9,
    monthName: 'September',
    day: '10',
    venue: 'O2 Arena Dublin 2',
    description: 'The Monkees are playing at 8pm at the Olympia Theatre, Dublin 2 on September 10th, 2016.',
    url: 'http://www.ticketmaster.ie/section/concerts?tm_link=tm_homeA_music_header'
  }, {
    id: 10,
    month: 10,
    monthName: 'October',
    day: '14',
    venue: 'Olympia Theatre Dublin 2',
    description: 'The Monkees are playing at 8pm at the Olympia Theatre, Dublin 2 on October 14th, 2016.',
    url: 'http://www.ticketmaster.ie/section/concerts?tm_link=tm_homeA_music_header'
  }, {
    id: 11,
    month: 11,
    monthName: 'November',
    day: '10',
    venue: 'Abbey Theatre Dublin 1',
    description: 'The Monkees are playing at 8pm at the Olympia Theatre, Dublin 2 on November 10th, 2016.',
    url: 'http://www.ticketmaster.ie/section/concerts?tm_link=tm_homeA_music_header'
  }, {
    id: 12,
    month: 12,
    monthName: 'December',
    day: '14',
    venue: 'Olympia Theatre Dublin 2',
    description: 'The Monkees are playing at 8pm at the Olympia Theatre, Dublin 2 on December 14th, 2016.',
    url: 'http://www.ticketmaster.ie/section/concerts?tm_link=tm_homeA_music_header'
  }];

  return {
    all: function() {
      return concerts;
    },
    remove: function(concerts) {
      concerts.splice(concerts.indexOf(concerts), 1);
    },
    get: function(concertsId) {
      for (var i = 0; i < concerts.length; i++) {
        if (concerts[i].month === parseInt(concertsMonth)) {
          return concerts[i];
        }
      }
      return null;
    }
  };

});