import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('displays image for each scoop from the server', async () => {
    render(<Options optionType='scoops' />);

    //find images
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    //confirm alt text of images
    const altText = scoopImages.map((el) => el.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('display image of each toping from the server', async () => {
    render(<Options optionType='toppings'/>);

    const toppings = await screen.findAllByRole('img', { name: /topping$/i });
    expect(toppings).toHaveLength(3);

    const toppingAltText = toppings.map((el) => el.alt);
    // expect(toppingAltText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping'])
});
