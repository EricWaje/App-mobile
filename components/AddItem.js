import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
} from 'react-native';

const AddItem = ({ text, handleChange, handleAddItem }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Item"
                placeholderTextColor="#f7f7f7bb"
                value={text}
                onChangeText={handleChange}
            />
            <TouchableOpacity onPress={handleAddItem}>
                <View style={styles.button}>
                    <Text style={styles.textButton}>ADD</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
    textButton: {
        color: '#e8685f',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default AddItem;
