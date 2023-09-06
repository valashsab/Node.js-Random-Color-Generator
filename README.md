Application that will return a random color in the command line.

It should work like this:

1. user input node index.js
   ###############################
   ###############################
   ############################### ##### ##### ##### #edff28 ##### ##### #####
   ###############################
   ###############################
   ###############################
2. user input node index.js <color>
   ###############################
   ###############################
   ############################### ##### ##### ##### #edff28 ##### ##### #####
   ###############################
   ###############################
   ###############################
3. user input node index.js <color> <luminosity>
   node index.js red
   ###############################
   ###############################
   ############################### ##### ##### ##### #edff28 ##### ##### #####
   ###############################
   ###############################
   ###############################
4. user input node index.js <sth not supported>

In addition to node index.js, it should also be able to accept the request for a:

hue (e.g. green or red or blue)
luminosity (e.g. light or dark)
...and then generate random colors that match those choices.

For example:

- node index.js red light
- node index.js blue dark
