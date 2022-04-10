import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [file, setFile] = useState(null);

  const submit = e => {
    e.preventDefault()
    console.log(file)
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData)
    fetch('/api/datas', {
      method: 'POST',
      body: formData
    }).then(res => console.log(res))
    .catch(err => console.log(err))
  }
  const filing = e => {
    setFile(e.target.files[0]);
  }

  return (
    <div>
      <form>
        <input type='text'
          value={name}
          onChange={e => setName(e.target.value)}/>
        <input type='file'
          onChange={e => filing(e)}/>
        <button onClick={e => submit(e)}>Submit</button>
      </form>
    </div>
  )
};

/* fix ver 17 -> 18 */
const root = createRoot(document.getElementById('root'));
root.render(<App />);
