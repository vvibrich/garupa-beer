import React from 'react';
import renderer from 'react-test-renderer';
import CardBeer from '../../components/ListProductsComponents/CardBeer';
import { product } from '../../mocks/product';

const mockProduct = product;

jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({ navigate: jest.fn() }),
}));

test('renders correctly', () => {
    const tree = renderer.create(
        <CardBeer product={mockProduct} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
