import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Item"
                    placeholderTextColor="#f7f7f7bb"
                />
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>ADD</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
                <View style={styles.item}>
                    <Text style={styles.itemText}>PC</Text>
                    <TouchableOpacity>
                        <View style={styles.buttonItem}>
                            <Text style={styles.cancelButton}>REMOVE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemText}>MONITOR</Text>
                    <TouchableOpacity>
                        <View style={styles.buttonItem}>
                            <Text style={styles.cancelButton}>REMOVE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemText}>NOTEBOOK</Text>
                    <TouchableOpacity>
                        <View style={styles.buttonItem}>
                            <Text style={styles.cancelButton}>REMOVE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemText}>TECLADO</Text>
                    <TouchableOpacity>
                        <View style={styles.buttonItem}>
                            <Text style={styles.cancelButton}>REMOVE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemText}>MOUSE</Text>
                    <TouchableOpacity>
                        <View style={styles.buttonItem}>
                            <Text style={styles.cancelButton}>REMOVE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: '#181818',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    input: {
        flex: 1,
        marginRight: 20,
        borderBottomColor: '#e8685f',
        borderBottomWidth: 1,
        marginBottom: 10,
        marginTop: 10,
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
        color: 'white',
    },
    button: {
        alignItems: 'center',
        fontSize: 15,
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#e8685f',
    },
    buttonItem: {
        alignItems: 'center',
        fontSize: 15,
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
    },
    textButton: {
        color: '#e8685f',
        fontSize: 20,
        fontWeight: 'bold',
    },
    cancelButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    listContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        marginTop: 30,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#e8685f',
        borderRadius: 10,
    },
    itemText: {
        color: 'white',
        fontSize: 23,
    },
});
