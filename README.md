Application that will return a random color in the command line.

It should work like this:

node index.js
###############################
###############################
###############################

#####

##### #4c56aa

#####

###############################
###############################
###############################

node index.js
###############################
###############################
###############################

#####

##### #ff72d2

#####

###############################
###############################
###############################

In addition to node index.js, it should also be able to accept the request for a:

hue (e.g. green or red or blue)
luminosity (e.g. light or dark)
...and then generate random colors that match those choices.

For example:

- node index.js red
- node index.js blue darf
