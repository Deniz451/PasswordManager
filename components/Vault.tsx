import { StyleSheet, View, Text, Image } from 'react-native';
import COLORS from '../constants/color';

const Vault = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image 
                    source={require('../assets/icons/pinterest.png')}
                    style={styles.icon}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.vaultName}>Pinterest</Text>
                <Text style={styles.vaultDetails}>example@mail.com</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 50,
        flexDirection: 'row', 
        gap: 15,
    },
    iconContainer: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: COLORS.lightgray,
    },
    icon: {
        width: 30,
        height: 30,
        marginTop: 3,
        marginBottom: -1,
    },
    textContainer: {

    },
    vaultName: {
        fontSize: 20,
        color: COLORS.white,
    },
    vaultDetails: {
        fontSize: 12,
        color: COLORS.lightgray,
    },
})

export default Vault;