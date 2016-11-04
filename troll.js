
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
  v = v.replace(/\bkill you\b/gi, "I'M AN INTERNET TROLL")
  v = v.replace(/\bfuck you\b/gi, "I'M AN INTERNET TROLL")
  v = v.replace(/\bbuild the wall\b/gi, "I'M AN INTERNET TROLL")
  v = v.replace(/\bbuild that wall\b/gi, "I'M AN INTERNET TROLL")
  v = v.replace(/\byou suck\b/gi, "I'M AN INTERNET TROLL")
  v = v.replace(/\byou fucking suck\b/gi, "I'M AN INTERNET TROLL")
  v = v.replace(/\byou fuckin suck\b/gi, "I'M AN INTERNET TROLL")
  v = v.replace(/\bfollow back\b/gi, "I'M AN INTERNET TROLL")
  v = v.replace(/\bnot a scam\b/gi, "I'M AN INTERNET TROLL")
  v = v.replace(/\bfree iphone\b/gi, "I'M AN INTERNET TROLL")
	textNode.nodeValue = v;
}
