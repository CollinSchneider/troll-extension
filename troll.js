
walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:
		case 9:
		case 11:
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3:
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
  var v = textNode.nodeValue;

  var trollPhrases = ['kill you', 'fuck you', 'build the wall', 'build that wall', 'you suck', 'you fucking suck', 'you fuckin suck', 'follow back', 'follow me', 'not a scam', 'free iphone']
  for (var i = 0; i < trollPhrases.length; i++) {
    var phrase = trollPhrases[i]
    v = v.replace(new RegExp(phrase, 'gi'), "I'M AN INTERNET TROLL")
  }

	textNode.nodeValue = v;
}
