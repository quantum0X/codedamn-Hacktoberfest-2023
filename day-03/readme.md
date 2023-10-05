# React Counter Bug

## Problem Statement

Sam is learning React and wanted to create a counter that when clicked on a button increments 3 times. The code written by Sam has been shared with you.

Help Sam figure out why the code only increments by one count instead of 3.

```js
import { useState } from "react";

export default function Counter() {
	const [number, setNumber] = useState(0);

	return (
		<>
			<div className="card">
				<h1 data-testid="counter">{number}</h1>
				<button
					data-testid="incrementButton"
					onClick={() => {
						setNumber(number + 1);
						setNumber(number + 1);
						setNumber(number + 1);
					}}
				>
					Increment 3 times
				</button>
			</div>
		</>
	);
}
```

## Challenges

✅ When the page is rendered the counter should have the default value of 0

✅ Clicking on the increment Button once should set the counter value to 3

✅ Clicking on the increment Button twice should set the counter value to 3