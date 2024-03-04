import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsRequest } from '../../store/Products/actions';
import { Product } from '../../models/product';
import CardBeer from '../../components/ListProductsComponents/CardBeer';
import Loading from '../../components/ListProductsComponents/Loading';


const ListProducts: React.FC = () => {
    const [beers, setBeers] = useState<Array<Product>>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsRequest());
    }, [dispatch]);

    const { loading, products } = useSelector((store: any) => store.products);

    useEffect(() => {
        if (!loading) {
            setBeers(products);
        }
    }, [loading, products]);
    return (
        <View style={{backgroundColor: '#FFB900'}} >
            {loading ? (
                <Loading />
            ) : (
                <FlatList
                    data={beers}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item: product }: any) => (
                        <CardBeer product={product}/>
                    )}
                />)}
        </View>
    );
}

export default ListProducts;