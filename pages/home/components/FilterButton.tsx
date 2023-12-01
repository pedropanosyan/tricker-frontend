import {StyleSheet, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import styled from "rn-css";
import {theme} from "../../../styled-components/theme";
import {isNotTestHost} from "@expo/config-plugins/build/ios/utils/Xcodeproj";
import {StyledBox, StyledTypography} from "../../../styled-components/styles";

interface FilterButtonProps {
    name: string;
    selected: boolean;
}

const FilterButton = ({name, selected}: FilterButtonProps) => {

    const [isSelected, setIsSelected] = useState(selected)

    return (
        <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
            {isSelected ? (
                    <LinearGradient style={{borderRadius: 40, paddingVertical: 8, paddingHorizontal: 16, marginHorizontal: 6}}
                                    colors={[theme.statusReview, theme.statusCompleted]}>
                            <StyledTypography variant="body1Bold" css={{ color: theme.black }}>{name}</StyledTypography>
                    </LinearGradient>
            ) : (
                <StyledBox css={{ padding: "8px 16px", backgroundColor: theme.grey700, borderRadius: "40px", marginHorizontal: "6px" }}>
                    <StyledTypography variant="body1">{name}</StyledTypography>
                </StyledBox>
            )}
        </TouchableOpacity>

    )

}

export default FilterButton;

const styles = StyleSheet.create({
    linearGradient: {
        marginHorizontal: 6,
    }
})