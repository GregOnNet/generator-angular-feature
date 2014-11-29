'use strict';

module.exports = {

  parse : function(argv) {

    if (argv === undefined ||
        !argv[2])
      throw new Error('Please specify a valid name for your feature!');

    return argv[2].replace(/\s+/g, '');
  }
}
