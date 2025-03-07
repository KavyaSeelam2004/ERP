import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FormSuccess from './pages/FormSuccess';
import NewAdmissionForm from './components/NewAdmissionForm';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/departments" element={<FormSuccess />} />
      <Route path="/new-admission-form" element={<NewAdmissionForm />} />
      
    </Routes>
  );
};

export default App;
