import React, { useEffect, useState } from "react";
import QRCode from "react-native-qrcode-svg";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {COLORS} from "../../../constants/theme";

type QRModalProps = {
    isVisible: boolean;
    onClose: () => void;
};

const QRModal = ({ isVisible, onClose }: QRModalProps) => {
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    return (
        <Modal
            visible={isVisible}
            transparent={true} // This makes the background transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>SCAN TO SHARE</Text>

                    <QRCode
                        value={currentUrl || "https://example.com"}
                        size={200}
                        backgroundColor="transparent"
                        logoSize={30}
                        logoMargin={2}
                        logoBorderRadius={15}
                        logoBackgroundColor="transparent"
                    />

                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds a semi-transparent background
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        width: 250,
    },
    modalText: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor:  COLORS.secondary,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    closeButtonText: {
        color: "white",
        fontSize: 16,
    },
});

export default QRModal;
