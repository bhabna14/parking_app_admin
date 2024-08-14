import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateFields = () => {
        let valid = true;
        if (username === '') {
            setUsernameError('Username is required');
            valid = false;
        } else {
            setUsernameError('');
        }

        if (password === '') {
            setPasswordError('Password is required');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            // Alert.alert('Login Successful', `Welcome, ${username}!`);
            navigation.navigate('Home');
        }
    };

    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>

            <View style={styles.inputContainer}>
                <Icon name="person-outline" size={20} color="#666" style={styles.icon} />
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="#666"
                    style={styles.input}
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}

            <View style={styles.inputContainer}>
                <Icon name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#666"
                    secureTextEntry={true}
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={validateFields}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitle: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        backgroundColor: '#fff',
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: '#333',
    },
    button: {
        backgroundColor: '#2e64e5',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});
