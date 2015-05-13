var words = function(sentence) {
	var word_counts = {};
	var word_array = sentence.split(/\s/);
	for(i=0;i<word_array.length;i++){
		word_array[i].trim();
		if (word_array[i] === ""){
			continue;
		}
		if (isNaN(word_counts[word_array[i]])){
			word_counts[word_array[i]] = 1;
		}else{
			word_counts[word_array[i]]++;
		}	
	}
	return word_counts;
};

module.exports = words;
