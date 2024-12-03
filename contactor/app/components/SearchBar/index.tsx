
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface SearchBarProps {
    placeholder?: string;
    onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = "Search...",
    onSearch,
}) => {
    
    const [searchText, setSearchText] = useState("");

    const handleClear = () => {
        setSearchText("");
        onSearch("");
    };

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder={placeholder}
                value={searchText}
                onChangeText={(text) => {
                  setSearchText(text);
                  onSearch(text);
                }}
            />
            {searchText.length > 0 && (
                <TouchableOpacity style={styles.clearButton} onPress={handleClear} >
                    <Text style={styles.clearText}>x</Text>
                </TouchableOpacity>
            )}
        </View>
    )
};

export default SearchBar;