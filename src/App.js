import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [originalText, setOriginalText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [shift, setShift] = useState(1);

  const caesarCipher = (amount) => {
    // Wrap the amount
    if (amount < 0) {
      return caesarCipher(amount + 26);
    }
  
    // Make an output variable
    var output = "";
  
    // Go through each character
    for (var i = 0; i < originalText.length; i++) {
      // Get the character we'll be appending
      var c = originalText[i];
  
      // If it's a letter...
        // Get its code
        var code = originalText.charCodeAt(i);
  
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        }
  
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
      
  
      // Append
      output += c;
    }
  
    // All done!
    setEncryptedText(output);
  };

  const encrypt = () => {
    caesarCipher(shift)
  }

  const decrypt = () => {
    caesarCipher(-shift)
  }

  return (
    <div className="app">
      <div className="background-image"></div>
      <div className="cipher-container">
        <h1>Caesar Cipher App</h1>
        <textarea
          placeholder="Enter your text here..."
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
        />
        <input
          type='number'
          value={shift}
          id="shift-input"
          onChange={(e) => setShift(parseInt(e.target.value))}
        />
        <button onClick={encrypt}>Encrypt</button>
        <button onClick={decrypt}>Decrypt</button>
        <textarea
          placeholder="Encrypted text will appear here..."
          value={encryptedText}
          readOnly
        />
      </div>
    </div>
  );
};

export default App;
