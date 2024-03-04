import React from 'react';
import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Text, Icon } from '@rneui/themed';
import { Product } from '../../models/product';
import { style } from './styles';
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
        <SafeAreaView style={style.safeAreaContainer}>
            <ScrollView style={style.scroll}>
                <View style={style.beerImageContainer}>
                    <Image source={{ uri: product.image_url, }} style={style.beerImage} />
                </View>
                <View style={style.productNameContainer}>
                        <Text h2 style={style.productNameText}>{product.name}</Text>
                </View>
                <View style={style.productTaglineContainer}>
                        <Text h3 style={style.productTaglineText}>{product.tagline}</Text>
                </View>
                <View style={style.subtitleContainer}>
                    <Text h3 style={style.subtitleText}>About:</Text>
                </View>
                <View style={style.productDescriptionContainer}>
                        <Text style={style.productDescripionText}>{product.description}</Text>
                </View>
                <View style={style.productVolumeAndFirstBrewedContainer}>
                    <Text style={style.productVolumeText}>
                        <Icon type='ionicon' name='beer-outline' size={24} color={'#222'} style={style.productVolumeIcon} />
                        {product.volume.value} {product.volume.unit}
                    </Text>
                    <Text style={style.productFirstBrewedText}>
                        <Icon type='ionicon' name='calendar-outline' size={24} color={'#222'} style={style.productFirstBrewdIcon} />
                        {product.first_brewed}
                    </Text>
                </View>
                <View style={style.contributedByContainer}>
                    <Text style={style.contributedByText}>Contributed by: {product.contributed_by}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ProductDetail;