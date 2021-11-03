import React from 'react';
import { StyleSheet, View, Button, Text, Modal } from 'react-native';

const ModalComponent = ({
    modalVisible,
    itemSelected,
    handleRemoveConfirm,
}) => {
    return (
        <Modal visible={modalVisible} animationType="slide">
            <View style={styles.modal}>
                <View>
                    <Text style={styles.modalText}>
                        Estas seguro que desea eliminar el siguiente elemento?
                    </Text>
                </View>
                <View>
                    <Text style={styles.modalItem}>{itemSelected.value}</Text>
                </View>
                <View>
                    <Button onPress={handleRemoveConfirm} title="Confirm" />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
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

export default ModalComponent;
