import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Item from './Item';

const List = ({ itemList, handleRemoveItem }) => {
    return (
        <FlatList
            data={itemList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Item {...item} handleRemoveItem={handleRemoveItem} />
            )}
        />
    );
};

export default List;
