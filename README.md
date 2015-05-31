Showdown Extension Boilerplate
==============================

**A boilerplate that can be used to jumpstart your showdown extension development**


## Installation

Download the source at https://github.com/showdownjs/extension-boilerplate/archive/master.zip and extract its contents 
to the directory of your choice.

In order to use the boilerplate effectively, node and grunt should be installed and running in your system.
Please refer to [npm documentation][1] and [grunt documentation][2] for instructions in how to properly install and configure both.


## Quick Usage Guide

 1. Open and edit `package.json` with your extension information.
 
 2. Install all package dependencies:
    ```bash
    npm install
    ```
 
 3. Preprare the boilerplate and update configuration by running the following command:
     ```bash
     grunt prepare
     ```
     This task does 2 things:
      1. updates `bower.json` and `component.json` to match the contents of `package.json`
      2. renames the main file in src to match `package.json`.`name` attribute
     
     Note: Don't forget to check if the values were copied properly. 
     Also, dependencies may vary between npm, bower and compoenent.
 
 4. A boilerplate of a generic extension is provided in `src/<your-extension-name>.js` so you can edit and build your 
    extension file from there
 
 5. Some generic tests are also provided in `test/<your-extension-name>.js`.
 
 6. Run the lint, jscs and test case with this command:
    ```bash
    grunt test
    ```

 7. Prepare your release with prepare-release

[1]: https://docs.npmjs.com/getting-started/installing-node
[2]: http://gruntjs.com/getting-started
