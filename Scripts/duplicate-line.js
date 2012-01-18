/**
 * duplicate-line.js
 * 
 * Duplicates all lines in the current selection, or the current line,
 * and moves it up or down
 * 
 * setup:
 * - direction (string): 'up' or 'down' (defaults to down)
 */

action.titleWithContext = function(context, outError) {
	var range = context.selectedRanges[0];
	if (range.length > 0) {
		// Something is selected; check to see if the selection spans multiple lines
		if (context.lineStorage.lineNumberForIndex(range.location) !== context.lineStorage.lineNumberForIndex(range.location + range.length)) {
			return '@multiple';
		}
	}
	return null;
};

action.performWithContext = function(context, outError) {
	// Make sure that there's a direction parameter
	var direction = (typeof action.setup.direction === 'undefined' ? 'down' : action.setup.direction.toLowerCase());
	
	// Grab our current selected range
	var range = context.selectedRanges[0];
	// Check to see if the selection spans multiple lines
	var copyRange;
	if (range.length > 0) {
		// Grab the range for the lines our selection spans
		copyRange = context.lineStorage.lineRangeForRange(range);
	} else {
		copyRange = context.lineStorage.lineRangeForIndex(range.location);
	}
	
	// Grab text to duplicate
	var text = context.substringWithRange(copyRange);
	var selectionRange = null;
	// Save our line ending string for later use
	var br = context.textPreferences.lineEndingString;
	// If it doesn't end with a linebreak, make sure to prepend or append one (otherwise will overlap with other lines)
	var endsWithLinebreak = /^[\s\S]*?[\n\r]+$/.test(text);
	if (!endsWithLinebreak) {
		if (direction === 'up') {
			text = text + br;
			selectionRange = new Range(copyRange.location, copyRange.length + br.length);
		} else {
			text = br + text;
			selectionRange = new Range(copyRange.location + copyRange.length + br.length, copyRange.length);
		}
	} else {
		// No need to add linebreaks, but we do need to create our new selection range
		if (direction === 'up') {
			selectionRange = copyRange;
		} else {
			selectionRange = new Range(copyRange.location + copyRange.length, copyRange.length);
		}
	}
	
	// Create our text recipe, insert the string, and set the new selection
	var recipe = new CETextRecipe();
	if (direction === 'up') {
		recipe.insertAtIndex(copyRange.location, text);
	} else {
		recipe.insertAtIndex(copyRange.location + copyRange.length, text);
	}
	context.applyTextRecipe(recipe);
	context.selectedRanges = [selectionRange];
	return true;
};
