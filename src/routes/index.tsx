import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListProducts from '../views/ListProducts/view';
import ProductDetail from '../views/ProductDetail/view';
import { Icon } from '@rneui/themed';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={ListProducts}
                    options={{
                        title: 'Garupa Beer',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerTitleAlign: 'center',
                        animation: 'fade',
                        headerStyle: {
                            backgroundColor: '#FFB900',
                        }
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={ProductDetail}
                    options={{
                        title: 'Garupa Beer',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerTitleAlign: 'center',
                        animation: 'fade',
                        headerStyle: {
                            backgroundColor: '#FFB900',
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}