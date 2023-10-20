import styled from "rn-css";
import {COLORS, RADIUS, SIZES, WEIGHTS} from "../../constants/theme";

export const HeaderBottomBorder = styled.View`
  border-bottom-color: ${COLORS.backgroundGray};
  border-bottom-width: 1px;
`;

export const SecondaryContainer = styled.View`
  flex: 1;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileIcon = styled.View`
  border-radius: ${RADIUS.large}px;
  border-width: 3px;
  border-color: ${COLORS.violet};
`;

export const ProjectSelection = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ProjectText = styled.Text`
  font-size: ${SIZES.small}px;
  font-weight: ${WEIGHTS.bold};
  color: white;
`;


export const ContainerView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;