'use client';

import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { submitRSVP } from '@/app/actions';

const RSVPForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const result = await submitRSVP(email);

            if (result?.success) {
                setStatus('success');
                setMessage('Thank you! Your RSVP has been received.');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(result?.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('A network error occurred. Please try again.');
        }
    };

    return (
        <div className="w-full max-w-[881px]">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row items-center gap-4 md:gap-6"
            >
                <div className="flex-1 relative flex items-center rounded-lg border border-black/5 bg-[#FDFDFD] shadow-sm w-full h-[60px] md:h-[81px]">
                    <Mail className="absolute left-4 md:left-6 text-gray-400 w-5 h-5 md:w-6 md:h-6" />

                    <input
                        type="email"
                        placeholder="Enter your work email to confirm your attendance"
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (status === 'error') setStatus('idle');
                            if (message) setMessage('');
                        }}
                        disabled={status === 'loading'}
                        className="
              w-full h-full
              pl-12 md:pl-16 pr-4 md:pr-6
              bg-transparent
              text-black
              placeholder:text-gray-400
              text-base md:text-[18px] font-medium
              border-none
              focus:outline-none focus:ring-0
            "
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="
            w-full md:w-[251px]
            h-[60px] md:h-[81px]
            rounded-lg
            text-white font-bold
            flex items-center justify-center
            transition-all duration-200
            disabled:opacity-70 disabled:cursor-not-allowed
            hover:brightness-110
            active:brightness-95
            shadow-[0_10px_30px_rgba(245,171,64,0.3)]
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F5AB40]
            shrink-0
            bg-[#F5AB40]
            text-lg md:text-[20px]
          "
                >
                    {status === 'loading' ? 'Processing...' : 'RSVP Now'}
                </button>
            </form>

            {message && (
                <p
                    className={`mt-4 text-center font-medium ${status === 'success' ? 'text-green-500' : 'text-red-500'
                        }`}
                >
                    {message}
                </p>
            )}
        </div>
    );

};

export default RSVPForm;
