'use client';
import React from 'react';
import * as Form from '@radix-ui/react-form';
import Header from '../../components/header';
import '@/app/style.css';
import FloatingLabelInput from '@/app/components/floatingLabelInput';

export default function LoginPage() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      <div className="flex-grow-1 d-flex align-items-center justify-content-center bg-primary bg-opacity-25 p-4">
        <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: '28rem' }}>
          <h1 className="text-center fw-bold mb-4 fs-4">
            Connexion
          </h1>
          
          <Form.Root className="mb-3">
            <FloatingLabelInput 
              label='Email' 
              type='email' 
              placeholder='Entrez votre email'           
            />

            <FloatingLabelInput 
              label='Mot de passe' 
              type='password' 
              placeholder='Entrez votre mot de passe' 
              showPasswordToggle={true}          
            />

            <div className="d-flex justify-content-center">

              <Form.Submit asChild>
                <button 
                  className="btn btn-primary rounded-pill w-50"
                >
                  Se connecter
                </button>
              </Form.Submit>
            </div>
          </Form.Root>
        </div>
      </div>
    </div>
  );
}