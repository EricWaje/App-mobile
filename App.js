/* import { StatusBar } from 'expo-status-bar'; */
import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import AddItem from './components/AddItem';
import List from './components/list/List';
import ModalComponent from './components/ModalComponent';

export default function App() {
    const [text, setText] = useState('');
    const [itemList, setItemList] = useState([]);
    const [itemSelected, setItemSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const handleChange = (value) => {
        setText(value);
    };

    const handleAddItem = () => {
        const item = {
            value: text,
            id: Math.random().toString(),
        };
        setItemList([...itemList, item]);
        setText('');
    };

    const handleRemoveItem = (id) => {
        setModalVisible(true);
        setItemSelected(itemList.find((item) => item.id === id));
    };

    const handleRemoveConfirm = () => {
        const filterlist = itemList.filter(
            (item) => item.id !== itemSelected.id
        );
        setItemList(filterlist);
        setModalVisible(false);
        setItemSelected({});
    };

    return (
        <View style={styles.container}>
            <AddItem
                text={text}
                handleChange={handleChange}
                handleAddItem={handleAddItem}
            />
            <View style={styles.listContainer}>
                <List itemList={itemList} handleRemoveItem={handleRemoveItem} />
            </View>
            <ModalComponent
                modalVisible={modalVisible}
                itemSelected={itemSelected}
                handleRemoveConfirm={handleRemoveConfirm}
            />
            <StatusBar barStyle="light-content" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        flex: 1,
        backgroundColor: '#181818',
    },
    listContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        marginTop: 30,
    },
});
