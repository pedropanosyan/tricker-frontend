import {Text, View} from "react-native";
import styles from "./styles";
import Ticket1 from "../../assets/icons/components/ticket/Ticket1";
import Ticket2 from "../../assets/icons/components/ticket/Ticket2";


const TicketCard = () => {

    return (
        <View>
            <View style={styles.statusContainer}>
                <View style={styles.status}>
                    <Text style={styles.statusText}>In progress</Text>
                </View>
            </View>
            <View style={styles.ticketContainer}>
                <Text style={styles.title}>Ticket long long very long name</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</Text>
                <View style={styles.footer}>
                    <View style={styles.footerIcon}>
                        <View style={styles.box1}>
                            <Ticket1 />
                        </View>
                        <View style={styles.box2}>
                            <Ticket2 />
                        </View>
                        <View style={styles.box3}>
                            <Text style={styles.number}>5</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.ticketId}>TKT-000</Text>
                    </View>
                </View>
            </View>
        </View>
    )


}

export default TicketCard;