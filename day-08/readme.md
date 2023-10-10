# Template Literals

## Descriptions
You're currently consulting a Pet Shop along with your Colleage Shannon. She wrote a template literal for the reminder email which will be sent the pet Owners as a reminder for their next visit after their current appointment as completed.

When testing the code Shannon has encountered a problem, the template literal is not being replaced in the second occurence of the string, can you help her out and fix the bug!

> Please make sure that you don't update the `reminderTemplate` string by mistake, the tests are written to direct string comparision.

**Code:**
```js
/**
 * Returns a string with the pet name
 * @param {string} petName
 * @param {string} [placeholder= "{Name}"]
 * @returns {string} Email String
 */
export function updateTemplateLiteral(petName, placeholder = "{NAME}") {
	const reminderTemplate =
		"{NAME} is due for another visit. Please call us so we can set up a new appointment. We look forward to seeing you and {NAME} soon.";
	return reminderTemplate.replace(placeholder, petName);
}
// Test your code
console.log(updateTemplateLiteral("Leo"));
console.log(updateTemplateLiteral("Stella", "{NAME}"));
```

## Challenges

✅ `updateTemplateLiteral()` should replace the petName in both the placeholders