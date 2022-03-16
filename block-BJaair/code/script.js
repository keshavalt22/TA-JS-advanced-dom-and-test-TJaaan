let root = document.querySelector("ul");

function addQuotes(){
        let li = document.createElement("li");
        let input = document.createElement("input");
        let input = document.createElement("input");
        input.innerText = quotes[index].quoteText;
        cite.innerText = quotes[index].quoteAuthor;
        li.append(blockquote,cite); 

        root.append(li);
}