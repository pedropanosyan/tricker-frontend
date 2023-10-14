import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS, MARGIN, PADDING, RADIUS, SIZES, WEIGHTS} from "../../../constants/theme";
import {useState} from "react";

interface FilterButtonProps {
    name: string;
    selected: boolean;
}

const FilterButton = ({name, selected}: FilterButtonProps) => {

    const [isSelected, setIsSelected] = useState(selected)

    return (
        <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
            {isSelected ? (
                <LinearGradient style={styles.container} colors={[COLORS.lightBlue, COLORS.violet]}>
                        <Text style={styles.selectedText}>{name}</Text>
                </LinearGradient>
            ) : (
                <View style={styles.container}>
                    <Text style={styles.unselectedText}>{name}</Text>
                </View>
            )}
        </TouchableOpacity>

    )

}

export default FilterButton;

const styles = StyleSheet.create({
    container: {
        paddingVertical: PADDING.xSmall,
        paddingHorizontal: PADDING.medium,
        backgroundColor: COLORS.blackSecondary,
        borderRadius: RADIUS.large,
        marginHorizontal: 6,
    },
    selectedText: {
        fontSize: SIZES.xxSmall,
        color: COLORS.black,
        fontWeight: "700",
    },
    unselectedText: {
        fontSize: SIZES.xxSmall,
        color: COLORS.white,
        fontWeight: "400",
    }
})