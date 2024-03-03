import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { Text, Card, Button, Badge } from '@rneui/themed';
import { getProductsRequest } from '../../store/Products/actions';
import { Product } from '../../models/product';

// import { Container } from './styles';

const ListProducts: React.FC = () => {
    const [beers, setBeers] = useState<Array<Product>>([]);
    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

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
                <View style={{height: '100%'}}>
                    <ActivityIndicator color="#222" size='large' style={{flex: 1, flexDirection: 'column', alignSelf: 'center'}}/>
                </View>
            ) : (
                <FlatList
                    data={beers}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item: product }: any) => (
                        <Card key={product.id} containerStyle={{ flexDirection: 'row', justifyContent: 'space-between', borderRadius: 15}}>
                            <TouchableOpacity onPress={() => navigation.navigate("Details", {
                                product: product
                            })}>
                                <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                                    <Image source={{ uri: product.image_url }} style={{ width: 100, height: 400 }} />
                                    <View style={{ flexDirection: 'column', marginLeft: 10, marginRight: 10}}>
                                        <View style={{ flexDirection: 'row', justifyContent:'space-between', paddingRight: 300}}>
                                            <Text h2 style={{color: '#FFB900'}}>{product.name}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent:'space-between', paddingRight: 300}}>
                                            <Text h3>{product.tagline}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent:'space-between', paddingRight: 200, marginTop: 20}}>
                                            <Badge value={`First Brewed in ${product.first_brewed}`} status='warning' />
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent:'space-between', paddingRight: 200, marginTop: 20}}>
                                            <Text style={{
                                                width: 190,
                                                height: 35,
                                                backgroundColor: "#FFB900",
                                                textAlign: 'center',
                                                paddingTop: 7,
                                                fontWeight: '700',
                                                color: '#FFF',
                                                borderRadius: 4
                                            }}>
                                                Tap on card to see more
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Card>
                    )}
                />)}
        </View>
    );
}

export default ListProducts;