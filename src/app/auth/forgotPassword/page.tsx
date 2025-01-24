'use client';
import React from 'react';
import * as Form from '@radix-ui/react-form';
// import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import Header from '../../components/header';

import FloatingLabelInput from '@/app/components/floatingLabelInput';

export default function ForgotPassword() {
  // const [showPassword, setShowPassword] = useState(false);
  // const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      <div className="flex-grow-1 d-flex align-items-center justify-content-center bg-primary bg-opacity-25 p-4">
        <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: '28rem' }}>
          <h1 className="text-center fw-bold mb-4 fs-4">
            Changez votre mot de passe
          </h1>

          <Form.Root className="mb-3">

            {/* <FloatingLabelInput 
              label="Nouveau mot de passe" 
              type="password"
              placeholder='Entre votre nouveau mot de passe' 
              showPasswordToggle={true}         
            /> */}

            <FloatingLabelInput 
              label="Confirmation de mot de passe" 
              type="password"
              placeholder='Entre votre mot de passe' 
              showPasswordToggle={true}         
            />

            <div className="d-flex justify-content-center">

              <Form.Submit asChild>
                <button 
                  className="btn btn-primary rounded-pill w-50"
                >
                  Valider
                </button>
              </Form.Submit>
            </div>

          </Form.Root>
          

          {/* <Form.Root className="mb-3">
            <Form.Field name="email" className="position-relative mb-9">
              <Form.Label className="position-absolute start-3 bg-white px-1 text-secondary" 
                style={{ top: '-0.45rem', fontSize: '0.875rem' }}>
                Nouveau mot de passe
              </Form.Label>
              <Form.Control asChild>
                <input
                  placeholder='Entrez votre nouveau mot de passe'
                  type={showPassword ? "text" : "password"}
                  className="form-control rounded-pill px-3 py-3"
                  required
                />
              </Form.Control>
              <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn position-absolute end-0 top-50 translate-middle-y border-0"
                >
                  {showPassword ? (
                    <EyeClosedIcon width={20} height={20} />
                  ) : (
                    <EyeOpenIcon width={20} height={20} />
                  )}
                </button>
            </Form.Field>
            
            <Form.Field name="password" className="position-relative mb-4">
              <div className="position-relative">
                <Form.Control asChild>
                  <input
                    type={showPasswordConfirm ? "text" : "password"}
                    placeholder='Entrez votre mot de passe'
                    className="form-control placeholder-muted fs-6 rounded-pill px-3 py-3"
                    required
                  />
                </Form.Control>
                <Form.Label className="position-absolute start-3 bg-white px-1 text-secondary" 
                  style={{ top: '-0.45rem', fontSize: '0.875rem' }}>
                  Confirmation de mot de passe
                </Form.Label>
                <button
                  type="button"
                  onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                  className="btn position-absolute end-0 top-50 translate-middle-y border-0"
                >
                  {showPasswordConfirm ? (
                    <EyeClosedIcon width={20} height={20} />
                  ) : (
                    <EyeOpenIcon width={20} height={20} />
                  )}
                </button>
              </div>
            </Form.Field>

            
          </Form.Root> */}
        </div>
      </div>
    </div>
  );
}