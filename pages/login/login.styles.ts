import styled from "rn-css";
import { COLORS } from "../../constants/theme";

export const LoginButton = styled.TouchableOpacity`
  border: 1px solid #fff;
  border-radius: 20px; 
  padding: 12px; 
  width: 80vw;
  gap: 18px; 
  flex-direction: row;
  align-items: center;
  background-color: ${COLORS.backgroundGray};
`;