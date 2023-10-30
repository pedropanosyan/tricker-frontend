import {StyleSheet, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import {Text} from "../../../styled-components/components.styles";
import styled from "rn-css";
import {theme} from "../../../styled-components/theme";
import {isNotTestHost} from "@expo/config-plugins/build/ios/utils/Xcodeproj";

interface FilterButtonProps {
    name: string;
    selected: boolean;
}

const FilterButton = ({name, selected}: FilterButtonProps) => {

    const [isSelected, setIsSelected] = useState(selected)

    return (
        <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
            {isSelected ? (
                    <LinearGradient style={styles.container} colors={[theme.lightBlue, theme.violet]}>
                            <Text color={theme.black} weight="700">{name}</Text>
                    </LinearGradient>
            ) : (
                <Container>
                    <Text weight="400">{name}</Text>
                </Container>
            )}
        </TouchableOpacity>

    )

}

export default FilterButton;

const Container = styled.View`
  padding: 8px 16px;
  background-color: ${theme.blackSecondary};
  border-radius: ${theme.radius.large};
  margin: 0 6px;
`;

const styles = StyleSheet.create({
    container: {
        paddingVertical: theme.spacing.xSmall,
        paddingHorizontal: theme.spacing.medium,
        backgroundColor: theme.blackSecondary,
        borderRadius: theme.radius.large,
        marginHorizontal: 6,
    }
})
