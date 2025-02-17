import React, { useState } from 'react';

const MyComponent = () => {
  // Use useState hook to manage component state
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={handlePress} />
    </View>
  );
};

export default MyComponent;