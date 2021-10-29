/* import { StatusBar } from 'expo-status-bar'; */
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    TouchableOpacity,
    StatusBar,
    FlatList,
    Modal,
} from 'react-native';

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
            <View style={styles.listContainer}>
                <FlatList
                    data={itemList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item} key={item.id}>
                            <Text style={styles.itemText}>{item.value}</Text>
                            <TouchableOpacity
                                onPress={() => handleRemoveItem(item.id)}
                            >
                                <View style={styles.buttonItem}>
                                    <Text style={styles.cancelButton}>
                                        REMOVE
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
            <Modal visible={modalVisible} animationType="slide">
                <View style={styles.modal}>
                    <View>
                        <Text style={styles.modalText}>
                            Estas seguro que desea eliminar el siguiente
                            elemento?
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.modalItem}>
                            {itemSelected.value}
                        </Text>
                    </View>
                    <View>
                        <Button onPress={handleRemoveConfirm} title="Confirm" />
                    </View>
                </View>
            </Modal>
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
    modal: {
        flex: 1,
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalText: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        padding: 10,
    },
    modalItem: {
        color: '#e8685f',
        fontSize: 35,
        marginTop: 20,
        marginBottom: 20,
    },
});
