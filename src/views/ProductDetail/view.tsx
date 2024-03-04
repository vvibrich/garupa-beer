import React from 'react';
import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Text, Card, Button, Icon, Badge } from '@rneui/themed';
import { Product } from '../../models/product';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

// import { Container } from './styles';
interface ProductDetailProps {
    route:{
        params: {
            product: Product;
        }
    }
}

const ProductDetail: React.FC = ({ route }: ProductDetailProps | any) => {
    const product = route.params?.product
    return (
        <SafeAreaView style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <ScrollView style={{backgroundColor: '#222'}}>
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    alignSelf: 'center',
                    width: 420,
                    height: 400,
                    backgroundColor: '#FFF',
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50
                }}>
                    <Image source={{ uri: product.image_url, }} style={{ flex: 1, resizeMode: 'contain', marginTop: 10, width: null, height: null, paddingTop: 10 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent:'space-between',margin: 10, }}>
                        <Text h2 style={{color: '#FFB900', textDecorationLine: 'underline'}}>{product.name}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    // backgroundColor: '#FBCF03',
                    // borderRadius:10,
                    margin: 10,
                    padding: 10
                }}>
                        <Text h3 style={{color: '#FFF'}}>{product.tagline}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    borderRadius:5,
                    margin: 10,
                    padding: 10
                }}>
                    <Text h3 style={{ textDecorationLine: 'underline', color: '#FFB900'}}>About:</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    // backgroundColor: '#FBCF03',
                    borderRadius:5,
                    margin: 10,
                    padding: 10
                }}>
                        <Text style={{color: '#FFF', fontSize: 20, fontWeight: '500'}}>{product.description}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius:5,
                    margin: 10,
                    padding: 8
                }}>
                    <Text style={{color: '#222', backgroundColor: '#FBCF03', padding: 10, borderRadius: 10, fontSize: 20, fontWeight: '500', marginRight: 20}}>
                        <Icon type='ionicon' name='beer-outline' size={24} color={'#222'} style={{top: 2, marginRight: 5}} />
                        {product.volume.value} {product.volume.unit}
                    </Text>
                    <Text style={{color: '#222', backgroundColor: '#FBCF03', padding: 10, borderRadius: 10, fontSize: 20, fontWeight: '500', marginRight: 20}}>
                        <Icon type='ionicon' name='calendar-outline' size={24} color={'#222'} style={{top: 3, marginRight: 5}} />
                        {product.first_brewed}
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    borderRadius:5,
                    margin: 10,
                    padding: 8

                }}>
                    <Text style={{color: '#FFF', fontSize: 20, fontWeight: '500', marginRight: 20}}>Contributed by: {product.contributed_by}</Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ProductDetail;