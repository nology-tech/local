[09:17] Dan Forder
const mockFunction = jest.fn();

<TextField onChange={mockFunction}/>

[09:17] Dan Forder
customRender(<TextField onChange={mockFunction}/>)

[09:18] Dan Forder
type in the text field

[09:18] Dan Forder
check that mockFunction has been called
