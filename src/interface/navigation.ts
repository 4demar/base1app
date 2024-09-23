import { NavigatorScreenParams } from "@react-navigation/native";

export type StackParamList = {
    Principal: undefined; // Tela Principal não recebe parâmetros
    DrawerNavigator: NavigatorScreenParams<DrawerParamList>; // DrawerNavigator não recebe parâmetros diretos
};

export type DrawerParamList = {
    Principal: undefined;
    InfoApp: undefined;
    Historico: undefined;
    ConfigApp: undefined;
};