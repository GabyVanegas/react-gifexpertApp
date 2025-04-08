import { GifItem } from "../../src/components/GifItem";
import { render } from '@testing-library/react';
import { expect, test, describe } from '@jest/globals';

describe('Pruebas en <GifItem/>', () => { 

    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'

    test('debe de hacer match con el snapshot', () => { 

        const { container } = render(<GifItem title={title} url={url}  />)
        expect(container).toMatchSnapshot();
     })

     test('debe de mostrar la imagen con el URL y el ALT indicado ', () => { 
        render(<GifItem title={title} url={url}/>)
        expect(screen.getByRole('img').src).toBe(url)

        

        expect(screen.getByRole('img').src).toBe(title)
      })
})