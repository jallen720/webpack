function writeLine(text)
{
    document.write(`${ text }<br>`);
}


function test()
{
    writeLine("test");
}


export { writeLine, test };
