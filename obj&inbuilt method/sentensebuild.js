const sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",
    buildSentence: function() 
    {
        let build= this.subject + " " + this.verb + " " + this.object;
        return build;
    },
    updateProperty : function(sub,obj)
    {
        if(this[sub] == undefined){
            return "Invalid property"
        }else{
            this[sub] = obj;
            return this.buildSentence();
        }
    }
};
console.log(sentenceBuilder.buildSentence());
console.log(sentenceBuilder.updateProperty("subject","The cat"));