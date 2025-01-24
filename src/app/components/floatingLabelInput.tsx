'use client';
import React, { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { FloatingLabelInputProps } from '../types';


export default function FloatingLabelInput({ 
    label, 
    placeholder, 
    type, 
    options,
    button,
    showPasswordToggle = false 
  }: FloatingLabelInputProps) {

    const [showPassword, setShowPassword] = useState(false);


    const renderInput = () => {
       switch(type) {
         case 'select':
           return (
            <div>

                <Form.Control asChild>
                  <select 
                    className="form-control rounded-pill px-3 py-3"
                    required
                  >
                    {options?.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </Form.Control>
                {button}
            </div>
           );
         
         case 'password':
           return (
             <div className="">
               <Form.Control asChild>
                 <input
                   type={showPassword ? "text" : "password"}
                   placeholder={placeholder}
                   className="form-control rounded-pill px-3 py-3"
                   required
                 />
               </Form.Control>
               {showPasswordToggle && (
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
               )}
             </div>
           );
         
         default:
           return (
            <div>
                <Form.Control asChild>
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="form-control rounded-pill px-3 py-3"
                    required
                  />
                </Form.Control>
                  {button}
            </div>
           );
       }
     };
   
     return (
       
         <Form.Field name='' className="position-relative mb-9">
           <Form.Label 
             className="position-absolute start-3 bg-white px-1 text-secondary" 
             style={{ top: '-0.45rem', fontSize: '0.875rem' }}
           >
             {label}
           </Form.Label>
           {renderInput()}
        </Form.Field>
     );
   }
   