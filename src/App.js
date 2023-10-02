/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import React from 'react';
import MainContainer from './containers/MainContainer';

const getPerson = async name => {
  let countryID
  try {
      const nationalizeResponse = await fetch("https://api.nationalize.io?name=" + name, {
          headers: {
              accept: "application/json",
          },
          body: null,
          method: "GET"
      })
      if (nationalizeResponse.ok) {
          const nationalizeJson = await nationalizeResponse.json()
          countryID = nationalizeJson.country[0].country_id
      }
  } catch (e) {
      console.log(e)
  }
  try {
      const agifyResponse = fetch(`https://api.agify.io?country_id=${countryID}&name=${name}`, {
          headers: {
              accept: "application/json",
          },
          body: null,
          method: "GET"
      })
      const genderizeResponse = fetch(`https://api.genderize.io?country_id=${countryID}&name=${name}`, {
          headers: {
              accept: "application/json",
          },
          body: null,
          method: "GET"
      })
      const responses = await Promise.all([agifyResponse, genderizeResponse])
      const responsesJson = await Promise.all(responses.map(resp => resp.json()))
      const person = {
          personName: name,
          country: countryID,
          age: responsesJson[0].age,
          gender: responsesJson[1].gender
      }
      return person
  } catch (e) {
      console.log(e)
  }
}

function App() {
  return (
    <div className="App">
      <MainContainer getPerson={getPerson}/>
    </div>
  );
}

export default App;
