var file;
var file2;
function readFiles(file,file2)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                file = allText;
            }
        }
    }
    rawFile.send(null);
}
readFile('test.tileset','test.tilecols');
