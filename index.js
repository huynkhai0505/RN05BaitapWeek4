/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginScreen from './screen/login/LoginScreen';
import DataBindingScreen from './screen/databinding/DataBindingScreen';
import BaiTap from  './screen/baitap/BaiTap';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => BaiTap);
