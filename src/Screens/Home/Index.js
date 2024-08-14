import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

const Index = () => {
    const [totalCount, setTotalCount] = useState(200);
    const [totalEntry, setTotalEntry] = useState(0);
    const [totalExit, setTotalExit] = useState(0);
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            setCurrentTime(now.toLocaleTimeString());
            setCurrentDate(now.toLocaleDateString(undefined, options));
        };

        const intervalId = setInterval(updateDateTime, 1000);

        // Initial call to set the current date and time immediately on load
        updateDateTime();

        return () => clearInterval(intervalId);
    }, []);

    const handleEntry = () => {
        if (totalCount > 0) {
            setTotalCount(totalCount - 1);
            setTotalEntry(totalEntry + 1);
        }
    };

    const handleExit = () => {
        if (totalCount < 200) {
            setTotalCount(totalCount + 1);
            setTotalExit(totalExit + 1);
        }
    };

    return (
        <LinearGradient colors={['#ed9a5f', '#ed8840', '#b85006']} style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.header}>VIP Car Parking</Title>
                    <Paragraph style={styles.subHeader}>Rr4q+Q3g, Puri Odisha, 752002</Paragraph>
                    <View style={styles.dateTimeContainer}>
                        <Text style={styles.date}>{currentDate}</Text>
                        <Text style={styles.time}>{currentTime}</Text>
                    </View>
                    <View style={styles.countContainer}>
                        <Text style={styles.title}>Total Available: {totalCount}</Text>
                        <Text style={styles.subtitle}>Total Entry: {totalEntry}</Text>
                        <Text style={styles.subtitle}>Total Exit: {totalExit}</Text>
                    </View>
                </Card.Content>
            </Card>
            <Button
                mode="contained"
                onPress={handleEntry}
                disabled={totalCount === 0}
                style={[styles.button, totalCount === 0 && styles.buttonDisabled]}
                contentStyle={styles.buttonContent}
                labelStyle={styles.buttonText} // Add labelStyle here
            >
                Entry
            </Button>
            <Button
                mode="contained"
                onPress={handleExit}
                disabled={totalCount === 200}
                style={[styles.button, styles.exitButton, totalCount === 200 && styles.buttonDisabled]}
                contentStyle={styles.buttonContent}
                labelStyle={styles.buttonText} // Add labelStyle here
            >
                Exit
            </Button>
        </LinearGradient>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
        padding: 20,
    },
    card: {
        width: '90%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: '#fff',
        marginBottom: 30
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#051d5f',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 20,
        color: '#051d5f',
        marginBottom: 20,
        textAlign: 'center',
    },
    dateTimeContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    date: {
        fontSize: 18,
        color: '#051d5f',
        fontWeight: 'bold',
    },
    time: {
        fontSize: 20,
        color: '#051d5f',
        fontWeight: 'bold',
    },
    countContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#051d5f',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#051d5f',
        marginBottom: 10,
    },
    button: {
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 8,
        width: '90%'
    },
    buttonDisabled: {
        backgroundColor: '#cccccc',
    },
    buttonContent: {
        paddingVertical: 10,
    },
    exitButton: {
        backgroundColor: '#ff5c5c',
    },
    buttonText: {
        fontSize: 18, // Adjust the font size here
        fontWeight: 'bold',
    },
});
