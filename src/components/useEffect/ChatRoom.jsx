/**
 * Challenge 4 of 5: Fix a connection switch
 * 
 * In this example, the chat service in chat.js exposes two different APIs: 
 * createEncryptedConnection and createUnencryptedConnection. The root App 
 * component lets the user choose whether to use encryption or not, and then 
 * passes down the corresponding API method to the child ChatRoom component 
 * as the createConnection prop.
 * 
 * Notice that initially, the console logs say the connection is not encrypted.
 * Try toggling the checkbox on: nothing will happen. However, if you change
 * the selected room after that, then the chat will reconnect and enable
 * encryption (as you’ll see from the console messages). This is a bug. Fix the
 * bug so that toggling the checkbox also causes the chat to reconnect.
 */

import { useState, useEffect } from 'react';

const serverUrl = 'https://localhost:1234';

export default function ChatRoom({ roomId, createConnection }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, createConnection]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
    </>
  );
}
