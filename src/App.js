import React, { useState, useEffect } from 'react'
import './App.css'
import { Grid, Button } from '@mui/material'
import Teeth from './components/Teeth'
import Saved from './services/saved'
import { Unity, useUnityContext } from 'react-unity-webgl'

function App() {
  const { isLoaded, loadingProgression , addEventListener, removeEventListener, sendMessage, unityProvider } = useUnityContext({
    loaderUrl: 'assets/Teeth.loader.js',
    dataUrl: 'assets/Teeth.data',
    frameworkUrl: 'assets/Teeth.framework.js',
    codeUrl: 'assets/Teeth.wasm',
  });
  const [ items, setItems ] = useState([])

  const savedData = (input) => {
    setItems(input)
    Saved.saveJson(input)
    
    const teethInfo = {
      Teeths: input,
    }
    const strArray = JSON.stringify(teethInfo)
    sendMessage("Container", "SettingTeethArrayToUnity", strArray)
  }

  const getMessageFromUnity = (array) => {
    const info = JSON.parse(array)
    if (info.Teeths) {
      const input = info.Teeths
      setItems(input)
      Saved.saveJson(input)
    }
  }

  useEffect(() => {
    const saved = Saved.getJson()
    setItems(saved)
  }, [])

  const startInit = () => {
    const saved = Saved.getJson()
    const teethInfo = {
      Teeths: saved,
    }
    const strArray = JSON.stringify(teethInfo)
    sendMessage("Container", "SettingTeethArrayToUnity", strArray)
  }

  useEffect(() => {
    addEventListener("TeethArray", getMessageFromUnity)
    addEventListener("StartInit", startInit)
    return () => {
      removeEventListener("TeethArray", getMessageFromUnity)
      removeEventListener("StartInit", startInit)
    }
  }, [sendMessage, addEventListener, removeEventListener])

  return (
    <div className="App">
      <Grid container style={{
        backgroundColor: '#acccff',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
      }}>
        <Grid item xs={4} container>
          <Teeth 
            items={items}
            setItems={savedData}
          />
        </Grid>
        <Grid item xs={6} container>
          <Unity 
              style={{ 
                visibility: isLoaded ? "visible" : "hidden",
                minHeight: '40vh',
              }}
              className={'unity-window'} 
              unityProvider={unityProvider} 
            />
        </Grid>
        <Grid item xs={4}>
          {JSON.stringify(items)}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
