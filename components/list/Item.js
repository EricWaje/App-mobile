import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Item = ({ id, value, handleRemoveItem }) => {
    return (
        <View style={styles.item} key={id}>
            <Text style={styles.itemText}>{value}</Text>
            <TouchableOpacity onPress={() => handleRemoveItem(id)}>
                <View style={styles.buttonItem}>
                    <Text style={styles.cancelButton}>REMOVE</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
    buttonItem: {
        alignItems: 'center',
        fontSize: 15,
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
    },
    cancelButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Item;
