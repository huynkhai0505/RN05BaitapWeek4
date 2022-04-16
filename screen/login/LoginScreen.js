import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles/StyleLogin'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.container_header}>
            <Text style={styles.container_header__text}>Register Now</Text>
          </View>

          <View style={styles.container_form_login}>
            <View style={styles.container_form_login_input}>
                <View style={styles.container_form_login_input_container}>
                    <Text>Email</Text>
                    <View style={styles.container_form_login_input_container_textinput}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <TextInput style={styles.container_form_login_input_container_textinput__input} />
                    </View>
                </View>

                <View style={styles.container_form_login_input_container, styles.margin_top_20}>
                    <Text>Password</Text>
                        <View style={styles.container_form_login_input_container_textinput}>
                            <FontAwesomeIcon icon={faLock}/>
                            <TextInput secureTextEntry style={styles.container_form_login_input_container_textinput__input} />
                        </View>
                </View>
            </View>
            <TouchableOpacity style={[styles.btn, styles.btn__primary, styles.margin_top_40]}>
                <Text style={styles.btn__primary__text}>Sign In </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.btn__second, styles.margin_top_20]}>
                <Text style={styles.btn__second__text}>Sign Up </Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}
