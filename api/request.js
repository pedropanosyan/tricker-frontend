import axios from 'axios';

const accessToken = "12jfigfg2h4g9"

export const getHello = async () => {
    const config = {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    };
    try {
        const response = await axios.get('http://localhost:8080/hello2');
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}