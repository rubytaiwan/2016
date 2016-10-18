RubyConf Taiwan 2016 Website
===

### Requirement

* Node 5.12+
* NPM 3.0+

### Installation

To prepare the requirement environment, just run below command

> $ npm install

### Usage

Run local server and develop website

> $ npm run serve

Generate static website

> $ npm run build

Deploy to Github Pages

> $ npm run deploy

### Known Issue

There have some problem have to deal with webpack.

#### YAML auto reload

If you update the data written in YAML, you have to restart the server.
The problem is `slm-loader` return a template function but it cannot generate static html.
So, we patch it and use modified version, but this cause our YAML have to restart server to reload it.

#### Assets

The webpack think everything should `require` inside your javascript.
So cannot copy a folder into another folder.
Even we can use `glob` function to add all images, but this way may cause us load too many unused images.
Therefore, if you want add image, just require it inside `src/resources.js`

