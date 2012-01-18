/**
 * This action deletes the current line
 * 
 * Originally created by minimalweb, and ported to Espresso 2 by Pete Schaffner
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

action.performWithContext = function (context, outError) {
	// Grab our current selected range
	var range = context.selectedRanges[0];
	// Check to see if the selection spans multiple lines
	var deleteRange;
	if (range.length > 0) {
		// Grab the range for the lines our selection spans
		deleteRange = context.lineStorage.lineRangeForRange(range);
	} else {
		deleteRange = context.lineStorage.lineRangeForIndex(range.location);
	}
	
	// If on the last line of the doc, remove the line break prior to the line
	// This isn't strictly necessary, but it's nice to have
	if (context.lineStorage.lineNumberForIndex(deleteRange.location + deleteRange.length) === context.lineStorage.numberOfLines) {
		deleteRange = new Range(deleteRange.location - 1, deleteRange.length + 1);
	}
	
	// Create our recipe, add deleted range, and apply it
	var recipe  = new CETextRecipe();
	recipe.deleteRange(deleteRange);
	return context.applyTextRecipe(recipe);
};