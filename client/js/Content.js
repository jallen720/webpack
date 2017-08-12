export default class
{
    constructor(message)
    {
        this.message = message;
    }

    test()
    {
        return `content message: ${ this.message }`
    }
}
