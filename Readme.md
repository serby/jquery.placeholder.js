# jquery.placeholder.js

A jQuery plugin that provides failover for browsers that don't support the native [HTML5 placeholder](http://dev.w3.org/html5/spec/Overview.html#the-placeholder-attribute) attribute. Placeholders allow text inputs and textareas to display a placeholder message until they get focus, at which point the input box is set to empty.

## Usage

There are 2 ways to use jquery-placeholder.js:

### Native Placeholder Failover

This will provide failover for the placeholder attribute on text inputs and textareas for Internet Explorer 7 and 8

    <input type="text" name="emailAddress" placeholder="Enter your email address" />
    <textarea name="about" placeholder="Tell us about yourself" />

    <script src="jquery-placeholder.js">
    <script>
        $('input[type=text], textarea').placeholder();
    </script>

### Explict

This method can be used to add failover for Internet Explorer 6

    <input type="text" name="emailAddress" />
    <input type="text" name="firstName" />
    <input type="text" name="lastName" />

    <script src="jquery-placeholder.js">
    <script>
        $('input[name=emailAddress]').placeholder('Enter your email address');
        $('input[name=firstName]').placeholder('Enter your first name');
        $('input[name=lastName]').placeholder('Enter your last name');
    </script>

## Form Submission

In browsers that don't have native placeholder support, the form submit event will be added to and the value of the inputs and textareas will be cleared if they still match the placeholder text.

## Credits
[Paul Serby](https://github.com/PabloSerbo/), [Ben Gourley](http://github.com/bengourley/)

## Licence
jquery.placeholder.js is licenced under the [New BSD License](http://opensource.org/licenses/bsd-license.php)