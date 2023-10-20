import {StyleSheet, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS, MARGIN, PADDING, RADIUS, SIZES, WEIGHTS} from "../../../constants/theme";
import {useState} from "react";
import {Text} from "../../../styled-components/components.styles";
import styled from "rn-css";

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
                            <Text color={COLORS.black} weight="700">{name}</Text>
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
  background-color: ${COLORS.blackSecondary};
  border-radius: ${RADIUS.large};
  margin: 0 6px;
`;

const styles = StyleSheet.create({
    container: {
        paddingVertical: PADDING.xSmall,
        paddingHorizontal: PADDING.medium,
        backgroundColor: COLORS.blackSecondary,
        borderRadius: RADIUS.large,
        marginHorizontal: 6,
    }
})
