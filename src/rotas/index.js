import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../componentes/paginas/home"
import Detalhes from "../componentes/paginas/detalhes"

export default function Rotas(){
    const stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name='Cinema em Casa' component={Home}/>                    
                <stack.Screen name='Detalhes' component={Detalhes}/>  
            </stack.Navigator>
        </NavigationContainer>
    )
}

