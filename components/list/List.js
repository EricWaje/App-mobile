import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Item from './Item';

const List = ({ itemList, handleRemoveItem }) => {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={itemList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Item {...item} handleRemoveItem={handleRemoveItem} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        marginTop: 30,
    },
});

export default List;
