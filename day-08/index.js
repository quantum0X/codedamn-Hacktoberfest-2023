/**
 * Returns a string with the pet name
 * @param {string} petName
 * @param {string} [placeholder= "{Name}"]
 * @returns {string} Email String
 */
export function updateTemplateLiteral(petName, placeholder = "{NAME}") {
	const reminderTemplate =
		"{NAME} is due for another visit. Please call us so we can set up a new appointment. We look forward to seeing you and {NAME} soon.";
	return reminderTemplate.replaceAll(placeholder, petName);
}
// Test your code
console.log(updateTemplateLiteral("Leo"));
console.log(updateTemplateLiteral("Stella", "{NAME}"));
