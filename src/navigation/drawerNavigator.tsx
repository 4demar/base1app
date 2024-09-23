import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from '../interface/navigation';
import ScreenPrincipal from '../screen/principal';
import Historico from '../screen/historico';
import InfoApp from '../screen/infoApp';
import ConfigApp from '../screen/configApp';

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {

    return (
        <Drawer.Navigator initialRouteName={'Principal'}>
            <Drawer.Screen name='Principal' component={ScreenPrincipal} />
            <Drawer.Screen name='Historico' component={Historico} />

            <Drawer.Screen name='InfoApp' component={InfoApp} />
            <Drawer.Screen name='ConfigApp' component={ConfigApp} />
        </Drawer.Navigator>
    )
}