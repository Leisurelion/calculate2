# js.

## Indentation and Formatting

- Use 2 or 4 spaces for indentation.
- Add spaces around curly braces in code blocks for better readability.

```js

if (condition) {
  // Code block
} else {
  // Code block
}
```

## Variable Naming

- Variable names should be descriptive to convey their purpose.
- Use camelCase for variable naming, e.g., `memorys1` instead of `memorys1`.
- Avoid using single letters or abbreviations for variable names to enhance readability.

```js
javascriptCopy codevar app = getApp();
var result = "";
var num1 = "";
```

## Comments

- Code should include clear and concise comments to explain critical sections.
- Comments should be meaningful and not simply repeat the code.

```js
javascriptCopy code// Enable CORS to allow requests from all domains
CORS(app);
```

## Functions and Methods

- Function and method names should be clear and descriptive to indicate their purpose.
- Add appropriate comments to explain the function's purpose and parameters.

```js
javascriptCopy codefunction calculate(determinant) {
  // Calculate the result and update data
}
```

## Code Structure

- Use blank lines and empty lines between code blocks to organize code for better readability.
- Group related functionality together, such as placing all request-related code together and all user interface-related code together.

```js
javascriptCopy code// Functions related to requests
function save_bt() {
  // Send a save request
}

function del_bt() {
  // Send a delete request
}

// Functions related to user interface
function clickButton(event) {
  // Handle button clicks
}

function clear() {
  // Clear data
}
```

# wxml.

## Indentation and Formatting

- Use 2 or 4 spaces for indentation.
- Use proper indentation and formatting to make the structure of your WXML code clear and organized.

```xml

<view>
  <text>Sample WXML</text>
</view>
```

## Element Naming

- Use lowercase for element names.
- Use hyphen-separated words for multi-word element names, e.g., `<my-component>`.

```xml
xmlCopy code<button></button>
<custom-component></custom-component>
```

## Attributes

- Use lowercase for attribute names.
- Use double quotes for attribute values.

```xml
xmlCopy code
<image src="/images/pic.jpg" alt="Sample Image"></image>
```

## Comments

- Include comments to explain the purpose of specific elements or sections.
- Comments should be concise and meaningful.

```xml
xmlCopy code<!-- Header section -->
<view class="header">
  <text>Welcome to the App</text>
</view>
```

## Element Structure

- Properly nest elements to maintain a clear and logical structure.
- Use indentation to indicate element hierarchy.

```xml
xmlCopy code<view>
  <text>Parent Element</text>
  <view>
    <text>Child Element</text>
  </view>
</view>
```

## Use of Templates

- Utilize templates for code reusability and to keep the code DRY (Don't Repeat Yourself).
- Make use of named templates when necessary.

```xml
xmlCopy code<template name="message">
  <view>{{content}}</view>
</template>
```

# wxss.

## Formatting and Indentation

- Use 2 or 4 spaces for indentation.
- Add appropriate whitespace around code blocks and element tags to improve readability.

```css

.op {
  min-height: 100rpx;
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: flex-end;
  background-color: #eee;
  font-size: 48rpx;
}
```

## Naming Conventions

- Use lowercase letters and hyphens for naming elements and components to enhance readability.
- Add an appropriate `id` attribute to elements for reference in event handlers.

```css
cssCopy code.op {
  /* ... */
}

.infor {
  /* ... */
}
```

## Event Handling

- Add the correct event handlers to elements to respond to user interactions.
- Name event handler functions clearly and descriptively to indicate their purpose.

```css
javascriptCopy codeclear() {
  // Clear data and update the page
}
```

## Comments

- Include clear and concise comments in the code to explain key sections.
- Comments should be meaningful and not simply duplicate the code.

```css
cssCopy code/* Clear button */
.op {
  /* ... */
}
```

## Structure and Layout

- Organize the page using appropriate elements and layout to improve readability.
- Group related elements together, such as organizing the numeric keypad by rows.

```css
cssCopy code.btns > view {
  display: flex;
  /* ... */
}
```