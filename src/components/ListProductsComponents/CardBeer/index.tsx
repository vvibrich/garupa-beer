import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Text, Card, Badge } from '@rneui/themed';
import { Product } from '../../../models/product';
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { style } from './styles';

interface ProductDetailProps {
    product: Product;
}

const CardBeer = ({ product }: ProductDetailProps) => {

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    return (
        <Card key={product.id} containerStyle={style.card}>
            <TouchableOpacity onPress={() => navigation.navigate("Details", {
                product: product
            })}>
                <View style={style.view}>
                    <Image source={{ uri: product.image_url }} style={style.image} />
                    <View style={style.productContainer}>
                        <View style={style.productNameContainer}>
                            <Text h2 style={style.productNameText}>{product.name}</Text>
                        </View>
                        <View style={style.productTagline}>
                            <Text h3>{product.tagline}</Text>
                        </View>
                        <View style={style.badgeFirstBrewed}>
                            <Badge value={`First Brewed in ${product.first_brewed}`} status='warning' />
                        </View>
                        <View style={style.containerTap}>
                            <Text style={style.tapText}>
                                Tap on card to see more
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Card>
    );
}



export default CardBeer;